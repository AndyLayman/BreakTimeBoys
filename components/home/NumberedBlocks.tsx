import Reveal from "@/components/Reveal";

const BLOCKS = [
  {
    n: "01",
    title: "Make your business visible online and earn more.",
    body: "We are a creative studio with the skill to deliver awesome user experiences. Through iteration and analysis, we put your brand in front of the right people while making it effortless for them to act.",
  },
  {
    n: "02",
    title: "Make your eCommerce business stand out.",
    body: "We craft commerce tools for web and mobile that blend bold creative with conversion-first thinking — so your store feels unmistakably yours and performs at every step.",
  },
  {
    n: "03",
    title: "Grow with your audience.",
    body: "We help you build a loyal following with content, design and experiences that keep people coming back — and turn customers into advocates.",
  },
];

function Block({ n, title, body }: (typeof BLOCKS)[number]) {
  return (
    <div className="relative">
      <span className="outline-number absolute -top-10 -left-2 z-0">{n}</span>
      <div className="relative z-10 pt-8 max-w-xs">
        <h3 className="display font-bold text-xl md:text-2xl mb-4 leading-snug">
          {title}
        </h3>
        <p className="muted text-sm leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

export default function NumberedBlocks() {
  return (
    <section className="container-x py-24 md:py-32">
      <div className="grid gap-20 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-5 md:col-start-1">
          <Block {...BLOCKS[0]} />
        </Reveal>
        <Reveal className="md:col-span-5 md:col-start-4 md:mt-28" delay={100}>
          <Block {...BLOCKS[1]} />
        </Reveal>
        <Reveal className="md:col-span-5 md:col-start-8 md:mt-12" delay={200}>
          <Block {...BLOCKS[2]} />
        </Reveal>
      </div>
    </section>
  );
}
