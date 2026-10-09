import React, { useState } from 'react';
import { Project } from '../data/portfolioData';
import { ArrowUpRight, Compass, Eye, Sparkles, MapPin, Ruler } from 'lucide-react';
import { architecturalHandSketchTrace } from '../assets/images';

interface MonographWorksProps {
  projects: Project[];
  onOpenProjectDossier: (project: Project) => void;
  onOpenCommission: (projectName: string) => void;
}

export const MonographWorks: React.FC<MonographWorksProps> = ({
  projects,
  onOpenProjectDossier,
  onOpenCommission,
}) => {
  // Allow toggling hand sketch mode on the lead project
  const [showSketchTrace, setShowSketchTrace] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'All' | 'Estates' | 'Interiors' | 'Hospitality'>('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => {
        if (activeCategory === 'Estates') return p.category === 'Estates' || p.category === 'Penthouses';
        if (activeCategory === 'Interiors') return p.category === 'Interiors';
        if (activeCategory === 'Hospitality') return p.category === 'Hospitality';
        return true;
      });

  const leadProject = filteredProjects[0] || projects[0];

  return (
    <section id="portfolio" className="w-full py-28 sm:py-36 bg-[#08080a] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-white/10 pb-12 mb-20 gap-8">
          <div>
            <span className="text-xs font-sans tracking-[0.35em] uppercase text-[#c5a880] font-medium block mb-3">
              The Living Monograph · Dennis Bezalel
            </span>
            <h2
              className="text-4xl sm:text-6xl font-serif text-[#f4f2ee] font-normal leading-[1.08]"
              style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
            >
              Selected Residences & Sanctuaries
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Filter buttons styled like classical editorial chapters */}
            <div className="flex items-center gap-2 border-b border-white/15 pb-2">
              {(['All', 'Estates', 'Interiors', 'Hospitality'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setShowSketchTrace(false);
                  }}
                  className={`px-3 py-1 text-xs font-sans tracking-widest uppercase transition-colors cursor-pointer ${
                    activeCategory === cat
                      ? 'text-[#c5a880] font-medium border-b border-[#c5a880] -mb-[9px]'
                      : 'text-[#9e9b94] hover:text-white'
                  }`}
                >
                  {cat === 'All' ? 'All Commissions' : cat}
                </button>
              ))}
            </div>

            <span className="text-xs text-[#9e9b94] font-mono hidden md:block">
              Volumes I to IV · 2017 to 2026
            </span>
          </div>
        </div>

        {/* FEATURED CHAPTER 01: Grand Editorial Double-Spread with Hand-Sketch Toggle */}
        <div className="mb-32 border border-white/10 bg-[#0e0e11] overflow-hidden">
          <div className="p-8 sm:p-12 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-sans mb-2">
                <span>Featured Masterwork · {leadProject.category}</span>
                <span>/</span>
                <span>{leadProject.location}</span>
              </div>
              <h3
                className="text-3xl sm:text-5xl font-serif text-white font-normal"
                style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
              >
                {leadProject.title}
              </h3>
            </div>

            {/* Interactive Hand Sketch vs Reality Toggle */}
            <div className="flex items-center gap-3 bg-black/60 p-1.5 border border-white/15">
              <button
                onClick={() => setShowSketchTrace(false)}
                className={`px-4 py-2 text-xs font-sans uppercase tracking-wider transition-colors cursor-pointer ${
                  !showSketchTrace ? 'bg-[#c5a880] text-black font-medium' : 'text-[#9e9b94] hover:text-white'
                }`}
              >
                Finished Architecture
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

          {/* Visual Canvas (Displays either Real Residence or Dennis's Hand Drafting Drawing) */}
          <div className="relative w-full h-[60vh] sm:h-[70vh] bg-black overflow-hidden group">
            {showSketchTrace ? (
              <div className="relative w-full h-full animate-in fade-in duration-500">
                <img
                  src={architecturalHandSketchTrace}
                  alt="Dennis's hand drawn concept sketch on yellow tracing paper"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-6 left-6 bg-black/85 p-4 border border-white/15 max-w-sm backdrop-blur-md">
                  <span className="text-[10px] uppercase tracking-widest text-[#c5a880] font-sans block mb-1">
                    Archival Studio Trace Paper
                  </span>
                  <p
                    className="text-sm text-[#f4f2ee] leading-relaxed"
                    style={{ fontFamily: "'Homemade Apple', cursive" }}
                  >
                    "Keep south elevation glazing open to ridge breezes. Cantilever master deck 4.2m over the reflection court."
                  </p>
                  <span className="text-[10px] text-[#9e9b94] font-sans block mt-2">
                    Dennis Ochieng, Scale 1:50 Studio Drawing
                  </span>
                </div>
              </div>
            ) : (
              <div
                onClick={() => onOpenProjectDossier(leadProject)}
                className="relative w-full h-full animate-in fade-in duration-500 cursor-pointer"
              >
                <img
                  src={leadProject.heroImage}
                  alt={leadProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center scale-100 group-hover:scale-102 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-12 text-xs font-sans text-white/80">
                  <span>Gross Built Area: {leadProject.area} · {leadProject.location} · {leadProject.year}</span>
                </div>
              </div>
            )}
          </div>

          {/* Editorial Monograph Text Block */}
          <div className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#111115]">
            <div className="lg:col-span-8">
              <p className="font-serif text-xl sm:text-2xl text-[#f4f2ee] font-light leading-relaxed mb-4">
                "{leadProject.architecturalStatement}"
              </p>
              <div className="flex items-center gap-4 text-xs text-[#9e9b94] font-sans">
                <span>Dennis Ochieng · Lead Architectural Designer</span>
                <span>·</span>
                <span>Fine Urban Construction Collaboration</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <button
                onClick={() => onOpenProjectDossier(leadProject)}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-sans uppercase tracking-widest transition-colors cursor-pointer text-center"
              >
                Inspect Complete Blueprints & Specs
              </button>
              <button
                onClick={() => onOpenCommission(leadProject.title)}
                className="px-6 py-3.5 bg-[#c5a880] hover:bg-[#dfc7a5] text-black text-xs font-sans uppercase tracking-widest font-medium transition-colors cursor-pointer text-center"
              >
                Commission Similar Residence
              </button>
            </div>
          </div>
        </div>

        {/* SUBSEQUENT EDITORIAL SPREADS (Alternating full spreads, just like Ferris Rafauli's book) */}
        <div className="space-y-32">
          {filteredProjects.slice(1).map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={project.id}
                className="border-t border-white/10 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                {/* Image Spread */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div
                    onClick={() => onOpenProjectDossier(project)}
                    className="relative w-full h-80 sm:h-[480px] bg-black border border-white/10 overflow-hidden group cursor-pointer"
                  >
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />

                    <div className="absolute top-4 right-4 p-3 bg-black/60 border border-white/20 text-white group-hover:bg-[#c5a880] group-hover:text-black group-hover:border-[#c5a880] transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>

                    <div className="absolute bottom-4 left-6 text-xs text-[#eae7e1]">
                      <span className="text-[#c5a880] font-sans uppercase tracking-wider text-[11px] block">
                        {project.location}
                      </span>
                      <span className="font-mono text-white/70">{project.area} · Completed {project.year}</span>
                    </div>
                  </div>
                </div>

                {/* Editorial Story Spread */}
                <div className={`lg:col-span-5 flex flex-col justify-between ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div>
                    <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#c5a880] font-medium block mb-2">
                      Chapter 0{idx + 2} · {project.category}
                    </span>
                    <h3
                      className="text-3xl sm:text-4xl font-serif text-white font-normal mb-3"
                      style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
                    >
                      {project.title}
                    </h3>

                    <p className="font-serif text-lg text-[#eae7e1] italic font-light mb-4 leading-relaxed">
                      "{project.subtitle}"
                    </p>

                    <p className="text-xs sm:text-sm text-[#9e9b94] font-sans font-light leading-relaxed mb-6">
                      {project.architecturalStatement}
                    </p>

                    {/* Material callout */}
                    <div className="border-t border-white/10 pt-4 mb-6">
                      <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-2 font-mono">
                        Primary Materiality
                      </span>
                      <div className="flex flex-wrap gap-2 text-xs text-[#c8c5be]">
                        {project.materials.map((m, mIdx) => (
                          <span key={mIdx} className="border border-white/15 px-2.5 py-1 bg-[#121216]">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <button
                      onClick={() => onOpenProjectDossier(project)}
                      className="text-xs uppercase tracking-widest text-[#c5a880] hover:text-white font-sans font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Dossier & Floor Plans</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
