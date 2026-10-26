import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, MessageCircle, ChevronDown, Calendar, Ship, Sparkles, Phone, Compass, Info, Users, Mail } from 'lucide-react';
import { ALL_CRUISE_EVENTS, OFFICIAL_LOGO_URL, createWhatsAppUrl, WHATSAPP_PHONE_DISPLAY } from '../data/cruises';
import { CruiseEvent } from '../types/cruise';

export type PageRoute = 'home' | 'about' | 'temporada' | 'ship' | 'contact' | 'event';

interface HeaderProps {
  currentPage: PageRoute;
  onNavigatePage: (page: 'home' | 'about' | 'temporada' | 'ship' | 'contact') => void;
  onSelectEvent: (event: CruiseEvent) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigatePage, onSelectEvent }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  const handleNavigate = (page: 'home' | 'about' | 'temporada' | 'ship' | 'contact') => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    onNavigatePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEventClick = (event: CruiseEvent) => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    onSelectEvent(event);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#002244] border-b border-amber-400/25 shadow-xl text-white">
      {/* Top announcement bar */}
      <div className="bg-[#001730] border-b border-white/10 px-4 py-1.5 text-xs text-slate-300 hidden sm:flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-amber-300 font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Vibe a Bordo · Agência Especializada em Cruzeiros Temáticos</span>
        </div>
        <div className="flex items-center gap-4 text-slate-300 text-[11px]">
          <span>WhatsApp Oficial: <strong className="text-white">{WHATSAPP_PHONE_DISPLAY}</strong></span>
          <span className="text-slate-500">·</span>
          <span>Temporada 2026/2027 Confirmada</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Left Side: Brand Logo */}
        <button
          onClick={() => handleNavigate('home')}
          className="flex items-center gap-3 text-left group shrink-0"
        >
          <img
            src={OFFICIAL_LOGO_URL}
            alt="Vibe a Bordo Logo Oficial"
            className="w-12 h-12 rounded-full object-cover border-2 border-amber-400 shadow-md group-hover:scale-105 transition-transform"
          />
          <div>
            <span className="text-2xl font-black tracking-tight text-white font-display block leading-none">
              Vibe <span className="text-amber-400">a Bordo</span>
            </span>
            <span className="text-[10px] text-slate-300 tracking-wider uppercase block mt-1">
              Cruzeiros Temáticos
            </span>
          </div>
        </button>

        {/* Right Side: Navigation Menu & WhatsApp CTA */}
        <div className="flex items-center gap-6">
          <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-slate-200">
            {/* 1. Início */}
            <button
              onClick={() => handleNavigate('home')}
              className={`transition-colors whitespace-nowrap py-1 font-semibold ${
                currentPage === 'home' ? 'text-amber-400 border-b-2 border-amber-400' : 'hover:text-amber-300'
              }`}
            >
              Início
            </button>

            {/* 2. Sobre nós */}
            <button
              onClick={() => handleNavigate('about')}
              className={`transition-colors whitespace-nowrap py-1 font-semibold ${
                currentPage === 'about' ? 'text-amber-400 border-b-2 border-amber-400' : 'hover:text-amber-300'
              }`}
            >
              Sobre nós
            </button>

            {/* 3. Temporada 26/27 (With Chronological Hover Dropdown of all 15 events) */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => handleNavigate('temporada')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition-all border whitespace-nowrap shadow-sm ${
                  currentPage === 'temporada' || currentPage === 'event'
                    ? 'bg-amber-400 text-[#002244] border-amber-400'
                    : 'bg-white/10 hover:bg-white/15 text-amber-300 border-amber-400/30 hover:text-amber-200'
                }`}
              >
                <Ship className="w-4 h-4" />
                <span>Temporada 26/27</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Hover Dropdown of all 15 events */}
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-96 bg-[#001730] border border-amber-400/30 rounded-2xl shadow-2xl overflow-hidden py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 py-2 border-b border-white/10 flex items-center justify-between bg-[#001020]">
                    <span className="text-[11px] font-black uppercase tracking-wider text-amber-400">
                      Navios em Ordem Cronológica
                    </span>
                    <button
                      onClick={() => handleNavigate('temporada')}
                      className="text-[11px] font-bold text-amber-300 hover:text-amber-200 underline"
                    >
                      Ver Todos ({ALL_CRUISE_EVENTS.length})
                    </button>
                  </div>

                  <div className="max-h-96 overflow-y-auto divide-y divide-white/5 scrollbar-thin scrollbar-thumb-amber-400/30">
                    {ALL_CRUISE_EVENTS.map((cruise) => (
                      <button
                        key={cruise.id}
                        onClick={() => handleEventClick(cruise)}
                        className="w-full text-left p-3 hover:bg-white/10 transition-colors flex items-center gap-3 group"
                      >
                        <img
                          src={cruise.posterImage}
                          alt={cruise.title}
                          className="w-10 h-14 object-cover rounded-lg border border-white/20 shrink-0 group-hover:border-amber-400"
                        />
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] font-bold text-amber-300 block truncate">
                            {cruise.dates}
                          </span>
                          <h5 className="text-xs font-black text-white group-hover:text-amber-200 transition-colors truncate">
                            {cruise.title}
                          </h5>
                          <span className="text-[10px] text-slate-300 block truncate">
                            Navio: {cruise.ship} · {cruise.nights} Noites
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="p-2 border-t border-white/10 bg-[#001020]">
                    <button
                      onClick={() => handleNavigate('temporada')}
                      className="w-full text-center text-xs font-bold text-amber-300 hover:text-amber-200 py-1.5 rounded-lg hover:bg-white/5"
                    >
                      Acessar Página Completa da Temporada 2026/2027 →
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Conheça o navio */}
            <button
              onClick={() => handleNavigate('ship')}
              className={`transition-colors whitespace-nowrap py-1 font-semibold ${
                currentPage === 'ship' ? 'text-amber-400 border-b-2 border-amber-400' : 'hover:text-amber-300'
              }`}
            >
              Conheça o navio
            </button>

            {/* 5. Contato */}
            <button
              onClick={() => handleNavigate('contact')}
              className={`transition-colors whitespace-nowrap py-1 font-semibold ${
                currentPage === 'contact' ? 'text-amber-400 border-b-2 border-amber-400' : 'hover:text-amber-300'
              }`}
            >
              Contato
            </button>
          </nav>

          {/* Action WhatsApp Button */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={createWhatsAppUrl('Olá! Gostaria de atendimento da Vibe a Bordo para planejar meu cruzeiro.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black text-[#002244] bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-all shadow-md shadow-amber-400/20 active:scale-95 whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-[#002244]" />
              <span className="hidden sm:inline">Entrar em Contato</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#001730] border-b border-amber-400/20 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => handleNavigate('home')}
            className={`block w-full text-left px-3 py-2 text-sm font-bold rounded-lg ${
              currentPage === 'home' ? 'bg-amber-400 text-[#002244]' : 'text-slate-200 hover:text-amber-300'
            }`}
          >
            Início
          </button>

          <button
            onClick={() => handleNavigate('about')}
            className={`block w-full text-left px-3 py-2 text-sm font-bold rounded-lg ${
              currentPage === 'about' ? 'bg-amber-400 text-[#002244]' : 'text-slate-200 hover:text-amber-300'
            }`}
          >
            Sobre nós
          </button>

          {/* Temporada 26/27 Dropdown / Section in Mobile */}
          <div className="p-3 bg-white/5 rounded-2xl border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <button
                onClick={() => handleNavigate('temporada')}
                className="text-xs font-black text-amber-300 uppercase tracking-wider text-left flex items-center gap-1.5"
              >
                <Ship className="w-3.5 h-3.5" />
                <span>Temporada 2026/2027:</span>
              </button>
              <button
                onClick={() => handleNavigate('temporada')}
                className="text-[11px] font-bold text-amber-400 underline"
              >
                Ver todos
              </button>
            </div>

            <div className="max-h-56 overflow-y-auto space-y-1 pr-1 divide-y divide-white/5">
              {ALL_CRUISE_EVENTS.map((cruise) => (
                <button
                  key={cruise.id}
                  onClick={() => handleEventClick(cruise)}
                  className="w-full text-left py-2 px-2 rounded-lg hover:bg-white/10 text-xs text-slate-200 flex items-center justify-between"
                >
                  <span className="font-semibold truncate mr-2">{cruise.title}</span>
                  <span className="text-[10px] text-amber-400 shrink-0">{cruise.dates.split(' de ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => handleNavigate('ship')}
            className={`block w-full text-left px-3 py-2 text-sm font-bold rounded-lg ${
              currentPage === 'ship' ? 'bg-amber-400 text-[#002244]' : 'text-slate-200 hover:text-amber-300'
            }`}
          >
            Conheça o navio
          </button>

          <button
            onClick={() => handleNavigate('contact')}
            className={`block w-full text-left px-3 py-2 text-sm font-bold rounded-lg ${
              currentPage === 'contact' ? 'bg-amber-400 text-[#002244]' : 'text-slate-200 hover:text-amber-300'
            }`}
          >
            Contato
          </button>

          <div className="pt-2">
            <a
              href={createWhatsAppUrl('Olá! Gostaria de atendimento via WhatsApp para os cruzeiros temáticos da Vibe a Bordo.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl font-black text-[#002244] bg-amber-400 hover:bg-amber-300 text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-[#002244]" />
              <span>Falar no WhatsApp (+55 11 97864-7543)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
