import React, { useState } from 'react';
import {
  Calendar,
  Ship,
  Music,
  MessageCircle,
  Eye,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Users
} from 'lucide-react';
import { ALL_CRUISE_EVENTS, createWhatsAppUrl } from '../data/cruises';
import { CruiseEvent } from '../types/cruise';

interface TemporadaPageProps {
  onSelectEvent: (event: CruiseEvent) => void;
}

export const TemporadaPage: React.FC<TemporadaPageProps> = ({ onSelectEvent }) => {
  const [selectedMonth, setSelectedMonth] = useState<string>('all');

  const months = [
    { id: 'all', label: 'Todos os Meses (15 Cruzeiros)' },
    { id: 'Novembro / 2026', label: 'Novembro / 2026' },
    { id: 'Dezembro / 2026', label: 'Dezembro / 2026' },
    { id: 'Réveillon 2026/2027', label: 'Réveillon 2026/2027' },
    { id: 'Janeiro / 2027', label: 'Janeiro / 2027' }
  ];

  const filteredCruises = ALL_CRUISE_EVENTS.filter((cruise) => {
    if (selectedMonth === 'all') return true;
    return cruise.monthLabel === selectedMonth;
  });

  return (
    <div className="bg-[#f0f6fc] min-h-screen py-12 md:py-16 animate-in fade-in duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Hero Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#002244] via-[#003366] to-[#001730] text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-300 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Calendário Oficial · Em Ordem Cronológica</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight">
              Temporada 2026/2027
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Confira a programação completa de cruzeiros temáticos a bordo do transatlântico MSC Divina organizados rigorosamente por data. Clique em qualquer evento para ver fotos, vídeos e detalhes exclusivos das cabines.
            </p>
          </div>
        </div>

        {/* Month Filter Tabs (Segmented Control) */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {months.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedMonth(m.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                selectedMonth === m.id
                  ? 'bg-[#002244] text-amber-300 shadow-md shadow-[#002244]/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 shadow-sm'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* Chronological List of Events */}
        <div className="space-y-6">
          {filteredCruises.map((cruise) => (
            <div
              key={cruise.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-4 sm:p-6 group hover:-translate-y-0.5"
            >
              {/* Event Banner Column */}
              <div
                onClick={() => onSelectEvent(cruise)}
                className="md:col-span-5 lg:col-span-4 aspect-[16/9] sm:aspect-[2.1/1] md:aspect-[16/9] rounded-2xl overflow-hidden bg-slate-900 relative cursor-pointer shadow-md"
              >
                <img
                  src={cruise.posterImage}
                  alt={cruise.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400 text-[#002244] shadow-md">
                    {cruise.badge}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] font-bold text-amber-300 block">
                    {cruise.monthLabel}
                  </span>
                </div>
              </div>

              {/* Event Info Details Column */}
              <div className="md:col-span-7 lg:col-span-5 space-y-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
                    <span className="text-amber-600 font-bold">{cruise.ship}</span>
                    <span>·</span>
                    <span>{cruise.nights} Noites a Bordo</span>
                    <span>·</span>
                    <span className="text-emerald-700 font-bold">{cruise.status}</span>
                  </div>

                  <h2
                    onClick={() => onSelectEvent(cruise)}
                    className="text-2xl sm:text-3xl font-black text-[#002244] font-display hover:text-[#0284c7] transition-colors cursor-pointer"
                  >
                    {cruise.title}
                  </h2>

                  <p className="text-xs sm:text-sm font-semibold text-[#0284c7]">
                    {cruise.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {cruise.description}
                </p>

                {/* Key specs (without departure port) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <Calendar className="w-4 h-4 text-amber-600 shrink-0" />
                    <span className="font-bold text-[#002244] truncate">{cruise.dates}</span>
                  </div>

                  <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <Ship className="w-4 h-4 text-sky-500 shrink-0" />
                    <span className="truncate">{cruise.ship} · Estreia no Brasil</span>
                  </div>
                </div>

                {/* Artists list */}
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Music className="w-4 h-4 text-amber-500 shrink-0" />
                  <span className="font-semibold text-slate-800 truncate">
                    Atrações: {cruise.artists.join(', ')}
                  </span>
                </div>
              </div>

              {/* Action Buttons Column */}
              <div className="md:col-span-12 lg:col-span-3 flex lg:flex-col gap-3 justify-center border-t lg:border-t-0 lg:border-l border-slate-100 pt-4 lg:pt-0 lg:pl-6">
                <button
                  onClick={() => onSelectEvent(cruise)}
                  className="flex-1 lg:w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-black text-[#002244] bg-amber-400 hover:bg-amber-300 transition-colors shadow-md text-center flex items-center justify-center gap-1.5"
                >
                  <Eye className="w-4 h-4" />
                  <span>Ver Página do Cruzeiro</span>
                </button>

                <a
                  href={createWhatsAppUrl(`Olá! Gostaria de consultar valores e disponibilidade para o cruzeiro "${cruise.title}" (${cruise.dates}) na Temporada 2026/2027.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 lg:w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-sm text-center flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chamar no WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Banner */}
        <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-lg text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-600 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200">
            <ShieldCheck className="w-4 h-4" />
            <span>Consultoria VIP Vibe a Bordo</span>
          </div>

          <h3 className="text-2xl font-black text-[#002244] font-display">
            Precisa de Ajuda para Escolher sua Cabine?
          </h3>

          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            Nossa equipe de consultores marítimos atende você no WhatsApp (+55 11 97864-7543) com mapa do navio em tempo real, melhores localizações de cabine e suporte completo no pré e pós-embarque.
          </p>

          <div className="pt-2">
            <a
              href={createWhatsAppUrl('Olá! Gostaria de tirar dúvidas com um consultor da Vibe a Bordo sobre a Temporada 2026/2027.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-black text-[#002244] bg-amber-400 hover:bg-amber-300 shadow-lg text-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#002244]" />
              <span>Falar com Consultor no WhatsApp (+55 11 97864-7543)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
