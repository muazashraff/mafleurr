# Mafleurr — Pitch Site

A single-page, luxury pitch/concept website for **Mafleurr**, a bespoke
luxury florist based in Bolton, Greater Manchester. Built to win the
client's business — all imagery is Unsplash placeholder photography,
clearly marked in code for later replacement with the client's own
photography.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://motion.dev) for animation
- Deployed via [Vercel](https://vercel.com), version-controlled via GitHub

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

```bash
npm run build   # production build
npm run lint    # eslint
```

## Project structure

```
src/
  app/
    layout.tsx       # fonts (Playfair Display / Cormorant Garamond / Lora), metadata
    page.tsx          # assembles all homepage sections
    globals.css       # design tokens: colours, fonts, reduced-motion handling
  components/         # one component per homepage section (Hero, About, Portfolio,
                       # Quiz, Events, Testimonials, Contact, Footer, Navigation…)
  data/                # editable content, separate from component logic
    site.ts            # brand info, nav links, Instagram/WhatsApp links
    portfolio.ts        # portfolio categories + gallery items
    quiz.ts              # quiz questions, bouquet catalogue, matching logic
    testimonials.ts       # testimonial carousel content
    events.ts               # Mafleurr Events feature cards + gallery
```

Content (portfolio items, quiz questions/bouquets, testimonials, events
copy) lives entirely in `src/data/*.ts` so it can be edited without
touching component code.

## Swapping in real photography

Every image instance is preceded by a code comment:

```tsx
{/* PLACEHOLDER: swap for client photo — bridal bouquet */}
```

To replace an image, update the corresponding `image` value in the
relevant `src/data/*.ts` file (or the inline `unsplash(...)` call in
`Hero.tsx` / `About.tsx`) with a path to the client's own asset.

## Swapping in the real logo

`src/components/Logo.tsx` currently renders a styled text placeholder
for the Mafleurr wordmark. Once the client's logo file is available,
pass it as `imageSrc`, e.g.:

```tsx
<Logo imageSrc="/logo.svg" />
```

No other changes are required at call sites.

## Deployment

This is a standard Next.js App Router project — push to GitHub and
import the repository on [Vercel](https://vercel.com/new); no
environment variables are required for the pitch build.
