/**
 * One-time migration + build: splits phrases by category, removes niche phrases,
 * adds 100 everyday phrases, writes source files and regenerates bundle data.
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const phrasesDir = path.join(root, 'js/data/phrases');
const legacyFile = path.join(root, 'js/data/phrases.js');

const CATEGORY_ORDER = ['hotel', 'street', 'transport', 'cafe', 'shop', 'emergency', 'everyday', 'social', 'plans'];

const REMOVE_EN = new Set([
  'Could I have a room with a sea view?',
  'Could you wake me up at seven?',
  'Could I get another key card?',
  "I'd like to extend my stay by one night.",
  'Could I get a latte with oat milk?',
  'Could I also get a croissant, please?',
  'Can I get a doggy bag?',
  'Could we get a high chair, please?',
  "I'm looking for a SIM card.",
  'Is this the right platform for the train to…?',
  'I missed my connection.',
  'My flight has been cancelled. What should I do?',
  'Could you pick me up here in ten minutes?',
  "I've heard a lot about this place.",
  'Could you take a picture of us?',
  'Could you help me charge my phone?',
]);

function p(en, ua, ex, tip, cat, anchors, rule) {
  const tag = {
    hotel: '🏨 Готель', street: '🗺️ Вулиця', transport: '🚌 Транспорт',
    cafe: '☕ Кафе', shop: '🛍️ Магазин', emergency: '🆘 Допомога',
    everyday: '💬 Повсякдень', social: '👋 Знайомство', plans: '📅 Плани'
  }[cat];
  const situation = {
    hotel: 'На рецепції готелю або в номері',
    street: 'На вулиці, коли спілкуєшся з місцевими',
    transport: 'В транспорті або на зупинці',
    cafe: 'У кафе або ресторані',
    shop: 'У магazині під час покупок',
    emergency: 'У складній або екстреній ситуації',
    everyday: 'У повсякденній розмові з людьми',
    social: 'При знайомстві та неформальному спілкуванні',
    plans: 'Коли домовляєшся про зустріч або плани'
  }[cat];
  const o = { en, ua, ex, tip, cat, tag, anchors: Array.isArray(anchors) ? anchors : [anchors], situation };
  if (rule) o.rule = rule;
  return o;
}

const NEW_EVERYDAY = [
  p('How are you doing?', 'Як ти? / Як справи?', '— How are you doing? — Pretty good, thanks!', 'Неформальніше за How are you?', 'everyday', ['How are you doing?']),
  p('I\'m doing well, thanks.', 'У мене все добре, дякую.', '— How are you? — I\'m doing well, thanks. And yourself?', 'Doing well = справи йдуть добре.', 'everyday', ['I\'m doing well']),
  p('See you later!', 'Побачимось!', '— I have to run. — See you later!', 'Later = пізніше сьогодні або взагалі.', 'everyday', ['See you later']),
  p('Have a good one!', 'Гарного дня! / Удачі!', 'Thanks for your help — have a good one!', 'Неформальне прощання. One = day/evening.', 'everyday', ['Have a good one']),
  p('Good morning!', 'Доброго ранку!', 'Good morning! Did you sleep well?', 'До полудня. Good afternoon / evening — далі.', 'everyday', ['Good morning']),
  p('Good night!', 'На добраніч!', '— I\'m going to bed. — Good night! Sleep well.', 'Коли хтось лягає спати, не при зустрічі ввечері.', 'everyday', ['Good night']),
  p('What\'s up?', 'Як справи? / Що нового?', '— Hey, what\'s up? — Not much, just chilling.', 'Дуже неформально. Whassup — скорочено.', 'everyday', ['What\'s up?']),
  p('Not much.', 'Нічого особливого.', '— What\'s up? — Not much. You?', 'Стандартна відповідь на What\'s up?', 'everyday', ['Not much']),
  p('I\'m tired.', 'Я втомився.', 'I\'m tired — I think I\'ll go to bed early tonight.', 'Tired = втомлений. Exhausted = виснажений.', 'everyday', ['I\'m tired']),
  p('I\'m hungry.', 'Я голодний.', 'I\'m hungry — shall we grab something to eat?', 'Starving = дуже голодний (неформально).', 'everyday', ['I\'m hungry']),
  p('I\'m busy right now.', 'Я зараз зайнятий.', 'Sorry, I\'m busy right now — can I call you back?', 'Busy = зайнятий. Can I call you back? — передзвоню?', 'everyday', ['I\'m busy right now']),
  p('No problem.', 'Без проблем.', '— Thanks! — No problem!', 'Синонім No worries / You\'re welcome.', 'everyday', ['No problem']),
  p('You\'re welcome.', 'Будь ласка. / Нема за що.', '— Thank you so much! — You\'re welcome!', 'Формальніша подяка на thanks.', 'everyday', ['You\'re welcome']),
  p('My pleasure.', 'З радістю. / Мені приємно.', '— Thanks for helping. — My pleasure!', 'Ввічливіше за You\'re welcome.', 'everyday', ['My pleasure']),
  p('Don\'t worry about it.', 'Не переживай через це.', '— Sorry I\'m late. — Don\'t worry about it.', 'М\'яко заспокоюєш людину.', 'everyday', ['Don\'t worry about it']),
  p('I\'m sorry to hear that.', 'Мені шкода це чути.', '— I lost my job. — I\'m sorry to hear that.', 'Співчуття. Не плутай з I\'m sorry (вибачення).', 'everyday', ['I\'m sorry to hear that']),
  p('That\'s too bad.', 'Як шкода. / Погано.', '— The concert was cancelled. — That\'s too bad.', 'Виражаєш жаль за новину.', 'everyday', ['That\'s too bad']),
  p('Congratulations!', 'Вітаю!', '— I got the job! — Congratulations! That\'s amazing!', 'Congrats — скорочено.', 'everyday', ['Congratulations']),
  p('Good luck!', 'Удачі!', 'Good luck with your exam tomorrow!', 'Break a leg — жартома «удачі» (театр).', 'everyday', ['Good luck']),
  p('Get well soon!', 'Одужуй швидше!', '— I\'m sick. — Get well soon! Take care.', 'Коли хтось хворіє.', 'everyday', ['Get well soon']),
  p('Take care!', 'Бережи себе!', '— See you next week. — Take care!', 'Тепле прощання.', 'everyday', ['Take care']),
  p('I\'ll call you back.', 'Я передзвоню.', 'Sorry, I can\'t talk — I\'ll call you back in an hour.', 'Call back = передзвонити.', 'everyday', ['call you back']),
  p('Can I call you later?', 'Можу передзвонити пізніше?', 'Can I call you later? I\'m in a meeting right now.', 'Ввічливо відкладаєш розмову.', 'everyday', ['Can I call you later?']),
  p('Hold on a moment.', 'Зачекайте хвилинку.', 'Hold on a moment — let me find my keys.', 'Hold on = почекай (телефон або очікування).', 'everyday', ['Hold on a moment']),
  p('I\'ll get back to you.', 'Я відповім пізніше / повернусь до цього.', 'I need to check — I\'ll get back to you by Friday.', 'Get back to = повернутися до теми з відповіддю.', 'everyday', ['get back to you']),
  p('What time is it?', 'Котра година?', 'Excuse me, what time is it?', 'Do you have the time? — те саме, ввічливіше.', 'everyday', ['What time is it?']),
  p('I\'m running out of time.', 'У мене мало часу.', 'I\'m running out of time — we need to hurry.', 'Run out of = закінчується (час, гроші).', 'everyday', ['running out of time']),
  p('I lost track of time.', 'Я загубив відчуття часу.', 'Sorry I\'m late — I lost track of time.', 'Track of time = контроль над часом.', 'everyday', ['lost track of time']),
  p('It\'s about time!', 'Дійшла пора! / Нарешті!', '— Here\'s your coffee. — It\'s about time! I\'ve been waiting forever.', 'Іноді з легким дразнінням.', 'everyday', ['It\'s about time']),
  p('Better late than never.', 'Краще пізно, ніж ніколи.', '— Sorry I\'m two hours late. — Better late than never, I guess!', 'Ідіома про запізнення.', 'everyday', ['Better late than never']),
  p('I overslept.', 'Я проспав.', 'I overslept — that\'s why I missed the meeting.', 'Oversleep = проспати (випадково).', 'everyday', ['I overslept']),
  p('I\'m starving.', 'Я дуже голодний.', 'I\'m starving — let\'s eat something now.', 'Starving = дуже голодний (не буквально «голодую»).', 'everyday', ['I\'m starving']),
  p('I\'m full.', 'Я наївся.', '— Want dessert? — No thanks, I\'m full.', 'Full = ситий. Stuffed — дуже ситий.', 'everyday', ['I\'m full']),
  p('Help yourself.', 'Бери собі / розкладайся.', 'The food is on the table — help yourself!', 'Коли пропонуєш їжу або напої гостям.', 'everyday', ['Help yourself']),
  p('Make yourself at home.', 'Почувайся як вдома.', 'Come in, make yourself at home.', 'Гостинна фраза при візиті.', 'everyday', ['Make yourself at home']),
  p('I\'m on my way.', 'Я вже їду / йду.', 'Don\'t worry — I\'m on my way, be there in ten minutes.', 'On my way = у дорозі до тебе.', 'everyday', ['I\'m on my way']),
  p('I\'m almost there.', 'Я майже на місці.', 'I\'m almost there — save me a seat!', 'Almost there = за кілька хвилин буду.', 'everyday', ['I\'m almost there']),
  p('I got stuck in traffic.', 'Я застряг у заторі.', 'Sorry I\'m late — I got stuck in traffic.', 'Stuck in traffic — класична причина запізнення.', 'everyday', ['stuck in traffic']),
  p('I\'ll be there in five minutes.', 'Я буду через п\'ять хвилин.', 'I\'ll be there in five minutes — start without me if you want.', 'In + час = через скільки будеш.', 'everyday', ['be there in']),
  p('Where are you?', 'Де ти?', 'Where are you? We\'ve been waiting for twenty minutes.', 'Пряме питання при зустрічі.', 'everyday', ['Where are you?']),
  p('I\'m home.', 'Я вдома.', '— Where are you? — I\'m home, just got in.', 'Got in = прийшов додому.', 'everyday', ['I\'m home']),
  p('I\'m at work.', 'Я на роботі.', 'Can\'t talk — I\'m at work right now.', 'At work = на робочому місці.', 'everyday', ['I\'m at work']),
  p('I need a break.', 'Мені потрібна перерва.', 'I need a break — I\'ve been working all morning.', 'Break = перерва, відпочинок.', 'everyday', ['I need a break']),
  p('I\'m not feeling great.', 'Я почуваюсь не дуже.', 'I\'m not feeling great — I might stay home today.', 'М\'якше за I\'m sick.', 'everyday', ['not feeling great']),
  p('I have a headache.', 'У мене болить голова.', 'I have a headache — I\'m going to lie down.', 'Have a + хвороба: headache, cold, fever.', 'everyday', ['I have a headache']),
  p('I need some rest.', 'Мені потрібен відпочинок.', 'I need some rest — this week was exhausting.', 'Rest = відпочинок. Get some rest — відпочинь.', 'everyday', ['I need some rest']),
  p('I feel much better now.', 'Мені зараз набагато краще.', 'Thanks for asking — I feel much better now.', 'Much better = значно краще.', 'everyday', ['feel much better']),
  p('It\'s raining.', 'Йде дощ.', 'Take an umbrella — it\'s raining outside.', 'It\'s + погода: sunny, cloudy, windy.', 'everyday', ['It\'s raining']),
  p('It\'s so hot today.', 'Сьогодні дуже спекотно.', 'It\'s so hot today — let\'s stay inside.', 'So hot = дуже спекотно.', 'everyday', ['It\'s so hot']),
  p('It\'s freezing outside.', 'На вулиці морозно.', 'Wear a coat — it\'s freezing outside.', 'Freezing = дуже холодно (не буквально «замерзає»).', 'everyday', ['It\'s freezing']),
  p('Nice weather, isn\'t it?', 'Гарна погода, чи не так?', 'Nice weather, isn\'t it? Perfect for a walk.', 'Tag question — підтвердження думки.', 'everyday', ['Nice weather']),
  p('What\'s the weather like?', 'Яка погода?', 'What\'s the weather like tomorrow?', 'Like = як (опис).', 'everyday', ['weather like']),
  p('I forgot my keys.', 'Я забув ключі.', 'I forgot my keys — can you let me in?', 'Forget — forgot — forgotten.', 'everyday', ['I forgot my keys']),
  p('I can\'t find my phone.', 'Не можу знайти телефон.', 'I can\'t find my phone — have you seen it?', 'Can\'t find = не можу знайти (зараз).', 'everyday', ['can\'t find my phone']),
  p('It\'s somewhere around here.', 'Десь тут.', 'My wallet is somewhere around here — I had it a minute ago.', 'Somewhere = десь.', 'everyday', ['somewhere around here']),
  p('Here you go.', 'Ось, будь ласка.', '— Can I have the salt? — Here you go.', 'Коли даєш щось людині.', 'everyday', ['Here you go']),
  p('There you go.', 'Ось / ось так.', 'There you go — all done!', 'Після завершення дії або передачі.', 'everyday', ['There you go']),
  p('Come on in.', 'Заходь.', 'The door\'s open — come on in!', 'Come on in = запрошення всередину.', 'everyday', ['Come on in']),
  p('Have a seat.', 'Сідайте / присідай.', 'Have a seat — I\'ll be with you in a moment.', 'Seat = місце для сидіння.', 'everyday', ['Have a seat']),
  p('Make yourself comfortable.', 'Розташовуйся зручно.', 'Take off your coat and make yourself comfortable.', 'Comfortable = зручно, комфортно.', 'everyday', ['Make yourself comfortable']),
  p('I\'ll leave you to it.', 'Не буду заважати — продовжуй.', 'I\'ll leave you to it — call me if you need anything.', 'Leave someone to it = дати робити справи.', 'everyday', ['leave you to it']),
  p('Do you mind if I open the window?', 'Ви не проти, якщо я відкрию вікно?', 'Do you mind if I open the window? It\'s a bit stuffy.', 'Do you mind if I + дієслово — прохання дозволу.', 'everyday', ['Do you mind if I'], 'Mind if I + Present Simple (open, not opened).'),
  p('Feel free to ask.', 'Не соромся питати.', 'Feel free to ask if anything is unclear.', 'Feel free to = не соромся / можеш сміливо.', 'everyday', ['Feel free to']),
  p('I don\'t mind.', 'Мені все одно. / Я не проти.', '— Window or aisle? — I don\'t mind, either is fine.', 'Don\'t mind = не проти.', 'everyday', ['I don\'t mind']),
  p('It doesn\'t matter.', 'Це не має значення.', '— Red or blue? — It doesn\'t matter, pick whichever.', 'Doesn\'t matter = неважливо.', 'everyday', ['It doesn\'t matter']),
  p('Either way is fine.', 'Будь-який варіант підходить.', '— Walk or take the bus? — Either way is fine with me.', 'Either way = будь-який з двох.', 'everyday', ['Either way is fine']),
  p('I don\'t care.', 'Мені все одно.', '— Pizza or pasta? — I don\'t care, you choose.', 'Неформально; може звучати різко — обережно.', 'everyday', ['I don\'t care']),
  p('It\'s your call.', 'Тобі вирішувати.', '— Should we stay or go? — It\'s your call.', 'Your call = твоє рішення.', 'everyday', ['It\'s your call']),
  p('I\'ll think about it.', 'Я подумаю.', '— Want to join us? — I\'ll think about it and let you know.', 'Think about = обдумати.', 'everyday', ['I\'ll think about it']),
  p('I\'ve made up my mind.', 'Я вирішив.', 'I\'ve made up my mind — I\'m taking the job.', 'Make up one\'s mind = прийняти рішення.', 'everyday', ['made up my mind']),
  p('I changed my mind.', 'Я передумав.', 'I changed my mind — let\'s stay in instead.', 'Change one\'s mind = передумати.', 'everyday', ['I changed my mind']),
  p('I\'m not sure yet.', 'Я ще не впевнений.', '— Are you coming? — I\'m not sure yet.', 'Yet = ще (наразі).', 'everyday', ['I\'m not sure yet']),
  p('I guess so.', 'Мабуть, так.', '— Is he coming? — I guess so.', 'Guess = припускати. I suppose so — те саме.', 'everyday', ['I guess so']),
  p('I hope so.', 'Сподіваюсь, так.', '— Will it be sunny tomorrow? — I hope so!', 'Hope so = сподіваюсь на це.', 'everyday', ['I hope so']),
  p('I hope not.', 'Сподіваюсь, ні.', '— Will it rain? — I hope not — we\'re having a picnic.', 'Hope not = сподіваюсь, що ні.', 'everyday', ['I hope not']),
  p('Fingers crossed!', 'Тримаю кулаки!', 'The interview is tomorrow — fingers crossed!', 'Ідіома: сподіваємось на удачу.', 'everyday', ['Fingers crossed']),
  p('That\'s exactly what I thought.', 'Саме так я і думав.', '— He\'s going to quit. — That\'s exactly what I thought!', 'Exactly = саме так.', 'everyday', ['exactly what I thought']),
  p('You\'re right about that.', 'Ти маєш рацію в цьому.', '— It\'s harder than it looks. — You\'re right about that.', 'Right about = правий щодо.', 'everyday', ['You\'re right about that']),
  p('I see what you mean.', 'Розумію, що ти маєш на увазі.', '— It\'s too risky. — I see what you mean, but we should try.', 'See what you mean = розумію сенс.', 'everyday', ['I see what you mean']),
  p('That\'s news to me.', 'Я про це не знав.', '— They\'re moving to Berlin. — That\'s news to me!', 'News to me = вперше чую.', 'everyday', ['That\'s news to me']),
  p('Tell me about it.', 'І не кажи! / Саме так!', '— Mondays are the worst. — Tell me about it!', 'Ідіома згоди: «і мені так само».', 'everyday', ['Tell me about it']),
  p('You never know.', 'Ніколи не знаєш.', 'Try it — you never know, you might love it.', 'You never know = може статися будь-що.', 'everyday', ['You never know']),
  p('It happens.', 'Так буває.', '— I spilled coffee on my shirt. — It happens, don\'t worry.', 'It happens = таке трапляється.', 'everyday', ['It happens']),
  p('These things happen.', 'Таке трапляється.', 'These things happen — no need to stress about it.', 'Заспокійлива фраза.', 'everyday', ['These things happen']),
  p('It could be worse.', 'Могло б бути й гірше.', 'I lost my wallet, but it could be worse — at least I have my passport.', 'Could be worse = не найгірший сценарій.', 'everyday', ['It could be worse']),
  p('Look on the bright side.', 'Дивись на світлий бік.', 'You missed the bus, but look on the bright side — you got extra exercise.', 'Bright side = позитивна сторона.', 'everyday', ['bright side']),
  p('Cheer up!', 'Не сумуй! / Бодрись!', 'Cheer up — things will get better!', 'Cheer up = підбадьорити.', 'everyday', ['Cheer up']),
  p('I\'m so excited!', 'Я так схвильований / радий!', 'I\'m so excited — the concert is tonight!', 'Excited = у захваті, в очікуванні.', 'everyday', ['I\'m so excited']),
  p('I\'m worried about it.', 'Я хвилююсь через це.', 'I\'m worried about it — we haven\'t heard back yet.', 'Worried about = хвилюватися через.', 'everyday', ['worried about it']),
  p('Don\'t stress about it.', 'Не переживай через це.', 'Don\'t stress about it — we\'ll figure it out.', 'Stress about = переживати через.', 'everyday', ['Don\'t stress about it']),
  p('I\'m stressed out.', 'Я на нервах / у стресі.', 'I\'m stressed out — too much work this week.', 'Stressed out = дуже напружений.', 'everyday', ['stressed out']),
  p('I need to clear my head.', 'Мені треба провітрити голову.', 'I need to clear my head — going for a walk.', 'Clear my head = заспокоїти думки.', 'everyday', ['clear my head']),
  p('I\'m beat.', 'Я вимотаний.', 'I\'m beat — I\'m going straight to bed.', 'Beat = дуже втомлений (неформально).', 'everyday', ['I\'m beat']),
  p('I could use a coffee.', 'Мені б не завадила кава.', 'I could use a coffee — I didn\'t sleep much.', 'Could use = не завадило б мати.', 'everyday', ['I could use a coffee']),
  p('I\'m running low on cash.', 'У мене мало готівки.', 'I\'m running low on cash — is there an ATM nearby?', 'Run low on = закінчується.', 'everyday', ['running low on cash']),
  p('I\'m broke.', 'Я без грошей.', 'I\'m broke until payday — can you cover me?', 'Broke = без грошей (неформально).', 'everyday', ['I\'m broke']),
  p('That\'s a bit pricey.', 'Це трохи дороговато.', 'Nice place, but that\'s a bit pricey for me.', 'Pricey = дороговато (неформально).', 'everyday', ['a bit pricey']),
  p('It\'s a good deal.', 'Це вигідна пропозиція.', 'Fifty percent off — it\'s a good deal!', 'Good deal = вигідно.', 'everyday', ['It\'s a good deal']),
  p('I\'m on a budget.', 'Я обмежений у витратах.', 'I\'m on a budget — looking for something affordable.', 'On a budget = економлю.', 'everyday', ['on a budget']),
  p('It\'s worth a try.', 'Варто спробувати.', 'I\'ve never had it, but it\'s worth a try.', 'Worth a try = варто спробувати.', 'everyday', ['worth a try']),
  p('Give it a try.', 'Спробуй.', 'You might like it — give it a try!', 'Give it a try = спробуй.', 'everyday', ['Give it a try']),
  p('It didn\'t work out.', 'Не вийшло.', 'We tried, but it didn\'t work out.', 'Work out = вийти, скластися.', 'everyday', ['didn\'t work out']),
  p('I\'ll manage.', 'Я впораюсь.', 'Don\'t worry about me — I\'ll manage.', 'Manage = впоратися самостійно.', 'everyday', ['I\'ll manage']),
  p('I can handle it.', 'Я впораюсь з цим.', 'Leave it to me — I can handle it.', 'Handle = впоратися, обробити.', 'everyday', ['I can handle it']),
  p('That\'s on you.', 'Це на тобі / твоя відповідальність.', 'You said you\'d do it — that\'s on you now.', 'On you = твоя відповідальність.', 'everyday', ['That\'s on you']),
  p('My treat.', 'Я пригощаю.', 'Put your wallet away — my treat tonight.', 'My treat = я плачу (неформально).', 'everyday', ['My treat']),
  p('Split the bill?', 'Поділимо рахунок?', 'Split the bill? I\'ll cover the tip.', 'Split = поділити порівну.', 'everyday', ['Split the bill']),
  p('I\'ll get this one.', 'Цей раз я плачу.', 'You paid last time — I\'ll get this one.', 'Get this one = оплачую цей раз.', 'everyday', ['I\'ll get this one']),
  p('Keep the change.', 'Решту залиш собі.', 'Here\'s twenty — keep the change.', 'Change = решта (гроші).', 'everyday', ['Keep the change']),
  p('Long story short,…', 'Коротко кажучи,…', 'Long story short, we missed the train and had to take a taxi.', 'Скорочуєш довгу історію.', 'everyday', ['Long story short']),
  p('To make a long story short,…', 'Якщо коротко,…', 'To make a long story short, everything worked out fine.', 'Формальніший варіант long story short.', 'everyday', ['make a long story short']),
  p('Speaking of which,…', 'До речі про це,…', 'Speaking of which, have you seen the new café on Main Street?', 'Пов\'язуєш з попередньою темою.', 'everyday', ['Speaking of which']),
  p('Anyway,…', 'В будь-якому разі,…', 'Anyway, let\'s get back to what we were discussing.', 'Повертаєш розмову до теми.', 'everyday', ['Anyway']),
  p('So, what do you say?', 'Ну що, як тобі?', 'We could go now or wait — so, what do you say?', 'Питаєш думку або рішення.', 'everyday', ['what do you say']),
  p('Sounds like a plan.', 'Звучить як план.', '— Let\'s meet at six. — Sounds like a plan!', 'Погодження з планом.', 'everyday', ['Sounds like a plan']),
  p('Count me in.', 'Я з вами / рахуй мене.', '— Road trip this weekend? — Count me in!', 'Count me in = я беру участь.', 'everyday', ['Count me in']),
  p('Count me out.', 'Без мене.', '— Karaoke tonight? — Count me out — I can\'t sing!', 'Count me out = не братиму участь.', 'everyday', ['Count me out']),
  p('I\'m in.', 'Я за / я з вами.', '— Pizza and a movie? — I\'m in!', 'I\'m in = погоджуюсь брати участь.', 'everyday', ['I\'m in']),
  p('I\'m out.', 'Я не беру участь.', '— Another round? — I\'m out — early start tomorrow.', 'I\'m out = відмовляюсь.', 'everyday', ['I\'m out']),
  p('Let\'s do it.', 'Давай зробимо це.', '— Should we try that new place? — Let\'s do it!', 'Ентузіазм і згода.', 'everyday', ['Let\'s do it']),
  p('Why not?', 'Чому б і ні?', '— Want to try the spicy one? — Why not!', 'Легка згода на пропозицію.', 'everyday', ['Why not?']),
  p('I\'d love to, but I can\'t.', 'Дуже хотів би, але не можу.', '— Join us for dinner? — I\'d love to, but I can\'t — I have plans.', 'Ввічлива відмова.', 'everyday', ['I\'d love to, but I can\'t']),
  p('Maybe next time.', 'Може наступного разу.', '— Come to the party! — Maybe next time — I\'m busy this weekend.', 'М\'яка відмова без жорсткого «ні».', 'everyday', ['Maybe next time']),
  p('Thanks anyway.', 'Все одно дякую.', '— Sorry, we\'re full. — Thanks anyway.', 'Коли пропозиція не спрацювала.', 'everyday', ['Thanks anyway']),
  p('I owe you one.', 'Я в боргу перед тобою.', 'Thanks for covering me — I owe you one.', 'Owe you one = маю віддати послугу.', 'everyday', ['I owe you one']),
  p('Don\'t mention it.', 'Не згадуй / нема за що.', '— Thanks for the ride! — Don\'t mention it!', 'Відповідь на подяку.', 'everyday', ['Don\'t mention it']),
  p('That\'s very kind of you.', 'Дуже мило з твого боку.', '— Let me help with those bags. — That\'s very kind of you!', 'Kind of you = люб\'язно з твого боку.', 'everyday', ['kind of you']),
  p('I appreciate it.', 'Я ціную це.', 'Thanks for waiting — I really appreciate it.', 'Appreciate = цінувати.', 'everyday', ['I appreciate it']),
  p('You made my day.', 'Ти зробив мій день.', '— Surprise! — You made my day!', 'Made my day = сильно порадував.', 'everyday', ['You made my day']),
  p('That means a lot to me.', 'Це багато для мене значить.', 'Your support means a lot to me.', 'Means a lot = багато значить.', 'everyday', ['means a lot to me']),
  p('I\'m proud of you.', 'Я пишаюсь тобою.', 'You did great — I\'m proud of you!', 'Proud of = пишатися кимось.', 'everyday', ['I\'m proud of you']),
  p('You\'ve got this.', 'У тебе все вийде.', 'Don\'t worry — you\'ve got this!', 'Got this = впораєшся.', 'everyday', ['You\'ve got this']),
  p('Hang in there.', 'Тримайся.', 'I know it\'s tough — hang in there.', 'Hang in there = не здавайся.', 'everyday', ['Hang in there']),
  p('It\'ll be fine.', 'Все буде добре.', 'Don\'t worry — it\'ll be fine.', 'It\'ll be fine = все гаразд буде.', 'everyday', ['It\'ll be fine']),
  p('Everything will work out.', 'Все вирішиться.', 'Everything will work out — just give it time.', 'Work out = вирішиться, складеться.', 'everyday', ['Everything will work out']),
  p('I\'m looking forward to seeing you.', 'Чекаю на зустріч з тобою.', 'I\'m looking forward to seeing you next week!', 'Look forward to + -ing.', 'everyday', ['looking forward to seeing you'], 'Look forward to + дієслово з -ing (seeing, not see).'),
  p('It was nice talking to you.', 'Було приємно поговорити.', 'It was nice talking to you — let\'s catch up again soon.', 'Catch up = зустрітися і поговорити.', 'everyday', ['nice talking to you']),
  p('Let\'s catch up soon.', 'Давай скоро зустрінемось / поговоримо.', 'Let\'s catch up soon — it\'s been too long!', 'Catch up = наверстати спілкування.', 'everyday', ['catch up soon']),
  p('Stay in touch.', 'На зв\'язку.', 'It was great seeing you — stay in touch!', 'Stay in touch = підтримувати контакт.', 'everyday', ['Stay in touch']),
  p('Text me when you get home.', 'Напиши, коли дійдеш додому.', 'Text me when you get home so I know you\'re safe.', 'Text = написати SMS/месенджер.', 'everyday', ['Text me when']),
  p('I\'ll text you.', 'Я тобі напишу.', 'I\'ll text you the address later.', 'Text you = написати в чат.', 'everyday', ['I\'ll text you']),
  p('Did you get my message?', 'Ти отримав моє повідомлення?', 'Did you get my message? I sent it this morning.', 'Get a message = отримати.', 'everyday', ['Did you get my message']),
  p('Sorry, I missed your call.', 'Вибач, пропустив твій дзвінок.', 'Sorry, I missed your call — what\'s up?', 'Miss a call = не відповісти на дзвінок.', 'everyday', ['missed your call']),
  p('Can you hear me?', 'Ти мене чуєш?', 'Can you hear me? The signal is bad.', 'На дзвінку або в відеочаті.', 'everyday', ['Can you hear me?']),
  p('You\'re breaking up.', 'Зв\'язок переривається.', 'Sorry, you\'re breaking up — can you repeat that?', 'Breaking up = поганий зв\'язок (не «розходитися»).', 'everyday', ['You\'re breaking up']),
  p('I\'ll talk to you later.', 'Поговоримо пізніше.', 'Gotta go — I\'ll talk to you later!', 'Talk to you later = побачимось у розмові.', 'everyday', ['talk to you later']),
  p('Talk soon!', 'Скоро поговоримо!', 'Bye — talk soon!', 'Коротке прощання в чаті.', 'everyday', ['Talk soon']),
  p('Same time next week?', 'Того ж часу наступного тижня?', 'Same time next week? That works for me.', 'Пропонуєш повторити зустріч.', 'everyday', ['Same time next week']),
  p('I\'m free this afternoon.', 'Я вільний сьогодні після обіду.', 'I\'m free this afternoon if you want to meet.', 'Free = вільний від справ.', 'everyday', ['I\'m free this afternoon']),
  p('Something came up.', 'Щось трапилось / з\'явились справи.', 'Sorry, I can\'t make it — something came up.', 'Came up = несподівано виникло.', 'everyday', ['Something came up']),
  p('I\'ll let you know.', 'Я дам знати.', 'I\'ll let you know as soon as I decide.', 'Let someone know = повідомити.', 'everyday', ['I\'ll let you know']),
  p('Keep in touch!', 'Будь на зв\'язку!', 'It was great — keep in touch!', 'Keep in touch = не втрачай контакт.', 'everyday', ['Keep in touch']),
  p('That\'s life.', 'Таке життя.', 'We didn\'t win, but that\'s life.', 'That\'s life = так буває в житті.', 'everyday', ['That\'s life']),
  p('Live and learn.', 'Живи і вчися.', 'I made a mistake — live and learn.', 'Ідіома: помилки — частина досвіду.', 'everyday', ['Live and learn']),
  p('Better safe than sorry.', 'Краще перестрахуватися.', 'Take an umbrella — better safe than sorry.', 'Ідіома про обережність.', 'everyday', ['Better safe than sorry']),
  p('So far, so good.', 'Поки що все добре.', 'How\'s the project going? So far, so good.', 'So far = поки що.', 'everyday', ['So far, so good']),
  p('One step at a time.', 'Крок за кроком.', 'Don\'t rush — one step at a time.', 'One step at a time = поступово.', 'everyday', ['One step at a time']),
  p('I\'m all ears.', 'Я уважно слухаю.', 'You wanted to tell me something? I\'m all ears.', 'All ears = повна увага.', 'everyday', ['I\'m all ears']),
  p('That rings a bell.', 'Щось нагадує / знайомо.', 'The name rings a bell — I think we met before.', 'Rings a bell = щось знайоме.', 'everyday', ['rings a bell']),
  p('It\'s none of my business.', 'Це мене не стосується.', 'I overheard them arguing, but it\'s none of my business.', 'None of my business = не моя справа.', 'everyday', ['none of my business']),
  p('Mind your own business.', 'Займись своїми справами.', '— Why are you late? — Mind your own business!', 'Різко; використовуй обережно.', 'everyday', ['Mind your own business']),
  p('I\'m just saying.', 'Я просто кажу / висловлюю думку.', 'You could try harder — I\'m just saying.', 'I\'m just saying = без претензій, просто думка.', 'everyday', ['I\'m just saying']),
  p('No offense.', 'Без образ.', 'No offense, but I think we should leave now.', 'No offense = не ображайся.', 'everyday', ['No offense']),
  p('I didn\'t mean to offend you.', 'Я не хотів тебе обідити.', 'I didn\'t mean to offend you — it was just a joke.', 'Mean to = мати намір.', 'everyday', ['didn\'t mean to offend']),
  p('Let\'s agree to disagree.', 'Давай погодимось не погоджуватись.', 'We see it differently — let\'s agree to disagree.', 'Ввічливе завершення суперечки.', 'everyday', ['agree to disagree']),
  p('Fair point.', 'Справедливе зауваження.', '— We should leave early. — Fair point.', 'Fair point = слушно сказано.', 'everyday', ['Fair point']),
  p('Good point.', 'Гарне зауваження.', 'Good point — I hadn\'t thought of that.', 'Good point = влучна думка.', 'everyday', ['Good point']),
  p('That\'s a relief.', 'Як полегшення.', 'The test results are fine — that\'s a relief!', 'Relief = полегшення.', 'everyday', ['That\'s a relief']),
  p('What a day!', 'Який день!', 'What a day — I\'m exhausted.', 'What a day = день був важким/насиченим.', 'everyday', ['What a day']),
  p('I\'m wiped out.', 'Я повністю виснажений.', 'After that hike, I\'m wiped out.', 'Wiped out = дуже втомлений.', 'everyday', ['I\'m wiped out']),
  p('I need to recharge.', 'Мені треба відновити сили.', 'I need to recharge — maybe a quiet weekend.', 'Recharge = «перезарядитися».', 'everyday', ['I need to recharge']),
  p('I\'m not myself today.', 'Я сьогодні не в формі.', 'Sorry if I\'m quiet — I\'m not myself today.', 'Not myself = не у звичному стані.', 'everyday', ['not myself today']),
  p('I\'ll sleep on it.', 'Я подумаю до ранку.', 'It\'s a big decision — I\'ll sleep on it.', 'Sleep on it = відкласти рішення на ніч.', 'everyday', ['sleep on it']),
  p('First things first.', 'Насамперед / спочатку головне.', 'First things first — let\'s finish this before we start that.', 'First things first = пріоритети.', 'everyday', ['First things first']),
  p('It\'s getting late.', 'Вже пізно.', 'It\'s getting late — we should probably head home.', 'Getting late = стає пізно.', 'everyday', ['It\'s getting late']),
  p('I should get going.', 'Мені пора йти.', 'I should get going — I have an early start tomorrow.', 'Get going = почати рухатися / йти.', 'everyday', ['I should get going']),
  p('It\'s been a long day.', 'День був довгим.', 'It\'s been a long day — I\'m ready for bed.', 'Long day = виснажливий день.', 'everyday', ['It\'s been a long day']),
  p('I\'m beat — good night!', 'Я вимотаний — на добраніч!', 'I\'m beat — good night, see you tomorrow.', 'Комбінація втоми і прощання.', 'everyday', ['I\'m beat']),
];

function loadLegacy() {
  const src = fs.readFileSync(legacyFile, 'utf8');
  const m = src.match(/const PHRASES = (\[[\s\S]*?\]);/);
  return m ? eval('(' + m[1] + ')') : [];
}

function norm(en) {
  return en.toLowerCase().replace(/[…\.…]/g, '').trim();
}

function writeCategoryFile(cat, phrases) {
  const varName = 'PHRASES_' + cat.toUpperCase();
  const content = `// ${CATEGORIES_LABEL[cat]} — ${phrases.length} phrases\nconst ${varName} = ${JSON.stringify(phrases, null, 2)};\n`;
  fs.writeFileSync(path.join(phrasesDir, cat + '.js'), content, 'utf8');
}

const CATEGORIES_LABEL = {
  hotel: '🏨 Готель', street: '🗺️ Вулиця', transport: '🚌 Транспорт',
  cafe: '☕ Кафе', shop: '🛍️ Магазин', emergency: '🆘 Допомога',
  everyday: '💬 Повсякдень', social: '👋 Знайомство', plans: '📅 Плани'
};

function main() {
  fs.mkdirSync(phrasesDir, { recursive: true });

  let all = loadLegacy().filter(p => !REMOVE_EN.has(p.en));

  const existingNorm = new Set(all.map(p => norm(p.en)));
  const toAdd = NEW_EVERYDAY.filter(p => !existingNorm.has(norm(p.en)));
  if (toAdd.length < 100) {
    console.warn('Warning: only', toAdd.length, 'new unique everyday phrases (target 100)');
  }
  all = [...all, ...toAdd.slice(0, 100)];

  const byCat = {};
  CATEGORY_ORDER.forEach(c => { byCat[c] = []; });
  all.forEach(p => {
    if (byCat[p.cat]) byCat[p.cat].push(p);
    else console.warn('Unknown cat:', p.cat, p.en);
  });

  CATEGORY_ORDER.forEach(cat => writeCategoryFile(cat, byCat[cat]));

  const aggregate = `// Auto-generated — run: node scripts/migrate-and-build.js\nconst PHRASES = [\n${CATEGORY_ORDER.map(c => '  ...PHRASES_' + c.toUpperCase()).join(',\n')}\n];\n\nconst TOTAL = PHRASES.length;\n`;
  fs.writeFileSync(path.join(phrasesDir, 'aggregate.js'), aggregate, 'utf8');

  console.log('Removed:', REMOVE_EN.size, 'phrases');
  console.log('Added everyday:', Math.min(toAdd.length, 100));
  console.log('Total:', all.length);
  CATEGORY_ORDER.forEach(c => console.log(' ', c + ':', byCat[c].length));
}

main();
