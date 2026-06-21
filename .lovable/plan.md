## What I've reviewed

**Website Base zip** — a Claude-Code starter (not a runnable framework). Its useful contributions are conventions, not code:
- Fluid em-based viewport scaling (`--size-container-ideal`, `--size-font`, em everywhere except 1px borders / letter-spacing / line-height ratios)
- Design tokens as CSS custom properties (`--color-*`, `--font-*`, `--spacing-*`, `--radius-*`)
- Desktop-first responsive with `max-width` breakpoints (991 / 767 / 479)
- Section pattern: full-bleed outer + `var(--size-container)` inner, `margin-inline:auto`
- Optional GSAP via CDN for soft scroll-triggered reveals, respects `prefers-reduced-motion`
- Semantic HTML, single H1, alt/width/height on every img

**Figma "Home 7"** (node 9004:388, 1280px frame) — a healthcare clinic landing page with these sections, top to bottom:
1. Sticky **Navbar** (logo, 4 menu items, dark pill "Book Appointment" button)
2. **Hero** — blue radial-gradient panel, H1 "Healthcare You Can Trust, Close to Home", subhead, two pill buttons (glass + dark), 5 overlapping doctor portraits in an arc, 4.9/5 star rating
3. **Why Patients Choose Us** — eyebrow + H2 + dark CTA, then 4-icon feature grid (Experienced, Convenient Scheduling, Modern, Patient-First)
4. **Meet Your Doctors** — 3 doctor cards (photo, name, specialty, arrow chip) + prev/next
5. **Comprehensive Care Under One Roof** — alternating image/text service rows (General Medicine, Family Care, Pediatrics, Women's Health, Vaccinations)
6. **Testimonials** — quote card with patient photo, name, role
7. **Ready to Schedule Your Visit?** — pale blue CTA panel with group-of-doctors photo, headline, two buttons
8. **Footer** — newsletter signup + link columns on dark background

## Reconciling stacks

This Lovable project is **TanStack Start + Tailwind v4 + shadcn**, not vanilla Astro/Next/Vite as the starter assumes. I'll keep the Lovable stack and translate Website Base conventions into it:
- Design tokens (colors, fonts, spacing, radii, fluid scaling vars) defined in `src/styles.css` and exposed to Tailwind via `@theme inline`
- Sections built as React components under `src/components/home/`, mounted in `src/routes/index.tsx`
- Tailwind utilities only — no hardcoded hex; semantic tokens only
- GSAP optional; start without it (Lovable runs on a remote preview, CDN script is fine but not required for first pass) — use plain CSS for any motion

## Images (important)

Figma's `get_design_context` returns `http://localhost:3845/...` asset URLs that **cannot be reached** from the Lovable sandbox or the published site. For each photo (5 hero doctors, 3 doctor cards, 5 service photos, 1 testimonial portrait, 1 CTA group photo, brand logo mark) I will generate stand-in images via `imagegen` matched to the Figma composition (warm, natural clinical photography), saved under `src/assets/`. You can swap in your real exports later by replacing files in `src/assets/`.

## Design tokens to set

- Colors: `--primary` dark navy `#122835`, `--accent` warm yellow chip `#FFD24C`, hero blue gradient stops, neutral surfaces, muted text
- Typography: **Plus Jakarta Sans** (headings + body) and **Geist Mono** (uppercase eyebrows/buttons) loaded via `<link>` in `__root.tsx` head
- Container ideal `1280`, max `1280px`, fluid em scaling per Website Base
- Radii: `24px` panel, `32px` pill button, `16px` card
- Eyebrow style: uppercase Geist Mono, 1.68px tracking, with a small filled square bullet

## Files to add / change

```
src/styles.css                      → add tokens, fluid scaling vars, font tokens, keep Tailwind theme
src/routes/__root.tsx               → <link> Plus Jakarta Sans + Geist Mono; update <title>/meta/OG
src/routes/index.tsx                → compose all sections, real head() metadata
src/components/home/Navbar.tsx
src/components/home/Hero.tsx        → radial gradient bg, doctor arc, rating
src/components/home/WhyChooseUs.tsx
src/components/home/MeetDoctors.tsx
src/components/home/Services.tsx    → alternating rows
src/components/home/Testimonials.tsx
src/components/home/CtaSchedule.tsx
src/components/home/Footer.tsx
src/components/home/SectionEyebrow.tsx (shared)
src/components/home/PillButton.tsx  (shared)
src/assets/...                      → generated placeholder photos + logo mark
```

No backend, no auth, no data fetching — pure presentation. Routing stays at `/`. No new routes (per Website Base "first page only" scope and your request for the home page).

## Out of scope (ask if you want it)

- Other Figma pages / additional routes
- Hooking up real form submission for newsletter or "Book Appointment"
- GSAP scroll animations (can layer on after the static page lands)
- Replacing generated photos with real Figma exports (provide the files and I'll swap)

## Acceptance

- `/` renders all 8 sections matching the Figma layout and order at 1280px
- Responsive collapses cleanly at 991 / 767 / 479 (nav → hamburger, multi-col → single col, hero arc scales)
- No hardcoded colors in components; all via tokens
- Single `<h1>`, semantic landmarks, alt text on every image
- `<title>` and meta description reflect the clinic, not "Lovable App"
