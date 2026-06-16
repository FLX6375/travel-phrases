let currentTab = 'browse';

function updateProgress() {
  const n = Storage.learned.size;
  document.getElementById('learned-count').textContent = n;
  document.getElementById('total-count').textContent = TOTAL;
  document.getElementById('prog-bar').style.width = (n / TOTAL * 100) + '%';

  const errorCount = Storage.getErrorPhraseIndices().length;
  const newCount = Storage.getNewPhraseIndices().length;
  document.getElementById('prog-label').textContent = errorCount > 0
    ? `⚠️ ${errorCount} фраз з помилками · 3 правильні підряд без підказок = вивчено`
    : newCount > 0
      ? `Вивчено: ${n} з ${TOTAL}. Нових: ${newCount}. Серія: 3× без підказок.`
      : `Вивчено: ${n} з ${TOTAL}. Продовжуй повторювати!`;
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

async function bootApp() {
  Speech.init();
  syncQuizOptionsUI();
  if (typeof Sync !== 'undefined') await Sync.initOnBoot();
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
