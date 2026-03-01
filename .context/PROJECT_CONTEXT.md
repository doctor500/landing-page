# Landing Page - Project Context

**Project:** David Layardi Personal Landing Page  
**Framework:** Next.js 14 + TypeScript  
**Live Site:** [https://www.layardi.com](https://www.layardi.com)  
**Last Updated:** 2026-02-16

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

### Git Submodule Management
- **Status:** `design-system/` is a tracked Git submodule.
- **Rule:** Do NOT commit file changes inside `design-system/` directly to the `landing-page` repo.
- **Workflow:**
  1. `cd design-system`
  2. Make changes, commit, and push to `doctor500/design-system`
  3. `cd ..`
  4. `git add design-system` (Updates the commit pointer)
  5. Commit `landing-page` (Records the new submodule version)
- **Warning:** If you see "embedded git repository" warnings, ensure you are not adding files directly. Only the folder path (pointer) should be added.

---

## 📏 Development Guidelines

> [!IMPORTANT]
> **AI Agent Governance:** All AI agents MUST read `.context/GOVERNANCE.md` before making any changes. Default mode is **Approval Mode** — always ask before executing.

1. **Content System:** 
   - **Text Content:** JSON files in `content/` directory
   - **Complex Data:** Arrays & objects in `lib/data.ts`
   - **Type-Safe Loader:** `lib/content.ts` provides typed access
   
2. **Styling Strategy:**
   - **Tokens First:** Use `--accent-cyan`, `--space-20` (CDN).
   - **Fallback:** Core spacing defined in `globals.css` for robustness.
   - **Dark Mode:** `[data-color-mode="dark"]` selector (Tailwind config).
   - **Responsive:** Mobile `px-4` → Desktop `80px` padding.

3. **Semantic Styling:**
   - **Colors:** Use semantic tokens (e.g., `text-foreground-accent`) instead of hardcoded values (`text-accent-cyan`).
   - **Glassmorphism:** Use `--bgColor-glass`, `--bgColor-glass-item` for modal backgrounds to ensure light/dark mode compatibility.

4. **Private Tokens:** Never hardcode HEX values. Always use variables.

5. **Simplicity:** Avoid complex hydration; use standard links where possible.
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
│   ├── links.json        # Portfolio & contact link metadata
│   └── medium-sync.json  # Medium articles data
├── app/
│   ├── layout.tsx        # Root + ThemeProvider
│   ├── page.tsx          # Main Layout
│   └── globals.css       # CSS + Imports
├── components/
│   ├── hero-section.tsx  # Hero with CTA modal triggers
│   ├── career-timeline.tsx
│   ├── stats-dashboard.tsx # System monitoring style
│   ├── articles-section.tsx # Medium articles display
│   ├── testimonials.tsx
│   ├── floating-nav.tsx
│   ├── theme-toggle.tsx
│   └── modals/           # Modal popup components
│       ├── PortfolioModal.tsx
│       └── ContactModal.tsx
├── lib/
│   ├── data.ts           # Complex data (career, stats, etc.)
│   ├── content.ts        # TypeScript loader for JSON content
│   └── utils.ts          # Utility functions (duration calc)
└── public/CNAME          # Domain Config
```

---

## 🧩 Key Components

### Fixed Components
- `ThemeToggle` - Top-Right corner
- `FloatingNav` - Bottom-Center navigation

### Section Components
- `HeroSection` - Name, role, tagline, key AI & Infra metrics, CTA buttons
- `StatsDashboard` - System monitoring style (Agentic AI pipeline, Response times)
- `ArticlesSection` - Latest 3 Medium articles with View More button
- `CareerTimeline` - Expandable career history with dynamic duration
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
| `*-sync.json` | **Temporary sync files** (gitignored) - See `.context/PROCEDURES.md` |

### To Update Content:
```bash
# Edit JSON files directly - no code changes needed!
vim content/personal.json
```

### Content Sync Procedures
To extract latest information from LinkedIn or Medium, see `.context/PROCEDURES.md`:
- **LinkedIn Sync:** Extract current position, headline, about section
- **Medium Sync:** Extract latest articles and author bio
- **Output:** Temporary `*-sync.json` files for review before integration
- **Security:** See `.context/SECURITY.md` for data privacy guidelines

### Content Loader (`lib/content.ts`)
- Imports JSON files with TypeScript types
- Derives `portfolioLinks` and `contactLinks` from `personal.json` URLs
- Prevents URL duplication across files

---

## External Dependencies

### Branding Context (`doctor500/branding-context`)
- **Purpose:** Canonical source for all personal/professional data (role, bio, years, skills, experience)
- **Usage:** AI agents must read `branding-context/v1/*.json` before updating content in this project
- **Sync:** When branding-context data changes, update `content/personal.json` and `lib/data.ts` accordingly

---

## Related Documentation

- **[GOVERNANCE.md](.context/GOVERNANCE.md)** - AI agent protocols and approval workflows
- **[PROCEDURES.md](.context/PROCEDURES.md)** - Operational procedures (content sync, design system updates, git submodules)
- **[SECURITY.md](.context/SECURITY.md)** - Security guidelines for data privacy and sync file management
- **[CHANGELOG.md](.context/CHANGELOG.md)** - Project version history
- **[Design System Documentation](design-system/README.md)** - Design tokens and guidelines
