import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { HumanConversation } from '../components/HumanConversation';
import { Phone, Mail, MapPin, Compass, ShieldCheck, Clock, Award, ArrowUpRight } from 'lucide-react';

export const ConversationPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialProjectTitle = searchParams.get('project') || '';

  useEffect(() => {
    document.title = 'A Conversation | Dennis Bezalel Atelier';
  }, []);

  return (
    <div className="w-full pt-28 pb-32 bg-[#08080a] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-12">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-[#9e9b94]">
          <Link to="/" className="hover:text-white transition-colors">
            Atelier
          </Link>
          <span>/</span>
          <span className="text-[#c5a880]">A Conversation</span>
        </div>

        {/* Hero Header */}
        <div className="border-b border-white/10 pb-12">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-xs font-sans tracking-[0.35em] uppercase text-[#c5a880] font-medium">
              Private Architectural Dialogue
            </span>
            <span className="text-white/20">·</span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-sans tracking-wider uppercase text-[#c8c5be] bg-white/5 border border-white/10 px-2.5 py-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Direct WhatsApp Access
            </span>
          </div>

          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#f4f2ee] font-normal leading-[1.05]"
            style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
          >
            A Conversation with Dennis Bezalel
          </h1>

          <p className="mt-4 text-sm sm:text-base text-[#9e9b94] font-light max-w-3xl leading-relaxed">
            Dennis Bezalel accepts three to four grand private estate commissions each calendar year. Every project is conceived through deep personal dialogue, authentic architectural materiality, and direct principal oversight. All conversations are handled under strict confidentiality with direct access to Dennis Ochieng via WhatsApp.
          </p>

          {/* Direct WhatsApp Quick Launch Strip */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/254715998587?text=Hello%20Dennis,%20I%20would%20like%20to%20start%20a%20conversation%20about%20a%20private%20architectural%20commission."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-black text-xs font-sans font-medium uppercase tracking-[0.18em] transition-all shadow-xl hover:scale-[1.02] cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-black text-black" />
              <span>Start WhatsApp Conversation (+254 715 99 85 87)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="mailto:theageco@gmail.com?subject=Private%20Architectural%20Inquiry%20-%20Dennis%20Bezalel"
              className="inline-flex items-center gap-2 px-5 py-3.5 border border-white/15 hover:border-[#c5a880] text-xs font-sans font-medium uppercase tracking-[0.18em] text-[#eae7e1] hover:text-[#c5a880] transition-colors cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Direct Studio Email</span>
            </a>
          </div>

          {/* Three Pillars of Engagement */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/5">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#c5a880] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs uppercase tracking-wider text-white font-medium block">
                  Strict Confidentiality
                </span>
                <span className="text-xs text-[#9e9b94] font-light mt-1 block">
                  Private non-disclosure agreements honored for family offices, estate parcels, and confidential sites.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#c5a880] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs uppercase tracking-wider text-white font-medium block">
                  Principal Involvement
                </span>
                <span className="text-xs text-[#9e9b94] font-light mt-1 block">
                  Direct personal collaboration with Dennis Ochieng from initial sketch to final stone selection.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-[#c5a880] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs uppercase tracking-wider text-white font-medium block">
                  Limited Commissions
                </span>
                <span className="text-xs text-[#9e9b94] font-light mt-1 block">
                  Only 3–4 bespoke residential projects accepted per calendar year to preserve uncompromised perfection.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Direct Conversation Form (Sends Directly to WhatsApp) */}
      <HumanConversation initialProjectTitle={initialProjectTitle} />

      {/* Atelier Physical Coordinates & Global Studios */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 border border-white/10 bg-[#0d0d10]">
          <div>
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#c5a880] block mb-2">
              East Africa Atelier
            </span>
            <h4
              className="text-2xl font-serif text-white mb-2"
              style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
            >
              Nairobi, Kenya
            </h4>
            <p className="text-xs text-[#9e9b94] leading-relaxed mb-4">
              Focusing on monumental private estates across Karen, Muthaiga, Tigoni, and bespoke highland sanctuaries.
            </p>
            <div className="text-xs text-[#eae7e1] space-y-1 font-mono">
              <p>Coordinates: 01°17′S, 36°49′E</p>
              <p>Direct WhatsApp: +254 715 99 85 87</p>
            </div>
          </div>

          <div>
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#c5a880] block mb-2">
              Gulf & Middle East Studio
            </span>
            <h4
              className="text-2xl font-serif text-white mb-2"
              style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
            >
              Dubai, United Arab Emirates
            </h4>
            <p className="text-xs text-[#9e9b94] leading-relaxed mb-4">
              Focusing on prime waterfront villas, sky penthouses, and bespoke private aviation VIP suites.
            </p>
            <div className="text-xs text-[#eae7e1] space-y-1 font-mono">
              <p>Coordinates: 25°12′N, 55°16′E</p>
              <p>Studio Email: theageco@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
