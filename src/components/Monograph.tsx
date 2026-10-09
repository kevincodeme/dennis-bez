import React from 'react';
import { Award, GraduationCap, MapPin, Globe, Film, ArrowUpRight } from 'lucide-react';
import { portraitDennisDearArtists } from '../assets/images';

interface MonographProps {
  onOpenCommissionModal: () => void;
}

export const Monograph: React.FC<MonographProps> = ({ onOpenCommissionModal }) => {
  return (
    <section id="monograph" className="w-full py-28 sm:py-36 bg-[#0c0c0e] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Black & White Editorial Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-white/15 bg-black p-3 pb-8">
              <div className="relative aspect-square overflow-hidden bg-[#16161a]">
                <img
                  src={portraitDennisDearArtists}
                  alt="Dennis Ochieng (Dennis Bezalel) at architectural drafting desk"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Monograph caption */}
              <div className="mt-4 px-2 flex items-center justify-between text-xs text-[#9e9b94] font-sans">
                <span className="font-serif italic text-white/90 text-sm">
                  Dennis Ochieng · Dear, ARTISTS
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#c5a880]">
                  Atelier Portrait · @dennisbezalel
                </span>
              </div>
            </div>

            {/* Subtle background accent box */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#c5a880]/30 -z-10 pointer-events-none hidden sm:block" />
          </div>

          {/* Right Column: Editorial Biography & Pedigree */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#c5a880] font-medium block mb-3">
                Architectural Monograph · Dennis Bezalel
              </span>

              <h2
                className="text-3xl sm:text-5xl font-serif text-[#f4f2ee] font-normal leading-tight mb-6"
                style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
              >
                Dennis Ochieng
              </h2>

              <p className="font-serif text-xl text-[#c8c5be] italic leading-relaxed mb-6 font-light">
                "Spatial design is a dialogue between human emotion and structural permanence. When raw stone, pure light, and bespoke millwork align, architecture ceases to be shelter. It becomes timeless art."
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-[#9e9b94] font-sans font-light leading-relaxed mb-8">
                <p>
                  Trained with a Bachelor of Arts in Interior Design with IT from Maseno University, Dennis Ochieng combines deep spatial planning acumen, architectural drafting, and cutting edge digital visualization. Over nine years of dedicated practice, he has shaped high end private residences, luxury hospitality suites, and commercial landmarks across East Africa and the Middle East.
                </p>
                <p>
                  As Founder and Creative Director of the Dennis Bezalel Brand and long-standing visual lead for Fine Urban Interiors Ltd, Dennis has directed architectural productions viewed by over 20 million design aficionados worldwide. His portfolio includes celebrated collaborations on projects for Heart of Europe in Dubai, De Alby Suites, Lesus Private Aviation, and Taj Dubai.
                </p>
              </div>

              {/* Editorial Credentials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10 pt-6 mb-8 text-xs font-sans">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white block font-medium">B.A. Interior Design with IT</span>
                    <span className="text-[#9e9b94]">Maseno University · Spatial Planning & IT</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white block font-medium">Atelier Bases</span>
                    <span className="text-[#9e9b94]">Nairobi, Kenya & Dubai, UAE</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Film className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white block font-medium">Architectural Storytelling</span>
                    <span className="text-[#9e9b94]">20M+ Digital Documented Views</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white block font-medium">International Exposure</span>
                    <span className="text-[#9e9b94]">Dubai, Spain, Turkey, China, Africa</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenCommissionModal}
                className="px-6 py-3 bg-[#c5a880] hover:bg-[#dfc7a5] text-black text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
              >
                Commission Dennis Bezalel
              </button>
              <a
                href="https://drive.google.com/drive/folders/1-anMEFCtBHrXsBvKVDvZoke1VFyhOWmc?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 border border-white/20 hover:border-white text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors flex items-center gap-2"
              >
                <span>Curated Drive Archive</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
