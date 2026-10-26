import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, Calendar, Ship, Music, Sparkles, MapPin, Eye } from 'lucide-react';
import { CHRONOLOGICAL_CRUISES, createWhatsAppUrl } from '../data/cruises';
import { Cruise } from '../types/cruise';

interface BannerCarouselProps {
  onSelectCruise: (cruise: Cruise) => void;
}

export const BannerCarousel: React.FC<BannerCarouselProps> = ({ onSelectCruise }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const cruises = CHRONOLOGICAL_CRUISES;

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cruises.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, cruises.length]);

  const current = cruises[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cruises.length) % cruises.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cruises.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 50) handleNext();
    else if (diff < -50) handlePrev();
    touchStartX.current = null;
  };

  // Distinctive Maritime / Festival Color themes
  const getFestivalTheme = (cruise: Cruise) => {
    if (cruise.id.includes('ws-on-board')) {
      return {
        bg: 'bg-gradient-to-r from-[#002244] via-[#003865] to-[#78350f]',
        glow: 'bg-amber-500/25',
        badge: 'WS ON BOARD · WESLEY SAFADÃO & CONVIDADOS',
        sub: 'text-amber-300',
        stageIcon: '🔥',
        callout: 'O Festival em Alto-Mar Mais Esperado do Ano'
      };
    }
    if (cruise.id.includes('89-rock')) {
      return {
        bg: 'bg-gradient-to-r from-[#001730] via-[#002b5c] to-[#7f1d1d]',
        glow: 'bg-red-500/25',
        badge: '89 ROCK BOAT · O MAIOR FESTIVAL DE ROCK',
        sub: 'text-red-300',
        stageIcon: '🎸',
        callout: 'Capital Inicial · CPM 22 · Pitty · Ira! · Supla'
      };
    }
    if (cruise.id.includes('maiara')) {
      return {
        bg: 'bg-gradient-to-r from-[#002244] via-[#003366] to-[#831843]',
        glow: 'bg-pink-500/25',
        badge: 'NAVIO MAIARA & MARAISA · AS PATROAS',
        sub: 'text-pink-300',
        stageIcon: '👑',
        callout: 'Simone Mendes · Lauana Prado · Mari Fernandez'
      };
    }
    if (cruise.id.includes('reveillon')) {
      return {
        bg: 'bg-gradient-to-r from-[#002244] via-[#075985] to-[#713f12]',
        glow: 'bg-amber-400/30',
        badge: 'RÉVEILLON EM ALTO MAR 2026/2027 · COPACABANA',
        sub: 'text-amber-200',
        stageIcon: '🥂',
        callout: 'Jota Quest · Alexandre Pires · Virada com Fogos no Mar'
      };
    }
    if (cruise.id.includes('zeze')) {
      return {
        bg: 'bg-gradient-to-r from-[#002244] via-[#003366] to-[#7c2d12]',
        glow: 'bg-amber-500/25',
        badge: 'NAVIO DO ZEZÉ · ZEZÉ DI CAMARGO & CONVIDADOS',
        sub: 'text-amber-300',
        stageIcon: '⭐',
        callout: 'Wanessa Camargo · Victor & Leo · Paula Fernandes'
      };
    }
    if (cruise.id.includes('belo')) {
      return {
        bg: 'bg-gradient-to-r from-[#002244] via-[#004b7a] to-[#0e7490]',
        glow: 'bg-cyan-500/25',
        badge: 'NAVIO DO BELO · EM ALTO-MAR',
        sub: 'text-cyan-300',
        stageIcon: '❤️',
        callout: 'Ferrugem · Pixote · Menos é Mais · Turma do Pagode'
      };
    }
    return {
      bg: 'bg-gradient-to-r from-[#002244] via-[#003366] to-[#1e3a8a]',
      glow: 'bg-sky-500/25',
      badge: 'NAVIO ALEXANDRE PIRES · O BAILE DO NEGO VÉIO',
      sub: 'text-sky-300',
      stageIcon: '🥁',
      callout: 'Raça Negra · Alcione · Thiaguinho · Belo'
    };
  };

  const theme = getFestivalTheme(current);

  return (
    <section
      id="banners"
      className="py-12 md:py-16 bg-[#f0f6fc] relative border-b border-slate-200"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Maritime Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0284c7]">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Banners Oficiais de Artistas & Atrações</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#002244] font-display mt-1">
              Grandes Nomes da Música em Alto-Mar
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Navegue pelos festivais temáticos mais concorridos do Brasil. Consulte cabines e garanta seu lugar com atendimento exclusivo.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={handlePrev}
              aria-label="Banner anterior"
              className="p-3 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-[#002244] shadow-sm transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Próximo banner"
              className="p-3 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-[#002244] shadow-sm transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* The Carousel Canvas */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className={`relative rounded-3xl overflow-hidden shadow-2xl text-white ${theme.bg} transition-all duration-700 min-h-[460px] md:min-h-[480px] flex items-center border border-white/20`}
        >
          {/* Ambient Glow */}
          <div className={`absolute -top-20 right-1/4 w-96 h-96 ${theme.glow} rounded-full blur-3xl pointer-events-none`} />

          {/* Graphical Maritime Stage Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="nauticalGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="30" cy="30" r="1.5" fill="#ffffff" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#nauticalGrid)" />
            </svg>
          </div>

          {/* Banner Content Grid */}
          <div className="relative z-10 w-full p-6 sm:p-10 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Text & Artists */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 tracking-wide uppercase px-3 py-1 rounded-full bg-black/40 border border-amber-400/40 backdrop-blur-md">
                <span>{theme.stageIcon}</span>
                <span>{theme.badge}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight leading-tight">
                {current.title}
              </h3>

              <p className={`text-base sm:text-lg font-semibold ${theme.sub}`}>
                {current.subtitle}
              </p>

              {/* Line-Up */}
              <div className="pt-2">
                <span className="text-xs uppercase tracking-wider text-slate-300 font-bold block mb-2 flex items-center gap-1.5">
                  <Music className="w-3.5 h-3.5 text-amber-400" />
                  <span>Atrações Confirmadas:</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {current.artists.map((artist, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-black/50 border border-white/20 text-xs sm:text-sm font-semibold text-white shadow-sm"
                    >
                      {artist}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ship, Dates & Route */}
              <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span className="font-bold text-white">{current.dates}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Ship className="w-4 h-4 text-sky-300" />
                  <span>Navio: <strong className="text-white">{current.ship}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Shows & Festas 100% Inclusos</span>
                </div>
              </div>

              {/* Buttons with Direct WhatsApp CTA (No fake prices) */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={createWhatsAppUrl(`Olá! Vi o banner do ${current.title} (${current.dates}) no site da Vibe a Bordo e gostaria de entrar em contato para consultar valores e cabines disponíveis.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-black text-[#002244] bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-all shadow-lg shadow-amber-400/25 text-sm whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 text-[#002244]" />
                  <span>Entrar em Contato no WhatsApp</span>
                </a>

                <button
                  onClick={() => onSelectCruise(current)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-white/10 hover:bg-white/20 border border-white/25 transition-all text-sm whitespace-nowrap"
                >
                  <Eye className="w-4 h-4 text-amber-300" />
                  <span>Ver Roteiro & Cabines</span>
                </button>
              </div>
            </div>

            {/* Right: Thematic Cruise Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl overflow-hidden border-2 border-white/20 bg-[#001730]/90 p-5 shadow-2xl relative backdrop-blur-sm">
                <div className="h-52 w-full rounded-xl bg-gradient-to-br from-[#002b5c] to-[#001428] flex flex-col items-center justify-center text-center p-4 relative overflow-hidden border border-white/15">
                  <span className="text-4xl mb-2">{theme.stageIcon}</span>
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                    Show em Alto-Mar
                  </span>
                  <h4 className="text-xl font-extrabold text-white font-display mt-0.5">
                    {current.headliner}
                  </h4>
                  <p className="text-xs text-slate-300 mt-2 max-w-[220px]">
                    {theme.callout}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-300">
                    Temporada {current.season}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    {current.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {cruises.map((cruise, idx) => (
            <button
              key={cruise.id}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Ir para banner ${cruise.title}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-10 bg-[#002244]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
