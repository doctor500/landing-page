# Project

## Overview

David Layardi's personal landing page — the live site at [layardi.com](https://www.layardi.com).
Next.js 14 (App Router) + TypeScript + Tailwind, statically exported to GitHub Pages. Renders
the hero (name, role, tagline, bio), an impact stats dashboard, the career timeline, latest
Medium articles, and testimonials. Personal/professional content is pulled from canonical
`branding-context/v1/*.json` into `content/*.json` and `lib/data.ts`.

## Ownership & Access

Owner: David Layardi (GitHub `doctor500`). Repo `doctor500/landing-page`, `main` is both the
default and production branch — no branch protection and no CI gate on pull requests. Deploys
to GitHub Pages via `.github/workflows/nextjs.yml` (static export, `output: 'export'`) on
push to `main`; domain `layardi.com` / `www.layardi.com` via `public/CNAME`.

Design tokens are served from the `doctor500/design-system` repo through the CDN at
`design-token.layardi.com/v1.1/tokens.css`, wired in `app/layout.tsx`. `design-system/` is a
tracked git submodule — never commit file changes inside it directly (see
`.agents/PROCEDURES.md`).

## Scope

In scope: content in `content/*.json`, complex data in `lib/data.ts`, components in
`components/` and `app/`, theming (next-themes + design tokens), SEO metadata, tests
(`__tests__/`, `e2e/`), and the docs in `.agents/`.

Out of scope: the canonical personal and professional data — that lives in
`branding-context/v1/*.json` and this repo only consumes it; the design system itself
(`doctor500/design-system`, tokens served from the CDN); the full CV, which belongs to
`doctor500/cv`; and the Medium article source, which is synced into `content/medium-sync.json`.

## Key Links

- Repo: https://github.com/doctor500/landing-page
- Live: https://www.layardi.com
- Canonical data source: `branding-context/v1/*.json`
- Design system: https://github.com/doctor500/design-system
- Full CV: https://doctor500.github.io/cv/
