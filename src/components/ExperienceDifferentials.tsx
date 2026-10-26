import React from 'react';
import { Utensils, Waves, ShieldCheck, HeartHandshake, Sparkles, Music4, MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '../data/cruises';

export const ExperienceDifferentials: React.FC = () => {
  const differentials = [
    {
      icon: <Music4 className="w-6 h-6 text-[#002244]" />,
      title: 'Shows 100% Inclusos',
      description: 'Todos os ingressos para os shows no convés da piscina e no majestoso teatro principal já fazem parte do pacote. Sem surpresas ou cobranças extras a bordo.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#002244]" />,
      title: 'Consultoria Pré e Pós-Embarque',
      description: 'Desde 2022, cuidamos de tudo: seleção de cabine, dicas de malas para as festas temáticas, documentação de embarque e suporte contínuo até o seu retorno.'
    },
    {
      icon: <Utensils className="w-6 h-6 text-[#002244]" />,
      title: 'Pensão Completa Gourmet',
      description: 'Café da manhã, almoço, chá da tarde, jantar requintado à la carte e estações de buffet livre abertas 24 horas por dia com receitas da culinária internacional.'
    },
    {
      icon: <Waves className="w-6 h-6 text-[#002244]" />,
      title: 'Lazer & Infraestrutura 5 Estrelas',
      description: 'Parques aquáticos, piscinas oceânicas, jacuzzis suspensas, quadras poliesportivas, discoteca de ponta e academia moderna com vista para a imensidão do mar.'
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#002244]" />,
      title: 'Atendimento Humanizado',
      description: 'Você não fala com robôs. Nossa equipe especializada no WhatsApp acompanha você de perto para proporcionar uma experiência tranquila e segura.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#002244]" />,
      title: 'Festas Temáticas Oficiais',
      description: 'Festa do Branco Oficial, Sunset Pool Parties, Noite à Fantasia e comemorações sob as estrelas que tornam cada segundo do cruzeiro inesquecível.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#f8fafc] border-t border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0284c7] px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>A Experiência Vibe a Bordo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002244] font-display tracking-tight">
            Tudo o Que Torna a Sua Viagem Extraordinária
          </h2>

          <p className="text-base text-slate-600">
            Do primeiro contato até o retorno para casa, cada detalhe é planejado para que você e sua família vivam momentos inesquecíveis.
          </p>
        </div>

        {/* Bento Grid with Maritime Vacation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((diff, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all space-y-3.5 group"
            >
              <div className="p-3.5 rounded-2xl bg-amber-400/20 text-[#002244] w-fit group-hover:bg-amber-400 transition-colors">
                {diff.icon}
              </div>
              <h3 className="text-xl font-black text-[#002244] font-display">
                {diff.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {diff.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="mt-14 text-center">
          <a
            href={createWhatsAppUrl('Olá! Gostaria de falar com um consultor sobre as vantagens e pacotes de cruzeiros temáticos da Vibe a Bordo.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-black text-[#002244] bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 transition-all text-sm shadow-xl shadow-amber-400/20 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-[#002244]" />
            <span>Entrar em Contato com um Especialista no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
