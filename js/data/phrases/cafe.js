// ☕ Kафе — 27 phrases
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
  },
  {
    "en": "Could we get a table by the window?",
    "ua": "Чи можна столик біля вікна?",
    "ex": "— Could we get a table by the window? — Sure, follow me.",
    "tip": "By the window = біля вікна.",
    "cat": "cafe",
    "tag": "☕ Кафе",
    "anchors": [
      "table by the window"
    ],
    "situation": "У кафе",
    "examples": [
      "— Could we get a table by the window? — Sure, follow me.",
      "— Could we get a table by the window? — Sure, no problem."
    ]
  },
  {
    "en": "Is there free Wi-Fi here?",
    "ua": "Тут є безкоштовний Wi-Fi?",
    "ex": "— Is there free Wi-Fi here? — Yes, the password is on the menu.",
    "tip": "Free Wi-Fi — майже в кожному кафе.",
    "cat": "cafe",
    "tag": "☕ Кафе",
    "anchors": [
      "free Wi-Fi"
    ],
    "situation": "У кафе",
    "examples": [
      "— Is there free Wi-Fi here? — Yes, the password is on the menu.",
      "— Is there free Wi-Fi here? — Sure, no problem."
    ]
  },
  {
    "en": "Could we split the bill?",
    "ua": "Можемо розділити рахунок?",
    "ex": "— Could we split the bill? — Of course, together or separately?",
    "tip": "Split the bill = розділити оплату.",
    "cat": "cafe",
    "tag": "☕ Кафе",
    "anchors": [
      "split the bill"
    ],
    "situation": "У кафе після їжі",
    "examples": [
      "— Could we split the bill? — Of course, together or separately?",
      "— Could we split the bill? — Sure, no problem."
    ]
  },
  {
    "en": "Could I have a refill, please?",
    "ua": "Чи можна долити ще?",
    "ex": "— Could I have a refill, please? — Sure, coffee or tea?",
    "tip": "Refill = повторне наповнення (кава/чай).",
    "cat": "cafe",
    "tag": "☕ Кафе",
    "anchors": [
      "refill"
    ],
    "situation": "У кафе",
    "examples": [
      "— Could I have a refill, please? — Sure, coffee or tea?",
      "— Could I have a refill, please? — Sure, no problem."
    ]
  },
  {
    "en": "Is this table reserved?",
    "ua": "Цей столик зарезервований?",
    "ex": "— Is this table reserved? — No, please sit wherever you like.",
    "tip": "Reserved = зарезервований.",
    "cat": "cafe",
    "tag": "☕ Кафе",
    "anchors": [
      "table reserved"
    ],
    "situation": "У кафе",
    "examples": [
      "— Is this table reserved? — No, please sit wherever you like.",
      "— Is this table reserved? — Sure, no problem."
    ]
  },
  {
    "en": "Could I see the dessert menu?",
    "ua": "Чи можна меню десертів?",
    "ex": "— Could I see the dessert menu? — Here you are.",
    "tip": "Dessert menu = меню солодкого.",
    "cat": "cafe",
    "tag": "☕ Кафе",
    "anchors": [
      "dessert menu"
    ],
    "situation": "У кафе або ресторані",
    "examples": [
      "— Could I see the dessert menu? — Here you are.",
      "— Could I see the dessert menu? — Sure, no problem."
    ]
  },
  {
    "en": "I'm allergic to nuts.",
    "ua": "У мене алергія на горіхи.",
    "ex": "— I'm allergic to nuts — is this safe?",
    "tip": "Allergic to = алергія на.",
    "cat": "cafe",
    "tag": "☕ Кафе",
    "anchors": [
      "allergic to nuts"
    ],
    "situation": "У кафе або ресторані",
    "examples": [
      "— I'm allergic to nuts — is this safe?",
      "— I'm allergic to nuts. — Sure, no problem."
    ]
  },
  {
    "en": "Could we have the bill, please?",
    "ua": "Рахунок, будь ласка.",
    "ex": "— Could we have the bill, please? — Of course, I'll bring it now.",
    "tip": "Bill / check = рахунок (US/UK).",
    "cat": "cafe",
    "tag": "☕ Кафе",
    "anchors": [
      "the bill"
    ],
    "situation": "У кафе або ресторані",
    "examples": [
      "— Could we have the bill, please? — Of course, I'll bring it now.",
      "— Could we have the bill, please? — Sure, no problem."
    ]
  },
  {
    "en": "Is tap water free?",
    "ua": "Вода з-під крана безкоштовна?",
    "ex": "— Is tap water free? — Yes, I'll bring a jug.",
    "tip": "Tap water = вода з крану.",
    "cat": "cafe",
    "tag": "☕ Кафе",
    "anchors": [
      "tap water"
    ],
    "situation": "У кафе або ресторані",
    "examples": [
      "— Is tap water free? — Yes, I'll bring a jug.",
      "— Is tap water free? — Sure, no problem."
    ]
  },
  {
    "en": "Could I order takeaway?",
    "ua": "Чи можна на винос?",
    "ex": "— Could I order takeaway? — Sure — here's the menu.",
    "tip": "Takeaway / to go = на винос.",
    "cat": "cafe",
    "tag": "☕ Кафе",
    "anchors": [
      "order takeaway"
    ],
    "situation": "У кафе або ресторані",
    "examples": [
      "— Could I order takeaway? — Sure — here's the menu.",
      "— Could I order takeaway? — Sure, no problem."
    ]
  },
  {
    "en": "Could I have it without onions?",
    "ua": "Без цибулі, будь ласка.",
    "ex": "— Could I have it without onions, please? — No problem.",
    "tip": "Without = без (інгредієнта).",
    "cat": "cafe",
    "tag": "☕ Кафе",
    "anchors": [
      "without onions"
    ],
    "situation": "У кафе або ресторані",
    "examples": [
      "— Could I have it without onions, please? — No problem.",
      "— Could I have it without onions? — Sure, no problem."
    ]
  },
  {
    "en": "Is there a vegetarian option?",
    "ua": "Чи є вегетаріанська страва?",
    "ex": "— Is there a vegetarian option? — Yes, the pasta primavera.",
    "tip": "Vegetarian option = без м'яса.",
    "cat": "cafe",
    "tag": "☕ Кафе",
    "anchors": [
      "vegetarian option"
    ],
    "situation": "У кафе або ресторані",
    "examples": [
      "— Is there a vegetarian option? — Yes, the pasta primavera.",
      "— Is there a vegetarian option? — Sure, no problem."
    ]
  },
  {
    "en": "Could we sit outside?",
    "ua": "Чи можна сісти на вулиці?",
    "ex": "— Could we sit outside? — Sure, pick any table on the terrace.",
    "tip": "Sit outside = на терасі.",
    "cat": "cafe",
    "tag": "☕ Кафе",
    "anchors": [
      "sit outside"
    ],
    "situation": "У кафе або ресторані",
    "examples": [
      "— Could we sit outside? — Sure, pick any table on the terrace.",
      "— Could we sit outside? — Sure, no problem."
    ]
  },
  {
    "en": "How long is the wait?",
    "ua": "Скільки чекати?",
    "ex": "— How long is the wait for a table? — About twenty minutes.",
    "tip": "Wait = очікування.",
    "cat": "cafe",
    "tag": "☕ Кафе",
    "anchors": [
      "How long is the wait"
    ],
    "situation": "У кафе або ресторані",
    "examples": [
      "— How long is the wait for a table? — About twenty minutes.",
      "— How long is the wait? — Sure, no problem."
    ]
  },
  {
    "en": "Could I have a doggy bag?",
    "ua": "Чи можна упакувати залишки?",
    "ex": "— Could I have a doggy bag? — Of course, I'll pack it up.",
    "tip": "Doggy bag = контейнер для залишків їжі.",
    "cat": "cafe",
    "tag": "☕ Kафе",
    "anchors": [
      "doggy bag"
    ],
    "situation": "У кафе",
    "examples": [
      "— Could I have a doggy bag? — Of course, I'll pack it up.",
      "— Could I have a doggy bag? — Of course. Anything to drink?"
    ]
  },
  {
    "en": "Is service included?",
    "ua": "Чи включено обслуговування?",
    "ex": "— Is service included in the bill? — Yes, but tips are welcome.",
    "tip": "Service charge = плата за обслуговування.",
    "cat": "cafe",
    "tag": "☕ Kафе",
    "anchors": [
      "service included"
    ],
    "situation": "У кафе",
    "examples": [
      "— Is service included in the bill? — Yes, but tips are welcome.",
      "— Is service included? — Sure — I'll bring that over in a moment."
    ]
  }
];
