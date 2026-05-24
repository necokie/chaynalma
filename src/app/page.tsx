"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { chapters } from '@/data/rules';
import { SubRuleCard } from '@/components/rules/RuleCard';
import { motion } from 'framer-motion';

export default function Home() {
  const { language } = useLanguage();

  const tocLabel = language === 'ru' ? 'Разделы' : language === 'en' ? 'Sections' : language === 'uz-cyrl' ? 'Бўлимлар' : 'Bo\'limlar';

  return (
    <div className="pb-32">
      <main className="container mx-auto px-4 lg:px-6 mt-6 md:mt-10 max-w-[1400px]">

        {/* Mobile horizontal nav */}
        <div className="lg:hidden flex overflow-x-auto pb-3 mb-6 -mx-4 px-4 scrollbar-hide gap-2 sticky top-[52px] bg-background/95 backdrop-blur z-40 border-b border-border/40 py-2">
          {chapters.map(chapter => {
            const t = chapter.translations[language];
            return (
              <a
                key={chapter.id}
                href={`#${chapter.id}`}
                className="whitespace-nowrap px-3.5 py-1.5 bg-muted/40 text-[12px] font-semibold rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors border border-border/40"
              >
                {t.category}
              </a>
            );
          })}
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24">
          {/* Sidebar TOC */}
          <aside className="hidden lg:block w-44 flex-shrink-0">
            <div className="sticky top-20">
              <h3 className="font-bold text-[9px] uppercase tracking-[0.2em] text-muted-foreground/50 mb-3 pl-3">
                {tocLabel}
              </h3>
              <nav className="flex flex-col border-l border-border/60 pl-3">
                {chapters.map(chapter => {
                  const t = chapter.translations[language];
                  return (
                    <a
                      key={chapter.id}
                      href={`#${chapter.id}`}
                      className="block px-2 py-1.5 text-[11.5px] font-medium text-muted-foreground hover:text-foreground transition-colors -ml-px border-l border-transparent hover:border-foreground"
                    >
                      {t.category}
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 max-w-3xl">
            {chapters.map((chapter, chapterIdx) => {
              const t = chapter.translations[language];
              return (
                <section
                  key={chapter.id}
                  id={chapter.id}
                  className={`scroll-mt-24 ${chapterIdx > 0 ? 'mt-20 pt-20 border-t border-border/40' : ''}`}
                >
                  {/* Chapter header */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    className="mb-10"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-2 block">
                      {t.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight mb-3 text-balance">
                      {t.title}
                    </h2>
                    <p className="text-muted-foreground text-[15px] md:text-base leading-relaxed max-w-xl">
                      {t.description}
                    </p>
                  </motion.div>

                  {/* Sub-rules */}
                  <div className="space-y-10">
                    {t.rules.map((rule, ruleIdx) => (
                      <SubRuleCard key={ruleIdx} rule={rule} index={ruleIdx} />
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
