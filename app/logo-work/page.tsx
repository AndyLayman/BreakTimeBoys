import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Logo Work",
  description:
    "A selection of logos and brand marks crafted by Break Time Boys for clients across gaming, fitness, music and lifestyle.",
};

/*
  These are clean placeholder marks so the page looks intentional out of the box.
  To use the real client logos, drop files in /public/images/logos/ and swap the
  node below for: <img src="/images/logos/blippi.png" alt="Blippi" className="..." />
*/

const Blippi = (
  <span
    className="text-6xl md:text-8xl font-black italic tracking-tight select-none"
    style={{
      fontFamily: '"Arial Black", Arial, sans-serif',
      background: "linear-gradient(180deg,#ffb02e 0%,#ff7a18 55%,#f4541e 100%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
      filter: "drop-shadow(2px 3px 0 rgba(0,0,0,0.15))",
    }}
  >
    BLiPPi
  </span>
);

const Shield = (
  <svg viewBox="0 0 100 120" className="w-24 h-28 md:w-28 md:h-32 text-ink" aria-label="VIP Security">
    <path
      d="M50 6 L92 22 V58 C92 88 73 107 50 115 C27 107 8 88 8 58 V22 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
    />
    <path
      d="M30 42 L50 88 L70 42"
      fill="none"
      stroke="currentColor"
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LocalLegend = (
  <span
    className="text-5xl md:text-7xl font-bold italic select-none text-ink"
    style={{ fontFamily: '"Brush Script MT","Segoe Script","Apple Chancery",cursive' }}
  >
    local Legend
  </span>
);

const Flame = (
  <svg viewBox="0 0 100 124" className="w-20 h-28 md:w-24 md:h-32" aria-label="Mascot mark">
    <defs>
      <linearGradient id="fl" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#ffcf3f" />
        <stop offset="0.5" stopColor="#ff7a18" />
        <stop offset="1" stopColor="#e2231a" />
      </linearGradient>
    </defs>
    <path
      fill="url(#fl)"
      stroke="#0a0a0a"
      strokeWidth="3"
      d="M52 6 C62 32 88 38 79 72 C74 99 56 117 39 112 C16 105 13 80 24 61 C31 50 35 56 37 63 C37 44 45 30 52 6 Z"
    />
  </svg>
);

const Wing = (
  <svg viewBox="0 0 120 110" className="w-24 h-20 md:w-32 md:h-28 text-ink" aria-label="Brand mark">
    <path
      fill="currentColor"
      d="M6 16 C46 12 76 24 116 14 C88 34 72 44 62 72 C55 44 34 28 6 16 Z"
    />
    <path
      fill="currentColor"
      d="M22 60 C46 60 62 68 80 82 C57 84 45 94 41 106 C35 84 31 72 22 60 Z"
    />
  </svg>
);

const RespectMyRegion = (
  <span className="text-3xl md:text-5xl font-black uppercase leading-[0.95] tracking-tight text-ink text-center select-none">
    Respect
    <br />
    My Region
  </span>
);

const Imperiya = (
  <span className="flex flex-col items-center gap-3 text-ink select-none">
    <svg viewBox="0 0 120 40" className="w-28 md:w-36" aria-hidden="true">
      <rect x="4" y="14" width="10" height="12" rx="2" fill="currentColor" />
      <rect x="14" y="9" width="8" height="22" rx="2" fill="currentColor" />
      <rect x="98" y="9" width="8" height="22" rx="2" fill="currentColor" />
      <rect x="106" y="14" width="10" height="12" rx="2" fill="currentColor" />
      <rect x="22" y="18" width="76" height="4" fill="currentColor" />
    </svg>
    <span className="text-xl md:text-2xl font-black uppercase tracking-[0.25em]">
      Imperiya
    </span>
  </span>
);

const Hardpoints = (
  <span className="text-3xl md:text-5xl font-black uppercase tracking-[0.18em] text-ink select-none">
    Hard<span className="text-[#8a8a8a]">points</span>
  </span>
);

const LOGOS: { node: React.ReactNode; align: "left" | "center" | "right" }[] = [
  { node: Blippi, align: "center" },
  { node: Shield, align: "right" },
  { node: LocalLegend, align: "left" },
  { node: Flame, align: "right" },
  { node: Wing, align: "left" },
  { node: RespectMyRegion, align: "center" },
  { node: Imperiya, align: "left" },
  { node: Hardpoints, align: "right" },
];

const ALIGN = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
};

export default function LogoWorkPage() {
  return (
    <>
      <div className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-3 text-[#8a8a8a]">
        <span className="w-2 h-2 rounded-full bg-ink animate-bounce" />
        <span className="[writing-mode:vertical-rl] text-[0.7rem] tracking-[0.18em] lowercase">
          scroll
        </span>
        <span className="w-px h-14 bg-[#ececec]" />
      </div>

      <section className="container-x pt-[140px] md:pt-[160px] pb-12">
        <Reveal>
          <p className="eyebrow muted">Selected Work</p>
          <h1 className="display font-bold text-4xl md:text-6xl mt-3">
            Logo Work.
          </h1>
          <p className="muted mt-5 max-w-md text-sm leading-relaxed">
            A selection of logos and brand marks crafted for clients across
            gaming, fitness, music and lifestyle.
          </p>
        </Reveal>
      </section>

      <section className="container-x pb-28 md:pb-40">
        <div className="flex flex-col gap-28 md:gap-44">
          {LOGOS.map((l, i) => (
            <Reveal key={i} className={`flex ${ALIGN[l.align]}`}>
              <div className="flex items-center justify-center px-2">{l.node}</div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
