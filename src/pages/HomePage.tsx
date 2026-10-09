import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { PROJECTS, Project } from '../data/portfolioData';
import { ArrowUpRight, ArrowRight, Compass, Eye, Sparkles, Layers, ShieldCheck, Film, Phone } from 'lucide-react';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { dennisDeskPhoto } from '../assets/images';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectProject = (project: Project) => {
    navigate(`/residences/${project.id}`);
  };

  const handleExploreClick = () => {
    navigate('/residences');
  };

  const featuredProjects = PROJECTS.slice(0, 2);

  return (
    <div className="w-full bg-[#08080a] text-[#eae7e1]">
      {/* Monumental Hero Entrance */}
      <Hero
        projects={PROJECTS}
        onSelectProject={handleSelectProject}
        onExploreClick={handleExploreClick}
      />

      {/* Atelier Editorial Introduction */}
      <section className="w-full py-24 sm:py-32 bg-[#09090c] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-4/5 overflow-hidden border border-white/15 bg-black shadow-2xl">
                <img
                  src={dennisDeskPhoto}
                  alt="Dennis Bezalel at drafting desk"
                  className="w-full h-full object-cover object-center grayscale contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#c5a880] block mb-1">
                    Atelier Principal
                  </span>
                  <span className="text-sm font-serif text-white block">
                    Dennis Ochieng (Dennis Bezalel)
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2 h-2 bg-[#c5a880]" />
                  <span className="text-xs font-sans tracking-[0.35em] uppercase text-[#c5a880] font-medium">
                    The Dennis Bezalel Atelier
                  </span>
                </div>
                <h2
                  className="text-3xl sm:text-5xl font-serif text-white mb-6 leading-[1.1]"
                  style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
                >
                  Monumental Order & Timeless Permanence
                </h2>
                <div className="space-y-4 text-xs sm:text-sm text-[#9e9b94] font-light leading-relaxed">
                  <p>
                    Dennis Bezalel operates a boutique architectural atelier in Nairobi specializing in grand private residences, bespoke apartments, and architectural cinema across East Africa and the Gulf.
                  </p>
                  <p>
                    Rejecting disposable trends and synthetic finishes, every project is anchored in structural mass, raw geological stone, and hand-patinated metals—designed to outlive generations.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
                <Link
                  to="/atelier"
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#c5a880] text-black text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#dfc7a5] transition-all cursor-pointer shadow-lg"
                >
                  <span>Explore The Atelier & Philosophy</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/architect"
                  className="inline-flex items-center gap-3 px-6 py-3.5 border border-white/20 hover:border-[#c5a880] text-xs uppercase tracking-[0.2em] text-[#eae7e1] hover:text-[#c5a880] transition-all cursor-pointer"
                >
                  <span>The Architect Biography</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Residences Showcase */}
      <section className="w-full py-28 sm:py-36 bg-[#08080a] relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-white/10 pb-12 mb-16 gap-8">
            <div>
              <span className="text-xs font-sans tracking-[0.35em] uppercase text-[#c5a880] font-medium block mb-3">
                Selected Portfolio
              </span>
              <h2
                className="text-4xl sm:text-6xl font-serif text-[#f4f2ee] font-normal leading-[1.08]"
                style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
              >
                The Residences & Sanctuaries
              </h2>
            </div>

            <Link
              to="/residences"
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#c5a880] hover:text-white transition-colors"
            >
              <span>Explore All Residences</span>
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
                <Link
                  to={`/residences/${project.id}`}
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
                </Link>
              </RevealOnScroll>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              to="/residences"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#c5a880] text-black text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#dfc7a5] transition-colors shadow-xl"
            >
              <span>View Residences Gallery & Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* The Three Tectonic Pillars */}
      <section className="w-full py-24 sm:py-32 bg-[#09090c] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-sans tracking-[0.35em] uppercase text-[#c5a880] block mb-2 font-medium">
              Architectural Pillars
            </span>
            <h2
              className="text-3xl sm:text-5xl font-serif text-white"
              style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
            >
              The Triad of Permanence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 bg-[#0d0d10] border border-white/10 space-y-4">
              <span className="text-xs font-mono text-[#c5a880] tracking-widest block uppercase">
                Pillar I · Mass
              </span>
              <h3 className="text-xl font-serif text-white">Monolithic Structural Weight</h3>
              <p className="text-xs text-[#9e9b94] font-light leading-relaxed">
                Masonry walls exceeding 350mm thickness, raw reinforced stone, and dense acoustic envelopes that shut out the chaos of the outside world.
              </p>
              <Link
                to="/atelier"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a880] hover:text-white pt-2 transition-colors"
              >
                <span>Read Atelier Ethos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-8 bg-[#0d0d10] border border-white/10 space-y-4">
              <span className="text-xs font-mono text-[#c5a880] tracking-widest block uppercase">
                Pillar II · Earth
              </span>
              <h3 className="text-xl font-serif text-white">Quarry-Cut Material Honesty</h3>
              <p className="text-xs text-[#9e9b94] font-light leading-relaxed">
                Zero synthetic veneers. Solid Calacatta Oro, Belgian smoked oak, and hand-patinated bronze that grow richer with fifty years of living touch.
              </p>
              <Link
                to="/materiality"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a880] hover:text-white pt-2 transition-colors"
              >
                <span>Materiality Archive</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-8 bg-[#0d0d10] border border-white/10 space-y-4">
              <span className="text-xs font-mono text-[#c5a880] tracking-widest block uppercase">
                Pillar III · Light
              </span>
              <h3 className="text-xl font-serif text-white">Equatorial Solar Architecture</h3>
              <p className="text-xs text-[#9e9b94] font-light leading-relaxed">
                Choreographed natural daylight, three-meter cantilevered eaves, and deep reveals that capture the changing light from dawn to sunset.
              </p>
              <Link
                to="/film"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a880] hover:text-white pt-2 transition-colors"
              >
                <span>Cinema & Motion</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Cinema Spotlight */}
      <section className="w-full py-24 sm:py-32 bg-[#08080a] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="p-8 sm:p-14 bg-[#0e0e12] border border-[#c5a880]/30 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl">
            <div className="max-w-2xl">
              <span className="text-xs font-sans tracking-[0.35em] uppercase text-[#c5a880] font-medium block mb-2">
                Spatial Storytelling · 20M+ Views
              </span>
              <h2
                className="text-3xl sm:text-4xl font-serif text-white mb-4"
                style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
              >
                Architectural Motion & Cinema
              </h2>
              <p className="text-xs sm:text-sm text-[#9e9b94] font-light leading-relaxed">
                Dennis Bezalel directs cinematic video walkthroughs, lighting studies, and FPV drone journeys that translate monumental architecture into emotive living experiences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
              <Link
                to="/film"
                className="w-full sm:w-auto text-center px-8 py-3.5 bg-[#c5a880] text-black text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#dfc7a5] transition-all cursor-pointer shadow-lg"
              >
                Enter Screening Room
              </Link>
              <a
                href="https://youtube.com/@dennisbezalel?si=sjAgKEOQGBJD4tRj"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto text-center px-6 py-3.5 border border-white/20 hover:border-[#c5a880] text-xs uppercase tracking-[0.2em] text-[#eae7e1] transition-all cursor-pointer"
              >
                YouTube Channel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Human Dialogue Gateway */}
      <section className="w-full py-24 sm:py-32 bg-[#09090c]">
        <div className="max-w-5xl mx-auto px-6 sm:px-12 text-center">
          <span className="text-xs font-sans tracking-[0.35em] uppercase text-[#c5a880] font-medium block mb-3">
            Private Commissions
          </span>
          <h2
            className="text-3xl sm:text-5xl font-serif text-white mb-6"
            style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
          >
            A Conversation with Dennis Bezalel
          </h2>
          <p className="text-xs sm:text-sm text-[#9e9b94] font-light max-w-xl mx-auto mb-10 leading-relaxed">
            Strictly three to four private estate commissions are accepted each calendar year. Direct principal dialogue from first pencil trace to final handover.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/conversation"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#c5a880] text-black text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#dfc7a5] transition-colors shadow-xl"
            >
              <span>Initiate Private Dialogue</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/254715998587?text=Hello%20Dennis,%20I%20would%20like%20to%20start%20a%20conversation%20about%20a%20private%20architectural%20commission."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-4 bg-[#25D366] text-black text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#20ba59] transition-colors shadow-lg"
            >
              <Phone className="w-4 h-4 fill-black text-black" />
              <span>Direct WhatsApp Channel</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
