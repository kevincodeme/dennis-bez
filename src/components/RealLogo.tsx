import React from 'react';

interface RealLogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  variant?: 'monogram' | 'full' | 'stacked';
  color?: 'light' | 'dark' | 'bronze' | 'white';
}

export const RealLogo: React.FC<RealLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
  color = 'light',
}) => {
  // Determine fill colors
  const primaryFill = {
    light: '#eae7e1', // Warm alabaster on dark
    white: '#ffffff',
    dark: '#0c0c0e',  // Dark charcoal on light
    bronze: '#c5a880', // Signature Ferris Rafauli bronze
  }[color];

  const accentFill = {
    light: '#c5a880',
    white: '#dfc7a5',
    dark: '#8c7150',
    bronze: '#dfc7a5',
  }[color];

  const dimensions = {
    xs: { emblem: 'w-6 h-7', text: 'text-[11px] tracking-[0.25em]', gap: 'gap-2.5' },
    sm: { emblem: 'w-8 h-9', text: 'text-xs tracking-[0.3em]', gap: 'gap-3' },
    md: { emblem: 'w-10 h-12', text: 'text-sm tracking-[0.32em]', gap: 'gap-3.5' },
    lg: { emblem: 'w-16 h-20', text: 'text-lg tracking-[0.35em]', gap: 'gap-4' },
    xl: { emblem: 'w-24 h-28', text: 'text-2xl tracking-[0.4em]', gap: 'gap-5' },
    hero: { emblem: 'w-36 h-44', text: 'text-3xl tracking-[0.45em]', gap: 'gap-6' },
  }[size];

  // SVG Monogram faithfully matching the uploaded WhatsApp Image 2026-10-09 at 12.44.27.jpeg
  const MonogramEmblem = (
    <svg
      viewBox="0 0 320 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${dimensions.emblem} shrink-0 transition-transform duration-500`}
      aria-label="Dennis Bezalel Monogram"
    >
      {/* Upper Ascender of 'd' with sharp top-left flared hook */}
      <path
        d="M162 92 C162 92, 175 92, 188 80 C194 74, 194 62, 194 50 L162 50 L162 208 C148 208, 138 202, 126 186 C112 166, 112 136, 126 116 C138 96, 152 92, 162 92 Z"
        fill={primaryFill}
      />

      {/* Main vertical stem and right descender stroke */}
      <path
        d="M162 50 L194 50 L194 220 L162 220 Z"
        fill={primaryFill}
      />

      {/* Left rectangular vertical body of 'd' */}
      <path
        d="M144 146 L174 146 L174 276 L144 276 Z"
        fill={primaryFill}
      />

      {/* Left crescent bowl of 'd' */}
      <path
        d="M144 168 C124 168, 102 184, 102 216 C102 248, 124 266, 144 266 L144 246 C134 246, 124 238, 124 216 C124 196, 134 188, 144 188 Z"
        fill={primaryFill}
      />

      {/* Lower calligraphic curl and sweeping loop of 'b' */}
      <path
        d="M162 220 L162 278 C162 302, 174 322, 198 326 C220 330, 238 316, 238 290 C238 260, 214 248, 190 248 L190 226 C228 226, 262 250, 262 294 C262 334, 224 358, 180 352 C150 346, 134 316, 134 278 L134 220 Z"
        fill={primaryFill}
      />

      {/* Center 45-degree rotated solid diamond inside the counter of 'b' */}
      <path
        d="M198 274 L212 288 L198 302 L184 288 Z"
        fill={accentFill}
      />
    </svg>
  );

  if (variant === 'monogram') {
    return <div className={`inline-flex items-center ${className}`}>{MonogramEmblem}</div>;
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${dimensions.gap} ${className}`}>
        {MonogramEmblem}
        <div className="flex flex-col items-center">
          <span
            className={`font-serif uppercase font-semibold text-white tracking-[0.35em] whitespace-nowrap ${dimensions.text}`}
            style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
          >
            DENNIS <span className="text-[#c5a880] mx-0.5">•</span> BEZALEL
          </span>
          <span className="text-[9px] tracking-[0.38em] uppercase text-[#9e9b94] font-sans font-medium mt-1">
            ARCHITECTURAL ATELIER
          </span>
        </div>
      </div>
    );
  }

  // Default 'full' horizontal lockup
  return (
    <div className={`flex items-center ${dimensions.gap} select-none ${className}`}>
      {MonogramEmblem}
      <div className="flex flex-col">
        <span
          className={`font-serif uppercase font-semibold text-white whitespace-nowrap ${dimensions.text}`}
          style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif" }}
        >
          DENNIS <span className="text-[#c5a880] mx-0.5">•</span> BEZALEL
        </span>
        <span className="text-[9px] tracking-[0.35em] text-[#9e9b94] uppercase font-sans font-medium whitespace-nowrap">
          ARCHITECTURAL ATELIER
        </span>
      </div>
    </div>
  );
};
