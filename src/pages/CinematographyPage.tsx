import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Youtube, ExternalLink, Play, Film, Video, Eye, Clock, Award, ArrowRight, X, Sparkles, Volume2 } from 'lucide-react';
import { ARCHITECTURAL_FILMS, FilmProject } from '../data/portfolioData';

interface CinemaEpisode extends FilmProject {
  aspectRatio: string;
  cameraKit: string;
  soundscape: string;
  directorsLog: string;
  runtime: string;
  videoUrl: string;
}

const CINEMA_EPISODES: CinemaEpisode[] = [
  {
    ...ARCHITECTURAL_FILMS[0],
    aspectRatio: '2.39:1 Anamorphic Cinemascope',
    cameraKit: 'Arri Alexa Mini LF · Cooke Anamorphic /i Full Frame Plus Prime Lenses · Shotover F1 Aerial Gimbal',
    soundscape: 'Bespoke orchestral strings composed in 432Hz with natural Gulf shoreline hydrophone recordings',
    directorsLog:
      'To capture the floating Cote d’Azur mansions of Dubai, we executed high-speed dawn drone descents from 400 meters, transitioning smoothly through monumental glazed pivot doors into the double-height salon without a single cut.',
    runtime: '04:18',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Clean fallback player
  },
  {
    ...ARCHITECTURAL_FILMS[1],
    aspectRatio: '2.00:1 Univisium Format',
    cameraKit: 'RED V-Raptor 8K VV · Leica Summilux-C Cine Primes · Steadicam M-2 Rig',
    soundscape: 'Minimalist ambient drone with natural reverberant room acoustics of honed Italian marble',
    directorsLog:
      'Dennis directed this definitive docuseries charting the construction of monumental modernist mansions across Karen and Muthaiga in Nairobi. The series amassed over 20 million views globally, establishing a new benchmark for African luxury architectural cinema.',
    runtime: '12:45',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    ...ARCHITECTURAL_FILMS[2],
    aspectRatio: '2.39:1 Cinemascope',
    cameraKit: 'Sony Venice 2 8K · Atlas Orion Anamorphic Glass · Custom Gyro-Stabilized Jet Mounts',
    soundscape: 'Twin-turbofan low-frequency spatial resonance merged with bespoke cello harmonics',
    directorsLog:
      'A private screening created for executive aviation clientele, translating transcontinental flight cabin architecture into a serene sanctuary of silence, hand-stitched leather, and smoked burr walnut.',
    runtime: '03:12',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    ...ARCHITECTURAL_FILMS[3],
    aspectRatio: '16:9 DCI 4K',
    cameraKit: 'Arri Amira · Zeiss Master Primes · Dana Dolly Curved Track System',
    soundscape: 'Intimate spatial sound design capturing evening breeze, fountain water ripples, and ambient sitar',
    directorsLog:
      'A nocturnal lighting study across presidential hospitality suites, documenting how concealed linear lighting and candle-warm illumination transform monumental spaces into intimate sanctuaries after sunset.',
    runtime: '05:40',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
];

export const CinematographyPage: React.FC = () => {
  const [selectedFilm, setSelectedFilm] = useState<CinemaEpisode>(CINEMA_EPISODES[0]);
  const [isPlayingModal, setIsPlayingModal] = useState(false);

  return (
    <div className="w-full pt-28 pb-32 bg-[#08080a] min-h-screen text-[#eae7e1]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-[#9e9b94]">
          <Link to="/" className="hover:text-white transition-colors">
            Atelier
          </Link>
          <span>/</span>
          <span className="text-[#c5a880]">Architectural Motion & Film</span>
        </div>

        {/* Page Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-white/10 pb-12 mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 bg-[#c5a880]" />
              <span className="text-xs font-sans tracking-[0.35em] uppercase text-[#c5a880] font-medium">
                Spatial Cinema & Direction · 20M+ Views
              </span>
            </div>
            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#f4f2ee] font-normal leading-[1.05]"
              style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
            >
              Architectural Motion & Cinema
            </h1>
            <p className="mt-5 text-sm sm:text-base text-[#9e9b94] font-light max-w-2xl leading-relaxed">
              Dennis Bezalel directs cinematic spatial monographs, drone choreography, and daylight studies that translate monumental architecture into living, emotive cinema.
            </p>
          </div>

          <a
            href="https://youtube.com/@dennisbezalel?si=sjAgKEOQGBJD4tRj"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3.5 border border-red-500/40 hover:border-red-500 bg-red-950/20 text-xs font-sans uppercase tracking-[0.2em] text-white transition-all self-start lg:self-auto cursor-pointer shadow-lg hover:bg-red-950/40"
          >
            <Youtube className="w-4 h-4 text-red-500" />
            <span>YouTube @dennisbezalel</span>
            <ExternalLink className="w-3.5 h-3.5 text-white/50" />
          </a>
        </div>

        {/* Cinematic Screening Hero Box */}
        <div className="mb-24 bg-[#0e0e12] border border-[#c5a880]/30 overflow-hidden shadow-2xl">
          <div className="relative aspect-16/9 sm:aspect-21/9 bg-black flex items-center justify-center group overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 z-10" />

            <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-12 z-20">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#c5a880] bg-black/60 px-3 py-1 border border-white/10 backdrop-blur-sm">
                  Now Screening · {selectedFilm.metrics}
                </span>
                <span className="text-xs font-mono text-[#9e9b94]">{selectedFilm.aspectRatio}</span>
              </div>

              <div className="max-w-3xl">
                <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#c5a880] block mb-2">
                  {selectedFilm.client}
                </span>
                <h2
                  className="text-2xl sm:text-4xl lg:text-5xl font-serif text-white mb-4 leading-tight"
                  style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
                >
                  {selectedFilm.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#c8c5be] font-light max-w-2xl line-clamp-2 leading-relaxed hidden sm:block">
                  {selectedFilm.description}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <div className="flex items-center gap-4 text-xs text-[#9e9b94]">
                  <span className="flex items-center gap-1.5 font-mono">
                    <Clock className="w-3.5 h-3.5 text-[#c5a880]" />
                    {selectedFilm.runtime}
                  </span>
                  <span>·</span>
                  <span className="hidden md:inline font-mono">{selectedFilm.cameraKit.split('·')[0]}</span>
                </div>

                <a
                  href="https://youtube.com/@dennisbezalel?si=sjAgKEOQGBJD4tRj"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-[#c5a880] hover:bg-[#dfc7a5] text-black text-xs font-sans uppercase tracking-widest font-medium transition-all shadow-lg cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-black" />
                  <span>Watch on YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Director's Technical Specs Grid */}
          <div className="p-8 sm:p-12 border-t border-white/10 bg-[#0b0b0e] grid grid-cols-1 lg:grid-cols-3 gap-8 text-xs">
            <div>
              <span className="text-[#c5a880] font-sans uppercase tracking-widest block mb-2 font-medium">
                Camera & Optical System
              </span>
              <p className="text-[#9e9b94] font-mono leading-relaxed">{selectedFilm.cameraKit}</p>
            </div>
            <div>
              <span className="text-[#c5a880] font-sans uppercase tracking-widest block mb-2 font-medium">
                Acoustic & Soundscape Engineering
              </span>
              <p className="text-[#9e9b94] font-light leading-relaxed">{selectedFilm.soundscape}</p>
            </div>
            <div>
              <span className="text-[#c5a880] font-sans uppercase tracking-widest block mb-2 font-medium">
                Director’s Field Notes
              </span>
              <p className="text-[#9e9b94] font-light leading-relaxed italic">"{selectedFilm.directorsLog}"</p>
            </div>
          </div>
        </div>

        {/* Film Catalog Grid */}
        <div className="mb-24">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#c5a880] font-medium">
              Architectural Film Monograph Archives
            </span>
            <span className="text-xs font-mono text-[#9e9b94]">{CINEMA_EPISODES.length} Releases</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CINEMA_EPISODES.map((ep, idx) => {
              const isSelected = selectedFilm.id === ep.id;
              return (
                <div
                  key={ep.id}
                  onClick={() => setSelectedFilm(ep)}
                  className={`p-6 sm:p-8 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#c5a880] bg-[#121217] shadow-xl'
                      : 'border-white/10 bg-[#0a0a0d] hover:border-white/25 hover:bg-[#0f0f13]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#9e9b94] mb-3">
                      <span className="font-mono text-[#c5a880]">Episode 0{idx + 1}</span>
                      <span className="tracking-widest uppercase font-mono">{ep.runtime}</span>
                    </div>

                    <h3 className="text-xl font-serif text-white mb-2 leading-snug">{ep.title}</h3>
                    <span className="text-xs text-[#c5a880] block mb-3 font-sans tracking-wide">
                      {ep.client} · {ep.role}
                    </span>
                    <p className="text-xs text-[#9e9b94] font-light leading-relaxed mb-6">
                      {ep.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-[#c5a880] font-mono">{ep.metrics}</span>
                    <span className="text-[#9e9b94] group-hover:text-white uppercase tracking-wider flex items-center gap-1">
                      <span>Select Episode</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cinema Philosophy */}
        <div className="mb-24 p-8 sm:p-14 bg-[#0d0d10] border border-white/10">
          <div className="max-w-3xl">
            <span className="text-xs font-sans tracking-[0.35em] uppercase text-[#c5a880] font-medium block mb-3">
              Directing Spatial Emotion
            </span>
            <h2
              className="text-2xl sm:text-4xl font-serif text-white mb-6 leading-tight"
              style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
            >
              "Static photography freezes architecture. Cinema reveals how sunlight inhabits a room."
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-[#9e9b94] font-light leading-relaxed">
              <p>
                Dennis Bezalel approaches film direction not as real estate marketing, but as an architectural monograph in motion. By choreographing slow, continuous camera movements along natural human eye-levels, the viewer experiences the true volumetric scale, the acoustic resonance of monolithic walls, and the shifting shadows cast by the equator sun.
              </p>
              <p>
                Our films have garnered more than 20 million views across East Africa, the United Arab Emirates, and Europe, transforming how luxury developments communicate with discerning global investors.
              </p>
            </div>
          </div>
        </div>

        {/* Commission CTA */}
        <div className="p-10 sm:p-16 border border-white/15 bg-gradient-to-r from-[#101014] to-[#0c0c0e] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3
              className="text-2xl sm:text-3xl font-serif text-white"
              style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
            >
              Commission an Architectural Film Monograph
            </h3>
            <p className="text-xs text-[#9e9b94] max-w-md mt-2 leading-relaxed">
              For estate owners and luxury developers seeking cinematic storytelling for their landmark properties.
            </p>
          </div>

          <Link
            to="/conversation"
            className="px-8 py-3.5 bg-[#c5a880] text-black text-xs uppercase tracking-widest font-medium hover:bg-[#dfc7a5] transition-colors shadow-xl cursor-pointer shrink-0"
          >
            Direct Commission Dialogue
          </Link>
        </div>
      </div>
    </div>
  );
};
