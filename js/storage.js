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

const Storage = {
  learned: new Set(safeJsonParse('tpLearned3', [])),
  phraseWeights: safeJsonParse('tpWeights3', {}),
  quizStats: safeJsonParse('tpQuizStats', { total: 0, correct: 0 }),

  save() {
    localStorage.setItem('tpLearned3', JSON.stringify([...this.learned]));
    localStorage.setItem('tpWeights3', JSON.stringify(this.phraseWeights));
    localStorage.setItem('tpQuizStats', JSON.stringify(this.quizStats));
  },

  recordAnswer(correct) {
    this.quizStats.total++;
    if (correct) this.quizStats.correct++;
    this.save();
  },

  getPhrasePriority(idx) {
    const w = this.phraseWeights[idx];
    if (w > 1) return 120 + (w - 1) * 30;
    if (!Object.prototype.hasOwnProperty.call(this.phraseWeights, idx) && !this.learned.has(idx)) return 80;
    if (this.learned.has(idx) || w === 0) return 2;
    if (w <= 0.5) return 10;
    return 30;
  },

  updateWeight(idx, isCorrect) {
    if (isCorrect) {
      if (!this.phraseWeights[idx]) this.phraseWeights[idx] = 1;
      this.phraseWeights[idx] -= 0.5;
      if (this.phraseWeights[idx] <= 0.5) {
        this.phraseWeights[idx] = 0;
        this.learned.add(idx);
      }
    } else {
      this.learned.delete(idx);
      this.phraseWeights[idx] = 3;
    }
    this.save();
  },

  toggleLearned(idx) {
    if (this.learned.has(idx)) {
      this.learned.delete(idx);
      this.phraseWeights[idx] = 2;
    } else {
      this.learned.add(idx);
      this.phraseWeights[idx] = 0;
    }
    this.save();
  },

  reset() {
    this.learned.clear();
    this.phraseWeights = {};
    this.quizStats = { total: 0, correct: 0 };
    this.save();
  }
};
