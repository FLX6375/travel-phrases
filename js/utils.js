function highlightAnchors(text, anchors) {
  if (!anchors || !anchors.length) return text;
  let res = text;
  anchors.forEach(a => {
    const escaped = a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const reg = new RegExp(`(${escaped})`, 'gi');
    res = res.replace(reg, '<mark>$1</mark>');
  });
  return res;
}

function normalizePhrase(s) {
  return s.toLowerCase().replace(/[^\w\s']/g, '').replace(/\s+/g, ' ').trim();
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRandom(arr, n, exclude) {
  const pool = arr.filter((_, i) => !exclude || !exclude.has(i));
  return shuffle(pool).slice(0, n);
}

function pickWeighted(pool, size, getWeight) {
  const selected = [];
  const remaining = [...pool];
  while (selected.length < size && remaining.length > 0) {
    const weights = remaining.map(item => Math.max(getWeight(item), 0.1));
    const total = weights.reduce((sum, w) => sum + w, 0);
    let rand = Math.random() * total;
    let chosen = remaining.length - 1;
    for (let i = 0; i < remaining.length; i++) {
      rand -= weights[i];
      if (rand <= 0) {
        chosen = i;
        break;
      }
    }
    selected.push(remaining[chosen]);
    remaining.splice(chosen, 1);
  }
  return shuffle(selected);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeJsSingleQuotedString(str) {
  return String(str)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\r/g, '\\r')
    .replace(/\n/g, '\\n')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}

function findPhrasesByPatterns(patterns) {
  if (!patterns || !patterns.length) return [];
  return PHRASES.map((p, i) => ({ p, i })).filter(({ p }) =>
    patterns.some(pat => p.en.toLowerCase().includes(pat.toLowerCase()) ||
      (p.anchors && p.anchors.some(a => a.toLowerCase().includes(pat.toLowerCase())))
    )
  ).slice(0, 6);
}
