export interface CruiseEvent {
  id: string;
  title: string;
  subtitle: string;
  theme: 'sertanejo' | 'rock' | 'axe' | 'samba' | 'reveillon' | 'romantico' | 'forro' | 'familia' | 'internacional' | 'desenvolvimento';
  artists: string[];
  headliner: string;
  ship: string;
  dates: string;
  startDate: string;
  monthLabel: string;
  season: '2026/2027';
  nights: number;
  departurePort?: string;
  route: string;
  badge?: string;
  status: 'Cabines Disponíveis' | 'Últimas Vagas' | 'Vendas Abertas' | 'Lote Especial';
  description: string;
  highlights: string[];
  includedItems: string[];
  posterImage: string;
  galleryImages: string[];
  videos: string[];
  folderName: string;
}

export type Cruise = CruiseEvent;

export interface CabinCategory {
  type: string;
  name: string;
  description: string;
  capacity: string;
  features: string[];
}

export interface CabinPhotoInfo {
  name: string;
  type: string;
  image: string;
  description: string;
  features: string[];
}

export interface ShipPhotoInfo {
  name: string;
  category: string;
  image: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  whatsapp: string;
  email: string;
  cruiseInterest?: string;
  message?: string;
}
