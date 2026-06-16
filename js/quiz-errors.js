const QUIZ_SIZE_OPTIONS = [5, 10, 15, 20, 25, 30];

let quizErrorsOnly = (function () {
  try {
    const v = localStorage.getItem('tpErrorsOnly');
    return v ? JSON.parse(v) : false;
  } catch {
    return false;
  }
})();

let quizNewOnly = (function () {
  try {
    const v = localStorage.getItem('tpNewOnly');
    return v ? JSON.parse(v) : false;
  } catch {
    return false;
  }
})();

function getQuizSize() {
  try {
    const n = parseInt(localStorage.getItem('tpQuizSize'), 10);
    return QUIZ_SIZE_OPTIONS.includes(n) ? n : 15;
  } catch {
    return 15;
  }
}

function setQuizSize(size) {
  const n = Number(size);
  if (!QUIZ_SIZE_OPTIONS.includes(n)) return;
  localStorage.setItem('tpQuizSize', String(n));
  syncQuizOptionsUI();
  startQuiz();
}

function toggleQuizErrorsOnly() {
  quizErrorsOnly = !quizErrorsOnly;
  localStorage.setItem('tpErrorsOnly', JSON.stringify(quizErrorsOnly));
  syncQuizOptionsUI();
  startQuiz();
}

function toggleQuizNewOnly() {
  quizNewOnly = !quizNewOnly;
  localStorage.setItem('tpNewOnly', JSON.stringify(quizNewOnly));
  syncQuizOptionsUI();
  startQuiz();
}

function syncQuizOptionsUI() {
  syncErrorsOnlyToggle();
  syncNewOnlyToggle();
  syncQuizSizeSelect();
}

function syncErrorsOnlyToggle() {
  const el = document.getElementById('quiz-errors-toggle');
  if (!el) return;
  el.classList.toggle('active', quizErrorsOnly);
  const count = Storage.getErrorPhraseIndices().length;
  const label = document.getElementById('quiz-errors-label');
  if (label) label.textContent = `⚠️ Помилки (${count})`;
}

function syncNewOnlyToggle() {
  const el = document.getElementById('quiz-new-toggle');
  if (!el) return;
  el.classList.toggle('active', quizNewOnly);
  const count = Storage.getNewPhraseIndices().length;
  const label = document.getElementById('quiz-new-label');
  if (label) label.textContent = `✨ Нові (${count})`;
}

function syncQuizSizeSelect() {
  const sel = document.getElementById('quiz-size-select');
  if (!sel) return;
  sel.value = String(getQuizSize());
}

function filterIndicesForQuiz(indices) {
  let result = indices;
  if (quizNewOnly) {
    const newSet = new Set(Storage.getNewPhraseIndices());
    result = result.filter(i => newSet.has(i));
  }
  if (quizErrorsOnly) {
    const errorSet = new Set(Storage.getErrorPhraseIndices());
    result = result.filter(i => errorSet.has(i));
  }
  return result;
}

function showQuizFilterEmpty() {
  const parts = [];
  if (quizNewOnly) parts.push('нові');
  if (quizErrorsOnly) parts.push('з помилками');
  const hint = parts.length
    ? 'Немає фраз: ' + parts.join(' + ') + '. Спробуй вимкнути один із фільтрів.'
    : 'Немає фраз для тесту.';
  document.getElementById('quiz-q').innerHTML = '📭';
  document.getElementById('quiz-hint').textContent = hint;
  document.getElementById('quiz-opts-area').innerHTML = '';
  document.getElementById('quiz-fb').innerHTML =
    '<div class="quiz-score">' + hint + '<br>' +
    '<button class="btn btn-primary" style="margin-top:12px" onclick="quizErrorsOnly=false;quizNewOnly=false;localStorage.setItem(\'tpErrorsOnly\',\'false\');localStorage.setItem(\'tpNewOnly\',\'false\');syncQuizOptionsUI();startQuiz()">Скинути фільтри</button></div>';
  document.getElementById('quiz-prog').textContent = 'Порожньо';
  document.getElementById('quiz-next').style.display = 'none';
  document.getElementById('quiz-restart').style.display = 'inline-block';
}

function showErrorsOnlyEmpty() {
  showQuizFilterEmpty();
}

function beginQuestionTimer() {
  questionStartTime = Date.now();
}
