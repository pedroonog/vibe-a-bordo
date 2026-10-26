import React, { useState } from 'react';
import { Calendar, Ship, MapPin, Music, MessageCircle, Eye, Check, Clock } from 'lucide-react';
import { CHRONOLOGICAL_CRUISES, createWhatsAppUrl } from '../data/cruises';
import { Cruise } from '../types/cruise';

interface TemporadaSeasonProps {
  onSelectCruise: (cruise: Cruise) => void;
}

export const TemporadaSeason: React.FC<TemporadaSeasonProps> = ({ onSelectCruise }) => {
  const [selectedMonth, setSelectedMonth] = useState<string>('all');

  const months = [
    { id: 'all', label: 'Todos os Meses (7 Navios)' },
    { id: 'Novembro / 2026', label: 'Novembro / 2026' },
    { id: 'Dezembro / 2026', label: 'Dezembro / 2026' },
    { id: 'Réveillon 2026/2027', label: 'Réveillon 2026/2027' },
    { id: 'Janeiro / 2027', label: 'Janeiro / 2027' },
    { id: 'Março / 2027', label: 'Março / 2027' }
  ];

  const filteredCruises = CHRONOLOGICAL_CRUISES.filter((cruise) => {
    if (selectedMonth === 'all') return true;
    return cruise.monthLabel === selectedMonth;
  });

  return (
    <section id="temporada-2026-2027" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#002244] px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40">
            <Clock className="w-4 h-4 text-amber-600" />
            <span>Calendário em Ordem Cronológica</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002244] font-display tracking-tight">
            Temporada 2026/2027
          </h2>

          <p className="text-base text-slate-600">
            Confira a lista completa de navios e cruzeiros temáticos organizados por data de embarque. Escolha sua viagem e entre em contato direto pelo WhatsApp para consultar cabines disponíveis.
          </p>
        </div>

        {/* Month Filter Tabs (Segmented Control) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {months.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedMonth(m.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                selectedMonth === m.id
                  ? 'bg-[#002244] text-amber-300 shadow-md shadow-[#002244]/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* Chronological Cruise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCruises.map((cruise, index) => (
            <div
              key={cruise.id}
              className="rounded-3xl overflow-hidden border border-slate-200 bg-white hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Card Header (Deep Maritime Navy) */}
              <div className="p-6 bg-gradient-to-br from-[#002244] to-[#003865] text-white relative space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>Embarque: {cruise.monthLabel}</span>
                  </span>
                  <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-amber-400 text-[#002244]">
                    {cruise.status}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white font-display group-hover:text-amber-300 transition-colors">
                  {cruise.title}
                </h3>

                <p className="text-xs text-slate-200 line-clamp-2">
                  {cruise.subtitle}
                </p>

                {/* Artists Preview */}
                <div className="pt-1">
                  <div className="text-[11px] uppercase tracking-wider text-amber-300/80 font-bold mb-1 flex items-center gap-1">
                    <Music className="w-3 h-3 text-amber-400" />
                    <span>Atrações:</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-100">
                    {cruise.artists.slice(0, 4).join(', ')}
                    {cruise.artists.length > 4 && ` +${cruise.artists.length - 4} convidados`}
                  </div>
                </div>
              </div>

              {/* Card Body Details */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between bg-slate-50/50">
                <div className="space-y-3 text-xs text-slate-700">
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-200/80">
                    <Calendar className="w-4 h-4 text-[#002244] shrink-0" />
                    <span className="font-bold text-slate-900">{cruise.dates}</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-600">{cruise.nights} noites a bordo</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Ship className="w-4 h-4 text-[#0284c7] shrink-0" />
                    <span>Navio Oficial: <strong className="text-slate-900">{cruise.ship}</strong></span>
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Roteiro: <span className="text-slate-700 font-medium">{cruise.route}</span></span>
                  </div>

                  {/* Highlights */}
                  <div className="pt-2 border-t border-slate-200 space-y-1.5">
                    {cruise.highlights.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[12px] text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Strip with Direct WhatsApp CTA (No made-up prices) */}
                <div className="pt-4 border-t border-slate-200 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-500">Cabines e Pacotes:</span>
                    <span className="font-bold text-[#002244]">Consulte Disponibilidade</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectCruise(cruise)}
                      className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-[#002244] bg-white border border-slate-300 hover:bg-slate-100 transition-all flex items-center justify-center gap-1 shadow-sm"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#002244]" />
                      <span>Ver Navio</span>
                    </button>

                    <a
                      href={createWhatsAppUrl(`Olá! Gostaria de entrar em contato para consultar valores e cabines disponíveis para o ${cruise.title} (${cruise.dates}).`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-xl text-xs font-black text-[#002244] bg-amber-400 hover:bg-amber-300 transition-all flex items-center justify-center gap-1.5 shadow-md shadow-amber-400/20 whitespace-nowrap"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#002244]" />
                      <span>Entrar em Contato</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Assistance */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#002244] via-[#003366] to-[#002244] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-black text-amber-300">Quer saber qual o navio ideal para o seu grupo ou família?</h4>
            <p className="text-xs sm:text-sm text-slate-200">
              Nosso consultor analisa o perfil da sua viagem, apresenta a planta das cabines e tira todas as dúvidas no WhatsApp.
            </p>
          </div>
          <a
            href={createWhatsAppUrl('Olá! Gostaria de ajuda de um consultor para escolher o cruzeiro ideal na Temporada 2026/2027.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl font-black text-[#002244] bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-all text-sm whitespace-nowrap shrink-0 flex items-center gap-2 shadow-lg shadow-amber-400/20"
          >
            <MessageCircle className="w-4 h-4 text-[#002244]" />
            <span>Entrar em Contato no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
