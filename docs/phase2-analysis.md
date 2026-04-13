# Phase 2 — Analysis Report

## Block Palette (9 blocks)

| Block | Source | Description |
|-------|--------|-------------|
| hero | custom | Full-width hero banner with background image and overlay text |
| cards | block-collection | Grid of value proposition cards with icon, heading, description |
| before-after | custom | Before/after image comparison carousel |
| tabs | block-collection | Tabbed content (Female/Male treatment views) |
| columns | block-collection | Multi-column layout for text+image sections |
| carousel | block-collection | Horizontal product card carousel |
| accordion | block-collection | Expandable FAQ Q&A sections |
| clinic-finder | custom | Simplified clinic finder CTA widget |
| references | custom | Numbered citation list for medical references |

## Custom Blocks Needed: 4
- **hero**: Brand-specific hero with image overlay
- **before-after**: Treatment result comparison with carousel dots
- **clinic-finder**: CTA block linking to clinic search
- **references**: Formatted numbered reference list (regulatory requirement)

## Archetype Section Maps

### Homepage
hero → default intro → cards (4 value props) → before-after → tabs → clinic-finder → references

### Treatment (5 pages, identical structure)
hero → columns (intro) → cards (3 value props) → before-after → carousel (products) → accordion (FAQ) → tabs → clinic-finder → references

### FAQ
hero → default (topic nav) → multiple sections of default + columns + accordion → references

### Find-a-clinic
default (search) → cards (city links) → clinic-finder

### Legal
default (text content only)

## Site Conventions
- Language: Dutch (nl)
- Brand colors: Purple (#6e2585), Pink accent (#e91e8c)
- Required regulatory elements: Warning banner, legal footer text
- All images from Adobe Dynamic Media CDN
- Social: Instagram + Facebook links in footer

## Tier 1 Validation: ALL PASS
- 2a Scrape: PASS
- 2b Inventory: PASS  
- 2c Blueprint: PASS
