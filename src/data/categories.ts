import { Category } from '../types/rule';

export const CATEGORIES: Category[] = [
  { 
    id: 'messaging', 
    label: { 'en': 'Primary Communication Errors', 'ru': 'Типичные ошибки коммуникации', 'uz-latn': 'Muloqotdagi tipik xatolar', 'uz-cyrl': 'Мулоқотдаги типик хатолар' } 
  },
  { 
    id: 'group', 
    label: { 'en': 'Group Communication', 'ru': 'Правила групповых обсуждений', 'uz-latn': 'Guruhli muloqot me\'yorlari', 'uz-cyrl': 'Гуруҳли мулоқот меъёрлари' } 
  },
  { 
    id: 'calls', 
    label: { 'en': 'Audiovisual Communication', 'ru': 'Аудиовизуальная коммуникация', 'uz-latn': 'Audiovizual muloqot odobi', 'uz-cyrl': 'Аудиовизуал мулоқот одоби' } 
  },
  { 
    id: 'universal', 
    label: { 'en': 'Fundamental Ethics', 'ru': 'Фундаментальная этика', 'uz-latn': 'Umumiy axloq tamoyillari', 'uz-cyrl': 'Умумий ахлоқ тамойиллари' } 
  },
  { 
    id: 'social', 
    label: { 'en': 'Social Media Etiquette', 'ru': 'Этика в социальных сетях', 'uz-latn': 'Ijtimoiy tarmoq madaniyati', 'uz-cyrl': 'Ижтимоий тармоқ маданияти' } 
  },
  { 
    id: 'content', 
    label: { 'en': 'Information Dissemination', 'ru': 'Нормы распространения информации', 'uz-latn': 'Ma\'lumot tarqatish qoidalari', 'uz-cyrl': 'Маълумот тарқатиш қоидалари' } 
  },
  { 
    id: 'comments', 
    label: { 'en': 'Commenting Guidelines', 'ru': 'Культура комментирования', 'uz-latn': 'Izoh qoldirish madaniyati', 'uz-cyrl': 'Изоҳ қолдириш маданияти' } 
  },
  { 
    id: 'privacy', 
    label: { 'en': 'Privacy & Confidentiality', 'ru': 'Конфиденциальность', 'uz-latn': 'Maxfiylik va daxlsizlik', 'uz-cyrl': 'Махфийлик ва дахлсизлик' } 
  }
];
