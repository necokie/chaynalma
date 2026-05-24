export type Language = 'uz-latn' | 'uz-cyrl' | 'ru' | 'en';

export interface SubRule {
  sub_title: string;
  reason: string;
  bad_example: string;
  good_example: string;
}

export interface SubRuleTranslation {
  sub_title: string;
  reason: string;
  bad_example: string;
  good_example: string;
}

export interface ChapterTranslation {
  category: string;
  title: string;
  description: string;
  rules: SubRuleTranslation[];
}

export interface Chapter {
  id: string;
  translations: Record<Language, ChapterTranslation>;
}
