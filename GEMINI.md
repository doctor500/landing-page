# Project: Personal Landing Page

## 📖 Documentation

**Start Here:** `.context/PROJECT_CONTEXT.md` ⭐

Contains everything you need:
- Project overview & tech stack
- Current features & components
- Design system guidelines
- Recent changes & decisions
- Development commands

**Also see:** `.context/CHANGELOG.md` for version history

---

## 🚀 Quick Start

```bash
# Install
npm install

# Dev server
npm run dev  # http://localhost:3000

# Build
npm run build
```

---

## 🎯 Key Info

**Framework:** Next.js 14 + TypeScript  
**Design:** Dark/light mode with design system tokens  
**Components:** 6 main components (Hero, Timeline, Stats, Testimonials, Nav, Theme Toggle)

---

## 📁 Structure

```
landing-page/
├── .context/          # 📖 Documentation (start here)
├── app/              # Next.js app
├── components/       # UI components
├── lib/data.ts      # Content data
├── design-system/    # Design tokens & guidelines
└── ideas/           # Content planning
```

---

## 🎨 Design System

**All styling uses tokens** from `design-system/tokens.css`

Examples:
- `--accent-cyan`, `--accent-purple`
- `--space-4`, `--space-20`
- `.glass-card`, `.container-padding`

**Rule:** Never hard-code colors or spacing

---

## 💡 For AI Agents

1. Read `.context/PROJECT_CONTEXT.md` first
2. Use design system tokens for all styling
3. Keep changes simple (complexity failed before)
4. Update changelog when completing features
5. **Documentation Rule:** Do NOT create new markdown files
   - Update existing `.context/` files instead
   - Keep project clean (no redundant docs)
   - Only add essential information

---

**Complete info in:** `.context/PROJECT_CONTEXT.md`

*Last Updated: 2026-01-02*
