import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenCommissionModal: () => void;
}

interface MenuItem {
  num: string;
  label: string;
  href: string;
  isAction?: boolean;
}

const MENU_ITEMS: MenuItem[] = [
  { num: '01', label: 'Residences & Estates', href: '#portfolio' },
  { num: '02', label: 'The Atelier Note', href: '#philosophy' },
  { num: '03', label: 'The Building Process', href: '#process' },
  { num: '04', label: 'Materiality Archive', href: '#materiality' },
  { num: '05', label: 'Architectural Cinema', href: '#cinematography' },
  { num: '06', label: 'The Architect', href: '#monograph' },
  { num: '07', label: 'Field Diary (@dennisbezalel)', href: '#instagram-feed' },
  { num: '08', label: 'Initiate Conversation', href: '#conversation', isAction: true },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommissionModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is active and support ESC key
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleMenuClick = (item: MenuItem) => {
    closeMenu();
    if (item.isAction) {
      onOpenCommissionModal();
      return;
    }
    const target = document.querySelector(item.href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ${
          isScrolled
            ? 'bg-[#0b0b0d]/94 backdrop-blur-md border-white/10 py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-[#0b0b0d]/80 to-transparent border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
          {/* Brand Monogram & Wordmark */}
          <a
            href="#"
            className="group flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880]"
          >
            <Logo size="sm" showText={true} />
          </a>

          {/* Minimalist Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[12px] tracking-[0.22em] uppercase font-sans font-medium text-[#c8c5be]">
            <a
              href="#portfolio"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#c5a880]"
            >
              Residences
            </a>
            <a
              href="#philosophy"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#c5a880]"
            >
              The Atelier
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

          {/* Right Action Zone: Conversation CTA + Menu Trigger */}
          <div className="flex items-center gap-3.5 shrink-0">
            <button
              onClick={onOpenCommissionModal}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-sans font-medium tracking-[0.18em] uppercase text-black bg-[#c5a880] hover:bg-[#dfc7a5] transition-colors rounded-none whitespace-nowrap shrink-0 cursor-pointer shadow-lg"
            >
              <span>A Conversation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Menu Trigger Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-2 px-3.5 py-2 text-xs uppercase tracking-[0.22em] text-[#c8c5be] hover:text-white border border-white/15 hover:border-[#c5a880] transition-colors cursor-pointer bg-black/30 backdrop-blur-sm"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-4 h-4 text-[#c5a880]" />
              <span className="text-[11px] font-sans font-medium">Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Redesigned Architectural Menu Overlay (Uncluttered, Serene, Ferris Rafauli Inspired) */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#070709]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-12 lg:p-16 text-[#eae7e1] animate-in fade-in duration-300">
          {/* Top Bar: Brand Monogram + Clean Close Action */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6 sm:pb-8">
            <Logo size="md" showText={true} />

            <button
              onClick={closeMenu}
              className="group flex items-center gap-3 px-4 py-2 border border-white/15 hover:border-[#c5a880] text-[#c8c5be] hover:text-white transition-all cursor-pointer"
              aria-label="Close menu"
            >
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#9e9b94] group-hover:text-[#c5a880] transition-colors">
                Close
              </span>
              <X className="w-4 h-4 text-[#c5a880] transition-transform group-hover:rotate-90 duration-300" />
            </button>
          </div>

          {/* Central Architectural Directory: Spacious, Non-Crowded, Pure Typographic Elegance */}
          <div className="my-auto py-8 sm:py-12 max-w-4xl mx-auto w-full">
            <div className="text-center sm:text-left mb-6 sm:mb-8">
              <span className="text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-[#c5a880] font-sans font-medium">
                Monograph Index
              </span>
            </div>

            <nav className="flex flex-col space-y-4 sm:space-y-6">
              {MENU_ITEMS.map((item) => (
                <a
                  key={item.num}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick(item);
                  }}
                  className="group flex items-baseline gap-4 sm:gap-8 text-left transition-all duration-300 cursor-pointer"
                >
                  <span className="text-xs sm:text-sm font-sans tracking-widest text-[#9e9b94] group-hover:text-[#c5a880] transition-colors shrink-0">
                    {item.num}
                  </span>

                  <span
                    className={`text-2xl sm:text-4xl lg:text-5xl font-serif tracking-wide transition-all duration-300 group-hover:translate-x-2 ${
                      item.isAction
                        ? 'text-[#c5a880] group-hover:text-white'
                        : 'text-[#eae7e1] group-hover:text-[#c5a880]'
                    }`}
                    style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
                  >
                    {item.label}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Bottom Bar: Airy, Single-Row Atelier Coordinates & Direct Touchpoints */}
          <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#9e9b94] gap-4">
            <div className="text-[11px] tracking-[0.25em] uppercase font-sans text-[#c8c5be]">
              <span>Nairobi Atelier</span>
              <span className="mx-2 text-white/20">·</span>
              <span>Dubai Studio</span>
            </div>

            <div className="flex items-center gap-6 text-[11px] tracking-[0.18em] font-sans">
              <a
                href="mailto:theageco@gmail.com"
                className="hover:text-[#c5a880] transition-colors"
              >
                theageco@gmail.com
              </a>
              <span className="text-white/20">·</span>
              <a
                href="https://wa.me/254715998587"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#c5a880] transition-colors"
              >
                +254 715 99 85 87
              </a>
            </div>

            <div className="flex items-center gap-6 text-[11px] tracking-[0.2em] uppercase font-sans">
              <a
                href="https://www.instagram.com/dennisbezalel/?__pwa=1"
                target="_blank"
                rel="noreferrer"
                className="text-[#c5a880] hover:text-white transition-colors"
              >
                Instagram
              </a>
              <span className="text-white/20">·</span>
              <a
                href="https://youtube.com/@dennisbezalel?si=sjAgKEOQGBJD4tRj"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
