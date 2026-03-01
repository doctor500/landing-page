# Operational Procedures

This document contains common operational procedures for maintaining the landing page project.

---

## Table of Contents

1. [Sync from Branding Context](#sync-from-branding-context)
2. [Sync Content from Medium](#sync-content-from-medium)
3. [Design System Token Updates](#design-system-token-updates)
4. [Git Submodule Management](#git-submodule-management)

---

## Sync from Branding Context

**Purpose:** Update all landing-page files when canonical data changes in `branding-context/v1/`.

> **LinkedIn sync** has moved to `branding-context/.context/PROCEDURES.md`. After syncing LinkedIn data into branding-context, follow the steps below to propagate changes here.

### Files to Update

> [!IMPORTANT]
> Personal data is scattered across multiple file types — not just JSON data files.
> Always check **all** locations below when syncing.

#### Primary Data Files
| File | Data | Canonical Source |
|------|------|-----------------|
| `content/personal.json` | Name, role, bio, years, URLs | `identity.json` + `contact.json` |
| `lib/data.ts` | Career timeline, stats, achievements | `experience.json` + `projects.json` |

#### SEO & Metadata
| File | Data | Watch For |
|------|------|-----------|
| `app/layout.tsx` | Page title, meta description, OG tags, Twitter card | Years of experience, role title, keywords |

#### Documentation & Specs
| File | Data | Watch For |
|------|------|-----------|
| `ideas/content-gathering-summary.md` | Stats, section mapping | Metric values, display decisions |
| `ideas/content-data-source.md` | Data source references | Already references `branding-context/v1/` |
| `ideas/visual-presentation-plan.md` | Wireframe labels | Role title, company names in ASCII art |

#### Tests
| File | Data | Watch For |
|------|------|-----------|
| `__tests__/components/career-timeline.test.tsx` | Comments referencing company names | Company name changes |

### Verification Step

After updating, **always run this grep** to catch any remaining stale values:

```bash
grep -rn "SEARCH_TERM" --include="*.ts" --include="*.tsx" --include="*.json" --include="*.md" \
  --exclude-dir=node_modules --exclude-dir=.next | grep -v CHANGELOG | grep -v ".context/"
```

Common search terms to check:
- Old role title (e.g., `"Automation Engineer"`, `"Infrastructure & AI Engineer"`)
- Old years count (e.g., `"6+ years"`, `"7+ years"`)
- Old company names (e.g., `"GoTo Group"`)

---

## Sync Content from Medium

**Purpose:** Extract latest published articles from Medium profile.

**Security:** See [SECURITY.md](.context/SECURITY.md) for data privacy guidelines.

**Frequency:** On-demand (run after publishing new articles or updating bio)

**Output:** `content/medium-sync.json`

### Prerequisites

- Browser MCP must be available
- Medium profile URL: `https://medium.com/@davidlayardi`

### Procedure Steps

**Step 1: Navigate to Profile**

Use browser subagent to open your Medium profile:
```
Task: Navigate to https://medium.com/@davidlayardi and wait for full page load
```

**Step 2: Extract Author Information**

Using browser MCP tools, extract:
- Author name (from profile header)
- Author bio/description (from profile section)

**Step 3: Extract Article List**

Locate the article list and extract for each article (up to 10 latest):
- Article title
- Article URL
- Published date
- Reading time estimate
- Preview/subtitle text
- Claps/engagement count (if visible)

**Step 4: Structure the Data**

Format into this JSON structure:

```json
{
  "syncDate": "2026-02-02T02:00:00+09:00",
  "profileUrl": "https://medium.com/@davidlayardi",
  "author": {
    "name": "David Layardi",
    "bio": "Author bio from Medium profile..."
  },
  "articles": [
    {
      "title": "Article Title",
      "url": "https://medium.com/@davidlayardi/article-slug",
      "publishedDate": "Jan 15, 2026",
      "readTime": "5 min read",
      "description": "Article preview text...",
      "claps": 42
    }
  ],
  "totalArticles": 10
}
```

**Step 5: Save Output**

Write the structured data to `content/medium-sync.json`

**Step 6: Verification**

- [ ] Validate JSON syntax
- [ ] Verify all article URLs are correct and accessible
- [ ] Check article count matches expected number
- [ ] Confirm dates are properly formatted

### Integration Steps

After running the sync procedure:

1. **Review the sync file:** Open `content/medium-sync.json` and verify accuracy
2. **Commit the file:** Medium sync is tracked in git (needed for articles section)
   ```bash
   git add content/medium-sync.json
   git commit -m "chore: Update Medium articles sync"
   ```
3. **Test locally:** Run `npm run dev` and verify articles display correctly

> **Note:** Unlike LinkedIn sync, Medium sync contains only public article data and is safe to commit.

### Troubleshooting

- **Pagination:** If you have >10 articles, you may need to scroll or paginate
- **Paywall Content:** Some article details may be hidden behind Medium's paywall
- **Profile Privacy:** Ensure your Medium profile is public

---

## Design System Token Updates

**Purpose:** Update design system tokens distributed via CDN.

**Frequency:** When design tokens need to be updated or versioned

### Prerequisites

- Access to `design-system/` submodule
- Understanding of current design system version
- CDN URL: `https://design-token.layardi.com/`

### Procedure Steps

1. **Navigate to submodule:**
   ```bash
   cd design-system
   ```

2. **Make changes to token files:**
   - Edit `tokens.css` or relevant token files
   - Update version number in `tokens.css` header comment

3. **Update build script:**
   - Edit `build.sh` to reflect new version
   - Run `./build.sh` to create versioned output

4. **Commit to submodule repo:**
   ```bash
   git add .
   git commit -m "feat: Update tokens to vX.X.X"
   git push origin main
   ```

5. **Wait for Netlify deploy:**
   - Netlify automatically builds and deploys the CDN
   - Verify new version is accessible

6. **Update landing page:**
   ```bash
   cd ..
   # Update app/layout.tsx with new CDN URL version
   git add design-system app/layout.tsx
   git commit -m "chore: Update design system to vX.X.X"
   ```

### Important Constraints

- **NEVER** use local CSS imports for tokens in production code
- **ALWAYS** use CDN URLs for token distribution
- **DO NOT** commit file changes inside `design-system/` to the landing-page repo

---

## Git Submodule Management

**Purpose:** Proper workflow for updating the `design-system/` Git submodule.

**Frequency:** When design system needs updates

### Workflow

1. **Make changes in submodule:**
   ```bash
   cd design-system
   # Make your changes
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Update submodule pointer in parent repo:**
   ```bash
   cd ..
   git add design-system  # Only adds the pointer, not files
   git commit -m "chore: Update design-system submodule"
   git push origin main
   ```

### Warning Signs

If you see "embedded git repository" warnings:
- You may be adding files directly instead of the pointer
- Run `git status` to check what's being staged
- Only `design-system` (folder path) should appear, not individual files

### Correct Behavior

✅ **Correct:** `git add design-system` → Updates commit pointer  
❌ **Incorrect:** `git add design-system/tokens.css` → Tries to add files directly

---

## General Best Practices

### Before Running Procedures

1. **Read the governance:** Follow `.context/GOVERNANCE.md` protocols
2. **Check prerequisites:** Ensure all tools and access are available
3. **Backup important data:** Before making changes to active content files

### After Running Procedures

1. **Review output:** Always verify extracted/generated data
2. **Test locally:** Run `npm run dev` before committing changes
3. **Update changelog:** Document significant changes in `.context/CHANGELOG.md`
4. **Commit changes:** Use conventional commit messages

### When Something Goes Wrong

1. **Don't panic:** Most changes can be reverted with `git restore`
2. **Check git status:** Understand what changed before committing
3. **Ask for help:** Reference this documentation or governance rules
4. **Document issues:** Update procedures if you find better approaches

---

*Last Updated: 2026-02-09*
