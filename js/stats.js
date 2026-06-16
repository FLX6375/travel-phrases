function renderStats() {
  const counts = Storage.countByMasteryType();
  const errorCount = Storage.getErrorPhraseIndices().length;
  const newCount = Storage.getNewPhraseIndices().length;
  const accuracy = Storage.quizStats.total
    ? Math.round(Storage.quizStats.correct / Storage.quizStats.total * 100)
    : 0;
  const avgTime = Storage.formatAvgTime(Storage.getGlobalAvgMs());

  document.getElementById('stats-grid').innerHTML = `
    <div class="stat-card"><div class="stat-num">${TOTAL}</div><div class="stat-label">Всього фраз</div></div>
    <div class="stat-card"><div class="stat-num" style="color:var(--green)">${Storage.learned.size}</div><div class="stat-label">✅ Вивчено (3× без підказок)</div></div>
    <div class="stat-card"><div class="stat-num" style="color:var(--cyan,#5bc0eb)">${newCount}</div><div class="stat-label">✨ Нові (ще не в тесті)</div></div>
    <div class="stat-card"><div class="stat-num" style="color:var(--yellow)">${counts.type2}</div><div class="stat-label">💡 З підказкою</div></div>
    <div class="stat-card"><div class="stat-num" style="color:var(--red)">${counts.type3}</div><div class="stat-label">❌ З помилками</div></div>
    <div class="stat-card"><div class="stat-num">${Math.round(Storage.learned.size / TOTAL * 100)}%</div><div class="stat-label">Прогрес</div></div>
    <div class="stat-card"><div class="stat-num" style="color:var(--yellow)">${accuracy}%</div><div class="stat-label">Точність відповідей</div></div>
    <div class="stat-card"><div class="stat-num" style="color:var(--accent)">${avgTime}</div><div class="stat-label">⏱️ Середній час відповіді</div></div>
  `;

  const masteryLegend = document.getElementById('mastery-legend');
  if (masteryLegend) {
    masteryLegend.innerHTML = `
      <p style="font-size:.82rem;color:var(--muted);line-height:1.6;margin-bottom:12px;">
        <strong style="color:var(--green)">Рівень 1</strong> — правильно без підказок.
        3 рази підряд → «вивчено».<br>
        <strong style="color:var(--yellow)">Рівень 2</strong> — правильно, але була підказка (серія скидається).<br>
        <strong style="color:var(--red)">Рівень 3</strong> — помилка (фраза потрапляє в повторення).
        Зараз з помилками: <strong>${errorCount}</strong>.
      </p>`;
  }

  const timingEl = document.getElementById('phrase-timing-stats');
  if (timingEl) {
    const timed = Storage.getPhrasesWithTiming(25);
    if (!timed.length) {
      timingEl.innerHTML = '<p style="font-size:.82rem;color:var(--muted)">Пройди тест — тут з\'явиться середній час по фразах.</p>';
    } else {
      timingEl.innerHTML = timed.map(({ p, i, avg, count }) => `
        <div class="timing-row" onclick="openModal(${i})" title="Відкрити фразу">
          <span class="timing-phrase">${escapeHtml(p.en.length > 42 ? p.en.slice(0, 42) + '…' : p.en)}</span>
          <span class="timing-val">${Storage.formatAvgTime(avg)}</span>
          <span class="timing-count">${count}×</span>
        </div>`).join('');
    }
  }

  document.getElementById('cat-stats').innerHTML = Object.entries(CATEGORIES).map(([key, label]) => {
    const tc = PHRASES.filter(p => p.cat === key).length;
    const lc = PHRASES.filter((p, i) => p.cat === key && Storage.learned.has(i)).length;
    const pct = tc ? Math.round(lc / tc * 100) : 0;
    return `<div class="category-stat">
      <span style="font-size:.85rem;min-width:140px">${label}</span>
      <div class="cat-bar-wrap"><div class="cat-bar" style="width:${pct}%"></div></div>
      <span style="font-size:.8rem;color:var(--muted);min-width:60px;text-align:right">${lc}/${tc}</span>
    </div>`;
  }).join('');

  renderSyncPanel();
}

function renderSyncPanel() {
  const panel = document.getElementById('sync-panel');
  if (!panel) return;
  const configured = typeof Sync !== 'undefined' && Sync.isConfigured();
  const hasCode = typeof Sync !== 'undefined' && Sync.hasSyncCode();
  panel.innerHTML = `
    <h3 style="font-size:.9rem;color:var(--muted);margin-bottom:10px;font-weight:500;">☁️ Синхронізація між пристроями</h3>
    <div class="sync-panel-inner">
      <p class="sync-help">Один <strong>код синхронізації</strong> на телефоні та комп'ютері — прогрес спільний.
        ${configured ? '' : ' Потрібно один раз налаштувати Supabase (файл <code>supabase/schema.sql</code>).'}</p>
      <div class="sync-row">
        <input type="password" id="sync-code-input" class="sync-input" placeholder="Твій код (напр. my-travel-2026)" autocomplete="off" ${hasCode ? 'disabled' : ''}>
        <button class="btn btn-primary" onclick="saveSyncCode()" ${hasCode ? 'disabled' : ''}>Зберегти код</button>
      </div>
      <div class="sync-actions">
        <button class="btn btn-ghost" onclick="Sync.pull().then(() => { updateProgress(); renderCards(); renderStats(); })" ${!hasCode ? 'disabled' : ''}>⬇️ Завантажити</button>
        <button class="btn btn-ghost" onclick="syncNow()" ${!hasCode ? 'disabled' : ''}>⬆️ Відправити</button>
        ${hasCode ? '<button class="btn btn-ghost" onclick="disableCloudSync()" style="color:var(--red)">Вимкнути</button>' : ''}
      </div>
      <div id="sync-status" class="sync-status sync-idle"></div>
    </div>`;
  if (typeof Sync !== 'undefined') Sync.updateSyncUI();
}
