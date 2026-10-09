import {
  bqTowersExterior,
  bqTowersKitchen,
  bqTowersLiving,
  bqTowersMasterTv,
  siayaParkAmbience,
  siayaParkBedroom,
  siayaParkDining,
  siayaParkExterior,
} from '../assets/images';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Apartments' | 'Interiors';
  location: string;
  heroImage: string;
  galleryImages: string[];
  architecturalStatement: string;
  materials: string[];
  keyFeatures: string[];
  spatialZones: {
    name: string;
    description: string;
  }[];
}

export const PROJECTS: Project[] = [
  {
    id: 'bq-towers-residence',
    title: 'B&Q Towers Five Bedroom Residence',
    subtitle: 'Five bedroom property photography',
    category: 'Interiors',
    location: 'B&Q Towers',
    heroImage: bqTowersExterior,
    galleryImages: [
      bqTowersExterior,
      bqTowersLiving,
      bqTowersKitchen,
      bqTowersMasterTv,
    ],
    architecturalStatement:
      'The available photo archive shows the B&Q Towers exterior and interiors from a five bedroom property, including a living area, kitchen and TV wall.',
    materials: ['Timber cabinetry', 'Tile flooring', 'Glazed doors'],
    keyFeatures: [
      'B&Q Towers exterior',
      'Living room',
      'Kitchen',
      'TV wall and cabinetry',
    ],
    spatialZones: [
      { name: 'Exterior', description: 'Photograph of the B&Q Towers building.' },
      { name: 'Living room', description: 'Interior photograph from the five bedroom property.' },
      { name: 'Kitchen and TV wall', description: 'Interior photographs included in the available archive.' },
    ],
  },
  {
    id: 'siaya-park-apartments',
    title: 'Siaya Park Apartments',
    subtitle: 'Apartment exterior and interior photography',
    category: 'Apartments',
    location: 'Kileleshwa, Nairobi',
    heroImage: siayaParkExterior,
    galleryImages: [
      siayaParkExterior,
      siayaParkBedroom,
      siayaParkAmbience,
      siayaParkDining,
    ],
    architecturalStatement:
      'The available photo archive shows the Siaya Park Apartments exterior and apartment interiors, including bedroom, living and dining spaces.',
    materials: ['Built in cabinetry', 'Tile flooring', 'Glazed windows'],
    keyFeatures: [
      'Apartment exterior',
      'Bedroom',
      'Living area',
      'Dining area',
    ],
    spatialZones: [
      { name: 'Exterior', description: 'Photograph of Siaya Park Apartments.' },
      { name: 'Bedroom', description: 'Bedroom photograph from the apartment archive.' },
      { name: 'Living and dining areas', description: 'Interior photographs included in the available archive.' },
    ],
  },
];

export interface MaterialDetail {
  id: string;
  name: string;
  category: string;
  textureDescription: string;
  architecturalApplication: string;
  colorHex: string;
  accentHex: string;
}

export const MATERIALS: MaterialDetail[] = [
  {
    id: 'calacatta-oro',
    name: 'Calacatta Oro Marble',
    category: 'Bookmatched Stone',
    textureDescription: 'Warm milky white ground enriched by dramatic gold and charcoal amber veining, polished to a mirror hone.',
    architecturalApplication: 'Double height feature fireplace monoliths, waterfall kitchen islands, and master bath sanctuaries.',
    colorHex: '#e8e5dc',
    accentHex: '#c4a47c',
  },
  {
    id: 'fluted-oak',
    name: 'Belgian Smoked Oak',
    category: 'Artisanal Millwork',
    textureDescription: 'Precision CNC fluted vertical timber ribs, fumed with natural ammonia to deep espresso tones.',
    architecturalApplication: 'Acoustic wall paneling, hidden vestibule doors, custom dressing room cabinetry, and ceiling coffering.',
    colorHex: '#382e26',
    accentHex: '#735b49',
  },
  {
    id: 'antique-bronze',
    name: 'Hand Patinated Architectural Bronze',
    category: 'Architectural Metal',
    textureDescription: 'Heavy extruded solid brass and bronze, chemically oxidized and hand burnished with hairline wax seal.',
    architecturalApplication: 'Door handles, shadow gaps, fireplace architraves, custom lighting fixtures, and window mullions.',
    colorHex: '#8c7150',
    accentHex: '#c5a880',
  },
  {
    id: 'roman-travertine',
    name: 'Navona Roman Travertine',
    category: 'Sedimentary Stone',
    textureDescription: 'Porous cross cut limestone with delicate horizontal strata, honed without resin fill for authentic tactile depth.',
    architecturalApplication: 'Full bleed indoor/outdoor terrace flooring, pool copings, monumental staircases, and facade cladding.',
    colorHex: '#c7bfb1',
    accentHex: '#a39b8d',
  },
  {
    id: 'nero-marquina',
    name: 'Nero Marquina Marble',
    category: 'Noir Monolith',
    textureDescription: 'Intense jet black recrystallized limestone with fine, lightning like calcite white veining.',
    architecturalApplication: 'Cocktail bars, powder room vanity monoliths, pool waterline tiles, and elevator lobby surrounds.',
    colorHex: '#1a1a1c',
    accentHex: '#45454b',
  },
];

export interface FilmProject {
  id: string;
  title: string;
  client: string;
  role: string;
  metrics: string;
  description: string;
  tags: string[];
}

export const ARCHITECTURAL_FILMS: FilmProject[] = [
  {
    id: 'heart-of-europe',
    title: 'The World Islands: Cote d’Azur Luxury Villas',
    client: 'Heart of Europe (Dubai, UAE)',
    role: 'Cinematography Direction & Architectural Storytelling',
    metrics: '6M+ Global Audience Impressions',
    description: 'High altitude drone sweep and interior cinema walkthrough detailing ultra prime floating and beachfront mansions.',
    tags: ['Drone Aerial', 'Luxury Real Estate', 'Dubai'],
  },
  {
    id: 'fine-urban-estates',
    title: 'The Modernist Mansions of Karen & Muthaiga',
    client: 'Fine Urban Interiors Ltd',
    role: 'Lead Visual Strategist & Director of Media (2019 to 2025)',
    metrics: '20M+ Views · 2.6M Most Viral Single Release',
    description: 'Architectural documentary series celebrating bespoke residential construction, interior craft, and turnkey engineering.',
    tags: ['Architectural Docuseries', 'Nairobi', 'Interior Film'],
  },
  {
    id: 'lesus-private-jets',
    title: 'Avion: Transcontinental Executive Flight Experience',
    client: 'Lesus Aviation & Executive Concierge',
    role: 'Creative Director & Brand Storyteller',
    metrics: 'Private VIP Investor Screening',
    description: 'Cinematic brand positioning capturing the intersection of private jet travel, presidential concierge, and VIP terminal design.',
    tags: ['Private Aviation', 'Executive Travel', 'Brand Film'],
  },
  {
    id: 'taj-dubai-hospitality',
    title: 'Sanctuary of Grandeur: Presidential Suites',
    client: 'Taj Dubai & Muthu Silver Springs Hotel',
    role: 'Director of Photography & Post Production',
    metrics: '+45% Increase in Direct Inbound Inquiries',
    description: 'Experiential visual narrative chronicling ultra luxury hospitality suites, private butler services, and skyline views.',
    tags: ['Hospitality', 'Presidential Suites', 'Dubai'],
  },
];
