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
    q: "Analyze and optimize with data at your fingertip",
    a: "Dashboards, testing and clear reporting keep you in control — every decision backed by evidence, every release better than the last.",
  },
];

export default function AwardAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <section className="container-x py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
        <Reveal className="order-2 lg:order-1">
          <div className="media-ph aspect-[4/5] w-full rounded-sm" />
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={100}>
          <h2 className="display font-bold text-2xl sm:text-3xl md:text-4xl leading-[1.12] lg:text-right">
            We are an award-winning digital creative studio from Bonney Lake, in
            the business of creating unforgettable interactive experiences.
          </h2>

          <div className="mt-10 border-t border-[#ececec]">
            {ITEMS.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="border-b border-[#ececec]">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-sm sm:text-base">
                      {item.q}
                    </span>
                    <span
                      className={`relative shrink-0 w-4 h-4 transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <span className="absolute top-1/2 left-0 w-4 h-[1.5px] bg-ink -translate-y-1/2" />
                      <span className="absolute left-1/2 top-0 h-4 w-[1.5px] bg-ink -translate-x-1/2" />
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
                      <p className="muted text-sm leading-relaxed pb-5 max-w-md lg:ml-auto lg:text-right">
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
