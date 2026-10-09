import React from 'react';
import { Link } from 'react-router-dom';
import { ArchitectLetter } from '../components/ArchitectLetter';
import { OnSiteProcess } from '../components/OnSiteProcess';
import { PedigreeRibbon } from '../components/PedigreeRibbon';
import { AtelierPhilosophy } from '../components/AtelierPhilosophy';
import { ArrowRight, Compass } from 'lucide-react';

export const AtelierPage: React.FC = () => {
  return (
    <div className="w-full pt-28 pb-32 bg-[#08080a] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-12">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-[#9e9b94]">
          <Link to="/" className="hover:text-white transition-colors">
            Atelier
          </Link>
          <span>/</span>
          <span className="text-[#c5a880]">The Atelier & Philosophy</span>
        </div>

        {/* Header */}
        <div className="border-b border-white/10 pb-12">
          <span className="text-xs font-sans tracking-[0.35em] uppercase text-[#c5a880] font-medium block mb-3">
            Design Ethos & Methodology
          </span>
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#f4f2ee] font-normal leading-[1.05]"
            style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
          >
            The Atelier & Practice
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#9e9b94] font-light max-w-2xl leading-relaxed">
            The studio philosophy of Dennis Bezalel: uncompromising precision, monolithic scale, hand-drafted organic inception, and raw physical presence on site.
          </p>
        </div>
      </div>

      {/* Dennis's First-Person Authentic Note & Desk Photo */}
      <ArchitectLetter />

      {/* Pedigree Metrics Ribbon */}
      <div className="my-16">
        <PedigreeRibbon />
      </div>

      {/* How We Build: From Dirt to Sanctuary */}
      <OnSiteProcess />

      {/* Atelier Core Tenets */}
      <AtelierPhilosophy />

      {/* Bottom CTA to Residences or Direct Conversation */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mt-20">
        <div className="p-10 sm:p-16 border border-white/15 bg-gradient-to-r from-[#101014] to-[#0c0c0e] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#c5a880] block mb-2">
              Next Step
            </span>
            <h3
              className="text-2xl sm:text-3xl font-serif text-white"
              style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
            >
              Examine Our Realized Works
            </h3>
            <p className="text-xs text-[#9e9b94] max-w-md mt-2 leading-relaxed">
              Discover the private estates and sanctuaries realized through this exacting methodology.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/residences"
              className="px-6 py-3.5 border border-white/20 hover:border-[#c5a880] text-xs uppercase tracking-widest text-white hover:text-[#c5a880] transition-colors"
            >
              View Residences
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-[#c5a880] text-black text-xs uppercase tracking-widest font-medium hover:bg-[#dfc7a5] transition-colors shadow-xl"
            >
              Initiate Dialogue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
