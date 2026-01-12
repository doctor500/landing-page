---
description: Update project context with CSS versioning and Plan Mode requirements
---

# Update Project Context for Design System Changes

Use this prompt to update another project's context documentation (`.context/PROJECT_CONTEXT.md` or similar) to reflect the recent upgrading of the shared design system.

## Prompt

```markdown
We have updated the centralized design system (`doctor500/design-system`) to version **1.1.0** with a new versioning architecture. Please update this project's specification/context files to align with these new standards.

### 1. Update Design System Integration Info

Update the "Design System" or "Styling" section of the project context with the following:

- **Source:** Private components (`doctor500/design-system` - submodule in `design-system/`)
-   **Distribution:** `https://design-token.layardi.com/v1.1/tokens.css` (Netlify CDN)
-   **Integration Constraint:** NEVER use local CSS imports for tokens in production code. Always use the CDN link.
-   **Versioning Strategy:**
    -   **Immutable:** `/v1.0.0`, `/v1.1.0` (Use for strict stability)
    -   **Release Channels:** `/v1` (Latest v1.x), `/latest` (Absolute newest)

### 2. Add "Plan Mode" Requirement

Add the following rule to the "Development Guidelines" or "Rules for AI" section. This is a STRICT requirement for all agents working on this project:

> **Plan Mode:** If the user asks for a plan or evaluation, you MUST propose the strategy and wait for explicit confirmation before writing any code or executing changes.

### 3. Verification

After updating the context, please verify:
1.  Does the project typically load tokens via `<link>` tag? If so, ensure the URL is updated to `/v1.1/tokens.css` or `/v1/tokens.css` in the project code (e.g., `app/layout.tsx`).
2.  Are there any hardcoded colors that should be replaced with the new semantic tokens (e.g., `--fgColor-accent`)?
```
