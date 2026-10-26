import React, { useState } from 'react';
import { Ship, Waves, Music, Utensils, BedDouble, Sparkles, MessageCircle, Maximize2, X } from 'lucide-react';
import { REAL_SHIP_PHOTOS, REAL_CABINS, createWhatsAppUrl } from '../data/cruises';
import { ShipPhotoInfo } from '../types/cruise';

export const ConhecaONavio: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<ShipPhotoInfo>(REAL_SHIP_PHOTOS[0]);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <section id="conheca-o-navio" className="py-16 md:py-24 bg-[#001730] text-white relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-amber-300 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30">
            <Ship className="w-4 h-4 text-amber-400" />
            <span>Infraestrutura dos Transatlânticos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight">
            Conheça o Navio
          </h2>

          <p className="text-base text-slate-300">
            Os maiores e mais modernos transatlânticos do planeta a serviço da sua diversão. Veja as fotos reais das áreas de lazer, teatro, restaurantes e cabines.
          </p>
        </div>

        {/* Real Ship Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REAL_SHIP_PHOTOS.map((area, idx) => (
            <div
              key={idx}
              className="rounded-3xl overflow-hidden border border-white/15 bg-[#001f3f] shadow-xl hover:border-amber-400/50 hover:shadow-2xl transition-all duration-300 flex flex-col group"
            >
              <div
                onClick={() => setLightboxImg(area.image)}
                className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 cursor-pointer"
              >
                <img
                  src={area.image}
                  alt={area.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-black/60 text-amber-300 border border-white/20 backdrop-blur-md">
                  {area.category}
                </div>
                <div className="absolute bottom-3 right-3 p-2 rounded-full bg-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-black text-white font-display group-hover:text-amber-300 transition-colors">
                    {area.name}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-amber-400 font-semibold">
                    MSC Cruzeiros Oficial
                  </span>
                  <a
                    href={createWhatsAppUrl(`Olá! Vi as fotos do navio no site da Vibe a Bordo e gostaria de saber mais sobre a infraestrutura da área "${area.name}".`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-amber-300 hover:text-amber-200 flex items-center gap-1"
                  >
                    <span>Tirar Dúvida</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Real Cabins Row */}
        <div className="rounded-3xl border border-white/15 bg-[#001f3f] p-6 sm:p-10 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Acomodações a Bordo
              </span>
              <h3 className="text-2xl font-black text-white font-display mt-0.5">
                Fotos Reais das Cabines
              </h3>
            </div>
            <p className="text-xs text-slate-300">
              Cabines com varanda privativa, vista mar, internas e suítes de luxo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REAL_CABINS.map((cabin, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden border border-white/15 bg-black/40 flex flex-col justify-between"
              >
                <div
                  onClick={() => setLightboxImg(cabin.image)}
                  className="relative aspect-[4/3] w-full overflow-hidden cursor-pointer group"
                >
                  <img
                    src={cabin.image}
                    alt={cabin.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-amber-400 text-[#002244]">
                    {cabin.type.toUpperCase()}
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <div>
                    <h5 className="text-sm font-bold text-white">{cabin.name}</h5>
                    <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                      {cabin.description}
                    </p>
                  </div>

                  <a
                    href={createWhatsAppUrl(`Olá! Gostaria de consultar disponibilidade para a "${cabin.name}" nos cruzeiros da Temporada 2026/2027.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-xl text-xs font-black text-[#002244] bg-amber-400 hover:bg-amber-300 transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#002244]" />
                    <span>Consultar Cabine</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ship Super Specs Bar */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
            <span className="text-3xl font-black text-amber-400 font-display block">+333m</span>
            <span className="text-xs text-slate-300 font-medium">De Comprimento Náutico</span>
          </div>
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
            <span className="text-3xl font-black text-amber-400 font-display block">18 Decks</span>
            <span className="text-xs text-slate-300 font-medium">Andares de Lazer e Espetáculos</span>
          </div>
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
            <span className="text-3xl font-black text-amber-400 font-display block">+4.000</span>
            <span className="text-xs text-slate-300 font-medium">Hóspedes em Alto-Mar</span>
          </div>
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
            <span className="text-3xl font-black text-amber-400 font-display block">100% Inclusos</span>
            <span className="text-xs text-slate-300 font-medium">Shows, Festas e Refeições</span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightboxImg}
            alt="Foto ampliada do navio"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};
