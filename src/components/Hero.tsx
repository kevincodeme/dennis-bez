import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Volume2, VolumeX, ArrowDown } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { ambientSound } from '../utils/audio';

interface HeroProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  projects,
  onSelectProject,
  onExploreClick,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const [progress, setProgress] = useState(0);

  const heroProjects = projects.slice(0, 4);
  const currentProject = heroProjects[currentIndex];

  // Auto slide interval with progress bar
  useEffect(() => {
    setProgress(0);
    const intervalTime = 8000;
    const stepTime = 100;
    const increment = (stepTime / intervalTime) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((idx) => (idx + 1) % heroProjects.length);
          return 0;
        }
        return prev + increment;
      });
    }, stepTime);

    return () => clearInterval(timer);
  }, [currentIndex, heroProjects.length]);

  const handlePrev = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev - 1 + heroProjects.length) % heroProjects.length);
  };

  const handleNext = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % heroProjects.length);
  };

  const toggleSound = () => {
    const active = ambientSound.toggle();
    setIsPlayingSound(active);
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-end justify-between overflow-hidden bg-black select-none">
      {/* Background Images with crossfade transition */}
      {heroProjects.map((project, idx) => (
        <div
          key={project.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <img
            src={project.heroImage}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse-slow"
          />
          {/* Measured multi-stop scrim for legibility without muddying the architectural beauty */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/25" />
          <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/60 pointer-events-none" />
        </div>
      ))}

      {/* Top Ambient HUD / Coordinates */}
      <div className="absolute top-24 left-0 right-0 z-20 px-6 sm:px-12 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] tracking-[0.25em] uppercase text-[#c8c5be]/70 font-sans">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#c5a880] inline-block" />
            <span>NAIROBI 01°17′S · DUBAI 25°12′N</span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <span>RESIDENTIAL ESTATES · PENTHOUSES · PRIVATE AVIATION</span>
          </div>
        </div>
      </div>

      {/* Main Content Info Overlay */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 pb-14 sm:pb-16 flex flex-col justify-end">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Left Column: Typographic Focus */}
          <div className="lg:col-span-8 flex flex-col gap-3">
            <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#c5a880] font-sans font-medium">
              <span>{currentProject.category}</span>
              <span className="text-white/40">/</span>
              <span>{currentProject.location}</span>
              <span className="text-white/40">/</span>
              <span>{currentProject.year}</span>
            </div>

            <h1
              className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal text-[#f4f2ee] tracking-tight leading-[1.05]"
              style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
            >
              {currentProject.title}
            </h1>

            <p className="text-sm sm:text-base text-[#c8c5be] font-sans font-light max-w-2xl leading-relaxed mt-1">
              {currentProject.subtitle} · {currentProject.area}. Monolithic architectural composition synthesized with bespoke interior materiality.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4 pt-2">
              <button
                onClick={() => onSelectProject(currentProject)}
                className="px-6 py-3 bg-[#c5a880] text-black text-xs font-sans font-medium tracking-[0.2em] uppercase hover:bg-[#dfc7a5] transition-colors cursor-pointer"
              >
                Inspect Architectural Dossier
              </button>
              <button
                onClick={onExploreClick}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-sans font-medium tracking-[0.2em] uppercase transition-colors cursor-pointer backdrop-blur-sm"
              >
                View Collection
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Navigation & Audio Controls */}
          <div className="lg:col-span-4 flex flex-col lg:items-end justify-between gap-6 border-t lg:border-t-0 pt-4 lg:pt-0 border-white/10">
            {/* Ambient Soundscape Toggle Simulator */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleSound}
                className="flex items-center gap-2 text-xs text-[#c8c5be] hover:text-white transition-colors border border-white/10 px-3 py-1.5 bg-black/40 backdrop-blur-sm cursor-pointer"
                title="Toggle Ambient Architectural Acoustics"
              >
                {isPlayingSound ? (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span className="tracking-[0.15em] text-[10px] uppercase">Atmosphere: Active</span>
                    <div className="flex items-center gap-0.5 ml-1">
                      <span className="w-0.5 h-2 bg-[#c5a880] animate-pulse" />
                      <span className="w-0.5 h-3 bg-[#c5a880] animate-pulse delay-75" />
                      <span className="w-0.5 h-1.5 bg-[#c5a880] animate-pulse delay-150" />
                    </div>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-[#9e9b94]" />
                    <span className="tracking-[0.15em] text-[10px] uppercase text-[#9e9b94]">Atmosphere: Muted</span>
                  </>
                )}
              </button>
            </div>

            {/* Slide Index & Pagination */}
            <div className="flex items-center gap-4">
              <div className="font-serif text-lg tracking-wider text-white">
                <span className="text-[#c5a880]">0{currentIndex + 1}</span>
                <span className="text-white/40 mx-2">/</span>
                <span className="text-white/60">0{heroProjects.length}</span>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handlePrev}
                  className="p-2 border border-white/20 hover:border-[#c5a880] hover:text-[#c5a880] text-white transition-colors cursor-pointer"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 border border-white/20 hover:border-[#c5a880] hover:text-[#c5a880] text-white transition-colors cursor-pointer"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Slider Progress Bar */}
            <div className="w-full lg:w-48 h-[2px] bg-white/20 overflow-hidden">
              <div
                className="h-full bg-[#c5a880] transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Down indicator */}
      <button
        onClick={onExploreClick}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-[#c8c5be]/60 hover:text-[#c5a880] transition-colors cursor-pointer"
      >
        <span>Scroll to Explore</span>
        <ArrowDown className="w-3 h-3 animate-bounce" />
      </button>
    </section>
  );
};
