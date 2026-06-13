function renderStats() {
  const hardCount = Object.values(Storage.phraseWeights).filter(w => w > 1).length;
  const accuracy = Storage.quizStats.total
    ? Math.round(Storage.quizStats.correct / Storage.quizStats.total * 100)
    : 0;

  document.getElementById('stats-grid').innerHTML = `
    <div class="stat-card"><div class="stat-num">${TOTAL}</div><div class="stat-label">Всього фраз</div></div>
    <div class="stat-card"><div class="stat-num" style="color:var(--green)">${Storage.learned.size}</div><div class="stat-label">Вивчено</div></div>
    <div class="stat-card"><div class="stat-num" style="color:var(--red)">${hardCount}</div><div class="stat-label">У зоні ризику</div></div>
    <div class="stat-card"><div class="stat-num">${Math.round(Storage.learned.size / TOTAL * 100)}%</div><div class="stat-label">Прогрес</div></div>
    <div class="stat-card"><div class="stat-num" style="color:var(--yellow)">${accuracy}%</div><div class="stat-label">Точність відповідей</div></div>
    <div class="stat-card"><div class="stat-num">${Storage.quizStats.total}</div><div class="stat-label">Всього вправ</div></div>
  `;

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
}

function resetProgress() {
  if (!confirm('Скинути весь прогрес?')) return;
  Storage.reset();
  updateProgress();
  renderCards();
  if (currentTab === 'stats') renderStats();
}
