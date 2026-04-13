# Phase 5 — Configuration Report

## Summary
All site-level configuration files are in place in the GitHub repository.

## Configuration Files

| File | Location | Status |
|------|----------|--------|
| redirects.json | GitHub repo (root) | ✓ 4 redirect rules |
| metadata.json | GitHub repo (root) | ✓ 11 page entries |
| helix-query.yaml | GitHub repo (root) | ✓ Default index for /nl/** |
| helix-sitemap.yaml | GitHub repo (root) | ✓ XML sitemap config |
| robots.txt | GitHub repo (root) | ✓ Allow all + sitemap |
| fstab.yaml | GitHub repo (root) | ✓ Points to da.live |

## Redirect Rules
- `/` → `/nl/` (301)
- `/nl` → `/nl/` (301)
- `/nl/treatment` → `/nl/treatment/lips` (302)
- `/nl/clinics` → `/nl/find-a-clinic` (302)

## Navigation
Navigation content is embedded in page HTML structures. Header and footer auto-decorate 
from the shared nav/footer sections within each page.

## Note
For da.live authoring: redirects.json and metadata.json should also be uploaded as 
spreadsheets to da.live for the live site.

## Tier 1 Validation: PASS
