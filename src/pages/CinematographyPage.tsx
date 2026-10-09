import React from 'react';
import { Link } from 'react-router-dom';
import { CinematographySection } from '../components/CinematographySection';
import { Youtube, ExternalLink, Video, Award, ArrowRight } from 'lucide-react';

export const CinematographyPage: React.FC = () => {
  return (
    <div className="w-full pt-28 pb-32 bg-[#08080a] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-12">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-[#9e9b94]">
          <Link to="/" className="hover:text-white transition-colors">
            Atelier
          </Link>
          <span>/</span>
          <span className="text-[#c5a880]">Architectural Motion</span>
        </div>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-white/10 pb-12 gap-8">
          <div>
            <span className="text-xs font-sans tracking-[0.35em] uppercase text-[#c5a880] font-medium block mb-3">
              Spatial Storytelling · 20M+ Views
            </span>
            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#f4f2ee] font-normal leading-[1.05]"
              style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
            >
              Architectural Motion & Film
            </h1>
            <p className="mt-4 text-sm sm:text-base text-[#9e9b94] font-light max-w-2xl leading-relaxed">
              Dennis Bezalel directs cinematic video walkthroughs, lighting studies, and FPV drone journeys that translate monumental architecture into emotive living experiences.
            </p>
          </div>

          <a
            href="https://youtube.com/@dennisbezalel?si=sjAgKEOQGBJD4tRj"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 border border-red-500/40 hover:border-red-500 bg-red-950/20 text-xs font-sans uppercase tracking-[0.2em] text-white transition-colors self-start lg:self-auto"
          >
            <Youtube className="w-4 h-4 text-red-500" />
            <span>Open YouTube Channel</span>
            <ExternalLink className="w-3.5 h-3.5 text-white/50" />
          </a>
        </div>
      </div>

      {/* Main Cinematography Showcase */}
      <CinematographySection />

      {/* Direct Commission CTA */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mt-20">
        <div className="p-10 sm:p-14 border border-white/10 bg-[#0e0e12] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3
              className="text-2xl sm:text-3xl font-serif text-white mb-2"
              style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
            >
              Commission an Architectural Film
            </h3>
            <p className="text-xs text-[#9e9b94] max-w-md">
              Available for ultra-luxury residential estates, boutique hotels, and aviation lounges internationally.
            </p>
          </div>

          <Link
            to="/conversation"
            className="px-8 py-3.5 bg-[#c5a880] text-black text-xs uppercase tracking-widest font-medium hover:bg-[#dfc7a5] transition-colors whitespace-nowrap shadow-xl"
          >
            Inquire for Video Production
          </Link>
        </div>
      </div>
    </div>
  );
};
