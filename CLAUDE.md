# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev      # dev server at http://localhost:3000 (Turbopack)
pnpm build    # production build
pnpm lint     # ESLint
```

## Architecture

Single-page marketing site for **EL GRAN TACO**, a fictional modern Mexican taqueria. Built with Next.js 16 (App Router), Tailwind CSS v4, and Motion (`motion/react`).

**Page composition** — `app/page.tsx` assembles all sections in order:
`SmoothScroll` → `Navbar` → `Hero` → `Marquee` → `TacoAssembly` → `TacosSection` → `IngredientsParallax` → `LocalesSection` → `Testimonials` → `FinalCTA` → `Footer`

Every component in `components/` is a `'use client'` React component. There are no server components beyond the root layout and page.

**Animation system** — all motion uses `motion/react` (Motion library, not Framer Motion). Scroll-driven animations use `useScroll` + `useTransform`. All animated components check `useReducedMotion()` and skip transforms when true. Lenis smooth scroll runs globally via `<SmoothScroll />` (mounts in layout, renders nothing).

**Scroll-pinned sections** — `Hero` (200vh) and `TacoAssembly` (320vh) use the `sticky top-0 h-screen` pattern: a tall scroll container pins a viewport-height inner div, and `scrollYProgress` drives all transforms within it.

**Design tokens** — four brand colors defined as CSS variables in `app/globals.css`:
- `--cream` `#f1ead0` — page background
- `--ink` `#1a1310` — dark text/dark sections
- `--red` `#ff3131` — primary accent (CTAs, logo)
- `--pink` `#ff8e8e` — secondary accent / glows

Use Tailwind utility classes `bg-cream`, `text-ink`, `bg-red`, `bg-pink` (mapped via `@theme inline` in globals.css). Do not use hex values directly.

**Typography** — three Google Fonts loaded in `app/layout.tsx`:
- `--font-sans` → Outfit (body text, `font-sans`)
- `--font-display` → Lilita One (headlines, `font-display` utility class)
- `--font-mono` → Geist Mono

**`SplitText` component** — reusable animated headline component (`components/split-text.tsx`). Splits text into chars or words and stagger-animates them in. Supports `inView` (triggers on scroll) vs mount-triggered. Always wrap animated headlines in this component.

**Images** — all assets live in `public/`. `next.config.mjs` sets `images.unoptimized: true`. TypeScript build errors are ignored (`ignoreBuildErrors: true`) — type-check locally but don't rely on the build to catch type errors.

**`lib/utils.ts`** — exports only `cn()` (clsx + tailwind-merge).
