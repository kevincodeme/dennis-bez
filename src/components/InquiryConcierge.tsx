import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, MapPin, Download, ArrowUpRight } from 'lucide-react';

interface InquiryConciergeProps {
  initialProjectTitle?: string;
  isModal?: boolean;
  onClose?: () => void;
}

export const InquiryConcierge: React.FC<InquiryConciergeProps> = ({
  initialProjectTitle = '',
  isModal = false,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    typology: initialProjectTitle ? 'Custom Project' : 'Private Residential Estate',
    location: 'Nairobi, Kenya',
    scope: '10,000 to 20,000 SQ. FT.',
    timeline: 'Immediate Planning (1 to 3 Months)',
    message: initialProjectTitle ? `Inquiring about commissioning a bespoke residence inspired by ${initialProjectTitle}.` : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const whatsappMessage = [
      `*🏛️ INQUIRY FOR DENNIS OCHIENG ATELIER*`,
      ``,
      `*Client:* ${formData.name}`,
      `*Email:* ${formData.email}`,
      `*Phone:* ${formData.phone}`,
      `*Typology:* ${formData.typology}`,
      `*Location:* ${formData.location}`,
      `*Scope:* ${formData.scope}`,
      `*Timeline:* ${formData.timeline}`,
      ``,
      `*Message:*`,
      formData.message || 'I would like to inquire about commissioning a private residence.',
    ].join('\n');

    const whatsappUrl = `https://wa.me/254715998587?text=${encodeURIComponent(whatsappMessage)}`;

    try {
      const link = document.createElement('a');
      link.href = whatsappUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      window.location.href = whatsappUrl;
    }

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 400);
  };

  const content = (
    <div className="w-full">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#c5a880] font-medium block mb-3">
          Private Commission & Consultation
        </span>
        <h2
          className="text-3xl sm:text-5xl font-serif text-[#f4f2ee] font-normal leading-tight mb-4"
          style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
        >
          Initiate an Atelier Dialogue
        </h2>
        <p className="text-xs sm:text-sm text-[#9e9b94] font-sans font-light leading-relaxed">
          Dennis Bezalel accepts a strictly limited number of architectural commissions annually to ensure uncompromising personal oversight from master concept to physical completion.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
        {/* Left Column: Direct Atelier Concierge Info */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-[#121216] border border-white/10 p-8 sm:p-10">
          <div>
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#c5a880] font-sans font-medium block mb-6">
              Executive Concierge Channels
            </span>

            <div className="space-y-6 text-xs sm:text-sm text-[#eae7e1]">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#c5a880] shrink-0 mt-0.5" />
                <div>
                  <span className="font-serif text-base text-white block">Atelier Nairobi</span>
                  <span className="text-[#9e9b94] text-xs">Karen / Westlands, Nairobi, Kenya</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#c5a880] shrink-0 mt-0.5" />
                <div>
                  <span className="font-serif text-base text-white block">Atelier Dubai</span>
                  <span className="text-[#9e9b94] text-xs">Downtown / DIFC, Dubai, UAE</span>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-white/10 pt-4">
                <Mail className="w-5 h-5 text-[#c5a880] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#9e9b94] text-[11px] uppercase tracking-wider block">Direct Studio Email</span>
                  <a href="mailto:theageco@gmail.com" className="text-white hover:text-[#c5a880] transition-colors">
                    theageco@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#c5a880] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#9e9b94] text-[11px] uppercase tracking-wider block">Private WhatsApp & Direct</span>
                  <a href="tel:+254715998587" className="text-white hover:text-[#c5a880] transition-colors">
                    +254 715 99 85 87
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 mt-8">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#9e9b94] block mb-2 font-mono">
              CONFIDENTIALITY PROTOCOL
            </span>
            <p className="text-xs text-[#9e9b94] leading-relaxed">
              All architectural disclosures, site cadastrals, and client identities are safeguarded under strict non disclosure agreements prior to concept exploration.
            </p>
          </div>
        </div>

        {/* Right Column: Interactive Consultation Intake Form */}
        <div className="lg:col-span-7 bg-[#141419] border border-white/10 p-8 sm:p-10">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-12 space-y-4 animate-in fade-in duration-300">
              <CheckCircle2 className="w-12 h-12 text-[#c5a880]" />
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                Commission Dossier Dispatched
              </h3>
              <p className="text-xs sm:text-sm text-[#c8c5be] font-sans font-light max-w-md leading-relaxed">
                Thank you, {formData.name || 'Esteemed Patron'}. Dennis Bezalel's executive desk will review your spatial criteria and coordinate an initial discrete architectural briefing within 24 business hours.
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`https://wa.me/254715998587?text=Hello%20Dennis%20Bezalel%20Atelier,%20I%20have%20submitted%20a%20private%20commission%20inquiry.`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-[#c5a880] text-black text-xs uppercase tracking-widest font-medium hover:bg-[#dfc7a5] transition-colors"
                >
                  Expedite via Private WhatsApp
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    if (onClose) onClose();
                  }}
                  className="px-6 py-3 border border-white/20 text-white text-xs uppercase tracking-widest hover:border-white transition-colors cursor-pointer"
                >
                  {isModal ? 'Close Window' : 'Submit Another Inquiry'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#9e9b94] mb-2">
                    Client Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lord / Ambassador / Dr. / Ms."
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0b0b0d] border border-white/15 px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#c5a880] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#9e9b94] mb-2">
                    Direct Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="client@estate.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0b0b0d] border border-white/15 px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#c5a880] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#9e9b94] mb-2">
                    Telephone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+254 / +971 / +1 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#0b0b0d] border border-white/15 px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#c5a880] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#9e9b94] mb-2">
                    Project Typology
                  </label>
                  <select
                    value={formData.typology}
                    onChange={(e) => setFormData({ ...formData, typology: e.target.value })}
                    className="w-full bg-[#0b0b0d] border border-white/15 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#c5a880] transition-colors"
                  >
                    <option value="Private Residential Estate">Grand Residential Estate</option>
                    <option value="Penthouse Residence">Crown Sky Penthouse</option>
                    <option value="Interior Architecture & Bespoke Millwork">Interior Architecture & Millwork</option>
                    <option value="Luxury Hospitality & VIP Aviation">Luxury Hospitality & Private Aviation</option>
                    <option value="Architectural Cinematography & Advisory">Architectural Cinematography & Advisory</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#9e9b94] mb-2">
                    Project Location / Territory
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Nairobi, Dubai, Mombasa, London"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-[#0b0b0d] border border-white/15 px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#c5a880] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#9e9b94] mb-2">
                    Estimated Gross Area
                  </label>
                  <select
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    className="w-full bg-[#0b0b0d] border border-white/15 px-4 py-3 text-xs text-white focus:outline-none focus:border-[#c5a880] transition-colors"
                  >
                    <option value="5,000 to 10,000 SQ. FT.">5,000 to 10,000 SQ. FT.</option>
                    <option value="10,000 to 20,000 SQ. FT.">10,000 to 20,000 SQ. FT.</option>
                    <option value="20,000+ SQ. FT. (Monumental Estate)">20,000+ SQ. FT. (Monumental Estate)</option>
                    <option value="Boutique Commercial / Aviation">Boutique Commercial / Aviation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#9e9b94] mb-2">
                  Spatial Vision & Site Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your site topography, architectural aspirations, or specific requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#0b0b0d] border border-white/15 px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#c5a880] transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <span className="text-[11px] text-[#9e9b94]">
                  Response dispatched strictly within 24 hours.
                </span>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#c5a880] hover:bg-[#dfc7a5] text-black text-xs font-sans font-medium tracking-[0.2em] uppercase transition-colors cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Registering Brief...</span>
                  ) : (
                    <>
                      <span>Transmit Private Inquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300 overflow-y-auto">
        <div className="relative w-full max-w-5xl my-auto bg-[#0b0b0d] border border-white/15 p-6 sm:p-10 text-[#eae7e1] max-h-[95vh] overflow-y-auto">
          {onClose && (
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-[#9e9b94] hover:text-white border border-white/10 hover:border-[#c5a880] cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>
          )}
          {content}
        </div>
      </div>
    );
  }

  return (
    <section id="commission" className="w-full py-28 sm:py-36 bg-[#0b0b0d] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {content}
      </div>
    </section>
  );
};
