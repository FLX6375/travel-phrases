/**
 * Adds 100 travel phrases (deduped). Run: node scripts/add-100-phrases.js
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const phrasesDir = path.join(root, 'js/data/phrases');

const TAGS = {
  hotel: '🏨 Готель', street: '🗺️ Вулиця', transport: '🚌 Транспорт',
  cafe: '☕ Кафе', shop: '🛍️ Магазин', emergency: '🆘 Допомога',
  everyday: '💬 Повсякдень', social: '👋 Знайомство', plans: '📅 Плани'
};

const SITUATIONS = {
  hotel: 'На рецепції готелю або в номері',
  street: 'На вулиці, коли спілкуєшся з місцевими',
  transport: 'В транспорті або на зупинці',
  cafe: 'У кафе або ресторані',
  shop: 'У магазині під час покупок',
  emergency: 'У складній або екстреній ситуації',
  everyday: 'У повсякденній розмові з людьми',
  social: 'При знайомстві та неформальному спілкуванні',
  plans: 'Коли домовляєшся про зустріч або плани'
};

function p(en, ua, ex, tip, cat, anchors) {
  return {
    en, ua, ex, tip, cat, tag: TAGS[cat],
    anchors: Array.isArray(anchors) ? anchors : [anchors],
    situation: SITUATIONS[cat],
    examples: [ex, `— ${en.replace(/…/g, '')} — Sure, no problem.`]
  };
}

const BATCH = {
  hotel: [
    p('Could I get a wake-up call at six?', 'Чи можна будильний дзвінок о шостій?', '— Could I get a wake-up call at six? — Of course, we\'ll call your room.', 'Wake-up call = дзвінок з рецепції для пробудження.', 'hotel', ['wake-up call']),
    p('Is there a safe in the room?', 'Чи є сейф у номері?', '— Is there a safe in the room? — Yes, it\'s in the wardrobe.', 'Safe = сейф для документів і грошей.', 'hotel', ['safe in the room']),
    p('The air conditioning isn\'t working.', 'Кондиціонер не працює.', '— The air conditioning isn\'t working. — I\'ll send maintenance right away.', 'Maintenance = технічна служба.', 'hotel', ['air conditioning']),
    p('Could we have an extra pillow?', 'Чи можна додаткову подушку?', '— Could we have an extra pillow? — Certainly, I\'ll bring one up.', 'Extra pillow / blanket — типові запити.', 'hotel', ['extra pillow']),
    p('What time is check-out?', 'О котрій виїзд?', '— What time is check-out? — By eleven, but late check-out is available.', 'Check-out = виїзд з готелю.', 'hotel', ['check-out']),
    p('Is there a laundry service?', 'Чи є пральня?', '— Is there a laundry service? — Yes, leave your bag outside by nine.', 'Laundry service = прання одягу.', 'hotel', ['laundry service']),
    p('Could you hold my luggage?', 'Чи можна залишити багаж у вас?', '— Could you hold my luggage? — Of course, we\'ll store it until evening.', 'Hold luggage = тимчасово зберігати багаж.', 'hotel', ['hold my luggage']),
    p('Do you have any rooms available tonight?', 'Чи є вільні номери на сьогодні?', '— Do you have any rooms available tonight? — Yes, a double for eighty euros.', 'Available tonight = вільний на сьогодні.', 'hotel', ['available tonight']),
    p('I\'d like a non-smoking room.', 'Мені потрібен номер для некурців.', '— I\'d like a non-smoking room, please. — No problem at all.', 'Non-smoking = для некурців.', 'hotel', ['non-smoking room']),
    p('Could you send someone to fix the shower?', 'Чи можна когось для душу?', '— The shower isn\'t working. — Could you send someone to fix it?', 'Fix the shower = полагодити душ.', 'hotel', ['fix the shower']),
    p('Is breakfast served in the room?', 'Чи можна сніданок у номер?', '— Is breakfast served in the room? — Yes, room service until ten.', 'Room service = обслуговування в номері.', 'hotel', ['breakfast served'])
  ],
  street: [
    p('Is it far from here?', 'Це далеко звідси?', '— Is it far from here? — About ten minutes on foot.', 'On foot = пішки.', 'street', ['far from here']),
    p('Could you show me on the map?', 'Покажете на карті?', '— Could you show me on the map? — Sure, you\'re here — go straight.', 'Show on the map — коли не розумієш напрямки.', 'street', ['show me on the map']),
    p('Am I going the right way?', 'Я йду правильно?', '— Am I going the right way to the station? — Yes, keep going straight.', 'Right way = правильний напрямок.', 'street', ['right way']),
    p('Is there a cash machine nearby?', 'Чи є банкомат поруч?', '— Is there a cash machine nearby? — Yes, at the corner shop.', 'Cash machine / ATM = банкомат.', 'street', ['cash machine']),
    p('What\'s the best way to get there?', 'Як найкраще туди дістатися?', '— What\'s the best way to get there? — Take the metro — it\'s faster.', 'Best way = найкращий спосіб.', 'street', ['best way to get']),
    p('Is this area safe at night?', 'Чи безпечний цей район вночі?', '— Is this area safe at night? — Generally yes, but stay on main streets.', 'Safe at night = безпечно вночі.', 'street', ['safe at night']),
    p('Could you write that down for me?', 'Чи можете записати?', '— Could you write that down for me? — Of course — here you go.', 'Write down = записати на папері.', 'street', ['write that down']),
    p('I think I\'m lost.', 'Здається, я загубився.', '— Excuse me, I think I\'m lost. — Where are you trying to go?', 'Lost = загубився.', 'street', ['I\'m lost']),
    p('Is there a public toilet nearby?', 'Чи є туалет поруч?', '— Is there a public toilet nearby? — In the café on the left.', 'Public toilet = громадський туалет.', 'street', ['public toilet']),
    p('How long does it take to walk?', 'Скільки йти пішки?', '— How long does it take to walk? — Maybe fifteen minutes.', 'How long does it take = скільки часу займе.', 'street', ['How long does it take']),
    p('Can I cross here?', 'Чи можна тут переходити?', '— Can I cross here? — Yes, the light is green.', 'Cross = переходити вулицю.', 'street', ['Can I cross'])
  ],
  transport: [
    p('How much is a day pass?', 'Скільки коштує проїзний на день?', '— How much is a day pass? — Twelve euros for unlimited travel.', 'Day pass = квиток на день.', 'transport', ['day pass']),
    p('Does this bus go to the city centre?', 'Цей автобус їде в центр?', '— Does this bus go to the city centre? — Yes, get off at the fifth stop.', 'City centre = центр міста.', 'transport', ['city centre']),
    p('Which ticket do I need?', 'Який квиток мені потрібен?', '— Which ticket do I need for zone two? — A single or a day pass.', 'Zone = зона (тарифна).', 'transport', ['Which ticket']),
    p('Is this seat free?', 'Це місце вільне?', '— Is this seat free? — Yes, go ahead.', 'Seat free = вільне місце.', 'transport', ['seat free']),
    p('When is the next train?', 'Коли наступний потяг?', '— When is the next train to Brighton? — In about eight minutes.', 'Next train = наступний рейс.', 'transport', ['next train']),
    p('I need to get off at the next stop.', 'Мені виходити на наступній.', '— I need to get off at the next stop, please.', 'Get off = вийти (з транспорту).', 'transport', ['get off at the next stop']),
    p('Could you tell me when we arrive?', 'Скажете, коли приїдемо?', '— Could you tell me when we arrive? — Of course, I\'ll let you know.', 'Let you know = повідомлю.', 'transport', ['when we arrive']),
    p('Is there a discount for students?', 'Чи є знижка для студентів?', '— Is there a discount for students? — Yes, with a valid ID.', 'Valid ID = дійсний документ.', 'transport', ['discount for students']),
    p('The train is delayed.', 'Потяг запізнюється.', '— The train is delayed by twenty minutes, sorry.', 'Delayed = запізнюється.', 'transport', ['delayed']),
    p('Where can I buy a ticket?', 'Де купити квиток?', '— Where can I buy a ticket? — At the machine over there.', 'Ticket machine = автомат з квитками.', 'transport', ['buy a ticket']),
    p('Is this the right line for the airport?', 'Це правильна лінія до аеропорту?', '— Is this the right line for the airport? — Yes, stay on until the end.', 'Line = лінія метро/трамвая.', 'transport', ['right line'])
  ],
  cafe: [
    p('Could I see the dessert menu?', 'Чи можна меню десертів?', '— Could I see the dessert menu? — Here you are.', 'Dessert menu = меню солодкого.', 'cafe', ['dessert menu']),
    p('Is this dish spicy?', 'Ця страва гостра?', '— Is this dish spicy? — A little — I can make it milder.', 'Spicy / mild = гостре / не гостре.', 'cafe', ['Is this dish spicy']),
    p('I\'m allergic to nuts.', 'У мене алергія на горіхи.', '— I\'m allergic to nuts — is this safe?', 'Allergic to = алергія на.', 'cafe', ['allergic to nuts']),
    p('Could we have the bill, please?', 'Рахунок, будь ласка.', '— Could we have the bill, please? — Of course, I\'ll bring it now.', 'Bill / check = рахунок (US/UK).', 'cafe', ['the bill']),
    p('Is tap water free?', 'Вода з-під крана безкоштовна?', '— Is tap water free? — Yes, I\'ll bring a jug.', 'Tap water = вода з крану.', 'cafe', ['tap water']),
    p('Could I order takeaway?', 'Чи можна на винос?', '— Could I order takeaway? — Sure — here\'s the menu.', 'Takeaway / to go = на винос.', 'cafe', ['order takeaway']),
    p('What do you recommend?', 'Що порадите?', '— What do you recommend? — The soup of the day is excellent.', 'What do you recommend? — у ресторані.', 'cafe', ['What do you recommend']),
    p('Could I have it without onions?', 'Без цибулі, будь ласка.', '— Could I have it without onions, please? — No problem.', 'Without = без (інгредієнта).', 'cafe', ['without onions']),
    p('Is there a vegetarian option?', 'Чи є вегетаріанська страва?', '— Is there a vegetarian option? — Yes, the pasta primavera.', 'Vegetarian option = без м\'яса.', 'cafe', ['vegetarian option']),
    p('Could we sit outside?', 'Чи можна сісти на вулиці?', '— Could we sit outside? — Sure, pick any table on the terrace.', 'Sit outside = на терасі.', 'cafe', ['sit outside']),
    p('How long is the wait?', 'Скільки чекати?', '— How long is the wait for a table? — About twenty minutes.', 'Wait = очікування.', 'cafe', ['How long is the wait'])
  ],
  shop: [
    p('Do you have this in a smaller size?', 'Чи є менший розмір?', '— Do you have this in a smaller size? — Let me check in the back.', 'Size = розмір одягу.', 'shop', ['smaller size']),
    p('Can I try this on?', 'Чи можна приміряти?', '— Can I try this on? — Fitting rooms are at the back.', 'Try on = приміряти.', 'shop', ['try this on']),
    p('How much does this cost?', 'Скільки це коштує?', '— How much does this cost? — It\'s on sale — twenty-nine euros.', 'On sale = на розпродажі.', 'shop', ['How much does this cost']),
    p('Do you offer tax-free shopping?', 'Чи є tax-free для туристів?', '— Do you offer tax-free shopping? — Yes, with your passport.', 'Tax-free = повернення ПДВ.', 'shop', ['tax-free']),
    p('Could I get a gift receipt?', 'Чи можна чек для подарунка?', '— Could I get a gift receipt? — Of course — no price shown.', 'Gift receipt = чек без ціни.', 'shop', ['gift receipt']),
    p('Is this available in other colours?', 'Чи є інші кольори?', '— Is this available in other colours? — We have blue and grey.', 'Available in = доступний у.', 'shop', ['other colours']),
    p('Where is the checkout?', 'Де каса?', '— Where is the checkout? — Just follow the signs.', 'Checkout = каса.', 'shop', ['checkout']),
    p('Do you ship internationally?', 'Чи доставляєте за кордон?', '— Do you ship internationally? — Yes, through our website.', 'Ship = доставляти.', 'shop', ['ship internationally']),
    p('I\'d like to return this.', 'Хочу повернути це.', '— I\'d like to return this — I have the receipt.', 'Return = повернути товар.', 'shop', ['return this']),
    p('Is there a student discount?', 'Чи є знижка для студентів?', '— Is there a student discount? — Ten percent with ID.', 'Student discount = студентська знижка.', 'shop', ['student discount']),
    p('Could you wrap it as a gift?', 'Чи можна упакувати як подарунок?', '— Could you wrap it as a gift? — Sure, no extra charge.', 'Wrap as a gift = подарункове пакування.', 'shop', ['wrap it as a gift'])
  ],
  emergency: [
    p('I need a doctor urgently.', 'Мені терміново потрібен лікар.', '— I need a doctor urgently. — I\'ll call one right away.', 'Urgently = терміново.', 'emergency', ['doctor urgently']),
    p('Call an ambulance, please!', 'Викликайте швидку, будь ласка!', '— Call an ambulance, please! — Stay on the line.', 'Ambulance = швидка допомога.', 'emergency', ['ambulance']),
    p('I\'ve been robbed.', 'Мене пограбували.', '— I\'ve been robbed — I need the police.', 'Robbed = пограбований.', 'emergency', ['been robbed']),
    p('I feel dizzy.', 'Мені закрутилася голова.', '— I feel dizzy — can I sit down?', 'Dizzy = запаморочення.', 'emergency', ['feel dizzy']),
    p('Where is the nearest hospital?', 'Де найближча лікарня?', '— Where is the nearest hospital? — Two blocks east.', 'Nearest hospital = найближча лікарня.', 'emergency', ['nearest hospital']),
    p('I lost my passport.', 'Я загубив паспорт.', '— I lost my passport — where is the embassy?', 'Embassy = посольство.', 'emergency', ['lost my passport']),
    p('There\'s been an accident.', 'Сталася аварія.', '— There\'s been an accident — someone call help!', 'Accident = аварія / нещасний випадок.', 'emergency', ['been an accident']),
    p('I need help — I don\'t speak English well.', 'Допоможіть — я погано знаю англійську.', '— I need help — I don\'t speak English well.', 'Use when you need an interpreter.', 'emergency', ['I need help']),
    p('Is there a pharmacy open now?', 'Чи є аптека зараз відкрита?', '— Is there a pharmacy open now? — The one on Main Street, 24 hours.', 'Pharmacy = аптека.', 'emergency', ['pharmacy open']),
    p('My phone was stolen.', 'У мене вкрали телефон.', '— My phone was stolen — I need to block my SIM.', 'Stolen = вкрали.', 'emergency', ['phone was stolen']),
    p('I\'m having trouble breathing.', 'Мені важко дихати.', '— I\'m having trouble breathing — please help!', 'Trouble breathing = проблеми з диханням.', 'emergency', ['trouble breathing'])
  ],
  everyday: [
    p('That makes sense.', 'Це логічно. / Зрозуміло.', '— So we meet at six. — That makes sense.', 'Makes sense = має сенс.', 'everyday', ['makes sense']),
    p('I\'m not sure yet.', 'Я ще не впевнений.', '— Are you coming? — I\'m not sure yet.', 'Not sure yet = ще не знаю.', 'everyday', ['not sure yet']),
    p('Let me think about it.', 'Дай подумаю.', '— Want to join us? — Let me think about it.', 'Think about it = обдумати.', 'everyday', ['think about it']),
    p('That sounds great!', 'Звучить чудово!', '— How about a walk? — That sounds great!', 'Sounds great = звучить добре.', 'everyday', ['sounds great']),
    p('I totally agree.', 'Повністю згоден.', '— The weather is perfect. — I totally agree.', 'Totally agree = повністю згоден.', 'everyday', ['totally agree']),
    p('It depends on the weather.', 'Залежить від погоди.', '— Are we going out? — It depends on the weather.', 'It depends = залежить.', 'everyday', ['It depends']),
    p('I\'ll keep you posted.', 'Триматиму в курсі.', '— Any news on the tickets? — I\'ll keep you posted.', 'Keep posted = інформувати.', 'everyday', ['keep you posted']),
    p('No rush.', 'Не поспішай. / Без поспіху.', '— When can you send it? — No rush — whenever works.', 'No rush = не терміново.', 'everyday', ['No rush']),
    p('Fair enough.', 'Справедливо. / Добре.', '— I\'m too tired tonight. — Fair enough.', 'Fair enough = приймаю аргумент.', 'everyday', ['Fair enough']),
    p('I\'m running late.', 'Я запізнююсь.', '— I\'m running late — start without me.', 'Running late = запізнююсь.', 'everyday', ['running late']),
    p('Just in case.', 'Про всяк випадок.', '— Take an umbrella, just in case.', 'Just in case = на всяк випадок.', 'everyday', ['Just in case']),
    p('Long time no see!', 'Давно не бачились!', '— Hey! Long time no see! — I know — how have you been?', 'Classic informal greeting.', 'everyday', ['Long time no see'])
  ],
  social: [
    p('What brings you here?', 'Що привело тебе сюди?', '— What brings you here? — I\'m here on holiday.', 'Friendly opener at events.', 'social', ['What brings you here']),
    p('Where are you from originally?', 'Звідки ти родом?', '— Where are you from originally? — Ukraine, but I live in Berlin now.', 'Originally = спочатку / родом.', 'social', ['from originally']),
    p('Do you come here often?', 'Ти часто сюди ходиш?', '— Do you come here often? — First time, actually.', 'Small talk at a bar or café.', 'social', ['come here often']),
    p('It was nice chatting with you.', 'Приємно було поспілкуватися.', '— I should go — it was nice chatting with you.', 'Polite way to end conversation.', 'social', ['nice chatting']),
    p('Let\'s keep in touch.', 'Будемо на зв\'язку.', '— Here\'s my number — let\'s keep in touch.', 'Keep in touch = підтримувати контакт.', 'social', ['keep in touch']),
    p('Would you like to join us?', 'Хочеш приєднатися?', '— Would you like to join us for a drink?', 'Join us = приєднатися до компанії.', 'social', ['join us']),
    p('I don\'t want to hold you up.', 'Не хочу затримувати.', '— I don\'t want to hold you up — you go ahead.', 'Hold up = затримувати.', 'social', ['hold you up']),
    p('Sorry to interrupt.', 'Вибач, що перебиваю.', '— Sorry to interrupt — quick question?', 'Interrupt = перебивати.', 'social', ['Sorry to interrupt']),
    p('Mind if I sit here?', 'Не заперечиш, якщо сяду?', '— Mind if I sit here? — Not at all, go ahead.', 'Mind if = чи не заперечиш.', 'social', ['Mind if I sit']),
    p('Cheers!', 'Будемо! / На здоров\'я!', '— To a great trip! — Cheers!', 'Cheers = тост (UK) або просто «на здоров\'я».', 'social', ['Cheers']),
    p('I\'m here on my own.', 'Я тут сам / сама.', '— Are you with friends? — I\'m here on my own.', 'On my own = самостійно.', 'social', ['on my own'])
  ],
  plans: [
    p('What time works for you?', 'О котрій тобі зручно?', '— What time works for you tomorrow?', 'Works for you = підходить тобі.', 'plans', ['works for you']),
    p('Let\'s meet halfway.', 'Зустрінемось посередині.', '— It\'s far for both of us — let\'s meet halfway.', 'Meet halfway = компроміс / місце.', 'plans', ['meet halfway']),
    p('I\'m free all afternoon.', 'Я вільний увесь день.', '— When can you meet? — I\'m free all afternoon.', 'Free = вільний у часі.', 'plans', ['free all afternoon']),
    p('Can we reschedule?', 'Чи можемо перенести?', '— Something came up — can we reschedule?', 'Reschedule = перенести на інший час.', 'plans', ['Can we reschedule']),
    p('I\'ll be there in ten minutes.', 'Буду через десять хвилин.', '— Where are you? — I\'ll be there in ten minutes.', 'Be there in = буду через.', 'plans', ['be there in']),
    p('Shall we say seven?', 'Домовимось на сьому?', '— Shall we say seven at the usual place?', 'Shall we say = пропозиція часу.', 'plans', ['Shall we say']),
    p('I\'m running about fifteen minutes late.', 'Запізнююсь приблизно на 15 хв.', '— I\'m running about fifteen minutes late — save me a seat.', 'Running late + time = на скільки.', 'plans', ['fifteen minutes late']),
    p('Are you still up for it?', 'Ти все ще в справі?', '— Are you still up for hiking on Sunday?', 'Up for it = готовий / хочеш.', 'plans', ['still up for']),
    p('Let\'s play it by ear.', 'Подивимось по ситуації.', '— Should we book now? — Let\'s play it by ear.', 'Play it by ear = без чіткого плану.', 'plans', ['play it by ear']),
    p('I\'ll send you the details.', 'Надішлю деталі.', '— I\'ll send you the details by text tonight.', 'Details = деталі / адреса / час.', 'plans', ['send you the details']),
    p('Does Saturday work?', 'Субота підходить?', '— Does Saturday work for you? — Perfect!', 'Does [day] work? — типове питання.', 'plans', ['Does Saturday work'])
  ]
};

function loadPhrases(cat) {
  const file = path.join(phrasesDir, cat + '.js');
  const src = fs.readFileSync(file, 'utf8');
  const m = src.match(/const PHRASES_\w+ = (\[[\s\S]*?\]);/);
  return { file, phrases: m ? eval('(' + m[1] + ')') : [] };
}

let added = 0;
Object.entries(BATCH).forEach(([cat, additions]) => {
  const { file, phrases } = loadPhrases(cat);
  const existing = new Set(phrases.map(x => x.en.toLowerCase().trim()));
  const toAdd = additions.filter(x => !existing.has(x.en.toLowerCase().trim()));
  if (!toAdd.length) {
    console.log(cat + ': 0 new');
    return;
  }
  const merged = [...phrases, ...toAdd];
  fs.writeFileSync(
    file,
    `// ${TAGS[cat]} — ${merged.length} phrases\nconst PHRASES_${cat.toUpperCase()} = ${JSON.stringify(merged, null, 2)};\n`,
    'utf8'
  );
  added += toAdd.length;
  console.log(cat + ': +' + toAdd.length + ' → ' + merged.length);
});

console.log('Total added:', added);
