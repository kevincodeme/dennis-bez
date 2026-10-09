import {
  dennisPrivateJetCabinFilming,
  dennisPrivateJetExterior,
  dennisSunriseBalconySkyline,
  dennisYellowFerrariLifestyle,
  instagramBentleyInspiredMansion,
  instagramModernFarmhouseWalkthrough,
  portraitDennisDearArtists,
} from '../assets/images';
import chinaHighlightCover from '../assets/images/dennis_sunrise_balcony_skyline_1791541533722.jpg';

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
  { id: 'h1', title: 'Awards', coverImage: portraitDennisDearArtists },
  { id: 'h2', title: 'Properties', coverImage: instagramBentleyInspiredMansion },
  { id: 'h3', title: 'LifeStyle', coverImage: dennisYellowFerrariLifestyle },
  { id: 'h4', title: 'BTS', coverImage: dennisPrivateJetCabinFilming },
  { id: 'h5', title: 'LESUS', coverImage: dennisPrivateJetExterior },
  { id: 'h6', title: 'csChina', coverImage: chinaHighlightCover },
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'dear-artists',
    title: 'Dear, ARTISTS',
    caption:
      'Dear, ARTISTS. Creating timeless architecture and visual stories requires patience, solitude, and unwavering devotion to craftsmanship. Every line drawn on paper is a commitment to the permanence of living space.',
    date: 'FEBRUARY 2026',
    location: 'Dennis Bezalel Atelier, Nairobi',
    image: portraitDennisDearArtists,
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
    image: dennisYellowFerrariLifestyle,
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
    image: dennisPrivateJetCabinFilming,
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
    image: dennisSunriseBalconySkyline,
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
    image: instagramBentleyInspiredMansion,
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
    image: instagramModernFarmhouseWalkthrough,
    views: '2.6M',
    likes: '89.4K',
    comments: '1,240',
    instagramUrl: 'https://www.instagram.com/dennisbezalel/',
    tags: ['#ModernFarmhouse', '#DennisBezalel', '#ArchitecturalDigest', '#FineUrban'],
  },
];
