import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_DATA, createWhatsAppUrl } from '../data/cruises';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#0284c7] px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200">
            <HelpCircle className="w-4 h-4 text-amber-500" />
            <span>Dúvidas Frequentes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#002244] font-display">
            Tudo o Que Você Precisa Saber Antes de Embarcar
          </h2>

          <p className="text-sm text-slate-600">
            Respostas claras para as dúvidas mais comuns dos nossos passageiros.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-slate-50/60 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-bold text-[#002244] hover:text-[#0284c7] transition-colors"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 bg-white animate-in fade-in duration-150">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need more help? */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-[#002244] to-[#003865] text-white text-center space-y-3 shadow-xl">
          <p className="text-sm font-medium text-slate-200">
            Ainda tem alguma dúvida sobre roteiros, festas temáticas ou cabines da Temporada 2026/2027?
          </p>
          <a
            href={createWhatsAppUrl('Olá! Gostaria de tirar uma dúvida sobre os cruzeiros temáticos com a equipe da Vibe a Bordo.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-[#002244] bg-amber-400 hover:bg-amber-300 transition-all text-xs shadow-md shadow-amber-400/20"
          >
            <MessageCircle className="w-4 h-4 text-[#002244]" />
            <span>Falar com Concierge no WhatsApp (+55 11 97864-7543)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
