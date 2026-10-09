import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { PROJECTS, Project } from '../data/portfolioData';
import { ArrowUpRight, ArrowRight, Sparkles, MapPin, Ruler, Calendar, Compass } from 'lucide-react';
import { architecturalHandSketchTrace } from '../assets/images';

export const ResidencesPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<'All' | 'Estates' | 'Penthouses' | 'Interiors' | 'Hospitality'>('All');
  const [showSketchTrace, setShowSketchTrace] = useState(false);

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => {
        if (activeCategory === 'Estates') return p.category === 'Estates';
        if (activeCategory === 'Penthouses') return p.category === 'Penthouses';
        if (activeCategory === 'Interiors') return p.category === 'Interiors';
        if (activeCategory === 'Hospitality') return p.category === 'Hospitality';
        return true;
      });

  const leadProject = PROJECTS[0];

  return (
    <div className="w-full pt-28 pb-32 bg-[#08080a] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Breadcrumb & Subtitle */}
        <div className="mb-6 flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-[#9e9b94]">
          <Link to="/" className="hover:text-white transition-colors">
            Atelier
          </Link>
          <span>/</span>
          <span className="text-[#c5a880]">The Residences</span>
        </div>

        {/* Page Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-white/10 pb-12 mb-16 gap-8">
          <div>
            <span className="text-xs font-sans tracking-[0.35em] uppercase text-[#c5a880] font-medium block mb-3">
              Monograph Portfolio · Volumes I to IV
            </span>
            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#f4f2ee] font-normal leading-[1.05]"
              style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
            >
              The Residences & Sanctuaries
            </h1>
            <p className="mt-4 text-sm sm:text-base text-[#9e9b94] font-light max-w-2xl leading-relaxed">
              Every architectural commission by Dennis Bezalel is conceived as an enduring sanctuary. From monolithic basalt stone facades in Karen to floating glass penthouses overlooking the Arabian Gulf.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-white/15 pb-2">
            {(['All', 'Estates', 'Penthouses', 'Interiors', 'Hospitality'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setShowSketchTrace(false);
                }}
                className={`px-3 py-1.5 text-xs font-sans tracking-widest uppercase transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'text-[#c5a880] font-medium border-b border-[#c5a880] -mb-[10px]'
                    : 'text-[#9e9b94] hover:text-white'
                }`}
              >
                {cat === 'All' ? 'All Works' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Lead Masterwork Feature with Hand Drafting Toggle */}
        <div className="mb-24 border border-white/10 bg-[#0c0c0f] overflow-hidden">
          <div className="p-8 sm:p-12 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-sans mb-2">
                <span>Curated Masterpiece · {leadProject.category}</span>
                <span>/</span>
                <span>{leadProject.location}</span>
              </div>
              <h2
                className="text-3xl sm:text-5xl font-serif text-white font-normal"
                style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
              >
                {leadProject.title}
              </h2>
            </div>

            {/* Interactive Hand Sketch vs Architecture Toggle */}
            <div className="flex items-center gap-3 bg-black/60 p-1.5 border border-white/15">
              <button
                onClick={() => setShowSketchTrace(false)}
                className={`px-4 py-2 text-xs font-sans uppercase tracking-wider transition-colors cursor-pointer ${
                  !showSketchTrace ? 'bg-[#c5a880] text-black font-medium' : 'text-[#9e9b94] hover:text-white'
                }`}
              >
                Finished Residence
              </button>
              <button
                onClick={() => setShowSketchTrace(true)}
                className={`px-4 py-2 text-xs font-sans uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 ${
                  showSketchTrace ? 'bg-[#c5a880] text-black font-medium' : 'text-[#9e9b94] hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Hand Drafting Trace</span>
              </button>
            </div>
          </div>

          <div className="relative w-full h-[60vh] sm:h-[70vh] bg-black overflow-hidden group">
            {showSketchTrace ? (
              <div className="relative w-full h-full animate-in fade-in duration-500">
                <img
                  src={architecturalHandSketchTrace}
                  alt="Dennis's hand drawn concept sketch on yellow tracing paper"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-6 left-6 bg-black/85 p-5 border border-white/15 max-w-sm backdrop-blur-md">
                  <span className="text-[10px] uppercase tracking-widest text-[#c5a880] font-sans block mb-1">
                    Archival Studio Trace Paper
                  </span>
                  <p className="text-xs text-[#f4f2ee] leading-relaxed">
                    Original pencil on yellow architectural trace paper drafted by Dennis at the studio drafting table prior to 3D execution.
                  </p>
                </div>
              </div>
            ) : (
              <div className="relative w-full h-full">
                <img
                  src={leadProject.heroImage}
                  alt={leadProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              </div>
            )}

            <div className="absolute bottom-8 right-8 z-20">
              <button
                onClick={() => navigate(`/residences/${leadProject.id}`)}
                className="px-6 py-3 bg-[#c5a880] text-black text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#dfc7a5] transition-colors flex items-center gap-2 cursor-pointer shadow-2xl"
              >
                <span>Open Project Dossier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Grid of all residences */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => navigate(`/residences/${project.id}`)}
              className="group cursor-pointer flex flex-col justify-between bg-[#0b0b0e] border border-white/10 hover:border-[#c5a880]/60 transition-all duration-500 overflow-hidden"
            >
              <div className="relative aspect-16/11 overflow-hidden bg-black">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                <div className="absolute top-4 left-4 text-[10px] tracking-widest uppercase font-mono px-2.5 py-1 bg-black/80 border border-white/15 text-[#c5a880] backdrop-blur-sm">
                  0{idx + 1} · {project.category}
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between grow">
                <div>
                  <div className="flex items-center justify-between text-[11px] tracking-[0.2em] uppercase text-[#9e9b94] font-sans mb-3">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3
                    className="text-2xl font-serif text-white group-hover:text-[#c5a880] transition-colors mb-3 leading-snug"
                    style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#9e9b94] font-sans font-light line-clamp-3 leading-relaxed mb-6">
                    {project.architecturalStatement}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#9e9b94] group-hover:text-[#c5a880] transition-colors">
                  <span className="font-mono text-[11px] uppercase tracking-wider">{project.area}</span>
                  <span className="inline-flex items-center gap-1 text-[11px] tracking-[0.2em] uppercase">
                    <span>Explore Page</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Commission Direct Portal */}
        <div className="mt-28 p-10 sm:p-16 border border-white/15 bg-gradient-to-b from-[#111116] to-[#0a0a0d] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#c5a880] block mb-2">
              Private Commission
            </span>
            <h3
              className="text-2xl sm:text-4xl font-serif text-white"
              style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
            >
              Conceive Your Bespoke Sanctuary
            </h3>
            <p className="text-xs text-[#9e9b94] max-w-md mt-2 font-light leading-relaxed">
              Dennis Bezalel accepts a strictly limited number of private residential commissions annually in Nairobi, Dubai, and internationally.
            </p>
          </div>

          <Link
            to="/contact"
            className="px-8 py-4 bg-[#c5a880] text-black text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#dfc7a5] transition-colors whitespace-nowrap shadow-xl"
          >
            Initiate Atelier Dialogue
          </Link>
        </div>
      </div>
    </div>
  );
};
