"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

const PROJECTS = [
  { title: "Imperiya Barbell", tag: "Brand Identity" },
  { title: "Respect My Region", tag: "Logo & Web" },
  { title: "Local Legend", tag: "Logo Design" },
  { title: "Rock Fest", tag: "Event Branding" },
  { title: "VIP Security", tag: "Logo Design" },
  { title: "Distracted", tag: "Brand Identity" },
  { title: "Blippi", tag: "Logo Design" },
  { title: "Hardpoints", tag: "Brand & Web" },
];

export default function PortfolioStrip() {
  const [count, setCount] = useState(4);
  const visible = PROJECTS.slice(0, count);
  const allShown = count >= PROJECTS.length;

  return (
    <section className="container-x pb-24 md:pb-32">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {visible.map((p, i) => (
          <Reveal key={p.title} delay={(i % 4) * 80}>
            <a href="#" className="group block">
              <div className="media-ph aspect-[4/3] w-full">
                <div className="absolute inset-0 z-10 flex items-end p-4">
                  <div className="translate-y-1 transition-transform duration-300 group-hover:translate-y-0">
                    <p className="text-white font-semibold text-sm">{p.title}</p>
                    <p className="text-white/60 text-xs">{p.tag}</p>
                  </div>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 flex items-center justify-center gap-4">
        {!allShown && (
          <button
            onClick={() => setCount(PROJECTS.length)}
            className="btn btn-outline text-ink"
          >
            Load More
          </button>
        )}
        <a
          href="https://www.instagram.com/breaktimeboysstudio/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-solid"
        >
          Follow
        </a>
      </div>
    </section>
  );
}
