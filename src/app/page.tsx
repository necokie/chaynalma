"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { rules } from '@/data/rules';
import { CATEGORIES } from '@/data/categories';
import { RuleCard } from '@/components/rules/RuleCard';

export default function Home() {
  const { language } = useLanguage();

  return (
    <div className="pb-24">
      <main className="container mx-auto px-4 mt-8 md:mt-12 max-w-6xl">
        
        {/* Mobile Horizontal Navigation */}
        <div className="lg:hidden flex overflow-x-auto pb-4 mb-8 -mx-4 px-4 scrollbar-hide gap-2 sticky top-[80px] bg-background/95 backdrop-blur z-40 border-b border-border/50 py-2">
          {CATEGORIES.map(category => {
            const hasRules = rules.some(r => r.categoryId === category.id);
            if (!hasRules) return null;
            return (
              <a 
                key={category.id} 
                href={`#${category.id}`} 
                className="whitespace-nowrap px-4 py-2 bg-muted/50 text-[13px] font-semibold rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors border border-border/50"
              >
                {category.label[language]}
              </a>
            );
          })}
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Desktop Sidebar TOC */}
          <div className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-32">
              <h3 className="font-bold text-[11px] uppercase tracking-widest text-muted-foreground/70 mb-4 px-3">
                {language === 'ru' ? 'Оглавление' : language === 'en' ? 'Table of Contents' : 'Mundarija'}
              </h3>
              <nav className="flex flex-col space-y-0.5 border-l border-border pl-4">
                {CATEGORIES.map(category => {
                  const hasRules = rules.some(r => r.categoryId === category.id);
                  if (!hasRules) return null;
                  return (
                    <a 
                      key={category.id} 
                      href={`#${category.id}`} 
                      className="block px-3 py-2 text-[14px] font-medium text-muted-foreground hover:text-foreground transition-colors -ml-[17px] border-l border-transparent hover:border-foreground"
                    >
                      {category.label[language]}
                    </a>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content Areas */}
          <div className="flex-1 space-y-24 max-w-3xl">
            {CATEGORIES.map(category => {
              const categoryRules = rules.filter(r => r.categoryId === category.id);
              if (categoryRules.length === 0) return null;
              
              return (
                <section key={category.id} id={category.id} className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-extrabold mb-8 pb-4 border-b border-border text-foreground tracking-tight">
                    {category.label[language]}
                  </h2>
                  <div className="space-y-12">
                    {categoryRules.map(rule => (
                      <RuleCard key={rule.slug} rule={rule} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>

      </main>
    </div>
  );
}
