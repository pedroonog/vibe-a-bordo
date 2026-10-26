import React, { useState } from 'react';
import { Calendar, Ship, MapPin, Music, MessageCircle, Play, Eye, Search, Sparkles, Filter } from 'lucide-react';
import { ALL_CRUISE_EVENTS, createWhatsAppUrl } from '../data/cruises';
import { CruiseEvent } from '../types/cruise';

interface EventOffersGridProps {
  onSelectEvent: (event: CruiseEvent) => void;
}

export const EventOffersGrid: React.FC<EventOffersGridProps> = ({ onSelectEvent }) => {
  const [selectedTheme, setSelectedTheme] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const themes = [
    { id: 'all', label: 'Todos os Cruzeiros (15)' },
    { id: 'sertanejo', label: 'Sertanejo & Festivais' },
    { id: 'rock', label: 'Rock Boat' },
    { id: 'axe', label: 'Axé & Carnaval' },
    { id: 'samba', label: 'Samba & Pagode' },
    { id: 'romantico', label: 'Romântico & MPB' },
    { id: 'reveillon', label: 'Réveillon Copacabana' },
    { id: 'familia', label: 'Família & Kids' },
    { id: 'desenvolvimento', label: 'Desenvolvimento' }
  ];

  const filteredEvents = ALL_CRUISE_EVENTS.filter((event) => {
    const matchesTheme = selectedTheme === 'all' || event.theme === selectedTheme;
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !query ||
      event.title.toLowerCase().includes(query) ||
      event.headliner.toLowerCase().includes(query) ||
      event.ship.toLowerCase().includes(query) ||
      event.artists.some((a) => a.toLowerCase().includes(query));
    return matchesTheme && matchesQuery;
  });

  return (
    <section id="ofertas" className="py-16 md:py-24 bg-[#f0f6fc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header referencing queronavegar.com.br/ofertas/ */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#002244] px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Grade Oficial de Cruzeiros Temáticos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002244] font-display tracking-tight">
            Ofertas de Cruzeiros Temáticos
          </h2>

          <p className="text-base text-slate-600">
            Confira todos os navios confirmados para a <strong>Temporada 2026/2027</strong>. Clique em qualquer evento para ver fotos, vídeos exclusivos e detalhes da programação.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="space-y-4 mb-12">
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por artista, evento ou navio..."
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#002244] focus:ring-2 focus:ring-[#002244]/15 shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs text-slate-400 hover:text-slate-600"
              >
                Limpar
              </button>
            )}
          </div>

          {/* Theme Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => setSelectedTheme(theme.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  selectedTheme === theme.id
                    ? 'bg-[#002244] text-amber-300 shadow-md shadow-[#002244]/20'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-sm'
                }`}
              >
                {theme.label}
              </button>
            ))}
          </div>
        </div>

        {/* Banners Grid (Poster Cards) */}
        {filteredEvents.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
            <p className="text-base text-slate-600 font-medium">
              Nenhum cruzeiro encontrado para a busca "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTheme('all');
              }}
              className="mt-4 px-5 py-2.5 rounded-xl bg-[#002244] text-amber-300 font-bold text-xs"
            >
              Ver Todos os 15 Cruzeiros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="rounded-3xl overflow-hidden border border-slate-200 bg-white hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
              >
                {/* Real Vertical Poster Banner (Clickable) */}
                <div
                  onClick={() => onSelectEvent(event)}
                  className="relative aspect-[3/4] w-full overflow-hidden bg-slate-900 cursor-pointer"
                >
                  <img
                    src={event.posterImage}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Gradient Scrim for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001730] via-black/20 to-black/30" />

                  {/* Top Status Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-400 text-[#002244] shadow-md uppercase tracking-wide">
                      {event.badge || event.status}
                    </span>
                    {event.videos.length > 0 && (
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-black/60 text-white backdrop-blur-md border border-white/20 flex items-center gap-1">
                        <Play className="w-3 h-3 text-amber-400 fill-amber-400" />
                        <span>Vídeo Oficial</span>
                      </span>
                    )}
                  </div>

                  {/* Bottom Information on Banner */}
                  <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                    <span className="text-[11px] font-bold text-amber-300 block uppercase tracking-wider">
                      {event.dates}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black font-display text-white group-hover:text-amber-300 transition-colors leading-tight">
                      {event.title}
                    </h3>
                    <p className="text-xs text-slate-200 line-clamp-1">
                      {event.headliner}
                    </p>
                  </div>
                </div>

                {/* Card Content & Action Area */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-white">
                  <div className="space-y-2.5 text-xs text-slate-600">
                    <div className="flex items-center gap-2 text-slate-800 font-bold">
                      <Calendar className="w-4 h-4 text-[#002244]" />
                      <span>{event.dates} ({event.nights} noites)</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Ship className="w-4 h-4 text-[#0284c7]" />
                      <span>Navio: <strong className="text-slate-900">{event.ship}</strong></span>
                    </div>

                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Roteiro: <span className="font-medium text-slate-700">{event.route}</span></span>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-slate-700">
                      <Music className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="truncate font-medium">{event.artists.join(', ')}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectEvent(event)}
                      className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-[#002244] bg-slate-100 hover:bg-slate-200 transition-all flex items-center justify-center gap-1 border border-slate-200"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#002244]" />
                      <span>Ver Evento</span>
                    </button>

                    <a
                      href={createWhatsAppUrl(`Olá! Vi a oferta do "${event.title}" (${event.dates}) no site da Vibe a Bordo e gostaria de entrar em contato para consultar valores e disponibilidade de cabine.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-xl text-xs font-black text-[#002244] bg-amber-400 hover:bg-amber-300 transition-all flex items-center justify-center gap-1 shadow-md shadow-amber-400/20 whitespace-nowrap"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#002244]" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quick Consultation Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#002244] via-[#003366] to-[#002244] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-black text-amber-300">Quer cotação imediata para qualquer um dos navios?</h4>
            <p className="text-xs sm:text-sm text-slate-200">
              Chame nossa equipe no WhatsApp oficial e receba a relação completa de cabines disponíveis em tempo real.
            </p>
          </div>
          <a
            href={createWhatsAppUrl('Olá! Gostaria de consultar todas as opções de cruzeiros temáticos da Vibe a Bordo.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl font-black text-[#002244] bg-amber-400 hover:bg-amber-300 transition-all text-sm whitespace-nowrap shrink-0 flex items-center gap-2 shadow-lg shadow-amber-400/20"
          >
            <MessageCircle className="w-4 h-4 text-[#002244]" />
            <span>Falar com Concierge no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
