/** Adds remaining unique phrases (run once after add-100-phrases.js). */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const root = path.join(__dirname, '..');
const phrasesDir = path.join(root, 'js/data/phrases');

const TAGS = {
  hotel: '🏨 Готель', street: '🗺️ Вулиця', transport: '🚌 Транспорт',
  cafe: '☕ Kафе', shop: '🛍️ Магазин', emergency: '🆘 Допомога',
  everyday: '💬 Повсякдень', social: '👋 Знайомство', plans: '📅 Плани'
};

function p(en, ua, ex, tip, cat, anchors) {
  const tag = { hotel: '🏨 Готель', street: '🗺️ Вулиця', transport: '🚌 Транспорт', cafe: '☕ Кафе', shop: '🛍️ Магазин', emergency: '🆘 Допомога', everyday: '💬 Повсякдень', social: '👋 Знайомство', plans: '📅 Плани' }[cat];
  return { en, ua, ex, tip, cat, tag, anchors: [].concat(anchors), situation: '', examples: [ex] };
}

const EXTRA = {
  plans: [p('Are we still on for tonight?', 'Ми все ще домовлені на вечір?', '— Are we still on for tonight? — Yes, see you at eight!', 'Still on for = план у силі.', 'plans', ['still on for'])],
  hotel: [
    p('Could I get a late check-out?', 'Чи можна пізній виїзд?', '— Could I get a late check-out until two? — That\'ll be fifteen euros extra.', 'Late check-out = виїзд пізніше стандартного часу.', 'hotel', ['late check-out']),
    p('The Wi-Fi password, please?', 'Пароль від Wi-Fi, будь ласка?', '— The Wi-Fi password, please? — It\'s on the card on the desk.', 'Typical hotel request.', 'hotel', ['Wi-Fi password'])
  ],
  street: [p('Is this the right bus stop?', 'Це правильна зупинка?', '— Is this the right bus stop for the museum? — Yes, number 12 stops here.', 'Bus stop = зупинка автобуса.', 'street', ['right bus stop'])],
  transport: [p('One ticket to the city centre, please.', 'Один квиток до центру, будь ласка.', '— One ticket to the city centre, please. — That\'s three fifty.', 'Classic ticket purchase phrase.', 'transport', ['One ticket to'])],
  cafe: [
    p('Could I have a doggy bag?', 'Чи можна упакувати залишки?', '— Could I have a doggy bag? — Of course, I\'ll pack it up.', 'Doggy bag = контейнер для залишків їжі.', 'cafe', ['doggy bag']),
    p('Is service included?', 'Чи включено обслуговування?', '— Is service included in the bill? — Yes, but tips are welcome.', 'Service charge = плата за обслуговування.', 'cafe', ['service included'])
  ],
  shop: [
    p('Do you have a loyalty card?', 'Чи є карта лояльності?', '— Do you have a loyalty card? — Yes, you get ten percent off.', 'Loyalty card = карта постійного клієнта.', 'shop', ['loyalty card']),
    p('Can I pay in instalments?', 'Чи можна оплатити частинами?', '— Can I pay in instalments? — Only for purchases over two hundred.', 'Instalments = розстрочка.', 'shop', ['instalments'])
  ],
  emergency: [
    p('I need to report a theft.', 'Мені треба заявити про крадіжку.', '— I need to report a theft at the hotel.', 'Report a theft = заявити про крадіжку.', 'emergency', ['report a theft']),
    p('My wallet is missing.', 'Мій гаманець зник.', '— My wallet is missing — I think I left it in the taxi.', 'Missing = зник / загубився.', 'emergency', ['wallet is missing'])
  ],
  everyday: [
    p('That\'s a good point.', 'Слушне зауваження.', '— That\'s a good point — I hadn\'t thought of that.', 'Good point = влучне зауваження.', 'everyday', ['good point']),
    p('I\'m looking forward to it.', 'Я з нетерпінням чекаю.', '— See you on Friday! — I\'m looking forward to it.', 'Look forward to = з нетерпінням чекати.', 'everyday', ['looking forward to it']),
    p('It\'s up to you.', 'Як скажеш / на твій вибір.', '— Where should we eat? — It\'s up to you.', 'Up to you = твій вибір.', 'everyday', ['up to you']),
    p('Sounds like a plan.', 'Звучить як план.', '— Let\'s meet at six. — Sounds like a plan!', 'Sounds like a plan = домовились.', 'everyday', ['Sounds like a plan'])
  ],
  social: [p('What do you do for a living?', 'Чим ти займаєшся?', '— What do you do for a living? — I work in marketing.', 'For a living = професійно / на життя.', 'social', ['for a living'])]
};

const SITUATIONS = {
  hotel: 'На рецепції готелю або в номері', street: 'На вулиці', transport: 'В транспорті',
  cafe: 'У кафе', shop: 'У магазині', emergency: 'У складній ситуації',
  everyday: 'У повсякденній розмові', social: 'При знайомстві', plans: 'Коли домовляєшся про плани'
};

let added = 0;
Object.entries(EXTRA).forEach(([cat, additions]) => {
  const file = path.join(phrasesDir, cat + '.js');
  const src = fs.readFileSync(file, 'utf8');
  const m = src.match(/const PHRASES_\w+ = (\[[\s\S]*?\]);/);
  const phrases = m ? eval('(' + m[1] + ')') : [];
  const existing = new Set(phrases.map(x => x.en.toLowerCase().trim()));
  const toAdd = additions.filter(x => !existing.has(x.en.toLowerCase().trim())).map(x => ({
    ...x, situation: x.situation || SITUATIONS[cat], tag: TAGS[cat] || x.tag
  }));
  if (!toAdd.length) return;
  const merged = [...phrases, ...toAdd];
  fs.writeFileSync(file, `// ${TAGS[cat]} — ${merged.length} phrases\nconst PHRASES_${cat.toUpperCase()} = ${JSON.stringify(merged, null, 2)};\n`, 'utf8');
  added += toAdd.length;
  console.log(cat + ': +' + toAdd.length);
});
console.log('Extra added:', added);
