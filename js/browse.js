let currentFilter = 'all';
let modalIdx = 0;

function renderExamplesHTML(p) {
  const examples = getPhraseExamples(p);
  if (examples.length <= 1) {
    return `<div class="modal-example">💬 ${escapeHtml(examples[0] || '')}</div>`;
  }
  return `<div class="examples-block">
    <div class="examples-label">💬 Приклади в контексті</div>
    ${examples.map((ex, i) => `
      <div class="modal-example example-item">
        <span class="example-num">${i + 1}</span>
        <span class="example-text">${escapeHtml(ex)}</span>
        <button type="button" class="btn-speak btn-speak-sm" onclick="speakText('${escapeJsSingleQuotedString(ex)}', event)" title="Озвучити приклад">🔊</button>
      </div>`).join('')}
  </div>`;
}

function renderCards() {
  const grid = document.getElementById('phrase-grid');
  const filtered = PHRASES.reduce((acc, p, i) => {
    if (currentFilter === 'all' || p.cat === currentFilter) acc.push({ p, i });
    return acc;
  }, []);

  if (!filtered.length) {
    grid.innerHTML = '<div class="empty-state">🔍 Немає фраз у цій категорії</div>';
    return;
  }

  grid.innerHTML = filtered.map(({ p, i }) => {
    const isHard = Storage.hasErrors(i);
    const prog = Storage.getProgress(i);
    const streakBadge = !Storage.learned.has(i) && prog.streak > 0
      ? `<span class="card-streak">${prog.streak}/${STREAK_TO_LEARN}</span>` : '';
    const txtHTML = highlightAnchors(p.en, p.anchors);
    const situation = p.situation ? `<div class="card-situation">📍 ${escapeHtml(p.situation)}</div>` : '';
    const examples = getPhraseExamples(p);
    const exPreview = examples[0] || '';
    const exExtra = examples.length > 1 ? `<div class="card-example-more">+${examples.length - 1} ще</div>` : '';
    return `<div class="phrase-card${Storage.learned.has(i) ? ' learned' : ''}${isHard ? ' hard-mode' : ''}" onclick="openModal(${i})">
      <div class="card-num">#${String(i + 1).padStart(3, '0')} ${isHard ? '⚠️' : ''}${streakBadge}</div>
      <div class="card-en-row">
        <div class="card-en">${txtHTML}</div>
        <button type="button" class="btn-speak" onclick="speakPhrase(${i}, 'en', event)" title="Озвучити">🔊</button>
      </div>
      <div class="card-ua">${escapeHtml(p.ua)}</div>
      <div class="card-example">${escapeHtml(exPreview)}</div>
      ${exExtra}
      ${situation}
      <span class="card-tag">${p.tag}</span>
    </div>`;
  }).join('');
}

function openModal(idx) {
  modalIdx = idx;
  Speech.stop();
  renderModal();
  document.getElementById('modal').classList.add('open');
}

function renderModal() {
  const p = PHRASES[modalIdx];
  document.getElementById('m-num').textContent = `Фраза #${modalIdx + 1} / ${TOTAL}`;
  document.getElementById('m-en').innerHTML = `
    <div class="modal-en-row">
      <div>${highlightAnchors(p.en, p.anchors)}</div>
      <button type="button" class="btn-speak" onclick="speakPhrase(${modalIdx}, 'en', event)" title="Озвучити фразу">🔊</button>
    </div>`;
  document.getElementById('m-ua').textContent = p.ua;
  document.getElementById('m-ex').innerHTML = renderExamplesHTML(p);
  document.getElementById('m-tip').innerHTML = `💡 ${escapeHtml(p.tip)}`;

  const situationEl = document.getElementById('m-situation');
  if (situationEl) {
    situationEl.innerHTML = p.situation ? `📍 <strong>Коли:</strong> ${escapeHtml(p.situation)}` : '';
    situationEl.style.display = p.situation ? 'block' : 'none';
  }

  const ruleEl = document.getElementById('m-rule');
  if (p.rule) {
    ruleEl.innerHTML = `⚙️ <strong>Правило:</strong> ${escapeHtml(p.rule)}`;
    ruleEl.style.display = 'block';
  } else {
    ruleEl.style.display = 'none';
  }

  const btn = document.getElementById('m-learn-btn');
  btn.textContent = Storage.learned.has(modalIdx) ? '✓ Вже знаю' : '✓ Знаю';
}

function toggleLearn() {
  Storage.toggleLearned(modalIdx);
  updateProgress();
  renderCards();
  renderModal();
}

function modalNext() {
  modalIdx = (modalIdx + 1) % TOTAL;
  renderModal();
}

function modalPrev() {
  modalIdx = (modalIdx - 1 + TOTAL) % TOTAL;
  renderModal();
}

function closeModal(e) {
  if (!e || e.target === document.getElementById('modal')) {
    Speech.stop();
    document.getElementById('modal').classList.remove('open');
  }
}

function setFilter(f) {
  currentFilter = f;
  document.querySelectorAll('.filter-btn').forEach(b => {
    const txt = b.getAttribute('data-filter') || '';
    b.classList.toggle('active', txt === f);
  });
  renderCards();
}
