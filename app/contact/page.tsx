import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Break Time Boys. Tell us about your project — logos, branding, websites and tailor-made digital solutions.",
};

const DETAILS = [
  { n: "01", label: "Email", value: "info@breaktimeboys.com", href: "mailto:info@breaktimeboys.com" },
  { n: "02", label: "Phone", value: "(253) 548-7169", href: "tel:+12535487169" },
  { n: "03", label: "Studio", value: "Bonney Lake, WA", href: undefined },
];

export default function ContactPage() {
  return (
    <section className="bd-b">
      <div className="container-x py-16 md:py-24">
        <div className="flex justify-between gap-4 label pb-8">
          <span>[ Contact ]</span>
          <span>Say sallut</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <Reveal>
              <h1 className="huge text-[clamp(2.6rem,9vw,7rem)]">
                Let&apos;s build something <span className="text-accent">worth</span> remembering.
              </h1>
              <p className="mono text-sm leading-relaxed mt-8 max-w-md">
                // Looking for collaboration on your next project? Tell us what
                you have in mind and we&apos;ll get back to you. Don&apos;t be
                shy.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-12 bd-t">
                {DETAILS.map((d) => (
                  <div key={d.label} className="bd-b py-5 flex items-center justify-between gap-4">
                    <span className="flex items-baseline gap-4">
                      <span className="label text-accent">[{d.n}]</span>
                      <span className="label">{d.label}</span>
                    </span>
                    {d.href ? (
                      <a href={d.href} className="display text-lg md:text-xl hover:text-accent transition-colors">
                        {d.value}
                      </a>
                    ) : (
                      <span className="display text-lg md:text-xl">{d.value}</span>
                    )}
                  </div>
                ))}
                <div className="bd-b py-5 flex items-center justify-between gap-4">
                  <span className="flex items-baseline gap-4">
                    <span className="label text-accent">[04]</span>
                    <span className="label">Social</span>
                  </span>
                  <span className="flex gap-5 display text-lg md:text-xl">
                    <a href="https://www.facebook.com/breaktimeboys/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Fb.</a>
                    <a href="https://www.instagram.com/breaktimeboysstudio/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Ig.</a>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
