import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight, Compass, Volume2, VolumeX } from 'lucide-react';
import { ambientSound } from '../utils/audio';

interface NavbarProps {
  onOpenCommissionModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommissionModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const active = ambientSound.toggle();
    setSoundActive(active);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ${
          isScrolled
            ? 'bg-[#0b0b0d]/92 backdrop-blur-md border-white/10 py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-[#0b0b0d]/80 to-transparent border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="group flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880]"
          >
            <Logo size="sm" showText={true} />
          </a>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden lg:flex items-center gap-7 text-[12px] tracking-[0.22em] uppercase font-sans font-medium text-[#c8c5be]">
            <a
              href="#portfolio"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#c5a880]"
            >
              The Residences
            </a>
            <a
              href="#process"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#c5a880]"
            >
              The Process
            </a>
            <a
              href="#materiality"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#c5a880]"
            >
              Materiality
            </a>
            <a
              href="#instagram-feed"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 text-[#c5a880] hover:underline underline-offset-8 decoration-[#c5a880]"
            >
              @dennisbezalel
            </a>
            <a
              href="#monograph"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#c5a880]"
            >
              The Architect
            </a>
          </nav>

          {/* Zone 3: 1 primary action + subtle sound toggle */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Ambient Soundscape Toggle */}
            <button
              onClick={toggleSound}
              className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-[10px] uppercase tracking-widest font-sans border transition-colors cursor-pointer ${
                soundActive
                  ? 'border-[#c5a880] text-[#c5a880] bg-[#c5a880]/10'
                  : 'border-white/15 text-[#9e9b94] hover:text-white hover:border-white/30'
              }`}
              title="Toggle Ambient Audio Room Tone"
            >
              {soundActive ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>Ambience: On</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-[#9e9b94]" />
                  <span>Ambience: Off</span>
                </>
              )}
            </button>

            <button
              onClick={onOpenCommissionModal}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-sans font-medium tracking-[0.18em] uppercase text-black bg-[#c5a880] hover:bg-[#dfc7a5] transition-colors rounded-none whitespace-nowrap shrink-0 cursor-pointer shadow-lg"
            >
              <span>A Conversation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile / Full Menu trigger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-[#c8c5be] hover:text-white transition-colors lg:hidden focus-visible:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Architectural Menu Overlay (Ferris Rafauli style) */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#09090b]/98 backdrop-blur-xl flex flex-col justify-between p-8 sm:p-14 text-[#eae7e1] animate-in fade-in duration-300">
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <Logo size="md" showText={true} />
            <button
              onClick={closeMenu}
              className="p-3 text-[#9e9b94] hover:text-white transition-colors border border-white/10 hover:border-[#c5a880]"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-auto py-8">
            <div className="flex flex-col gap-6">
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#c5a880] font-sans font-medium">
                Architectural Index
              </span>
              <ul className="flex flex-col gap-4 font-serif text-2xl sm:text-3xl">
                <li>
                  <a
                    href="#portfolio"
                    onClick={closeMenu}
                    className="hover:text-[#c5a880] transition-colors inline-block"
                  >
                    01. Selected Residences & Estates
                  </a>
                </li>
                <li>
                  <a
                    href="#philosophy"
                    onClick={closeMenu}
                    className="hover:text-[#c5a880] transition-colors inline-block"
                  >
                    02. A Note from Dennis Ochieng
                  </a>
                </li>
                <li>
                  <a
                    href="#process"
                    onClick={closeMenu}
                    className="hover:text-[#c5a880] transition-colors inline-block"
                  >
                    03. How We Build: From Dirt to Sanctuary
                  </a>
                </li>
                <li>
                  <a
                    href="#materiality"
                    onClick={closeMenu}
                    className="hover:text-[#c5a880] transition-colors inline-block"
                  >
                    04. The Materiality Archive
                  </a>
                </li>
                <li>
                  <a
                    href="#instagram-feed"
                    onClick={closeMenu}
                    className="hover:text-[#c5a880] transition-colors inline-block text-[#c5a880]"
                  >
                    05. Field Diary (@dennisbezalel)
                  </a>
                </li>
                <li>
                  <a
                    href="#cinematography"
                    onClick={closeMenu}
                    className="hover:text-[#c5a880] transition-colors inline-block"
                  >
                    06. Architectural Motion & Film
                  </a>
                </li>
                <li>
                  <a
                    href="#monograph"
                    onClick={closeMenu}
                    className="hover:text-[#c5a880] transition-colors inline-block"
                  >
                    07. Dennis Bezalel Monograph
                  </a>
                </li>
                <li>
                  <a
                    href="#conversation"
                    onClick={closeMenu}
                    className="hover:text-[#c5a880] transition-colors inline-block text-white font-medium"
                  >
                    08. Have a Conversation
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-12 gap-8">
              <div>
                <span className="text-[11px] tracking-[0.3em] uppercase text-[#c5a880] font-sans font-medium block mb-3">
                  Atelier Coordinates
                </span>
                <p className="text-sm text-[#9e9b94] leading-relaxed mb-4">
                  Nairobi Atelier: 01°17′S, 36°49′E<br />
                  Dubai Studio: 25°12′N, 55°16′E<br />
                  Specializing in grand private residences, luxury hospitality, and ultra prime spatial direction.
                </p>
                <div className="flex flex-col gap-1 text-sm text-[#eae7e1]">
                  <a href="mailto:theageco@gmail.com" className="hover:text-[#c5a880] transition-colors">
                    theageco@gmail.com
                  </a>
                  <a href="tel:+254715998587" className="hover:text-[#c5a880] transition-colors">
                    +254 715 99 85 87
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    closeMenu();
                    onOpenCommissionModal();
                  }}
                  className="w-full py-3 px-6 bg-[#c5a880] text-black text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#dfc7a5] transition-colors"
                >
                  Initiate Private Commission
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9e9b94] gap-4">
            <div className="flex items-center gap-3">
              <Compass className="w-4 h-4 text-[#c5a880]" />
              <span>DENNIS BEZALEL ARCHITECTURAL ATELIER</span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/dennisbezalel/?__pwa=1"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#c5a880] transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://youtube.com/@dennisbezalel?si=sjAgKEOQGBJD4tRj"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#c5a880] transition-colors"
              >
                YouTube
              </a>
              <a
                href="https://drive.google.com/drive/folders/1-anMEFCtBHrXsBvKVDvZoke1VFyhOWmc?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#c5a880] transition-colors"
              >
                Drive Archive
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
