import React from 'react';
import { Compass, Users, HeartHandshake, ShieldCheck, Instagram, MessageCircle, Anchor } from 'lucide-react';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, OFFICIAL_LOGO_URL, createWhatsAppUrl } from '../data/cruises';

export const AboutSection: React.FC = () => {
  return (
    <section id="quem-somos" className="py-16 md:py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Human Story & Exact About Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0284c7] px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200">
              <Anchor className="w-4 h-4 text-amber-500" />
              <span>Nossa Essência · Desde 2022</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002244] font-display tracking-tight">
              Quem somos
            </h2>

            {/* Exact provided text with elegant typography */}
            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p className="text-[#002244] font-bold text-lg sm:text-xl">
                Desde 2022, transformamos viagens em alto-mar em experiências extraordinárias, conectando pessoas, música e momentos que ficam para sempre na memória.
              </p>

              <p>
                Somos uma agência especializada em cruzeiros temáticos, apaixonada por proporcionar muito mais do que uma viagem: criamos oportunidades para amigos e famílias viverem juntos experiências únicas, ao lado de grandes artistas e atrações de alto nível, em cenários que tornam cada momento inesquecível.
              </p>

              <p>
                Nosso compromisso começa muito antes do embarque e continua mesmo depois que a viagem termina. Oferecemos um atendimento próximo, atencioso e personalizado no pré e pós-embarque, cuidando de cada detalhe para que nossos passageiros tenham tranquilidade, segurança e confiança em todas as etapas da jornada.
              </p>

              <p>
                Acreditamos que as melhores viagens são aquelas que vão além do destino. São histórias compartilhadas, encontros especiais, shows inesquecíveis e memórias que continuam vivas muito depois de desembarcar.
              </p>
            </div>

            {/* Manifesto Quote Box */}
            <div className="pt-2">
              <div className="p-6 rounded-3xl bg-gradient-to-r from-[#002244] to-[#003865] text-white shadow-xl">
                <p className="text-base sm:text-lg font-bold text-amber-300 italic font-display">
                  &ldquo;Mais do que embarcar pessoas, conectamos sonhos a experiências extraordinárias.&rdquo;
                </p>
              </div>
            </div>

            {/* Action Buttons: WhatsApp & Instagram */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={createWhatsAppUrl('Olá! Li o Quem Somos da Vibe a Bordo e gostaria de entrar em contato para planejar meu cruzeiro.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-black text-[#002244] bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-all text-sm shadow-md shadow-amber-400/20"
              >
                <MessageCircle className="w-4 h-4 text-[#002244]" />
                <span>Entrar em Contato no WhatsApp</span>
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-800 bg-slate-100 border border-slate-300 hover:bg-slate-200 hover:border-pink-500/40 transition-all text-sm"
              >
                <Instagram className="w-4 h-4 text-pink-600" />
                <span>Seguir {INSTAGRAM_HANDLE}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Logo Badge & Agency Pillars */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 flex items-center gap-5 shadow-sm">
              <img
                src={OFFICIAL_LOGO_URL}
                alt="Logo Vibe a Bordo"
                className="w-20 h-20 rounded-full object-cover border-2 border-amber-400 shadow-md shrink-0"
              />
              <div>
                <h3 className="text-lg font-black text-[#002244] font-display">Vibe a Bordo</h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  Fundada em 2022 · Agência oficial de turismo marítimo e cruzeiros temáticos.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-2.5 shadow-sm">
              <div className="p-3 rounded-2xl bg-amber-400/20 text-[#002244] w-fit">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#002244]">Especialistas em Cruzeiros Temáticos</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Foco exclusivo em viagens musicais em alto-mar. Orientamos sobre a melhor cabine, os melhores decks e os horários das principais atrações.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-2.5 shadow-sm">
              <div className="p-3 rounded-2xl bg-amber-400/20 text-[#002244] w-fit">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#002244]">Cuidado no Pré e Pós-Embarque</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Do planejamento de roupas para as noites temáticas ao suporte no dia do embarque e retorno, nossa equipe acompanha você passo a passo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
