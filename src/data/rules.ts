import { Chapter } from '../types/rule';

export const chapters: Chapter[] = [
  {
    id: 'direct-messaging',
    translations: {
      'uz-latn': {
        category: 'Muloqot madaniyati',
        title: 'To\'g\'ridan-to\'g\'ri maqsadga o\'tish qoidalari',
        description: 'Tarmoqlarda vaqtni tejash va suhbatdoshga hurmat ko\'rsatishning eng asosiy ikki qoidasi.',
        rules: [
          {
            sub_title: 'Chatda faqat "Salom" deb yozib kutib turmang',
            reason: 'Bu vaqtni behuda sarflashdir. Siz faqat "Salom" deb yozganingizda, suhbatdoshingiz asosiy ishini qoldirib, sizning maqsadingizni kutishga majbur bo\'ladi. Salomlashish bilan birga darhol muddaoga o\'ting.',
            bad_example: '— Salom!\n(10 daqiqa o\'tdi)\n— Qalaysiz?\n(5 daqiqa o\'tdi)\n— Sizdan bitta narsani iltimos qilmoqchi edim.',
            good_example: '— Salom, qalaysiz? Kechagi loyiha bo\'yicha yordamingiz kerak edi, qachon vaqtingiz bo\'ladi?'
          },
          {
            sub_title: 'Meta-savollar bermang (Muloqotga ruxsat so\'ramang)',
            reason: 'Meta-savol — bu savol berish uchun ruxsat so\'rashdir. Masalan, "Savol bersam maylimi?" yoki "Bu yerda dasturchilar bormi?" kabi iboralar muloqotni sekinlashtiradi. Ruxsat so\'ramasdan, maqsadni silliq va aniq bayon qiling.',
            bad_example: '— Savol bersam bo\'ladimi?\nYoki:\n— Guruhda IT mutaxassislari bormi?',
            good_example: '— Salom, menda React dasturida xatolik yuzaga kelyapti, kimdir yordam bera oladimi?'
          }
        ]
      },
      'uz-cyrl': {
        category: 'Мулоқот маданияти',
        title: 'Тўғридан-тўғри мақсадга ўтиш қоидалари',
        description: 'Тармоқларда вақтни тежаш ва суҳбатдошга ҳурмат кўрсатишнинг энг асосий икки қоидаси.',
        rules: [
          {
            sub_title: 'Чатда фақат "Салом" деб ёзиб кутиб турманг',
            reason: 'Бу вақтни беҳуда сарфлашдир. Сиз фақат "Салом" деб ёзганингизда, суҳбатдошингиз асосий ишини қолдириб, сизнинг мақсадингизни кутишга мажбур бўлади. Саломлашиш билан бирга дарҳол муддаога ўтинг.',
            bad_example: '— Салом!\n(10 дақиқа ўтди)\n— Қалайсиз?\n(5 дақиқа ўтди)\n— Сиздан битта нарсани илтимос қилмоқчи эдим.',
            good_example: '— Салом, қалайсиз? Кечаги лойиҳа бўйича ёрдамингиз керак эди, қачон вақтингиз бўлади?'
          },
          {
            sub_title: 'Мета-саволлар берманг (Мулоқотга рухсат сўраманг)',
            reason: 'Мета-савол — бу савол бериш учун рухсат сўрашдир. Масалан, "Савол берсам майлими?" ёки "Бу ерда дастурчилар борми?" каби иборалар мулоқотни секинлаштиради. Рухсат сўрамасдан, мақсадни силлиқ ва аниқ баён қилинг.',
            bad_example: '— Савол берсам бўладими?\nЁки:\n— Гуруҳда IT мутахассислари борми?',
            good_example: '— Салом, менда React дастурида хатолик юзага келяпти, кимдир ёрдам бера оладими?'
          }
        ]
      },
      'ru': {
        category: 'Культура общения',
        title: 'Правила прямого перехода к сути',
        description: 'Два главных правила, позволяющих экономить время и проявлять уважение к собеседнику в цифровой переписке.',
        rules: [
          {
            sub_title: 'Не пишите просто «Привет» и не ждите ответа',
            reason: 'Это бесполезная трата времени. Когда вы пишете только «Привет», собеседник вынужден бросить свои дела и ждать, пока вы озвучите цель. Здоровайтесь и сразу переходите к делу.',
            bad_example: '— Привет!\n(прошло 10 минут)\n— Как дела?\n(прошло 5 минут)\n— Хотел кое-что попросить.',
            good_example: '— Привет, как дела? Нужна помощь со вчерашним проектом. Когда у тебя будет время?'
          },
          {
            sub_title: 'Не задавайте мета-вопросы (не спрашивайте разрешения спросить)',
            reason: 'Мета-вопрос — это вопрос ради вопроса: «Можно спросить?», «Тут есть программисты?». Такие фразы замедляют общение. Формулируйте запрос чётко и конкретно, без лишних прелюдий.',
            bad_example: '— Можно задать вопрос?\nИли:\n— Есть тут IT-специалисты?',
            good_example: '— Привет, у меня возникает ошибка в React. Кто-нибудь может помочь?'
          }
        ]
      },
      'en': {
        category: 'Communication culture',
        title: 'Rules for getting straight to the point',
        description: 'Two essential rules for saving time and showing respect to your chat partner in digital conversations.',
        rules: [
          {
            sub_title: 'Don\'t just write "Hello" and wait',
            reason: 'It is a waste of time. When you send only "Hello," the other person is forced to stop what they are doing and wait for you to state your purpose. Say hello and get to the point in the same message.',
            bad_example: '— Hello!\n(10 minutes pass)\n— How are you?\n(5 minutes pass)\n— I wanted to ask you a favor.',
            good_example: '— Hello, how are you? I need help with yesterday\'s project. When would you be available?'
          },
          {
            sub_title: 'Don\'t ask meta-questions (don\'t ask permission to ask)',
            reason: 'A meta-question is asking for permission to ask a question: "Can I ask something?" or "Are there any developers here?" These phrases slow down communication. State your request clearly and directly.',
            bad_example: '— Can I ask a question?\nOr:\n— Are there any IT specialists here?',
            good_example: '— Hello, I am getting an error in React. Can anyone help me out?'
          }
        ]
      }
    }
  },
  {
    id: 'message-hygiene',
    translations: {
      'uz-latn': {
        category: 'Xabar yozish odobi',
        title: 'Xabar tuzilishi va shakliga oid qoidalar',
        description: 'Yozayotgan xabaringizning shakli va mazmuni suhbatdoshingizning qulayligini belgilaydi.',
        rules: [
          {
            sub_title: 'Bitta fikrni maydalab, alohida-alohida yubormang',
            reason: 'Har bir jumlani alohida xabar sifatida jo\'natganingizda, suhbatdoshingizning qurilmasi tinimsiz bildirishnoma beradi va diqqati buziladi. Fikringizni yaxlit bir xabarga jamlang, keyin jo\'nating.',
            bad_example: '— Salom\n— Men\n— Bugun\n— Kela olmayman\n— Chunki betobman',
            good_example: '— Salom, sog\'lig\'im yomonlashgani sababli bugun kela olmayman.'
          },
          {
            sub_title: 'BOSH HARFLARDA YOZMANG',
            reason: 'Butun matnni bosh harflarda yozish raqamli muloqotda baqirish deb qabul qilinadi. Shuningdek, haddan tashqari ko\'p so\'roq yoki undov belgilarini qo\'yish tajovuzkorlik alomati sifatida talqin etiladi.',
            bad_example: '— QACHON TAYYOR BO\'LADI????\n— ???',
            good_example: '— Loyihaning yakunlanish muddati haqida ma\'lumot bera olasizmi?'
          },
          {
            sub_title: 'Ovozli xabar va hajmli fayllarni oldindan ogohlantiring',
            reason: 'Har doim ham ovozli xabar eshitish imkoniyati mavjud emas — masalan, yig\'ilishda yoki jamoat transportida. Ovozli xabar yuborishdan avval so\'rang. Hajmli fayllarni esa suhbatdoshning mobil trafigini sarflamaslik uchun ogohlantirmay jo\'natmang.',
            bad_example: '(1.5 gigabayt hajmdagi fayl)\n(12 daqiqalik ovozli xabar)',
            good_example: '— Video tayyor (1.5 GB). Fayl sifatida yuboraymi yoki bulutli xotira manzilini beraymi? Shuningdek, hozir ovozli xabar eshitishingiz qulaymi?'
          }
        ]
      },
      'uz-cyrl': {
        category: 'Хабар ёзиш одоби',
        title: 'Хабар тузилиши ва шаклига оид қоидалар',
        description: 'Ёзаётган хабарингизнинг шакли ва мазмуни суҳбатдошингизнинг қулайлигини белгилайди.',
        rules: [
          {
            sub_title: 'Битта фикрни майдалаб, алоҳида-алоҳида юборманг',
            reason: 'Ҳар бир жумлани алоҳида хабар сифатида жўнатганингизда, суҳбатдошингизнинг қурилмаси тинимсиз билдиришнома беради ва диққати бузилади. Фикрингизни яхлит бир хабарга жамланг, кейин жўнатинг.',
            bad_example: '— Салом\n— Мен\n— Бугун\n— Кела олмайман\n— Чунки бетобман',
            good_example: '— Салом, соғлиғим ёмонлашгани сабабли бугун кела олмайман.'
          },
          {
            sub_title: 'БОШ ҲАРФЛАРДА ЁЗМАНГ',
            reason: 'Бутун матнни бош ҳарфларда ёзиш рақамли мулоқотда бақириш деб қабул қилинади. Шунингдек, ҳаддан ташқари кўп сўроқ ёки ундов белгиларини қўйиш тажовузкорлик аломати сифатида талқин этилади.',
            bad_example: '— ҚАЧОН ТАЙЁР БЎЛАДИ????\n— ???',
            good_example: '— Лойиҳанинг якунланиш муддати ҳақида маълумот бера оласизми?'
          },
          {
            sub_title: 'Овозли хабар ва ҳажмли файлларни олдиндан огоҳлантиринг',
            reason: 'Ҳар доим ҳам овозли хабар эшитиш имконияти мавжуд эмас — масалан, йиғилишда ёки жамоат транспортида. Овозли хабар юборишдан аввал сўранг. Ҳажмли файлларни эса суҳбатдошнинг мобил трафигини сарфламаслик учун огоҳлантирмай жўнатманг.',
            bad_example: '(1.5 гигабайт ҳажмдаги файл)\n(12 дақиқалик овозли хабар)',
            good_example: '— Видео тайёр (1.5 ГБ). Файл сифатида юборайми ёки булутли хотира манзилини берайми? Шунингдек, ҳозир овозли хабар эшитишингиз қулайми?'
          }
        ]
      },
      'ru': {
        category: 'Гигиена сообщений',
        title: 'Правила структуры и формы сообщений',
        description: 'Форма и содержание вашего сообщения определяют комфорт собеседника.',
        rules: [
          {
            sub_title: 'Не дробите одну мысль на десяток сообщений',
            reason: 'Когда вы отправляете каждое предложение отдельным сообщением, устройство собеседника непрерывно вибрирует, и его концентрация нарушается. Сформулируйте мысль целиком и отправьте одним сообщением.',
            bad_example: '— Привет\n— Я\n— Сегодня\n— Не смогу прийти\n— Потому что заболел',
            good_example: '— Привет, я не смогу прийти сегодня по состоянию здоровья.'
          },
          {
            sub_title: 'НЕ ПИШИТЕ КАПСЛОКОМ',
            reason: 'Текст, написанный заглавными буквами, воспринимается как крик. Чрезмерное количество вопросительных или восклицательных знаков трактуется как проявление агрессии.',
            bad_example: '— КОГДА БУДЕТ ГОТОВО????\n— ???',
            good_example: '— Не могли бы вы уточнить сроки завершения проекта?'
          },
          {
            sub_title: 'Предупреждайте перед отправкой голосовых и тяжёлых файлов',
            reason: 'Прослушать голосовое сообщение возможно не всегда — например, на совещании или в общественном транспорте. Спросите перед отправкой. Тяжёлые файлы не следует отправлять без предупреждения, чтобы не расходовать мобильный трафик собеседника.',
            bad_example: '(файл 1.5 ГБ)\n(голосовое сообщение на 12 минут)',
            good_example: '— Видео готово (1.5 ГБ). Отправить файлом или дать ссылку на облако? И скажи, удобно ли сейчас послушать голосовое?'
          }
        ]
      },
      'en': {
        category: 'Message hygiene',
        title: 'Rules for message structure and form',
        description: 'The form and substance of your message determines your chat partner\'s comfort.',
        rules: [
          {
            sub_title: 'Don\'t split one thought into a dozen messages',
            reason: 'When you send every sentence as a separate message, the recipient\'s device buzzes non-stop and their focus is broken. Compose your entire thought and send it as one message.',
            bad_example: '— Hi\n— I\n— Can\'t\n— Come today\n— Because I\'m sick',
            good_example: '— Hi, I won\'t be able to make it today due to illness.'
          },
          {
            sub_title: 'DON\'T TYPE IN ALL CAPS',
            reason: 'Text written entirely in uppercase is perceived as shouting in digital communication. Excessive question marks or exclamation points are interpreted as aggression.',
            bad_example: '— WHEN WILL IT BE READY????\n— ???',
            good_example: '— Could you please provide an estimated time of completion?'
          },
          {
            sub_title: 'Warn before sending voice messages and large files',
            reason: 'Listening to a voice message is not always an option — for example, during a meeting or on public transport. Ask before sending one. Do not send large files without warning, as they may consume the recipient\'s mobile data.',
            bad_example: '(1.5 GB file)\n(12-minute voice message)',
            good_example: '— The video is ready (1.5 GB). Should I send it as a file or share a cloud link? Also, is it a good time for you to listen to a voice note?'
          }
        ]
      }
    }
  },
  {
    id: 'group-etiquette',
    translations: {
      'uz-latn': {
        category: 'Guruh odobi',
        title: 'Guruh muloqotida o\'zini tutish qoidalari',
        description: 'Guruh chatlari barcha ishtirokchilarning umumiy maydoni bo\'lib, har bir a\'zoning xulqi boshqalarning qulayligiga bevosita ta\'sir ko\'rsatadi.',
        rules: [
          {
            sub_title: 'Ruxsatsiz guruhlarga qo\'shmang',
            reason: 'Kimnidir roziligisiz tijorat yoki reklama guruhlariga qo\'shish uning shaxsiy chegaralarini buzishdir. Oldindan so\'rang.',
            bad_example: '(Siz "Mega Aksiya 2026" guruhiga qo\'shildingiz)',
            good_example: '— Salom, biz yangi guruh tashkil etdik. Sizni qo\'shsam, qarshiligingiz yo\'qmi?'
          },
          {
            sub_title: 'Shaxsiy suhbatni guruhda olib bormang',
            reason: 'Guruh — barcha uchun umumiy maydon. Ikki kishi o\'rtasidagi shaxsiy mavzu boshqa a\'zolarni bezovta qiladi. Bunday suhbatlar shaxsiy xabarlarga ko\'chirilishi lozim.',
            bad_example: '— @Aziz, bugun tushlikka borasizmi? @Vali, sizchi?',
            good_example: '(Shaxsiy yozishmada) — Salom, Aziz. Bugun tushlikka vaqtingiz bormi?'
          },
          {
            sub_title: 'Ommaviy yuborma va zanjirli xabarlardan saqlaning',
            reason: '"Buni 10 kishiga yuboring" kabi zanjirli xabarlar, mavzudan tashqari video va tasvirlar hamda siyosiy-diniy bahslar ishchi guruhda axborot shovqinini keltirib chiqaradi.',
            bad_example: '(5 ta ommaviy rasm)\n— Ushbu xabarni 10 kishiga yuboring, aks holda...',
            good_example: '(Faqat guruh mavzusiga taalluqli ma\'lumotlar bilan ulashing)'
          }
        ]
      },
      'uz-cyrl': {
        category: 'Гуруҳ одоби',
        title: 'Гуруҳ мулоқотида ўзини тутиш қоидалари',
        description: 'Гуруҳ чатлари барча иштирокчиларнинг умумий майдони бўлиб, ҳар бир аъзонинг хулқи бошқаларнинг қулайлигига бевосита таъсир кўрсатади.',
        rules: [
          {
            sub_title: 'Рухсатсиз гуруҳларга қўшманг',
            reason: 'Кимнидир розилигисиз тижорат ёки реклама гуруҳларига қўшиш унинг шахсий чегараларини бузишдир. Олдиндан сўранг.',
            bad_example: '(Сиз "Мега Акция 2026" гуруҳига қўшилдингиз)',
            good_example: '— Салом, биз янги гуруҳ ташкил этдик. Сизни қўшсам, қаршилигингиз йўқми?'
          },
          {
            sub_title: 'Шахсий суҳбатни гуруҳда олиб борманг',
            reason: 'Гуруҳ — барча учун умумий майдон. Икки киши ўртасидаги шахсий мавзу бошқа аъзоларни безовта қилади. Бундай суҳбатлар шахсий хабарларга кўчирилиши лозим.',
            bad_example: '— @Азиз, бугун тушликка борасизми? @Вали, сизчи?',
            good_example: '(Шахсий ёзишмада) — Салом, Азиз. Бугун тушликка вақтингиз борми?'
          },
          {
            sub_title: 'Оммавий юборма ва занжирли хабарлардан сақланинг',
            reason: '"Буни 10 кишига юборинг" каби занжирли хабарлар, мавзудан ташқари видео ва тасвирлар ҳамда сиёсий-диний баҳслар ишчи гуруҳда ахборот шовқинини келтириб чиқаради.',
            bad_example: '(5 та оммавий расм)\n— Ушбу хабарни 10 кишига юборинг, акс ҳолда...',
            good_example: '(Фақат гуруҳ мавзусига тааллуқли маълумотлар билан улашинг)'
          }
        ]
      },
      'ru': {
        category: 'Этикет в группах',
        title: 'Правила поведения в групповых чатах',
        description: 'Групповой чат — это общее пространство всех участников, и поведение каждого напрямую влияет на комфорт остальных.',
        rules: [
          {
            sub_title: 'Не добавляйте в группы без согласия',
            reason: 'Добавлять человека без его разрешения в коммерческие или рекламные группы — это нарушение личных границ. Спросите заранее.',
            bad_example: '(Вас добавили в группу "Мега Акция 2026")',
            good_example: '— Привет, мы создали новую группу. Не против, если добавлю тебя?'
          },
          {
            sub_title: 'Личные разговоры ведите в личных сообщениях',
            reason: 'Группа — это общее пространство для всех. Личная тема между двумя людьми мешает остальным участникам. Такие беседы следует переносить в личные сообщения.',
            bad_example: '— @Азиз, пойдёшь сегодня обедать? @Вали, а ты?',
            good_example: '(В личных сообщениях) — Привет, Азиз. Есть время на обед сегодня?'
          },
          {
            sub_title: 'Избегайте массовых рассылок и цепных сообщений',
            reason: '«Перешлите это 10 людям», нетематические видео и картинки, а также политические и религиозные споры создают информационный шум в рабочем чате.',
            bad_example: '(5 вирусных картинок)\n— Перешлите это 10 людям, иначе...',
            good_example: '(Публикуйте только контент, относящийся к теме группы)'
          }
        ]
      },
      'en': {
        category: 'Group etiquette',
        title: 'Rules of conduct in group chats',
        description: 'A group chat is shared space for all members, and every individual\'s behavior directly affects the comfort of others.',
        rules: [
          {
            sub_title: 'Don\'t add people to groups without consent',
            reason: 'Adding someone to a commercial or promotional group without their permission is a violation of personal boundaries. Ask beforehand.',
            bad_example: '(You were added to "Mega Sale 2026")',
            good_example: '— Hey, we started a new group. Would it be okay if I add you?'
          },
          {
            sub_title: 'Keep personal conversations in direct messages',
            reason: 'A group is shared space for everyone. A personal topic between two people disrupts the other members. Such conversations should be moved to direct messages.',
            bad_example: '— @Aziz, are you going to lunch today? @Vali, how about you?',
            good_example: '(In direct messages) — Hey Aziz, do you have time for lunch today?'
          },
          {
            sub_title: 'Avoid mass forwards and chain messages',
            reason: '"Forward this to 10 people," off-topic videos and images, and political or religious arguments create information noise in a working group chat.',
            bad_example: '(5 viral images)\n— Forward this to 10 people or else...',
            good_example: '(Share only content that is relevant to the group\'s purpose)'
          }
        ]
      }
    }
  },
  {
    id: 'calls-privacy',
    translations: {
      'uz-latn': {
        category: 'Qo\'ng\'iroqlar va shaxsiy chegaralar',
        title: 'Qo\'ng\'iroq odobi va shaxsiy ma\'lumotlar xavfsizligi',
        description: 'Ovozli va video qo\'ng\'iroqlar uchun hurmat qoidalari hamda boshqalar shaxsiy hayotini muhofaza etish tamoyillari.',
        rules: [
          {
            sub_title: 'Qo\'ng\'iroq qilishdan avval ogohlantiring',
            reason: 'Har doim ham telefon ko\'tarishga tayyor emas. Kutilmaganda ovozli yoki video qo\'ng\'iroq qilish suhbatdoshning shaxsiy chegaralarini buzishi mumkin. Oldindan matnli xabar orqali qulay vaqtni aniqlang.',
            bad_example: '(14:30 — qo\'ng\'iroq)\n(14:31 — qo\'ng\'iroq)\n(14:35 — qo\'ng\'iroq)',
            good_example: '— Salom, hozir gaplashib olish qulaymi? Yoki qachon vaqtingiz bo\'ladi?'
          },
          {
            sub_title: 'Gapirmayotganda mikrofonni o\'chiring',
            reason: 'Guruhiy qo\'ng\'iroqlarda siz gapirmayotganingizda mikrofoningiz ochiq bo\'lsa, orqa fondagi shovqin — transport ovozi, klaviatura chertishi, maishiy shovqin — barcha ishtirokchilarning diqqatini buzadi.',
            bad_example: '(Orqa fonda maishiy shovqinlar va klaviatura chertishlari eshitilmoqda)',
            good_example: '(Mikrofoningiz o\'chirilgan, faqat navbatingiz kelganda yoqasiz)'
          },
          {
            sub_title: 'Boshqalarning shaxsiy yozishmalarini tarqatmang',
            reason: 'Kimningdir shaxsiy xabarlarini, ekran tasvirlarini yoki suratlarini ruxsatsiz ommaviy tarqatish ham axloqiy, ham huquqiy jihatdan noto\'g\'ridir.',
            bad_example: '— Qaranglar, kecha Sardor menga nima deb yozdi!\n(Sardorning shaxsiy xabari ekran tasviri ilova qilindi)',
            good_example: '— Sardor, kechagi suratlarni ijtimoiy tarmoqqa joylasam, maylimi?'
          }
        ]
      },
      'uz-cyrl': {
        category: 'Қўнғироқлар ва шахсий чегаралар',
        title: 'Қўнғироқ одоби ва шахсий маълумотлар хавфсизлиги',
        description: 'Овозли ва видео қўнғироқлар учун ҳурмат қоидалари ҳамда бошқалар шахсий ҳаётини муҳофаза этиш тамойиллари.',
        rules: [
          {
            sub_title: 'Қўнғироқ қилишдан аввал огоҳлантиринг',
            reason: 'Ҳар доим ҳам телефон кўтаришга тайёр эмас. Кутилмаганда овозли ёки видео қўнғироқ қилиш суҳбатдошнинг шахсий чегараларини бузиши мумкин. Олдиндан матнли хабар орқали қулай вақтни аниқланг.',
            bad_example: '(14:30 — қўнғироқ)\n(14:31 — қўнғироқ)\n(14:35 — қўнғироқ)',
            good_example: '— Салом, ҳозир гаплашиб олиш қулайми? Ёки қачон вақтингиз бўлади?'
          },
          {
            sub_title: 'Гапирмаётганда микрофонни ўчиринг',
            reason: 'Гуруҳий қўнғироқларда сиз гапирмаётганингизда микрофонингиз очиқ бўлса, орқа фондаги шовқин — транспорт овози, клавиатура чертиши, маиший шовқин — барча иштирокчиларнинг диққатини бузади.',
            bad_example: '(Орқа фонда маиший шовқинлар ва клавиатура чертишлари эшитилмоқда)',
            good_example: '(Микрофонингиз ўчирилган, фақат навбатингиз келганда ёқасиз)'
          },
          {
            sub_title: 'Бошқаларнинг шахсий ёзишмаларини тарқатманг',
            reason: 'Кимнингдир шахсий хабарларини, экран тасвирларини ёки суратларини рухсатсиз оммавий тарқатиш ҳам ахлоқий, ҳам ҳуқуқий жиҳатдан нотўғридир.',
            bad_example: '— Қаранглар, кеча Сардор менга нима деб ёзди!\n(Сардорнинг шахсий хабари экран таcвири илова қилинди)',
            good_example: '— Сардор, кечаги суратларни ижтимоий тармоққа жойласам, майлими?'
          }
        ]
      },
      'ru': {
        category: 'Звонки и личные границы',
        title: 'Этикет звонков и безопасность личных данных',
        description: 'Правила уважения при голосовых и видеозвонках, а также принципы защиты чужой частной жизни.',
        rules: [
          {
            sub_title: 'Предупредите перед звонком',
            reason: 'Человек не всегда готов ответить. Внезапный голосовой или видеозвонок может нарушить личные границы. Уточните удобное время текстовым сообщением заранее.',
            bad_example: '(14:30 — звонок)\n(14:31 — звонок)\n(14:35 — звонок)',
            good_example: '— Привет, удобно сейчас поговорить? Или когда лучше набрать?'
          },
          {
            sub_title: 'Выключайте микрофон, когда не говорите',
            reason: 'В групповых звонках, если ваш микрофон включён, фоновый шум — транспорт, клавиатура, бытовые звуки — мешает всем участникам.',
            bad_example: '(На фоне слышны бытовые шумы и стук клавиатуры)',
            good_example: '(Ваш микрофон выключен и включается только когда вы говорите)'
          },
          {
            sub_title: 'Не распространяйте чужую личную переписку',
            reason: 'Публиковать чьи-либо личные сообщения, скриншоты переписки или фотографии без разрешения — это неправильно как с моральной, так и с юридической точки зрения.',
            bad_example: '— Смотрите, что мне вчера написал Сардор!\n(Прикреплён скриншот личной переписки Сардора)',
            good_example: '— Сардор, можно выложить вчерашние фото в соцсети?'
          }
        ]
      },
      'en': {
        category: 'Calls & personal boundaries',
        title: 'Call etiquette and personal data safety',
        description: 'Rules of respect for voice and video calls, along with principles for protecting others\' private life.',
        rules: [
          {
            sub_title: 'Warn before calling',
            reason: 'People are not always ready to answer. An unexpected voice or video call can violate personal boundaries. Confirm a convenient time via text message beforehand.',
            bad_example: '(14:30 — call)\n(14:31 — call)\n(14:35 — call)',
            good_example: '— Hey, is it a good time to talk? Or when should I call?'
          },
          {
            sub_title: 'Mute yourself when not speaking',
            reason: 'In group calls, if your microphone is on while you are not speaking, background noise — traffic, keyboard clicking, household sounds — disrupts every participant.',
            bad_example: '(Background domestic noise and loud keyboard clicks are audible)',
            good_example: '(Your microphone is muted and you only unmute when it is your turn to speak)'
          },
          {
            sub_title: 'Don\'t share others\' private conversations',
            reason: 'Publicly sharing someone\'s private messages, chat screenshots, or photos without their permission is wrong both morally and legally.',
            bad_example: '— Look what Sardor texted me yesterday!\n(Screenshot of Sardor\'s private DMs attached)',
            good_example: '— Sardor, is it okay if I post yesterday\'s photos on social media?'
          }
        ]
      }
    }
  },
  {
    id: 'content-responsibility',
    translations: {
      'uz-latn': {
        category: 'Kontent mas\'uliyati',
        title: 'Kontent bilan ishlashda mas\'uliyat qoidalari',
        description: 'Raqamli muhitda ma\'lumot ulashish, mualliflik huquqi va tanqid madaniyati bilan bog\'liq asosiy tamoyillar.',
        rules: [
          {
            sub_title: 'Tekshirilmagan xabarlarni tarqatmang',
            reason: '"Shoshilinch xabar!", "Davlat pul tarqatyapti!" kabi shubhali xabarlarni guruhlarga yuborishdan avval rasmiy yangiliklar manbalarini tekshiring. Asossiz xabar tarqatish vahima va noto\'g\'ri ma\'lumot yoyilishiga sabab bo\'ladi.',
            bad_example: '— Shoshilinch xabar! Barcha fuqarolarga 1 milliondanpul tarqatilyapti! Havolaga kiring!',
            good_example: '(Xabarni rasmiy manbalarda tekshirib, asossizligini aniqlab, hech kimga yubormaslik)'
          },
          {
            sub_title: 'Mualliflik huquqini hurmat qiling',
            reason: 'Birovning surat, video yoki matnli asarini manbasini ko\'rsatmasdan o\'z nomingizdan tarqatish mualliflik huquqini buzishdir. Doimo asl manbani ko\'rsating.',
            bad_example: '(Boshqa muallifning maqolasini o\'z nomi bilan nashr etish)',
            good_example: '(Asarni asl muallif nomi va manba havolasi bilan ulashish)'
          },
          {
            sub_title: 'Tanqid qilganda shaxsga emas, fikrga murojaat qiling',
            reason: 'Munozarada faqat g\'oya va fikrni muhokama qiling, odamni o\'zini haqorat qilmang. "Sen o\'zi kimsan?" yoki "Aqlsiz ekansan" kabi iboralar muloqot madaniyatini buzadi.',
            bad_example: '— Sen o\'zi umuman tushunmaysan! Qanaqa qilib shunday xato yozyapsan?',
            good_example: '— Bu fikringizga qo\'shilmayman, chunki so\'nggi statistikada boshqacha raqamlar keltirilgan.'
          }
        ]
      },
      'uz-cyrl': {
        category: 'Контент масъулияти',
        title: 'Контент билан ишлашда масъулият қоидалари',
        description: 'Рақамли муҳитда маълумот улашиш, муаллифлик ҳуқуқи ва танқид маданияти билан боғлиқ асосий тамойиллар.',
        rules: [
          {
            sub_title: 'Текширилмаган хабарларни тарқатманг',
            reason: '"Шошилинч хабар!", "Давлат пул тарқатяпти!" каби шубҳали хабарларни гуруҳларга юборишдан аввал расмий янгиликлар манбаларини текширинг. Асоссиз хабар тарқатиш ваҳима ва нотўғри маълумот ёйилишига сабаб бўлади.',
            bad_example: '— Шошилинч хабар! Барча фуқароларга 1 миллиондан пул тарқатиляпти! Ҳаволага киринг!',
            good_example: '(Хабарни расмий манбаларда текшириб, асоссизлигини аниқлаб, ҳеч кимга юбормаслик)'
          },
          {
            sub_title: 'Муаллифлик ҳуқуқини ҳурмат қилинг',
            reason: 'Бировнинг сурат, видео ёки матнли асарини манбасини кўрсатмасдан ўз номингиздан тарқатиш муаллифлик ҳуқуқини бузишдир. Доимо асл манбани кўрсатинг.',
            bad_example: '(Бошқа муаллифнинг мақоласини ўз номи билан нашр этиш)',
            good_example: '(Асарни асл муаллиф номи ва манба ҳаволаси билан улашиш)'
          },
          {
            sub_title: 'Танқид қилганда шахсга эмас, фикрга мурожаат қилинг',
            reason: 'Мунозарада фақат ғоя ва фикрни муҳокама қилинг, одамни ўзини ҳақорат қилманг. "Сен ўзи кимсан?" ёки "Ақлсиз экансан" каби иборалар мулоқот маданиятини бузади.',
            bad_example: '— Сен ўзи умуман тушунмайсан! Қанақа қилиб шундай хато ёзяпсан?',
            good_example: '— Бу фикрингизга қўшилмайман, чунки сўнгги статистикада бошқача рақамлар келтирилган.'
          }
        ]
      },
      'ru': {
        category: 'Ответственность за контент',
        title: 'Правила ответственной работы с контентом',
        description: 'Основные принципы обмена информацией, авторского права и культуры критики в цифровой среде.',
        rules: [
          {
            sub_title: 'Не распространяйте непроверенные сообщения',
            reason: 'Прежде чем пересылать подозрительные «Срочно!» или «Государство раздаёт деньги!», проверьте официальные источники новостей. Распространение фейков порождает панику и дезинформацию.',
            bad_example: '— Экстренно! Государство раздаёт всем по 1 миллиону! Жмите на ссылку!',
            good_example: '(Проверить новость в официальных источниках, убедиться в фейковости и не пересылать)'
          },
          {
            sub_title: 'Уважайте авторское право',
            reason: 'Распространять чужие фотографии, видео или тексты без указания источника от своего имени — это нарушение авторских прав. Всегда указывайте первоисточник.',
            bad_example: '(Публикация чужой статьи от своего имени)',
            good_example: '(Поделиться материалом с указанием имени автора и ссылки на источник)'
          },
          {
            sub_title: 'Критикуйте идею, а не человека',
            reason: 'В дискуссии обсуждайте только идеи и мнения, не оскорбляйте собеседника. Фразы «Ты кто вообще такой?» или «Ты глупый» разрушают культуру общения.',
            bad_example: '— Ты вообще ничего не понимаешь! Как можно допускать такие ошибки?',
            good_example: '— Я не согласен с вашим мнением — последняя статистика показывает другие данные.'
          }
        ]
      },
      'en': {
        category: 'Content responsibility',
        title: 'Rules for responsible content sharing',
        description: 'Core principles of information sharing, copyright, and constructive criticism in the digital environment.',
        rules: [
          {
            sub_title: 'Don\'t spread unverified messages',
            reason: 'Before forwarding suspicious posts claiming "Urgent!" or "The government is giving away money!", check official news sources. Spreading misinformation causes panic and disinformation.',
            bad_example: '— Urgent Alert! The government is giving away 1 million to everyone! Click the link!',
            good_example: '(Check the news on official sources, confirm it is fake, and do not forward it to anyone)'
          },
          {
            sub_title: 'Respect copyright',
            reason: 'Sharing someone else\'s photos, videos, or texts under your own name without crediting the source is a violation of copyright. Always cite the original source.',
            bad_example: '(Publishing someone else\'s article under your own name)',
            good_example: '(Sharing the material with the author\'s name and a link to the original source)'
          },
          {
            sub_title: 'Criticize the idea, not the person',
            reason: 'In a discussion, debate only ideas and opinions — do not insult the individual. Phrases like "Who do you think you are?" or "You\'re stupid" destroy the culture of communication.',
            bad_example: '— You don\'t understand anything at all! How can you make such errors?',
            good_example: '— I disagree with your point — recent statistics show different figures.'
          }
        ]
      }
    }
  }
];
