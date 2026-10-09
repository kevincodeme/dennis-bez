import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Compass, ShieldCheck, Clock, Award, ArrowUpRight, Send, CheckCircle2, Sparkles, MessageCircle } from 'lucide-react';

export const ConversationPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialProjectTitle = searchParams.get('project') || '';

  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    projectType: 'Private Estate Sanctuary',
    scaleSqFt: '8,000 - 15,000 sq ft',
    materialsPreference: 'Monolithic Italian Marble & Belgian Smoked Oak',
    timeline: 'Within 6 to 12 Months',
    message: initialProjectTitle
      ? `I am inquiring regarding the architectural concepts inspired by ${initialProjectTitle}.`
      : '',
    discretionRequired: true,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'A Conversation | Dennis Bezalel Architectural Atelier';
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleLaunchWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Dennis, I am contacting you regarding a private architectural commission.\n` +
      `Name: ${formState.fullName || 'Prospective Client'}\n` +
      `Project Type: ${formState.projectType}\n` +
      `Target Site: ${formState.location || 'Nairobi / International'}\n` +
      `Scale: ${formState.scaleSqFt}\n` +
      `Timeline: ${formState.timeline}\n` +
      `Notes: ${formState.message || 'I would like to arrange a private dialogue.'}`
    );
    window.open(`https://wa.me/254715998587?text=${text}`, '_blank');
  };

  return (
    <div className="w-full pt-28 pb-32 bg-[#08080a] min-h-screen text-[#eae7e1]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-[#9e9b94]">
          <Link to="/" className="hover:text-white transition-colors">
            Atelier
          </Link>
          <span>/</span>
          <span className="text-[#c5a880]">A Conversation</span>
        </div>

        {/* Page Header */}
        <div className="border-b border-white/10 pb-12 mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="w-2 h-2 bg-[#c5a880]" />
            <span className="text-xs font-sans tracking-[0.35em] uppercase text-[#c5a880] font-medium">
              Private Commission Consultation · Strict Discretion
            </span>
            <span className="text-white/20">·</span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-sans tracking-wider uppercase text-[#c8c5be] bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Direct Principal Line Open
            </span>
          </div>

          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#f4f2ee] font-normal leading-[1.05]"
            style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
          >
            A Conversation with Dennis Bezalel
          </h1>

          <p className="mt-5 text-sm sm:text-base text-[#9e9b94] font-light max-w-3xl leading-relaxed">
            Dennis Bezalel accepts strictly three to four grand private estate commissions each calendar year. Every project is conceived through direct personal dialogue, authentic architectural materiality, and unyielding principal stewardship.
          </p>

          {/* Quick WhatsApp Action Bar */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/254715998587?text=Hello%20Dennis,%20I%20would%20like%20to%20start%20a%20conversation%20about%20a%20private%20architectural%20commission."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 bg-[#25D366] hover:bg-[#20ba59] text-black text-xs font-sans font-medium uppercase tracking-[0.2em] transition-all shadow-xl hover:scale-[1.02] cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-black text-black" />
              <span>Direct WhatsApp Channel (+254 715 99 85 87)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="mailto:contact@dennisbezalel.com?subject=Private%20Architectural%20Commission%20Dossier"
              className="inline-flex items-center gap-3 px-6 py-4 border border-white/20 hover:border-[#c5a880] text-xs font-sans uppercase tracking-[0.2em] text-[#eae7e1] hover:text-[#c5a880] transition-all cursor-pointer bg-black/40"
            >
              <Mail className="w-4 h-4 text-[#c5a880]" />
              <span>Email Confidential Dossier</span>
            </a>
          </div>
        </div>

        {/* The 4 Inviolable Rules of Engagement */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 bg-[#0c0c0f] border border-white/10 space-y-2">
            <span className="text-[10px] font-mono text-[#c5a880] tracking-widest block uppercase">
              Rule 01
            </span>
            <h3 className="text-sm font-serif text-white">Direct Principal Dialogue</h3>
            <p className="text-xs text-[#9e9b94] font-light leading-relaxed">
              You speak directly with Dennis Ochieng. We do not use intermediary account executives or junior associates.
            </p>
          </div>

          <div className="p-6 bg-[#0c0c0f] border border-white/10 space-y-2">
            <span className="text-[10px] font-mono text-[#c5a880] tracking-widest block uppercase">
              Rule 02
            </span>
            <h3 className="text-sm font-serif text-white">Absolute Discretion</h3>
            <p className="text-xs text-[#9e9b94] font-light leading-relaxed">
              All discussions, drawings, and geographic coordinates are protected under mutual confidentiality covenants.
            </p>
          </div>

          <div className="p-6 bg-[#0c0c0f] border border-white/10 space-y-2">
            <span className="text-[10px] font-mono text-[#c5a880] tracking-widest block uppercase">
              Rule 03
            </span>
            <h3 className="text-sm font-serif text-white">Strict Capacity Cap</h3>
            <p className="text-xs text-[#9e9b94] font-light leading-relaxed">
              We accept only 3 to 4 commissions annually to ensure undivided artistic focus and daily site management.
            </p>
          </div>

          <div className="p-6 bg-[#0c0c0f] border border-white/10 space-y-2">
            <span className="text-[10px] font-mono text-[#c5a880] tracking-widest block uppercase">
              Rule 04
            </span>
            <h3 className="text-sm font-serif text-white">Turnkey Sovereignty</h3>
            <p className="text-xs text-[#9e9b94] font-light leading-relaxed">
              From raw topography and soil boreholes to bespoke bronze hardware and art curation at handover.
            </p>
          </div>
        </div>

        {/* Commission Dossier Form & Coordinates */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Left Form */}
          <div className="lg:col-span-8 bg-[#0d0d10] border border-[#c5a880]/30 p-8 sm:p-14 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-16 space-y-6">
                <div className="w-16 h-16 bg-[#c5a880]/20 border border-[#c5a880] rounded-full flex items-center justify-center mx-auto text-[#c5a880]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2
                  className="text-2xl sm:text-3xl font-serif text-white"
                  style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
                >
                  Commission Dossier Received
                </h2>
                <p className="text-xs sm:text-sm text-[#9e9b94] max-w-lg mx-auto font-light leading-relaxed">
                  Thank you, {formState.fullName || 'esteemed client'}. Dennis Bezalel personally reviews every submission. We will initiate contact via WhatsApp or private channel within 24 hours.
                </p>
                <div className="pt-4 flex justify-center gap-4">
                  <button
                    onClick={handleLaunchWhatsApp}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-black text-xs font-sans uppercase tracking-widest font-medium cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Follow Up via WhatsApp Now</span>
                  </button>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 border border-white/20 text-xs font-sans uppercase tracking-widest text-[#eae7e1] cursor-pointer"
                  >
                    Edit Submission
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#c5a880] font-medium block mb-2">
                    Commission Questionnaire
                  </span>
                  <h2
                    className="text-2xl sm:text-3xl font-serif text-white"
                    style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
                  >
                    Confidential Commission Dossier
                  </h2>
                  <p className="text-xs text-[#9e9b94] font-light mt-1">
                    Provide the initial parameters of your estate or architectural aspiration.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[11px] font-sans tracking-widest uppercase text-[#9e9b94] block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.fullName}
                      onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                      placeholder="e.g. Lord Harrington / Dr. Amina K."
                      className="w-full bg-[#070709] border border-white/15 focus:border-[#c5a880] px-4 py-3 text-xs text-white outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-sans tracking-widest uppercase text-[#9e9b94] block mb-2">
                      Direct WhatsApp / Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+254 7XX XXX XXX or International"
                      className="w-full bg-[#070709] border border-white/15 focus:border-[#c5a880] px-4 py-3 text-xs text-white outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[11px] font-sans tracking-widest uppercase text-[#9e9b94] block mb-2">
                      Confidential Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="principal@estate.com"
                      className="w-full bg-[#070709] border border-white/15 focus:border-[#c5a880] px-4 py-3 text-xs text-white outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-sans tracking-widest uppercase text-[#9e9b94] block mb-2">
                      Site Location / Land Geography *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.location}
                      onChange={(e) => setFormState({ ...formState, location: e.target.value })}
                      placeholder="e.g. Karen, Muthaiga, Diani Coast, Dubai"
                      className="w-full bg-[#070709] border border-white/15 focus:border-[#c5a880] px-4 py-3 text-xs text-white outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="text-[11px] font-sans tracking-widest uppercase text-[#9e9b94] block mb-2">
                      Commission Nature
                    </label>
                    <select
                      value={formState.projectType}
                      onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                      className="w-full bg-[#070709] border border-white/15 focus:border-[#c5a880] px-3 py-3 text-xs text-white outline-none"
                    >
                      <option>Private Estate Sanctuary</option>
                      <option>Penthouse Monolith Transformation</option>
                      <option>Coastal Retreat Pavilion</option>
                      <option>Luxury Multi-Unit Development</option>
                      <option>Architectural Film Commission</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-sans tracking-widest uppercase text-[#9e9b94] block mb-2">
                      Desired Scope & Scale
                    </label>
                    <select
                      value={formState.scaleSqFt}
                      onChange={(e) => setFormState({ ...formState, scaleSqFt: e.target.value })}
                      className="w-full bg-[#070709] border border-white/15 focus:border-[#c5a880] px-3 py-3 text-xs text-white outline-none"
                    >
                      <option>5,000 - 8,000 sq ft</option>
                      <option>8,000 - 15,000 sq ft</option>
                      <option>15,000+ sq ft Compound</option>
                      <option>Turnkey Apartment Interior</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-sans tracking-widest uppercase text-[#9e9b94] block mb-2">
                      Anticipated Timeline
                    </label>
                    <select
                      value={formState.timeline}
                      onChange={(e) => setFormState({ ...formState, timeline: e.target.value })}
                      className="w-full bg-[#070709] border border-white/15 focus:border-[#c5a880] px-3 py-3 text-xs text-white outline-none"
                    >
                      <option>Immediate / Next 90 Days</option>
                      <option>Within 6 to 12 Months</option>
                      <option>Future Legacy Planning (2+ Years)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-sans tracking-widest uppercase text-[#9e9b94] block mb-2">
                    Architectural Vision & Spatial Ambitions
                  </label>
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your site, desired atmosphere, private family requirements, or specific materiality..."
                    className="w-full bg-[#070709] border border-white/15 focus:border-[#c5a880] px-4 py-3 text-xs text-white outline-none transition-colors"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="discretion"
                    checked={formState.discretionRequired}
                    onChange={(e) => setFormState({ ...formState, discretionRequired: e.target.checked })}
                    className="accent-[#c5a880] w-4 h-4"
                  />
                  <label htmlFor="discretion" className="text-xs text-[#9e9b94]">
                    Require strict Bilateral Non-Disclosure Agreement (NDA) prior to project file exchange
                  </label>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#c5a880] hover:bg-[#dfc7a5] text-black text-xs font-sans uppercase tracking-[0.2em] font-medium transition-all shadow-xl cursor-pointer"
                  >
                    <span>Transmit Commission Dossier</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={handleLaunchWhatsApp}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#25D366] hover:bg-[#20ba59] text-black text-xs font-sans uppercase tracking-[0.2em] font-medium transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp Direct</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Atelier Office Coordinates */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-8 bg-[#0b0b0e] border border-white/10 space-y-6">
              <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#c5a880] font-medium block">
                Atelier Coordinates
              </span>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white block font-medium">Nairobi Principal Studio</span>
                    <span className="text-[#9e9b94]">
                      Riverside Drive & Karen Atelier, Nairobi, Kenya
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white block font-medium">Principal Line (Direct WhatsApp)</span>
                    <span className="text-[#eae7e1] font-mono">+254 715 99 85 87</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white block font-medium">Confidential Inquiries</span>
                    <span className="text-[#9e9b94] font-mono">contact@dennisbezalel.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white block font-medium">Private Studio Consultations</span>
                    <span className="text-[#9e9b94]">
                      Monday – Saturday, by verified appointment only
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-[#0b0b0e] border border-white/10">
              <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#c5a880] font-medium block mb-3">
                Global Travel Protocol
              </span>
              <p className="text-xs text-[#9e9b94] font-light leading-relaxed">
                Dennis Bezalel travels internationally for initial on-site topography surveys across the East African coast, the Great Rift Valley, Dubai, and Southern Europe. Private aircraft landing coordinates and helicopter survey transfers can be accommodated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
