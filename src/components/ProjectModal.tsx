import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, MapPin, Calendar, Ruler, Layers, Sparkles, Sun, Moon } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onCommission: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onCommission,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'spatial' | 'materials'>('overview');
  const [isNightMode, setIsNightMode] = useState(false);

  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const currentImage = project.galleryImages[activeImageIndex] || project.heroImage;

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300"
    >
      <div className="relative w-full h-full md:max-w-6xl md:max-h-[92vh] bg-[#0e0e11] border border-white/10 flex flex-col overflow-hidden text-[#eae7e1]">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#121216] shrink-0">
          <div className="flex items-center gap-4">
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#c5a880] font-sans font-medium">
              Architectural Dossier
            </span>
            <span className="text-white/20">|</span>
            <span className="font-serif text-lg text-white font-normal truncate max-w-xs sm:max-w-md">
              {project.title}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Ambient Lighting Toggle */}
            <button
              onClick={() => setIsNightMode(!isNightMode)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans border transition-colors cursor-pointer ${
                isNightMode
                  ? 'border-[#c5a880] text-[#c5a880] bg-[#c5a880]/10'
                  : 'border-white/15 text-[#9e9b94] hover:text-white'
              }`}
              title="Toggle Twilight Ambience"
            >
              {isNightMode ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline text-[11px] uppercase tracking-wider">
                {isNightMode ? 'Twilight Lighting' : 'Natural Daylight'}
              </span>
            </button>

            <button
              onClick={onClose}
              className="p-2 border border-white/15 text-[#9e9b94] hover:text-white hover:border-[#c5a880] transition-colors cursor-pointer"
              aria-label="Close Dossier"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Main Visual Showcase Frame */}
          <div className={`relative w-full h-[45vh] sm:h-[55vh] bg-black overflow-hidden select-none transition-filter duration-700 ${
            isNightMode ? 'brightness-90 contrast-110' : ''
          }`}>
            <img
              src={currentImage}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-transparent to-transparent pointer-events-none" />

            {/* Gallery Navigation Controls */}
            {project.galleryImages.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setActiveImageIndex(
                      (prev) => (prev - 1 + project.galleryImages.length) % project.galleryImages.length
                    )
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-[#c5a880] hover:text-black text-white border border-white/20 transition-colors cursor-pointer backdrop-blur-sm"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() =>
                    setActiveImageIndex(
                      (prev) => (prev + 1) % project.galleryImages.length
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-[#c5a880] hover:text-black text-white border border-white/20 transition-colors cursor-pointer backdrop-blur-sm"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 right-6 bg-black/70 px-3 py-1 text-xs font-mono text-white/90 border border-white/20">
                  {activeImageIndex + 1} / {project.galleryImages.length}
                </div>
              </>
            )}

            {/* Architectural Tags overlay */}
            <div className="absolute bottom-4 left-6 flex items-center gap-2 text-xs font-sans text-white/80">
              <span className="bg-black/60 px-2.5 py-1 border border-white/10">{project.category}</span>
              <span className="bg-black/60 px-2.5 py-1 border border-white/10">{project.area}</span>
            </div>
          </div>

          {/* Project Details Body */}
          <div className="p-6 sm:p-10 max-w-5xl mx-auto">
            {/* Meta Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-white/10 text-xs font-sans mb-8">
              <div className="flex items-center gap-2 text-[#9e9b94]">
                <MapPin className="w-4 h-4 text-[#c5a880] shrink-0" />
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-white/40">Location</span>
                  <span className="text-[#eae7e1] font-medium">{project.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[#9e9b94]">
                <Ruler className="w-4 h-4 text-[#c5a880] shrink-0" />
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-white/40">Gross Built Area</span>
                  <span className="text-[#eae7e1] font-medium">{project.area}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[#9e9b94]">
                <Calendar className="w-4 h-4 text-[#c5a880] shrink-0" />
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-white/40">Commission Year</span>
                  <span className="text-[#eae7e1] font-medium">{project.year}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[#9e9b94]">
                <Layers className="w-4 h-4 text-[#c5a880] shrink-0" />
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-white/40">Typology</span>
                  <span className="text-[#eae7e1] font-medium">{project.category}</span>
                </div>
              </div>
            </div>

            {/* Dossier Tabs */}
            <div className="flex items-center gap-2 border-b border-white/10 mb-8 pb-3">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 text-xs font-sans uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer ${
                  activeTab === 'overview'
                    ? 'text-white border-b-2 border-[#c5a880] -mb-[13px]'
                    : 'text-[#9e9b94] hover:text-white'
                }`}
              >
                Architectural Concept
              </button>
              <button
                onClick={() => setActiveTab('spatial')}
                className={`px-4 py-2 text-xs font-sans uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer ${
                  activeTab === 'spatial'
                    ? 'text-white border-b-2 border-[#c5a880] -mb-[13px]'
                    : 'text-[#9e9b94] hover:text-white'
                }`}
              >
                Spatial Layout & Zones
              </button>
              <button
                onClick={() => setActiveTab('materials')}
                className={`px-4 py-2 text-xs font-sans uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer ${
                  activeTab === 'materials'
                    ? 'text-white border-b-2 border-[#c5a880] -mb-[13px]'
                    : 'text-[#9e9b94] hover:text-white'
                }`}
              >
                Materiality Palette
              </button>
            </div>

            {/* Tab 1: Overview */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3
                    className="font-serif text-2xl sm:text-3xl text-white font-normal mb-3"
                    style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#c8c5be] font-sans font-light leading-relaxed">
                    {project.architecturalStatement}
                  </p>
                </div>

                <div className="border border-white/10 bg-[#131317] p-6 mt-6">
                  <span className="text-[11px] tracking-[0.25em] uppercase text-[#c5a880] font-sans font-medium block mb-4">
                    Key Architectural Invariants
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#eae7e1]">
                        <span className="text-[#c5a880] font-mono">0{idx + 1}.</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Spatial Zones */}
            {activeTab === 'spatial' && (
              <div className="space-y-6">
                <p className="text-xs text-[#9e9b94] leading-relaxed">
                  Every spatial zone was calculated for sightline harmony, acoustic tranquility, and seamless flow between private sanctuaries and monumental public entertaining pavilions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.spatialZones.map((zone, idx) => (
                    <div
                      key={idx}
                      className="p-5 border border-white/10 bg-[#131317] flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[10px] font-mono text-[#c5a880] block mb-2">
                          ZONE 0{idx + 1}
                        </span>
                        <h4 className="font-serif text-lg text-white font-normal mb-2">
                          {zone.name}
                        </h4>
                        <p className="text-xs text-[#9e9b94] font-light leading-relaxed">
                          {zone.description}
                        </p>
                      </div>
                      <div className="w-full h-[1px] bg-white/10 mt-6" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 3: Materials Palette */}
            {activeTab === 'materials' && (
              <div className="space-y-6">
                <p className="text-xs text-[#9e9b94] leading-relaxed">
                  Curated noble materials executed by master stone masons, bronze artisans, and architectural joinery craftsmen.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {project.materials.map((mat, idx) => (
                    <div
                      key={idx}
                      className="p-4 border border-white/10 bg-[#131317] flex items-center gap-3"
                    >
                      <Sparkles className="w-4 h-4 text-[#c5a880] shrink-0" />
                      <span className="text-xs font-sans text-[#eae7e1]">{mat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="p-6 border-t border-white/10 bg-[#121216] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-4 text-xs text-[#9e9b94]">
            <span>Commissioned by Dennis Bezalel Atelier</span>
            <span>·</span>
            <span>All Rights Reserved</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onCommission(project.title)}
              className="w-full sm:w-auto px-6 py-3 bg-[#c5a880] hover:bg-[#dfc7a5] text-black text-xs font-sans font-medium tracking-[0.2em] uppercase transition-colors cursor-pointer"
            >
              Inquire Regarding This Typology
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
