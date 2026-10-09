import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { ArrowUp, Instagram, Youtube, HardDrive } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#08080a] border-t border-white/10 pt-20 pb-12 text-[#9e9b94] font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Mark Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link to="/">
                <Logo size="md" showText={true} className="mb-6" />
              </Link>
              <p className="text-xs text-[#9e9b94] font-light max-w-sm leading-relaxed mb-6">
                Dennis Bezalel (Dennis Ochieng) Architectural Atelier. Master planning, monumental residences, penthouse sanctums, and high end spatial storytelling inspired by the uncompromising standards of Ferris Rafauli.
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <a
                href="https://www.instagram.com/dennisbezalel/?__pwa=1"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-white/80 hover:text-[#c5a880] transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@dennisbezalel</span>
              </a>
              <span className="text-white/20">·</span>
              <a
                href="https://youtube.com/@dennisbezalel?si=sjAgKEOQGBJD4tRj"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-white/80 hover:text-[#c5a880] transition-colors"
              >
                <Youtube className="w-4 h-4" />
                <span>YouTube</span>
              </a>
              <span className="text-white/20">·</span>
              <a
                href="https://drive.google.com/drive/folders/1-anMEFCtBHrXsBvKVDvZoke1VFyhOWmc?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-white/80 hover:text-[#c5a880] transition-colors"
              >
                <HardDrive className="w-4 h-4" />
                <span>Drive Archive</span>
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#c5a880] font-medium block mb-4">
              Atelier Pages
            </span>
            <ul className="space-y-3 text-xs">
              <li>
                <Link to="/residences" className="text-[#c8c5be] hover:text-white transition-colors">
                  The Residences & Estates
                </Link>
              </li>
              <li>
                <Link to="/atelier" className="text-[#c8c5be] hover:text-white transition-colors">
                  The Atelier & Philosophy
                </Link>
              </li>
              <li>
                <Link to="/materiality" className="text-[#c8c5be] hover:text-white transition-colors">
                  Materiality & Stone Archive
                </Link>
              </li>
              <li>
                <Link to="/film" className="text-[#c8c5be] hover:text-white transition-colors">
                  Architectural Cinematography
                </Link>
              </li>
              <li>
                <Link to="/architect" className="text-[#c8c5be] hover:text-white transition-colors">
                  The Architect (Monograph)
                </Link>
              </li>
              <li>
                <Link to="/field-diary" className="text-[#c5a880] hover:text-white transition-colors">
                  Field Diary (@dennisbezalel)
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#c8c5be] hover:text-[#c5a880] transition-colors font-medium">
                  Start a Conversation
                </Link>
              </li>
            </ul>
          </div>

          {/* Studios Column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#c5a880] font-medium block mb-4">
                Atelier Offices
              </span>
              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-white block font-medium">Nairobi Atelier</span>
                  <span className="text-[#9e9b94]">Karen & Westlands, Nairobi, Kenya</span>
                </div>
                <div>
                  <span className="text-white block font-medium">Dubai Studio</span>
                  <span className="text-[#9e9b94]">Downtown / DIFC, Dubai, UAE</span>
                </div>
                <div className="pt-2">
                  <a href="mailto:theageco@gmail.com" className="text-white hover:text-[#c5a880] block transition-colors">
                    theageco@gmail.com
                  </a>
                  <a href="tel:+254715998587" className="text-[#9e9b94] hover:text-white block transition-colors mt-0.5">
                    +254 715 99 85 87
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#c8c5be] hover:text-[#c5a880] transition-colors cursor-pointer"
              >
                <span>Return to Summit</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Hairline Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9e9b94]/70 gap-4">
          <p>© 2026 Dennis Bezalel Atelier. All rights reserved.</p>
          <div className="flex items-center gap-6 text-[11px] tracking-wider uppercase">
            <span>Maseno University Alumni</span>
            <span>·</span>
            <span>Haute Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
