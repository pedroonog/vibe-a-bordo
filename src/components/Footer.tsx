import React from 'react';
import { Instagram, Mail, MessageCircle, Globe, Shield, Heart, Ship, Calendar } from 'lucide-react';
import {
  WHATSAPP_PHONE_DISPLAY,
  CONTACT_EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  DOMAINS,
  ALL_CRUISE_EVENTS,
  OFFICIAL_LOGO_URL,
  createWhatsAppUrl
} from '../data/cruises';
import { CruiseEvent } from '../types/cruise';

interface FooterProps {
  onNavigatePage: (page: 'home' | 'about' | 'temporada' | 'ship' | 'contact') => void;
  onSelectEvent: (event: CruiseEvent) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigatePage, onSelectEvent }) => {
  const handleNav = (page: 'home' | 'about' | 'temporada' | 'ship' | 'contact') => {
    onNavigatePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#001730] border-t border-amber-400/20 text-slate-300 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand Info with Official Logo */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={OFFICIAL_LOGO_URL}
                alt="Logo Vibe a Bordo"
                className="w-12 h-12 rounded-full object-cover border-2 border-amber-400 shadow-md"
              />
              <span className="text-2xl font-black text-white font-display">
                Vibe <span className="text-amber-400">a Bordo</span>
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              Desde 2022 transformamos viagens em alto-mar em experiências extraordinárias. Especialistas em cruzeiros temáticos, grandes atrações musicais e consultoria dedicada no pré e pós-embarque.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Vibe a Bordo"
                className="p-2.5 rounded-xl bg-white/10 border border-white/15 hover:border-pink-500/40 hover:text-pink-300 text-white transition-all flex items-center gap-2"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span className="text-xs font-bold">{INSTAGRAM_HANDLE}</span>
              </a>

              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp oficial da Vibe a Bordo"
                className="p-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#002244] font-bold transition-all flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation - The 5 Pages requested */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider">
              Páginas do Site
            </h4>
            <ul className="space-y-2 font-medium">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Sobre nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('temporada')}
                  className="hover:text-amber-300 transition-colors text-left text-amber-300 font-bold"
                >
                  Temporada 2026/2027
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('ship')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Conheça o navio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Chronological Ships of the Season */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider flex items-center justify-between">
              <span>Temporada 26/27</span>
              <button
                onClick={() => handleNav('temporada')}
                className="text-[10px] text-amber-400 underline lowercase font-normal"
              >
                ver lista completa
              </button>
            </h4>
            <ul className="space-y-2 text-slate-300 max-h-56 overflow-y-auto pr-1">
              {ALL_CRUISE_EVENTS.map((cruise) => (
                <li key={cruise.id} className="text-[11px]">
                  <button
                    onClick={() => {
                      onSelectEvent(cruise);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-amber-300 transition-colors text-left w-full truncate block"
                  >
                    <strong className="text-amber-400 font-semibold">{cruise.dates.split(' de ')[0]}:</strong>{' '}
                    <span>{cruise.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Contacts & Domains */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider">
              Canais Oficiais
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-400 text-[11px]">WhatsApp Oficial:</span>
                  <a
                    href={createWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-amber-300 font-black text-xs block"
                  >
                    {WHATSAPP_PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-400 text-[11px]">E-mail de Atendimento:</span>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-white hover:text-amber-300 font-medium text-xs break-all"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-400 text-[11px]">Portais Oficiais:</span>
                  <div className="space-y-0.5">
                    {DOMAINS.map((domain) => (
                      <a
                        key={domain}
                        href={`https://${domain}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 hover:text-white block text-xs underline"
                      >
                        {domain}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Security */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            <p>© {new Date().getFullYear()} Vibe a Bordo Viagens e Turismo. Todos os direitos reservados.</p>
            <p className="text-[10px] text-slate-500 mt-0.5">
              CNPJ e operações credenciadas junto aos armadores oficiais (MSC Cruzeiros).
            </p>
          </div>

          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>Compra 100% Segura & Confirmada</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
