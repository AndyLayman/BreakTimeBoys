import Marquee from "./Marquee";

const TICKER = [
  "Branding",
  "Logo Design",
  "Web Design",
  "UX / UI",
  "eCommerce",
  "Art Direction",
  "Strategy",
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-paper">
      <Marquee
        items={TICKER}
        className="border-b border-white/20 py-3 text-paper"
      />

      <div className="container-x py-16 md:py-24">
        <p className="mono text-sm text-paper/50">
          // Looking for collaboration on your next project? Don&apos;t hesitate
          to say hello.
        </p>

        <h2 className="huge text-[clamp(2.5rem,11vw,9rem)] mt-6">
          Don&apos;t be shy.
          <br />
          Say <span className="text-accent">sallut.</span>
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-end">
          <a
            href="mailto:info@breaktimeboys.com"
            className="btn btn-accent w-fit"
          >
            info@breaktimeboys.com →
          </a>
          <div className="md:justify-self-end flex gap-6 label text-paper/70">
            <a
              href="https://www.facebook.com/breaktimeboys/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Fb.
            </a>
            <a
              href="https://www.instagram.com/breaktimeboysstudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Ig.
            </a>
            <a href="tel:+12535487169" className="hover:text-accent transition-colors">
              Tel.
            </a>
          </div>
        </div>
      </div>

      <div className="container-x border-t border-white/20 py-5 flex flex-wrap justify-between gap-3 label text-paper/50">
        <span>© Breaktimeboys.com {year}</span>
        <span className="hidden md:block">47.85°N 122.18°W</span>
        <span>Digital Creative Studio</span>
      </div>
    </footer>
  );
}
