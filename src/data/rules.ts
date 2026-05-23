import { Rule } from '../types/rule';

export const rules: Rule[] = [
  // --- UNIVERSAL ---
  {
    slug: 'golden-rule',
    categoryId: 'universal',
    translations: {
      'uz-latn': {
        title: 'Ekran ortida ham inson borligini unutmang',
        description: 'Internetdagi oltin qoida: yuzma-yuz aytishga uyaladigan yoki qo\'rqadigan gapingizni, onlayn ham yozmang. Har bir akkaunt ortida siz kabi his-tuyg\'ulari bor haqiqiy inson o\'tiribdi.',
        bad_example: 'Bu qanaqa ahmoqona maqola o\'zi? Kim yozdi buni?!',
        good_example: 'Maqoladagi ba\'zi fikrlarga qo\'shilmayman. Balki bu masalaga boshqacha yondashish kerakdir?'
      },
      'uz-cyrl': {
        title: 'Экран ортида ҳам инсон борлигини унутманг',
        description: 'Интернетдаги олтин қоида: юзма-юз айтишга уяладиган ёки қўрқадиган гапингизни, онлайн ҳам ёзманг. Ҳар бир аккаунт ортида сиздак ҳис-туйғулари бор ҳақиқий инсон ўтирибди.',
        bad_example: 'Бу қанақа аҳмоқона мақола ўзи? Ким ёзди буни?!',
        good_example: 'Мақоладаги баъзи фикрларга қўшилмайман. Балки бу масалага бошқача ёндашиш керакдир?'
      },
      'ru': {
        title: 'Помните, что по ту сторону экрана живой человек',
        description: 'Золотое правило интернета: не пишите онлайн то, что не сказали бы человеку в лицо. За каждым экраном сидит человек с реальными чувствами.',
        bad_example: 'Что за идиотская статья? Кто это вообще писал?!',
        good_example: 'Я не согласен с некоторыми пунктами в статье. Возможно, стоит посмотреть на это с другой стороны?'
      },
      'en': {
        title: 'Remember the human',
        description: 'The golden rule of the internet: behave online as you would in real life. If you wouldn\'t say it to someone\'s face, don\'t type it. There is a real person on the other side of the screen.',
        bad_example: 'What kind of stupid article is this? Who even wrote this?!',
        good_example: 'I have to disagree with some points in this article. Perhaps we could look at it from another perspective?'
      }
    }
  },
  
  // --- MESSAGING ---
  {
    slug: 'salomlashish',
    categoryId: 'messaging',
    translations: {
      'uz-latn': {
        title: 'Faqat "Salom" deb yozmang',
        description: 'Xabar yozganda faqat "Salom" deb yozib, javob kutmang. Bu suhbatdoshingizni kuttirishga majbur qiladi. Muddaoni bitta xabarda tushuntiring.',
        bad_example: 'Salom!\n[10 daqiqa o\'tdi]\nQalaysiz?\n[5 daqiqa o\'tdi]\nSizdan bitta narsani iltimos qilmoqchi edim.',
        good_example: 'Salom, qalaysiz? Kechagi loyiha bo\'yicha yordamingiz kerak edi, qachon vaqtingiz bo\'ladi?'
      },
      'uz-cyrl': {
        title: 'Фақат "Салом" деб ёзманг',
        description: 'Хабар ёзганда фақат "Салом" деб ёзиб, жавоб кутманг. Муддаони битта хабарда тушунтиринг.',
        bad_example: 'Салом!\n[10 дақиқа ўтди]\nҚалайсиз?\n[5 дақиқа ўтди]\nСиздан битта нарсани илтимос қилмоқчи эдим.',
        good_example: 'Салом, қалайсиз? Кечаги лойиҳа бўйича ёрдамингиз керак эди, қачон вақтингиз бўлади?'
      },
      'ru': {
        title: 'Не пишите просто "Привет"',
        description: 'Не пишите просто "Привет" и не ждите ответа. Опишите вашу проблему сразу в одном сообщении.',
        bad_example: 'Привет!\n[прошло 10 минут]\nКак дела?\n[прошло 5 минут]\nХотел кое-что попросить.',
        good_example: 'Привет, как дела? Мне нужна помощь со вчерашним проектом. Когда у тебя будет время?'
      },
      'en': {
        title: 'Don\'t just say "Hello"',
        description: 'Don\'t just say "Hello" and wait for a reply. Write your full question or request in the first message.',
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
        title: 'Savol berishga ruxsat so\'ramang',
        description: '"Savol bersam maylimi?" deb aslo vaqt yo\'qotmang. To\'g\'ridan-to\'g\'ri savolingizni bering.',
        bad_example: 'Savol bersam bo\'ladimi?\n[Yoki: IT ni tushunadiganlar bormi?]',
        good_example: 'Salom, menda React dasturida xatolik chiqyapti, kimdir yordam bera oladimi?'
      },
      'uz-cyrl': {
        title: 'Савол беришга рухсат сўраманг',
        description: '"Савол берсам майлими?" деб асло вақт йўқотманг. Тўғридан-тўғри саволингизни беринг.',
        bad_example: 'Савол берсам бўладими?\n[Ёки: IT ни тушунадиганлар борми?]',
        good_example: 'Салом, менда React дастурида хатолик чиқяпти, кимдир ёрдам бера оладими?'
      },
      'ru': {
        title: 'Не спрашивайте разрешения задать вопрос',
        description: 'Не тратьте время на вопросы вроде "Можно спросить?". Просто задавайте свой вопрос.',
        bad_example: 'Можно задать вопрос?\n[Или: Тут есть кто разбирается в IT?]',
        good_example: 'Привет, у меня ошибка в программе React, кто-нибудь может помочь?'
      },
      'en': {
        title: 'Don\'t ask to ask',
        description: 'Don\'t waste time asking "Can I ask a question?". Just ask your question directly.',
        bad_example: 'Can I ask you something?\n[Or: Anyone here good at IT?]',
        good_example: 'Hi, I am getting a React error, can anyone help me out?'
      }
    }
  },
  {
    slug: 'bitta-xabar',
    categoryId: 'messaging',
    translations: {
      'uz-latn': {
        title: 'Fikrni bitta xabarga jamlang',
        description: 'So\'zlarni bo\'lib-bo\'lib yubormang (fragmentatsiya). Telefon tinimsiz jiringlashi odamni chalg\'itadi va asabiga tegadi. O\'z fikringizni bitta xabarda to\'liq bayon qiling.',
        bad_example: 'Salom\nMen\nBugun\nBora olmayman\nChunki kasalman',
        good_example: 'Salom, maza qochib kasal bo\'lib qoldim. Shuning uchun bugun bora olmayman.'
      },
      'uz-cyrl': {
        title: 'Фикрни битта хабарга жамланг',
        description: 'Сўзларни бўлиб-бўлиб юборманг (фрагментация). Телефон тинимсиз жиринглаши одамни чалғитади. Ўз фикрингизни битта хабарда тўлиқ баён қилинг.',
        bad_example: 'Салом\nМен\nБугун\nБора олмайман\nЧунки касалман',
        good_example: 'Салом, маза қочиб касал бўлиб қолдим. Шунинг учун бугун бора олмайман.'
      },
      'ru': {
        title: 'Пишите всё в одном сообщении',
        description: 'Не отправляйте каждое слово отдельным сообщением. Постоянные уведомления отвлекают и раздражают. Сформулируйте мысль в одном тексте.',
        bad_example: 'Привет\nЯ\nСегодня\nНе приду\nПотому что заболел',
        good_example: 'Привет, я сегодня не смогу прийти, так как заболел.'
      },
      'en': {
        title: 'Don\'t send messages in fragments',
        description: 'Don\'t send messages one word at a time. Constant notifications are annoying. Combine your thoughts into one structured message.',
        bad_example: 'Hi\nI\nCan\'t\nCome today\nBecause I\'m sick',
        good_example: 'Hi, I won\'t be able to make it today because I\'m feeling sick.'
      }
    }
  },
  {
    slug: 'katta-fayllar',
    categoryId: 'messaging',
    translations: {
      'uz-latn': {
        title: 'Katta fayl va ovozli xabarlardan saqlaning',
        description: 'Ogohlantirmasdan og\'ir videolar jo\'natmang (trafik yeydi). Ruxsatsiz 10 daqiqalik ovozli xabar (voice note) jo\'natmang, 2 ta gap bilan yozsa bo\'ladigan narsani ovozli qilmang.',
        bad_example: '[1.5 GB hajmdagi fayl]\n[12 daqiqalik ovozli xabar]',
        good_example: 'Video tayyor (1.5 GB). Telegramdan tashlaymi yoki Google Drivedan? Qulay bo\'lsa ovozli qilib batafsil tushuntirib yuboraman.'
      },
      'uz-cyrl': {
        title: 'Катта файл ва овозли хабарлардан сақланинг',
        description: 'Огоҳлантирмасдан оғир видеолар жўнатманг (трафик ейди). Рухсатсиз 10 дақиқалик овозли хабар (voice note) жўнатманг.',
        bad_example: '[1.5 ГБ ҳажмдаги файл]\n[12 дақиқалик овозли хабар]',
        good_example: 'Видео тайёр (1.5 ГБ). Телеграмдан ташлайми ёки Google Driveдан? Қулай бўлса овозли қилиб батафсил тушунтириб юбораман.'
      },
      'ru': {
        title: 'Осторожнее с файлами и голосовыми',
        description: 'Не отправляйте огромные файлы без предупреждения. Не записывайте 10-минутные голосовые, если это можно сказать в двух предложениях текста.',
        bad_example: '[Файл 1.5 ГБ]\n[Голосовое сообщение на 12 минут]',
        good_example: 'Видео на 1.5 ГБ готово. Кинуть сюда или на Диск? И могу ли я записать голосовое, чтобы быстрее всё объяснить?'
      },
      'en': {
        title: 'Warn before heavy files & voice notes',
        description: 'Don\'t send huge files without warning about size. Don\'t send a 10-minute voice note when a 2-sentence text would work. Ask permission first.',
        bad_example: '[1.5 GB file sent]\n[12 minute audio message]',
        good_example: 'The video is 1.5 GB. Should I send it here or via Drive link? Also, is it okay if I send a quick voice note to explain?'
      }
    }
  },
  {
    slug: 'emotsiyalar',
    categoryId: 'messaging',
    translations: {
      'uz-latn': {
        title: 'Bosh harflar va agresiv tinish belgilari',
        description: 'Matnni to\'liq BOSH HARFLARDA yozish baqirishni anglatadi. Yolg\'iz so\'roq belgisi (?) agressiv talabdek ko\'rinadi.',
        bad_example: 'QACHON TAYYOR BO\'LADI????\n?',
        good_example: 'Loyihaning qachon tayyor bo\'lishi haqida ma\'lumot bera olasizmi? Biz kutyapmiz.'
      },
      'uz-cyrl': {
        title: 'Бош ҳарфлар ва агрессив тиниш белгилари',
        description: 'Матнни тўлиқ БОШ ҲАРФЛАРДА ёзиш бақиришни англатади. Ёлғиз сўроқ белгиси (?) агрессив талабдек кўринади.',
        bad_example: 'ҚАЧОН ТАЙЁР БЎЛАДИ????\n?',
        good_example: 'Лойиҳанинг қачон тайёр бўлиши ҳақида маълумот бера оласизми? Биз кутяпмиз.'
      },
      'ru': {
        title: 'Капс и агрессивная пунктуация',
        description: 'Текст ЗАГЛАВНЫМИ БУКВАМИ воспринимается как крик. Одиночный знак вопроса "?" читается как агрессия.',
        bad_example: 'КОГДА БУДЕТ ГОТОВО????\n?',
        good_example: 'Не могли бы вы подсказать, когда проект будет готов? Мы ждем результатов.'
      },
      'en': {
        title: 'ALL CAPS and aggressive punctuation',
        description: 'Typing in ALL CAPS is considered shouting online. A standalone "?" message is very aggressive.',
        bad_example: 'WHEN WILL IT BE READY????\n?',
        good_example: 'Could you give us an update on when it will be ready? We are waiting.'
      }
    }
  },

  // --- GROUP CHAT ---
  {
    slug: 'guruhga-qoshish',
    categoryId: 'group',
    translations: {
      'uz-latn': {
        title: 'Ruxsatsiz guruhlarga qo\'shmang',
        description: 'Hech kimni uning ruxsatisiz turli xil savdo yoki o\'quv guruhlariga qo\'shmang.',
        bad_example: '[Siz "Super Savdo 2026" guruhiga qo\'shildingiz]',
        good_example: 'Salom, bizda yangi savdo guruhi ochildi. U yerda foydali ma\'lumotlar bo\'ladi. Sizni qo\'shib qo\'ysam maylimi?'
      },
      'uz-cyrl': {
        title: 'Рухсатсиз гуруҳларга қўшманг',
        description: 'Ҳеч кимни унинг рухсатисиз турли хил савдо ёки ўқув гуруҳларига қўшманг.',
        bad_example: '[Сиз "Супер Савдо 2026" гуруҳига қўшилдингиз]',
        good_example: 'Салом, бизда янги савдо гуруҳи очилди. У ерда фойдали маълумотлар бўлади. Сизни қўшиб қўйсам майлими?'
      },
      'ru': {
        title: 'Не добавляйте в группы без спроса',
        description: 'Никогда не добавляйте людей в группы (особенно рекламные) без их предварительного согласия.',
        bad_example: '[Вас добавили в группу "Супер Скидки 2026"]',
        good_example: 'Привет, мы открыли новую группу со скидками. Будешь не против, если я тебя туда добавлю?'
      },
      'en': {
        title: 'Don\'t add to groups without asking',
        description: 'Never add someone to a group chat without asking for their permission first.',
        bad_example: '[You were added to "Super Sales 2026"]',
        good_example: 'Hi, we started a new group chat for sales updates. Would it be okay if I added you?'
      }
    }
  },
  {
    slug: 'shaxsiy-gaplar',
    categoryId: 'group',
    translations: {
      'uz-latn': {
        title: 'Guruhda shaxsiy gaplarni gaplashmang',
        description: 'Guruh chatlarida faqat hammaga tegishli mavzularda yozing. Ikki kishi orasidagi yoki offtop (mavzudan tashqari) muloqotni shaxsiy chatga o\'tkazing.',
        bad_example: '@Aziz bugun choyxonaga borasizmi? @Vali sizchi?',
        good_example: '(Shaxsiy chatda) Salom Aziz, bugun choyxonaga borasizmi?'
      },
      'uz-cyrl': {
        title: 'Гуруҳда шахсий гапларни гаплашманг',
        description: 'Гуруҳ чатларида фақат ҳаммага тегишли мавзуларда ёзинг. Икки киши орасидаги ёки оффотоп мулоқотни шахсий чатга ўтказинг.',
        bad_example: '@Азиз бугун чойхонага борасизми? @Вали сизчи?',
        good_example: '(Шахсий чатда) Салом Азиз, бугун чойхонага борасизми?'
      },
      'ru': {
        title: 'Не обсуждайте личное в группе',
        description: 'В групповых чатах пишите только то, что касается всех. Личные и отвлеченные обсуждения ведите в личных сообщениях.',
        bad_example: '@Aziz ты пойдешь сегодня в кафе? @Vali а ты?',
        good_example: '(В личных сообщениях) Привет Азиз, ты пойдешь сегодня в кафе?'
      },
      'en': {
        title: 'Keep personal chats out of groups',
        description: 'In group chats, only discuss topics relevant to everyone. Move 1-on-1 conversations to direct messages.',
        bad_example: '@Aziz are you going to the cafe today? @Vali how about you?',
        good_example: '(In direct messages) Hi Aziz, are you going to the cafe today?'
      }
    }
  },
  {
    slug: 'spam-forward',
    categoryId: 'group',
    translations: {
      'uz-latn': {
        title: 'Zanjirli xat va memlar bilan guruhni to\'ldirmang',
        description: 'Siyosiy, diniy tortishuvlar yoki "10 ta odamga yuboring" deb yozilgan zanjirli xatlarni mutlaqo yubormang. Google\'dan tezda topish mumkin bo\'lgan savollarni so\'ramang.',
        bad_example: '[5 ta kulgili video] \nShu xabarni 10 ta odamga yuboring, aks holda...',
        good_example: '(Faqat guruhning asosiy maqsadi bo\'yicha muhim savol yozing)'
      },
      'uz-cyrl': {
        title: 'Занжирли хат ва мемлар билан гуруҳни тўлдирманг',
        description: 'Сиёсий, диний тортишувлар ёки "10 та одамга юборинг" деб ёзилган занжирли хатларни мутлақо юборманг.',
        bad_example: '[5 та кулгили видео] \nШу хабарни 10 та одамга юборинг, акс ҳолда...',
        good_example: '(Фақат гуруҳнинг асосий мақсади бўйича муҳим савол ёзинг)'
      },
      'ru': {
        title: 'Не спамьте пересылками и мемами',
        description: 'Не отправляйте "письма счастья" (перешли 10 друзьям) и не обсуждайте политику/религию. Не задавайте вопросы, которые легко гуглятся.',
        bad_example: '[5 смешных видео] \nПерешли это 10 людям, иначе...',
        good_example: '(Публикуйте только по теме самой группы)'
      },
      'en': {
        title: 'Don\'t spam memes or chain messages',
        description: 'Don\'t broadcast chain messages ("Send this to 10 friends") or share political/religious content in unrelated groups. Use Google before asking basic questions.',
        bad_example: '[5 meme videos] \nSend this to 10 friends or else...',
        good_example: '(Only post content relevant to the group\'s purpose)'
      }
    }
  },

  // --- CALLS ---
  {
    slug: 'qongiroq-qilish',
    categoryId: 'calls',
    translations: {
      'uz-latn': {
        title: 'Ogohlantirmasdan qo\'ng\'iroq qilmang',
        description: 'Muhim yoki favqulodda vaziyat bo\'lmasa, qo\'ng\'iroq qilishdan oldin doim xabar yozib ruxsat so\'rang.',
        bad_example: '[14:30 da qo\'ng\'iroq]\n[14:31 da qo\'ng\'iroq]\n[14:35 da qo\'ng\'iroq]',
        good_example: 'Salom, bitta masala bo\'yicha gaplashib olishimiz kerak edi. Hozir qo\'ng\'iroq qilsam bo\'ladimi?'
      },
      'uz-cyrl': {
        title: 'Огоҳлантирмасдан қўнғироқ қилманг',
        description: 'Муҳим ёки фавқулодда вазият бўлмаса, қўнғироқ қилишдан олдин доим хабар ёзиб рухсат сўранг.',
        bad_example: '[14:30 да қўнғироқ]\n[14:31 да қўнғироқ]\n[14:35 да қўнғироқ]',
        good_example: 'Салом, битта масала бўйича гаплашиб олишимиз керак эди. Ҳозир қўнғироқ қилсам бўладими?'
      },
      'ru': {
        title: 'Не звоните без предупреждения',
        description: 'Если это не экстренная ситуация, всегда пишите сообщение перед тем, как позвонить.',
        bad_example: '[Звонок в 14:30]\n[Звонок в 14:31]',
        good_example: 'Привет, нам нужно обсудить один вопрос. Могу ли я сейчас позвонить?'
      },
      'en': {
        title: 'Don\'t call without texting first',
        description: 'Unless it\'s an emergency, always text to ask if it\'s a good time before calling someone.',
        bad_example: '[Call at 14:30]\n[Call at 14:31]',
        good_example: 'Hi, we need to discuss a quick issue. Is it okay to call you now?'
      }
    }
  },
  {
    slug: 'video-qongiroq',
    categoryId: 'calls',
    translations: {
      'uz-latn': {
        title: 'Guruh qo\'ng\'iroqlarida mikrofonni o\'chiring',
        description: 'Videokonferensiyada gapirmayotgan paytingiz mikrofoningizni (Mute) o\'chirib qo\'ying. Chalg\'ib ovqatlanmang yoki matn termang.',
        bad_example: '[Orqa fonda bolalar yig\'isi va klaviatura ovozi eshitilmoqda]',
        good_example: '[Mikrofoningiz o\'chirilgan (Muted), faqat gapirganda yoqasiz]'
      },
      'uz-cyrl': {
        title: 'Гуруҳ қўнғироқларида микрофонни ўчиринг',
        description: 'Видеоконференцияда гапирмаётган пайтингиз микрофонингизни ўчириб қўйинг. Чалғиб овқатланманг ёки матн терманг.',
        bad_example: '[Орқа фонда болалар йиғиси ва клавиатура овози эшитилмоқда]',
        good_example: '[Микрофонингиз ўчирилган, фақат гапирганда ёқасиз]'
      },
      'ru': {
        title: 'Выключайте микрофон в групповых звонках',
        description: 'Отключайте микрофон, когда не говорите. Не занимайтесь посторонними делами (еда, печать на клавиатуре) во время видеозвонка.',
        bad_example: '[На фоне слышен плач детей и стук клавиатуры]',
        good_example: '[Ваш микрофон отключен, вы включаете его только чтобы сказать]'
      },
      'en': {
        title: 'Mute your mic in group calls',
        description: 'Keep your microphone muted when you are not speaking. Don\'t multitask visibly (typing, eating) during video calls.',
        bad_example: '[Background noise of children crying and loud keyboard typing]',
        good_example: '[Your mic is muted, unmuted only when speaking]'
      }
    }
  },

  // --- SOCIAL MEDIA & CONTENT ---
  {
    slug: 'mualliflik',
    categoryId: 'social',
    translations: {
      'uz-latn': {
        title: 'Trollarga ozuqa bermang va ruxsatsiz ulashmang',
        description: 'Instagram, TikTok kabi tarmoqlarda birovning mehnatini (audio/video) o\'ziniki qilib olmang. Provokatorlarga (trollar) javob bermang.',
        bad_example: 'Bu qanaqa bemani video? Sen umuman tushunmas ekansan! (Trollga javob berish)',
        good_example: '[Troll bloklandi va birovning videosi tagida uning muallifligi ko\'rsatildi]'
      },
      'uz-cyrl': {
        title: 'Тролларга озуқа берманг ва рухсатсиз улашманг',
        description: 'Instagram, TikTok каби тармоқларда бировнинг меҳнатини ўзиники қилиб олманг. Провокаторларга жавоб берманг.',
        bad_example: 'Бу қанақа бемани видео? Сен умуман тушунмас экансан! (Троллга жавоб бериш)',
        good_example: '[Тролл блокланди ва бировнинг видеоси тагида унинг муаллифлиги кўрсатилди]'
      },
      'ru': {
        title: 'Не кормите троллей и указывайте авторов',
        description: 'В соцсетях не крадите чужой контент (аудио/видео) без указания авторства. И не отвечайте на агрессию троллей — блокируйте.',
        bad_example: 'Какое же это тупое видео! Ты вообще ничего не понимаешь! (Ответ троллю)',
        good_example: '[Тролль заблокирован. Под чужим видео указана ссылка на автора]'
      },
      'en': {
        title: 'Don\'t feed trolls and credit creators',
        description: 'Don\'t steal audio/content from other creators without credit. Don\'t engage with trolls—silence or block is the best response.',
        bad_example: 'This is such a stupid video! You know nothing! (Replying to a troll)',
        good_example: '[Troll is blocked. Content shared with credit to original creator]'
      }
    }
  },
  {
    slug: 'fakt-chek',
    categoryId: 'content',
    translations: {
      'uz-latn': {
        title: 'Ma\'lumotlarni tarqatishdan oldin tekshiring',
        description: 'Yolg\'on xabar (fake news), firibgarlik yoki eskirtilgan yangiliklarni tarqatmang. Uning qachon va qayerda chiqqanini aniqlang.',
        bad_example: 'Shoshilinch! Bugun barchaga 1 milliondan tarqatilmoqda! Ssilkani bosing!',
        good_example: '[Xabarni 2-3 ta rasmiy davlat kanallaridan tekshirib, yolg\'on ekanligini bilib, tarqatmadi]'
      },
      'uz-cyrl': {
        title: 'Маълумотларни тарқатишдан олдин текширинг',
        description: 'Ёлғон хабар, фирибгарлик ёки эскиртилган янгиликларни тарқатманг. Унинг қачон ва қаерда чиққанлигини аниқланг.',
        bad_example: 'Шошилинч! Бугун барчага 1 миллиондан тарқатилмоқда! Ссилкани босинг!',
        good_example: '[Хабарни расмий каналлардан текшириб, ёлғон эканлигини билиб, тарқатмади]'
      },
      'ru': {
        title: 'Проверяйте факты перед репостом',
        description: 'Не распространяйте фейки, мошеннические ссылки и старые новости под видом новых. Сверяйтесь с надежными источниками.',
        bad_example: 'Срочно! Сегодня всем раздают по 1 миллиону! Переходи по ссылке!',
        good_example: '[Проверил новость в 2-3 официальных источниках, понял что фейк, и не стал репостить]'
      },
      'en': {
        title: 'Fact-check before sharing',
        description: 'Don\'t share unverified news, misinformation, or old news as new. Check multiple reliable sources first.',
        bad_example: 'Urgent! Everyone is getting 1 million today! Click the link!',
        good_example: '[Checked the news against official sources, realized it was fake, did not share]'
      }
    }
  },

  // --- COMMENTS ---
  {
    slug: 'izohlar',
    categoryId: 'comments',
    translations: {
      'uz-latn': {
        title: 'Izohlarda shaxsiyatga tegmang',
        description: 'Muhokamalarda qatnashganda faqat g\'oyalarni tanqid qiling, shaxsga o\'tmang. Hech qanday ma\'nosiz ("Birinchi!") izohlar yozmang.',
        bad_example: 'Sen o\'zi umuman aqli past ekansan! Qanaqa qilib xato yozyapsan?',
        good_example: 'Fikringizga qo\'shilmayman, chunki bu statistikaga to\'g\'ri kelmaydi. Mana faktlar...'
      },
      'uz-cyrl': {
        title: 'Изоҳларда шахсиятга тегманг',
        description: 'Муҳокамаларда қатнашганда фақат ғояларни танқид қилинг, шахсга ўтманг. Ҳеч қандай маъносиз изоҳлар ёзманг.',
        bad_example: 'Сен ўзи умуман ақли паст экансан! Қанақа қилиб хато ёзяпсан?',
        good_example: 'Фикрингизга қўшилмайман, чунки бу статистикага тўғри келмайди. Мана фактлар...'
      },
      'ru': {
        title: 'Не переходите на личности в комментариях',
        description: 'В комментариях критикуйте идеи, а не людей. Не пишите бессмысленные сообщения вроде "Первый!".',
        bad_example: 'Ты вообще дурак что ли? Как можно так писать с ошибками?',
        good_example: 'Я не согласен с вашим мнением, так как оно противоречит статистике. Вот факты...'
      },
      'en': {
        title: 'Don\'t make personal attacks in comments',
        description: 'Disagree with ideas, not people. Don\'t comment just to insult, and don\'t write meaningless "first!" comments.',
        bad_example: 'You are so stupid! How can you make such spelling mistakes?',
        good_example: 'I have to disagree with this, as it contradicts recent statistics. Here are the facts...'
      }
    }
  },

  // --- PRIVACY ---
  {
    slug: 'shaxsiy-malumot',
    categoryId: 'privacy',
    translations: {
      'uz-latn': {
        title: 'Birovning shaxsiy hayotiga hurmat',
        description: 'Boshqalarning rasmlarini, telefon raqamlarini, yozishmalarini (skrinshot) yoki joylashuvini ularning ruxsatisiz internetga joylamang.',
        bad_example: 'Qaranglar, kecha Sardor menga shunaqa deb yozdi! [Shaxsiy suhbat skrinshoti]',
        good_example: 'Sardor, kechagi rasmlarni Instagramga joylasam maylimi? Ruxsat berasizmi?'
      },
      'uz-cyrl': {
        title: 'Бировнинг шахсий ҳаётига ҳурмат',
        description: 'Бошқаларнинг расмларини, телефон рақамларини, ёзишмаларини ёки жойлашувини уларнинг рухсатисиз интернетга жойламанг.',
        bad_example: 'Қаранглар, кеча Сардор менга шунақа деб ёзди! [Шахсий суҳбат скриншоти]',
        good_example: 'Сардор, кечаги расмларни Инстаграмга жойласам майлими? Рухсат берасизми?'
      },
      'ru': {
        title: 'Уважайте чужую приватность',
        description: 'Никогда не публикуйте чужие фото, номера телефонов, скриншоты личных переписок или местоположение без согласия человека.',
        bad_example: 'Смотрите, что мне вчера Сардор написал! [Скриншот личной переписки]',
        good_example: 'Сардор, ты не против если я выложу вчерашние фотки в Инстаграм?'
      },
      'en': {
        title: 'Respect others\' privacy',
        description: 'Don\'t share others\' personal information, screenshots of private conversations, or tag them in photos without permission.',
        bad_example: 'Look what Sardor texted me yesterday! [Screenshot of private DMs]',
        good_example: 'Sardor, is it okay if I post yesterday\'s photos to Instagram?'
      }
    }
  }
];
