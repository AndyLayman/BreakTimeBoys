import Reveal from "@/components/Reveal";
import SmartImg from "@/components/SmartImg";
import CountUp from "@/components/CountUp";
import { TEXTURE } from "@/lib/media";

const STATS = [
  { to: 2.4, decimals: 1, suffix: "×", label: "Average return on investment" },
  { to: 186, prefix: "+", suffix: "%", label: "Conversion lift, on average" },
  { to: 120, suffix: "+", label: "Brands launched & scaled" },
];

export default function RevenueSection() {
  return (
    <section className="relative bd-b bg-ink text-paper overflow-hidden">
      <SmartImg
        src={TEXTURE.src}
        fallback={TEXTURE.fallback}
        alt={TEXTURE.alt}
        className="absolute inset-0 w-full h-full object-cover opacity-25 kenburns"
      />
      <div className="absolute inset-0 bg-ink/55" />

      {/* kinetic outline marquee */}
      <div className="marquee relative py-5 md:py-7 border-b border-white/15">
        <div className="marquee__track">
          {[0, 1].map((r) => (
            <div className="marquee__row" key={r} aria-hidden={r === 1}>
              {[0, 1, 2].map((j) => (
                <span
                  key={j}
                  className="display text-3xl md:text-6xl stroke-paper inline-flex items-center gap-6 pr-6"
                >
                  Increase your revenue
                  <span style={{ WebkitTextStroke: "0", color: "var(--accent)" }}>
                    ✶
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container-x relative py-20 md:py-32 text-center">
        <Reveal>
          <p className="label text-accent mb-6">(The Point)</p>
          <h2 className="huge text-[clamp(2.5rem,12vw,11rem)]">
            Increase your <span className="hl">revenue.</span>
          </h2>
        </Reveal>
      </div>

      {/* count-up stats */}
      <div className="container-x relative pb-20 md:pb-28">
        <div className="grid sm:grid-cols-3 border-t border-l border-white/20">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              className="border-r border-b border-white/20"
              delay={i * 120}
            >
              <div className="p-6 md:p-10">
                <div className="huge text-5xl md:text-7xl text-accent">
                  <CountUp
                    to={s.to}
                    decimals={s.decimals ?? 0}
                    prefix={s.prefix ?? ""}
                    suffix={s.suffix ?? ""}
                  />
                </div>
                <p className="label mt-3 text-paper/70">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
