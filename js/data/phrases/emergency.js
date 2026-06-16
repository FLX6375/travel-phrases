// 🆘 Допомога — 20 phrases
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
  },
  {
    "en": "I need a doctor urgently.",
    "ua": "Мені терміново потрібен лікар.",
    "ex": "— I need a doctor urgently. — I'll call one right away.",
    "tip": "Urgently = терміново.",
    "cat": "emergency",
    "tag": "🆘 Допомога",
    "anchors": [
      "doctor urgently"
    ],
    "situation": "У складній або екстреній ситуації",
    "examples": [
      "— I need a doctor urgently. — I'll call one right away.",
      "— I need a doctor urgently. — Sure, no problem."
    ]
  },
  {
    "en": "I've been robbed.",
    "ua": "Мене пограбували.",
    "ex": "— I've been robbed — I need the police.",
    "tip": "Robbed = пограбований.",
    "cat": "emergency",
    "tag": "🆘 Допомога",
    "anchors": [
      "been robbed"
    ],
    "situation": "У складній або екстреній ситуації",
    "examples": [
      "— I've been robbed — I need the police.",
      "— I've been robbed. — Sure, no problem."
    ]
  },
  {
    "en": "I feel dizzy.",
    "ua": "Мені закрутилася голова.",
    "ex": "— I feel dizzy — can I sit down?",
    "tip": "Dizzy = запаморочення.",
    "cat": "emergency",
    "tag": "🆘 Допомога",
    "anchors": [
      "feel dizzy"
    ],
    "situation": "У складній або екстреній ситуації",
    "examples": [
      "— I feel dizzy — can I sit down?",
      "— I feel dizzy. — Sure, no problem."
    ]
  },
  {
    "en": "Where is the nearest hospital?",
    "ua": "Де найближча лікарня?",
    "ex": "— Where is the nearest hospital? — Two blocks east.",
    "tip": "Nearest hospital = найближча лікарня.",
    "cat": "emergency",
    "tag": "🆘 Допомога",
    "anchors": [
      "nearest hospital"
    ],
    "situation": "У складній або екстреній ситуації",
    "examples": [
      "— Where is the nearest hospital? — Two blocks east.",
      "— Where is the nearest hospital? — Sure, no problem."
    ]
  },
  {
    "en": "I lost my passport.",
    "ua": "Я загубив паспорт.",
    "ex": "— I lost my passport — where is the embassy?",
    "tip": "Embassy = посольство.",
    "cat": "emergency",
    "tag": "🆘 Допомога",
    "anchors": [
      "lost my passport"
    ],
    "situation": "У складній або екстреній ситуації",
    "examples": [
      "— I lost my passport — where is the embassy?",
      "— I lost my passport. — Sure, no problem."
    ]
  },
  {
    "en": "There's been an accident.",
    "ua": "Сталася аварія.",
    "ex": "— There's been an accident — someone call help!",
    "tip": "Accident = аварія / нещасний випадок.",
    "cat": "emergency",
    "tag": "🆘 Допомога",
    "anchors": [
      "been an accident"
    ],
    "situation": "У складній або екстреній ситуації",
    "examples": [
      "— There's been an accident — someone call help!",
      "— There's been an accident. — Sure, no problem."
    ]
  },
  {
    "en": "I need help — I don't speak English well.",
    "ua": "Допоможіть — я погано знаю англійську.",
    "ex": "— I need help — I don't speak English well.",
    "tip": "Use when you need an interpreter.",
    "cat": "emergency",
    "tag": "🆘 Допомога",
    "anchors": [
      "I need help"
    ],
    "situation": "У складній або екстреній ситуації",
    "examples": [
      "— I need help — I don't speak English well.",
      "— I need help — I don't speak English well. — Sure, no problem."
    ]
  },
  {
    "en": "Is there a pharmacy open now?",
    "ua": "Чи є аптека зараз відкрита?",
    "ex": "— Is there a pharmacy open now? — The one on Main Street, 24 hours.",
    "tip": "Pharmacy = аптека.",
    "cat": "emergency",
    "tag": "🆘 Допомога",
    "anchors": [
      "pharmacy open"
    ],
    "situation": "У складній або екстреній ситуації",
    "examples": [
      "— Is there a pharmacy open now? — The one on Main Street, 24 hours.",
      "— Is there a pharmacy open now? — Sure, no problem."
    ]
  },
  {
    "en": "My phone was stolen.",
    "ua": "У мене вкрали телефон.",
    "ex": "— My phone was stolen — I need to block my SIM.",
    "tip": "Stolen = вкрали.",
    "cat": "emergency",
    "tag": "🆘 Допомога",
    "anchors": [
      "phone was stolen"
    ],
    "situation": "У складній або екстреній ситуації",
    "examples": [
      "— My phone was stolen — I need to block my SIM.",
      "— My phone was stolen. — Sure, no problem."
    ]
  },
  {
    "en": "I'm having trouble breathing.",
    "ua": "Мені важко дихати.",
    "ex": "— I'm having trouble breathing — please help!",
    "tip": "Trouble breathing = проблеми з диханням.",
    "cat": "emergency",
    "tag": "🆘 Допомога",
    "anchors": [
      "trouble breathing"
    ],
    "situation": "У складній або екстреній ситуації",
    "examples": [
      "— I'm having trouble breathing — please help!",
      "— I'm having trouble breathing. — Sure, no problem."
    ]
  },
  {
    "en": "I need to report a theft.",
    "ua": "Мені треба заявити про крадіжку.",
    "ex": "— I need to report a theft at the hotel.",
    "tip": "Report a theft = заявити про крадіжку.",
    "cat": "emergency",
    "tag": "🆘 Допомога",
    "anchors": [
      "report a theft"
    ],
    "situation": "У складній ситуації",
    "examples": [
      "— I need to report a theft at the hotel.",
      "— I need to report a theft. — I'll call for help right now."
    ]
  },
  {
    "en": "My wallet is missing.",
    "ua": "Мій гаманець зник.",
    "ex": "— My wallet is missing — I think I left it in the taxi.",
    "tip": "Missing = зник / загубився.",
    "cat": "emergency",
    "tag": "🆘 Допомога",
    "anchors": [
      "wallet is missing"
    ],
    "situation": "У складній ситуації",
    "examples": [
      "— My wallet is missing — I think I left it in the taxi.",
      "— My wallet is missing. — Stay calm — help is on the way."
    ]
  }
];
