import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Award, GraduationCap, MapPin, Compass, PenTool, BookOpen, ArrowRight, CheckCircle2 } from 'lucide-react';
import { dennisDeskPhoto } from '../assets/images';

export const ArchitectPage: React.FC = () => {
  const [activeEssay, setActiveEssay] = useState(0);

  const ESSAYS = [
    {
      title: 'On the Loss of Architectural Gravitas',
      subtitle: 'Why modern glass-and-plaster boxes fail to comfort the human soul',
      date: 'Nairobi Monograph Essay · 2024',
      content:
        'Somewhere in the late twentieth century, architecture surrendered its dignity to commercial expediency. We began building houses with drywall that you can put a fist through, faux plastic laminates that peel within five years, and glass curtain walls that turn living rooms into greenhouses. True architecture must possess weight. When you walk into a stone-clad vestibule, your blood pressure drops. The acoustic resonance of mass creates a psychological sanctuary that lightweight modernism can never achieve.',
    },
    {
      title: 'Building at the Equator: The Geometry of Solar Shadow',
      subtitle: 'How high-altitude tropical sunlight dictates structural volume',
      date: 'Atelier Technical Dispatch · 2023',
      content:
        'In Nairobi, the sun is directly overhead at midday with intense ultraviolet radiation, yet the nights drop into crisp mountain chills. This thermal swing requires deep architectural reveals. We do not use paper-thin eaves; our overhangs extend three meters, casting bold horizontal shadows that protect the interior while allowing gentle indirect clerestory daylight to illuminate the hearth.',
    },
    {
      title: 'The 100-Year House: Beyond Speculative Cycles',
      subtitle: 'Designing for legacy rather than short-term real estate resale',
      date: 'Client Address · 2025',
      content:
        'A speculative developer asks: "What is the cheapest material that looks acceptable in a rendering?" An architect of legacy asks: "How will this bronze door handle feel in the hand of the client’s grandchild fifty years from today?" When we choose Belgian smoked oak or quarry-cut Roman travertine, we are making a solemn pact with time.',
    },
  ];

  const INSTRUMENTS = [
    {
      name: 'Rotring Rapidograph 0.35 & 0.50mm',
      category: 'German Technical Drafting Pens',
      note: 'Dennis drafts all conceptual site plans and structural sections with archival black pigment on 300gsm cotton vellum.',
    },
    {
      name: 'Cast Solid Brass Proportioning Compass',
      category: 'Classical Geometric Tool',
      note: 'Used to verify Golden Ratio (1:1.618) harmonics across ceiling coffer grids and column spacing.',
    },
    {
      name: 'Carl Zeiss 10x Optical Loupe',
      category: 'Mineral & Joint Inspection',
      note: 'Employed at stone quarries in Carrara and Verona to inspect crystalline micro-fissures in raw marble blocks.',
    },
    {
      name: 'Handmade Italian Leather Field Notebook',
      category: 'Daily Site Chronicle',
      note: 'Contains daily morning site notes, contractor sketches, and material batch numbers from every commission.',
    },
  ];

  const TIMELINE = [
    {
      year: '2018',
      milestone: 'Maseno University Architectural Pedigree',
      detail: 'Graduated with high honors, mastering classical spatial geometry, structural physics, and African vernacular architecture.',
    },
    {
      year: '2020',
      milestone: 'Founding of Dennis Bezalel Atelier',
      detail: 'Established an independent private architectural studio in Nairobi, dedicated to monolithic luxury residences and private estates.',
    },
    {
      year: '2022',
      milestone: 'Master Estates in Karen & Muthaiga',
      detail: 'Commissioned to direct spatial design and visual storytelling for flagship private residences, amassing over 20M views.',
    },
    {
      year: '2023',
      milestone: 'International Direction: Dubai & The Gulf',
      detail: 'Consulted on beachfront mansion architecture for Heart of Europe (The World Islands) and presidential hospitality suites in Dubai.',
    },
    {
      year: '2025',
      milestone: 'Urban Sanctuaries: B&Q Towers & Siaya Park',
      detail: 'Overseeing bespoke high-rise residential interiors and private multi-unit sanctuaries in Kileleshwa, Nairobi.',
    },
  ];

  return (
    <div className="w-full pt-28 pb-32 bg-[#08080a] min-h-screen text-[#eae7e1]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-[#9e9b94]">
          <Link to="/" className="hover:text-white transition-colors">
            Atelier
          </Link>
          <span>/</span>
          <span className="text-[#c5a880]">The Architect</span>
        </div>

        {/* Page Header */}
        <div className="border-b border-white/10 pb-12 mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2 h-2 bg-[#c5a880]" />
            <span className="text-xs font-sans tracking-[0.35em] uppercase text-[#c5a880] font-medium">
              Biography, Pedigree & Architectural Voice
            </span>
          </div>
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#f4f2ee] font-normal leading-[1.05]"
            style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
          >
            Dennis Ochieng (Dennis Bezalel)
          </h1>
          <p className="mt-5 text-sm sm:text-base text-[#9e9b94] font-light max-w-3xl leading-relaxed">
            Architectural designer, spatial strategist, and creative director bridging monumental classical craftsmanship with contemporary monolithic architecture across East Africa and the Middle East.
          </p>
        </div>

        {/* Biography Section with Large Portrait */}
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#0d0d10] border border-white/10 p-8 sm:p-14">
          <div className="lg:col-span-5">
            <div className="relative aspect-4/5 overflow-hidden border border-white/20 bg-black shadow-2xl">
              <img
                src={dennisDeskPhoto}
                alt="Dennis Ochieng Bezalel at drafting desk"
                className="w-full h-full object-cover object-center grayscale contrast-115"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-serif text-white font-medium block">
                  Dennis Ochieng Bezalel
                </span>
                <span className="text-[10px] font-sans tracking-widest uppercase text-[#c5a880]">
                  Principal Architect · Nairobi
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#c5a880] font-medium block mb-3">
                Biographical Monograph
              </span>
              <h2
                className="text-2xl sm:text-3xl font-serif text-white mb-6 leading-snug"
                style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
              >
                "Architecture is the physical manifestation of human dignity."
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-[#9e9b94] font-light leading-relaxed">
                <p>
                  Trained at Maseno University with a foundational grounding in structural physics and architectural theory, Dennis Ochieng developed a deep obsession with classical symmetry and monumental material permanence early in his career.
                </p>
                <p>
                  Recognizing that contemporary African real estate was becoming saturated with ephemeral drywall and synthetic finishes, Dennis established his private practice in Nairobi with an unyielding mandate: to construct bespoke residences with the gravity of European monuments and the organic soul of the African continent.
                </p>
                <p>
                  His work combines the haute couture craftsmanship of Ferris Rafauli with the poetic daylight restraint of Peter Zumthor. Today, Dennis oversees a strictly limited roster of private commissions each year, maintaining direct, personal stewardship over every project from foundation to key handover.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6">
              <a
                href="https://www.instagram.com/dennisbezalel/?__pwa=1"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a880] hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@dennisbezalel</span>
              </a>
              <span className="text-white/20">·</span>
              <a
                href="https://youtube.com/@dennisbezalel?si=sjAgKEOQGBJD4tRj"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#c8c5be] hover:text-white transition-colors"
              >
                <Youtube className="w-4 h-4 text-red-500" />
                <span>YouTube Channel</span>
              </a>
            </div>
          </div>
        </div>

        {/* Selected Architectural Essays by Dennis */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-sans tracking-[0.35em] uppercase text-[#c5a880] block mb-2 font-medium">
              Theoretical Writings
            </span>
            <h2
              className="text-3xl sm:text-4xl font-serif text-white"
              style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
            >
              Selected Essays & Dispatches
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 flex flex-col space-y-2">
              {ESSAYS.map((essay, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveEssay(idx)}
                  className={`text-left p-6 border transition-all cursor-pointer ${
                    activeEssay === idx
                      ? 'bg-[#121217] border-[#c5a880] text-white'
                      : 'bg-[#0a0a0d] border-white/10 text-[#9e9b94] hover:border-white/25 hover:text-white'
                  }`}
                >
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#c5a880] block mb-1">
                    {essay.date}
                  </span>
                  <h3 className="text-base font-serif text-white mb-1">{essay.title}</h3>
                  <p className="text-xs text-[#7e7b74] font-light truncate">{essay.subtitle}</p>
                </button>
              ))}
            </div>

            <div className="lg:col-span-7 bg-[#0e0e12] border border-[#c5a880]/30 p-8 sm:p-12 shadow-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#c5a880] block mb-2">
                {ESSAYS[activeEssay].date}
              </span>
              <h3
                className="text-2xl sm:text-3xl font-serif text-white mb-3"
                style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
              >
                {ESSAYS[activeEssay].title}
              </h3>
              <span className="text-xs text-[#9e9b94] block mb-6 italic">
                {ESSAYS[activeEssay].subtitle}
              </span>
              <div className="border-t border-white/10 pt-6">
                <p className="text-xs sm:text-sm text-[#d0cdcb] font-light leading-relaxed whitespace-pre-line">
                  {ESSAYS[activeEssay].content}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Drafting Instruments of the Architect */}
        <div className="mb-24 p-8 sm:p-14 bg-[#0b0b0e] border border-white/10">
          <div className="border-b border-white/10 pb-6 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-sans tracking-[0.35em] uppercase text-[#c5a880] font-medium block mb-2">
                The Tactile Discipline
              </span>
              <h2
                className="text-2xl sm:text-3xl font-serif text-white"
                style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
              >
                Instruments of the Drafting Desk
              </h2>
            </div>
            <p className="text-xs text-[#9e9b94] max-w-md font-light">
              Dennis Bezalel uses analog precision tools to conceptualize every private sanctuary before any digital modeling occurs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INSTRUMENTS.map((inst, iIdx) => (
              <div key={iIdx} className="p-6 bg-[#101015] border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#c5a880] block mb-2">
                    0{iIdx + 1} · {inst.category}
                  </span>
                  <h3 className="text-base font-serif text-white mb-3">{inst.name}</h3>
                  <p className="text-xs text-[#9e9b94] font-light leading-relaxed">{inst.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Timeline */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-sans tracking-[0.35em] uppercase text-[#c5a880] block mb-2 font-medium">
              Trajectory & Pedigree
            </span>
            <h2
              className="text-3xl sm:text-4xl font-serif text-white"
              style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
            >
              Atelier Milestones
            </h2>
          </div>

          <div className="space-y-4">
            {TIMELINE.map((item, tIdx) => (
              <div
                key={tIdx}
                className="p-6 sm:p-8 bg-[#0d0d10] border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-6">
                  <span className="text-xl sm:text-2xl font-mono text-[#c5a880] font-light shrink-0">
                    {item.year}
                  </span>
                  <div>
                    <h3 className="text-lg font-serif text-white mb-1">{item.milestone}</h3>
                    <p className="text-xs text-[#9e9b94] font-light">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Step / Direct Contact */}
        <div className="p-10 sm:p-16 border border-white/15 bg-gradient-to-r from-[#101014] to-[#0c0c0e] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3
              className="text-2xl sm:text-3xl font-serif text-white"
              style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
            >
              Direct Dialogue with Dennis Bezalel
            </h3>
            <p className="text-xs text-[#9e9b94] max-w-md mt-2 leading-relaxed">
              Inquire about scheduling an appointment at our Nairobi studio or requesting a confidential estate consultation.
            </p>
          </div>

          <Link
            to="/conversation"
            className="px-8 py-3.5 bg-[#c5a880] text-black text-xs uppercase tracking-widest font-medium hover:bg-[#dfc7a5] transition-colors shadow-xl cursor-pointer shrink-0"
          >
            Start Conversation
          </Link>
        </div>
      </div>
    </div>
  );
};
