# AI Agent Governance

> **Status: ACTIVE**  
> **Current Mode: Approval Mode (Default)**  
> **Last Updated: 2026-02-02**

This document establishes protocols for AI Agent interaction with this repository. All AI agents operating on this project **MUST** read and follow these rules.

---

## Core Principle

**Safety over Speed** — When in doubt, ask for approval.

---

## Mode 1: Approval Mode (Default)

**This is the default mode for all AI agents at session start.**

### Protocol

1. **Requirement Gathering**
   - Ask clarifying questions until the goal is 100% clear
   - Understand the full scope before proposing solutions
   - Verify assumptions with the user

2. **Plan Formulation**
   - Propose a detailed plan BEFORE taking any action
   - Explain what will be changed and why
   - List all files that will be created, modified, or deleted
   - Describe testing/verification steps

3. **Explicit Approval**
   - Ask: **"Do you approve this plan?"**
   - Wait for explicit confirmation ("Yes", "Proceed", "Approved", etc.)
   - Do NOT proceed without approval

4. **Execution**
   - Execute ONLY the approved plan
   - If you discover new issues during execution, STOP and ask for approval to adjust the plan
   - Report completion with verification results

### What Requires Approval

- All code changes (create, modify, delete files)
- All destructive commands (delete, overwrite, deploy)
- Installing dependencies or system packages
- Modifying Git configuration or submodules
- Changes to build/deploy pipelines
- Design system token updates
- Content structure changes

### Exceptions (Safe to Auto-Execute)

- Reading files or directories
- Searching code
- Viewing documentation
- Running read-only commands (`git status`, `npm list`, `ls`)
- Creating plan documents in brain artifacts

---

## Mode 2: Auto Pilot Mode (Opt-in Only)

**Trigger:** User explicitly says **"Auto pilot"**, **"Fast mode"**, or **"Auto mode"**

### Profile A: Standard (Recommended)

**Behavior:**
- Plan briefly (1-2 sentences), then auto-execute safe steps
- Auto-run commands that are clearly safe and reversible
- STOP for:
  - Ambiguous decisions (multiple valid approaches)
  - Destructive actions (file deletion, package uninstall)
  - Errors or unexpected behavior
  - Design decisions requiring user input

**Example:**
```
User: "Update the hero section text to say 'Welcome'"
AI: "I'll update content/personal.json with the new tagline."
     [executes automatically]
     "Done. Updated hero section text."
```

### Exit Auto Pilot Mode

Auto Pilot Mode automatically exits when:
- The AI encounters an error
- The AI needs a design decision
- The user sends a new message
- The current task is complete

To re-enter, user must explicitly trigger it again.

---

## AI Agent Acknowledgment

By operating on this repository, you acknowledge:

1. ✅ You have read and understood these governance rules
2. ✅ You will default to **Approval Mode** at every session start
3. ✅ You will NOT bypass approval steps unless explicitly authorized by user
4. ✅ You will prioritize safety over speed
5. ✅ You will follow project-specific rules defined below

---

## Project-Specific Rules

### Web Application Requirements

1. **Testing After Changes**
   - Visual changes: Verify via `npm run dev` and browser check
   - Component changes: Run unit tests (`npm test`)
   - Build pipeline: Verify `npm run build` succeeds

2. **Design System Constraints**
   - NEVER hardcode colors or spacing values
   - Always use design system tokens from CDN (`--accent-cyan`, `--space-20`, etc.)
   - Verify token compatibility before using new tokens
   - See `.context/PROJECT_CONTEXT.md` for design system guidelines

3. **Git Submodule Safety**
   - DO NOT commit file changes inside `design-system/` directly to this repo
   - Follow proper submodule workflow (commit to submodule repo first)
   - See `.context/PROJECT_CONTEXT.md` for detailed submodule procedures

4. **Content Management**
   - Content changes should update JSON files in `content/` directory
   - Type definitions in `lib/content.ts` must stay in sync
   - Avoid duplicating URLs between `personal.json` and `links.json`

---

## Pre-Flight Checks (Mandatory)

Before making ANY changes, AI agents MUST verify:

- [ ] I have read `.context/PROJECT_CONTEXT.md`
- [ ] I understand the current project state
- [ ] I know which mode I'm operating in (Approval or Auto Pilot)
- [ ] I have a clear plan for the requested changes
- [ ] I know how to verify my changes

---

## Example Workflows

### Approval Mode Example

```
User: "Add a new testimonial to the carousel"

AI: "I'll help you add a new testimonial. First, a few questions:
     1. What is the person's name and role?
     2. What is the testimonial text?
     3. Do you have a profile image URL?"

User: [provides information]

AI: "Here's my plan:
     1. Update lib/data.ts to add new testimonial object
     2. Verify the carousel still works via npm run dev
     3. Check responsive layout
     
     Do you approve this plan?"

User: "Yes"

AI: [executes plan and reports results]
```

### Auto Pilot Mode Example

```
User: "Auto pilot. Fix the typo in the hero section."

AI: "Auto Pilot Mode activated. Scanning hero section..."
     [finds typo, updates content/personal.json]
     "Fixed typo in hero section ('Enginear' → 'Engineer')."
```

---

## Governance Override

If you believe these rules are preventing a reasonable action, you may:

1. Explain why the governance rule is blocking progress
2. Propose an alternative approach that maintains safety
3. Ask the user for explicit permission to override

**Never silently bypass governance rules.**

---

## Related Documentation

- **Project Overview:** `.context/PROJECT_CONTEXT.md`
- **Version History:** `.context/CHANGELOG.md`
- **Quick Reference:** `GEMINI.md` (root level)

---

*This governance framework is inspired by the k8s-selfhosted project governance model.*
