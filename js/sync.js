const Sync = {
  status: 'idle',
  lastError: '',
  lastSyncAt: 0,
  pushTimer: null,

  getConfig() {
    return window.SYNC_CONFIG || (typeof SYNC_CONFIG !== 'undefined' ? SYNC_CONFIG : null);
  },

  isConfigured() {
    const c = this.getConfig();
    if (!c) return false;
    return !!c.enabled &&
      !!c.supabaseUrl &&
      !String(c.supabaseUrl).includes('YOUR_PROJECT') &&
      !!c.supabaseAnonKey &&
      !String(c.supabaseAnonKey).includes('YOUR_ANON') &&
      String(c.supabaseAnonKey).length > 20;
  },

  configHint() {
    const c = this.getConfig();
    if (!c) return 'файл js/sync-config.js не завантажено';
    if (!c.enabled) return 'enabled: false у sync-config.js';
    if (!c.supabaseUrl || String(c.supabaseUrl).includes('YOUR_PROJECT')) return 'не вказано supabaseUrl';
    if (!c.supabaseAnonKey || String(c.supabaseAnonKey).includes('YOUR_ANON')) return 'не вказано supabaseAnonKey';
    return '';
  },

  getSyncCode() {
    return localStorage.getItem('tpSyncCode') || '';
  },

  hasSyncCode() {
    return !!this.getSyncCode();
  },

  async hashCode(code) {
    const normalized = String(code).trim().toLowerCase();
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(normalized));
    return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
  },

  exportPayload() {
    return {
      v: 1,
      revision: Number(localStorage.getItem('tpRevision') || 0),
      learned: [...Storage.learned],
      phraseWeights: Storage.phraseWeights,
      phraseProgress: Storage.phraseProgress,
      quizStats: Storage.quizStats
    };
  },

  mergePhraseProgress(local, remote) {
    const keys = new Set([
      ...Object.keys(local || {}),
      ...Object.keys(remote || {})
    ]);
    const out = {};
    keys.forEach(k => {
      const l = local[k] || { streak: 0, clean: 0, hinted: 0, errors: 0, lastType: 0 };
      const r = remote[k] || { streak: 0, clean: 0, hinted: 0, errors: 0, lastType: 0 };
      const streak = Math.max(l.streak || 0, r.streak || 0);
      out[k] = {
        streak,
        clean: Math.max(l.clean || 0, r.clean || 0),
        hinted: Math.max(l.hinted || 0, r.hinted || 0),
        errors: Math.max(l.errors || 0, r.errors || 0),
        lastType: streak >= (l.streak || 0) ? (l.lastType || 0) : (r.lastType || 0)
      };
      if (out[k].streak >= STREAK_TO_LEARN) out[k].lastType = 1;
    });
    return out;
  },

  mergeWeights(local, remote) {
    const out = { ...local };
    Object.entries(remote || {}).forEach(([k, w]) => {
      const lw = out[k];
      if (lw === undefined) out[k] = w;
      else if (w === 0 || lw === 0) out[k] = 0;
      else out[k] = Math.max(Number(lw) || 0, Number(w) || 0);
    });
    return out;
  },

  mergeStats(local, remote) {
    const l = local || {};
    const r = remote || {};
    return {
      total: (l.total || 0) + (r.total || 0),
      correct: (l.correct || 0) + (r.correct || 0),
      clean: (l.clean || 0) + (r.clean || 0),
      hinted: (l.hinted || 0) + (r.hinted || 0),
      wrong: (l.wrong || 0) + (r.wrong || 0)
    };
  },

  applyPayload(payload) {
    if (!payload) return;
    Storage.learned = new Set(payload.learned || []);
    Storage.phraseWeights = payload.phraseWeights || {};
    Storage.phraseProgress = payload.phraseProgress || {};
    Storage.quizStats = payload.quizStats || { total: 0, correct: 0, clean: 0, hinted: 0, wrong: 0 };

    PHRASES.forEach((_, i) => {
      const p = Storage.getProgress(i);
      if (p.streak >= STREAK_TO_LEARN) {
        Storage.learned.add(i);
        Storage.phraseWeights[i] = 0;
      }
    });
    Storage.saveLocalOnly();
    localStorage.setItem('tpRevision', String(payload.revision || Date.now()));
  },

  mergePayload(local, remote) {
    if (!remote) return local;
    if (!local) return remote;
    const learned = [...new Set([...(local.learned || []), ...(remote.learned || [])])];
    const phraseProgress = this.mergePhraseProgress(local.phraseProgress, remote.phraseProgress);
    const phraseWeights = this.mergeWeights(local.phraseWeights, remote.phraseWeights);
    const quizStats = this.mergeStats(local.quizStats, remote.quizStats);
    const revision = Math.max(local.revision || 0, remote.revision || 0) + 1;
    return { v: 1, revision, learned, phraseProgress, phraseWeights, quizStats };
  },

  apiHeaders() {
    const c = this.getConfig();
    return {
      apikey: c.supabaseAnonKey,
      Authorization: 'Bearer ' + c.supabaseAnonKey,
      'Content-Type': 'application/json'
    };
  },

  async fetchRemote(syncId) {
    const c = this.getConfig();
    const url = c.supabaseUrl.replace(/\/$/, '') +
      '/rest/v1/progress?sync_id=eq.' + encodeURIComponent(syncId) +
      '&select=payload,updated_at';
    const res = await fetch(url, { headers: this.apiHeaders() });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const rows = await res.json();
    if (!rows.length) return null;
    return { payload: rows[0].payload, updatedAt: rows[0].updated_at };
  },

  async pushRemote(syncId, payload) {
    const c = this.getConfig();
    const url = c.supabaseUrl.replace(/\/$/, '') + '/rest/v1/progress';
    const body = {
      sync_id: syncId,
      payload,
      updated_at: new Date().toISOString()
    };
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        ...this.apiHeaders(),
        Prefer: 'resolution=merge-duplicates'
      },
      body: JSON.stringify(body)
    });
    if (!res.ok) {
      const errText = await res.text();
      throw new Error('HTTP ' + res.status + ': ' + errText.slice(0, 120));
    }
  },

  setStatus(status, error) {
    this.status = status;
    this.lastError = error || '';
    if (status === 'ok') this.lastSyncAt = Date.now();
    this.updateSyncUI();
  },

  schedulePush() {
    if (!this.isConfigured() || !this.hasSyncCode()) return;
    clearTimeout(this.pushTimer);
    this.pushTimer = setTimeout(() => this.push(), 2000);
  },

  bumpRevision() {
    const rev = Number(localStorage.getItem('tpRevision') || 0) + 1;
    localStorage.setItem('tpRevision', rev);
    return rev;
  },

  async push() {
    if (!this.isConfigured() || !this.hasSyncCode()) return;
    try {
      this.setStatus('syncing');
      const syncId = await this.hashCode(this.getSyncCode());
      const payload = this.exportPayload();
      payload.revision = Number(localStorage.getItem('tpRevision') || payload.revision || 0);
      await this.pushRemote(syncId, payload);
      this.setStatus('ok');
    } catch (e) {
      console.warn('Sync push failed', e);
      this.setStatus('error', e.message);
    }
  },

  async pull() {
    if (!this.isConfigured() || !this.hasSyncCode()) return false;
    try {
      this.setStatus('syncing');
      const syncId = await this.hashCode(this.getSyncCode());
      const remote = await this.fetchRemote(syncId);
      const local = this.exportPayload();

      if (!remote) {
        await this.pushRemote(syncId, local);
        this.setStatus('ok');
        return true;
      }

      const merged = this.mergePayload(local, remote.payload);
      merged.revision = Math.max(local.revision || 0, remote.payload?.revision || 0) + 1;
      this.applyPayload(merged);
      await this.pushRemote(syncId, merged);
      this.setStatus('ok');
      return true;
    } catch (e) {
      console.warn('Sync pull failed', e);
      this.setStatus('error', e.message);
      return false;
    }
  },

  async enableSyncCode(code) {
    if (!code || code.trim().length < 4) {
      alert('Код синхронізації — мінімум 4 символи');
      return false;
    }
    if (!this.isConfigured()) {
      alert('Спочатку увімкни Supabase у js/sync-config.js (див. supabase/schema.sql)');
      return false;
    }
    localStorage.setItem('tpSyncCode', code.trim());
    const ok = await this.pull();
    if (ok) {
      updateProgress();
      renderCards();
      if (currentTab === 'stats') renderStats();
    }
    return ok;
  },

  disableSync() {
    localStorage.removeItem('tpSyncCode');
    this.setStatus('idle');
    if (currentTab === 'stats') renderStats();
  },

  async initOnBoot() {
    if (!this.isConfigured() || !this.hasSyncCode()) {
      this.updateSyncUI();
      return;
    }
    await this.pull();
    updateProgress();
    renderCards();
  },

  updateSyncUI() {
    const el = document.getElementById('sync-status');
    if (!el) return;
    const configured = this.isConfigured();
    const active = this.hasSyncCode();
    const labels = {
      idle: configured ? (active ? '☁️ Код збережено — натисни «Завантажити» або пройди тест' : '☁️ Введи код синхронізації') : '☁️ Supabase не налаштовано' + (this.configHint() ? ' (' + this.configHint() + ')' : ''),
      syncing: '⏳ Синхронізація…',
      ok: '✅ Синхронізовано' + (this.lastSyncAt ? ' · ' + new Date(this.lastSyncAt).toLocaleTimeString() : ''),
      error: '❌ Помилка: ' + (this.lastError || 'невідома')
    };
    el.textContent = labels[this.status] || labels.idle;
    el.className = 'sync-status sync-' + this.status;
  }
};

async function saveSyncCode() {
  const input = document.getElementById('sync-code-input');
  if (!input) return;
  await Sync.enableSyncCode(input.value);
  input.value = '';
}

async function syncNow() {
  if (!Sync.hasSyncCode()) {
    alert('Спочатку збережи код синхронізації');
    return;
  }
  Storage.save();
  await Sync.push();
  updateProgress();
  renderCards();
}

function disableCloudSync() {
  if (!confirm('Вимкнути хмарну синхронізацію на цьому пристрої? Локальний прогрес залишиться.')) return;
  Sync.disableSync();
}
