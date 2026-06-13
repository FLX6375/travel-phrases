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
