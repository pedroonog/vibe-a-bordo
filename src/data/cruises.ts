import { CruiseEvent, CabinPhotoInfo, ShipPhotoInfo } from '../types/cruise';

export const OFFICIAL_LOGO_URL = '/Logo-site.png';
export const WHATSAPP_PHONE_DISPLAY = '+55 11 97864-7543';
export const WHATSAPP_PHONE_RAW = '5511978647543';
export const CONTACT_EMAIL = 'contato@vibeabordo.com.br';
export const INSTAGRAM_HANDLE = '@vibeabordo_cruzeiros';
export const INSTAGRAM_URL = 'https://www.instagram.com/vibeabordo_cruzeiros?exln=MXgybTZnbTR1eWw2ag==';
export const DOMAINS = ['www.vibeabordo.com.br', 'www.vibeabordo.online'];

export function createWhatsAppUrl(message?: string): string {
  const defaultMsg = 'Olá! Estou no site da Vibe a Bordo e gostaria de entrar em contato para consultar valores e disponibilidade para os cruzeiros temáticos.';
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${WHATSAPP_PHONE_RAW}?text=${text}`;
}

// 15 Real Events from User's media archive, strictly ordered chronologically by departure date
export const ALL_CRUISE_EVENTS: CruiseEvent[] = [
  {
    id: 'rota-do-proposito',
    title: 'Rota do Propósito',
    subtitle: 'Uma jornada de fé, transformação e reencontro em alto-mar',
    headliner: 'Isadora Pompeo & Líderes Espirituais',
    theme: 'desenvolvimento',
    ship: 'MSC Divina',
    dates: '17 a 20 de Novembro de 2026',
    startDate: '2026-11-17',
    monthLabel: 'Novembro / 2026',
    season: '2026/2027',
    nights: 3,
    route: 'Navegação Exclusiva em Alto-Mar',
    badge: 'Jornada de Fé',
    status: 'Vendas Abertas',
    description: `Uma jornada de fé, transformação e reencontro

Você acorda. Corre. Resolve. Repete.

Dias viram semanas. Semanas viram anos. E no meio de tudo que você construiu, uma pergunta insiste em voltar: para onde eu estou indo?

Deus nunca deixou de nos chamar. A voz dele não ficou mais fraca. A nossa vida é que se tornou barulhenta demais. A fé, o propósito e o caminho continuam ali. Mas para ouvir, você precisa parar.

Para reencontrar, você precisa se calar.

Nasce a Rota do Propósito.

A primeira jornada cristã de transformação em alto-mar do Brasil. Uma experiência para a família toda. Três dias na imensidão do oceano. Sem o ruído. Sem a pressa. Só o horizonte, a fé e a presença Dele.

Uma travessia de verdade

A bordo de um transatlântico, a experiência que une música, adoração, líderes espirituais, desenvolvimento pessoal e comunhão numa jornada que não é apenas física — é espiritual.

Cada momento foi pensado como parte de um único caminho: da escuta ao despertar, da reflexão à renovação, da fé ao reencontro.

De 17 a 20 de novembro uma jornada para você se reencontrar com tudo o que realmente importa!

Um novo momento nos espera.

Uma jornada de fé, transformação e reencontro.`,
    highlights: [
      'Primeira jornada cristã e de desenvolvimento espiritual em alto-mar',
      'Momentos de adoração, comunhão e palestras com grandes líderes',
      'A bordo do MSC Divina, estreando no Brasil com sofisticação internacional',
      'Pensão completa com buffet livre 24 horas e alta gastronomia'
    ],
    includedItems: [
      'Acomodação na categoria de cabine escolhida',
      'Pensão completa: café, almoço, jantar e buffet aberto 24h',
      'Acesso a todas as palestras, cultos, momentos de louvor e adoração',
      'Lazer completo no MSC Divina: piscinas, jacuzzis, academia e solarium',
      'Consultoria personalizada pré e pós-embarque com a equipe Vibe a Bordo'
    ],
    folderName: 'Rota_Do_Propósito_',
    posterImage: '/assets/aistudio/banner-rota-do-proposito_a332a6b4.jpg',
    galleryImages: [
      '/assets/aistudio/banner-rota-do-proposito_a332a6b4.jpg',
      '/assets/cruises/Rota_Do_Propósito_/IMG_0758.JPG',
      '/assets/cruises/Rota_Do_Propósito_/IMG_0759.JPG',
      '/assets/cruises/Rota_Do_Propósito_/IMG_0760.JPG',
      '/assets/cruises/Rota_Do_Propósito_/IMG_0761.JPG',
      '/assets/cruises/Rota_Do_Propósito_/IMG_0762.JPG',
      '/assets/cruises/Rota_Do_Propósito_/IMG_0763.JPG',
      '/assets/cruises/Rota_Do_Propósito_/IMG_0764.JPG'
    ],
    videos: [
      '/assets/cruises/Rota_Do_Propósito_/-3077395046294726279.mp4'
    ],
    artists: [
      'Isadora Pompeo',
      'Thalles Roberto',
      'Morada',
      'Cláudio Duarte',
      'Tiago Brunet',
      'Julliany Souza',
      'Anderson Freire',
      'Isaías Saad',
      'Junior Rostirola',
      'Três Palavrinhas',
      'Samuel Eleotério',
      'Tardizinha Gospel',
      'Epiphany Movement'
    ]
  },
  {
    id: 'vumbora-pro-mar',
    title: 'Navio Vumbora Pro Mar',
    subtitle: 'A Energia da Avenida em Alto-Mar com Bell Marques',
    headliner: 'Bell Marques',
    theme: 'axe',
    ship: 'MSC Divina',
    dates: '20 a 23 de Novembro de 2026',
    startDate: '2026-11-20',
    monthLabel: 'Novembro / 2026',
    season: '2026/2027',
    nights: 3,
    route: 'Navegação Festiva em Alto-Mar',
    badge: 'Axé & Micareta',
    status: 'Últimas Vagas',
    description: `A Energia da Avenida em Alto-Mar
O nosso Vumbora está de volta.

De 20 a 23 de novembro de 2026, o Vumbora Pro Mar retorna para você viver dias incríveis em alto-mar, a bordo do MSC Divina, um dos transatlânticos mais imponentes do mundo, pela primeira vez navegando no Brasil.

É a energia que nasce na avenida encontrando o oceano.
Sol, mar, gente feliz e Bell Marques no comando da experiência, conduzindo cada momento com alegria, intensidade e aquela vibração que só ele sabe entregar.

Uma viagem única, com clima de verão, celebração e uma atmosfera que só o Vumbora Pro Mar tem.

Vumbora Pro Mar 2026.

A energia da avenida em alto-mar.`,
    highlights: [
      'Shows consagrados de Bell Marques e grandes estrelas do axé',
      'O clima eletrizante da micareta de Salvador dentro do transatlântico',
      'Pool parties ao pôr do sol e festas temáticas exclusivas',
      'MSC Divina pela primeira vez no Brasil'
    ],
    includedItems: [
      'Cabine na categoria selecionada',
      'Todas as refeições inclusas no buffet 24h e restaurantes principais',
      'Ingresso livre para todos os shows e apresentações de axé a bordo',
      'Participação em todas as festas temáticas da programação oficial',
      'Suporte VIP e atendimento dedicado no pré e pós-embarque Vibe a Bordo'
    ],
    folderName: 'VUMBORA_Pro_mar',
    posterImage: '/assets/aistudio/banner-vumbora_bb3e21f4.jpg',
    galleryImages: [
      '/assets/aistudio/banner-vumbora_bb3e21f4.jpg',
      '/assets/cruises/VUMBORA_Pro_mar/IMG_0834.JPG',
      '/assets/cruises/VUMBORA_Pro_mar/IMG_0835.JPG',
      '/assets/cruises/VUMBORA_Pro_mar/IMG_0836.JPG',
      '/assets/cruises/VUMBORA_Pro_mar/IMG_0837.JPG',
      '/assets/cruises/VUMBORA_Pro_mar/IMG_0838.JPG'
    ],
    videos: [
      '/assets/cruises/VUMBORA_Pro_mar/-6010065099307309195.mp4'
    ],
    artists: [
      'Bell Marques',
      'Durval Lelys',
      'Xand Avião',
      'Timbalada',
      'Xanddy Harmonia',
      'É o Tchan!',
      'Rafa & Pipo Marques',
      'Nata do Samba'
    ]
  },
  {
    id: 'navio-cabare',
    title: 'Navio Cabaré',
    subtitle: 'Modão em Alto-Mar com Leonardo e Grandes Estrelas',
    headliner: 'Leonardo',
    theme: 'sertanejo',
    ship: 'MSC Divina',
    dates: '23 a 26 de Novembro de 2026',
    startDate: '2026-11-23',
    monthLabel: 'Novembro / 2026',
    season: '2026/2027',
    nights: 3,
    route: 'Navegação Sertaneja em Alto-Mar',
    badge: '5ª Edição Histórica',
    status: 'Vendas Abertas',
    description: `Modão em Alto-mar
De 23 a 26 de novembro de 2026, prepare-se para 4 dias de cachaça e muito modão a bordo do MSC Divina, o palco da 5ª edição do nosso Cabaré, a farra vai ser das grandes!
Tem Cabaré em alto-mar! E você vai ver de perto vistas espetaculares de tirar o fôlego, a bordo de um transatlântico de luxo, com o que há de melhor na vida, Restaurantes premiados, bares e lounges, parque aquático, boliche, piscinas e muito mais!

Então é hora de você confirmar sua presença no maior cabaré do mundo em alto-mar, Nosso Rei do Sertanejo está esperando você a bordo!`,
    highlights: [
      'Show consagrado do Rei Leonardo e convidados consagrados',
      'Muito modão raiz, clássicos sertanejos e pagonejo exclusivo',
      '5ª edição histórica do maior Cabaré do mundo em alto-mar',
      'Parque aquático, piscinas, alta gastronomia e boliche a bordo'
    ],
    includedItems: [
      'Acomodação completa na categoria de cabine reservada',
      'Pensão completa: café, almoço, jantar e lanches 24h inclusos',
      'Acesso total aos shows do palco principal sem nenhum custo extra',
      'Assessoria completa e atendimento humanizado Vibe a Bordo'
    ],
    folderName: 'CABARÉ_-_Leonardo_',
    posterImage: '/assets/aistudio/banner-navio-cabare_3b4fbfbc.jpg',
    galleryImages: [
      '/assets/aistudio/banner-navio-cabare_3b4fbfbc.jpg',
      '/assets/cruises/CABARÉ_-_Leonardo_/IMG_0818.JPG',
      '/assets/cruises/CABARÉ_-_Leonardo_/IMG_0819.JPG',
      '/assets/cruises/CABARÉ_-_Leonardo_/IMG_0820.JPG',
      '/assets/cruises/CABARÉ_-_Leonardo_/IMG_0821.JPG',
      '/assets/cruises/CABARÉ_-_Leonardo_/IMG_0822.JPG',
      '/assets/cruises/CABARÉ_-_Leonardo_/IMG_0823.JPG'
    ],
    videos: [
      '/assets/cruises/CABARÉ_-_Leonardo_/-1480072044800266050.mp4'
    ],
    artists: [
      'Leonardo',
      'Amado Batista',
      'Natanzinho Lima',
      'Maiara & Maraisa',
      'Alexandre Pires (Pagonejo Bão)',
      'César Menotti & Fabiano',
      'Limão com Mel'
    ]
  },
  {
    id: '89-rock-boat',
    title: '89 Rock Boat',
    subtitle: 'Edição 40 Anos · O Maior Festival de Rock’n’Roll em Alto-Mar do Mundo',
    headliner: 'O Legado da Rádio Rock',
    theme: 'rock',
    ship: 'MSC Divina',
    dates: '26 a 29 de Novembro de 2026',
    startDate: '2026-11-26',
    monthLabel: 'Novembro / 2026',
    season: '2026/2027',
    nights: 3,
    route: 'Navegação Rocker em Alto-Mar',
    badge: '40 Anos Rádio Rock',
    status: 'Últimas Vagas',
    description: `Agora, chegou a hora de viver o capítulo mais grandioso. 89 Rock Boat – Edição 40 anos.
De 26 a 29 de novembro de 2026, o legado da Rádio Rock navega pela primeira vez no imponente MSC Divina, que estreia no Brasil em uma jornada histórica.

Serão 72 horas intensas de Rock’n’Roll, liberdade, atitude e experiências que só um festival em alto-mar pode oferecer.

Prepare-se para viver música, energia e emoção sem parar, show incríveis de Biquíni Cavadão, Capital Inicial, CPM 22, Di Ferrero, Jota Quest, Nando Reis, Raimundos, Os Paralamas do Sucesso, Detonautas, Blitz, Maneva, Samuel Rosa, Lobão e muito mais!

O Maior Festival de Rock’n’Roll em Alto-Mar do Mundo!

72 horas de Rock’n’Roll sem parar.

Prepare-se para viver três dias intensos de música, atitude e liberdade.
Shows, encontros, festas, experiências temáticas e a energia que só a comunidade rocker consegue criar.

O legado da Rádio Rock em alto-mar
Uma edição construída especialmente para homenagear as quatro décadas da rádio que mudou o som e o espírito do Brasil.

A bordo do MSC Divina – pela primeira vez no Brasil

E ai, Partiu?`,
    highlights: [
      '72 horas de rock nacional ininterrupto no deck da piscina e teatros',
      'Line-up histórico: Biquíni, Capital Inicial, CPM 22, Nando Reis, Raimundos, Paralamas, Detonautas e mais',
      'Edição comemorativa oficial de 40 anos da 89 FM A Rádio Rock',
      'MSC Divina em sua estreia histórica na costa brasileira'
    ],
    includedItems: [
      'Cabine na categoria selecionada',
      'Pensão completa com todas as refeições e buffet livre 24 horas',
      'Ingresso para todas as apresentações dos maiores nomes do rock nacional',
      'Encontros exclusivos, festas temáticas e atmosfera rocker a bordo',
      'Suporte completo pré e pós-embarque da Vibe a Bordo'
    ],
    folderName: '89_ROCK',
    posterImage: '/assets/aistudio/banner-89rock-boat_44c7c76c.jpg',
    galleryImages: [
      '/assets/aistudio/banner-89rock-boat_44c7c76c.jpg',
      '/assets/cruises/89_ROCK/IMG_0863.JPG',
      '/assets/cruises/89_ROCK/IMG_0864.JPG',
      '/assets/cruises/89_ROCK/IMG_0865.JPG',
      '/assets/cruises/89_ROCK/IMG_0866.JPG',
      '/assets/cruises/89_ROCK/IMG_0867.JPG'
    ],
    videos: [
      '/assets/cruises/89_ROCK/-5341297593895475253.mp4'
    ],
    artists: [
      'Biquíni Cavadão',
      'Capital Inicial',
      'CPM 22',
      'Di Ferrero',
      'Jota Quest',
      'Nando Reis',
      'Raimundos',
      'Os Paralamas do Sucesso',
      'Detonautas',
      'Blitz',
      'Maneva',
      'Samuel Rosa',
      'Lobão'
    ]
  },
  {
    id: 'navio-chx',
    title: 'Navio CH&X',
    subtitle: 'Chitãozinho & Xororó · Uma História de Sucesso no Oceano',
    headliner: 'Chitãozinho & Xororó',
    theme: 'sertanejo',
    ship: 'MSC Divina',
    dates: '03 a 06 de Dezembro de 2026',
    startDate: '2026-12-03',
    monthLabel: 'Dezembro / 2026',
    season: '2026/2027',
    nights: 3,
    route: 'Navegação Especial em Alto-Mar',
    badge: 'Lendas Sertanejas',
    status: 'Vendas Abertas',
    description: `Prepare-se para embarcar em uma história de sucesso!

De 03 a 06 de dezembro de 2026, os ícones do sertanejo Chitãozinho & Xororó convidam você para uma jornada única no Navio Ch&X.

Serão dias incríveis a bordo do luxuoso MSC Divina, pela primeira vez no brasil, com muita diversão, música sertaneja e momentos inesquecíveis em alto-mar.

Em breve, revelaremos outros grandes artistas que confirmaram presença nessa experiência com a maior dupla sertaneja de todos os tempos!

Então confirme sua presença neste paraíso sob as aguas e vem fazer parte desta história contada pelas maiores vozes do Brasil!

Confirme sua presença e viva uma experiência única, onde a música e os corações se encontram mar adentro!`,
    highlights: [
      'A maior dupla sertaneja de todos os tempos em alto-mar',
      'Shows históricos com Roupa Nova, Almir Sater, Alexandre Pires, Victor & Leo e mais',
      'Momentos emocionantes cantando os maiores clássicos da música brasileira',
      'Infraestrutura 5 estrelas do MSC Divina com sofisticação total'
    ],
    includedItems: [
      'Acomodação na categoria de cabine selecionada',
      'Pensão completa: café, almoço, jantar e lanches 24 horas',
      'Acesso garantido a todos os concertos de Chitãozinho & Xororó e convidados',
      'Atendimento e assessoria exclusiva pré e pós-embarque da Vibe a Bordo'
    ],
    folderName: 'CHITÃOZINHO_E_XORORO',
    posterImage: '/assets/aistudio/banner-navio-chx_2938b404.jpg',
    galleryImages: [
      '/assets/aistudio/banner-navio-chx_2938b404.jpg',
      '/assets/cruises/CHITÃOZINHO_E_XORORO/IMG_0849.JPG',
      '/assets/cruises/CHITÃOZINHO_E_XORORO/IMG_0850.JPG',
      '/assets/cruises/CHITÃOZINHO_E_XORORO/IMG_0851.JPG',
      '/assets/cruises/CHITÃOZINHO_E_XORORO/IMG_0852.JPG',
      '/assets/cruises/CHITÃOZINHO_E_XORORO/IMG_0853.JPG'
    ],
    videos: [
      '/assets/cruises/CHITÃOZINHO_E_XORORO/-6483582570088924042.mp4'
    ],
    artists: [
      'Chitãozinho & Xororó',
      'Roupa Nova',
      'Almir Sater',
      'Alexandre Pires',
      'Victor & Leo',
      'João Bosco & Vinícius',
      'Rionegro & Solimões'
    ]
  },
  {
    id: 'navio-roberto-carlos',
    title: 'Navio Roberto Carlos',
    subtitle: 'Pela Primeira Vez no Imponente MSC Divina',
    headliner: 'Roberto Carlos',
    theme: 'romantico',
    ship: 'MSC Divina',
    dates: '06 a 09 de Dezembro de 2026',
    startDate: '2026-12-06',
    monthLabel: 'Dezembro / 2026',
    season: '2026/2027',
    nights: 3,
    route: 'Navegação Clássica em Alto-Mar',
    badge: 'O Rei em Alto-Mar',
    status: 'Últimas Vagas',
    description: `Pela primeira vez no MSC Divina

A celebração da chegada do maior ícone da música brasileira ao mar.

Entre os dias 06 e 09 de dezembro de 2026, o MSC Divina vai se transformar no: Navio Roberto Carlos.

Reconhecido como uma das maiores figuras da música mundial, Roberto Carlos construiu uma trajetória sólida e atemporal, marcada por canções que atravessam gerações e seguem emocionando públicos de todas as idades.

Agora, Roberto Carlos se apresentará no cruzeiro temático que é referência global no segmento com entretenimento, conforto e curadoria artística de primeiro nível.

O cenário dessa experiência será o MSC Divina, um dos navios mais elegantes da frota da MSC Cruzeiros.

Conhecido por sua arquitetura refinada, ambientes amplos e infraestrutura de alto padrão, o navio oferece uma jornada que combina lazer, gastronomia e entretenimento em grande escala e estará em sua primeira temporada no Brasil.`,
    highlights: [
      'O Rei Roberto Carlos cantando suas canções atemporais em alto-mar',
      'Pela primeira vez no luxuoso MSC Divina com teatros e átrio de cristais Swarovski',
      'Jantares de gala requintados e alta gastronomia internacional inclusa',
      'Ambiente exclusivo, sofisticado e inesquecível para todas as famílias'
    ],
    includedItems: [
      'Acomodação de alto padrão na cabine escolhida',
      'Pensão completa gourmet e buffet aberto 24 horas',
      'Assento garantido nos espetáculos inesquecíveis do Rei Roberto Carlos',
      'Consultoria VIP personalizada e suporte pré e pós-embarque Vibe a Bordo'
    ],
    folderName: 'Roberto_Carlos_',
    posterImage: '/assets/aistudio/banner-navio-roberto-carlos_30f9c1e5.jpg',
    galleryImages: [
      '/assets/aistudio/banner-navio-roberto-carlos_30f9c1e5.jpg',
      '/assets/cruises/Roberto_Carlos_/IMG_0782.JPG',
      '/assets/cruises/Roberto_Carlos_/IMG_0783.JPG',
      '/assets/cruises/Roberto_Carlos_/IMG_0784.JPG',
      '/assets/cruises/Roberto_Carlos_/IMG_0785.JPG',
      '/assets/cruises/Roberto_Carlos_/IMG_0786.JPG',
      '/assets/cruises/Roberto_Carlos_/IMG_0787.JPG'
    ],
    videos: [
      '/assets/cruises/Roberto_Carlos_/-4816654203714589255.mp4'
    ],
    artists: [
      'Roberto Carlos',
      'Orquestra Sinfônica & Convidados Especiais'
    ]
  },
  {
    id: 'embaixador-em-alto-mar',
    title: 'Embaixador em Alto-Mar',
    subtitle: 'Gusttavo Lima · Uma Experiência Para Ser Vivida de Novo',
    headliner: 'Gusttavo Lima',
    theme: 'sertanejo',
    ship: 'MSC Divina',
    dates: '09 a 12 de Dezembro de 2026',
    startDate: '2026-12-09',
    monthLabel: 'Dezembro / 2026',
    season: '2026/2027',
    nights: 3,
    route: 'Navegação Sertaneja em Alto-Mar',
    badge: 'O Embaixador',
    status: 'Vendas Abertas',
    description: `O Embaixador em Alto-Mar é um festival de música em alto-mar que reúne grandes shows, experiências exclusivas e estrutura premium em uma viagem completa pelo oceano.

Durante 4 dias, o navio se transforma em um verdadeiro resort flutuante, com programação intensa, festas temáticas, áreas de lazer, gastronomia internacional e shows de grandes artistas — tudo isso em um ambiente seguro, confortável e totalmente planejado para entretenimento.

Nesta edição, o projeto alcança um novo patamar:
MSC Divina, um dos navios mais modernos e sofisticados da frota MSC, pela primeira vez operando no Brasil.
Um navio com infraestrutura de alto nível, múltiplos bares e restaurantes, piscinas, áreas de descanso, teatro, cassino e espaços exclusivos para os shows e festas do projeto.

O Embaixador em Alto-Mar foi criado para quem busca mais do que um show ou uma viagem comum.
É a união de música, experiência, férias e entretenimento em um único lugar, com tudo organizado do início ao fim.

09 a 12 de dezembro
MSC Divina

Viva essa experiência!`,
    highlights: [
      'Megashow do Embaixador Gusttavo Lima cantando até o amanhecer',
      'Maiara & Maraisa, Dennis DJ, Calcinha Preta, Diego & Victor Hugo e Rionegro & Solimões',
      'Resort flutuante 5 estrelas com gastronomia internacional 24h',
      'Festas temáticas sunset e noites inesquecíveis'
    ],
    includedItems: [
      'Acomodação na categoria de cabine selecionada',
      'Todas as refeições inclusas em restaurantes e buffets 24h',
      'Acesso livre a todos os shows do Gusttavo Lima e atrações convidadas',
      'Assessoria completa e atendimento humanizado Vibe a Bordo'
    ],
    folderName: 'EMBAIXADOR_-_Gustavo_Lima',
    posterImage: '/assets/aistudio/banner-embaixador_e4cd1350.jpg',
    galleryImages: [
      '/assets/aistudio/banner-embaixador_e4cd1350.jpg',
      '/assets/cruises/EMBAIXADOR_-_Gustavo_Lima/IMG_0839.JPG',
      '/assets/cruises/EMBAIXADOR_-_Gustavo_Lima/IMG_0840.JPG',
      '/assets/cruises/EMBAIXADOR_-_Gustavo_Lima/IMG_0841.JPG',
      '/assets/cruises/EMBAIXADOR_-_Gustavo_Lima/IMG_0842.JPG',
      '/assets/cruises/EMBAIXADOR_-_Gustavo_Lima/IMG_0843.JPG',
      '/assets/cruises/EMBAIXADOR_-_Gustavo_Lima/IMG_0844.JPG',
      '/assets/cruises/EMBAIXADOR_-_Gustavo_Lima/IMG_0845.JPG',
      '/assets/cruises/EMBAIXADOR_-_Gustavo_Lima/IMG_0846.JPG'
    ],
    videos: [
      '/assets/cruises/EMBAIXADOR_-_Gustavo_Lima/7859991542783254188.mp4',
      '/assets/cruises/EMBAIXADOR_-_Gustavo_Lima/-1519331288160081889.mp4',
      '/assets/cruises/EMBAIXADOR_-_Gustavo_Lima/8639196949582291837.mp4'
    ],
    artists: [
      'Gusttavo Lima',
      'Maiara & Maraisa',
      'Dennis DJ',
      'Panda',
      'Diego & Victor Hugo',
      'Rionegro & Solimões',
      'Zé Elias (Serestão do Zé)',
      'Henrico',
      'Calcinha Preta'
    ]
  },
  {
    id: 'dominguinho-em-alto-mar',
    title: 'Dominguinho em Alto-Mar',
    subtitle: 'Um Oceano de Música, Poesia e Brasilidade em Forma de Domingo',
    headliner: 'João Gomes, Mestrinho & Jota.Pê',
    theme: 'forro',
    ship: 'MSC Divina',
    dates: '12 a 15 de Dezembro de 2026',
    startDate: '2026-12-12',
    monthLabel: 'Dezembro / 2026',
    season: '2026/2027',
    nights: 3,
    route: 'Navegação Poética em Alto-Mar',
    badge: 'Brasilidade Pura',
    status: 'Vendas Abertas',
    description: `O Dominguinho nasceu do encontro entre João Gomes, Mestrinho e Jota.Pê com a música brasileira no seu tempo mais bonito: o tempo da pausa, do afeto e da simplicidade.

Um projeto que transformou o clima de domingo em canção, em poesia e em memória compartilhada.

Agora, esse encontro ganha um novo horizonte.

O Dominguinho rompeu barreiras e chega ao alto-mar, levando para o oceano toda a energia, a brasilidade e a verdade que sempre fizeram parte da sua essência.

Shows de Ney Matogrosso, Elba Ramalho, Seu Jorge, Saulo Fernandes, Vanessa da Mata, Os Paralamas e Gilsons, além das participações especiais de Mariana Aydar e Bruna Black!

De 12 a 15 de dezembro, a bordo do MSC Divina, o mar será cenário para viver a música no balanço das ondas, com sol, encontros e histórias que só um domingo sabe contar. Não é sobre pressa, é sobre presença. Não é sobre espetáculo, é sobre sentir.

A hora de viver algo único é agora!

Nos vemos em alto-mar!`,
    highlights: [
      'Encontro histórico de João Gomes, Mestrinho e Jota.Pê com grandes vozes',
      'Shows de Ney Matogrosso, Elba Ramalho, Seu Jorge, Saulo Fernandes, Vanessa da Mata e Gilsons',
      'Clima de afeto, simplicidade, sol e histórias ao som das ondas',
      'Toda a infraestrutura luxuosa do MSC Divina'
    ],
    includedItems: [
      'Acomodação na categoria escolhida',
      'Pensão completa: café, almoço, jantar e buffet livre 24h',
      'Acesso garantido a todos os concertos e apresentações musicais',
      'Atendimento consultivo e suporte VIP da Vibe a Bordo'
    ],
    folderName: 'Dominguinho_em_Alto_Mar',
    posterImage: '/assets/aistudio/banner-dominguinho_a52ccbf0.jpg',
    galleryImages: [
      '/assets/aistudio/banner-dominguinho_a52ccbf0.jpg',
      '/assets/cruises/Dominguinho_em_Alto_Mar/IMG_0857.JPG',
      '/assets/cruises/Dominguinho_em_Alto_Mar/IMG_0858.JPG',
      '/assets/cruises/Dominguinho_em_Alto_Mar/IMG_0859.JPG',
      '/assets/cruises/Dominguinho_em_Alto_Mar/IMG_0860.JPG',
      '/assets/cruises/Dominguinho_em_Alto_Mar/IMG_0861.JPG'
    ],
    videos: [
      '/assets/cruises/Dominguinho_em_Alto_Mar/-1732560862055620952.mp4'
    ],
    artists: [
      'João Gomes',
      'Mestrinho',
      'Jota.Pê',
      'Ney Matogrosso',
      'Elba Ramalho',
      'Seu Jorge',
      'Saulo Fernandes',
      'Vanessa da Mata',
      'Os Paralamas do Sucesso',
      'Gilsons',
      'Mariana Aydar',
      'Bruna Black'
    ]
  },
  {
    id: 'reveillon-em-alto-mar',
    title: 'Réveillon em Alto-Mar 2027',
    subtitle: 'Amar, Viver e Agradecer · O Maior Réveillon do Brasil',
    headliner: 'Virada com Fogos de Copacabana & Estrelas',
    theme: 'reveillon',
    ship: 'MSC Divina',
    dates: '29 de Dezembro de 2026 a 02 de Janeiro de 2027',
    startDate: '2026-12-29',
    monthLabel: 'Réveillon 2026/2027',
    season: '2026/2027',
    nights: 4,
    route: 'Navegação de Ano Novo · Vista de Copacabana',
    badge: 'Virada Inesquecível',
    status: 'Últimas Vagas',
    description: `Amar, Viver e Agradecer
O Maior Réveillon do Brasil acontece em alto-mar.

De 29 de dezembro de 2026 a 02 de janeiro de 2027, o MSC Divina, pela primeira vez no Brasil, se transforma no palco da virada mais inesquecível da sua vida.
São 4 noites a bordo de um transatlântico de luxo, com conforto 5 estrelas, cenários paradisíacos, e os maiores artistas do Brasil reunidos no mesmo navio.

Você merece começar o ano no melhor lugar do mundo — celebrando, sentindo, vivendo.

O que te espera a bordo:
96 horas de festas e celebrações, com música, diversão e momentos inesquecíveis em alto-mar;
A virada mais espetacular do país: assista aos fogos de Copacabana de camarote, direto do navio! Uma experiência única, com vista privilegiada e todo o conforto;
Shows épicos;
Gastronomia internacional 24h, com sabores assinados por chefs renomados;
Segurança em primeiro lugar: estrutura de alto padrão, equipe treinada e todos os protocolos a bordo para garantir uma experiência tranquila e segura do início ao fim;
Paradas em praias paradisíacas e um itinerário de tirar o fôlego;
Diversão para todas as idades: piscinas, teatro, cassino, cinema 4D, boliche, toboágua e muito mais.

A experiência mais completa de Réveillon do Brasil.

Viva o privilégio de começar 2027 navegando entre estrelas, fogos, música e boas vibrações.`,
    highlights: [
      'Vista privilegiada e camarote exclusivo dos fogos de Copacabana em alto-mar',
      'Shows épicos de Thiaguinho, Wesley Safadão, Ana Castela, Zé Neto & Cristiano, Alok, Jota Quest e É o Tchan',
      '96 horas ininterruptas de celebração e festas temáticas',
      'Gastronomia internacional 24 horas inclusa no MSC Divina'
    ],
    includedItems: [
      'Acomodação de luxo na categoria reservada',
      'Pensão completa: café, almoço, ceia de Réveillon e buffet 24h',
      'Acesso garantido a todos os shows e à celebração exclusiva da virada',
      'Consultoria especializada e suporte total no pré e pós-embarque da Vibe a Bordo'
    ],
    folderName: 'Reveillon_em_Alto_mar_',
    posterImage: '/assets/aistudio/banner-reveillon_910c4c32.jpg',
    galleryImages: [
      '/assets/aistudio/banner-reveillon_910c4c32.jpg',
      '/assets/cruises/Reveillon_em_Alto_mar_/IMG_0828.JPG',
      '/assets/cruises/Reveillon_em_Alto_mar_/IMG_0829.JPG',
      '/assets/cruises/Reveillon_em_Alto_mar_/IMG_0830.JPG',
      '/assets/cruises/Reveillon_em_Alto_mar_/IMG_0831.JPG',
      '/assets/cruises/Reveillon_em_Alto_mar_/IMG_0832.JPG',
      '/assets/cruises/Reveillon_em_Alto_mar_/IMG_0833.JPG'
    ],
    videos: [
      '/assets/cruises/Reveillon_em_Alto_mar_/-3156645366479707292.mp4'
    ],
    artists: [
      'Thiaguinho',
      'Wesley Safadão',
      'Ana Castela',
      'Zé Neto & Cristiano',
      'Alok',
      'Jota Quest',
      'É o Tchan!'
    ]
  },
  {
    id: 'navio-laura-pausini',
    title: 'Navio Laura Pausini',
    subtitle: 'A Italiana Mais Brasileira do Mundo Agora em Alto-Mar',
    headliner: 'Laura Pausini',
    theme: 'internacional',
    ship: 'MSC Divina',
    dates: '05 a 08 de Janeiro de 2027',
    startDate: '2027-01-05',
    monthLabel: 'Janeiro / 2027',
    season: '2026/2027',
    nights: 3,
    route: 'Navegação Internacional em Alto-Mar',
    badge: 'Internacional Exclusivo',
    status: 'Vendas Abertas',
    description: `A italiana mais brasileira do mundo. Agora em alto-mar.
Uma estrela mundial. Um transatlântico de luxo. O oceano inteiro como palco.
Pela primeira vez, a maior cantora italiana do mundo ancora um cruzeiro no Brasil.
Laura Pausini transforma o MSC Divina no Navio Laura Pausini.

De 05 a 08 de janeiro de 2027, o navio ruma a três dias inesquecíveis, no coração do verão brasileiro.

Dois shows exclusivos de Laura Pausini, Ana Carolina, Alexandre Pires, Fábio Jr. e Tiago Iorc!

Uma experiência de grandeza internacional! Um acontecimento único. Uma travessia que poucos vão viver.

Embarque nessa experiência com Laura Pausini e viva momentos inesquecíveis.`,
    highlights: [
      'Dois shows exclusivos de Laura Pausini cantando todos os seus sucessos mundiais',
      'Apresentações especiais de Ana Carolina, Alexandre Pires, Fábio Jr. e Tiago Iorc',
      'Acontecendo pela primeira vez na história de um cruzeiro temático no Brasil',
      'MSC Divina com serviços 5 estrelas e gastronomia internacional'
    ],
    includedItems: [
      'Acomodação na categoria de cabine selecionada',
      'Pensão completa: café, almoço, jantar à la carte e buffets 24h',
      'Entrada garantida para os shows de Laura Pausini e convidados',
      'Suporte VIP pré e pós-embarque com a equipe da Vibe a Bordo'
    ],
    folderName: 'Laura_Pausini',
    posterImage: '/assets/aistudio/banner-laura-pausini_8d9c6fb5.jpg',
    galleryImages: [
      '/assets/aistudio/banner-laura-pausini_8d9c6fb5.jpg',
      '/assets/cruises/Laura_Pausini/IMG_0868.JPG',
      '/assets/cruises/Laura_Pausini/IMG_0869.JPG',
      '/assets/cruises/Laura_Pausini/IMG_0870.JPG',
      '/assets/cruises/Laura_Pausini/IMG_0871.JPG',
      '/assets/cruises/Laura_Pausini/IMG_0872.JPG',
      '/assets/cruises/Laura_Pausini/IMG_0873.JPG'
    ],
    videos: [
      '/assets/cruises/Laura_Pausini/720516484196160914.mp4'
    ],
    artists: [
      'Laura Pausini',
      'Ana Carolina',
      'Alexandre Pires',
      'Fábio Jr.',
      'Tiago Iorc'
    ]
  },
  {
    id: 'navio-daniel',
    title: 'Navio Daniel',
    subtitle: 'O Amor Que Não Tem Fim · 3ª Edição Especial em Alto-Mar',
    headliner: 'Daniel',
    theme: 'romantico',
    ship: 'MSC Divina',
    dates: '08 a 11 de Janeiro de 2027',
    startDate: '2027-01-08',
    monthLabel: 'Janeiro / 2027',
    season: '2026/2027',
    nights: 3,
    route: 'Navegação Romântica em Alto-Mar',
    badge: '3ª Edição',
    status: 'Vendas Abertas',
    description: `De 08 a 11 de janeiro de 2027, o oceano será palco de uma experiência dedicada ao amor e a música que atravessa gerações.

O Navio Daniel chega à sua terceira edição como um encontro especial entre música, histórias e sentimentos!

Durante três dias em alto-mar, fãs de todo o Brasil terão a oportunidade de viver momentos únicos ao lado de Daniel, a voz que marcou a história da música!

Tudo isso a bordo de um dos mais sofisticados transatlânticos do mundo, o MSC Divina, o projeto reúne conforto, gastronomia, entretenimento e uma programação especial, criando o cenário perfeito para celebrar aquilo que realmente permanece.

Mais do que um festival em alto-mar, o Navio Daniel é um convite para cantar, reviver memórias e criar histórias ao som de músicas que fazem parte da vida de gerações.

Nos vemos a bordo!`,
    highlights: [
      'Shows inesquecíveis do cantor Daniel celebrando grandes histórias e o amor',
      'Convidados ilustres: Simone Mendes, Fagner, Zé Neto & Cristiano, César Menotti & Fabiano, Guilherme & Santiago e Lara',
      '3ª edição do cruzeiro mais emocionante da música brasileira',
      'Conforto absoluto, lazer e culinária internacional no MSC Divina'
    ],
    includedItems: [
      'Acomodação na categoria de cabine selecionada',
      'Pensão completa com todas as refeições e buffet livre 24h',
      'Acesso a todos os espetáculos de Daniel e artistas convidados',
      'Consultoria atenciosa e suporte pré e pós-embarque Vibe a Bordo'
    ],
    folderName: 'Daniel',
    posterImage: '/assets/aistudio/banner-navio-daniel_c5b7d229.jpg',
    galleryImages: [
      '/assets/aistudio/banner-navio-daniel_c5b7d229.jpg',
      '/assets/cruises/Daniel/IMG_0824.JPG',
      '/assets/cruises/Daniel/IMG_0825.JPG',
      '/assets/cruises/Daniel/IMG_0826.JPG',
      '/assets/cruises/Daniel/IMG_0827.JPG'
    ],
    videos: [
      '/assets/cruises/Daniel/-1799738096277977609.mp4'
    ],
    artists: [
      'Daniel',
      'Simone Mendes',
      'Fagner',
      'Zé Neto & Cristiano',
      'César Menotti & Fabiano',
      'Guilherme & Santiago',
      'Lara'
    ]
  },
  {
    id: 'maior-encontro-do-samba',
    title: 'O Maior Encontro do Samba em Alto-Mar',
    subtitle: 'Zeca Pagodinho, Alcione & Jorge Aragão no MSC Divina',
    headliner: 'Zeca, Alcione & Aragão',
    theme: 'samba',
    ship: 'MSC Divina',
    dates: '11 a 14 de Janeiro de 2027',
    startDate: '2027-01-11',
    monthLabel: 'Janeiro / 2027',
    season: '2026/2027',
    nights: 3,
    route: 'Navegação do Samba em Alto-Mar',
    badge: 'Histórico',
    status: 'Últimas Vagas',
    description: `De 11 a 14 de janeiro de 2027, Zeca Pagodinho, Alcione e Jorge Aragão embarcam juntos no MSC Divina, um dos maiores transatlânticos do mundo, para uma experiência inédita em alto-mar.

É a alegria do samba encontrando o oceano. Três amigos, mais de 150 anos de história da música brasileira reunidos a bordo por 72 horas.

Uma roda que não tem hora para acabar!

E essa celebração ganha ainda mais força com um line-up histórico:
Xande de Pilares,
Belo,
Seu Jorge,
Péricles,
Arlindinho,
Turma do Pagode e Pretinho da Serrinha também sobem a bordo para transformar o oceano na maior roda de samba do Brasil.

Agora só falta você chegar!`,
    highlights: [
      'Mais de 150 anos de história da música brasileira com Zeca, Alcione e Aragão',
      'Maior roda de samba do Brasil com Xande, Belo, Seu Jorge, Péricles, Arlindinho e Turma do Pagode',
      '72 horas de samba de raiz, cerveja gelada e festa sem hora para acabar',
      'Toda a grandiosidade e conforto 5 estrelas do MSC Divina'
    ],
    includedItems: [
      'Cabine na categoria selecionada',
      'Pensão completa: café, almoço, petiscos e jantar nos restaurantes e buffet 24h',
      'Acesso livre a todas as rodas de samba e concertos a bordo',
      'Atendimento e assessoria dedicada no pré e pós-embarque Vibe a Bordo'
    ],
    folderName: 'Alcione_-_Zeca_e_Jorge_Aragao_',
    posterImage: '/assets/aistudio/banner-o-maior-encontro-de-samba_02e67ba5.jpg',
    galleryImages: [
      '/assets/aistudio/banner-o-maior-encontro-de-samba_02e67ba5.jpg',
      '/assets/cruises/Alcione_-_Zeca_e_Jorge_Aragao_/IMG_0788.JPG',
      '/assets/cruises/Alcione_-_Zeca_e_Jorge_Aragao_/IMG_0789.JPG',
      '/assets/cruises/Alcione_-_Zeca_e_Jorge_Aragao_/IMG_0790.JPG',
      '/assets/cruises/Alcione_-_Zeca_e_Jorge_Aragao_/IMG_0791.JPG',
      '/assets/cruises/Alcione_-_Zeca_e_Jorge_Aragao_/IMG_0792.JPG',
      '/assets/cruises/Alcione_-_Zeca_e_Jorge_Aragao_/IMG_0793.JPG',
      '/assets/cruises/Alcione_-_Zeca_e_Jorge_Aragao_/IMG_0794.JPG'
    ],
    videos: [
      '/assets/cruises/Alcione_-_Zeca_e_Jorge_Aragao_/-4689255655519128362.mp4'
    ],
    artists: [
      'Zeca Pagodinho',
      'Alcione',
      'Jorge Aragão',
      'Xande de Pilares',
      'Belo',
      'Seu Jorge',
      'Péricles',
      'Arlindinho',
      'Turma do Pagode',
      'Pretinho da Serrinha'
    ]
  },
  {
    id: 'navio-do-gigante',
    title: 'Navio do Gigante',
    subtitle: 'Férias de Verão com o GG Léo Santana',
    headliner: 'Léo Santana',
    theme: 'axe',
    ship: 'MSC Divina',
    dates: '14 a 17 de Janeiro de 2027',
    startDate: '2027-01-14',
    monthLabel: 'Janeiro / 2027',
    season: '2026/2027',
    nights: 3,
    route: 'Navegação de Verão em Alto-Mar',
    badge: 'Férias com o GG',
    status: 'Vendas Abertas',
    description: `Férias de Verão com o GG
 
O nosso Navio do Gigante está de volta!

De 14 a 17 de janeiro de 2027, o seu verão embarca no MSC Divina — um dos transatlânticos mais imponentes do mundo.

São três dias dentro do universo de Léo Santana — o sol, o mar e uma experiência marcante, que vão fazer do seu verão o maior de todos!

Você vai viver 72h com a energia do GG e o oceano de cenário. O seu verão nunca mais vai ser o mesmo!

O Gigante te espera em alto-mar.`,
    highlights: [
      '72 horas de pura energia e pagodão baiano com Léo Santana',
      'Participações consagradas: Ivete Sangalo, Natanzinho Lima, Péricles, Panda e Henry Freitas',
      'Festas à beira da piscina no alto do verão brasileiro',
      'Toda a sofisticação do MSC Divina estreando na costa nacional'
    ],
    includedItems: [
      'Acomodação na categoria de cabine selecionada',
      'Pensão completa com todas as refeições e buffet aberto 24h',
      'Acesso garantido a todos os shows do GG e convidados de honra',
      'Atendimento e assessoria exclusiva pré e pós-embarque da Vibe a Bordo'
    ],
    folderName: 'Navio_do_Gigante_-_Leo_Santana_',
    posterImage: '/assets/aistudio/banner-navio-do-gigante_dba1c4b0.jpg',
    galleryImages: [
      '/assets/aistudio/banner-navio-do-gigante_dba1c4b0.jpg',
      '/assets/cruises/Navio_do_Gigante_-_Leo_Santana_/IMG_0795.JPG',
      '/assets/cruises/Navio_do_Gigante_-_Leo_Santana_/IMG_0796.JPG',
      '/assets/cruises/Navio_do_Gigante_-_Leo_Santana_/IMG_0797.JPG',
      '/assets/cruises/Navio_do_Gigante_-_Leo_Santana_/IMG_0798.JPG',
      '/assets/cruises/Navio_do_Gigante_-_Leo_Santana_/IMG_0799.JPG',
      '/assets/cruises/Navio_do_Gigante_-_Leo_Santana_/IMG_0800.JPG'
    ],
    videos: [
      '/assets/cruises/Navio_do_Gigante_-_Leo_Santana_/6953357253319714821.mp4'
    ],
    artists: [
      'Léo Santana',
      'Ivete Sangalo',
      'Natanzinho Lima',
      'Péricles',
      'Panda',
      'Henry Freitas'
    ]
  },
  {
    id: 'festivalzinho',
    title: 'Festivalzinho em Alto-Mar',
    subtitle: 'Sol, Férias e um Oceano de Diversão para Toda a Família',
    headliner: 'Mundo Bita, João Gomes & Galinha Pintadinha',
    theme: 'familia',
    ship: 'MSC Divina',
    dates: '17 a 20 de Janeiro de 2027',
    startDate: '2027-01-17',
    monthLabel: 'Janeiro / 2027',
    season: '2026/2027',
    nights: 3,
    route: 'Navegação em Família em Alto-Mar',
    badge: 'Especial Família',
    status: 'Vendas Abertas',
    description: `Sol, Férias e um oceano de diversão!
✨
O Festivalzinho que a gente ama cresceu, cresceu… e ganhou o mar!
🌊
✨

Nasceu daquela alegria de reunir a família toda em volta da música boa.
E cresceu tanto que agora vamos viver o maior verão de todos: em alto-mar!
☀️

Serão três dias de férias recheados de música, brincadeira e diversão,
com uma curadoria pensada pra que pais e filhos vivam o mesmo festival,
cada um do seu jeito, mas sempre juntos.
💛

Grandes atrações para a família toda! Shows de João Gomes, Mundo Bita,
Alceu Valença, Galinha Pintadinha, Vanessa da Mata, Tiquequê, Maria Gadú,
Beatles para Crianças e Rita Lee para Crianças.
🎶

De 17 a 20 de janeiro de 2027, o MSC Divina vira o lugar da família inteira,
um verdadeiro resort flutuante, com piscinas, sol o dia todo, paisagens de
tirar o fôlego e uma culinária de dar água na boca.
🚢

Aqui não tem relógio, não tem pressa. Tem sol, tem mar e tem a gente junto.
🌅

O melhor verão da sua família está chegando. Bora?
💛`,
    highlights: [
      'O maior cruzeiro temático familiar do Brasil com atrações para pais e filhos',
      'Shows de João Gomes, Mundo Bita, Alceu Valença, Galinha Pintadinha, Vanessa da Mata e Tiquequê',
      'Espetáculos teatrais, brincadeiras, gincanas e parque aquático infantil',
      'MSC Divina: resort flutuante com máxima segurança e conforto para crianças'
    ],
    includedItems: [
      'Cabine na categoria escolhida',
      'Pensão completa com menu especial infantil e opções saudáveis 24h',
      'Entrada livre para todos os shows e atividades lúdicas',
      'Assessoria completa para viagens com bebês e crianças com a Vibe a Bordo'
    ],
    folderName: 'Festivalzinho',
    posterImage: '/assets/aistudio/banner-festivalzinho_6063abe1.jpg',
    galleryImages: [
      '/assets/aistudio/banner-festivalzinho_6063abe1.jpg',
      '/assets/cruises/Festivalzinho/IMG_0854.JPG',
      '/assets/cruises/Festivalzinho/IMG_0855.JPG',
      '/assets/cruises/Festivalzinho/IMG_0856.JPG'
    ],
    videos: [
      '/assets/cruises/Festivalzinho/-1296538965042858102.mp4'
    ],
    artists: [
      'João Gomes',
      'Mundo Bita',
      'Alceu Valença',
      'Galinha Pintadinha',
      'Vanessa da Mata',
      'Tiquequê',
      'Maria Gadú',
      'Beatles para Crianças',
      'Rita Lee para Crianças'
    ]
  },
  {
    id: 'ws-on-board',
    title: 'WS On Board',
    subtitle: 'O Navio Mais Animado do Mundo com Wesley Safadão',
    headliner: 'Wesley Safadão',
    theme: 'sertanejo',
    ship: 'MSC Divina',
    dates: '20 a 23 de Janeiro de 2027',
    startDate: '2027-01-20',
    monthLabel: 'Janeiro / 2027',
    season: '2026/2027',
    nights: 3,
    route: 'Navegação Festiva em Alto-Mar',
    badge: 'Mais Animado do Mundo',
    status: 'Últimas Vagas',
    description: `O NAVIO MAIS ANIMADO DO MUNDO
O WS On Board é uma experiência criada para quem quer viver a música com intensidade!

De 20 a 23 de janeiro de 2027, um dos navios mais impressionantes do mundo será palco de uma experiência única: o MSC Divina, pela primeira vez navegando no Brasil, recebe o festival que transformou o oceano no território da festa.

Durante quatro dias, é o Navio Mais Animado do Mundo, com 72 horas de festa sem limites em alto-mar. Aqui, a experiência acontece o tempo todo.

É acordar com o sol refletindo no oceano, encontrar os amigos pelo navio, viver o clima de férias no verão e sentir a energia crescendo a cada momento.
Quando a noite chega, o navio vira um grande palco navegando pelo mar.

Shows, encontros, celebração e momentos únicos como amanhecer com Safadão, vivendo uma experiência inesquecível.

São dias em que o navio inteiro respira música, alegria e convivência, com festas, paisagens e uma experiência contínua no meio do oceano.

Prepare-se para embarcar no Navio Mais Animado do Mundo.

O Muído Vai Ser Grande!`,
    highlights: [
      'Show exclusivo do Wesley Safadão com mais de 4 horas no palco principal até o amanhecer',
      'Tamo Junto (Xand Avião & Wesley Safadão), Zé Neto & Cristiano, Belo e Natanzinho Lima',
      '72 horas de festa sem limites no deck de piscinas do MSC Divina',
      'Pensão completa gourmet e buffet aberto 24h por dia'
    ],
    includedItems: [
      'Acomodação na categoria de cabine escolhida',
      'Pensão completa: café da manhã, almoço, lanches, jantar e buffet 24h',
      'Acesso livre a todos os shows e apresentações artísticas sem custo extra',
      'Participação em todas as festas temáticas oficiais da programação',
      'Consultoria especializada e suporte VIP da Vibe a Bordo no pré e pós-embarque'
    ],
    folderName: 'Ws_On_Board',
    posterImage: '/assets/cruises/Ws_On_Board/IMG_0781.JPG',
    galleryImages: [
      '/assets/cruises/Ws_On_Board/IMG_0781.JPG',
      '/assets/cruises/Ws_On_Board/IMG_0770.JPG',
      '/assets/cruises/Ws_On_Board/IMG_0771.JPG',
      '/assets/cruises/Ws_On_Board/IMG_0772.JPG',
      '/assets/cruises/Ws_On_Board/IMG_0773.JPG',
      '/assets/cruises/Ws_On_Board/IMG_0774.JPG',
      '/assets/cruises/Ws_On_Board/IMG_0776.JPG',
      '/assets/cruises/Ws_On_Board/IMG_0777.JPG',
      '/assets/cruises/Ws_On_Board/IMG_0778.JPG',
      '/assets/cruises/Ws_On_Board/IMG_0779.JPG',
      '/assets/cruises/Ws_On_Board/IMG_0780.JPG',
      '/assets/cruises/Ws_On_Board/IMG_0767.JPG',
      '/assets/cruises/Ws_On_Board/IMG_0769.JPG'
    ],
    videos: [
      '/assets/cruises/Ws_On_Board/6953357253319714821.mp4'
    ],
    artists: [
      'Wesley Safadão',
      'Tamo Junto (Xand Avião & Wesley Safadão)',
      'Zé Neto & Cristiano',
      'Belo',
      'Natanzinho Lima',
      'Rey Vaqueiro',
      'Taty Girl',
      'Zé Vaqueiro',
      'Seu Desejo',
      'Kiko Chicabana'
    ]
  }
];

export const CHRONOLOGICAL_CRUISES = ALL_CRUISE_EVENTS;

// Exactly the 9 Cabins requested by the user with authentic images from CABINES
export const REAL_CABINS: CabinPhotoInfo[] = [
  {
    name: 'INTERNA',
    type: 'Interna',
    image: '/assets/ship/cabine-interna-01.JPG',
    description: 'Acomodação inteligente, confortável e moderna. Excelente custo-benefício para descansar entre as festas e aproveitar todas as atrações do navio.',
    features: [
      'Camas de solteiro conversíveis em cama de casal',
      'Banheiro privativo com ducha e secador de cabelo',
      'TV interativa, cofre privativo, frigobar e ar-condicionado',
      'Acesso integral a todos os shows e buffet livre 24h'
    ]
  },
  {
    name: 'INTERNA SUPERIOR',
    type: 'Interna Superior',
    image: '/assets/ship/cabine-interna-01.JPG',
    description: 'Cabine interna com localização privilegiada nos decks superiores do transatlântico, oferecendo maior comodidade e rapidez de deslocamento.',
    features: [
      'Localização estratégica em conveses superiores',
      'Cama de casal ou duas camas de solteiro com enxoval nobre',
      'Banheiro privativo e ambiente climatizado',
      'Fácil acesso aos elevadores e decks de entretenimento'
    ]
  },
  {
    name: 'JANELA',
    type: 'Externa com Janela',
    image: '/assets/ship/cabine-janela.JPG',
    description: 'Cabine externa com janela ampla panorâmica selada, garantindo luz solar natural e vista permanente das ondas durante toda a navegação.',
    features: [
      'Janela com vista ampla para o oceano',
      'Cama de casal conversível em duas camas de solteiro',
      'Área de estar compacta, TV interativa e frigobar',
      'Serviço diário de quarto e camareiro dedicado'
    ]
  },
  {
    name: 'VARANDA',
    type: 'Varanda',
    image: '/assets/ship/cabine-varanda.JPG',
    description: 'A categoria favorita dos passageiros: varanda privativa ao ar livre com mesa e poltronas para apreciar o pôr do sol e a brisa do oceano.',
    features: [
      'Varanda privativa ao ar livre com mesa e cadeiras',
      'Vista panorâmica para o horizonte marítimo',
      'Cama king-size ou duas camas de solteiro confortáveis',
      'Banheiro privativo com banheira ou ducha de alta pressão'
    ]
  },
  {
    name: 'VARANDA SUPERIOR',
    type: 'Varanda Superior',
    image: '/assets/ship/cabine-varanda.JPG',
    description: 'Cabine com varanda privativa situada em decks mais altos, proporcionando visão ampla desobstruída do mar e atmosfera ainda mais exclusiva.',
    features: [
      'Varanda privativa em decks elevados com vista ampla',
      'Área interna mais espaçosa com sofá de estar',
      'Excelente isolamento acústico e localização privilegiada',
      'Serviço de quarto 24 horas à disposição'
    ]
  },
  {
    name: 'VARANDA EXPERIENCE (+ ALL INCLUSIVE)',
    type: 'Varanda Experience',
    image: '/assets/ship/cabines-experiense.JPG',
    description: 'Varanda privativa com benefícios ampliados, incluindo pacote de bebidas All Inclusive e flexibilidade nos horários de refeição.',
    features: [
      'Pacote All Inclusive de bebidas selecionadas incluso',
      'Varanda privativa com vista deslumbrante do oceano',
      'Prioridade na escolha do turno dos restaurantes',
      'Descontos exclusivos em tratamentos de spa'
    ]
  },
  {
    name: 'SUÍTE JANELA EXPERIENCE (+ ALL INCLUSIVE)',
    type: 'Suíte Janela Experience',
    image: '/assets/ship/cabines-experiense.JPG',
    description: 'Suíte espaçosa com grande janela panorâmica, ambiente requintado, pacote de bebidas All Inclusive e comodidades superiores.',
    features: [
      'Suíte ampla com vista panorâmica do mar',
      'Pacote All Inclusive de bebidas incluso na tarifa',
      'Área de estar elegante com sofá e poltronas',
      'Amenidades de banho premium e roupões atoalhados'
    ]
  },
  {
    name: 'SUÍTE VARANDA EXPERIENCE (+ ALL INCLUSIVE)',
    type: 'Suíte Varanda Experience',
    image: '/assets/ship/cabines-experiense.JPG',
    description: 'Suíte com amplo espaço interno, varanda privativa estendida, pacote All Inclusive de bebidas e atendimento de alta hospitalidade.',
    features: [
      'Suíte de alto padrão com varanda privativa estendida',
      'Pacote All Inclusive de bebidas liberado',
      'Embarque e desembarque prioritários no porto',
      'Banheiro luxuoso com banheira ou ducha cromoterápica'
    ]
  },
  {
    name: 'YACHT CLUB (+ ALL INCLUSIVE)',
    type: 'Yacht Club',
    image: '/assets/ship/yacht-club-cabines-01.JPG',
    description: 'O conceito exclusivo "um iate dentro de um transatlântico". Serviço de mordomo 24h, restaurante privativo, piscina exclusiva e All Inclusive VIP.',
    features: [
      'Mordomo dedicado e concierge 24 horas por dia',
      'Restaurante gourmet e lounge privativo exclusivo',
      'Piscina privativa, jacuzzis e solarium reservado',
      'Pacote All Inclusive premium ilimitado em todo o navio'
    ]
  }
];

// Exactly the Ship Environments requested by user with authentic photos
export const REAL_SHIP_PHOTOS: ShipPhotoInfo[] = [
  {
    name: 'Atrium',
    category: 'Recepção & Cristais',
    image: '/assets/ship/atrium.JPG',
    description: 'O coração glamouroso do MSC Divina, com suas famosas escadarias com cristais Swarovski, piano bar e iluminação monumental.'
  },
  {
    name: 'Piscinas & Jacuzzis',
    category: 'Deck ao Ar Livre',
    image: '/assets/ship/piscinas-jacuzzis.JPG',
    description: 'Piscinas de água cristalina, espreguiçadeiras confortáveis, bares molhados e hidromassagens suspensas com vista infinita.'
  },
  {
    name: 'The Black Crab',
    category: 'Restaurante Principal',
    image: '/assets/ship/the-back-crab.JPG',
    description: 'O restaurante principal do transatlântico, distribuído em dois andares com decoração nobre e jantares memoráveis.'
  },
  {
    name: "Butcher's Cut",
    category: 'Steakhouse Americana',
    image: '/assets/ship/butchers-cut.JPG',
    description: 'Churrascaria de padrão internacional com cortes nobres de carnes grelhadas e carta de vinhos especial.'
  },
  {
    name: 'Calumet Buffet',
    category: 'Buffet Livre 24 Horas',
    image: '/assets/ship/calumet-buffet.JPG',
    description: 'Estações gastronômicas abertas 24h por dia com pizzas artesanais ao forno, massas frescas, saladas e sobremesas.'
  },
  {
    name: 'Restaurante Le Muse',
    category: 'Gastronomia Exclusiva',
    image: '/assets/ship/restaurante-le-muse.JPG',
    description: 'Experiência culinária intimista e sofisticada para hóspedes VIP, com serviço de mesa primoroso.'
  },
  {
    name: 'Restaurante Galaxy',
    category: 'Panorâmico & Disco',
    image: '/assets/ship/restaurante-galaxy.JPG',
    description: 'Restaurante panorâmico no topo do navio com vista 360 graus para o mar e balada noturna com DJs renomados.'
  },
  {
    name: 'Manitou Buffet',
    category: 'Buffet Internacional',
    image: '/assets/ship/manitou-buffet.JPG',
    description: 'Buffet amplo e variado com café da manhã reforçado, almoço temático e lanches rápidos ao longo do dia.'
  },
  {
    name: 'Gastronomia Internacional',
    category: 'Culinária de Alto Padrão',
    image: '/assets/ship/gastronomia.JPG',
    description: 'Culinária refinada com ingredientes frescos, opções vegetarianas e receitas clássicas de diversas culturas.'
  },
  {
    name: 'Palco Principal',
    category: 'Deck dos Shows',
    image: '/assets/ship/palco-principal.JPG',
    description: 'Onde a magia dos festivais acontece: megaestrutura de som e telões de LED ao ar livre sob o céu e as estrelas.'
  },
  {
    name: 'Teatro',
    category: 'Pantheon Theatre',
    image: '/assets/ship/teatro.JPG',
    description: 'Teatro suntuoso de três andares com acústica internacional e equipamentos de última geração para espetáculos grandiosos.'
  },
  {
    name: 'Spa & Bem-Estar',
    category: 'MSC Aurea Spa',
    image: '/assets/ship/spa-bem-estar.JPG',
    description: 'Santuário de relaxamento com saunas, massagens balinesas, tratamentos faciais e corporais com vista para o oceano.'
  },
  {
    name: 'Yacht Club',
    category: 'Área VIP Privativa',
    image: '/assets/ship/yacht-club.JPG',
    description: 'Clube exclusivo de luxo com solarium privativo, lounge panorâmico Top Sail e atendimento personalizado com total discrição.'
  },
  {
    name: 'Sports Arena',
    category: 'Esportes & Lazer',
    image: '/assets/ship/sports-arena.JPG',
    description: 'Quadra poliesportiva para futebol, basquete, pista de corrida panorâmica e academia moderna com vista para as ondas.'
  }
];

export const FAQ_DATA = [
  {
    question: 'O que está incluso no pacote do cruzeiro temático?',
    answer: 'Todas as cabines comercializadas pela Vibe a Bordo já incluem a acomodação escolhida, pensão completa (todas as refeições no buffet 24 horas e nos restaurantes principais), entrada livre para todos os shows dos artistas do cruzeiro sem taxa extra, participação em todas as festas temáticas oficiais da programação e uso de toda a área de lazer do navio (piscinas, jacuzzis, quadras e academia).'
  },
  {
    question: 'Como funciona o atendimento pré e pós-embarque da Vibe a Bordo?',
    answer: 'Esse é o nosso grande diferencial desde 2022. Designamos um consultor dedicado que acompanha você em todas as etapas: desde a escolha da melhor cabine na planta do navio, esclarecimento sobre os looks das festas temáticas, dicas de bagagem, até o retorno para casa com total segurança.'
  },
  {
    question: 'Quais documentos são necessários para embarcar?',
    answer: 'Para os cruzeiros na costa brasileira, passageiros brasileiros precisam apenas de RG original emitido nos últimos 10 anos (em bom estado) ou CNH válida, ou Passaporte válido. Nossa consultoria pré-embarque confere toda a documentação da sua cabine com antecedência.'
  },
  {
    question: 'Como faço para consultar valores e disponibilidade?',
    answer: 'Basta clicar no botão "Entrar em Contato no WhatsApp" (+55 11 97864-7543) em qualquer evento ou preencher nosso formulário. Nossa equipe atende prontamente com as cabines disponíveis em tempo real!'
  }
];
