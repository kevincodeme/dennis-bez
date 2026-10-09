import React from 'react';
import { Compass, PenTool } from 'lucide-react';

export const ArchitectLetter: React.FC = () => {
  return (
    <section className="w-full py-28 sm:py-36 bg-[#0a0a0c] relative border-b border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Photograph of Dennis at his desk */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-white/15 bg-black p-3 sm:p-4 shadow-2xl">
              <div className="relative aspect-4/5 overflow-hidden bg-[#16161a]">
                <img
                  src="/src/assets/images/portrait_dennis_dear_artists_1791541524326.jpg"
                  alt="Dennis Ochieng drafting at his desk late at night"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Hand-written style annotation note */}
              <div className="mt-4 px-2 flex items-center justify-between text-xs text-[#9e9b94]">
                <span className="font-serif italic text-white/90">
                  Late nights at the atelier desk
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#c5a880] font-sans">
                  Nairobi · 01:14 AM
                </span>
              </div>
            </div>

            {/* Hand-drawn tape detail aesthetic */}
            <div className="absolute -top-3 left-12 px-6 py-1 bg-[#c5a880]/20 border border-[#c5a880]/40 text-[#dfc7a5] text-[10px] uppercase tracking-[0.25em] font-sans backdrop-blur-sm hidden sm:block">
              Field Diary · Dennis Bezalel
            </div>
          </div>

          {/* Right Column: Personal First-Person Letter */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#c5a880] font-medium block mb-3">
                A Note From The Architect
              </span>

              <h2
                className="text-3xl sm:text-5xl font-serif text-[#f4f2ee] font-normal leading-tight mb-8"
                style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
              >
                "Architecture must never be sterile. It must have a human soul."
              </h2>

              <div className="space-y-5 text-sm sm:text-base text-[#c8c5be] font-sans font-light leading-relaxed">
                <p>
                  I didn’t get into spatial design and architecture to produce cookie-cutter renderings on a screen. When I was studying Interior Spatial Planning and Design Principles at Maseno University, I spent my nights obsessing over one simple truth: <em className="text-white font-normal">how does a space make a person feel when the world outside goes silent?</em>
                </p>
                <p>
                  Over the past nine years—from dusty red-dirt sites in Karen and Muthaiga alongside master builders at Fine Urban, to high-altitude penthouse terraces and coastal villas in Dubai—I have treated every home as an unrepeatable physical sculpture.
                </p>
                <p>
                  We don’t just draw lines. We stand in the dirt before sunrise to watch how the morning light falls across the ridge. We fly to the quarries to touch the marble before it is cut. And we build with the quiet conviction that a great house should stand for fifty, a hundred years, holding memories with absolute grace.
                </p>
              </div>

              {/* Handwritten digital signature lockup */}
              <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <div>
                  <p
                    className="text-2xl sm:text-3xl text-[#c5a880] select-none mb-1"
                    style={{ fontFamily: "'Homemade Apple', cursive" }}
                  >
                    Dennis Ochieng
                  </p>
                  <span className="text-xs uppercase tracking-widest text-[#9e9b94] font-sans block">
                    Dennis Bezalel · Architectural Atelier
                  </span>
                  <span className="text-[11px] text-[#9e9b94]/70">
                    Nairobi Atelier & Dubai Studio
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs text-[#9e9b94] font-sans">
                  <PenTool className="w-4 h-4 text-[#c5a880]" />
                  <span>Drawn by hand · Built with stone</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
