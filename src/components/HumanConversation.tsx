import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, MessageSquare, Phone, Mail, MapPin, ArrowUpRight, RotateCcw } from 'lucide-react';

interface HumanConversationProps {
  initialProjectTitle?: string;
  isModal?: boolean;
  onClose?: () => void;
}

const WHATSAPP_NUMBER = '254715998587';
const DISPLAY_PHONE = '+254 715 99 85 87';

export const HumanConversation: React.FC<HumanConversationProps> = ({
  initialProjectTitle = '',
  isModal = false,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState(
    initialProjectTitle
      ? `Hello Dennis, I would love to discuss commissioning a residence inspired by ${initialProjectTitle}.`
      : ''
  );
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  // Close on ESC key when modal
  useEffect(() => {
    if (!isModal || !onClose) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModal, onClose]);

  // Construct structured WhatsApp message with all inquiry parameters
  const buildWhatsAppMessage = () => {
    const lines: string[] = [
      `*🏛️ ARCHITECTURAL COMMISSION INQUIRY*`,
      `*To: Dennis Ochieng (Principal Architect)*`,
      ``,
      `*Client:* ${name.trim() || 'Private Client'}`,
      `*Direct Contact:* ${contact.trim() || 'Provided in conversation'}`,
    ];

    if (location.trim()) {
      lines.push(`*Location / Land:* ${location.trim()}`);
    }

    if (initialProjectTitle) {
      lines.push(`*Inspiration Residence:* ${initialProjectTitle}`);
    }

    lines.push(``);
    lines.push(`*Architectural Vision / Note:*`);
    lines.push(
      message.trim() ||
        'Hello Dennis, I would like to schedule a private dialogue regarding an upcoming residential estate commission.'
    );

    return lines.join('\n');
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(buildWhatsAppMessage());
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const whatsappUrl = getWhatsAppUrl();

    // Trigger WhatsApp link directly to send the conversation
    try {
      const link = document.createElement('a');
      link.href = whatsappUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      // Fallback
      window.location.href = whatsappUrl;
    }

    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  const content = (
    <div className="w-full">
      <div className="text-center max-w-2xl mx-auto mb-14">
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
          I take on only three to four private estate commissions each calendar year to ensure my personal presence from the first pencil trace to final handover. When you submit your note, it connects directly to my private WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
        {/* Left Column: Direct Access & Studio Bases */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-[#111115] border border-white/10 p-8 sm:p-10">
          <div>
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#c5a880] font-sans font-medium block mb-6">
              Direct Contact Channels
            </span>

            <div className="space-y-6 text-sm">
              <div>
                <span className="text-xs text-[#9e9b94] block mb-1">
                  Private WhatsApp (Direct to Dennis)
                </span>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    'Hello Dennis, I would like to discuss a private architectural commission.'
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-[#c5a880] font-mono text-base transition-colors flex items-center gap-2 group"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
                  <span>{DISPLAY_PHONE}</span>
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
              Founder & Principal Architect
            </span>
          </div>
        </div>

        {/* Right Column: Discrete Personal Note Form -> Dispatches to WhatsApp */}
        <div className="lg:col-span-7 bg-[#141419] border border-white/10 p-8 sm:p-10">
          {submitted ? (
            <div className="py-8 text-center space-y-6">
              <CheckCircle2 className="w-14 h-14 text-[#25D366] mx-auto animate-bounce" />
              <div>
                <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#c5a880] block mb-1">
                  Dispatched to WhatsApp
                </span>
                <h3
                  className="font-serif text-3xl text-white font-normal"
                  style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
                >
                  Conversation Sent to Dennis
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#9e9b94] font-sans max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white font-medium">{name || 'Client'}</strong>. Your inquiry and architectural vision have been routed directly to Dennis Ochieng’s WhatsApp (<span className="text-[#25D366] font-mono">{DISPLAY_PHONE}</span>).
              </p>

              {/* Message Summary Preview */}
              <div className="bg-[#0b0b0d] border border-white/10 p-4 text-left max-w-md mx-auto text-xs space-y-2">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-[#9e9b94] uppercase tracking-wider text-[10px]">Recipient</span>
                  <span className="text-[#25D366] font-mono font-medium">WhatsApp: {DISPLAY_PHONE}</span>
                </div>
                {location && (
                  <div className="flex items-center justify-between text-[#c8c5be]">
                    <span className="text-[#9e9b94]">Location:</span>
                    <span>{location}</span>
                  </div>
                )}
                {contact && (
                  <div className="flex items-center justify-between text-[#c8c5be]">
                    <span className="text-[#9e9b94]">Contact:</span>
                    <span>{contact}</span>
                  </div>
                )}
                <div className="pt-2 text-[#9e9b94] italic border-t border-white/5 line-clamp-3">
                  "{message}"
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-3">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-black text-xs uppercase tracking-widest font-medium transition-colors inline-flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open WhatsApp Directly</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-3.5 border border-white/20 hover:border-[#c5a880] text-xs text-[#c8c5be] hover:text-white uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Send Another Note</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#c5a880] font-medium flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Direct WhatsApp Intake</span>
                </span>
                <span className="text-[11px] font-mono text-[#9e9b94]">
                  {DISPLAY_PHONE}
                </span>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#9e9b94] mb-2 font-sans">
                  Your Full Name <span className="text-[#c5a880]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Vance, Marcus & Elena..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#0b0b0d] border border-white/15 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#c5a880] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#9e9b94] mb-2 font-sans">
                    Email or Your WhatsApp <span className="text-[#c5a880]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="+254 7... or client@domain.com"
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
                    placeholder="e.g. Karen, Runda, Muthaiga, Dubai Palm..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-[#0b0b0d] border border-white/15 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#c5a880] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#9e9b94] mb-2 font-sans">
                  Tell Dennis What You Envision <span className="text-[#c5a880]">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Share a few thoughts about the land, acreage, spatial aspirations, or architectural aesthetics you desire..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#0b0b0d] border border-white/15 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#c5a880] transition-colors resize-none leading-relaxed"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <span className="text-xs text-[#9e9b94] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full inline-block animate-pulse" />
                  <span>Direct link to WhatsApp ({DISPLAY_PHONE})</span>
                </span>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#c5a880] hover:bg-[#dfc7a5] text-black text-xs font-sans font-medium uppercase tracking-[0.2em] transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-lg"
                >
                  {sending ? (
                    <span>Opening WhatsApp...</span>
                  ) : (
                    <>
                      <MessageSquare className="w-4 h-4 text-black" />
                      <span>Send to WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
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
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget && onClose) onClose();
        }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300 overflow-y-auto"
      >
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
    <section id="conversation" className="w-full py-24 sm:py-32 bg-[#08080a] relative border-t border-white/10 scroll-mt-12">
      {/* Invisible anchor for backward-compatibility with #commission links */}
      <div id="commission" className="sr-only" />
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {content}
      </div>
    </section>
  );
};
