import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
} as const;

export const SunIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" />
  </svg>
);

export const SnowIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 2.5v19M4 7l16 10M20 7 4 17" />
    <path d="m9.5 4 2.5 2 2.5-2M9.5 20l2.5-2 2.5 2M3.8 10.2l3-.9-.8-3M20.2 13.8l-3 .9.8 3M6 17.7l.8-3-3-.9M18 6.3l-.8 3 3 .9" />
  </svg>
);

export const BoltIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M13 2.5 4.5 13.5H12l-1 8 8.5-11H12l1-8Z" />
  </svg>
);

export const NetIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="5" cy="6" r="2.2" />
    <circle cx="19" cy="6" r="2.2" />
    <circle cx="12" cy="18" r="2.2" />
    <circle cx="12" cy="10.5" r="1.6" />
    <path d="M7.1 6.6 17 6.6M6.2 8 10.9 16.2M17.8 8l-4.7 8.2M12 12.1v3.7" />
  </svg>
);

export const ArrowIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const MailIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const CopyIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="8" y="8" width="12" height="12" rx="2.5" />
    <path d="M16 8V6.5A2.5 2.5 0 0 0 13.5 4h-7A2.5 2.5 0 0 0 4 6.5v7A2.5 2.5 0 0 0 6.5 16H8" />
  </svg>
);

export const CheckIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

export const GlobeIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" />
  </svg>
);

export const featureIcons = {
  sun: SunIcon,
  snow: SnowIcon,
  bolt: BoltIcon,
  net: NetIcon,
};

export const Logo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden>
    <defs>
      <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#4f46e5" />
        <stop offset="0.6" stopColor="#0ea5e9" />
        <stop offset="1" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    <circle cx="16" cy="16" r="6" fill="url(#logo-g)" />
    <ellipse cx="16" cy="16" rx="14" ry="6" fill="none" stroke="url(#logo-g)" strokeWidth="2" transform="rotate(-28 16 16)" />
    <circle cx="28" cy="9.5" r="2.2" fill="#f59e0b" />
  </svg>
);
