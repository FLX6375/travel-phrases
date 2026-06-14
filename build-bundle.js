const fs = require('fs');
const path = require('path');

const root = __dirname;
const BUNDLE_VERSION = 20;
const BUNDLE_FILE = `app.v${BUNDLE_VERSION}.js`;
const MIN_BUNDLE_SIZE = 50000;

function read(rel) {
  return fs.readFileSync(path.join(root, rel), 'utf8');
}

const css = read('css/main.css').replace(
  /@import url\('https:\/\/fonts\.googleapis\.com\/css2\?family=Inter[^']+'\);?\s*/,
  '/* fonts loaded via link tag */\n'
);

const scripts = [
  'js/constants/categories.js',
  'js/data/phrases/hotel.js',
  'js/data/phrases/street.js',
  'js/data/phrases/transport.js',
  'js/data/phrases/cafe.js',
  'js/data/phrases/shop.js',
  'js/data/phrases/emergency.js',
  'js/data/phrases/everyday.js',
  'js/data/phrases/social.js',
  'js/data/phrases/plans.js',
  'js/data/phrases/aggregate.js',
  'js/data/dialogues.js',
  'js/data/situations.js',
  'js/data/grammar-rules.js',
  'js/utils.js',
  'js/speech.js',
  'js/sync-config.js',
  'js/storage.js',
  'js/sync.js',
  'js/quiz-errors.js',
  'js/browse.js',
  'js/rules.js',
  'js/quiz.js',
  'js/practice.js',
  'js/stats.js',
  'js/app.js'
].map(read).join('\n\n');

const bundleJs = scripts.replace(/^\/\/ Auto-generated phrase data\n/, '') + `

if (typeof PHRASES !== 'undefined' && typeof TOTAL !== 'undefined') {
  const ok = document.getElementById('bundle-ok');
  if (ok) ok.style.display = 'block';
  console.log('Travel Phrases v${BUNDLE_VERSION} loaded OK, phrases:', TOTAL);
}
`;

fs.writeFileSync(path.join(root, BUNDLE_FILE), bundleJs, 'utf8');

const bodyHtml = `
<header>
  <div class="header-inner">
    <div class="header-top">
      <h1>✈️ Travel <span>Phrases</span></h1>
      <div style="font-size:.82rem;color:var(--muted)">Вивчено: <span id="learned-count">0</span> / <span id="total-count">0</span></div>
    </div>
    <div class="progress-bar-wrap"><div class="progress-bar" id="prog-bar" style="width:0%"></div></div>
    <div class="progress-label" id="prog-label">Завантаження...</div>
  </div>
  <div class="tabs">
    <button class="tab active" data-tab="browse" onclick="setTab('browse')">📚 Картки</button>
    <button class="tab" data-tab="rules" onclick="setTab('rules')">📖 Правила</button>
    <button class="tab" data-tab="quiz" onclick="setTab('quiz')">🧠 Тренажер</button>
    <button class="tab" data-tab="stats" onclick="setTab('stats')">📊 Прогрес</button>
  </div>
</header>

<div class="filters" id="filters">
  <button class="filter-btn active" data-filter="all" onclick="setFilter('all')">Всі</button>
  <button class="filter-btn" data-filter="hotel" onclick="setFilter('hotel')">🏨 Готель</button>
  <button class="filter-btn" data-filter="street" onclick="setFilter('street')">🗺️ Вулиця</button>
  <button class="filter-btn" data-filter="transport" onclick="setFilter('transport')">🚌 Транспорт</button>
  <button class="filter-btn" data-filter="cafe" onclick="setFilter('cafe')">☕ Кафе</button>
  <button class="filter-btn" data-filter="shop" onclick="setFilter('shop')">🛍️ Магазин</button>
  <button class="filter-btn" data-filter="emergency" onclick="setFilter('emergency')">🆘 Допомога</button>
  <button class="filter-btn" data-filter="everyday" onclick="setFilter('everyday')">💬 Повсякдень</button>
  <button class="filter-btn" data-filter="social" onclick="setFilter('social')">👋 Знайомство</button>
  <button class="filter-btn" data-filter="plans" onclick="setFilter('plans')">📅 Плани</button>
</div>

<main>
  <div id="tab-browse"><div class="phrase-grid" id="phrase-grid"></div></div>
  <div id="tab-rules" style="display:none"><div id="rules-content"></div></div>
  <div id="tab-quiz" style="display:none">
    <div class="quiz-wrap">
      <div class="quiz-type-select">
        <button class="quiz-type-btn active" id="qt-en-ua" onclick="setQuizType('en-ua')">🇬🇧→🇺🇦 Переклад</button>
        <button class="quiz-type-btn" id="qt-ua-en" onclick="setQuizType('ua-en')">🇺🇦→🇬🇧 Вибір</button>
        <button class="quiz-type-btn" id="qt-scramble" onclick="setQuizType('scramble')">🧩 Конструктор</button>
        <button class="quiz-type-btn" id="qt-fill" onclick="setQuizType('fill')">🔤 Пропуск</button>
        <button class="quiz-type-btn" id="qt-type" onclick="setQuizType('type')">✏️ Письмо</button>
        <button class="quiz-type-btn" id="qt-situation" onclick="setQuizType('situation')">🎭 Ситуація</button>
        <button class="quiz-type-btn" id="qt-dialogue" onclick="setQuizType('dialogue')">💬 Діалог</button>
        <button class="quiz-type-btn" id="qt-flash" onclick="setQuizType('flash')">⚡ Флеш</button>
        <button class="quiz-type-btn" id="qt-pattern" onclick="setQuizType('pattern')">🔗 Патерн</button>
        <button class="quiz-type-btn" id="qt-marathon" onclick="setQuizType('marathon')">🏃 Марафон</button>
      </div>
      <div class="quiz-options-bar">
        <button type="button" class="quiz-errors-toggle" id="quiz-errors-toggle" onclick="toggleQuizErrorsOnly()" title="Тренуватись лише на фразах з помилками">
          <span id="quiz-errors-label">⚠️ Тільки помилки</span>
        </button>
      </div>
      <div class="quiz-card" id="quiz-card">
        <div class="quiz-progress" id="quiz-prog"></div>
        <div class="quiz-q" id="quiz-q"></div>
        <div class="quiz-hint" id="quiz-hint"></div>
        <div id="quiz-opts-area"></div>
        <div class="quiz-feedback" id="quiz-fb"></div>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
          <button class="btn btn-ghost" id="quiz-next" onclick="nextQuestion()" style="display:none">Далі →</button>
          <button class="btn btn-primary" id="quiz-restart" onclick="startQuiz()" style="display:none">🔄 Новий тест</button>
        </div>
      </div>
    </div>
  </div>
  <div id="tab-stats" style="display:none">
    <div class="stats-grid" id="stats-grid"></div>
    <div id="mastery-legend"></div>
    <div id="sync-panel" style="margin-bottom:24px"></div>
    <h3 style="font-size:.9rem;color:var(--muted);margin-bottom:12px;font-weight:500;">По категоріях</h3>
    <div id="cat-stats"></div>
    <div style="margin-top:24px;"><button class="btn btn-ghost" onclick="resetProgress()">🗑️ Скинути прогрес</button></div>
  </div>
</main>

<div class="modal-overlay" id="modal" onclick="closeModal(event)">
  <div class="modal">
    <button class="modal-close" onclick="closeModal()">✕</button>
    <div class="modal-num" id="m-num"></div>
    <div class="modal-en" id="m-en"></div>
    <div class="modal-ua" id="m-ua"></div>
    <div class="modal-example" id="m-ex"></div>
    <div class="modal-tip" id="m-tip"></div>
    <div class="modal-tip" id="m-situation" style="background:rgba(61,214,140,.08);"></div>
    <div class="modal-rule" id="m-rule"></div>
    <div class="modal-actions">
      <button class="btn btn-nav" onclick="modalPrev()">← Назад</button>
      <button class="btn btn-nav" onclick="modalNext()">Вперед →</button>
      <button class="btn btn-success" id="m-learn-btn" onclick="toggleLearn()">✓ Знаю</button>
    </div>
  </div>
</div>

<div id="bundle-ok" style="display:none;position:fixed;bottom:8px;right:8px;font-size:.65rem;color:var(--green);opacity:.6;z-index:999">v${BUNDLE_VERSION} OK</div>
<div id="load-error" style="display:none;position:fixed;inset:0;background:#0f1117;color:#f7706a;padding:40px;font-family:sans-serif;z-index:9999"></div>
`;

const html = `<!DOCTYPE html>
<html lang="uk">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<meta name="theme-color" content="#0f1117">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
<title>Travel Phrases v${BUNDLE_VERSION}</title>
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%E2%9C%88%EF%B8%8F%3C/text%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
${css}
</style>
<script src="./js/boot-guard.js"></script>
</head>
<body>
${bodyHtml}
<script src="./${BUNDLE_FILE}?v=${BUNDLE_VERSION}"></script>
<script src="./js/load-check.js" data-bundle="${BUNDLE_FILE}"></script>
</body>
</html>`;

['index.html', 'travel-phrases.html'].forEach(name => {
  fs.writeFileSync(path.join(root, name), html, 'utf8');
});

// Remove old bundle files (keep only current version)
fs.readdirSync(root)
  .filter(f => /^app\.v\d+\.js$/.test(f) && f !== BUNDLE_FILE)
  .forEach(f => {
    fs.unlinkSync(path.join(root, f));
    console.log('Removed old bundle:', f);
  });
['bundle.js'].forEach(f => {
  const p = path.join(root, f);
  if (fs.existsSync(p)) fs.unlinkSync(p);
});

console.log(BUNDLE_FILE + ':', bundleJs.length, 'bytes');
console.log('index.html:', html.length, 'bytes');
