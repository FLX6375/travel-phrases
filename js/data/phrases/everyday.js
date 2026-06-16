// 💬 Повсякдень — 161 phrases
const PHRASES_EVERYDAY = [
  {
    "en": "I really like this.",
    "ua": "Мені це дуже подобається.",
    "ex": "I really like this neighbourhood — it's so lively and full of character.",
    "tip": "I like = подобається. I really like = дуже подобається. I love = обожнюю",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I really like"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I really like this neighbourhood — it's so lively and full of character.",
      "— I really like this. — Yeah, totally."
    ]
  },
  {
    "en": "I'd really love to.",
    "ua": "Я б дуже хотів.",
    "ex": "— Would you like to join us for dinner? — I'd really love to, thank you!",
    "tip": "I'd love to = я б із задоволенням. Більш захоплено ніж просто 'I want to'",
    "rule": "Частица 'to' на конце обязательна, так как она заменяет глагол действия из вопроса (to join).",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'd really love to"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Would you like to join us for dinner? — I'd really love to, thank you!",
      "— I'd really love to. — Same here!"
    ]
  },
  {
    "en": "That sounds great!",
    "ua": "Звучить чудово!",
    "ex": "— Shall we grab a coffee? — That sounds great, I know a nice place nearby.",
    "tip": "That sounds great / amazing / perfect — природна реакция на пропозицію",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "That sounds great!"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Shall we grab a coffee? — That sounds great, I know a nice place nearby.",
      "— That sounds great! — Sounds good to me."
    ]
  },
  {
    "en": "I'm not sure about that.",
    "ua": "Я не впевнений у цьому.",
    "ex": "— Is this the best route? — I'm not sure about that, let me check the map.",
    "tip": "I'm not sure = я не впевнений. Чесна і ввічлива відповідь при сумніві",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm not sure about that"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Is this the best route? — I'm not sure about that, let me check the map.",
      "— I'm not sure about that. — Same here!"
    ]
  },
  {
    "en": "That's a good point.",
    "ua": "Це слушне зауваження.",
    "ex": "— We should leave earlier. — That's a good point, the traffic is bad at rush hour.",
    "tip": "That's a good point = ти маєш рацію / добре помічено. Дуже природно в діалозі",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "That's a good point"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— We should leave earlier. — That's a good point, the traffic is bad at rush hour.",
      "— That's a good point. — Same here!"
    ]
  },
  {
    "en": "I totally agree with you.",
    "ua": "Я повністю з тобою згоден.",
    "ex": "— The view from here is stunning. — I totally agree, it's breathtaking.",
    "tip": "Totally agree = повністю погоджуюся. Підсилювачі: totally, completely, absolutely",
    "rule": "В английском AGREE — это глагол (соглашаться). Ошибка говорить 'I am agree'. Правильно: 'I agree' или 'I totally agree'.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I totally agree with you"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— The view from here is stunning. — I totally agree, it's breathtaking.",
      "— I totally agree with you. — Yeah, totally."
    ]
  },
  {
    "en": "I'm afraid I have to disagree.",
    "ua": "Боюся, що я не погоджуюсь.",
    "ex": "— It's faster to walk. — I'm afraid I have to disagree — the metro is quicker.",
    "tip": "I'm afraid I have to disagree — дуже ввічливий спосіб сказати 'ні, ти не правий'",
    "rule": "'I'm afraid' в начале означает не страх, а вежливое вводное слово 'Боюсь, что...'.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm afraid I have to disagree"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— It's faster to walk. — I'm afraid I have to disagree — the metro is quicker.",
      "— I'm afraid I have to disagree. — Yeah, totally."
    ]
  },
  {
    "en": "What do you think about…?",
    "ua": "Що ти думаєш про…?",
    "ex": "What do you think about this hotel? Is it worth the price?",
    "tip": "What do you think about...? — запит думки. Відповідь часто починається з 'I think...'",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "What do you think about"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "What do you think about this hotel? Is it worth the price?",
      "— What do you think aboutit? — Same here!"
    ]
  },
  {
    "en": "I have no idea.",
    "ua": "Я не маю жодного уявлення.",
    "ex": "— Where does this road lead? — I have no idea, let's check the map.",
    "tip": "I have no idea = поняття не маю. Більш природно ніж просто 'I don't know'",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I have no idea"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Where does this road lead? — I have no idea, let's check the map.",
      "— I have no idea. — Yeah, totally."
    ]
  },
  {
    "en": "It depends.",
    "ua": "Це залежить.",
    "ex": "— Is it expensive here? — It depends on what you're looking for.",
    "tip": "It depends (on) = залежить (від). Дуже часта фраза в реальних розмовах!",
    "rule": "Если хотите продолжить фразу, всегда используйте предлог ON: 'It depends ON the weather'.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "It depends"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Is it expensive here? — It depends on what you're looking for.",
      "— It depends. — Same here!"
    ]
  },
  {
    "en": "I'm running a bit late.",
    "ua": "Я трохи запізнюся.",
    "ex": "Just to let you know, I'm running a bit late — I'll be there in 10 minutes.",
    "tip": "I'm running late = я запізнюся. Running = в процесі (ще не там). Дуже природна фраза",
    "rule": "Идиома 'run late' используется, когда вы прямо сейчас находитесь в процессе опоздания.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm running a bit late"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Just to let you know, I'm running a bit late — I'll be there in 10 minutes.",
      "— I'm running a bit late. — Sounds good to me."
    ]
  },
  {
    "en": "Let me think about it.",
    "ua": "Дай мені подумати про це.",
    "ex": "— Shall we take the tour? — Let me think about it and I'll let you know.",
    "tip": "Let me think about it = дай подумаю. Не відмова, а пауза перед рішенням",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Let me think about it"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Shall we take the tour? — Let me think about it and I'll let you know.",
      "— Let me think about it. — Same here!"
    ]
  },
  {
    "en": "That's not what I meant.",
    "ua": "Я не це мав на увазі.",
    "ex": "— Are you complaining? — No, that's not what I meant — I just had a question.",
    "tip": "That's not what I meant = я не це мав на увазі. Корисно при непорозумінні",
    "rule": "Прошедшее время от глагола 'mean' (значить/иметь в виду) — 'meant' [мэнт].",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "That's not what I meant"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Are you complaining? — No, that's not what I meant — I just had a question.",
      "— That's not what I meant. — Yeah, totally."
    ]
  },
  {
    "en": "Could you say that again?",
    "ua": "Чи не могли б ви повторити?",
    "ex": "I'm sorry, could you say that again? I didn't quite get it.",
    "tip": "Could you say that again? = повторіть, будь ласка. Ввічливіше ніж 'What?'",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Could you say that again?"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I'm sorry, could you say that again? I didn't quite get it.",
      "— Could you say that again? — Same here!"
    ]
  },
  {
    "en": "What do you mean by that?",
    "ua": "Що ти маєш на увазі?",
    "ex": "— The place is a bit rough. — What do you mean by that — is it unsafe?",
    "tip": "What do you mean? = що маєш на увазі? Просиш пояснення або уточнення",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "What do you mean by that?"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— The place is a bit rough. — What do you mean by that — is it unsafe?",
      "— What do you mean by that? — Yeah, totally."
    ]
  },
  {
    "en": "I'll go with that.",
    "ua": "Я оберу це / погоджуюся на це.",
    "ex": "— Coffee or tea? — I'll go with coffee, thanks.",
    "tip": "I'll go with = я вибираю / зупиняюся на. Природна фраза при виборі між варіантами",
    "rule": "Фразовый глагол 'go with' в значении 'выбрать/согласиться на вариант'.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'll go with"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Coffee or tea? — I'll go with coffee, thanks.",
      "— I'll go with that. — Same here!"
    ]
  },
  {
    "en": "That works for me.",
    "ua": "Мене це влаштовує.",
    "ex": "— Let's meet at seven. — That works for me, see you then!",
    "tip": "That works for me = мене влаштовує. Works = підходить, зручно. Дуже вживана фраза",
    "rule": "Глагол 'work' здесь переводится как 'подходить/быть удобным'.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "That works for me"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Let's meet at seven. — That works for me, see you then!",
      "— That works for me. — Yeah, totally."
    ]
  },
  {
    "en": "I'd rather not.",
    "ua": "Я б краще не хотів.",
    "ex": "— Want to try the spicy dish? — I'd rather not, I don't handle spice well.",
    "tip": "I'd rather not = я б краще відмовився. М'якше і ввічливіше ніж просто 'No'",
    "rule": "'I'd rather' = 'I would rather' (Я бы предпочел). Отрицание 'not' ставится в конце без вспомогательных глаголов.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'd rather not"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Want to try the spicy dish? — I'd rather not, I don't handle spice well.",
      "— I'd rather not. — Sounds good to me."
    ]
  },
  {
    "en": "I can't make it.",
    "ua": "Я не зможу прийти / це зробити.",
    "ex": "— Can you join us tonight? — I'm sorry, I can't make it — I have other plans.",
    "tip": "I can't make it = не зможу прийти / не вийде. Make it = встигнути, з'явитися",
    "rule": "Идиома 'make it' означает преуспеть, добраться куда-то вовремя или смочь посетить мероприятие.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I can't make it"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Can you join us tonight? — I'm sorry, I can't make it — I have other plans.",
      "— I can't make it. — Sounds good to me."
    ]
  },
  {
    "en": "Just in case.",
    "ua": "На всякий випадок.",
    "ex": "I'll take an umbrella just in case — the sky looks cloudy.",
    "tip": "Just in case = про всяк випадок. Дуже часта фраза в побутовому мовленніі",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "just in case"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I'll take an umbrella just in case — the sky looks cloudy.",
      "— Just in case. — Sounds good to me."
    ]
  },
  {
    "en": "I'm looking forward to it.",
    "ua": "Я з нетерпінням чекаю цього.",
    "ex": "— See you at the concert! — Definitely, I'm really looking forward to it!",
    "tip": "I'm looking forward to it = чекаю з нетерпінням. Позитивне очікування події",
    "rule": "После выражения 'look forward to' глагол ВСЕГДА идет с окончанием -ING или используется существительное/местоимение 'it'.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "looking forward to it"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— See you at the concert! — Definitely, I'm really looking forward to it!",
      "— I'm looking forward to it. — Yeah, totally."
    ]
  },
  {
    "en": "What's going on?",
    "ua": "Що відбувається? / Що трапилося?",
    "ex": "— What's going on? There's a crowd outside. — Looks like there's a festival.",
    "tip": "What's going on? = що відбувається? Неформальне запитання про ситуацію",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "What's going on?"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— What's going on? There's a crowd outside. — Looks like there's a festival.",
      "— What's going on? — Sounds good to me."
    ]
  },
  {
    "en": "I'll be right back.",
    "ua": "Я зараз повернуся.",
    "ex": "— Where are you going? — I'll be right back — just need to grab my jacket.",
    "tip": "I'll be right back = зараз прийду / повернуся. Right = одразу, зараз же",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'll be right back"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Where are you going? — I'll be right back — just need to grab my jacket.",
      "— I'll be right back. — Same here!"
    ]
  },
  {
    "en": "Take your time.",
    "ua": "Не поспішайте. / Не квапся.",
    "ex": "— Sorry, I'm still deciding. — Take your time, there's no rush at all.",
    "tip": "Take your time = не поспішай. No rush = не квапся. Протилежність: Hurry up!",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Take your time"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Sorry, I'm still deciding. — Take your time, there's no rush at all.",
      "— Take your time. — Sounds good to me."
    ]
  },
  {
    "en": "It's up to you.",
    "ua": "Вирішувати тобі. / Як скажеш.",
    "ex": "— Where should we eat? — It's up to you, I'm happy with anything.",
    "tip": "It's up to you = тобі вирішувати. It's up to me = мені вирішувати.",
    "rule": "Конструкция 'It's up to [кого-то]' означает, что ответственность за решение лежит на этом человеке.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "It's up to you"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Where should we eat? — It's up to you, I'm happy with anything.",
      "— It's up to you. — Sounds good to me."
    ]
  },
  {
    "en": "I was wondering if…",
    "ua": "Я хотів запитати / Мені цікаво…",
    "ex": "I was wondering if you could help me find this address.",
    "tip": "I was wondering if... — дуже ввічливий вступ до прохання або запитання",
    "rule": "Использование прошедшего времени длительного залога (Past Continuous) 'I was wondering' делает просьбу максимально деликатной.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I was wondering if"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I was wondering if you could help me find this address.",
      "— I was wondering if... — Sounds good to me."
    ]
  },
  {
    "en": "That's a shame.",
    "ua": "Шкода. / Як жаль.",
    "ex": "— The museum is closed today. — Oh, that's a shame — I was really looking forward to it.",
    "tip": "That's a shame = шкода. That's a pity = те саме. What a shame! = підсилена форма",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "That's a shame"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— The museum is closed today. — Oh, that's a shame — I was really looking forward to it.",
      "— That's a shame. — Same here!"
    ]
  },
  {
    "en": "I couldn't agree more.",
    "ua": "Повністю з тобою погоджуюся.",
    "ex": "— This city is absolutely beautiful. — I couldn't agree more — it's stunning.",
    "tip": "I couldn't agree more = я не можу погодитися більше = повна згода. Дуже природно!",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I couldn't agree more"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— This city is absolutely beautiful. — I couldn't agree more — it's stunning.",
      "— I couldn't agree more. — Same here!"
    ]
  },
  {
    "en": "Never mind.",
    "ua": "Нічого / Забудь / Не звертай уваги.",
    "ex": "— Sorry, what did you say? — Oh, never mind — it wasn't important.",
    "tip": "Never mind = забудь / не важливо. Не грубо, просто закриває тему",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Never mind"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Sorry, what did you say? — Oh, never mind — it wasn't important.",
      "— Never mind. — Yeah, totally."
    ]
  },
  {
    "en": "By the way,…",
    "ua": "До речі,…",
    "ex": "By the way, have you tried the local food here? It's supposed to be amazing.",
    "tip": "By the way = до речі / між іншим. Вводить нову, часто несподівану тему",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "By the way"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "By the way, have you tried the local food here? It's supposed to be amazing.",
      "— By the way,... — Sounds good to me."
    ]
  },
  {
    "en": "In any case,…",
    "ua": "В будь-якому випадку,…",
    "ex": "In any case, we should leave early to avoid the traffic.",
    "tip": "In any case = в будь-якому разі. Підводить підсумок або дає пораду",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "In any case"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "In any case, we should leave early to avoid the traffic.",
      "— In any case,... — Same here!"
    ]
  },
  {
    "en": "I suppose so.",
    "ua": "Мабуть, так. / Напевно.",
    "ex": "— Do you think it'll rain? — I suppose so — it looks quite cloudy.",
    "tip": "I suppose so = мабуть так. Неповна впевненість. I guess so = те саме, більш американське",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I suppose so"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Do you think it'll rain? — I suppose so — it looks quite cloudy.",
      "— I suppose so. — Same here!"
    ]
  },
  {
    "en": "As far as I know,…",
    "ua": "Наскільки я знаю,…",
    "ex": "As far as I know, the last bus leaves at midnight.",
    "tip": "As far as I know = наскільки мені відомо. Сигнал що ти не на 100% впевнений",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "As far as I know"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "As far as I know, the last bus leaves at midnight.",
      "— As far as I know,... — Sounds good to me."
    ]
  },
  {
    "en": "What a coincidence!",
    "ua": "Яке співпадіння!",
    "ex": "— I'm from Kyiv! — What a coincidence — me too! Which part?",
    "tip": "What a coincidence! = який збіг! Coincidence = збіг обставин",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "What a coincidence!"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— I'm from Kyiv! — What a coincidence — me too! Which part?",
      "— What a coincidence! — Same here!"
    ]
  },
  {
    "en": "I'm just kidding.",
    "ua": "Я просто жартую.",
    "ex": "— Did you really pay that much? — No, I'm just kidding — it was half price.",
    "tip": "I'm just kidding = я жартую. Just joking = те саме. Kidding = неформально",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm just kidding"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Did you really pay that much? — No, I'm just kidding — it was half price.",
      "— I'm just kidding. — Same here!"
    ]
  },
  {
    "en": "To be honest,…",
    "ua": "Якщо чесно,… / Відверто кажучи,…",
    "ex": "To be honest, I'm not sure this restaurant is worth the price.",
    "tip": "To be honest = якщо чесно. Сигналізує що зараз скажеш свою справжню думку",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "To be honest"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "To be honest, I'm not sure this restaurant is worth the price.",
      "— To be honest,... — Sounds good to me."
    ]
  },
  {
    "en": "It's worth it.",
    "ua": "Воно того варте.",
    "ex": "— Is the guided tour expensive? — Yes, but it's worth it — you'll learn so much.",
    "tip": "It's worth it = воно того варте. It's not worth it = не варте того",
    "rule": "Конструкция 'be worth it'. После 'worth' можно также ставить глагол с -ing: 'It's worth visiting' (Это стоит посетить).",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "It's worth it"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Is the guided tour expensive? — Yes, but it's worth it — you'll learn so much.",
      "— It's worth it. — Same here!"
    ]
  },
  {
    "en": "I can't believe it!",
    "ua": "Не можу повірити!",
    "ex": "— This view is incredible! — I can't believe it — I've never seen anything like this.",
    "tip": "I can't believe it! = не вірю своїм очам / вухам! Виражає здивування або захват",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I can't believe it!"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— This view is incredible! — I can't believe it — I've never seen anything like this.",
      "— I can't believe it! — Sounds good to me."
    ]
  },
  {
    "en": "Let me know if you need anything.",
    "ua": "Дай знати, якщо тобі щось потрібно.",
    "ex": "Make yourself at home. Let me know if you need anything at all.",
    "tip": "Let me know = дай знати. If you need anything = якщо щось потрібно. Дуже гостинно!",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Let me know if you need anything"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Make yourself at home. Let me know if you need anything at all.",
      "— Let me know if you need anything. — Sounds good to me."
    ]
  },
  {
    "en": "I'm getting used to it.",
    "ua": "Я звикаю до цього.",
    "ex": "— Is the food here different? — Yes, but I'm getting used to it — it's actually growing on me.",
    "tip": "I'm getting used to = звикаю. I'm used to = вже звик. Важлива різниця!",
    "rule": "Разница: 'I am used to' (Я уже привык) и 'I am getting used to' (Я только в процессе привыкания).",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm getting used to it"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Is the food here different? — Yes, but I'm getting used to it — it's actually growing on me.",
      "— I'm getting used to it. — Same here!"
    ]
  },
  {
    "en": "It's not a big deal.",
    "ua": "Це не велика справа. / Нічого страшного.",
    "ex": "— Sorry for being late! — Don't worry, it's not a big deal at all.",
    "tip": "Not a big deal = нічого страшного. No big deal = те саме. Big deal! (сарказм) = велика проблема!",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "It's not a big deal"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Sorry for being late! — Don't worry, it's not a big deal at all.",
      "— It's not a big deal. — Same here!"
    ]
  },
  {
    "en": "I'm in a hurry.",
    "ua": "Я поспішаю.",
    "ex": "Sorry, I can't stop — I'm in a hurry and don't want to miss my train.",
    "tip": "I'm in a hurry = поспішаю. In a rush = те саме. Hurry up! = швидше! (наказ)",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm in a hurry"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Sorry, I can't stop — I'm in a hurry and don't want to miss my train.",
      "— I'm in a hurry. — Same here!"
    ]
  },
  {
    "en": "Go ahead.",
    "ua": "Давай / Будь ласка (дозволяю).",
    "ex": "— May I sit here? — Go ahead, I'm not saving this seat.",
    "tip": "Go ahead = будь ласка, я не проти / дозволяю. Або: go ahead = продовжуй",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Go ahead"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— May I sit here? — Go ahead, I'm not saving this seat.",
      "— Go ahead. — Yeah, totally."
    ]
  },
  {
    "en": "Out of curiosity,…",
    "ua": "З цікавості,… / Просто цікаво,…",
    "ex": "Out of curiosity, how long have you been living here?",
    "tip": "Out of curiosity = просто цікаво, без особливої причини. М'який вступ до запитання",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Out of curiosity"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Out of curiosity, how long have you been living here?",
      "— Out of curiosity,... — Same here!"
    ]
  },
  {
    "en": "I'm doing my best.",
    "ua": "Я роблю все можливе.",
    "ex": "— Your English is really improving! — Thank you, I'm doing my best.",
    "tip": "I'm doing my best = роблю все можливе. Best = максимум зусиль",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm doing my best"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Your English is really improving! — Thank you, I'm doing my best.",
      "— I'm doing my best. — Yeah, totally."
    ]
  },
  {
    "en": "It's on me.",
    "ua": "Я пригощаю / Я плачу.",
    "ex": "— Let me get the bill. — No, please — it's on me this time.",
    "tip": "It's on me = я плачу за всіх. Drinks are on me = напої за мій рахунок",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "It's on me"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Let me get the bill. — No, please — it's on me this time.",
      "— It's on me. — Sounds good to me."
    ]
  },
  {
    "en": "That makes sense.",
    "ua": "Це логічно. / Зрозуміло.",
    "ex": "— The museum is free on the first Sunday. — Oh, that makes sense — that's why it's so crowded.",
    "tip": "That makes sense = це має сенс / логічно. Doesn't make sense = нелогічно",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "That makes sense"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— The museum is free on the first Sunday. — Oh, that makes sense — that's why it's so crowded.",
      "— That makes sense. — Sounds good to me."
    ]
  },
  {
    "en": "Absolutely!",
    "ua": "Абсолютно! / Звичайно!",
    "ex": "— Are you enjoying the trip? — Absolutely! It's been incredible so far.",
    "tip": "Absolutely! = 100% так! Підсилювач згоди. Definitely / Certainly / Exactly — схожі",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Absolutely!"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Are you enjoying the trip? — Absolutely! It's been incredible so far.",
      "— Absolutely! — Sounds good to me."
    ]
  },
  {
    "en": "I'm not in the mood for that.",
    "ua": "У мене немає настрою для цього.",
    "ex": "— Shall we go dancing? — Honestly, I'm not in the mood for that tonight.",
    "tip": "I'm not in the mood for = не в настрої для. In the mood for = налаштований на щось",
    "rule": "Быть в настроении делать что-то: 'to be IN the mood FOR [что-то]'. Предлог FOR обязателен.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm not in the mood for that"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Shall we go dancing? — Honestly, I'm not in the mood for that tonight.",
      "— I'm not in the mood for that. — Same here!"
    ]
  },
  {
    "en": "Fair enough.",
    "ua": "Справедливо. / Добре, приймаю.",
    "ex": "— We should split the bill. — Fair enough, that makes sense.",
    "tip": "Приймаєш аргумент співрозмовника без сперечання.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Fair enough"
    ],
    "situation": "Погоджуєшся з аргументом іншої людини",
    "examples": [
      "— We should split the bill. — Fair enough, that makes sense.",
      "— Fair enough. — Yeah, totally."
    ]
  },
  {
    "en": "Sounds good to me.",
    "ua": "Мене влаштовує. / Звучить добре.",
    "ex": "— Let's meet at six. — Sounds good to me.",
    "tip": "Синонім That works for me / That sounds great.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Sounds good to me"
    ],
    "situation": "Погоджуєшся на пропозицію",
    "examples": [
      "— Let's meet at six. — Sounds good to me.",
      "— Sounds good to me. — Yeah, totally."
    ]
  },
  {
    "en": "I'll keep that in mind.",
    "ua": "Я врахую це. / Запам'ятаю.",
    "ex": "— The last bus is at eleven. — Thanks, I'll keep that in mind.",
    "tip": "Показуєш, що порада важлива для тебе.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "keep that in mind"
    ],
    "situation": "Коли хтось дав корисну пораду",
    "examples": [
      "— The last bus is at eleven. — Thanks, I'll keep that in mind.",
      "— I'll keep that in mind. — Same here!"
    ]
  },
  {
    "en": "Keep me posted.",
    "ua": "Тримай мене в курсі.",
    "ex": "— I'll check and let you know. — Great, keep me posted!",
    "tip": "Keep me posted = повідомляй про оновлення.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Keep me posted"
    ],
    "situation": "Просиш повідомляти про зміни",
    "examples": [
      "— I'll check and let you know. — Great, keep me posted!",
      "— Keep me posted. — Sounds good to me."
    ]
  },
  {
    "en": "I'm easy — either way is fine.",
    "ua": "Мені все одно — будь-який варіант підходить.",
    "ex": "— Pizza or pasta? — I'm easy — either way is fine.",
    "tip": "I'm easy = мені байдуже / все підходить.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm easy"
    ],
    "situation": "Коли тобі підходить будь-який варіант",
    "examples": [
      "— Pizza or pasta? — I'm easy — either way is fine.",
      "— I'm easy — either way is fine. — Yeah, totally."
    ]
  },
  {
    "en": "How are you doing?",
    "ua": "Як ти? / Як справи?",
    "ex": "— How are you doing? — Pretty good, thanks!",
    "tip": "Неформальніше за How are you?",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "How are you doing?"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— How are you doing? — Pretty good, thanks!",
      "— How are you doing? — Same here!"
    ]
  },
  {
    "en": "I'm doing well, thanks.",
    "ua": "У мене все добре, дякую.",
    "ex": "— How are you? — I'm doing well, thanks. And yourself?",
    "tip": "Doing well = справи йдуть добре.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm doing well"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— How are you? — I'm doing well, thanks. And yourself?",
      "— I'm doing well, thanks. — Yeah, totally."
    ]
  },
  {
    "en": "See you later!",
    "ua": "Побачимось!",
    "ex": "— I have to run. — See you later!",
    "tip": "Later = пізніше сьогодні або взагалі.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "See you later"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— I have to run. — See you later!",
      "— See you later! — Yeah, totally."
    ]
  },
  {
    "en": "Have a good one!",
    "ua": "Гарного дня! / Удачі!",
    "ex": "Thanks for your help — have a good one!",
    "tip": "Неформальне прощання. One = day/evening.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Have a good one"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Thanks for your help — have a good one!",
      "— Have a good one! — Same here!"
    ]
  },
  {
    "en": "Good morning!",
    "ua": "Доброго ранку!",
    "ex": "Good morning! Did you sleep well?",
    "tip": "До полудня. Good afternoon / evening — далі.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Good morning"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Good morning! Did you sleep well?",
      "— Good morning! — Yeah, totally."
    ]
  },
  {
    "en": "Good night!",
    "ua": "На добраніч!",
    "ex": "— I'm going to bed. — Good night! Sleep well.",
    "tip": "Коли хтось лягає спати, не при зустрічі ввечері.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Good night"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— I'm going to bed. — Good night! Sleep well.",
      "— Good night! — Yeah, totally."
    ]
  },
  {
    "en": "What's up?",
    "ua": "Як справи? / Що нового?",
    "ex": "— Hey, what's up? — Not much, just chilling.",
    "tip": "Дуже неформально. Whassup — скорочено.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "What's up?"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Hey, what's up? — Not much, just chilling.",
      "— What's up? — Yeah, totally."
    ]
  },
  {
    "en": "Not much.",
    "ua": "Нічого особливого.",
    "ex": "— What's up? — Not much. You?",
    "tip": "Стандартна відповідь на What's up?",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Not much"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— What's up? — Not much. You?",
      "— Not much. — Sounds good to me."
    ]
  },
  {
    "en": "I'm tired.",
    "ua": "Я втомився.",
    "ex": "I'm tired — I think I'll go to bed early tonight.",
    "tip": "Tired = втомлений. Exhausted = виснажений.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm tired"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I'm tired — I think I'll go to bed early tonight.",
      "— I'm tired. — Same here!"
    ]
  },
  {
    "en": "I'm hungry.",
    "ua": "Я голодний.",
    "ex": "I'm hungry — shall we grab something to eat?",
    "tip": "Starving = дуже голодний (неформально).",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm hungry"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I'm hungry — shall we grab something to eat?",
      "— I'm hungry. — Yeah, totally."
    ]
  },
  {
    "en": "I'm busy right now.",
    "ua": "Я зараз зайнятий.",
    "ex": "Sorry, I'm busy right now — can I call you back?",
    "tip": "Busy = зайнятий. Can I call you back? — передзвоню?",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm busy right now"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Sorry, I'm busy right now — can I call you back?",
      "— I'm busy right now. — Same here!"
    ]
  },
  {
    "en": "No problem.",
    "ua": "Без проблем.",
    "ex": "— Thanks! — No problem!",
    "tip": "Синонім No worries / You're welcome.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "No problem"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Thanks! — No problem!",
      "— No problem. — Yeah, totally."
    ]
  },
  {
    "en": "You're welcome.",
    "ua": "Будь ласка. / Нема за що.",
    "ex": "— Thank you so much! — You're welcome!",
    "tip": "Формальніша подяка на thanks.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "You're welcome"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Thank you so much! — You're welcome!",
      "— You're welcome. — Sounds good to me."
    ]
  },
  {
    "en": "My pleasure.",
    "ua": "З радістю. / Мені приємно.",
    "ex": "— Thanks for helping. — My pleasure!",
    "tip": "Ввічливіше за You're welcome.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "My pleasure"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Thanks for helping. — My pleasure!",
      "— My pleasure. — Same here!"
    ]
  },
  {
    "en": "Don't worry about it.",
    "ua": "Не переживай через це.",
    "ex": "— Sorry I'm late. — Don't worry about it.",
    "tip": "М'яко заспокоюєш людину.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Don't worry about it"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Sorry I'm late. — Don't worry about it.",
      "— Don't worry about it. — Yeah, totally."
    ]
  },
  {
    "en": "I'm sorry to hear that.",
    "ua": "Мені шкода це чути.",
    "ex": "— I lost my job. — I'm sorry to hear that.",
    "tip": "Співчуття. Не плутай з I'm sorry (вибачення).",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm sorry to hear that"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— I lost my job. — I'm sorry to hear that.",
      "— I'm sorry to hear that. — Yeah, totally."
    ]
  },
  {
    "en": "That's too bad.",
    "ua": "Як шкода. / Погано.",
    "ex": "— The concert was cancelled. — That's too bad.",
    "tip": "Виражаєш жаль за новину.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "That's too bad"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— The concert was cancelled. — That's too bad.",
      "— That's too bad. — Yeah, totally."
    ]
  },
  {
    "en": "Congratulations!",
    "ua": "Вітаю!",
    "ex": "— I got the job! — Congratulations! That's amazing!",
    "tip": "Congrats — скорочено.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Congratulations"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— I got the job! — Congratulations! That's amazing!",
      "— Congratulations! — Yeah, totally."
    ]
  },
  {
    "en": "Good luck!",
    "ua": "Удачі!",
    "ex": "Good luck with your exam tomorrow!",
    "tip": "Break a leg — жартома «удачі» (театр).",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Good luck"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Good luck with your exam tomorrow!",
      "— Good luck! — Yeah, totally."
    ]
  },
  {
    "en": "Get well soon!",
    "ua": "Одужуй швидше!",
    "ex": "— I'm sick. — Get well soon! Take care.",
    "tip": "Коли хтось хворіє.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Get well soon"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— I'm sick. — Get well soon! Take care.",
      "— Get well soon! — Yeah, totally."
    ]
  },
  {
    "en": "Take care!",
    "ua": "Бережи себе!",
    "ex": "— See you next week. — Take care!",
    "tip": "Тепле прощання.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Take care"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— See you next week. — Take care!",
      "— Take care! — Sounds good to me."
    ]
  },
  {
    "en": "I'll call you back.",
    "ua": "Я передзвоню.",
    "ex": "Sorry, I can't talk — I'll call you back in an hour.",
    "tip": "Call back = передзвонити.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "call you back"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Sorry, I can't talk — I'll call you back in an hour.",
      "— I'll call you back. — Yeah, totally."
    ]
  },
  {
    "en": "Can I call you later?",
    "ua": "Можу передзвонити пізніше?",
    "ex": "Can I call you later? I'm in a meeting right now.",
    "tip": "Ввічливо відкладаєш розмову.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Can I call you later?"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Can I call you later? I'm in a meeting right now.",
      "— Can I call you later? — Sounds good to me."
    ]
  },
  {
    "en": "Hold on a moment.",
    "ua": "Зачекайте хвилинку.",
    "ex": "Hold on a moment — let me find my keys.",
    "tip": "Hold on = почекай (телефон або очікування).",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Hold on a moment"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Hold on a moment — let me find my keys.",
      "— Hold on a moment. — Sounds good to me."
    ]
  },
  {
    "en": "I'll get back to you.",
    "ua": "Я відповім пізніше / повернусь до цього.",
    "ex": "I need to check — I'll get back to you by Friday.",
    "tip": "Get back to = повернутися до теми з відповіддю.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "get back to you"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I need to check — I'll get back to you by Friday.",
      "— I'll get back to you. — Same here!"
    ]
  },
  {
    "en": "What time is it?",
    "ua": "Котра година?",
    "ex": "Excuse me, what time is it?",
    "tip": "Do you have the time? — те саме, ввічливіше.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "What time is it?"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Excuse me, what time is it?",
      "— What time is it? — Same here!"
    ]
  },
  {
    "en": "I'm running out of time.",
    "ua": "У мене мало часу.",
    "ex": "I'm running out of time — we need to hurry.",
    "tip": "Run out of = закінчується (час, гроші).",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "running out of time"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I'm running out of time — we need to hurry.",
      "— I'm running out of time. — Yeah, totally."
    ]
  },
  {
    "en": "I lost track of time.",
    "ua": "Я загубив відчуття часу.",
    "ex": "Sorry I'm late — I lost track of time.",
    "tip": "Track of time = контроль над часом.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "lost track of time"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Sorry I'm late — I lost track of time.",
      "— I lost track of time. — Yeah, totally."
    ]
  },
  {
    "en": "It's about time!",
    "ua": "Дійшла пора! / Нарешті!",
    "ex": "— Here's your coffee. — It's about time! I've been waiting forever.",
    "tip": "Іноді з легким дразнінням.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "It's about time"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Here's your coffee. — It's about time! I've been waiting forever.",
      "— It's about time! — Same here!"
    ]
  },
  {
    "en": "Better late than never.",
    "ua": "Краще пізно, ніж ніколи.",
    "ex": "— Sorry I'm two hours late. — Better late than never, I guess!",
    "tip": "Ідіома про запізнення.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Better late than never"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Sorry I'm two hours late. — Better late than never, I guess!",
      "— Better late than never. — Sounds good to me."
    ]
  },
  {
    "en": "I overslept.",
    "ua": "Я проспав.",
    "ex": "I overslept — that's why I missed the meeting.",
    "tip": "Oversleep = проспати (випадково).",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I overslept"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I overslept — that's why I missed the meeting.",
      "— I overslept. — Sounds good to me."
    ]
  },
  {
    "en": "I'm starving.",
    "ua": "Я дуже голодний.",
    "ex": "I'm starving — let's eat something now.",
    "tip": "Starving = дуже голодний (не буквально «голодую»).",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm starving"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I'm starving — let's eat something now.",
      "— I'm starving. — Yeah, totally."
    ]
  },
  {
    "en": "I'm full.",
    "ua": "Я наївся.",
    "ex": "— Want dessert? — No thanks, I'm full.",
    "tip": "Full = ситий. Stuffed — дуже ситий.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm full"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Want dessert? — No thanks, I'm full.",
      "— I'm full. — Same here!"
    ]
  },
  {
    "en": "Help yourself.",
    "ua": "Бери собі / розкладайся.",
    "ex": "The food is on the table — help yourself!",
    "tip": "Коли пропонуєш їжу або напої гостям.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Help yourself"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "The food is on the table — help yourself!",
      "— Help yourself. — Same here!"
    ]
  },
  {
    "en": "Make yourself at home.",
    "ua": "Почувайся як вдома.",
    "ex": "Come in, make yourself at home.",
    "tip": "Гостинна фраза при візиті.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Make yourself at home"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Come in, make yourself at home.",
      "— Make yourself at home. — Same here!"
    ]
  },
  {
    "en": "I'm on my way.",
    "ua": "Я вже їду / йду.",
    "ex": "Don't worry — I'm on my way, be there in ten minutes.",
    "tip": "On my way = у дорозі до тебе.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm on my way"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Don't worry — I'm on my way, be there in ten minutes.",
      "— I'm on my way. — Sounds good to me."
    ]
  },
  {
    "en": "I'm almost there.",
    "ua": "Я майже на місці.",
    "ex": "I'm almost there — save me a seat!",
    "tip": "Almost there = за кілька хвилин буду.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm almost there"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I'm almost there — save me a seat!",
      "— I'm almost there. — Same here!"
    ]
  },
  {
    "en": "I got stuck in traffic.",
    "ua": "Я застряг у заторі.",
    "ex": "Sorry I'm late — I got stuck in traffic.",
    "tip": "Stuck in traffic — класична причина запізнення.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "stuck in traffic"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Sorry I'm late — I got stuck in traffic.",
      "— I got stuck in traffic. — Sounds good to me."
    ]
  },
  {
    "en": "I'll be there in five minutes.",
    "ua": "Я буду через п'ять хвилин.",
    "ex": "I'll be there in five minutes — start without me if you want.",
    "tip": "In + час = через скільки будеш.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "be there in"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I'll be there in five minutes — start without me if you want.",
      "— I'll be there in five minutes. — Same here!"
    ]
  },
  {
    "en": "Where are you?",
    "ua": "Де ти?",
    "ex": "Where are you? We've been waiting for twenty minutes.",
    "tip": "Пряме питання при зустрічі.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Where are you?"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Where are you? We've been waiting for twenty minutes.",
      "— Where are you? — Sounds good to me."
    ]
  },
  {
    "en": "I'm home.",
    "ua": "Я вдома.",
    "ex": "— Where are you? — I'm home, just got in.",
    "tip": "Got in = прийшов додому.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm home"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Where are you? — I'm home, just got in.",
      "— I'm home. — Sounds good to me."
    ]
  },
  {
    "en": "I'm at work.",
    "ua": "Я на роботі.",
    "ex": "Can't talk — I'm at work right now.",
    "tip": "At work = на робочому місці.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm at work"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Can't talk — I'm at work right now.",
      "— I'm at work. — Sounds good to me."
    ]
  },
  {
    "en": "I need a break.",
    "ua": "Мені потрібна перерва.",
    "ex": "I need a break — I've been working all morning.",
    "tip": "Break = перерва, відпочинок.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I need a break"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I need a break — I've been working all morning.",
      "— I need a break. — Same here!"
    ]
  },
  {
    "en": "I'm not feeling great.",
    "ua": "Я почуваюсь не дуже.",
    "ex": "I'm not feeling great — I might stay home today.",
    "tip": "М'якше за I'm sick.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "not feeling great"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I'm not feeling great — I might stay home today.",
      "— I'm not feeling great. — Yeah, totally."
    ]
  },
  {
    "en": "I have a headache.",
    "ua": "У мене болить голова.",
    "ex": "I have a headache — I'm going to lie down.",
    "tip": "Have a + хвороба: headache, cold, fever.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I have a headache"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I have a headache — I'm going to lie down.",
      "— I have a headache. — Sounds good to me."
    ]
  },
  {
    "en": "I need some rest.",
    "ua": "Мені потрібен відпочинок.",
    "ex": "I need some rest — this week was exhausting.",
    "tip": "Rest = відпочинок. Get some rest — відпочинь.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I need some rest"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I need some rest — this week was exhausting.",
      "— I need some rest. — Yeah, totally."
    ]
  },
  {
    "en": "I feel much better now.",
    "ua": "Мені зараз набагато краще.",
    "ex": "Thanks for asking — I feel much better now.",
    "tip": "Much better = значно краще.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "feel much better"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Thanks for asking — I feel much better now.",
      "— I feel much better now. — Same here!"
    ]
  },
  {
    "en": "It's raining.",
    "ua": "Йде дощ.",
    "ex": "Take an umbrella — it's raining outside.",
    "tip": "It's + погода: sunny, cloudy, windy.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "It's raining"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Take an umbrella — it's raining outside.",
      "— It's raining. — Same here!"
    ]
  },
  {
    "en": "It's so hot today.",
    "ua": "Сьогодні дуже спекотно.",
    "ex": "It's so hot today — let's stay inside.",
    "tip": "So hot = дуже спекотно.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "It's so hot"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "It's so hot today — let's stay inside.",
      "— It's so hot today. — Same here!"
    ]
  },
  {
    "en": "It's freezing outside.",
    "ua": "На вулиці морозно.",
    "ex": "Wear a coat — it's freezing outside.",
    "tip": "Freezing = дуже холодно (не буквально «замерзає»).",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "It's freezing"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Wear a coat — it's freezing outside.",
      "— It's freezing outside. — Sounds good to me."
    ]
  },
  {
    "en": "Nice weather, isn't it?",
    "ua": "Гарна погода, чи не так?",
    "ex": "Nice weather, isn't it? Perfect for a walk.",
    "tip": "Tag question — підтвердження думки.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Nice weather"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Nice weather, isn't it? Perfect for a walk.",
      "— Nice weather, isn't it? — Same here!"
    ]
  },
  {
    "en": "What's the weather like?",
    "ua": "Яка погода?",
    "ex": "What's the weather like tomorrow?",
    "tip": "Like = як (опис).",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "weather like"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "What's the weather like tomorrow?",
      "— What's the weather like? — Sounds good to me."
    ]
  },
  {
    "en": "I forgot my keys.",
    "ua": "Я забув ключі.",
    "ex": "I forgot my keys — can you let me in?",
    "tip": "Forget — forgot — forgotten.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I forgot my keys"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I forgot my keys — can you let me in?",
      "— I forgot my keys. — Yeah, totally."
    ]
  },
  {
    "en": "I can't find my phone.",
    "ua": "Не можу знайти телефон.",
    "ex": "I can't find my phone — have you seen it?",
    "tip": "Can't find = не можу знайти (зараз).",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "can't find my phone"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I can't find my phone — have you seen it?",
      "— I can't find my phone. — Yeah, totally."
    ]
  },
  {
    "en": "It's somewhere around here.",
    "ua": "Десь тут.",
    "ex": "My wallet is somewhere around here — I had it a minute ago.",
    "tip": "Somewhere = десь.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "somewhere around here"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "My wallet is somewhere around here — I had it a minute ago.",
      "— It's somewhere around here. — Same here!"
    ]
  },
  {
    "en": "Here you go.",
    "ua": "Ось, будь ласка.",
    "ex": "— Can I have the salt? — Here you go.",
    "tip": "Коли даєш щось людині.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Here you go"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Can I have the salt? — Here you go.",
      "— Here you go. — Yeah, totally."
    ]
  },
  {
    "en": "There you go.",
    "ua": "Ось / ось так.",
    "ex": "There you go — all done!",
    "tip": "Після завершення дії або передачі.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "There you go"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "There you go — all done!",
      "— There you go. — Sounds good to me."
    ]
  },
  {
    "en": "Come on in.",
    "ua": "Заходь.",
    "ex": "The door's open — come on in!",
    "tip": "Come on in = запрошення всередину.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Come on in"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "The door's open — come on in!",
      "— Come on in. — Sounds good to me."
    ]
  },
  {
    "en": "Have a seat.",
    "ua": "Сідайте / присідай.",
    "ex": "Have a seat — I'll be with you in a moment.",
    "tip": "Seat = місце для сидіння.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Have a seat"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Have a seat — I'll be with you in a moment.",
      "— Have a seat. — Same here!"
    ]
  },
  {
    "en": "Make yourself comfortable.",
    "ua": "Розташовуйся зручно.",
    "ex": "Take off your coat and make yourself comfortable.",
    "tip": "Comfortable = зручно, комфортно.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Make yourself comfortable"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Take off your coat and make yourself comfortable.",
      "— Make yourself comfortable. — Same here!"
    ]
  },
  {
    "en": "I'll leave you to it.",
    "ua": "Не буду заважати — продовжуй.",
    "ex": "I'll leave you to it — call me if you need anything.",
    "tip": "Leave someone to it = дати робити справи.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "leave you to it"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I'll leave you to it — call me if you need anything.",
      "— I'll leave you to it. — Sounds good to me."
    ]
  },
  {
    "en": "Do you mind if I open the window?",
    "ua": "Ви не проти, якщо я відкрию вікно?",
    "ex": "Do you mind if I open the window? It's a bit stuffy.",
    "tip": "Do you mind if I + дієслово — прохання дозволу.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Do you mind if I"
    ],
    "situation": "У повсякденній розмові з людьми",
    "rule": "Mind if I + Present Simple (open, not opened).",
    "examples": [
      "Do you mind if I open the window? It's a bit stuffy.",
      "— Do you mind if I open the window? — Same here!"
    ]
  },
  {
    "en": "Feel free to ask.",
    "ua": "Не соромся питати.",
    "ex": "Feel free to ask if anything is unclear.",
    "tip": "Feel free to = не соромся / можеш сміливо.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Feel free to"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Feel free to ask if anything is unclear.",
      "— Feel free to ask. — Yeah, totally."
    ]
  },
  {
    "en": "I don't mind.",
    "ua": "Мені все одно. / Я не проти.",
    "ex": "— Window or aisle? — I don't mind, either is fine.",
    "tip": "Don't mind = не проти.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I don't mind"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Window or aisle? — I don't mind, either is fine.",
      "— I don't mind. — Sounds good to me."
    ]
  },
  {
    "en": "It doesn't matter.",
    "ua": "Це не має значення.",
    "ex": "— Red or blue? — It doesn't matter, pick whichever.",
    "tip": "Doesn't matter = неважливо.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "It doesn't matter"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Red or blue? — It doesn't matter, pick whichever.",
      "— It doesn't matter. — Sounds good to me."
    ]
  },
  {
    "en": "Either way is fine.",
    "ua": "Будь-який варіант підходить.",
    "ex": "— Walk or take the bus? — Either way is fine with me.",
    "tip": "Either way = будь-який з двох.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Either way is fine"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Walk or take the bus? — Either way is fine with me.",
      "— Either way is fine. — Sounds good to me."
    ]
  },
  {
    "en": "I don't care.",
    "ua": "Мені все одно.",
    "ex": "— Pizza or pasta? — I don't care, you choose.",
    "tip": "Неформально; може звучати різко — обережно.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I don't care"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Pizza or pasta? — I don't care, you choose.",
      "— I don't care. — Yeah, totally."
    ]
  },
  {
    "en": "It's your call.",
    "ua": "Тобі вирішувати.",
    "ex": "— Should we stay or go? — It's your call.",
    "tip": "Your call = твоє рішення.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "It's your call"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Should we stay or go? — It's your call.",
      "— It's your call. — Same here!"
    ]
  },
  {
    "en": "I'll think about it.",
    "ua": "Я подумаю.",
    "ex": "— Want to join us? — I'll think about it and let you know.",
    "tip": "Think about = обдумати.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'll think about it"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Want to join us? — I'll think about it and let you know.",
      "— I'll think about it. — Yeah, totally."
    ]
  },
  {
    "en": "I've made up my mind.",
    "ua": "Я вирішив.",
    "ex": "I've made up my mind — I'm taking the job.",
    "tip": "Make up one's mind = прийняти рішення.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "made up my mind"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I've made up my mind — I'm taking the job.",
      "— I've made up my mind. — Sounds good to me."
    ]
  },
  {
    "en": "I changed my mind.",
    "ua": "Я передумав.",
    "ex": "I changed my mind — let's stay in instead.",
    "tip": "Change one's mind = передумати.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I changed my mind"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I changed my mind — let's stay in instead.",
      "— I changed my mind. — Sounds good to me."
    ]
  },
  {
    "en": "I'm not sure yet.",
    "ua": "Я ще не впевнений.",
    "ex": "— Are you coming? — I'm not sure yet.",
    "tip": "Yet = ще (наразі).",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm not sure yet"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Are you coming? — I'm not sure yet.",
      "— I'm not sure yet. — Yeah, totally."
    ]
  },
  {
    "en": "I guess so.",
    "ua": "Мабуть, так.",
    "ex": "— Is he coming? — I guess so.",
    "tip": "Guess = припускати. I suppose so — те саме.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I guess so"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Is he coming? — I guess so.",
      "— I guess so. — Yeah, totally."
    ]
  },
  {
    "en": "I hope so.",
    "ua": "Сподіваюсь, так.",
    "ex": "— Will it be sunny tomorrow? — I hope so!",
    "tip": "Hope so = сподіваюсь на це.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I hope so"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Will it be sunny tomorrow? — I hope so!",
      "— I hope so. — Yeah, totally."
    ]
  },
  {
    "en": "I hope not.",
    "ua": "Сподіваюсь, ні.",
    "ex": "— Will it rain? — I hope not — we're having a picnic.",
    "tip": "Hope not = сподіваюсь, що ні.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I hope not"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Will it rain? — I hope not — we're having a picnic.",
      "— I hope not. — Yeah, totally."
    ]
  },
  {
    "en": "Fingers crossed!",
    "ua": "Тримаю кулаки!",
    "ex": "The interview is tomorrow — fingers crossed!",
    "tip": "Ідіома: сподіваємось на удачу.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Fingers crossed"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "The interview is tomorrow — fingers crossed!",
      "— Fingers crossed! — Yeah, totally."
    ]
  },
  {
    "en": "That's exactly what I thought.",
    "ua": "Саме так я і думав.",
    "ex": "— He's going to quit. — That's exactly what I thought!",
    "tip": "Exactly = саме так.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "exactly what I thought"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— He's going to quit. — That's exactly what I thought!",
      "— That's exactly what I thought. — Sounds good to me."
    ]
  },
  {
    "en": "You're right about that.",
    "ua": "Ти маєш рацію в цьому.",
    "ex": "— It's harder than it looks. — You're right about that.",
    "tip": "Right about = правий щодо.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "You're right about that"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— It's harder than it looks. — You're right about that.",
      "— You're right about that. — Sounds good to me."
    ]
  },
  {
    "en": "I see what you mean.",
    "ua": "Розумію, що ти маєш на увазі.",
    "ex": "— It's too risky. — I see what you mean, but we should try.",
    "tip": "See what you mean = розумію сенс.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I see what you mean"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— It's too risky. — I see what you mean, but we should try.",
      "— I see what you mean. — Sounds good to me."
    ]
  },
  {
    "en": "That's news to me.",
    "ua": "Я про це не знав.",
    "ex": "— They're moving to Berlin. — That's news to me!",
    "tip": "News to me = вперше чую.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "That's news to me"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— They're moving to Berlin. — That's news to me!",
      "— That's news to me. — Sounds good to me."
    ]
  },
  {
    "en": "Tell me about it.",
    "ua": "І не кажи! / Саме так!",
    "ex": "— Mondays are the worst. — Tell me about it!",
    "tip": "Ідіома згоди: «і мені так само».",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Tell me about it"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Mondays are the worst. — Tell me about it!",
      "— Tell me about it. — Same here!"
    ]
  },
  {
    "en": "You never know.",
    "ua": "Ніколи не знаєш.",
    "ex": "Try it — you never know, you might love it.",
    "tip": "You never know = може статися будь-що.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "You never know"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Try it — you never know, you might love it.",
      "— You never know. — Yeah, totally."
    ]
  },
  {
    "en": "It happens.",
    "ua": "Так буває.",
    "ex": "— I spilled coffee on my shirt. — It happens, don't worry.",
    "tip": "It happens = таке трапляється.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "It happens"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— I spilled coffee on my shirt. — It happens, don't worry.",
      "— It happens. — Sounds good to me."
    ]
  },
  {
    "en": "These things happen.",
    "ua": "Таке трапляється.",
    "ex": "These things happen — no need to stress about it.",
    "tip": "Заспокійлива фраза.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "These things happen"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "These things happen — no need to stress about it.",
      "— These things happen. — Same here!"
    ]
  },
  {
    "en": "It could be worse.",
    "ua": "Могло б бути й гірше.",
    "ex": "I lost my wallet, but it could be worse — at least I have my passport.",
    "tip": "Could be worse = не найгірший сценарій.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "It could be worse"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I lost my wallet, but it could be worse — at least I have my passport.",
      "— It could be worse. — Sounds good to me."
    ]
  },
  {
    "en": "Look on the bright side.",
    "ua": "Дивись на світлий бік.",
    "ex": "You missed the bus, but look on the bright side — you got extra exercise.",
    "tip": "Bright side = позитивна сторона.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "bright side"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "You missed the bus, but look on the bright side — you got extra exercise.",
      "— Look on the bright side. — Sounds good to me."
    ]
  },
  {
    "en": "Cheer up!",
    "ua": "Не сумуй! / Бодрись!",
    "ex": "Cheer up — things will get better!",
    "tip": "Cheer up = підбадьорити.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Cheer up"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Cheer up — things will get better!",
      "— Cheer up! — Yeah, totally."
    ]
  },
  {
    "en": "I'm so excited!",
    "ua": "Я так схвильований / радий!",
    "ex": "I'm so excited — the concert is tonight!",
    "tip": "Excited = у захваті, в очікуванні.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm so excited"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I'm so excited — the concert is tonight!",
      "— I'm so excited! — Sounds good to me."
    ]
  },
  {
    "en": "I'm worried about it.",
    "ua": "Я хвилююсь через це.",
    "ex": "I'm worried about it — we haven't heard back yet.",
    "tip": "Worried about = хвилюватися через.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "worried about it"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I'm worried about it — we haven't heard back yet.",
      "— I'm worried about it. — Sounds good to me."
    ]
  },
  {
    "en": "Don't stress about it.",
    "ua": "Не переживай через це.",
    "ex": "Don't stress about it — we'll figure it out.",
    "tip": "Stress about = переживати через.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Don't stress about it"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Don't stress about it — we'll figure it out.",
      "— Don't stress about it. — Same here!"
    ]
  },
  {
    "en": "I'm stressed out.",
    "ua": "Я на нервах / у стресі.",
    "ex": "I'm stressed out — too much work this week.",
    "tip": "Stressed out = дуже напружений.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "stressed out"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I'm stressed out — too much work this week.",
      "— I'm stressed out. — Same here!"
    ]
  },
  {
    "en": "I need to clear my head.",
    "ua": "Мені треба провітрити голову.",
    "ex": "I need to clear my head — going for a walk.",
    "tip": "Clear my head = заспокоїти думки.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "clear my head"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I need to clear my head — going for a walk.",
      "— I need to clear my head. — Yeah, totally."
    ]
  },
  {
    "en": "I'm beat.",
    "ua": "Я вимотаний.",
    "ex": "I'm beat — I'm going straight to bed.",
    "tip": "Beat = дуже втомлений (неформально).",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm beat"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I'm beat — I'm going straight to bed.",
      "— I'm beat. — Yeah, totally."
    ]
  },
  {
    "en": "I could use a coffee.",
    "ua": "Мені б не завадила кава.",
    "ex": "I could use a coffee — I didn't sleep much.",
    "tip": "Could use = не завадило б мати.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I could use a coffee"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I could use a coffee — I didn't sleep much.",
      "— I could use a coffee. — Sounds good to me."
    ]
  },
  {
    "en": "I'm running low on cash.",
    "ua": "У мене мало готівки.",
    "ex": "I'm running low on cash — is there an ATM nearby?",
    "tip": "Run low on = закінчується.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "running low on cash"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I'm running low on cash — is there an ATM nearby?",
      "— I'm running low on cash. — Yeah, totally."
    ]
  },
  {
    "en": "I'm broke.",
    "ua": "Я без грошей.",
    "ex": "I'm broke until payday — can you cover me?",
    "tip": "Broke = без грошей (неформально).",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "I'm broke"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I'm broke until payday — can you cover me?",
      "— I'm broke. — Yeah, totally."
    ]
  },
  {
    "en": "That's a bit pricey.",
    "ua": "Це трохи дороговато.",
    "ex": "Nice place, but that's a bit pricey for me.",
    "tip": "Pricey = дороговато (неформально).",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "a bit pricey"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Nice place, but that's a bit pricey for me.",
      "— That's a bit pricey. — Same here!"
    ]
  },
  {
    "en": "It's a good deal.",
    "ua": "Це вигідна пропозиція.",
    "ex": "Fifty percent off — it's a good deal!",
    "tip": "Good deal = вигідно.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "It's a good deal"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "Fifty percent off — it's a good deal!",
      "— It's a good deal. — Sounds good to me."
    ]
  },
  {
    "en": "I'm on a budget.",
    "ua": "Я обмежений у витратах.",
    "ex": "I'm on a budget — looking for something affordable.",
    "tip": "On a budget = економлю.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "on a budget"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I'm on a budget — looking for something affordable.",
      "— I'm on a budget. — Sounds good to me."
    ]
  },
  {
    "en": "It's worth a try.",
    "ua": "Варто спробувати.",
    "ex": "I've never had it, but it's worth a try.",
    "tip": "Worth a try = варто спробувати.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "worth a try"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "I've never had it, but it's worth a try.",
      "— It's worth a try. — Yeah, totally."
    ]
  },
  {
    "en": "I totally agree.",
    "ua": "Повністю згоден.",
    "ex": "— The weather is perfect. — I totally agree.",
    "tip": "Totally agree = повністю згоден.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "totally agree"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— The weather is perfect. — I totally agree.",
      "— I totally agree. — Sure, no problem."
    ]
  },
  {
    "en": "It depends on the weather.",
    "ua": "Залежить від погоди.",
    "ex": "— Are we going out? — It depends on the weather.",
    "tip": "It depends = залежить.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "It depends"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Are we going out? — It depends on the weather.",
      "— It depends on the weather. — Sure, no problem."
    ]
  },
  {
    "en": "I'll keep you posted.",
    "ua": "Триматиму в курсі.",
    "ex": "— Any news on the tickets? — I'll keep you posted.",
    "tip": "Keep posted = інформувати.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "keep you posted"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Any news on the tickets? — I'll keep you posted.",
      "— I'll keep you posted. — Sure, no problem."
    ]
  },
  {
    "en": "No rush.",
    "ua": "Не поспішай. / Без поспіху.",
    "ex": "— When can you send it? — No rush — whenever works.",
    "tip": "No rush = не терміново.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "No rush"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— When can you send it? — No rush — whenever works.",
      "— No rush. — Sure, no problem."
    ]
  },
  {
    "en": "I'm running late.",
    "ua": "Я запізнююсь.",
    "ex": "— I'm running late — start without me.",
    "tip": "Running late = запізнююсь.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "running late"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— I'm running late — start without me.",
      "— I'm running late. — Sure, no problem."
    ]
  },
  {
    "en": "Long time no see!",
    "ua": "Давно не бачились!",
    "ex": "— Hey! Long time no see! — I know — how have you been?",
    "tip": "Classic informal greeting.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Long time no see"
    ],
    "situation": "У повсякденній розмові з людьми",
    "examples": [
      "— Hey! Long time no see! — I know — how have you been?",
      "— Long time no see! — Sure, no problem."
    ]
  },
  {
    "en": "Sounds like a plan.",
    "ua": "Звучить як план.",
    "ex": "— Let's meet at six. — Sounds like a plan!",
    "tip": "Sounds like a plan = домовились.",
    "cat": "everyday",
    "tag": "💬 Повсякдень",
    "anchors": [
      "Sounds like a plan"
    ],
    "situation": "У повсякденній розмові",
    "examples": [
      "— Let's meet at six. — Sounds like a plan!",
      "— Sounds like a plan. — Yeah, totally."
    ]
  }
];
