# Content Data Source

> **Landing-page-specific data sources and integration notes**  
> Last Updated: 2026-03-01

---

## 📊 Canonical Data

> [!IMPORTANT]
> All personal, career, and skills data now lives in [`branding-context/v1/`](https://github.com/doctor500/branding-context).  
> Read those JSON files before making any content changes.

| Canonical File | Covers |
|----------------|--------|
| `branding-context/v1/identity.json` | Name, role, bio, location, years |
| `branding-context/v1/experience.json` | Full career timeline (5 roles) |
| `branding-context/v1/skills.json` | Categorized technical skills |
| `branding-context/v1/projects.json` | Featured projects |
| `branding-context/v1/certifications.json` | Certifications with verification links |
| `branding-context/v1/contact.json` | Email, social links |

---

## 📝 Landing-Page-Specific Content

### Medium Articles
- **Source:** https://medium.com/@davidlayardi
- **Integration file:** `content/medium-sync.json`
- **Display:** 3 latest English articles
- **Exclude:** Indonesian language articles

#### Featured Articles (English)

1. **Accessing GCP Secret Manager from GKE Cluster using Murmur** — Apr 2024, 3 min
2. **How Cloudflare Zero Trust & VS Code Tunnels Reducing My Back Pain** — Apr 2023, 4 min, 41 claps
3. **Automate Export From Jenkins API Job List to Google Sheets** — Aug 2021, 4 min
4. **Easy Deploy SonarQube on Kubernetes with YAML configuration** — Jul 2021, 5 min, 67 claps (most popular)

---

### Recommendations (LinkedIn)
**Total:** 29 on LinkedIn

**Featured (used in testimonials section):**

> **Felix Jingga** — CTO, GovTech Procurement  
> "If I had to describe David in one word, it would be 'unflappable'. He was a cornerstone of the team that achieved a staggering 90%+ reduction in our monthly infrastructure costs and maintained 99.9% availability. He is a true A-player."

> **Andreas Cendranata** — Infrastructure and Security Lead, GovTech Procurement  
> "His expertise in Google Cloud Platform was a tremendous asset, particularly when he led our complex migration from Cloud Run to GKE. David proactively optimized our costs by implementing GKE on Spot Instances with multi-zone HA."

---

### GitHub Stats
- **Profile:** https://github.com/doctor500
- **Public repos:** 18
- **Total stars:** 13
- **Total forks:** 22
- **Languages:** 8
- **Top projects:** cv (5 stars), sonarqube-on-kubernetes (5 stars, 16 forks)

---

## 🎯 Dashboard Metrics Mapping

These are the **impact metrics** used in the Stats Dashboard section, derived from canonical experience data:

| Metric | Value | Source | Dashboard Display |
|--------|-------|--------|-------------------|
| Cost Reduction | 90%+ | GovTech experience | Progress bar |
| System Uptime | 99.9% | GoTo experience | Uptime dots |
| Doc Automation | 80% | Rakuten experience | Progress bar — "Agentic AI pipeline" |
| Faster Response | 12x | Rakuten experience | Multiplier — "Via Agentic AI workflow" |
| Services Migrated | 600+ | GovTech experience | Counter |
| Build Time Reduction | 85% | Pegipegi experience | Progress bar |

---

## 📂 Landing Page File Mapping

| Landing Page File | Content | Canonical Source |
|-------------------|---------|-----------------|
| `content/personal.json` | Name, role, bio, URLs | `branding-context/v1/identity.json` + `contact.json` |
| `lib/data.ts` | Career, stats, testimonials | `branding-context/v1/experience.json` |
| `content/medium-sync.json` | Medium articles | Medium profile (landing-page-specific) |
| `content/linkedin-sync.json` | LinkedIn data | LinkedIn profile |

---

## 🔗 Data Sources

| Source | URL | Status |
|--------|-----|--------|
| LinkedIn | https://www.linkedin.com/in/david-lay/ | ✅ Integrated |
| GitHub | https://github.com/doctor500 | ✅ Integrated |
| Medium | https://medium.com/@davidlayardi | ✅ Integrated |
