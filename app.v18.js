const CATEGORIES = {
  hotel: '🏨 Готель',
  street: '🗺️ Вулиця',
  transport: '🚌 Транспорт',
  cafe: '☕ Кафе',
  shop: '🛍️ Магазин',
  emergency: '🆘 Допомога',
  everyday: '💬 Повсякдень',
  social: '👋 Знайомство',
  plans: '📅 Плани'
};


// 🏨 Готель — 11 phrases
const PHRASES_HOTEL = [
  {
    "en": "Could you tell me where the nearest hotel is?",
    "ua": "Чи не могли б ви сказати, де найближчий готель?",
    "ex": "Could you tell me where the nearest pharmacy is?",
    "tip": "Шаблон: Could you tell me where [місце] is? — чемне запитання про місцезнаходження",
    "rule": "Could — вежливая форма 'can'. В косвенных вопросах порядок слов прямой: сначала место, потом глагол 'is' в самом конце.",
    "cat": "hotel",
    "tag": "🏨 Готель",
    "anchors": [
      "Could you tell me where",
      "is?"
    ],
    "situation": "На рецепції готелю або в номері",
    "examples": [
      "Could you tell me where the nearest pharmacy is?",
      "— Could you tell me where the pharmacy is? — Of course, I'll send someone up right away."
    ]
  },
  {
    "en": "I have a reservation under the name…",
    "ua": "У мене є бронювання на ім'я…",
    "ex": "— I have a reservation under the name Smith. — One moment, please.",
    "tip": "Замість Smith вставте своє прізвище. Завжди говоріть по складах!",
    "rule": "Предлог UNDER здесь означает 'зарегистрировано на', а не 'под'. Запомните устойчивое сочетание 'under the name'.",
    "cat": "hotel",
    "tag": "🏨 Готель",
    "anchors": [
      "under the name"
    ],
    "situation": "На рецепції готелю або в номері",
    "examples": [
      "— I have a reservation under the name Smith. — One moment, please.",
      "— I have a reservation under the name... — Yes, that's included. Is there anything else?"
    ]
  },
  {
    "en": "What time is check-in / check-out?",
    "ua": "О котрій годині заїзд / виїзд?",
    "ex": "— What time is check-out? — It's at noon, but we can extend for a fee.",
    "tip": "Check-in = заїзд, check-out = виїзд. Просте запитання — дуже корисне!",
    "rule": "Устойчивые существительные от фразовых глаголов. Пишутся через дефис или слитно. Konstrukcija 'What time is...?'",
    "cat": "hotel",
    "tag": "🏨 Готель",
    "anchors": [
      "What time is",
      "check-in",
      "check-out"
    ],
    "situation": "На рецепції готелю або в номері",
    "examples": [
      "— What time is check-out? — It's at noon, but we can extend for a fee.",
      "— What time is check-in or check-out? — Certainly — one moment, please."
    ]
  },
  {
    "en": "Is breakfast included in the price?",
    "ua": "Чи включений сніданок у вартість?",
    "ex": "— Is breakfast included? — Yes, it's served from 7 to 10 AM.",
    "tip": "Included = включений. Запам'ятай пару: Is [X] included?",
    "rule": "Пассивный залог (Passive Voice): Is + существительное + третья форма глагола (included).",
    "cat": "hotel",
    "tag": "🏨 Готель",
    "anchors": [
      "Is",
      "included in"
    ],
    "situation": "На рецепції готелю або в номері",
    "examples": [
      "— Is breakfast included? — Yes, it's served from 7 to 10 AM.",
      "— Is breakfast included in the price? — Certainly — one moment, please."
    ]
  },
  {
    "en": "Could you bring extra towels to my room?",
    "ua": "Чи не могли б ви принести додаткові рушники до мого номеру?",
    "ex": "Could you bring extra pillows / a blanket / an iron to my room?",
    "tip": "Замінюй слово після 'bring' — дуже гнучка фраза для обслуговування",
    "rule": "'Could you [глагол]...?' — стандарт вежливой просьбы, чтобы кто-то сделал что-то для вас.",
    "cat": "hotel",
    "tag": "🏨 Готель",
    "anchors": [
      "Could you bring",
      "to my room?"
    ],
    "situation": "На рецепції готелю або в номері",
    "examples": [
      "Could you bring extra pillows / a blanket / an iron to my room?",
      "— Could you bring extra towels to my room? — Yes, that's included. Is there anything else?"
    ]
  },
  {
    "en": "The air conditioning doesn't seem to be working.",
    "ua": "Здається, кондиціонер не працює.",
    "ex": "The heating / hot water / Wi-Fi doesn't seem to be working.",
    "tip": "doesn't seem to be working — м'якший варіант ніж 'is broken', звучить не грубо",
    "rule": "'Doesn't seem to be working' — конструкция 'кажется, не работает'. Смягчает претензию, делая английский естественным.",
    "cat": "hotel",
    "tag": "🏨 Готель",
    "anchors": [
      "doesn't seem to be working"
    ],
    "situation": "На рецепції готелю або в номері",
    "examples": [
      "The heating / hot water / Wi-Fi doesn't seem to be working.",
      "— The air conditioning doesn't seem to be working. — Yes, that's included. Is there anything else?"
    ]
  },
  {
    "en": "What time does breakfast start?",
    "ua": "О котрій починається сніданок?",
    "ex": "What time does breakfast start? I need to leave early tomorrow.",
    "tip": "Start / finish — базові дієслова, які постійно потрібні для часу роботи сервісу",
    "rule": "У питаннях Present Simple після 'does' дієслово повертається у базову форму: start.",
    "cat": "hotel",
    "tag": "🏨 Готель",
    "anchors": [
      "What time does",
      "breakfast start"
    ],
    "situation": "На рецепції готелю або в номері",
    "examples": [
      "What time does breakfast start? I need to leave early tomorrow.",
      "— What time does breakfast start? — Of course, I'll send someone up right away."
    ]
  },
  {
    "en": "Could you call a taxi for me?",
    "ua": "Чи не могли б ви викликати мені таксі?",
    "ex": "Could you call a taxi for me for 8 AM tomorrow?",
    "tip": "Could you [дія] for me? — одна з найкорисніших фраз на рецепції готелю",
    "rule": "Порядок слов: Действие ('call a taxi') + для кого ('for me'). Предлог FOR обязателен.",
    "cat": "hotel",
    "tag": "🏨 Готель",
    "anchors": [
      "Could you call",
      "for me?"
    ],
    "situation": "На рецепції готелю або в номері",
    "examples": [
      "Could you call a taxi for me for 8 AM tomorrow?",
      "— Could you call a taxi for me? — Certainly — one moment, please."
    ]
  },
  {
    "en": "What's the Wi-Fi password?",
    "ua": "Який пароль від Wi-Fi?",
    "ex": "— What's the Wi-Fi password? — It's on the card on your desk.",
    "tip": "Найпростіша і найпотрібніша фраза в будь-какому готелі :)",
    "cat": "hotel",
    "tag": "🏨 Готель",
    "anchors": [
      "What's the"
    ],
    "situation": "На рецепції готелю або в номері",
    "examples": [
      "— What's the Wi-Fi password? — It's on the card on your desk.",
      "— What's the Wi-Fi password? — Yes, that's included. Is there anything else?"
    ]
  },
  {
    "en": "I think there's been a mistake with my bill.",
    "ua": "Здається, є помилка в моєму рахунку.",
    "ex": "— I think there's been a mistake — I was charged twice for breakfast.",
    "tip": "I think there's been a mistake — ввічливий спосіб вказати на помилку",
    "rule": "'There's been' = 'There has been' (Present Perfect). Ошибка уже совершена в прошлом, но её результат мы видим в счете прямо сейчас.",
    "cat": "hotel",
    "tag": "🏨 Готель",
    "anchors": [
      "I think there's been a mistake",
      "with my"
    ],
    "situation": "На рецепції готелю або в номері",
    "examples": [
      "— I think there's been a mistake — I was charged twice for breakfast.",
      "— I think there's been a mistake with my bill. — Of course, I'll send someone up right away."
    ]
  },
  {
    "en": "Could you recommend a good restaurant nearby?",
    "ua": "Чи не могли б ви порадити хороший ресторан поблизу?",
    "ex": "Could you recommend a good pharmacy / museum / supermarket nearby?",
    "tip": "Could you recommend...? — універсальна фраза-прохання поради",
    "cat": "hotel",
    "tag": "🏨 Готель",
    "anchors": [
      "Could you recommend",
      "nearby?"
    ],
    "situation": "На рецепції готелю або в номері",
    "examples": [
      "Could you recommend a good pharmacy / museum / supermarket nearby?",
      "— Could you recommend a good restaurant nearby? — Certainly — one moment, please."
    ]
  }
];


// 🗺️ Вулиця — 15 phrases
const PHRASES_STREET = [
  {
    "en": "Excuse me, how do I get to…?",
    "ua": "Вибачте, як мені дістатися до…?",
    "ex": "Excuse me, how do I get to the train station / the city centre?",
    "tip": "How do I get to...? — найпоширеніша фраза для запиту напрямку",
    "rule": "Глагол 'get to' в значении 'добираться/доезжать'. Самый ходовой способ спросить дорогу.",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "Excuse me, how do I get to"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "Excuse me, how do I get to the train station / the city centre?",
      "— Excuse me, how do I get to...? — Sure — it's about five minutes on foot."
    ]
  },
  {
    "en": "Is it within walking distance?",
    "ua": "Чи можна дійти пішки?",
    "ex": "— Is the museum within walking distance? — About 15 minutes on foot.",
    "tip": "Within walking distance = пішки дійти. Дуже природна фраза англійською",
    "rule": "'Within' означает 'в пределах'. Walking distance — расстояние ходьбы. Wildcard конструкция.",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "within walking distance"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "— Is the museum within walking distance? — About 15 minutes on foot.",
      "— Is it within walking distance? — No problem. You can't miss it."
    ]
  },
  {
    "en": "Could you point me in the right direction?",
    "ua": "Чи не могли б ви вказати мне правильний напрямок?",
    "ex": "I'm looking for the main square. Could you point me in the right direction?",
    "tip": "Point me in the right direction — ідіома, буквально: 'вказати в правильний бік'",
    "rule": "Глагол 'point' (указывать пальцем) + в каком направлении (предлог IN, а не TO!).",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "point me in the right direction"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "I'm looking for the main square. Could you point me in the right direction?",
      "— Could you point me in the right direction? — Sure — it's about five minutes on foot."
    ]
  },
  {
    "en": "I think I'm lost. Could you help me?",
    "ua": "Здається, я загубився. Чи не могли б ви допомогти?",
    "ex": "I think I'm lost — I was looking for the bus stop but ended up here.",
    "tip": "I think I'm lost — чесне і просте. Люди зазвичай із задоволенням допомагають!",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "I think I'm lost",
      "Could you"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "I think I'm lost — I was looking for the bus stop but ended up here.",
      "— I think I'm lost. Could you help me? — Sure — it's about five minutes on foot."
    ]
  },
  {
    "en": "How far is it from here?",
    "ua": "Як далеко це звідси?",
    "ex": "— How far is it? — About two kilometres, maybe a 20-minute walk.",
    "tip": "How far is it? — питаєш відстань. Відповідь може быть в км або хвилинах ходьби",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "How far is it from here?"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "— How far is it? — About two kilometres, maybe a 20-minute walk.",
      "— How far is it from here? — No problem. You can't miss it."
    ]
  },
  {
    "en": "Is there a public toilet nearby?",
    "ua": "Чи є поблизу громадський туалет?",
    "ex": "— Is there a public toilet nearby? — Yes, just around the corner.",
    "tip": "Public toilet (UK) = restroom (US). Корисна фраза в будь-якій подорожі!",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "Is there a",
      "nearby?"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "— Is there a public toilet nearby? — Yes, just around the corner.",
      "— Is there a public toilet nearby? — Sure — it's about five minutes on foot."
    ]
  },
  {
    "en": "Which way is the town centre?",
    "ua": "В якому напрямку центр міста?",
    "ex": "— Which way is the town centre? — Straight ahead, about five minutes.",
    "tip": "Which way is...? — запитуєш напрямок, а не конкретний шлях",
    "rule": "'Which way' буквально означает 'какой из путей/дорог'. Ответом часто будет жест рукой.",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "Which way is"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "— Which way is the town centre? — Straight ahead, about five minutes.",
      "— Which way is the town centre? — No problem. You can't miss it."
    ]
  },
  {
    "en": "Is this the right way to…?",
    "ua": "Це правильний шлях до…?",
    "ex": "Is this the right way to the airport? I want to make sure.",
    "tip": "Is this the right way to...? — підтверджуєш, що рухаєшся правильно",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "Is this the right way to"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "Is this the right way to the airport? I want to make sure.",
      "— Is this the right way to...? — No problem. You can't miss it."
    ]
  },
  {
    "en": "Can you show me on the map?",
    "ua": "Чи можете ви показати мені на карті?",
    "ex": "I have Google Maps open — can you show me on the map where it is?",
    "tip": "Покажи телефон — люди охоче тикнуть пальцем у карту!",
    "rule": "Обратите внимание на предлог ON (на карте), а не IN.",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "show me on the map"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "I have Google Maps open — can you show me on the map where it is?",
      "— Can you show me on the map? — Yes, just keep straight and turn left."
    ]
  },
  {
    "en": "Is it on the left or on the right?",
    "ua": "Це зліва чи справа?",
    "ex": "— Turn at the corner. — Is it on the left or on the right? — On the right.",
    "tip": "Left = зліва, right = справа. Базово, але легко переплутати під стресом!",
    "rule": "Всегда используется с предлогом ON: 'on the left', 'on the right'.",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "on the left",
      "on the right"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "— Turn at the corner. — Is it on the left or on the right? — On the right.",
      "— Is it on the left or on the right? — No problem. You can't miss it."
    ]
  },
  {
    "en": "Could you write it down for me?",
    "ua": "Чи могли б ви написати мені це?",
    "ex": "Could you write down the address for me? My English isn't perfect.",
    "tip": "Write it down = написати. Чудова стратегія коли не розумієш на слух",
    "rule": "Фразовый глагол 'write down' (записать). Местоимение 'it' всегда разрывает этот глагол: 'write IT down'.",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "write it down for me"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "Could you write down the address for me? My English isn't perfect.",
      "— Could you write it down for me? — No problem. You can't miss it."
    ]
  },
  {
    "en": "Could you speak more slowly, please?",
    "ua": "Чи не могли б ви говорити повільніше, будь ласка?",
    "ex": "I'm sorry, could you speak more slowly? My English is still improving.",
    "tip": "Говори це без соромлячись! Носії мови охоче повільнішають",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "speak more slowly"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "I'm sorry, could you speak more slowly? My English is still improving.",
      "— Could you speak more slowly, please? — Sure — it's about five minutes on foot."
    ]
  },
  {
    "en": "I'm sorry, I didn't catch that.",
    "ua": "Вибачте, я не зрозумів цього.",
    "ex": "— The total is twenty-seven fifty. — I'm sorry, I didn't catch that.",
    "tip": "I didn't catch that = не розчув. М'якший ніж 'What?'",
    "rule": "Глагол 'catch' здесь в переносном значении 'уловить смысл/расслышать'.",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "I didn't catch that"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "— The total is twenty-seven fifty. — I'm sorry, I didn't catch that.",
      "— I'm sorry, I didn't catch that. — Sure — it's about five minutes on foot."
    ]
  },
  {
    "en": "Do you speak English?",
    "ua": "Ви говорите англійською?",
    "ex": "Excuse me, do you speak English? I need some directions.",
    "tip": "Якщо ні — спробуй: 'Do you speak French / Spanish / German?'",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "Do you speak English?"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "Excuse me, do you speak English? I need some directions.",
      "— Do you speak English? — Yes, just keep straight and turn left."
    ]
  },
  {
    "en": "Is there an ATM around here?",
    "ua": "Чи є тут банкомат?",
    "ex": "Is there an ATM around here? I need to withdraw some cash.",
    "tip": "ATM (UK: cash machine) = банкомат. Around here = поблизу",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "Is there an ATM",
      "around here?"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "Is there an ATM around here? I need to withdraw some cash.",
      "— Is there an ATM around here? — No problem. You can't miss it."
    ]
  }
];


// 🚌 Транспорт — 14 phrases
const PHRASES_TRANSPORT = [
  {
    "en": "Which bus goes to…?",
    "ua": "Який автобус їде до…?",
    "ex": "— Which bus goes to the airport? — Take number 48 from this stop.",
    "tip": "Which bus / tram / metro line goes to...? — замінюй тип транспорту",
    "rule": "Глагол 'go' с окончанием -es (goes), так как автобус — это он (it).",
    "cat": "transport",
    "tag": "🚌 Транспорт",
    "anchors": [
      "Which",
      "goes to"
    ],
    "situation": "В транспорті або на зупинці",
    "examples": [
      "— Which bus goes to the airport? — Take number 48 from this stop.",
      "— Which bus goes toCentral Station? — Yes, it stops there. You need a single ticket."
    ]
  },
  {
    "en": "Where is the nearest bus stop / metro station?",
    "ua": "Де найближча автобусна зупинка / станція метро?",
    "ex": "Excuse me, where is the nearest metro station? I need to get downtown.",
    "tip": "Nearest = найближчий. Запам'ятай пару: Where is the nearest [місце]?",
    "rule": "Превосходная степень сравнения: near -> nearest. Артикль THE обязателен перед превосходной степенью.",
    "cat": "transport",
    "tag": "🚌 Тр.",
    "anchors": [
      "Where is the nearest"
    ],
    "situation": "В транспорті або на зупинці",
    "examples": [
      "Excuse me, where is the nearest metro station? I need to get downtown.",
      "— Where is the nearest bus stop or metro station? — Sure, I'll let you know when we arrive."
    ]
  },
  {
    "en": "How much is a ticket to…?",
    "ua": "Скільки коштує квиток до…?",
    "ex": "How much is a ticket to the city centre? Is there a day pass?",
    "tip": "How much is a ticket to...? — найзручніша фраза для кас і водіїв",
    "cat": "transport",
    "tag": "🚌 Транспорт",
    "anchors": [
      "How much is a ticket to"
    ],
    "situation": "В транспорті або на зупинці",
    "examples": [
      "How much is a ticket to the city centre? Is there a day pass?",
      "— How much is a ticket toOxford Street? — Yes, it stops there. You need a single ticket."
    ]
  },
  {
    "en": "Does this train stop at…?",
    "ua": "Чи зупиняється цей поїзд у…?",
    "ex": "Excuse me, does this train stop at Central Station?",
    "tip": "Does this [транспорт] stop at [місце]? — важливо запитати перед посадкою!",
    "rule": "Вспомогательный глагол DOES для вопросов в Present Simple. Станции требуют предлога AT.",
    "cat": "transport",
    "tag": "🚌 Транспорт",
    "anchors": [
      "Does this",
      "stop at"
    ],
    "situation": "В транспорті або на зупинці",
    "examples": [
      "Excuse me, does this train stop at Central Station?",
      "— Does this train stop at...? — Sure, I'll let you know when we arrive."
    ]
  },
  {
    "en": "Is this seat taken?",
    "ua": "Це місце зайняте?",
    "ex": "— Excuse me, is this seat taken? — No, go ahead, please.",
    "tip": "Is this seat taken? = чи зайняте місце? Відповідь No/Yes або 'Feel free'",
    "rule": "'Taken' — третья форма глагола 'take'. Конструкция пассивного залога: 'Является ли место занятым?'",
    "cat": "transport",
    "tag": "🚌 Транспорт",
    "anchors": [
      "Is this seat taken?"
    ],
    "situation": "В транспорті або на зупинці",
    "examples": [
      "— Excuse me, is this seat taken? — No, go ahead, please.",
      "— Is this seat taken? — Yes, it stops there. You need a single ticket."
    ]
  },
  {
    "en": "I'd like a one-way / return ticket to…",
    "ua": "Я хотів би квиток в один бік / туди-назад до…",
    "ex": "I'd like a return ticket to Edinburgh, please. Second class.",
    "tip": "One-way = в один бік, return = туди і назад.",
    "rule": "'I'd like' = 'I would like' (Я бы хотел). Более вежливо, чем 'I want'.",
    "cat": "transport",
    "tag": "🚌 Транспорт",
    "anchors": [
      "I'd like a",
      "one-way",
      "return ticket to"
    ],
    "situation": "В транспорті або на зупинці",
    "examples": [
      "I'd like a return ticket to Edinburgh, please. Second class.",
      "— I'd like a one-way or return ticket to... — Yes, it stops there. You need a single ticket."
    ]
  },
  {
    "en": "What time does the last train leave?",
    "ua": "О котрій годині відходить останній поїзд?",
    "ex": "What time does the last train to London leave? I don't want to miss it.",
    "tip": "Last train / bus / flight — завжди корисно знати розклад!",
    "rule": "Порядок слов: Вопросительное слово ('What time') + DOES + подлежащее + основной глагол без окончаний ('leave').",
    "cat": "transport",
    "tag": "🚌 Транспорт",
    "anchors": [
      "What time does",
      "leave?"
    ],
    "situation": "В транспорті або на зупинці",
    "examples": [
      "What time does the last train to London leave? I don't want to miss it.",
      "— What time does the last train leave? — Yes, it stops there. You need a single ticket."
    ]
  },
  {
    "en": "Could you let me know when we reach…?",
    "ua": "Чи не могли б ви сказати мне, коли ми приїдемо до…?",
    "ex": "Could you let me know when we reach the airport?",
    "tip": "Could you let me know when...? — прохання повідомити. Дуже ввічливо!",
    "rule": "Глагол 'reach' (достигать) не требует после себя предлогов: 'reach the airport', а не 'reach to'.",
    "cat": "transport",
    "tag": "🚌 Транспорт",
    "anchors": [
      "Could you let me know when we reach"
    ],
    "situation": "В транспорті або на зупинці",
    "examples": [
      "Could you let me know when we reach the airport?",
      "— Could you let me know when we reachthe next stop? — Yes, it stops there. You need a single ticket."
    ]
  },
  {
    "en": "Is the train / bus running on time?",
    "ua": "Поїзд / автобус іде за розкладом?",
    "ex": "— Is the 14:30 running on time? — It's delayed by about 20 minutes.",
    "tip": "Running on time = за розкладом. Delayed = затримується.",
    "rule": "Идиома 'run on time'. Используется во временной форме Present Continuous, так как речь о текущем процессе.",
    "cat": "transport",
    "tag": "🚌 Транспорт",
    "anchors": [
      "running on time"
    ],
    "situation": "В транспорті або на зупинці",
    "examples": [
      "— Is the 14:30 running on time? — It's delayed by about 20 minutes.",
      "— Is the train or bus running on time? — Sure, I'll let you know when we arrive."
    ]
  },
  {
    "en": "I need to get off at the next stop.",
    "ua": "Мені треба вийти на наступній зупинці.",
    "ex": "Excuse me, I need to get off at the next stop. Could you let me through?",
    "tip": "Get off = вийти з транспорту (не exit!). Get on = сісти.",
    "rule": "Фразовый глагол 'get off' (выходить из крупного транспорта, где можно стоять в полный рост). Для такси/машин используется 'get out of'.",
    "cat": "transport",
    "tag": "🚌 Транспорт",
    "anchors": [
      "need to get off at",
      "next stop"
    ],
    "situation": "В транспорті або на зупинці",
    "examples": [
      "Excuse me, I need to get off at the next stop. Could you let me through?",
      "— I need to get off at the next stop. — Platform 2 — the train leaves in twelve minutes."
    ]
  },
  {
    "en": "How long does the journey take?",
    "ua": "Скільки часу займає дорога?",
    "ex": "How long does the journey take from here to the airport by metro?",
    "tip": "How long does the journey take? — питаєш тривалість поїздки",
    "rule": "Устойчивое выражение 'take time' (занимать время). Для вопросов: 'How long does it take?'.",
    "cat": "transport",
    "tag": "🚌 Транспорт",
    "anchors": [
      "How long does",
      "take?"
    ],
    "situation": "В транспорті або на зупинці",
    "examples": [
      "How long does the journey take from here to the airport by metro?",
      "— How long does the journey take? — Platform 2 — the train leaves in twelve minutes."
    ]
  },
  {
    "en": "Where can I get a taxi?",
    "ua": "Де можна взяти таксі?",
    "ex": "Where can I get a taxi? Is there a rank outside the station?",
    "tip": "Taxi rank = стоянка таксі. Get a taxi = взяти таксі",
    "cat": "transport",
    "tag": "🚌 Транспорт",
    "anchors": [
      "Where can I get"
    ],
    "situation": "В транспорті або на зупинці",
    "examples": [
      "Where can I get a taxi? Is there a rank outside the station?",
      "— Where can I get a taxi? — Platform 2 — the train leaves in twelve minutes."
    ]
  },
  {
    "en": "Please take me to this address.",
    "ua": "Будь ласка, відвезіть мене за цією адресою.",
    "ex": "Please take me to this address. Is the traffic bad at this time?",
    "tip": "Покажи телефон з адресою — найнадійніший спосіб!",
    "rule": "Глагол 'take' в значении 'отвезти/доставить'. Направление указывается предлогом TO.",
    "cat": "transport",
    "tag": "🚌 Транспорт",
    "anchors": [
      "Please take me to"
    ],
    "situation": "В транспорті або на зупинці",
    "examples": [
      "Please take me to this address. Is the traffic bad at this time?",
      "— Please take me to this address. — Platform 2 — the train leaves in twelve minutes."
    ]
  },
  {
    "en": "Could you drop me off here, please?",
    "ua": "Чи не могли б ви висадити мене тут, будь ласка?",
    "ex": "Could you drop me off here? I'll walk the rest of the way.",
    "tip": "Drop off = висадити. Pick up = забрати. Два важливих фразових дієслова!",
    "rule": "Фразовый глагол 'drop off' разрывается местоимением: 'drop ME off'.",
    "cat": "transport",
    "tag": "🚌 Транспорт",
    "anchors": [
      "drop me off here"
    ],
    "situation": "В транспорті або на зупинці",
    "examples": [
      "Could you drop me off here? I'll walk the rest of the way.",
      "— Could you drop me off here, please? — Yes, it stops there. You need a single ticket."
    ]
  }
];


// ☕ Кафе — 11 phrases
const PHRASES_CAFE = [
  {
    "en": "A table for two, please.",
    "ua": "Столик на двох, будь ласка.",
    "ex": "— A table for two, please. — Inside or outside? — Outside, if possible.",
    "tip": "For two / three / four — просто змінюй цифру.",
    "cat": "cafe",
    "tag": "☕ Кафе",
    "anchors": [
      "for two"
    ],
    "situation": "У кафе або ресторані",
    "examples": [
      "— A table for two, please. — Inside or outside? — Outside, if possible.",
      "— A table for two, please. — Sure — I'll bring that over in a moment."
    ]
  },
  {
    "en": "Could I see the menu, please?",
    "ua": "Чи можна мені меню, будь ласка?",
    "ex": "Could I see the menu, please? And do you have a menu in English?",
    "tip": "Could I see...? — ввічливе прохання.",
    "cat": "cafe",
    "tag": "☕ Кафе",
    "anchors": [
      "Could I see the"
    ],
    "situation": "У кафе або ресторані",
    "examples": [
      "Could I see the menu, please? And do you have a menu in English?",
      "— Could I see the menu, please? — Sure — I'll bring that over in a moment."
    ]
  },
  {
    "en": "What do you recommend?",
    "ua": "Що ви порекомендуєте?",
    "ex": "— What do you recommend from the starters? — The soup is excellent today.",
    "tip": "What do you recommend? — офіціанти зазвичай дають чесну відповідь",
    "cat": "cafe",
    "tag": "☕ Кафе",
    "anchors": [
      "What do you recommend?"
    ],
    "situation": "У кафе або ресторані",
    "examples": [
      "— What do you recommend from the starters? — The soup is excellent today.",
      "— What do you recommend? — Of course. Anything to drink?"
    ]
  },
  {
    "en": "I'll have the…, please.",
    "ua": "Я візьму…, будь ласка.",
    "ex": "I'll have the grilled salmon and a glass of white wine, please.",
    "tip": "I'll have = я замовлю. Найзручніша фраза при замовленні їжі!",
    "rule": "'I'll have' = 'I will have' (Future Simple). В английском решение, принятое в момент речи (заказ в кафе), всегда выражается через WILL.",
    "cat": "cafe",
    "tag": "☕ Кафе",
    "anchors": [
      "I'll have the"
    ],
    "situation": "У кафе або ресторані",
    "examples": [
      "I'll have the grilled salmon and a glass of white wine, please.",
      "— I'll have the..., please. — Sure — I'll bring that over in a moment."
    ]
  },
  {
    "en": "Is this dish spicy?",
    "ua": "Ця страва гостра?",
    "ex": "— Is this dish spicy? I'm not good with spicy food. — It's mild.",
    "tip": "Spicy = гострий. Hot = гарячий (температура). Різні слова!",
    "cat": "cafe",
    "tag": "☕ Кафе",
    "anchors": [
      "Is this dish spicy?"
    ],
    "situation": "У кафе або ресторані",
    "examples": [
      "— Is this dish spicy? I'm not good with spicy food. — It's mild.",
      "— Is this dish spicy? — Right away. Would you like anything else?"
    ]
  },
  {
    "en": "Could I have the bill, please?",
    "ua": "Чи можна рахунок, будь ласка?",
    "ex": "Could I have the bill, please? We'd like to pay separately.",
    "tip": "Bill (UK) = check (US). Separately = окремо. Together = разом",
    "cat": "cafe",
    "tag": "☕ Кафе",
    "anchors": [
      "Could I have the bill"
    ],
    "situation": "У кафе або ресторані",
    "examples": [
      "Could I have the bill, please? We'd like to pay separately.",
      "— Could I have the bill, please? — Right away. Would you like anything else?"
    ]
  },
  {
    "en": "Can I pay by card?",
    "ua": "Чи можу я оплатити карткою?",
    "ex": "Can I pay by card, or is it cash only?",
    "tip": "Pay by card / pay in cash — дві базові фрази, які потрібні майже щодня",
    "rule": "Після 'can' дієслово стоїть у базовій формі: pay. Предлог BY показує спосіб оплати: by card.",
    "cat": "cafe",
    "tag": "☕ Кафе",
    "anchors": [
      "pay by card"
    ],
    "situation": "У кафе або ресторані",
    "examples": [
      "Can I pay by card, or is it cash only?",
      "— Can I pay by card? — Of course. Anything to drink?"
    ]
  },
  {
    "en": "Could I get this to go?",
    "ua": "Чи можна це забрати з собою?",
    "ex": "Could I get this to go? I'm in a bit of a rush.",
    "tip": "To go (US) = to take away (UK) = з собою.",
    "rule": "Инфинитив цели 'to go'. Буквально: 'чтобы уйти'.",
    "cat": "cafe",
    "tag": "☕ Кафе",
    "anchors": [
      "get this to go?"
    ],
    "situation": "У кафе або ресторані",
    "examples": [
      "Could I get this to go? I'm in a bit of a rush.",
      "— Could I get this to go? — Sure — I'll bring that over in a moment."
    ]
  },
  {
    "en": "Excuse me, we've been waiting for a long time.",
    "ua": "Вибачте, ми чекаємо вже довго.",
    "ex": "Excuse me, we've been waiting for about 30 minutes — is our order coming?",
    "tip": "We've been waiting — Present Perfect Continuous, наголошує на тривалості",
    "rule": "Форма Present Perfect Continuous: have + been + глагол-ING. Показывает действие, которое началось в прошлом и длится до сих пор.",
    "cat": "cafe",
    "tag": "☕ Кафе",
    "anchors": [
      "we've been waiting for a long time"
    ],
    "situation": "У кафе або ресторані",
    "examples": [
      "Excuse me, we've been waiting for about 30 minutes — is our order coming?",
      "— Excuse me, we've been waiting for a long time. — Sure — I'll bring that over in a moment."
    ]
  },
  {
    "en": "This isn't what I ordered.",
    "ua": "Це не те, що я замовляв.",
    "ex": "— Excuse me, this isn't what I ordered. I had the pasta, not the risotto.",
    "tip": "This isn't what I ordered — спокійно скажи це, більшість виправлять",
    "rule": "'What I ordered' — придаточное предложение, где 'what' выступает в роли 'то, что'. Past Simple (ordered), так как заказ был сделан ранее.",
    "cat": "cafe",
    "tag": "☕ Кафе",
    "anchors": [
      "This isn't what I ordered"
    ],
    "situation": "У кафе або ресторані",
    "examples": [
      "— Excuse me, this isn't what I ordered. I had the pasta, not the risotto.",
      "— This isn't what I ordered. — Of course. Anything to drink?"
    ]
  },
  {
    "en": "Is a tip expected here?",
    "ua": "Тут прийнято залишати чайові?",
    "ex": "— Is a tip expected here? — It's customary to leave about 10–15%.",
    "tip": "Tip = чайові. Expected = прийнято. Customary = за традицією",
    "cat": "cafe",
    "tag": "☕ Кафе",
    "anchors": [
      "Is a tip expected here?"
    ],
    "situation": "У кафе або ресторані",
    "examples": [
      "— Is a tip expected here? — It's customary to leave about 10–15%.",
      "— Is a tip expected here? — Right away. Would you like anything else?"
    ]
  }
];


// 🛍️ Магазин — 15 phrases
const PHRASES_SHOP = [
  {
    "en": "How much does this cost?",
    "ua": "Скільки це коштує?",
    "ex": "— How much does this cost? — It's nineteen ninety-nine.",
    "tip": "How much does it cost? = How much is it? — обидва однаково вживані",
    "cat": "shop",
    "tag": "🛍️ Магазин",
    "anchors": [
      "How much does this cost?"
    ],
    "situation": "У магазині під час покупок",
    "examples": [
      "— How much does this cost? — It's nineteen ninety-nine.",
      "— How much does this cost? — Sure — the fitting rooms are over there."
    ]
  },
  {
    "en": "Do you have this in a different size / colour?",
    "ua": "Чи є це в іншому розмірі / кольорі?",
    "ex": "Do you have this in a medium? The large is a bit too big for me.",
    "tip": "In a different size / colour / style — корисна фраза в одяговому магазині",
    "rule": "В отношении одежды и размеров всегда используется предлог IN: 'in a size', 'in blue'.",
    "cat": "shop",
    "tag": "🛍️ Магазин",
    "anchors": [
      "in a different size",
      "colour"
    ],
    "situation": "У магазині під час покупок",
    "examples": [
      "Do you have this in a medium? The large is a bit too big for me.",
      "— Do you have this in a different size or colour? — Let me check in the back for you."
    ]
  },
  {
    "en": "Can I try this on?",
    "ua": "Можна це приміряти?",
    "ex": "Can I try this on? I just want to check the size.",
    "tip": "Try on = приміряти одяг або взуття. Дуже базова і потрібна фраза",
    "rule": "Після 'can' дієслово стоїть у базовій формі: try. 'This' — річ, яку ти тримаєш у руках.",
    "cat": "shop",
    "tag": "🛍️ Магазин",
    "anchors": [
      "try this on"
    ],
    "situation": "У магазині під час покупок",
    "examples": [
      "Can I try this on? I just want to check the size.",
      "— Can I try this on? — Let me check in the back for you."
    ]
  },
  {
    "en": "I'm just looking, thank you.",
    "ua": "Я просто дивлюся, дякую.",
    "ex": "— Can I help you? — I'm just looking, thank you, but I'll let you know.",
    "tip": "I'm just looking — ввічливий спосіб сказати 'не турбуйте мене' продавцю",
    "rule": "Форма Present Continuous указывает на то, чем вы заняты в данную секунду.",
    "cat": "shop",
    "tag": "🛍️ Магазин",
    "anchors": [
      "I'm just looking"
    ],
    "situation": "У магазині під час покупок",
    "examples": [
      "— Can I help you? — I'm just looking, thank you, but I'll let you know.",
      "— I'm just looking, thank you. — Sure — the fitting rooms are over there."
    ]
  },
  {
    "en": "Do you have a bag for this?",
    "ua": "У вас є пакет для цього?",
    "ex": "Do you have a bag for this? It's for a gift.",
    "tip": "Bag for this = пакет для покупки. Дуже часта фраза на касі",
    "rule": "Після 'Do you have...?' використовуємо іменник без змін. 'For this' уточнює призначення.",
    "cat": "shop",
    "tag": "🛍️ Магазин",
    "anchors": [
      "a bag for this"
    ],
    "situation": "У магазині під час покупок",
    "examples": [
      "Do you have a bag for this? It's for a gift.",
      "— Do you have a bag for this? — Sure — the fitting rooms are over there."
    ]
  },
  {
    "en": "Could I get a receipt, please?",
    "ua": "Чи можу я отримати чек, будь ласка?",
    "ex": "Could I get a receipt, please? I might need to return this.",
    "tip": "Receipt = чек. Завжди бери чек — знадобиться для повернення!",
    "rule": "В слове RECEIPT буква P не произносится! Читается как [рисИіт].",
    "cat": "shop",
    "tag": "🛍️ Магазин",
    "anchors": [
      "Could I get a receipt"
    ],
    "situation": "У магазині під час покупок",
    "examples": [
      "Could I get a receipt, please? I might need to return this.",
      "— Could I get a receipt, please? — Yes, we accept cards and contactless."
    ]
  },
  {
    "en": "Where do I pay for this?",
    "ua": "Де я можу за це заплатити?",
    "ex": "Where do I pay for this? At the counter over there?",
    "tip": "Pay for this = заплатити за річ. Зручно в незнайомому магазині чи на ринку",
    "rule": "У Wh-question з Present Simple використовуємо 'do': Where do I pay...?",
    "cat": "shop",
    "tag": "🛍️ Магазин",
    "anchors": [
      "Where do I pay",
      "for this"
    ],
    "situation": "У магазині під час покупок",
    "examples": [
      "Where do I pay for this? At the counter over there?",
      "— Where do I pay for this? — Let me check in the back for you."
    ]
  },
  {
    "en": "Do you accept credit cards?",
    "ua": "Чи приймаєте ви кредитні картки?",
    "ex": "— Do you accept credit cards? — Yes, we take Visa and Mastercard.",
    "tip": "Cash only = тільки готівка. Contactless = безконтактна оплата",
    "cat": "shop",
    "tag": "🛍️ Магазин",
    "anchors": [
      "Do you accept"
    ],
    "situation": "У магазині під час покупок",
    "examples": [
      "— Do you accept credit cards? — Yes, we take Visa and Mastercard.",
      "— Do you accept credit cards? — Yes, we accept cards and contactless."
    ]
  },
  {
    "en": "Where can I find…?",
    "ua": "Де я можу знайти…?",
    "ex": "Where can I find sunscreen / painkillers / a phone charger?",
    "tip": "Where can I find...? — питаєш про место товара або де купити",
    "cat": "shop",
    "tag": "🛍️ Магазин",
    "anchors": [
      "Where can I find"
    ],
    "situation": "У магазині під час покупок",
    "examples": [
      "Where can I find sunscreen / painkillers / a phone charger?",
      "— Where can I finda larger size? — Yes, we accept cards and contactless."
    ]
  },
  {
    "en": "Is this on sale?",
    "ua": "Це на розпродажі?",
    "ex": "— Is this on sale? — Yes, everything in this section is 30% off.",
    "tip": "On sale = зі знижкою. For sale = продається (не означає знижку!)",
    "rule": "Важное различие! 'On sale' — продается со скидкой (уценка). 'For sale' — просто выставлено на продажу.",
    "cat": "shop",
    "tag": "🛍️ Магазин",
    "anchors": [
      "on sale?"
    ],
    "situation": "У магазині під час покупок",
    "examples": [
      "— Is this on sale? — Yes, everything in this section is 30% off.",
      "— Is this on sale? — Yes, we accept cards and contactless."
    ]
  },
  {
    "en": "Could you put this in a small bag?",
    "ua": "Чи могли б ви покласти це в маленький пакет?",
    "ex": "Could you put this in a small bag? I don't need a big one.",
    "tip": "Put this in a bag — дуже природне прохання на касі",
    "rule": "Після 'Could you' ставимо дієслово в базовій формі: put.",
    "cat": "shop",
    "tag": "🛍️ Магазин",
    "anchors": [
      "put this in",
      "small bag"
    ],
    "situation": "У магазині під час покупок",
    "examples": [
      "Could you put this in a small bag? I don't need a big one.",
      "— Could you put this in a small bag? — Let me check in the back for you."
    ]
  },
  {
    "en": "What are the opening hours?",
    "ua": "Який графік роботи?",
    "ex": "— What are the opening hours? — We're open from 9 AM to 6 PM.",
    "tip": "Opening hours = години роботи. Open = відчинено, Closed = зачинено",
    "cat": "shop",
    "tag": "🛍️ Магазин",
    "anchors": [
      "What are the opening hours?"
    ],
    "situation": "У магазині під час покупок",
    "examples": [
      "— What are the opening hours? — We're open from 9 AM to 6 PM.",
      "— What are the opening hours? — Let me check in the back for you."
    ]
  },
  {
    "en": "Could I try this on?",
    "ua": "Чи можу я приміряти це?",
    "ex": "Could I try this dress on in size 12, please?",
    "tip": "Try on = приміряти. Fit = підходить по розміру. Suit = пасує (стиль)",
    "rule": "Фразовый глагол 'try on' (примерять одежду). Объект ставится посредине или в конце: 'try THIS on'.",
    "cat": "shop",
    "tag": "🛍️ Магазин",
    "anchors": [
      "Could I try",
      "on?"
    ],
    "situation": "У магазині під час покупок",
    "examples": [
      "Could I try this dress on in size 12, please?",
      "— Could I try this on? — Sure — the fitting rooms are over there."
    ]
  },
  {
    "en": "Is it okay if I pay by card?",
    "ua": "Чи можна заплатити карткою?",
    "ex": "— Is it okay if I pay by card? — Yes, contactless is fine too.",
    "tip": "Is it okay if I... — м'яке питання про дозвіл.",
    "cat": "shop",
    "tag": "🛍️ Магазин",
    "anchors": [
      "Is it okay if I pay"
    ],
    "situation": "Перед оплатою карткою в невеликому магазині",
    "examples": [
      "— Is it okay if I pay by card? — Yes, contactless is fine too.",
      "— Is it okay if I pay by card? — Let me check in the back for you."
    ]
  },
  {
    "en": "Do you have anything cheaper?",
    "ua": "У вас є щось дешевше?",
    "ex": "— Do you have anything cheaper? — We have a similar one for half the price.",
    "tip": "Anything cheaper — прямо, але не грубо.",
    "cat": "shop",
    "tag": "🛍️ Магазин",
    "anchors": [
      "anything cheaper"
    ],
    "situation": "Коли ціна здається зависокою",
    "examples": [
      "— Do you have anything cheaper? — We have a similar one for half the price.",
      "— Do you have anything cheaper? — Yes, we accept cards and contactless."
    ]
  }
];


// 🆘 Допомога — 8 phrases
const PHRASES_EMERGENCY = [
  {
    "en": "Call an ambulance, please!",
    "ua": "Викличте швидку, будь ласка!",
    "ex": "Call an ambulance — this person has collapsed and is not responding!",
    "tip": "Ambulance = швидка допомога. Ця фраза повинна бути на автоматі!",
    "cat": "emergency",
    "tag": "🆘 Допомога",
    "anchors": [
      "Call an ambulance"
    ],
    "situation": "У складній або екстреній ситуації",
    "examples": [
      "Call an ambulance — this person has collapsed and is not responding!",
      "— Call an ambulance, please! — I'll call for help right now."
    ]
  },
  {
    "en": "Where's the restroom?",
    "ua": "Де тут туалет?",
    "ex": "Excuse me, where's the restroom?",
    "tip": "Restroom (US), toilet (UK), bathroom теж часто кажуть у розмові",
    "rule": "'Where's' = 'Where is'. Коротка форма звучить природніше в живій мові.",
    "cat": "emergency",
    "tag": "🆘 Допомога",
    "anchors": [
      "Where's the restroom"
    ],
    "situation": "У складній або екстреній ситуації",
    "examples": [
      "Excuse me, where's the restroom?",
      "— Where's the restroom? — Stay calm — help is on the way."
    ]
  },
  {
    "en": "My phone is about to die.",
    "ua": "Мій телефон ось-ось розрядиться.",
    "ex": "My phone is about to die. Do you have a charger I could use?",
    "tip": "'About to' = ось-ось станеться. Дуже жива розмовна конструкція",
    "rule": "'Be about to' + дієслово означає, що дія станеться дуже скоро.",
    "cat": "emergency",
    "tag": "🆘 Допомога",
    "anchors": [
      "about to die"
    ],
    "situation": "У складній або екстреній ситуації",
    "examples": [
      "My phone is about to die. Do you have a charger I could use?",
      "— My phone is about to die. — I'll call for help right now."
    ]
  },
  {
    "en": "My bag has been stolen.",
    "ua": "Мою сумку вкрали.",
    "ex": "My bag has been stolen — it happened about 10 minutes ago near the market.",
    "tip": "Has been stolen = Present Perfect Passive. Вказуй де і коли для поліції!",
    "rule": "Пассивный залог в Present Perfect: has + been + 3-я форма (stolen). Объекту нанесли урон, вор неизвестен.",
    "cat": "emergency",
    "tag": "🆘 Допомога",
    "anchors": [
      "has been stolen"
    ],
    "situation": "У складній або екстреній ситуації",
    "examples": [
      "My bag has been stolen — it happened about 10 minutes ago near the market.",
      "— My bag has been stolen. — The nearest one is two streets away."
    ]
  },
  {
    "en": "I'm not feeling well.",
    "ua": "Я почуваюся погано.",
    "ex": "I'm not feeling well — I think I need to sit down. Could you help me?",
    "tip": "I'm not feeling well — м'якший варіант ніж 'I'm sick'",
    "cat": "emergency",
    "tag": "🆘 Допомога",
    "anchors": [
      "I'm not feeling well"
    ],
    "situation": "У складній або екстреній ситуації",
    "examples": [
      "I'm not feeling well — I think I need to sit down. Could you help me?",
      "— I'm not feeling well. — Stay calm — help is on the way."
    ]
  },
  {
    "en": "Is there a pharmacy nearby?",
    "ua": "Чи є аптека поблизу?",
    "ex": "— Is there a pharmacy nearby? — Yes, there's one just around the corner.",
    "tip": "Pharmacy = Chemist (UK informal) = Drugstore (US). Всі три вживані!",
    "cat": "emergency",
    "tag": "🆘 Допомога",
    "anchors": [
      "Is there a pharmacy nearby?"
    ],
    "situation": "У складній або екстреній ситуації",
    "examples": [
      "— Is there a pharmacy nearby? — Yes, there's one just around the corner.",
      "— Is there a pharmacy nearby? — The nearest one is two streets away."
    ]
  },
  {
    "en": "Do you have something for a headache?",
    "ua": "У вас є щось від головного болю?",
    "ex": "Do you have something for a headache? I've had a long flight and I feel awful.",
    "tip": "Something for a headache / a cold / a sore throat — корисний шаблон в аптеці",
    "rule": "Після 'something for...' ставимо симптом або проблему: for a headache, for a cough, for a sore throat.",
    "cat": "emergency",
    "tag": "🆘 Допомога",
    "anchors": [
      "Do you have something",
      "for a headache"
    ],
    "situation": "У складній або екстреній ситуації",
    "examples": [
      "Do you have something for a headache? I've had a long flight and I feel awful.",
      "— Do you have something for a headache? — The nearest one is two streets away."
    ]
  },
  {
    "en": "Could you help me? I'm in trouble.",
    "ua": "Чи не могли б ви допомогти мені? У мене проблема.",
    "ex": "Excuse me, could you help me? I seem to be in trouble — I can't find my hotel.",
    "tip": "I'm in trouble = у мене проблема / біда.",
    "rule": "Быть в беде/проблемах: устойчивое выражение 'to be IN trouble'. Без артиклей.",
    "cat": "emergency",
    "tag": "🆘 Допомога",
    "anchors": [
      "I'm in trouble"
    ],
    "situation": "У складній або екстреній ситуації",
    "examples": [
      "Excuse me, could you help me? I seem to be in trouble — I can't find my hotel.",
      "— Could you help me? I'm in trouble. — I'll call for help right now."
    ]
  }
];


// 💬 Повсякдень — 154 phrases
const PHRASES_EVERYDAY = [
  {
    "en": "I really like this.",
    "ua": "Мені це дуже подобається.",
    "ex": "I really like this neighbourhood — it's so lively and full of character.",
    "tip": "I like = подобається. I really like = дуже подобається. I love = обожнюю",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I really like"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I really like this neighbourhood — it's so lively and full of character.",
      "— I really like this. — Yeah, totally."
    ]
  },
  {
    "en": "I'd really love to.",
    "ua": "Я б дуже хотів.",
    "ex": "— Would you like to join us for dinner? — I'd really love to, thank you!",
    "tip": "I'd love to = я б із задоволенням. Більш захоплено ніж просто 'I want to'",
    "rule": "Частица 'to' на конце обязательна, так как она заменяет глагол действия из вопроса (to join).",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'd really love to"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Would you like to join us for dinner? — I'd really love to, thank you!",
      "— I'd really love to. — Same here!"
    ]
  },
  {
    "en": "That sounds great!",
    "ua": "Звучить чудово!",
    "ex": "— Shall we grab a coffee? — That sounds great, I know a nice place nearby.",
    "tip": "That sounds great / amazing / perfect — природна реакция на пропозицію",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "That sounds great!"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Shall we grab a coffee? — That sounds great, I know a nice place nearby.",
      "— That sounds great! — Sounds good to me."
    ]
  },
  {
    "en": "I'm not sure about that.",
    "ua": "Я не впевнений у цьому.",
    "ex": "— Is this the best route? — I'm not sure about that, let me check the map.",
    "tip": "I'm not sure = я не впевнений. Чесна і ввічлива відповідь при сумніві",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm not sure about that"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Is this the best route? — I'm not sure about that, let me check the map.",
      "— I'm not sure about that. — Same here!"
    ]
  },
  {
    "en": "That's a good point.",
    "ua": "Це слушне зауваження.",
    "ex": "— We should leave earlier. — That's a good point, the traffic is bad at rush hour.",
    "tip": "That's a good point = ти маєш рацію / добре помічено. Дуже природно в діалозі",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "That's a good point"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— We should leave earlier. — That's a good point, the traffic is bad at rush hour.",
      "— That's a good point. — Same here!"
    ]
  },
  {
    "en": "I totally agree with you.",
    "ua": "Я повністю з тобою згоден.",
    "ex": "— The view from here is stunning. — I totally agree, it's breathtaking.",
    "tip": "Totally agree = повністю погоджуюся. Підсилювачі: totally, completely, absolutely",
    "rule": "В английском AGREE — это глагол (соглашаться). Ошибка говорить 'I am agree'. Правильно: 'I agree' или 'I totally agree'.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I totally agree with you"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— The view from here is stunning. — I totally agree, it's breathtaking.",
      "— I totally agree with you. — Yeah, totally."
    ]
  },
  {
    "en": "I'm afraid I have to disagree.",
    "ua": "Боюся, що я не погоджуюсь.",
    "ex": "— It's faster to walk. — I'm afraid I have to disagree — the metro is quicker.",
    "tip": "I'm afraid I have to disagree — дуже ввічливий спосіб сказати 'ні, ти не правий'",
    "rule": "'I'm afraid' в начале означает не страх, а вежливое вводное слово 'Боюсь, что...'.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm afraid I have to disagree"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— It's faster to walk. — I'm afraid I have to disagree — the metro is quicker.",
      "— I'm afraid I have to disagree. — Yeah, totally."
    ]
  },
  {
    "en": "What do you think about…?",
    "ua": "Що ти думаєш про…?",
    "ex": "What do you think about this hotel? Is it worth the price?",
    "tip": "What do you think about...? — запит думки. Відповідь часто починається з 'I think...'",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "What do you think about"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "What do you think about this hotel? Is it worth the price?",
      "— What do you think aboutit? — Same here!"
    ]
  },
  {
    "en": "I have no idea.",
    "ua": "Я не маю жодного уявлення.",
    "ex": "— Where does this road lead? — I have no idea, let's check the map.",
    "tip": "I have no idea = поняття не маю. Більш природно ніж просто 'I don't know'",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I have no idea"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Where does this road lead? — I have no idea, let's check the map.",
      "— I have no idea. — Yeah, totally."
    ]
  },
  {
    "en": "It depends.",
    "ua": "Це залежить.",
    "ex": "— Is it expensive here? — It depends on what you're looking for.",
    "tip": "It depends (on) = залежить (від). Дуже часта фраза в реальних розмовах!",
    "rule": "Если хотите продолжить фразу, всегда используйте предлог ON: 'It depends ON the weather'.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "It depends"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Is it expensive here? — It depends on what you're looking for.",
      "— It depends. — Same here!"
    ]
  },
  {
    "en": "I'm running a bit late.",
    "ua": "Я трохи запізнюся.",
    "ex": "Just to let you know, I'm running a bit late — I'll be there in 10 minutes.",
    "tip": "I'm running late = я запізнюся. Running = в процесі (ще не там). Дуже природна фраза",
    "rule": "Идиома 'run late' используется, когда вы прямо сейчас находитесь в процессе опоздания.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm running a bit late"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Just to let you know, I'm running a bit late — I'll be there in 10 minutes.",
      "— I'm running a bit late. — Sounds good to me."
    ]
  },
  {
    "en": "Let me think about it.",
    "ua": "Дай мені подумати про це.",
    "ex": "— Shall we take the tour? — Let me think about it and I'll let you know.",
    "tip": "Let me think about it = дай подумаю. Не відмова, а пауза перед рішенням",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Let me think about it"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Shall we take the tour? — Let me think about it and I'll let you know.",
      "— Let me think about it. — Same here!"
    ]
  },
  {
    "en": "That's not what I meant.",
    "ua": "Я не це мав на увазі.",
    "ex": "— Are you complaining? — No, that's not what I meant — I just had a question.",
    "tip": "That's not what I meant = я не це мав на увазі. Корисно при непорозумінні",
    "rule": "Прошедшее время от глагола 'mean' (значить/иметь в виду) — 'meant' [мэнт].",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "That's not what I meant"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Are you complaining? — No, that's not what I meant — I just had a question.",
      "— That's not what I meant. — Yeah, totally."
    ]
  },
  {
    "en": "Could you say that again?",
    "ua": "Чи не могли б ви повторити?",
    "ex": "I'm sorry, could you say that again? I didn't quite get it.",
    "tip": "Could you say that again? = повторіть, будь ласка. Ввічливіше ніж 'What?'",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Could you say that again?"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I'm sorry, could you say that again? I didn't quite get it.",
      "— Could you say that again? — Same here!"
    ]
  },
  {
    "en": "What do you mean by that?",
    "ua": "Що ти маєш на увазі?",
    "ex": "— The place is a bit rough. — What do you mean by that — is it unsafe?",
    "tip": "What do you mean? = що маєш на увазі? Просиш пояснення або уточнення",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "What do you mean by that?"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— The place is a bit rough. — What do you mean by that — is it unsafe?",
      "— What do you mean by that? — Yeah, totally."
    ]
  },
  {
    "en": "I'll go with that.",
    "ua": "Я оберу це / погоджуюся на це.",
    "ex": "— Coffee or tea? — I'll go with coffee, thanks.",
    "tip": "I'll go with = я вибираю / зупиняюся на. Природна фраза при виборі між варіантами",
    "rule": "Фразовый глагол 'go with' в значении 'выбрать/согласиться на вариант'.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'll go with"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Coffee or tea? — I'll go with coffee, thanks.",
      "— I'll go with that. — Same here!"
    ]
  },
  {
    "en": "That works for me.",
    "ua": "Мене це влаштовує.",
    "ex": "— Let's meet at seven. — That works for me, see you then!",
    "tip": "That works for me = мене влаштовує. Works = підходить, зручно. Дуже вживана фраза",
    "rule": "Глагол 'work' здесь переводится как 'подходить/быть удобным'.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "That works for me"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Let's meet at seven. — That works for me, see you then!",
      "— That works for me. — Yeah, totally."
    ]
  },
  {
    "en": "I'd rather not.",
    "ua": "Я б краще не хотів.",
    "ex": "— Want to try the spicy dish? — I'd rather not, I don't handle spice well.",
    "tip": "I'd rather not = я б краще відмовився. М'якше і ввічливіше ніж просто 'No'",
    "rule": "'I'd rather' = 'I would rather' (Я бы предпочел). Отрицание 'not' ставится в конце без вспомогательных глаголов.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'd rather not"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Want to try the spicy dish? — I'd rather not, I don't handle spice well.",
      "— I'd rather not. — Sounds good to me."
    ]
  },
  {
    "en": "I can't make it.",
    "ua": "Я не зможу прийти / це зробити.",
    "ex": "— Can you join us tonight? — I'm sorry, I can't make it — I have other plans.",
    "tip": "I can't make it = не зможу прийти / не вийде. Make it = встигнути, з'явитися",
    "rule": "Идиома 'make it' означает преуспеть, добраться куда-то вовремя или смочь посетить мероприятие.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I can't make it"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Can you join us tonight? — I'm sorry, I can't make it — I have other plans.",
      "— I can't make it. — Sounds good to me."
    ]
  },
  {
    "en": "Just in case.",
    "ua": "На всякий випадок.",
    "ex": "I'll take an umbrella just in case — the sky looks cloudy.",
    "tip": "Just in case = про всяк випадок. Дуже часта фраза в побутовому мовленніі",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "just in case"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I'll take an umbrella just in case — the sky looks cloudy.",
      "— Just in case. — Sounds good to me."
    ]
  },
  {
    "en": "I'm looking forward to it.",
    "ua": "Я з нетерпінням чекаю цього.",
    "ex": "— See you at the concert! — Definitely, I'm really looking forward to it!",
    "tip": "I'm looking forward to it = чекаю з нетерпінням. Позитивне очікування події",
    "rule": "После выражения 'look forward to' глагол ВСЕГДА идет с окончанием -ING или используется существительное/местоимение 'it'.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "looking forward to it"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— See you at the concert! — Definitely, I'm really looking forward to it!",
      "— I'm looking forward to it. — Yeah, totally."
    ]
  },
  {
    "en": "What's going on?",
    "ua": "Що відбувається? / Що трапилося?",
    "ex": "— What's going on? There's a crowd outside. — Looks like there's a festival.",
    "tip": "What's going on? = що відбувається? Неформальне запитання про ситуацію",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "What's going on?"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— What's going on? There's a crowd outside. — Looks like there's a festival.",
      "— What's going on? — Sounds good to me."
    ]
  },
  {
    "en": "I'll be right back.",
    "ua": "Я зараз повернуся.",
    "ex": "— Where are you going? — I'll be right back — just need to grab my jacket.",
    "tip": "I'll be right back = зараз прийду / повернуся. Right = одразу, зараз же",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'll be right back"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Where are you going? — I'll be right back — just need to grab my jacket.",
      "— I'll be right back. — Same here!"
    ]
  },
  {
    "en": "Take your time.",
    "ua": "Не поспішайте. / Не квапся.",
    "ex": "— Sorry, I'm still deciding. — Take your time, there's no rush at all.",
    "tip": "Take your time = не поспішай. No rush = не квапся. Протилежність: Hurry up!",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Take your time"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Sorry, I'm still deciding. — Take your time, there's no rush at all.",
      "— Take your time. — Sounds good to me."
    ]
  },
  {
    "en": "It's up to you.",
    "ua": "Вирішувати тобі. / Як скажеш.",
    "ex": "— Where should we eat? — It's up to you, I'm happy with anything.",
    "tip": "It's up to you = тобі вирішувати. It's up to me = мені вирішувати.",
    "rule": "Конструкция 'It's up to [кого-то]' означает, что ответственность за решение лежит на этом человеке.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "It's up to you"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Where should we eat? — It's up to you, I'm happy with anything.",
      "— It's up to you. — Sounds good to me."
    ]
  },
  {
    "en": "I was wondering if…",
    "ua": "Я хотів запитати / Мені цікаво…",
    "ex": "I was wondering if you could help me find this address.",
    "tip": "I was wondering if... — дуже ввічливий вступ до прохання або запитання",
    "rule": "Использование прошедшего времени длительного залога (Past Continuous) 'I was wondering' делает просьбу максимально деликатной.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I was wondering if"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I was wondering if you could help me find this address.",
      "— I was wondering if... — Sounds good to me."
    ]
  },
  {
    "en": "That's a shame.",
    "ua": "Шкода. / Як жаль.",
    "ex": "— The museum is closed today. — Oh, that's a shame — I was really looking forward to it.",
    "tip": "That's a shame = шкода. That's a pity = те саме. What a shame! = підсилена форма",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "That's a shame"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— The museum is closed today. — Oh, that's a shame — I was really looking forward to it.",
      "— That's a shame. — Same here!"
    ]
  },
  {
    "en": "I couldn't agree more.",
    "ua": "Повністю з тобою погоджуюся.",
    "ex": "— This city is absolutely beautiful. — I couldn't agree more — it's stunning.",
    "tip": "I couldn't agree more = я не можу погодитися більше = повна згода. Дуже природно!",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I couldn't agree more"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— This city is absolutely beautiful. — I couldn't agree more — it's stunning.",
      "— I couldn't agree more. — Same here!"
    ]
  },
  {
    "en": "Never mind.",
    "ua": "Нічого / Забудь / Не звертай уваги.",
    "ex": "— Sorry, what did you say? — Oh, never mind — it wasn't important.",
    "tip": "Never mind = забудь / не важливо. Не грубо, просто закриває тему",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Never mind"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Sorry, what did you say? — Oh, never mind — it wasn't important.",
      "— Never mind. — Yeah, totally."
    ]
  },
  {
    "en": "By the way,…",
    "ua": "До речі,…",
    "ex": "By the way, have you tried the local food here? It's supposed to be amazing.",
    "tip": "By the way = до речі / між іншим. Вводить нову, часто несподівану тему",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "By the way"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "By the way, have you tried the local food here? It's supposed to be amazing.",
      "— By the way,... — Sounds good to me."
    ]
  },
  {
    "en": "In any case,…",
    "ua": "В будь-якому випадку,…",
    "ex": "In any case, we should leave early to avoid the traffic.",
    "tip": "In any case = в будь-якому разі. Підводить підсумок або дає пораду",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "In any case"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "In any case, we should leave early to avoid the traffic.",
      "— In any case,... — Same here!"
    ]
  },
  {
    "en": "I suppose so.",
    "ua": "Мабуть, так. / Напевно.",
    "ex": "— Do you think it'll rain? — I suppose so — it looks quite cloudy.",
    "tip": "I suppose so = мабуть так. Неповна впевненість. I guess so = те саме, більш американське",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I suppose so"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Do you think it'll rain? — I suppose so — it looks quite cloudy.",
      "— I suppose so. — Same here!"
    ]
  },
  {
    "en": "As far as I know,…",
    "ua": "Наскільки я знаю,…",
    "ex": "As far as I know, the last bus leaves at midnight.",
    "tip": "As far as I know = наскільки мені відомо. Сигнал що ти не на 100% впевнений",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "As far as I know"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "As far as I know, the last bus leaves at midnight.",
      "— As far as I know,... — Sounds good to me."
    ]
  },
  {
    "en": "What a coincidence!",
    "ua": "Яке співпадіння!",
    "ex": "— I'm from Kyiv! — What a coincidence — me too! Which part?",
    "tip": "What a coincidence! = який збіг! Coincidence = збіг обставин",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "What a coincidence!"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— I'm from Kyiv! — What a coincidence — me too! Which part?",
      "— What a coincidence! — Same here!"
    ]
  },
  {
    "en": "I'm just kidding.",
    "ua": "Я просто жартую.",
    "ex": "— Did you really pay that much? — No, I'm just kidding — it was half price.",
    "tip": "I'm just kidding = я жартую. Just joking = те саме. Kidding = неформально",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm just kidding"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Did you really pay that much? — No, I'm just kidding — it was half price.",
      "— I'm just kidding. — Same here!"
    ]
  },
  {
    "en": "To be honest,…",
    "ua": "Якщо чесно,… / Відверто кажучи,…",
    "ex": "To be honest, I'm not sure this restaurant is worth the price.",
    "tip": "To be honest = якщо чесно. Сигналізує що зараз скажеш свою справжню думку",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "To be honest"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "To be honest, I'm not sure this restaurant is worth the price.",
      "— To be honest,... — Sounds good to me."
    ]
  },
  {
    "en": "It's worth it.",
    "ua": "Воно того варте.",
    "ex": "— Is the guided tour expensive? — Yes, but it's worth it — you'll learn so much.",
    "tip": "It's worth it = воно того варте. It's not worth it = не варте того",
    "rule": "Конструкция 'be worth it'. После 'worth' можно также ставить глагол с -ing: 'It's worth visiting' (Это стоит посетить).",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "It's worth it"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Is the guided tour expensive? — Yes, but it's worth it — you'll learn so much.",
      "— It's worth it. — Same here!"
    ]
  },
  {
    "en": "I can't believe it!",
    "ua": "Не можу повірити!",
    "ex": "— This view is incredible! — I can't believe it — I've never seen anything like this.",
    "tip": "I can't believe it! = не вірю своїм очам / вухам! Виражає здивування або захват",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I can't believe it!"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— This view is incredible! — I can't believe it — I've never seen anything like this.",
      "— I can't believe it! — Sounds good to me."
    ]
  },
  {
    "en": "Let me know if you need anything.",
    "ua": "Дай знати, якщо тобі щось потрібно.",
    "ex": "Make yourself at home. Let me know if you need anything at all.",
    "tip": "Let me know = дай знати. If you need anything = якщо щось потрібно. Дуже гостинно!",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Let me know if you need anything"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Make yourself at home. Let me know if you need anything at all.",
      "— Let me know if you need anything. — Sounds good to me."
    ]
  },
  {
    "en": "I'm getting used to it.",
    "ua": "Я звикаю до цього.",
    "ex": "— Is the food here different? — Yes, but I'm getting used to it — it's actually growing on me.",
    "tip": "I'm getting used to = звикаю. I'm used to = вже звик. Важлива різниця!",
    "rule": "Разница: 'I am used to' (Я уже привык) и 'I am getting used to' (Я только в процессе привыкания).",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm getting used to it"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Is the food here different? — Yes, but I'm getting used to it — it's actually growing on me.",
      "— I'm getting used to it. — Same here!"
    ]
  },
  {
    "en": "It's not a big deal.",
    "ua": "Це не велика справа. / Нічого страшного.",
    "ex": "— Sorry for being late! — Don't worry, it's not a big deal at all.",
    "tip": "Not a big deal = нічого страшного. No big deal = те саме. Big deal! (сарказм) = велика проблема!",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "It's not a big deal"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Sorry for being late! — Don't worry, it's not a big deal at all.",
      "— It's not a big deal. — Same here!"
    ]
  },
  {
    "en": "I'm in a hurry.",
    "ua": "Я поспішаю.",
    "ex": "Sorry, I can't stop — I'm in a hurry and don't want to miss my train.",
    "tip": "I'm in a hurry = поспішаю. In a rush = те саме. Hurry up! = швидше! (наказ)",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm in a hurry"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Sorry, I can't stop — I'm in a hurry and don't want to miss my train.",
      "— I'm in a hurry. — Same here!"
    ]
  },
  {
    "en": "Go ahead.",
    "ua": "Давай / Будь ласка (дозволяю).",
    "ex": "— May I sit here? — Go ahead, I'm not saving this seat.",
    "tip": "Go ahead = будь ласка, я не проти / дозволяю. Або: go ahead = продовжуй",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Go ahead"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— May I sit here? — Go ahead, I'm not saving this seat.",
      "— Go ahead. — Yeah, totally."
    ]
  },
  {
    "en": "Out of curiosity,…",
    "ua": "З цікавості,… / Просто цікаво,…",
    "ex": "Out of curiosity, how long have you been living here?",
    "tip": "Out of curiosity = просто цікаво, без особливої причини. М'який вступ до запитання",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Out of curiosity"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Out of curiosity, how long have you been living here?",
      "— Out of curiosity,... — Same here!"
    ]
  },
  {
    "en": "I'm doing my best.",
    "ua": "Я роблю все можливе.",
    "ex": "— Your English is really improving! — Thank you, I'm doing my best.",
    "tip": "I'm doing my best = роблю все можливе. Best = максимум зусиль",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm doing my best"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Your English is really improving! — Thank you, I'm doing my best.",
      "— I'm doing my best. — Yeah, totally."
    ]
  },
  {
    "en": "It's on me.",
    "ua": "Я пригощаю / Я плачу.",
    "ex": "— Let me get the bill. — No, please — it's on me this time.",
    "tip": "It's on me = я плачу за всіх. Drinks are on me = напої за мій рахунок",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "It's on me"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Let me get the bill. — No, please — it's on me this time.",
      "— It's on me. — Sounds good to me."
    ]
  },
  {
    "en": "That makes sense.",
    "ua": "Це логічно. / Зрозуміло.",
    "ex": "— The museum is free on the first Sunday. — Oh, that makes sense — that's why it's so crowded.",
    "tip": "That makes sense = це має сенс / логічно. Doesn't make sense = нелогічно",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "That makes sense"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— The museum is free on the first Sunday. — Oh, that makes sense — that's why it's so crowded.",
      "— That makes sense. — Sounds good to me."
    ]
  },
  {
    "en": "Absolutely!",
    "ua": "Абсолютно! / Звичайно!",
    "ex": "— Are you enjoying the trip? — Absolutely! It's been incredible so far.",
    "tip": "Absolutely! = 100% так! Підсилювач згоди. Definitely / Certainly / Exactly — схожі",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Absolutely!"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Are you enjoying the trip? — Absolutely! It's been incredible so far.",
      "— Absolutely! — Sounds good to me."
    ]
  },
  {
    "en": "I'm not in the mood for that.",
    "ua": "У мене немає настрою для цього.",
    "ex": "— Shall we go dancing? — Honestly, I'm not in the mood for that tonight.",
    "tip": "I'm not in the mood for = не в настрої для. In the mood for = налаштований на щось",
    "rule": "Быть в настроении делать что-то: 'to be IN the mood FOR [что-то]'. Предлог FOR обязателен.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm not in the mood for that"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Shall we go dancing? — Honestly, I'm not in the mood for that tonight.",
      "— I'm not in the mood for that. — Same here!"
    ]
  },
  {
    "en": "Fair enough.",
    "ua": "Справедливо. / Добре, приймаю.",
    "ex": "— We should split the bill. — Fair enough, that makes sense.",
    "tip": "Приймаєш аргумент співрозмовника без сперечання.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Fair enough"
    ],
    "situation": "Погоджуєшся з аргументом іншої людини",
    "examples": [
      "— We should split the bill. — Fair enough, that makes sense.",
      "— Fair enough. — Yeah, totally."
    ]
  },
  {
    "en": "Sounds good to me.",
    "ua": "Мене влаштовує. / Звучить добре.",
    "ex": "— Let's meet at six. — Sounds good to me.",
    "tip": "Синонім That works for me / That sounds great.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Sounds good to me"
    ],
    "situation": "Погоджуєшся на пропозицію",
    "examples": [
      "— Let's meet at six. — Sounds good to me.",
      "— Sounds good to me. — Yeah, totally."
    ]
  },
  {
    "en": "I'll keep that in mind.",
    "ua": "Я врахую це. / Запам'ятаю.",
    "ex": "— The last bus is at eleven. — Thanks, I'll keep that in mind.",
    "tip": "Показуєш, що порада важлива для тебе.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "keep that in mind"
    ],
    "situation": "Коли хтось дав корисну пораду",
    "examples": [
      "— The last bus is at eleven. — Thanks, I'll keep that in mind.",
      "— I'll keep that in mind. — Same here!"
    ]
  },
  {
    "en": "Keep me posted.",
    "ua": "Тримай мене в курсі.",
    "ex": "— I'll check and let you know. — Great, keep me posted!",
    "tip": "Keep me posted = повідомляй про оновлення.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Keep me posted"
    ],
    "situation": "Просиш повідомляти про зміни",
    "examples": [
      "— I'll check and let you know. — Great, keep me posted!",
      "— Keep me posted. — Sounds good to me."
    ]
  },
  {
    "en": "I'm easy — either way is fine.",
    "ua": "Мені все одно — будь-який варіант підходить.",
    "ex": "— Pizza or pasta? — I'm easy — either way is fine.",
    "tip": "I'm easy = мені байдуже / все підходить.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm easy"
    ],
    "situation": "Коли тобі підходить будь-який варіант",
    "examples": [
      "— Pizza or pasta? — I'm easy — either way is fine.",
      "— I'm easy — either way is fine. — Yeah, totally."
    ]
  },
  {
    "en": "How are you doing?",
    "ua": "Як ти? / Як справи?",
    "ex": "— How are you doing? — Pretty good, thanks!",
    "tip": "Неформальніше за How are you?",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "How are you doing?"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— How are you doing? — Pretty good, thanks!",
      "— How are you doing? — Same here!"
    ]
  },
  {
    "en": "I'm doing well, thanks.",
    "ua": "У мене все добре, дякую.",
    "ex": "— How are you? — I'm doing well, thanks. And yourself?",
    "tip": "Doing well = справи йдуть добре.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm doing well"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— How are you? — I'm doing well, thanks. And yourself?",
      "— I'm doing well, thanks. — Yeah, totally."
    ]
  },
  {
    "en": "See you later!",
    "ua": "Побачимось!",
    "ex": "— I have to run. — See you later!",
    "tip": "Later = пізніше сьогодні або взагалі.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "See you later"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— I have to run. — See you later!",
      "— See you later! — Yeah, totally."
    ]
  },
  {
    "en": "Have a good one!",
    "ua": "Гарного дня! / Удачі!",
    "ex": "Thanks for your help — have a good one!",
    "tip": "Неформальне прощання. One = day/evening.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Have a good one"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Thanks for your help — have a good one!",
      "— Have a good one! — Same here!"
    ]
  },
  {
    "en": "Good morning!",
    "ua": "Доброго ранку!",
    "ex": "Good morning! Did you sleep well?",
    "tip": "До полудня. Good afternoon / evening — далі.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Good morning"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Good morning! Did you sleep well?",
      "— Good morning! — Yeah, totally."
    ]
  },
  {
    "en": "Good night!",
    "ua": "На добраніч!",
    "ex": "— I'm going to bed. — Good night! Sleep well.",
    "tip": "Коли хтось лягає спати, не при зустрічі ввечері.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Good night"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— I'm going to bed. — Good night! Sleep well.",
      "— Good night! — Yeah, totally."
    ]
  },
  {
    "en": "What's up?",
    "ua": "Як справи? / Що нового?",
    "ex": "— Hey, what's up? — Not much, just chilling.",
    "tip": "Дуже неформально. Whassup — скорочено.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "What's up?"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Hey, what's up? — Not much, just chilling.",
      "— What's up? — Yeah, totally."
    ]
  },
  {
    "en": "Not much.",
    "ua": "Нічого особливого.",
    "ex": "— What's up? — Not much. You?",
    "tip": "Стандартна відповідь на What's up?",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Not much"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— What's up? — Not much. You?",
      "— Not much. — Sounds good to me."
    ]
  },
  {
    "en": "I'm tired.",
    "ua": "Я втомився.",
    "ex": "I'm tired — I think I'll go to bed early tonight.",
    "tip": "Tired = втомлений. Exhausted = виснажений.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm tired"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I'm tired — I think I'll go to bed early tonight.",
      "— I'm tired. — Same here!"
    ]
  },
  {
    "en": "I'm hungry.",
    "ua": "Я голодний.",
    "ex": "I'm hungry — shall we grab something to eat?",
    "tip": "Starving = дуже голодний (неформально).",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm hungry"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I'm hungry — shall we grab something to eat?",
      "— I'm hungry. — Yeah, totally."
    ]
  },
  {
    "en": "I'm busy right now.",
    "ua": "Я зараз зайнятий.",
    "ex": "Sorry, I'm busy right now — can I call you back?",
    "tip": "Busy = зайнятий. Can I call you back? — передзвоню?",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm busy right now"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Sorry, I'm busy right now — can I call you back?",
      "— I'm busy right now. — Same here!"
    ]
  },
  {
    "en": "No problem.",
    "ua": "Без проблем.",
    "ex": "— Thanks! — No problem!",
    "tip": "Синонім No worries / You're welcome.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "No problem"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Thanks! — No problem!",
      "— No problem. — Yeah, totally."
    ]
  },
  {
    "en": "You're welcome.",
    "ua": "Будь ласка. / Нема за що.",
    "ex": "— Thank you so much! — You're welcome!",
    "tip": "Формальніша подяка на thanks.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "You're welcome"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Thank you so much! — You're welcome!",
      "— You're welcome. — Sounds good to me."
    ]
  },
  {
    "en": "My pleasure.",
    "ua": "З радістю. / Мені приємно.",
    "ex": "— Thanks for helping. — My pleasure!",
    "tip": "Ввічливіше за You're welcome.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "My pleasure"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Thanks for helping. — My pleasure!",
      "— My pleasure. — Same here!"
    ]
  },
  {
    "en": "Don't worry about it.",
    "ua": "Не переживай через це.",
    "ex": "— Sorry I'm late. — Don't worry about it.",
    "tip": "М'яко заспокоюєш людину.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Don't worry about it"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Sorry I'm late. — Don't worry about it.",
      "— Don't worry about it. — Yeah, totally."
    ]
  },
  {
    "en": "I'm sorry to hear that.",
    "ua": "Мені шкода це чути.",
    "ex": "— I lost my job. — I'm sorry to hear that.",
    "tip": "Співчуття. Не плутай з I'm sorry (вибачення).",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm sorry to hear that"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— I lost my job. — I'm sorry to hear that.",
      "— I'm sorry to hear that. — Yeah, totally."
    ]
  },
  {
    "en": "That's too bad.",
    "ua": "Як шкода. / Погано.",
    "ex": "— The concert was cancelled. — That's too bad.",
    "tip": "Виражаєш жаль за новину.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "That's too bad"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— The concert was cancelled. — That's too bad.",
      "— That's too bad. — Yeah, totally."
    ]
  },
  {
    "en": "Congratulations!",
    "ua": "Вітаю!",
    "ex": "— I got the job! — Congratulations! That's amazing!",
    "tip": "Congrats — скорочено.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Congratulations"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— I got the job! — Congratulations! That's amazing!",
      "— Congratulations! — Yeah, totally."
    ]
  },
  {
    "en": "Good luck!",
    "ua": "Удачі!",
    "ex": "Good luck with your exam tomorrow!",
    "tip": "Break a leg — жартома «удачі» (театр).",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Good luck"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Good luck with your exam tomorrow!",
      "— Good luck! — Yeah, totally."
    ]
  },
  {
    "en": "Get well soon!",
    "ua": "Одужуй швидше!",
    "ex": "— I'm sick. — Get well soon! Take care.",
    "tip": "Коли хтось хворіє.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Get well soon"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— I'm sick. — Get well soon! Take care.",
      "— Get well soon! — Yeah, totally."
    ]
  },
  {
    "en": "Take care!",
    "ua": "Бережи себе!",
    "ex": "— See you next week. — Take care!",
    "tip": "Тепле прощання.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Take care"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— See you next week. — Take care!",
      "— Take care! — Sounds good to me."
    ]
  },
  {
    "en": "I'll call you back.",
    "ua": "Я передзвоню.",
    "ex": "Sorry, I can't talk — I'll call you back in an hour.",
    "tip": "Call back = передзвонити.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "call you back"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Sorry, I can't talk — I'll call you back in an hour.",
      "— I'll call you back. — Yeah, totally."
    ]
  },
  {
    "en": "Can I call you later?",
    "ua": "Можу передзвонити пізніше?",
    "ex": "Can I call you later? I'm in a meeting right now.",
    "tip": "Ввічливо відкладаєш розмову.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Can I call you later?"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Can I call you later? I'm in a meeting right now.",
      "— Can I call you later? — Sounds good to me."
    ]
  },
  {
    "en": "Hold on a moment.",
    "ua": "Зачекайте хвилинку.",
    "ex": "Hold on a moment — let me find my keys.",
    "tip": "Hold on = почекай (телефон або очікування).",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Hold on a moment"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Hold on a moment — let me find my keys.",
      "— Hold on a moment. — Sounds good to me."
    ]
  },
  {
    "en": "I'll get back to you.",
    "ua": "Я відповім пізніше / повернусь до цього.",
    "ex": "I need to check — I'll get back to you by Friday.",
    "tip": "Get back to = повернутися до теми з відповіддю.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "get back to you"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I need to check — I'll get back to you by Friday.",
      "— I'll get back to you. — Same here!"
    ]
  },
  {
    "en": "What time is it?",
    "ua": "Котра година?",
    "ex": "Excuse me, what time is it?",
    "tip": "Do you have the time? — те саме, ввічливіше.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "What time is it?"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Excuse me, what time is it?",
      "— What time is it? — Same here!"
    ]
  },
  {
    "en": "I'm running out of time.",
    "ua": "У мене мало часу.",
    "ex": "I'm running out of time — we need to hurry.",
    "tip": "Run out of = закінчується (час, гроші).",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "running out of time"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I'm running out of time — we need to hurry.",
      "— I'm running out of time. — Yeah, totally."
    ]
  },
  {
    "en": "I lost track of time.",
    "ua": "Я загубив відчуття часу.",
    "ex": "Sorry I'm late — I lost track of time.",
    "tip": "Track of time = контроль над часом.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "lost track of time"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Sorry I'm late — I lost track of time.",
      "— I lost track of time. — Yeah, totally."
    ]
  },
  {
    "en": "It's about time!",
    "ua": "Дійшла пора! / Нарешті!",
    "ex": "— Here's your coffee. — It's about time! I've been waiting forever.",
    "tip": "Іноді з легким дразнінням.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "It's about time"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Here's your coffee. — It's about time! I've been waiting forever.",
      "— It's about time! — Same here!"
    ]
  },
  {
    "en": "Better late than never.",
    "ua": "Краще пізно, ніж ніколи.",
    "ex": "— Sorry I'm two hours late. — Better late than never, I guess!",
    "tip": "Ідіома про запізнення.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Better late than never"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Sorry I'm two hours late. — Better late than never, I guess!",
      "— Better late than never. — Sounds good to me."
    ]
  },
  {
    "en": "I overslept.",
    "ua": "Я проспав.",
    "ex": "I overslept — that's why I missed the meeting.",
    "tip": "Oversleep = проспати (випадково).",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I overslept"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I overslept — that's why I missed the meeting.",
      "— I overslept. — Sounds good to me."
    ]
  },
  {
    "en": "I'm starving.",
    "ua": "Я дуже голодний.",
    "ex": "I'm starving — let's eat something now.",
    "tip": "Starving = дуже голодний (не буквально «голодую»).",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm starving"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I'm starving — let's eat something now.",
      "— I'm starving. — Yeah, totally."
    ]
  },
  {
    "en": "I'm full.",
    "ua": "Я наївся.",
    "ex": "— Want dessert? — No thanks, I'm full.",
    "tip": "Full = ситий. Stuffed — дуже ситий.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm full"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Want dessert? — No thanks, I'm full.",
      "— I'm full. — Same here!"
    ]
  },
  {
    "en": "Help yourself.",
    "ua": "Бери собі / розкладайся.",
    "ex": "The food is on the table — help yourself!",
    "tip": "Коли пропонуєш їжу або напої гостям.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Help yourself"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "The food is on the table — help yourself!",
      "— Help yourself. — Same here!"
    ]
  },
  {
    "en": "Make yourself at home.",
    "ua": "Почувайся як вдома.",
    "ex": "Come in, make yourself at home.",
    "tip": "Гостинна фраза при візиті.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Make yourself at home"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Come in, make yourself at home.",
      "— Make yourself at home. — Same here!"
    ]
  },
  {
    "en": "I'm on my way.",
    "ua": "Я вже їду / йду.",
    "ex": "Don't worry — I'm on my way, be there in ten minutes.",
    "tip": "On my way = у дорозі до тебе.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm on my way"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Don't worry — I'm on my way, be there in ten minutes.",
      "— I'm on my way. — Sounds good to me."
    ]
  },
  {
    "en": "I'm almost there.",
    "ua": "Я майже на місці.",
    "ex": "I'm almost there — save me a seat!",
    "tip": "Almost there = за кілька хвилин буду.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm almost there"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I'm almost there — save me a seat!",
      "— I'm almost there. — Same here!"
    ]
  },
  {
    "en": "I got stuck in traffic.",
    "ua": "Я застряг у заторі.",
    "ex": "Sorry I'm late — I got stuck in traffic.",
    "tip": "Stuck in traffic — класична причина запізнення.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "stuck in traffic"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Sorry I'm late — I got stuck in traffic.",
      "— I got stuck in traffic. — Sounds good to me."
    ]
  },
  {
    "en": "I'll be there in five minutes.",
    "ua": "Я буду через п'ять хвилин.",
    "ex": "I'll be there in five minutes — start without me if you want.",
    "tip": "In + час = через скільки будеш.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "be there in"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I'll be there in five minutes — start without me if you want.",
      "— I'll be there in five minutes. — Same here!"
    ]
  },
  {
    "en": "Where are you?",
    "ua": "Де ти?",
    "ex": "Where are you? We've been waiting for twenty minutes.",
    "tip": "Пряме питання при зустрічі.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Where are you?"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Where are you? We've been waiting for twenty minutes.",
      "— Where are you? — Sounds good to me."
    ]
  },
  {
    "en": "I'm home.",
    "ua": "Я вдома.",
    "ex": "— Where are you? — I'm home, just got in.",
    "tip": "Got in = прийшов додому.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm home"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Where are you? — I'm home, just got in.",
      "— I'm home. — Sounds good to me."
    ]
  },
  {
    "en": "I'm at work.",
    "ua": "Я на роботі.",
    "ex": "Can't talk — I'm at work right now.",
    "tip": "At work = на робочому місці.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm at work"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Can't talk — I'm at work right now.",
      "— I'm at work. — Sounds good to me."
    ]
  },
  {
    "en": "I need a break.",
    "ua": "Мені потрібна перерва.",
    "ex": "I need a break — I've been working all morning.",
    "tip": "Break = перерва, відпочинок.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I need a break"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I need a break — I've been working all morning.",
      "— I need a break. — Same here!"
    ]
  },
  {
    "en": "I'm not feeling great.",
    "ua": "Я почуваюсь не дуже.",
    "ex": "I'm not feeling great — I might stay home today.",
    "tip": "М'якше за I'm sick.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "not feeling great"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I'm not feeling great — I might stay home today.",
      "— I'm not feeling great. — Yeah, totally."
    ]
  },
  {
    "en": "I have a headache.",
    "ua": "У мене болить голова.",
    "ex": "I have a headache — I'm going to lie down.",
    "tip": "Have a + хвороба: headache, cold, fever.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I have a headache"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I have a headache — I'm going to lie down.",
      "— I have a headache. — Sounds good to me."
    ]
  },
  {
    "en": "I need some rest.",
    "ua": "Мені потрібен відпочинок.",
    "ex": "I need some rest — this week was exhausting.",
    "tip": "Rest = відпочинок. Get some rest — відпочинь.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I need some rest"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I need some rest — this week was exhausting.",
      "— I need some rest. — Yeah, totally."
    ]
  },
  {
    "en": "I feel much better now.",
    "ua": "Мені зараз набагато краще.",
    "ex": "Thanks for asking — I feel much better now.",
    "tip": "Much better = значно краще.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "feel much better"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Thanks for asking — I feel much better now.",
      "— I feel much better now. — Same here!"
    ]
  },
  {
    "en": "It's raining.",
    "ua": "Йде дощ.",
    "ex": "Take an umbrella — it's raining outside.",
    "tip": "It's + погода: sunny, cloudy, windy.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "It's raining"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Take an umbrella — it's raining outside.",
      "— It's raining. — Same here!"
    ]
  },
  {
    "en": "It's so hot today.",
    "ua": "Сьогодні дуже спекотно.",
    "ex": "It's so hot today — let's stay inside.",
    "tip": "So hot = дуже спекотно.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "It's so hot"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "It's so hot today — let's stay inside.",
      "— It's so hot today. — Same here!"
    ]
  },
  {
    "en": "It's freezing outside.",
    "ua": "На вулиці морозно.",
    "ex": "Wear a coat — it's freezing outside.",
    "tip": "Freezing = дуже холодно (не буквально «замерзає»).",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "It's freezing"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Wear a coat — it's freezing outside.",
      "— It's freezing outside. — Sounds good to me."
    ]
  },
  {
    "en": "Nice weather, isn't it?",
    "ua": "Гарна погода, чи не так?",
    "ex": "Nice weather, isn't it? Perfect for a walk.",
    "tip": "Tag question — підтвердження думки.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Nice weather"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Nice weather, isn't it? Perfect for a walk.",
      "— Nice weather, isn't it? — Same here!"
    ]
  },
  {
    "en": "What's the weather like?",
    "ua": "Яка погода?",
    "ex": "What's the weather like tomorrow?",
    "tip": "Like = як (опис).",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "weather like"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "What's the weather like tomorrow?",
      "— What's the weather like? — Sounds good to me."
    ]
  },
  {
    "en": "I forgot my keys.",
    "ua": "Я забув ключі.",
    "ex": "I forgot my keys — can you let me in?",
    "tip": "Forget — forgot — forgotten.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I forgot my keys"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I forgot my keys — can you let me in?",
      "— I forgot my keys. — Yeah, totally."
    ]
  },
  {
    "en": "I can't find my phone.",
    "ua": "Не можу знайти телефон.",
    "ex": "I can't find my phone — have you seen it?",
    "tip": "Can't find = не можу знайти (зараз).",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "can't find my phone"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I can't find my phone — have you seen it?",
      "— I can't find my phone. — Yeah, totally."
    ]
  },
  {
    "en": "It's somewhere around here.",
    "ua": "Десь тут.",
    "ex": "My wallet is somewhere around here — I had it a minute ago.",
    "tip": "Somewhere = десь.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "somewhere around here"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "My wallet is somewhere around here — I had it a minute ago.",
      "— It's somewhere around here. — Same here!"
    ]
  },
  {
    "en": "Here you go.",
    "ua": "Ось, будь ласка.",
    "ex": "— Can I have the salt? — Here you go.",
    "tip": "Коли даєш щось людині.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Here you go"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Can I have the salt? — Here you go.",
      "— Here you go. — Yeah, totally."
    ]
  },
  {
    "en": "There you go.",
    "ua": "Ось / ось так.",
    "ex": "There you go — all done!",
    "tip": "Після завершення дії або передачі.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "There you go"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "There you go — all done!",
      "— There you go. — Sounds good to me."
    ]
  },
  {
    "en": "Come on in.",
    "ua": "Заходь.",
    "ex": "The door's open — come on in!",
    "tip": "Come on in = запрошення всередину.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Come on in"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "The door's open — come on in!",
      "— Come on in. — Sounds good to me."
    ]
  },
  {
    "en": "Have a seat.",
    "ua": "Сідайте / присідай.",
    "ex": "Have a seat — I'll be with you in a moment.",
    "tip": "Seat = місце для сидіння.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Have a seat"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Have a seat — I'll be with you in a moment.",
      "— Have a seat. — Same here!"
    ]
  },
  {
    "en": "Make yourself comfortable.",
    "ua": "Розташовуйся зручно.",
    "ex": "Take off your coat and make yourself comfortable.",
    "tip": "Comfortable = зручно, комфортно.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Make yourself comfortable"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Take off your coat and make yourself comfortable.",
      "— Make yourself comfortable. — Same here!"
    ]
  },
  {
    "en": "I'll leave you to it.",
    "ua": "Не буду заважати — продовжуй.",
    "ex": "I'll leave you to it — call me if you need anything.",
    "tip": "Leave someone to it = дати робити справи.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "leave you to it"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I'll leave you to it — call me if you need anything.",
      "— I'll leave you to it. — Sounds good to me."
    ]
  },
  {
    "en": "Do you mind if I open the window?",
    "ua": "Ви не проти, якщо я відкрию вікно?",
    "ex": "Do you mind if I open the window? It's a bit stuffy.",
    "tip": "Do you mind if I + дієслово — прохання дозволу.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Do you mind if I"
    ],
    "situation": "У повсякденній розмові з людьми",
    "rule": "Mind if I + Present Simple (open, not opened).",
    "examples": [
      "Do you mind if I open the window? It's a bit stuffy.",
      "— Do you mind if I open the window? — Same here!"
    ]
  },
  {
    "en": "Feel free to ask.",
    "ua": "Не соромся питати.",
    "ex": "Feel free to ask if anything is unclear.",
    "tip": "Feel free to = не соромся / можеш сміливо.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Feel free to"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Feel free to ask if anything is unclear.",
      "— Feel free to ask. — Yeah, totally."
    ]
  },
  {
    "en": "I don't mind.",
    "ua": "Мені все одно. / Я не проти.",
    "ex": "— Window or aisle? — I don't mind, either is fine.",
    "tip": "Don't mind = не проти.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I don't mind"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Window or aisle? — I don't mind, either is fine.",
      "— I don't mind. — Sounds good to me."
    ]
  },
  {
    "en": "It doesn't matter.",
    "ua": "Це не має значення.",
    "ex": "— Red or blue? — It doesn't matter, pick whichever.",
    "tip": "Doesn't matter = неважливо.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "It doesn't matter"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Red or blue? — It doesn't matter, pick whichever.",
      "— It doesn't matter. — Sounds good to me."
    ]
  },
  {
    "en": "Either way is fine.",
    "ua": "Будь-який варіант підходить.",
    "ex": "— Walk or take the bus? — Either way is fine with me.",
    "tip": "Either way = будь-який з двох.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Either way is fine"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Walk or take the bus? — Either way is fine with me.",
      "— Either way is fine. — Sounds good to me."
    ]
  },
  {
    "en": "I don't care.",
    "ua": "Мені все одно.",
    "ex": "— Pizza or pasta? — I don't care, you choose.",
    "tip": "Неформально; може звучати різко — обережно.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I don't care"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Pizza or pasta? — I don't care, you choose.",
      "— I don't care. — Yeah, totally."
    ]
  },
  {
    "en": "It's your call.",
    "ua": "Тобі вирішувати.",
    "ex": "— Should we stay or go? — It's your call.",
    "tip": "Your call = твоє рішення.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "It's your call"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Should we stay or go? — It's your call.",
      "— It's your call. — Same here!"
    ]
  },
  {
    "en": "I'll think about it.",
    "ua": "Я подумаю.",
    "ex": "— Want to join us? — I'll think about it and let you know.",
    "tip": "Think about = обдумати.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'll think about it"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Want to join us? — I'll think about it and let you know.",
      "— I'll think about it. — Yeah, totally."
    ]
  },
  {
    "en": "I've made up my mind.",
    "ua": "Я вирішив.",
    "ex": "I've made up my mind — I'm taking the job.",
    "tip": "Make up one's mind = прийняти рішення.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "made up my mind"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I've made up my mind — I'm taking the job.",
      "— I've made up my mind. — Sounds good to me."
    ]
  },
  {
    "en": "I changed my mind.",
    "ua": "Я передумав.",
    "ex": "I changed my mind — let's stay in instead.",
    "tip": "Change one's mind = передумати.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I changed my mind"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I changed my mind — let's stay in instead.",
      "— I changed my mind. — Sounds good to me."
    ]
  },
  {
    "en": "I'm not sure yet.",
    "ua": "Я ще не впевнений.",
    "ex": "— Are you coming? — I'm not sure yet.",
    "tip": "Yet = ще (наразі).",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm not sure yet"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Are you coming? — I'm not sure yet.",
      "— I'm not sure yet. — Yeah, totally."
    ]
  },
  {
    "en": "I guess so.",
    "ua": "Мабуть, так.",
    "ex": "— Is he coming? — I guess so.",
    "tip": "Guess = припускати. I suppose so — те саме.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I guess so"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Is he coming? — I guess so.",
      "— I guess so. — Yeah, totally."
    ]
  },
  {
    "en": "I hope so.",
    "ua": "Сподіваюсь, так.",
    "ex": "— Will it be sunny tomorrow? — I hope so!",
    "tip": "Hope so = сподіваюсь на це.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I hope so"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Will it be sunny tomorrow? — I hope so!",
      "— I hope so. — Yeah, totally."
    ]
  },
  {
    "en": "I hope not.",
    "ua": "Сподіваюсь, ні.",
    "ex": "— Will it rain? — I hope not — we're having a picnic.",
    "tip": "Hope not = сподіваюсь, що ні.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I hope not"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Will it rain? — I hope not — we're having a picnic.",
      "— I hope not. — Yeah, totally."
    ]
  },
  {
    "en": "Fingers crossed!",
    "ua": "Тримаю кулаки!",
    "ex": "The interview is tomorrow — fingers crossed!",
    "tip": "Ідіома: сподіваємось на удачу.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Fingers crossed"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "The interview is tomorrow — fingers crossed!",
      "— Fingers crossed! — Yeah, totally."
    ]
  },
  {
    "en": "That's exactly what I thought.",
    "ua": "Саме так я і думав.",
    "ex": "— He's going to quit. — That's exactly what I thought!",
    "tip": "Exactly = саме так.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "exactly what I thought"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— He's going to quit. — That's exactly what I thought!",
      "— That's exactly what I thought. — Sounds good to me."
    ]
  },
  {
    "en": "You're right about that.",
    "ua": "Ти маєш рацію в цьому.",
    "ex": "— It's harder than it looks. — You're right about that.",
    "tip": "Right about = правий щодо.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "You're right about that"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— It's harder than it looks. — You're right about that.",
      "— You're right about that. — Sounds good to me."
    ]
  },
  {
    "en": "I see what you mean.",
    "ua": "Розумію, що ти маєш на увазі.",
    "ex": "— It's too risky. — I see what you mean, but we should try.",
    "tip": "See what you mean = розумію сенс.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I see what you mean"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— It's too risky. — I see what you mean, but we should try.",
      "— I see what you mean. — Sounds good to me."
    ]
  },
  {
    "en": "That's news to me.",
    "ua": "Я про це не знав.",
    "ex": "— They're moving to Berlin. — That's news to me!",
    "tip": "News to me = вперше чую.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "That's news to me"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— They're moving to Berlin. — That's news to me!",
      "— That's news to me. — Sounds good to me."
    ]
  },
  {
    "en": "Tell me about it.",
    "ua": "І не кажи! / Саме так!",
    "ex": "— Mondays are the worst. — Tell me about it!",
    "tip": "Ідіома згоди: «і мені так само».",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Tell me about it"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Mondays are the worst. — Tell me about it!",
      "— Tell me about it. — Same here!"
    ]
  },
  {
    "en": "You never know.",
    "ua": "Ніколи не знаєш.",
    "ex": "Try it — you never know, you might love it.",
    "tip": "You never know = може статися будь-що.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "You never know"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Try it — you never know, you might love it.",
      "— You never know. — Yeah, totally."
    ]
  },
  {
    "en": "It happens.",
    "ua": "Так буває.",
    "ex": "— I spilled coffee on my shirt. — It happens, don't worry.",
    "tip": "It happens = таке трапляється.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "It happens"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— I spilled coffee on my shirt. — It happens, don't worry.",
      "— It happens. — Sounds good to me."
    ]
  },
  {
    "en": "These things happen.",
    "ua": "Таке трапляється.",
    "ex": "These things happen — no need to stress about it.",
    "tip": "Заспокійлива фраза.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "These things happen"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "These things happen — no need to stress about it.",
      "— These things happen. — Same here!"
    ]
  },
  {
    "en": "It could be worse.",
    "ua": "Могло б бути й гірше.",
    "ex": "I lost my wallet, but it could be worse — at least I have my passport.",
    "tip": "Could be worse = не найгірший сценарій.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "It could be worse"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I lost my wallet, but it could be worse — at least I have my passport.",
      "— It could be worse. — Sounds good to me."
    ]
  },
  {
    "en": "Look on the bright side.",
    "ua": "Дивись на світлий бік.",
    "ex": "You missed the bus, but look on the bright side — you got extra exercise.",
    "tip": "Bright side = позитивна сторона.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "bright side"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "You missed the bus, but look on the bright side — you got extra exercise.",
      "— Look on the bright side. — Sounds good to me."
    ]
  },
  {
    "en": "Cheer up!",
    "ua": "Не сумуй! / Бодрись!",
    "ex": "Cheer up — things will get better!",
    "tip": "Cheer up = підбадьорити.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Cheer up"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Cheer up — things will get better!",
      "— Cheer up! — Yeah, totally."
    ]
  },
  {
    "en": "I'm so excited!",
    "ua": "Я так схвильований / радий!",
    "ex": "I'm so excited — the concert is tonight!",
    "tip": "Excited = у захваті, в очікуванні.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm so excited"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I'm so excited — the concert is tonight!",
      "— I'm so excited! — Sounds good to me."
    ]
  },
  {
    "en": "I'm worried about it.",
    "ua": "Я хвилююсь через це.",
    "ex": "I'm worried about it — we haven't heard back yet.",
    "tip": "Worried about = хвилюватися через.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "worried about it"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I'm worried about it — we haven't heard back yet.",
      "— I'm worried about it. — Sounds good to me."
    ]
  },
  {
    "en": "Don't stress about it.",
    "ua": "Не переживай через це.",
    "ex": "Don't stress about it — we'll figure it out.",
    "tip": "Stress about = переживати через.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Don't stress about it"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Don't stress about it — we'll figure it out.",
      "— Don't stress about it. — Same here!"
    ]
  },
  {
    "en": "I'm stressed out.",
    "ua": "Я на нервах / у стресі.",
    "ex": "I'm stressed out — too much work this week.",
    "tip": "Stressed out = дуже напружений.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "stressed out"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I'm stressed out — too much work this week.",
      "— I'm stressed out. — Same here!"
    ]
  },
  {
    "en": "I need to clear my head.",
    "ua": "Мені треба провітрити голову.",
    "ex": "I need to clear my head — going for a walk.",
    "tip": "Clear my head = заспокоїти думки.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "clear my head"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I need to clear my head — going for a walk.",
      "— I need to clear my head. — Yeah, totally."
    ]
  },
  {
    "en": "I'm beat.",
    "ua": "Я вимотаний.",
    "ex": "I'm beat — I'm going straight to bed.",
    "tip": "Beat = дуже втомлений (неформально).",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm beat"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I'm beat — I'm going straight to bed.",
      "— I'm beat. — Yeah, totally."
    ]
  },
  {
    "en": "I could use a coffee.",
    "ua": "Мені б не завадила кава.",
    "ex": "I could use a coffee — I didn't sleep much.",
    "tip": "Could use = не завадило б мати.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I could use a coffee"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I could use a coffee — I didn't sleep much.",
      "— I could use a coffee. — Sounds good to me."
    ]
  },
  {
    "en": "I'm running low on cash.",
    "ua": "У мене мало готівки.",
    "ex": "I'm running low on cash — is there an ATM nearby?",
    "tip": "Run low on = закінчується.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "running low on cash"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I'm running low on cash — is there an ATM nearby?",
      "— I'm running low on cash. — Yeah, totally."
    ]
  },
  {
    "en": "I'm broke.",
    "ua": "Я без грошей.",
    "ex": "I'm broke until payday — can you cover me?",
    "tip": "Broke = без грошей (неформально).",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm broke"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I'm broke until payday — can you cover me?",
      "— I'm broke. — Yeah, totally."
    ]
  },
  {
    "en": "That's a bit pricey.",
    "ua": "Це трохи дороговато.",
    "ex": "Nice place, but that's a bit pricey for me.",
    "tip": "Pricey = дороговато (неформально).",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "a bit pricey"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Nice place, but that's a bit pricey for me.",
      "— That's a bit pricey. — Same here!"
    ]
  },
  {
    "en": "It's a good deal.",
    "ua": "Це вигідна пропозиція.",
    "ex": "Fifty percent off — it's a good deal!",
    "tip": "Good deal = вигідно.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "It's a good deal"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Fifty percent off — it's a good deal!",
      "— It's a good deal. — Sounds good to me."
    ]
  },
  {
    "en": "I'm on a budget.",
    "ua": "Я обмежений у витратах.",
    "ex": "I'm on a budget — looking for something affordable.",
    "tip": "On a budget = економлю.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "on a budget"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I'm on a budget — looking for something affordable.",
      "— I'm on a budget. — Sounds good to me."
    ]
  },
  {
    "en": "It's worth a try.",
    "ua": "Варто спробувати.",
    "ex": "I've never had it, but it's worth a try.",
    "tip": "Worth a try = варто спробувати.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "worth a try"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I've never had it, but it's worth a try.",
      "— It's worth a try. — Yeah, totally."
    ]
  }
];


// 👋 Знайомство — 17 phrases
const PHRASES_SOCIAL = [
  {
    "en": "Nice to meet you!",
    "ua": "Приємно познайомитися!",
    "ex": "— I'm Alex. — Nice to meet you! I'm Maria.",
    "tip": "Після представлення. Відповідь: Nice to meet you too!",
    "rule": "Після meet — об'єкт (you), без with. Nice to meet you, too! — відповідь.",
    "cat": "social",
    "tag": "👋 Знайомство",
    "anchors": [
      "Nice to meet you"
    ],
    "situation": "Коли тебе представили новій людині",
    "examples": [
      "— I'm Alex. — Nice to meet you! I'm Maria.",
      "— Nice to meet you! — Nice to meet you too!"
    ]
  },
  {
    "en": "How's it going?",
    "ua": "Як справи? / Як ти?",
    "ex": "— Hey! How's it going? — Not bad, thanks. How about you?",
    "tip": "Неформальне привітання. How are you? — формальніше.",
    "cat": "social",
    "tag": "👋 Знайомство",
    "anchors": [
      "How's it going?"
    ],
    "situation": "Неформальне привітання знайомого",
    "examples": [
      "— Hey! How's it going? — Not bad, thanks. How about you?",
      "— How's it going? — No worries at all."
    ]
  },
  {
    "en": "Not too bad, thanks. And you?",
    "ua": "Непогано, дякую. А ти?",
    "ex": "— How's it going? — Not too bad, thanks. And you?",
    "tip": "Стандартна відповідь на How's it going / How are you.",
    "cat": "social",
    "tag": "👋 Знайомство",
    "anchors": [
      "Not too bad"
    ],
    "situation": "Відповідь на питання про самопочуття",
    "examples": [
      "— How's it going? — Not too bad, thanks. And you?",
      "— Not too bad, thanks. And you? — No worries at all."
    ]
  },
  {
    "en": "Long time no see!",
    "ua": "Давно не бачились!",
    "ex": "— Long time no see! — I know, it's been ages!",
    "tip": "Неформально, дружньо. It's been ages = дуже давно.",
    "cat": "social",
    "tag": "👋 Знайомство",
    "anchors": [
      "Long time no see"
    ],
    "situation": "Коли зустрічаєш когось після перерви",
    "examples": [
      "— Long time no see! — I know, it's been ages!",
      "— Long time no see! — No worries at all."
    ]
  },
  {
    "en": "What brings you here?",
    "ua": "Що привело тебе сюди?",
    "ex": "— What brings you here? — I'm here on vacation, actually.",
    "tip": "Цікавість без нав'язливості. Часта small talk фраза.",
    "cat": "social",
    "tag": "👋 Знайомство",
    "anchors": [
      "What brings you here?"
    ],
    "situation": "Small talk при знайомстві в подорожі",
    "examples": [
      "— What brings you here? — I'm here on vacation, actually.",
      "— What brings you here? — No worries at all."
    ]
  },
  {
    "en": "I'm here on vacation.",
    "ua": "Я тут у відпустці.",
    "ex": "— What brings you here? — I'm here on vacation — just exploring the city.",
    "tip": "On vacation (US) = on holiday (UK).",
    "cat": "social",
    "tag": "👋 Знайомство",
    "anchors": [
      "on vacation"
    ],
    "situation": "Пояснюєш, навіщо приїхав",
    "examples": [
      "— What brings you here? — I'm here on vacation — just exploring the city.",
      "— I'm here on vacation. — Nice to meet you too!"
    ]
  },
  {
    "en": "Sorry to bother you.",
    "ua": "Вибачте, що турбую.",
    "ex": "— Sorry to bother you — could you tell me the time?",
    "tip": "Ввічливий вступ перед проханням до незнайомця.",
    "cat": "social",
    "tag": "👋 Знайомство",
    "anchors": [
      "Sorry to bother you"
    ],
    "situation": "Перед тим як звернутися до незнайомця",
    "examples": [
      "— Sorry to bother you — could you tell me the time?",
      "— Sorry to bother you. — Of course — go ahead."
    ]
  },
  {
    "en": "Thanks for your help — I really appreciate it.",
    "ua": "Дякую за допомогу — дуже вдячний.",
    "ex": "— No problem! — Thanks for your help — I really appreciate it.",
    "tip": "Appreciate it = ціную це. Сильніше ніж просто thanks.",
    "cat": "social",
    "tag": "👋 Знайомство",
    "anchors": [
      "I really appreciate it"
    ],
    "situation": "Подяка після того, як хтось допоміг",
    "examples": [
      "— No problem! — Thanks for your help — I really appreciate it.",
      "— Thanks for your help — I really appreciate it. — No worries at all."
    ]
  },
  {
    "en": "No worries!",
    "ua": "Без проблем! / Не за що!",
    "ex": "— Sorry I'm late. — No worries, we just got here too.",
    "tip": "Австралійський/британський еквівалент No problem / It's fine.",
    "cat": "social",
    "tag": "👋 Знайомство",
    "anchors": [
      "No worries"
    ],
    "situation": "Відповідь, коли хтось вибачається",
    "examples": [
      "— Sorry I'm late. — No worries, we just got here too.",
      "— No worries! — No worries at all."
    ]
  },
  {
    "en": "Same here!",
    "ua": "Я теж! / Те саме!",
    "ex": "— I love this city. — Same here! It's my third visit.",
    "tip": "Коротка згода — ти теж так думаєш/робиш.",
    "cat": "social",
    "tag": "👋 Знайомство",
    "anchors": [
      "Same here"
    ],
    "situation": "Коли погоджуєшся з тим, що сказав співрозмовник",
    "examples": [
      "— I love this city. — Same here! It's my third visit.",
      "— Same here! — Of course — go ahead."
    ]
  },
  {
    "en": "Hang on a sec.",
    "ua": "Зачекай секунду.",
    "ex": "— Where's the menu? — Hang on a sec, I'll grab one for you.",
    "tip": "Sec = second. Hang on = почекай (неформально).",
    "cat": "social",
    "tag": "👋 Знайомство",
    "anchors": [
      "Hang on a sec"
    ],
    "situation": "Просиш почекати на мить",
    "examples": [
      "— Where's the menu? — Hang on a sec, I'll grab one for you.",
      "— Hang on a sec. — No worries at all."
    ]
  },
  {
    "en": "Give me a moment.",
    "ua": "Дайте мені хвилинку.",
    "ex": "Give me a moment — I need to check my booking details.",
    "tip": "Трохи формальніше ніж hang on. Moment = мить.",
    "cat": "social",
    "tag": "👋 Знайомство",
    "anchors": [
      "Give me a moment"
    ],
    "situation": "Потрібен час, щоб щось знайти або подумати",
    "examples": [
      "Give me a moment — I need to check my booking details.",
      "— Give me a moment. — Of course — go ahead."
    ]
  },
  {
    "en": "I hate to ask, but…",
    "ua": "Мені незручно питати, але…",
    "ex": "I hate to ask, but could you watch my bag for a minute?",
    "tip": "Ввічливий вступ до незручного прохання.",
    "cat": "social",
    "tag": "👋 Знайомство",
    "anchors": [
      "I hate to ask, but"
    ],
    "situation": "Перед незручним або особливим проханням",
    "examples": [
      "I hate to ask, but could you watch my bag for a minute?",
      "— I hate to ask, but... — Nice to meet you too!"
    ]
  },
  {
    "en": "Would you mind if I sat here?",
    "ua": "Ви не проти, якщо я сяду тут?",
    "ex": "— Excuse me, would you mind if I sat here? — Not at all, go ahead.",
    "tip": "Would you mind if I + Past Simple — ввічливе прохання дозволу.",
    "rule": "Mind if I + дієслово в минулому часі (sat, not sit). Відповідь: Not at all / Go ahead.",
    "cat": "social",
    "tag": "👋 Знайомство",
    "anchors": [
      "Would you mind if I"
    ],
    "situation": "Питаєш дозвіл посісти поруч",
    "examples": [
      "— Excuse me, would you mind if I sat here? — Not at all, go ahead.",
      "— Would you mind if I sat here? — Nice to meet you too!"
    ]
  },
  {
    "en": "My bad.",
    "ua": "Моя провина. / Вибач, моя помилка.",
    "ex": "— You took my coffee. — Oh, my bad — here's yours.",
    "tip": "Неформальне вибачення. Sorry about that — трохи серйозніше.",
    "cat": "social",
    "tag": "👋 Знайомство",
    "anchors": [
      "My bad"
    ],
    "situation": "Невелике вибачення за свою помилку",
    "examples": [
      "— You took my coffee. — Oh, my bad — here's yours.",
      "— My bad. — No worries at all."
    ]
  },
  {
    "en": "Sorry about that.",
    "ua": "Вибач за це.",
    "ex": "Sorry about that — I didn't mean to bump into you.",
    "tip": "Універсальне вибачення за дрібницю.",
    "cat": "social",
    "tag": "👋 Знайомство",
    "anchors": [
      "Sorry about that"
    ],
    "situation": "Вибачаєшся за невелику незручність",
    "examples": [
      "Sorry about that — I didn't mean to bump into you.",
      "— Sorry about that. — Of course — go ahead."
    ]
  },
  {
    "en": "You know what I mean?",
    "ua": "Розумієш, про що я?",
    "ex": "It's hard to explain, but you know what I mean?",
    "tip": "Перевіряєш, чи співрозмовник зрозумів натяк.",
    "cat": "social",
    "tag": "👋 Знайомство",
    "anchors": [
      "You know what I mean?"
    ],
    "situation": "Хочеш переконатися, що тебе зрозуміли",
    "examples": [
      "It's hard to explain, but you know what I mean?",
      "— You know what I mean? — Nice to meet you too!"
    ]
  }
];


// 📅 Плани — 6 phrases
const PHRASES_PLANS = [
  {
    "en": "Are you free tomorrow evening?",
    "ua": "Ти вільний завтра ввечері?",
    "ex": "— Are you free tomorrow evening? — Yes, after six I'm free.",
    "tip": "Free = вільний (не зайнятий). Available — формальніше.",
    "cat": "plans",
    "tag": "📅 Плани",
    "anchors": [
      "Are you free"
    ],
    "situation": "Запрошуєш когось або домовляєшся про зустріч",
    "examples": [
      "— Are you free tomorrow evening? — Yes, after six I'm free.",
      "— Are you free tomorrow evening? — Sure, let's do that."
    ]
  },
  {
    "en": "How about we meet at the café at six?",
    "ua": "Як щодо зустрічі в кафе о шостій?",
    "ex": "— How about we meet at the café at six? — Perfect, see you there!",
    "tip": "How about we + дієслово — пропозиція плану.",
    "rule": "How about + we + дієслово в базовій формі. Альтернатива: How about meeting at six?",
    "cat": "plans",
    "tag": "📅 Плани",
    "anchors": [
      "How about we meet"
    ],
    "situation": "Пропонуєш конкретний план зустрічі",
    "examples": [
      "— How about we meet at the café at six? — Perfect, see you there!",
      "— How about we meet at the café at six? — Works for me. Text me when you're on your way."
    ]
  },
  {
    "en": "What time works for you?",
    "ua": "О котрій годині тобі зручно?",
    "ex": "— What time works for you? — Any time after lunch is fine.",
    "tip": "Works for you = підходить тобі. Дуже природна фраза.",
    "cat": "plans",
    "tag": "📅 Плани",
    "anchors": [
      "What time works for you?"
    ],
    "situation": "Узгоджуєш час зустрічі",
    "examples": [
      "— What time works for you? — Any time after lunch is fine.",
      "— What time works for you? — Perfect — see you then!"
    ]
  },
  {
    "en": "I'll be there around seven.",
    "ua": "Я буду там десь о сьомій.",
    "ex": "— What time works for you? — I'll be there around seven, maybe a bit later.",
    "tip": "Around = приблизно. About — те саме.",
    "cat": "plans",
    "tag": "📅 Плани",
    "anchors": [
      "I'll be there around"
    ],
    "situation": "Підтверджуєш приблизний час приходу",
    "examples": [
      "— What time works for you? — I'll be there around seven, maybe a bit later.",
      "— I'll be there around seven. — Sure, let's do that."
    ]
  },
  {
    "en": "Let's play it by ear.",
    "ua": "Подивимось по ситуації.",
    "ex": "— Should we book now? — Let's play it by ear — we can decide tomorrow.",
    "tip": "Ідіома: не планувати заздалегідь, діяти за обставинами.",
    "cat": "plans",
    "tag": "📅 Плани",
    "anchors": [
      "play it by ear"
    ],
    "situation": "Коли не хочеш жорстко планувати",
    "examples": [
      "— Should we book now? — Let's play it by ear — we can decide tomorrow.",
      "— Let's play it by ear. — Works for me. Text me when you're on your way."
    ]
  },
  {
    "en": "I'm running behind schedule.",
    "ua": "Я відстаю від графіка.",
    "ex": "Sorry, I'm running behind schedule — I'll be about 15 minutes late.",
    "tip": "Behind schedule = запізнююсь порівняно з планом.",
    "cat": "plans",
    "tag": "📅 Плани",
    "anchors": [
      "running behind schedule"
    ],
    "situation": "Попереджаєш, що запізнюєшся на зустріч",
    "examples": [
      "Sorry, I'm running behind schedule — I'll be about 15 minutes late.",
      "— I'm running behind schedule. — Sure, let's do that."
    ]
  }
];


// Auto-generated — run: node scripts/migrate-and-build.js
const PHRASES = [
  ...PHRASES_HOTEL,
  ...PHRASES_STREET,
  ...PHRASES_TRANSPORT,
  ...PHRASES_CAFE,
  ...PHRASES_SHOP,
  ...PHRASES_EMERGENCY,
  ...PHRASES_EVERYDAY,
  ...PHRASES_SOCIAL,
  ...PHRASES_PLANS
];

const TOTAL = PHRASES.length;


const DIALOGUES = [
  {
    "lines": [
      {
        "speaker": "A",
        "text": "Excuse me, is this seat taken?"
      },
      {
        "speaker": "B",
        "text": "No, go ahead, please."
      },
      {
        "speaker": "A",
        "text": "Thanks! ___"
      }
    ],
    "blankIndex": 2,
    "phraseIndex": 228,
    "options": [
      "Nice to meet you!",
      "Something came up.",
      "Could I have the bill?",
      "My bad."
    ],
    "answer": "Nice to meet you!",
    "correctIndex": 0
  },
  {
    "lines": [
      {
        "speaker": "Waiter",
        "text": "Are you ready to order?"
      },
      {
        "speaker": "You",
        "text": "Yes. ___"
      },
      {
        "speaker": "Waiter",
        "text": "Great choice. Anything to drink?"
      }
    ],
    "blankIndex": 1,
    "phraseIndex": 43,
    "options": [
      "I'll have the grilled salmon, please.",
      "Is this on sale?",
      "Call an ambulance, please!",
      "Long time no see!"
    ],
    "answer": "I'll have the grilled salmon, please.",
    "correctIndex": 0
  },
  {
    "lines": [
      {
        "speaker": "Friend",
        "text": "Shall we grab a coffee?"
      },
      {
        "speaker": "You",
        "text": "___"
      },
      {
        "speaker": "Friend",
        "text": "I know a nice place nearby."
      }
    ],
    "blankIndex": 1,
    "phraseIndex": 76,
    "options": [
      "That sounds great!",
      "I'm afraid I have to disagree.",
      "Call an ambulance, please!",
      "Is this seat taken?"
    ],
    "answer": "That sounds great!",
    "correctIndex": 0
  },
  {
    "lines": [
      {
        "speaker": "Stranger",
        "text": "You look lost. Can I help?"
      },
      {
        "speaker": "You",
        "text": "___"
      },
      {
        "speaker": "Stranger",
        "text": "Sure — the station is two blocks that way."
      }
    ],
    "blankIndex": 1,
    "phraseIndex": 14,
    "options": [
      "I think I'm lost. Could you help me?",
      "No worries!",
      "Is service charge included?",
      "I'll be there around seven."
    ],
    "answer": "I think I'm lost. Could you help me?",
    "correctIndex": 0
  },
  {
    "lines": [
      {
        "speaker": "Reception",
        "text": "Good evening. How can I help?"
      },
      {
        "speaker": "You",
        "text": "___"
      },
      {
        "speaker": "Reception",
        "text": "One moment, let me find your booking."
      }
    ],
    "blankIndex": 1,
    "phraseIndex": 1,
    "options": [
      "I have a reservation under the name…",
      "What brings you here?",
      "Same here!",
      "How are you doing?"
    ],
    "answer": "I have a reservation under the name…",
    "correctIndex": 0
  },
  {
    "lines": [
      {
        "speaker": "You",
        "text": "Excuse me, how much is a ticket to the city centre?"
      },
      {
        "speaker": "Driver",
        "text": "Three fifty."
      },
      {
        "speaker": "You",
        "text": "___"
      }
    ],
    "blankIndex": 2,
    "phraseIndex": 23,
    "options": [
      "I'm sorry, I didn't catch that.",
      "That makes sense.",
      "Hang on a sec.",
      "Fair enough."
    ],
    "answer": "I'm sorry, I didn't catch that.",
    "correctIndex": 0
  },
  {
    "lines": [
      {
        "speaker": "Colleague",
        "text": "Are you free tomorrow evening?"
      },
      {
        "speaker": "You",
        "text": "___"
      },
      {
        "speaker": "Colleague",
        "text": "Great — how about we meet at the café at six?"
      }
    ],
    "blankIndex": 1,
    "phraseIndex": 124,
    "options": [
      "Sounds good to me.",
      "I'd rather not.",
      "My bag has been stolen.",
      "Is this dish spicy?"
    ],
    "answer": "Sounds good to me.",
    "correctIndex": 0
  },
  {
    "lines": [
      {
        "speaker": "You",
        "text": "Could I have the bill, please?"
      },
      {
        "speaker": "Waiter",
        "text": "Of course. Was everything alright?"
      },
      {
        "speaker": "You",
        "text": "___"
      }
    ],
    "blankIndex": 2,
    "phraseIndex": 235,
    "options": [
      "Thanks for your help — I really appreciate it.",
      "This isn't what I ordered.",
      "Which bus goes to…?",
      "I'm just kidding."
    ],
    "answer": "Thanks for your help — I really appreciate it.",
    "correctIndex": 0
  },
  {
    "lines": [
      {
        "speaker": "You",
        "text": "Sorry to bother you — could you tell me where the pharmacy is?"
      },
      {
        "speaker": "Local",
        "text": "It's just around the corner."
      },
      {
        "speaker": "You",
        "text": "___"
      }
    ],
    "blankIndex": 2,
    "phraseIndex": 0,
    "options": [
      "Could you tell me where the nearest hotel is?",
      "What do you mean by that?",
      "I hate to ask, but…",
      "Never mind."
    ],
    "answer": "Could you tell me where the nearest hotel is?",
    "correctIndex": 0
  },
  {
    "lines": [
      {
        "speaker": "You",
        "text": "The air conditioning doesn't seem to be working."
      },
      {
        "speaker": "Reception",
        "text": "I'm sorry about that. I'll send someone up."
      },
      {
        "speaker": "You",
        "text": "___"
      }
    ],
    "blankIndex": 2,
    "phraseIndex": 90,
    "options": [
      "That works for me.",
      "I totally agree with you.",
      "Call an ambulance, please!",
      "Is this on sale?"
    ],
    "answer": "That works for me.",
    "correctIndex": 0
  },
  {
    "lines": [
      {
        "speaker": "You",
        "text": "___"
      },
      {
        "speaker": "Friend",
        "text": "No worries! We just got here too."
      }
    ],
    "blankIndex": 0,
    "phraseIndex": 84,
    "options": [
      "I'm running a bit late.",
      "How's it going?",
      "Where are the fitting rooms?",
      "I've lost my passport."
    ],
    "answer": "I'm running a bit late.",
    "correctIndex": 0
  },
  {
    "lines": [
      {
        "speaker": "Guide",
        "text": "The museum closes in ten minutes."
      },
      {
        "speaker": "You",
        "text": "___"
      },
      {
        "speaker": "Guide",
        "text": "Yes, but the gift shop stays open longer."
      }
    ],
    "blankIndex": 1,
    "phraseIndex": 100,
    "options": [
      "That's a shame.",
      "Absolutely!",
      "Go ahead.",
      "I'm easy — either way is fine."
    ],
    "answer": "That's a shame.",
    "correctIndex": 0
  }
];


const SITUATIONS = [
  {
    "situation": "Ти в кафе і хочеш попросити рахунок.",
    "phraseIndex": 45,
    "options": [
      "Could I see the menu, please?",
      "What do you recommend?",
      "Could I have the bill, please?",
      "Is this dish spicy?"
    ],
    "correctIndex": 2
  },
  {
    "situation": "Ти загубився на вулиці.",
    "phraseIndex": 14,
    "options": [
      "Is this on sale?",
      "I think I'm lost. Could you help me?",
      "A table for two, please.",
      "Nice to meet you!"
    ],
    "correctIndex": 1
  },
  {
    "situation": "Хочеш ввічливо попросити людину говорити повільніше.",
    "phraseIndex": 22,
    "options": [
      "Go ahead.",
      "Same here!",
      "Could you speak more slowly, please?",
      "What do you mean by that?"
    ],
    "correctIndex": 2
  },
  {
    "situation": "У поїзді хочеш дізнатися, чи зупиняється він на твоїй станції.",
    "phraseIndex": 29,
    "options": [
      "Long time no see!",
      "How much does this cost?",
      "Is breakfast included in the price?",
      "Does this train stop at…?"
    ],
    "correctIndex": 3
  },
  {
    "situation": "Хтось запропонував піти на каву, і тобі подобається ідея.",
    "phraseIndex": 76,
    "options": [
      "This isn't what I ordered.",
      "That sounds great!",
      "I'd rather not.",
      "I'm afraid I have to disagree."
    ],
    "correctIndex": 1
  },
  {
    "situation": "Ти запізнюєшся на зустріч і хочеш попередити.",
    "phraseIndex": 84,
    "options": [
      "Never mind.",
      "I'm running a bit late.",
      "I'll be right back.",
      "Take your time."
    ],
    "correctIndex": 1
  },
  {
    "situation": "У магазині ти не хочеш, щоб продавець тебе турбував.",
    "phraseIndex": 54,
    "options": [
      "How much does this cost?",
      "Do you accept credit cards?",
      "I'd like to return this",
      "I'm just looking, thank you."
    ],
    "correctIndex": 3
  },
  {
    "situation": "Ти хочеш дізнатися, чи включений сніданок у ціну номера.",
    "phraseIndex": 3,
    "options": [
      "What's the Wi-Fi password?",
      "Is breakfast included in the price?",
      "What time does breakfast start?",
      "Is there a safe"
    ],
    "correctIndex": 1
  },
  {
    "situation": "У таксі хочеш, щоб водій висадив тебе зараз.",
    "phraseIndex": 39,
    "options": [
      "I need to get off at the next stop.",
      "Please take me to this address.",
      "Could you drop me off here, please?",
      "Where can I get a taxi?"
    ],
    "correctIndex": 2
  },
  {
    "situation": "Ти не зрозумів, що сказали — просиш повторити.",
    "phraseIndex": 87,
    "options": [
      "I totally agree with you.",
      "Absolutely!",
      "Could you say that again?",
      "That makes sense."
    ],
    "correctIndex": 2
  },
  {
    "situation": "Домовляєшся про час зустрічі — питаєш, коли зручно.",
    "phraseIndex": 247,
    "options": [
      "How far is it from here?",
      "What time works for you?",
      "Which way is the town centre?",
      "What are the opening hours?"
    ],
    "correctIndex": 1
  },
  {
    "situation": "Ти вперше зустрічаєш людину після представлення.",
    "phraseIndex": 228,
    "options": [
      "What brings you here?",
      "Nice to meet you!",
      "How's it going?",
      "Long time no see!"
    ],
    "correctIndex": 1
  },
  {
    "situation": "Хтось вибачається, і ти хочеш сказати, що все гаразд.",
    "phraseIndex": 236,
    "options": [
      "Sorry about that.",
      "My bad.",
      "No worries!",
      "I'm afraid I have to disagree."
    ],
    "correctIndex": 2
  },
  {
    "situation": "У ресторані страва не та, що ти замовляв.",
    "phraseIndex": 49,
    "options": [
      "This isn't what I ordered.",
      "Could I get this to go?",
      "What do you recommend?",
      "Is this dish spicy?"
    ],
    "correctIndex": 0
  },
  {
    "situation": "Друг питає, як справи — відповідаєш, що все добре.",
    "phraseIndex": 129,
    "options": [
      "Something came up.",
      "I overslept.",
      "I'm doing well, thanks.",
      "Not much."
    ],
    "correctIndex": 2
  },
  {
    "situation": "Хочеш ввічливо сказати, що йдеш — прощаєшся.",
    "phraseIndex": 0,
    "options": [
      "Could you tell me where the nearest hotel is?",
      "Help yourself.",
      "Have a seat.",
      "Come on in."
    ],
    "correctIndex": 0
  }
];


const GRAMMAR_RULES = [
  {
    id: 'polite-request',
    icon: '🙏',
    category: 'requests',
    title: 'Ввічливі прохання: Could you / Could I',
    template: 'Could you [дія]? / Could I have [щось]?',
    summary: 'Найпоширеніший спосіб попросити щось ввічливо. Замість грубого "Give me" або "I want".',
    whenToUse: 'У готелі, кафе, магазині, на вулиці — скрізь, де ти просиш допомогу або послугу.',
    structure: 'Could + підмет (you/I) + дієслово в базовій формі. Could — минула форма can, але тут означає "чи не могли б" (не про минуле!).',
    examples: [
      'Could you help me? — Чи не могли б ви мені допомогти?',
      'Could I have the bill? — Чи можна рахунок?',
      'Could you speak more slowly? — Чи не могли б ви говорити повільніше?'
    ],
    mistakes: [
      '❌ Could you to help me? → ✅ Could you help me? (після could — дієслово БЕЗ to)',
      '❌ Can I have a coffee? (грубувато) → ✅ Could I have a coffee, please? (ввічливіше)'
    ],
    patterns: ['Could you', 'Could I have', 'Could I get'],
    whyItWorks: 'Англійська культура цінує опосередкованість: замість прямого наказу носії «завертають» прохання в питання. Could — минула форма can, але тут це не минулий час, а «дистанція ввічливості» (як українське «чи не могли б»). Тому Could you… звучить м\'якше за Can you… і набагато м\'якше за Give me.'
  },
  {
    id: 'would-like',
    icon: '☕',
    category: 'requests',
    title: 'М\'яке бажання: I\'d like to…',
    template: 'I\'d like to [дія] / I\'d like [іменник]',
    summary: 'Ввічливий спосіб сказати "я хочу" без грубості. I\'d = I would.',
    whenToUse: 'Замовлення в кафе, бронювання, висловлення бажання в формальній ситуації.',
    structure: 'I\'d like + to + дієслово АБО I\'d like + іменник. Would — умовний спосіб, робить фразу м\'якшою.',
    examples: [
      'I\'d like to book a room. — Я хотів би забронювати кімнату.',
      'I\'d like a table for two. — Столик на двох, будь ласка.',
      'I\'d like to return this. — Я хотів би це повернути.'
    ],
    mistakes: [
      '❌ I want a coffee (прямо, різко) → ✅ I\'d like a coffee, please',
      '❌ I\'d like booking → ✅ I\'d like to book (після like to — інфінітив)'
    ],
    patterns: ['I\'d like to', 'I\'d like a', 'I\'d like'],
    whyItWorks: 'Would тут не про «умову», а про дистанцію: I want звучить як вимога, I\'d like — як побажання. Носії в сервісі майже завжди кажуть I\'d like, бо це стандарт ввічливості. Like + to + дієслово, або like + іменник без to.'
  },
  {
    id: 'location-questions',
    icon: '📍',
    category: 'questions',
    title: 'Запитання про місце: Where is / How do I get to',
    template: 'Where is [місце]? / How do I get to [місце]?',
    summary: 'Два ключові шаблони: "де знаходиться?" і "як туди дістатися?"',
    whenToUse: 'На вулиці, в аеропорту, в готелі — коли шукаєш щось або питаєш дорогу.',
    structure: 'Where is + артикль + місце (прямий порядок слів!). How do I get to + місце (get to = дістатися до).',
    examples: [
      'Where is the nearest pharmacy? — Де найближча аптека?',
      'How do I get to the station? — Як дістатися до вокзалу?',
      'Is there a bank nearby? — Чи є банк поблизу?'
    ],
    mistakes: [
      '❌ Where is station? → ✅ Where is THE station? (потрібен артикль)',
      '❌ How I get to…? → ✅ How DO I get to…? (потрібен допоміжний do)',
      '❌ reach to the airport → ✅ reach the airport (reach без to)'
    ],
    patterns: ['Where is', 'How do I get to', 'Is there a', 'nearby'],
    whyItWorks: 'В англійській іменник зазвичай потребує артикля (the station, a bank). Where is — про місце зараз; How do I get to — про маршрут (get to = дієти до). Do в How do I — обов\'язковий допоміжник для Present Simple.'
  },
  {
    id: 'indirect-questions',
    icon: '🔗',
    category: 'questions',
    title: 'Непрямі питання: Could you tell me where…',
    template: 'Could you tell me where [місце] is?',
    summary: 'Ввічливе питання через прохання. Після where/what/when — прямий порядок слів (не як у питанні!).',
    whenToUse: 'Коли хочеш звучати особливо ввічливо або не впевнений у собі.',
    structure: 'Could you tell me + питальне слово + підмет + дієслово. НЕ "where is the hotel?" а "where the hotel IS".',
    examples: [
      'Could you tell me where the hotel is? — Де готель?',
      'Do you know what time the train leaves? — О котрій відходить поїзд?',
      'I was wondering if you could help me. — Чи не могли б ви допомогти?'
    ],
    mistakes: [
      '❌ tell me where is the hotel → ✅ tell me where the hotel IS',
      '❌ I was wondering if you can… (менш ввічливо) → ✅ I was wondering if you COULD…'
    ],
    patterns: ['Could you tell me where', 'I was wondering if', 'Do you know what'],
    whyItWorks: 'Головне речення вже питальне (Could you tell me?), тому всередині порядок слів стає прямим — як у звичайному реченні: where the hotel IS, а не where IS the hotel. Це «непряме питання» — звучить м\'якше, ніж зупинити людину прямим Where is…?'
  },
  {
    id: 'present-perfect',
    icon: '⏳',
    category: 'tenses',
    title: 'Present Perfect: I\'ve lost / has been stolen',
    template: 'I\'ve [дія] / It has been [дія]',
    summary: 'Минула дія з результатом ЗАРАЗ. "Я загубив" (і зараз немає), "вкрали" (і зараз немає).',
    whenToUse: 'Втрата речей, скасування рейсу, помилка в рахунку — коли важливий результат у теперішньому.',
    structure: 'have/has + V3 (третя форма). Пасив: has been + V3. I\'ve = I have.',
    examples: [
      'I\'ve lost my passport. — Я загубив паспорт.',
      'My bag has been stolen. — Мою сумку вкрали.',
      'I think there\'s been a mistake. — Здається, є помилка.'
    ],
    mistakes: [
      '❌ I lost my passport yesterday (конкретний час) vs ✅ I\'ve lost it (результат зараз)',
      '❌ My bag is stolen → ✅ My bag HAS BEEN stolen (пасив)'
    ],
    patterns: ['I\'ve lost', 'has been', 'there\'s been'],
    whyItWorks: 'Present Perfect з\'єднує минуле з теперішнім: дія вже сталась, але важливий результат ЗАРАЗ (паспорта немає, сумку вкрали). Якщо називаєш точний час (yesterday at 5) — потрібен Past Simple, не Perfect.'
  },
  {
    id: 'phrasal-verbs',
    icon: '🔄',
    category: 'verbs',
    title: 'Фразові дієслова: get off, try on, drop off',
    template: '[дієслово] + [прийменник/частка]',
    summary: 'Два+ слова = нове значення. get off ≠ get, try on ≠ try. Місцеім\'я часто посередині.',
    whenToUse: 'Транспорт, магазин, таксі — скрізь, де носії кажуть "природні" фрази.',
    structure: 'Дієслово + частка/прийменник. Об\'єкт-місцеім\'я ставиться МІЖ частинами: drop ME off, try THIS on.',
    examples: [
      'I need to get off at the next stop. — Вийти на наступній зупинці.',
      'Could I try this on? — Чи можу приміряти?',
      'Could you drop me off here? — Висадіть мене тут.'
    ],
    mistakes: [
      '❌ I exit the bus → ✅ I get off the bus',
      '❌ drop off me → ✅ drop me off',
      '❌ try on it → ✅ try it on'
    ],
    patterns: ['get off', 'try on', 'drop off', 'pick up', 'write down'],
    whyItWorks: 'Прийменник/частка змінює значення дієслова: get off ≠ get. Якщо об\'єкт — місцезайменник (me, it), він ставиться МІЖ частинами: drop me off, try it on. Це не «граматика для складності» — так реально говорять носії.'
  },
  {
    id: 'agreeing',
    icon: '🤝',
    category: 'conversation',
    title: 'Згода та незгода в розмові',
    template: 'I agree / I\'m afraid I disagree / That makes sense',
    summary: 'Природні реакції в діалозі — не просто Yes/No, а живі фрази.',
    whenToUse: 'Будь-яка розмова: обговорення планів, думок, пропозицій.',
    structure: 'AGREE — дієслово (не "I am agree"!). I\'m afraid = ввічливе вступне слово ("боюся, що…").',
    examples: [
      'I totally agree with you. — Повністю згоден.',
      'That makes sense. — Це логічно.',
      'I\'m afraid I have to disagree. — Боюся, не погоджуюсь.'
    ],
    mistakes: [
      '❌ I am agree → ✅ I agree',
      '❌ I don\'t agree with it (різко) → ✅ I\'m afraid I have to disagree (м\'якше)'
    ],
    patterns: ['I agree', 'That makes sense', 'I\'m afraid', 'I couldn\'t agree more'],
    whyItWorks: 'Agree — дієслово, тому I agree, а не I am agree. I\'m afraid тут не «боюся», а ввічливий вступ перед незгодою — дає співрозмовнику зрозуміти, що ти не атакуєш, а висловлюєш іншу думку.'
  },
  {
    id: 'reactions',
    icon: '💬',
    category: 'conversation',
    title: 'Реакції та відповіді на пропозиції',
    template: 'That sounds great! / I\'d rather not / That works for me',
    summary: 'Як природно відповідати на запрошення, пропозиції та питання.',
    whenToUse: 'Коли хтось щось пропонує, питає думку, або ти обираєш між варіантами.',
    structure: 'That sounds + прикметник. I\'d rather + not/дієслово. That works FOR me (предлог for!).',
    examples: [
      'That sounds great! — Звучить чудово!',
      'I\'d rather not. — Я б краще відмовився.',
      'That works for me. — Мене влаштовує.',
      'I\'ll go with coffee. — Оберу каву.'
    ],
    mistakes: [
      '❌ That works for me the time → ✅ That works for me',
      '❌ I\'d rather to not → ✅ I\'d rather not'
    ],
    patterns: ['That sounds', 'I\'d rather', 'That works for me', 'I\'ll go with'],
    whyItWorks: 'That sounds + прикметник — реакція на ідею, не буквальний «звук». I\'d rather = would rather — усталена конструкція «краще б». Works for me: work тут означає «підходить», обов\'язково з for.'
  },
  {
    id: 'softening',
    icon: '🌸',
    category: 'conversation',
    title: 'Пом\'якшення: I think / I\'m not sure / To be honest',
    template: 'I think [твердження] / To be honest,… / I\'m not sure about that',
    summary: 'Роблять мову менш категоричною — носії рідко кажуть напряму "ти не правий".',
    whenToUse: 'Коли сумніваєшся, не впевнений, або хочеш сказати неприємну правду м\'яко.',
    structure: 'I think + речення. To be honest + кома + справжня думка. I\'m not sure ABOUT + тема.',
    examples: [
      'I think I\'m lost. — Здається, я загубився.',
      'To be honest, it\'s a bit expensive. — Якщо чесно, трохи дорого.',
      'I\'m not sure about that. — Я не впевнений у цьому.'
    ],
    mistakes: [
      '❌ I think so about it → ✅ I\'m not sure about that',
      '❌ Honestly speaking me → ✅ To be honest, I think…'
    ],
    patterns: ['I think', 'To be honest', 'I\'m not sure', 'I suppose so'],
    whyItWorks: 'Англійська уникає прямих суперечок. I think / I\'m not sure дають «простір» для іншої думки. To be honest сигналізує: зараз скажу відверту думку — це соціально прийнятний спосіб бути чесним без грубості.'
  },
  {
    id: 'future-will',
    icon: '🎯',
    category: 'tenses',
    title: 'Миттєве рішення: I\'ll have / I\'ll go with',
    template: 'I\'ll [дія] — рішення в момент мовлення',
    summary: 'Will використовують для рішення, прийнятого ПРЯМО ЗАРАЗ (замовлення в кафе).',
    whenToUse: 'Замовлення їжі, вибір між варіантами, обіцянки "зараз зроблю".',
    structure: 'I\'ll = I will + дієслово. Без to після will.',
    examples: [
      'I\'ll have the soup, please. — Я візьму суп.',
      'I\'ll go with the blue one. — Оберу синій.',
      'I\'ll be right back. — Зараз повернуся.'
    ],
    mistakes: [
      '❌ I will to have → ✅ I\'ll have',
      '❌ I have the soup (зараз) → ✅ I\'ll have (рішення зараз)'
    ],
    patterns: ['I\'ll have', 'I\'ll go with', 'I\'ll be right back'],
    whyItWorks: 'Will + дієслово = рішення в момент мовлення (зараз, дивлячись у меню). Це не «майбутній час у календарному сенсі», а «я щойно вирішив». Тому в кафе кажуть I\'ll have the soup, а не I\'m having.'
  },
  {
    id: 'passive-voice',
    icon: '⚙️',
    category: 'grammar',
    title: 'Пасивний стан: is included / is taken / is expected',
    template: 'Is [щось] + V3?',
    summary: 'Фокус на об\'єкті, а не на тому, хто діє. "Сніданок включений?" а не "хтось включив".',
    whenToUse: 'Готель, кафе, транспорт — питання про стан речей.',
    structure: 'be + V3 (третя форма). Is this seat taken? = чи зайняте місце?',
    examples: [
      'Is breakfast included? — Сніданок включений?',
      'Is this seat taken? — Це місце зайняте?',
      'Is a tip expected here? — Тут прийнято залишати чайові?'
    ],
    mistakes: [
      '❌ Is this seat taking? → ✅ Is this seat TAKEN?',
      '❌ Is included breakfast? → ✅ Is breakfast included?'
    ],
    patterns: ['is included', 'is taken', 'is expected', 'has been'],
    whyItWorks: 'Пасив переносить фокус на об\'єкт: не «хтось включив сніданок», а «сніданок включений». V3 (included, taken) — дія «зроблена» над об\'єктом. У питаннях: Is + об\'єкт + V3.'
  },
  {
    id: 'clarification',
    icon: '❓',
    category: 'conversation',
    title: 'Уточнення: I didn\'t catch that / What do you mean?',
    template: 'Could you say that again? / What do you mean by that?',
    summary: 'Коли не зрозумів — не кажи грубо "What?!" а ці ввічливі фрази.',
    whenToUse: 'Будь-яка розмова з носієм, особливо на швидкій мові або з акцентом.',
    structure: 'I didn\'t catch that = не розчув (catch у переносному значенні). Say AGAIN, не repeat (формальніше).',
    examples: [
      'I\'m sorry, I didn\'t catch that. — Вибачте, не зрозумів.',
      'Could you say that again? — Повторіть, будь ласка?',
      'What do you mean by that? — Що ви маєте на увазі?'
    ],
    mistakes: [
      '❌ What?! (грубо) → ✅ Sorry, I didn\'t catch that',
      '❌ What you mean? → ✅ What do you MEAN?'
    ],
    patterns: ['didn\'t catch', 'say that again', 'What do you mean', 'speak more slowly'],
    whyItWorks: 'Catch у значенні «зловити/розчути» — розмовний, але ввічливий спосіб сказати «не зрозумів». What?! різко обриває розмову; I didn\'t catch that зберігає контакт і дає зрозуміти, що проблема в розумінні, а не в співрозмовнику.'
  },
  {
    id: 'would-you-mind',
    icon: '🚪',
    category: 'requests',
    title: 'Дозвіл: Would you mind if I… / Do you mind if I…',
    template: 'Would you mind if I [Past Simple]?',
    summary: 'Найввічливіший спосіб попросити дозволу — «ви не проти, якщо я…?»',
    whenToUse: 'Посісти поруч, відкрити вікно, увійти, сфотографувати — коли потрібен дозвіл, а не послуга.',
    structure: 'Mind if I + дієслово в МИНУЛОМУ часі (sat, not sit). Would you mind — формальніше за Do you mind.',
    examples: [
      'Would you mind if I sat here? — Ви не проти, якщо я сяду тут?',
      'Do you mind if I open the window? — Не проти, якщо я відкрию вікно?',
      'Would you mind waiting a moment? — Не могли б ви трохи почекати?'
    ],
    mistakes: [
      '❌ Would you mind if I sit here? → ✅ Would you mind if I SAT here?',
      '❌ Do you mind to open? → ✅ Do you mind if I open?'
    ],
    patterns: ['Would you mind if I', 'Do you mind if I', 'Would you mind'],
    whyItWorks: 'Mind if I… — ідіома «не проти?». Після if використовують Past Simple (sat), хоча мова про теперішнє/майбутнє — це ще один шар ввічливості («ніби гіпотетично»). Відповідь: Not at all / Go ahead.'
  },
  {
    id: 'present-continuous',
    icon: '🏃',
    category: 'tenses',
    title: 'Процес зараз: I\'m running late / I\'m doing well',
    template: 'I\'m [дієслово-ing] — дія в процесі',
    summary: 'Щось відбувається зараз або в поточний період. Am/is/are + V-ing.',
    whenToUse: 'Запізнення, самопочуття, «я зараз зайнятий», погода (it\'s raining).',
    structure: 'be (am/is/are) + дієслово з -ing. I\'m running late = я в процесі запізнення (ще в дорозі).',
    examples: [
      'I\'m running a bit late. — Я трохи запізнююсь.',
      'I\'m doing well, thanks. — У мене все добре.',
      'I\'m getting used to it. — Я звикаю до цього.'
    ],
    mistakes: [
      '❌ I am run late → ✅ I am RUNNING late',
      '❌ I\'m knowing him → ✅ I know him (-ing не з «станами»: know, like, want)'
    ],
    patterns: ['I\'m running', 'I\'m doing', 'I\'m getting', 'It\'s raining', 'I\'m busy'],
    whyItWorks: 'Continuous підкреслює процес: running late = «зараз у ситуації запізнення». Для станів (know, want, like) -ing не використовують — тільки для дій і тимчасових ситуацій.'
  },
  {
    id: 'tag-questions',
    icon: '🌤️',
    category: 'grammar',
    title: 'Питання-хвостики: Nice weather, isn\'t it?',
    template: '[Речення], [doesn\'t/didn\'t/isn\'t it]?',
    summary: 'Коротке питання в кінці речення для підтвердження або small talk.',
    whenToUse: 'Погода, думки, легка розмова — коли хочеш почути «так, згоден».',
    structure: 'Позитивне речення → негативний хвостик (isn\'t it?). Негативне → позитивний (is it?).',
    examples: [
      'Nice weather, isn\'t it? — Гарна погода, чи не так?',
      'It\'s a bit pricey, isn\'t it? — Трохи дороговато, правда?',
      'You\'re from Ukraine, aren\'t you? — Ви з України, так?'
    ],
    mistakes: [
      '❌ Nice weather, is it? → ✅ Nice weather, ISN\'T it?',
      '❌ She is nice, isn\'t she? (тут правильно!) vs ❌ She is nice, is she?'
    ],
    patterns: ['isn\'t it', 'don\'t you', 'aren\'t you', 'Nice weather'],
    whyItWorks: 'Tag question «дзеркалить» допоміжне дієслово з основного речення. Позитив + негативний tag — запрошення до згоди. Це класичний small talk прийом у британській англійській.'
  },
  {
    id: 'look-forward',
    icon: '📅',
    category: 'tenses',
    title: 'Очікування: I\'m looking forward to…',
    template: 'I\'m looking forward to [-ing / it / noun]',
    summary: 'Чекаю з нетерпінням. Після to — тільки -ing або іменник, НЕ інфінітив.',
    whenToUse: 'Зустрічі, події, відповідь на запрошення.',
    structure: 'look forward to + V-ing або it/the trip. To тут прийменник, не частка інфінітиву!',
    examples: [
      'I\'m looking forward to it. — Чекаю з нетерпінням.',
      'I\'m looking forward to seeing you. — Чекаю на зустріч.',
      'Looking forward to your reply. — (лист) Чекаю на відповідь.'
    ],
    mistakes: [
      '❌ looking forward to see you → ✅ looking forward to SEEING you',
      '❌ I look forward to meet → ✅ I look forward to meeting'
    ],
    patterns: ['looking forward to', 'look forward to'],
    whyItWorks: 'Forward to — стійка пара: to тут прийменник (як in, on), тому після нього -ing, як після interested in doing. Це одна з найчастіших помилок українців через «to + infinitive».'
  },
  {
    id: 'some-any',
    icon: '🛒',
    category: 'questions',
    title: 'Anything / something у питаннях і пропозиціях',
    template: 'Do you have anything…? / I need something for…',
    summary: 'Any — у питаннях і запереченнях; some — у позитивах і пропозиціях.',
    whenToUse: 'Магазин, аптека, кафе — коли не знаєш точно, що є.',
    structure: 'Questions: anything cheaper? anything for a headache? Offers: Would you like something to drink?',
    examples: [
      'Do you have anything cheaper? — Є щось дешевше?',
      'Do you have something for a headache? — Є щось від головного болю?',
      'I need something for a cough. — Мені потрібне щось від кашлю.'
    ],
    mistakes: [
      '❌ Do you have something cheaper? (питання) → ✅ anything cheaper',
      '❌ I don\'t have nothing → ✅ I don\'t have anything (подвійне заперечення заборонене)'
    ],
    patterns: ['anything', 'something', 'Do you have anything'],
    whyItWorks: 'Any = «будь-що з варіантів» у питаннях (відкрите). Some = «якась конкретна річ, але невказана» у твердженнях. Англійська не дозволяє подвійне заперечення (don\'t… nothing).'
  },
  {
    id: 'idioms-everyday',
    icon: '💡',
    category: 'conversation',
    title: 'Ідіоми повсякдення: hang in there / piece of cake',
    template: 'Усталені вирази з переносним значенням',
    summary: 'Слова разом ≠ значення окремих слів. Вивчай цілком, не перекладай дослівно.',
    whenToUse: 'Неформальна розмова, підтримка, реакції, прощання.',
    structure: 'Запам\'ятовуй як блок. Hang in there = тримайся. Run late = запізнюватись. On me = я плачу.',
    examples: [
      'Hang in there! — Тримайся!',
      'It\'s not a big deal. — Нічого страшного.',
      'I\'m beat. — Я вимотаний.',
      'Count me in. — Я з вами.'
    ],
    mistakes: [
      '❌ Перекладати дослівно: «висіти там» замість hang in there',
      '❌ I am agree → ✅ I agree (не ідіома, але типова помилка поруч з ідіомами)'
    ],
    patterns: ['Hang in there', 'not a big deal', 'I\'m beat', 'Count me in', 'run late', 'on me'],
    whyItWorks: 'Ідіоми — «соціальний клей» мови: носії використовують їх автоматично. Дослівний переклад ламає сенс. Краще вчити ідіому + одну типову ситуацію, ніж кожне слово окремо.'
  }
];

const RULE_CATEGORIES = {
  all: 'Всі правила',
  requests: '🙏 Прохання',
  questions: '❓ Питання',
  tenses: '⏳ Часи',
  verbs: '🔄 Дієслова',
  conversation: '💬 Розмова',
  grammar: '⚙️ Граматика'
};


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


function safeJsonParse(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch (e) {
    console.warn('Storage: corrupted data for', key, '- reset to default');
    localStorage.removeItem(key);
    return fallback;
  }
}

const Storage = {
  learned: new Set(safeJsonParse('tpLearned3', [])),
  phraseWeights: safeJsonParse('tpWeights3', {}),
  quizStats: safeJsonParse('tpQuizStats', { total: 0, correct: 0 }),

  save() {
    localStorage.setItem('tpLearned3', JSON.stringify([...this.learned]));
    localStorage.setItem('tpWeights3', JSON.stringify(this.phraseWeights));
    localStorage.setItem('tpQuizStats', JSON.stringify(this.quizStats));
  },

  recordAnswer(correct) {
    this.quizStats.total++;
    if (correct) this.quizStats.correct++;
    this.save();
  },

  getPhrasePriority(idx) {
    const w = this.phraseWeights[idx];
    if (w > 1) return 120 + (w - 1) * 30;
    if (!Object.prototype.hasOwnProperty.call(this.phraseWeights, idx) && !this.learned.has(idx)) return 80;
    if (this.learned.has(idx) || w === 0) return 2;
    if (w <= 0.5) return 10;
    return 30;
  },

  updateWeight(idx, isCorrect) {
    if (isCorrect) {
      if (!this.phraseWeights[idx]) this.phraseWeights[idx] = 1;
      this.phraseWeights[idx] -= 0.5;
      if (this.phraseWeights[idx] <= 0.5) {
        this.phraseWeights[idx] = 0;
        this.learned.add(idx);
      }
    } else {
      this.learned.delete(idx);
      this.phraseWeights[idx] = 3;
    }
    this.save();
  },

  toggleLearned(idx) {
    if (this.learned.has(idx)) {
      this.learned.delete(idx);
      this.phraseWeights[idx] = 2;
    } else {
      this.learned.add(idx);
      this.phraseWeights[idx] = 0;
    }
    this.save();
  },

  reset() {
    this.learned.clear();
    this.phraseWeights = {};
    this.quizStats = { total: 0, correct: 0 };
    this.save();
  }
};


let currentFilter = 'all';
let modalIdx = 0;

function renderExamplesHTML(p) {
  const examples = getPhraseExamples(p);
  if (examples.length <= 1) {
    return `<div class="modal-example">💬 ${escapeHtml(examples[0] || '')}</div>`;
  }
  return `<div class="examples-block">
    <div class="examples-label">💬 Приклади в контексті</div>
    ${examples.map((ex, i) => `
      <div class="modal-example example-item">
        <span class="example-num">${i + 1}</span>
        <span class="example-text">${escapeHtml(ex)}</span>
        <button type="button" class="btn-speak btn-speak-sm" onclick="speakText('${escapeJsSingleQuotedString(ex)}', event)" title="Озвучити приклад">🔊</button>
      </div>`).join('')}
  </div>`;
}

function renderCards() {
  const grid = document.getElementById('phrase-grid');
  const filtered = PHRASES.reduce((acc, p, i) => {
    if (currentFilter === 'all' || p.cat === currentFilter) acc.push({ p, i });
    return acc;
  }, []);

  if (!filtered.length) {
    grid.innerHTML = '<div class="empty-state">🔍 Немає фраз у цій категорії</div>';
    return;
  }

  grid.innerHTML = filtered.map(({ p, i }) => {
    const isHard = Storage.phraseWeights[i] && Storage.phraseWeights[i] > 1;
    const txtHTML = highlightAnchors(p.en, p.anchors);
    const situation = p.situation ? `<div class="card-situation">📍 ${escapeHtml(p.situation)}</div>` : '';
    const examples = getPhraseExamples(p);
    const exPreview = examples[0] || '';
    const exExtra = examples.length > 1 ? `<div class="card-example-more">+${examples.length - 1} ще</div>` : '';
    return `<div class="phrase-card${Storage.learned.has(i) ? ' learned' : ''}${isHard ? ' hard-mode' : ''}" onclick="openModal(${i})">
      <div class="card-num">#${String(i + 1).padStart(3, '0')} ${isHard ? '⚠️ СКЛАДНА' : ''}</div>
      <div class="card-en-row">
        <div class="card-en">${txtHTML}</div>
        <button type="button" class="btn-speak" onclick="speakPhrase(${i}, 'en', event)" title="Озвучити">🔊</button>
      </div>
      <div class="card-ua">${escapeHtml(p.ua)}</div>
      <div class="card-example">${escapeHtml(exPreview)}</div>
      ${exExtra}
      ${situation}
      <span class="card-tag">${p.tag}</span>
    </div>`;
  }).join('');
}

function openModal(idx) {
  modalIdx = idx;
  Speech.stop();
  renderModal();
  document.getElementById('modal').classList.add('open');
}

function renderModal() {
  const p = PHRASES[modalIdx];
  document.getElementById('m-num').textContent = `Фраза #${modalIdx + 1} / ${TOTAL}`;
  document.getElementById('m-en').innerHTML = `
    <div class="modal-en-row">
      <div>${highlightAnchors(p.en, p.anchors)}</div>
      <button type="button" class="btn-speak" onclick="speakPhrase(${modalIdx}, 'en', event)" title="Озвучити фразу">🔊</button>
    </div>`;
  document.getElementById('m-ua').textContent = p.ua;
  document.getElementById('m-ex').innerHTML = renderExamplesHTML(p);
  document.getElementById('m-tip').innerHTML = `💡 ${escapeHtml(p.tip)}`;

  const situationEl = document.getElementById('m-situation');
  if (situationEl) {
    situationEl.innerHTML = p.situation ? `📍 <strong>Коли:</strong> ${escapeHtml(p.situation)}` : '';
    situationEl.style.display = p.situation ? 'block' : 'none';
  }

  const ruleEl = document.getElementById('m-rule');
  if (p.rule) {
    ruleEl.innerHTML = `⚙️ <strong>Правило:</strong> ${escapeHtml(p.rule)}`;
    ruleEl.style.display = 'block';
  } else {
    ruleEl.style.display = 'none';
  }

  const btn = document.getElementById('m-learn-btn');
  btn.textContent = Storage.learned.has(modalIdx) ? '✓ Вже знаю' : '✓ Знаю';
}

function toggleLearn() {
  Storage.toggleLearned(modalIdx);
  updateProgress();
  renderCards();
  renderModal();
}

function modalNext() {
  modalIdx = (modalIdx + 1) % TOTAL;
  renderModal();
}

function modalPrev() {
  modalIdx = (modalIdx - 1 + TOTAL) % TOTAL;
  renderModal();
}

function closeModal(e) {
  if (!e || e.target === document.getElementById('modal')) {
    Speech.stop();
    document.getElementById('modal').classList.remove('open');
  }
}

function setFilter(f) {
  currentFilter = f;
  document.querySelectorAll('.filter-btn').forEach(b => {
    const txt = b.getAttribute('data-filter') || '';
    b.classList.toggle('active', txt === f);
  });
  renderCards();
}


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


let quizType = 'en-ua';
let quizQueue = [];
let quizCurrent = 0;
let quizScore = 0;
let quizAnswered = false;
let hintRevealed = 0;
let scrambleUserWords = [];

function setQuizType(t) {
  quizType = t;
  ['en-ua', 'ua-en', 'scramble', 'type', 'fill', 'situation', 'dialogue', 'flash', 'pattern', 'marathon'].forEach(id => {
    const el = document.getElementById('qt-' + id);
    if (el) el.classList.toggle('active', id === t);
  });
  startQuiz();
}

function buildQuizPool(size) {
  const indices = PHRASES.map((_, i) => i);
  return pickWeighted(indices, size, i => Storage.getPhrasePriority(i));
}

function buildPracticePool(items, size, getPhraseIdx) {
  return pickWeighted(items, size, item => Storage.getPhrasePriority(getPhraseIdx(item)));
}

function startQuiz() {
  if (typeof clearFlashTimer === 'function') clearFlashTimer();
  Speech.stop();
  if (quizType === 'dialogue') { quizType = 'dialogue'; startDialogueQuiz(); return; }
  if (quizType === 'situation') { quizType = 'situation'; startSituationQuiz(); return; }
  if (quizType === 'flash') { quizType = 'flash'; startFlashQuiz(); return; }
  if (quizType === 'pattern') { quizType = 'pattern'; startPatternQuiz(); return; }
  if (quizType === 'marathon') { quizType = 'marathon'; startMarathonQuiz(); return; }

  quizQueue = buildQuizPool(15);
  quizCurrent = 0;
  quizScore = 0;
  document.getElementById('quiz-next').style.display = 'none';
  document.getElementById('quiz-restart').style.display = 'none';
  renderQuestion();
}

function renderQuestion() {
  if (quizCurrent >= quizQueue.length) { showQuizResult(); return; }

  const idx = quizQueue[quizCurrent];
  const p = PHRASES[idx];
  quizAnswered = false;
  hintRevealed = 0;
  scrambleUserWords = [];

  const statusText = (Storage.phraseWeights[idx] > 1) ? ' ⚠️ ПОВТОРЕННЯ' : '';
  document.getElementById('quiz-prog').textContent = `Запитання ${quizCurrent + 1} / ${quizQueue.length}${statusText}`;
  document.getElementById('quiz-fb').textContent = '';
  document.getElementById('quiz-fb').className = 'quiz-feedback';
  document.getElementById('quiz-next').style.display = 'none';

  if (quizType === 'type') renderTypeQuestion(idx, p);
  else if (quizType === 'scramble') renderScrambleQuestion(idx, p);
  else if (quizType === 'fill') renderFillQuestion(idx, p);
  else renderChoiceQuestion(idx, p);
}

function renderTypeQuestion(idx, p) {
  document.getElementById('quiz-q').textContent = p.ua;
  document.getElementById('quiz-hint').textContent = '✏️ Напиши фразу повністю англійською:';
  const words = p.en.split(' ');
  document.getElementById('quiz-opts-area').innerHTML = `
    <textarea class="typing-area" id="type-input" rows="3" placeholder="Type here..." oninput="liveCheck(${idx})"></textarea>
    <div style="margin-bottom:14px;"><button class="hint-btn" onclick="revealHint(${idx})">💡 Підказка (${words.length} слів)</button></div>
    <div class="hint-chars" id="hint-display"></div>
    <button class="btn btn-primary" onclick="checkTyped(${idx})">Перевірити ✓</button>`;
  setTimeout(() => { const el = document.getElementById('type-input'); if (el) el.focus(); }, 100);
}

function renderScrambleQuestion(idx, p) {
  document.getElementById('quiz-q').textContent = p.ua;
  document.getElementById('quiz-hint').textContent = '🧩 Клікай по словах, щоб зібрати речення:';
  const cleanWords = p.en.split(' ').map((w, wIdx) => ({ id: wIdx, txt: w }));
  const shuffled = shuffle(cleanWords);
  document.getElementById('quiz-opts-area').innerHTML = `
    <div class="scramble-ans" id="scramble-ans-zone"></div>
    <div class="scramble-pool" id="scramble-pool-zone">
      ${shuffled.map(w => `<button class="scramble-word" data-word-id="${w.id}" onclick="clickScrambleWord(this)">${escapeHtml(w.txt)}</button>`).join('')}
    </div>
    <div style="display:flex;justify-content:center;gap:10px;">
      <button class="btn btn-ghost" onclick="resetScramble()">🔄 Скинути</button>
      <button class="btn btn-primary" onclick="checkScramble(${idx})">Перевірити ✓</button>
    </div>`;
}

function renderFillQuestion(idx, p) {
  const words = p.en.split(' ');
  const blankIdx = Math.floor(Math.random() * words.length);
  const answer = words[blankIdx].replace(/[^a-zA-Z']/g, '');
  const blanked = words.map((w, i) => i === blankIdx ? '___' : w).join(' ');
  setQuizQuestion(blanked, idx, true);
  document.getElementById('quiz-hint').textContent = `🇺🇦 ${p.ua}`;

  const wrongs = shuffle(PHRASES.filter((_, i) => i !== idx)).slice(0, 8).map(x => {
    const ws = x.en.split(' ');
    return ws[Math.floor(Math.random() * ws.length)].replace(/[^a-zA-Z']/g, '');
  }).filter(w => w && w.toLowerCase() !== answer.toLowerCase());

  const opts = shuffle([...new Set([answer, ...wrongs.slice(0, 3)])]);
  document.getElementById('quiz-opts-area').innerHTML = `<div class="quiz-options">${opts.map(o =>
    `<div class="quiz-opt" onclick="checkAnswer(this, '${escapeJsSingleQuotedString(o)}', '${escapeJsSingleQuotedString(answer)}', ${idx})">${escapeHtml(o)}</div>`
  ).join('')}</div>`;
}

function renderChoiceQuestion(idx, p, forceMode) {
  const mode = forceMode || quizType;
  const isEN = mode === 'en-ua';
  setQuizQuestion(isEN ? p.en : p.ua, idx, isEN);
  document.getElementById('quiz-hint').textContent = isEN ? '🇺🇦 Вибери переклад:' : '🇬🇧 Вибери англійську фразу:';
  const correct = isEN ? p.ua : p.en;
  const wrongs = shuffle(PHRASES.filter((_, i) => i !== idx)).slice(0, 3).map(x => isEN ? x.ua : x.en);
  const opts = shuffle([correct, ...wrongs]);
  document.getElementById('quiz-opts-area').innerHTML = `<div class="quiz-options">${opts.map(o =>
    `<div class="quiz-opt" onclick="checkAnswer(this, '${escapeJsSingleQuotedString(o)}', '${escapeJsSingleQuotedString(correct)}', ${idx})">${escapeHtml(o)}</div>`
  ).join('')}</div>`;
}

function setQuizQuestion(text, idx, showSpeak) {
  const el = document.getElementById('quiz-q');
  if (showSpeak && Speech.available()) {
    el.innerHTML = `<div class="quiz-q-row">
      <span>${escapeHtml(text)}</span>
      <button type="button" class="btn-speak btn-speak-sm" onclick="speakPhrase(${idx}, 'en', event)" title="Озвучити">🔊</button>
    </div>`;
  } else {
    el.textContent = text;
  }
}

function clickScrambleWord(btn) {
  if (quizAnswered) return;
  btn.classList.add('used');
  scrambleUserWords.push({ btn, txt: btn.textContent });
  document.getElementById('scramble-ans-zone').innerHTML =
    scrambleUserWords.map(w => `<span class="scramble-word">${escapeHtml(w.txt)}</span>`).join('');
}

function resetScramble() {
  if (quizAnswered) return;
  scrambleUserWords = [];
  document.getElementById('scramble-ans-zone').innerHTML = '';
  document.querySelectorAll('.scramble-word').forEach(b => b.classList.remove('used'));
}

function checkScramble(idx) {
  if (quizAnswered) return;
  quizAnswered = true;
  const userStr = scrambleUserWords.map(w => w.txt).join(' ');
  const isCorrect = normalizePhrase(userStr) === normalizePhrase(PHRASES[idx].en);
  handleScoreUpdate(idx, isCorrect);
  triggerFeedback(isCorrect, PHRASES[idx].en, PHRASES[idx].rule, PHRASES[idx].anchors);
}

function liveCheck(idx) {
  const input = document.getElementById('type-input');
  if (!input) return;
  const val = normalizePhrase(input.value);
  const correct = normalizePhrase(PHRASES[idx].en);
  input.classList.toggle('correct-border', val === correct);
  input.classList.toggle('wrong-border', val !== correct && val.length > 0);
}

function revealHint(idx) {
  const words = PHRASES[idx].en.split(' ');
  hintRevealed = Math.min(hintRevealed + 1, Math.ceil(words.length / 2));
  const shown = words.slice(0, hintRevealed).join(' ');
  const hidden = words.slice(hintRevealed).map(w => '_'.repeat(w.length)).join(' ');
  document.getElementById('hint-display').textContent = shown + (hidden ? ' ' + hidden : '');
}

function checkTyped(idx) {
  if (quizAnswered) return;
  const input = document.getElementById('type-input');
  if (!input) return;
  quizAnswered = true;
  input.disabled = true;
  const isCorrect = normalizePhrase(input.value) === normalizePhrase(PHRASES[idx].en);
  handleScoreUpdate(idx, isCorrect);
  triggerFeedback(isCorrect, PHRASES[idx].en, PHRASES[idx].rule, PHRASES[idx].anchors);
}

function checkAnswer(el, chosen, correct, idx) {
  if (quizAnswered) return;
  quizAnswered = true;
  document.querySelectorAll('.quiz-opt').forEach(o => o.classList.add('disabled'));
  const isCorrect = chosen === correct;
  handleScoreUpdate(idx, isCorrect);
  el.classList.add(isCorrect ? 'correct' : 'wrong');
  if (!isCorrect) {
    document.querySelectorAll('.quiz-opt').forEach(o => {
      if (o.textContent.trim() === correct) o.classList.add('correct');
    });
  }
  triggerFeedback(isCorrect, PHRASES[idx].en, PHRASES[idx].rule, PHRASES[idx].anchors);
}

function handleScoreUpdate(idx, isCorrect) {
  const practiceModes = ['dialogue', 'situation', 'flash', 'pattern', 'marathon'];
  if (practiceModes.includes(quizType)) {
    if (isCorrect) practiceScore++;
  } else if (isCorrect) {
    quizScore++;
  }
  Storage.updateWeight(idx, isCorrect);
  Storage.recordAnswer(isCorrect);
  updateProgress();
}

function triggerFeedback(isCorrect, correctPhrase, rule, anchors) {
  const fb = document.getElementById('quiz-fb');
  const nextBtn = document.getElementById('quiz-next');

  if (isCorrect) {
    fb.innerHTML = `<strong>✅ Чудово!</strong> Порядок слів правильний.`;
    fb.className = 'quiz-feedback ok';
    nextBtn.style.display = 'inline-block';
    nextBtn.disabled = false;
    nextBtn.textContent = 'Далі →';
  } else {
    fb.className = 'quiz-feedback fail';
    nextBtn.style.display = 'inline-block';
    nextBtn.disabled = true;
    let highlighted = highlightAnchors(correctPhrase, anchors);
    let secLeft = 3;
    const updateTimerText = () => {
      nextBtn.textContent = `Почекай (${secLeft}с), вчимо фразу...`;
      fb.innerHTML =
        '❌ <strong>Помилка! Ехо-память.</strong><br>' +
        'Прочитай речення вголос 3 рази:<br>' +
        '<span style="font-size:1.2rem;display:block;margin:8px 0;font-weight:700;color:var(--text);">' + highlighted + '</span>' +
        '<small style="color:var(--muted);font-style:italic;">' + (rule ? escapeHtml(rule) : '') + '</small>';
    };
    updateTimerText();
    const interval = setInterval(() => {
      secLeft--;
      if (secLeft <= 0) {
        clearInterval(interval);
        nextBtn.disabled = false;
        nextBtn.textContent = 'Далі →';
      } else updateTimerText();
    }, 1000);
  }
}

function nextQuestion() {
  const practiceModes = ['dialogue', 'situation', 'flash', 'pattern', 'marathon'];
  if (practiceModes.includes(quizType)) {
    advancePractice();
    return;
  }
  quizCurrent++;
  renderQuestion();
}

function showQuizResult() {
  const pct = Math.round(quizScore / quizQueue.length * 100);
  document.getElementById('quiz-q').innerHTML = `<span style="font-size:2.5rem">${pct >= 75 ? '🏆' : '📚'}</span>`;
  document.getElementById('quiz-hint').textContent = '';
  document.getElementById('quiz-opts-area').innerHTML = '';
  const resultMsg = pct >= 75
    ? 'Гарний результат! Мозок фіксує зв\'язки між словами.'
    : 'Не здавайся — повтори складні фрази в режимі «Ситуація» та «Діалог».';
  document.getElementById('quiz-fb').innerHTML =
    '<div class="quiz-score">Результат: <span>' + quizScore + ' / ' + quizQueue.length + '</span> (' + pct + '%)<br>' +
    '<span style="font-size:.85rem;color:var(--muted);font-weight:400">' + resultMsg + '</span></div>';
  document.getElementById('quiz-prog').textContent = 'Тест завершено!';
  document.getElementById('quiz-next').style.display = 'none';
  document.getElementById('quiz-restart').style.display = 'inline-block';
}


let practiceQueue = [];
let practiceCurrent = 0;
let practiceScore = 0;
let practiceAnswered = false;
let flashTimer = null;

function clearFlashTimer() {
  if (flashTimer) {
    clearInterval(flashTimer);
    flashTimer = null;
  }
}

function startDialogueQuiz() {
  quizType = 'dialogue';
  practiceQueue = buildPracticePool(DIALOGUES, 10, d => d.phraseIndex);
  practiceCurrent = 0;
  practiceScore = 0;
  practiceAnswered = false;
  document.getElementById('quiz-restart').style.display = 'none';
  renderDialogueQuestion();
}

function renderDialogueQuestion() {
  if (practiceCurrent >= practiceQueue.length) {
    showPracticeResult('діалогів');
    return;
  }
  const d = practiceQueue[practiceCurrent];
  const p = PHRASES[d.phraseIndex];
  practiceAnswered = false;

  document.getElementById('quiz-prog').textContent = `Діалог ${practiceCurrent + 1} / ${practiceQueue.length}`;
  document.getElementById('quiz-q').textContent = '💬 Обери репліку, що підходить до діалогу:';
  document.getElementById('quiz-hint').textContent = p.situation || '';
  document.getElementById('quiz-fb').textContent = '';
  document.getElementById('quiz-fb').className = 'quiz-feedback';
  document.getElementById('quiz-next').style.display = 'none';

  const dialogueHtml = d.lines.map((line, i) => {
    const text = i === d.blankIndex
      ? '<span class="dialogue-blank">___</span>'
      : escapeHtml(line.text);
    return `<div class="dialogue-line"><span class="dialogue-line speaker">${escapeHtml(line.speaker)}</span><br>${text}</div>`;
  }).join('');

  const opts = shuffle(d.options);
  const correct = d.answer || d.options[d.correctIndex] || p.en;

  document.getElementById('quiz-opts-area').innerHTML = `
    <div class="dialogue-box">${dialogueHtml}</div>
    <div class="quiz-options">${opts.map(o =>
      `<div class="quiz-opt" onclick="checkPracticeAnswer(this, '${escapeJsSingleQuotedString(o)}', '${escapeJsSingleQuotedString(correct)}', ${d.phraseIndex})">${escapeHtml(o)}</div>`
    ).join('')}</div>`;
}

function startSituationQuiz() {
  quizType = 'situation';
  practiceQueue = buildPracticePool(SITUATIONS, 12, s => s.phraseIndex);
  practiceCurrent = 0;
  practiceScore = 0;
  practiceAnswered = false;
  document.getElementById('quiz-restart').style.display = 'none';
  renderSituationQuestion();
}

function renderSituationQuestion() {
  if (practiceCurrent >= practiceQueue.length) {
    showPracticeResult('ситуацій');
    return;
  }
  const s = practiceQueue[practiceCurrent];
  const p = PHRASES[s.phraseIndex];
  practiceAnswered = false;

  document.getElementById('quiz-prog').textContent = `Ситуація ${practiceCurrent + 1} / ${practiceQueue.length}`;
  document.getElementById('quiz-q').innerHTML = `<span class="situation-badge">🎭 Ситуація</span><br>${escapeHtml(s.situation)}`;
  document.getElementById('quiz-hint').textContent = 'Яку фразу ти скажеш?';
  document.getElementById('quiz-fb').textContent = '';
  document.getElementById('quiz-next').style.display = 'none';

  const correct = s.options[s.correctIndex];
  document.getElementById('quiz-opts-area').innerHTML = `<div class="quiz-options" style="grid-template-columns:1fr;">${s.options.map(o =>
    `<div class="quiz-opt" onclick="checkPracticeAnswer(this, '${escapeJsSingleQuotedString(o)}', '${escapeJsSingleQuotedString(correct)}', ${s.phraseIndex})">${escapeHtml(o)}</div>`
  ).join('')}</div>`;
}

function startFlashQuiz() {
  clearFlashTimer();
  quizType = 'flash';
  practiceQueue = buildQuizPool(12);
  practiceCurrent = 0;
  practiceScore = 0;
  practiceAnswered = false;
  document.getElementById('quiz-restart').style.display = 'none';
  renderFlashQuestion();
}

function renderFlashQuestion() {
  if (practiceCurrent >= practiceQueue.length) {
    showPracticeResult('флеш-карток');
    return;
  }
  clearFlashTimer();

  const idx = practiceQueue[practiceCurrent];
  const p = PHRASES[idx];
  practiceAnswered = false;

  document.getElementById('quiz-prog').textContent = `Флеш ${practiceCurrent + 1} / ${practiceQueue.length}`;
  document.getElementById('quiz-q').textContent = '⚡ Запам\'ятай фразу!';
  document.getElementById('quiz-hint').textContent = '';
  document.getElementById('quiz-fb').textContent = '';
  document.getElementById('quiz-next').style.display = 'none';

  let countdown = 4;
  document.getElementById('quiz-opts-area').innerHTML = `
    <div class="flash-card" id="flash-card">${escapeHtml(p.ua)}</div>
    <div class="flash-timer" id="flash-timer">${countdown}</div>
    <p style="color:var(--muted);font-size:.82rem;">Зараз фраза зникне — обери правильний переклад</p>
    <div id="flash-opts" style="display:none"></div>`;

  flashTimer = setInterval(() => {
    countdown--;
    const timerEl = document.getElementById('flash-timer');
    if (timerEl) timerEl.textContent = countdown;
    if (countdown <= 0) {
      clearInterval(flashTimer);
      const card = document.getElementById('flash-card');
      if (card) { card.textContent = '❓'; card.classList.add('hidden'); }
      if (timerEl) timerEl.textContent = '';
      showFlashOptions(idx, p);
    }
  }, 1000);
}

function showFlashOptions(idx, p) {
  if (quizType !== 'flash' || practiceAnswered) return;
  const optsEl = document.getElementById('flash-opts');
  if (!optsEl) return;
  const wrongs = shuffle(PHRASES.filter((_, i) => i !== idx)).slice(0, 3).map(x => x.en);
  const opts = shuffle([p.en, ...wrongs]);
  optsEl.style.display = 'block';
  optsEl.innerHTML = `<div class="quiz-options">${opts.map(o =>
    `<div class="quiz-opt" onclick="checkPracticeAnswer(this, '${escapeJsSingleQuotedString(o)}', '${escapeJsSingleQuotedString(p.en)}', ${idx})">${escapeHtml(o)}</div>`
  ).join('')}</div>`;
}

function startPatternQuiz() {
  quizType = 'pattern';
  practiceQueue = buildPracticePool(GRAMMAR_RULES, 10, rule => {
    const related = findPhrasesByPatterns(rule.patterns);
    return (related[0] || { i: 0 }).i;
  }).map(rule => {
    const related = findPhrasesByPatterns(rule.patterns);
    const correct = related[0] || { p: PHRASES[0], i: 0 };
    const wrongItems = shuffle(PHRASES.map((p, i) => ({ p, i })).filter(x => x.i !== correct.i)).slice(0, 3);
    return { rule, correct, options: shuffle([correct, ...wrongItems]) };
  });
  practiceCurrent = 0;
  practiceScore = 0;
  renderPatternQuestion();
}

function renderPatternQuestion() {
  if (practiceCurrent >= practiceQueue.length) {
    showPracticeResult('патернів');
    return;
  }
  const item = practiceQueue[practiceCurrent];
  practiceAnswered = false;
  const correctPhrase = item.correct.p.en;

  document.getElementById('quiz-prog').textContent = `Патерн ${practiceCurrent + 1} / ${practiceQueue.length}`;
  document.getElementById('quiz-q').innerHTML = `Яка фраза використовує цей шаблон?<br><span class="rule-template" style="margin-top:10px;display:inline-block;">${escapeHtml(item.rule.template)}</span>`;
  document.getElementById('quiz-hint').textContent = item.rule.title;
  document.getElementById('quiz-fb').textContent = '';
  document.getElementById('quiz-next').style.display = 'none';

  document.getElementById('quiz-opts-area').innerHTML = `<div class="quiz-options" style="grid-template-columns:1fr;">${item.options.map(({ p, i }) =>
    `<div class="quiz-opt" onclick="checkPracticeAnswer(this, '${escapeJsSingleQuotedString(p.en)}', '${escapeJsSingleQuotedString(correctPhrase)}', ${i})">${escapeHtml(p.en)}</div>`
  ).join('')}</div>`;
}

function startMarathonQuiz() {
  quizType = 'marathon';
  const modes = ['en-ua', 'ua-en', 'fill', 'scramble'];
  const pool = buildQuizPool(12);
  practiceQueue = pool.map((idx, i) => ({ mode: modes[i % modes.length], idx }));
  practiceCurrent = 0;
  practiceScore = 0;
  practiceAnswered = false;
  document.getElementById('quiz-restart').style.display = 'none';
  renderMarathonQuestion();
}

function renderMarathonQuestion() {
  if (practiceCurrent >= practiceQueue.length) {
    showPracticeResult('марафону');
    return;
  }
  const item = practiceQueue[practiceCurrent];
  const p = PHRASES[item.idx];
  practiceAnswered = false;
  hintRevealed = 0;
  scrambleUserWords = [];

  const modeLabels = { 'en-ua': '🇬🇧→🇺🇦', 'ua-en': '🇺🇦→🇬🇧', fill: '🔤 Пропуск', scramble: '🧩 Конструктор' };
  document.getElementById('quiz-prog').textContent = `Марафон ${practiceCurrent + 1} / ${practiceQueue.length} · ${modeLabels[item.mode] || item.mode}`;
  document.getElementById('quiz-fb').textContent = '';
  document.getElementById('quiz-fb').className = 'quiz-feedback';
  document.getElementById('quiz-next').style.display = 'none';

  quizType = 'marathon';
  if (item.mode === 'scramble') renderScrambleQuestion(item.idx, p);
  else if (item.mode === 'fill') renderFillQuestion(item.idx, p);
  else renderChoiceQuestion(item.idx, p, item.mode);
}

function advancePractice() {
  practiceCurrent++;
  if (quizType === 'dialogue') renderDialogueQuestion();
  else if (quizType === 'situation') renderSituationQuestion();
  else if (quizType === 'flash') renderFlashQuestion();
  else if (quizType === 'pattern') renderPatternQuestion();
  else if (quizType === 'marathon') renderMarathonQuestion();
}

function checkPracticeAnswer(el, chosen, correct, idx) {
  if (practiceAnswered) return;
  practiceAnswered = true;
  document.querySelectorAll('.quiz-opt').forEach(o => o.classList.add('disabled'));
  const isCorrect = chosen === correct;
  if (isCorrect) practiceScore++;
  Storage.updateWeight(idx, isCorrect);
  Storage.recordAnswer(isCorrect);
  updateProgress();

  el.classList.add(isCorrect ? 'correct' : 'wrong');
  if (!isCorrect) {
    document.querySelectorAll('.quiz-opt').forEach(o => {
      if (o.textContent.trim() === correct) o.classList.add('correct');
    });
  }
  triggerFeedback(isCorrect, PHRASES[idx].en, PHRASES[idx].rule, PHRASES[idx].anchors);
}

function showPracticeResult(label) {
  const total = practiceQueue.length;
  const pct = Math.round(practiceScore / total * 100);
  document.getElementById('quiz-q').innerHTML = `<span style="font-size:2.5rem">${pct >= 75 ? '🏆' : '📚'}</span>`;
  document.getElementById('quiz-hint').textContent = '';
  document.getElementById('quiz-opts-area').innerHTML = '';
  document.getElementById('quiz-fb').innerHTML = `
    <div class="quiz-score">Результат (${label}): <span>${practiceScore} / ${total}</span> (${pct}%)</div>`;
  document.getElementById('quiz-prog').textContent = 'Завершено!';
  document.getElementById('quiz-next').style.display = 'none';
  document.getElementById('quiz-restart').style.display = 'inline-block';
}


function renderStats() {
  const hardCount = Object.values(Storage.phraseWeights).filter(w => w > 1).length;
  const accuracy = Storage.quizStats.total
    ? Math.round(Storage.quizStats.correct / Storage.quizStats.total * 100)
    : 0;

  document.getElementById('stats-grid').innerHTML = `
    <div class="stat-card"><div class="stat-num">${TOTAL}</div><div class="stat-label">Всього фраз</div></div>
    <div class="stat-card"><div class="stat-num" style="color:var(--green)">${Storage.learned.size}</div><div class="stat-label">Вивчено</div></div>
    <div class="stat-card"><div class="stat-num" style="color:var(--red)">${hardCount}</div><div class="stat-label">У зоні ризику</div></div>
    <div class="stat-card"><div class="stat-num">${Math.round(Storage.learned.size / TOTAL * 100)}%</div><div class="stat-label">Прогрес</div></div>
    <div class="stat-card"><div class="stat-num" style="color:var(--yellow)">${accuracy}%</div><div class="stat-label">Точність відповідей</div></div>
    <div class="stat-card"><div class="stat-num">${Storage.quizStats.total}</div><div class="stat-label">Всього вправ</div></div>
  `;

  document.getElementById('cat-stats').innerHTML = Object.entries(CATEGORIES).map(([key, label]) => {
    const tc = PHRASES.filter(p => p.cat === key).length;
    const lc = PHRASES.filter((p, i) => p.cat === key && Storage.learned.has(i)).length;
    const pct = tc ? Math.round(lc / tc * 100) : 0;
    return `<div class="category-stat">
      <span style="font-size:.85rem;min-width:140px">${label}</span>
      <div class="cat-bar-wrap"><div class="cat-bar" style="width:${pct}%"></div></div>
      <span style="font-size:.8rem;color:var(--muted);min-width:60px;text-align:right">${lc}/${tc}</span>
    </div>`;
  }).join('');
}

function resetProgress() {
  if (!confirm('Скинути весь прогрес?')) return;
  Storage.reset();
  updateProgress();
  renderCards();
  if (currentTab === 'stats') renderStats();
}


let currentTab = 'browse';

function updateProgress() {
  const n = Storage.learned.size;
  document.getElementById('learned-count').textContent = n;
  document.getElementById('total-count').textContent = TOTAL;
  document.getElementById('prog-bar').style.width = (n / TOTAL * 100) + '%';

  const hardCount = Object.keys(Storage.phraseWeights).filter(k => Storage.phraseWeights[k] > 1).length;
  const unseen = PHRASES.filter((_, i) =>
    !Object.prototype.hasOwnProperty.call(Storage.phraseWeights, i) && !Storage.learned.has(i)
  ).length;
  document.getElementById('prog-label').textContent = hardCount > 0
    ? `⚠️ ${hardCount} складних фраз — тест фокусується на них!`
    : unseen > 0
      ? `Вивчено: ${n} з ${TOTAL}. У тестах пріоритет: помилки → нові (${unseen}) → вивчені.`
      : `Вивчено: ${n} з ${TOTAL}. Повторюються фрази з помилками.`;
}

function setTab(tab) {
  if (typeof clearFlashTimer === 'function') clearFlashTimer();
  Speech.stop();
  currentTab = tab;
  ['browse', 'rules', 'quiz', 'stats'].forEach(t => {
    const el = document.getElementById('tab-' + t);
    if (el) el.style.display = t === tab ? '' : 'none';
  });
  document.querySelectorAll('.tab').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-tab') === tab);
  });
  document.getElementById('filters').style.display = tab === 'browse' ? '' : 'none';

  if (tab === 'quiz') startQuiz();
  if (tab === 'stats') renderStats();
  if (tab === 'rules') renderRules();
}

function bootApp() {
  Speech.init();
  renderCards();
  updateProgress();

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
    if (document.getElementById('modal').classList.contains('open')) {
      if (e.key === 'ArrowRight') modalNext();
      if (e.key === 'ArrowLeft') modalPrev();
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootApp);
} else {
  bootApp();
}


if (typeof PHRASES !== 'undefined' && typeof TOTAL !== 'undefined') {
  const ok = document.getElementById('bundle-ok');
  if (ok) ok.style.display = 'block';
  console.log('Travel Phrases v18 loaded OK, phrases:', TOTAL);
}
