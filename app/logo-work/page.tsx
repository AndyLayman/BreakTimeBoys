import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Logo Work",
  description:
    "A selection of logos and brand marks crafted by Break Time Boys for clients across gaming, fitness, music and lifestyle.",
};

/*
  Placeholder marks so the grid reads as intentional out of the box.
  Real logos: drop files in /public/images/logos/ and replace the node with
  <img src="/images/logos/blippi.png" alt="Blippi" className="max-h-24 w-auto" />
*/

const Blippi = (
  <span
    className="text-5xl md:text-6xl font-black italic tracking-tight select-none"
    style={{
      fontFamily: '"Arial Black", Arial, sans-serif',
      background: "linear-gradient(180deg,#ffb02e 0%,#ff7a18 55%,#f4541e 100%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
    }}
  >
    BLiPPi
  </span>
);

const Shield = (
  <svg viewBox="0 0 100 120" className="w-20 h-24 text-ink" aria-label="VIP Security">
    <path d="M50 6 L92 22 V58 C92 88 73 107 50 115 C27 107 8 88 8 58 V22 Z" fill="none" stroke="currentColor" strokeWidth="6" />
    <path d="M30 42 L50 88 L70 42" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LocalLegend = (
  <span
    className="text-4xl md:text-5xl font-bold italic select-none text-ink"
    style={{ fontFamily: '"Brush Script MT","Segoe Script","Apple Chancery",cursive' }}
  >
    local Legend
  </span>
);

const Flame = (
  <svg viewBox="0 0 100 124" className="w-16 h-24" aria-label="Mascot mark">
    <defs>
      <linearGradient id="fl" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#ffcf3f" />
        <stop offset="0.5" stopColor="#ff7a18" />
        <stop offset="1" stopColor="#e2231a" />
      </linearGradient>
    </defs>
    <path fill="url(#fl)" stroke="#0a0a0a" strokeWidth="3" d="M52 6 C62 32 88 38 79 72 C74 99 56 117 39 112 C16 105 13 80 24 61 C31 50 35 56 37 63 C37 44 45 30 52 6 Z" />
  </svg>
);

const Wing = (
  <svg viewBox="0 0 120 110" className="w-24 h-20 text-ink" aria-label="Brand mark">
    <path fill="currentColor" d="M6 16 C46 12 76 24 116 14 C88 34 72 44 62 72 C55 44 34 28 6 16 Z" />
    <path fill="currentColor" d="M22 60 C46 60 62 68 80 82 C57 84 45 94 41 106 C35 84 31 72 22 60 Z" />
  </svg>
);

const RespectMyRegion = (
  <span className="text-2xl md:text-3xl font-black uppercase leading-[0.95] tracking-tight text-ink text-center select-none">
    Respect
    <br />
    My Region
  </span>
);

const Imperiya = (
  <span className="flex flex-col items-center gap-3 text-ink select-none">
    <svg viewBox="0 0 120 40" className="w-28" aria-hidden="true">
      <rect x="4" y="14" width="10" height="12" rx="1" fill="currentColor" />
      <rect x="14" y="9" width="8" height="22" rx="1" fill="currentColor" />
      <rect x="98" y="9" width="8" height="22" rx="1" fill="currentColor" />
      <rect x="106" y="14" width="10" height="12" rx="1" fill="currentColor" />
      <rect x="22" y="18" width="76" height="4" fill="currentColor" />
    </svg>
    <span className="text-lg font-black uppercase tracking-[0.25em]">Imperiya</span>
  </span>
);

const Hardpoints = (
  <span className="text-2xl md:text-3xl font-black uppercase tracking-[0.18em] text-ink select-none">
    Hard<span className="text-accent">points</span>
  </span>
);

const LOGOS = [
  { node: Blippi, name: "Blippi", type: "Logo Design", year: "’20" },
  { node: Shield, name: "VIP Security", type: "Logo Design", year: "’22" },
  { node: LocalLegend, name: "Local Legend", type: "Lettering", year: "’23" },
  { node: Flame, name: "Phoenix GG", type: "Mascot", year: "’21" },
  { node: Wing, name: "Distracted", type: "Brand Mark", year: "’23" },
  { node: RespectMyRegion, name: "Respect My Region", type: "Logo & Web", year: "’22" },
  { node: Imperiya, name: "Imperiya Barbell", type: "Brand Identity", year: "’23" },
  { node: Hardpoints, name: "Hardpoints", type: "Brand & Web", year: "’24" },
];

export default function LogoWorkPage() {
  return (
    <>
      <section className="bd-b">
        <div className="container-x py-16 md:py-24">
          <div className="flex justify-between gap-4 label pb-8">
            <span>[ Archive / Marks ]</span>
            <span>{String(LOGOS.length).padStart(2, "0")} Selected</span>
          </div>
          <Reveal>
            <h1 className="huge text-[clamp(3rem,15vw,13rem)]">
              Logo <span className="stroke-ink">Work.</span>
            </h1>
            <p className="mono text-sm leading-relaxed mt-8 max-w-md">
              // A selection of logos and brand marks crafted for clients across
              gaming, fitness, music and lifestyle.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bd-b">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 bd-t bd-l">
            {LOGOS.map((l, i) => (
              <Reveal key={l.name} className="bd-r bd-b" delay={(i % 3) * 60}>
                <div className="flex flex-col h-full">
                  <div className="flex-1 min-h-[220px] md:min-h-[280px] flex items-center justify-center p-8">
                    {l.node}
                  </div>
                  <div className="bd-t p-3 flex items-center justify-between gap-2">
                    <span className="flex items-center gap-3">
                      <span className="label text-accent">
                        [{String(i + 1).padStart(2, "0")}]
                      </span>
                      <span className="label">{l.name}</span>
                    </span>
                    <span className="label opacity-50">
                      {l.type} · {l.year}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
