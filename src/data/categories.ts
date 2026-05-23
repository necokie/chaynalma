import { Category } from '../types/rule';

export const CATEGORIES: Category[] = [
  { 
    id: 'messaging', 
    label: { 'en': 'Direct Messaging', 'ru': 'Личные сообщения', 'uz-latn': 'Shaxsiy xabarlar', 'uz-cyrl': 'Шахсий хабарлар' } 
  },
  { 
    id: 'group', 
    label: { 'en': 'Group Chats', 'ru': 'Групповые чаты', 'uz-latn': 'Guruh chatlari', 'uz-cyrl': 'Гуруҳ чатлари' } 
  },
  { 
    id: 'calls', 
    label: { 'en': 'Voice & Video Calls', 'ru': 'Звонки и Видео', 'uz-latn': 'Ovozli va Video qo\'ng\'iroqlar', 'uz-cyrl': 'Овозли ва Видео қўнғироқлар' } 
  },
  { 
    id: 'universal', 
    label: { 'en': 'Golden Rules', 'ru': 'Золотые правила', 'uz-latn': 'Oltin qoidalar', 'uz-cyrl': 'Олтин қоидалар' } 
  },
  { 
    id: 'social', 
    label: { 'en': 'Social Media', 'ru': 'Соцсети', 'uz-latn': 'Ijtimoiy tarmoqlar', 'uz-cyrl': 'Ижтимоий тармоқлар' } 
  },
  { 
    id: 'content', 
    label: { 'en': 'Sharing Content', 'ru': 'Обмен контентом', 'uz-latn': 'Ma\'lumot ulashish', 'uz-cyrl': 'Маълумот улашиш' } 
  },
  { 
    id: 'comments', 
    label: { 'en': 'Comments', 'ru': 'Комментарии', 'uz-latn': 'Izohlar', 'uz-cyrl': 'Изоҳлар' } 
  },
  { 
    id: 'privacy', 
    label: { 'en': 'Privacy & Boundaries', 'ru': 'Личные границы', 'uz-latn': 'Shaxsiy chegaralar', 'uz-cyrl': 'Шахсий чегаралар' } 
  }
];
