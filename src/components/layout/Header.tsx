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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-lg">
            C
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">Chaynalama.uz</span>
        </div>

        <nav className="flex items-center gap-1 bg-muted p-1 rounded-lg">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${
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
