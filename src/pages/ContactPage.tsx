import React, { useState } from 'react';
import { Mail, Phone, User, MessageCircle, Send, CheckCircle2, AlertCircle, Instagram, Globe, Clock, Shield } from 'lucide-react';
import { CONTACT_EMAIL, WHATSAPP_PHONE_DISPLAY, INSTAGRAM_HANDLE, INSTAGRAM_URL, DOMAINS, ALL_CRUISE_EVENTS, createWhatsAppUrl } from '../data/cruises';
import { ContactFormData } from '../types/cruise';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    whatsapp: '',
    email: '',
    cruiseInterest: 'WS On Board (12 a 15 de Novembro de 2026)',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    setFormData((prev) => ({ ...prev, whatsapp: value }));
    if (errors.whatsapp) setErrors((prev) => ({ ...prev, whatsapp: '' }));
  };

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'O campo Nome é obrigatório.';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Por favor, informe seu nome completo.';
    }

    const rawPhone = formData.whatsapp.replace(/\D/g, '');
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'O campo WhatsApp é obrigatório.';
    } else if (rawPhone.length < 10) {
      newErrors.whatsapp = 'Por favor, informe um WhatsApp válido com DDD.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'O campo E-mail é obrigatório.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Por favor, informe um endereço de e-mail válido.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppForward = () => {
    const text = `Olá! Meu nome é ${formData.name}. Gostaria de atendimento sobre o cruzeiro "${formData.cruiseInterest}". Meu e-mail é ${formData.email}. Mensagem: ${formData.message || 'Gostaria de ver cabines disponíveis e valores.'}`;
    window.open(createWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="bg-[#f0f6fc] min-h-screen py-12 md:py-16 animate-in fade-in duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#002244] via-[#003366] to-[#001730] text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-300 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30">
              <MessageCircle className="w-4 h-4 text-amber-400" />
              <span>Canais de Atendimento Oficial</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight">
              Fale Conosco
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Estamos prontos para atender você com toda a atenção e exclusividade que a sua viagem em alto-mar merece.
            </p>
          </div>
        </div>

        {/* Content Grid: Contact Information Cards + Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Info (WhatsApp, Email, Instagram, Horários) */}
          <div className="lg:col-span-5 space-y-5">
            {/* WhatsApp Card */}
            <a
              href={createWhatsAppUrl('Olá! Estou na página de contato da Vibe a Bordo e gostaria de atendimento.')}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all flex items-start gap-4 group"
            >
              <div className="p-3.5 rounded-2xl bg-amber-400/20 text-[#002244] group-hover:bg-amber-400 transition-colors shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">
                  WhatsApp Oficial & Reservas
                </span>
                <span className="text-xl font-black text-[#002244] group-hover:text-amber-600 transition-colors font-display block">
                  {WHATSAPP_PHONE_DISPLAY}
                </span>
                <span className="text-xs text-slate-500 block">
                  Atendimento ágil para cotações e dúvidas
                </span>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-[#0284c7] hover:shadow-xl transition-all flex items-start gap-4 group"
            >
              <div className="p-3.5 rounded-2xl bg-sky-100 text-[#0284c7] group-hover:bg-[#0284c7] group-hover:text-white transition-colors shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">
                  E-mail Oficial
                </span>
                <span className="text-lg font-bold text-[#002244] group-hover:text-[#0284c7] transition-colors block">
                  {CONTACT_EMAIL}
                </span>
                <span className="text-xs text-slate-500 block">
                  Envio de vouchers e documentação
                </span>
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-pink-500 hover:shadow-xl transition-all flex items-start gap-4 group"
            >
              <div className="p-3.5 rounded-2xl bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors shrink-0">
                <Instagram className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">
                  Perfil no Instagram
                </span>
                <span className="text-lg font-bold text-[#002244] group-hover:text-pink-600 transition-colors block">
                  {INSTAGRAM_HANDLE}
                </span>
                <span className="text-xs text-slate-500 block">
                  Vídeos, bastidores e novidades dos cruzeiros
                </span>
              </div>
            </a>

            {/* Business Hours */}
            <div className="p-6 rounded-3xl bg-[#002244] text-white space-y-3 shadow-lg">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                <Clock className="w-4 h-4" />
                <span>Horários de Atendimento VIP</span>
              </div>
              <div className="text-xs text-slate-200 space-y-1">
                <p><strong>Segunda a Sexta:</strong> 09h às 20h</p>
                <p><strong>Sábados e Domingos:</strong> Plantão de suporte a reservas e embarques</p>
              </div>
              <div className="pt-2 border-t border-white/10 text-[11px] text-slate-300">
                <span>Domínios Oficiais: </span>
                <span className="font-mono text-amber-300 font-bold">{DOMAINS.join(' · ')}</span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl">
              {submitted ? (
                <div className="text-center py-8 space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-black text-[#002244] font-display">
                    Mensagem Enviada com Sucesso!
                  </h3>

                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Obrigado, <strong className="text-slate-900">{formData.name}</strong>! Recebemos sua mensagem para o e-mail <strong className="text-[#002244]">{CONTACT_EMAIL}</strong> e responderemos com as opções disponíveis para o <strong className="text-slate-900">{formData.cruiseInterest}</strong>.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleWhatsAppForward}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-black text-[#002244] bg-amber-400 hover:bg-amber-300 transition-all text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-400/25"
                    >
                      <MessageCircle className="w-5 h-5 text-[#002244]" />
                      <span>Falar Agora no WhatsApp ({WHATSAPP_PHONE_DISPLAY})</span>
                    </button>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-5 py-3.5 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200"
                    >
                      Enviar Outra Mensagem
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-200 pb-4">
                    <h3 className="text-2xl font-black text-[#002244] font-display">
                      Formulário de Contato & Cotação
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Campos com * são de preenchimento obrigatório para retorno do consultor.
                    </p>
                  </div>

                  {/* Nome Completo */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Nome Completo <span className="text-rose-600">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="Ex: Amanda Ferreira"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.name
                            ? 'border-rose-500 focus:ring-rose-500/30'
                            : 'border-slate-300 focus:border-[#002244] focus:ring-[#002244]/20'
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-xs text-rose-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* WhatsApp e E-mail */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* WhatsApp */}
                    <div className="space-y-1.5">
                      <label htmlFor="whatsapp" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        WhatsApp com DDD <span className="text-rose-600">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          id="whatsapp"
                          type="tel"
                          value={formData.whatsapp}
                          onChange={handlePhoneChange}
                          placeholder="(11) 97864-7543"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                            errors.whatsapp
                              ? 'border-rose-500 focus:ring-rose-500/30'
                              : 'border-slate-300 focus:border-[#002244] focus:ring-[#002244]/20'
                          }`}
                        />
                      </div>
                      {errors.whatsapp && (
                        <p className="text-xs text-rose-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.whatsapp}</span>
                        </p>
                      )}
                    </div>

                    {/* E-mail */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        E-mail de Contato <span className="text-rose-600">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: '' });
                          }}
                          placeholder="seuemail@exemplo.com.br"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                            errors.email
                              ? 'border-rose-500 focus:ring-rose-500/30'
                              : 'border-slate-300 focus:border-[#002244] focus:ring-[#002244]/20'
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-xs text-rose-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Navio de Interesse */}
                  <div className="space-y-1.5">
                    <label htmlFor="cruiseInterest" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Cruzeiro de Interesse (Temporada 2026/2027)
                    </label>
                    <select
                      id="cruiseInterest"
                      value={formData.cruiseInterest}
                      onChange={(e) => setFormData({ ...formData, cruiseInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#002244] focus:ring-2 focus:ring-[#002244]/20"
                    >
                      {ALL_CRUISE_EVENTS.map((cruise) => (
                        <option key={cruise.id} value={`${cruise.title} (${cruise.dates})`}>
                          {cruise.dates} — {cruise.title} ({cruise.ship})
                        </option>
                      ))}
                      <option value="Outro Cruzeiro ou Dúvida Geral">
                        Outro Cruzeiro ou Informações Gerais
                      </option>
                    </select>
                  </div>

                  {/* Mensagem Opcional */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Mensagem / Quantidade de Pessoas (Opcional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ex: Gostaria de saber valores para cabine com varanda para 2 pessoas..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#002244] focus:ring-2 focus:ring-[#002244]/20 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-xl font-black text-[#002244] bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 transition-all text-base flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20 active:scale-[0.99] disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Enviando dados...</span>
                      ) : (
                        <>
                          <Send className="w-5 h-5 text-[#002244]" />
                          <span>Enviar Solicitação para contato@vibeabordo.com.br</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-slate-500 pt-1">
                    Ao enviar, você receberá atendimento oficial no e-mail e WhatsApp da equipe Vibe a Bordo.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
