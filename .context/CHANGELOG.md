# Changelog

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
