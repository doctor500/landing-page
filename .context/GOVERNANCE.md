# AI Agent Governance

> **Status: ACTIVE**  
> **Current Mode: Approval Mode (Default)**  
> **Last Updated: 2026-02-22**

This document establishes protocols for AI Agent interaction with this repository. All AI agents operating on this project **MUST** read and follow these rules.

---

## Core Principle

**Safety over Speed** — When in doubt, ask for approval.

---

## Mandatory Reading

Before performing ANY work on this repository, AI agents **MUST** read and follow these documents in order:

1. **This file** — `.context/GOVERNANCE.md` (protocols & approval rules)
2. **Branding Context** — `branding-context/v1/` repo (canonical personal/professional data)
3. **Project Context** — `.context/PROJECT_CONTEXT.md` (architecture, structure, guidelines)
4. **Procedures** — `.context/PROCEDURES.md` (operational workflows)
5. **Security** — `.context/SECURITY.md` (data privacy & sanitization rules)

> [!CAUTION]
> Skipping any of these documents is a governance violation.
> If a procedure references SECURITY.md, the agent MUST read and follow it.

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
- Content sync operations (LinkedIn, Medium, or any external source)

### Content Sync Workflows

Content sync operations involve browser automation and writing files that may contain personal data.

**Approval Requirements:**
- Starting a sync procedure → **Requires approval** (confirm which source and scope)
- Writing sync output files (`*-sync.json`) → Auto-execute (governed by PROCEDURES.md)
- Integrating sync data into active content → **Requires approval** (review sanitized data first)

**Mandatory Steps:**
1. Read `PROCEDURES.md` for the specific sync procedure before starting
2. Read `SECURITY.md` before handling any extracted data
3. Follow the Data Sanitization Checklist (SECURITY.md) before integration
4. Verify no sensitive data leaks into committed content files
5. Confirm sync file retention policy is followed (delete private sync files after use)

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

### Security & Data Privacy

**Mandatory:** All agents MUST read `.context/SECURITY.md` before any of the following activities:
- Content sync procedures (LinkedIn, Medium, or any external source)
- Modifying files in `content/` directory
- Handling any personally identifiable information (PII)
- Reviewing or integrating data extracted from external sources

**Before Every Commit, agents MUST verify:**

- [ ] No private sync files are staged (`git status` check)
- [ ] No credential IDs, private emails, or API keys in changed files
- [ ] No authentication tokens embedded in URLs
- [ ] Gitignore rules are intact for private files
- [ ] Data sanitization checklist (SECURITY.md) was followed if content was updated

> [!WARNING]
> If an agent detects potential data leakage at any point, it MUST:
> 1. **STOP** execution immediately
> 2. Alert the user with specifics of the potential leak
> 3. Do NOT commit or push until the user confirms it is safe

**Incident Awareness:**
- Agents should be aware of incident response procedures in SECURITY.md
- If a private sync file is accidentally staged, follow SECURITY.md § Incident Response

### Changelog Updates

After completing any feature, fix, or significant change:

1. **Update `.context/CHANGELOG.md`** with the change under the appropriate version
2. Use the existing format: `## [version] - date` with categorized subsections (`Added`, `Changed`, `Fixed`, `Documentation`)
3. If no version bump is warranted, add under the current version heading

**What requires a changelog entry:**
- New features or components
- Bug fixes
- Content or data structure changes
- Documentation changes (procedural updates, governance changes)
- Design system updates

**What does NOT require a changelog entry:**
- Read-only research or investigation
- Plan documents or brain artifacts
- Trivial formatting-only edits

---

## Pre-Flight Checks (Mandatory)

Before making ANY changes, AI agents MUST verify:

- [ ] I have read `.context/GOVERNANCE.md`
- [ ] I have read `.context/PROJECT_CONTEXT.md`
- [ ] I have read `.context/PROCEDURES.md`
- [ ] I have read `.context/SECURITY.md`
- [ ] I understand the current project state
- [ ] I know which mode I'm operating in (Approval or Auto Pilot)
- [ ] I have a clear plan for the requested changes
- [ ] I know how to verify my changes
- [ ] I will update `.context/CHANGELOG.md` after completing changes
- [ ] I will run `git status` before committing to check for data leaks

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
- **Procedures:** `.context/PROCEDURES.md`
- **Security:** `.context/SECURITY.md`
- **Version History:** `.context/CHANGELOG.md`
- **Quick Reference:** `GEMINI.md` (root level)

---

*This governance framework is inspired by the k8s-selfhosted project governance model.*
