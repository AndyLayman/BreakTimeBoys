# Break Time Boys

The Break Time Boys studio site, rebuilt as a [Next.js](https://nextjs.org) (App Router) project with TypeScript and Tailwind CSS, ready to deploy on [Vercel](https://vercel.com).

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- Contact form via **Formspree** (no backend to maintain)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm start       # serve the production build
```

## Pages

| Route        | Description                                              |
| ------------ | -------------------------------------------------------- |
| `/`          | Home — hero, services, accordion, numbered blocks, portfolio |
| `/logo-work` | Logo Work — scattered brand-mark showcase                |
| `/contact`   | Contact — details + Formspree-powered form               |

The full-screen menu, footer ("Don't be shy. Say sallut."), and cookie banner are shared across every page.

## Contact form (Formspree)

1. Create a free form at [formspree.io](https://formspree.io) using `info@breaktimeboys.com`.
2. Copy the form ID from the endpoint URL (`https://formspree.io/f/XXXXXXXX` → `XXXXXXXX`).
3. Set it as an environment variable:
   - Locally: copy `.env.example` to `.env.local` and fill in `NEXT_PUBLIC_FORMSPREE_ID`.
   - On Vercel: **Project Settings → Environment Variables → `NEXT_PUBLIC_FORMSPREE_ID`**.

Until the variable is set, the form shows a friendly notice instead of submitting.

## Replacing placeholder media

To keep the build self-contained, photos render as styled gradient placeholders and
client logos as clean vector/typographic stand-ins. To use the real assets:

- **Photos** (hero, feature images, portfolio): add files to `public/images/` and swap
  the placeholder `<div className="media-ph …" />` blocks for `<img src="/images/…" />`
  (the hero already has a commented-out example).
- **Client logos**: add files to `public/images/logos/` and replace the placeholder marks
  in `app/logo-work/page.tsx` with `<img src="/images/logos/blippi.png" alt="Blippi" />`.

## Typography

Uses a system grotesque stack (`Helvetica Neue, Arial, system-ui`) for a clean,
Helvetica-like feel with zero external font requests. Swap in a custom/Google font via
`next/font` in `app/layout.tsx` if desired.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) — the framework auto-detects as Next.js.
3. Add the `NEXT_PUBLIC_FORMSPREE_ID` environment variable.
4. Deploy. Add your custom domain (`breaktimeboys.com`) under **Project → Domains**.
