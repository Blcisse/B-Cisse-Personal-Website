# B PRSNL Webby

Personal portfolio and professional brand site for **Balla Cisse (B Cisse)** — full-stack software engineer, AI systems builder, and founder of YWC Software LLC.

Built to function as a living resume, client-facing proof of work, and engineering showcase — combining a premium visual identity with production-grade frontend architecture.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS (utility-first, mobile-first) |
| Animation | Framer Motion + CSS keyframes |
| Font | Inter · Roboto Mono (Google Fonts via `next/font`) |
| Images | Next.js `<Image>` (optimized, fill-mode for cards) |
| Rendering | Static-first with selective client components (`"use client"`) |

**Notable implementation details:**
- Scroll-spy active nav via `IntersectionObserver` — no library dependency
- Magnetic button component using `useMotionValue` + `useTransform`
- Parallax hero portrait driven by pointer position, reduced-motion safe
- Liquid glass morphism via layered `backdrop-blur` + `bg-white/[n]` utility composition
- Shimmer sweep and radial glow hover effects via CSS `::after` / `::before` pseudo-elements
- Continuous language ticker reusing a shared `skills-marquee` keyframe

---

## Sections

**Hero** — Full-viewport opening with parallax portrait, animated name stack, language ticker, and system call-outs. Three-column desktop layout collapses to mobile-first portrait-first ordering via CSS `order-N`.

**About** — Executive profile with bio, focus area badges, and four highlight stat cards surfacing key performance metrics.

**Skills** — Animated marquee skill grid organized by domain — languages, frameworks, AI/ML tools, cloud, and data infrastructure.

**Experience** — Timeline of professional roles with stack tags, scope descriptions, and impact callouts.

**Projects** — 2×2 software project grid (Muncheez, Alfred AI, Omni-Insight IQ, YWC Software) with hover-reveal GitHub / Clutch actions. No modals — clean card-only layout.

**Websites** — Interactive client website showcase with live video preview in a desktop frame, mobile frame overlay, stack/services breakdown, and paginated navigation across five client projects.

**Certifications** — Credential cards with issuer, date, and verification links.

**Social** — Horizontal marquee of social channels with a contact orbit button and link card grid.

**Contact** — Direct contact block with email, phone, LinkedIn, GitHub, and portfolio links.

---

## UI Components

- `GlassCard` — Reusable liquid-glass surface with border, blur, and shadow tokens
- `MagneticButton` — Pointer-tracking CTA with Framer Motion spring physics
- `Reveal` — Scroll-triggered fade-up animation wrapper using `IntersectionObserver`
- `SectionLabel` — Consistent index / label / title header used across all sections
- `ProjectCard` — Software project card with image, stack tags, and conditional action link
- `WebsiteShowcaseCard` — Compact selector card for the website portfolio carousel

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Metadata, fonts, viewport
│   └── page.tsx         # Root page — section assembly
├── components/
│   ├── layout/          # Header (scroll-spy nav), Footer
│   ├── sections/        # One file per page section
│   ├── portfolio/       # Project and website card components
│   └── ui/              # Shared primitives
├── data/
│   ├── profile.ts       # Personal info, highlights, hero content
│   ├── projects.ts      # Software and website project data
│   ├── experience.ts    # Work history
│   └── social.ts        # Social link data
└── lib/
    ├── constants.ts     # Site config and nav items
    └── cn.ts            # Tailwind class merge utility
```

---

## Development

```bash
npm install
npm run dev      # localhost:3000
npm run build    # Production build
npm run lint     # ESLint
```

---

## License

Private — all rights reserved. © 2026 Balla Cisse.
