# Changelog

## [1.4.4] - 2026-03-03

### Added
- **SEO — Technical Files** — `robots.txt`, `sitemap.xml`, favicon (`icon.png`, `apple-icon.png`)
- **SEO — Structured Data** — JSON-LD `Person` + `WebSite` schema in layout
- **SEO — OG Image** — Generated `og-image.png` for social sharing previews
- **SEO — Canonical URL** — Added via `metadataBase` + `alternates.canonical`
- **SEO — Semantic Dates** — Article dates wrapped in `<time>` elements

### Changed
- **SEO — OG URL** — Fixed from `doctor500.github.io` → `www.layardi.com`
- **Footer Redesign** — Removed duplicate social links, added "Made with ❤️ using GitHub Pages"

### Fixed
- **Unit Tests** — Fixed 15 pre-existing failures across 5 test suites (34/34 now pass)
  - `hero-section`: Updated stale role/tagline/years assertions, fixed `<a>` → `<button>` type
  - `career-timeline`: Fixed period text matching (regex), corrected achievement index
  - `stats-dashboard`: Fixed `.stat-card` → `.monitoring-card` class assertion
  - `theme-toggle`: Added `window.matchMedia` mock for jsdom
  - `testimonials`: Removed crashing auto-rotate timer test

## [1.4.3] - 2026-03-03

### Added
- **Testimonials** — Added 2 new LinkedIn testimonials to carousel
  - Qassandra Chaidir (Tech Architecture Specialist, Accenture)
  - Evan Emelga (Engineering Manager, GoTo Financial)
- **Testimonials CTA** — "View All on LinkedIn" button linking to recommendations page

## [1.4.2] - 2026-03-01

### Changed
- **Branding Sync** — Aligned all content with `branding-context` canonical data
  - Role title: "Infrastructure & AI Engineer" → "Infrastructure & Agentic AI Engineer"
  - Career timeline: Rakuten duration → 5 months, GoTo Group → Gojek - GoTo Financial (GTF)
  - CV project: Updated name/description to reflect AI evaluation framework
- **LinkedIn Sync Procedure** — Moved to `branding-context` repo (centralized for all projects)

### Documentation
- **GOVERNANCE.md** — Added `branding-context/v1/` to mandatory reading list
- **GEMINI.md** — Added branding data reference for AI agents
- **PROJECT_CONTEXT.md** — Documented branding-context as external dependency
- **PROCEDURES.md** — LinkedIn sync replaced with cross-reference to branding-context

## [1.4.1] - 2026-02-22

### Documentation
- **Governance Update** — Enhanced AI agent governance with new enforcement sections
  - Added Mandatory Reading section (all 4 `.context/` docs required)
  - Added Content Sync Workflow governance rules (approval requirements, mandatory steps)
  - Added Security & Data Privacy enforcement (commit verification, stop-on-leak protocol)
  - Added Changelog Update enforcement (what requires/doesn't require entries)
  - Expanded Pre-Flight Checks (10 items, up from 5)
  - Updated Related Documentation with full `.context/` references
- **GEMINI.md** — Added `PROCEDURES.md` and `SECURITY.md` to mandatory reading list

## [1.4.0] - 2026-02-16

### Changed
- **Hero Branding** — New AI-focused identity
  - Role: "Infrastructure & AI Engineer"
  - Tagline: "Cloud-Native Automation with AI-Powered Operations"
  - Updated heroBio and bio with Agentic AI achievements
- **Stats Dashboard** — Replaced 2 cards for AI integration
  - Removed: IaC Adoption (100%), Years (7+)
  - Added: Doc Automation (80%), Faster Response (12x)
- **Career Timeline** — Updated all roles with specific metrics from latest CV
  - Rakuten: 4 new achievements (Claude Code plugin, AI incident investigation)
  - GovTech: $150K/mo savings, 6x Mail scaling, 500+ Teleport resources
  - GoTo: 50% hourly AWS cost, Cloud SQL 2h→15min
  - Pegipegi: 80%+ file reduction, 6x provisioning speed
- **Career Subtitle** — "From Data Centers to AI-Powered Cloud Operations"

### Added
- **AI Skills** — New `agenticAI` category in technical skills (Claude Code, AI Agent Dev, MCP)
- **New Project** — Compliance Document Automation Plugin (Claude Code)
- **Ideas Updates** — All 3 ideas files updated with latest CV data and brand positioning

## [1.3.0] - 2026-02-09

### Added
- **Articles Section** - New component displaying latest Medium articles
  - Loads from `content/medium-sync.json`
  - Shows 3 latest English articles with title, date, read time, claps
  - "View More on Medium" button links to full profile
  - Article cards with hover effects and preview text

- **System Monitoring Dashboard** - Refactored stats-dashboard.tsx
  - "System Status: OPERATIONAL" header with pulse indicator
  - Progress bar visualizations for percentage metrics
  - Monitoring card design with cyan accent borders
  - New metrics: Cost Savings, Availability, Migrations, Build Time, IaC Adoption, Years (7+)

- **Dynamic Duration Calculation** - `lib/utils.ts`
  - Auto-calculates current position tenure
  - `getDynamicDuration()` for timeline display

### Changed
- **Hero Section Branding** - AI-ready positioning
  - Role: "Infrastructure & Automation Engineer"
  - Tagline: "Building AI-Ready Infrastructure • Context Engineering Enthusiast"
  - Bio updated to 7+ years with cloud-native focus
- **Stats Data** - Updated `lib/data.ts` with impact-focused metrics
- **Career Timeline** - Focused on 5 Infrastructure/DevOps roles (removed web dev positions)

### Fixed
- **Stat Card Animation** - Fixed 99.9% displaying as 999% by handling decimal values

### Documentation
- Updated all `ideas/` files with current state and visual presentation plans
- Updated PROJECT_CONTEXT.md with new components

## [1.2.1] - 2026-02-02

### Added
- **Security Documentation** - Created `.context/SECURITY.md` with comprehensive data privacy guidelines
  - Sync file security best practices
  - Data sanitization checklists for LinkedIn and Medium sync
  - Pre-commit verification steps
  - Incident response procedures
- **Enhanced LinkedIn Sync** - Expanded data structure to include detailed profile information
  - Experience history with full job details
  - Education, certifications, skills with endorsements
  - Languages, projects, and recommendations
- **Security References** - Added cross-references to SECURITY.md in PROCEDURES.md and PROJECT_CONTEXT.md

### Changed
- **PROCEDURES.md** - Added security reference links to sync procedures
- **PROJECT_CONTEXT.md** - Updated Related Documentation section with SECURITY.md reference

## [1.2.0] - 2026-02-02

### Added
- **AI Agent Governance Framework:** Created `.context/GOVERNANCE.md` to establish formal protocols for AI agent interaction
  - Approval Mode (Default): Requires explicit user approval before executing changes
  - Auto Pilot Mode (Opt-in): Fast mode for experienced users
  - Project-specific rules for web app development, design system, Git submodules
  - Pre-flight checks and example workflows
- Updated `PROJECT_CONTEXT.md` and `GEMINI.md` to reference governance documentation

## [1.1.1] - 2026-01-12

### Fixed
- **Glassmorphism in Light Mode**
  - Updated design tokens to v1.1.0 to include glassmorphism variables (`--bgColor-glass`, etc.)
  - Fixed modal background visibility issues in Light Mode
  - Switched from hardcoded color utilities to semantic tokens (`foreground-accent`) for hover states
- **Design System Integration**
  - Updated token loading to use versioned CDN URL (v1.1) to bypass cache issues

## [1.1.0] - 2026-01-12

### Added
- **Modal Popups** for CTA buttons
  - `PortfolioModal` - "View My Work" button shows GitHub & Medium links
  - `ContactModal` - "Let's Connect" button shows LinkedIn & Email
  - Glassmorphism design with Framer Motion animations
  - Keyboard accessible (Escape to close)
  - Click outside to close

- **JSON Content System** (Centralized content management)
  - `content/personal.json` - Personal info, bio, all social URLs
  - `content/sections.json` - Section titles and subtitles  
  - `content/links.json` - Portfolio & contact link metadata
  - `lib/content.ts` - TypeScript loader with full type safety

### Changed
- Hero section now uses `personal` from `lib/content.ts`
- Career timeline now uses `sections` from `lib/content.ts`
- Modal components import from `lib/content.ts` instead of `lib/data.ts`
- Removed duplicate `personalInfo`, `portfolioLinks`, `contactLinks` from `lib/data.ts`

### Fixed
- Modal centering issue (changed from translate to flexbox approach)
- LinkedIn URL updated to `david-lay`

---

## [1.0.2] - 2026-01-03

### Fixed
- Enhanced testimonials carousel progress bar visibility

## [1.0.1] - 2026-01-02

### Added
- Custom Domain (`layardi.com`) with CNAME
- Fallback CSS tokens for robust padding
- Fixed Theme Toggle (Top-Right)

### Changed
- Removed Gradient Border from floating nav
- Updated Project Context (compacted)
- Tailwind Config: Using `selector` strategy for dark mode

---

## [1.0.0] - 2026-01-02

### Added
- Floating navigation with integrated theme toggle
- Testimonials progress bar (8s countdown)
- Pause/resume button for carousel
- Desktop padding (responsive: 16px/80px/96px)
- Design system CDN distribution (design-token.layardi.com)

### Changed
- Theme toggle moved into floating nav (no more overlap)
- Documentation consolidated to `.context/` folder
- Design system: git submodule → Netlify CDN (removes build auth requirements)

---

## [0.9.0] - 2026-01-01

### Added
- Theme toggle (dark/light mode)
- Hero section with animated stat counters
- Career timeline (expandable cards)
- Stats dashboard with metrics
- Testimonials carousel

### Fixed
- next-themes configuration
- Design system token selectors

---

## Development Sessions

### 2026-01-02 (Sessions 2-4)
**Completed:**
- Floating nav with section tracking
- Testimonials pause button & progress bar
- Desktop responsive padding
- Theme toggle integration
- Documentation cleanup

**Reverted:**
- Complex accessibility features (skip links, ARIA, motion preferences)
- **Reason:** Added unnecessary complexity
- **Lesson:** Keep features simple, add incrementally

### 2026-01-02 (Session 5 - Deployment & Polish)
**Completed:**
- **Deployment:** GitHub Pages live at `layardi.com` (Actions + Static Export)
- **Domain:** Configured `www.layardi.com` (CNAME)
- **UI Fixes:**
  - Moved Theme Toggle to fixed top-right (separated from nav)
  - Fixed Dark Mode selector logic (Tailwind `selector` strategy)
  - Removed Floating Nav gradient border (cleaner look)
  - Added robust fallback CSS for desktop padding
- **Docs:** Compacted `PROJECT_CONTEXT.md` as single source of truth

### 2026-01-01 (Session 1)
**Completed:**
- Fixed theme toggle with next-themes
- Configured `data-color-mode` attribute
- Simplified design system selectors

---

## Future (v2.0)

**Considering:**
- GitHub API integration
- Blog section
- Project showcase
- Contact form

**Not Planning:**
- Complex accessibility (learned from revert)
- Heavy animations
- Large dependencies

---

*Format: [Major.Minor.Patch] - YYYY-MM-DD*
