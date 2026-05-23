"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Rule } from '@/types/rule';
import { CheckCircle2, XCircle, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface RuleCardProps {
  rule: Rule;
}

export function RuleCard({ rule }: RuleCardProps) {
  const { language } = useLanguage();
  const content = rule.translations[language];

  const handleShare = () => {
    const url = `${window.location.origin}#${rule.slug}`;
    navigator.clipboard.writeText(url);
  };

  const renderChatBubbles = (text: string, isBad: boolean) => {
    const messages = text.split('\n');
    return (
      <div className="flex flex-col gap-2 p-5 bg-muted/20 rounded-2xl border border-muted mt-4">
        {messages.map((msg, idx) => {
          // System timestamps
          if (msg.trim().startsWith('[')) {
            return (
              <div key={idx} className="text-center text-[11px] text-muted-foreground/70 my-3 font-medium tracking-wider uppercase">
                {msg.replace(/[\[\]]/g, '').trim()}
              </div>
            );
          }
          
          // Render bubbles
          return (
            <div 
              key={idx} 
              className={`max-w-[85%] rounded-[20px] px-4 py-2.5 text-[15px] leading-snug shadow-sm ${
                isBad 
                  ? 'bg-muted/60 text-foreground rounded-tl-sm self-start border border-muted' 
                  : 'bg-primary text-white rounded-br-sm self-end'
              }`}
            >
              {msg.trim()}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      id={rule.slug}
      className="bg-white rounded-[32px] border border-border/50 overflow-hidden shadow-glass transition-all duration-300 py-4"
    >
      <div className="p-6 md:p-10">
        
        {/* Top: Header & Text */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-balance tracking-tight text-foreground">{content.title}</h2>
            <p className="text-muted-foreground text-[19px] leading-relaxed max-w-2xl font-medium">
              {content.description}
            </p>
          </div>
          <button 
            onClick={handleShare}
            className="p-3 mt-1 text-muted-foreground hover:text-primary bg-muted hover:bg-primary/10 rounded-full transition-colors flex-shrink-0"
            title="Share Rule"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom: Chat Previews */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-10">
          
          {/* Bad Example */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-danger font-bold text-lg px-1">
              <XCircle className="w-6 h-6" />
              <span>{language === 'ru' ? 'Как не надо' : language === 'en' ? 'Don\'t do this' : 'Bunday qilmang'}</span>
            </div>
            {renderChatBubbles(content.bad_example, true)}
          </div>

          {/* Good Example */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-success font-bold text-lg px-1">
              <CheckCircle2 className="w-6 h-6" />
              <span>{language === 'ru' ? 'Как надо' : language === 'en' ? 'Instead, try this' : 'Shunday qiling'}</span>
            </div>
            {renderChatBubbles(content.good_example, false)}
          </div>

        </div>
      </div>
    </motion.div>
  );
}
