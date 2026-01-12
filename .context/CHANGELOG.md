# Changelog

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
