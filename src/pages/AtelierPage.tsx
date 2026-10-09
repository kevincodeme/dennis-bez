import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Layers, ShieldCheck, Ruler, Sparkles, CheckCircle2, ChevronRight, BookOpen } from 'lucide-react';
import { dennisDeskPhoto } from '../assets/images';

export const AtelierPage: React.FC = () => {
  const [activePrinciple, setActivePrinciple] = useState(0);
  const [activePhase, setActivePhase] = useState(0);

  const PRINCIPLES = [
    {
      num: '01',
      title: 'Monolithic Mass & Structural Weight',
      tagline: 'Permanent volume over superficial veneers',
      description:
        'We reject thin facades and flimsy drywalls. A Dennis Bezalel sanctuary is carved from reinforced stone, solid masonry, and genuine concrete. Every threshold has heft; every exterior envelope has thermal mass that grounds the dweller in absolute silence and timeless permanence.',
      quote: 'If an architectural work cannot withstand a century of tropical storms and still look noble, it was merely an interior decoration masquerading as architecture.',
      details: [
        'Minimum wall thickness of 350mm for monumental thermal and acoustic inertia',
        'Direct structural stone integration without hollow cosmetic cladding',
        'Deep reveal portals that frame the sky with classical dignity',
      ],
    },
    {
      num: '02',
      title: 'The Axial Horizon & Solitary Light',
      tagline: 'Sculpting equatorial daylight as a physical material',
      description:
        'At the equator, daylight is intense, vertical, and unforgiving. Rather than allowing glare, we channel light through recessed clerestories, coffered skylights, and colonnaded loggias. The morning sun strikes raw travertine, while the golden dusk warms smoked Belgian oak.',
      quote: 'Light does not merely illuminate an interior; it is the silent inhabitant that choreographs human emotion throughout the day.',
      details: [
        'Axial vista corridors exceeding 30 meters aligning front entrance with private courtyards',
        'Double-height brise-soleil deep louvres engineered for glare-free natural radiance',
        'Shadow gaps that emphasize the weight of descending light beams',
      ],
    },
    {
      num: '03',
      title: 'Material Honesty & Zero Synthetics',
      tagline: 'Only elements that grow more beautiful with 50 years of patina',
      description:
        'In our atelier, artificial laminates, faux marbles, and vinyl substitutes are strictly forbidden. We build only with elements extracted from the earth: Italian Carrara and Nero Marquina marble, kiln-fumed Belgian oak, cast statuary bronze, and tactile lime plasters.',
      quote: 'True luxury is organic. A synthetic surface degrades with age; authentic bronze and natural stone develop a soul.',
      details: [
        'Continuous bookmatching across full quarry slab blocks',
        'Hand-burnished waxes over chemical polyurethane topcoats',
        'Solid extruded bronze hardware hand-patinated in artisan baths',
      ],
    },
    {
      num: '04',
      title: 'Hand-Drafted Inception to Digital Precision',
      tagline: 'The intuition of graphite before the calculation of algorithms',
      description:
        'Every project begins at Dennis’s drafting desk with 2B graphite on heavy cotton paper. Only when spatial harmony and proportional balance feel organic in hand do we transition into sub-millimeter BIM coordinate modeling and 3D daylight rendering.',
      quote: 'A computer calculates dimensions; the human hand discovers proportion.',
      details: [
        'Original hand-drawn concept elevations preserved for the estate archives',
        '1:20 physical plaster study models built in the Nairobi workshop',
        'Sub-millimeter BIM clash detection coordinated with master MEP engineers',
      ],
    },
    {
      num: '05',
      title: 'The Turnkey Master Vow',
      tagline: 'Principal presence from excavation bedrock to final linen placement',
      description:
        'Dennis Bezalel does not hand off drawings to third-party general contractors and walk away. We operate as the design-builder and principal custodian. Dennis walks the site during morning foundation pours, inspects the joinery joints, and hand-delivers the keys.',
      quote: 'A grand house is not a transaction; it is a monument to the client’s legacy.',
      details: [
        'Strict limitation to 3–4 estate commissions concurrently',
        'Weekly principal site inspections documented in our Field Diary',
        'Turnkey handover with custom-curated art and bespoke millwork',
      ],
    },
  ];

  const PHASES = [
    {
      step: 'Phase 01',
      title: 'The Geological & Solar Dialogue',
      duration: '4 to 6 Weeks',
      summary: 'Before drawing a single line, we spend days on the raw land studying prevailing equatorial winds, tree canopies, soil geology, and dawn-to-dusk solar angles.',
      outputs: ['Solar Azimuth Analysis', 'Topographical Volumetric Model', 'Initial Graphite Vignettes', 'Client Lifestyle Spatial Codex'],
    },
    {
      step: 'Phase 02',
      title: 'Concept & Spatial Proportioning',
      duration: '6 to 8 Weeks',
      summary: 'Conceiving the monumental footprint, ceiling volumes (ranging from 3.8m to 7.2m heights), axial views, and private family sanctuaries versus public reception salons.',
      outputs: ['Hand-Drafted Elevations', '1:50 Scale White Plaster Massing', 'Material Palette Board', '3D Photorealistic Day/Night Walkthrough'],
    },
    {
      step: 'Phase 03',
      title: 'Quarry Selection & Artisan Detailing',
      duration: '8 to 12 Weeks',
      summary: 'We travel directly to international stone quarries and specialty foundries to inspect raw blocks of stone, select wood grain lots, and engineer custom bronze profiles.',
      outputs: ['Stone Slab Bookmatching Registry', 'Full-Scale 1:1 Joinery Mockups', 'Custom Ironmongery Casts', 'Precision Engineering Drawings'],
    },
    {
      step: 'Phase 04',
      title: 'Monolithic On-Site Erection',
      duration: '12 to 18 Months',
      summary: 'Deep foundation piling, reinforced concrete skeletal framing, precision masonry, and sub-millimeter MEP infrastructure under direct atelier site management.',
      outputs: ['Daily Field Log Dispatches', 'Acoustic & Thermal Audits', 'Dry-Fitted Marble Inspections', 'Shadow Reveal Precision Checks'],
    },
    {
      step: 'Phase 05',
      title: 'Curated Handover & Commissioning',
      duration: '4 to 6 Weeks',
      summary: 'Final atmospheric lighting tuning, bespoke furniture installation, acoustic calibration, and presentation of the leather-bound Architect Dossier.',
      outputs: ['Turnkey Sanctuary Handover', 'Leather-Bound Architectural Monograph', 'Material Care Protocols', 'Lifetime Atelier Stewardship'],
    },
  ];

  const GUILDS = [
    {
      title: 'Verona Stone Guild',
      region: 'Verona, Italy',
      specialty: 'Monolithic Marble Extraction & Continuous Bookmatching',
      description: 'Generational stone cutters who quarry, slice, and dry-layout Calacatta Oro and Nero Marquina blocks to match Dennis Bezalel’s exact architectural elevations.',
    },
    {
      title: 'Florentine Bronze Foundry',
      region: 'Florence, Italy',
      specialty: 'Chemical Oxidation & Architectural Hardware',
      description: 'Artisans who cast solid architectural bronze for custom entrance door handles, shadow reveals, and bespoke sconces with organic hand-rubbed wax patinas.',
    },
    {
      title: 'Flemish Millwork Studio',
      region: 'Ghent, Belgium',
      specialty: 'Ammonia Fumed Smoked Oak & Acoustic Fluting',
      description: 'Master timber joiners fabricating precision CNC fluted wall panelling, hidden pivot doors, and climate-stable hardwood wardrobe dressing chambers.',
    },
    {
      title: 'Nairobi Master Craftsmen',
      region: 'Nairobi, Kenya',
      specialty: 'Indigenous Hardwood Sculpting & Volcanic Basalt Masonry',
      description: 'Skilled Kenyan stonemasons and joiners who dress local Rift Valley basalt, hand-plane teak timbers, and erect the physical structural mass on site.',
    },
  ];

  return (
    <div className="w-full pt-28 pb-32 bg-[#08080a] min-h-screen text-[#eae7e1]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-[#9e9b94]">
          <Link to="/" className="hover:text-white transition-colors">
            Atelier
          </Link>
          <span>/</span>
          <span className="text-[#c5a880]">The Atelier & Philosophy</span>
        </div>

        {/* Page Hero Header */}
        <div className="border-b border-white/10 pb-12 mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2 h-2 bg-[#c5a880]" />
            <span className="text-xs font-sans tracking-[0.35em] uppercase text-[#c5a880] font-medium">
              Architecture of Monolithic Dignity
            </span>
          </div>
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#f4f2ee] font-normal leading-[1.05]"
            style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
          >
            The Atelier, Practice & Ethos
          </h1>
          <p className="mt-5 text-sm sm:text-base text-[#9e9b94] font-light max-w-3xl leading-relaxed">
            Founded by Dennis Ochieng Bezalel, our atelier is a rigorous architectural laboratory based in Nairobi, dedicated to creating monumental residences, private estates, and sanctuaries that outlast trends and endure for generations.
          </p>
        </div>

        {/* Dennis Desk Feature & Architectural Letter */}
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#0d0d10] border border-white/10 p-8 sm:p-12 lg:p-16">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-4/5 overflow-hidden border border-white/15 bg-black">
              <img
                src={dennisDeskPhoto}
                alt="Dennis Bezalel at drafting desk"
                className="w-full h-full object-cover object-center grayscale contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#c5a880] block mb-1">
                  Atelier Drafting Table
                </span>
                <p className="text-xs font-serif text-white italic">
                  Dennis Ochieng sketching the inaugural axonometric for a Karen private estate.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#c5a880] font-medium block mb-3">
                Letter from the Principal
              </span>
              <h2
                className="text-2xl sm:text-4xl font-serif text-white mb-6 leading-snug"
                style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
              >
                "Architecture must feel like it was unearthed from the bedrock, not assembled from a factory catalog."
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-[#9e9b94] font-light leading-relaxed">
                <p>
                  When you step into a space designed by Dennis Bezalel, the first sensation is not visual—it is physical. It is the immediate quietude of massive masonry walls, the soothing thermal coolness of honed marble underfoot, and the monumental scale that makes the outside world fade away.
                </p>
                <p>
                  We do not follow real estate trends. A trend by definition becomes dated within ten years. Instead, we study the eternal proportions of classical architecture, the restraint of modernism, and the raw earth of the East African landscape to construct timeless sanctuaries.
                </p>
                <p>
                  Every commission is limited to a single point of responsibility. When you entrust us with your residence, you work directly with me—from the initial graphite sketch to the final handover.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-base font-serif text-white block">Dennis Ochieng (Dennis Bezalel)</span>
                <span className="text-xs text-[#c5a880] tracking-widest uppercase font-sans">
                  Principal Architect & Creative Director
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-[#9e9b94] block">Nairobi Atelier</span>
                <span className="text-xs text-white/50">Founded 2020 · Maseno Pedigree</span>
              </div>
            </div>
          </div>
        </div>

        {/* The 5 Inviolable Principles - Interactive Module */}
        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-sans tracking-[0.35em] uppercase text-[#c5a880] block mb-2 font-medium">
              Core Design Tenets
            </span>
            <h2
              className="text-3xl sm:text-5xl font-serif text-white leading-tight"
              style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
            >
              The 5 Golden Principles
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#9e9b94] font-light">
              Click through our inviolable design laws that guide every line drawn in our studio.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Principle Selector Tabs */}
            <div className="lg:col-span-4 flex flex-col space-y-2">
              {PRINCIPLES.map((principle, index) => (
                <button
                  key={principle.num}
                  onClick={() => setActivePrinciple(index)}
                  className={`text-left p-5 border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    activePrinciple === index
                      ? 'bg-[#121217] border-[#c5a880] text-white'
                      : 'bg-[#0a0a0d] border-white/10 text-[#9e9b94] hover:border-white/25 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xs font-mono tracking-widest ${
                        activePrinciple === index ? 'text-[#c5a880]' : 'text-[#6e6b64]'
                      }`}
                    >
                      {principle.num}
                    </span>
                    <span className="text-sm font-serif tracking-wide">{principle.title}</span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      activePrinciple === index ? 'text-[#c5a880] translate-x-1' : 'text-white/20'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Principle Expanded View */}
            <div className="lg:col-span-8 bg-[#0e0e12] border border-[#c5a880]/30 p-8 sm:p-12 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <span className="text-xs font-mono tracking-widest uppercase text-[#c5a880]">
                  Principle {PRINCIPLES[activePrinciple].num} of 05
                </span>
                <span className="text-xs text-[#9e9b94] font-sans uppercase tracking-wider">
                  {PRINCIPLES[activePrinciple].tagline}
                </span>
              </div>

              <h3
                className="text-2xl sm:text-3xl font-serif text-white mb-4"
                style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
              >
                {PRINCIPLES[activePrinciple].title}
              </h3>

              <p className="text-xs sm:text-sm text-[#9e9b94] font-light leading-relaxed mb-6">
                {PRINCIPLES[activePrinciple].description}
              </p>

              <blockquote className="border-l-2 border-[#c5a880] pl-6 my-6 italic font-serif text-sm sm:text-base text-[#e5e2db] bg-white/5 py-4 pr-4">
                "{PRINCIPLES[activePrinciple].quote}"
              </blockquote>

              <div className="mt-8 pt-6 border-t border-white/10">
                <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#c5a880] block mb-3 font-medium">
                  Atelier Implementation Standards
                </span>
                <ul className="space-y-2.5">
                  {PRINCIPLES[activePrinciple].details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3 text-xs text-[#c8c5be]">
                      <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* The 5-Phase Construction Protocol */}
        <div className="mb-28 bg-[#0b0b0e] border border-white/10 p-8 sm:p-14">
          <div className="border-b border-white/10 pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-sans tracking-[0.35em] uppercase text-[#c5a880] block mb-2 font-medium">
                Methodology & Execution
              </span>
              <h2
                className="text-3xl sm:text-4xl font-serif text-white"
                style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
              >
                From Geological Bedrock to Sanctuary
              </h2>
            </div>
            <p className="text-xs text-[#9e9b94] max-w-md font-light">
              Our 5-phase delivery framework ensures that creative inspiration translates into immaculate structural reality without compromise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            {PHASES.map((ph, idx) => (
              <button
                key={ph.step}
                onClick={() => setActivePhase(idx)}
                className={`text-left p-4 border transition-all cursor-pointer ${
                  activePhase === idx
                    ? 'bg-[#15151c] border-[#c5a880] text-white shadow-lg'
                    : 'bg-black/30 border-white/10 text-[#9e9b94] hover:border-white/20 hover:text-white'
                }`}
              >
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#c5a880] block mb-1">
                  {ph.step}
                </span>
                <span className="text-xs font-serif text-white block truncate mb-1">{ph.title}</span>
                <span className="text-[10px] text-[#7e7b74] block">{ph.duration}</span>
              </button>
            ))}
          </div>

          {/* Active Phase Details Card */}
          <div className="p-8 bg-[#101015] border border-white/15">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4 mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#c5a880]">
                  {PHASES[activePhase].step} Execution
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-white mt-1">
                  {PHASES[activePhase].title}
                </h3>
              </div>
              <span className="text-xs font-sans tracking-widest uppercase text-[#c5a880] border border-[#c5a880]/30 px-3 py-1 self-start sm:self-auto">
                Duration: {PHASES[activePhase].duration}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#9e9b94] font-light leading-relaxed mb-6">
              {PHASES[activePhase].summary}
            </p>

            <div>
              <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#c5a880] block mb-3 font-medium">
                Atelier Deliverables & Client Milestones
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PHASES[activePhase].outputs.map((out, oIdx) => (
                  <div key={oIdx} className="flex items-center gap-2.5 p-3 bg-black/40 border border-white/5 text-xs text-[#eae7e1]">
                    <div className="w-1.5 h-1.5 bg-[#c5a880]" />
                    <span>{out}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Master Collaborating Guilds */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-sans tracking-[0.35em] uppercase text-[#c5a880] block mb-2 font-medium">
              Global Craftsmanship Alliance
            </span>
            <h2
              className="text-3xl sm:text-4xl font-serif text-white"
              style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
            >
              Collaborating Master Guilds
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#9e9b94] font-light">
              We collaborate with generational European and African artisan guilds whose standards match our uncompromising vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {GUILDS.map((guild, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#0d0d10] border border-white/10 hover:border-[#c5a880]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#9e9b94] mb-3">
                    <span className="font-mono tracking-widest text-[#c5a880]">0{idx + 1}</span>
                    <span className="tracking-widest uppercase font-sans">{guild.region}</span>
                  </div>
                  <h3 className="text-xl font-serif text-white mb-2">{guild.title}</h3>
                  <span className="text-xs text-[#c5a880] block mb-4 font-sans tracking-wide">
                    {guild.specialty}
                  </span>
                  <p className="text-xs text-[#9e9b94] font-light leading-relaxed">
                    {guild.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Step Portals */}
        <div className="p-10 sm:p-16 border border-white/15 bg-gradient-to-r from-[#101014] to-[#0c0c0e] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#c5a880] block mb-2">
              Next Portals
            </span>
            <h3
              className="text-2xl sm:text-3xl font-serif text-white"
              style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
            >
              Explore Materiality or Begin a Private Dialogue
            </h3>
            <p className="text-xs text-[#9e9b94] max-w-md mt-2 leading-relaxed">
              Examine our rare quarry archives, or initiate a direct conversation with Dennis Bezalel for your private commission.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <Link
              to="/materiality"
              className="w-full sm:w-auto text-center px-6 py-3.5 border border-white/20 hover:border-[#c5a880] text-xs uppercase tracking-widest text-white hover:text-[#c5a880] transition-colors cursor-pointer"
            >
              Materiality Archive
            </Link>
            <Link
              to="/conversation"
              className="w-full sm:w-auto text-center px-8 py-3.5 bg-[#c5a880] text-black text-xs uppercase tracking-widest font-medium hover:bg-[#dfc7a5] transition-colors shadow-xl cursor-pointer"
            >
              A Conversation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
