# AGENTS.md

Guidance for AI agents working in this repository.

## What this is

A personal link-in-bio (taplink) website for an obstetrician-gynecologist (Kristina Kurginyan, Moscow). Single-page, long-scroll, mobile-first, bilingual (RU/EN). The primary goal of the page is to convert a profile visit into an appointment request / contact via a messenger. It is a **static frontend**: no backend, no database.

> Specialty note: the site is built as an obstetrician-gynecologist per the client's instruction. This differs from the specialty in `app/docs/RESUME.md` (pediatrician), so the resume's education/experience does not apply. The `about` (education/experience/certificates), `reviews`, and `prices` sections currently contain clearly-marked placeholders. **Never fabricate real credentials, certificates, patient reviews, or prices** — they must be filled with real data by the client.

## Project layout

```
app/front/        # the entire application (React 19 + Vite + TypeScript)
  src/
    components/   # UI sections (Hero, Services, Prices, About, Certificates, Reviews, ...) + shared (Slider, Lightbox, Avatar, TruncatedText)
    content/      # all copy: types.ts (schema) + ru.ts + en.ts
    hooks/        # useContent, useSmoothScroll
    styles/       # sections.css (component styles)
    index.css     # design tokens (OKLCH) + globals
    i18n.ts       # i18next setup, persists language in localStorage
app/docs/         # documentation (OVERVIEW, DATA, PRODUCT, DESIGN)
```

## Commands (run inside `app/front`)

```bash
npm install
npm run dev      # dev server on http://localhost:5173
npm run build    # tsc -b && vite build  -> must pass before shipping
npm run lint     # oxlint
```

Always run `npm run build` after changes; it type-checks and bundles.

## Conventions (follow these)

- **Never hardcode user-facing strings in components.** All copy lives in `src/content/ru.ts` and `src/content/en.ts`, typed by `SiteContent` in `types.ts`. Access via the `useContent()` hook.
- **Keep RU and EN in parity.** Both files implement the same `SiteContent` type; add a field to `types.ts` and you must fill it in both languages (TypeScript enforces this).
- **Colors in OKLCH only**, defined as CSS custom properties in `src/index.css`. Do not introduce hex colors or new ad-hoc color values in component styles; reuse the tokens (`--primary`, `--accent`, `--ink`, `--muted`, `--surface`, ...).
- **Styles** go in `src/styles/sections.css` using the existing class naming. The design system is documented in `app/docs/DESIGN.md`.
- **Motion** uses `framer-motion` (reveal/`Reveal.tsx`, hero) and `lenis` (smooth scroll). Every animation must have a `prefers-reduced-motion` fallback; `Reveal` and the Lenis hook already handle this. Do not gate content visibility solely on scroll reveals.
- **Icons**: use `lucide-react` only. Do not add a second icon set.
- **Accessibility**: maintain WCAG AA contrast, visible focus, keyboard operability, tap targets >=44px.

## Editing content

See `app/docs/DATA.md` for the full content schema. Common edits: focus areas in `services.items`, prices in `prices.items`, education/experience in `about.credentials` and `about.certificates`, patient reviews in `reviews.items`, questions in `faq.items`, contacts in `contact.channels`. Edit both language files.

## Placeholders to be aware of

- `public/portrait.png` is an AI-generated placeholder portrait, not a real photo of the person. If it is missing or fails to load, `Portrait.tsx` renders an abstract monogram fallback (no broken image).
- The "Book an appointment" CTA defaults to the WhatsApp channel; a real booking system is not wired in.
- Phone (`+7 999 379-85-65`), WhatsApp, and email (`kriskurginyan@bk.ru`) are the person's real contacts from the resume; the city is Moscow (no street address). The recommender's contact is intentionally NOT published (privacy).

Do not present the portrait as a real photo without confirming with the user.

## Before finishing a task

1. `npm run build` passes (no TS errors).
2. RU and EN both updated when touching content.
3. New colors/spacing reuse existing tokens.
4. Reduced-motion path still works.
