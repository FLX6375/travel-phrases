const GRAMMAR_RULES = [
  {
    id: 'polite-request',
    icon: '🙏',
    category: 'requests',
    title: 'Ввічливі прохання: Could you / Could I',
    template: 'Could you [дія]? / Could I have [щось]?',
    summary: 'Найпоширеніший спосіб попросити щось ввічливо. Замість грубого "Give me" або "I want".',
    whenToUse: 'У готелі, кафе, магазині, на вулиці — скрізь, де ти просиш допомогу або послугу.',
    structure: 'Could + підмет (you/I) + дієслово в базовій формі. Could — минула форма can, але тут означає "чи не могли б" (не про минуле!).',
    examples: [
      'Could you help me? — Чи не могли б ви мені допомогти?',
      'Could I have the bill? — Чи можна рахунок?',
      'Could you speak more slowly? — Чи не могли б ви говорити повільніше?'
    ],
    mistakes: [
      '❌ Could you to help me? → ✅ Could you help me? (після could — дієслово БЕЗ to)',
      '❌ Can I have a coffee? (грубувато) → ✅ Could I have a coffee, please? (ввічливіше)'
    ],
    patterns: ['Could you', 'Could I have', 'Could I get'],
    whyItWorks: 'Англійська культура цінує опосередкованість: замість прямого наказу носії «завертають» прохання в питання. Could — минула форма can, але тут це не минулий час, а «дистанція ввічливості» (як українське «чи не могли б»). Тому Could you… звучить м\'якше за Can you… і набагато м\'якше за Give me.'
  },
  {
    id: 'would-like',
    icon: '☕',
    category: 'requests',
    title: 'М\'яке бажання: I\'d like to…',
    template: 'I\'d like to [дія] / I\'d like [іменник]',
    summary: 'Ввічливий спосіб сказати "я хочу" без грубості. I\'d = I would.',
    whenToUse: 'Замовлення в кафе, бронювання, висловлення бажання в формальній ситуації.',
    structure: 'I\'d like + to + дієслово АБО I\'d like + іменник. Would — умовний спосіб, робить фразу м\'якшою.',
    examples: [
      'I\'d like to book a room. — Я хотів би забронювати кімнату.',
      'I\'d like a table for two. — Столик на двох, будь ласка.',
      'I\'d like to return this. — Я хотів би це повернути.'
    ],
    mistakes: [
      '❌ I want a coffee (прямо, різко) → ✅ I\'d like a coffee, please',
      '❌ I\'d like booking → ✅ I\'d like to book (після like to — інфінітив)'
    ],
    patterns: ['I\'d like to', 'I\'d like a', 'I\'d like'],
    whyItWorks: 'Would тут не про «умову», а про дистанцію: I want звучить як вимога, I\'d like — як побажання. Носії в сервісі майже завжди кажуть I\'d like, бо це стандарт ввічливості. Like + to + дієслово, або like + іменник без to.'
  },
  {
    id: 'location-questions',
    icon: '📍',
    category: 'questions',
    title: 'Запитання про місце: Where is / How do I get to',
    template: 'Where is [місце]? / How do I get to [місце]?',
    summary: 'Два ключові шаблони: "де знаходиться?" і "як туди дістатися?"',
    whenToUse: 'На вулиці, в аеропорту, в готелі — коли шукаєш щось або питаєш дорогу.',
    structure: 'Where is + артикль + місце (прямий порядок слів!). How do I get to + місце (get to = дістатися до).',
    examples: [
      'Where is the nearest pharmacy? — Де найближча аптека?',
      'How do I get to the station? — Як дістатися до вокзалу?',
      'Is there a bank nearby? — Чи є банк поблизу?'
    ],
    mistakes: [
      '❌ Where is station? → ✅ Where is THE station? (потрібен артикль)',
      '❌ How I get to…? → ✅ How DO I get to…? (потрібен допоміжний do)',
      '❌ reach to the airport → ✅ reach the airport (reach без to)'
    ],
    patterns: ['Where is', 'How do I get to', 'Is there a', 'nearby'],
    whyItWorks: 'В англійській іменник зазвичай потребує артикля (the station, a bank). Where is — про місце зараз; How do I get to — про маршрут (get to = дієти до). Do в How do I — обов\'язковий допоміжник для Present Simple.'
  },
  {
    id: 'indirect-questions',
    icon: '🔗',
    category: 'questions',
    title: 'Непрямі питання: Could you tell me where…',
    template: 'Could you tell me where [місце] is?',
    summary: 'Ввічливе питання через прохання. Після where/what/when — прямий порядок слів (не як у питанні!).',
    whenToUse: 'Коли хочеш звучати особливо ввічливо або не впевнений у собі.',
    structure: 'Could you tell me + питальне слово + підмет + дієслово. НЕ "where is the hotel?" а "where the hotel IS".',
    examples: [
      'Could you tell me where the hotel is? — Де готель?',
      'Do you know what time the train leaves? — О котрій відходить поїзд?',
      'I was wondering if you could help me. — Чи не могли б ви допомогти?'
    ],
    mistakes: [
      '❌ tell me where is the hotel → ✅ tell me where the hotel IS',
      '❌ I was wondering if you can… (менш ввічливо) → ✅ I was wondering if you COULD…'
    ],
    patterns: ['Could you tell me where', 'I was wondering if', 'Do you know what'],
    whyItWorks: 'Головне речення вже питальне (Could you tell me?), тому всередині порядок слів стає прямим — як у звичайному реченні: where the hotel IS, а не where IS the hotel. Це «непряме питання» — звучить м\'якше, ніж зупинити людину прямим Where is…?'
  },
  {
    id: 'present-perfect',
    icon: '⏳',
    category: 'tenses',
    title: 'Present Perfect: I\'ve lost / has been stolen',
    template: 'I\'ve [дія] / It has been [дія]',
    summary: 'Минула дія з результатом ЗАРАЗ. "Я загубив" (і зараз немає), "вкрали" (і зараз немає).',
    whenToUse: 'Втрата речей, скасування рейсу, помилка в рахунку — коли важливий результат у теперішньому.',
    structure: 'have/has + V3 (третя форма). Пасив: has been + V3. I\'ve = I have.',
    examples: [
      'I\'ve lost my passport. — Я загубив паспорт.',
      'My bag has been stolen. — Мою сумку вкрали.',
      'I think there\'s been a mistake. — Здається, є помилка.'
    ],
    mistakes: [
      '❌ I lost my passport yesterday (конкретний час) vs ✅ I\'ve lost it (результат зараз)',
      '❌ My bag is stolen → ✅ My bag HAS BEEN stolen (пасив)'
    ],
    patterns: ['I\'ve lost', 'has been', 'there\'s been'],
    whyItWorks: 'Present Perfect з\'єднує минуле з теперішнім: дія вже сталась, але важливий результат ЗАРАЗ (паспорта немає, сумку вкрали). Якщо називаєш точний час (yesterday at 5) — потрібен Past Simple, не Perfect.'
  },
  {
    id: 'phrasal-verbs',
    icon: '🔄',
    category: 'verbs',
    title: 'Фразові дієслова: get off, try on, drop off',
    template: '[дієслово] + [прийменник/частка]',
    summary: 'Два+ слова = нове значення. get off ≠ get, try on ≠ try. Місцеім\'я часто посередині.',
    whenToUse: 'Транспорт, магазин, таксі — скрізь, де носії кажуть "природні" фрази.',
    structure: 'Дієслово + частка/прийменник. Об\'єкт-місцеім\'я ставиться МІЖ частинами: drop ME off, try THIS on.',
    examples: [
      'I need to get off at the next stop. — Вийти на наступній зупинці.',
      'Could I try this on? — Чи можу приміряти?',
      'Could you drop me off here? — Висадіть мене тут.'
    ],
    mistakes: [
      '❌ I exit the bus → ✅ I get off the bus',
      '❌ drop off me → ✅ drop me off',
      '❌ try on it → ✅ try it on'
    ],
    patterns: ['get off', 'try on', 'drop off', 'pick up', 'write down'],
    whyItWorks: 'Прийменник/частка змінює значення дієслова: get off ≠ get. Якщо об\'єкт — місцезайменник (me, it), він ставиться МІЖ частинами: drop me off, try it on. Це не «граматика для складності» — так реально говорять носії.'
  },
  {
    id: 'agreeing',
    icon: '🤝',
    category: 'conversation',
    title: 'Згода та незгода в розмові',
    template: 'I agree / I\'m afraid I disagree / That makes sense',
    summary: 'Природні реакції в діалозі — не просто Yes/No, а живі фрази.',
    whenToUse: 'Будь-яка розмова: обговорення планів, думок, пропозицій.',
    structure: 'AGREE — дієслово (не "I am agree"!). I\'m afraid = ввічливе вступне слово ("боюся, що…").',
    examples: [
      'I totally agree with you. — Повністю згоден.',
      'That makes sense. — Це логічно.',
      'I\'m afraid I have to disagree. — Боюся, не погоджуюсь.'
    ],
    mistakes: [
      '❌ I am agree → ✅ I agree',
      '❌ I don\'t agree with it (різко) → ✅ I\'m afraid I have to disagree (м\'якше)'
    ],
    patterns: ['I agree', 'That makes sense', 'I\'m afraid', 'I couldn\'t agree more'],
    whyItWorks: 'Agree — дієслово, тому I agree, а не I am agree. I\'m afraid тут не «боюся», а ввічливий вступ перед незгодою — дає співрозмовнику зрозуміти, що ти не атакуєш, а висловлюєш іншу думку.'
  },
  {
    id: 'reactions',
    icon: '💬',
    category: 'conversation',
    title: 'Реакції та відповіді на пропозиції',
    template: 'That sounds great! / I\'d rather not / That works for me',
    summary: 'Як природно відповідати на запрошення, пропозиції та питання.',
    whenToUse: 'Коли хтось щось пропонує, питає думку, або ти обираєш між варіантами.',
    structure: 'That sounds + прикметник. I\'d rather + not/дієслово. That works FOR me (предлог for!).',
    examples: [
      'That sounds great! — Звучить чудово!',
      'I\'d rather not. — Я б краще відмовився.',
      'That works for me. — Мене влаштовує.',
      'I\'ll go with coffee. — Оберу каву.'
    ],
    mistakes: [
      '❌ That works for me the time → ✅ That works for me',
      '❌ I\'d rather to not → ✅ I\'d rather not'
    ],
    patterns: ['That sounds', 'I\'d rather', 'That works for me', 'I\'ll go with'],
    whyItWorks: 'That sounds + прикметник — реакція на ідею, не буквальний «звук». I\'d rather = would rather — усталена конструкція «краще б». Works for me: work тут означає «підходить», обов\'язково з for.'
  },
  {
    id: 'softening',
    icon: '🌸',
    category: 'conversation',
    title: 'Пом\'якшення: I think / I\'m not sure / To be honest',
    template: 'I think [твердження] / To be honest,… / I\'m not sure about that',
    summary: 'Роблять мову менш категоричною — носії рідко кажуть напряму "ти не правий".',
    whenToUse: 'Коли сумніваєшся, не впевнений, або хочеш сказати неприємну правду м\'яко.',
    structure: 'I think + речення. To be honest + кома + справжня думка. I\'m not sure ABOUT + тема.',
    examples: [
      'I think I\'m lost. — Здається, я загубився.',
      'To be honest, it\'s a bit expensive. — Якщо чесно, трохи дорого.',
      'I\'m not sure about that. — Я не впевнений у цьому.'
    ],
    mistakes: [
      '❌ I think so about it → ✅ I\'m not sure about that',
      '❌ Honestly speaking me → ✅ To be honest, I think…'
    ],
    patterns: ['I think', 'To be honest', 'I\'m not sure', 'I suppose so'],
    whyItWorks: 'Англійська уникає прямих суперечок. I think / I\'m not sure дають «простір» для іншої думки. To be honest сигналізує: зараз скажу відверту думку — це соціально прийнятний спосіб бути чесним без грубості.'
  },
  {
    id: 'future-will',
    icon: '🎯',
    category: 'tenses',
    title: 'Миттєве рішення: I\'ll have / I\'ll go with',
    template: 'I\'ll [дія] — рішення в момент мовлення',
    summary: 'Will використовують для рішення, прийнятого ПРЯМО ЗАРАЗ (замовлення в кафе).',
    whenToUse: 'Замовлення їжі, вибір між варіантами, обіцянки "зараз зроблю".',
    structure: 'I\'ll = I will + дієслово. Без to після will.',
    examples: [
      'I\'ll have the soup, please. — Я візьму суп.',
      'I\'ll go with the blue one. — Оберу синій.',
      'I\'ll be right back. — Зараз повернуся.'
    ],
    mistakes: [
      '❌ I will to have → ✅ I\'ll have',
      '❌ I have the soup (зараз) → ✅ I\'ll have (рішення зараз)'
    ],
    patterns: ['I\'ll have', 'I\'ll go with', 'I\'ll be right back'],
    whyItWorks: 'Will + дієслово = рішення в момент мовлення (зараз, дивлячись у меню). Це не «майбутній час у календарному сенсі», а «я щойно вирішив». Тому в кафе кажуть I\'ll have the soup, а не I\'m having.'
  },
  {
    id: 'passive-voice',
    icon: '⚙️',
    category: 'grammar',
    title: 'Пасивний стан: is included / is taken / is expected',
    template: 'Is [щось] + V3?',
    summary: 'Фокус на об\'єкті, а не на тому, хто діє. "Сніданок включений?" а не "хтось включив".',
    whenToUse: 'Готель, кафе, транспорт — питання про стан речей.',
    structure: 'be + V3 (третя форма). Is this seat taken? = чи зайняте місце?',
    examples: [
      'Is breakfast included? — Сніданок включений?',
      'Is this seat taken? — Це місце зайняте?',
      'Is a tip expected here? — Тут прийнято залишати чайові?'
    ],
    mistakes: [
      '❌ Is this seat taking? → ✅ Is this seat TAKEN?',
      '❌ Is included breakfast? → ✅ Is breakfast included?'
    ],
    patterns: ['is included', 'is taken', 'is expected', 'has been'],
    whyItWorks: 'Пасив переносить фокус на об\'єкт: не «хтось включив сніданок», а «сніданок включений». V3 (included, taken) — дія «зроблена» над об\'єктом. У питаннях: Is + об\'єкт + V3.'
  },
  {
    id: 'clarification',
    icon: '❓',
    category: 'conversation',
    title: 'Уточнення: I didn\'t catch that / What do you mean?',
    template: 'Could you say that again? / What do you mean by that?',
    summary: 'Коли не зрозумів — не кажи грубо "What?!" а ці ввічливі фрази.',
    whenToUse: 'Будь-яка розмова з носієм, особливо на швидкій мові або з акцентом.',
    structure: 'I didn\'t catch that = не розчув (catch у переносному значенні). Say AGAIN, не repeat (формальніше).',
    examples: [
      'I\'m sorry, I didn\'t catch that. — Вибачте, не зрозумів.',
      'Could you say that again? — Повторіть, будь ласка?',
      'What do you mean by that? — Що ви маєте на увазі?'
    ],
    mistakes: [
      '❌ What?! (грубо) → ✅ Sorry, I didn\'t catch that',
      '❌ What you mean? → ✅ What do you MEAN?'
    ],
    patterns: ['didn\'t catch', 'say that again', 'What do you mean', 'speak more slowly'],
    whyItWorks: 'Catch у значенні «зловити/розчути» — розмовний, але ввічливий спосіб сказати «не зрозумів». What?! різко обриває розмову; I didn\'t catch that зберігає контакт і дає зрозуміти, що проблема в розумінні, а не в співрозмовнику.'
  },
  {
    id: 'would-you-mind',
    icon: '🚪',
    category: 'requests',
    title: 'Дозвіл: Would you mind if I… / Do you mind if I…',
    template: 'Would you mind if I [Past Simple]?',
    summary: 'Найввічливіший спосіб попросити дозволу — «ви не проти, якщо я…?»',
    whenToUse: 'Посісти поруч, відкрити вікно, увійти, сфотографувати — коли потрібен дозвіл, а не послуга.',
    structure: 'Mind if I + дієслово в МИНУЛОМУ часі (sat, not sit). Would you mind — формальніше за Do you mind.',
    examples: [
      'Would you mind if I sat here? — Ви не проти, якщо я сяду тут?',
      'Do you mind if I open the window? — Не проти, якщо я відкрию вікно?',
      'Would you mind waiting a moment? — Не могли б ви трохи почекати?'
    ],
    mistakes: [
      '❌ Would you mind if I sit here? → ✅ Would you mind if I SAT here?',
      '❌ Do you mind to open? → ✅ Do you mind if I open?'
    ],
    patterns: ['Would you mind if I', 'Do you mind if I', 'Would you mind'],
    whyItWorks: 'Mind if I… — ідіома «не проти?». Після if використовують Past Simple (sat), хоча мова про теперішнє/майбутнє — це ще один шар ввічливості («ніби гіпотетично»). Відповідь: Not at all / Go ahead.'
  },
  {
    id: 'present-continuous',
    icon: '🏃',
    category: 'tenses',
    title: 'Процес зараз: I\'m running late / I\'m doing well',
    template: 'I\'m [дієслово-ing] — дія в процесі',
    summary: 'Щось відбувається зараз або в поточний період. Am/is/are + V-ing.',
    whenToUse: 'Запізнення, самопочуття, «я зараз зайнятий», погода (it\'s raining).',
    structure: 'be (am/is/are) + дієслово з -ing. I\'m running late = я в процесі запізнення (ще в дорозі).',
    examples: [
      'I\'m running a bit late. — Я трохи запізнююсь.',
      'I\'m doing well, thanks. — У мене все добре.',
      'I\'m getting used to it. — Я звикаю до цього.'
    ],
    mistakes: [
      '❌ I am run late → ✅ I am RUNNING late',
      '❌ I\'m knowing him → ✅ I know him (-ing не з «станами»: know, like, want)'
    ],
    patterns: ['I\'m running', 'I\'m doing', 'I\'m getting', 'It\'s raining', 'I\'m busy'],
    whyItWorks: 'Continuous підкреслює процес: running late = «зараз у ситуації запізнення». Для станів (know, want, like) -ing не використовують — тільки для дій і тимчасових ситуацій.'
  },
  {
    id: 'tag-questions',
    icon: '🌤️',
    category: 'grammar',
    title: 'Питання-хвостики: Nice weather, isn\'t it?',
    template: '[Речення], [doesn\'t/didn\'t/isn\'t it]?',
    summary: 'Коротке питання в кінці речення для підтвердження або small talk.',
    whenToUse: 'Погода, думки, легка розмова — коли хочеш почути «так, згоден».',
    structure: 'Позитивне речення → негативний хвостик (isn\'t it?). Негативне → позитивний (is it?).',
    examples: [
      'Nice weather, isn\'t it? — Гарна погода, чи не так?',
      'It\'s a bit pricey, isn\'t it? — Трохи дороговато, правда?',
      'You\'re from Ukraine, aren\'t you? — Ви з України, так?'
    ],
    mistakes: [
      '❌ Nice weather, is it? → ✅ Nice weather, ISN\'T it?',
      '❌ She is nice, isn\'t she? (тут правильно!) vs ❌ She is nice, is she?'
    ],
    patterns: ['isn\'t it', 'don\'t you', 'aren\'t you', 'Nice weather'],
    whyItWorks: 'Tag question «дзеркалить» допоміжне дієслово з основного речення. Позитив + негативний tag — запрошення до згоди. Це класичний small talk прийом у британській англійській.'
  },
  {
    id: 'look-forward',
    icon: '📅',
    category: 'tenses',
    title: 'Очікування: I\'m looking forward to…',
    template: 'I\'m looking forward to [-ing / it / noun]',
    summary: 'Чекаю з нетерпінням. Після to — тільки -ing або іменник, НЕ інфінітив.',
    whenToUse: 'Зустрічі, події, відповідь на запрошення.',
    structure: 'look forward to + V-ing або it/the trip. To тут прийменник, не частка інфінітиву!',
    examples: [
      'I\'m looking forward to it. — Чекаю з нетерпінням.',
      'I\'m looking forward to seeing you. — Чекаю на зустріч.',
      'Looking forward to your reply. — (лист) Чекаю на відповідь.'
    ],
    mistakes: [
      '❌ looking forward to see you → ✅ looking forward to SEEING you',
      '❌ I look forward to meet → ✅ I look forward to meeting'
    ],
    patterns: ['looking forward to', 'look forward to'],
    whyItWorks: 'Forward to — стійка пара: to тут прийменник (як in, on), тому після нього -ing, як після interested in doing. Це одна з найчастіших помилок українців через «to + infinitive».'
  },
  {
    id: 'some-any',
    icon: '🛒',
    category: 'questions',
    title: 'Anything / something у питаннях і пропозиціях',
    template: 'Do you have anything…? / I need something for…',
    summary: 'Any — у питаннях і запереченнях; some — у позитивах і пропозиціях.',
    whenToUse: 'Магазин, аптека, кафе — коли не знаєш точно, що є.',
    structure: 'Questions: anything cheaper? anything for a headache? Offers: Would you like something to drink?',
    examples: [
      'Do you have anything cheaper? — Є щось дешевше?',
      'Do you have something for a headache? — Є щось від головного болю?',
      'I need something for a cough. — Мені потрібне щось від кашлю.'
    ],
    mistakes: [
      '❌ Do you have something cheaper? (питання) → ✅ anything cheaper',
      '❌ I don\'t have nothing → ✅ I don\'t have anything (подвійне заперечення заборонене)'
    ],
    patterns: ['anything', 'something', 'Do you have anything'],
    whyItWorks: 'Any = «будь-що з варіантів» у питаннях (відкрите). Some = «якась конкретна річ, але невказана» у твердженнях. Англійська не дозволяє подвійне заперечення (don\'t… nothing).'
  },
  {
    id: 'idioms-everyday',
    icon: '💡',
    category: 'conversation',
    title: 'Ідіоми повсякдення: hang in there / piece of cake',
    template: 'Усталені вирази з переносним значенням',
    summary: 'Слова разом ≠ значення окремих слів. Вивчай цілком, не перекладай дослівно.',
    whenToUse: 'Неформальна розмова, підтримка, реакції, прощання.',
    structure: 'Запам\'ятовуй як блок. Hang in there = тримайся. Run late = запізнюватись. On me = я плачу.',
    examples: [
      'Hang in there! — Тримайся!',
      'It\'s not a big deal. — Нічого страшного.',
      'I\'m beat. — Я вимотаний.',
      'Count me in. — Я з вами.'
    ],
    mistakes: [
      '❌ Перекладати дослівно: «висіти там» замість hang in there',
      '❌ I am agree → ✅ I agree (не ідіома, але типова помилка поруч з ідіомами)'
    ],
    patterns: ['Hang in there', 'not a big deal', 'I\'m beat', 'Count me in', 'run late', 'on me'],
    whyItWorks: 'Ідіоми — «соціальний клей» мови: носії використовують їх автоматично. Дослівний переклад ламає сенс. Краще вчити ідіому + одну типову ситуацію, ніж кожне слово окремо.'
  }
];

const RULE_CATEGORIES = {
  all: 'Всі правила',
  requests: '🙏 Прохання',
  questions: '❓ Питання',
  tenses: '⏳ Часи',
  verbs: '🔄 Дієслова',
  conversation: '💬 Розмова',
  grammar: '⚙️ Граматика'
};
