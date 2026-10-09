import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramFeed } from '../components/InstagramFeed';
import { Instagram, ExternalLink, Camera, ArrowRight } from 'lucide-react';

export const FieldDiaryPage: React.FC = () => {
  return (
    <div className="w-full pt-28 pb-32 bg-[#08080a] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-12">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-[#9e9b94]">
          <Link to="/" className="hover:text-white transition-colors">
            Atelier
          </Link>
          <span>/</span>
          <span className="text-[#c5a880]">Field Diary & Dispatches</span>
        </div>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-white/10 pb-12 gap-8">
          <div>
            <span className="text-xs font-sans tracking-[0.35em] uppercase text-[#c5a880] font-medium block mb-3">
              Real Site Dispatches · @dennisbezalel
            </span>
            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#f4f2ee] font-normal leading-[1.05]"
              style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
            >
              Field Diary & Works in Progress
            </h1>
            <p className="mt-4 text-sm sm:text-base text-[#9e9b94] font-light max-w-2xl leading-relaxed">
              Unfiltered chronicles straight from the construction sites, marble quarries, and studio drafting desks of Dennis Bezalel in Nairobi and Dubai.
            </p>
          </div>

          <a
            href="https://www.instagram.com/dennisbezalel/?__pwa=1"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 border border-[#c5a880]/50 hover:border-[#c5a880] bg-[#c5a880]/10 text-xs font-sans uppercase tracking-[0.2em] text-[#dfc7a5] hover:text-white transition-colors self-start lg:self-auto"
          >
            <Instagram className="w-4 h-4 text-[#c5a880]" />
            <span>Follow @dennisbezalel on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Feed Component */}
      <InstagramFeed />

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mt-20 text-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#c5a880] text-black text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#dfc7a5] transition-colors shadow-xl"
        >
          <span>Commission a Project Documented by Dennis</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
