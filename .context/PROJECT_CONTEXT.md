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

## 🛠️ Architecture & Deployment

- **Tech Stack:** Next.js 14 (App Router), TypeScript, React 18
- **Styling:** Tailwind CSS + Design System Tokens (CDN) + `next-themes`
- **Animations:** Framer Motion

### Deployment (GitHub Pages)
- **Domain:** `layardi.com` / `www.layardi.com` (via `public/CNAME`)
- **Pipeline:** GitHub Actions (`.github/workflows/nextjs.yml`)
- **Build:** Static Export (`output: 'export'`) to `out/` with empty base path.

### Design System (CDN)
- **Source:** Private components (`doctor500/design-system`)
- **Distribution:** `https://design-token.layardi.com/v1/tokens.css`
- **Integration:** Imported in `app/globals.css`. No local submodule.

---

## 📏 Development Guidelines

1.  **Single Content Source:** All text/data lives in `lib/data.ts`.
2.  **Styling Strategy:**
    - **Tokens First:** Use `--accent-cyan`, `--space-20` (CDN).
    - **Fallback:** Core spacing defined in `globals.css` for robustness.
    - **Dark Mode:** `[data-color-mode="dark"]` selector (Tailwind config).
    - **Responsive:** Mobile `px-4` → Desktop `80px` padding.
3.  **Private Tokens:** Never hardcode HEX values. Always use variables.
4.  **Simplicity:** Avoid complex hydration; use standard links where possible.

---

## 🧩 Key Components (`components/`)

- **Fixed:** `ThemeToggle` (Top-Right), `FloatingNav` (Bottom-Center).
- **Sections:** `HeroSection` (Counters), `StatsDashboard`, `CareerTimeline`, `Testimonials` (Carousel).

---

## 📂 Project Structure

```
landing-page/
├── .context/           # Source of Truth
├── .github/workflows/  # CI/CD
├── app/
│   ├── layout.tsx     # Root + ThemeProvider
│   ├── page.tsx       # Main Layout
│   └── globals.css    # CSS + Imports
├── components/        # UI Components
├── lib/data.ts        # Content Data
└── public/CNAME       # Domain Config
```

*For version history, see `.context/CHANGELOG.md`*
