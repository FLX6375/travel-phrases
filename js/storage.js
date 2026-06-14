const STREAK_TO_LEARN = 3;

function safeJsonParse(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch (e) {
    console.warn('Storage: corrupted data for', key, '- reset to default');
    localStorage.removeItem(key);
    return fallback;
  }
}

function defaultProgress() {
  return { streak: 0, clean: 0, hinted: 0, errors: 0, lastType: 0 };
}

const Storage = {
  learned: new Set(safeJsonParse('tpLearned3', [])),
  phraseWeights: safeJsonParse('tpWeights3', {}),
  phraseProgress: safeJsonParse('tpProgress4', {}),
  quizStats: safeJsonParse('tpQuizStats', { total: 0, correct: 0, clean: 0, hinted: 0, wrong: 0 }),

  saveLocalOnly() {
    localStorage.setItem('tpLearned3', JSON.stringify([...this.learned]));
    localStorage.setItem('tpWeights3', JSON.stringify(this.phraseWeights));
    localStorage.setItem('tpProgress4', JSON.stringify(this.phraseProgress));
    localStorage.setItem('tpQuizStats', JSON.stringify(this.quizStats));
  },

  save() {
    this.saveLocalOnly();
    if (typeof Sync !== 'undefined' && Sync.isConfigured() && Sync.hasSyncCode()) {
      localStorage.setItem('tpRevision', String(Date.now()));
      Sync.schedulePush();
    }
  },

  getProgress(idx) {
    if (!this.phraseProgress[idx]) this.phraseProgress[idx] = defaultProgress();
    return this.phraseProgress[idx];
  },

  /** 1 = без помилок і підказок, 2 = без помилок але з підказкою, 3 = з помилкою */
  getMasteryType(idx) {
    const p = this.getProgress(idx);
    if (this.learned.has(idx) && p.streak >= STREAK_TO_LEARN) return 1;
    if (p.lastType === 3 || p.errors > 0 && !this.learned.has(idx)) return 3;
    if (p.lastType === 2 || p.hinted > 0) return 2;
    if (p.clean > 0 || p.lastType === 1) return 1;
    return 0;
  },

  hasErrors(idx) {
    const p = this.getProgress(idx);
    return p.errors > 0 && !this.learned.has(idx);
  },

  getErrorPhraseIndices() {
    return PHRASES.map((_, i) => i).filter(i => this.hasErrors(i));
  },

  recordAnswer(correct) {
    this.quizStats.total++;
    if (correct) this.quizStats.correct++;
    this.save();
  },

  recordPhraseAnswer(idx, correct, usedHint) {
    const p = this.getProgress(idx);
    let answerType;

    if (!correct) {
      answerType = 3;
      p.errors++;
      p.streak = 0;
      p.lastType = 3;
      this.learned.delete(idx);
      this.phraseWeights[idx] = 3;
      this.quizStats.wrong = (this.quizStats.wrong || 0) + 1;
    } else if (usedHint) {
      answerType = 2;
      p.hinted++;
      p.streak = 0;
      p.lastType = 2;
      this.learned.delete(idx);
      if (!this.phraseWeights[idx] || this.phraseWeights[idx] < 2) {
        this.phraseWeights[idx] = 2;
      }
      this.quizStats.hinted = (this.quizStats.hinted || 0) + 1;
    } else {
      answerType = 1;
      p.clean++;
      p.streak++;
      p.lastType = 1;
      this.quizStats.clean = (this.quizStats.clean || 0) + 1;

      if (p.streak >= STREAK_TO_LEARN) {
        this.learned.add(idx);
        this.phraseWeights[idx] = 0;
      } else if (!this.phraseWeights[idx] || this.phraseWeights[idx] > 1) {
        this.phraseWeights[idx] = 1;
      } else {
        this.phraseWeights[idx] = Math.max(0.5, (this.phraseWeights[idx] || 1) - 0.5);
      }
    }

    this.phraseProgress[idx] = p;
    this.save();
    return answerType;
  },

  getPhrasePriority(idx) {
    const p = this.getProgress(idx);
    if (p.errors > 0 && !this.learned.has(idx)) return 150 + p.errors * 20;
    if (this.phraseWeights[idx] > 1) return 120 + (this.phraseWeights[idx] - 1) * 30;
    if (!Object.prototype.hasOwnProperty.call(this.phraseWeights, idx) && !this.learned.has(idx)) return 80;
    if (p.streak > 0 && p.streak < STREAK_TO_LEARN) return 40;
    if (this.learned.has(idx)) return 2;
    if (p.hinted > 0 && !this.learned.has(idx)) return 60;
    return 30;
  },

  countByMasteryType() {
    let type1 = 0, type2 = 0, type3 = 0;
    PHRASES.forEach((_, i) => {
      if (Storage.learned.has(i)) {
        type1++;
      } else if (this.getProgress(i).errors > 0) {
        type3++;
      } else if (this.getProgress(i).hinted > 0 || this.getProgress(i).lastType === 2) {
        type2++;
      }
    });
    return { type1, type2, type3 };
  },

  /** @deprecated — use recordPhraseAnswer */
  updateWeight(idx, isCorrect) {
    this.recordPhraseAnswer(idx, isCorrect, false);
  },

  toggleLearned(idx) {
    const p = this.getProgress(idx);
    if (this.learned.has(idx)) {
      this.learned.delete(idx);
      this.phraseWeights[idx] = 2;
      p.streak = 0;
      p.lastType = 2;
    } else {
      this.learned.add(idx);
      this.phraseWeights[idx] = 0;
      p.streak = STREAK_TO_LEARN;
      p.lastType = 1;
    }
    this.phraseProgress[idx] = p;
    this.save();
  },

  reset() {
    this.learned.clear();
    this.phraseWeights = {};
    this.phraseProgress = {};
    this.quizStats = { total: 0, correct: 0, clean: 0, hinted: 0, wrong: 0 };
    this.save();
  }
};

(function migrateLegacyStorage() {
  let changed = false;
  Object.entries(Storage.phraseWeights).forEach(([idx, w]) => {
    const i = Number(idx);
    if (Storage.phraseProgress[i]) return;
    const p = defaultProgress();
    if (w > 1) {
      p.errors = Math.max(1, Math.round(w));
      p.lastType = 3;
    } else if (w === 0 && Storage.learned.has(i)) {
      p.streak = STREAK_TO_LEARN;
      p.clean = STREAK_TO_LEARN;
      p.lastType = 1;
    } else if (w > 0 && w <= 1) {
      p.streak = w <= 0.5 ? STREAK_TO_LEARN - 1 : 1;
      p.clean = 1;
      p.lastType = 1;
    }
    Storage.phraseProgress[i] = p;
    changed = true;
  });
  Storage.learned.forEach(i => {
    if (!Storage.phraseProgress[i]) {
      Storage.phraseProgress[i] = { ...defaultProgress(), streak: STREAK_TO_LEARN, clean: STREAK_TO_LEARN, lastType: 1 };
      changed = true;
    }
  });
  if (changed) Storage.save();
})();
