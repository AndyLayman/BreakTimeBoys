// Centralized placeholder media.
// To use real assets later: drop files in /public/images and point `src` at them,
// or just swap the Unsplash photo IDs / Picsum seeds below.

const unsplash = (id: string, w: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

// Lorem Picsum is purpose-built for placeholders and is effectively always up.
// Used as an automatic onError fallback so a broken image can never appear.
export const picsum = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export type Media = { src: string; fallback: string; alt: string };

export const HERO: Media = {
  src: unsplash("1522071820081-009f0129c71c", 1600),
  fallback: picsum("btb-hero", 1600, 900),
  alt: "Creative team collaborating in a studio",
};

export const STUDIO: Media = {
  src: unsplash("1517048676732-d65bc937f952", 1200),
  fallback: picsum("btb-studio", 1200, 750),
  alt: "The Break Time Boys studio at work",
};

export const PORTRAIT_1: Media = {
  src: unsplash("1506794778202-cad84cf45f1d", 900),
  fallback: picsum("btb-p1", 900, 1125),
  alt: "Studio portrait",
};

export const PORTRAIT_2: Media = {
  src: unsplash("1494790108377-be9c29b29330", 900),
  fallback: picsum("btb-p2", 900, 1125),
  alt: "Studio portrait",
};

export const PROJECTS: Media[] = [
  { src: unsplash("1558655146-9f40138edfeb", 800), fallback: picsum("btb-pr1", 800, 600), alt: "Brand identity project" },
  { src: unsplash("1561070791-2526d30994b5", 800), fallback: picsum("btb-pr2", 800, 600), alt: "Art direction project" },
  { src: unsplash("1487058792275-0ad4aaf24ca7", 800), fallback: picsum("btb-pr3", 800, 600), alt: "Web design project" },
  { src: unsplash("1486312338219-ce68d2c6f44d", 800), fallback: picsum("btb-pr4", 800, 600), alt: "Product design project" },
  { src: unsplash("1460925895917-afdab827c52f", 800), fallback: picsum("btb-pr5", 800, 600), alt: "Strategy project" },
  { src: unsplash("1550745165-9bc0b252726f", 800), fallback: picsum("btb-pr6", 800, 600), alt: "Campaign project" },
  { src: unsplash("1526374965328-7f61d4dc18c5", 800), fallback: picsum("btb-pr7", 800, 600), alt: "Development project" },
  { src: unsplash("1499951360447-b19be8fe80f5", 800), fallback: picsum("btb-pr8", 800, 600), alt: "Identity project" },
];

export const TEXTURE: Media = {
  src: unsplash("1620641788421-7a1c342ea42e", 1600),
  fallback: picsum("btb-texture", 1600, 900),
  alt: "",
};

// Drop a file at this path (public/videos/hero.mp4) to auto-upgrade the hero to video.
export const HERO_VIDEO = "/videos/hero.mp4";
