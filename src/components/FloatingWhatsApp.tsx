import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Ship } from 'lucide-react';
import { WHATSAPP_PHONE_DISPLAY, createWhatsAppUrl } from '../data/cruises';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowTooltip(true);
      }
    }, 3500);
    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const handleCloseTooltip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowTooltip(false);
    setHasInteracted(true);
  };

  const handleButtonClick = () => {
    setHasInteracted(true);
    setShowTooltip(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="bg-[#002244] border-2 border-amber-400 text-white rounded-3xl p-4 shadow-2xl max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300 relative text-left">
          <button
            onClick={handleCloseTooltip}
            className="absolute top-2.5 right-2.5 p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Fechar mensagem"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold text-amber-300 flex items-center gap-1">
              <Ship className="w-3.5 h-3.5" />
              <span>Vibe a Bordo · Consultor Online</span>
            </span>
          </div>

          <p className="text-xs text-slate-200 leading-relaxed mb-3">
            Planejando seu cruzeiro para a <strong>Temporada 2026/2027</strong>? Clique para consultar cabines e tirar dúvidas com nosso time!
          </p>

          <a
            href={createWhatsAppUrl('Olá! Estou no site da Vibe a Bordo e gostaria de atendimento para planejar meu cruzeiro na Temporada 2026/2027.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleButtonClick}
            className="w-full py-2 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#002244] font-black text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-[#002244]" />
            <span>Iniciar Conversa no WhatsApp</span>
          </a>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={createWhatsAppUrl('Olá! Gostaria de falar com o consultor de cruzeiros da Vibe a Bordo.')}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleButtonClick}
        aria-label={`Entrar em contato no WhatsApp oficial ${WHATSAPP_PHONE_DISPLAY}`}
        className="group relative flex items-center gap-3 p-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white shadow-2xl shadow-emerald-600/40 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/40 animate-ping -z-10 opacity-75" />

        <MessageCircle className="w-7 h-7 text-white fill-white" />

        <div className="hidden sm:block text-left pr-1">
          <span className="text-[10px] text-emerald-100 font-medium block leading-none">Atendimento Online</span>
          <span className="text-xs font-black text-white leading-tight block">WhatsApp Oficial</span>
        </div>
      </a>
    </div>
  );
};
