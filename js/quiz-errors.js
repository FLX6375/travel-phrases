let quizErrorsOnly = (function () {
  try {
    const v = localStorage.getItem('tpErrorsOnly');
    return v ? JSON.parse(v) : false;
  } catch {
    return false;
  }
})();

function toggleQuizErrorsOnly() {
  quizErrorsOnly = !quizErrorsOnly;
  localStorage.setItem('tpErrorsOnly', JSON.stringify(quizErrorsOnly));
  syncErrorsOnlyToggle();
  startQuiz();
}

function syncErrorsOnlyToggle() {
  const el = document.getElementById('quiz-errors-toggle');
  if (!el) return;
  el.classList.toggle('active', quizErrorsOnly);
  const count = Storage.getErrorPhraseIndices().length;
  const label = document.getElementById('quiz-errors-label');
  if (label) {
    label.textContent = quizErrorsOnly
      ? `⚠️ Тільки помилки (${count})`
      : `⚠️ Тільки помилки (${count})`;
  }
}

function filterIndicesForQuiz(indices) {
  if (!quizErrorsOnly) return indices;
  const errorSet = new Set(Storage.getErrorPhraseIndices());
  const filtered = indices.filter(i => errorSet.has(i));
  return filtered.length ? filtered : indices;
}

function showErrorsOnlyEmpty() {
  document.getElementById('quiz-q').innerHTML = '🎉';
  document.getElementById('quiz-hint').textContent = 'Немає фраз з помилками — молодець!';
  document.getElementById('quiz-opts-area').innerHTML = '';
  document.getElementById('quiz-fb').innerHTML =
    '<div class="quiz-score">Увімкни режим «Тільки помилки» коли знову помилишся.<br>' +
    '<button class="btn btn-primary" style="margin-top:12px" onclick="toggleQuizErrorsOnly();startQuiz()">Вимкнути фільтр</button></div>';
  document.getElementById('quiz-prog').textContent = 'Порожньо';
  document.getElementById('quiz-next').style.display = 'none';
  document.getElementById('quiz-restart').style.display = 'inline-block';
}
