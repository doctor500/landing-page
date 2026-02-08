# Security Guidelines

**Purpose:** Data privacy and security guidelines for content synchronization procedures.

**Applies to:** LinkedIn sync, Medium sync, and any future data extraction workflows.

---

## Quick Reference

| Concern | Action |
|---------|--------|
| Sync files contain real data | ✅ Gitignored, review before integration |
| Credential IDs exposed | ⚠️ Remove before committing to active content |
| Personal emails visible | ⚠️ Replace with contact form links |
| URL tokens present | ⚠️ Check and sanitize authentication tokens |
| Committing accidentally | ✅ Run `git status` before commit |

---

## 🔒 Sync File Security

### File Protection

**Sync File Privacy Levels:**

| File | Privacy | Reason | Git Status |
|------|---------|--------|------------|
| `linkedin-sync.json` | 🔒 PRIVATE | Personal info, credentials | Gitignored |
| `medium-sync.json` | 🌐 PUBLIC | Published article data | Tracked |

**Gitignore Coverage:**
- Pattern: `content/linkedin-sync.json` (gitignored)
- Medium sync: Explicitly tracked for production build
- Status: ✅ Properly configured

**Important Notes:**
- Sync files contain **real personal data** from your profiles
- Files are gitignored but **not encrypted** on local disk
- Explicit `git add content/linkedin-sync.json` can bypass gitignore
- Always verify with `git status` before committing

### Retention Policy

**LinkedIn Sync (Private):**
- ✅ Delete sync file immediately after integration
- ✅ If archiving, use encrypted storage (not cloud sync folders)
- ✅ Never share via email/Slack/messaging
- ❌ Never commit to repository

**Medium Sync (Public):**
- ✅ Safe to commit to repository (used by articles section)
- ✅ Contains only published article metadata
- ⚠️ Still review for any personal info in bio text

---

## 🧹 Data Sanitization Checklist

Use this checklist before integrating sync data into active content files:

### LinkedIn Data

- [ ] **Credential IDs** - Remove certification credential IDs and URLs
- [ ] **Profile Image URLs** - Check for authentication tokens in URLs
- [ ] **Personal Email** - Replace with contact form or professional email
- [ ] **Exact Dates** - Consider generalizing (e.g., "2023" vs "Jan 15, 2023")
- [ ] **Company URLs** - Verify company LinkedIn URLs don't expose private info
- [ ] **Location Data** - Decide on specificity level (city vs full address)
- [ ] **Connections Count** - Remove if considered sensitive
- [ ] **Recommendations** - Don't expose counts if privacy concern

### Medium Data

- [ ] **Author Bio** - Check for personal email or phone in bio text
- [ ] **Article URLs** - Verify no tracking parameters or tokens
- [ ] **Clap Counts** - Consider if engagement metrics should be public
- [ ] **Profile URL** - Ensure Medium profile is meant to be public

### General Sanitization

- [ ] No phone numbers in any text fields
- [ ] No physical addresses in descriptions
- [ ] No internal company information
- [ ] No credentials or API keys
- [ ] No personally identifiable information (PII) beyond what's intended

---

## ✅ Verification Steps

### Before Integration

1. **Review Extraction:**
   ```bash
   # Validate JSON syntax
   jq . content/linkedin-sync.json
   jq . content/medium-sync.json
   
   # Check file isn't staged
   git status
   ```

2. **Manual Review:**
   - Read through all extracted data
   - Flag any sensitive information
   - Verify accuracy of information

### Before Committing

1. **Check Git Status:**
   ```bash
   git status
   # Verify sync files are NOT listed
   # Only active content files should be staged
   ```

2. **Review Diff:**
   ```bash
   git diff
   # Review EXACT changes being committed
   # Ensure no sensitive data in active content
   ```

3. **Verify Gitignore:**
   ```bash
   git check-ignore -v content/linkedin-sync.json
   # Should return: .gitignore:XX:content/linkedin-sync.json
   # Note: medium-sync.json is intentionally tracked
   ```

---

## 🚨 Incident Response

### If Sync File Accidentally Committed

**Scenario:** You committed a sync file with personal data to the repository.

**Immediate Actions:**

1. **Stop - Don't push yet** (if not pushed)
   ```bash
   git reset HEAD~1  # Undo last commit
   git restore --staged content/*-sync.json
   ```

2. **If already pushed to remote:**
   - Data is now in Git history (deletion doesn't remove it)
   - Contact repository admin immediately
   - Use `git filter-branch` or BFG Repo-Cleaner to rewrite history
   - Force push to remote: `git push --force origin main`
   - Notify anyone who may have pulled the commit

3. **Post-incident:**
   - Rotate any exposed credentials immediately
   - Update passwords if personal info was exposed
   - Consider the data permanently compromised
   - Review sync workflow to prevent recurrence

### If Sensitive Data in Active Content

**Scenario:** You integrated sensitive data into `content/personal.json` or other active files.

**Actions:**

1. **Remove sensitive data immediately:**
   ```bash
   # Edit file to remove sensitive info
   git add content/personal.json
   git commit -m "fix: Remove sensitive information"
   git push origin main
   ```

2. **If already deployed:**
   - Data is public - consider it exposed
   - Redeploy immediately after fix
   - Monitor for any misuse
   - Update credentials if needed

---

## 🛡️ Best Practices

### Data Minimization

- **Extract only what you need** - Don't sync entire profile if updating one field
- **Generalize when possible** - Use "2023" instead of exact dates if precision not needed
- **Question everything** - Ask "does this need to be public?" for each field

### Secure Workflow

1. **Sync → Review → Sanitize → Integrate → Test → Commit → Deploy**
2. Never skip the sanitization step
3. Always test locally before deploying
4. Delete sync files after successful integration

### Regular Audits

- **Monthly:** Review active content for any sensitive data
- **Quarterly:** Verify gitignore is still working correctly
- **Yearly:** Review and update security guidelines

---

## 📚 Related Documentation

- [PROCEDURES.md](.context/PROCEDURES.md) - Operational procedures
- [GOVERNANCE.md](.context/GOVERNANCE.md) - AI agent protocols
- [PROJECT_CONTEXT.md](.context/PROJECT_CONTEXT.md) - Project overview

---

*Last Updated: 2026-02-09*
