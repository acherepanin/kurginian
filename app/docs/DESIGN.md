# Design

## Overview

Personal link-in-bio (taplink) for an obstetrician-gynecologist. Mobile-first, single long scroll, RU/EN. Direction: "warm evening consulting room of a private clinic", deep ink-indigo carrying premium and trust, warm brass-gold for human warmth and detail, clean near-white reading surfaces. Warmth and discretion (appropriate to sensitive women's health) come from color, type and photography, never from clinical coldness or fearmongering. Premium through restraint, material, and motion, not ornament. The primary action (contact / request an appointment) is always reachable.

## Color

OKLCH. Strategy: Committed (deep indigo carries hero + CTAs; gold is the accent).

```css
--bg:            oklch(1 0 0);            /* pure white reading surface */
--surface:       oklch(0.978 0.005 80);   /* warm-leaning panel, barely off-white */
--surface-2:     oklch(0.955 0.008 80);   /* second panel step */
--ink:           oklch(0.23 0.014 70);    /* body text, warm near-black, >=12:1 on bg */
--muted:         oklch(0.46 0.018 70);    /* secondary text, ~5:1 on bg */
--line:          oklch(0.90 0.008 80);    /* hairline borders */

--primary:       oklch(0.40 0.115 264);   /* deep ink-indigo */
--primary-deep:  oklch(0.29 0.095 265);   /* drenched hero / footer bg */
--primary-soft:  oklch(0.95 0.02 264);    /* indigo wash tint */
--on-primary:    oklch(0.985 0.004 80);   /* text on indigo */

--accent:        oklch(0.72 0.13 74);     /* brass / amber gold */
--accent-deep:   oklch(0.55 0.11 70);     /* gold for text use on light bg (~4.6:1) */
--accent-soft:   oklch(0.93 0.04 78);     /* warm gold wash */

--focus:         oklch(0.55 0.14 264);
```

Contrast: ink/bg >=12:1, muted/bg ~5:1, on-primary/primary >=6:1, accent-deep/bg ~4.6:1. Gold fills carry dark ink only when pale (`--accent-soft`); the indigo CTA uses `--on-primary` white text. Dark sections (hero, footer) use `--primary-deep` with `--on-primary` text and gold accents.

## Typography

- **Display:** `Spectral` (refined serif, full Cyrillic). Weights 400/500/600. Used for headings, doctor name, prices and timeline numerals.
- **Body / UI:** `Golos Text` (humanist sans designed for Russian, full Cyrillic + Latin). Weights 400/500/600.
- Contrast axis: serif display + sans body. No third family.
- Scale: fluid `clamp()`, ratio ~1.25. Hero display max <= 5.5rem. Display letter-spacing -0.02em floor; never below -0.04em.
- `text-wrap: balance` on h1-h3, `pretty` on prose. Body measure 60-70ch.

## Signature

The brand's signature form is an **arch** (a portal / niche). The hero portrait is framed as a top-arched shape (`--arch` token) with an offset gold hairline frame behind it, evoking classical portraiture and a calm, protective feel. The abstract portrait fallback inherits the same arch. This is the page's distinctive, non-generic move; keep it consistent if the motif is reused.

## Layout

- Single column, mobile-first; content max-width ~ 73rem, prose ~ 40rem.
- No scroll-hint microcopy ("scroll down", "swipe") — the affordances (arrows, dots, layout) carry it.
- Fluid vertical rhythm with `clamp()`; generous section separation, tight intra-group spacing.
- Sticky bottom "Book appointment" bar on mobile; inline CTA blocks on desktop.
- One horizontal slide track (services or approach) for the "beautiful slides" requirement, scroll-snap + drag, keyboard accessible.
- Radii: 12-16px on cards/inputs, pill on tags/buttons. No 24px+ on cards.
- Semantic z-index scale: base < sticky-cta < lang-menu < modal.

## Components

- **LangToggle:** RU/EN switch, persisted, top-right, keyboard-operable.
- **Hero:** drenched indigo, arched portrait, name + specialty, trust line, primary + secondary CTA.
- **Services:** horizontal slide track of named focus areas (gynecological visit, pregnancy management, ultrasound, planning, infections, menopause).
- **Prices:** clean price list (service + description + indicative price). Spectral numerals for the amounts. Never invent real prices — mark as indicative.
- **About:** prose with credentials/career timeline (education + experience) plus a certificates block.
- **Reviews:** patient testimonial cards with star rating. Placeholder samples only; never present fabricated reviews as real.
- **FAQ:** native `<details>` accordion.
- **Contact / Booking:** primary CTA to a messenger, WhatsApp + phone + email, city.

## Motion

- `framer-motion` for staggered reveals (each section reveal fits its content; not one uniform fade), `lenis` for smooth scroll.
- Ease-out exponential curves; no bounce/elastic. Durations 200-600ms.
- Reveals enhance already-visible content (no visibility gated on JS).
- Full `prefers-reduced-motion` fallback: crossfade / instant, smooth scroll disabled.

## Tech

React + Vite + TypeScript. `framer-motion`, `lucide-react`, `react-i18next` + `i18next`, `lenis`. CSS via a single tokens stylesheet + CSS Modules per component.
