const fs = require('fs');
const path = require('path');

const root = __dirname;
const phrasesDir = path.join(root, 'js/data/phrases');

const CATEGORY_ORDER = ['hotel', 'street', 'transport', 'cafe', 'shop', 'emergency', 'everyday', 'social', 'plans'];

function read(rel) {
  return fs.readFileSync(path.join(root, rel), 'utf8');
}

function loadPhrases() {
  const parts = CATEGORY_ORDER.map(cat => {
    const src = read(`js/data/phrases/${cat}.js`);
    const m = src.match(/const PHRASES_\w+ = (\[[\s\S]*?\]);/);
    return m ? eval('(' + m[1] + ')') : [];
  });
  return parts.flat();
}

function shuffle(a) {
  const arr = [...a];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function buildDialoguesAndSituations(PHRASES) {
  function findIdx(pred) {
    const i = PHRASES.findIndex(pred);
    return i >= 0 ? i : 0;
  }

  const DIALOGUES = [
    {
      lines: [
        { speaker: 'A', text: 'Excuse me, is this seat taken?' },
        { speaker: 'B', text: 'No, go ahead, please.' },
        { speaker: 'A', text: 'Thanks! ___' }
      ],
      blankIndex: 2,
      phraseIndex: findIdx(p => p.en === 'Nice to meet you!'),
      options: ['Nice to meet you!', 'Something came up.', 'Could I have the bill?', 'My bad.']
    },
    {
      lines: [
        { speaker: 'Waiter', text: 'Are you ready to order?' },
        { speaker: 'You', text: 'Yes. ___' },
        { speaker: 'Waiter', text: 'Great choice. Anything to drink?' }
      ],
      blankIndex: 1,
      phraseIndex: findIdx(p => p.en.startsWith("I'll have the")),
      options: ["I'll have the grilled salmon, please.", 'Is this on sale?', 'Call an ambulance, please!', 'Long time no see!']
    },
    {
      lines: [
        { speaker: 'Friend', text: 'Shall we grab a coffee?' },
        { speaker: 'You', text: '___' },
        { speaker: 'Friend', text: 'I know a nice place nearby.' }
      ],
      blankIndex: 1,
      phraseIndex: findIdx(p => p.en === 'That sounds great!'),
      options: ['That sounds great!', "I'm afraid I have to disagree.", 'Call an ambulance, please!', 'Is this seat taken?']
    },
    {
      lines: [
        { speaker: 'Stranger', text: 'You look lost. Can I help?' },
        { speaker: 'You', text: '___' },
        { speaker: 'Stranger', text: 'Sure — the station is two blocks that way.' }
      ],
      blankIndex: 1,
      phraseIndex: findIdx(p => p.en.startsWith("I think I'm lost")),
      options: ["I think I'm lost. Could you help me?", 'No worries!', 'Is service charge included?', "I'll be there around seven."]
    },
    {
      lines: [
        { speaker: 'Reception', text: 'Good evening. How can I help?' },
        { speaker: 'You', text: '___' },
        { speaker: 'Reception', text: 'One moment, let me find your booking.' }
      ],
      blankIndex: 1,
      phraseIndex: findIdx(p => p.en.startsWith('I have a reservation')),
      options: ["I have a reservation under the name…", 'What brings you here?', 'Same here!', 'How are you doing?']
    },
    {
      lines: [
        { speaker: 'You', text: 'Excuse me, how much is a ticket to the city centre?' },
        { speaker: 'Driver', text: 'Three fifty.' },
        { speaker: 'You', text: '___' }
      ],
      blankIndex: 2,
      phraseIndex: findIdx(p => p.en.includes("didn't catch")),
      options: ["I'm sorry, I didn't catch that.", 'That makes sense.', 'Hang on a sec.', 'Fair enough.']
    },
    {
      lines: [
        { speaker: 'Colleague', text: 'Are you free tomorrow evening?' },
        { speaker: 'You', text: '___' },
        { speaker: 'Colleague', text: 'Great — how about we meet at the café at six?' }
      ],
      blankIndex: 1,
      phraseIndex: findIdx(p => p.en === 'Sounds good to me.'),
      options: ['Sounds good to me.', "I'd rather not.", 'My bag has been stolen.', 'Is this dish spicy?']
    },
    {
      lines: [
        { speaker: 'You', text: 'Could I have the bill, please?' },
        { speaker: 'Waiter', text: 'Of course. Was everything alright?' },
        { speaker: 'You', text: '___' }
      ],
      blankIndex: 2,
      phraseIndex: findIdx(p => p.en.includes('appreciate')),
      options: ['Thanks for your help — I really appreciate it.', "This isn't what I ordered.", 'Which bus goes to…?', "I'm just kidding."]
    },
    {
      lines: [
        { speaker: 'You', text: 'Sorry to bother you — could you tell me where the pharmacy is?' },
        { speaker: 'Local', text: "It's just around the corner." },
        { speaker: 'You', text: '___' }
      ],
      blankIndex: 2,
      phraseIndex: findIdx(p => p.en === 'I appreciate it.'),
      options: ['I appreciate it.', 'What do you mean by that?', 'I hate to ask, but…', 'Never mind.']
    },
    {
      lines: [
        { speaker: 'You', text: "The air conditioning doesn't seem to be working." },
        { speaker: 'Reception', text: "I'm sorry about that. I'll send someone up." },
        { speaker: 'You', text: '___' }
      ],
      blankIndex: 2,
      phraseIndex: findIdx(p => p.en === 'That works for me.'),
      options: ['That works for me.', 'I totally agree with you.', 'Call an ambulance, please!', 'Is this on sale?']
    },
    {
      lines: [
        { speaker: 'You', text: '___' },
        { speaker: 'Friend', text: 'No worries! We just got here too.' }
      ],
      blankIndex: 0,
      phraseIndex: findIdx(p => p.en.includes('running a bit late')),
      options: ["Just to let you know, I'm running a bit late.", "How's it going?", 'Where are the fitting rooms?', "I've lost my passport."]
    },
    {
      lines: [
        { speaker: 'Guide', text: 'The museum closes in ten minutes.' },
        { speaker: 'You', text: '___' },
        { speaker: 'Guide', text: 'Yes, but the gift shop stays open longer.' }
      ],
      blankIndex: 1,
      phraseIndex: findIdx(p => p.en === "That's a shame."),
      options: ["That's a shame.", 'Absolutely!', 'Go ahead.', "I'm easy — either way is fine."]
    },
    {
      scene: '🛏️ Хостел',
      lines: [
        { speaker: 'Reception', text: 'Hi! Welcome to the hostel. How can I help?' },
        { speaker: 'You', text: '___' },
        { speaker: 'Reception', text: 'Yes, we have one bed left in the 6-bed dorm — 18 euros.' }
      ],
      blankIndex: 1,
      phraseIndex: findIdx(p => p.en === 'Do you have a bed in a dorm room?'),
      options: ['Do you have a bed in a dorm room?', 'Which gate is my flight?', 'Could we split the bill?', 'Where is the check-in desk?']
    },
    {
      scene: '🛏️ Хостел',
      lines: [
        { speaker: 'You', text: '___' },
        { speaker: 'Staff', text: 'Sure, the kitchen is on the second floor — help yourself.' }
      ],
      blankIndex: 0,
      phraseIndex: findIdx(p => p.en === 'Is there a kitchen I can use?'),
      options: ['Is there a kitchen I can use?', 'Is my flight on time?', 'Could I have a refill, please?', 'Is this table reserved?']
    },
    {
      scene: '🛏️ Хостел',
      lines: [
        { speaker: 'You', text: 'I\'m checking out now, but my train is at night.' },
        { speaker: 'You', text: '___' },
        { speaker: 'Reception', text: 'No problem — we have a storage room behind the desk.' }
      ],
      blankIndex: 1,
      phraseIndex: findIdx(p => p.en.startsWith('Could I leave my bag')),
      options: ['Could I leave my bag here after check-out?', 'Where can I collect my baggage?', 'Could we get a table by the window?', 'Do I need to take my laptop out at security?']
    },
    {
      scene: '✈️ Аеропорт',
      lines: [
        { speaker: 'You', text: 'Excuse me, I\'m flying to Berlin.' },
        { speaker: 'You', text: '___' },
        { speaker: 'Staff', text: 'Terminal 2, departures — just follow the blue signs.' }
      ],
      blankIndex: 1,
      phraseIndex: findIdx(p => p.en === 'Where is the check-in desk?'),
      options: ['Where is the check-in desk?', 'Is there a kitchen I can use?', 'Could I have the bill, please?', 'What time are the quiet hours?']
    },
    {
      scene: '✈️ Аеропорт',
      lines: [
        { speaker: 'You', text: 'My boarding pass says flight LH456.' },
        { speaker: 'You', text: '___' },
        { speaker: 'Agent', text: 'Gate B12 — boarding starts in twenty minutes.' }
      ],
      blankIndex: 1,
      phraseIndex: findIdx(p => p.en === 'Which gate is my flight?'),
      options: ['Which gate is my flight?', 'Which bus goes to…?', 'Is this the right way to…?', 'Could we split the bill?']
    },
    {
      scene: '✈️ Аеропорт',
      lines: [
        { speaker: 'You', text: 'Excuse me — ___' },
        { speaker: 'Agent', text: 'Flight LH456? I\'m afraid there\'s a 45-minute delay.' }
      ],
      blankIndex: 0,
      phraseIndex: findIdx(p => p.en === 'Is my flight on time?'),
      options: ['Is my flight on time?', 'Is the train / bus running on time?', 'What time is check-in / check-out?', 'Is breakfast included or do I pay extra?']
    },
    {
      scene: '✈️ Аеропорт',
      lines: [
        { speaker: 'You', text: 'I just landed. ___' },
        { speaker: 'Staff', text: 'Baggage claim is carousel 3 — just follow the signs.' }
      ],
      blankIndex: 0,
      phraseIndex: findIdx(p => p.en === 'Where can I collect my baggage?'),
      options: ['Where can I collect my baggage?', 'Where is the nearest bus stop / metro station?', 'Where do I pay for this?', 'Where can I find…?']
    },
    {
      scene: '☕ Кафе',
      lines: [
        { speaker: 'Host', text: 'Good afternoon! Table for how many?' },
        { speaker: 'You', text: 'Two, please. ___' },
        { speaker: 'Host', text: 'Of course — this way, by the window.' }
      ],
      blankIndex: 1,
      phraseIndex: findIdx(p => p.en === 'Could we get a table by the window?'),
      options: ['Could we get a table by the window?', 'A table for two, please.', 'Is this seat taken?', 'Could I leave my bag here after check-out?']
    },
    {
      scene: '☕ Кафе',
      lines: [
        { speaker: 'You', text: 'I need to send an email. ___' },
        { speaker: 'Waiter', text: 'Yes — password is "guest123", on the blackboard.' }
      ],
      blankIndex: 0,
      phraseIndex: findIdx(p => p.en === 'Is there free Wi-Fi here?'),
      options: ['Is there free Wi-Fi here?', "What's the Wi-Fi password?", 'Where is the check-in desk?', 'Is there a pharmacy nearby?']
    },
    {
      scene: '☕ Кафе',
      lines: [
        { speaker: 'Waiter', text: 'Here\'s your bill — together or separate?' },
        { speaker: 'You', text: '___' },
        { speaker: 'Waiter', text: 'Sure, I\'ll split it for you.' }
      ],
      blankIndex: 1,
      phraseIndex: findIdx(p => p.en === 'Could we split the bill?'),
      options: ['Could we split the bill?', 'Could I have the bill, please?', 'Keep the change.', "I'll get this one."]
    },
    {
      scene: '☕ Кафе',
      lines: [
        { speaker: 'Waiter', text: 'Would you like anything else?' },
        { speaker: 'You', text: '___' },
        { speaker: 'Waiter', text: 'Of course — more coffee coming up.' }
      ],
      blankIndex: 1,
      phraseIndex: findIdx(p => p.en === 'Could I have a refill, please?'),
      options: ['Could I have a refill, please?', 'Could I get this to go?', 'I\'ll have the…, please.', 'Could I also get a croissant, please?']
    }
  ].map(d => {
    const phrase = PHRASES[d.phraseIndex];
    const answer = d.options.find(o => o === phrase.en) ||
      d.options.find(o => phrase.en.startsWith(o.slice(0, 12)) || o.startsWith(phrase.en.slice(0, 12))) ||
      phrase.en;
    if (!d.options.includes(answer)) d.options[0] = answer;
    return { ...d, answer, correctIndex: d.options.indexOf(answer) };
  });

  const SITUATIONS = [
    { situation: 'Ти в кафе і хочеш попросити рахунок.', phraseIndex: findIdx(p => p.en.includes('Could I have the bill')), distractors: ['Could I see the menu', 'What do you recommend', 'Is this dish spicy'] },
    { situation: 'Ти загубився на вулиці.', phraseIndex: findIdx(p => p.en.startsWith("I think I'm lost")), distractors: ['Nice to meet you', 'Is this on sale', 'A table for two'] },
    { situation: 'Хочеш ввічливо попросити людину говорити повільніше.', phraseIndex: findIdx(p => p.en.includes('speak more slowly')), distractors: ['What do you mean', 'Go ahead', 'Same here'] },
    { situation: 'У поїзді хочеш дізнатися, чи зупиняється він на твоїй станції.', phraseIndex: findIdx(p => p.en.startsWith('Does this train')), distractors: ['How much does this cost', 'Is breakfast included', 'Long time no see'] },
    { situation: 'Хтось запропонував піти на каву, і тобі подобається ідея.', phraseIndex: findIdx(p => p.en === 'That sounds great!'), distractors: ["I'd rather not", "I'm afraid I have to disagree", "This isn't what I ordered"] },
    { situation: 'Ти запізнюєшся на зустріч і хочеш попередити.', phraseIndex: findIdx(p => p.en.includes('running a bit late')), distractors: ['Take your time', "I'll be right back", 'Never mind'] },
    { situation: 'У магазині ти не хочеш, щоб продавець тебе турбував.', phraseIndex: findIdx(p => p.en.includes('just looking')), distractors: ['How much does this cost', "I'd like to return this", 'Do you accept credit cards'] },
    { situation: 'Ти хочеш дізнатися, чи включений сніданок у ціну номера.', phraseIndex: findIdx(p => p.en.includes('breakfast included')), distractors: ["What's the Wi-Fi password", 'What time does breakfast start', 'Is there a safe'] },
    { situation: 'У таксі хочеш, щоб водій висадив тебе зараз.', phraseIndex: findIdx(p => p.en.includes('drop me off')), distractors: ['Please take me to this address', 'Where can I get a taxi', 'I need to get off at'] },
    { situation: 'Ти не зрозумів, що сказали — просиш повторити.', phraseIndex: findIdx(p => p.en.includes('say that again')), distractors: ['I totally agree', 'That makes sense', 'Absolutely'] },
    { situation: 'Домовляєшся про час зустрічі — питаєш, коли зручно.', phraseIndex: findIdx(p => p.en === 'What time works for you?'), distractors: ['What are the opening hours', 'Which way is the town centre', 'How far is it from here'] },
    { situation: 'Ти вперше зустрічаєш людину після представлення.', phraseIndex: findIdx(p => p.en === 'Nice to meet you!'), distractors: ['Long time no see', 'What brings you here', "How's it going"] },
    { situation: 'Хтось вибачається, і ти хочеш сказати, що все гаразд.', phraseIndex: findIdx(p => p.en === 'No worries!'), distractors: ['My bad', 'Sorry about that', "I'm afraid I have to disagree"] },
    { situation: 'У ресторані страва не та, що ти замовляв.', phraseIndex: findIdx(p => p.en.includes("isn't what I ordered")), distractors: ['Is this dish spicy', 'Could I get this to go', 'What do you recommend'] },
    { situation: 'Друг питає, як справи — відповідаєш, що все добре.', phraseIndex: findIdx(p => p.en === "I'm doing well, thanks."), distractors: ['Not much.', 'Something came up.', 'I overslept.'] },
    { situation: 'Хочеш ввічливо сказати, що йдеш — прощаєшся.', phraseIndex: findIdx(p => p.en === 'I should get going.'), distractors: ['Come on in.', 'Have a seat.', 'Help yourself.'] },
    { situation: 'На рецепції хостелу питаєш про ліжко в dorm.', phraseIndex: findIdx(p => p.en === 'Do you have a bed in a dorm room?'), distractors: ['I have a reservation', 'Is breakfast included', 'Could I have a late check-out'] },
    { situation: 'В аеропорту шукаєш стійку реєстрації.', phraseIndex: findIdx(p => p.en === 'Where is the check-in desk?'), distractors: ['Where is the nearest bus stop', 'Which gate is my flight', 'Where can I get a taxi'] },
    { situation: 'У кафе хочеш сісти біля вікна.', phraseIndex: findIdx(p => p.en === 'Could we get a table by the window?'), distractors: ['A table for two', 'Is this seat taken', 'Could I see the menu'] },
    { situation: 'У кафе просиш розділити рахунок.', phraseIndex: findIdx(p => p.en === 'Could we split the bill?'), distractors: ['Could I have the bill', 'Can I pay by card', 'Is a tip expected here'] }
  ].map(s => {
    const correct = PHRASES[s.phraseIndex].en;
    const wrongs = s.distractors.map(d => {
      const found = PHRASES.find(p => p.en.startsWith(d) || p.en.includes(d));
      return found ? found.en : d;
    });
    const options = shuffle([correct, ...wrongs.slice(0, 3)]);
    return {
      situation: s.situation,
      phraseIndex: s.phraseIndex,
      options,
      correctIndex: options.indexOf(correct)
    };
  });

  return { DIALOGUES, SITUATIONS };
}

function main() {
  const PHRASES = loadPhrases();
  const { DIALOGUES, SITUATIONS } = buildDialoguesAndSituations(PHRASES);

  fs.writeFileSync(
    path.join(root, 'js/data/dialogues.js'),
    `const DIALOGUES = ${JSON.stringify(DIALOGUES, null, 2)};\n`,
    'utf8'
  );
  fs.writeFileSync(
    path.join(root, 'js/data/situations.js'),
    `const SITUATIONS = ${JSON.stringify(SITUATIONS, null, 2)};\n`,
    'utf8'
  );

  // Legacy combined file for tools that still read phrases.js
  const legacy = [
    read('js/constants/categories.js').trim(),
    '',
    ...CATEGORY_ORDER.map(c => read(`js/data/phrases/${c}.js`).trim()),
    '',
    read('js/data/phrases/aggregate.js').trim(),
    '',
    `const DIALOGUES = ${JSON.stringify(DIALOGUES, null, 2)};`,
    '',
    `const SITUATIONS = ${JSON.stringify(SITUATIONS, null, 2)};`,
    '',
    'const TOTAL = PHRASES.length;',
    ''
  ].join('\n');
  fs.writeFileSync(path.join(root, 'js/data/phrases.js'), legacy, 'utf8');

  console.log('Built', PHRASES.length, 'phrases,', DIALOGUES.length, 'dialogues,', SITUATIONS.length, 'situations');
}

main();
