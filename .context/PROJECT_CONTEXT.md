# Landing Page - Project Context

**Project:** David Layardi Personal Landing Page  
**Framework:** Next.js 14 + TypeScript  
**Live Site:** [https://www.layardi.com](https://www.layardi.com)  
**Last Updated:** 2026-01-02

---

## 🚀 Quick Start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Production build
```

---

## 🛠️ Architecture

**Tech Stack:**
- **Core:** Next.js 14 (App Router), TypeScript, React 18
- **Styling:** Tailwind CSS + Design System Tokens (CDN)
- **State/Theme:** `next-themes` (manages `[data-color-mode]` attribute)
- **Animations:** Framer Motion

**Deployment (GitHub Pages):**
- **Domain:** `layardi.com` / `www.layardi.com` (CNAME in `public/`)
- **Pipeline:** GitHub Actions (`.github/workflows/nextjs.yml`)
- **Build Output:** Static Export (`output: 'export'` in `next.config.mjs`) to `out/`
- **Asset Base Path:** Root (`""`) for custom domain

**Design System (CDN):**
- **Source:** Private Repo (`doctor500/design-system`)
- **Distribution:** `https://design-token.layardi.com/v1/tokens.css`
- **Method:** Imported in `app/globals.css` via `@import`
- **No Token Build Step:** Local submodule Removed. Tokens loaded at runtime/build-time via CSS import.

---

## 🧩 UI Components

**Key Components (`components/`):**
1.  **Fixed Elements:**  
    - `ThemeToggle`: Top-right fixed button. Switches theme via `next-themes`.
    - `FloatingNav`: Bottom-center navigation. Appears on scroll via Framer Motion.
2.  **Sections:**  
    - `HeroSection`: Animated counters, split layout.
    - `StatsDashboard`: Metrics with semantic icons.
    - `CareerTimeline`: Vertical timeline of experience.
    - `Testimonials`: Carousel with progress bar & controls.

**Styling Strategy:**
- **Tokens First:** Use `--accent-cyan`, `--space-20` vars from `tokens.css`.
- **Responsive:** Mobile-first.
    - Mobile: `px-4` padding.
    - Desktop (≥1024px): `80px` padding (fallback variables in `globals.css`).
- **Dark Mode:** `data-color-mode="dark"` selector configured in `tailwind.config.ts`.

---

## 📂 Project Structure

```
landing-page/
├── .context/           # Documentation (Source of Truth)
├── .github/workflows/  # CI/CD (Next.js Deploy)
├── app/
│   ├── layout.tsx     # Root layout + ThemeProvider
│   ├── page.tsx       # Main Layout (Nav + Sections)
│   └── globals.css    # Global CSS (Imports CDN Tokens + Fallbacks)
├── components/        # UI Components
├── lib/
│   └── data.ts        # Content Data (Jobs, Testimonials, Stats)
└── public/
    └── CNAME          # Custom Domain config
```

---

## 🔒 Key Decisions & Rules

1.  **Single Source of Truth:** `lib/data.ts` holds all text content.
2.  **Private Design System:** Never hardcode token values. Use CSS variables.
3.  **Clean Repo:** No `out/` or `node_modules`. `package-lock.json` IS committed.
4.  **Simplicity:** Avoid complex hydration logic. Use standard `<a>` tags for external links.

---

## 🔄 Recent Major Changes

- **2026-01-02:** Configured Custom Domain (`layardi.com`) & Fixed Asset Paths.
- **2026-01-02:** Migrated Design System to CDN (Removed Submodule).
- **2026-01-02:** Moved Theme Toggle to Fixed Top-Right position.
- **2026-01-02:** Implemented "Selector Strategy" for Tailwind Dark Mode compatibility.

*Detailed history in `.context/CHANGELOG.md`*
