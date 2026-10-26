import React, { useState } from 'react';
import { Ship, Waves, Music, Utensils, Sparkles, MessageCircle, Maximize2, X, Play, Check } from 'lucide-react';
import { REAL_SHIP_PHOTOS, REAL_CABINS, createWhatsAppUrl } from '../data/cruises';
import { ShipPhotoInfo } from '../types/cruise';

export const ConhecaONavioPage: React.FC = () => {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <div className="bg-[#f0f6fc] min-h-screen py-12 md:py-16 animate-in fade-in duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Hero Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#002244] via-[#003366] to-[#001730] text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-300 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30">
              <Ship className="w-4 h-4 text-amber-400" />
              <span>Transatlânticos 5 Estrelas · MSC Cruzeiros</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight">
              Conheça o Navio
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Descubra a grandiosa infraestrutura que faz dos nossos cruzeiros temáticos verdadeiros resorts marítimos flutuantes com o que há de melhor em entretenimento, alta gastronomia e conforto.
            </p>
          </div>
        </div>

        {/* Video & Presentation Text Section (Inspired by PromoAção / MSC) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl">
          {/* Left: Presentation Text */}
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-black uppercase tracking-wider text-[#0284c7] block">
              Um Mundo de Lazer & Sofisticação
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#002244] font-display">
              Mais de 333 Metros de Puro Luxo em Alto-Mar
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Nossos cruzeiros temáticos são realizados a bordo dos mais espetaculares transatlânticos do mundo. São verdadeiras cidades flutuantes preparadas para acolher mais de 4.000 passageiros com o máximo de conforto, segurança e estilo.
            </p>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Desfrute de múltiplos conveses ao ar livre, piscinas oceânicas climatizadas, jacuzzis suspensas com vista infinita, cassino no estilo Las Vegas, teatro suntuoso de três andares com tecnologia acústica internacional, e mais de 10 restaurantes e bares temáticos abertos 24 horas por dia.
            </p>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xl font-black text-[#002244] font-display block">+333 Metros</span>
                <span className="text-xs text-slate-500 font-medium">De Comprimento</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xl font-black text-[#002244] font-display block">18 Andares</span>
                <span className="text-xs text-slate-500 font-medium">De Lazer e Atrações</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xl font-black text-[#002244] font-display block">+4.000 Pessoas</span>
                <span className="text-xs text-slate-500 font-medium">Capacidade Hóspedes</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xl font-black text-[#002244] font-display block">100% Inclusos</span>
                <span className="text-xs text-slate-500 font-medium">Shows e Refeições</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={createWhatsAppUrl('Olá! Gostaria de tirar dúvidas sobre a infraestrutura do navio com a Vibe a Bordo.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-black text-[#002244] bg-amber-400 hover:bg-amber-300 transition-all text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-[#002244]" />
                <span>Tirar Dúvidas sobre o Navio no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right: Official Ship Video Player */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden bg-black aspect-video shadow-2xl border border-slate-200">
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                poster="/assets/ship/piscinas-jacuzzis.JPG"
              >
                <source src="/assets/ship/msc-divina-tour.mp4" type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
              </video>
            </div>
          </div>
        </div>

        {/* Real Ship Areas Photo Gallery - Ambientes */}
        <div className="space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-black uppercase tracking-wider text-[#0284c7] block">
              MSC Divina · Estrutura Completa
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#002244] font-display mt-0.5">
              Ambientes
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Clique em qualquer imagem para ampliar em tela cheia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REAL_SHIP_PHOTOS.map((area, idx) => (
              <div
                key={idx}
                className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-lg hover:shadow-2xl transition-all flex flex-col group"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-[#002244] text-amber-300">
                    {area.category}
                  </div>
                  <div className="absolute bottom-3 right-3 p-2 rounded-full bg-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-black text-[#002244] font-display group-hover:text-[#0284c7] transition-colors">
                      {area.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                      {area.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 font-semibold">
                      MSC Divina Oficial
                    </span>
                    <a
                      href={createWhatsAppUrl(`Olá! Vi a área "${area.name}" no site da Vibe a Bordo e gostaria de saber mais informações.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#002244] hover:text-[#0284c7]"
                    >
                      Consultar no WhatsApp →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real Cabins Showcase - Conheça nossas cabines */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#0284c7] block">
                Acomodações & Conforto
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#002244] font-display mt-0.5">
                Conheça nossas cabines
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Todas as cabines contam com banheiro privativo, TV, ar-condicionado e camareiro diário.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REAL_CABINS.map((cabin, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 flex flex-col justify-between hover:shadow-lg transition-all"
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
                    <h5 className="text-sm font-bold text-[#002244]">{cabin.name}</h5>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                      {cabin.description}
                    </p>
                  </div>

                  <a
                    href={createWhatsAppUrl(`Olá! Gostaria de consultar valores e disponibilidade para a "${cabin.name}" nos cruzeiros da Temporada 2026/2027.`)}
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
    </div>
  );
};
