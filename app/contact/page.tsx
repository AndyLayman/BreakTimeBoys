import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Break Time Boys. Tell us about your project — logos, branding, websites and tailor-made digital solutions.",
};

const DETAILS = [
  { label: "Email", value: "info@breaktimeboys.com", href: "mailto:info@breaktimeboys.com" },
  { label: "Phone", value: "(253) 548-7169", href: "tel:+12535487169" },
  { label: "Studio", value: "Bonney Lake, WA", href: undefined },
];

export default function ContactPage() {
  return (
    <section className="container-x pt-[140px] md:pt-[170px] pb-28 md:pb-40">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <p className="eyebrow muted">Contact</p>
          <h1 className="display font-bold text-4xl md:text-6xl mt-3 leading-[1.05]">
            Let&apos;s build something worth remembering.
          </h1>
          <p className="muted mt-6 max-w-md text-sm leading-relaxed">
            Looking for collaboration on your next project? Tell us what you have
            in mind and we&apos;ll get back to you. Don&apos;t be shy — say sallut.
          </p>

          <div className="mt-12 space-y-8">
            {DETAILS.map((d) => (
              <div key={d.label}>
                <p className="eyebrow muted mb-1">{d.label}</p>
                {d.href ? (
                  <a href={d.href} className="text-lg hover:underline">
                    {d.value}
                  </a>
                ) : (
                  <p className="text-lg">{d.value}</p>
                )}
              </div>
            ))}
            <div>
              <p className="eyebrow muted mb-1">Social</p>
              <div className="flex gap-6 text-lg">
                <a
                  href="https://www.facebook.com/breaktimeboys/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/breaktimeboysstudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
