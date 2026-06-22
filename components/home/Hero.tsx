import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center media-ph text-white">
      {/*
        Drop the real studio photo at /public/images/hero.jpg and uncomment:
        <img src="/images/hero.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/45" />
      */}
      <div className="container-x relative z-10 w-full pt-[88px] pb-20 text-center">
        <Reveal>
          <h1 className="display font-bold text-4xl sm:text-5xl md:text-6xl max-w-4xl mx-auto leading-[1.06]">
            We build design solutions tailored to your users.
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn btn-solid bg-white !text-ink hover:!bg-white/85">
              Let&apos;s talk <span aria-hidden>→</span>
            </Link>
            <a
              href="mailto:info@breaktimeboys.com"
              className="btn btn-outline on-dark text-white"
            >
              Send a message
            </a>
          </div>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-10 text-[0.7rem] tracking-[0.22em] uppercase text-white/55">
            Bonney Lake · Digital Creative Studio
          </p>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/60">
        <span className="text-[0.65rem] tracking-[0.2em] uppercase">scroll</span>
        <span className="block w-px h-10 bg-white/30" />
      </div>
    </section>
  );
}
