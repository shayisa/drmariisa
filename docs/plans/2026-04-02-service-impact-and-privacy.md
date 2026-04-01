# Service & Impact Page + Nav Restructure + Privacy Fixes Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create a new "Service & Impact" page replacing the old Media/Contact page, restructure site navigation across all pages (new page name, new nav buttons), and fix the Privacy page — completing the entire website.

**Architecture:** Delete old media-contact.html, create new service-impact.html following the Academic Editorial design system (DESIGN.md). Update nav on all 6 pages. Fix privacy.html. All content grounded in NotebookLM sources.

**Tech Stack:** HTML, Tailwind CSS (CDN), Google Fonts (Noto Serif + Manrope), Material Symbols

**Data Source:** NotebookLM notebook "Mari Isa Website" (ID: a4581dc1-eeec-48f2-bfff-4d081d1d4a5a)

---

## Design System Rules (from DESIGN.md)

- No 1px borders for sections — use background tonal shifts
- Glassmorphism nav: surface colors at 80% opacity + 20px backdrop-blur
- Noto Serif for headlines, Manrope for body/labels
- Asymmetric layouts: headers far-left, body text right-center
- Spacing: py-24 to py-32 between sections
- Chips: secondary-container (#d7e7d3), rounded-full
- Pull-quotes: headline-sm in tertiary (#342200)
- Ambient shadows only: 0 20px 40px rgba(77,68,75,0.06)
- Ghost borders: outline-variant at 15% opacity

---

## Key Reference Data (from NotebookLM)

### Section 1: Professional Leadership & Standards

- **NIST OSAC:** Executive Secretary, Forensic Anthropology Subcommittee (2024–present)
- **NIST OSAC:** Subcommittee Member (2023–present)
- **AAFS Standards Board:** Member, Anthropology Consensus Body (2025–present)
- **AAFS Conference:** Co-Organizer, Forensic Anthropology Meeting (2022–2026) — Orlando, Denver, Baltimore, New Orleans
- **AAFS OERR:** Member, Outreach Engagement Recruitment & Retention Subcommittee (2020–present)
- **"Queered Science" Symposium:** Co-Organizer, AAFS 74th Annual Meeting, Seattle (2022)

### Section 2: Workshops & Invited Lectures

- NYC OCME Grand Rounds (2025) — "From Morphology to Mechanism: Applying Biomechanics and Fractography to Pediatric Cranial Trauma Interpretation"
- DPAA Laboratory, Offutt AFB & Pearl Harbor-Hickam (2024) — "Forensic Fractography of Bone Workshop"
- Forensic Anthropology Center at Texas State (2024) — "Introduction to Forensic Fractography of Bone Workshop"
- Forensic Technology Center of Excellence / Society of Forensic Anthropologists Webinar (2022) — "Forensic Fractography of Bone: A New (and Approachable!) Model for Skeletal Trauma Analysis" (with A.M. Christensen)
- Odessa Police Department TCOLE course (2022) — "Forensic Anthropology and the Recovery of Human Remains"
- Indiana Medical History Museum (2019) — "The Science of Broken Bones"
- Minnesota Coroners & Medical Examiners Association (2019) — "Experimental Approaches to the Interpretation of Blunt Force Cranial Fracture"
- Michigan State Police (2019, 2014) — Mock burial excavation training

### Section 3: Advocacy & Community Partnerships

- Trans Doe Task Force (TDTF) — ongoing collaboration since 2020
- "TRANScending Jane and John Doe" webinar (March 2021) — 6-hour, multi-session event co-organized with ISU Gender Resource Center, Dept. of Anthropology, and TDTF
- LAMMP (LGBT+ Accountability for Missing and Murdered Persons) database — presented at AAFS 2022
- Transqat Podcast — media appearance on forensic ethics and TGD identification
- "Queered Science" AAFS symposium (2022) — interdisciplinary gender-inclusive research

### Section 4: International Fieldwork

- **Italy — Roselle (2015–2019):** Osteologist, Roselle Skeletal Collection, Museo Archaeologico e d'Arte della Maremma, Grosseto. Analyzed remains from Late Antique & Early Medieval Rusellae. Funded by MSU Research Scholars Award ($2,129).
- **Italy — Quattro Macine (2015):** Osteologist, Quattro Macine Skeletal Collection, Università del Salento, Lecce.
- **Italy — IMPERO Project (2018–2019):** Field crew, Interconnected Mobility of People and Economy along the River Ombrone, Civitella Paganico. Director: Dr. Alessandro Sebastiani.
- **Belize — CBAS (2013):** Field school student, Central Belize Archaeological Survey. Director: Dr. Gabriel Wrobel. Research on ritual cavescapes and domestic economy.
- **Belize — BREA (2014):** Field crew, Belize River East Archaeological Survey Project. Director: Dr. Eleanor Harrison-Buck.

### Nav Button URLs

- "Contact" button → `mailto:mari.isa@ttu.edu`
- "Google Scholar" button → `https://scholar.google.com/citations?user=fw-qsXcAAAAJ&hl=en`

---

## Task 1: Create the Service & Impact Page

**Files:**
- Create: `site/service-impact.html`

**STATUS: PAGE ALREADY CREATED** using /frontend-design skill following the Academic Editorial design system (DESIGN.md). The page includes:
- Hero: "Beyond the Lab" with asymmetric 12-col grid
- Professional Leadership: 4 cards (NIST OSAC, AAFS Standards Board, AAFS Conference, OERR/Queered Science)
- Workshops & Invited Lectures: 8 entries grouped by tier (Federal, Professional, Public)
- Advocacy & Community: Trans Doe Task Force feature card with pull-quote, 3-col grid (TRANScending webinar, LAMMP, Transqat podcast)
- International Fieldwork: 2-col Italy/Belize with timeline borders
- Standard footer with real links and social icons
- Nav already has the new buttons (Contact mailto, Google Scholar)

**Step 1: Verify the page renders correctly via Playwright**

**Step 2: Commit**
```bash
git add site/service-impact.html
git commit -m "Create Service & Impact page with leadership, workshops, advocacy, fieldwork"
```

---

## Task 2: Update Navigation on All Pages

**Files:**
- Modify: `site/index.html`
- Modify: `site/research.html`
- Modify: `site/teaching.html`
- Modify: `site/arid-lab.html`
- Modify: `site/service-impact.html` (already created)
- Modify: `site/privacy.html`

On every page, the nav must change from:

```
Home | ARID Lab | Research | Teaching | Media/Contact   [Speaking Inquiries] [Prospective Students]
```

To:

```
Home | ARID Lab | Research | Teaching | Service & Impact   [Contact] [Google Scholar]
```

**Step 1: For each of the 6 HTML files, make these nav changes:**

1. Change the "Media/Contact" link text to "Service & Impact" and href from `media-contact.html` to `service-impact.html`
2. Replace "Speaking Inquiries" button (linking to `media-contact.html#contact`) with "Contact" button linking to `mailto:mari.isa@ttu.edu`
3. Replace "Prospective Students" button (linking to `arid-lab.html#join`) with "Google Scholar" button linking to `https://scholar.google.com/citations?user=fw-qsXcAAAAJ&hl=en` with `target="_blank"`

**Step 2: Also update any internal links that pointed to `media-contact.html#contact`:**

- `site/index.html`: "Get in Touch" CTA → change to `mailto:mari.isa@ttu.edu`
- `site/teaching.html`: "Get in Touch" CTA → change to `mailto:mari.isa@ttu.edu`

**Step 3: Verify** — grep all HTML files for "media-contact" to confirm zero references remain.

**Step 4: Commit**
```bash
git add site/
git commit -m "Update nav on all pages: Service & Impact, Contact mailto, Google Scholar"
```

---

## Task 3: Delete Old media-contact.html

**Files:**
- Delete: `site/media-contact.html`

**Step 1: Remove the old file**
```bash
rm site/media-contact.html
```

**Step 2: Verify** — confirm file no longer exists, grep all remaining HTML for any reference to it.

**Step 3: Commit**
```bash
git add -A
git commit -m "Remove old media-contact.html (replaced by service-impact.html)"
```

---

## Task 4: Fix Privacy Page

**Files:**
- Modify: `site/privacy.html`

Issues to fix:
1. 4 instances of "Mariyam" (title, nav, body, footer)
2. Nav needs same update as Task 2 (already done if Task 2 included it)
3. Footer: dead CV/Profile links, no social icons
4. Copyright: 2024 → 2026
5. Policy date: "2024" → "April 2026"
6. Body text reference to "Dr. Mariyam Isa" → "Dr. Mari Isa"

**Step 1: Fix title**
```
Old: Privacy Policy | Dr. Mariyam Isa
New: Privacy Policy | Dr. Mari Isa
```

**Step 2: Fix all "Mariyam" instances** (nav logo, body text, footer, copyright)

**Step 3: Fix footer** — replace with standard site footer (real CV/Profile links, social icons)

**Step 4: Fix policy date**
```
Old: Last updated: 2024
New: Last updated: April 2026
```

**Step 5: Fix copyright**
```
Old: © 2024
New: © 2026
```

**Step 6: Verify** — grep for "Mariyam", "href=#", "2024" to confirm all fixed.

**Step 7: Commit**
```bash
git add site/privacy.html
git commit -m "Fix privacy page: name, footer, date, nav updated"
```

---

## Task 5: Final Site-Wide Verification

**Files:**
- Read all 6 HTML files in final state

**Step 1: Start local server and verify all pages in Playwright**

Take screenshots of:
1. Service & Impact page — all 4 sections
2. Privacy page
3. Nav on any page (confirm new buttons)

**Step 2: Site-wide verification checklist**

- [ ] Zero instances of "Mariyam" in visible text across all 6 pages
- [ ] Zero `href="#"` dead links across all 6 pages
- [ ] Zero references to `media-contact.html` anywhere
- [ ] `media-contact.html` file no longer exists
- [ ] Nav on all 6 pages shows: Home | ARID Lab | Research | Teaching | Service & Impact | [Contact] | [Google Scholar]
- [ ] "Contact" button opens mailto:mari.isa@ttu.edu
- [ ] "Google Scholar" button opens her profile (external)
- [ ] All footers match (CV, Profile, Privacy, social icons, © 2026)
- [ ] Privacy page date says "April 2026"
- [ ] No location info anywhere (no office, building, room, phone, schedule)
- [ ] Service & Impact content is grounded in notebook sources

**Step 3: Create final pending items doc**

**Step 4: Final commit**
```bash
git add -A
git commit -m "Complete website: all 6 pages verified, nav restructured, site ready"
```

---

## Summary of All Changes

| What | Before | After |
|------|--------|-------|
| **media-contact.html** | Exists (consulting-framed) | **Deleted** |
| **service-impact.html** | Doesn't exist | **New page** with Leadership, Workshops, Advocacy, Fieldwork |
| **Nav link** | "Media/Contact" | "Service & Impact" → service-impact.html |
| **Nav button 1** | "Speaking Inquiries" → media-contact.html#contact | **"Contact"** → mailto:mari.isa@ttu.edu |
| **Nav button 2** | "Prospective Students" → arid-lab.html#join | **"Google Scholar"** → scholar profile (external) |
| **Internal links** | "Get in Touch" → media-contact.html#contact | → mailto:mari.isa@ttu.edu |
| **Privacy page** | "Mariyam", dead footer, wrong date | Fixed: name, footer, "April 2026" |
| **All pages** | Nav references old page | Updated to new structure |
