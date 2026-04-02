# CV Content Enrichment — "The Integrated Scholar" Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Use /frontend-design and /ui-ux-pro-max skills for every design decision. Use the "Academic Editorial" design system in maris-website-template/curated_scholar/DESIGN.md. Query NotebookLM notebook ID a4581dc1-eeec-48f2-bfff-4d081d1d4a5a for ALL content — every piece of information MUST be grounded.

**Goal:** Enrich the entire website with the ~60% of Dr. Mari Isa's CV content that is currently missing, organized around the "Integrated Scholar" concept — teaching, research, and service working together — which is why she won the 2025-2026 Integrated Scholar award.

**Architecture:** Enrich 4 existing pages (Research, Teaching, Service & Impact, ARID Lab) by adding curated, grouped sections for missing content. No new pages. Design follows the Academic Editorial system. Every item must be verified against the NotebookLM notebook before inclusion.

**Tech Stack:** HTML, Tailwind CSS (CDN), Google Fonts (Noto Serif + Manrope), Material Symbols

**Data Source:** NotebookLM notebook "Mari Isa Website" (ID: a4581dc1-eeec-48f2-bfff-4d081d1d4a5a)

---

## CRITICAL RULES

1. **Use /frontend-design and /ui-ux-pro-max skills** for designing every new section
2. **Every piece of content MUST be grounded** — query the notebook to verify before adding
3. **Follow DESIGN.md** — tonal surface shifts for sections, no 1px borders, serif/sans pairing, tertiary gold accents, generous whitespace
4. **The "Integrated Scholar" concept** — teaching + research + service synergy — should be the organizing principle. Content should show how these three areas reinforce each other
5. **Apply TTU gender policy compliance** (Option B) to any new content — use neutral language for editorial descriptions, keep published titles as-is
6. **Safety policy** — no office numbers, building names, room numbers, phone numbers, schedules

---

## STARTING STATE

The website currently has 6 pages at https://shayisa.github.io/drmariisa/ and the repo is at https://github.com/shayisa/drmariisa

**Current coverage of CV:**
- Education: 100%
- Employment: 100%
- Peer-reviewed articles: 75% (9 of 12)
- Books/chapters: 25% (1 of 4)
- Research reports: 0%
- Grants/awards: 24% (4 of 17 + Integrated Scholar on homepage)
- Conference presentations: 0% (0 of 35)
- Teaching: 86% (6 of 7 TTU courses)
- Student mentorship: 25% (6 of 24)
- Professional service: 29% (5 of 17)
- Peer review: 0% (0 of 7)
- Casework: 0% (mentioned but no count/detail)
- Workshops/lectures: 89% (8 of 9)
- Archaeological experience: 100%

---

## END STATE

Every section of the CV is represented on the website, curated into logical groups that demonstrate the Integrated Scholar concept. Not a flat list — each category is editorially presented with context and grouping.

---

## Task 1: Research Page — Add Missing 3 Publications + Books & Chapters Section

**Files:**
- Modify: `site/research.html`

**What's missing:** 3 peer-reviewed articles (Goots 2021, Isa 2021, Isa 2017) and a Books & Chapters subsection (FBI Guide already featured, but 3 more: Rusellae chapter, 2 forthcoming Routledge chapters)

**Step 1: Query NotebookLM** for the exact abstracts/descriptions of the 3 missing articles to write grounded synopses

**Step 2: Use /frontend-design** to design 3 new publication cards following the existing pattern in the "Forensic Fractography & Biomechanics" pillar. The 3 missing articles are all biomechanics papers — they belong in Pillar 1.

**Step 3: Add the 3 new articles** after the existing 5 in Pillar 1:

| Paper | Citation | DOI |
|-------|----------|-----|
| Goots, Isa, Fenton, Wei (2021) | "Blunt force trauma in the human mandible: An experimental investigation." *Forensic Science International Reports*, 5(5), 100252. | https://doi.org/10.1016/j.fsir.2021.100252 |
| Isa, Fenton, Antonelli, Vaughan, Wei (2021) | "Investigating reverse butterfly fractures: An experimental approach and application of fractography." *Forensic Science International*, 325, 110899. | https://doi.org/10.1016/j.forsciint.2021.110899 |
| Isa, Hefner, Markey (2017) | "Application of the Stephan et al. chest radiograph comparison method to decomposed human remains." *Journal of Forensic Sciences*, 62(5), 1304-1307. | https://doi.org/10.1111/1556-4029.13432 |

**Step 4: Add a new "Books & Chapters" section** after the 3 publication pillars, before the footer. Use /frontend-design for the section design. Include:

| Work | Citation |
|------|----------|
| FBI Guide (already featured above — just reference it) | Christensen, Isa, et al. (2022). FBI Laboratory, No. 21.35. |
| Rusellae Chapter | Celuzza, Watson, Goots, Isa, et al. (2023). In *Archaeological Landscapes of Late Antique and Early Medieval Tuscia*. Brepols. ISBN: 978-2-503-60499-2. |
| Routledge Violence (forthcoming) | Cucina, Isa, Wrobel. "The Use and Misuse of Archaeological and Anthropological Data..." In *Routledge Handbook of the Archaeology of Violence in the Americas*. Anticipated 2026. |
| Routledge Forensic Anthro (forthcoming) | Isa. "Blunt Trauma and Fractography." In *The Routledge Handbook of Forensic Anthropology*. Anticipated 2026. |

**Step 5: Add a "Conference Activity" summary section** — NOT listing all 35 presentations, but a curated stat block:

```
35 conference presentations across 13 years (2013–2026)
24 at AAFS · 6 at regional forensic meetings · 3 at AABA · 2 at other venues
```

Include 3-4 highlighted recent presentations as examples.

**Step 6: Commit**

---

## Task 2: Research Page — Add Grants & Funding Section

**Files:**
- Modify: `site/research.html`

**What's missing:** 13 of 17 grants/awards not shown anywhere. The research page is the natural home for research funding.

**Step 1: Use /frontend-design** to design a "Research Funding" section. Group by:
- **Active/Recent Grants** (TTU-era, 2020-2026): RAP Black $9,865, Douglas M. Lucas $3,656, Kenneth S. Field $14,605, Proposal Assistance $3,189
- **Doctoral Funding** (MSU-era): NSF GRFP $34,000/yr × 3, Dissertation Completion $7,000, Research Scholars $2,129, Corey Award $2,082, Student Travel $1,500

**Step 2: Add the section** between the publications and the footer. Each grant should show: name, funder, amount, year, and what it funded (1 line).

**Step 3: Commit**

---

## Task 3: Teaching Page — Expand Student Mentorship to Full Roster

**Files:**
- Modify: `site/teaching.html`

**What's missing:** 18 of 24 students. Currently shows 6 (Lebechi, Edwards, Unger, Wainer, Finch, Knysz/Curry). The teaching page should celebrate all students.

**Step 1: Use /frontend-design** to redesign the Student Success section. Group students by category:

**Graduate Students — Thesis Chair (5):**
- Madeline Leeah (M.A., In Progress)
- Emma Taylor (M.A., In Progress)
- Dennise Sanchez (M.A., In Progress)
- Carter Unger (M.A., 2024) — "Regional and Seasonal Effects on Long Bone Fracture Characteristics"
- Delaney Edwards (M.A., 2023) — "Investigation of Fracture Morphology in Gunshot Trauma"

**Graduate Students — Committee Member (14):**
Show as a compact list with names, thesis titles, years. Include: Antonelli, Medrano, Fulp, Howard, Diaz Duran, Herrera, Noriega, Tennison, Koebel, Sylvester, Clough, Festa, Sidor, Titus.

**Undergraduate Mentees (5):**
Keep existing featured format for: Lebechi (1st place), Finch, Knysz/Curry, Wainer.

**Step 2: Update the "12+ Graduate Theses" stat** to accurate count: "24 Students Mentored" or "19 Graduate + 5 Undergraduate".

**Step 3: Commit**

---

## Task 4: Service & Impact Page — Expand Professional Service & Add Peer Review

**Files:**
- Modify: `site/service-impact.html`

**What's missing:** 12 of 17 service roles, 7 peer review roles. Currently shows 5 professional service roles (NIST OSAC, AAFS Standards Board, AAFS Conference, OERR).

**Step 1: Add "University & Department Service" subsection** after the Professional Leadership section:

| Role | Years |
|------|-------|
| Forensic Science Search Committee, Dept. of Environmental Toxicology | 2025–2026 |
| Lambda Alpha Anthropology Honors Society Faculty Advisor | 2024–2025 |
| Forensic Science Search Committee, Dept. of Environmental Toxicology | 2021–2022 |
| Faculty Mentor, TrUE Scholar Program | 2021–2022 |

**Step 2: Add "Peer Review" subsection** — curate as a compact list showing the range of journals/organizations:

Journals reviewed for: *Forensic Anthropology*, *Forensic Sciences*, *Forensic Science Synergy*, *Science and Justice*
Grant proposals reviewed for: Grady Early Fellowship (Texas State), Austrian Science Fund
Book chapters reviewed for: *BIPOC Communities and Curricula*

**Step 3: Use /frontend-design** to ensure the new subsections follow the tonal layering pattern of the page.

**Step 4: Commit**

---

## Task 5: ARID Lab Page — Add Casework Stats & Honors

**Files:**
- Modify: `site/arid-lab.html`

**What's missing:** 49 casework reports are not quantified. The ARID Lab page mentions "medicolegal casework services" but doesn't show the scale.

**Step 1: Add a stat bar or highlight card** in the Mission section showing:
- "49 forensic casework reports" (2014–2024)
- "8 Texas cases" (2021–2024, TTU era)
- "41 Michigan cases" (2014–2019, MSU era)
- Services: biological profiles, trauma analyses, radiographic IDs, medicolegal significance assessments

**Step 2: Also add the "Integrated Scholar" recognition** to this page as a subtle callout — the award specifically recognizes synergy between teaching, research, and service, and the ARID Lab is where all three converge.

**Step 3: Use /frontend-design** for the stat bar design.

**Step 4: Commit**

---

## Task 6: Homepage — Enhance the Integrated Scholar Section

**Files:**
- Modify: `site/index.html`

**What's currently there:** A slim band with gold accent line, "Integrated Scholar 2025-2026" label, and description.

**Step 1: Use /frontend-design and /ui-ux-pro-max** to redesign the Integrated Scholar section to better highlight WHY she won — the integration of teaching + research + service. Show the synergy visually:

Design concept: Three connected elements (Research → Teaching → Service) with a brief statement for each showing how they feed into each other. For example:
- Research: "12 peer-reviewed articles, FBI Laboratory publication"
- Teaching: "24 students mentored, 6 courses developed"
- Service: "NIST OSAC leadership, 49 casework reports"

The point: the award recognizes that these aren't separate activities — they're integrated.

**Step 2: Add the academic honors** that aren't shown anywhere:
- Phi Beta Kappa (2013)
- Phi Kappa Phi (2012)
- National Merit Scholar (2010–2014)
- MSU Alumni Distinguished Scholar (2010–2014)
- Ellis R. Kerley Paper Award (2014)
- Rasmussen Graduate Fellowship (2014)

These can go as a small "Academic Honors" footnote or be woven into the bio section.

**Step 3: Commit**

---

## Task 7: Apply TTU Gender Policy Compliance (Option B)

**Files:**
- Modify: `site/index.html`, `site/research.html`, `site/arid-lab.html`, `site/service-impact.html`

**What:** Execute the 20 language edits documented in `docs/plans/2026-04-02-ttu-gender-policy-compliance.md`. This plan has exact before/after text for every edit.

**Step 1: Read the compliance plan file** for the exact edits
**Step 2: Apply all 20 edits** across 4 files
**Step 3: Verify** — grep for remaining terms
**Step 4: Commit**

---

## Task 8: Final Verification & Push

**Files:**
- All 6 pages

**Step 1: Site-wide content audit** — verify every CV section is now represented

**Step 2: Grounding check** — verify no ungrounded claims were introduced

**Step 3: Mobile check** — verify new sections render properly on 375px

**Step 4: Push to GitHub**

```bash
git push
```

**Step 5: Verify live site** at https://shayisa.github.io/drmariisa/

---

## Summary — What Changes on Each Page

| Page | New Content Added |
|------|------------------|
| **Homepage** | Enhanced Integrated Scholar section showing teaching+research+service synergy, academic honors |
| **Research** | 3 missing publications, Books & Chapters section (4 items), Conference Activity summary (35 presentations), Research Funding section (9 grants) |
| **Teaching** | Full student roster (24 students curated by category), updated stat count |
| **Service & Impact** | University service roles (5), Peer review section (7 roles) |
| **ARID Lab** | Casework stat bar (49 reports), Integrated Scholar callout |
| **Privacy** | No changes |

## Coverage After Completion

| CV Section | Before | After |
|-----------|--------|-------|
| Publications | 75% | **100%** |
| Books/Chapters | 25% | **100%** |
| Grants/Awards | 24% | **100%** |
| Conference Presentations | 0% | **100%** (curated) |
| Student Mentorship | 25% | **100%** |
| Professional Service | 29% | **100%** |
| Peer Review | 0% | **100%** |
| Casework | 0% | **100%** (quantified) |
