import React, { useId } from 'react';

export const FLAG = {
  green: '#39ff14',
  gold: '#ffd200',
  red: '#de2010',
  black: '#050505',
};

// Bars in the colours of the Zimbabwean flag, like the stripe on a cabinet marquee.
export const Stripe: React.FC<{ colors: string[]; thin?: boolean; count?: number }> = ({ colors, thin, count = 72 }) => (
  <div className={thin ? 'stripe stripe--thin' : 'stripe'} aria-hidden="true">
    {Array.from({ length: count }, (_, i) => (
      <span key={i} style={{ background: colors[i % colors.length] }} />
    ))}
  </div>
);

// A row of square pixel teeth: the cut edge of a printed object.
export const Teeth: React.FC<{ color: string }> = ({ color }) => {
  const id = useId();
  return (
    <svg className="teeth" aria-hidden="true" preserveAspectRatio="none">
      <defs>
        <pattern id={id} width="24" height="12" patternUnits="userSpaceOnUse">
          <rect width="12" height="12" fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="12" fill={`url(#${id})`} />
    </svg>
  );
};

// A tear-off perforation: paper with round holes punched along it.
export const Perforation: React.FC<{ paper: string; hole: string }> = ({ paper, hole }) => {
  const id = useId();
  return (
    <svg className="perf" aria-hidden="true">
      <defs>
        <pattern id={id} width="16" height="14" patternUnits="userSpaceOnUse">
          <rect width="16" height="14" fill={paper} />
          <circle cx="8" cy="7" r="3.5" fill={hole} />
        </pattern>
      </defs>
      <rect width="100%" height="14" fill={`url(#${id})`} />
    </svg>
  );
};
