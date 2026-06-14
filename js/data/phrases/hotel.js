// 🏨 Готель — 16 phrases
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
  },
  {
    "en": "Do you have a bed in a dorm room?",
    "ua": "Чи є ліжко в загальному номері?",
    "ex": "— Do you have a bed in a dorm room? — Yes, we have one left in the 6-bed dorm.",
    "tip": "Dorm room = кімната з кількома ліжками в хостелі.",
    "cat": "hotel",
    "tag": "🏨 Готель",
    "anchors": [
      "dorm room"
    ],
    "situation": "В хостелі на рецепції",
    "examples": [
      "— Do you have a bed in a dorm room? — Yes, we have one left in the 6-bed dorm.",
      "— Do you have a bed in a dorm room? — Sure, no problem."
    ]
  },
  {
    "en": "Is there a kitchen I can use?",
    "ua": "Чи є кухня, якою я можу користуватися?",
    "ex": "— Is there a kitchen I can use? — Yes, it's on the second floor.",
    "tip": "Kitchen I can use — типова фраза в хостелах.",
    "cat": "hotel",
    "tag": "🏨 Готель",
    "anchors": [
      "kitchen I can use"
    ],
    "situation": "В хостелі",
    "examples": [
      "— Is there a kitchen I can use? — Yes, it's on the second floor.",
      "— Is there a kitchen I can use? — Sure, no problem."
    ]
  },
  {
    "en": "Could I leave my bag here after check-out?",
    "ua": "Чи можна залишити сумку після виїзду?",
    "ex": "— Could I leave my bag here after check-out? — Of course, we have a storage room.",
    "tip": "Leave my bag = залишити багаж.",
    "cat": "hotel",
    "tag": "🏨 Готель",
    "anchors": [
      "leave my bag"
    ],
    "situation": "В хостелі після check-out",
    "examples": [
      "— Could I leave my bag here after check-out? — Of course, we have a storage room.",
      "— Could I leave my bag here after check-out? — Sure, no problem."
    ]
  },
  {
    "en": "What time are the quiet hours?",
    "ua": "О котрій годині тиха година?",
    "ex": "— What time are the quiet hours? — From 11 PM to 8 AM, please.",
    "tip": "Quiet hours = коли не можна шуміти.",
    "cat": "hotel",
    "tag": "🏨 Готель",
    "anchors": [
      "quiet hours"
    ],
    "situation": "В хостелі",
    "examples": [
      "— What time are the quiet hours? — From 11 PM to 8 AM, please.",
      "— What time are the quiet hours? — Sure, no problem."
    ]
  },
  {
    "en": "Is breakfast included or do I pay extra?",
    "ua": "Сніданок включений чи платно окремо?",
    "ex": "— Is breakfast included? — It's five euros extra.",
    "tip": "Included or pay extra — уточнення в хостелі.",
    "cat": "hotel",
    "tag": "🏨 Готель",
    "anchors": [
      "breakfast included"
    ],
    "situation": "В хостелі на рецепції",
    "examples": [
      "— Is breakfast included? — It's five euros extra.",
      "— Is breakfast included or do I pay extra? — Sure, no problem."
    ]
  }
];
