import React, { useState } from 'react';
import { MATERIALS, MaterialDetail } from '../data/portfolioData';
import { Sparkles, MapPin, Layers, Check } from 'lucide-react';
import { materialityMarbleBronzeDetail } from '../assets/images';

export const MaterialityLab: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialDetail>(MATERIALS[0]);

  return (
    <section id="materiality" className="w-full py-28 sm:py-36 bg-[#0c0c0e] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-white/10 pb-12 mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#c5a880] font-medium block mb-3">
              Haute Craftsmanship · Dennis Bezalel
            </span>
            <h2
              className="text-3xl sm:text-5xl font-serif text-[#f4f2ee] font-normal leading-tight"
              style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
            >
              The Materiality Archive
            </h2>
          </div>

          <p className="text-sm text-[#9e9b94] font-sans font-light max-w-md leading-relaxed">
            Every architectural residence is defined by noble natural materials. We collaborate directly with historic stone quarries in Tuscany, timber mills in Belgium, and metal ateliers in Milan.
          </p>
        </div>

        {/* 2-Column Split: Visual Macro Detail & Interactive Material Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Macro Craftsmanship Photography */}
          <div className="lg:col-span-6 relative bg-black border border-white/10 overflow-hidden flex flex-col justify-end min-h-[460px] lg:min-h-full">
            <img
              src={materialityMarbleBronzeDetail}
              alt="Craftsmanship detail showing fluted oak, bronze trim and Nero Marquina marble"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

            {/* Inset Badge */}
            <div className="relative z-10 p-8">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#c5a880] font-sans font-medium block mb-1">
                Atelier Workshop Study
              </span>
              <h3 className="font-serif text-2xl text-white font-normal mb-2">
                Fluted Oak · Burnished Bronze · Marquina
              </h3>
              <p className="text-xs text-[#c8c5be] font-sans font-light max-w-md">
                Macro architectural millwork junction executed with a 3mm hairline brass shadow gap and bookmatched natural stone.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Material Selector */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-8 bg-[#121216] border border-white/10 p-8 sm:p-10">
            <div>
              <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#c5a880] font-medium block mb-6">
                Inspect Specimen Palette
              </span>

              {/* Swatch Selector Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
                {MATERIALS.map((mat) => {
                  const isSelected = selectedMaterial.id === mat.id;
                  return (
                    <button
                      key={mat.id}
                      onClick={() => setSelectedMaterial(mat)}
                      className={`p-3 text-left border transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                        isSelected
                          ? 'border-[#c5a880] bg-[#1a1a22]'
                          : 'border-white/10 bg-[#0e0e11] hover:border-white/30'
                      }`}
                    >
                      <div
                        className="w-full h-8 border border-white/10"
                        style={{
                          background: `linear-gradient(135deg, ${mat.colorHex} 0%, ${mat.accentHex} 100%)`,
                        }}
                      />
                      <span className="text-[11px] font-sans text-white/90 truncate block">
                        {mat.name.split(' ')[0]}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Material Deep-Dive */}
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
                  <div>
                    <h4
                      className="font-serif text-2xl sm:text-3xl text-white font-normal"
                      style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
                    >
                      {selectedMaterial.name}
                    </h4>
                    <span className="text-xs text-[#c5a880] font-sans tracking-wider uppercase mt-1 block">
                      {selectedMaterial.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#9e9b94] font-sans">
                    <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>{selectedMaterial.origin}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-wider text-white/40 block mb-2">
                    Tactile Character & Finish
                  </span>
                  <p className="text-sm text-[#eae7e1] font-sans font-light leading-relaxed">
                    {selectedMaterial.textureDescription}
                  </p>
                </div>

                <div className="bg-[#181820] border border-white/10 p-5">
                  <span className="text-[11px] uppercase tracking-wider text-[#c5a880] block mb-2 font-medium">
                    Architectural Application
                  </span>
                  <p className="text-xs text-[#c8c5be] font-sans leading-relaxed">
                    {selectedMaterial.architecturalApplication}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Sourcing Guarantee */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#9e9b94]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#c5a880]" />
                <span>Single Block Quarry Selection</span>
              </div>
              <span>Certificates of Authenticity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
