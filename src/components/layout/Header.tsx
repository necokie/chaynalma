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
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur-md">
      <div className="container mx-auto px-4 py-2.5 md:py-3 max-w-7xl flex items-center justify-between">
        
        <div className="flex items-center gap-2.5">
          <h1 className="text-xl md:text-2xl font-extrabold tracking-tighter text-foreground lowercase select-none">
            chaynalma.uz
          </h1>
          <a 
            href="https://necokie.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[10px] md:text-[11px] text-muted-foreground font-semibold bg-muted hover:bg-foreground hover:text-background transition-colors px-2 py-0.5 rounded-full"
          >
            by necokie
          </a>
        </div>

        <nav className="flex items-center gap-0.5 bg-muted/50 p-0.5 rounded-lg">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`px-2.5 py-1 text-[11px] md:text-xs font-bold rounded-md transition-all ${
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
