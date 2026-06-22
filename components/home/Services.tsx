import Reveal from "@/components/Reveal";

const SERVICES = [
  {
    n: "01",
    title: "Analyze & Optimize",
    body: "We measure what matters and refine relentlessly — turning data and real behavior into decisions that move the numbers.",
    icon: (
      <>
        <path d="M4 20h16" />
        <rect x="6" y="11" width="3" height="6" rx="0.5" />
        <rect x="11" y="7" width="3" height="10" rx="0.5" />
        <rect x="16" y="13" width="3" height="4" rx="0.5" />
      </>
    ),
  },
  {
    n: "02",
    title: "Branding Strategy",
    body: "Names, logos and systems with purpose — identities that are impossible to forget and easy to love.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 1v3M12 20v3M1 12h3M20 12h3" />
      </>
    ),
  },
  {
    n: "03",
    title: "UX Driven",
    body: "Every screen earns its place. Intuitive, accessible experiences that guide people to the action they came for.",
    icon: <path d="M5 4l14 8-6 1.5L11 20 5 4z" />,
  },
  {
    n: "04",
    title: "eCommerce Dev",
    body: "Fast, reliable storefronts engineered to convert — from first impression to checkout and well beyond.",
    icon: (
      <>
        <path d="M4 5h2l1.5 11h10l1.5-8H7" />
        <circle cx="9" cy="20" r="1.4" />
        <circle cx="17" cy="20" r="1.4" />
      </>
    ),
  },
];

export default function Services() {
  return (
    <section className="bd-b">
      <div className="container-x py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <p className="label text-accent mb-4">(Services)</p>
            <h2 className="display text-3xl md:text-5xl max-w-2xl">
              We help you go online and increase your sales.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mono text-sm max-w-xs md:text-right opacity-70">
              // What we do, end to end — strategy through shipping.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="container-x">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 bd-t bd-l">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} className="bd-r bd-b" delay={i * 70}>
              <div className="cell-invert p-6 md:p-8 h-full min-h-[260px] flex flex-col">
                <div className="flex justify-between items-start">
                  <span className="label">[{s.n}]</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-7 h-7"
                    aria-hidden="true"
                  >
                    {s.icon}
                  </svg>
                </div>
                <h3 className="display text-xl md:text-2xl mt-auto">
                  {s.title}
                </h3>
                <p className="mono text-xs leading-relaxed mt-3 opacity-70">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
