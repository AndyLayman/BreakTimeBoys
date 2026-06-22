import Reveal from "@/components/Reveal";

export default function ImagePair() {
  return (
    <section className="container-x pb-24 md:pb-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        <Reveal>
          <div className="media-ph aspect-[4/5] w-full" />
        </Reveal>
        <Reveal delay={120}>
          <div className="media-ph aspect-[4/5] w-full sm:mt-16" />
        </Reveal>
      </div>
    </section>
  );
}
