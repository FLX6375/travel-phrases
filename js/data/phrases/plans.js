// 📅 Плани — 16 phrases
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
  },
  {
    "en": "Let's meet halfway.",
    "ua": "Зустрінемось посередині.",
    "ex": "— It's far for both of us — let's meet halfway.",
    "tip": "Meet halfway = компроміс / місце.",
    "cat": "plans",
    "tag": "📅 Плани",
    "anchors": [
      "meet halfway"
    ],
    "situation": "Коли домовляєшся про зустріч або плани",
    "examples": [
      "— It's far for both of us — let's meet halfway.",
      "— Let's meet halfway. — Sure, no problem."
    ]
  },
  {
    "en": "I'm free all afternoon.",
    "ua": "Я вільний увесь день.",
    "ex": "— When can you meet? — I'm free all afternoon.",
    "tip": "Free = вільний у часі.",
    "cat": "plans",
    "tag": "📅 Плани",
    "anchors": [
      "free all afternoon"
    ],
    "situation": "Коли домовляєшся про зустріч або плани",
    "examples": [
      "— When can you meet? — I'm free all afternoon.",
      "— I'm free all afternoon. — Sure, no problem."
    ]
  },
  {
    "en": "Can we reschedule?",
    "ua": "Чи можемо перенести?",
    "ex": "— Something came up — can we reschedule?",
    "tip": "Reschedule = перенести на інший час.",
    "cat": "plans",
    "tag": "📅 Плани",
    "anchors": [
      "Can we reschedule"
    ],
    "situation": "Коли домовляєшся про зустріч або плани",
    "examples": [
      "— Something came up — can we reschedule?",
      "— Can we reschedule? — Sure, no problem."
    ]
  },
  {
    "en": "I'll be there in ten minutes.",
    "ua": "Буду через десять хвилин.",
    "ex": "— Where are you? — I'll be there in ten minutes.",
    "tip": "Be there in = буду через.",
    "cat": "plans",
    "tag": "📅 Плани",
    "anchors": [
      "be there in"
    ],
    "situation": "Коли домовляєшся про зустріч або плани",
    "examples": [
      "— Where are you? — I'll be there in ten minutes.",
      "— I'll be there in ten minutes. — Sure, no problem."
    ]
  },
  {
    "en": "Shall we say seven?",
    "ua": "Домовимось на сьому?",
    "ex": "— Shall we say seven at the usual place?",
    "tip": "Shall we say = пропозиція часу.",
    "cat": "plans",
    "tag": "📅 Плани",
    "anchors": [
      "Shall we say"
    ],
    "situation": "Коли домовляєшся про зустріч або плани",
    "examples": [
      "— Shall we say seven at the usual place?",
      "— Shall we say seven? — Sure, no problem."
    ]
  },
  {
    "en": "I'm running about fifteen minutes late.",
    "ua": "Запізнююсь приблизно на 15 хв.",
    "ex": "— I'm running about fifteen minutes late — save me a seat.",
    "tip": "Running late + time = на скільки.",
    "cat": "plans",
    "tag": "📅 Плани",
    "anchors": [
      "fifteen minutes late"
    ],
    "situation": "Коли домовляєшся про зустріч або плани",
    "examples": [
      "— I'm running about fifteen minutes late — save me a seat.",
      "— I'm running about fifteen minutes late. — Sure, no problem."
    ]
  },
  {
    "en": "Are you still up for it?",
    "ua": "Ти все ще в справі?",
    "ex": "— Are you still up for hiking on Sunday?",
    "tip": "Up for it = готовий / хочеш.",
    "cat": "plans",
    "tag": "📅 Плани",
    "anchors": [
      "still up for"
    ],
    "situation": "Коли домовляєшся про зустріч або плани",
    "examples": [
      "— Are you still up for hiking on Sunday?",
      "— Are you still up for it? — Sure, no problem."
    ]
  },
  {
    "en": "I'll send you the details.",
    "ua": "Надішлю деталі.",
    "ex": "— I'll send you the details by text tonight.",
    "tip": "Details = деталі / адреса / час.",
    "cat": "plans",
    "tag": "📅 Плани",
    "anchors": [
      "send you the details"
    ],
    "situation": "Коли домовляєшся про зустріч або плани",
    "examples": [
      "— I'll send you the details by text tonight.",
      "— I'll send you the details. — Sure, no problem."
    ]
  },
  {
    "en": "Does Saturday work?",
    "ua": "Субота підходить?",
    "ex": "— Does Saturday work for you? — Perfect!",
    "tip": "Does [day] work? — типове питання.",
    "cat": "plans",
    "tag": "📅 Плани",
    "anchors": [
      "Does Saturday work"
    ],
    "situation": "Коли домовляєшся про зустріч або плани",
    "examples": [
      "— Does Saturday work for you? — Perfect!",
      "— Does Saturday work? — Sure, no problem."
    ]
  },
  {
    "en": "Are we still on for tonight?",
    "ua": "Ми все ще домовлені на вечір?",
    "ex": "— Are we still on for tonight? — Yes, see you at eight!",
    "tip": "Still on for = план у силі.",
    "cat": "plans",
    "tag": "📅 Плани",
    "anchors": [
      "still on for"
    ],
    "situation": "Коли домовляєшся про плани",
    "examples": [
      "— Are we still on for tonight? — Yes, see you at eight!",
      "— Are we still on for tonight? — Perfect — see you then!"
    ]
  }
];
