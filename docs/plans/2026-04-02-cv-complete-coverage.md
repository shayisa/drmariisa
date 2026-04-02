# CV Complete Coverage — Close All 113 Gaps

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Use /frontend-design and /ui-ux-pro-max skills for every design decision. Use the "Academic Editorial" design system in maris-website-template/curated_scholar/DESIGN.md. Query NotebookLM notebook ID a4581dc1-eeec-48f2-bfff-4d081d1d4a5a for ALL content — every piece of information MUST be grounded.

**Goal:** Close every gap between Dr. Mari Isa's CV and the website. After this plan, every single item from the CV will appear on the site — 0% gaps across all categories.

**Architecture:** No new pages. All 113 missing items are added to the existing 6-page structure. Design follows the Academic Editorial system (tonal alternation, no 1px borders, serif/sans pairing, generous whitespace). Every item is a line item in this plan — nothing is "curated away" or "summarized."

**Tech Stack:** HTML, Tailwind CSS (CDN), Google Fonts (Noto Serif + Manrope), Material Symbols

**Data Source:** NotebookLM notebook "Mari Isa Website" (ID: a4581dc1-eeec-48f2-bfff-4d081d1d4a5a)

---

## CRITICAL RULES

1. **Use /frontend-design and /ui-ux-pro-max skills** for designing every new section
2. **Every piece of content MUST be grounded** — query the notebook to verify before adding
3. **Follow DESIGN.md** — tonal surface shifts for sections, no 1px borders, serif/sans pairing, tertiary gold accents, generous whitespace
4. **EVERY SINGLE ITEM from the CV must appear** — no cherry-picking, no "highlights only," no stat-block summaries that hide entries. "Curated" means "organized beautifully" not "omitted."
5. **Apply TTU gender policy compliance** (Option B) to any new content — use neutral language for editorial descriptions, keep published/presentation titles as-is
6. **Safety policy** — no office numbers, building names, room numbers, phone numbers, schedules. County names ARE allowed (they indicate where cases happened, not where she is located)

---

## STARTING STATE

The website has 6 pages. A previous enrichment session added content but left 113 items missing across 10 categories. Full gap analysis is in `docs/plans/2026-04-02-cv-gap-analysis.md`.

**Current gaps:**
- 1 peer-reviewed article missing (Edwards & Isa 2024)
- 2 research reports missing (entire category)
- 2 grants/awards missing (Outstanding Faculty Mentor, Humanities Grand Prize)
- 31 of 35 conference presentations missing
- 3 teaching courses missing (1 TTU grad + 2 MSU undergrad)
- 2 professional service roles missing
- 61 casework entries missing (only a stat bar exists)
- 9 laboratory experience entries missing (entire category)
- 2 archaeological fieldwork entries missing

---

## END STATE

Every section of the CV is represented on the website with every individual item present. The final audit task verifies each item line-by-line against the notebook.

---

## DESIGN DECISIONS (from brainstorming session)

| Decision | Choice |
|----------|--------|
| Casework organization | County-by-county (geographic reach) |
| Conference presentations | By research theme (mirrors publication pillars) |
| Laboratory experience | Split: homepage career timeline (reverse chronological) + ARID Lab keeps director mention |
| Teaching courses | Timeline approach: TTU (2020-present) then MSU (2016-2019) |
| Casework placement | Summary card on ARID Lab with link → full record on Service & Impact |
| Fieldwork section | Rename "International Fieldwork" to "Archaeological Fieldwork," add 2 entries |
| Career timeline order | Most recent at top (reverse chronological) |
| Presentation titles | Keep as-is under Option B (like published titles) |

---

## DESIGN SYSTEM REFERENCE

**Section heading pattern:**
```html
<div class="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-6">
  <h2 class="font-headline text-4xl text-primary">[Title] <i class="font-normal italic">[Accent]</i></h2>
  <div class="h-px flex-grow mx-8 bg-outline-variant/30 hidden md:block"></div>
  <span class="font-label text-sm text-secondary uppercase tracking-widest">[Label]</span>
</div>
```

**Card pattern:**
```html
<div class="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(77,68,75,0.06)]">
```

**Left-border accent pattern (for list items):**
```html
<div class="border-l-2 border-tertiary/20 pl-6">
  <h4 class="font-headline text-base text-primary">[Title]</h4>
  <p class="font-label text-xs uppercase tracking-widest text-secondary">[Meta]</p>
  <p class="text-on-surface-variant text-sm">[Description]</p>
</div>
```

**Compact row pattern (for high-volume entries like cases/presentations):**
```html
<div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 py-4">
  <div>
    <p class="font-headline text-sm text-primary">[Title]</p>
    <p class="text-on-surface-variant text-xs">[Authors/Details]</p>
  </div>
  <span class="font-label text-[10px] uppercase tracking-widest text-secondary whitespace-nowrap">[Venue · Year]</span>
</div>
```

**Tonal alternation (section backgrounds must alternate):**
- `bg-surface` (#f9f9f8) — base
- `bg-surface-container-low` — secondary
- `bg-surface-container` (#eeeeed) — tertiary
- `bg-surface-container-lowest` (#ffffff) — cards/floating elements

**NO 1px borders for section separation. Use background color shifts only.**

---

## Task 1: Research Page — Add Missing Publication (Edwards & Isa 2024)

**Files:** Modify `site/research.html`

**Step 1: Query NotebookLM** for the exact citation and abstract of Edwards & Isa (2024) "Effects of projectile kinetic energy and firearm-to-target distance on fracture behavior in flat bones." JFS 69(2), 400-414.

**Step 2: Insert new publication card** in Pillar 1 (Forensic Fractography & Biomechanics) BETWEEN the Edwards 2026 card (line ~337) and the Isa 2023 card (line ~338). Use the exact same card pattern as the other publications:

```html
<div class="bg-white p-8 rounded-xl border border-outline-variant/10">
<div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-3">
<h4 class="font-headline text-lg text-primary">Projectile Kinetic Energy and Firearm-to-Target Distance on Fracture Behavior</h4>
<span class="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold tracking-tight whitespace-nowrap self-start">Journal of Forensic Sciences</span>
</div>
<p class="text-on-surface-variant text-sm mb-3">Edwards* & <strong>Isa</strong> (2024). <em>Journal of Forensic Sciences,</em> 69(2), 400-414.</p>
<p class="text-on-surface-variant leading-relaxed mb-4">[GROUNDED ABSTRACT FROM NOTEBOOK — query for exact description]</p>
<a href="https://doi.org/10.1111/1556-4029.15462" target="_blank" class="text-primary text-sm font-semibold hover:underline">Access Publication →</a>
</div>
```

**Step 3: Commit**

---

## Task 2: Research Page — Add Research Reports Section

**Files:** Modify `site/research.html`

**Step 1: Query NotebookLM** for details on both research reports:
1. Isa & Fenton (2018). "Final Project Overview: Building a Science of Adult Cranial Fracture." NIJ Award No. 2015-DN-BX-K013 (T.W. Fenton, PI; F. Wei & R.C. Haut, Co-PIs).
2. Morton, Isa, & Wrobel (2015). "Caves were the houses of the Earth Lord, right? Insight into the domestic economy of Central Belize from the cave context." Research Reports in Belizean Archaeology, 12: 107-114.

**Step 2: Use /frontend-design** to design a "Research Reports" section. Insert it AFTER the Books & Chapters section (after line ~506) and BEFORE the Conference Activity section (line ~508).

Background: `bg-surface-container-low` (to alternate from the `bg-surface` of Books & Chapters).

Use the standard section heading pattern + 2 cards with the same style as Books & Chapters.

**Step 3: Add the 2 research report cards** with full citation details from the notebook.

**Step 4: Commit**

---

## Task 3: Research Page — Expand Conference Presentations to ALL 35

**Files:** Modify `site/research.html`

**Step 1: Query NotebookLM** for ALL 35 conference presentations with exact titles, authors, venues, and dates. Verify every single one.

**Step 2: Use /frontend-design** to redesign the Conference Activity section. Keep the stat bar at the top (35 presentations, 24 AAFS, etc.) but REPLACE the "Recent Highlights" subsection (which only shows 4) with a COMPLETE listing organized by research theme.

**Step 3: Organize all 35 presentations into 5 thematic groups:**

**Group 1: Cranial Fracture & Biomechanics** — All presentations about cranial fracture initiation, propagation, blunt impacts to heads:
1. Isa, Edwards*, Knysz*, Curry*. "Exploring inter-observer agreement in assessments of projectile defects." AAFS 2025, Baltimore.
2. Hulse, Tegtmeyer Hawke, Isa, Grow, Christensen. "The application of forensic fractography to thermally altered bone." AAFS 2025, Baltimore.
3. Unger* & Isa. "Investigating differences in methodological approaches to scoring fracture angle, outline, and surface." AAFS 2025, Baltimore.
4. Unger* & Isa. "Investigating Applications of Forensic Fractography of Bone Over the Postmortem Interval." AAFS 2024, Denver.
5. Isa, Fenton, Goots, Watson, Vaughan, Wei. "Effects of Input Energy and Impact Surface on Cranial Fracture Patterns." AAFS 2021, Virtual.
6. Isa, Fenton. "Building a science of adult cranial fracture." NIJ Symposium at AAFS 2018, Seattle.
7. Goots, Isa, Fenton, Watson, Vaughan, Wei, Haut. "Estimating points of impact in multiple blunt force cranial trauma: lessons from experimental impacts." AAFS 2018, Seattle.
8. Watson, Fenton, Isa, Vaughan, Wei, Haut. "The influence of implement shape on fracture pattern and defect size in experimental blunt cranial impacts." AAFS 2018, Seattle.
9. Isa, Fenton, Goots, Watson, Vaughan, Wei, Haut. "Initiation and propagation of fractures in blunt impacts to unconstrained human cadaver heads." AAFS 2018, Seattle.
10. Isa. "Building a science of cranial fracture part 1: fracture initiation and propagation." FLG 2017, Roscommon, MI.
11. Isa, Fenton, Vaughan, Haut. "Understanding the role of contact area in adult cranial fracture variation." AAFS 2016, Las Vegas.
12. Isa. "An update on cranial impact experiments: New directions in understanding fracture variation." FLG 2015, Roscommon, MI.
13. Fenton, Isa, Vaughan, Haut. "Experimental and computational validations of the initiation and propagation of cranial fractures in the adult skull." AAFS 2015, Orlando.
14. Isa, Fenton, Vollner, Niespodziewanski, DeLand, DeJong, Haut. "Fracture initiation and propagation in pediatric blunt cranial trauma." AAFS 2014, Seattle.
15. Isa. "Cranial fracture initiation: why does it matter?" FLG 2013, Roscommon, MI.
16. Fenton & Isa. "A decade of experimental research on blunt force cranial fracture." American Association of Anatomists 2019, Orlando.

**Group 2: Long Bone Fractography** — Femur bending, butterfly fractures, fractography methods:
17. Edwards* & Isa. "How do muzzle velocity, bullet mass, and overall kinetic energy influence skeletal fracture initiation and propagation patterns." AAFS 2025, Baltimore.
18. Edwards* & Isa. "Investigating Fracture Morphology in Gunshot Trauma Impacts in Relation to Kinetic Energy and Distance." AAFS 2024, Denver.
19. Isa, Fenton, Antonelli, Vaughan, Wei. "Application of fractography in trauma analysis of complex long bone fractures." AAFS 2020, Anaheim.
20. Isa, Fenton, Vaughan, Wei, Haut. "Concentrated 4-point bending and fracture behavior in human femora." AAFS 2017, New Orleans.
21. Isa. "In pursuit of butterfly fractures: 4-point bending experiments in human femora." FLG 2016, Roscommon, MI.
22. Isa, Fenton, DeLand, Haut. "Fracture characteristics of fresh human femora under controlled three-point bending." AAFS 2015, Orlando.
23. Isa. "Controlled three-point bending in fresh human femora." FLG 2014, Roscommon, MI.

**Group 3: Mandibular Trauma** — Mandible-specific experiments:
24. Isa, Fenton, Goots, Wei, Haut. "Experimental investigation of blunt force fracture in the human mandible." AAFS 2019, Baltimore.
25. Isa & Goots. "Blunt force experiments in the human mandible." FLG 2018, Roscommon, MI.

**Group 4: Inclusive Identification & Ethics** — Gender-inclusive ID, TGD, COSAGE, ethics:
26. Isa, Michael, Wainer*. "Research needs vs. publication trends in forensic anthropology." AAFS 2023, Orlando.
27. Edwards* & Isa. "Investigation of gunshot homicides in the New Mexico Decedent Image Database." AAFS 2023, Orlando.
28. Blatt, Michael, Isa, Flaherty. "Crowd-sourcing resources and solutions to aid forensic anthropologists in identification of transgender and gender diverse (TGD) decedents." AABA 2023, Reno.
29. Blatt, Michael, Isa, Redgrave. "Bye-bye binary: Collaborative, gender-expansive strategies for identification of Trans Does." AABA 2022, Denver.
30. Isa, Michael, Blatt, Flaherty. "Centering gender inclusive strategies in forensic anthropology." AAFS 2022, Seattle.
31. Redgrave, Veltstra, Michael, Blatt, Isa. "We Take Care of Our Own: Utilizing the LGBT+ Accountability for Missing and Murdered Persons (LAMMP) Database." AAFS 2022, Seattle.
32. Michael, Isa, Redgrave, Bingham Redgrave. "Structural vulnerability in transgender and non-binary decedent populations: Analytical considerations and harm reduction strategies." AAFS 2021, Virtual.
33. Michael, Isa, Redgrave, Bingham Redgrave. "Collaborative approaches in the identification of transgender and gender variant decedents." AAFS 2020, Anaheim.

**Group 5: Bioarchaeology** — Italy, Belize, archaeological contexts:
34. Streetman, Vogelsberg, Isa, Fenton, Sebastiani. "Changing economic landscapes in Late Antique Tuscany: osteological analysis of burials from an abandoned workshop." AAPA 2016, Atlanta.
35. Isa & Morton. "Interactive landscapes: Exploring movement and exchange across the ritual cavescape of Central Belize." Chacmool 2013, Calgary, Canada.

**Step 4: Implement each group** using the compact row pattern with left-border accents. Each group gets a subheading with an icon.

**Step 5: Verify count** — confirm exactly 35 presentations are rendered.

**Step 6: Commit**

---

## Task 4: Research Page — Add 2 Missing Grants/Awards to Funding Section

**Files:** Modify `site/research.html`

**Step 1: Add Outstanding Faculty Mentor Award (2022)** to the TTU-era "Faculty Research Grants" subsection. This is an award, not a grant — add it as a card without a dollar amount:

```
Outstanding Faculty Mentor Award
TTU Center for Transformative Undergraduate Experiences · 2022
Recognized excellence in undergraduate and graduate student research support.
```

**Step 2: Add Humanities Grand Prize (2014, $500)** to the MSU-era doctoral funding subsection grid:

```
Humanities, Social Science & Communication Arts Grand Prize — $500
MSU Undergraduate Research & Arts Forum · 2014
Awarded for "Fracture initiation and propagation in pediatric blunt cranial trauma."
```

**Step 3: Commit**

---

## Task 5: Teaching Page — Add 3 Missing Courses as Timeline

**Files:** Modify `site/teaching.html`

**Step 1: Query NotebookLM** for descriptions of:
1. ANTH 5319 Topics in Biological Anthropology: Human Osteology (TTU Graduate, 2022)
2. ANP 441 Human Osteology & Forensic Anthropology (MSU Undergraduate, 2019)
3. ANP 270 Women & Health (MSU Undergraduate, 2016)

**Step 2: Use /frontend-design** to redesign the course section as a timeline with two institutional groups.

**Step 3: Update the section heading.** Change the stat from "4 Undergraduate · 2 Graduate" to "7 TTU Courses · 2 MSU Courses" (or accurate count after adding).

**Step 4: Add 1 new TTU graduate course card** for ANTH 5319 Human Osteology. Same card pattern as the existing ANTH 5319 cards. Insert it alongside the other graduate courses.

**Step 5: Add an "Michigan State University" institutional separator** below the TTU courses. Use a clear heading:

```html
<div class="flex items-center gap-4 mt-16 mb-8">
  <span class="font-label text-xs uppercase tracking-widest text-secondary">Michigan State University · 2016–2019</span>
  <div class="h-px flex-grow bg-outline-variant/30"></div>
</div>
```

**Step 6: Add 2 MSU course cards:**

Card 1: ANP 441 Human Osteology & Forensic Anthropology (Undergraduate, 2019)
Card 2: ANP 270 Women & Health (Undergraduate, 2016)

Same card pattern as TTU courses but with MSU badge styling.

**Step 7: Commit**

---

## Task 6: Service & Impact Page — Add 2 Missing Professional Service Roles

**Files:** Modify `site/service-impact.html`

**Step 1: Add OSAC Subcommittee Member card** to the Professional Leadership section (before line ~182). This is SEPARATE from the Executive Secretary role:

```
Member, OSAC Forensic Anthropology Subcommittee
NIST Organization of Scientific Area Committees · 2023–Present
Contributing to the development of consensus-based forensic anthropology standards as a subcommittee member, prior to elevation to Executive Secretary.
```

**Step 2: Add AAFS Moderator card:**

```
Moderator, Anthropology Section Session
AAFS 76th Annual Scientific Meeting · Denver, CO · 2024
```

**Step 3: Commit**

---

## Task 7: Service & Impact Page — Rename Fieldwork Section + Add 2 Entries

**Files:** Modify `site/service-impact.html`

**Step 1: Rename section heading** from "International Fieldwork" to "Archaeological Fieldwork" (line ~328-330 area).

**Step 2: Add MSU Campus Archaeology Program** entry to the appropriate column:

```
Michigan State University Campus Archaeology Program (CAP)
Graduate Research Fellow · 2016–2019
Directors: Dr. Lynne Goldstein & Dr. Stacey Camp
East Lansing, MI
```

**Step 3: Add Central Belize Archaeological Survey (CBAS)** entry:

```
Central Belize Archaeological Survey (CBAS)
Field School Student · 2013
Director: Dr. Gabriel Wrobel
Central Belize
```

Use the same left-border accent pattern as the existing fieldwork entries.

**Step 4: Commit**

---

## Task 8: Service & Impact Page — Add Full Casework Record Section

**Files:** Modify `site/service-impact.html`

This is the LARGEST task. Every single case entry must appear.

**Step 1: Query NotebookLM** for ALL casework entries — Texas (reports + consults + testimony) and Michigan (reports). Verify every entry against the notebook.

**Step 2: Use /frontend-design** to design a "Forensic Casework Record" section. Insert it BEFORE the footer, AFTER the Peer Review section. Background: alternate appropriately per tonal rules.

**Step 3: Add Expert Witness Testimony subsection:**

```
Expert Witness Testimony
2025 · Skeletal Trauma Analysis · Winkler Co., TX
```

**Step 4: Add Texas Jurisdictions subsection.** Organize county-by-county. For each county, list the number of cases, types of analysis, and years. Every case must be traceable.

**Texas Counties (2021–2025):**

**Ector Co. (8 entries):**
- 2025: Medicolegal Significance Consult (no report)
- 2024: Recovery, Biological Profile, & Medicolegal Significance (report)
- 2023: Biological Profile & Trauma Analysis (report)
- 2022: Biological Profile & Trauma Analysis (report — listed under Winkler, verify)
- 2022: Comparative Medical Radiology ID (report)
- 2022: Comparative Medical Radiology ID & Trauma Analysis (report)
- 2022: Comparative Medical Radiology ID & Trauma Analysis (report)
- 2022: Comparative Medical Radiology ID (report)
- 2021: Medicolegal Significance (report)

**Potter Co. (4 entries):**
- 2025: Trauma Analysis (report)
- 2025: Medicolegal Significance Consult (no report)
- 2025: Medicolegal Significance Consult (no report)
- 2022: Trauma Analysis (report)

**Winkler Co. (2 entries):**
- 2025: Expert Witness Testimony — Skeletal Trauma Analysis
- 2022: Biological Profile & Trauma Analysis (report)

**Tom Green Co. (1 entry):**
- 2025: Trauma and Taphonomic Analysis (report)

**Lubbock Co. (1 entry):**
- 2025: Trauma Consult (no report)

**Runnels Co. (1 entry):**
- 2025: Medicolegal Significance Consult (no report)

**Upton Co. (1 entry):**
- 2024: Biological Profile & Trauma Analysis (report)

**Swisher Co. (1 entry):**
- 2023: Biological Profile & Trauma Analysis (report)

**Howard Co. (1 entry):**
- 2022: Comparative Medical Radiology ID (report)

**Step 5: Add Michigan Jurisdictions subsection.** Same county-by-county format.

**Michigan Counties (2014–2019):**

**Genesee Co. (11 entries):**
- 2018: Bio Profile, Trauma, & Comparative Medical Radiology ID (report)
- 2018: Bio Profile, Trauma, & Comparative Medical Radiology ID (report)
- 2017: Biological Profile & Trauma Analysis (report)
- 2017: Comparative Medical Radiology ID (report)
- 2017: Comparative Medical Radiology ID (report)
- 2017: Comparative Medical Radiology ID (report)
- 2016: Trauma Analysis & Comparative Medical Radiology ID (report)
- 2016: Comparative Medical Radiology ID (report)
- 2016: Comparative Medical Radiology ID (report)
- 2016: Comparative Medical Radiology ID (report)
- 2016: Comparative Medical Radiology ID (report — verify exact count)

**Ingham Co. (11 entries):**
- 2018: Comparative Medical Radiology ID (report)
- 2017: Comparative Medical Radiology ID (report)
- 2017: Comparative Medical Radiology ID (report)
- 2017: Comparative Medical Radiology ID (report)
- 2017: Comparative Medical Radiology ID (report)
- 2017: Comparative Medical Radiology ID (report)
- 2016: Comparative Medical Radiology ID (report)
- 2016: Trauma Analysis (report)
- 2016: Comparative Medical Radiology ID (report)
- 2015: Comparative Medical Radiology ID (report)
- 2015: Comparative Medical Radiology ID (report)

**Jackson Co. (3 entries):**
- 2016: Comparative Dental Radiology ID (report)
- 2016: Comparative Medical Radiology ID (report)
- 2015: Comparative Dental Radiology ID (report)

**Gratiot Co. (3 entries):**
- 2018: Comparative Medical Radiology ID (report)
- 2016: Comparative Medical Radiology ID (report)
- 2015: Comparative Medical Radiology ID (report)

**Eaton Co. (1 entry):**
- 2019: Biological Profile & Trauma Analysis (report)

**Van Buren Co. (1 entry):**
- 2019: Biological Profile & Trauma Analysis (report)

**Isabella Co. (1 entry):**
- 2017: Comparative Medical Radiology ID (report)

**Macomb Co. (1 entry):**
- 2017: Trauma Analysis (report)

**Shiawassee Co. (1 entry):**
- 2017: Biological Profile (report)

**Wexford Co. (1 entry):**
- 2017: Biological Profile & Trauma Analysis (report)

**Clinton Co. (1 entry):**
- 2017: Trauma Analysis (report)

**Ionia Co. (1 entry):**
- 2017: Comparative Medical Radiology ID (report)

**Newaygo Co. (1 entry):**
- 2016: Comparative Medical Radiology ID (report)

**Presque Isle Co. (1 entry):**
- 2016: Medicolegal Significance (report)

**Barry Co. (1 entry):**
- 2016: Comparative Medical Radiology ID (report)

**Kalamazoo Co. (1 entry):**
- 2014: Trauma Analysis (report)

**Step 6: Verify total count.** Must equal: 1 expert testimony + 14 TX reports + 5 TX consults + 41 MI reports = 61 entries.

**Step 7: Commit**

---

## Task 9: ARID Lab Page — Replace Stat Bar with Summary Card + Link

**Files:** Modify `site/arid-lab.html`

**Step 1: Replace the casework stat grid** (lines ~150-168) with a compact summary card that includes:
- Total: 61 cases (14 TX reports, 5 TX consults, 41 MI reports, 1 expert testimony)
- Years: 2014–2025
- Jurisdictions: 20+ counties across Texas and Michigan
- Types: Biological Profile, Trauma Analysis, Radiographic ID, Medicolegal Significance, Taphonomic Analysis, Field Recovery, Expert Testimony
- A prominent link: "View Full Casework Record →" pointing to the Service & Impact page casework section

**Step 2: Use /frontend-design** for the card design. Should feel like a gateway card, not a data dump.

**Step 3: Commit**

---

## Task 10: Homepage — Add Career Timeline (8 Lab Experience Entries)

**Files:** Modify `site/index.html`

**Step 1: Use /frontend-design** to design a career timeline section. Insert it BETWEEN the bio section end (line ~259) and the ARID Lab highlight section (line ~260).

Background: `bg-surface-container-low` (to alternate from the `bg-surface` of the bio).

**Step 2: Build a vertical timeline** showing Dr. Isa's laboratory progression, REVERSE CHRONOLOGICAL (most recent at top):

1. **Lead Graduate Research Assistant** — NIJ "Building a Science of Cranial Fracture" · MSU · 2016–2018 · Funded by NSF GRFP
2. **Laboratory Manager** — MSU Forensic Anthropology Laboratory · 2016–2017
3. **Osteologist** — Roselle Skeletal Collection, Museo Archaeologico, Grosseto, Italy · 2015–2019
4. **Graduate Assistant** — MSU Forensic Anthropology Laboratory · 2014–2020
5. **Osteologist** — Quattro Macine Skeletal Collection, Università del Salento, Lecce, Italy · 2015
6. **UG Research Assistant** — NIJ "Pediatric Fracture Printing" · MSU · 2012–2014 · Dean's RA
7. **UG Research Assistant** — Nubian Bioarchaeology Laboratory · MSU · 2012–2013 · Provost URI Fellowship
8. **UG Research Assistant** — Nubian Bioarchaeology Laboratory · MSU · 2010–2012 · Professorial RA

Note: The ARID Lab Director role (2021-present) is already on the ARID Lab page — do NOT duplicate here. The timeline ends at the point before she founded her own lab.

Use the left-border accent pattern for timeline entries. Consider a connecting vertical line on the left side.

**Step 3: Add a brief contextual intro** above the timeline:

```
Before founding the ARID Lab in 2021, Dr. Isa built a decade of hands-on experience across forensic, bioarchaeological, and osteological research settings.
```

**Step 4: Commit**

---

## Task 11: Homepage — Add 2 Missing Academic Honors

**Files:** Modify `site/index.html`

**Step 1: Add Outstanding Faculty Mentor Award** to the Academic Honors grid (line ~192-217 area):

```
Outstanding Faculty Mentor
TTU 2022
```

**Step 2: Add Humanities Grand Prize** to the same grid:

```
Humanities Grand Prize
MSU 2014
```

**Step 3: Update the grid** — currently `grid-cols-2 sm:grid-cols-3 md:grid-cols-6`. With 8 items, change to `md:grid-cols-4` (2 rows of 4) for better balance.

**Step 4: Commit**

---

## Task 12: Final Audit — Line-by-Line Verification

**Files:** All 6 pages

This task is MANDATORY. Do not skip it.

**Step 1: Query NotebookLM** for a complete section-by-section CV inventory with counts.

**Step 2: Verify EVERY category against the website.** Use grep/search to confirm each item exists on the site. Check off each one:

**Publications (12 peer-reviewed articles):**
- [ ] Edwards & Isa 2026 (JFS — bullet mass/velocity)
- [ ] Blatt, Isa, et al. 2025 (AJBA — COSAGE)
- [ ] Edwards & Isa 2024 (JFS — projectile kinetic energy) ← WAS MISSING
- [ ] Isa et al. 2023 (FSI — input energy/impactor shape)
- [ ] Adams et al. 2023 (Humans — TGD paradigm shift)
- [ ] Adams et al. 2022 (American Anthropologist — ethics)
- [ ] Michael et al. 2022 (FSR — 103-year-old cold case)
- [ ] Goots et al. 2021 (FSIR — mandible)
- [ ] Isa et al. 2021 (FSI — reverse butterfly)
- [ ] Isa et al. 2019 (FSI — cranial fracture initiation)
- [ ] Isa et al. 2018 (JFS — femora 3-point bending)
- [ ] Isa et al. 2017 (JFS — chest radiograph)

**Books & Chapters (4):**
- [ ] FBI Guide (Christensen, Isa et al. 2022)
- [ ] Rusellae chapter (Celuzza, Watson, Goots, Isa et al. 2023)
- [ ] Routledge Violence (Cucina, Isa, Wrobel — forthcoming 2026)
- [ ] Routledge Forensic Anthro (Isa — forthcoming 2026)

**Research Reports (2):**
- [ ] NIJ Final Project Overview (Isa & Fenton 2018)
- [ ] Belize cave context (Morton, Isa, Wrobel 2015)

**Grants, Honors & Awards (17):**
- [ ] Integrated Scholar Award (2025-2026)
- [ ] RAP Black $9,865 (2026)
- [ ] Douglas M. Lucas $3,656 (2023)
- [ ] Kenneth S. Field $14,605 (2023)
- [ ] Outstanding Faculty Mentor Award (2022) ← WAS MISSING
- [ ] Proposal Assistance $3,189 (2021)
- [ ] Dissertation Completion $7,000 (2020)
- [ ] Student Travel $1,500 (2020)
- [ ] Research Scholars $2,129 (2018)
- [ ] Corey Award $2,082 (2017)
- [ ] NSF GRFP $34,000/yr × 3 (2015)
- [ ] Ellis R. Kerley Paper Award $250 (2014)
- [ ] Rasmussen Fellowship $5,000 (2014)
- [ ] Humanities Grand Prize $500 (2014) ← WAS MISSING
- [ ] Phi Beta Kappa (2013)
- [ ] Phi Kappa Phi (2012)
- [ ] National Merit Scholarship (2010-2014)
- Note: MSU Alumni Distinguished Scholarship also on site = 18 total (17 CV + Integrated Scholar)

**Conference Presentations (35):**
- [ ] Verify all 35 presentations are on site, grouped by theme
- [ ] Count: must equal exactly 35
- [ ] Verify: Cranial group has ~16, Long Bone has ~7, Mandible has ~2, Inclusive ID has ~8, Bioarchaeology has ~2

**Teaching (9 courses):**
- [ ] ANTH 3314 Human Osteology (TTU UG)
- [ ] ANTH 4343 Methods in Forensic Anthropology (TTU UG)
- [ ] ANTH 3303 Forensic Anthropology (TTU UG)
- [ ] ANTH 4320 Forensic Archaeology (TTU UG)
- [ ] ANTH 5319 Skeletal Trauma & Taphonomy (TTU Grad)
- [ ] ANTH 5319 Cold Cases in Forensic Anthropology (TTU Grad)
- [ ] ANTH 5319 Human Osteology (TTU Grad) ← WAS MISSING
- [ ] ANP 441 Human Osteology & Forensic Anthropology (MSU UG) ← WAS MISSING
- [ ] ANP 270 Women & Health (MSU UG) ← WAS MISSING

**Student Mentorship (24):**
- [ ] 6 thesis chair students present
- [ ] 13 committee members present
- [ ] 5 undergraduate mentees present

**Workshops/Trainings/Invited Lectures (9):**
- [ ] NYC OCME Grand Rounds (2025)
- [ ] DPAA Laboratory (2024)
- [ ] Texas State FACTS (2024)
- [ ] FTCoE/SFA Webinar (2022)
- [ ] Odessa PD TCOLE (2022)
- [ ] MN Coroners Association (2019)
- [ ] Indiana Medical History Museum (2019)
- [ ] Michigan State Police (2019)
- [ ] Michigan State Police (2014)

**University Service (5):**
- [ ] Search Committee (2025-2026)
- [ ] Lambda Alpha Advisor (2024-2025)
- [ ] WGS Social Committee Co-Chair (2021-2024)
- [ ] Search Committee (2021-2022)
- [ ] TrUE Scholar Program (2021-2022)

**Professional Service (5):**
- [ ] AAFS Standards Board (2025-present)
- [ ] NIST OSAC Executive Secretary (2024-present)
- [ ] OSAC Subcommittee Member (2023-present) ← WAS MISSING
- [ ] AAFS Moderator Denver (2024) ← WAS MISSING
- [ ] OERR Subcommittee (2020-present)

**Symposium/Conference Organization (6):**
- [ ] AAFS Forensic Anthropology Meeting (4 years: 2022-2026)
- [ ] Queered Science Symposium (2022) — now renamed
- [ ] TRANScending webinar (2021)

**Peer Review (7):**
- [ ] Forensic Anthropology journal (2025)
- [ ] Forensic Sciences journal (2025)
- [ ] Grady Early Fellowship, Texas State (2024)
- [ ] Forensic Science Synergy journal (2023)
- [ ] Austrian Science Fund (2023)
- [ ] Science and Justice journal (2022)
- [ ] BIPOC Communities and Curricula book chapter (2022)

**Casework (61 total):**
- [ ] Expert Witness Testimony (1)
- [ ] Texas Reports (14) — count by county: Ector 8, Potter 2, Winkler 1, Tom Green 1, Upton 1, Swisher 1, Howard 1 — verify = 14 (note: some Ector cases may need recount)
- [ ] Texas Consults (5) — Lubbock 1, Potter 2, Runnels 1, Ector 1
- [ ] Michigan Reports (41) — count by county: Genesee 11, Ingham 11, Gratiot 3, Jackson 3, + 12 single-county entries = 41
- [ ] Total rendered on Service & Impact page = 61

**Laboratory Experience (9):**
- [ ] ARID Lab Director (on ARID Lab page)
- [ ] Lead Graduate RA, NIJ project (on homepage timeline)
- [ ] Lab Manager, MSU (on homepage timeline)
- [ ] Osteologist, Roselle Collection (on homepage timeline)
- [ ] Graduate Assistant, MSU (on homepage timeline)
- [ ] Osteologist, Quattro Macine (on homepage timeline)
- [ ] UG RA, NIJ Pediatric Fracture (on homepage timeline)
- [ ] UG RA, Nubian Bioarch Lab — Provost (on homepage timeline)
- [ ] UG RA, Nubian Bioarch Lab — PRA (on homepage timeline)

**Archaeological Fieldwork (4):**
- [ ] IMPERO, Italy (2018-2019)
- [ ] MSU Campus Archaeology Program (2016-2019) ← WAS MISSING
- [ ] BREA, Belize (2014)
- [ ] CBAS, Belize (2013) ← WAS MISSING

**Step 3: If ANY item is missing, fix it immediately.** Do not proceed to push until all checkboxes pass.

**Step 4: Mobile spot-check** — verify new sections render properly at 375px width using Playwright.

**Step 5: Commit final fixes if any.**

**Step 6: Push to GitHub.**

```bash
git push
```

**Step 7: Verify live site** at https://shayisa.github.io/drmariisa/

---

## Summary — What Changes on Each Page

| Page | Changes |
|------|---------|
| **Homepage** | Career timeline (8 lab experience entries, reverse chronological), 2 additional academic honors |
| **Research** | 1 missing publication (Edwards 2024), 2 research reports (new section), ALL 35 conference presentations (expanded from 4), 2 missing grants/awards |
| **Teaching** | 3 courses added (1 TTU grad + 2 MSU undergrad), timeline redesign with institutional groups |
| **Service & Impact** | 2 professional service roles, 2 archaeological fieldwork entries, section rename, FULL casework record (61 entries organized by county) |
| **ARID Lab** | Stat bar replaced with summary card linking to full casework record |
| **Privacy** | No changes |

## Final Count After Completion

| Category | Before | After |
|----------|--------|-------|
| Publications | 11/12 | **12/12** |
| Research Reports | 0/2 | **2/2** |
| Grants/Awards | 15/17 | **17/17** |
| Conference Presentations | 4/35 | **35/35** |
| Teaching | 6/9 | **9/9** |
| Professional Service | 3/5 | **5/5** |
| Casework | 0/61 (stat only) | **61/61** |
| Lab Experience | 0/9 | **9/9** |
| Archaeological Fieldwork | 2/4 | **4/4** |
| **Total gaps closed** | — | **113 items** |
