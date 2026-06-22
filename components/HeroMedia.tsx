"use client";

import { useState } from "react";
import SmartImg from "./SmartImg";
import { HERO, HERO_VIDEO } from "@/lib/media";

export default function HeroMedia() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative bd hard overflow-hidden aspect-[16/10] md:aspect-[21/9]">
      <SmartImg
        src={HERO.src}
        fallback={HERO.fallback}
        alt={HERO.alt}
        loading="eager"
        className={`absolute inset-0 w-full h-full object-cover kenburns transition-opacity duration-700 ${
          playing ? "opacity-0" : "opacity-100"
        }`}
      />
      <video
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          playing ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onPlaying={() => setPlaying(true)}
        onError={() => setPlaying(false)}
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 55%, rgba(10,10,10,0.6))",
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-4 label text-paper">
        <span>Fig.00 — Showreel</span>
        <span className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-accent" />
          {playing ? "Now playing" : "Studio"}
        </span>
      </div>
    </div>
  );
}
