# Teaching Page (teaching.html) Completion Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Complete the teaching page with verified course data, enriched student mentorship, fixed links, standardized name, and all location-identifying information removed for personal safety.

**Architecture:** Static HTML, direct edits. Key structural changes: (1) expand from 3 to 6 course cards using TTU catalog data, (2) enrich student gallery with additional real mentees, (3) replace CTA buttons and placeholder email with safe, working alternatives, (4) remove "Office Hours" and any location details.

**Tech Stack:** HTML, Tailwind CSS (CDN), Google Fonts (Noto Serif + Manrope), Material Symbols

**Data Source:** NotebookLM notebook "Mari Isa Website" (ID: a4581dc1-eeec-48f2-bfff-4d081d1d4a5a)

---

## SAFETY REQUIREMENT

**Remove or avoid any content that could pinpoint Dr. Isa's physical location:**
- No office numbers, building names, room numbers
- No street addresses or phone numbers
- No class schedules, meeting times, or days
- No "Office Hours" button or link
- Email (mari.isa@ttu.edu) is acceptable — it's publicly listed on TTU's website

---

## Key Reference Data (from NotebookLM)

### Full Course List (from CV + TTU Catalog)

**Undergraduate (4 courses):**
1. ANTH 3303: Forensic Anthropology (2020–Present) — Application of biological anthropology to legal contexts. 3 credit hours. Prereqs: ANTH 2100 & 2300.
2. ANTH 3314: Human Osteology (2022) — Foundational knowledge of skeletal biology and bone identification. 3 credit hours. Prereqs: ANTH 2100 & 2300.
3. ANTH 4343: Methods in Forensic Anthropology (2021–Present, formerly Human Skeletal Biology & Forensic Techniques) — Advanced skeletal biology and forensic techniques. 3 credit hours. Prereq: ANTH 3314.
4. ANTH 4320: Forensic Archaeology (2020–Present) — Recovery and documentation of remains at forensic scenes. 3 credit hours. Prereqs: ANTH 2100 & 2300.

**Graduate (2 topic courses under ANTH 5319):**
5. ANTH 5319: Skeletal Trauma & Taphonomy (2022–Present) — Mechanistic analysis of trauma and postmortem changes.
6. ANTH 5319: Cold Cases in Forensic Anthropology (2022–Present) — Interdisciplinary strategies for resolving long-term unidentified cases.

### Verified Student Mentees (from CV)

**Graduate (thesis chair):**
- Delaney Edwards (M.A. 2023) — "Investigation of Fracture Morphology in Gunshot Trauma" → co-authored 2 Journal of Forensic Sciences articles
- Carter Unger (M.A. 2024) — "Regional and Seasonal Effects on Long Bone Fracture Characteristics" → co-presented at AAFS 2024 & 2025

**Undergraduate (specific outcomes):**
- Chiamaka Lebechi (2021-2022) — "The Unidentified-Identified Gap" → 1st place at TTU Undergrad Research Conference 2022
- Catherine Wainer (2022-2023) — "Research Needs vs. Publication Trends" → contributing author on AAFS 2023 poster
- Darian Finch (2024-2025) — "Observer Experience and Sleep on Skeletal Trauma Documentation" → presented at TTU Undergrad Research Conference 2025
- Jordyn Knysz & Alex Curry (2024) — "Inter-observer agreement in projectile defects" → contributing authors on AAFS 2025 poster

---

## Task 1: Standardize Name and Fix Title

**Files:**
- Modify: `site/teaching.html`

**Step 1: Fix title tag (line 6)**
```
Old: Teaching &amp; Mentorship | Dr. Mariyam Isa
New: Teaching &amp; Mentorship | Dr. Mari Isa
```

**Step 2: Fix nav logo (line 91)**
```
Old: Dr. Mariyam Isa
New: Dr. Mari Isa
```

**Step 3: Fix footer name (line 270)**
```
Old: Dr. Mariyam Isa
New: Dr. Mari Isa
```

**Step 4: Fix copyright (line 277)**
```
Old: © 2024 Dr. Mariyam Isa. All rights reserved.
New: © 2026 Dr. Mari Isa. All rights reserved.
```

**Step 5: Verify** — grep for "Mariyam" to confirm zero instances remain.

**Step 6: Commit**
```bash
git add site/teaching.html
git commit -m "Standardize name to Dr. Mari Isa throughout teaching page"
```

---

## Task 2: Fix Image Accessibility (data-alt → alt)

**Files:**
- Modify: `site/teaching.html`

5 images use `data-alt` instead of `alt` (lines 151, 168, 185, 211, 239). The hero image at line 127 has both `alt` and `data-alt` — keep the `alt`, remove the `data-alt`.

**Step 1: Replace all `data-alt=` with `alt=` using replace_all**

**Step 2: Fix hero image line 127** — it will now have two `alt` attributes after the replace. Remove the duplicate by finding `alt="Dr. Isa teaching" class="w-full h-full object-cover" alt=` and fixing to have only one `alt`.

**Step 3: Verify** — grep for "data-alt" to confirm zero remain.

**Step 4: Commit**
```bash
git add site/teaching.html
git commit -m "Fix image accessibility: convert data-alt to alt on teaching page"
```

---

## Task 3: Fix Footer to Match Homepage/Research

**Files:**
- Modify: `site/teaching.html`

**Step 1: Replace entire footer (lines 269-279) with the standard footer**

```html
<footer class="bg-[#eeeeed] dark:bg-zinc-900 w-full px-8 py-20 flex flex-col items-center gap-8 border-t border-[#d0c3cb]/15">
<div class="font-['Noto_Serif'] text-lg text-[#361c36] dark:text-[#f4f4f3]">Dr. Mari Isa</div>
<div class="flex gap-8 font-['Manrope'] text-xs uppercase tracking-widest">
<a class="text-zinc-500 hover:text-[#361c36] hover:underline decoration-[#4e314d] underline-offset-4 transition-all" href="https://www.depts.ttu.edu/sasw/Anthropology/CV/CV_Isa.pdf" target="_blank">Curriculum Vitae</a>
<a class="text-zinc-500 hover:text-[#361c36] hover:underline decoration-[#4e314d] underline-offset-4 transition-all" href="https://www.depts.ttu.edu/entx/Department/Personnel/Faculty/Mari_Isa.php?v=preview" target="_blank">Institutional Profile</a>
<a class="text-zinc-500 hover:text-[#361c36] hover:underline decoration-[#4e314d] underline-offset-4 transition-all" href="privacy.html">Privacy Policy</a>
</div>
<p class="text-zinc-500 font-['Manrope'] text-xs uppercase tracking-widest opacity-80">© 2026 Dr. Mari Isa. All rights reserved.</p>
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
git add site/teaching.html
git commit -m "Fix teaching page footer: real links, social icons, matching site pattern"
```

---

## Task 4: Fix Mentorship CTA Section (Remove Office Hours, Fix Email)

**Files:**
- Modify: `site/teaching.html`

This section (lines 247-266) has: placeholder email `m.isa@university.edu`, dead "Join the Lab" button, and "Office Hours" button (SAFETY: must remove).

**Step 1: Replace entire CTA section (lines 247-266)**

```html
<!-- Mentorship CTA -->
<section class="max-w-7xl mx-auto px-8 mb-32">
<div class="bg-primary-container rounded-3xl p-12 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
<div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
<div class="z-10 flex-1">
<h2 class="font-headline text-4xl lg:text-5xl text-white mb-6">Investigating the Past, Shaping the Future</h2>
<p class="text-on-primary-container text-lg max-w-xl mb-10">Are you a student interested in forensic anthropology, skeletal biology, or bioarchaeology? I am always looking for motivated scholars to join our research efforts in the ARID Lab.</p>
<div class="flex flex-wrap gap-4">
<a href="arid-lab.html#join" class="bg-white text-primary px-8 py-4 rounded-md font-bold uppercase text-xs tracking-widest hover:bg-surface-container-low transition-colors">Join the Lab</a>
<a href="media-contact.html#contact" class="border border-white/30 text-white px-8 py-4 rounded-md font-bold uppercase text-xs tracking-widest hover:bg-white/10 transition-colors">Get in Touch</a>
</div>
</div>
<div class="z-10 flex-shrink-0">
<div class="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
<span class="material-symbols-outlined text-tertiary-fixed text-4xl mb-4" data-icon="mail">mail</span>
<p class="text-white font-label text-sm uppercase tracking-widest mb-1">Inquiries</p>
<a href="mailto:mari.isa@ttu.edu" class="text-white text-xl font-headline italic hover:underline">mari.isa@ttu.edu</a>
</div>
</div>
</div>
</section>
```

Key changes:
- "Join the Lab" button → real `<a>` link to `arid-lab.html#join`
- "Office Hours" button → **REMOVED**, replaced with "Get in Touch" linking to `media-contact.html#contact`
- Email `m.isa@university.edu` → `mari.isa@ttu.edu` as a working mailto link

**Step 2: Verify** — confirm no `university.edu` or `Office Hours` text remains.

**Step 3: Commit**
```bash
git add site/teaching.html
git commit -m "Fix mentorship CTA: remove Office Hours, fix email, add working links"
```

---

## Task 5: Expand Course Cards from 3 to 6

**Files:**
- Modify: `site/teaching.html`

The current page shows 3 courses. Dr. Isa teaches 6. We need to add: Forensic Anthropology, Forensic Archaeology, and Cold Cases in Forensic Anthropology.

Also: remove all "Course Details" links (lines 159, 176, 193) since they point to `#courses` (nowhere useful), and remove "View Full Syllabus Catalog" text (line 144) since no catalog exists.

**Step 1: Remove "View Full Syllabus Catalog" (line 143-145)**

Replace the entire div with nothing (remove it).

**Step 2: Fix existing 3 course cards**

- Card 1 (Human Osteology, line 155): Change badge from "Undergrad/Grad" to "ANTH 3314 · Undergraduate". Remove "Course Details" link.
- Card 2 (Methods in Forensic Anthropology, line 172): Change badge from "Graduate" to "ANTH 4343 · Undergraduate". Remove "Course Details" link.
- Card 3 (Skeletal Trauma & Taphonomy, line 189): Change badge from "Seminar" to "ANTH 5319 · Graduate". Remove "Course Details" link.

**Step 3: Add 3 new course cards after the existing 3**

Card 4: Forensic Anthropology
```html
<div class="group bg-surface-container-lowest rounded-xl overflow-hidden hover:translate-y-[-8px] transition-transform duration-300">
<div class="p-8">
<div class="flex justify-between items-start mb-4">
<h3 class="font-headline text-2xl text-primary">Forensic Anthropology</h3>
<span class="bg-secondary-container text-secondary text-[10px] px-2 py-1 rounded-full uppercase font-bold tracking-widest">ANTH 3303 · Undergraduate</span>
</div>
<p class="text-on-surface-variant text-sm leading-relaxed">Introduction to the application of biological anthropology within legal and medicolegal contexts, covering methods of human identification, forensic case analysis, and the role of the forensic anthropologist in death investigation.</p>
</div>
</div>
```

Card 5: Forensic Archaeology
```html
<div class="group bg-surface-container-lowest rounded-xl overflow-hidden hover:translate-y-[-8px] transition-transform duration-300">
<div class="p-8">
<div class="flex justify-between items-start mb-4">
<h3 class="font-headline text-2xl text-primary">Forensic Archaeology</h3>
<span class="bg-secondary-container text-secondary text-[10px] px-2 py-1 rounded-full uppercase font-bold tracking-widest">ANTH 4320 · Undergraduate</span>
</div>
<p class="text-on-surface-variant text-sm leading-relaxed">Training in archaeological techniques applied to forensic contexts — systematic search, recovery, and documentation of human remains and associated evidence at outdoor and buried scenes.</p>
</div>
</div>
```

Card 6: Cold Cases in Forensic Anthropology
```html
<div class="group bg-surface-container-lowest rounded-xl overflow-hidden hover:translate-y-[-8px] transition-transform duration-300">
<div class="p-8">
<div class="flex justify-between items-start mb-4">
<h3 class="font-headline text-2xl text-primary">Cold Cases in Forensic Anthropology</h3>
<span class="bg-secondary-container text-secondary text-[10px] px-2 py-1 rounded-full uppercase font-bold tracking-widest">ANTH 5319 · Graduate</span>
</div>
<p class="text-on-surface-variant text-sm leading-relaxed">Interdisciplinary strategies for resolving long-term unidentified remains cases, integrating skeletal re-analysis, forensic genetic genealogy, updated forensic art, and community-engaged investigation methods.</p>
</div>
</div>
```

Note: New cards don't have images (no placeholders needed — keeps it clean). Change grid from `md:grid-cols-3` to `md:grid-cols-2 lg:grid-cols-3` to accommodate 6 cards in a flowing layout.

**Step 4: Verify via Playwright** — confirm 6 course cards display, no dead "Course Details" links remain.

**Step 5: Commit**
```bash
git add site/teaching.html
git commit -m "Expand curriculum to 6 courses with TTU catalog data, remove dead links"
```

---

## Task 6: Enrich Student Success Gallery

**Files:**
- Modify: `site/teaching.html`

The current gallery has: Chiamaka Lebechi (featured), D.F. Edwards, "12+" stat, and a "Lab Community" image. The Chiamaka entry incorrectly says "Outstanding Research Award 2023" — the notebook says she won **1st place at the 2022 TTU Undergraduate Research Conference** in the Social Constructs Impact category.

**Step 1: Fix Chiamaka Lebechi details (lines 214-216)**

```
Old title: "Structural Vulnerability in Forensic Identification: A Social Bioarchaeology Approach"
New title: "The Unidentified-Identified Gap: Examining University Skeletal Collections through a Structural Vulnerability Lens"

Old award: Outstanding Research Award 2023
New award: 1st Place — TTU Undergraduate Research Conference 2022
```

**Step 2: Enrich D.F. Edwards card (lines 224-225)**

Update to be more specific:
```
Old: Co-authored peer-reviewed research on projectile kinetic energy and ballistic trauma in bone, subsequently published in the Journal of Forensic Sciences.
New: M.A. graduate (2023) who co-authored two peer-reviewed articles in the <i>Journal of Forensic Sciences</i> on bullet mass, velocity, and fracture patterns — and co-presented at multiple AAFS annual meetings.
```

**Step 3: Replace the "Lab Community" image tile (lines 238-243) with a Carter Unger card**

```html
<div class="md:col-span-1 md:row-span-1 bg-surface-container-low rounded-2xl p-8 flex flex-col justify-between border border-outline-variant/10">
<div>
<span class="text-tertiary material-symbols-outlined mb-4">science</span>
<h4 class="font-headline text-xl text-primary mb-2">Carter Unger</h4>
<p class="text-on-surface-variant text-sm">M.A. graduate (2024) researching regional and seasonal effects on long bone fracture characteristics — co-presented at AAFS 2024 and 2025.</p>
</div>
</div>
```

**Step 4: Verify via Playwright** — confirm updated student details display correctly.

**Step 5: Commit**
```bash
git add site/teaching.html
git commit -m "Enrich student gallery: fix Lebechi details, expand Edwards, add Unger"
```

---

## Task 7: Final Visual Verification and Link Audit

**Files:**
- Read: `site/teaching.html` (final state)

**Step 1: Start local server and open in Playwright**

**Step 2: Take screenshots of all sections**

1. Hero + award block
2. Course cards (all 6)
3. Student success gallery
4. Mentorship CTA
5. Footer

**Step 3: Verification checklist**

- [ ] Page title: "Teaching & Mentorship | Dr. Mari Isa"
- [ ] Zero instances of "Mariyam"
- [ ] Zero `href="#"` dead links
- [ ] Zero `data-alt` attributes
- [ ] Zero location info (no office, building, room, schedule, phone)
- [ ] No "Office Hours" text anywhere
- [ ] No `university.edu` email anywhere
- [ ] Email shows `mari.isa@ttu.edu`
- [ ] 6 course cards (4 undergrad + 2 grad)
- [ ] No "Course Details" dead links
- [ ] No "View Full Syllabus Catalog" text
- [ ] "Join the Lab" links to arid-lab.html#join
- [ ] "Get in Touch" links to media-contact.html#contact
- [ ] Footer matches homepage/research (CV, Profile, Privacy, social icons)
- [ ] Copyright says 2026

**Step 4: Stop server and final commit**

```bash
pkill -f "python3 -m http.server 8765"
git add -A
git commit -m "Complete teaching page: courses, students, safety, links all verified"
```

---

## Summary of All Changes

| What | Before | After |
|------|--------|-------|
| Name (4 locations) | "Dr. Mariyam Isa" | "Dr. Mari Isa" |
| Title tag | Contains "Mariyam" | "Teaching & Mentorship \| Dr. Mari Isa" |
| Image accessibility | 5 images with data-alt only | All proper alt attributes |
| Footer | Dead links, no social icons | Matches site pattern |
| Email | `m.isa@university.edu` (fake) | `mari.isa@ttu.edu` (real, linked) |
| "Office Hours" button | Present (dead) | **REMOVED** for safety |
| "Join the Lab" button | Dead `<button>` | Working `<a>` to arid-lab.html#join |
| Courses | 3 cards with dead links | 6 cards (4 UG + 2 Grad), no dead links |
| "View Full Syllabus Catalog" | Dead text | Removed |
| Chiamaka Lebechi | Wrong project title + award | Corrected from CV |
| D.F. Edwards | Brief mention | Enriched with M.A. + 2 publications |
| Carter Unger | Not present | Added (M.A. 2024, AAFS presentations) |
| Copyright | 2024 | 2026 |
