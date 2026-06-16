// 🛍️ Магазин — 26 phrases
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
  },
  {
    "en": "Do you have this in a smaller size?",
    "ua": "Чи є менший розмір?",
    "ex": "— Do you have this in a smaller size? — Let me check in the back.",
    "tip": "Size = розмір одягу.",
    "cat": "shop",
    "tag": "🛍️ Магазин",
    "anchors": [
      "smaller size"
    ],
    "situation": "У магазині під час покупок",
    "examples": [
      "— Do you have this in a smaller size? — Let me check in the back.",
      "— Do you have this in a smaller size? — Sure, no problem."
    ]
  },
  {
    "en": "Do you offer tax-free shopping?",
    "ua": "Чи є tax-free для туристів?",
    "ex": "— Do you offer tax-free shopping? — Yes, with your passport.",
    "tip": "Tax-free = повернення ПДВ.",
    "cat": "shop",
    "tag": "🛍️ Магазин",
    "anchors": [
      "tax-free"
    ],
    "situation": "У магазині під час покупок",
    "examples": [
      "— Do you offer tax-free shopping? — Yes, with your passport.",
      "— Do you offer tax-free shopping? — Sure, no problem."
    ]
  },
  {
    "en": "Could I get a gift receipt?",
    "ua": "Чи можна чек для подарунка?",
    "ex": "— Could I get a gift receipt? — Of course — no price shown.",
    "tip": "Gift receipt = чек без ціни.",
    "cat": "shop",
    "tag": "🛍️ Магазин",
    "anchors": [
      "gift receipt"
    ],
    "situation": "У магазині під час покупок",
    "examples": [
      "— Could I get a gift receipt? — Of course — no price shown.",
      "— Could I get a gift receipt? — Sure, no problem."
    ]
  },
  {
    "en": "Is this available in other colours?",
    "ua": "Чи є інші кольори?",
    "ex": "— Is this available in other colours? — We have blue and grey.",
    "tip": "Available in = доступний у.",
    "cat": "shop",
    "tag": "🛍️ Магазин",
    "anchors": [
      "other colours"
    ],
    "situation": "У магазині під час покупок",
    "examples": [
      "— Is this available in other colours? — We have blue and grey.",
      "— Is this available in other colours? — Sure, no problem."
    ]
  },
  {
    "en": "Where is the checkout?",
    "ua": "Де каса?",
    "ex": "— Where is the checkout? — Just follow the signs.",
    "tip": "Checkout = каса.",
    "cat": "shop",
    "tag": "🛍️ Магазин",
    "anchors": [
      "checkout"
    ],
    "situation": "У магазині під час покупок",
    "examples": [
      "— Where is the checkout? — Just follow the signs.",
      "— Where is the checkout? — Sure, no problem."
    ]
  },
  {
    "en": "Do you ship internationally?",
    "ua": "Чи доставляєте за кордон?",
    "ex": "— Do you ship internationally? — Yes, through our website.",
    "tip": "Ship = доставляти.",
    "cat": "shop",
    "tag": "🛍️ Магазин",
    "anchors": [
      "ship internationally"
    ],
    "situation": "У магазині під час покупок",
    "examples": [
      "— Do you ship internationally? — Yes, through our website.",
      "— Do you ship internationally? — Sure, no problem."
    ]
  },
  {
    "en": "I'd like to return this.",
    "ua": "Хочу повернути це.",
    "ex": "— I'd like to return this — I have the receipt.",
    "tip": "Return = повернути товар.",
    "cat": "shop",
    "tag": "🛍️ Магазин",
    "anchors": [
      "return this"
    ],
    "situation": "У магазині під час покупок",
    "examples": [
      "— I'd like to return this — I have the receipt.",
      "— I'd like to return this. — Sure, no problem."
    ]
  },
  {
    "en": "Is there a student discount?",
    "ua": "Чи є знижка для студентів?",
    "ex": "— Is there a student discount? — Ten percent with ID.",
    "tip": "Student discount = студентська знижка.",
    "cat": "shop",
    "tag": "🛍️ Магазин",
    "anchors": [
      "student discount"
    ],
    "situation": "У магазині під час покупок",
    "examples": [
      "— Is there a student discount? — Ten percent with ID.",
      "— Is there a student discount? — Sure, no problem."
    ]
  },
  {
    "en": "Could you wrap it as a gift?",
    "ua": "Чи можна упакувати як подарунок?",
    "ex": "— Could you wrap it as a gift? — Sure, no extra charge.",
    "tip": "Wrap as a gift = подарункове пакування.",
    "cat": "shop",
    "tag": "🛍️ Магазин",
    "anchors": [
      "wrap it as a gift"
    ],
    "situation": "У магазині під час покупок",
    "examples": [
      "— Could you wrap it as a gift? — Sure, no extra charge.",
      "— Could you wrap it as a gift? — Sure, no problem."
    ]
  },
  {
    "en": "Do you have a loyalty card?",
    "ua": "Чи є карта лояльності?",
    "ex": "— Do you have a loyalty card? — Yes, you get ten percent off.",
    "tip": "Loyalty card = карта постійного клієнта.",
    "cat": "shop",
    "tag": "🛍️ Магазин",
    "anchors": [
      "loyalty card"
    ],
    "situation": "У магазині",
    "examples": [
      "— Do you have a loyalty card? — Yes, you get ten percent off.",
      "— Do you have a loyalty card? — Let me check in the back for you."
    ]
  },
  {
    "en": "Can I pay in instalments?",
    "ua": "Чи можна оплатити частинами?",
    "ex": "— Can I pay in instalments? — Only for purchases over two hundred.",
    "tip": "Instalments = розстрочка.",
    "cat": "shop",
    "tag": "🛍️ Магазин",
    "anchors": [
      "instalments"
    ],
    "situation": "У магазині",
    "examples": [
      "— Can I pay in instalments? — Only for purchases over two hundred.",
      "— Can I pay in instalments? — Sure — the fitting rooms are over there."
    ]
  }
];
