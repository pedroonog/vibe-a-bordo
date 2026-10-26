import React, { useState } from 'react';
import {
  ArrowLeft,
  Calendar,
  Ship,
  MapPin,
  Music,
  Check,
  MessageCircle,
  Play,
  Share2,
  BedDouble,
  ShieldCheck,
  Sparkles,
  Info,
  Maximize2,
  X
} from 'lucide-react';
import { CruiseEvent } from '../types/cruise';
import { REAL_CABINS, createWhatsAppUrl, CONTACT_EMAIL, WHATSAPP_PHONE_DISPLAY } from '../data/cruises';

interface EventDetailPageProps {
  event: CruiseEvent;
  onBack: () => void;
}

export const EventDetailPage: React.FC<EventDetailPageProps> = ({ event, onBack }) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Form state
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMsg, setFormMsg] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [k: string]: string }>({});

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    setFormPhone(value);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: { [k: string]: string } = {};
    if (!formName.trim()) errs.name = 'Nome é obrigatório.';
    if (!formPhone.trim()) errs.phone = 'WhatsApp é obrigatório.';
    if (!formEmail.trim() || !formEmail.includes('@')) errs.email = 'E-mail válido é obrigatório.';

    if (Object.keys(errs).length > 0) {
      setFormErrors(errs);
      return;
    }

    setFormSubmitted(true);
  };

  const handleDirectWhatsApp = () => {
    const text = `Olá! Estou na página do evento "${event.title}" (${event.dates}) na Vibe a Bordo e gostaria de entrar em contato para consultar valores e cabines disponíveis.`;
    window.open(createWhatsAppUrl(text), '_blank');
  };

  const handleCabinWhatsApp = (cabinName: string) => {
    const text = `Olá! Gostaria de consultar valores e disponibilidade para a "${cabinName}" no cruzeiro "${event.title}" (${event.dates}).`;
    window.open(createWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="bg-[#f0f6fc] min-h-screen pb-20 animate-in fade-in duration-300">
      {/* Top Breadcrumb Navigation */}
      <div className="bg-[#001730] border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-300 hover:text-amber-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para Todas as Ofertas de Cruzeiros</span>
          </button>

          <span className="hidden sm:inline-block text-xs text-slate-300">
            Temporada {event.season} · {event.monthLabel}
          </span>
        </div>
      </div>

      {/* Event Hero Showcase */}
      <section className="bg-gradient-to-b from-[#002244] via-[#003366] to-[#001730] text-white py-12 md:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Main Event Poster / Banner */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-lg rounded-3xl overflow-hidden border-2 border-amber-400 shadow-2xl bg-black">
                <img
                  src={event.posterImage}
                  alt={event.title}
                  className="w-full h-auto object-cover max-h-[500px]"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full text-xs font-black bg-amber-400 text-[#002244] shadow-md uppercase">
                    {event.badge || event.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Event Information & Conversion CTA */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-300 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Página Oficial do Evento · Vibe a Bordo</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight leading-tight">
                {event.title}
              </h1>

              <p className="text-base sm:text-lg text-amber-200 font-semibold leading-relaxed">
                {event.subtitle}
              </p>

              {/* Event Metadata Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 text-[11px] block">Data do Embarque:</span>
                    <strong className="text-white">{event.dates}</strong> ({event.nights} noites)
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Ship className="w-5 h-5 text-sky-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 text-[11px] block">Transatlântico:</span>
                    <strong className="text-white">{event.ship}</strong> (Estreia no Brasil)
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 text-[11px] block">Programação:</span>
                    <strong className="text-white">Shows & Festas 100% Inclusos</strong>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Music className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <strong className="text-white text-xs sm:text-sm block">{event.route}</strong>
                  </div>
                </div>
              </div>

              {/* Confirmed Lineup */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block flex items-center gap-1.5">
                  <Music className="w-4 h-4 text-amber-400" />
                  <span>Line-Up de Atrações & Shows Confirmados:</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {event.artists.map((artist, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs sm:text-sm font-semibold text-white shadow-sm"
                    >
                      {artist}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct WhatsApp Call to Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={handleDirectWhatsApp}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-black text-[#002244] bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 transition-all text-base shadow-xl shadow-amber-400/25 active:scale-95 whitespace-nowrap"
                >
                  <MessageCircle className="w-5 h-5 text-[#002244]" />
                  <span>Entrar em Contato no WhatsApp (+55 11 97864-7543)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20 space-y-12">
        {/* Descrição Oficial do Evento */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <span className="text-xs font-black uppercase tracking-wider text-[#0284c7] block">
              Sobre a Experiência
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#002244] font-display mt-0.5">
              {event.title}
            </h2>
          </div>
          <div className="text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line font-medium">
            {event.description}
          </div>
        </div>

        {/* Real Event Video Player (if available) - Responsive for Vertical & Horizontal */}
        {event.videos.length > 0 && (
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0284c7]">
                  <Play className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>Vídeo Oficial do Evento</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#002244] font-display mt-0.5">
                  Sinta a Energia a Bordo do {event.title}
                </h3>
              </div>

              {/* Video Selector Tabs if more than 1 video */}
              {event.videos.length > 1 && (
                <div className="flex items-center gap-2">
                  {event.videos.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveVideoIndex(idx)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        activeVideoIndex === idx
                          ? 'bg-[#002244] text-amber-300'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      Vídeo {idx + 1}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Video Player */}
            <div className="relative rounded-2xl overflow-hidden bg-black mx-auto shadow-2xl flex items-center justify-center max-w-sm sm:max-w-md md:max-w-xl max-h-[580px]">
              <video
                key={event.videos[activeVideoIndex]}
                controls
                playsInline
                preload="metadata"
                className="w-full h-auto max-h-[580px] object-contain rounded-2xl"
                poster={event.posterImage}
              >
                <source src={event.videos[activeVideoIndex]} type="video/mp4" />
                Seu navegador não suporta a reprodução deste vídeo.
              </video>
            </div>
          </div>
        )}

        {/* Real Event Photo Gallery (Clean Grid without Title Headers) */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl">
          {/* Photos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {event.galleryImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setLightboxImage(img)}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm cursor-pointer group hover:shadow-lg transition-all"
              >
                <img
                  src={img}
                  alt={`${event.title} foto ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-2.5 rounded-full bg-white/90 text-[#002244] shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inclusions & Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* What is Included */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl space-y-4">
            <h3 className="text-lg font-black text-[#002244] uppercase tracking-wider flex items-center gap-2 font-display">
              <Check className="w-5 h-5 text-emerald-600" />
              <span>O Que Está Incluso no Seu Pacote:</span>
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              {event.includedItems.map((inc, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Highlights of the cruise */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl space-y-4">
            <h3 className="text-lg font-black text-[#002244] uppercase tracking-wider flex items-center gap-2 font-display">
              <ShieldCheck className="w-5 h-5 text-amber-500" />
              <span>Destaques da Experiência:</span>
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              {event.highlights.map((high, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    •
                  </span>
                  <span>{high}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Real Cabins Showcase with CABINES directory photos */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl space-y-6">
          <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0284c7]">
                <BedDouble className="w-4 h-4 text-amber-500" />
                <span>Acomodações do Navio</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#002244] font-display mt-0.5">
                Opções de Cabines para o {event.title}
              </h3>
            </div>
            <span className="text-xs text-slate-500">
              Fotos reais das cabines do transatlântico
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REAL_CABINS.map((cabin, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50/60 flex flex-col justify-between hover:shadow-lg transition-all"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  <img
                    src={cabin.image}
                    alt={cabin.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#002244] text-amber-300">
                    {cabin.type}
                  </div>
                </div>

                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#002244]">{cabin.name}</h4>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                      {cabin.description}
                    </p>
                    <div className="mt-2.5 space-y-1">
                      {cabin.features.slice(0, 2).map((feat, fidx) => (
                        <div key={fidx} className="text-[11px] text-slate-500 flex items-center gap-1">
                          <span className="text-amber-500 font-bold">•</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleCabinWhatsApp(cabin.name)}
                    className="w-full py-2.5 px-3 rounded-xl text-xs font-black text-[#002244] bg-amber-400 hover:bg-amber-300 transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#002244]" />
                    <span>Consultar no WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Event Contact & Booking Form */}
        <div className="rounded-3xl border border-amber-400/40 bg-gradient-to-r from-[#002244] via-[#003366] to-[#002244] text-white p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-black uppercase tracking-wider text-amber-300 block">
                Garanta Sua Cabine no {event.title}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                Fale com o Consultor Oficial Deste Navio
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed">
                As cabines para os cruzeiros temáticos da <strong>Temporada 2026/2027</strong> têm lotação limitada. Preencha seus dados para receber o orçamento e mapa de cabines no e-mail e WhatsApp.
              </p>
              <div className="pt-2 text-xs text-amber-300 space-y-1">
                <p>• Atendimento imediato no WhatsApp: <strong>{WHATSAPP_PHONE_DISPLAY}</strong></p>
                <p>• E-mail oficial: <strong>{CONTACT_EMAIL}</strong></p>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white text-slate-900 p-6 sm:p-8 rounded-2xl shadow-xl">
              {formSubmitted ? (
                <div className="text-center py-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-xl font-bold">
                    ✓
                  </div>
                  <h4 className="text-lg font-black text-[#002244]">Solicitação Enviada com Sucesso!</h4>
                  <p className="text-xs text-slate-600">
                    Nossa equipe responderá em minutos para o e-mail <strong>{formEmail}</strong> e WhatsApp <strong>{formPhone}</strong> com os valores atualizados do <strong>{event.title}</strong>.
                  </p>
                  <button
                    onClick={handleDirectWhatsApp}
                    className="mt-3 px-6 py-2.5 rounded-xl font-black text-[#002244] bg-amber-400 hover:bg-amber-300 text-xs shadow-md"
                  >
                    Abrir Conversa Agora no WhatsApp
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3.5">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">
                      Nome Completo <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="Seu nome"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#002244]"
                    />
                    {formErrors.name && <span className="text-[11px] text-rose-600 block">{formErrors.name}</span>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 block">
                        WhatsApp com DDD <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formPhone}
                        onChange={handlePhoneChange}
                        placeholder="(11) 97864-7543"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#002244]"
                      />
                      {formErrors.phone && <span className="text-[11px] text-rose-600 block">{formErrors.phone}</span>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 block">
                        E-mail <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="email"
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="seuemail@exemplo.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#002244]"
                      />
                      {formErrors.email && <span className="text-[11px] text-rose-600 block">{formErrors.email}</span>}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">
                      Observações / Quantidade de Pessoas (Opcional)
                    </label>
                    <textarea
                      rows={2}
                      value={formMsg}
                      onChange={(e) => setFormMsg(e.target.value)}
                      placeholder="Ex: Gostaria de saber disponibilidade de cabine com varanda..."
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#002244] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl font-black text-[#002244] bg-amber-400 hover:bg-amber-300 transition-all text-xs uppercase tracking-wider shadow-md"
                  >
                    Solicitar Cotação do {event.title}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Photo Zoom */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightboxImage}
            alt="Foto ampliada"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};
