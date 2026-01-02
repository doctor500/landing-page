# Landing Page - Project Context

**Project:** David Layardi Personal Landing Page  
**Framework:** Next.js 14.2.35 + TypeScript  
**Location:** `/mnt/c/workspace/ai-workspace/landing-page`  
**Last Updated:** 2026-01-02

---

## Quick Overview

**Purpose:** Professional landing page showcasing 6+ years of infrastructure engineering experience

**Tech Stack:**
- Next.js 14 + TypeScript
- Tailwind CSS + Design System Tokens
- Framer Motion (animations)
- next-themes (dark/light mode)

**Design System:** Distributed via Netlify CDN (`design-token.layardi.com`)  
- Source: Private GitHub repo (doctor500/design-system)
- Distribution: Public CDN endpoint (tokens.css only)
- Zero build-time auth required

---

## Current Features

### Components
1. **FloatingNav** - Section navigation with integrated theme toggle (appears after 300px scroll)
2. **HeroSection** - Animated stat counters, split 60/40 layout
3. **StatsDashboard** - Metric cards with icons (uses design system tokens)
4. **CareerTimeline** - Expandable position cards
5. **Testimonials** - Auto-carousel (8s) with pause button & progress bar

### Responsive
- Mobile (< 1024px): Minimal padding, icons only
- Desktop (≥ 1024px): 80px padding, full labels
- Large Desktop (≥ 1440px): 96px padding

---

## Design System Essentials

**Tokens (see `design-system/tokens.css`):**
```css
/* Colors */
--accent-cyan, --accent-purple
--fgColor-default, --bgColor-muted (theme-aware)

/* Spacing */
--space-4, --space-20, --space-24

/* Components */
.glass-card, .glass-card-gradient, .container-padding
```

**Rules:**
- Always use design system tokens
- **NEVER hardcode or document raw values (hex/px)** - Design system is private
- Mobile-first responsive
- Dark mode default
- TypeScript strict mode

---

## Project Structure

```
landing-page/
├── .context/          # This file + changelog
├── app/
│   ├── layout.tsx    # ThemeProvider setup
│   ├── page.tsx      # Main page
│   └── globals.css   # Global styles (imports CDN tokens)
├── components/       # All UI components
├── lib/data.ts      # Content (single source)
└── ideas/           # Content source files
```

**Design System (CDN Distribution):**
- **Source Repo:** `doctor500/design-system` (private)
- **CDN Endpoint:** `design-token.layardi.com/v1/tokens.css`
- **Build:** Netlify auto-deploys on push to main
- **Public Surface:** Only `tokens.css` (docs remain private)
- **Migration:** Completed 2026-01-02 (git submodule → CDN)

---

## Key Decisions

1. **Keep It Simple** - No complex features, clear structure
2. **Design System First** - All styling uses tokens
3. **Theme:** next-themes with `data-color-mode` attribute
4. **Content:** Data-driven via `lib/data.ts`
5. **Design System Distribution:** Migrated to CDN (2026-01-02)
   - CDN: `design-token.layardi.com/v1/tokens.css`
   - For other projects: Update `globals.css` import to use CDN URL
   - Removes git submodule and build-time auth requirements

**Lesson Learned:** Complexity failed (accessibility revert). Ship simple, working features.

---

## Commands

```bash
npm run dev      # Dev server (port 3000)
npm run build    # Production build
npm test         # Run tests
```

---

## Recent Changes (See CHANGELOG.md)

- **2026-01-02:** Integrated theme toggle into nav, added testimonials progress bar
- **2026-01-02:** Added floating nav, pause button, desktop padding
- **2026-01-02:** Attempted then reverted complex accessibility (too complex)
- **2026-01-01:** Fixed theme toggle with next-themes

---

## Known Issues

**Non-Critical:**
- Tailwind CSS linter warnings (@tailwind, @apply) - VS Code only, build works fine

---

## For AI Agents

1. **Read this file first** before making changes
2. **Use design system tokens** for all styling
3. **Check `lib/data.ts`** for content changes
4. **Keep simple** - avoid complexity
5. **Update CHANGELOG.md** when completing features

---

## Content Data (`lib/data.ts`)

- 7 career positions
- 2 testimonials (Felix Jingga, Andreas Cendranata)
- 6 key metrics (6+ years, 90%+ cost reduction, 99.9% uptime, etc.)

---

**Links:**
- LinkedIn: https://www.linkedin.com/in/davidlayardi
- GitHub: https://github.com/doctor500

---

*This is the single source of truth. Update when making significant changes.*
