import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Monograph } from '../components/Monograph';
import { ArrowRight, GraduationCap, MapPin, Award, Instagram, Youtube } from 'lucide-react';

export const ArchitectPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full pt-28 pb-32 bg-[#08080a] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-12">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-[#9e9b94]">
          <Link to="/" className="hover:text-white transition-colors">
            Atelier
          </Link>
          <span>/</span>
          <span className="text-[#c5a880]">The Architect</span>
        </div>

        {/* Header */}
        <div className="border-b border-white/10 pb-12">
          <span className="text-xs font-sans tracking-[0.35em] uppercase text-[#c5a880] font-medium block mb-3">
            Biography & Studio Pedigree
          </span>
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#f4f2ee] font-normal leading-[1.05]"
            style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
          >
            Dennis Ochieng (Dennis Bezalel)
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#9e9b94] font-light max-w-2xl leading-relaxed">
            Architectural designer, spatial strategist, and creative director bridging monumental classical craftsmanship with contemporary architectural geometry across East Africa and the Middle East.
          </p>
        </div>
      </div>

      {/* Main Monograph Component */}
      <Monograph onOpenCommissionModal={() => navigate('/contact')} />

      {/* Direct Social Links Strip */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mt-16">
        <div className="p-8 sm:p-12 border border-white/10 bg-[#0d0d10] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/dennisbezalel/?__pwa=1"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a880] hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram @dennisbezalel</span>
            </a>
            <span className="text-white/20">·</span>
            <a
              href="https://youtube.com/@dennisbezalel?si=sjAgKEOQGBJD4tRj"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#c8c5be] hover:text-white transition-colors"
            >
              <Youtube className="w-4 h-4" />
              <span>YouTube Channel</span>
            </a>
          </div>

          <Link
            to="/contact"
            className="px-8 py-3.5 bg-[#c5a880] text-black text-xs uppercase tracking-widest font-medium hover:bg-[#dfc7a5] transition-colors shadow-lg"
          >
            Initiate Conversation with Dennis
          </Link>
        </div>
      </div>
    </div>
  );
};
