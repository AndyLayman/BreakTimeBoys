import Reveal from "@/components/Reveal";
import SmartImg from "@/components/SmartImg";
import { TEXTURE } from "@/lib/media";

export default function RevenueSection() {
  return (
    <section className="relative bd-b bg-ink text-paper overflow-hidden">
      <SmartImg
        src={TEXTURE.src}
        fallback={TEXTURE.fallback}
        alt={TEXTURE.alt}
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-ink/40" />
      <div className="container-x relative py-24 md:py-40 text-center">
        <Reveal>
          <p className="label text-accent mb-6">(The Point)</p>
          <h2 className="huge text-[clamp(2.5rem,12vw,11rem)]">
            Increase your <span className="text-accent">revenue.</span>
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
