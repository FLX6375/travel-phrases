const SITUATIONS = [
  {
    "situation": "Ти в кафе і хочеш попросити рахунок.",
    "phraseIndex": 55,
    "options": [
      "What do you recommend?",
      "Could I have the bill, please?",
      "Is this dish spicy?",
      "Could I see the menu, please?"
    ],
    "correctIndex": 1
  },
  {
    "situation": "Ти загубився на вулиці.",
    "phraseIndex": 19,
    "options": [
      "A table for two, please.",
      "Nice to meet you!",
      "I think I'm lost. Could you help me?",
      "Is this on sale?"
    ],
    "correctIndex": 2
  },
  {
    "situation": "Хочеш ввічливо попросити людину говорити повільніше.",
    "phraseIndex": 27,
    "options": [
      "What do you mean by that?",
      "Same here!",
      "Could you speak more slowly, please?",
      "Go ahead."
    ],
    "correctIndex": 2
  },
  {
    "situation": "У поїзді хочеш дізнатися, чи зупиняється він на твоїй станції.",
    "phraseIndex": 34,
    "options": [
      "Does this train stop at…?",
      "How much does this cost?",
      "Long time no see!",
      "Is breakfast included in the price?"
    ],
    "correctIndex": 0
  },
  {
    "situation": "Хтось запропонував піти на каву, і тобі подобається ідея.",
    "phraseIndex": 91,
    "options": [
      "I'm afraid I have to disagree.",
      "I'd rather not.",
      "This isn't what I ordered.",
      "That sounds great!"
    ],
    "correctIndex": 3
  },
  {
    "situation": "Ти запізнюєшся на зустріч і хочеш попередити.",
    "phraseIndex": 99,
    "options": [
      "Take your time.",
      "Never mind.",
      "I'm running a bit late.",
      "I'll be right back."
    ],
    "correctIndex": 2
  },
  {
    "situation": "У магазині ти не хочеш, щоб продавець тебе турбував.",
    "phraseIndex": 69,
    "options": [
      "How much does this cost?",
      "I'd like to return this",
      "Do you accept credit cards?",
      "I'm just looking, thank you."
    ],
    "correctIndex": 3
  },
  {
    "situation": "Ти хочеш дізнатися, чи включений сніданок у ціну номера.",
    "phraseIndex": 3,
    "options": [
      "Is breakfast included in the price?",
      "What time does breakfast start?",
      "Is there a safe",
      "What's the Wi-Fi password?"
    ],
    "correctIndex": 0
  },
  {
    "situation": "У таксі хочеш, щоб водій висадив тебе зараз.",
    "phraseIndex": 44,
    "options": [
      "Where can I get a taxi?",
      "Please take me to this address.",
      "Could you drop me off here, please?",
      "I need to get off at the next stop."
    ],
    "correctIndex": 2
  },
  {
    "situation": "Ти не зрозумів, що сказали — просиш повторити.",
    "phraseIndex": 102,
    "options": [
      "I totally agree with you.",
      "Could you say that again?",
      "Absolutely!",
      "That makes sense."
    ],
    "correctIndex": 1
  },
  {
    "situation": "Домовляєшся про час зустрічі — питаєш, коли зручно.",
    "phraseIndex": 262,
    "options": [
      "What are the opening hours?",
      "How far is it from here?",
      "What time works for you?",
      "Which way is the town centre?"
    ],
    "correctIndex": 2
  },
  {
    "situation": "Ти вперше зустрічаєш людину після представлення.",
    "phraseIndex": 243,
    "options": [
      "Nice to meet you!",
      "Long time no see!",
      "What brings you here?",
      "How's it going?"
    ],
    "correctIndex": 0
  },
  {
    "situation": "Хтось вибачається, і ти хочеш сказати, що все гаразд.",
    "phraseIndex": 251,
    "options": [
      "No worries!",
      "Sorry about that.",
      "I'm afraid I have to disagree.",
      "My bad."
    ],
    "correctIndex": 0
  },
  {
    "situation": "У ресторані страва не та, що ти замовляв.",
    "phraseIndex": 59,
    "options": [
      "Could I get this to go?",
      "Is this dish spicy?",
      "This isn't what I ordered.",
      "What do you recommend?"
    ],
    "correctIndex": 2
  },
  {
    "situation": "Друг питає, як справи — відповідаєш, що все добре.",
    "phraseIndex": 144,
    "options": [
      "I overslept.",
      "Not much.",
      "Something came up.",
      "I'm doing well, thanks."
    ],
    "correctIndex": 3
  },
  {
    "situation": "Хочеш ввічливо сказати, що йдеш — прощаєшся.",
    "phraseIndex": 0,
    "options": [
      "Have a seat.",
      "Help yourself.",
      "Come on in.",
      "Could you tell me where the nearest hotel is?"
    ],
    "correctIndex": 3
  },
  {
    "situation": "На рецепції хостелу питаєш про ліжко в dorm.",
    "phraseIndex": 11,
    "options": [
      "Is breakfast included in the price?",
      "Could I have a late check-out",
      "Do you have a bed in a dorm room?",
      "I have a reservation under the name…"
    ],
    "correctIndex": 2
  },
  {
    "situation": "В аеропорту шукаєш стійку реєстрації.",
    "phraseIndex": 45,
    "options": [
      "Which gate is my flight?",
      "Where is the nearest bus stop / metro station?",
      "Where can I get a taxi?",
      "Where is the check-in desk?"
    ],
    "correctIndex": 3
  },
  {
    "situation": "У кафе хочеш сісти біля вікна.",
    "phraseIndex": 61,
    "options": [
      "Could I see the menu, please?",
      "A table for two, please.",
      "Could we get a table by the window?",
      "Is this seat taken?"
    ],
    "correctIndex": 2
  },
  {
    "situation": "У кафе просиш розділити рахунок.",
    "phraseIndex": 63,
    "options": [
      "Is a tip expected here?",
      "Could I have the bill, please?",
      "Could we split the bill?",
      "Can I pay by card?"
    ],
    "correctIndex": 2
  }
];
