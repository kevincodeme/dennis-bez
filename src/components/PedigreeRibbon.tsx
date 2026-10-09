import React from 'react';

export const PedigreeRibbon: React.FC = () => {
  const stats = [
    {
      value: '09+',
      unit: 'Years',
      label: 'Haute Spatial Direction',
      detail: 'Private estates & bespoke residential architecture',
    },
    {
      value: '20M+',
      unit: 'Views',
      label: 'Global Visual Reach',
      detail: 'Documented architectural walkthroughs & films',
    },
    {
      value: '50+',
      unit: 'Commissions',
      label: 'Landmark Projects',
      detail: 'Fine Urban, Heart of Europe, Africandy, Lesus',
    },
    {
      value: 'BA ID',
      unit: 'Degree',
      label: 'Spatial Planning & IT',
      detail: 'Maseno University Interior Design & Digital Innovation',
    },
  ];

  return (
    <section className="w-full bg-[#111114] border-y border-white/10 py-10 px-6 sm:px-12 relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex flex-col border-l border-white/10 pl-5 sm:pl-6 first:border-l-0 md:first:border-l-0"
          >
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-serif text-3xl sm:text-4xl text-white font-normal tabular-nums">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#c5a880] font-sans font-medium">
                {stat.unit}
              </span>
            </div>
            <span className="text-xs sm:text-sm font-sans font-medium text-[#eae7e1] tracking-wide mb-1">
              {stat.label}
            </span>
            <p className="text-xs text-[#9e9b94] font-light leading-relaxed">
              {stat.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
