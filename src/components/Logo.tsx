import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showText?: boolean;
  lightMode?: boolean;
  stacked?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  lightMode = false,
  stacked = false,
}) => {
  const iconDimensions = {
    xs: 'w-6 h-7',
    sm: 'w-8 h-9',
    md: 'w-10 h-11',
    lg: 'w-14 h-16',
    xl: 'w-20 h-24',
    hero: 'w-28 h-32',
  }[size];

  const textClasses = {
    xs: 'text-[11px] tracking-[0.25em]',
    sm: 'text-xs tracking-[0.28em]',
    md: 'text-sm tracking-[0.32em]',
    lg: 'text-lg tracking-[0.36em]',
    xl: 'text-2xl tracking-[0.4em]',
    hero: 'text-3xl tracking-[0.45em]',
  }[size];

  const primaryFill = lightMode ? '#0b0b0d' : '#ffffff';
  const diamondFill = lightMode ? '#8c7150' : '#c5a880';

  const MonogramGlyph = (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${iconDimensions} shrink-0 transition-transform duration-500 group-hover:scale-105`}
      aria-label="Dennis Bezalel Monogram"
    >
      {/* Upper Ascender & Hook of 'd' */}
      <path
        d="M260 90 C260 90, 282 90, 302 70 C312 60, 312 40, 312 20 L260 20 L260 270 C236 270, 220 260, 200 234 C178 202, 178 154, 200 122 C220 90, 244 90, 260 90 Z"
        fill={primaryFill}
      />

      {/* Main Column of 'd' */}
      <path
        d="M232 174 L282 174 L282 382 L232 382 Z"
        fill={primaryFill}
      />

      {/* Left Crescent Outer Bowl of 'd' */}
      <path
        d="M232 208 C200 208, 164 234, 164 286 C164 338, 200 368, 232 368 L232 336 C216 336, 200 324, 200 286 C200 254, 216 240, 232 240 Z"
        fill={primaryFill}
      />

      {/* Descending & Sweeping Loop of 'b' */}
      <path
        d="M260 294 L260 386 C260 424, 280 456, 318 462 C354 468, 382 446, 382 404 C382 356, 344 336, 306 336 L306 302 C366 302, 420 340, 420 410 C420 474, 360 512, 290 502 C242 492, 216 444, 216 386 L216 294 Z"
        fill={primaryFill}
      />

      {/* Center Solid Diamond inside Loop of 'b' */}
      <polygon points="318,378 340,400 318,422 296,400" fill={diamondFill} />
    </svg>
  );

  if (stacked) {
    return (
      <div className={`flex flex-col items-center text-center gap-4 select-none ${className}`}>
        {MonogramGlyph}
        {showText && (
          <div className="flex flex-col items-center">
            <span
              className={`font-serif uppercase font-semibold tracking-[0.35em] whitespace-nowrap ${textClasses} ${
                lightMode ? 'text-black' : 'text-white'
              }`}
              style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', serif" }}
            >
              DENNIS <span className="text-[#c5a880] mx-0.5">•</span> BEZALEL
            </span>
            <span className="text-[9px] tracking-[0.38em] uppercase text-[#9e9b94] font-sans font-medium mt-1">
              ARCHITECTURAL ATELIER
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {MonogramGlyph}

      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-serif uppercase font-semibold whitespace-nowrap ${textClasses} ${
              lightMode ? 'text-black' : 'text-white/95'
            }`}
            style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', serif" }}
          >
            DENNIS <span className="text-[#c5a880] mx-0.5">•</span> BEZALEL
          </span>
          <span className="text-[9px] tracking-[0.35em] text-[#9e9b94] uppercase font-sans font-medium whitespace-nowrap">
            ARCHITECTURAL ATELIER
          </span>
        </div>
      )}
    </div>
  );
};

