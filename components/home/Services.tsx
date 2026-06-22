import Reveal from "@/components/Reveal";

const SERVICES = [
  {
    title: "Analyze and Optimize",
    body: "We measure what matters and refine relentlessly, turning data and real user behavior into decisions that move the numbers that count.",
    icon: (
      <>
        <path d="M4 20h16" />
        <rect x="6" y="11" width="3" height="6" rx="1" />
        <rect x="11" y="7" width="3" height="10" rx="1" />
        <rect x="16" y="13" width="3" height="4" rx="1" />
      </>
    ),
  },
  {
    title: "Branding Strategy",
    body: "We shape identities with purpose — names, logos and systems that make a brand impossible to forget and easy to love.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 1v3M12 20v3M1 12h3M20 12h3" />
      </>
    ),
  },
  {
    title: "UX Driven",
    body: "Every screen earns its place. We design intuitive, accessible experiences that guide people to the action they came for.",
    icon: (
      <>
        <path d="M5 4l14 8-6 1.5L11 20 5 4z" />
      </>
    ),
  },
  {
    title: "eCommerce Development",
    body: "We build fast, reliable storefronts engineered to convert — from first impression to checkout and well beyond.",
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
    <section className="container-x py-24 md:py-32">
      <Reveal>
        <h2 className="display font-bold text-3xl sm:text-4xl md:text-5xl max-w-2xl leading-[1.08]">
          We help you to go online and increase your sales.
        </h2>
        <p className="muted mt-6 max-w-xl text-sm leading-relaxed">
          Break Time Boys is a graphic and digital studio that designs and
          develops logos, websites and tailor-made digital solutions for brands
          that want to stand out.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 90}>
            <div className="flex flex-col">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-ink"
                aria-hidden="true"
              >
                {s.icon}
              </svg>
              <h3 className="mt-6 text-base font-bold tracking-tight">
                {s.title}
              </h3>
              <p className="muted mt-3 text-sm leading-relaxed">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
