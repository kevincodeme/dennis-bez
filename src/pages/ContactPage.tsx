import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { HumanConversation } from '../components/HumanConversation';
import { Phone, Mail, MapPin, Compass } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialProjectTitle = searchParams.get('project') || '';

  return (
    <div className="w-full pt-28 pb-32 bg-[#08080a] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-12">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-[#9e9b94]">
          <Link to="/" className="hover:text-white transition-colors">
            Atelier
          </Link>
          <span>/</span>
          <span className="text-[#c5a880]">Private Commission & Dialogue</span>
        </div>

        {/* Header */}
        <div className="border-b border-white/10 pb-12">
          <span className="text-xs font-sans tracking-[0.35em] uppercase text-[#c5a880] font-medium block mb-3">
            Private Atelier Intake
          </span>
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#f4f2ee] font-normal leading-[1.05]"
            style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
          >
            Initiate a Conversation
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#9e9b94] font-light max-w-2xl leading-relaxed">
            Dennis Bezalel accepts three to four grand private estate commissions each calendar year. All conversations are handled under strict confidentiality with direct principal access.
          </p>
        </div>
      </div>

      {/* Direct Conversation Form */}
      <HumanConversation initialProjectTitle={initialProjectTitle} />

      {/* Atelier Physical Coordinates */}
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
              Focusing on monumental private estates across Karen, Muthaiga, Westlands, and bespoke highland sanctuaries.
            </p>
            <div className="text-xs text-[#eae7e1] space-y-1 font-mono">
              <p>Coordinates: 01°17′S, 36°49′E</p>
              <p>Direct Phone: +254 715 99 85 87</p>
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
