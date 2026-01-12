# Landing Page - Project Context

**Project:** David Layardi Personal Landing Page  
**Framework:** Next.js 14 + TypeScript  
**Live Site:** [https://www.layardi.com](https://www.layardi.com)  
**Last Updated:** 2026-01-12

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
- **Source:** Private components (`doctor500/design-system` - submodule in `design-system/`)
- **Distribution:** `https://design-token.layardi.com/v1.1/tokens.css` (Netlify CDN)
- **Integration:** Linked in `app/layout.tsx` (via `<link>`).
- **Workflow:** To update tokens:
  1. Modify `design-system` submodule.
  2. Bump version in `tokens.css` and `build.sh`.
  3. Push to `design-system` repo (triggers Netlify build).
  4. Update `<link>` URL in `app/layout.tsx` to new version.
  5. **Constraint:** NEVER use local CSS imports for tokens in production code.

---

## 📏 Development Guidelines

1. **Content System:** 
   - **Text Content:** JSON files in `content/` directory
   - **Complex Data:** Arrays & objects in `lib/data.ts`
   - **Type-Safe Loader:** `lib/content.ts` provides typed access
   
2. **Styling Strategy:**
   - **Tokens First:** Use `--accent-cyan`, `--space-20` (CDN).
   - **Fallback:** Core spacing defined in `globals.css` for robustness.
   - **Dark Mode:** `[data-color-mode="dark"]` selector (Tailwind config).
   - **Responsive:** Mobile `px-4` → Desktop `80px` padding.

4. **Semantic Styling:**
   - **Colors:** Use semantic tokens (e.g., `text-foreground-accent`) instead of hardcoded values (`text-accent-cyan`).
   - **Glassmorphism:** Use `--bgColor-glass`, `--bgColor-glass-item` for modal backgrounds to ensure light/dark mode compatibility.

5. **Private Tokens:** Never hardcode HEX values. Always use variables.

4. **Simplicity:** Avoid complex hydration; use standard links where possible.

---

## 📂 Project Structure

```
landing-page/
├── .context/              # Documentation (source of truth)
├── .agent/workflows/      # AI agent workflow templates
├── .github/workflows/     # CI/CD
├── content/               # JSON Content Files
│   ├── personal.json     # Personal info, bio, URLs
│   ├── sections.json     # Section titles & subtitles
│   └── links.json        # Portfolio & contact link metadata
├── app/
│   ├── layout.tsx        # Root + ThemeProvider
│   ├── page.tsx          # Main Layout
│   └── globals.css       # CSS + Imports
├── components/
│   ├── hero-section.tsx  # Hero with CTA modal triggers
│   ├── career-timeline.tsx
│   ├── stats-dashboard.tsx
│   ├── testimonials.tsx
│   ├── floating-nav.tsx
│   ├── theme-toggle.tsx
│   └── modals/           # Modal popup components
│       ├── PortfolioModal.tsx
│       └── ContactModal.tsx
├── lib/
│   ├── data.ts           # Complex data (career, stats, etc.)
│   └── content.ts        # TypeScript loader for JSON content
└── public/CNAME          # Domain Config
```

---

## 🧩 Key Components

### Fixed Components
- `ThemeToggle` - Top-Right corner
- `FloatingNav` - Bottom-Center navigation

### Section Components
- `HeroSection` - Name, role, tagline, stats counters, CTA buttons with modal triggers
- `StatsDashboard` - Key metrics display
- `CareerTimeline` - Expandable career history
- `Testimonials` - Auto-rotating carousel with progress bar

### Modal Components (NEW)
- `PortfolioModal` - Shows GitHub & Medium links (via "View My Work" button)
- `ContactModal` - Shows LinkedIn & Email (via "Let's Connect" button)

---

## 📝 Content Management

### JSON Content Files (`content/`)

| File | Purpose |
|------|---------|
| `personal.json` | Name, role, tagline, bio, email, social URLs |
| `sections.json` | Section titles and subtitles |
| `links.json` | Portfolio & contact link metadata |

### To Update Content:
```bash
# Edit JSON files directly - no code changes needed!
vim content/personal.json
```

### Content Loader (`lib/content.ts`)
- Imports JSON files with TypeScript types
- Derives `portfolioLinks` and `contactLinks` from `personal.json` URLs
- Prevents URL duplication across files

---

*For version history, see `.context/CHANGELOG.md`*
