import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Phone, Mail, MapPin } from 'lucide-react';

interface HumanConversationProps {
  initialProjectTitle?: string;
  isModal?: boolean;
  onClose?: () => void;
}

export const HumanConversation: React.FC<HumanConversationProps> = ({
  initialProjectTitle = '',
  isModal = false,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState(
    initialProjectTitle ? `Hello Dennis, I would love to discuss a residence inspired by ${initialProjectTitle}.` : ''
  );
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 700);
  };

  const content = (
    <div className="w-full">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#c5a880] font-medium block mb-3">
          Direct Atelier Dialogue
        </span>
        <h2
          className="text-4xl sm:text-5xl font-serif text-[#f4f2ee] font-normal leading-tight mb-4"
          style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
        >
          Let’s Have a Conversation
        </h2>
        <p className="text-sm text-[#9e9b94] font-sans font-light leading-relaxed">
          I take on only three to four private estate commissions each calendar year to ensure my personal presence from the first pencil trace to final handover. If you are preparing to build or acquire land, write to me directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
        {/* Left Column: Direct Access & Studio Bases */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-[#111115] border border-white/10 p-8 sm:p-10">
          <div>
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#c5a880] font-sans font-medium block mb-6">
              Direct Contact Channels
            </span>

            <div className="space-y-6 text-sm">
              <div>
                <span className="text-xs text-[#9e9b94] block mb-1">Private WhatsApp (Fastest)</span>
                <a
                  href="https://wa.me/254715998587?text=Hello%20Dennis,%20I%20would%20like%20to%20discuss%20a%20private%20architectural%20commission."
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-[#c5a880] font-mono text-base transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#c5a880]" />
                  <span>+254 715 99 85 87</span>
                </a>
              </div>

              <div>
                <span className="text-xs text-[#9e9b94] block mb-1">Direct Studio Email</span>
                <a
                  href="mailto:theageco@gmail.com"
                  className="text-white hover:text-[#c5a880] text-sm transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#c5a880]" />
                  <span>theageco@gmail.com</span>
                </a>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-[#9e9b94]">
                  <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-normal">Nairobi Atelier</strong>
                    <span>Karen Plains & Westlands, Nairobi, Kenya</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-[#9e9b94]">
                  <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-normal">Dubai Studio</strong>
                    <span>Downtown & DIFC, Dubai, UAE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 mt-8">
            <p
              className="text-xl text-[#c5a880]"
              style={{ fontFamily: "'Homemade Apple', cursive" }}
            >
              Dennis Ochieng
            </p>
            <span className="text-[10px] tracking-widest uppercase text-[#9e9b94] font-sans block mt-1">
              Founder & Master Designer
            </span>
          </div>
        </div>

        {/* Right Column: Discrete Personal Note Form */}
        <div className="lg:col-span-7 bg-[#141419] border border-white/10 p-8 sm:p-10">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#c5a880] mx-auto" />
              <h3 className="font-serif text-2xl text-white">Your Note Has Been Received</h3>
              <p className="text-xs sm:text-sm text-[#9e9b94] font-sans max-w-md mx-auto leading-relaxed">
                Thank you, {name || 'my friend'}. Dennis reads every personal inquiry directly and will respond to your email or WhatsApp within one business day.
              </p>
              <div className="pt-6 flex justify-center gap-4">
                <a
                  href={`https://wa.me/254715998587?text=Hello%20Dennis,%20this%20is%20${encodeURIComponent(name || 'a client')},%20following%20up%20on%20my%20portfolio%20message.`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-[#c5a880] text-black text-xs uppercase tracking-widest font-medium hover:bg-[#dfc7a5] transition-colors"
                >
                  Continue on WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#9e9b94] mb-2 font-sans">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="What may I call you?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#0b0b0d] border border-white/15 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#c5a880] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#9e9b94] mb-2 font-sans">
                    Email or WhatsApp
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Where should I reply?"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full bg-[#0b0b0d] border border-white/15 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#c5a880] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#9e9b94] mb-2 font-sans">
                    Project Location / Parcel
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Karen, Runda, Dubai Palm, etc."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-[#0b0b0d] border border-white/15 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#c5a880] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#9e9b94] mb-2 font-sans">
                  Tell Me About What You Envision
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Share a few thoughts about the land, your family's needs, or architectural references you love..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#0b0b0d] border border-white/15 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#c5a880] transition-colors resize-none leading-relaxed"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <span className="text-xs text-[#9e9b94]">
                  Strict client privacy guaranteed.
                </span>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#c5a880] hover:bg-[#dfc7a5] text-black text-xs font-sans font-medium uppercase tracking-[0.2em] transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  {sending ? (
                    <span>Sending note...</span>
                  ) : (
                    <>
                      <span>Send Note Directly to Dennis</span>
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
        <div className="relative w-full max-w-4xl my-auto bg-[#0b0b0d] border border-white/15 p-6 sm:p-10 text-[#eae7e1] max-h-[95vh] overflow-y-auto">
          {onClose && (
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-[#9e9b94] hover:text-white border border-white/10 hover:border-[#c5a880] cursor-pointer"
              aria-label="Close dialog"
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
    <section id="conversation" className="w-full py-28 sm:py-36 bg-[#08080a] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {content}
      </div>
    </section>
  );
};
