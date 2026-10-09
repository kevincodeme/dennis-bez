import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, ExternalLink, Calendar, MapPin, Compass, Clock, Camera, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { bqTowersLiving, siayaParkExterior, dennisDeskPhoto, bqTowersKitchen, siayaParkBedroom } from '../assets/images';

interface SiteDispatch {
  id: string;
  number: string;
  date: string;
  location: string;
  coordinates: string;
  weather: string;
  category: 'Site' | 'Quarry' | 'Studio' | 'Joinery';
  title: string;
  image: string;
  note: string;
  contractorAction: string;
}

const DISPATCHES: SiteDispatch[] = [
  {
    id: 'dispatch-45',
    number: '#45',
    date: 'OCTOBER 2025',
    location: 'Siaya Park Apartments · Kileleshwa, Nairobi',
    coordinates: '1°16’42” S, 36°47’28” E',
    weather: 'Clear Equatorial Light · 24°C',
    category: 'Site',
    title: 'Glazing Alignment & Deep Eaves Shadow Inspection',
    image: siayaParkExterior,
    note:
      'Checked the exterior perimeter glazing frames this morning before the midday sun crested. The cantilevered balconies are performing as calculated—casting deep horizontal shadows that keep the interior living salons naturally cool without running high HVAC loads.',
    contractorAction:
      'Instructed the facade glazing crew to maintain a strictly uniform 4mm silicone expansion gap along the perimeter bronze sub-frames.',
  },
  {
    id: 'dispatch-44',
    number: '#44',
    date: 'SEPTEMBER 2025',
    location: 'B&Q Towers Five Bedroom Suite · Nairobi',
    coordinates: '1°17’05” S, 36°48’15” E',
    weather: 'Overcast Morning · 19°C',
    category: 'Joinery',
    title: 'Dry-Fit Inspection: Custom Teak Wall & Concealed TV Cavity',
    image: bqTowersLiving,
    note:
      'Dry-fitting the fluted timber media partition wall today. The vertical grain flows continuously from the low console right up into the shadow gap at the 3.4m ceiling. When you run your hand across the joints, there is zero step or misalignment.',
    contractorAction:
      'Verified acoustic dampening foam insulation behind the timber ribs to prevent any vibration reverberation from concealed subwoofers.',
  },
  {
    id: 'dispatch-43',
    number: '#43',
    date: 'AUGUST 2025',
    location: 'Atelier Drafting Studio · Riverside Drive, Nairobi',
    coordinates: '1°15’55” S, 36°48’02” E',
    weather: 'Studio Ambient Light · 21°C',
    category: 'Studio',
    title: 'Midnight Axonometric Studies for a Karen Private Sanctuary',
    image: dennisDeskPhoto,
    note:
      'Working past midnight at the drafting table with 2B graphite. Exploring a quadruple-height central atrium connecting an underground wine vault to a skyward-facing glass observatory. The proportion between monumental stone mass and negative void is finally clicking.',
    contractorAction:
      'Drafted initial structural massing sketches to hand over to the lead structural engineering team for preliminary footing calculations.',
  },
  {
    id: 'dispatch-42',
    number: '#42',
    date: 'JULY 2025',
    location: 'B&Q Towers Gourmet Kitchen · Nairobi',
    coordinates: '1°17’05” S, 36°48’15” E',
    weather: 'Late Afternoon Golden Hour · 26°C',
    category: 'Joinery',
    title: 'Seamless Stone Island & Cabinetry Hardware Torque Audit',
    image: bqTowersKitchen,
    note:
      'Inspected the culinary zone installation today. The seamless stone preparation island anchors the entire room. Checked the concealed soft-close hinges—calibrated to close with a reassuring, quiet hydraulic glide.',
    contractorAction:
      'Audited under-cabinet linear warm lighting temperature (calibrated to exactly 2700K warm white to complement natural timber tones).',
  },
  {
    id: 'dispatch-41',
    number: '#41',
    date: 'JUNE 2025',
    location: 'Siaya Park Private Master Suite · Kileleshwa',
    coordinates: '1°16’42” S, 36°47’28” E',
    weather: 'Morning Mist · 18°C',
    category: 'Site',
    title: 'Master Chamber Acoustic Sealing & Daylight Softening',
    image: siayaParkBedroom,
    note:
      'Early morning site walk in the master suite. The acoustic seals around the solid-core doors drop the street sound down to an absolute hush. The morning sunlight filters gently across the textured wall surfaces.',
    contractorAction:
      'Approved final prime coat on drywall returns and checked electrical drops for custom bedside bronze reading fixtures.',
  },
];

export const FieldDiaryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Site' | 'Studio' | 'Joinery'>('All');

  const filteredDispatches =
    activeCategory === 'All'
      ? DISPATCHES
      : DISPATCHES.filter((d) => d.category === activeCategory);

  return (
    <div className="w-full pt-28 pb-32 bg-[#08080a] min-h-screen text-[#eae7e1]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-[#9e9b94]">
          <Link to="/" className="hover:text-white transition-colors">
            Atelier
          </Link>
          <span>/</span>
          <span className="text-[#c5a880]">Field Diary & Dispatches</span>
        </div>

        {/* Page Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-white/10 pb-12 mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 bg-[#c5a880]" />
              <span className="text-xs font-sans tracking-[0.35em] uppercase text-[#c5a880] font-medium">
                Live Chronicles Straight From Site & Studio
              </span>
            </div>
            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#f4f2ee] font-normal leading-[1.05]"
              style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
            >
              Field Diary & Dispatches
            </h1>
            <p className="mt-5 text-sm sm:text-base text-[#9e9b94] font-light max-w-2xl leading-relaxed">
              Unfiltered notes, construction inspections, and late-night studio sketches straight from the desk and active project sites of Dennis Bezalel in Nairobi.
            </p>
          </div>

          <a
            href="https://www.instagram.com/dennisbezalel/?__pwa=1"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3.5 border border-[#c5a880]/50 hover:border-[#c5a880] bg-[#c5a880]/10 text-xs font-sans uppercase tracking-[0.2em] text-[#dfc7a5] hover:text-white transition-all self-start lg:self-auto cursor-pointer shadow-lg"
          >
            <Instagram className="w-4 h-4 text-[#c5a880]" />
            <span>Follow @dennisbezalel</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-12">
          <div className="flex items-center gap-2">
            {(['All', 'Site', 'Studio', 'Joinery'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-sans tracking-widest uppercase transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#c5a880] text-black font-medium shadow-md'
                    : 'text-[#9e9b94] hover:text-white bg-white/5 border border-white/5'
                }`}
              >
                {cat === 'All' ? 'All Dispatches' : cat}
              </button>
            ))}
          </div>

          <span className="text-xs font-mono text-[#9e9b94]">
            {filteredDispatches.length} Documented Entries
          </span>
        </div>

        {/* Dispatches Timeline List */}
        <div className="space-y-16 mb-24">
          {filteredDispatches.map((dispatch) => (
            <div
              key={dispatch.id}
              className="bg-[#0e0e12] border border-white/10 hover:border-[#c5a880]/40 transition-colors p-8 sm:p-12 shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Photo Column */}
                <div className="lg:col-span-5 relative">
                  <div className="aspect-16/10 sm:aspect-4/3 overflow-hidden border border-white/15 bg-black">
                    <img
                      src={dispatch.image}
                      alt={dispatch.title}
                      className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#9e9b94]">
                    <span>{dispatch.coordinates}</span>
                    <span className="text-[#c5a880]">{dispatch.category}</span>
                  </div>
                </div>

                {/* Editorial Column */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#9e9b94] mb-3">
                      <span className="font-mono text-[#c5a880] font-bold text-sm">
                        {dispatch.number}
                      </span>
                      <span>·</span>
                      <span className="font-mono tracking-wider">{dispatch.date}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1.5 font-sans">
                        <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
                        {dispatch.location}
                      </span>
                    </div>

                    <h2
                      className="text-2xl sm:text-3xl font-serif text-white mb-4 leading-snug"
                      style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
                    >
                      {dispatch.title}
                    </h2>

                    <div className="p-4 bg-white/5 border-l-2 border-[#c5a880] mb-6">
                      <span className="text-[10px] font-sans tracking-widest uppercase text-[#c5a880] block mb-1">
                        Principal Architect’s Field Note
                      </span>
                      <p className="text-xs sm:text-sm text-[#e0ded8] font-light leading-relaxed italic">
                        "{dispatch.note}"
                      </p>
                    </div>

                    <div className="border-t border-white/10 pt-4">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#9e9b94] block mb-1">
                        Site Execution Instruction:
                      </span>
                      <p className="text-xs text-[#c8c5be] font-light">
                        {dispatch.contractorAction}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#9e9b94]">
                    <span className="font-mono text-[11px]">{dispatch.weather}</span>
                    <span className="text-[#c5a880] tracking-wider uppercase text-[10px]">
                      Verified Atelier Site Log
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to start a conversation */}
        <div className="p-10 sm:p-16 border border-white/15 bg-gradient-to-r from-[#101014] to-[#0c0c0e] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3
              className="text-2xl sm:text-3xl font-serif text-white"
              style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
            >
              Have Dennis Bezalel Document & Build Your Sanctuary
            </h3>
            <p className="text-xs text-[#9e9b94] max-w-md mt-2 leading-relaxed">
              Every commission receives direct principal site management and dedicated archive documentation.
            </p>
          </div>

          <Link
            to="/conversation"
            className="px-8 py-3.5 bg-[#c5a880] text-black text-xs uppercase tracking-widest font-medium hover:bg-[#dfc7a5] transition-colors shadow-xl cursor-pointer shrink-0"
          >
            Initiate Commission
          </Link>
        </div>
      </div>
    </div>
  );
};
