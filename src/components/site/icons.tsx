import type { SVGProps } from "react";

const base = (props: SVGProps<SVGSVGElement>) => ({
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export function LeafIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M38 10c0 14-8 24-20 26-4 .7-6-1-6-5C12 19 22 11 38 10Z" />
      <path d="M10 40C16 30 24 22 34 16" />
      <path d="M24 30c-2-3-3-6-3-10M30 22c-2-2-3-5-3-8" />
    </svg>
  );
}

export function CowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M8 20c2-4 6-6 12-6h10c5 0 9 2 11 6v8c0 2-1 3-3 3h-2l-1 8M15 39l-1-8M27 39l-1-8M35 39l1-8" />
      <path d="M8 20c-2-3-2-6 0-8 3 0 5 2 6 5M40 20c2-3 2-6 0-8-3 0-5 2-6 5" />
      <circle cx="18" cy="21" r="1" />
      <circle cx="30" cy="21" r="1" />
      <path d="M20 27h8" />
    </svg>
  );
}

export function HoneycombIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M24 6l8 4.6v9.2L24 24.4 16 19.8v-9.2L24 6Z" />
      <path d="M14 23.6l8 4.6v9.2L14 42l-8-4.6v-9.2l8-4.6Z" />
      <path d="M34 23.6l8 4.6v9.2L34 42l-8-4.6v-9.2l8-4.6Z" />
    </svg>
  );
}

export function BeeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <ellipse cx="24" cy="28" rx="6" ry="11" />
      <path d="M18.4 24h11.2M18 30h12M19 35h10" />
      <circle cx="24" cy="15" r="4" />
      <path d="M22 11l-3-4M26 11l3-4" />
      <path d="M18 20C12 14 6 16 6 21s6 8 12 5M30 20c6-6 12-4 12 1s-6 8-12 5" />
    </svg>
  );
}

export function WheatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M24 42V14" />
      <path d="M24 16c-4-1-6-4-6-8 4 0 6 2 6 5M24 16c4-1 6-4 6-8-4 0-6 2-6 5" />
      <path d="M24 25c-4-1-6-4-6-8 4 0 6 2 6 5M24 25c4-1 6-4 6-8-4 0-6 2-6 5" />
      <path d="M24 34c-4-1-6-4-6-8 4 0 6 2 6 5M24 34c4-1 6-4 6-8-4 0-6 2-6 5" />
    </svg>
  );
}

export function MustardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M24 42V18" />
      <circle cx="24" cy="12" r="3" />
      <circle cx="17" cy="16" r="2.5" />
      <circle cx="31" cy="16" r="2.5" />
      <path d="M24 26c-5 0-9-3-10-8 5-1 9 2 10 6M24 33c5 0 9-3 10-8-5-1-9 2-10 6" />
    </svg>
  );
}

export function GheePotIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M14 18h20l2 4c2 4 2 10 0 14-1 3-4 4-12 4s-11-1-12-4c-2-4-2-10 0-14l2-4Z" />
      <path d="M12 18h24" />
      <path d="M18 28c2-2 4-2 6 0s4 2 6 0" />
      <path d="M24 12c2 2 2 3 0 5-2-2-2-3 0-5Z" />
    </svg>
  );
}

export function ScallopDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 text-accent ${className}`}>
      <span className="h-px w-16 bg-accent/60 sm:w-32" />
      <svg
        width="46"
        height="20"
        viewBox="0 0 46 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        aria-hidden
      >
        <path d="M3 10c4-6 8-8 20-8s16 2 20 8c-4 6-8 8-20 8S7 16 3 10Z" />
        <circle cx="23" cy="10" r="2.5" />
      </svg>
      <span className="h-px w-16 bg-accent/60 sm:w-32" />
    </div>
  );
}
