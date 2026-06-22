"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

const PROJECTS = [
  { title: "Imperiya Barbell", tag: "Brand Identity", year: "’23" },
  { title: "Respect My Region", tag: "Logo & Web", year: "’22" },
  { title: "Local Legend", tag: "Logo Design", year: "’23" },
  { title: "Rock Fest", tag: "Event Branding", year: "’21" },
  { title: "VIP Security", tag: "Logo Design", year: "’22" },
  { title: "Distracted", tag: "Brand Identity", year: "’23" },
  { title: "Blippi", tag: "Logo Design", year: "’20" },
  { title: "Hardpoints", tag: "Brand & Web", year: "’24" },
];

export default function PortfolioStrip() {
  const [count, setCount] = useState(4);
  const visible = PROJECTS.slice(0, count);
  const allShown = count >= PROJECTS.length;

  return (
    <section className="bd-b">
      <div className="container-x py-12 md:py-16 flex items-end justify-between gap-6">
        <Reveal>
          <p className="label text-accent mb-3">(Selected Work)</p>
          <h2 className="display text-3xl md:text-5xl">Recent projects.</h2>
        </Reveal>
        <Reveal delay={80}>
          <span className="label hidden md:block">
            [ {String(PROJECTS.length).padStart(2, "0")} Total ]
          </span>
        </Reveal>
      </div>

      <div className="container-x">
        <div className="grid grid-cols-2 lg:grid-cols-4 bd-t bd-l">
          {visible.map((p, i) => (
            <Reveal key={p.title} className="bd-r bd-b" delay={(i % 4) * 60}>
              <a href="#" className="group block cell-invert h-full">
                <div className="relative media-ph aspect-[4/3]">
                  <span className="absolute top-3 left-3 label text-paper z-10">
                    [{String(i + 1).padStart(2, "0")}]
                  </span>
                </div>
                <div className="p-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="display text-sm md:text-base">{p.title}</p>
                    <p className="label opacity-60">{p.tag}</p>
                  </div>
                  <span className="label opacity-60 shrink-0">{p.year}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="container-x py-10 flex items-center justify-center gap-4">
        {!allShown && (
          <button onClick={() => setCount(PROJECTS.length)} className="btn">
            Load More +
          </button>
        )}
        <a
          href="https://www.instagram.com/breaktimeboysstudio/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ink"
        >
          Follow →
        </a>
      </div>
    </section>
  );
}
