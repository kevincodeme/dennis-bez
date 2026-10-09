import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Layers, Sparkles, ShieldCheck, Scale, Compass, CheckCircle2 } from 'lucide-react';
import { MATERIALS } from '../data/portfolioData';

interface ExtendedMaterial {
  id: string;
  name: string;
  category: string;
  provenance: string;
  quarryLocation: string;
  colorHex: string;
  accentHex: string;
  mohsHardness: string;
  thermalQuality: string;
  patinaTimeline: string;
  statement: string;
  applications: string[];
  detailingNotes: string;
}

const SPECIMENS: ExtendedMaterial[] = [
  {
    id: 'calacatta-oro',
    name: 'Calacatta Oro Marble',
    category: 'Monolithic Quarry Stone',
    provenance: 'Apuan Alps, Tuscany, Italy',
    quarryLocation: 'Carrara Quarry Basin #14',
    colorHex: '#e8e5dc',
    accentHex: '#c4a47c',
    mohsHardness: '3.5 - 4.0 Mohs',
    thermalQuality: 'High thermal inertia; remains naturally cool in equatorial heat',
    patinaTimeline: 'Develops a subtle, silky matte sheen over decades with organic beeswax treatment',
    statement:
      'Quarried from the historic crests of Carrara, each block of Calacatta Oro features a creamy ivory background laced with warm amber and graphite veins. Dennis Bezalel personally visits the extraction blocks to oversee uninterrupted bookmatched mirror veins across double-height reception fireplaces.',
    applications: [
      'Double-height monumental fireplace monolithic walls',
      'Continuous waterfall kitchen preparation islands',
      'Full-slab master bath soaking tub surrounds and vanity consoles',
    ],
    detailingNotes:
      'Installed exclusively with continuous grain bookmatching and hairline 1mm resin-matched joints. Sealed solely with breathable Italian micro-wax, preserving the raw crystalline pore structure.',
  },
  {
    id: 'fluted-oak',
    name: 'Belgian Smoked Oak',
    category: 'Artisanal Millwork & Timber',
    provenance: 'Flanders Forest Basin, Belgium',
    quarryLocation: 'Fumed in Ghent Kilns',
    colorHex: '#382e26',
    accentHex: '#735b49',
    mohsHardness: '3.8 Mohs (Janka ~1,360)',
    thermalQuality: 'Warm acoustic buffer with natural resonance damping',
    patinaTimeline: 'Deepens in espresso richness with exposure to natural sunlight; self-healing with mineral oil',
    statement:
      'Smoked through natural ammonia vaporization rather than surface pigment stains, the tannin reaction penetrates through the entire heartwood of centuries-old European white oak. The precision fluted ribs diffuse acoustic reverberation, creating a cathedral-like acoustic serenity.',
    applications: [
      'Acoustic salon wall paneling with concealed shadow-reveal pivot doors',
      'Private library ceiling coffering and recessed library shelving',
      'Bespoke master suite dressing room wardrobe monoliths',
    ],
    detailingNotes:
      'CNC milled to a proprietary 22mm pitch curve developed in the atelier. Integrated with concealed acoustic damping felt backing to achieve whisper-quiet RT60 reverberation times.',
  },
  {
    id: 'antique-bronze',
    name: 'Hand-Patinated Architectural Bronze',
    category: 'Cast & Extruded Noble Metal',
    provenance: 'Tuscan Metallurgical Foundries, Italy',
    quarryLocation: 'Florence Artisan District',
    colorHex: '#8c7150',
    accentHex: '#c5a880',
    mohsHardness: '3.0 Mohs (High tensile malleability)',
    thermalQuality: 'Rapid tactile heat conduction with substantial physical mass',
    patinaTimeline: 'Evolves dynamically; high-touch contact points burnish to luminous golden brass',
    statement:
      'Solid bronze is the touchpoint of architectural dignity. Dennis Bezalel refuses anodized aluminum or plated plastics. Every door handle, window mullion, and shadow gap is solid extruded alloy 385 bronze, chemically oxidized in sulfur baths and buffed by hand with microcrystalline wax.',
    applications: [
      'Monumental 3-meter pivot entrance door pulls weighing 18kg each',
      'Sub-millimeter 3mm shadow reveals between stone walls and floor planes',
      'Custom fireplace hearth surrounds and integrated directional linear sconces',
    ],
    detailingNotes:
      'Designed to record the passage of time and the touch of the inhabitant’s hands. Natural oxidation creates a protective living barrier that never chips, peels, or fades.',
  },
  {
    id: 'roman-travertine',
    name: 'Navona Roman Travertine',
    category: 'Sedimentary Monolith',
    provenance: 'Tivoli Quarries, Lazio, Italy',
    quarryLocation: 'Historic Roman Extraction Basin',
    colorHex: '#c7bfb1',
    accentHex: '#a39b8d',
    mohsHardness: '3.0 - 3.5 Mohs',
    thermalQuality: 'Porous cellular breathability; exceptional indoor-outdoor thermal balance',
    patinaTimeline: 'Softens and bleaches gently under open sun, mimicking ancient Roman forum monuments',
    statement:
      'The foundational stone of classical empire. Dennis Bezalel uses cross-cut Navona travertine without resin filling, leaving the natural voids open to tactile sensation. It bridges the transition from interior monumental salons to open-air loggias and reflecting pools.',
    applications: [
      'Full-bleed continuous interior-to-terrace floor paving',
      'Monumental outdoor cantilevered stair treads and colonnades',
      'Reflecting pool copings and sunken garden perimeter walls',
    ],
    detailingNotes:
      'Cut along the natural sedimentary bedding planes. Set with 2mm sand-lime jointing that allows natural thermal expansion without unsightly silicone mastic lines.',
  },
  {
    id: 'nero-marquina',
    name: 'Nero Marquina Marble',
    category: 'Noir Monolith Stone',
    provenance: 'Markina Quarries, Basque Country, Spain',
    quarryLocation: 'Mount Oiz Basin',
    colorHex: '#1a1a1c',
    accentHex: '#45454b',
    mohsHardness: '3.0 - 4.0 Mohs',
    thermalQuality: 'Deep light-absorptive obsidian density',
    patinaTimeline: 'Maintains pitch-black depth while natural calcite veins softly refract ambient illumination',
    statement:
      'A dense, midnight-black recrystallized limestone illuminated by lightning-like calcite fissures. Used intentionally by Dennis Bezalel as a spatial counterweight to expansive light, grounding powder rooms, cocktail bars, and elevator vestibules with dramatic nocturnal elegance.',
    applications: [
      'Sculptural monolith wet bars with concealed refrigeration',
      'Intimate subterranean wine tasting vaults and cigar lounges',
      'Powder room vessel basins carved from a solitary 400kg stone block',
    ],
    detailingNotes:
      'Finished with a velvet hone treatment rather than a glossy mirror polish, eliminating plastic glare and inviting tactile human engagement.',
  },
  {
    id: 'rift-basalt',
    name: 'Volcanic Rift Valley Basalt',
    category: 'Indigenous Monolithic Mass',
    provenance: 'Great Rift Valley Escarpment, Kenya',
    quarryLocation: 'Naivasha Quarry Formation',
    colorHex: '#25262a',
    accentHex: '#52545c',
    mohsHardness: '6.0 Mohs (Extreme structural density)',
    thermalQuality: 'Tremendous volcanic thermal retention; radiates warmth long into chilly nights',
    patinaTimeline: 'Virtually indestructible; impervious to tropical rains and direct UV exposure',
    statement:
      'Extracted directly from the volcanic fractures of the Kenyan Rift Valley, this dense basalt is split by hand using traditional iron wedges. It provides an unyielding tectonic foundation, anchoring residences to their native African earth with unshakeable permanence.',
    applications: [
      'Subterranean foundation plinths and retaining earthworks',
      'Monolithic outdoor fire pit hearths and courtyard water channels',
      'Rough-hewn rusticated exterior wall cladding and entry pylons',
    ],
    detailingNotes:
      'Hand-dressed by master Kenyan stonemasons using broad chisels to expose raw crystalline fracture planes, contrasting sharply with polished interior marbles.',
  },
];

export const MaterialityPage: React.FC = () => {
  const [selectedSpecimen, setSelectedSpecimen] = useState<ExtendedMaterial>(SPECIMENS[0]);

  return (
    <div className="w-full pt-28 pb-32 bg-[#08080a] min-h-screen text-[#eae7e1]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-[#9e9b94]">
          <Link to="/" className="hover:text-white transition-colors">
            Atelier
          </Link>
          <span>/</span>
          <span className="text-[#c5a880]">Materiality Archive</span>
        </div>

        {/* Page Header */}
        <div className="border-b border-white/10 pb-12 mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2 h-2 bg-[#c5a880]" />
            <span className="text-xs font-sans tracking-[0.35em] uppercase text-[#c5a880] font-medium">
              Geological Provenance & Haute Detailing
            </span>
          </div>
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#f4f2ee] font-normal leading-[1.05]"
            style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
          >
            The Materiality Archive
          </h1>
          <p className="mt-5 text-sm sm:text-base text-[#9e9b94] font-light max-w-3xl leading-relaxed">
            In the tradition of Ferris Rafauli and Peter Zumthor, Dennis Bezalel builds without synthetic substitutes. Every residence is anchored by genuine quarried stone, bespoke fluted hardwoods, and solid patinated metals that mature in dignity over a century.
          </p>
        </div>

        {/* Interactive Specimen Explorer */}
        <div className="mb-24">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
            <div className="flex items-center gap-3">
              <Layers className="w-4 h-4 text-[#c5a880]" />
              <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#c5a880] font-medium">
                Physical Specimen Vault · {SPECIMENS.length} Curated Materials
              </span>
            </div>
            <span className="text-xs font-mono text-[#9e9b94]">
              Select a specimen to inspect provenance
            </span>
          </div>

          {/* Specimen Buttons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
            {SPECIMENS.map((specimen) => {
              const isSelected = selectedSpecimen.id === specimen.id;
              return (
                <button
                  key={specimen.id}
                  onClick={() => setSelectedSpecimen(specimen)}
                  className={`p-4 border text-left transition-all duration-300 flex flex-col justify-between h-36 cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? 'border-[#c5a880] bg-[#121217] shadow-xl'
                      : 'border-white/10 bg-[#0a0a0d] hover:border-white/30 hover:bg-[#0f0f13]'
                  }`}
                >
                  <div
                    className="w-full h-8 border border-white/15 mb-2 transition-transform"
                    style={{ backgroundColor: specimen.colorHex }}
                  />
                  <div>
                    <span className="text-[10px] text-[#9e9b94] uppercase tracking-wider block truncate">
                      {specimen.category.split(' ')[0]}
                    </span>
                    <span className="text-xs font-serif text-white block font-medium leading-snug truncate">
                      {specimen.name}
                    </span>
                  </div>
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#c5a880] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Deep-Dive Specimen Dossier */}
          <div className="bg-[#0e0e12] border border-[#c5a880]/30 p-8 sm:p-14 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Color Block & Metrics */}
              <div className="lg:col-span-4 flex flex-col space-y-6">
                <div
                  className="aspect-square w-full border border-white/20 p-6 flex flex-col justify-between shadow-inner relative overflow-hidden"
                  style={{ backgroundColor: selectedSpecimen.colorHex }}
                >
                  <div className="flex items-center justify-between text-black/70 mix-blend-difference">
                    <span className="text-[10px] font-mono uppercase tracking-widest">
                      Specimen No. {selectedSpecimen.id}
                    </span>
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-black/60 mix-blend-difference block mb-1">
                      {selectedSpecimen.category}
                    </span>
                    <span className="text-xl font-serif text-black mix-blend-difference font-semibold">
                      {selectedSpecimen.name}
                    </span>
                  </div>
                </div>

                <div className="bg-[#08080a] p-5 border border-white/10 space-y-3.5 text-xs">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-[#9e9b94]">Mohs Hardness:</span>
                    <span className="font-mono text-[#eae7e1]">{selectedSpecimen.mohsHardness}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-[#9e9b94]">Quarry Region:</span>
                    <span className="text-[#eae7e1] text-right">{selectedSpecimen.provenance}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-[#9e9b94]">Basin Specifics:</span>
                    <span className="text-[#c5a880] text-right">{selectedSpecimen.quarryLocation}</span>
                  </div>
                  <div>
                    <span className="text-[#9e9b94] block mb-1">Thermal Inertia:</span>
                    <span className="text-[#eae7e1] italic text-[11px] block">{selectedSpecimen.thermalQuality}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Statement, Applications, Detailing */}
              <div className="lg:col-span-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#c5a880] mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Provenance: {selectedSpecimen.provenance}</span>
                  </div>

                  <h2
                    className="text-2xl sm:text-4xl font-serif text-white mb-6 leading-tight"
                    style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
                  >
                    {selectedSpecimen.name}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#9e9b94] font-light leading-relaxed mb-8">
                    {selectedSpecimen.statement}
                  </p>

                  <div className="mb-8">
                    <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#c5a880] block mb-3 font-medium">
                      Architectural Applications
                    </span>
                    <div className="space-y-2.5">
                      {selectedSpecimen.applications.map((app, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-3 text-xs text-[#c8c5be]">
                          <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                          <span>{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 bg-white/5 border border-white/10 mb-8">
                    <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#c5a880] block mb-2 font-medium">
                      Atelier Detailing & Joinery Codex
                    </span>
                    <p className="text-xs text-[#9e9b94] font-light leading-relaxed">
                      {selectedSpecimen.detailingNotes}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs text-[#9e9b94]">
                    <span className="text-white block font-medium">Patina Profile:</span>
                    <span>{selectedSpecimen.patinaTimeline}</span>
                  </div>

                  <Link
                    to="/conversation"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#c5a880] hover:bg-[#dfc7a5] text-black text-xs uppercase tracking-widest font-medium transition-colors shrink-0"
                  >
                    <span>Request Specimen Box</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailing Manifesto - The 3mm Shadow Gap */}
        <div className="mb-24 grid grid-cols-1 md:grid-cols-3 gap-8 p-8 sm:p-12 bg-[#0b0b0e] border border-white/10">
          <div className="space-y-3">
            <span className="text-white font-medium uppercase tracking-widest text-xs flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#c5a880]" />
              The 3mm Bronze Shadow Gap
            </span>
            <p className="text-xs text-[#9e9b94] font-light leading-relaxed">
              We eliminate traditional baseboards and decorative moldings entirely. Every junction between marble wall panels and hardwood flooring features a precision 3mm shadow reveal lined with patinated architectural bronze. This allows the structural mass to float in space.
            </p>
          </div>

          <div className="space-y-3">
            <span className="text-white font-medium uppercase tracking-widest text-xs flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#c5a880]" />
              Continuous Vein Bookmatching
            </span>
            <p className="text-xs text-[#9e9b94] font-light leading-relaxed">
              When marble slabs are cut from the mountain, they are numbered consecutively. In our master suites and fireplaces, we align adjacent slabs like open pages of a sacred book, creating mirror-symmetrical butterfly patterns that turn geological formations into living art.
            </p>
          </div>

          <div className="space-y-3">
            <span className="text-white font-medium uppercase tracking-widest text-xs flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#c5a880]" />
              Zero Synthetic Laminates
            </span>
            <p className="text-xs text-[#9e9b94] font-light leading-relaxed">
              No PVC veneers, no resin-bonded imitation stones, no stamped plastic tiles. Dennis Bezalel builds sanctuaries that can be touched with closed eyes and still convey authenticity through temperature, texture, weight, and acoustic density.
            </p>
          </div>
        </div>

        {/* Bottom CTA to View Works */}
        <div className="p-10 sm:p-14 border border-white/15 bg-gradient-to-r from-[#101014] to-[#0c0c0e] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3
              className="text-2xl sm:text-3xl font-serif text-white"
              style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
            >
              Examine Realized Residences
            </h3>
            <p className="text-xs text-[#9e9b94] max-w-md mt-2 leading-relaxed">
              View how these materials are integrated into B&Q Towers and Siaya Park luxury residences.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/residences"
              className="px-6 py-3.5 border border-white/20 hover:border-[#c5a880] text-xs uppercase tracking-widest text-white hover:text-[#c5a880] transition-colors"
            >
              The Residences
            </Link>
            <Link
              to="/conversation"
              className="px-8 py-3.5 bg-[#c5a880] text-black text-xs uppercase tracking-widest font-medium hover:bg-[#dfc7a5] transition-colors shadow-xl"
            >
              Commission a Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
