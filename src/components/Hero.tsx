import React from 'react';
import { MessageCircle, Ship, Calendar, ShieldCheck, Waves, Compass, Sparkles } from 'lucide-react';
import { OFFICIAL_LOGO_URL, createWhatsAppUrl } from '../data/cruises';

interface HeroProps {
  onExploreOffers?: () => void;
  onExploreShip?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreOffers, onExploreShip }) => {
  return (
    <section id="inicio" className="relative bg-gradient-to-b from-[#002244] via-[#003366] to-[#001730] text-white pt-10 pb-16 md:pt-14 md:pb-20 overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Vacation Marketing Copy & Direct WhatsApp CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-xs font-black uppercase tracking-wider text-amber-300">
              <Compass className="w-4 h-4 text-amber-400" />
              <span>Sua Viagem dos Sonhos em Alto-Mar</span>
              <span aria-hidden="true" className="text-amber-400/40">·</span>
              <span className="text-white">Temporada 2026/2027</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] font-display text-balance">
              Viva a emoção dos maiores{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400">
                cruzeiros temáticos
              </span>{' '}
              do Brasil
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              Navegue pelos cenários paradisíacos da costa brasileira com os maiores artistas da música em alto-mar. Transatlânticos 5 estrelas, gastronomia all-inclusive e atendimento VIP no pré e pós-embarque.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={createWhatsAppUrl('Olá! Vi o site da Vibe a Bordo e gostaria de entrar em contato para consultar valores e cabines da Temporada 2026/2027.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-black text-[#002244] bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 transition-all shadow-xl shadow-amber-400/20 active:scale-[0.98] text-base whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 text-[#002244]" />
                <span>Entrar em Contato no WhatsApp</span>
              </a>

              <button
                onClick={onExploreOffers}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-base whitespace-nowrap"
              >
                <Ship className="w-5 h-5 text-amber-300" />
                <span>Ver Grade de Ofertas</span>
              </button>
            </div>

            {/* Trust Points */}
            <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 text-amber-300 font-bold">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                Atendimento Oficial: (11) 97864-7543
              </span>
              <span aria-hidden="true" className="hidden sm:inline text-slate-500">·</span>
              <span>Todos os shows inclusos na cabine</span>
              <span aria-hidden="true" className="hidden sm:inline text-slate-500">·</span>
              <span>Assessoria VIP desde 2022</span>
            </div>
          </div>

          {/* Right: Authentic Logo & Transatlantic Visual Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-3xl overflow-hidden border-2 border-amber-400/40 bg-gradient-to-b from-[#001f3f] to-[#001224] p-6 shadow-2xl text-center space-y-5">
              {/* Official Logo Banner */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative">
                  <img
                    src={OFFICIAL_LOGO_URL}
                    alt="Logo Vibe a Bordo"
                    className="w-40 h-40 sm:w-44 sm:h-44 object-cover rounded-full border-4 border-amber-400 shadow-2xl"
                  />
                  <div className="absolute -bottom-2 -right-2 p-2 rounded-full bg-amber-400 text-[#002244] shadow-md">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-black uppercase tracking-wider text-amber-300">
                  Agência Especializada em Cruzeiros
                </span>
                <h3 className="text-2xl font-black text-white font-display">
                  Vibe a Bordo Viagens
                </h3>
                <p className="text-xs text-slate-300 max-w-xs mx-auto leading-relaxed">
                  Conectando você aos maiores artistas da música brasileira em viagens inesquecíveis em alto-mar.
                </p>
              </div>

              {/* Action */}
              <div className="pt-2">
                <button
                  onClick={onExploreOffers}
                  className="w-full py-3 px-4 rounded-xl text-xs font-black text-[#002244] bg-amber-400 hover:bg-amber-300 transition-colors uppercase tracking-wider shadow-md"
                >
                  Explorar os 15 Cruzeiros Confirmados →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Maritime KPI Strip */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 shrink-0">
              <Ship className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">15 Cruzeiros Oficiais</h4>
              <p className="text-xs text-slate-300 mt-0.5">WS On Board, Embaixador, Cabaré, Rock Boat, Réveillon e muito mais.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 shrink-0">
              <Waves className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Shows 100% Inclusos</h4>
              <p className="text-xs text-slate-300 mt-0.5">Acesso a todos os espetáculos musicais e festas sem cobranças extras.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Pré & Pós-Embarque VIP</h4>
              <p className="text-xs text-slate-300 mt-0.5">Consultor dedicado que cuida da documentação e localização da cabine.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Atendimento Imediato</h4>
              <p className="text-xs text-slate-300 mt-0.5">WhatsApp oficial (+55 11 97864-7543) com resposta rápida e personalizada.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
