/**
 * Adds a second contextual example (ex2 / examples[]) to every phrase.
 * Run: node scripts/enrich-phrases.js
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const phrasesDir = path.join(root, 'js/data/phrases');
const cats = ['hotel', 'street', 'transport', 'cafe', 'shop', 'emergency', 'everyday', 'social', 'plans'];

const REPLIES = {
  hotel: [
    "Of course, I'll send someone up right away.",
    "Certainly — one moment, please.",
    "Yes, that's included. Is there anything else?"
  ],
  street: [
    "Sure — it's about five minutes on foot.",
    "No problem. You can't miss it.",
    "Yes, just keep straight and turn left."
  ],
  transport: [
    "Yes, it stops there. You need a single ticket.",
    "Platform 2 — the train leaves in twelve minutes.",
    "Sure, I'll let you know when we arrive."
  ],
  cafe: [
    "Of course. Anything to drink?",
    "Right away. Would you like anything else?",
    "Sure — I'll bring that over in a moment."
  ],
  shop: [
    "Let me check in the back for you.",
    "Yes, we accept cards and contactless.",
    "Sure — the fitting rooms are over there."
  ],
  emergency: [
    "Stay calm — help is on the way.",
    "The nearest one is two streets away.",
    "I'll call for help right now."
  ],
  everyday: [
    "Yeah, totally.",
    "Same here!",
    "Sounds good to me."
  ],
  social: [
    "Nice to meet you too!",
    "No worries at all.",
    "Of course — go ahead."
  ],
  plans: [
    "Perfect — see you then!",
    "Works for me. Text me when you're on your way.",
    "Sure, let's do that."
  ]
};

const ALT_SLOTS = {
  hotel: ['the pharmacy', 'the elevator', 'my room', 'a late check-out', 'an extra blanket'],
  street: ['the museum', 'the bank', 'the post office', 'the town centre', 'the nearest café'],
  transport: ['the airport', 'the city centre', 'Central Station', 'the next stop', 'Oxford Street'],
  cafe: ['the soup of the day', 'a glass of water', 'the vegetarian option', 'dessert', 'the wine list'],
  shop: ['a larger size', 'a receipt', 'a gift wrap', 'the changing room', 'a discount'],
  emergency: ['a doctor', 'the police', 'some water', 'my embassy', 'a first-aid kit'],
  everyday: ['that', 'it', 'the plan', 'tomorrow', 'what you said'],
  social: ['you', 'that', 'coffee sometime', 'your name', 'a minute'],
  plans: ['six o\'clock', 'tomorrow', 'the weekend', 'lunch', 'Friday evening']
};

function pick(arr, seed) {
  return arr[Math.abs(seed) % arr.length];
}

function seedFrom(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0;
  return h;
}

function normalizeEn(en) {
  return en.replace(/\s*\/\s*/g, ' or ').replace(/…/g, '...').trim();
}

function buildEx2(p) {
  const en = normalizeEn(p.en);
  const cat = p.cat;
  const seed = seedFrom(en);
  const reply = pick(REPLIES[cat] || REPLIES.everyday, seed);
  const slot = pick(ALT_SLOTS[cat] || ALT_SLOTS.everyday, seed + 7);

  if (en.includes('Could you tell me where')) {
    return `— Could you tell me where ${slot} is? — ${reply}`;
  }
  if (en.startsWith('Could you ') || en.startsWith('Could I ')) {
    return `— ${en.replace('...', slot)} — ${reply}`;
  }
  if (en.startsWith('Is ') || en.startsWith('Are ') || en.startsWith('Do ') || en.startsWith('Does ')) {
    return `— ${en} — ${reply}`;
  }
  if (en.startsWith('Where ') || en.startsWith('What ') || en.startsWith('How ') || en.startsWith('Which ')) {
    return `— ${en.replace('...', slot)} — ${reply}`;
  }
  if (en.includes('?')) {
    return `— ${en} — ${reply}`;
  }
  if (p.ex && p.ex.startsWith('—')) {
    return `— ${en} — ${reply}`;
  }
  return `— ${en} — ${reply}`;
}

function enrichPhrase(p) {
  if (Array.isArray(p.examples) && p.examples.length >= 2) return p;
  const ex1 = p.ex || p.en;
  let ex2 = p.ex2;
  if (!ex2 || ex2 === ex1) ex2 = buildEx2(p);
  if (ex2 === ex1) ex2 = buildEx2({ ...p, en: p.en + ' ' });
  const examples = [ex1, ex2];
  if (p.examples && p.examples.length > 2) {
    return { ...p, examples: p.examples };
  }
  const { ex2: _drop, ...rest } = p;
  return { ...rest, ex: ex1, examples };
}

function main() {
  let total = 0;
  cats.forEach(cat => {
    const file = path.join(phrasesDir, cat + '.js');
    const src = fs.readFileSync(file, 'utf8');
    const m = src.match(/const PHRASES_\w+ = (\[[\s\S]*?\]);/);
    if (!m) return;
    const phrases = eval('(' + m[1] + ')').map(enrichPhrase);
    total += phrases.length;
    const label = src.match(/^\/\/ (.+)/)?.[1] || cat;
    const varName = 'PHRASES_' + cat.toUpperCase();
    fs.writeFileSync(file, `// ${label}\nconst ${varName} = ${JSON.stringify(phrases, null, 2)};\n`, 'utf8');
  });
  console.log('Enriched', total, 'phrases with 2+ examples each');
}

main();
