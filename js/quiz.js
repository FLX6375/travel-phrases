let quizType = 'en-ua';
let quizQueue = [];
let quizCurrent = 0;
let quizScore = 0;
let quizAnswered = false;
let hintRevealed = 0;
let questionUsedHint = false;
let scrambleUserWords = [];

function setQuizType(t) {
  quizType = t;
  ['en-ua', 'ua-en', 'scramble', 'type', 'fill', 'situation', 'dialogue', 'flash', 'pattern', 'marathon'].forEach(id => {
    const el = document.getElementById('qt-' + id);
    if (el) el.classList.toggle('active', id === t);
  });
  startQuiz();
}

function buildQuizPool(size) {
  const indices = filterIndicesForQuiz(PHRASES.map((_, i) => i));
  if (!indices.length) return [];
  return pickWeighted(indices, Math.min(size, indices.length), i => Storage.getPhrasePriority(i));
}

function buildPracticePool(items, size, getPhraseIdx) {
  return pickWeighted(items, size, item => Storage.getPhrasePriority(getPhraseIdx(item)));
}

function startQuiz() {
  if (typeof clearFlashTimer === 'function') clearFlashTimer();
  Speech.stop();
  syncErrorsOnlyToggle();
  if (quizType === 'dialogue') { startDialogueQuiz(); return; }
  if (quizType === 'situation') { startSituationQuiz(); return; }
  if (quizType === 'flash') { startFlashQuiz(); return; }
  if (quizType === 'pattern') { startPatternQuiz(); return; }
  if (quizType === 'marathon') { startMarathonQuiz(); return; }

  quizQueue = buildQuizPool(15);
  if (!quizQueue.length && quizErrorsOnly) {
    showErrorsOnlyEmpty();
    return;
  }
  quizCurrent = 0;
  quizScore = 0;
  document.getElementById('quiz-next').style.display = 'none';
  document.getElementById('quiz-restart').style.display = 'none';
  renderQuestion();
}

function renderQuestion() {
  if (quizCurrent >= quizQueue.length) { showQuizResult(); return; }

  const idx = quizQueue[quizCurrent];
  const p = PHRASES[idx];
  quizAnswered = false;
  hintRevealed = 0;
  questionUsedHint = false;
  scrambleUserWords = [];

  const prog = Storage.getProgress(idx);
  const streakLeft = Math.max(0, STREAK_TO_LEARN - prog.streak);
  const statusParts = [];
  if (Storage.hasErrors(idx)) statusParts.push('⚠️ ПОМИЛКА');
  else if (prog.streak > 0 && !Storage.learned.has(idx)) statusParts.push(`🔥 ${prog.streak}/${STREAK_TO_LEARN}`);
  const statusText = statusParts.length ? ' · ' + statusParts.join(' ') : '';
  document.getElementById('quiz-prog').textContent = `Запитання ${quizCurrent + 1} / ${quizQueue.length}${statusText}`;
  document.getElementById('quiz-fb').textContent = '';
  document.getElementById('quiz-fb').className = 'quiz-feedback';
  document.getElementById('quiz-next').style.display = 'none';

  if (quizType === 'type') renderTypeQuestion(idx, p);
  else if (quizType === 'scramble') renderScrambleQuestion(idx, p);
  else if (quizType === 'fill') renderFillQuestion(idx, p);
  else renderChoiceQuestion(idx, p);
}

function renderTypeQuestion(idx, p) {
  document.getElementById('quiz-q').textContent = p.ua;
  document.getElementById('quiz-hint').textContent = '✏️ Напиши фразу повністю англійською:';
  const words = p.en.split(' ');
  document.getElementById('quiz-opts-area').innerHTML = `
    <textarea class="typing-area" id="type-input" rows="3" placeholder="Type here..." oninput="liveCheck(${idx})"></textarea>
    <div style="margin-bottom:14px;"><button class="hint-btn" onclick="revealHint(${idx})">💡 Підказка (${words.length} слів)</button></div>
    <div class="hint-chars" id="hint-display"></div>
    <button class="btn btn-primary" onclick="checkTyped(${idx})">Перевірити ✓</button>`;
  setTimeout(() => { const el = document.getElementById('type-input'); if (el) el.focus(); }, 100);
}

function renderScrambleQuestion(idx, p) {
  document.getElementById('quiz-q').textContent = p.ua;
  document.getElementById('quiz-hint').textContent = '🧩 Клікай по словах, щоб зібрати речення:';
  const cleanWords = p.en.split(' ').map((w, wIdx) => ({ id: wIdx, txt: w }));
  const shuffled = shuffle(cleanWords);
  document.getElementById('quiz-opts-area').innerHTML = `
    <div class="scramble-ans" id="scramble-ans-zone"></div>
    <div class="scramble-pool" id="scramble-pool-zone">
      ${shuffled.map(w => `<button class="scramble-word" data-word-id="${w.id}" onclick="clickScrambleWord(this)">${escapeHtml(w.txt)}</button>`).join('')}
    </div>
    <div style="display:flex;justify-content:center;gap:10px;">
      <button class="btn btn-ghost" onclick="resetScramble()">🔄 Скинути</button>
      <button class="btn btn-primary" onclick="checkScramble(${idx})">Перевірити ✓</button>
    </div>`;
}

function renderFillQuestion(idx, p) {
  const words = p.en.split(' ');
  const blankIdx = Math.floor(Math.random() * words.length);
  const answer = words[blankIdx].replace(/[^a-zA-Z']/g, '');
  const blanked = words.map((w, i) => i === blankIdx ? '___' : w).join(' ');
  setQuizQuestion(blanked, idx, true);
  document.getElementById('quiz-hint').textContent = `🇺🇦 ${p.ua}`;

  const wrongs = shuffle(PHRASES.filter((_, i) => i !== idx)).slice(0, 8).map(x => {
    const ws = x.en.split(' ');
    return ws[Math.floor(Math.random() * ws.length)].replace(/[^a-zA-Z']/g, '');
  }).filter(w => w && w.toLowerCase() !== answer.toLowerCase());

  const opts = shuffle([...new Set([answer, ...wrongs.slice(0, 3)])]);
  document.getElementById('quiz-opts-area').innerHTML = `<div class="quiz-options">${opts.map(o =>
    `<div class="quiz-opt" onclick="checkAnswer(this, '${escapeJsSingleQuotedString(o)}', '${escapeJsSingleQuotedString(answer)}', ${idx})">${escapeHtml(o)}</div>`
  ).join('')}</div>`;
}

function renderChoiceQuestion(idx, p, forceMode) {
  const mode = forceMode || quizType;
  const isEN = mode === 'en-ua';
  setQuizQuestion(isEN ? p.en : p.ua, idx, isEN);
  document.getElementById('quiz-hint').textContent = isEN ? '🇺🇦 Вибери переклад:' : '🇬🇧 Вибери англійську фразу:';
  const correct = isEN ? p.ua : p.en;
  const wrongs = shuffle(PHRASES.filter((_, i) => i !== idx)).slice(0, 3).map(x => isEN ? x.ua : x.en);
  const opts = shuffle([correct, ...wrongs]);
  document.getElementById('quiz-opts-area').innerHTML = `<div class="quiz-options">${opts.map(o =>
    `<div class="quiz-opt" onclick="checkAnswer(this, '${escapeJsSingleQuotedString(o)}', '${escapeJsSingleQuotedString(correct)}', ${idx})">${escapeHtml(o)}</div>`
  ).join('')}</div>`;
}

function setQuizQuestion(text, idx, showSpeak) {
  const el = document.getElementById('quiz-q');
  if (showSpeak && Speech.available()) {
    el.innerHTML = `<div class="quiz-q-row">
      <span>${escapeHtml(text)}</span>
      <button type="button" class="btn-speak btn-speak-sm" onclick="speakPhrase(${idx}, 'en', event)" title="Озвучити">🔊</button>
    </div>`;
  } else {
    el.textContent = text;
  }
}

function clickScrambleWord(btn) {
  if (quizAnswered) return;
  btn.classList.add('used');
  scrambleUserWords.push({ btn, txt: btn.textContent });
  document.getElementById('scramble-ans-zone').innerHTML =
    scrambleUserWords.map(w => `<span class="scramble-word">${escapeHtml(w.txt)}</span>`).join('');
}

function resetScramble() {
  if (quizAnswered) return;
  scrambleUserWords = [];
  document.getElementById('scramble-ans-zone').innerHTML = '';
  document.querySelectorAll('.scramble-word').forEach(b => b.classList.remove('used'));
}

function checkScramble(idx) {
  if (quizAnswered) return;
  quizAnswered = true;
  const userStr = scrambleUserWords.map(w => w.txt).join(' ');
  const isCorrect = normalizePhrase(userStr) === normalizePhrase(PHRASES[idx].en);
  handleScoreUpdate(idx, isCorrect);
  triggerFeedback(isCorrect, PHRASES[idx].en, PHRASES[idx].rule, PHRASES[idx].anchors, idx);
}

function liveCheck(idx) {
  const input = document.getElementById('type-input');
  if (!input) return;
  const val = normalizePhrase(input.value);
  const correct = normalizePhrase(PHRASES[idx].en);
  input.classList.toggle('correct-border', val === correct);
  input.classList.toggle('wrong-border', val !== correct && val.length > 0);
}

function revealHint(idx) {
  questionUsedHint = true;
  const words = PHRASES[idx].en.split(' ');
  hintRevealed = Math.min(hintRevealed + 1, Math.ceil(words.length / 2));
  const shown = words.slice(0, hintRevealed).join(' ');
  const hidden = words.slice(hintRevealed).map(w => '_'.repeat(w.length)).join(' ');
  document.getElementById('hint-display').textContent = shown + (hidden ? ' ' + hidden : '');
}

function checkTyped(idx) {
  if (quizAnswered) return;
  const input = document.getElementById('type-input');
  if (!input) return;
  quizAnswered = true;
  input.disabled = true;
  const isCorrect = normalizePhrase(input.value) === normalizePhrase(PHRASES[idx].en);
  handleScoreUpdate(idx, isCorrect);
  triggerFeedback(isCorrect, PHRASES[idx].en, PHRASES[idx].rule, PHRASES[idx].anchors, idx);
}

function checkAnswer(el, chosen, correct, idx) {
  if (quizAnswered) return;
  quizAnswered = true;
  document.querySelectorAll('.quiz-opt').forEach(o => o.classList.add('disabled'));
  const isCorrect = chosen === correct;
  handleScoreUpdate(idx, isCorrect);
  el.classList.add(isCorrect ? 'correct' : 'wrong');
  if (!isCorrect) {
    document.querySelectorAll('.quiz-opt').forEach(o => {
      if (o.textContent.trim() === correct) o.classList.add('correct');
    });
  }
  triggerFeedback(isCorrect, PHRASES[idx].en, PHRASES[idx].rule, PHRASES[idx].anchors, idx);
}

function handleScoreUpdate(idx, isCorrect) {
  const usedHint = questionUsedHint || hintRevealed > 0;
  const answerType = Storage.recordPhraseAnswer(idx, isCorrect, usedHint);
  const practiceModes = ['dialogue', 'situation', 'flash', 'pattern', 'marathon'];
  if (practiceModes.includes(quizType)) {
    if (isCorrect && !usedHint) practiceScore++;
  } else if (isCorrect && !usedHint) {
    quizScore++;
  }
  Storage.recordAnswer(isCorrect);
  updateProgress();
  return answerType;
}

function triggerFeedback(isCorrect, correctPhrase, rule, anchors, idx) {
  const fb = document.getElementById('quiz-fb');
  const nextBtn = document.getElementById('quiz-next');
  const usedHint = questionUsedHint || hintRevealed > 0;

  if (isCorrect && !usedHint) {
    const p = Storage.getProgress(idx);
    const learnedNote = Storage.learned.has(idx) && p.streak >= STREAK_TO_LEARN
      ? ' <strong>🎉 Фраза вивчена!</strong>' : '';
    fb.innerHTML = `<strong>✅ Рівень 1:</strong> Без помилок і без підказок!${learnedNote}`;
    fb.className = 'quiz-feedback ok';
    nextBtn.style.display = 'inline-block';
    nextBtn.disabled = false;
    nextBtn.textContent = 'Далі →';
  } else if (isCorrect && usedHint) {
    fb.innerHTML = `<strong>💡 Рівень 2:</strong> Правильно, але з підказкою — серія до «вивчено» обнулилась.`;
    fb.className = 'quiz-feedback hint-ok';
    nextBtn.style.display = 'inline-block';
    nextBtn.disabled = false;
    nextBtn.textContent = 'Далі →';
  } else {
    fb.className = 'quiz-feedback fail';
    nextBtn.style.display = 'inline-block';
    nextBtn.disabled = true;
    let highlighted = highlightAnchors(correctPhrase, anchors);
    let secLeft = 3;
    const updateTimerText = () => {
      nextBtn.textContent = `Почекай (${secLeft}с), вчимо фразу...`;
      fb.innerHTML =
        '❌ <strong>Рівень 3 — помилка.</strong> Прочитай речення вголос 3 рази:<br>' +
        '<span style="font-size:1.2rem;display:block;margin:8px 0;font-weight:700;color:var(--text);">' + highlighted + '</span>' +
        '<small style="color:var(--muted);font-style:italic;">' + (rule ? escapeHtml(rule) : '') + '</small>';
    };
    updateTimerText();
    const interval = setInterval(() => {
      secLeft--;
      if (secLeft <= 0) {
        clearInterval(interval);
        nextBtn.disabled = false;
        nextBtn.textContent = 'Далі →';
      } else updateTimerText();
    }, 1000);
  }
}

function nextQuestion() {
  const practiceModes = ['dialogue', 'situation', 'flash', 'pattern', 'marathon'];
  if (practiceModes.includes(quizType)) {
    advancePractice();
    return;
  }
  quizCurrent++;
  renderQuestion();
}

function showQuizResult() {
  const pct = Math.round(quizScore / quizQueue.length * 100);
  document.getElementById('quiz-q').innerHTML = `<span style="font-size:2.5rem">${pct >= 75 ? '🏆' : '📚'}</span>`;
  document.getElementById('quiz-hint').textContent = '';
  document.getElementById('quiz-opts-area').innerHTML = '';
  const resultMsg = pct >= 75
    ? 'Гарний результат! Мозок фіксує зв\'язки між словами.'
    : 'Не здавайся — повтори складні фрази в режимі «Ситуація» та «Діалог».';
  document.getElementById('quiz-fb').innerHTML =
    '<div class="quiz-score">Результат: <span>' + quizScore + ' / ' + quizQueue.length + '</span> (' + pct + '%)<br>' +
    '<span style="font-size:.85rem;color:var(--muted);font-weight:400">' + resultMsg + '</span></div>';
  document.getElementById('quiz-prog').textContent = 'Тест завершено!';
  document.getElementById('quiz-next').style.display = 'none';
  document.getElementById('quiz-restart').style.display = 'inline-block';
}
