# Visual Presentation Plan

> **Design and layout specifications for landing page**  
> Last Updated: 2026-02-16

---

## 🎨 Design Direction

### Overall Aesthetic
- **Style:** System monitoring dashboard meets portfolio
- **Theme:** Dark mode primary, light mode supported
- **Feel:** Technical, professional, data-driven
- **Inspiration:** Infrastructure monitoring dashboards (Grafana, Datadog)

### Design Principles
1. **Data-Driven:** Metrics and achievements front and center
2. **Technical Credibility:** Show real numbers and impact
3. **Clean & Modern:** Glassmorphism, subtle animations
4. **Responsive:** Mobile-first, works on all devices

---

## 🖼️ Section Layouts

### 1. Hero Section (Current)
**Layout:** 60/40 split - text left, mini stats right

```
┌────────────────────────────────────────────────────────────┐
│ ◐ Hello, I'm                                    ┌────────┐ │
│                                                 │ 90%+   │ │
│ DAVID LAYARDI                                   │ Cost   │ │
│                                                 └────────┘ │
│ Infrastructure & AI Engineer                    ┌────────┐ │
│                                                 │ 99.9%  │ │
│ Cloud-Native Automation with                    │ Uptime │ │
│ AI-Powered Operations                           └────────┘ │
│                                                 ┌────────┐ │
│ [View My Work] [Let's Connect]                  │ 600+   │ │
│                                                 │Service│ │
└────────────────────────────────────────────────────────────┘
```

---

### 2. Stats Dashboard (Refactored)
**Layout:** System monitoring style with status header

```
┌────────────────────────────────────────────────────────────┐
│  ◉ SYSTEM STATUS                              OPERATIONAL  │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  INFRASTRUCTURE METRICS                                    │
│  Real-time achievements from infrastructure engineering    │
│                                                            │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────┐│
│  │ COST SAVINGS    │  │ AVAILABILITY    │  │DOC AUTOMATE ││
│  │                 │  │                 │  │             ││
│  │ ████████░░ 90%  │  │ ●●●●● 99.9%     │  │ ████ 80%    ││
│  │                 │  │                 │  │  Agentic AI ││
│  │ $2M+ annually   │  │ zero downtime   │  │   pipeline  ││
│  └─────────────────┘  └─────────────────┘  └─────────────┘│
│                                                            │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────┐│
│  │FASTER RESPONSE  │  │ MIGRATIONS      │  │ BUILD TIME  ││
│  │                 │  │                 │  │             ││
│  │      12x        │  │    600+         │  │ ████████ 85%││
│  │  Via Agentic AI │  │   services      │  │             ││
│  │   workflow      │  │   to cloud      │  │ CI/CD opt.  ││
│  └─────────────────┘  └─────────────────┘  └─────────────┘│
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Card Components:**
- Progress bar for percentage metrics
- Uptime dots indicator (5 dots = 99.9%)
- Large counters for volume metrics
- Subtle hover animations

---

### 3. Latest Articles Section (NEW)
**Layout:** 3-column cards with article previews

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  Latest Articles                                           │
│  Insights on infrastructure, automation, and cloud-native  │
│                                                            │
│  ┌─────────────────────────────────────────────────────┐  │
│  │ 📝 Accessing GCP Secret Manager from GKE Cluster... │  │
│  │ Apr 16, 2024 • 3 min read                           │  │
│  │                                                      │  │
│  │ Secret manager implementation is one of the         │  │
│  │ industry's best practices that currently are...     │  │
│  │                                            [Read →] │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                            │
│  ┌─────────────────────────────────────────────────────┐  │
│  │ 📝 How Cloudflare Zero Trust & VS Code Tunnels...   │  │
│  │ Apr 15, 2023 • 4 min read • 41 claps               │  │
│  │                                                      │  │
│  │ Sounds silly, but it's real. Cloudflare Zero        │  │
│  │ Trust & VS Code Remote Tunnels being part of...     │  │
│  │                                            [Read →] │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                            │
│  ┌─────────────────────────────────────────────────────┐  │
│  │ 📝 Easy Deploy SonarQube on Kubernetes with...      │  │
│  │ Jul 22, 2021 • 5 min read • 67 claps               │  │
│  │                                                      │  │
│  │ SonarQube is an open-source platform developed      │  │
│  │ by SonarSource for continuous inspection of...      │  │
│  │                                            [Read →] │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                            │
│              [ View More on Medium → ]                     │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Card Details:**
- Title (truncated if too long)
- Publication date + read time
- Claps count (if > 10)
- Preview text (2 lines)
- Hover: subtle lift effect

---

### 4. Career Timeline (Current)
**Layout:** Vertical timeline with expandable cards

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  Career Journey                                            │
│  Professional experience in infrastructure engineering     │
│                                                            │
│  ●─── Rakuten | Oct 2025 - Present                        │
│  │    Software Engineer - CI/CD Platform                   │
│  │    Tokyo, Japan                                         │
│  │                                    [View Details ▼]     │
│  │                                                         │
│  ●─── GovTech Procurement | Jan 2024 - Sep 2025           │
│  │    Infrastructure Engineer                              │
│  │    Indonesia                                            │
│  │                                    [View Details ▼]     │
│  │                                                         │
│  ●─── GoTo Group | Nov 2021 - Dec 2023                    │
│  │    DevOps Engineer                                      │
│  │    Jakarta, Indonesia                                   │
│  │                                    [View Details ▼]     │
│  │                                                         │
│  ●─── Pegipegi | Mar 2020 - Oct 2021                      │
│  │    Release Engineer                                     │
│  │                                    [View Details ▼]     │
│  │                                                         │
│  ●─── BINUS IT Division | Mar 2018 - Feb 2020             │
│       Data Center Staff                                    │
│                                       [View Details ▼]     │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

### 5. Testimonials (Current)
**Layout:** Auto-rotating carousel with progress bar

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  What People Say                                           │
│                                                            │
│  ┌─────────────────────────────────────────────────────┐  │
│  │                                                      │  │
│  │  "If I had to describe David in one word, it        │  │
│  │   would be 'unflappable'. He was a cornerstone      │  │
│  │   of the team that achieved a staggering 90%+       │  │
│  │   reduction in our monthly infrastructure costs...  │  │
│  │                                                      │  │
│  │             — Felix Jingga, CTO                     │  │
│  │               GovTech Procurement                   │  │
│  │                                                      │  │
│  │  ═══════════════════════░░░░░░░  [progress bar]     │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

## 🎨 Design Tokens Usage

### Colors (from design system)
```css
/* Primary accents */
--accent-cyan: var(--bgColor-accent-emphasis)
--accent-purple: var(--fgColor-done)

/* Status colors for dashboard */
--color-success: var(--fgColor-success)   /* Green - operational */
--color-warning: var(--fgColor-attention) /* Yellow - pending */
--color-danger: var(--fgColor-danger)     /* Red - error */

/* Backgrounds */
--bg-primary: var(--bgColor-default)
--bg-card: var(--bgColor-muted)
--bg-glass: var(--bgColor-glass)
```

### Typography Scale
```css
/* Headings */
h1: var(--text-display-size)    /* 48-72px responsive */
h2: var(--text-title-size-large) /* 32-48px responsive */
h3: var(--text-title-size-medium)

/* Body */
body: var(--text-body-size-large) /* 16-18px */
small: var(--text-body-size-small) /* 14px */
```

### Spacing
```css
/* Container */
padding: var(--base-size-16) to var(--base-size-80)

/* Section gaps */
gap: var(--stack-gap-normal) /* 16-24px */

/* Card padding */
padding: var(--base-size-24)
```

---

## 📐 Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 640px | Single column, stacked cards |
| Tablet | 640-1024px | 2 columns for stats |
| Desktop | > 1024px | Full layout, 3 columns |

---

## 🎬 Animation Strategy

### Entry Animations
- **Hero:** Fade in from left, staggered elements
- **Stats:** Scale up with delay per card
- **Articles:** Fade in, slide up on scroll
- **Timeline:** Reveal on scroll

### Interaction Animations
- **Cards:** Lift on hover (translateY -4px)
- **Buttons:** Scale 1.05 on hover
- **Progress bars:** Fill animation on view

### Performance
- Use `transform` and `opacity` only
- Respect `prefers-reduced-motion`
- Lazy load off-screen animations

---

## 📱 Page Flow

```
┌─────────────────┐
│     HERO        │
│  (Full screen)  │
└────────┬────────┘
         │
┌────────▼────────┐
│    DASHBOARD    │
│ (System status) │
└────────┬────────┘
         │
┌────────▼────────┐
│    ARTICLES     │  ← NEW
│  (3 latest)     │
└────────┬────────┘
         │
┌────────▼────────┐
│    TIMELINE     │
│  (Career path)  │
└────────┬────────┘
         │
┌────────▼────────┐
│  TESTIMONIALS   │
│   (Carousel)    │
└────────┬────────┘
         │
┌────────▼────────┐
│     FOOTER      │
└─────────────────┘
```

---

## ✅ Implementation Priority

1. ~~**Phase 1:** Stats Dashboard Refactor (monitoring style)~~ ✅ Done
2. ~~**Phase 2:** Articles Section (new component)~~ ✅ Done
3. **Phase 3:** Hero Messaging + Stats Card Update (AI integration)
4. **Phase 4:** Career Timeline Achievement Updates
5. **Phase 5:** Verification and testing
