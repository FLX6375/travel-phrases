/**
 * Adds hostel / airport / cafe scenario phrases. Run once, then build-phrases + build-bundle.
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const phrasesDir = path.join(root, 'js/data/phrases');

function p(en, ua, ex, tip, cat, anchors, situation) {
  const tag = {
    hotel: '🏨 Готель', transport: '🚌 Транспорт', cafe: '☕ Кафе'
  }[cat];
  return {
    en, ua, ex, tip, cat, tag,
    anchors: Array.isArray(anchors) ? anchors : [anchors],
    situation,
    examples: [ex, `— ${en.replace(/…/g, 'please')} — Sure, no problem.`]
  };
}

const NEW = {
  hotel: [
    p('Do you have a bed in a dorm room?', 'Чи є ліжко в загальному номері?', '— Do you have a bed in a dorm room? — Yes, we have one left in the 6-bed dorm.', 'Dorm room = кімната з кількома ліжками в хостелі.', 'hotel', ['dorm room'], 'В хостелі на рецепції'),
    p('Is there a kitchen I can use?', 'Чи є кухня, якою я можу користуватися?', '— Is there a kitchen I can use? — Yes, it\'s on the second floor.', 'Kitchen I can use — типова фраза в хостелах.', 'hotel', ['kitchen I can use'], 'В хостелі'),
    p('Could I leave my bag here after check-out?', 'Чи можна залишити сумку після виїзду?', '— Could I leave my bag here after check-out? — Of course, we have a storage room.', 'Leave my bag = залишити багаж.', 'hotel', ['leave my bag'], 'В хостелі після check-out'),
    p('What time are the quiet hours?', 'О котрій годині тиха година?', '— What time are the quiet hours? — From 11 PM to 8 AM, please.', 'Quiet hours = коли не можна шуміти.', 'hotel', ['quiet hours'], 'В хостелі'),
    p('Is breakfast included or do I pay extra?', 'Сніданок включений чи платно окремо?', '— Is breakfast included? — It\'s five euros extra.', 'Included or pay extra — уточнення в хостелі.', 'hotel', ['breakfast included'], 'В хостелі на рецепції')
  ],
  transport: [
    p('Where is the check-in desk?', 'Де стійка реєстрації?', '— Where is the check-in desk? — Terminal 2, departures level.', 'Check-in desk = реєстрація на рейс.', 'transport', ['check-in desk'], 'В аеропорту'),
    p('Which gate is my flight?', 'Який гейт мого рейсу?', '— Which gate is my flight? — Gate B12, boarding starts at 6:30.', 'Gate = вихід на посадку.', 'transport', ['Which gate'], 'В аеропорту'),
    p('Is my flight on time?', 'Мій рейс вчасно?', '— Is my flight on time? — There\'s a 40-minute delay, sorry.', 'On time = без затримки. Delay = затримка.', 'transport', ['on time'], 'В аеропорту біля табло'),
    p('Where can I collect my baggage?', 'Де забрати багаж?', '— Where can I collect my baggage? — Carousel 3, just follow the signs.', 'Baggage / luggage carousel = стрічка видачі багажу.', 'transport', ['collect my baggage'], 'В аеропорту після прильоту'),
    p('Do I need to take my laptop out at security?', 'Чи треба діставати ноутбук на перевірці?', '— Do I need to take my laptop out? — Yes, and liquids go in a clear bag.', 'Security = перевірка безпеки.', 'transport', ['take my laptop out'], 'В аеропорту на security')
  ],
  cafe: [
    p('Could we get a table by the window?', 'Чи можна столик біля вікна?', '— Could we get a table by the window? — Sure, follow me.', 'By the window = біля вікна.', 'cafe', ['table by the window'], 'У кафе'),
    p('Is there free Wi-Fi here?', 'Тут є безкоштовний Wi-Fi?', '— Is there free Wi-Fi here? — Yes, the password is on the menu.', 'Free Wi-Fi — майже в кожному кафе.', 'cafe', ['free Wi-Fi'], 'У кафе'),
    p('Could we split the bill?', 'Можемо розділити рахунок?', '— Could we split the bill? — Of course, together or separately?', 'Split the bill = розділити оплату.', 'cafe', ['split the bill'], 'У кафе після їжі'),
    p('Could I have a refill, please?', 'Чи можна долити ще?', '— Could I have a refill, please? — Sure, coffee or tea?', 'Refill = повторне наповнення (кава/чай).', 'cafe', ['refill'], 'У кафе'),
    p('Is this table reserved?', 'Цей столик зарезервований?', '— Is this table reserved? — No, please sit wherever you like.', 'Reserved = зарезервований.', 'cafe', ['table reserved'], 'У кафе')
  ]
};

function loadPhrases(cat) {
  const file = path.join(phrasesDir, cat + '.js');
  const src = fs.readFileSync(file, 'utf8');
  const m = src.match(/const PHRASES_\w+ = (\[[\s\S]*?\]);/);
  return { file, src, phrases: m ? eval('(' + m[1] + ')') : [] };
}

Object.entries(NEW).forEach(([cat, additions]) => {
  const { file, phrases } = loadPhrases(cat);
  const existing = new Set(phrases.map(x => x.en.toLowerCase()));
  const toAdd = additions.filter(x => !existing.has(x.en.toLowerCase()));
  if (!toAdd.length) {
    console.log(cat + ': no new phrases');
    return;
  }
  const merged = [...phrases, ...toAdd];
  const label = { hotel: '🏨 Готель', transport: '🚌 Транспорт', cafe: '☕ Кафе' }[cat];
  fs.writeFileSync(file, `// ${label} — ${merged.length} phrases\nconst PHRASES_${cat.toUpperCase()} = ${JSON.stringify(merged, null, 2)};\n`, 'utf8');
  console.log(cat + ': +' + toAdd.length, 'phrases, total', merged.length);
});
