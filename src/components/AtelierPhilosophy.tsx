import React from 'react';
import { Layers, ShieldCheck, Sparkles, Compass } from 'lucide-react';
import { Logo } from './Logo';

export const AtelierPhilosophy: React.FC = () => {
  const tenets = [
    {
      index: '01',
      title: 'Monolithic Form & Pure Geometry',
      description:
        'Defying ephemeral trends through monumental stone masses, deep cantilevered overhangs, and calculated voids. Every facade is sculpted to command stillness and timeless authority.',
      icon: Layers,
    },
    {
      index: '02',
      title: 'The Sanctity of Rare Materiality',
      description:
        'Uncompromising sourcing of bookmatched Calacatta Oro, honed Roman travertine, solid hand-patinated bronze, and Belgian smoked oak. Materials that patinate with regal dignity.',
      icon: Sparkles,
    },
    {
      index: '03',
      title: 'Total Turnkey Cohesion',
      description:
        'From master site planning and exterior architecture to bespoke cabinetry, concealed mechanicals, and custom low-slung furnishings. A singular artistic vision executed without fragmentation.',
      icon: ShieldCheck,
    },
    {
      index: '04',
      title: 'Cinematic Spatial Choreography',
      description:
        'Harnessing natural diurnal light, reflection pools, and precision architectural shadow gaps. Designing spaces not merely as shelter, but as an emotional sensory narrative.',
      icon: Compass,
    },
  ];

  return (
    <section id="philosophy" className="w-full py-28 sm:py-36 bg-[#0b0b0d] relative overflow-hidden">
      {/* Subtle Hairline Grid Pattern */}
      <div className="absolute inset-0 bg-grid-hairline opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-12 mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#c5a880] font-medium block mb-3">
              The Atelier · Dennis Bezalel
            </span>
            <h2
              className="text-3xl sm:text-5xl font-serif text-[#f4f2ee] font-normal leading-[1.15]"
              style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
            >
              Haute Architecture & Spatial Mastery
            </h2>
          </div>

          <p className="text-sm text-[#9e9b94] font-sans font-light max-w-md leading-relaxed">
            Inspired by the monumental ethos of iconic master designers, Dennis Ochieng conceives bespoke private estates and penthouses where monumental structural engineering fuses with the intimate luxury of haute couture interior architecture.
          </p>
        </div>

        {/* 4 Tenets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tenets.map((tenet) => {
            const Icon = tenet.icon;
            return (
              <div
                key={tenet.index}
                className="group relative bg-[#131317]/80 hover:bg-[#191920] border border-white/10 hover:border-[#c5a880]/40 p-8 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-serif text-2xl text-[#c5a880] tabular-nums">
                      {tenet.index}
                    </span>
                    <Icon className="w-5 h-5 text-[#9e9b94] group-hover:text-[#c5a880] transition-colors" />
                  </div>

                  <h3 className="font-serif text-xl text-[#f4f2ee] font-normal mb-4 group-hover:text-white transition-colors">
                    {tenet.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#9e9b94] font-sans font-light leading-relaxed">
                    {tenet.description}
                  </p>
                </div>

                <div className="w-8 h-[1px] bg-white/15 group-hover:bg-[#c5a880] group-hover:w-16 transition-all duration-300 mt-8" />
              </div>
            );
          })}
        </div>

        {/* Architectural Monograph Statement Quote */}
        <div className="mt-20 p-8 sm:p-14 bg-[#111114] border border-white/10 relative">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#c5a880] font-sans font-medium block mb-2">
                Atelier Manifesto
              </span>
              <p
                className="font-serif text-xl sm:text-2xl text-[#eae7e1] italic font-light leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                "True architectural luxury does not scream for attention; it commands presence through uncompromising scale, honest raw stones, and an absolute obsession with how daylight sculpts living space."
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-6 border-t md:border-t-0 md:border-l border-white/15 pt-6 md:pt-0 md:pl-8">
              <Logo size="lg" showText={false} />
              <div className="flex flex-col">
                <span className="font-serif text-base text-white uppercase tracking-wider">
                  Dennis Ochieng
                </span>
                <span className="text-xs text-[#c5a880] font-sans">
                  Dennis Bezalel Brand
                </span>
                <span className="text-[11px] text-[#9e9b94] mt-0.5">
                  B.A. Interior Design with IT · Maseno University
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
