"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/types/rule';

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'uz-latn', label: 'Oʻz' },
  { code: 'uz-cyrl', label: 'Ўз' },
  { code: 'ru', label: 'Ру' },
  { code: 'en', label: 'En' },
];

export function Header() {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md">
      <div className="container mx-auto px-4 py-2.5 md:py-3 max-w-7xl flex items-start justify-between">
        
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tighter text-foreground lowercase">
              chaynalma.uz
            </h1>
            <a href="https://necokie.com" target="_blank" rel="noopener noreferrer" className="text-[10px] md:text-xs text-muted-foreground font-semibold bg-muted hover:bg-foreground hover:text-background transition-colors px-2 py-0.5 rounded-full mt-1">by necokie</a>
          </div>
          <p className="text-[12px] md:text-[13px] text-muted-foreground font-medium mt-0.5 max-w-sm text-balance">
            {language === 'ru' ? 'энциклопедия современного цифрового этикета' : 
             language === 'en' ? 'encyclopedia of modern digital etiquette' : 
             language === 'uz-cyrl' ? 'замонавий рақамли этикет энциклопедияси' :
             'zamonaviy raqamli etiket ensiklopediyasi'}
          </p>
        </div>

        <nav className="flex items-center gap-1 bg-muted/50 p-1 rounded-xl mt-1">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`px-3 py-1.5 text-xs md:text-sm font-bold rounded-lg transition-all ${
                language === lang.code 
                  ? 'bg-white text-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </nav>

      </div>
    </header>
  );
}
