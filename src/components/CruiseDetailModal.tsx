import React, { useState } from 'react';
import { X, Calendar, Ship, MapPin, Music, Check, MessageCircle, BedDouble, ShieldCheck, Compass } from 'lucide-react';
import { CruiseEvent, CabinPhotoInfo } from '../types/cruise';
import { REAL_CABINS, createWhatsAppUrl } from '../data/cruises';

interface CruiseDetailModalProps {
  cruise: CruiseEvent | null;
  onClose: () => void;
}

export const CruiseDetailModal: React.FC<CruiseDetailModalProps> = ({ cruise, onClose }) => {
  const [selectedCabin, setSelectedCabin] = useState<CabinPhotoInfo>(REAL_CABINS[0]);

  if (!cruise) return null;

  const currentCabin = selectedCabin;

  const handleWhatsAppBooking = () => {
    const text = `Olá! Gostaria de entrar em contato para consultar valores e disponibilidade para a cabine "${currentCabin.name}" no cruzeiro "${cruise.title}" (${cruise.dates}). Poderia me atender?`;
    window.open(createWhatsAppUrl(text), '_blank');
  };


  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#001730] border-2 border-amber-400/30 rounded-3xl shadow-2xl overflow-hidden my-8 text-white">
        {/* Modal Header (Deep Navy) */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-r from-[#002244] via-[#003366] to-[#001f3f] border-b border-white/10">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-black text-[#002244] uppercase tracking-widest px-3 py-0.5 rounded-full bg-amber-400">
              Temporada {cruise.season}
            </span>
            <span className="text-xs font-bold text-amber-300 uppercase px-3 py-0.5 rounded-full bg-white/10 border border-white/20">
              {cruise.status}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-display">
            {cruise.title}
          </h2>
          <p className="text-sm text-amber-300 mt-1 font-semibold">{cruise.subtitle}</p>

          {/* Quick info bar */}
          <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>{cruise.dates} ({cruise.nights} noites)</span>
            </div>
            <div className="flex items-center gap-2">
              <Ship className="w-4 h-4 text-sky-400" />
              <span>Navio: {cruise.ship}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>{cruise.route}</span>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[65vh] overflow-y-auto">
          {/* About this cruise */}
          <div>
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Compass className="w-4 h-4 text-amber-400" />
              <span>Sobre Esta Viagem</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {cruise.description}
            </p>
          </div>

          {/* Confirmed Artists */}
          <div>
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Music className="w-4 h-4 text-amber-400" />
              <span>Line-Up Oficial de Atrações</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {cruise.artists.map((artist, i) => (
                <div
                  key={i}
                  className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/15 text-xs sm:text-sm font-semibold text-slate-100 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>{artist}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions & Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
              <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                <Check className="w-4 h-4 text-amber-400" />
                <span>O Que Está Incluso no Pacote:</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {cruise.includedItems.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold mt-0.5">✓</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
              <h4 className="text-xs font-bold text-sky-300 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>Destaques da Experiência a Bordo:</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {cruise.highlights.map((high, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-sky-400 font-bold mt-0.5">•</span>
                    <span>{high}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cabins Selection (No fake pricing, focus on experience & capacity) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <BedDouble className="w-4 h-4 text-amber-400" />
                <span>Categorias de Cabine para Selecionar</span>
              </h3>
              <span className="text-xs text-slate-400">Clique para selecionar</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {REAL_CABINS.map((cabin: CabinPhotoInfo, idx: number) => {
                const isSelected = currentCabin.name === cabin.name;
                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedCabin(cabin)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-400/10 border-amber-400 ring-2 ring-amber-400/30'
                        : 'bg-white/[0.02] border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-bold text-white">{cabin.name}</h4>
                      <span className="text-xs font-bold text-amber-300">
                        Consulte Vagas
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                      {cabin.description}
                    </p>

                    <div className="mt-3 pt-2 border-t border-white/10 flex flex-wrap gap-1.5 text-[11px] text-slate-400">
                      {cabin.features.map((feat: string, fidx: number) => (
                        <span key={fidx} className="px-2 py-0.5 rounded bg-black/40 border border-white/5">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Bottom Action Strip with Direct WhatsApp CTA */}
        <div className="p-6 bg-[#001224] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-slate-400 block">Cabine Escolhida:</span>
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="text-amber-300">{currentCabin.name}</span>
            </h4>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-3 rounded-xl text-xs font-bold text-slate-300 hover:text-white bg-white/10 hover:bg-white/15"
            >
              Fechar
            </button>

            <button
              onClick={handleWhatsAppBooking}
              className="flex-1 sm:flex-none px-6 py-3.5 rounded-xl font-black text-[#002244] bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-all text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-400/25 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-[#002244]" />
              <span>Entrar em Contato no WhatsApp (+55 11 97864-7543)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
