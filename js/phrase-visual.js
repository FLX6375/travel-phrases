/** Легкі «зображення»: emoji + градієнт за категорією. Опційно p.img — URL фото. */
const CATEGORY_VISUAL = {
  hotel:     { emoji: '🏨', label: 'Готель',       c1: '#3d5a80', c2: '#1e2d3d' },
  street:    { emoji: '🗺️', label: 'Вулиця',       c1: '#2d6a4f', c2: '#1b4332' },
  transport: { emoji: '🚌', label: 'Транспорт',    c1: '#5c4d7d', c2: '#352849' },
  cafe:      { emoji: '☕', label: 'Кафе',         c1: '#8b5a2b', c2: '#4a2c0f' },
  shop:      { emoji: '🛍️', label: 'Магазин',      c1: '#9d4edd', c2: '#5a189a' },
  emergency: { emoji: '🆘', label: 'Допомога',     c1: '#c1121f', c2: '#6a040f' },
  everyday:  { emoji: '💬', label: 'Повсякдень',   c1: '#457b9d', c2: '#1d3557' },
  social:    { emoji: '👋', label: 'Знайомство',   c1: '#e76f51', c2: '#9d3b2a' },
  plans:     { emoji: '📅', label: 'Плани',        c1: '#2a9d8f', c2: '#1a535c' }
};

function getPhraseVisual(p) {
  return CATEGORY_VISUAL[p.cat] || CATEGORY_VISUAL.everyday;
}

function phraseVisualHTML(p, variant) {
  if (p.img) {
    return `<img src="${escapeHtml(p.img)}" alt="" class="phrase-img phrase-img--${variant}" loading="lazy">`;
  }
  const v = getPhraseVisual(p);
  const scene = variant === 'modal' && p.situation
    ? `<span class="phrase-visual-scene">${escapeHtml(p.situation)}</span>`
    : '';
  return `<div class="phrase-visual phrase-visual--${variant} phrase-visual--cat-${escapeHtml(p.cat)}" ` +
    `style="background:linear-gradient(135deg,${v.c1},${v.c2})" role="img" aria-label="${escapeHtml(v.label)}">` +
    `<span class="phrase-visual-emoji" aria-hidden="true">${v.emoji}</span>${scene}</div>`;
}
