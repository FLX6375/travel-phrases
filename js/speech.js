const Speech = {
  voice: null,
  ready: false,

  init() {
    if (!('speechSynthesis' in window)) return false;
    const pick = () => {
      const voices = speechSynthesis.getVoices();
      this.voice =
        voices.find(v => v.lang === 'en-GB') ||
        voices.find(v => v.lang.startsWith('en-GB')) ||
        voices.find(v => v.lang === 'en-US') ||
        voices.find(v => v.lang.startsWith('en-')) ||
        voices[0] || null;
      this.ready = true;
    };
    pick();
    speechSynthesis.addEventListener('voiceschanged', pick);
    return true;
  },

  available() {
    return 'speechSynthesis' in window;
  },

  clean(text) {
    return String(text)
      .replace(/…/g, '')
      .replace(/\[[^\]]*\]/g, '')
      .replace(/[—–-]\s*/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  },

  speak(text, opts = {}) {
    if (!this.available()) return false;
    const cleaned = this.clean(text);
    if (!cleaned) return false;

    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(cleaned);
    u.lang = opts.lang || 'en-GB';
    if (this.voice) u.voice = this.voice;
    u.rate = opts.rate ?? 0.88;
    u.pitch = opts.pitch ?? 1;
    speechSynthesis.speak(u);
    return true;
  },

  speakPhrase(p, part = 'en') {
    if (part === 'ex') {
      const examples = getPhraseExamples(p);
      return this.speak(examples[0] || p.en);
    }
    return this.speak(p.en);
  },

  stop() {
    if (this.available()) speechSynthesis.cancel();
  }
};

function getPhraseExamples(p) {
  if (Array.isArray(p.examples) && p.examples.length) return p.examples;
  const list = [];
  if (p.ex) list.push(p.ex);
  if (p.ex2) list.push(p.ex2);
  return list.length ? list : [p.en];
}

function speakText(text, e) {
  if (e) e.stopPropagation();
  Speech.speak(text);
}

function speakPhrase(idx, part, e) {
  if (e) e.stopPropagation();
  Speech.speakPhrase(PHRASES[idx], part);
}

function stopSpeech() {
  Speech.stop();
}
