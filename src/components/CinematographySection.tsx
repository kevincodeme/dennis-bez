import React, { useState } from 'react';
import { ARCHITECTURAL_FILMS, FilmProject } from '../data/portfolioData';
import { Play, Pause, Film, Video, Eye, Award, ExternalLink } from 'lucide-react';
import { portfolioAviationPrivateLounge } from '../assets/images';

export const CinematographySection: React.FC = () => {
  const [selectedFilm, setSelectedFilm] = useState<FilmProject>(ARCHITECTURAL_FILMS[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="cinematography" className="w-full py-28 sm:py-36 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-white/10 pb-12 mb-16 gap-8">
          <div>
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#c5a880] font-medium block mb-3">
              Spatial Storytelling · Dennis Bezalel
            </span>
            <h2
              className="text-3xl sm:text-5xl font-serif text-[#f4f2ee] font-normal leading-tight"
              style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
            >
              Architectural Motion & Cinematography
            </h2>
          </div>

          <p className="text-sm text-[#9e9b94] font-sans font-light max-w-md leading-relaxed">
            Beyond blueprints and static renderings, Dennis Bezalel pioneers cinematic spatial documentation. Capturing the living soul of architecture through high altitude drone sweeps and intimate interior cinematography.
          </p>
        </div>

        {/* Master Reel Cinema Screen */}
        <div className="relative w-full aspect-video sm:h-[540px] bg-black border border-white/15 overflow-hidden mb-12 flex flex-col justify-between">
          {/* Simulated Video Frame with Ambient Lighting */}
          <img
            src={portfolioAviationPrivateLounge}
            alt="Cinematic architectural scene"
            referrerPolicy="no-referrer"
            className={`w-full h-full object-cover object-center transition-all duration-1000 ${
              isPlaying ? 'scale-105 filter brightness-105' : 'scale-100 filter brightness-75'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30 pointer-events-none" />

          {/* Top Video Header */}
          <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
              <span className="text-xs font-sans tracking-[0.2em] uppercase text-white font-medium">
                4K Master Cut Cinema
              </span>
            </div>

            <div className="text-xs font-mono text-white/70">
              {isPlaying ? 'PLAYING // 01:42 / 04:18' : 'PAUSED // REC STANDBY'}
            </div>
          </div>

          {/* Center Play Button Overlay */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-20 h-20 rounded-full border border-white/40 bg-black/60 hover:bg-[#c5a880] hover:text-black hover:border-[#c5a880] text-white flex items-center justify-center transition-all duration-300 cursor-pointer backdrop-blur-md group"
              aria-label={isPlaying ? 'Pause Reel' : 'Play Cinematic Reel'}
            >
              {isPlaying ? (
                <Pause className="w-7 h-7" />
              ) : (
                <Play className="w-7 h-7 ml-1" />
              )}
            </button>
            <span className="text-[11px] tracking-[0.25em] uppercase text-white/80 font-sans mt-4">
              {isPlaying ? 'Pause Playback' : 'Watch Architectural Reel'}
            </span>
          </div>

          {/* Bottom Video Meta Bar */}
          <div className="relative z-10 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-t border-white/10 bg-black/50 backdrop-blur-sm">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#c5a880] font-sans font-medium">
                {selectedFilm.client}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-white font-normal mt-0.5">
                {selectedFilm.title}
              </h3>
              <p className="text-xs text-[#c8c5be] font-light max-w-xl mt-1">
                {selectedFilm.description}
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-sans text-white/80 shrink-0">
              <span className="text-[#c5a880] font-medium">{selectedFilm.metrics}</span>
              <a
                href="https://youtube.com/@dennisbezalel?si=sjAgKEOQGBJD4tRj"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 border border-white/20 hover:border-[#c5a880] hover:text-[#c5a880] transition-colors"
              >
                <span>YouTube Film Channel</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Film Chapters Carousel / Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARCHITECTURAL_FILMS.map((film) => {
            const isSelected = selectedFilm.id === film.id;
            return (
              <div
                key={film.id}
                onClick={() => {
                  setSelectedFilm(film);
                  setIsPlaying(true);
                }}
                className={`p-6 border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#c5a880] bg-[#14141a]'
                    : 'border-white/10 bg-[#0e0e11] hover:border-white/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#9e9b94] mb-3">
                    <span className="text-[10px] uppercase font-mono text-[#c5a880]">
                      {film.tags[0]}
                    </span>
                    <Film className="w-3.5 h-3.5" />
                  </div>

                  <h4 className="font-serif text-lg text-white font-normal mb-2">
                    {film.title}
                  </h4>

                  <span className="text-xs text-[#9e9b94] font-sans block mb-3">
                    {film.client}
                  </span>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-[#c5a880]">
                  <span>{film.metrics}</span>
                  <span className="underline underline-offset-4">Load Reel</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
