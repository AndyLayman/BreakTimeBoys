import Reveal from "@/components/Reveal";

export default function RevenueSection() {
  return (
    <section className="bd-b bg-ink text-paper">
      <div className="container-x py-24 md:py-40 text-center">
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
