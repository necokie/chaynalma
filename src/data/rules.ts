import { Rule } from '../types/rule';

export const rules: Rule[] = [
  // --- MESSAGING ---
  {
    slug: 'salomlashish',
    categoryId: 'messaging',
    translations: {
      'uz-latn': {
        title: 'Iltimos, chatda faqat "Salom" deb yozmang!',
        description: 'Nega? Chunki bu vaqtni behuda sarflashdir! Siz "Salom" deysiz, suhbatdoshingiz uni ko\'rib, ishini tashlab sizga "Salom" deb javob yozishini kutasiz. Yaxshisi, salomlashish bilan birga darhol muddaoga o\'ting!',
        bad_example: 'Salom!\n[10 daqiqa o\'tdi]\nQalaysiz?\n[5 daqiqa o\'tdi]\nSizdan bitta narsani iltimos qilmoqchi edim.',
        good_example: 'Salom, qalaysiz? Kechagi loyiha bo\'yicha yordamingiz kerak edi, qachon vaqtingiz bo\'ladi?'
      },
      'uz-cyrl': {
        title: 'Илтимос, чатда фақат "Салом" деб ёзманг!',
        description: 'Нега? Чунки бу вақтни беҳуда сарфлашдир! Сиз "Салом" дейсиз, суҳбатдошингиз уни кўриб, ишини ташлаб сизга "Салом" деб жавоб ёзишини кутасиз. Яхшиси, саломлашиш билан бирга дарҳол муддаога ўтинг!',
        bad_example: 'Салом!\n[10 дақиқа ўтди]\nҚалайсиз?\n[5 дақиқа ўтди]\nСиздан битта нарсани илтимос қилмоқчи эдим.',
        good_example: 'Салом, қалайсиз? Кечаги лойиҳа бўйича ёрдамингиз керак эди, қачон вақтингиз бўлади?'
      },
      'ru': {
        title: 'Пожалуйста, не пишите просто «Привет» в чате!',
        description: 'Почему? Потому что это пустая трата времени! Вы пишете «Привет» и ждете, пока собеседник отвлечется от дел и ответит вам тем же. Лучше сразу переходите к делу в том же сообщении!',
        bad_example: 'Привет!\n[прошло 10 минут]\nКак дела?\n[прошло 5 минут]\nХотел кое-что попросить.',
        good_example: 'Привет, как дела? Мне нужна помощь со вчерашним проектом. Когда у тебя будет время?'
      },
      'en': {
        title: 'Please, don\'t just say "Hello" in chat!',
        description: 'Why? Because it\'s a huge waste of time! You say "Hello" and wait for the other person to drop what they are doing and reply. Just say hello and ask your question in the same message!',
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
        title: 'Iltimos, meta-savollar bermang!',
        description: 'Meta-savol — bu savol berishga ruxsat so\'rash. Masalan, "Savol bersam maylimi?" yoki "Bu yerda dasturchilar bormi?". Bu ham huddi "Salom" deb kutib turishga o\'xshaydi. Ruxsat so\'ramang, shunchaki savolni o\'zini bering!',
        bad_example: 'Savol bersam bo\'ladimi?\n[Yoki: IT mutaxassislari bormi?]',
        good_example: 'Salom, menda React dasturida xatolik yuzaga kelyapti, kimdir yordam bera oladimi?'
      },
      'uz-cyrl': {
        title: 'Илтимос, мета-саволлар берманг!',
        description: 'Мета-савол — бу савол беришга рухсат сўраш. Масалан, "Савол берсам майлими?" ёки "Бу ерда дастурчилар борми?". Бу ҳам ҳудди "Салом" деб кутиб туришга ўхшайди. Рухсат сўраманг, шунчаки саволни ўзини беринг!',
        bad_example: 'Савол берсам бўладими?\n[Ёки: IT мутахассислари борми?]',
        good_example: 'Салом, менда React дастурида хатолик юзага келяпти, кимдир ёрдам бера оладими?'
      },
      'ru': {
        title: 'Пожалуйста, не задавайте мета-вопросы!',
        description: 'Мета-вопрос — это вопрос о том, можно ли задать вопрос. Например, «Можно спросить?» или «Тут есть программисты?». Это ворует время точно так же, как пустое «Привет». Просто задайте свой вопрос сразу!',
        bad_example: 'Можно задать вопрос?\n[Или: Тут есть IT-специалисты?]',
        good_example: 'Привет, у меня возникает ошибка в React, кто-нибудь может помочь?'
      },
      'en': {
        title: 'Please, no meta-questions!',
        description: 'A meta-question is asking to ask a question. Like "Can I ask a question?" or "Any programmers here?". It wastes just as much time as just saying "Hi". Don\'t ask for permission, just ask your actual question!',
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
        title: 'Bitta gapni maydalab yubormang!',
        description: 'Har bitta so\'z uchun alohida xabar jo\'natsangiz, suhbatdoshingizning telefoni tinimsiz jiringlaydi va diqqati buziladi. Fikringizni bitta chiroyli xabarga jamlab, keyin jo\'nating!',
        bad_example: 'Salom\nMen\nBugun\nBora olmayman\nChunki betobman',
        good_example: 'Salom, sog\'lig\'im yomonlashgani sababli bugun bora olmayman.'
      },
      'uz-cyrl': {
        title: 'Битта гапни майдалаб юборманг!',
        description: 'Ҳар битта сўз учун алоҳида хабар жўнатсангиз, суҳбатдошингизнинг телефони тинимсиз жиринглайди ва диққати бузилади. Фикрингизни битта чиройли хабарга жамлаб, кейин жўнатинг!',
        bad_example: 'Салом\nМен\nБугун\nБора олмайман\nЧунки бетобман',
        good_example: 'Салом, соғлиғим ёмонлашгани сабабли бугун бора олмайман.'
      },
      'ru': {
        title: 'Не дробите сообщения!',
        description: 'Если вы отправляете каждое слово отдельным сообщением, телефон собеседника будет разрываться от уведомлений. Соберите всю свою мысль в одно сообщение и отправьте его!',
        bad_example: 'Привет\nЯ\nСегодня\nНе смогу прийти\nПотому что заболел',
        good_example: 'Привет, я сегодня не смогу прийти по состоянию здоровья.'
      },
      'en': {
        title: 'Don\'t fragment your messages!',
        description: 'Sending every word or phrase as a separate message makes the recipient\'s phone vibrate constantly and breaks their focus. Gather your thoughts into one complete message before hitting send!',
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
        title: 'Ovozli xabarlar va og\'ir fayllarni ogohlantirib jo\'nating',
        description: 'Har doim ham ovozli xabarni eshitishning iloji bo\'lmaydi (masalan, yig\'ilishda yoki ko\'chada). Ovozli yuborishdan oldin so\'rang yoki qisqacha matn yozing. Katta fayllarni esa ogohlantirmasdan yuborib odamlarning internet trafigini kuydirmang!',
        bad_example: '[1.5 GB hajmdagi fayl]\n[12 daqiqalik ovozli xabar]',
        good_example: 'Video tayyor (1.5 GB). Telegram orqali yuboraymi yoki ssilka qilib tashlaymi? Aytgancha, hozir ovozli xabar eshita olasizmi?'
      },
      'uz-cyrl': {
        title: 'Овозли хабарлар ва оғир файлларни огоҳлантириб жўнатинг',
        description: 'Ҳар доим ҳам овозли хабарни эшитишнинг иложи бўлмайди (масалан, йиғилишда ёки кўчада). Овозли юборишдан олдин сўранг ёки қисқача матн ёзинг. Катта файлларни эса огоҳлантирмасдан юбориб одамларнинг интернет трафигини куйдирманг!',
        bad_example: '[1.5 ГБ ҳажмдаги файл]\n[12 дақиқалик овозли хабар]',
        good_example: 'Видео тайёр (1.5 ГБ). Телеграм орқали юборайми ёки ссылка қилиб ташлайми? Айтганча, ҳозир овозли хабар эшита оласизми?'
      },
      'ru': {
        title: 'Предупреждайте о голосовых и больших файлах',
        description: 'Далеко не всегда удобно слушать голосовые (на встрече, в метро). Спросите разрешения перед отправкой. И не убивайте чужой мобильный трафик, скидывая гигабайтные файлы без предупреждения!',
        bad_example: '[Файл 1.5 ГБ]\n[Голосовое сообщение на 12 минут]',
        good_example: 'Видео готово (1.5 ГБ). Скинуть файлом или ссылкой на облако? И скажи, тебе удобно сейчас послушать голосовое?'
      },
      'en': {
        title: 'Warn before sending audio and huge files',
        description: 'It\'s not always convenient to listen to voice notes (meetings, loud places). Always ask before sending one. And don\'t waste people\'s mobile data by dropping gigabyte-sized files without asking!',
        bad_example: '[1.5 GB file sent]\n[12 minute audio message]',
        good_example: 'The video is ready (1.5 GB). Should I send it directly or share a cloud link? Also, can you listen to a quick voice note right now?'
      }
    }
  },
  {
    slug: 'emotsiyalar',
    categoryId: 'messaging',
    translations: {
      'uz-latn': {
        title: 'CAPS LOCKDA YOZMANG!',
        description: 'Agar butun matnni katta harflarda yozsangiz, suhbatdoshingiz buni siz baqiryapsiz deb qabul qiladi. Shuningdek, 10 ta so\'roq belgisini yuborish ham xuddi dushmaningiz bilan gaplashayotgandek tuyuladi.',
        bad_example: 'QACHON TAYYOR BO\'LADI????\n?',
        good_example: 'Loyihaning yakunlanish muddati haqida ma\'lumot bera olasizmi?'
      },
      'uz-cyrl': {
        title: 'CAPS LOCKДА ЁЗМАНГ!',
        description: 'Агар бутун матнни катта ҳарфларда ёзсангиз, суҳбатдошингиз буни сиз бақиряпсиз деб қабул қилади. Шунингдек, 10 та сўроқ белгисини юбориш ҳам худди душманингиз билан гаплашаётгандек туюлади.',
        bad_example: 'ҚАЧОН ТАЙЁР БЎЛАДИ????\n?',
        good_example: 'Лойиҳанинг якунланиш муддати ҳақида маълумот бера оласизми?'
      },
      'ru': {
        title: 'НЕ ПИШИТЕ КАПСОМ!',
        description: 'Текст, написанный полностью заглавными буквами, воспринимается как крик. А отправка кучи вопросительных знаков выглядит как агрессивный наезд.',
        bad_example: 'КОГДА БУДЕТ ГОТОВО????\n?',
        good_example: 'Не могли бы вы уточнить сроки завершения проекта?'
      },
      'en': {
        title: 'DO NOT TYPE IN ALL CAPS!',
        description: 'If you type everything in uppercase, the other person reads it as if you are yelling at them. Also, sending 10 question marks in a row comes off as very aggressive.',
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
        title: 'So\'ramasdan guruhlarga qo\'shmang',
        description: 'Kimnidir ruxsatsiz qandaydir tijorat, kiyim-kechak yoki reklamali guruhlarga qo\'shish — bu juda ham yomon odat. Odamlardan oldin so\'rang!',
        bad_example: '[Siz "Super Savdo 2026" guruhiga qo\'shildingiz]',
        good_example: 'Salom, biz yangi guruh ochgandik. U yerda zo\'r ma\'lumotlar bor. Sizni qo\'shsam qarshiligingiz yo\'qmi?'
      },
      'uz-cyrl': {
        title: 'Сўрамасдан гуруҳларга қўшманг',
        description: 'Кимнидир рухсатсиз қандайдир тижорат, кийим-кечак ёки рекламали гуруҳларга қўшиш — бу жуда ҳам ёмон одат. Одамлардан олдин сўранг!',
        bad_example: '[Сиз "Супер Савдо 2026" гуруҳига қўшилдингиз]',
        good_example: 'Салом, биз янги гуруҳ очгандик. У ерда зўр маълумотлар бор. Сизни қўшсам қаршилигингиз йўқми?'
      },
      'ru': {
        title: 'Не добавляйте в группы без спроса',
        description: 'Добавлять людей без их согласия во всякие рекламные и коммерческие группы — это жутко бесит. Сначала спросите разрешения!',
        bad_example: '[Вас добавили в группу "Супер Скидки 2026"]',
        good_example: 'Привет, мы создали новую группу. Не против, если я добавлю тебя туда?'
      },
      'en': {
        title: 'Don\'t add people to groups without asking',
        description: 'Adding someone to a random promotional or commercial group without their consent is incredibly annoying. Ask for permission first!',
        bad_example: '[You were added to "Super Sales 2026"]',
        good_example: 'Hey, we started a new group. Would it be okay if I added you to it?'
      }
    }
  },
  {
    slug: 'shaxsiy-gaplar',
    categoryId: 'group',
    translations: {
      'uz-latn': {
        title: 'Shaxsiy gaplarni guruhda gaplashmang',
        description: 'Guruh hamma uchun! Agar ikki kishi choyxona yoki shaxsiy ishlari haqida gaplashmoqchi bo\'lsa, lichkaga (shaxsiy xabarlarga) o\'tishi kerak. Boshqalarni bezovta qilmang.',
        bad_example: '@Aziz bugun choyxonaga borasizmi? @Vali sizchi?',
        good_example: '(Shaxsiy chatda) Salom Aziz, bugun tushlikka vaqtingiz bormi?'
      },
      'uz-cyrl': {
        title: 'Шахсий гапларни гуруҳда гаплашманг',
        description: 'Гуруҳ ҳамма учун! Агар икки киши чойхона ёки шахсий ишлари ҳақида гаплашмоқчи бўлса, личкага (шахсий хабарларга) ўтиши керак. Бошқаларни безовта қилманг.',
        bad_example: '@Азиз бугун чойхонага борасизми? @Вали сизчи?',
        good_example: '(Шахсий чатда) Салом Азиз, бугун тушликка вақтингиз борми?'
      },
      'ru': {
        title: 'Личные разговоры — в личку',
        description: 'Чат группы предназначен для всех! Если два человека хотят обсудить поход в кафе или личные дела, они должны перейти в личные сообщения, чтобы не спамить остальных.',
        bad_example: '@Aziz вы пойдете сегодня в кафе? @Vali а вы?',
        good_example: '(В личных сообщениях) Привет, Азиз. Погнали сегодня на обед?'
      },
      'en': {
        title: 'Take personal conversations to DMs',
        description: 'Group chats are for everyone! If two people want to discuss lunch plans or personal matters, they should move to direct messages so they don\'t spam the rest of the group.',
        bad_example: '@Aziz are you going to the cafe today? @Vali how about you?',
        good_example: '(In direct messages) Hey Aziz, do you have time for lunch today?'
      }
    }
  },
  {
    slug: 'spam-forward',
    categoryId: 'group',
    translations: {
      'uz-latn': {
        title: 'Guruhlarni zanjirli xatlar bilan to\'ldirmang',
        description: '"Buni 10 kishiga yubor", siyosiy va diniy bahslar yoki mavzuga oid bo\'lmagan tik-tok videolarni ishchi guruhlarga tashlash — umuman keraksiz axborot shovqinidir.',
        bad_example: '[5 ta ommaviy mem] \nUshbu xabarni 10 kishiga yuboring, aks holda...',
        good_example: '(Faqat guruhning asosiy maqsadiga doir narsalar tashlang)'
      },
      'uz-cyrl': {
        title: 'Гуруҳларни занжирли хатлар билан тўлдирманг',
        description: '"Буни 10 кишига юбор", сиёсий ва диний баҳслар ёки мавзуга оид бўлмаган тик-ток видеоларни ишчи гуруҳларга ташлаш — умуман кераксиз ахборот шовқинидир.',
        bad_example: '[5 та оммавий мем] \nУшбу хабарни 10 кишига юборинг, акс ҳолда...',
        good_example: '(Фақат гуруҳнинг асосий мақсадига доир нарсалар ташланг)'
      },
      'ru': {
        title: 'Не засоряйте чаты спамом и цепочными письмами',
        description: '«Перешли это 10 людям», политические и религиозные споры или случайные видео из тиктока в рабочем чате — это просто информационный мусор, который всем мешает.',
        bad_example: '[5 популярных мемов] \nПерешлите это 10 людям, иначе...',
        good_example: '(Публикуйте только то, что относится к теме группы)'
      },
      'en': {
        title: 'Don\'t clutter chats with spam and chain letters',
        description: 'Forwarding "send this to 10 people", engaging in political/religious debates, or dropping random TikToks into a work group creates annoying informational noise.',
        bad_example: '[5 viral memes] \nForward this to 10 people or else...',
        good_example: '(Only post things that are relevant to the group\'s purpose)'
      }
    }
  },

  // --- CALLS ---
  {
    slug: 'qongiroq-qilish',
    categoryId: 'calls',
    translations: {
      'uz-latn': {
        title: 'Qo\'ng\'iroq qilishdan oldin ogohlantiring',
        description: 'Odamlar doim ham telefonni ko\'tarishga tayyor emas. Kutilmaganda video yoki ovozli qo\'ng\'iroq qilish shaxsiy chegarani buzishdek gap. Oldin matnli xabarda qulay vaqtni so\'rang!',
        bad_example: '[14:30 da qo\'ng\'iroq]\n[14:31 da qo\'ng\'iroq]\n[14:35 da qo\'ng\'iroq]',
        good_example: 'Salom, hozir gaplashib olishga qulaymi? Yoki qachon telefon qilay?'
      },
      'uz-cyrl': {
        title: 'Қўнғироқ қилишдан олдин огоҳлантиринг',
        description: 'Одамлар доим ҳам телефонни кўтаришга тайёр эмас. Кутилмаганда видео ёки овозли қўнғироқ қилиш шахсий чегарани бузишдек гап. Олдин матнли хабарда қулай вақтни сўранг!',
        bad_example: '[14:30 да қўнғироқ]\n[14:31 да қўнғироқ]\n[14:35 да қўнғироқ]',
        good_example: 'Салом, ҳозир гаплашиб олишга қулайми? Ёки қачон телефон қилай?'
      },
      'ru': {
        title: 'Предупреждайте перед звонком',
        description: 'Люди не всегда готовы ответить на звонок. Внезапный аудио- или видеозвонок часто нарушает личные границы. Спросите в чате, когда человеку будет удобно поговорить!',
        bad_example: '[Звонок в 14:30]\n[Звонок в 14:31]\n[Звонок в 14:35]',
        good_example: 'Привет, тебе сейчас удобно поговорить? Или когда лучше набрать?'
      },
      'en': {
        title: 'Warn people before calling',
        description: 'People aren\'t always ready to pick up the phone. An unannounced voice or video call is often an invasion of privacy. Just text and ask when it\'s a good time to call!',
        bad_example: '[Call at 14:30]\n[Call at 14:31]\n[Call at 14:35]',
        good_example: 'Hey, is it a good time to talk right now? Or when should I call?'
      }
    }
  },
  {
    slug: 'video-qongiroq',
    categoryId: 'calls',
    translations: {
      'uz-latn': {
        title: 'Gapirmayotganda mikrofonni o\'chiring (Mute)',
        description: 'Zoom yoki Telegramdagi guruh qo\'ng\'iroqlarida, agar siz gapirmayotgan bo\'lsangiz mikrofoningizni o\'chirib qo\'ying. Sizning orqa foningizdagi mashina ovozi, idish-tovoq shaqirlashi boshqalarni chalg\'itadi!',
        bad_example: '[Orqa fonda maishiy shovqinlar, farzandlar ovozi va klaviatura chertishlari eshitilmoqda]',
        good_example: '[Mikrofoningiz o\'chirilgan, faqat navbatingiz kelganda yoqasiz]'
      },
      'uz-cyrl': {
        title: 'Гапирмаётганда микрофонни ўчиринг (Mute)',
        description: 'Zoom ёки Telegramдаги гуруҳ қўнғироқларида, агар сиз гапирмаётган бўлсангиз микрофонингизни ўчириб қўйинг. Сизнинг орқа фонингиздаги машина овози, идиш-товоқ шақирлаши бошқаларни чалғитади!',
        bad_example: '[Орқа фонда маиший шовқинлар, фарзандлар овози ва клавиатура чертишлари эшитилмоқда]',
        good_example: '[Микрофонингиз ўчирилган, фақат навбатингиз келганда ёқасиз]'
      },
      'ru': {
        title: 'Выключайте микрофон, когда не говорите',
        description: 'В групповых звонках всегда выключайте микрофон (mute), если сейчас не ваша очередь говорить. Ваш фоновый шум, звуки машин или стук клавиатуры мешают всем остальным!',
        bad_example: '[На фоне слышны бытовые шумы, крики и стук клавиатуры]',
        good_example: '[Ваш микрофон выключен и включается только когда вы говорите]'
      },
      'en': {
        title: 'Mute yourself when you aren\'t speaking',
        description: 'On group calls (Zoom, Telegram), mute your microphone if you are not currently talking. Your background noise, loud typing, or traffic sounds are incredibly distracting to everyone else!',
        bad_example: '[Background domestic noises, kids yelling, and loud typing are audible]',
        good_example: '[You are muted, and you only unmute when it is your turn to speak]'
      }
    }
  },

  // --- SOCIAL MEDIA ---
  {
    slug: 'mualliflik',
    categoryId: 'social',
    translations: {
      'uz-latn': {
        title: 'Mualliflikni saqlang va trollarga ovqat bermang',
        description: 'Birovning rasm, video yoki zo\'r matnini o\'g\'irlab o\'zingizniki qilib olmang — manbasini ko\'rsating. Va eng muhimi, internetda ataylab gashga tegadigan trollarga umuman javob qaytarmang, ularni shunchaki e\'tiborsiz qoldiring!',
        bad_example: 'Nega bunaqa ahmoqona narsa yozyapsan o\'zi? Sen kimsan? (Troll bilan urushish)',
        good_example: '[Trollni blokka tiqish va o\'zga muallifning kontentini ssilka bilan ulashish]'
      },
      'uz-cyrl': {
        title: 'Муаллифликни сақланг ва тролларга овқат берманг',
        description: 'Бировнинг расм, видео ёки зўр матнини ўғирлаб ўзингизники қилиб олманг — манбасини кўрсатинг. Ва энг муҳими, интернетда атайлаб гашга тегадиган тролларга умуман жавоб қайтарманг, уларни шунчаки эътиборсиз қолдиринг!',
        bad_example: 'Нега бунақа аҳмоқона нарса ёзяпсан ўзи? Сен кимсан? (Тролл билан урушиш)',
        good_example: '[Троллни блокка тиқиш ва ўзга муаллифнинг контентини ссылка билан улашиш]'
      },
      'ru': {
        title: 'Указывайте авторов и не кормите троллей',
        description: 'Не воруйте чужие фото, видео или классные тексты, выдавая их за свои — указывайте источник. И главное, никогда не спорьте с троллями в комментариях, лучший ответ им — полный игнор!',
        bad_example: 'Зачем ты пишешь такую чушь? Ты вообще кто? (Вступление в спор с троллем)',
        good_example: '[Заблокировать тролля. Поделиться чужим контентом со ссылкой на автора]'
      },
      'en': {
        title: 'Credit creators and don\'t feed the trolls',
        description: 'Don\'t steal someone else\'s photos, videos, or great text and claim it as your own—cite the source. Most importantly, never argue with internet trolls who just want a reaction. Ignore them completely!',
        bad_example: 'Why are you writing such nonsense? Who even are you? (Arguing with a troll)',
        good_example: '[Blocking the troll. Sharing third-party content with a link to the original creator]'
      }
    }
  },

  // --- CONTENT ---
  {
    slug: 'fakt-chek',
    categoryId: 'content',
    translations: {
      'uz-latn': {
        title: 'Yolg\'on xabarlarni tarqatmang (Fakt-chek)',
        description: '"Shoshilinch xabar!", "Davlat pul tarqatyapti!" kabi g\'alati xabarlarni guruhlarga yuborishdan oldin, rasmiy yangiliklar saytlarini tekshiring. Yolg\'on xabar tarqatib vahima qo\'zg\'amang!',
        bad_example: 'Shoshilinch xabar! Barcha fuqarolarga 1 milliondan tarqatilyapti! Havolaga kiring!',
        good_example: '[Xabarni rasmiy saytlardan izlab ko\'rib, yolg\'onligini tushunish va uni hech kimga yubormaslik]'
      },
      'uz-cyrl': {
        title: 'Ёлғон хабарларни тарқатманг (Факт-чек)',
        description: '"Шошилинч хабар!", "Давлат пул тарқатяпти!" каби ғалати хабарларни гуруҳларга юборишдан олдин, расмий янгиликлар сайтларини текширинг. Ёлғон хабар тарқатиб ваҳима қўзғаманг!',
        bad_example: 'Шошилинч хабар! Барча фуқароларга 1 миллиондан тарқатиляпти! Ҳаволага киринг!',
        good_example: '[Хабарни расмий сайтлардан излаб кўриб, ёлғонлигини тушуниш ва уни ҳеч кимга юбормаслик]'
      },
      'ru': {
        title: 'Проверяйте факты перед отправкой',
        description: 'Прежде чем пересылать в чаты посты в стиле «Срочно!» или «Государство раздает деньги!», проверьте официальные новостные сайты. Не распространяйте фейки и не сейте панику!',
        bad_example: 'Экстренно! Государство раздает всем по 1 миллиону! Срочно жмите на ссылку!',
        good_example: '[Проверить новость в официальных источниках, понять, что это фейк, и никому не пересылать]'
      },
      'en': {
        title: 'Fact-check before you share',
        description: 'Before forwarding posts that scream "Urgent!" or "Free money from the government!", check official news websites. Don\'t spread fake news and cause unnecessary panic!',
        bad_example: 'Urgent Alert! The government is giving away 1 million to everyone! Click the link!',
        good_example: '[Checking the news on official sites, realizing it is fake, and not forwarding it to anyone]'
      }
    }
  },

  // --- COMMENTS ---
  {
    slug: 'izohlar',
    categoryId: 'comments',
    translations: {
      'uz-latn': {
        title: 'Izohlarda odamlarning shaxsiyatiga tegmang',
        description: 'Muhokama paytida faqatgina g\'oya va fikrni tanqid qiling, odamni o\'zini haqorat qilmang. "Sen o\'zi kimsan", "Aqlsiz ekansan" deb yozish umuman madaniyatsizlik!',
        bad_example: 'Sen o\'zi umuman aqli past ekansan! Qanaqa qilib shunaqa xato yozyapsan?',
        good_example: 'Bu fikringizga qo\'shilmayman, chunki so\'nggi statistikada umuman boshqa raqamlar keltirilgan...'
      },
      'uz-cyrl': {
        title: 'Изоҳларда одамларнинг шахсиятига тегманг',
        description: 'Муҳокама пайтида фақатгина ғоя ва фикрни танқид қилинг, одамни ўзини ҳақорат қилманг. "Сен ўзи кимсан", "Ақлсиз экансан" деб ёзиш умуман маданиятсизлик!',
        bad_example: 'Сен ўзи умуман ақли паст экансан! Қанақа қилиб шунақа хато ёзяпсан?',
        good_example: 'Бу фикрингизга қўшилмайман, чунки сўнгги статистикада умуман бошқа рақамлар келтирилган...'
      },
      'ru': {
        title: 'Не переходите на личности в комментариях',
        description: 'В спорах критикуйте идею и мнение, а не самого человека. Писать «Ты кто вообще такой» или «Ты тупой» — это просто верх невоспитанности!',
        bad_example: 'Ты вообще дурак что ли? Как можно так писать с ошибками?',
        good_example: 'Я не согласен с вашим мнением, так как последняя статистика показывает совершенно другие цифры...'
      },
      'en': {
        title: 'Don\'t make personal attacks in comments',
        description: 'When arguing, criticize the idea or the opinion, not the person. Calling someone names or saying "Who are you even?" is just terrible manners!',
        bad_example: 'You are so stupid! How can you make such elementary errors?',
        good_example: 'I have to disagree with your point here, as recent statistics show completely different numbers...'
      }
    }
  },

  // --- PRIVACY ---
  {
    slug: 'shaxsiy-malumot',
    categoryId: 'privacy',
    translations: {
      'uz-latn': {
        title: 'Boshqalarning shaxsiy yozishmalarini tarqatmang',
        description: 'Kimgadir gaplashgan sirlaringiz, shaxsiy skrinshotlar yoki do\'stingizning ruxsatisiz uning rasmini internetga chiqarib yuborish — qonunan va axloqan noto\'g\'ri!',
        bad_example: 'Qaranglar, kecha Sardor menga mana nima deb yozdi! [Sardorning shaxsiy xabari skrinshoti ilova qilindi]',
        good_example: 'Sardor, kechagi rasmlarni Instagramga joylasam maylimi? Ruxsat berasizmi?'
      },
      'uz-cyrl': {
        title: 'Бошқаларнинг шахсий ёзишмаларини тарқатманг',
        description: 'Кимгадир гаплашган сирларингиз, шахсий скриншотлар ёки дўстингизнинг рухсатисиз унинг расмини интернетга чиқариб юбориш — қонунан ва ахлоқан нотўғри!',
        bad_example: 'Қаранглар, кеча Сардор менга мана нима деб ёзди! [Сардорнинг шахсий хабари скриншоти илова қилинди]',
        good_example: 'Сардор, кечаги расмларни Инстаграмга жойласам майлими? Рухсат берасизми?'
      },
      'ru': {
        title: 'Уважайте чужую личную жизнь',
        description: 'Публиковать чужие секреты, скриншоты личных переписок или фотографии друга без его разрешения — это неправильно как с моральной, так и с юридической точки зрения!',
        bad_example: 'Смотрите, что мне вчера Сардор написал! [Прикреплен скриншот личной переписки Сардора]',
        good_example: 'Сардор, ты не против если я выложу вчерашние фотки в Инстаграм?'
      },
      'en': {
        title: 'Respect others\' private lives',
        description: 'Posting someone else\'s secrets, screenshots of private DMs, or pictures of a friend without their permission is both morally and legally wrong!',
        bad_example: 'Look what Sardor texted me yesterday! [Screenshot of Sardor\'s private DMs attached]',
        good_example: 'Sardor, is it okay if I post yesterday\'s photos to Instagram?'
      }
    }
  },

  // --- UNIVERSAL ---
  {
    slug: 'golden-rule',
    categoryId: 'universal',
    translations: {
      'uz-latn': {
        title: 'Ekran ortida ham tirik inson o\'tirganini unutmang',
        description: 'Bu raqamli etiketning eng asosiy, oltin qoidasi! Garchi yuzma-yuz ko\'rmayotgan bo\'lsangiz ham, internetdagi suhbatdoshingizning ham ko\'ngli bor. Hayotda uning yuziga qarab aytolmaydigan gapingizni, internetda ham yozmang!',
        bad_example: 'Bu qanday mantiqsiz maqola o\'zi? Muallif umuman savodsiz ekan!',
        good_example: 'Maqoladagi ba\'zi xulosalar bilan bahslashish mumkin. Balki masalaga boshqa tomondan qarab ko\'rarmiz?'
      },
      'uz-cyrl': {
        title: 'Экран ортида ҳам тирик инсон ўтирганини унутманг',
        description: 'Бу рақамли этикетнинг энг асосий, олтин қоидаси! Гарчи юзма-юз кўрмаётган бўлсангиз ҳам, интернетдаги суҳбатдошингизнинг ҳам кўнгли бор. Ҳаётда унинг юзига қараб айтолмайдиган гапингизни, интернетда ҳам ёзманг!',
        bad_example: 'Бу қандай мантиқсиз мақола ўзи? Муаллиф умуман саводсиз экан!',
        good_example: 'Мақоладаги баъзи хулосалар билан баҳслашиш мумкин. Балки масалага бошқа томондан қараб кўрармиз?'
      },
      'ru': {
        title: 'Помните, что по ту сторону экрана тоже сидит живой человек',
        description: 'Это самое главное, золотое правило цифрового этикета! Даже если вы не видите человека лицом к лицу, у него тоже есть чувства. Никогда не пишите в интернете того, чего не смогли бы сказать человеку прямо в лицо!',
        bad_example: 'Что за бред тут написан? Автор вообще ничего не понимает!',
        good_example: 'С некоторыми выводами в статье можно поспорить. Возможно, стоит посмотреть на это с другой стороны?'
      },
      'en': {
        title: 'Remember the human behind the screen',
        description: 'This is the golden rule of digital etiquette! Even if you can\'t see them face-to-face, the person you\'re talking to online has feelings too. Never type something on the internet that you wouldn\'t say straight to their face!',
        bad_example: 'What is this garbage article? The author has no idea what they are talking about!',
        good_example: 'Some of the conclusions in this article are debatable. Maybe we could look at it from a different angle?'
      }
    }
  }
];
