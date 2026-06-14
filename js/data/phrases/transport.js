// 🚌 Транспорт — 19 phrases
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
  },
  {
    "en": "Where is the check-in desk?",
    "ua": "Де стійка реєстрації?",
    "ex": "— Where is the check-in desk? — Terminal 2, departures level.",
    "tip": "Check-in desk = реєстрація на рейс.",
    "cat": "transport",
    "tag": "🚌 Транспорт",
    "anchors": [
      "check-in desk"
    ],
    "situation": "В аеропорту",
    "examples": [
      "— Where is the check-in desk? — Terminal 2, departures level.",
      "— Where is the check-in desk? — Sure, no problem."
    ]
  },
  {
    "en": "Which gate is my flight?",
    "ua": "Який гейт мого рейсу?",
    "ex": "— Which gate is my flight? — Gate B12, boarding starts at 6:30.",
    "tip": "Gate = вихід на посадку.",
    "cat": "transport",
    "tag": "🚌 Транспорт",
    "anchors": [
      "Which gate"
    ],
    "situation": "В аеропорту",
    "examples": [
      "— Which gate is my flight? — Gate B12, boarding starts at 6:30.",
      "— Which gate is my flight? — Sure, no problem."
    ]
  },
  {
    "en": "Is my flight on time?",
    "ua": "Мій рейс вчасно?",
    "ex": "— Is my flight on time? — There's a 40-minute delay, sorry.",
    "tip": "On time = без затримки. Delay = затримка.",
    "cat": "transport",
    "tag": "🚌 Транспорт",
    "anchors": [
      "on time"
    ],
    "situation": "В аеропорту біля табло",
    "examples": [
      "— Is my flight on time? — There's a 40-minute delay, sorry.",
      "— Is my flight on time? — Sure, no problem."
    ]
  },
  {
    "en": "Where can I collect my baggage?",
    "ua": "Де забрати багаж?",
    "ex": "— Where can I collect my baggage? — Carousel 3, just follow the signs.",
    "tip": "Baggage / luggage carousel = стрічка видачі багажу.",
    "cat": "transport",
    "tag": "🚌 Транспорт",
    "anchors": [
      "collect my baggage"
    ],
    "situation": "В аеропорту після прильоту",
    "examples": [
      "— Where can I collect my baggage? — Carousel 3, just follow the signs.",
      "— Where can I collect my baggage? — Sure, no problem."
    ]
  },
  {
    "en": "Do I need to take my laptop out at security?",
    "ua": "Чи треба діставати ноутбук на перевірці?",
    "ex": "— Do I need to take my laptop out? — Yes, and liquids go in a clear bag.",
    "tip": "Security = перевірка безпеки.",
    "cat": "transport",
    "tag": "🚌 Транспорт",
    "anchors": [
      "take my laptop out"
    ],
    "situation": "В аеропорту на security",
    "examples": [
      "— Do I need to take my laptop out? — Yes, and liquids go in a clear bag.",
      "— Do I need to take my laptop out at security? — Sure, no problem."
    ]
  }
];
