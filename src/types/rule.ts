export type Language = 'uz-latn' | 'uz-cyrl' | 'ru' | 'en';

export interface RuleTranslation {
  title: string;
  description: string;
  bad_example: string;
  good_example: string;
}

export interface Rule {
  slug: string;
  categoryId: string;
  translations: Record<Language, RuleTranslation>;
}

export interface Category {
  id: string;
  label: Record<Language, string>;
}
