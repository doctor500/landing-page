# Landing Page - Visual & Data Presentation Plan

> **Design Planning Document**  
> Dashboard-style modern landing page for David Layardi  
> Focus: Infrastructure Engineering Career + Portfolio

---

## 🎨 Design Direction

### Style: Modern Dashboard + Portfolio Hybrid
- **Primary Aesthetic:** Data-driven, professional, tech-forward
- **Visual Style:** Glassmorphism, dark mode, vibrant accents
- **Animation:** Smooth, subtle, purposeful
- **Layout:** Card-based, grid system, asymmetric balance

### Color Palette Suggestion
```css
/* Dark Mode Base */
--bg-primary: #0a0e27
--bg-secondary: #1a1f3a
--glass-bg: rgba(255, 255, 255, 0.05)

/* Accent Colors */
--accent-primary: #00d9ff (Cyan - Cloud/Tech)
--accent-secondary: #7c3aed (Purple - Innovation)
--accent-success: #10b981 (Green - Uptime/Success)
--accent-warning: #f59e0b (Orange - Alert/Impact)

/* Text */
--text-primary: #ffffff
--text-secondary: #a0aec0
--text-muted: #64748b
```

---

## 📐 Section Breakdown

### 1. Hero Section (Full Viewport)

**Layout:** Split screen (60/40)

**Left Side (60%):**
```
[Animated Greeting]
Hi, I'm David Layardi

[Main Headline - Large, Bold]
Infrastructure Engineer
Building Scalable Cloud Systems

[Subheadline]
6+ years driving infrastructure modernization
across E-commerce, GovTech, and Fintech

[CTA Buttons]
[View My Work] [Let's Connect]
```

**Right Side (40%):**
```
[Floating Stats Cards with Icons]

┌─────────────────┐
│   90%+ Cost     │
│   Reduction     │ [Chart Icon]
└─────────────────┘

┌─────────────────┐
│   99.9%         │
│   Uptime        │ [Shield Icon]
└─────────────────┘

┌─────────────────┐
│   600+          │
│   Services      │ [Cloud Icon]
└─────────────────┘

┌─────────────────┐
│   6+            │
│   Years         │ [Rocket Icon]
└─────────────────┘
```

**Visual Effect:** 
- Animated number counters
- Cards with glassmorphism effect
- Subtle float/hover animations
- Particle background (optional)

---

### 2. Career Timeline (Horizontal Scroll)

**Visualization Type:** Interactive horizontal timeline

```
2016 ──┬── 2017 ──┬── 2018 ──┬── 2020 ──┬── 2021 ──┬── 2024 ──┬── 2025
       │          │          │          │          │          │
    Freelance  BINUS IT  Data Ctr  Pegipegi  GoTo Grp  GovTech  Rakuten
     (Web)    (Analyst)  (Staff)  (Release) (DevOps) (Infra)   (CI/CD)
```

**Interaction:**
- Click company name → expand details
- Color coding by role type
- Progress line with milestones
- Mobile: Vertical timeline instead

**Data Display:**
- Company logo
- Role title
- Duration
- Key achievement (1 line)

---

### 3. Impact Dashboard (Grid Layout)

**Layout:** 3-column grid (responsive to 1-column mobile)

```
┌─────────────────┬─────────────────┬─────────────────┐
│  COST SAVINGS   │  AVAILABILITY   │  SCALE          │
│                 │                 │                 │
│    [90%+]       │    [99.9%]      │   [600+]        │
│  Gauge Chart    │  Circular Chart │  Counter        │
│                 │                 │                 │
│  Infrastructure │  System Uptime  │  Services       │
│  Cost Reduction │  Maintained     │  Migrated       │
└─────────────────┴─────────────────┴─────────────────┘

┌─────────────────┬─────────────────┬─────────────────┐
│  PROJECTS       │  CERTIFICATIONS │  RECOMMENDATIONS│
│                 │                 │                 │
│    [20+]        │     [8+]        │    [29]         │
│  Icon Grid      │  Badge Display  │  Quote Icon     │
│                 │                 │                 │
│  Infrastructure │  Cloud & DevOps │  LinkedIn       │
│  Deliveries     │  Certified      │  Testimonials   │
└─────────────────┴─────────────────┴─────────────────┘
```

**Styling:**
- Each card: glass effect, border gradient
- Charts: Animated on scroll into view
- Icons: Custom SVG or font-awesome
- Hover: Subtle scale + glow effect

---

### 4. Technical Expertise (Radar + Bars)

**Layout:** Split (50/50)

**Left Side:**
```
[Radar/Spider Chart]
Displaying 5 main areas:
- Cloud Platforms (95%)
- Container Orchestration (90%)
- Infrastructure as Code (95%)
- CI/CD Automation (90%)
- Monitoring & Security (85%)
```

**Right Side:**
```
[Skill Bars with Icons]

☁️  Google Cloud Platform    [████████████████░] 95%
☁️  Amazon Web Services       [████████████████░] 85%
🐳  Kubernetes                [█████████████████░] 90%
📦  Docker                    [█████████████████░] 90%
🔧  Terraform                 [████████████████░] 95%
🔄  Jenkins                   [████████████████░] 90%
🔐  Vault / Teleport          [███████████████░] 85%
```

**Animation:**
- Bars fill on scroll
- Radar chart draws progressively
- Percentage counters animate

---

### 5. Featured Projects (Carousel + Cards)

**Layout:** 3-column card grid with "Load More" or carousel

**Card Design:**
```
┌──────────────────────────────┐
│  [Project Icon/Image]        │
│                              │
│  SPSE Cloud Migration        │
│  ─────────────────────       │
│  600+ services migrated to   │
│  government-certified cloud  │
│                              │
│  Impact:                     │
│  • Enhanced Security         │
│  • Improved Reliability      │
│  • 100% IaC Automation       │
│                              │
│  [View Details →]            │
└──────────────────────────────┘
```

**Projects to Feature:**
1. SPSE Cloud Migration (600+ services)
2. Infrastructure Cost Optimization (90%+)
3. Teleport Access Control
4. Vault Secret Management
5. Jenkins Shared Library
6. Open Source CV Builder

**Styling:**
- Image/icon at top
- Glass card with gradient border
- Tag pills for technologies
- Hover: Lift effect + border glow

---

### 6. GitHub Portfolio Section

**Layout:** Stats + Repository Grid

**GitHub Stats Widget:**
```
┌─────────────────────────────────────┐
│  GitHub Activity                    │
│  ────────────────────────────       │
│                                     │
│  📊 18 Repositories                 │
│  ⭐ 13 Stars                        │
│  🍴 22 Forks                        │
│                                     │
│  Top Languages:                     │
│  █ Shell      17%                   │
│  █ Dockerfile 11%                   │
│  █ JavaScript  6%                   │
│  █ Others     66%                   │
└─────────────────────────────────────┘
```

**Featured Repos (Cards):**
```
┌─────────────────────┬─────────────────────┐
│  📄 cv              │  ☸️ sonarqube-k8s   │
│  Markdown CV Builder│  SonarQube on K8s   │
│  ⭐ 5 | 🍴 6        │  ⭐ 5 | 🍴 16       │
│  CSS                │  YAML               │
│  [View on GitHub →] │  [View on GitHub →] │
└─────────────────────┴─────────────────────┘
```

**Visualization:**
- Live GitHub stats API integration
- Language donut chart
- Contribution heatmap (optional)
- Repository cards with hover effect

---

### 7. Testimonials (Carousel)

**Layout:** Full-width carousel with quotes

**Design:**
```
┌────────────────────────────────────────────────────────┐
│                                                        │
│  "If I had to describe David in one word, it would   │
│   be 'unflappable'... His technical craft is second  │
│   to none. He was a cornerstone of the team that     │
│   achieved a staggering 90%+ reduction..."           │
│                                                        │
│   [GovTech Logo]  Felix Jingga                        │
│   Procurement     Chief Technology Officer            │
│                                                        │
│                   [● ○ ○ ]  ← Carousel indicators    │
└────────────────────────────────────────────────────────┘
```

**Features:**
- Large quote typography
- GovTech Procurement logo (company branding)
- Auto-rotate every 8 seconds
- Swipe on mobile
- 2-3 featured testimonials

**Note:** Both testimonials (Felix Jingga and Andreas Cendranata) are from GovTech Procurement, so company logo is used instead of individual photos for professional, unified presentation.

---

### 8. Certifications Badge Wall

**Layout:** Grid of certification badges

```
┌───────┬───────┬───────┬───────┐
│  GCP  │  AWS  │ Agile │DevOps │
│ Assoc.│DevOps │ Found.│ Essen.│
│ Cloud │  Eng. │       │       │
│  Eng. │       │       │       │
└───────┴───────┴───────┴───────┘
┌───────┬───────┬───────┬───────┐
│  GCP  │ AWS   │Tokopedia│ MIE │
│ Fund. │ Dev.  │  Way   │Cert. │
└───────┴───────┴───────┴───────┘
```

**Styling:**
- Badge/shield design
- Organization logos
- Clickable (link to credentials)
- Hover: Tooltip with details

---

### 9. Career Visualization (Sankey/Flow Diagram)

**Type:** Interactive flow diagram

**Concept:**
```
Technologies        Roles              Companies
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PHP/JS  ─┐
         ├──→ Web Dev  ──┐
Docker  ─┤              ├──→ Freelance
        └──→ Sys Analyst┴──→ BINUS IT
                            ↓
Kubernetes ──┐              
CI/CD  ──────┼──→ DevOps ───→ Pegipegi
Terraform ───┘                  ↓
                                GoTo Group
GCP/AWS ─────┐                  ↓
IaC  ────────┼──→ Infra Eng.─→ GovTech
Automation ──┘                  ↓
                                Rakuten
```

**Alternative:** Timeline with technology tags

---

### 10. Contact Section (Simple CTA)

**Design:**
```
┌────────────────────────────────────────┐
│                                        │
│         Let's Build Something          │
│         Amazing Together               │
│                                        │
│  Interested in infrastructure          │
│  modernization or cloud optimization?  │
│                                        │
│  ┌──────────────────────┐              │
│  │ 📧 Email              │              │
│  ├──────────────────────┤              │
│  │ 💼 LinkedIn           │              │
│  ├──────────────────────┤              │
│  │ 💻 GitHub             │              │
│  ├──────────────────────┤              │
│  │ ✍️  Medium (pending)  │              │
│  └──────────────────────┘              │
└────────────────────────────────────────┘
```

**Styling:**
- Dark section with gradient
- Icon buttons with hover glow
- Simple, not overwhelming
- Optional: Contact form

---

## 📊 Data Visualization Libraries

### Recommended Stack
```javascript
// Charts & Graphs
- Chart.js (simple, lightweight)
- D3.js (advanced, custom)
- ApexCharts (modern, interactive)

// Animations
- GSAP (smooth scrolling, counters)
- AOS (animate on scroll)
- Lottie (JSON animations)

// Icons
- Lucide Icons / Heroicons (SVG)
- Custom tech stack icons

// UI Framework
- Vanilla CSS (recommended)
- TailwindCSS (if requested)
```

---

## 🎭 Animation Strategy

### On Page Load
- Hero text: Fade in + slide up
- Stats cards: Stagger animation (0.1s delay each)
- Background: Subtle particle effect

### On Scroll
- Sections: Fade in when 30% visible
- Charts: Draw/fill when visible
- Counters: Animate from 0 to target value

### Hover Effects
- Cards: Lift (translateY -5px)
- Buttons: Glow + scale
- Links: Underline slide
- Project cards: Border glow

### Transitions
- Smooth scrolling between sections
- Page transitions: Minimal, fast (200-300ms)
- Charts: Progressive rendering (500-1000ms)

---

## 📱 Responsive Breakpoints

```css
/* Mobile First */
--mobile: 320px - 640px
--tablet: 641px - 1024px
--desktop: 1025px - 1440px
--wide: 1441px+

/* Grid Adjustments */
Mobile:  1 column, vertical timeline
Tablet:  2 columns, compact cards
Desktop: 3 columns, full features
Wide:    3 columns, max-width container
```

---

## 🔤 Typography

### Font Stack
```css
/* Headings */
font-family: 'Inter', 'Outfit', sans-serif
font-weight: 700-900 (Bold to Black)

/* Body */
font-family: 'Inter', system-ui, sans-serif
font-weight: 400-500 (Regular to Medium)

/* Code/Tech */
font-family: 'JetBrains Mono', 'Fira Code', monospace
```

### Hierarchy
```
H1: 3.5rem (56px) - Hero headline
H2: 2.5rem (40px) - Section titles
H3: 1.75rem (28px) - Card titles
H4: 1.25rem (20px) - Subsections
Body: 1rem (16px) - Paragraph text
Small: 0.875rem (14px) - Captions, labels
```

---

## 🎯 Performance Optimization

### Critical
- ✅ Lazy load images below fold
- ✅ Defer chart rendering until visible
- ✅ Optimize SVG icons
- ✅ Minimize CSS/JS bundle
- ✅ Use modern image formats (WebP)

### Progressive Enhancement
- ✅ Static content loads first
- ✅ Animations added progressively
- ✅ Charts render after content
- ✅ Fallbacks for no-JS (rare but considerate)

---

## 📋 Component Priority List

### Phase 1: Core Content
1. Hero section with stats
2. Career timeline
3. Impact dashboard
4. Featured projects (top 6)

### Phase 2: Enhanced Content
5. Technical expertise visualization
6. GitHub portfolio section
7. Testimonials carousel

### Phase 3: Polish
8. Certifications wall
9. Career flow diagram
10. Contact section

---

## 🚀 Technical Implementation Plan

### File Structure
```
landing-page/
├── index.html
├── css/
│   ├── main.css
│   ├── components/
│   │   ├── hero.css
│   │   ├── timeline.css
│   │   ├── dashboard.css
│   │   └── cards.css
├── js/
│   ├── main.js
│   ├── animations.js
│   ├── charts.js
│   └── data.js (content from content-data-source.md)
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
└── data/
    └── content.json (generated from .md)
```

### Data Integration
- Convert `content-data-source.md` to JSON
- Separate data from presentation
- Easy updates without touching code

---

## ✨ Unique Selling Points

### What Makes This Special:
1. **Data-Driven**: Every claim backed by metrics
2. **Interactive**: Charts, timelines, hover effects
3. **Professional**: Enterprise-grade design quality
4. **Personal**: Authentic testimonials and story
5. **Technical**: Showcases infrastructure expertise through design
6. **Modern**: Latest CSS features (glassmorphism, gradients)

### Wow Factor Elements:
- Animated statistics counters
- Interactive timeline exploration
- Radar chart for skills
- GitHub live integration
- Smooth scroll animations
- Glass morphism cards
- Gradient accents
- Dark mode optimized

---

*End of Visual Planning Document*
