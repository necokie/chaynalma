"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SubRuleTranslation } from '@/types/rule';
import { CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface SubRuleCardProps {
  rule: SubRuleTranslation;
  index: number;
}

export function SubRuleCard({ rule, index }: SubRuleCardProps) {
  const { language } = useLanguage();

  const badLabel = language === 'ru' ? 'Неверно' : language === 'en' ? 'Incorrect' : language === 'uz-cyrl' ? 'Нотўғри' : 'Noto\'g\'ri';
  const goodLabel = language === 'ru' ? 'Верно' : language === 'en' ? 'Correct' : language === 'uz-cyrl' ? 'Тўғри' : 'To\'g\'ri';

  const renderMessages = (text: string, isBad: boolean) => {
    const lines = text.split('\n');
    return (
      <div className="flex flex-col gap-1.5 p-4 bg-muted/30 rounded-xl border border-border/40 mt-3">
        {lines.map((line, idx) => {
          const trimmed = line.trim();
          if (!trimmed) return null;

          // Parenthetical annotations / timestamps
          if (trimmed.startsWith('(') || trimmed.startsWith('Yoki:') || trimmed.startsWith('Или:') || trimmed.startsWith('Or:') || trimmed.startsWith('Ёки:')) {
            return (
              <div key={idx} className="text-center text-[11px] text-muted-foreground/70 my-1.5 font-medium italic">
                {trimmed}
              </div>
            );
          }

          return (
            <motion.div
              initial={{ opacity: 0, x: isBad ? -8 : 8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: idx * 0.08 }}
              key={idx}
              className={`max-w-[90%] rounded-2xl px-3.5 py-2 text-[14px] leading-relaxed ${
                isBad
                  ? 'bg-white text-foreground rounded-tl-sm self-start border border-border/60'
                  : 'bg-foreground text-background rounded-br-sm self-end'
              }`}
            >
              {trimmed}
            </motion.div>
          );
        })}
      </div>
    );
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="group"
    >
      <div className="border-l-2 border-border/50 group-hover:border-foreground/30 transition-colors pl-5 md:pl-7 py-1">
        {/* Sub-rule title */}
        <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight mb-3 text-balance">
          {rule.sub_title}
        </h3>
        
        {/* Reason */}
        <p className="text-muted-foreground text-[15px] md:text-base leading-relaxed max-w-2xl mb-6">
          {rule.reason}
        </p>

        {/* Examples */}
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <div className="flex items-center gap-1.5 text-danger font-semibold text-[13px] uppercase tracking-wider mb-0.5">
              <XCircle className="w-4 h-4" />
              <span>{badLabel}</span>
            </div>
            {renderMessages(rule.bad_example, true)}
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-success font-semibold text-[13px] uppercase tracking-wider mb-0.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>{goodLabel}</span>
            </div>
            {renderMessages(rule.good_example, false)}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
