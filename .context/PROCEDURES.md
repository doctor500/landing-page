# Operational Procedures

This document contains common operational procedures for maintaining the landing page project.

---

## Table of Contents

1. [Sync Content from LinkedIn](#sync-content-from-linkedin)
2. [Sync Content from Medium](#sync-content-from-medium)
3. [Design System Token Updates](#design-system-token-updates)
4. [Git Submodule Management](#git-submodule-management)

---

## Sync Content from LinkedIn

**Purpose:** Extract latest professional information from LinkedIn profile for content updates.

**Security:** See [SECURITY.md](.context/SECURITY.md) for data privacy guidelines.

**Frequency:** On-demand (run when you change jobs, update headline, or modify your profile)

**Output:** `content/linkedin-sync.json`

### Prerequisites

- Browser MCP must be available
- You should be logged into LinkedIn for full profile access
- LinkedIn profile URL: `https://www.linkedin.com/in/david-lay`

### Procedure Steps

**Step 1: Navigate to Profile**

Use browser subagent to open your LinkedIn profile:
```
Task: Navigate to https://www.linkedin.com/in/david-lay and wait for full page load
```

**Step 2: Extract Profile Data**

Using browser MCP tools, extract the following sections:

**Profile Header:**
- Name and headline
- Location
- Profile image URL
- Connections count

**About Section:**
- Full professional summary text

**Experience Section:**
- For each position (especially current + last 2-3):
  - Job title
  - Company name and LinkedIn URL
  - Employment type (Full-time, Contract, etc.)
  - Location
  - Start date and end date
  - Duration
  - Job description/responsibilities

**Education Section:**
- School name and LinkedIn URL
- Degree type
- Field of study
- Start and end dates
- Activities and societies (if listed)

**Certifications Section:**
- Certification name
- Issuing organization
- Issue and expiration dates
- Credential ID and URL (if available)

**Skills Section:**
- Top skills with endorsement counts
- All skills listed on profile

**Languages:**
- Language name and proficiency level

**Projects:** (if listed)
- Project name, description, and URL

**Recommendations:**
- Count of recommendations received and given

**Step 3: Structure the Data**

Format extracted data into this comprehensive JSON structure:

```json
{
  "syncDate": "2026-02-02T02:00:00+09:00",
  "profileUrl": "https://www.linkedin.com/in/david-lay",
  "profile": {
    "name": "David Layardi",
    "headline": "Staff Platform Engineer | Kubernetes | Cloud Infrastructure",
    "location": "Jakarta, Indonesia",
    "profileImageUrl": "https://media.licdn.com/dms/image/...",
    "about": "Professional summary...",
    "currentPosition": {
      "title": "Staff Platform Engineer",
      "company": "Tech Company",
      "companyUrl": "https://www.linkedin.com/company/tech-company",
      "employmentType": "Full-time",
      "location": "Jakarta, Indonesia",
      "startDate": "Jan 2023",
      "endDate": "Present",
      "duration": "2 yrs 2 mos",
      "description": "Job responsibilities..."
    },
    "experience": [
      {
        "title": "Previous Position",
        "company": "Previous Company",
        "companyUrl": "...",
        "employmentType": "Full-time",
        "location": "...",
        "startDate": "...",
        "endDate": "...",
        "duration": "...",
        "description": "..."
      }
    ],
    "education": [
      {
        "school": "University Name",
        "schoolUrl": "...",
        "degree": "Bachelor of Science",
        "fieldOfStudy": "Computer Science",
        "startDate": "2014",
        "endDate": "2018",
        "activities": "..."
      }
    ],
    "certifications": [
      {
        "name": "Certification Name",
        "issuingOrganization": "Organization",
        "issueDate": "...",
        "expirationDate": "...",
        "credentialId": "...",
        "credentialUrl": "..."
      }
    ],
    "skills": {
      "top": [
        {
          "name": "Skill Name",
          "endorsements": 47
        }
      ],
      "all": ["Skill1", "Skill2", "..."]
    },
    "languages": [
      {
        "name": "English",
        "proficiency": "Professional working proficiency"
      }
    ],
    "projects": [
      {
        "name": "Project Name",
        "description": "...",
        "url": "..."
      }
    ],
    "recommendations": {
      "received": 8,
      "given": 5
    },
    "connections": "500+"
  }
}
```

**Note:** Not all fields may be available depending on your profile's public visibility settings. Extract what's accessible.

**Step 4: Save Output**

Write the structured data to `content/linkedin-sync.json`

**Step 5: Verification**

- [ ] Validate JSON syntax (use `jq . content/linkedin-sync.json` or JSON validator)
- [ ] Review extracted data for accuracy
- [ ] Check all required fields are populated
- [ ] Verify current position matches LinkedIn

### Integration Steps

After running the sync procedure:

1. **Review the sync file:** Open `content/linkedin-sync.json` and verify accuracy
2. **Update active content:**
   - Update `content/personal.json`:
     - `role` field with current position title
     - `bio` field with About section (if changed)
     - `linkedinUrl` to ensure it matches
   - Update `lib/data.ts`:
     - `experience` array with full work history
     - `skills` array with top skills
     - Stats/counters (years of experience, certifications count)
   - Consider adding:
     - Certifications to a dedicated section
     - Education details
     - Projects showcase
3. **Test locally:** Run `npm run dev` and verify changes appear correctly
4. **Cleanup:** Delete or archive `linkedin-sync.json` after integration

### Troubleshooting

- **Login Required:** LinkedIn may block access if not logged in. Ensure you're authenticated.
- **Rate Limiting:** If you run this too frequently, LinkedIn may temporarily block requests.
- **Layout Changes:** LinkedIn updates their UI periodically. If extraction fails, the CSS selectors may need updating.

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
2. **Update active content:**
   - Update `content/links.json` with latest article links
   - Consider featuring top 3-5 articles in portfolio modal
   - Update article count/stats in hero section if displayed
3. **Test locally:** Run `npm run dev` and verify links work
4. **Cleanup:** Delete or archive `medium-sync.json` after integration

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

*Last Updated: 2026-02-02*
