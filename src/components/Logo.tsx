import React from 'react';
import monogramImage from '../assets/dennis-bezalel-mark.png';

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

  const MonogramGlyph = (
    <span
      className={`${iconDimensions} inline-flex shrink-0 items-center justify-center overflow-hidden rounded-sm bg-[#eae7e1] p-0.5 transition-transform duration-500 group-hover:scale-105`}
    >
      <img
        src={monogramImage}
        alt="Dennis Bezalel monogram"
        className="h-full w-full object-contain"
      />
    </span>
  );

  if (stacked) {
    return (
      <div className={`flex flex-col items-center rounded-sm bg-[#eae7e1] p-2 text-center gap-4 select-none ${className}`}>
        {MonogramGlyph}
        {showText && (
          <div className="flex flex-col items-center">
            <span
              className={`font-serif uppercase font-semibold tracking-[0.35em] whitespace-nowrap ${textClasses} ${
                lightMode ? 'text-black' : 'text-[#171717]'
              }`}
              style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', serif" }}
            >
              DENNIS <span className="text-[#c5a880] mx-0.5">•</span> BEZALEL
            </span>
            <span className="text-[9px] tracking-[0.38em] uppercase text-[#55514b] font-sans font-medium mt-1">
              ARCHITECTURAL ATELIER
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3.5 rounded-sm bg-[#eae7e1] px-2 py-1.5 select-none ${className}`}>
      {MonogramGlyph}

      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-serif uppercase font-semibold whitespace-nowrap ${textClasses} ${
              lightMode ? 'text-black' : 'text-[#171717]'
            }`}
            style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', serif" }}
          >
            DENNIS <span className="text-[#c5a880] mx-0.5">•</span> BEZALEL
          </span>
          <span className="text-[9px] tracking-[0.35em] text-[#55514b] uppercase font-sans font-medium whitespace-nowrap">
            ARCHITECTURAL ATELIER
          </span>
        </div>
      )}
    </div>
  );
};
