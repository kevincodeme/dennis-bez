import React from 'react';
import { HardHat, Compass, Palette, Video } from 'lucide-react';

export const OnSiteProcess: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Hand Drafting & Trace Paper',
      subtitle: 'The Organic Inception',
      description:
        'Before any 3D model is rendered, Dennis sits at his drafting table with 6B graphite pencils, architectural scale rulers, and yellow trace paper. We test sunlight angles, sightlines, and privacy thresholds by hand until the spatial flow feels completely natural.',
      quote: '"If you cannot feel the movement of a room in a physical sketch, a computer simulation will not save it."',
      icon: Compass,
    },
    {
      num: '02',
      title: 'Quarry Selection & Raw Stone',
      subtitle: 'Physical Materiality',
      description:
        'We do not order materials from catalogs. We personally inspect marble slabs to examine natural vein patterns, test hone finishes with water, and verify the density of thermal limestone. Every stone block in the home is cataloged before delivery.',
      quote: '"Natural stone holds millions of years of earth history; we treat it as sacred art."',
      icon: Palette,
    },
    {
      num: '03',
      title: 'Site Boots & Formwork Precision',
      subtitle: 'Hands On Jobsite Oversight',
      description:
        'From the first excavator breaking ground in Karen or Runda to the final coat of wax on patinated bronze handrails, Dennis is physically on site. Working alongside lead engineers and masons ensures zero compromise.',
      quote: '"Great architecture is won in the mud and dust of the construction site."',
      icon: HardHat,
    },
    {
      num: '04',
      title: 'Cinematic Spatial Archival',
      subtitle: 'Preserving The Legacy',
      description:
        'Using professional 4K cameras, anamorphic glass, and precision aerial drones, Dennis documents the transformation from bare topography to living sanctuary. The client receives an archival film of museum quality documenting their family estate.',
      quote: '"A legacy home deserves a cinematic record that future generations can cherish."',
      icon: Video,
    },
  ];

  return (
    <section id="process" className="w-full py-28 sm:py-36 bg-[#0a0a0d] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-white/10 pb-12 mb-16 gap-8">
          <div>
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#c5a880] font-medium block mb-3">
              The Human Practice · Dennis Bezalel
            </span>
            <h2
              className="text-3xl sm:text-5xl font-serif text-[#f4f2ee] font-normal leading-tight"
              style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
            >
              How We Build: From Dirt to Sanctuary
            </h2>
          </div>

          <p className="text-sm text-[#9e9b94] font-sans font-light max-w-md leading-relaxed">
            There are no anonymous subcontractors or distant corporate boards. Every estate is personally shepherded by Dennis Ochieng with relentless devotion to the physical craft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-[#121216] border border-white/10 p-8 flex flex-col justify-between group hover:border-[#c5a880]/50 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs text-[#c5a880] tracking-widest">
                      PHASE {step.num}
                    </span>
                    <Icon className="w-5 h-5 text-[#9e9b94] group-hover:text-[#c5a880] transition-colors" />
                  </div>

                  <h3
                    className="font-serif text-2xl text-white font-normal mb-1"
                    style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', serif" }}
                  >
                    {step.title}
                  </h3>

                  <span className="text-xs text-[#c5a880] font-sans tracking-wider block mb-4">
                    {step.subtitle}
                  </span>

                  <p className="text-xs sm:text-sm text-[#9e9b94] font-sans font-light leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p
                    className="text-xs text-[#c8c5be] italic"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    {step.quote}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
