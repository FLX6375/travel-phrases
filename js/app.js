let currentTab = 'browse';

function updateProgress() {
  const n = Storage.learned.size;
  document.getElementById('learned-count').textContent = n;
  document.getElementById('total-count').textContent = TOTAL;
  document.getElementById('prog-bar').style.width = (n / TOTAL * 100) + '%';

  const hardCount = Object.keys(Storage.phraseWeights).filter(k => Storage.phraseWeights[k] > 1).length;
  const unseen = PHRASES.filter((_, i) =>
    !Object.prototype.hasOwnProperty.call(Storage.phraseWeights, i) && !Storage.learned.has(i)
  ).length;
  document.getElementById('prog-label').textContent = hardCount > 0
    ? `⚠️ ${hardCount} складних фраз — тест фокусується на них!`
    : unseen > 0
      ? `Вивчено: ${n} з ${TOTAL}. У тестах пріоритет: помилки → нові (${unseen}) → вивчені.`
      : `Вивчено: ${n} з ${TOTAL}. Повторюються фрази з помилками.`;
}

function setTab(tab) {
  if (typeof clearFlashTimer === 'function') clearFlashTimer();
  Speech.stop();
  currentTab = tab;
  ['browse', 'rules', 'quiz', 'stats'].forEach(t => {
    const el = document.getElementById('tab-' + t);
    if (el) el.style.display = t === tab ? '' : 'none';
  });
  document.querySelectorAll('.tab').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-tab') === tab);
  });
  document.getElementById('filters').style.display = tab === 'browse' ? '' : 'none';

  if (tab === 'quiz') startQuiz();
  if (tab === 'stats') renderStats();
  if (tab === 'rules') renderRules();
}

function bootApp() {
  Speech.init();
  renderCards();
  updateProgress();

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
    if (document.getElementById('modal').classList.contains('open')) {
      if (e.key === 'ArrowRight') modalNext();
      if (e.key === 'ArrowLeft') modalPrev();
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootApp);
} else {
  bootApp();
}
