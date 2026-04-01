# ARID Lab Page (arid-lab.html) Completion Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Complete the ARID Lab page by replacing 3 fictional team members with 4 real affiliated faculty (with TTU photos), fixing all dead links, correcting the program from PhD to M.A., standardizing name, fixing accessibility, and applying safety policy.

**Architecture:** Static HTML, direct edits. The major structural change is replacing the fictional team section (3 cards) with 4 real faculty cards using photos hosted on TTU's servers. Also fixing publications to use real DOIs and correcting the application section.

**Tech Stack:** HTML, Tailwind CSS (CDN), Google Fonts (Noto Serif + Manrope), Material Symbols

**Data Source:** NotebookLM notebook "Mari Isa Website" (ID: a4581dc1-eeec-48f2-bfff-4d081d1d4a5a)

---

## SAFETY REQUIREMENT

Same as Teaching page: no office numbers, building names, room numbers, street addresses, phone numbers, or schedules. "West Texas law enforcement" (geographic region) is acceptable. Email addresses are acceptable (publicly listed on TTU).

---

## Key Reference Data (from NotebookLM)

### Real Affiliated Faculty

| Name | Title | ARID Lab Role | Photo URL | Email |
|------|-------|---------------|-----------|-------|
| Dr. Brett A. Houk | Professor of Archaeology, National Geographic Explorer | Forensic archaeology, total data station mapping, photogrammetry | https://www.depts.ttu.edu/sasw/Anthropology/images/Houk_2023.jpg | brett.houk@ttu.edu |
| Dr. Arthur Durband | Associate Professor, Chair of SASW | Osteological analysis | https://www.depts.ttu.edu/sasw/Anthropology/images/durband.jpg | arthur.durband@ttu.edu |
| Dr. Anna Novotny | Associate Professor, UG Program Director | Excavation, osteological analysis, identification | https://www.depts.ttu.edu/sasw/Anthropology/images/Novotny_2016.jpg | Anna.Novotny@ttu.edu |
| Dr. Giacomo Fontana | Assistant Professor, Director DARE Lab | Drone & pedestrian survey, GIS | https://www.depts.ttu.edu/sasw/Anthropology/images/Fontana_2024.jpg | giacomo.fontana@ttu.edu |

### Key URLs
- Official ARID Lab page: https://www.depts.ttu.edu/sasw/Anthropology/FAART.php
- TTU Anthropology Faculty: https://www.depts.ttu.edu/sasw/Anthropology/Anthropology_Faculty.php

### Publication DOIs
- Edwards & Isa (2024) — Projectile KE & fracture: https://doi.org/10.1111/1556-4029.15462
- Blatt, Isa et al. (2025) — COSAGE: https://doi.org/10.1002/ajpa.70180

### Program Correction
- TTU Anthropology is **M.A. only** (not PhD). Students who want a PhD go elsewhere after the M.A.
- No formal application form exists on the ARID Lab page — prospective students contact Dr. Isa directly

---

## Task 1: Add Page Title, Meta Description, and Standardize Name

**Files:**
- Modify: `site/arid-lab.html`

**Step 1: Add title and meta after line 5**

After `<meta content="width=device-width, initial-scale=1.0" name="viewport"/>`, insert:
```html
<title>ARID Lab | Dr. Mari Isa | Anthropology Research & IDentification</title>
<meta name="description" content="The ARID Lab at Texas Tech University conducts forensic anthropology research, graduate training, and medicolegal casework services under the direction of Dr. Mari Isa."/>
```

**Step 2: Fix all 4 "Mariyam" instances**

- Line 86 (nav logo): `Dr. Mariyam Isa` → `Dr. Mari Isa`
- Line 157 (quote attribution): `— Dr. Mariyam Isa` → `— Dr. Mari Isa`
- Line 340 (footer name): `Dr. Mariyam Isa` → `Dr. Mari Isa`
- Line 346 (copyright): `© 2024 Dr. Mariyam Isa` → `© 2026 Dr. Mari Isa`

**Step 3: Verify** — grep for "Mariyam" to confirm zero visible instances.

**Step 4: Commit**
```bash
git add site/arid-lab.html
git commit -m "Add title/meta and standardize name on ARID Lab page"
```

---

## Task 2: Fix All Image Accessibility (data-alt → alt)

**Files:**
- Modify: `site/arid-lab.html`

8 images use `data-alt` instead of `alt` (lines 117, 171, 188, 205, 227, 233, 239, 242).

**Step 1: Replace all `data-alt=` with `alt=` using replace_all**

**Step 2: Verify** — grep for "data-alt" to confirm zero remain.

**Step 3: Commit**
```bash
git add site/arid-lab.html
git commit -m "Fix image accessibility: convert data-alt to alt on ARID Lab page"
```

---

## Task 3: Fix "Our Mission" Section to Match Official ARID Lab Description

**Files:**
- Modify: `site/arid-lab.html`

The current mission paragraph and services list are partially made up. Replace with language grounded in the official TTU ARID Lab page.

**Step 1: Replace mission paragraph (lines 126-128)**

```
Old: We bridge the gap between biological data and human stories. Our work focuses on improving identification methods for marginalized populations, ensuring that forensic science serves as a tool for justice and human rights.

New: We conduct research, provide graduate academic training, and offer forensic anthropology and archaeology casework services to requesting law enforcement agencies and medicolegal professionals. Our work is supported by a broader team of anthropologists with specialized expertise in skeletal analysis and archaeological methods.
```

This is the exact language from the official TTU ARID Lab page.

**Step 2: Fix the Medicolegal Casework Services box to match official descriptions (lines 134-149)**

Update the 3 services to use the lab's actual language:

- "Forensic Archaeological Search & Recovery — systematic site documentation and excavation"
  → **"Search & Recovery** — applying archaeological techniques to assist law enforcement in the systematic search for and recovery of human remains and associated evidence"

- "Biological Profile Estimation — ancestry, age, sex, and stature assessment"
  → **"Biological Profile** — estimating sex, population affinity, age-at-death, and stature of unidentified remains, as well as documenting potentially individualizing information"

- "Advanced Skeletal Trauma Analysis — fracture interpretation and perimortem assessment"
  → **"Trauma Analysis** — documenting and evaluating skeletal trauma to provide information about the timing and mechanism of injury"

Also add the 4th service that the official page lists:
- **"Medicolegal Significance** — identifying suspected skeletal material as human or non-human and evaluating relevance to the death investigation system"

**Step 3: Verify** — read back the section to confirm it matches the official TTU ARID Lab page language.

**Step 4: Commit**
```bash
git add site/arid-lab.html
git commit -m "Ground mission section in official ARID Lab language, fix service descriptions"
```

---

## Task 4: Replace Fictional Team Members with Real Faculty

**Files:**
- Modify: `site/arid-lab.html`

This is the critical task. Replace the entire team section (lines 162-219) — removing 3 fictional people (Elena Rodriguez, Julian Chen, Maya Patel) and replacing with 4 real affiliated faculty using TTU-hosted photos.

**Step 1: Replace the team section**

Change grid from `lg:grid-cols-3` to `md:grid-cols-2 lg:grid-cols-4` to fit 4 cards.

Replace the 3 fictional cards with 4 real faculty cards:

```html
<!-- Celebrating the Team -->
<section class="py-24 px-8 max-w-7xl mx-auto">
<div class="mb-16">
<h2 class="text-4xl font-headline text-primary mb-4">Affiliated Faculty</h2>
<p class="font-body text-on-surface-variant max-w-2xl">Our interdisciplinary team brings together diverse expertise in forensic archaeology, osteology, bioarchaeology, and digital methods to support every investigation.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<!-- Faculty Card 1: Dr. Brett A. Houk -->
<div class="bg-surface-container rounded-xl overflow-hidden group hover:bg-surface-container-high transition-colors duration-300">
<div class="aspect-square overflow-hidden">
<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Dr. Brett A. Houk" src="https://www.depts.ttu.edu/sasw/Anthropology/images/Houk_2023.jpg"/>
</div>
<div class="p-6">
<h3 class="text-xl font-headline text-primary mb-1">Dr. Brett A. Houk</h3>
<p class="text-xs font-label uppercase tracking-widest text-secondary mb-3">Professor of Archaeology</p>
<p class="font-body text-sm text-on-surface-variant mb-2"><strong>ARID Role:</strong> Forensic archaeology, total data station mapping, photogrammetry</p>
<p class="font-body text-sm text-on-surface-variant"><strong>Recognition:</strong> National Geographic Explorer, President's Excellence in Research Professor</p>
</div>
</div>
<!-- Faculty Card 2: Dr. Arthur Durband -->
<div class="bg-surface-container rounded-xl overflow-hidden group hover:bg-surface-container-high transition-colors duration-300">
<div class="aspect-square overflow-hidden">
<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Dr. Arthur Durband" src="https://www.depts.ttu.edu/sasw/Anthropology/images/durband.jpg"/>
</div>
<div class="p-6">
<h3 class="text-xl font-headline text-primary mb-1">Dr. Arthur Durband</h3>
<p class="text-xs font-label uppercase tracking-widest text-secondary mb-3">Assoc. Professor · Chair of SASW</p>
<p class="font-body text-sm text-on-surface-variant"><strong>ARID Role:</strong> Osteological analysis, paleoanthropology, virtual anthropology</p>
</div>
</div>
<!-- Faculty Card 3: Dr. Anna Novotny -->
<div class="bg-surface-container rounded-xl overflow-hidden group hover:bg-surface-container-high transition-colors duration-300">
<div class="aspect-square overflow-hidden">
<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Dr. Anna Novotny" src="https://www.depts.ttu.edu/sasw/Anthropology/images/Novotny_2016.jpg"/>
</div>
<div class="p-6">
<h3 class="text-xl font-headline text-primary mb-1">Dr. Anna Novotny</h3>
<p class="text-xs font-label uppercase tracking-widest text-secondary mb-3">Assoc. Professor · UG Program Director</p>
<p class="font-body text-sm text-on-surface-variant"><strong>ARID Role:</strong> Excavation, osteological analysis, identification, bioarchaeology</p>
</div>
</div>
<!-- Faculty Card 4: Dr. Giacomo Fontana -->
<div class="bg-surface-container rounded-xl overflow-hidden group hover:bg-surface-container-high transition-colors duration-300">
<div class="aspect-square overflow-hidden">
<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Dr. Giacomo Fontana" src="https://www.depts.ttu.edu/sasw/Anthropology/images/Fontana_2024.jpg"/>
</div>
<div class="p-6">
<h3 class="text-xl font-headline text-primary mb-1">Dr. Giacomo Fontana</h3>
<p class="text-xs font-label uppercase tracking-widest text-secondary mb-3">Asst. Professor · Director, DARE Lab</p>
<p class="font-body text-sm text-on-surface-variant"><strong>ARID Role:</strong> Drone & pedestrian survey, GIS, remote sensing, computational archaeology</p>
</div>
</div>
</div>
<p class="text-center text-on-surface-variant text-sm mt-10"><a href="https://www.depts.ttu.edu/sasw/Anthropology/Anthropology_Faculty.php" target="_blank" class="text-primary hover:underline">View all Anthropology faculty at TTU →</a></p>
</section>
```

**Step 2: Verify** — grep for "Elena Rodriguez", "Julian Chen", "Maya Patel" to confirm zero fictional names remain.

**Step 3: Commit**
```bash
git add site/arid-lab.html
git commit -m "Replace fictional team with 4 real affiliated faculty with TTU photos"
```

---

## Task 5: Fix Publication Links with Real DOIs

**Files:**
- Modify: `site/arid-lab.html`

Two publication links are dead (`href="#"`). Also fix the COSAGE citation — the notebook shows the COSAGE paper was published in 2025 in the American Journal of Biological Anthropology, not 2023 in Forensic Science International.

**Step 1: Fix Publication 1 link (line 273)**
```
Old: <a ... href="#">
New: <a ... href="https://doi.org/10.1111/1556-4029.15462" target="_blank">
```

**Step 2: Fix Publication 2 — update citation and link (lines 292-299)**

Update journal from "Forensic Science International, 2023" to "American Journal of Biological Anthropology, 2025"

Update link:
```
Old: <a ... href="#">
New: <a ... href="https://doi.org/10.1002/ajpa.70180" target="_blank">
```

Change "Download Data" to "Read Paper" for consistency.

**Step 3: Verify** — grep for `href="#"` in the main content area to confirm publication links are fixed.

**Step 4: Commit**
```bash
git add site/arid-lab.html
git commit -m "Fix publication links with real DOIs, correct COSAGE citation"
```

---

## Task 6: Fix Join the Lab Section (M.A., Apply Button, FAQ)

**Files:**
- Modify: `site/arid-lab.html`

Three issues in this section:
1. Says "PhD" — should say "M.A." (TTU is M.A. only)
2. "Apply to ARID Lab" button is dead — should link to official ARID Lab page
3. FAQ says "Contact Maya" — fictional person, replace with Dr. Isa's email

**Step 1: Fix "PhD" reference (line 310)**
```
Old: prospective PhD student
New: prospective graduate student
```

**Step 2: Fix application text (line 314)**
```
Old: PhD applications are typically reviewed in December for the following Fall cohort.
New: M.A. applications are typically reviewed in December for the following Fall cohort.
```

**Step 3: Replace dead button with link to official ARID Lab page (line 315)**
```
Old: <button class="w-full bg-primary text-on-primary py-4 rounded-md font-label uppercase tracking-widest text-sm hover:bg-primary-container transition-all">Apply to ARID Lab</button>
New: <a href="https://www.depts.ttu.edu/sasw/Anthropology/FAART.php" target="_blank" class="block w-full bg-primary text-on-primary py-4 rounded-md font-label uppercase tracking-widest text-sm hover:bg-primary-container transition-all text-center">Visit the Official ARID Lab Page</a>
```

**Step 4: Fix FAQ "Contact Maya" (line 331)**
```
Old: Contact Maya, our lab manager, for details.
New: Contact Dr. Isa at <a href="mailto:mari.isa@ttu.edu" class="text-primary hover:underline">mari.isa@ttu.edu</a> for details.
```

**Step 5: Commit**
```bash
git add site/arid-lab.html
git commit -m "Fix Join the Lab: M.A. program, link to official ARID page, remove fictional contact"
```

---

## Task 7: Fix Footer to Match Site Pattern

**Files:**
- Modify: `site/arid-lab.html`

**Step 1: Replace entire footer (lines 339-347) with standard footer**

```html
<footer class="w-full px-8 py-20 flex flex-col items-center gap-8 border-t border-[#d0c3cb]/15 bg-[#eeeeed]">
<div class="font-['Noto_Serif'] text-lg text-[#361c36]">Dr. Mari Isa</div>
<div class="flex flex-wrap justify-center gap-8">
<a class="font-['Manrope'] text-xs uppercase tracking-widest text-zinc-500 hover:text-[#361c36] transition-colors hover:underline decoration-[#4e314d] underline-offset-4" href="https://www.depts.ttu.edu/sasw/Anthropology/CV/CV_Isa.pdf" target="_blank">Curriculum Vitae</a>
<a class="font-['Manrope'] text-xs uppercase tracking-widest text-zinc-500 hover:text-[#361c36] transition-colors hover:underline decoration-[#4e314d] underline-offset-4" href="https://www.depts.ttu.edu/entx/Department/Personnel/Faculty/Mari_Isa.php?v=preview" target="_blank">Institutional Profile</a>
<a class="font-['Manrope'] text-xs uppercase tracking-widest text-zinc-500 hover:text-[#361c36] transition-colors hover:underline decoration-[#4e314d] underline-offset-4" href="privacy.html">Privacy Policy</a>
</div>
<div class="font-['Manrope'] text-xs uppercase tracking-widest text-zinc-500 opacity-80">© 2026 Dr. Mari Isa. All rights reserved.</div>
<div class="flex gap-6 mt-4">
<a class="text-[#361c36] opacity-60 hover:opacity-100 transition-opacity" href="mailto:mari.isa@ttu.edu"><span class="material-symbols-outlined">alternate_email</span></a>
<a class="text-[#361c36] opacity-60 hover:opacity-100 transition-opacity" href="https://scholar.google.com/citations?user=fw-qsXcAAAAJ&amp;hl=en" target="_blank"><span class="material-symbols-outlined">grid_view</span></a>
<a class="text-[#361c36] opacity-60 hover:opacity-100 transition-opacity" href="https://www.researchgate.net/profile/Mariyam-Isa" target="_blank"><span class="material-symbols-outlined">account_circle</span></a>
</div>
</footer>
```

**Step 2: Verify** — grep for `href="#"` to confirm zero dead links.

**Step 3: Commit**
```bash
git add site/arid-lab.html
git commit -m "Fix ARID Lab footer: real links, social icons, matching site pattern"
```

---

## Task 8: Final Visual Verification and Link Audit

**Files:**
- Read: `site/arid-lab.html` (final state)

**Step 1: Start local server and open in Playwright**

**Step 2: Take screenshots of all sections**

1. Hero + mission
2. Medicolegal services + quote
3. Faculty cards (4 real people with TTU photos)
4. Gallery
5. Publications
6. Join the Lab + FAQ
7. Footer

**Step 3: Verification checklist**

- [ ] Page title: "ARID Lab | Dr. Mari Isa | Anthropology Research & IDentification"
- [ ] Zero instances of "Mariyam" in visible text
- [ ] Zero `href="#"` dead links
- [ ] Zero `data-alt` attributes
- [ ] Zero fictional names (Elena Rodriguez, Julian Chen, Maya Patel)
- [ ] No "Contact Maya" text
- [ ] 4 real faculty photos loading from TTU servers
- [ ] "M.A. applications" (not PhD)
- [ ] "Visit the Official ARID Lab Page" links to correct TTU URL
- [ ] 2 publication links have real DOIs
- [ ] COSAGE citation corrected (2025, Am J Biological Anthropology)
- [ ] Footer matches site pattern
- [ ] No location info (office, building, room, phone, schedule)
- [ ] Copyright says 2026

**Step 4: Stop server and final commit**

```bash
pkill -f "python3 -m http.server 8765"
git add -A
git commit -m "Complete ARID Lab page: real faculty, real links, all verified"
```

---

## Summary of All Changes

| What | Before | After |
|------|--------|-------|
| Title tag | Missing | "ARID Lab \| Dr. Mari Isa \| Anthropology Research & IDentification" |
| Name (4 locations) | "Dr. Mariyam Isa" | "Dr. Mari Isa" |
| Image accessibility | 8 images with `data-alt` | All proper `alt` attributes |
| **Team section** | 3 fictional people (Elena Rodriguez, Julian Chen, Maya Patel) with AI portraits | **4 real TTU faculty** with official university photos |
| Publication 1 link | Dead (`#`) | Real DOI for Edwards & Isa 2024 |
| Publication 2 | Wrong journal/year + dead link | Corrected to COSAGE 2025 + real DOI |
| "Apply" button | Dead `<button>` | Links to official ARID Lab page at TTU |
| Program type | "PhD applications" | "M.A. applications" |
| FAQ contact | "Contact Maya" (fictional) | "Contact Dr. Isa at mari.isa@ttu.edu" |
| Footer | Dead links, no social icons | Matches site pattern |
| Copyright | 2024 | 2026 |
