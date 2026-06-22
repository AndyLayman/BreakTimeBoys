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

// Hero — design-forward / editorial: a creative desk mid-project.
export const HERO: Media = {
  src: unsplash("1499951360447-b19be8fe80f5", 1600),
  fallback: picsum("btb-hero", 1600, 900),
  alt: "Inside the studio — design work in progress",
};

export const STUDIO: Media = {
  src: unsplash("1517048676732-d65bc937f952", 1200),
  fallback: picsum("btb-studio", 1200, 750),
  alt: "The Break Time Boys studio at work",
};

// "Cool people" shots (replacing the old static portraits).
export const PEOPLE_1: Media = {
  src: unsplash("1519085360753-af0119f7cbe7", 900),
  fallback: picsum("btb-people1", 900, 1125),
  alt: "Creative at work, late session",
};

export const PEOPLE_2: Media = {
  src: unsplash("1522202176988-66273c2fd55f", 900),
  fallback: picsum("btb-people2", 900, 1125),
  alt: "The crew, mid-project",
};

// Portfolio — design-forward / editorial mix.
export const PROJECTS: Media[] = [
  { src: unsplash("1558655146-9f40138edfeb", 800), fallback: picsum("btb-pr1", 800, 600), alt: "Brand identity project" },
  { src: unsplash("1561070791-2526d30994b5", 800), fallback: picsum("btb-pr2", 800, 600), alt: "Art direction project" },
  { src: unsplash("1493612276216-ee3925520721", 800), fallback: picsum("btb-pr3", 800, 600), alt: "Campaign project" },
  { src: unsplash("1550745165-9bc0b252726f", 800), fallback: picsum("btb-pr4", 800, 600), alt: "Product design project" },
  { src: unsplash("1487058792275-0ad4aaf24ca7", 800), fallback: picsum("btb-pr5", 800, 600), alt: "Web design project" },
  { src: unsplash("1526374965328-7f61d4dc18c5", 800), fallback: picsum("btb-pr6", 800, 600), alt: "Development project" },
  { src: unsplash("1518770660439-4636190af475", 800), fallback: picsum("btb-pr7", 800, 600), alt: "Systems project" },
  { src: unsplash("1531297484001-80022131f5a1", 800), fallback: picsum("btb-pr8", 800, 600), alt: "Product launch project" },
];

export const TEXTURE: Media = {
  src: unsplash("1620641788421-7a1c342ea42e", 1600),
  fallback: picsum("btb-texture", 1600, 900),
  alt: "",
};

// Drop a file at this path (public/videos/hero.mp4) to auto-upgrade the hero to video.
export const HERO_VIDEO = "/videos/hero.mp4";
