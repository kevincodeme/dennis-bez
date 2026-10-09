export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Estates' | 'Penthouses' | 'Interiors' | 'Hospitality';
  location: string;
  year: string;
  area: string;
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
    id: 'obsidian-manor',
    title: 'The Obsidian Manor',
    subtitle: 'Private Cantilevered Residence',
    category: 'Estates',
    location: 'Karen, Nairobi',
    year: '2025',
    area: '16,800 SQ. FT.',
    heroImage: '/src/assets/images/hero_obsidian_manor_estate_1791539357090.jpg',
    galleryImages: [
      '/src/assets/images/hero_obsidian_manor_estate_1791539357090.jpg',
      '/src/assets/images/portfolio_karen_solarium_interior_1791539379224.jpg',
      '/src/assets/images/portfolio_solarium_exterior_1791539443456.jpg',
    ],
    architecturalStatement:
      'Commissioned as a secluded architectural statement in the forested ridges of Karen, The Obsidian Manor integrates monolithic dark charcoal basalt masonry with cantilevered structural steel pavilions. Expansive glass curtain walls dissolve the threshold between manicured landscaped grounds and double-height interior galleries.',
    materials: ['Black Basalt Masonry', 'Structural Matte Steel', 'Thermal Glass', 'Aged Bronze Trim'],
    keyFeatures: [
      'Cantilevered Master Gallery over Mirror Pool',
      'Double-Height Solarium Foyer with Bookmatched Calacatta',
      'Subterranean Wine Cellar & Tasting Lounge',
      'Zero-Edge Black Quartz Reflection Pool',
    ],
    spatialZones: [
      { name: 'Grand Solarium', description: 'Double-volume gallery with full-height pivot glazing and integrated limestone hearth.' },
      { name: 'Cantilever Master Wing', description: 'Suspended 6 meters over the water court, framing forest views.' },
      { name: 'Artisan Culinary Suite', description: 'Concealed prep kitchen clad in smoked Belgian oak and Nero Marquina marble.' },
    ],
  },
  {
    id: 'azure-coast-villa',
    title: 'Azure Coast Villa',
    subtitle: 'Monolithic Waterfront Sanctuary',
    category: 'Estates',
    location: 'Palm Jumeirah, Dubai',
    year: '2025',
    area: '22,400 SQ. FT.',
    heroImage: '/src/assets/images/hero_dubai_waterfront_villa_1791539368219.jpg',
    galleryImages: [
      '/src/assets/images/hero_dubai_waterfront_villa_1791539368219.jpg',
      '/src/assets/images/portfolio_travertine_penthouse_terrace_1791539391748.jpg',
      '/src/assets/images/materiality_marble_bronze_detail_1791539402279.jpg',
    ],
    architecturalStatement:
      'Conceived as a sculpture carved from French limestone and Roman travertine, this beachfront estate on the Dubai shoreline responds to the marine horizon with pure horizontal planes, deep shaded overhangs, and seamless transitions to a 35-meter infinity pool meeting the Arabian Gulf.',
    materials: ['French St. Marc Limestone', 'Honed Roman Travertine', 'Champagne Bronze', 'Low-Iron Structural Glass'],
    keyFeatures: [
      '35-Meter Private Marina Edge Infinity Basin',
      'Full-Height Automated Pocketing Glass Facades',
      'Bespoke Travertine Outdoor Fire Court',
      'Private Yacht Mooring Deck and Sun Lounge',
    ],
    spatialZones: [
      { name: 'Waterfront Salon', description: 'Unobstructed 180-degree ocean views with flush-threshold marble floor transitions.' },
      { name: 'Spa & Wellness Pavilion', description: 'Submerged plunge pools, thermal travertine sauna, and cold-plunge shower.' },
      { name: 'Sky Lounge Deck', description: 'Rooftop entertaining deck overlooking the Dubai Marina skyline.' },
    ],
  },
  {
    id: 'karen-solarium',
    title: 'The Karen Solarium Residence',
    subtitle: 'Interior Architecture & Bespoke Millwork',
    category: 'Interiors',
    location: 'Karen Plains, Nairobi',
    year: '2024',
    area: '11,200 SQ. FT.',
    heroImage: '/src/assets/images/portfolio_karen_solarium_interior_1791539379224.jpg',
    galleryImages: [
      '/src/assets/images/portfolio_karen_solarium_interior_1791539379224.jpg',
      '/src/assets/images/hero_obsidian_manor_estate_1791539357090.jpg',
      '/src/assets/images/materiality_marble_bronze_detail_1791539402279.jpg',
    ],
    architecturalStatement:
      'A masterclass in interior spatial planning and bookmatched stone craft. Centered around a 7-meter monolith fireplace wall clad in Italian Calacatta Oro, this grand living pavilion juxtaposes timber post-and-beam warmth with precision bronze profiles and tailored architectural upholstery.',
    materials: ['Bookmatched Calacatta Marble', 'Acoustic Fluted Oak', 'Burnished Brass', 'Polished Terrazzo'],
    keyFeatures: [
      '7-Meter Soaring Pitched Ceiling with Smoked Timber Rafters',
      'Sculptural Dual-Ring Kinetic Chandelier',
      'Full-Height Steel-Framed Crittall Glazing',
      'Integrated Architectural Wall Lighting',
    ],
    spatialZones: [
      { name: 'Central Great Hall', description: 'Monumental hearth focal point with low-slung bespoke Italian furnishings.' },
      { name: 'Olive Courtyard Transition', description: 'Indoor botanical alcove featuring an ancient olive tree in fluted bronze planter.' },
      { name: 'Formal Library Nook', description: 'Recessed oak niches with hidden linear LED wash illumination.' },
    ],
  },
  {
    id: 'travertine-sky-penthouse',
    title: 'The Travertine Sky Penthouse',
    subtitle: 'Crown Triplex & Sky Terrace',
    category: 'Penthouses',
    location: 'Downtown / Marina, Dubai',
    year: '2024',
    area: '9,500 SQ. FT.',
    heroImage: '/src/assets/images/portfolio_travertine_penthouse_terrace_1791539391748.jpg',
    galleryImages: [
      '/src/assets/images/portfolio_travertine_penthouse_terrace_1791539391748.jpg',
      '/src/assets/images/hero_dubai_waterfront_villa_1791539368219.jpg',
      '/src/assets/images/portfolio_karen_solarium_interior_1791539379224.jpg',
    ],
    architecturalStatement:
      'Perched 64 floors above the city, the Travertine Sky Penthouse reimagines high-altitude urban living as a classical open-air villa. Featuring heated Roman travertine terrace decking, an architectural bronze pergola with recessed illumination, and a 4-meter linear ethanol flame table.',
    materials: ['Navona Travertine Pavers', 'Patinated Bronze Pergola', 'Structural Glass Balustrades', 'Custom Outdoor Mohair & Teak'],
    keyFeatures: [
      'Panoramic 360-Degree Skyline & Gulf Vistas',
      '4-Meter Architectural Linear Fire Hearth',
      'Integrated Outdoor Bar & Teppanyaki Counter',
      'Wind-Buffered Glass Perimeters with Acoustic Dampening',
    ],
    spatialZones: [
      { name: 'Sky Fire Court', description: 'Deep conversational pit with flush travertine steps and ambient perimeter step lights.' },
      { name: 'Observatory Perch', description: 'Cantilevered glass corner framing unobstructed sunset perspectives.' },
      { name: 'Upper Master Penthouse Suite', description: 'Direct elevator arrival into a marble-clad private vestibule.' },
    ],
  },
  {
    id: 'lesus-aviation-terminal',
    title: 'Avion Private Terminal & Lounge',
    subtitle: 'Bespoke Executive Aviation Architecture',
    category: 'Hospitality',
    location: 'Wilson VIP Terminal, Nairobi & Dubai',
    year: '2024',
    area: '14,000 SQ. FT.',
    heroImage: '/src/assets/images/portfolio_aviation_private_lounge_1791539456684.jpg',
    galleryImages: [
      '/src/assets/images/portfolio_aviation_private_lounge_1791539456684.jpg',
      '/src/assets/images/materiality_marble_bronze_detail_1791539402279.jpg',
      '/src/assets/images/portfolio_travertine_penthouse_terrace_1791539391748.jpg',
    ],
    architecturalStatement:
      'Created in collaboration with Lesus Executive Concierge and Lesus Private Jet, this high-security VIP executive terminal blends aeronautical sleekness with old-world private club intimacy. Vertical bronze fluting, custom Italian saddle-leather club armchairs, and floor-to-ceiling panoramic runway views.',
    materials: ['Acoustic Slatted Bronze Wall Cladding', 'Nero Marquina Bookmatched Floors', 'Full-Grain Tuscan Cognac Leather', 'Acoustic Sound-Rated Glazing'],
    keyFeatures: [
      'Direct Aircraft Apron Access & Panoramic Runway View',
      'Concealed Private Boardroom & Escrow Suite',
      'Artisan Cocktail Bar in Fluted Bronze & Calacatta Marble',
      'Bespoke Architectural Acoustic Dampening (STC 65)',
    ],
    spatialZones: [
      { name: 'Runway Salon', description: 'Front-row view of private charter fleet arrival with soundproof architectural envelopes.' },
      { name: 'The Speakeasy Bar', description: 'Curated brass-shelved bar with back-illuminated onyx panels.' },
      { name: 'Private Concierge Suite', description: 'Discrete VIP processing salon with dedicated executive amenities.' },
    ],
  },
  {
    id: 'tigoni-pavilion-estate',
    title: 'The Monolith Pavilion',
    subtitle: 'Highland Modernist Residence',
    category: 'Estates',
    location: 'Tigoni Highlands, Kenya',
    year: '2023',
    area: '13,500 SQ. FT.',
    heroImage: '/src/assets/images/portfolio_solarium_exterior_1791539443456.jpg',
    galleryImages: [
      '/src/assets/images/portfolio_solarium_exterior_1791539443456.jpg',
      '/src/assets/images/portfolio_karen_solarium_interior_1791539379224.jpg',
      '/src/assets/images/hero_obsidian_manor_estate_1791539357090.jpg',
    ],
    architecturalStatement:
      'Set against rolling tea plantations and native evergreen forests, this residence explores board-formed architectural concrete and travertine blocks in cantilevered volumes. Floating glass bedrooms hover over a stone-lined reflecting pool that mirrors the highland sky.',
    materials: ['Board-Formed Architectural Concrete', 'Warm Roman Travertine', 'Deep Bronze Mullions', 'End-Grain Hardwood'],
    keyFeatures: [
      'Cantilevered Upper Living Volume Defying Gravity',
      'Subtle Low-Level Linear Night Illumination',
      'Courtyard Bio-Pool with Natural Filtration',
      'Thermal Mass Passive Climate Regulation',
    ],
    spatialZones: [
      { name: 'Lower Stone Gallery', description: 'Heated travertine floors opening onto the lower reflection pool.' },
      { name: 'Floating Studio', description: 'Suspended architectural workspace overlooking the mist-filled valley.' },
      { name: 'Terraced Tea Garden Court', description: 'Step-down outdoor conversation circle with fire trench.' },
    ],
  },
];

export interface MaterialDetail {
  id: string;
  name: string;
  origin: string;
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
    origin: 'Carrara, Italy',
    category: 'Bookmatched Stone',
    textureDescription: 'Warm milky white ground enriched by dramatic gold and charcoal amber veining, polished to a mirror hone.',
    architecturalApplication: 'Double-height feature fireplace monoliths, waterfall kitchen islands, and master bath sanctuaries.',
    colorHex: '#e8e5dc',
    accentHex: '#c4a47c',
  },
  {
    id: 'fluted-oak',
    name: 'Belgian Smoked Oak',
    origin: 'Flanders, Belgium',
    category: 'Artisanal Millwork',
    textureDescription: 'Precision CNC-fluted vertical timber ribs, fumed with natural ammonia to deep espresso tones.',
    architecturalApplication: 'Acoustic wall paneling, hidden vestibule doors, custom dressing room cabinetry, and ceiling coffering.',
    colorHex: '#382e26',
    accentHex: '#735b49',
  },
  {
    id: 'antique-bronze',
    name: 'Hand-Patinated Architectural Bronze',
    origin: 'Milano, Italy',
    category: 'Architectural Metal',
    textureDescription: 'Heavy extruded solid brass and bronze, chemically oxidized and hand-burnished with hairline wax seal.',
    architecturalApplication: 'Door handles, shadow gaps, fireplace architraves, custom lighting fixtures, and window mullions.',
    colorHex: '#8c7150',
    accentHex: '#c5a880',
  },
  {
    id: 'roman-travertine',
    name: 'Navona Roman Travertine',
    origin: 'Tivoli, Italy',
    category: 'Sedimentary Stone',
    textureDescription: 'Porous cross-cut limestone with delicate horizontal strata, honed without resin fill for authentic tactile depth.',
    architecturalApplication: 'Full-bleed indoor/outdoor terrace flooring, pool copings, monumental staircases, and facade cladding.',
    colorHex: '#c7bfb1',
    accentHex: '#a39b8d',
  },
  {
    id: 'nero-marquina',
    name: 'Nero Marquina Marble',
    origin: 'Markina, Spain',
    category: 'Noir Monolith',
    textureDescription: 'Intense jet-black recrystallized limestone with fine, lightning-like calcite white veining.',
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
    description: 'High-altitude drone sweep and interior cinema walkthrough detailing ultra-prime floating and beachfront mansions.',
    tags: ['Drone Aerial', 'Luxury Real Estate', 'Dubai'],
  },
  {
    id: 'fine-urban-estates',
    title: 'The Modernist Mansions of Karen & Muthaiga',
    client: 'Fine Urban Interiors Ltd',
    role: 'Lead Visual Strategist & Director of Media (2019-2025)',
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
    role: 'Director of Photography & Post-Production',
    metrics: '+45% Increase in Direct Inbound Inquiries',
    description: 'Experiential visual narrative chronicling ultra-luxury hospitality suites, private butler services, and skyline views.',
    tags: ['Hospitality', 'Presidential Suites', 'Dubai'],
  },
];
