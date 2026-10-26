import React from 'react';
import { Compass, Users, HeartHandshake, ShieldCheck, Instagram, MessageCircle, Play, Ship } from 'lucide-react';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, OFFICIAL_LOGO_URL, createWhatsAppUrl } from '../data/cruises';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#f0f6fc] min-h-screen py-12 md:py-16 animate-in fade-in duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Breadcrumb Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#002244] via-[#003366] to-[#001730] text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-300 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30">
              <Compass className="w-4 h-4 text-amber-400" />
              <span>Nossa Essência · Desde 2022</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight">
              Sobre Nós
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Conheça a história e o compromisso da Vibe a Bordo, agência especializada em transformar viagens em alto-mar em momentos inesquecíveis.
            </p>
          </div>
        </div>

        {/* Main Content Grid: Story + Official Video of the Ship */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Exact Text provided by user */}
          <div className="lg:col-span-7 space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-lg">
            <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
              <img
                src={OFFICIAL_LOGO_URL}
                alt="Logo Vibe a Bordo"
                className="w-16 h-16 rounded-full object-cover border-2 border-amber-400 shadow-md"
              />
              <div>
                <h2 className="text-2xl font-black text-[#002244] font-display">Quem somos</h2>
                <span className="text-xs text-slate-500 font-semibold">Vibe a Bordo · Turismo Marítimo</span>
              </div>
            </div>

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
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#002244] to-[#003865] text-white shadow-md">
                <p className="text-base sm:text-lg font-bold text-amber-300 italic font-display">
                  &ldquo;Mais do que embarcar pessoas, conectamos sonhos a experiências extraordinárias.&rdquo;
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={createWhatsAppUrl('Olá! Li o Sobre Nós da Vibe a Bordo e gostaria de atendimento para planejar meu cruzeiro.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-black text-[#002244] bg-amber-400 hover:bg-amber-300 transition-all text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-[#002244]" />
                <span>Conversar no WhatsApp (+55 11 97864-7543)</span>
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-800 bg-slate-100 border border-slate-300 hover:bg-slate-200 text-sm transition-all"
              >
                <Instagram className="w-4 h-4 text-pink-600" />
                <span>Seguir {INSTAGRAM_HANDLE}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Real Ship Video + Trust Pillars */}
          <div className="lg:col-span-5 space-y-6">
            {/* Real Ship Video Player */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0284c7]">
                  <Play className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>Vídeo do Navio Oficial</span>
                </div>
                <span className="text-[11px] text-slate-500 font-bold">MSC Cruzeiros</span>
              </div>

              <div className="relative rounded-2xl overflow-hidden bg-black aspect-video shadow-md">
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

              <p className="text-xs text-slate-600 leading-relaxed text-center">
                Confira a grandeza dos transatlânticos onde realizamos os cruzeiros temáticos da Vibe a Bordo.
              </p>
            </div>

            {/* Trust Pillars */}
            <div className="space-y-4">
              <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-2 shadow-sm">
                <div className="p-3 rounded-2xl bg-amber-400/20 text-[#002244] w-fit">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-[#002244]">Especialização em Cruzeiros Musicais</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Conhecemos a planta dos navios, os melhores decks para ouvir os shows e os segredos para curtir ao máximo.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-2 shadow-sm">
                <div className="p-3 rounded-2xl bg-amber-400/20 text-[#002244] w-fit">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-[#002244]">Suporte no Pré e Pós-Embarque</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Cuidamos da emissão dos vouchers, orientações de bagagem e festas temáticas, com consultor no WhatsApp até o retorno.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-2 shadow-sm">
                <div className="p-3 rounded-2xl bg-amber-400/20 text-[#002244] w-fit">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-[#002244]">Segurança & Confiança</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Canais oficiais, contratos transparentes e parcerias consolidadas para você se preocupar apenas em viver a experiência.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
