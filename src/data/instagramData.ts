export interface InstagramHighlight {
  id: string;
  title: string;
  coverImage: string;
}

export interface InstagramPost {
  id: string;
  title: string;
  caption: string;
  date: string;
  location: string;
  image: string;
  views: string;
  likes: string;
  comments: string;
  instagramUrl: string;
  tags: string[];
  isRealPortrait?: boolean;
}

export const INSTAGRAM_HIGHLIGHTS: InstagramHighlight[] = [
  { id: 'h1', title: 'Awards', coverImage: '/src/assets/images/portrait_dennis_dear_artists_1791541524326.jpg' },
  { id: 'h2', title: 'Properties', coverImage: '/src/assets/images/instagram_bentley_inspired_mansion_1791540407778.jpg' },
  { id: 'h3', title: 'LifeStyle', coverImage: '/src/assets/images/dennis_yellow_ferrari_lifestyle_1791541543100.jpg' },
  { id: 'h4', title: 'BTS', coverImage: '/src/assets/images/dennis_private_jet_cabin_filming_1791541552224.jpg' },
  { id: 'h5', title: 'LESUS', coverImage: '/src/assets/images/portfolio_aviation_private_lounge_1791539456684.jpg' },
  { id: 'h6', title: 'csChina', coverImage: '/src/assets/images/dennis_sunrise_balcony_skyline_1791541533722.jpg' },
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'dear-artists',
    title: 'Dear, ARTISTS',
    caption:
      'Dear, ARTISTS. Creating timeless architecture and visual stories requires patience, solitude, and unwavering devotion to craftsmanship. Every line drawn on paper is a commitment to the permanence of living space.',
    date: 'FEBRUARY 2026',
    location: 'Dennis Bezalel Atelier, Nairobi',
    image: '/src/assets/images/portrait_dennis_dear_artists_1791541524326.jpg',
    views: '540K',
    likes: '42.1K',
    comments: '890',
    instagramUrl: 'https://www.instagram.com/dennisbezalel/',
    tags: ['#DearArtists', '#DennisBezalel', '#ArchitectureDesign', '#CreativeDirector'],
    isRealPortrait: true,
  },
  {
    id: 'lifestyle-ferrari',
    title: 'Precision, Form & Motion',
    caption:
      'The intersection of high automotive engineering and architectural design. Form follows passion. Yellow Ferrari Roma parked outside modern retail plaza. Living the craft.',
    date: 'JANUARY 2026',
    location: 'Nairobi & Dubai',
    image: '/src/assets/images/dennis_yellow_ferrari_lifestyle_1791541543100.jpg',
    views: '780K',
    likes: '64.5K',
    comments: '1,120',
    instagramUrl: 'https://www.instagram.com/dennisbezalel/',
    tags: ['#Ferrari', '#DennisBezalel', '#LuxuryLifestyle', '#FormAndFunction'],
    isRealPortrait: true,
  },
  {
    id: 'lesus-private-jet-bts',
    title: 'In-Flight BTS: Lesus Private Jet',
    caption:
      'Behind the lens documenting the ultimate executive flight experience with Lesus Private Jet & Executive Concierge. Capturing high-altitude luxury hospitality in motion.',
    date: 'DECEMBER 2025',
    location: 'Wilson VIP & International Airspace',
    image: '/src/assets/images/dennis_private_jet_cabin_filming_1791541552224.jpg',
    views: '1.2M',
    likes: '91.2K',
    comments: '1,430',
    instagramUrl: 'https://www.instagram.com/dennisbezalel/',
    tags: ['#LesusAviation', '#PrivateJet', '#DennisBezalel', '#Cinematography'],
    isRealPortrait: true,
  },
  {
    id: 'morning-choices-balcony',
    title: 'Morning Reflections: Nairobi Skyline',
    caption:
      'Each morning, happiness arrives at your door in a form of choices... Golden hour sun climbing over the city, contemplating the next landmark residential commission.',
    date: 'NOVEMBER 2025',
    location: 'Skyline Terrace, Nairobi',
    image: '/src/assets/images/dennis_sunrise_balcony_skyline_1791541533722.jpg',
    views: '410K',
    likes: '35.6K',
    comments: '512',
    instagramUrl: 'https://www.instagram.com/dennisbezalel/',
    tags: ['#MorningChoices', '#SkylineViews', '#DennisBezalel', '#NairobiAtelier'],
    isRealPortrait: true,
  },
  {
    id: 'bentley-suite',
    title: 'Bentley-Inspired Bespoke Residence',
    caption:
      'Unveiling the bespoke Bentley-inspired residence in collaboration with Fine Urban Co Interiors Ltd. Diamond-quilted saddle leather wall upholstery, grand double-height archways, and a monolithic bookmatched Nero Marquina fireplace hearth.',
    date: 'OCTOBER 2025',
    location: 'Runda, Nairobi',
    image: '/src/assets/images/instagram_bentley_inspired_mansion_1791540407778.jpg',
    views: '312K',
    likes: '14.8K',
    comments: '482',
    instagramUrl: 'https://www.instagram.com/dennisbezalel/',
    tags: ['#BentleyInterior', '#FineUrban', '#DennisBezalel', '#HauteLiving'],
  },
  {
    id: 'modern-farmhouse',
    title: 'The Modernist Highland Farmhouse',
    caption:
      'Modernist farmhouse architecture capturing the expansive rolling hills of Tigoni. Vaulted timber rafter geometry framing natural daylight and bespoke Scandinavian-African low-slung interiors. 2.6M+ views on YouTube.',
    date: 'SEPTEMBER 2025',
    location: 'Tigoni Highlands, Kenya',
    image: '/src/assets/images/instagram_modern_farmhouse_walkthrough_1791540418321.jpg',
    views: '2.6M',
    likes: '89.4K',
    comments: '1,240',
    instagramUrl: 'https://www.instagram.com/dennisbezalel/',
    tags: ['#ModernFarmhouse', '#DennisBezalel', '#ArchitecturalDigest', '#FineUrban'],
  },
];
