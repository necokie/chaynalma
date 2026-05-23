import { Category } from '../types/rule';

export const CATEGORIES: Category[] = [
  { 
    id: 'messaging', 
    label: { 'en': 'Most Common Mistakes', 'ru': 'Самые частые ошибки', 'uz-latn': 'Eng ko\'p qilinadigan xatolar', 'uz-cyrl': 'Энг кўп қилинадиган хатолар' } 
  },
  { 
    id: 'group', 
    label: { 'en': 'Group Chat', 'ru': 'Групповые чаты', 'uz-latn': 'Guruh chatlari', 'uz-cyrl': 'Гуруҳ чатлари' } 
  },
  { 
    id: 'calls', 
    label: { 'en': 'Voice & Video Calls', 'ru': 'Звонки', 'uz-latn': 'Ovozli / Video', 'uz-cyrl': 'Овозли / Видео' } 
  },
  { 
    id: 'universal', 
    label: { 'en': 'Universal Golden Rules', 'ru': 'Универсальные правила', 'uz-latn': 'Oltin qoidalar', 'uz-cyrl': 'Олтин қоидалар' } 
  },
  { 
    id: 'social', 
    label: { 'en': 'Social Media', 'ru': 'Соцсети', 'uz-latn': 'Ijtimoiy tarmoqlar', 'uz-cyrl': 'Ижтимоий тармоқлар' } 
  },
  { 
    id: 'content', 
    label: { 'en': 'Content Sharing', 'ru': 'Публикация контента', 'uz-latn': 'Kontent ulashish', 'uz-cyrl': 'Контент улашиш' } 
  },
  { 
    id: 'comments', 
    label: { 'en': 'Comments', 'ru': 'Комментарии', 'uz-latn': 'Izohlar', 'uz-cyrl': 'Изоҳлар' } 
  },
  { 
    id: 'privacy', 
    label: { 'en': 'Privacy', 'ru': 'Приватность', 'uz-latn': 'Maxfiylik', 'uz-cyrl': 'Махфийлик' } 
  }
];
