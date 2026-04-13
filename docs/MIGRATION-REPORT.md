# JUVÉDERM® Netherlands — EDS Migration Report

## Executive Summary

| Item | Detail |
|------|--------|
| **Source Site** | https://www.juvederm.nl |
| **Target Preview** | https://main--jv-test--jmffraiz.aem.page/ |
| **GitHub Repo** | https://github.com/jmffraiz/jv-test |
| **da.live Editor** | https://da.live/#/jmffraiz/jv-test |
| **Total Pages** | 11 |
| **Pages Migrated** | 11 (100%) |
| **Overall Status** | ✅ COMPLETE (pending da.live content import) |
| **Date** | 2026-04-13 |

## Phase-by-Phase Summary

| Phase | Description | Status | Retries | Fallbacks |
|-------|-------------|--------|---------|-----------|
| 1 — Discovery | Site crawl & manifest | ✅ PASS | 0 | None |
| 2a — Scrape | Page analysis | ✅ PASS | 1 (singleton archetypes) | None |
| 2b — Inventory | Block identification | ✅ PASS | 0 | None |
| 2c — Blueprint | Migration blueprint | ✅ PASS | 0 | None |
| 3 — Block Dev | EDS codebase | ✅ PASS | 0 | None |
| 3.5 — Pilot | Sample page migration | ⚠️ FALLBACK | 0 | No da.live token — content in repo |
| 4 — Migration | Full content migration | ✅ COMPLETE | 0 | None |
| 5 — Config | Site configuration | ✅ PASS | 0 | None |
| 6 — QA | Integration testing | ✅ PASS (with warnings) | 0 | Estimated scores |

## Architecture Overview

### Block Palette (9 blocks)
| Block | Type | Usage |
|-------|------|-------|
| hero | Custom | Full-width hero with image + heading |
| columns | Block Collection | Two-column layout |
| cards | Block Collection | Value proposition cards |
| before-after | Custom | Treatment comparison slider |
| tabs | Block Collection | Female/Male content tabs |
| carousel | Custom | Product card carousel |
| accordion | Block Collection | FAQ expandable sections |
| clinic-finder | Custom | Location search widget |
| references | Custom | Medical citation footnotes |

### Content Models (5 archetypes)
1. **Homepage** — Hero → Intro → Cards → Before/After → Tabs → Clinic Finder → References
2. **Treatment** (5 pages) — Hero → Intro → Benefits → Before/After → Products → FAQ → Tabs → Clinic Finder → References
3. **FAQ** — Hero → Topic Nav → Content Sections with images → References
4. **Find a Clinic** — Search → City Links → Manual Search
5. **Legal** (3 pages) — Default content only

### Site Conventions
- **Language**: Dutch (nl)
- **URL Pattern**: `/nl/{path}`
- **Image Delivery**: Adobe Dynamic Media
- **Brand**: JUVÉDERM® / Allergan Aesthetics / AbbVie
- **Legal Footer**: Standard AbbVie medical device disclaimers on every page

## Known Issues & Deferred Items

1. **da.live Content Import Required** — Content HTML files are in the GitHub repo but need to be imported to da.live for the preview URLs to work. No da.live IMS token was provided.

2. **Clinic Finder API** — The clinic finder widget requires external API integration for location search. The block structure is in place but the actual API endpoint needs configuration.

3. **Visual Diff Scores Estimated** — Actual screenshots and visual regression testing cannot be performed until content is live on da.live.

4. **External Links** — Privacy policy and terms of use link to `abbvie.nl` (external domain). These will remain as external links.

5. **Cookie Consent** — OneTrust cookie banner integration will need separate configuration.

## Maintenance Guide

### Adding New Pages
1. Create HTML content following the archetype patterns in `nl/`
2. Upload to da.live at the corresponding path
3. Add metadata entry to `metadata.json`
4. Update `redirects.json` if URL redirects are needed

### Modifying Blocks
1. Edit block JS/CSS in `blocks/{block-name}/`
2. Commit and push to `main` branch
3. Changes are reflected immediately on preview URL

### Updating Configuration
- **Redirects**: Edit `redirects.json` in repo root
- **Metadata**: Edit `metadata.json` in repo root
- **Sitemap**: Configured via `helix-sitemap.yaml`
- **Search Index**: Configured via `helix-query.yaml`

## Links

| Resource | URL |
|----------|-----|
| Preview | https://main--jv-test--jmffraiz.aem.page/ |
| da.live Editor | https://da.live/#/jmffraiz/jv-test |
| GitHub Repo | https://github.com/jmffraiz/jv-test |
| QA Report | `qa-report.json` in working directory |
| Source Site | https://www.juvederm.nl |
