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
