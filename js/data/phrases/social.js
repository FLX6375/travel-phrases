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
