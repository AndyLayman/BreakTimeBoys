"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

const ITEMS = [
  {
    q: "Understand the whole customer story",
    a: "We map every touchpoint — from first click to repeat purchase — so we can design for the moments that actually shape how people feel about your brand.",
  },
  {
    q: "Understand your competitive advantage",
    a: "We dig into your market and your rivals to find the angle only you can own, then build the brand and product story around it.",
  },
  {
    q: "Analyze and optimize with data at hand",
    a: "Dashboards, testing and clear reporting keep you in control — every decision backed by evidence, every release better than the last.",
  },
];

export default function AwardAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bd-b">
      <div className="container-x py-16 md:py-24 grid lg:grid-cols-2 gap-12 lg:gap-20">
        <Reveal>
          <p className="label text-accent mb-4">(Studio)</p>
          <h2 className="display text-3xl md:text-5xl">
            We are an award-winning digital creative studio from Bonney Lake,
            building unforgettable interactive experiences.
          </h2>
          <figure className="relative mt-10 bd hard media-ph aspect-[16/10]">
            <figcaption className="absolute bottom-0 left-0 right-0 flex justify-between p-4 label text-paper">
              <span>Fig.01</span>
              <span>The Studio</span>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={100}>
          <div className="bd-t">
            {ITEMS.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="bd-b">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="label text-accent">[0{i + 1}]</span>
                      <span className="display text-lg md:text-2xl">
                        {item.q}
                      </span>
                    </span>
                    <span className="mono text-2xl leading-none shrink-0">
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="mono text-sm leading-relaxed pb-6 max-w-md opacity-80">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
