let practiceQueue = [];
let practiceCurrent = 0;
let practiceScore = 0;
let practiceAnswered = false;
let flashTimer = null;

function clearFlashTimer() {
  if (flashTimer) {
    clearInterval(flashTimer);
    flashTimer = null;
  }
}

function startDialogueQuiz() {
  quizType = 'dialogue';
  practiceQueue = buildPracticePool(DIALOGUES, 10, d => d.phraseIndex);
  practiceCurrent = 0;
  practiceScore = 0;
  practiceAnswered = false;
  document.getElementById('quiz-restart').style.display = 'none';
  renderDialogueQuestion();
}

function renderDialogueQuestion() {
  if (practiceCurrent >= practiceQueue.length) {
    showPracticeResult('діалогів');
    return;
  }
  const d = practiceQueue[practiceCurrent];
  const p = PHRASES[d.phraseIndex];
  practiceAnswered = false;

  document.getElementById('quiz-prog').textContent = `Діалог ${practiceCurrent + 1} / ${practiceQueue.length}`;
  document.getElementById('quiz-q').textContent = '💬 Обери репліку, що підходить до діалогу:';
  document.getElementById('quiz-hint').textContent = p.situation || '';
  document.getElementById('quiz-fb').textContent = '';
  document.getElementById('quiz-fb').className = 'quiz-feedback';
  document.getElementById('quiz-next').style.display = 'none';

  const dialogueHtml = d.lines.map((line, i) => {
    const text = i === d.blankIndex
      ? '<span class="dialogue-blank">___</span>'
      : escapeHtml(line.text);
    return `<div class="dialogue-line"><span class="dialogue-line speaker">${escapeHtml(line.speaker)}</span><br>${text}</div>`;
  }).join('');

  const opts = shuffle(d.options);
  const correct = d.answer || d.options[d.correctIndex] || p.en;

  document.getElementById('quiz-opts-area').innerHTML = `
    <div class="dialogue-box">${dialogueHtml}</div>
    <div class="quiz-options">${opts.map(o =>
      `<div class="quiz-opt" onclick="checkPracticeAnswer(this, '${escapeJsSingleQuotedString(o)}', '${escapeJsSingleQuotedString(correct)}', ${d.phraseIndex})">${escapeHtml(o)}</div>`
    ).join('')}</div>`;
}

function startSituationQuiz() {
  quizType = 'situation';
  practiceQueue = buildPracticePool(SITUATIONS, 12, s => s.phraseIndex);
  practiceCurrent = 0;
  practiceScore = 0;
  practiceAnswered = false;
  document.getElementById('quiz-restart').style.display = 'none';
  renderSituationQuestion();
}

function renderSituationQuestion() {
  if (practiceCurrent >= practiceQueue.length) {
    showPracticeResult('ситуацій');
    return;
  }
  const s = practiceQueue[practiceCurrent];
  const p = PHRASES[s.phraseIndex];
  practiceAnswered = false;

  document.getElementById('quiz-prog').textContent = `Ситуація ${practiceCurrent + 1} / ${practiceQueue.length}`;
  document.getElementById('quiz-q').innerHTML = `<span class="situation-badge">🎭 Ситуація</span><br>${escapeHtml(s.situation)}`;
  document.getElementById('quiz-hint').textContent = 'Яку фразу ти скажеш?';
  document.getElementById('quiz-fb').textContent = '';
  document.getElementById('quiz-next').style.display = 'none';

  const correct = s.options[s.correctIndex];
  document.getElementById('quiz-opts-area').innerHTML = `<div class="quiz-options" style="grid-template-columns:1fr;">${s.options.map(o =>
    `<div class="quiz-opt" onclick="checkPracticeAnswer(this, '${escapeJsSingleQuotedString(o)}', '${escapeJsSingleQuotedString(correct)}', ${s.phraseIndex})">${escapeHtml(o)}</div>`
  ).join('')}</div>`;
}

function startFlashQuiz() {
  clearFlashTimer();
  quizType = 'flash';
  practiceQueue = buildQuizPool(12);
  practiceCurrent = 0;
  practiceScore = 0;
  practiceAnswered = false;
  document.getElementById('quiz-restart').style.display = 'none';
  renderFlashQuestion();
}

function renderFlashQuestion() {
  if (practiceCurrent >= practiceQueue.length) {
    showPracticeResult('флеш-карток');
    return;
  }
  clearFlashTimer();

  const idx = practiceQueue[practiceCurrent];
  const p = PHRASES[idx];
  practiceAnswered = false;

  document.getElementById('quiz-prog').textContent = `Флеш ${practiceCurrent + 1} / ${practiceQueue.length}`;
  document.getElementById('quiz-q').textContent = '⚡ Запам\'ятай фразу!';
  document.getElementById('quiz-hint').textContent = '';
  document.getElementById('quiz-fb').textContent = '';
  document.getElementById('quiz-next').style.display = 'none';

  let countdown = 4;
  document.getElementById('quiz-opts-area').innerHTML = `
    <div class="flash-card" id="flash-card">${escapeHtml(p.ua)}</div>
    <div class="flash-timer" id="flash-timer">${countdown}</div>
    <p style="color:var(--muted);font-size:.82rem;">Зараз фраза зникне — обери правильний переклад</p>
    <div id="flash-opts" style="display:none"></div>`;

  flashTimer = setInterval(() => {
    countdown--;
    const timerEl = document.getElementById('flash-timer');
    if (timerEl) timerEl.textContent = countdown;
    if (countdown <= 0) {
      clearInterval(flashTimer);
      const card = document.getElementById('flash-card');
      if (card) { card.textContent = '❓'; card.classList.add('hidden'); }
      if (timerEl) timerEl.textContent = '';
      showFlashOptions(idx, p);
    }
  }, 1000);
}

function showFlashOptions(idx, p) {
  if (quizType !== 'flash' || practiceAnswered) return;
  const optsEl = document.getElementById('flash-opts');
  if (!optsEl) return;
  const wrongs = shuffle(PHRASES.filter((_, i) => i !== idx)).slice(0, 3).map(x => x.en);
  const opts = shuffle([p.en, ...wrongs]);
  optsEl.style.display = 'block';
  optsEl.innerHTML = `<div class="quiz-options">${opts.map(o =>
    `<div class="quiz-opt" onclick="checkPracticeAnswer(this, '${escapeJsSingleQuotedString(o)}', '${escapeJsSingleQuotedString(p.en)}', ${idx})">${escapeHtml(o)}</div>`
  ).join('')}</div>`;
}

function startPatternQuiz() {
  quizType = 'pattern';
  practiceQueue = buildPracticePool(GRAMMAR_RULES, 10, rule => {
    const related = findPhrasesByPatterns(rule.patterns);
    return (related[0] || { i: 0 }).i;
  }).map(rule => {
    const related = findPhrasesByPatterns(rule.patterns);
    const correct = related[0] || { p: PHRASES[0], i: 0 };
    const wrongItems = shuffle(PHRASES.map((p, i) => ({ p, i })).filter(x => x.i !== correct.i)).slice(0, 3);
    return { rule, correct, options: shuffle([correct, ...wrongItems]) };
  });
  practiceCurrent = 0;
  practiceScore = 0;
  renderPatternQuestion();
}

function renderPatternQuestion() {
  if (practiceCurrent >= practiceQueue.length) {
    showPracticeResult('патернів');
    return;
  }
  const item = practiceQueue[practiceCurrent];
  practiceAnswered = false;
  const correctPhrase = item.correct.p.en;

  document.getElementById('quiz-prog').textContent = `Патерн ${practiceCurrent + 1} / ${practiceQueue.length}`;
  document.getElementById('quiz-q').innerHTML = `Яка фраза використовує цей шаблон?<br><span class="rule-template" style="margin-top:10px;display:inline-block;">${escapeHtml(item.rule.template)}</span>`;
  document.getElementById('quiz-hint').textContent = item.rule.title;
  document.getElementById('quiz-fb').textContent = '';
  document.getElementById('quiz-next').style.display = 'none';

  document.getElementById('quiz-opts-area').innerHTML = `<div class="quiz-options" style="grid-template-columns:1fr;">${item.options.map(({ p, i }) =>
    `<div class="quiz-opt" onclick="checkPracticeAnswer(this, '${escapeJsSingleQuotedString(p.en)}', '${escapeJsSingleQuotedString(correctPhrase)}', ${i})">${escapeHtml(p.en)}</div>`
  ).join('')}</div>`;
}

function startMarathonQuiz() {
  quizType = 'marathon';
  const modes = ['en-ua', 'ua-en', 'fill', 'scramble'];
  const pool = buildQuizPool(12);
  practiceQueue = pool.map((idx, i) => ({ mode: modes[i % modes.length], idx }));
  practiceCurrent = 0;
  practiceScore = 0;
  practiceAnswered = false;
  document.getElementById('quiz-restart').style.display = 'none';
  renderMarathonQuestion();
}

function renderMarathonQuestion() {
  if (practiceCurrent >= practiceQueue.length) {
    showPracticeResult('марафону');
    return;
  }
  const item = practiceQueue[practiceCurrent];
  const p = PHRASES[item.idx];
  practiceAnswered = false;
  hintRevealed = 0;
  scrambleUserWords = [];

  const modeLabels = { 'en-ua': '🇬🇧→🇺🇦', 'ua-en': '🇺🇦→🇬🇧', fill: '🔤 Пропуск', scramble: '🧩 Конструктор' };
  document.getElementById('quiz-prog').textContent = `Марафон ${practiceCurrent + 1} / ${practiceQueue.length} · ${modeLabels[item.mode] || item.mode}`;
  document.getElementById('quiz-fb').textContent = '';
  document.getElementById('quiz-fb').className = 'quiz-feedback';
  document.getElementById('quiz-next').style.display = 'none';

  quizType = 'marathon';
  if (item.mode === 'scramble') renderScrambleQuestion(item.idx, p);
  else if (item.mode === 'fill') renderFillQuestion(item.idx, p);
  else renderChoiceQuestion(item.idx, p, item.mode);
}

function advancePractice() {
  practiceCurrent++;
  if (quizType === 'dialogue') renderDialogueQuestion();
  else if (quizType === 'situation') renderSituationQuestion();
  else if (quizType === 'flash') renderFlashQuestion();
  else if (quizType === 'pattern') renderPatternQuestion();
  else if (quizType === 'marathon') renderMarathonQuestion();
}

function checkPracticeAnswer(el, chosen, correct, idx) {
  if (practiceAnswered) return;
  practiceAnswered = true;
  document.querySelectorAll('.quiz-opt').forEach(o => o.classList.add('disabled'));
  const isCorrect = chosen === correct;
  if (isCorrect) practiceScore++;
  Storage.updateWeight(idx, isCorrect);
  Storage.recordAnswer(isCorrect);
  updateProgress();

  el.classList.add(isCorrect ? 'correct' : 'wrong');
  if (!isCorrect) {
    document.querySelectorAll('.quiz-opt').forEach(o => {
      if (o.textContent.trim() === correct) o.classList.add('correct');
    });
  }
  triggerFeedback(isCorrect, PHRASES[idx].en, PHRASES[idx].rule, PHRASES[idx].anchors);
}

function showPracticeResult(label) {
  const total = practiceQueue.length;
  const pct = Math.round(practiceScore / total * 100);
  document.getElementById('quiz-q').innerHTML = `<span style="font-size:2.5rem">${pct >= 75 ? '🏆' : '📚'}</span>`;
  document.getElementById('quiz-hint').textContent = '';
  document.getElementById('quiz-opts-area').innerHTML = '';
  document.getElementById('quiz-fb').innerHTML = `
    <div class="quiz-score">Результат (${label}): <span>${practiceScore} / ${total}</span> (${pct}%)</div>`;
  document.getElementById('quiz-prog').textContent = 'Завершено!';
  document.getElementById('quiz-next').style.display = 'none';
  document.getElementById('quiz-restart').style.display = 'inline-block';
}
