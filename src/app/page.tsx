"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { rules } from '@/data/rules';
import { CATEGORIES } from '@/data/categories';
import { RuleCard } from '@/components/rules/RuleCard';

export default function Home() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      
      <main className="container mx-auto px-4 mt-8 md:mt-12 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center py-12 md:py-20 mb-8">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 text-foreground lowercase">
            chaynalma<span className="text-primary">.uz</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto text-balance">
            {language === 'ru' ? 'энциклопедия современного цифрового этикета' : 
             language === 'en' ? 'encyclopedia of modern digital etiquette' : 
             language === 'uz-cyrl' ? 'замонавий рақамли этикет энциклопедияси' :
             'zamonaviy raqamli etiket ensiklopediyasi'}
          </p>
        </div>

        {/* Mobile Horizontal Navigation */}
        <div className="lg:hidden flex overflow-x-auto pb-4 mb-8 -mx-4 px-4 scrollbar-hide gap-2 sticky top-[60px] bg-background/95 backdrop-blur z-40 border-b border-border/50 py-2">
          {CATEGORIES.map(category => {
            const hasRules = rules.some(r => r.categoryId === category.id);
            if (!hasRules) return null;
            return (
              <a 
                key={category.id} 
                href={`#${category.id}`} 
                className="whitespace-nowrap px-4 py-2 bg-muted/50 text-sm font-semibold rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors border border-border/50"
              >
                {category.label[language]}
              </a>
            );
          })}
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Desktop Sidebar TOC */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-1">
              <h3 className="font-bold text-xs uppercase tracking-widest text-muted-foreground mb-4 px-3">
                {language === 'ru' ? 'Оглавление' : language === 'en' ? 'Table of Contents' : 'Mundarija'}
              </h3>
              <nav className="flex flex-col space-y-1 border-l-2 border-muted pl-4">
                {CATEGORIES.map(category => {
                  const hasRules = rules.some(r => r.categoryId === category.id);
                  if (!hasRules) return null;
                  return (
                    <a 
                      key={category.id} 
                      href={`#${category.id}`} 
                      className="block px-3 py-2 text-[15px] font-medium rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors -ml-[18px] border-l-2 border-transparent hover:border-primary"
                    >
                      {category.label[language]}
                    </a>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content Areas */}
          <div className="flex-1 space-y-20">
            {CATEGORIES.map(category => {
              const categoryRules = rules.filter(r => r.categoryId === category.id);
              if (categoryRules.length === 0) return null;
              
              return (
                <section key={category.id} id={category.id} className="scroll-mt-32">
                  <h2 className="text-3xl font-extrabold mb-8 pb-4 border-b border-border text-foreground tracking-tight">
                    {category.label[language]}
                  </h2>
                  <div className="space-y-10">
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
