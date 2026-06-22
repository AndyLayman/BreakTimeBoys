import Reveal from "@/components/Reveal";
import SmartImg from "@/components/SmartImg";
import { PEOPLE_1, PEOPLE_2 } from "@/lib/media";

export default function ImagePair() {
  return (
    <section className="bd-b">
      <div className="container-x py-16 md:py-24 grid sm:grid-cols-2 gap-8 md:gap-12">
        <Reveal>
          <figure className="relative bd hard overflow-hidden media-frame img-zoom aspect-[4/5]">
            <SmartImg
              src={PEOPLE_1.src}
              fallback={PEOPLE_1.fallback}
              alt={PEOPLE_1.alt}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 flex justify-between p-4 label text-paper z-10">
              <span>Fig.02</span>
              <span>At Work</span>
            </figcaption>
          </figure>
        </Reveal>
        <Reveal delay={120}>
          <figure className="relative bd hard overflow-hidden media-frame img-zoom aspect-[4/5] sm:mt-16">
            <SmartImg
              src={PEOPLE_2.src}
              fallback={PEOPLE_2.fallback}
              alt={PEOPLE_2.alt}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 flex justify-between p-4 label text-paper z-10">
              <span>Fig.03</span>
              <span>The Crew</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
