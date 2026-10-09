import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { ArchitectLetter } from '../components/ArchitectLetter';
import { PROJECTS, Project } from '../data/portfolioData';
import { ArrowUpRight, ArrowRight, Compass, Eye, Sparkles } from 'lucide-react';
import { OnSiteProcess } from '../components/OnSiteProcess';
import { MaterialityLab } from '../components/MaterialityLab';
import { InstagramFeed } from '../components/InstagramFeed';
import { CinematographySection } from '../components/CinematographySection';
import { Monograph } from '../components/Monograph';
import { HumanConversation } from '../components/HumanConversation';
import { RevealOnScroll } from '../components/RevealOnScroll';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectProject = (project: Project) => {
    navigate(`/residences/${project.id}`);
  };

  const handleExploreClick = () => {
    navigate('/residences');
  };

  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <div className="w-full">
      {/* Monumental Hero Entrance */}
      <Hero
        projects={PROJECTS}
        onSelectProject={handleSelectProject}
        onExploreClick={handleExploreClick}
      />

      {/* A Personal Note from Dennis Ochieng */}
      <div className="relative">
        <ArchitectLetter />
        <div className="bg-[#0a0a0c] pb-16 px-6 text-center border-b border-white/10">
          <Link
            to="/atelier"
            className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 hover:border-[#c5a880] text-xs font-sans uppercase tracking-[0.22em] text-[#eae7e1] hover:text-[#c5a880] transition-all"
          >
            <span>Read The Full Atelier Philosophy & Building Process</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#c5a880]" />
          </Link>
        </div>
      </div>

      {/* Featured Residences Showcase Preview */}
      <section className="w-full py-28 sm:py-36 bg-[#08080a] relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-white/10 pb-12 mb-16 gap-8">
            <div>
              <span className="text-xs font-sans tracking-[0.35em] uppercase text-[#c5a880] font-medium block mb-3">
                Featured Portfolio
              </span>
              <h2
                className="text-4xl sm:text-6xl font-serif text-[#f4f2ee] font-normal leading-[1.08]"
                style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
              >
                Selected Residences & Sanctuaries
              </h2>
            </div>

            <Link
              to="/residences"
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#c5a880] hover:text-white transition-colors"
            >
              <span>Explore All {PROJECTS.length} Residences</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Featured Projects Grid with Intersection-Observer Scroll Animation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, idx) => (
              <RevealOnScroll
                key={project.id}
                delayMs={idx * 150}
                direction="up"
                className="h-full"
              >
                <div
                  onClick={() => handleSelectProject(project)}
                  className="group cursor-pointer flex flex-col justify-between h-full bg-[#0e0e12] border border-white/10 hover:border-[#c5a880]/50 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#c5a880]/5"
                >
                  <div className="relative aspect-16/10 overflow-hidden bg-black">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    <div className="absolute top-4 left-4 text-[10px] tracking-widest uppercase font-mono px-2.5 py-1 bg-black/70 border border-white/15 text-[#c5a880] backdrop-blur-sm">
                      0{idx + 1} · {project.category}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex flex-col justify-between grow">
                    <div>
                      <span className="text-[10px] tracking-[0.25em] uppercase text-[#9e9b94] font-sans block mb-2">
                        {project.location} · Photo archive
                      </span>
                      <h3
                        className="text-xl sm:text-2xl font-serif text-white group-hover:text-[#c5a880] transition-colors mb-3 leading-snug"
                        style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
                      >
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#9e9b94] font-sans font-light line-clamp-3 leading-relaxed mb-6">
                        {project.architecturalStatement}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#9e9b94] group-hover:text-[#c5a880] transition-colors">
                      <span className="tracking-widest uppercase font-mono text-[11px]">Selected photographs</span>
                      <span className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.18em] uppercase">
                        <span>View Project Page</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <div className="text-center pt-8">
            <Link
              to="/residences"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#c5a880] text-black text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#dfc7a5] transition-colors shadow-xl"
            >
              <span>View Full Residences Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* On-Site Craftsmanship */}
      <OnSiteProcess />

      {/* Materiality Lab Preview */}
      <div className="relative">
        <MaterialityLab />
        <div className="bg-[#08080a] pb-16 px-6 text-center border-b border-white/10">
          <Link
            to="/materiality"
            className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 hover:border-[#c5a880] text-xs font-sans uppercase tracking-[0.22em] text-[#eae7e1] hover:text-[#c5a880] transition-all"
          >
            <span>Explore Complete Materiality Archive</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#c5a880]" />
          </Link>
        </div>
      </div>

      {/* Field Diary (@dennisbezalel) */}
      <InstagramFeed />

      {/* Cinematography & Motion */}
      <div className="relative">
        <CinematographySection />
        <div className="bg-[#08080a] pb-16 px-6 text-center border-b border-white/10">
          <Link
            to="/film"
            className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 hover:border-[#c5a880] text-xs font-sans uppercase tracking-[0.22em] text-[#eae7e1] hover:text-[#c5a880] transition-all"
          >
            <span>View Full Architectural Motion Reel</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#c5a880]" />
          </Link>
        </div>
      </div>

      {/* Dennis Bezalel Biographical Monograph */}
      <Monograph onOpenCommissionModal={() => navigate('/conversation')} />

      {/* Direct Human Dialogue */}
      <HumanConversation />
    </div>
  );
};
