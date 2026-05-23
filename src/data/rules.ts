import { Rule } from '../types/rule';

export const rules: Rule[] = [
  // --- MESSAGING ---
  {
    slug: 'salomlashish',
    categoryId: 'messaging',
    translations: {
      'uz-latn': {
        title: 'Axborotni yaxlit va to\'liq uzatish tamoyili',
        description: 'Muloqot jarayonida faqatgina salomlashish so\'zini yuborib, javob kutish suhbatdosh vaqtini samarasiz sarflashga olib keladi. Barcha kerakli axborot va murojaat maqsadi bitta xabarda to\'liq bayon etilishi maqsadga muvofiqdir.',
        bad_example: 'Salom!\n[10 daqiqa o\'tdi]\nQalaysiz?\n[5 daqiqa o\'tdi]\nSizdan bitta narsani iltimos qilmoqchi edim.',
        good_example: 'Salom, qalaysiz? Kechagi loyiha bo\'yicha yordamingiz kerak edi, qachon vaqtingiz bo\'ladi?'
      },
      'uz-cyrl': {
        title: 'Ахборотни яхлит ва тўлиқ узатиш тамойили',
        description: 'Мулоқот жараёнида фақатгина саломлашиш сўзини юбориб, жавоб кутиш суҳбатдош вақтини самарасиз сарфлашга олиб келади. Барча керакли ахборот ва мурожаат мақсади битта хабарда тўлиқ баён этилиши мақсадга мувофиқдир.',
        bad_example: 'Салом!\n[10 дақиқа ўтди]\nҚалайсиз?\n[5 дақиқа ўтди]\nСиздан битта нарсани илтимос қилмоқчи эдим.',
        good_example: 'Салом, қалайсиз? Кечаги лойиҳа бўйича ёрдамингиз керак эди, қачон вақтингиз бўлади?'
      },
      'ru': {
        title: 'Принцип целостной передачи информации',
        description: 'Отправка исключительно приветствия с последующим ожиданием ответа приводит к неэффективному расходованию времени собеседника. Целесообразно излагать всю суть обращения в едином сообщении.',
        bad_example: 'Привет!\n[прошло 10 минут]\nКак дела?\n[прошло 5 минут]\nХотел кое-что попросить.',
        good_example: 'Привет, как дела? Мне нужна помощь со вчерашним проектом. Когда у тебя будет время?'
      },
      'en': {
        title: 'Principle of Comprehensive Information Delivery',
        description: 'Sending a standalone greeting and waiting for a response leads to an inefficient use of the recipient\'s time. It is recommended to state the entirety of your request within the initial message.',
        bad_example: 'Hello!\n[10 mins pass]\nHow are you?\n[5 mins pass]\nI wanted to ask a favor.',
        good_example: 'Hello, how are you? I need some help with yesterday\'s project, when will you be free?'
      }
    }
  },
  {
    slug: 'savol-sorash',
    categoryId: 'messaging',
    translations: {
      'uz-latn': {
        title: 'Murojaat mazmunini bevosita bayon etish',
        description: 'Savol berish uchun ruxsat so\'rash (masalan, "Savol bersam maylimi?") muloqot samaradorligini pasaytiradi. So\'rov to\'g\'ridan-to\'g\'ri va aniq ifodalanishi lozim.',
        bad_example: 'Savol bersam bo\'ladimi?\n[Yoki: IT mutaxassislari bormi?]',
        good_example: 'Salom, menda React dasturida xatolik yuzaga kelyapti, kimdir yordam bera oladimi?'
      },
      'uz-cyrl': {
        title: 'Мурожаат мазмунини бевосита баён этиш',
        description: 'Савол бериш учун рухсат сўраш (масалан, "Савол берсам майлими?") мулоқот самарадорлигини пасайтиради. Сўров тўғридан-тўғри ва аниқ ифодаланиши лозим.',
        bad_example: 'Савол берсам бўладими?\n[Ёки: IT мутахассислари борми?]',
        good_example: 'Салом, менда React дастурида хатолик юзага келяпти, кимдир ёрдам бера оладими?'
      },
      'ru': {
        title: 'Прямое изложение сути обращения',
        description: 'Запрос разрешения на вопрос (например, "Можно спросить?") снижает эффективность коммуникации. Запрос должен формулироваться прямо и четко.',
        bad_example: 'Можно задать вопрос?\n[Или: Тут есть IT-специалисты?]',
        good_example: 'Привет, у меня возникает ошибка в React, кто-нибудь может помочь?'
      },
      'en': {
        title: 'Direct Articulation of Inquiries',
        description: 'Requesting permission to ask a question (e.g., "Can I ask you something?") decreases communication efficiency. Inquiries should be formulated directly and clearly.',
        bad_example: 'Can I ask you something?\n[Or: Are there any IT specialists here?]',
        good_example: 'Hi, I am getting an error in React, can anyone help me out?'
      }
    }
  },
  {
    slug: 'bitta-xabar',
    categoryId: 'messaging',
    translations: {
      'uz-latn': {
        title: 'Matnni fragmentatsiyasiz shakllantirish',
        description: 'Fikrni alohida so\'zlar yoki qisqa iboralar ko\'rinishida yuborish (fragmentatsiya) qabul qiluvchining diqqatini chalg\'itadi va ortiqcha bildirishnomalar kelishiga sabab bo\'ladi. Fikr mantiqan tugallangan, yagona xabar shaklida yuborilishi kerak.',
        bad_example: 'Salom\nMen\nBugun\nBora olmayman\nChunki betobman',
        good_example: 'Salom, sog\'lig\'im yomonlashgani sababli bugun bora olmayman.'
      },
      'uz-cyrl': {
        title: 'Матнни фрагментациясиз шакллантириш',
        description: 'Фикрни алоҳида сўзлар ёки қисқа иборалар кўринишида юбориш (фрагментация) қабул қилувчининг диққатини чалғитади ва ортиқча билдиришномалар келишига сабаб бўлади. Фикр мантиқан тугалланган, ягона хабар шаклида юборилиши керак.',
        bad_example: 'Салом\nМен\nБугун\nБора олмайман\nЧунки бетобман',
        good_example: 'Салом, соғлиғим ёмонлашгани сабабли бугун бора олмайман.'
      },
      'ru': {
        title: 'Избегание фрагментации текста',
        description: 'Отправка мыслей отдельными словами или короткими фразами (фрагментация) рассеивает внимание получателя и генерирует излишние уведомления. Мысль должна отправляться в виде логически завершенного, единого сообщения.',
        bad_example: 'Привет\nЯ\nСегодня\nНе смогу прийти\nПотому что заболел',
        good_example: 'Привет, я сегодня не смогу прийти по состоянию здоровья.'
      },
      'en': {
        title: 'Avoidance of Text Fragmentation',
        description: 'Sending thoughts as separate words or short phrases (fragmentation) disrupts the recipient\'s focus and generates excessive notifications. Thoughts should be transmitted as a logically complete, unified message.',
        bad_example: 'Hi\nI\nCan\'t\nCome today\nBecause I\'m sick',
        good_example: 'Hi, I won\'t be able to make it today due to illness.'
      }
    }
  },
  {
    slug: 'katta-fayllar',
    categoryId: 'messaging',
    translations: {
      'uz-latn': {
        title: 'Media fayllar va audio xabarlarni muvofiqlashtirish',
        description: 'Katta hajmdagi media fayllarni ogohlantirishsiz yuborish tarmoq trafigini asossiz sarflaydi. Shuningdek, matn orqali qisqa ifodalash mumkin bo\'lgan axborotni uzoq audio xabar shaklida yuborish tavsiya etilmaydi.',
        bad_example: '[1.5 GB hajmdagi fayl]\n[12 daqiqalik ovozli xabar]',
        good_example: 'Video tayyor (1.5 GB). Telegram orqali yuboraymi yoki bulutli xotiraga yuklaymi? Shuningdek, jarayonni ovozli xabarda tushuntirib o\'tsam bo\'ladimi?'
      },
      'uz-cyrl': {
        title: 'Медиа файллар ва аудио хабарларни мувофиқлаштириш',
        description: 'Катта ҳажмдаги медиа файлларни огоҳлантиришсиз юбориш тармоқ трафигини асоссиз сарфлайди. Шунингдек, матн орқали қисқа ифодалаш мумкин бўлган ахборотни узоқ аудио хабар шаклида юбориш тавсия этилмайди.',
        bad_example: '[1.5 ГБ ҳажмдаги файл]\n[12 дақиқалик овозли хабар]',
        good_example: 'Видео тайёр (1.5 ГБ). Телеграм орқали юборайми ёки булутли хотирага юклайми? Шунингдек, жараённи овозли хабарда тушунтириб ўтсам бўладими?'
      },
      'ru': {
        title: 'Согласование передачи крупных медиафайлов',
        description: 'Отправка крупных медиафайлов без предупреждения приводит к необоснованному расходу сетевого трафика. Также не рекомендуется отправлять длинные аудиосообщения, если информацию можно кратко изложить в тексте.',
        bad_example: '[Файл 1.5 ГБ]\n[Голосовое сообщение на 12 минут]',
        good_example: 'Видео готово (1.5 ГБ). Отправить файлом или загрузить в облако? Также, могу ли я пояснить детали голосовым сообщением?'
      },
      'en': {
        title: 'Coordination of Large Files and Audio Messages',
        description: 'Sending large media files without prior notice unnecessarily consumes network bandwidth. Furthermore, it is not recommended to send lengthy audio messages when the information can be succinctly conveyed via text.',
        bad_example: '[1.5 GB file sent]\n[12 minute audio message]',
        good_example: 'The video is ready (1.5 GB). Should I send it directly or via a cloud link? Also, would it be acceptable if I provided a brief audio explanation?'
      }
    }
  },
  {
    slug: 'emotsiyalar',
    categoryId: 'messaging',
    translations: {
      'uz-latn': {
        title: 'Tipografik me\'yorlarga rioya etish',
        description: 'Matnni to\'liq bosh harflarda (Caps Lock) yozish kiber-etiketda tajovuzkorlik yoki baqirish sifatida qabul qilinadi. Yolg\'iz tinish belgilarini (ayniqsa so\'roq) yuborish ham nomaqbul bosim hisoblanadi.',
        bad_example: 'QACHON TAYYOR BO\'LADI????\n?',
        good_example: 'Loyihaning yakunlanish muddati haqida ma\'lumot bera olasizmi?'
      },
      'uz-cyrl': {
        title: 'Типографик меъёрларга риоя этиш',
        description: 'Матнни тўлиқ бош ҳарфларда (Caps Lock) ёзиш кибер-этикетда тажовузкорлик ёки бақириш сифатида қабул қилинади. Ёлғиз тиниш белгиларини (айниқса сўроқ) юбориш ҳам номақбул босим ҳисобланади.',
        bad_example: 'ҚАЧОН ТАЙЁР БЎЛАДИ????\n?',
        good_example: 'Лойиҳанинг якунланиш муддати ҳақида маълумот бера оласизми?'
      },
      'ru': {
        title: 'Соблюдение типографических норм',
        description: 'Использование исключительно заглавных букв (Caps Lock) в киберэтикете воспринимается как агрессия или крик. Отправка одиночных знаков препинания (особенно вопросительных) расценивается как неформальное давление.',
        bad_example: 'КОГДА БУДЕТ ГОТОВО????\n?',
        good_example: 'Не могли бы вы уточнить сроки завершения проекта?'
      },
      'en': {
        title: 'Adherence to Typographical Norms',
        description: 'Utilizing exclusively capital letters (Caps Lock) is perceived in cyber-etiquette as aggression or shouting. Dispatching solitary punctuation marks (especially question marks) is also considered inappropriate pressure.',
        bad_example: 'WHEN WILL IT BE READY????\n?',
        good_example: 'Could you please provide an estimated time of completion for the project?'
      }
    }
  },

  // --- GROUP CHAT ---
  {
    slug: 'guruhga-qoshish',
    categoryId: 'group',
    translations: {
      'uz-latn': {
        title: 'Jamoaviy chatlarga qo\'shishdagi ruxsat etiketlari',
        description: 'Foydalanuvchilarni ularning oldindan roziligisiz turli maqsadli (ayniqsa tijorat va reklama) guruhlarga qo\'shish kiber-etiket qoidalariga ziddir.',
        bad_example: '[Siz "Super Savdo 2026" guruhiga qo\'shildingiz]',
        good_example: 'Salom, biz yangi tijorat maqsadidagi guruh ochdik. U yerda foydali ma\'lumotlar berib boriladi. Sizni ushbu guruhga tirkasam qarshiligingiz yo\'qmi?'
      },
      'uz-cyrl': {
        title: 'Жамоавий чатларга қўшишдаги рухсат этикетлари',
        description: 'Фойдаланувчиларни уларнинг олдиндан розилигисиз турли мақсадли (айниқса тижорат ва реклама) гуруҳларга қўшиш кибер-этикет қоидаларига зиддир.',
        bad_example: '[Сиз "Супер Савдо 2026" гуруҳига қўшилдингиз]',
        good_example: 'Салом, биз янги тижорат мақсадидаги гуруҳ очдик. У ерда фойдали маълумотлар бериб борилади. Сизни ушбу гуруҳга тиркасам қаршилигингиз йўқми?'
      },
      'ru': {
        title: 'Этика получения согласия при добавлении в группы',
        description: 'Добавление пользователей в целевые (особенно коммерческие и рекламные) группы без их предварительного согласия противоречит нормам киберэтикета.',
        bad_example: '[Вас добавили в группу "Супер Скидки 2026"]',
        good_example: 'Здравствуйте, мы создали новую коммерческую группу с полезной информацией. Вы не возражаете, если я включу вас в ее состав?'
      },
      'en': {
        title: 'Consent Protocols for Group Additions',
        description: 'Adding users to targeted groups (especially commercial or promotional ones) without their explicit prior consent violates cyber-etiquette norms.',
        bad_example: '[You were added to "Super Sales 2026"]',
        good_example: 'Hello, we have established a new commercial group offering relevant updates. Would you object to being added to this community?'
      }
    }
  },
  {
    slug: 'shaxsiy-gaplar',
    categoryId: 'group',
    translations: {
      'uz-latn': {
        title: 'Jamoaviy muhokamalarda xususiy mavzulardan cheklanish',
        description: 'Guruhli muloqotda faqat jamoaning barcha a\'zolariga daxldor masalalar ko\'rib chiqilishi kerak. Ikki kishi orasidagi xususiy yoki mavzudan tashqari (off-topic) suhbatlar shaxsiy xabarlarga ko\'chirilishi lozim.',
        bad_example: '@Aziz bugun choyxonaga borasizmi? @Vali sizchi?',
        good_example: '(Shaxsiy chatda) Salom Aziz, bugun tushlikka vaqtingiz bormi?'
      },
      'uz-cyrl': {
        title: 'Жамоавий муҳокамаларда хусусий мавзулардан чекланиш',
        description: 'Гуруҳли мулоқотда фақат жамоанинг барча аъзоларига дахлдор масалалар кўриб чиқилиши керак. Икки киши орасидаги хусусий ёки мавзудан ташқари суҳбатлар шахсий хабарларга кўчирилиши лозим.',
        bad_example: '@Азиз бугун чойхонага борасизми? @Вали сизчи?',
        good_example: '(Шахсий чатда) Салом Азиз, бугун тушликка вақтингиз борми?'
      },
      'ru': {
        title: 'Исключение частных тем в групповых обсуждениях',
        description: 'В групповой коммуникации должны рассматриваться исключительно вопросы, касающиеся всех участников. Частные диалоги или обсуждения вне темы (off-topic) следует переносить в личные сообщения.',
        bad_example: '@Aziz вы пойдете сегодня в кафе? @Vali а вы?',
        good_example: '(В личных сообщениях) Здравствуйте, Азиз. У вас есть время на обед сегодня?'
      },
      'en': {
        title: 'Exclusion of Private Topics in Group Discussions',
        description: 'Group communications should solely address issues pertinent to all members. Private dialogues between individuals or off-topic discussions must be relocated to direct messaging.',
        bad_example: '@Aziz are you going to the cafe today? @Vali how about you?',
        good_example: '(In direct messages) Hello Aziz, do you have time for lunch today?'
      }
    }
  },
  {
    slug: 'spam-forward',
    categoryId: 'group',
    translations: {
      'uz-latn': {
        title: 'Informatsion gigiyena va nomaqbul materiallar tarmog\'i',
        description: 'Guruhlarga mantiqsiz zanjirli xatlar, asossiz siyosiy yoki diniy baxslar va mavzuga aloqador bo\'lmagan vizual kontentlarni muntazam yuborish axborot shovqinini keltirib chiqaradi.',
        bad_example: '[5 ta ommaviy mem] \nUshbu xabarni 10 kishiga yuboring, aks holda...',
        good_example: '(Faqat guruhning rasmiy maqsadiga muvofiq, tasdiqlangan va dolzarb ma\'lumotlar ulashish)'
      },
      'uz-cyrl': {
        title: 'Информацион гигиена ва номақбул материаллар тармоғи',
        description: 'Гуруҳларга мантиқсиз занжирли хатлар, асоссиз сиёсий ёки диний бахслар ва мавзуга алоқадор бўлмаган визуал контентларни мунтазам юбориш ахборот шовқинини келтириб чиқаради.',
        bad_example: '[5 та оммавий мем] \nУшбу хабарни 10 кишига юборинг, акс ҳолда...',
        good_example: '(Фақат гуруҳнинг расмий мақсадига мувофиқ, тасдиқланган ва долзарб маълумотлар улашиш)'
      },
      'ru': {
        title: 'Информационная гигиена и ограничение спама',
        description: 'Систематическая рассылка нерелевантного контента (цепочечные письма, мемы, религиозно-политические дискуссии) создает информационный шум и нарушает функциональность группы.',
        bad_example: '[5 популярных мемов] \nПерешлите это 10 людям, иначе...',
        good_example: '(Публикация исключительно релевантной, проверенной информации, соответствующей целям сообщества)'
      },
      'en': {
        title: 'Information Hygiene and Spam Restriction',
        description: 'The systematic broadcast of irrelevant content (chain letters, memes, religious or political debates) generates informational noise and disrupts the group\'s functionality.',
        bad_example: '[5 viral memes] \nForward this to 10 people or else...',
        good_example: '(Posting only highly relevant, verified information that aligns with the community\'s objectives)'
      }
    }
  },

  // --- CALLS ---
  {
    slug: 'qongiroq-qilish',
    categoryId: 'calls',
    translations: {
      'uz-latn': {
        title: 'Ovozli aloqa o\'rnatishdan oldingi ruxsatnoma',
        description: 'Favqulodda vaziyatlar mustasno qilingan holda, to\'g\'ridan-to\'g\'ri ovozli qo\'ng\'iroqni amalga oshirishdan oldin matnli xabar orqali aloqa uchun qulay vaqtni aniqlashtirish qat\'iy talab etiladi.',
        bad_example: '[14:30 da qo\'ng\'iroq]\n[14:31 da qo\'ng\'iroq]\n[14:35 da qo\'ng\'iroq]',
        good_example: 'Salom, muhim bir masala yuzasidan muhokama o\'tkazishimiz zarur edi. Hozir ovozli aloqa orqali bog\'lanishga imkoniyatingiz bormi?'
      },
      'uz-cyrl': {
        title: 'Овозли алоқа ўрнатишдан олдинги рухсатнома',
        description: 'Фавқулодда вазиятлар мустасно қилинган ҳолда, тўғридан-тўғри овозли қўнғироқни амалга оширишдан олдин матнли хабар орқали алоқа учун қулай вақтни аниқлаштириш қатъий талаб этилади.',
        bad_example: '[14:30 да қўнғироқ]\n[14:31 да қўнғироқ]\n[14:35 да қўнғироқ]',
        good_example: 'Салом, муҳим бир масала юзасидан муҳокама ўтказишимиз зарур эди. Ҳозир овозли алоқа орқали боғланишга имкониятингиз борми?'
      },
      'ru': {
        title: 'Предварительное согласование голосовых вызовов',
        description: 'За исключением экстренных ситуаций, перед совершением прямого голосового вызова категорически требуется уточнить удобное для связи время посредством текстового сообщения.',
        bad_example: '[Звонок в 14:30]\n[Звонок в 14:31]\n[Звонок в 14:35]',
        good_example: 'Здравствуйте, нам необходимо обсудить один важный вопрос. Располагаете ли вы сейчас временем для голосового вызова?'
      },
      'en': {
        title: 'Prior Coordination of Voice Calls',
        description: 'Excluding emergency situations, it is strictly required to ascertain a mutually convenient time for communication via text message prior to initiating a direct voice call.',
        bad_example: '[Call at 14:30]\n[Call at 14:31]\n[Call at 14:35]',
        good_example: 'Hello, it is necessary that we discuss a critical issue. Do you currently have the availability to engage in a voice call?'
      }
    }
  },
  {
    slug: 'video-qongiroq',
    categoryId: 'calls',
    translations: {
      'uz-latn': {
        title: 'Videokonferensiyalarda akustik tartib-qoidalar',
        description: 'Guruhli ovozli yoki video qo\'ng\'iroqlarda so\'zga chiqilmayotgan vaqtlarda mikrofonni o\'chirib qo\'yish (mute) majburiydir. Orqa fondagi begona tovushlar muhokama ishtirokchilarining diqqatini pasaytiradi.',
        bad_example: '[Orqa fonda maishiy shovqinlar, farzandlar ovozi va klaviatura chertishlari eshitilmoqda]',
        good_example: '[Mikrofoningiz tizim tomonidan faol bo\'lmagan holatga keltirilgan, faqat so\'zga chiqqandagina yoqiladi]'
      },
      'uz-cyrl': {
        title: 'Видеоконференцияларда акустик тартиб-қоидалар',
        description: 'Гуруҳли овозли ёки видео қўнғироқларда сўзга чиқилмаётган вақтларда микрофонни ўчириб қўйиш (mute) мажбурийдир. Орқа фондаги бегона товушлар муҳокама иштирокчиларининг диққатини пасайтиради.',
        bad_example: '[Орқа фонда маиший шовқинлар, фарзандлар овози ва клавиатура чертишлари эшитилмоқда]',
        good_example: '[Микрофонингиз тизим томонидан фаол бўлмаган ҳолатга келтирилган, фақат сўзга чиққандагина ёқилади]'
      },
      'ru': {
        title: 'Акустическая дисциплина в видеоконференциях',
        description: 'При участии в групповых звонках обязательно отключение микрофона (mute) в периоды молчания. Посторонние фоновые шумы критически снижают концентрацию внимания участников обсуждения.',
        bad_example: '[На фоне слышны бытовые шумы, голоса и стук клавиатуры]',
        good_example: '[Ваш микрофон деактивирован системой и включается исключительно во время вашего выступления]'
      },
      'en': {
        title: 'Acoustic Discipline in Videoconferences',
        description: 'During group calls, it is mandatory to mute the microphone when not actively speaking. Extraneous background noises critically degrade the concentration of discussion participants.',
        bad_example: '[Background domestic noises, voices, and loud typing are audible]',
        good_example: '[Your microphone is deactivated by the system and is only enabled during your remarks]'
      }
    }
  },

  // --- SOCIAL MEDIA ---
  {
    slug: 'mualliflik',
    categoryId: 'social',
    translations: {
      'uz-latn': {
        title: 'Intellektual mulk huquqi va destruktiv muloqotni inkor etish',
        description: 'Ijtimoiy tarmoqlarda o\'zga mualliflarning ijodiy mahsulini (audio, video, matn) manba ko\'rsatmasdan o\'zlashtirish plagiat hisoblanadi. Shuningdek, axborot makonida provokatorlarga (trollarga) nisbatan e\'tiborsizlik strategiyasini qo\'llash tavsiya etiladi.',
        bad_example: 'Bu qanday asossiz ma\'lumot? Siz ushbu sohani umuman tushunmas ekansiz! (Provokator bilan ochiq ziddiyatga kirishish)',
        good_example: '[Provokator akkaunti cheklandi. O\'zga muallifning kontenti rasmiy havolasi bilan ulashildi]'
      },
      'uz-cyrl': {
        title: 'Интеллектуал мулк ҳуқуқи ва деструктив мулоқотни инкор этиш',
        description: 'Ижтимоий тармоқларда ўзга муаллифларнинг ижодий маҳсулини манба кўрсатмасдан ўзлаштириш плагиат ҳисобланади. Шунингдек, ахборот маконида провокаторларга (тролларга) нисбатан эътиборсизлик стратегиясини қўллаш тавсия этилади.',
        bad_example: 'Бу қандай асоссиз маълумот? Сиз ушбу соҳани умуман тушунмас экансиз! (Провокатор билан очиқ зиддиятга киришиш)',
        good_example: '[Провокатор аккаунти чекланди. Ўзга муаллифнинг контенти расмий ҳаволаси билан улашилди]'
      },
      'ru': {
        title: 'Соблюдение авторских прав и игнорирование деструктивной коммуникации',
        description: 'Присвоение чужих творческих материалов (аудио, видео, текстов) без указания источника квалифицируется как плагиат. Кроме того, при столкновении с провокаторами (троллями) рекомендуется применять стратегию полного игнорирования.',
        bad_example: 'Что за необоснованная информация? Вы абсолютно не разбираетесь в теме! (Вступление в открытый конфликт с провокатором)',
        good_example: '[Аккаунт провокатора заблокирован. Чужой контент опубликован с указанием официальной ссылки на автора]'
      },
      'en': {
        title: 'Intellectual Property Rights and Dismissal of Destructive Communication',
        description: 'Appropriating the creative works of others (audio, video, text) without attribution is classified as plagiarism. Furthermore, when encountering provocateurs (trolls) in the information space, the application of a strict non-engagement strategy is recommended.',
        bad_example: 'What baseless information is this? You clearly lack any understanding of the subject! (Engaging in open conflict with a provocateur)',
        good_example: '[Provocateur account restricted. Third-party content shared with an official attribution link]'
      }
    }
  },

  // --- CONTENT ---
  {
    slug: 'fakt-chek',
    categoryId: 'content',
    translations: {
      'uz-latn': {
        title: 'Axborot verifikatsiyasi va dezinformatsiyaning oldini olish',
        description: 'Raqamli muhitda ma\'lumotni tarqatishdan avval uning haqiqiyligini, manbasi va xronologik dolzarbligini tekshirish (fact-checking) zarur. Tasdiqlanmagan xabarlarni tarqatish ijtimoiy manipulyatsiya va vahima keltirib chiqarishi mumkin.',
        bad_example: 'Shoshilinch xabar! Barcha fuqarolarga davlat tomonidan moliyaviy yordam tarqatilmoqda! Zudlik bilan havolaga o\'ting!',
        good_example: '[Kelib tushgan axborot 2-3 ta mustaqil va rasmiy davlat resurslari orqali tekshirilib, uning soxtaligi aniqlandi va tarqatish jarayoni to\'xtatildi]'
      },
      'uz-cyrl': {
        title: 'Ахборот верификацияси ва дезинформациянинг олдини олиш',
        description: 'Рақамли муҳитда маълумотни тарқатишдан аввал унинг ҳақиқийлигини, манбаси ва хронологик долзарблигини текшириш (fact-checking) зарур. Тасдиқланмаган хабарларни тарқатиш ижтимоий манипуляция ва ваҳима келтириб чиқариши мумкин.',
        bad_example: 'Шошилинч хабар! Барча фуқароларга давлат томонидан молиявий ёрдам тарқатилмоқда! Зудлик билан ҳаволага ўтинг!',
        good_example: '[Келиб тушган ахборот 2-3 та мустақил ва расмий давлат ресурслари орқали текширилиб, унинг сохталиги аниқланди ва тарқатиш жараёни тўхтатилди]'
      },
      'ru': {
        title: 'Верификация информации и предотвращение дезинформации',
        description: 'Перед распространением информации в цифровой среде необходимо провести проверку ее достоверности, источника и хронологической актуальности (фактчекинг). Распространение непроверенных данных может спровоцировать социальные манипуляции и панику.',
        bad_example: 'Экстренная новость! Государство раздает финансовую помощь всем гражданам! Срочно переходите по ссылке!',
        good_example: '[Поступившая информация была верифицирована через несколько независимых официальных ресурсов; после выявления ее недостоверности процесс распространения был остановлен]'
      },
      'en': {
        title: 'Information Verification and Prevention of Disinformation',
        description: 'Prior to disseminating information in a digital environment, it is imperative to verify its authenticity, source, and chronological relevance (fact-checking). Distributing unverified data can incite social manipulation and panic.',
        bad_example: 'Urgent Alert! The government is distributing financial aid to all citizens! Follow the link immediately!',
        good_example: '[The received information was cross-verified against independent, official resources; upon discovering its illegitimacy, dissemination was halted]'
      }
    }
  },

  // --- COMMENTS ---
  {
    slug: 'izohlar',
    categoryId: 'comments',
    translations: {
      'uz-latn': {
        title: 'Ilmiy asoslangan va konstruktiv tanqid madaniyati',
        description: 'Ochiq muhokamalarda ishtirok etish jarayonida tanqid obyekti shaxs emas, balki faqat uning g\'oyalari bo\'lishi shart. Axborot qiymatiga ega bo\'lmagan yoki shaxsiyatga qaratilgan izohlar raqamli muhitning intellektual darajasini tushiradi.',
        bad_example: 'Sizning intellektual darajangiz juda past! Qanday qilib bunday elementar xatolarga yo\'l qo\'yasiz?',
        good_example: 'Ushbu xulosangiz bilan kelisha olmayman, sababi u so\'nggi statistik ma\'lumotlarga ziddir. Quyida muqobil faktlarni keltirib o\'taman...'
      },
      'uz-cyrl': {
        title: 'Илмий асосланган ва конструктив танқид маданияти',
        description: 'Очиқ муҳокамаларда иштирок этиш жараёнида танқид объекти шахс эмас, балки фақат унинг ғоялари бўлиши шарт. Ахборот қийматига эга бўлмаган ёки шахсиятга қаратилган изоҳлар рақамли муҳитнинг интеллектуал даражасини туширади.',
        bad_example: 'Сизнинг интеллектуал даражангиз жуда паст! Қандай қилиб бундай элементар хатоларга йўл қўясиз?',
        good_example: 'Ушбу хулосангиз билан келиша олмайман, сабаби у сўнгги статистик маълумотларга зиддир. Қуйида муқобил фактларни келтириб ўтаман...'
      },
      'ru': {
        title: 'Культура аргументированной и конструктивной критики',
        description: 'В процессе участия в открытых дискуссиях объектом критики должны выступать исключительно идеи, а не личности. Комментарии, не имеющие информационной ценности или содержащие переходы на личности, снижают интеллектуальный уровень цифровой среды.',
        bad_example: 'Ваш интеллектуальный уровень крайне низок! Как можно допускать столь элементарные ошибки?',
        good_example: 'Вынужден не согласиться с вашим выводом, поскольку он противоречит последним статистическим данным. Позвольте привести альтернативные факты...'
      },
      'en': {
        title: 'Culture of Evidence-Based and Constructive Criticism',
        description: 'When participating in open discussions, the object of criticism must strictly be ideas, not individuals. Comments lacking informational value or containing personal attacks degrade the intellectual caliber of the digital environment.',
        bad_example: 'Your intellectual capacity is extremely low! How can you make such elementary errors?',
        good_example: 'I must disagree with this conclusion, as it directly contradicts recent statistical data. Allow me to present alternative evidence...'
      }
    }
  },

  // --- PRIVACY ---
  {
    slug: 'shaxsiy-malumot',
    categoryId: 'privacy',
    translations: {
      'uz-latn': {
        title: 'Shaxsiy daxlsizlik va konfidensial axborot himoyasi',
        description: 'Uchinchi shaxslarga tegishli vizual materiallar, aloqa raqamlari, xususiy yozishmalar trankriptlari yoki geolokatsiya ma\'lumotlarini ularning qat\'iy roziligisiz raqamli muhitga joylashtirish qonunan va axloqan taqiqlanadi.',
        bad_example: 'E\'tibor bering, kecha suhbatdoshim menga quyidagi mazmunda xabar yozdi. [Xususiy yozishmalar skrinshoti ilova qilindi]',
        good_example: 'Hurmatli hamkasb, kechagi tadbir davomida olingan fotosuratlarni ijtimoiy tarmoqlardagi korporativ sahifamizga joylashtirishimga ruxsat berasizmi?'
      },
      'uz-cyrl': {
        title: 'Шахсий дахлсизлик ва конфиденциал ахборот ҳимояси',
        description: 'Учинчи шахсларга тегишли визуал материаллар, алоқа рақамлари, хусусий ёзишмалар транкриптлари ёки геолокация маълумотларини уларнинг қатъий розилигисиз рақамли муҳитга жойлаштириш қонунан ва ахлоқан тақиқланади.',
        bad_example: 'Эътибор беринг, кеча суҳбатдошим менга қуйидаги мазмунда хабар ёзди. [Хусусий ёзишмалар скриншоти илова қилинди]',
        good_example: 'Ҳурматли ҳамкасб, кечаги тадбир давомида олинган фотосуратларни ижтимоий тармоқлардаги корпоратив саҳифамизга жойлаштиришимга рухсат берасизми?'
      },
      'ru': {
        title: 'Соблюдение неприкосновенности частной жизни и защита конфиденциальной информации',
        description: 'Публикация визуальных материалов, контактных данных, транскриптов частных переписок или геолокационных данных третьих лиц без их однозначного согласия является юридически и этически недопустимой.',
        bad_example: 'Обратите внимание, вчера собеседник прислал мне сообщение следующего содержания. [Прикреплен скриншот частной переписки]',
        good_example: 'Уважаемый коллега, позволите ли вы опубликовать фотографии, сделанные во время вчерашнего мероприятия, на нашей корпоративной странице в социальной сети?'
      },
      'en': {
        title: 'Preservation of Privacy and Protection of Confidential Information',
        description: 'The publication of visual materials, contact details, transcripts of private correspondence, or geolocation data belonging to third parties without their explicit consent is both legally and ethically prohibited.',
        bad_example: 'Please note the following message my colleague sent me yesterday. [Screenshot of private correspondence attached]',
        good_example: 'Respected colleague, would you grant permission for me to publish the photographs taken during yesterday\'s event on our corporate social media page?'
      }
    }
  },

  // --- UNIVERSAL ---
  {
    slug: 'golden-rule',
    categoryId: 'universal',
    translations: {
      'uz-latn': {
        title: 'Virtual makonda inson omilini inobatga olish',
        description: 'Raqamli etiketning fundamental tamoyili: vizual anonimlik holatida ham suhbatdoshning shaxsini va uning hissiy holatini hurmat qilish. Reallikda aytilmaydigan so\'zlarni virtual makonda ham qo\'llamaslik qat\'iy tavsiya etiladi.',
        bad_example: 'Bu qanday mantiqsiz maqola o\'zi? Muallif umuman savodsiz ekan!',
        good_example: 'Maqolada keltirilgan ayrim xulosalar bilan bahslashish mumkin. Balki, masalaga muqobil rakursdan yondashib ko\'rarmiz?'
      },
      'uz-cyrl': {
        title: 'Виртуал маконда инсон омилини инобатга олиш',
        description: 'Рақамли этикетнинг фундаментал тамойили: визуал анонимлик ҳолатида ҳам суҳбатдошнинг шахсини ва унинг ҳиссий ҳолатини ҳурмат қилиш. Реалликда айтилмайдиган сўзларни виртуал маконда ҳам қўлламаслик қатъий тавсия этилади.',
        bad_example: 'Бу қандай мантиқсиз мақола ўзи? Муаллиф умуман саводсиз экан!',
        good_example: 'Мақолада келтирилган айрим хулосалар билан баҳслашиш мумкин. Балки, масалага муқобил ракурсдан ёндашиб кўрармиз?'
      },
      'ru': {
        title: 'Учет человеческого фактора в виртуальной среде',
        description: 'Фундаментальный принцип цифрового этикета: уважение личности собеседника и его эмоционального состояния даже в условиях визуальной анонимности. Настоятельно рекомендуется воздерживаться от использования в виртуальной среде высказываний, неприемлемых в реальном общении.',
        bad_example: 'Что за нелогичная статья? Автор абсолютно некомпетентен!',
        good_example: 'Некоторые выводы, представленные в статье, представляются спорными. Возможно, стоит рассмотреть проблему с альтернативного ракурса?'
      },
      'en': {
        title: 'Consideration of the Human Element in Virtual Environments',
        description: 'The fundamental principle of digital etiquette: respecting the interlocutor\'s personality and emotional state, even under conditions of visual anonymity. It is strictly recommended to refrain from utilizing statements online that would be unacceptable in face-to-face communication.',
        bad_example: 'What an illogical article! The author is completely incompetent!',
        good_example: 'Certain conclusions presented in the article are debatable. Perhaps we could examine the issue from an alternative perspective?'
      }
    }
  }
];
