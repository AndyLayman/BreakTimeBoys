import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="bd-b">
      <div className="container-x py-10 md:py-16">
        <div className="flex justify-between gap-4 label pb-8 md:pb-14">
          <span>[ Digital Creative Studio ]</span>
          <span className="hidden sm:block">Est. Bonney Lake</span>
          <span>(001)</span>
        </div>

        <h1 className="huge text-[clamp(2.6rem,13vw,12rem)]">
          <span className="hero-line">We build</span>
          <span className="hero-line">
            design <span className="stroke-ink">solutions</span>
          </span>
          <span className="hero-line">
            tailored to your <span className="text-accent">users.</span>
          </span>
        </h1>

        <div className="mt-10 md:mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <Reveal className="max-w-md" delay={80}>
            <p className="mono text-sm leading-relaxed">
              // A graphic &amp; digital studio building logos, websites and
              tailor-made digital solutions for brands that refuse to blend in.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-accent">
                Let&apos;s Talk →
              </Link>
              <a href="mailto:info@breaktimeboys.com" className="btn">
                Send a Message
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
