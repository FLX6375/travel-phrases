// 🗺️ Вулиця — 26 phrases
const PHRASES_STREET = [
  {
    "en": "Excuse me, how do I get to…?",
    "ua": "Вибачте, як мені дістатися до…?",
    "ex": "Excuse me, how do I get to the train station / the city centre?",
    "tip": "How do I get to...? — найпоширеніша фраза для запиту напрямку",
    "rule": "Глагол 'get to' в значении 'добираться/доезжать'. Самый ходовой способ спросить дорогу.",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "Excuse me, how do I get to"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "Excuse me, how do I get to the train station / the city centre?",
      "— Excuse me, how do I get to...? — Sure — it's about five minutes on foot."
    ]
  },
  {
    "en": "Is it within walking distance?",
    "ua": "Чи можна дійти пішки?",
    "ex": "— Is the museum within walking distance? — About 15 minutes on foot.",
    "tip": "Within walking distance = пішки дійти. Дуже природна фраза англійською",
    "rule": "'Within' означает 'в пределах'. Walking distance — расстояние ходьбы. Wildcard конструкция.",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "within walking distance"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "— Is the museum within walking distance? — About 15 minutes on foot.",
      "— Is it within walking distance? — No problem. You can't miss it."
    ]
  },
  {
    "en": "Could you point me in the right direction?",
    "ua": "Чи не могли б ви вказати мне правильний напрямок?",
    "ex": "I'm looking for the main square. Could you point me in the right direction?",
    "tip": "Point me in the right direction — ідіома, буквально: 'вказати в правильний бік'",
    "rule": "Глагол 'point' (указывать пальцем) + в каком направлении (предлог IN, а не TO!).",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "point me in the right direction"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "I'm looking for the main square. Could you point me in the right direction?",
      "— Could you point me in the right direction? — Sure — it's about five minutes on foot."
    ]
  },
  {
    "en": "I think I'm lost. Could you help me?",
    "ua": "Здається, я загубився. Чи не могли б ви допомогти?",
    "ex": "I think I'm lost — I was looking for the bus stop but ended up here.",
    "tip": "I think I'm lost — чесне і просте. Люди зазвичай із задоволенням допомагають!",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "I think I'm lost",
      "Could you"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "I think I'm lost — I was looking for the bus stop but ended up here.",
      "— I think I'm lost. Could you help me? — Sure — it's about five minutes on foot."
    ]
  },
  {
    "en": "How far is it from here?",
    "ua": "Як далеко це звідси?",
    "ex": "— How far is it? — About two kilometres, maybe a 20-minute walk.",
    "tip": "How far is it? — питаєш відстань. Відповідь може быть в км або хвилинах ходьби",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "How far is it from here?"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "— How far is it? — About two kilometres, maybe a 20-minute walk.",
      "— How far is it from here? — No problem. You can't miss it."
    ]
  },
  {
    "en": "Is there a public toilet nearby?",
    "ua": "Чи є поблизу громадський туалет?",
    "ex": "— Is there a public toilet nearby? — Yes, just around the corner.",
    "tip": "Public toilet (UK) = restroom (US). Корисна фраза в будь-якій подорожі!",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "Is there a",
      "nearby?"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "— Is there a public toilet nearby? — Yes, just around the corner.",
      "— Is there a public toilet nearby? — Sure — it's about five minutes on foot."
    ]
  },
  {
    "en": "Which way is the town centre?",
    "ua": "В якому напрямку центр міста?",
    "ex": "— Which way is the town centre? — Straight ahead, about five minutes.",
    "tip": "Which way is...? — запитуєш напрямок, а не конкретний шлях",
    "rule": "'Which way' буквально означает 'какой из путей/дорог'. Ответом часто будет жест рукой.",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "Which way is"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "— Which way is the town centre? — Straight ahead, about five minutes.",
      "— Which way is the town centre? — No problem. You can't miss it."
    ]
  },
  {
    "en": "Is this the right way to…?",
    "ua": "Це правильний шлях до…?",
    "ex": "Is this the right way to the airport? I want to make sure.",
    "tip": "Is this the right way to...? — підтверджуєш, що рухаєшся правильно",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "Is this the right way to"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "Is this the right way to the airport? I want to make sure.",
      "— Is this the right way to...? — No problem. You can't miss it."
    ]
  },
  {
    "en": "Can you show me on the map?",
    "ua": "Чи можете ви показати мені на карті?",
    "ex": "I have Google Maps open — can you show me on the map where it is?",
    "tip": "Покажи телефон — люди охоче тикнуть пальцем у карту!",
    "rule": "Обратите внимание на предлог ON (на карте), а не IN.",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "show me on the map"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "I have Google Maps open — can you show me on the map where it is?",
      "— Can you show me on the map? — Yes, just keep straight and turn left."
    ]
  },
  {
    "en": "Is it on the left or on the right?",
    "ua": "Це зліва чи справа?",
    "ex": "— Turn at the corner. — Is it on the left or on the right? — On the right.",
    "tip": "Left = зліва, right = справа. Базово, але легко переплутати під стресом!",
    "rule": "Всегда используется с предлогом ON: 'on the left', 'on the right'.",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "on the left",
      "on the right"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "— Turn at the corner. — Is it on the left or on the right? — On the right.",
      "— Is it on the left or on the right? — No problem. You can't miss it."
    ]
  },
  {
    "en": "Could you write it down for me?",
    "ua": "Чи могли б ви написати мені це?",
    "ex": "Could you write down the address for me? My English isn't perfect.",
    "tip": "Write it down = написати. Чудова стратегія коли не розумієш на слух",
    "rule": "Фразовый глагол 'write down' (записать). Местоимение 'it' всегда разрывает этот глагол: 'write IT down'.",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "write it down for me"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "Could you write down the address for me? My English isn't perfect.",
      "— Could you write it down for me? — No problem. You can't miss it."
    ]
  },
  {
    "en": "Could you speak more slowly, please?",
    "ua": "Чи не могли б ви говорити повільніше, будь ласка?",
    "ex": "I'm sorry, could you speak more slowly? My English is still improving.",
    "tip": "Говори це без соромлячись! Носії мови охоче повільнішають",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "speak more slowly"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "I'm sorry, could you speak more slowly? My English is still improving.",
      "— Could you speak more slowly, please? — Sure — it's about five minutes on foot."
    ]
  },
  {
    "en": "I'm sorry, I didn't catch that.",
    "ua": "Вибачте, я не зрозумів цього.",
    "ex": "— The total is twenty-seven fifty. — I'm sorry, I didn't catch that.",
    "tip": "I didn't catch that = не розчув. М'якший ніж 'What?'",
    "rule": "Глагол 'catch' здесь в переносном значении 'уловить смысл/расслышать'.",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "I didn't catch that"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "— The total is twenty-seven fifty. — I'm sorry, I didn't catch that.",
      "— I'm sorry, I didn't catch that. — Sure — it's about five minutes on foot."
    ]
  },
  {
    "en": "Do you speak English?",
    "ua": "Ви говорите англійською?",
    "ex": "Excuse me, do you speak English? I need some directions.",
    "tip": "Якщо ні — спробуй: 'Do you speak French / Spanish / German?'",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "Do you speak English?"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "Excuse me, do you speak English? I need some directions.",
      "— Do you speak English? — Yes, just keep straight and turn left."
    ]
  },
  {
    "en": "Is there an ATM around here?",
    "ua": "Чи є тут банкомат?",
    "ex": "Is there an ATM around here? I need to withdraw some cash.",
    "tip": "ATM (UK: cash machine) = банкомат. Around here = поблизу",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "Is there an ATM",
      "around here?"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "Is there an ATM around here? I need to withdraw some cash.",
      "— Is there an ATM around here? — No problem. You can't miss it."
    ]
  },
  {
    "en": "Is it far from here?",
    "ua": "Це далеко звідси?",
    "ex": "— Is it far from here? — About ten minutes on foot.",
    "tip": "On foot = пішки.",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "far from here"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "— Is it far from here? — About ten minutes on foot.",
      "— Is it far from here? — Sure, no problem."
    ]
  },
  {
    "en": "Could you show me on the map?",
    "ua": "Покажете на карті?",
    "ex": "— Could you show me on the map? — Sure, you're here — go straight.",
    "tip": "Show on the map — коли не розумієш напрямки.",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "show me on the map"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "— Could you show me on the map? — Sure, you're here — go straight.",
      "— Could you show me on the map? — Sure, no problem."
    ]
  },
  {
    "en": "Am I going the right way?",
    "ua": "Я йду правильно?",
    "ex": "— Am I going the right way to the station? — Yes, keep going straight.",
    "tip": "Right way = правильний напрямок.",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "right way"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "— Am I going the right way to the station? — Yes, keep going straight.",
      "— Am I going the right way? — Sure, no problem."
    ]
  },
  {
    "en": "Is there a cash machine nearby?",
    "ua": "Чи є банкомат поруч?",
    "ex": "— Is there a cash machine nearby? — Yes, at the corner shop.",
    "tip": "Cash machine / ATM = банкомат.",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "cash machine"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "— Is there a cash machine nearby? — Yes, at the corner shop.",
      "— Is there a cash machine nearby? — Sure, no problem."
    ]
  },
  {
    "en": "What's the best way to get there?",
    "ua": "Як найкраще туди дістатися?",
    "ex": "— What's the best way to get there? — Take the metro — it's faster.",
    "tip": "Best way = найкращий спосіб.",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "best way to get"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "— What's the best way to get there? — Take the metro — it's faster.",
      "— What's the best way to get there? — Sure, no problem."
    ]
  },
  {
    "en": "Is this area safe at night?",
    "ua": "Чи безпечний цей район вночі?",
    "ex": "— Is this area safe at night? — Generally yes, but stay on main streets.",
    "tip": "Safe at night = безпечно вночі.",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "safe at night"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "— Is this area safe at night? — Generally yes, but stay on main streets.",
      "— Is this area safe at night? — Sure, no problem."
    ]
  },
  {
    "en": "Could you write that down for me?",
    "ua": "Чи можете записати?",
    "ex": "— Could you write that down for me? — Of course — here you go.",
    "tip": "Write down = записати на папері.",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "write that down"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "— Could you write that down for me? — Of course — here you go.",
      "— Could you write that down for me? — Sure, no problem."
    ]
  },
  {
    "en": "I think I'm lost.",
    "ua": "Здається, я загубився.",
    "ex": "— Excuse me, I think I'm lost. — Where are you trying to go?",
    "tip": "Lost = загубився.",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "I'm lost"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "— Excuse me, I think I'm lost. — Where are you trying to go?",
      "— I think I'm lost. — Sure, no problem."
    ]
  },
  {
    "en": "How long does it take to walk?",
    "ua": "Скільки йти пішки?",
    "ex": "— How long does it take to walk? — Maybe fifteen minutes.",
    "tip": "How long does it take = скільки часу займе.",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "How long does it take"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "— How long does it take to walk? — Maybe fifteen minutes.",
      "— How long does it take to walk? — Sure, no problem."
    ]
  },
  {
    "en": "Can I cross here?",
    "ua": "Чи можна тут переходити?",
    "ex": "— Can I cross here? — Yes, the light is green.",
    "tip": "Cross = переходити вулицю.",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "Can I cross"
    ],
    "situation": "На вулиці, коли спілкуєшся з місцевими",
    "examples": [
      "— Can I cross here? — Yes, the light is green.",
      "— Can I cross here? — Sure, no problem."
    ]
  },
  {
    "en": "Is this the right bus stop?",
    "ua": "Це правильна зупинка?",
    "ex": "— Is this the right bus stop for the museum? — Yes, number 12 stops here.",
    "tip": "Bus stop = зупинка автобуса.",
    "cat": "street",
    "tag": "🗺️ Вулиця",
    "anchors": [
      "right bus stop"
    ],
    "situation": "На вулиці",
    "examples": [
      "— Is this the right bus stop for the museum? — Yes, number 12 stops here.",
      "— Is this the right bus stop? — Yes, just keep straight and turn left."
    ]
  }
];
