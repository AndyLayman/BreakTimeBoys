import Reveal from "@/components/Reveal";

export default function ImagePair() {
  return (
    <section className="bd-b">
      <div className="container-x py-16 md:py-24 grid sm:grid-cols-2 gap-8 md:gap-12">
        <Reveal>
          <figure className="relative bd hard media-ph aspect-[4/5]">
            <figcaption className="absolute bottom-0 left-0 right-0 flex justify-between p-4 label text-paper">
              <span>Fig.02</span>
              <span>Portrait</span>
            </figcaption>
          </figure>
        </Reveal>
        <Reveal delay={120}>
          <figure className="relative bd hard media-ph aspect-[4/5] sm:mt-16">
            <figcaption className="absolute bottom-0 left-0 right-0 flex justify-between p-4 label text-paper">
              <span>Fig.03</span>
              <span>On Location</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
