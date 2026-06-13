let currentRuleFilter = 'all';

function renderRules() {
  const container = document.getElementById('rules-content');
  if (!container) return;

  const filtered = currentRuleFilter === 'all'
    ? GRAMMAR_RULES
    : GRAMMAR_RULES.filter(r => r.category === currentRuleFilter);

  container.innerHTML = `
    <div class="rules-intro">
      <h2>🧭 Як формувати речення</h2>
      <p>Англійська в подорожі — це не тисячі окремих слів, а <strong>готові шаблони</strong>. Вивчи патерн, підставляй своє слово — і фраза звучить природно. Нижче — ключові конструкції з прикладами з твого тренажера.</p>
      <p style="margin-top:10px;color:var(--muted);font-size:.85rem;">💡 Клікни на картку правила, щоб розгорнути деталі. Фрази внизу — приклади цього патерну.</p>
    </div>
    <div class="rules-nav" id="rules-nav">
      ${Object.entries(RULE_CATEGORIES).map(([key, label]) =>
        `<button class="rules-nav-btn${key === currentRuleFilter ? ' active' : ''}" onclick="setRuleFilter('${key}')">${label}</button>`
      ).join('')}
    </div>
    <div id="rules-list">
      ${filtered.map((r, i) => renderRuleCard(r, i)).join('')}
    </div>
  `;
}

function renderRuleCard(rule, idx) {
  const related = findPhrasesByPatterns(rule.patterns);
  const chips = related.map(({ p, i }) =>
    `<span class="rule-phrase-chip" onclick="openModal(${i}); setTab('browse')">${escapeHtml(p.en.slice(0, 45))}${p.en.length > 45 ? '…' : ''}</span>`
  ).join('');

  return `<div class="rule-card" id="rule-${idx}" onclick="toggleRuleCard(${idx})">
    <div class="rule-card-header">
      <span class="rule-icon">${rule.icon}</span>
      <div>
        <div class="rule-title">${escapeHtml(rule.title)}</div>
        <div class="rule-template">${escapeHtml(rule.template)}</div>
        <div class="rule-summary">${escapeHtml(rule.summary)}</div>
      </div>
    </div>
    <div class="rule-body">
      <div class="rule-section">
        <h4>Коли використовувати</h4>
        <p>${escapeHtml(rule.whenToUse)}</p>
      </div>
      <div class="rule-section">
        <h4>Структура</h4>
        <p>${escapeHtml(rule.structure)}</p>
      </div>
      ${rule.whyItWorks ? `<div class="rule-section rule-why">
        <h4>Чому саме так</h4>
        <p>${escapeHtml(rule.whyItWorks)}</p>
      </div>` : ''}
      <div class="rule-section">
        <h4>Приклади</h4>
        ${rule.examples.map(ex => `<div class="rule-example">
          <span>${escapeHtml(ex)}</span>
          ${Speech.available() ? `<button type="button" class="btn-speak btn-speak-sm" onclick="event.stopPropagation(); speakText('${escapeJsSingleQuotedString(ex.split(' — ')[0])}')" title="Озвучити">🔊</button>` : ''}
        </div>`).join('')}
      </div>
      <div class="rule-section">
        <h4>Типові помилки</h4>
        ${rule.mistakes.map(m => `<div class="rule-mistake">${escapeHtml(m)}</div>`).join('')}
      </div>
      ${chips ? `<div class="rule-section"><h4>Фрази з тренажера</h4><div class="rule-link-phrases">${chips}</div></div>` : ''}
    </div>
  </div>`;
}

function toggleRuleCard(idx) {
  const card = document.getElementById('rule-' + idx);
  if (card) card.classList.toggle('open');
}

function setRuleFilter(f) {
  currentRuleFilter = f;
  renderRules();
}
