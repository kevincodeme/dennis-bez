import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenCommissionModal?: () => void;
}

interface MenuItem {
  num: string;
  label: string;
  subtitle: string;
  href: string;
  isAction?: boolean;
}

const MENU_ITEMS: MenuItem[] = [
  {
    num: '01',
    label: 'The Residences & Estates',
    subtitle: 'Catalog of grand estates, private villas & bespoke penthouses',
    href: '/residences',
  },
  {
    num: '02',
    label: 'The Atelier & Philosophy',
    subtitle: 'Architectural manifesto, artisan ethos & construction process',
    href: '/atelier',
  },
  {
    num: '03',
    label: 'Materiality Archive',
    subtitle: 'Rare quarry stone, Belgian smoked oak & patinated bronze',
    href: '/materiality',
  },
  {
    num: '04',
    label: 'Architectural Motion & Film',
    subtitle: 'Cinematic monographs & design documentaries',
    href: '/film',
  },
  {
    num: '05',
    label: 'The Architect',
    subtitle: 'Dennis Ochieng Bezalel biography & Maseno pedigree',
    href: '/architect',
  },
  {
    num: '06',
    label: 'Field Diary & Dispatches',
    subtitle: 'Authentic site dispatches & @dennisbezalel updates',
    href: '/field-diary',
  },
  {
    num: '07',
    label: 'A Conversation',
    subtitle: 'Direct dialogue with Dennis Bezalel & private commission',
    href: '/conversation',
    isAction: true,
  },
];

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    // Permit default browser behavior for modifier clicks (e.g. Cmd/Ctrl + click for new tab)
    if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) {
      return;
    }
    e.preventDefault();
    if (menuOpen) {
      setMenuOpen(false);
    }
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open and support ESC key
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

  const handleNavClick = (href: string) => {
    closeMenu();
    if (location.pathname === href) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* 
        Single Clean Minimal Header:
        Contains solely the Brand Logo on the left, and Direct Dialogue CTA + Menu Trigger on the right.
        No duplicate navigation links cluttering the header bar.
      */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ${
          isScrolled
            ? 'bg-[#0b0b0d]/94 backdrop-blur-md border-white/10 py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-[#0b0b0d]/80 to-transparent border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-6">
          {/* Brand Monogram & Wordmark - Takes user smoothly to homepage */}
          <Link
            to="/"
            onClick={handleLogoClick}
            className="group flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880] cursor-pointer"
            aria-label="Dennis Bezalel Architectural Atelier - Home"
            title="Dennis Bezalel Architectural Atelier - Return to Homepage"
          >
            <Logo size="sm" showText={true} />
          </Link>

          {/* Right Action Zone: Menu Trigger (Visible on mobile, tablet, and desktop) */}
          <div className="flex items-center shrink-0">
            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs uppercase tracking-[0.22em] text-[#c8c5be] hover:text-white border border-white/15 hover:border-[#c5a880] transition-all cursor-pointer bg-black/40 backdrop-blur-sm group"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-4 h-4 text-[#c5a880] group-hover:scale-110 transition-transform" />
              <span className="text-[11px] font-sans font-medium tracking-[0.25em]">Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* 
        Full Architectural Menu Overlay:
        Scrollable (`overflow-y-auto`), serene, Ferris Rafauli-inspired design.
        Includes sticky header with close button, active page indicators, dedicated A Conversation CTA, and detailed footer.
      */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#070709]/98 backdrop-blur-2xl overflow-y-auto overscroll-contain flex flex-col justify-between text-[#eae7e1] animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          {/* Sticky Top Header: Keeps Close Button, Conversation CTA & Brand always accessible during scrolling */}
          <div className="sticky top-0 z-20 bg-[#070709]/95 backdrop-blur-md border-b border-white/10 px-6 sm:px-12 lg:px-16 py-4 sm:py-5 flex items-center justify-between">
            <Link
              to="/"
              onClick={handleLogoClick}
              className="focus:outline-none cursor-pointer group"
              aria-label="Dennis Bezalel Architectural Atelier - Home"
              title="Dennis Bezalel Architectural Atelier - Return to Homepage"
            >
              <Logo size="md" showText={true} />
            </Link>

            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                to="/conversation"
                onClick={() => handleNavClick('/conversation')}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-sans font-medium tracking-[0.16em] uppercase text-black bg-[#c5a880] hover:bg-[#dfc7a5] transition-colors whitespace-nowrap cursor-pointer shadow-md"
              >
                <span>A Conversation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <button
                onClick={closeMenu}
                className="group flex items-center gap-3 px-4 py-2 border border-white/15 hover:border-[#c5a880] text-[#c8c5be] hover:text-white transition-all cursor-pointer bg-black/40"
                aria-label="Close menu"
              >
                <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#9e9b94] group-hover:text-[#c5a880] transition-colors">
                  Close
                </span>
                <X className="w-4 h-4 text-[#c5a880] transition-transform group-hover:rotate-90 duration-300" />
              </button>
            </div>
          </div>

          {/* Scrollable Architectural Monograph Directory Body */}
          <div className="flex-1 max-w-5xl mx-auto w-full px-6 sm:px-12 lg:px-16 py-8 sm:py-14">
            {/* Dedicated A Conversation Banner in Menu */}
            <div className="mb-10 p-6 sm:p-8 bg-[#101014] border border-[#c5a880]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-2xl">
              <div>
                <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.3em] uppercase text-[#c5a880] font-medium block mb-1">
                  Private Architectural Commissions
                </span>
                <h3
                  className="text-xl sm:text-2xl font-serif text-white tracking-wide"
                  style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
                >
                  Direct Dialogue with Dennis Bezalel
                </h3>
                <p className="text-xs text-[#9e9b94] font-sans font-light mt-1 max-w-xl">
                  Personal presence from first pencil trace to final handover. Inquire directly via verified WhatsApp channel or private dossier request.
                </p>
              </div>

              <Link
                to="/conversation"
                onClick={() => handleNavClick('/conversation')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-sans font-medium tracking-[0.2em] uppercase text-black bg-[#c5a880] hover:bg-[#dfc7a5] transition-all whitespace-nowrap shrink-0 shadow-xl cursor-pointer"
              >
                <span>A Conversation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8 sm:mb-12">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#c5a880] inline-block" />
                <span className="text-[11px] sm:text-xs tracking-[0.35em] uppercase text-[#c5a880] font-sans font-medium">
                  Atelier Directory
                </span>
              </div>
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#9e9b94] font-sans">
                {MENU_ITEMS.length} Portals
              </span>
            </div>

            <nav className="flex flex-col space-y-6 sm:space-y-8" aria-label="Directory navigation">
              {/* Home portal entry */}
              <Link
                to="/"
                onClick={handleLogoClick}
                className="group flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6 border-b border-white/5 pb-6 transition-all duration-300 cursor-pointer hover:border-white/20"
              >
                <div className="flex items-baseline gap-4 sm:gap-8">
                  <span
                    className={`text-xs sm:text-sm font-sans tracking-widest transition-colors shrink-0 ${
                      location.pathname === '/'
                        ? 'text-[#c5a880]'
                        : 'text-[#9e9b94] group-hover:text-[#c5a880]'
                    }`}
                  >
                    00
                  </span>
                  <div className="flex flex-col">
                    <span
                      className={`text-2xl sm:text-4xl lg:text-5xl font-serif tracking-wide transition-all duration-300 group-hover:translate-x-2 ${
                        location.pathname === '/'
                          ? 'text-[#c5a880]'
                          : 'text-[#eae7e1] group-hover:text-[#c5a880]'
                      }`}
                      style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
                    >
                      Monumental Entrance
                    </span>
                    <span className="text-xs text-[#9e9b94] font-sans tracking-wide mt-1 group-hover:text-[#c8c5be] transition-colors">
                      Home hero showcase, estate previews & philosophy
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                  {location.pathname === '/' && (
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#c5a880] border border-[#c5a880]/30 px-2 py-0.5">
                      Current
                    </span>
                  )}
                  <ArrowUpRight
                    className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                      location.pathname === '/'
                        ? 'text-[#c5a880]'
                        : 'text-white/30 group-hover:text-[#c5a880]'
                    }`}
                  />
                </div>
              </Link>

              {MENU_ITEMS.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.num}
                    to={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="group flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6 border-b border-white/5 pb-6 transition-all duration-300 cursor-pointer hover:border-white/20"
                  >
                    <div className="flex items-baseline gap-4 sm:gap-8">
                      <span
                        className={`text-xs sm:text-sm font-sans tracking-widest transition-colors shrink-0 ${
                          active
                            ? 'text-[#c5a880]'
                            : 'text-[#9e9b94] group-hover:text-[#c5a880]'
                        }`}
                      >
                        {item.num}
                      </span>

                      <div className="flex flex-col">
                        <span
                          className={`text-2xl sm:text-4xl lg:text-5xl font-serif tracking-wide transition-all duration-300 group-hover:translate-x-2 ${
                            item.isAction
                              ? 'text-[#c5a880] group-hover:text-white'
                              : active
                              ? 'text-[#c5a880]'
                              : 'text-[#eae7e1] group-hover:text-[#c5a880]'
                          }`}
                          style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
                        >
                          {item.label}
                        </span>
                        <span className="text-xs text-[#9e9b94] font-sans tracking-wide mt-1 group-hover:text-[#c8c5be] transition-colors">
                          {item.subtitle}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                      {active && (
                        <span className="text-[10px] tracking-[0.2em] uppercase text-[#c5a880] border border-[#c5a880]/30 px-2 py-0.5">
                          Current
                        </span>
                      )}
                      <ArrowUpRight
                        className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                          active
                            ? 'text-[#c5a880]'
                            : 'text-white/30 group-hover:text-[#c5a880]'
                        }`}
                      />
                    </div>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Bottom Coordinates & Direct Studio Channels */}
          <div className="border-t border-white/10 px-6 sm:px-12 lg:px-16 py-6 sm:py-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#9e9b94] gap-4 bg-[#070709]">
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
