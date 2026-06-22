import Reveal from "@/components/Reveal";

const BLOCKS = [
  {
    n: "01",
    title: "Make your business visible online and earn more.",
    body: "We put your brand in front of the right people and make it effortless for them to act — through iteration, analysis and relentless craft.",
  },
  {
    n: "02",
    title: "Make your eCommerce business stand out.",
    body: "Commerce tools for web and mobile that blend bold creative with conversion-first thinking — so your store feels unmistakably yours.",
  },
  {
    n: "03",
    title: "Grow with your audience.",
    body: "Content, design and experiences that keep people coming back — and turn customers into advocates for the long haul.",
  },
];

export default function NumberedBlocks() {
  return (
    <section className="bd-b">
      <div className="container-x">
        {BLOCKS.map((b, i) => (
          <Reveal key={b.n} className={i > 0 ? "bd-t" : ""}>
            <div className="grid md:grid-cols-12 gap-4 md:gap-10 py-12 md:py-16 md:items-center">
              <div className="md:col-span-4 lg:col-span-3">
                <span className="huge stroke-ink block text-[24vw] md:text-[11rem] leading-none">
                  {b.n}
                </span>
              </div>
              <div className="md:col-span-5">
                <h3 className="display text-2xl md:text-4xl">{b.title}</h3>
              </div>
              <div className="md:col-span-3 lg:col-span-4">
                <p className="mono text-sm leading-relaxed opacity-80">
                  {b.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
