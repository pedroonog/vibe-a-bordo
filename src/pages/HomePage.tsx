import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Ship,
  Music,
  MessageCircle,
  Eye,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Instagram,
  Mail,
  CheckCircle2,
  Flame,
  Award
} from 'lucide-react';
import {
  ALL_CRUISE_EVENTS,
  REAL_SHIP_PHOTOS,
  createWhatsAppUrl,
  WHATSAPP_PHONE_DISPLAY,
  CONTACT_EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  DOMAINS
} from '../data/cruises';
import { CruiseEvent } from '../types/cruise';

interface HomePageProps {
  onSelectEvent: (event: CruiseEvent) => void;
  onNavigateToShip: () => void;
  onNavigateToAbout: () => void;
  onNavigateToTemporada: () => void;
  onNavigateToContact: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectEvent,
  onNavigateToShip,
  onNavigateToAbout,
  onNavigateToTemporada,
  onNavigateToContact
}) => {
  // 1. Hero Carousel State (All 15 Events Banners)
  const carouselEvents = ALL_CRUISE_EVENTS;
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselPaused, setCarouselPaused] = useState(false);

  useEffect(() => {
    if (carouselPaused) return;
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselEvents.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [carouselPaused, carouselEvents.length]);

  const currentBanner = carouselEvents[carouselIndex];

  // 2. Event Offers Filter State
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const categories = [
    { id: 'all', label: 'Todos os 15 Cruzeiros' },
    { id: 'sertanejo', label: 'Sertanejo' },
    { id: 'samba', label: 'Samba & Pagode' },
    { id: 'rock', label: 'Rock' },
    { id: 'axe', label: 'Axé' },
    { id: 'romantico', label: 'Romântico & MPB' },
    { id: 'forro', label: 'Forró & Brasilidade' },
    { id: 'reveillon', label: 'Réveillon' },
    { id: 'familia', label: 'Família' },
    { id: 'desenvolvimento', label: 'Jornada Cristã' }
  ];

  const filteredEvents = ALL_CRUISE_EVENTS.filter((e) => {
    if (activeCategory === 'all') return true;
    return e.theme === activeCategory;
  });

  // 3. Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    cruiseInterest: '89 Rock Boat (26 a 29 de Novembro de 2026)',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 11) val = val.slice(0, 11);
    if (val.length > 6) {
      val = `(${val.slice(0, 2)}) ${val.slice(2, 7)}-${val.slice(7)}`;
    } else if (val.length > 2) {
      val = `(${val.slice(0, 2)}) ${val.slice(2)}`;
    } else if (val.length > 0) {
      val = `(${val}`;
    }
    setFormData((prev) => ({ ...prev, whatsapp: val }));
    if (formErrors.whatsapp) setFormErrors((prev) => ({ ...prev, whatsapp: '' }));
  };

  const validateForm = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'O campo Nome é obrigatório.';
    const rawPhone = formData.whatsapp.replace(/\D/g, '');
    if (!formData.whatsapp.trim()) {
      errs.whatsapp = 'O campo WhatsApp é obrigatório.';
    } else if (rawPhone.length < 10) {
      errs.whatsapp = 'Informe um número de WhatsApp válido com DDD.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'O campo E-mail é obrigatório.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Informe um endereço de e-mail válido.';
    }
    setFormErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-20 animate-in fade-in duration-300">
      {/* ========================================================
          1. CARROSSEL DE BANNERS (Com TODOS os 15 Banners Oficiais)
         ======================================================== */}
      <section
        className="relative bg-gradient-to-b from-[#001730] via-[#002244] to-[#001730] text-white pt-6 pb-12 overflow-hidden"
        onMouseEnter={() => setCarouselPaused(true)}
        onMouseLeave={() => setCarouselPaused(false)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Header Info Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-400 text-[#002244] shadow-md">
                <Flame className="w-3.5 h-3.5" />
                <span>Temporada 2026/2027</span>
              </span>
              <span className="text-xs text-amber-300 font-semibold hidden sm:inline-block">
                A bordo do imponente MSC Divina pela primeira vez no Brasil
              </span>
            </div>

            {/* Slide Counter */}
            <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
              <span className="text-amber-400">{carouselIndex + 1}</span>
              <span>/</span>
              <span>{carouselEvents.length} Cruzeiros Confirmados</span>
            </div>
          </div>

          {/* Main Panorama Banner Slide */}
          <div className="relative group rounded-3xl overflow-hidden border-2 border-amber-400/30 shadow-2xl bg-black">
            {/* Clickable Image Banner */}
            <div
              onClick={() => onSelectEvent(currentBanner)}
              className="cursor-pointer relative aspect-[16/7] sm:aspect-[21/9] md:aspect-[2.4/1] w-full overflow-hidden bg-slate-900"
            >
              <img
                src={currentBanner.posterImage}
                alt={currentBanner.title}
                className="w-full h-full object-cover sm:object-contain md:object-cover transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              {/* Top Banner Tag */}
              <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none">
                <span className="px-3.5 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider bg-amber-400 text-[#002244] shadow-lg">
                  {currentBanner.badge || currentBanner.status}
                </span>
                <span className="px-3 py-1.5 rounded-xl text-xs font-bold bg-black/60 backdrop-blur-md text-white border border-white/20">
                  {currentBanner.ship}
                </span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col md:flex-row md:items-end justify-between gap-4 pointer-events-none">
                <div className="space-y-1 max-w-2xl">
                  <span className="text-xs sm:text-sm font-bold text-amber-300 block">
                    {currentBanner.dates}
                  </span>
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight drop-shadow-md">
                    {currentBanner.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 drop-shadow">
                    {currentBanner.subtitle}
                  </p>
                </div>

                {/* Direct Action Buttons on Banner */}
                <div className="flex flex-wrap items-center gap-2.5 pointer-events-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectEvent(currentBanner);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-black text-[#002244] bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all shadow-lg"
                  >
                    <Eye className="w-4 h-4 text-[#002244]" />
                    <span>Ver Detalhes do Cruzeiro</span>
                  </button>

                  <a
                    href={createWhatsAppUrl(`Olá! Gostaria de consultar valores e cabines para o cruzeiro "${currentBanner.title}" (${currentBanner.dates}) na Vibe a Bordo.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-black text-white bg-emerald-600 hover:bg-emerald-500 active:scale-95 transition-all shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chamar no WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Next / Prev Controls */}
            <button
              onClick={() => setCarouselIndex((prev) => (prev - 1 + carouselEvents.length) % carouselEvents.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-amber-400 hover:text-[#002244] text-white border border-white/20 transition-all shadow-xl z-10"
              aria-label="Cruzeiro anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setCarouselIndex((prev) => (prev + 1) % carouselEvents.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-amber-400 hover:text-[#002244] text-white border border-white/20 transition-all shadow-xl z-10"
              aria-label="Próximo cruzeiro"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Quick Thumbnails / Navigation Strip of all 15 Banners */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-amber-400/30">
            {carouselEvents.map((evt, idx) => (
              <button
                key={evt.id}
                onClick={() => setCarouselIndex(idx)}
                className={`relative shrink-0 rounded-xl overflow-hidden border-2 transition-all p-0.5 ${
                  idx === carouselIndex
                    ? 'border-amber-400 ring-2 ring-amber-400/40 scale-105'
                    : 'border-white/20 opacity-60 hover:opacity-100'
                }`}
                title={evt.title}
              >
                <div className="w-24 sm:w-28 h-12 sm:h-14 bg-black rounded-lg overflow-hidden">
                  <img
                    src={evt.posterImage}
                    alt={evt.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black/20" />
                <span className="absolute bottom-1 left-1 right-1 text-[9px] font-bold text-white truncate text-center bg-black/60 rounded px-1">
                  {evt.title.split(' - ')[0].replace('Navio ', '')}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          2. GRADE COM A PROGRAMAÇÃO (Todas as 15 Ofertas e Eventos)
         ======================================================== */}
      <section id="programacao" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#0284c7] block">
              Grade Oficial · Temporada 2026/2027
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#002244] font-display">
              Todos os Cruzeiros Temáticos Confirmados
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Escolha seu cruzeiro temático favorito no MSC Divina, confira a programação completa e tire suas dúvidas no WhatsApp.
            </p>
          </div>

          <button
            onClick={onNavigateToTemporada}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#002244] hover:text-[#0284c7] transition-colors shrink-0"
          >
            <span>Ver em Ordem Cronológica</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-[#002244] text-amber-300 shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 15 Events Grid (Without departure port info) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredEvents.map((cruise) => (
            <div
              key={cruise.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Event Poster Card Header */}
              <div
                onClick={() => onSelectEvent(cruise)}
                className="relative aspect-[16/9] sm:aspect-[4/3] bg-slate-900 cursor-pointer overflow-hidden"
              >
                <img
                  src={cruise.posterImage}
                  alt={cruise.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Status Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-amber-400 text-[#002244] shadow-md">
                    {cruise.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-black/60 backdrop-blur-md text-white border border-white/20">
                    {cruise.monthLabel}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-xs text-amber-300 font-bold block">
                    {cruise.ship} · {cruise.nights} Noites
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-white font-display leading-tight truncate">
                    {cruise.title}
                  </h3>
                </div>
              </div>

              {/* Event Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                    <Calendar className="w-4 h-4 text-amber-600 shrink-0" />
                    <span className="font-bold text-[#002244]">{cruise.dates}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Ship className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="truncate">{cruise.ship} — Estreia no Brasil</span>
                  </div>

                  {/* Artists preview */}
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Music className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="truncate font-medium">{cruise.artists.join(' · ')}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onSelectEvent(cruise)}
                    className="w-full py-2.5 px-3 rounded-xl text-xs font-black text-[#002244] bg-slate-100 hover:bg-amber-400 transition-colors text-center"
                  >
                    Ver Detalhes
                  </button>

                  <a
                    href={createWhatsAppUrl(`Olá! Gostaria de consultar cabines e valores para o cruzeiro "${cruise.title}" (${cruise.dates}) na Vibe a Bordo.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl text-xs font-black text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          3. IMAGENS DO NAVIO (Showcase do MSC Divina)
         ======================================================== */}
      <section className="bg-white py-12 md:py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-black uppercase tracking-wider text-[#0284c7] block">
                Infraestrutura 5 Estrelas · MSC Divina
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002244] font-display">
                Conheça a Experiência a Bordo
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
                Mais de 333 metros de comprimento, 18 andares de lazer, piscinas oceânicas climatizadas, teatros suntuosos e alta gastronomia internacional inclusa.
              </p>
            </div>

            <button
              onClick={onNavigateToShip}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-black text-[#002244] bg-amber-400 hover:bg-amber-300 transition-all shadow-md shrink-0"
            >
              <Ship className="w-4 h-4 text-[#002244]" />
              <span>Ver Fotos e Vídeo Completo do Navio</span>
            </button>
          </div>

          {/* Grid of Ship Photos with exact titles and categories */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {REAL_SHIP_PHOTOS.slice(0, 8).map((item, idx) => (
              <div
                key={idx}
                onClick={onNavigateToShip}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 cursor-pointer border border-slate-200 shadow-md hover:shadow-xl transition-all"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] uppercase font-bold text-amber-300 block tracking-wide">
                    {item.category}
                  </span>
                  <span className="text-xs sm:text-sm font-black block truncate mt-0.5">
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. FORMULÁRIO DE CONTATO (Obrigatório: Nome, WhatsApp, E-mail)
         ======================================================== */}
      <section id="contato-home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info & Instagram */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-wider text-[#0284c7] block">
                Atendimento Personalizado Pré & Pós-Embarque
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002244] font-display">
                Fale com a Vibe a Bordo
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Tire todas as suas dúvidas sobre cabines, atrações e programação da Temporada 2026/2027 com a nossa equipe de consultores especializados.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-3">
              {/* WhatsApp Card */}
              <a
                href={createWhatsAppUrl('Olá! Gostaria de consultar valores e informações sobre os cruzeiros temáticos da Vibe a Bordo.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                    WhatsApp Oficial
                  </span>
                  <span className="text-base font-black text-[#002244] block">
                    {WHATSAPP_PHONE_DISPLAY}
                  </span>
                  <span className="text-xs text-emerald-700">Resposta ágil em horário comercial</span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 transition-colors group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[#002244] text-amber-400 flex items-center justify-center shrink-0 shadow-md">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    E-mail Oficial
                  </span>
                  <span className="text-base font-black text-[#002244] block truncate">
                    {CONTACT_EMAIL}
                  </span>
                  <span className="text-xs text-slate-500">Envio direto para nossa central</span>
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-pink-50 via-purple-50 to-amber-50 border border-pink-200 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Instagram className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold text-pink-700 uppercase tracking-wider block">
                    Instagram Oficial
                  </span>
                  <span className="text-base font-black text-[#002244] block">
                    {INSTAGRAM_HANDLE}
                  </span>
                  <span className="text-xs text-slate-600">Vídeos dos shows, fotos e novidades</span>
                </div>
              </a>
            </div>

            {/* Official Domains */}
            <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 space-y-1">
              <span className="text-xs font-bold text-slate-500 uppercase block">Portais Oficiais:</span>
              <div className="flex flex-wrap gap-2 text-xs font-bold text-[#002244]">
                {DOMAINS.map((dom) => (
                  <span key={dom} className="px-2.5 py-1 bg-white rounded-lg border border-slate-200">
                    {dom}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Mandatory Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-xl sm:text-2xl font-black text-[#002244] font-display">
                Solicite Atendimento para o seu Cruzeiro
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Preencha os campos abaixo para receber o contato da nossa equipe por e-mail e WhatsApp.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-black text-[#002244] font-display">
                  Mensagem Enviada com Sucesso!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Recebemos seus dados em <strong>{CONTACT_EMAIL}</strong>. Nossa equipe entrará em contato pelo seu WhatsApp <strong>{formData.whatsapp}</strong> o mais rápido possível!
                </p>
                <div className="pt-2">
                  <a
                    href={createWhatsAppUrl(`Olá! Sou ${formData.name}, acabei de preencher o formulário no site e gostaria de agilizar o atendimento sobre o ${formData.cruiseInterest}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-white bg-emerald-600 hover:bg-emerald-500 text-sm shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Agilizar Atendimento no WhatsApp Agora</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                {/* Field 1: Nome (Mandatory) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Nome Completo <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (formErrors.name) setFormErrors({ ...formErrors, name: '' });
                    }}
                    placeholder="Ex: Carlos Eduardo Silva"
                    className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none transition-all ${
                      formErrors.name
                        ? 'border-rose-500 bg-rose-50/30'
                        : 'border-slate-300 focus:border-[#002244] focus:ring-2 focus:ring-[#002244]/10'
                    }`}
                  />
                  {formErrors.name && (
                    <span className="text-xs text-rose-600 font-semibold block mt-1">
                      {formErrors.name}
                    </span>
                  )}
                </div>

                {/* Field 2 & 3: WhatsApp (Mandatory) & E-mail (Mandatory) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      WhatsApp com DDD <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={handlePhoneChange}
                      placeholder="(11) 99999-9999"
                      className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none transition-all ${
                        formErrors.whatsapp
                          ? 'border-rose-500 bg-rose-50/30'
                          : 'border-slate-300 focus:border-[#002244] focus:ring-2 focus:ring-[#002244]/10'
                      }`}
                    />
                    {formErrors.whatsapp && (
                      <span className="text-xs text-rose-600 font-semibold block mt-1">
                        {formErrors.whatsapp}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      E-mail <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (formErrors.email) setFormErrors({ ...formErrors, email: '' });
                      }}
                      placeholder="seuemail@exemplo.com"
                      className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none transition-all ${
                        formErrors.email
                          ? 'border-rose-500 bg-rose-50/30'
                          : 'border-slate-300 focus:border-[#002244] focus:ring-2 focus:ring-[#002244]/10'
                      }`}
                    />
                    {formErrors.email && (
                      <span className="text-xs text-rose-600 font-semibold block mt-1">
                        {formErrors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Field 4: Cruzeiro de Interesse */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Cruzeiro de Interesse
                  </label>
                  <select
                    value={formData.cruiseInterest}
                    onChange={(e) => setFormData({ ...formData, cruiseInterest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm border border-slate-300 focus:border-[#002244] focus:ring-2 focus:ring-[#002244]/10 focus:outline-none bg-white"
                  >
                    {ALL_CRUISE_EVENTS.map((c) => (
                      <option key={c.id} value={`${c.title} (${c.dates})`}>
                        {c.title} — {c.dates}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Field 5: Mensagem (Opcional) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Mensagem ou Dúvidas (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Conte se prefere cabine interna, externa ou com varanda, número de passageiros, etc."
                    className="w-full px-4 py-3 rounded-xl text-sm border border-slate-300 focus:border-[#002244] focus:ring-2 focus:ring-[#002244]/10 focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl font-black text-sm text-[#002244] bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all shadow-md shadow-amber-400/20 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Solicitação para contato@vibeabordo.com.br'}
                  </button>
                  <span className="text-[11px] text-slate-500 text-center block mt-2">
                    Todos os campos marcados com (*) são obrigatórios. Resposta rápida garantida.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
