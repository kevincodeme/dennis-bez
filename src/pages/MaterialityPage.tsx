import React from 'react';
import { Link } from 'react-router-dom';
import { MaterialityLab } from '../components/MaterialityLab';
import { ArrowRight, Sparkles, MapPin, Layers } from 'lucide-react';

export const MaterialityPage: React.FC = () => {
  return (
    <div className="w-full pt-28 pb-32 bg-[#08080a] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-12">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-[#9e9b94]">
          <Link to="/" className="hover:text-white transition-colors">
            Atelier
          </Link>
          <span>/</span>
          <span className="text-[#c5a880]">The Materiality Archive</span>
        </div>

        {/* Header */}
        <div className="border-b border-white/10 pb-12">
          <span className="text-xs font-sans tracking-[0.35em] uppercase text-[#c5a880] font-medium block mb-3">
            Haute Craftsmanship & Sourcing
          </span>
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#f4f2ee] font-normal leading-[1.05]"
            style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
          >
            The Materiality Archive
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#9e9b94] font-light max-w-2xl leading-relaxed">
            In the tradition of Ferris Rafauli, Dennis Bezalel builds without synthetic substitutes. Every residence is anchored by genuine quarried stone, bespoke fluted metals, and hand-rubbed organic timbers.
          </p>
        </div>
      </div>

      {/* Interactive Materiality Lab Component */}
      <MaterialityLab />

      {/* Quarrying & Sourcing Manifesto */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-b border-white/10 text-xs text-[#9e9b94]">
          <div className="space-y-3">
            <span className="text-white font-medium uppercase tracking-widest text-xs flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#c5a880]" />
              Direct Quarry Sourcing
            </span>
            <p className="leading-relaxed">
              We travel directly to Carrara, Tivoli, and Markina to inspect full quarry blocks. No two slabs are identical; Dennis personally selects vein continuity for bookmatching.
            </p>
          </div>

          <div className="space-y-3">
            <span className="text-white font-medium uppercase tracking-widest text-xs flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#c5a880]" />
              Sub-Millimeter Shadow Gaps
            </span>
            <p className="leading-relaxed">
              All trim junctions between marble and Belgian oak are executed with custom 3mm shadow reveals lined with brushed patinated bronze, eliminating baseboards and trim clutter.
            </p>
          </div>

          <div className="space-y-3">
            <span className="text-white font-medium uppercase tracking-widest text-xs flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#c5a880]" />
              Living Patinas
            </span>
            <p className="leading-relaxed">
              We never use electroplated lacquers that chip over time. Our bronze and brass elements are oil-rubbed by hand to develop a natural, distinguished luster over decades.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-16">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#c5a880] text-black text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#dfc7a5] transition-colors shadow-xl"
          >
            <span>Request Sample Palette for Private Commission</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
