import React, { useState } from 'react';
import { Project } from '../data/portfolioData';
import { ArrowUpRight, Eye } from 'lucide-react';

interface PortfolioProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

type FilterCategory = 'All' | 'Estates' | 'Penthouses' | 'Interiors' | 'Hospitality';

export const Portfolio: React.FC<PortfolioProps> = ({
  projects,
  onSelectProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');

  const categories: FilterCategory[] = [
    'All',
    'Estates',
    'Penthouses',
    'Interiors',
    'Hospitality',
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="w-full py-28 sm:py-36 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-white/10 pb-12 mb-12 gap-8">
          <div>
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#c5a880] font-medium block mb-3">
              The Collection · Dennis Bezalel
            </span>
            <h2
              className="text-3xl sm:text-5xl font-serif text-[#f4f2ee] font-normal leading-tight"
              style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
            >
              Selected Architectural Works
            </h2>
          </div>

          {/* Interactive Filter Tabs (Buttons with click handlers) */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-[#141418] border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs font-sans tracking-[0.15em] uppercase transition-colors cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#c5a880] text-black font-medium'
                    : 'text-[#9e9b94] hover:text-white'
                }`}
              >
                {cat === 'All' ? 'All Works' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => {
            // First item or index 0 takes 2 cols for dramatic asymmetry
            const isWide = idx === 0 || idx === 3;

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group cursor-pointer flex flex-col justify-between bg-[#121215] border border-white/10 hover:border-[#c5a880]/60 transition-all duration-500 overflow-hidden ${
                  isWide ? 'md:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Image Frame */}
                <div className="relative w-full h-80 sm:h-96 overflow-hidden bg-black">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Corner Inspect Icon */}
                  <div className="absolute top-4 right-4 p-2.5 bg-black/60 backdrop-blur-sm border border-white/20 text-white group-hover:bg-[#c5a880] group-hover:text-black group-hover:border-[#c5a880] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>

                  {/* Typographic Metadata overlay inside image */}
                  <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-[#c8c5be]">
                    <div className="flex items-center gap-2">
                      <span className="text-[#c5a880] font-sans uppercase tracking-widest text-[11px]">
                        {project.category}
                      </span>
                      <span>·</span>
                      <span>{project.location}</span>
                    </div>
                    <span className="font-mono text-[11px] text-white/70">{project.year}</span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <h3
                      className="text-2xl sm:text-3xl font-serif text-[#f4f2ee] font-normal group-hover:text-[#c5a880] transition-colors mb-2"
                      style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#9e9b94] font-sans font-light line-clamp-2 leading-relaxed mb-4">
                      {project.subtitle}. {project.architecturalStatement}
                    </p>
                  </div>

                  {/* Unboxed Metadata Footer */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#9e9b94]">
                    <div className="flex items-center gap-2">
                      <span className="text-white/80 font-medium">{project.area}</span>
                      <span>·</span>
                      <span>Bespoke Commission</span>
                    </div>

                    <span className="flex items-center gap-1.5 text-xs text-[#c5a880] group-hover:underline underline-offset-4 font-sans font-medium">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Dossier</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-16 text-center border-t border-white/10 pt-10">
          <p className="text-xs text-[#9e9b94] font-sans tracking-widest uppercase">
            All commissions executed in strict client confidentiality · Full architectural plans available by request
          </p>
        </div>
      </div>
    </section>
  );
};
