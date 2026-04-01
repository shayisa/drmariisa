# Research Page (research.html) Completion Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Complete the research page with verified content, replace the consulting CTA with a proper Selected Publications section with synopses, fix all broken links, standardize name, and fix accessibility issues.

**Architecture:** Static HTML, direct edits. The big structural change is replacing the "Expert Insights for Policy & Practice" consulting CTA (lines 288-305) with a Selected Publications section grouped by research pillar, each with a brief synopsis and DOI link.

**Tech Stack:** HTML, Tailwind CSS (CDN), Google Fonts (Noto Serif + Manrope), Material Symbols

**Data Source:** NotebookLM notebook "Mari Isa Website" (ID: a4581dc1-eeec-48f2-bfff-4d081d1d4a5a)

---

## Key Reference Data (from NotebookLM)

### Selected Publications with Synopses

**Pillar 1: Forensic Fractography & Biomechanics**

1. **FBI Guide** — Christensen, Isa, et al. (2022). *A Guide to Forensic Fractography of Bone.* FBI Laboratory, No. 21.35.
   DOI: https://doi.org/10.5281/zenodo.6013747
   Synopsis: Standardized the application of material science fractography to human bone, providing practitioners a framework for using fracture surface features to reconstruct bone failure events and meet Daubert legal standards.

2. **Edwards & Isa (2026).** *An experimental study of bullet mass and velocity and their relation to fracture patterns in flat bones.* Journal of Forensic Sciences.
   DOI: http://doi.org/10.1111/1556-4029.70258
   Synopsis: Established direct relationships between bullet mass, velocity, kinetic energy, and resulting fracture patterns in flat bones — a quantitative framework for interpreting gunshot trauma.

3. **Isa et al. (2023).** *Effects of input energy and impactor shape on cranial fracture patterns.* Forensic Science International, 352, 111859.
   DOI: https://doi.org/10.1016/j.forsciint.2023.111859
   Synopsis: Demonstrated that input energy is the primary determinant of fracture severity, and that impactor shape produces distinct fracture patterns even at identical energy levels.

4. **Isa et al. (2019).** *Experimental investigation of cranial fracture initiation in blunt human head impacts.* Forensic Science International, 300, 51-62.
   DOI: https://doi.org/10.1016/j.forsciint.2019.04.003
   Synopsis: Discovered that linear cranial fractures can initiate remotely from the impact point and propagate back toward it — fundamentally changing how forensic scientists interpret impact locations.

5. **Isa et al. (2018).** *Assessing impact direction in 3-point bending of human femora.* Journal of Forensic Sciences, 63(1), 38-46.
   DOI: https://doi.org/10.1111/1556-4029.13521
   Synopsis: Proved that specific fractographic surface features reliably indicate crack propagation direction in long bones, providing scientific basis for assessing impact direction.

**Pillar 2: Gender-Inclusive Identification**

6. **Blatt, Isa, et al. (2025).** *Introducing COSAGE.* American Journal of Biological Anthropology, 188:e70180.
   DOI: https://doi.org/10.1002/ajpa.70180
   Synopsis: Introduced the COSAGE framework — a four-part biocultural tool for documenting gender-affirming evidence in unidentified persons cases, mitigating cognitive bias in forensic identification.

7. **Adams, Blatt, ..., Isa, et al. (2023).** *Shifting the forensic anthropological paradigm.* Humans, 3, 142-165.
   DOI: https://doi.org/10.3390/humans3030013
   Synopsis: Identified systemic cisgenderism within medicolegal institutions as a barrier to identifying TGD persons, and provided actionable strategies for inclusive casework, research, and education.

**Pillar 3: Ethics & Cold Case Resolution**

8. **Adams, Goldstein, Isa, et al. (2022).** *A conversation on redefining ethical considerations.* American Anthropologist, 124(3), 597-612.
   DOI: https://doi.org/10.1111/aman.13753
   Synopsis: Challenged the traditional paradigm of strict scientific objectivity, establishing that advocacy, activism, and antiracism are essential ethical responsibilities for forensic anthropologists.

9. **Michael, Blatt, Isa, et al. (2022).** *Identification of a decedent in a 103-year-old homicide case.* Forensic Sciences Research, 7(3), 412-426.
   DOI: https://doi.org/10.1080/20961790.2022.2034717
   Synopsis: Successfully identified a 1916 murder victim (Joseph Henry Loveless) by combining forensic genetic genealogy with skeletal re-analysis — proving the power of interdisciplinary cold case approaches.

### Correct Links (same as homepage)
- Email: mari.isa@ttu.edu
- CV PDF: https://www.depts.ttu.edu/sasw/Anthropology/CV/CV_Isa.pdf
- TTU Profile: https://www.depts.ttu.edu/entx/Department/Personnel/Faculty/Mari_Isa.php?v=preview
- Google Scholar: https://scholar.google.com/citations?user=fw-qsXcAAAAJ&hl=en
- ResearchGate: https://www.researchgate.net/profile/Mariyam-Isa

---

## Task 1: Add Page Title and Meta Description

**Files:**
- Modify: `site/research.html`

**Step 1: Insert title and meta after line 5**

After `<meta content="width=device-width, initial-scale=1.0" name="viewport"/>`, insert:
```html
<title>Research Portfolio | Dr. Mari Isa | Forensic Anthropology</title>
<meta name="description" content="Dr. Mari Isa's research portfolio: forensic fractography, skeletal biomechanics, gender-inclusive identification (COSAGE), and cold case resolution at Texas Tech University."/>
```

**Step 2: Verify via Playwright** — check browser tab title.

**Step 3: Commit**
```bash
git add site/research.html
git commit -m "Add page title and meta description to research page"
```

---

## Task 2: Standardize Name Throughout Page

**Files:**
- Modify: `site/research.html`

There are 4 instances of "Mariyam" to fix:

**Step 1: Nav logo (line 85)**
```
Old: Dr. Mariyam Isa
New: Dr. Mari Isa
```

**Step 2: Pull-quote citation (line 278)**
```
Old: — Dr. Mariyam Isa
New: — Dr. Mari Isa
```

**Step 3: Footer name (line 309)**
```
Old: Dr. Mariyam Isa
New: Dr. Mari Isa
```

**Step 4: Copyright (line 315)**
```
Old: © 2024 Dr. Mariyam Isa. All rights reserved.
New: © 2026 Dr. Mari Isa. All rights reserved.
```

**Step 5: Verify** — grep for "Mariyam" to confirm zero instances remain.

**Step 6: Commit**
```bash
git add site/research.html
git commit -m "Standardize name to Dr. Mari Isa throughout research page"
```

---

## Task 3: Fix All Image Accessibility (data-alt → alt)

**Files:**
- Modify: `site/research.html`

There are 7 images using `data-alt` instead of `alt`. This is an accessibility bug — screen readers can't read these.

**Step 1: Fix all 7 images**

Lines 147, 175, 203, 281, 282, 283, 284 — change every `data-alt=` to `alt=`.

Use replace_all for this change since the attribute name is unique.

**Step 2: Verify** — grep for "data-alt" to confirm zero instances remain.

**Step 3: Commit**
```bash
git add site/research.html
git commit -m "Fix image accessibility: change data-alt to alt on all images"
```

---

## Task 4: Fix Footer (Match Homepage Pattern)

**Files:**
- Modify: `site/research.html`

**Step 1: Replace entire footer (lines 308-316) with the fixed version matching homepage**

```html
<footer class="bg-[#eeeeed] dark:bg-zinc-900 w-full px-8 py-20 flex flex-col items-center gap-8 border-t border-[#d0c3cb]/15">
<div class="font-['Noto_Serif'] text-lg text-[#361c36] dark:text-[#f4f4f3]">Dr. Mari Isa</div>
<div class="flex flex-wrap justify-center gap-8 font-['Manrope'] text-xs uppercase tracking-widest">
<a class="text-zinc-500 hover:text-[#361c36] transition-colors hover:underline decoration-[#4e314d] underline-offset-4" href="https://www.depts.ttu.edu/sasw/Anthropology/CV/CV_Isa.pdf" target="_blank">Curriculum Vitae</a>
<a class="text-zinc-500 hover:text-[#361c36] transition-colors hover:underline decoration-[#4e314d] underline-offset-4" href="https://www.depts.ttu.edu/entx/Department/Personnel/Faculty/Mari_Isa.php?v=preview" target="_blank">Institutional Profile</a>
<a class="text-zinc-500 hover:text-[#361c36] transition-colors hover:underline decoration-[#4e314d] underline-offset-4" href="privacy.html">Privacy Policy</a>
</div>
<p class="font-['Manrope'] text-[10px] uppercase tracking-widest opacity-60">© 2026 Dr. Mari Isa. All rights reserved.</p>
<div class="flex gap-6 mt-4">
<a class="text-[#361c36] opacity-60 hover:opacity-100 transition-opacity" href="mailto:mari.isa@ttu.edu"><span class="material-symbols-outlined">alternate_email</span></a>
<a class="text-[#361c36] opacity-60 hover:opacity-100 transition-opacity" href="https://scholar.google.com/citations?user=fw-qsXcAAAAJ&amp;hl=en" target="_blank"><span class="material-symbols-outlined">grid_view</span></a>
<a class="text-[#361c36] opacity-60 hover:opacity-100 transition-opacity" href="https://www.researchgate.net/profile/Mariyam-Isa" target="_blank"><span class="material-symbols-outlined">account_circle</span></a>
</div>
</footer>
```

Note: This adds the social icon row (email, Google Scholar, ResearchGate) that the research page was missing but the homepage has.

**Step 2: Verify** — grep for `href="#"` to confirm zero dead links remain.

**Step 3: Commit**
```bash
git add site/research.html
git commit -m "Fix research page footer: real links, social icons, matching homepage"
```

---

## Task 5: Replace Consulting CTA with Selected Publications Section

**Files:**
- Modify: `site/research.html`

This is the major content change. Replace lines 288-305 (the "Expert Insights for Policy & Practice" section with "Request Consultation" and "Speaking Schedule" buttons) with a Selected Publications section grouped by research pillar.

**Step 1: Replace the entire CTA section**

Remove lines 288-305 and replace with:

```html
<!-- Selected Publications -->
<section class="py-32 bg-surface-container-low">
<div class="max-w-7xl mx-auto px-8">
<div class="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-6">
<h2 class="font-headline text-4xl text-primary">Selected <i class="font-normal italic">Publications</i></h2>
<div class="h-px flex-grow mx-8 bg-outline-variant/30 hidden md:block"></div>
<a href="https://scholar.google.com/citations?user=fw-qsXcAAAAJ&amp;hl=en" target="_blank" class="font-label text-sm text-secondary uppercase tracking-widest hover:text-primary transition-colors">View Full List on Google Scholar →</a>
</div>

<!-- Pillar 1: Forensic Fractography & Biomechanics -->
<div class="mb-16">
<div class="flex items-center gap-3 mb-8">
<span class="material-symbols-outlined text-primary text-2xl">biotech</span>
<h3 class="font-headline text-2xl text-primary">Forensic Fractography &amp; Biomechanics</h3>
</div>
<div class="space-y-6">
<div class="bg-white p-8 rounded-xl border border-outline-variant/10">
<div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-3">
<h4 class="font-headline text-lg text-primary">A Guide to Forensic Fractography of Bone</h4>
<span class="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full text-xs font-bold tracking-tight whitespace-nowrap self-start">FBI Laboratory</span>
</div>
<p class="text-on-surface-variant text-sm mb-3">Christensen, <strong>Isa</strong>, Smith, Hefner, Berryman, Saginor, &amp; Webb (2022). Laboratory Division of the FBI, No. 21.35.</p>
<p class="text-on-surface-variant leading-relaxed mb-4">Standardized the application of material science fractography to human bone — providing practitioners a formal framework for using fracture surface features (arrest lines, hackle, bone mirror) to reconstruct high-energy bone failure events and meet Daubert legal standards for expert testimony.</p>
<a href="https://doi.org/10.5281/zenodo.6013747" target="_blank" class="text-primary text-sm font-semibold hover:underline">Access Publication →</a>
</div>
<div class="bg-white p-8 rounded-xl border border-outline-variant/10">
<div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-3">
<h4 class="font-headline text-lg text-primary">Bullet Mass and Velocity: Fracture Patterns in Flat Bones</h4>
<span class="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold tracking-tight whitespace-nowrap self-start">Journal of Forensic Sciences</span>
</div>
<p class="text-on-surface-variant text-sm mb-3">Edwards* &amp; <strong>Isa</strong> (2026). <em>Journal of Forensic Sciences.</em></p>
<p class="text-on-surface-variant leading-relaxed mb-4">Established direct relationships between bullet mass, velocity, kinetic energy, and resulting fracture propagation patterns in flat bones — providing a quantitative framework for interpreting gunshot trauma in forensic casework.</p>
<a href="http://doi.org/10.1111/1556-4029.70258" target="_blank" class="text-primary text-sm font-semibold hover:underline">Access Publication →</a>
</div>
<div class="bg-white p-8 rounded-xl border border-outline-variant/10">
<div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-3">
<h4 class="font-headline text-lg text-primary">Input Energy and Impactor Shape on Cranial Fracture Patterns</h4>
<span class="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold tracking-tight whitespace-nowrap self-start">Forensic Science International</span>
</div>
<p class="text-on-surface-variant text-sm mb-3"><strong>Isa</strong>, Fenton, Goots, Watson, Vaughan, &amp; Wei (2023). <em>Forensic Science International,</em> 352, 111859.</p>
<p class="text-on-surface-variant leading-relaxed mb-4">Demonstrated that input energy is the primary determinant of fracture severity, and that impactor shape produces distinctly different fracture patterns even when energy is identical — critical for reconstructing assault and accident scenarios.</p>
<a href="https://doi.org/10.1016/j.forsciint.2023.111859" target="_blank" class="text-primary text-sm font-semibold hover:underline">Access Publication →</a>
</div>
<div class="bg-white p-8 rounded-xl border border-outline-variant/10">
<div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-3">
<h4 class="font-headline text-lg text-primary">Cranial Fracture Initiation in Blunt Human Head Impacts</h4>
<span class="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold tracking-tight whitespace-nowrap self-start">Forensic Science International</span>
</div>
<p class="text-on-surface-variant text-sm mb-3"><strong>Isa</strong>, Fenton, Goots, Watson, Vaughan, &amp; Wei (2019). <em>Forensic Science International,</em> 300, 51-62.</p>
<p class="text-on-surface-variant leading-relaxed mb-4">Discovered that linear cranial fractures can initiate remotely from the actual impact point — in areas of high tensile stress — and propagate back toward the impact site, fundamentally changing how forensic scientists interpret blunt force injuries.</p>
<a href="https://doi.org/10.1016/j.forsciint.2019.04.003" target="_blank" class="text-primary text-sm font-semibold hover:underline">Access Publication →</a>
</div>
<div class="bg-white p-8 rounded-xl border border-outline-variant/10">
<div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-3">
<h4 class="font-headline text-lg text-primary">Impact Direction in 3-Point Bending of Human Femora</h4>
<span class="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold tracking-tight whitespace-nowrap self-start">Journal of Forensic Sciences</span>
</div>
<p class="text-on-surface-variant text-sm mb-3"><strong>Isa</strong>, Fenton, DeLand, &amp; Haut (2018). <em>Journal of Forensic Sciences,</em> 63(1), 38-46.</p>
<p class="text-on-surface-variant leading-relaxed mb-4">Proved that specific fractographic surface features are reliable indicators of crack propagation direction in long bones, providing the scientific basis for determining exact impact direction in cases involving vehicular strikes or falls.</p>
<a href="https://doi.org/10.1111/1556-4029.13521" target="_blank" class="text-primary text-sm font-semibold hover:underline">Access Publication →</a>
</div>
</div>
</div>

<!-- Pillar 2: Gender-Inclusive Identification -->
<div class="mb-16">
<div class="flex items-center gap-3 mb-8">
<span class="material-symbols-outlined text-primary text-2xl">diversity_3</span>
<h3 class="font-headline text-2xl text-primary">Gender-Inclusive Identification</h3>
</div>
<div class="space-y-6">
<div class="bg-white p-8 rounded-xl border border-outline-variant/10">
<div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-3">
<h4 class="font-headline text-lg text-primary">Introducing COSAGE: Documenting Gender Expression in Human Identification</h4>
<span class="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold tracking-tight whitespace-nowrap self-start">Am. J. Biological Anthropology</span>
</div>
<p class="text-on-surface-variant text-sm mb-3">Blatt, <strong>Isa</strong>, Michael, Flaherty, Smith, Howard, &amp; Unwin (2025). <em>American Journal of Biological Anthropology,</em> 188:e70180.</p>
<p class="text-on-surface-variant leading-relaxed mb-4">Introduced the COSAGE framework — a four-part biocultural tool for systematically documenting skeletal sex estimates alongside evidence of gender-affirming medical care and personal items, directly aiding the inclusive identification of transgender and gender-diverse decedents.</p>
<a href="https://doi.org/10.1002/ajpa.70180" target="_blank" class="text-primary text-sm font-semibold hover:underline">Access Publication →</a>
</div>
<div class="bg-white p-8 rounded-xl border border-outline-variant/10">
<div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-3">
<h4 class="font-headline text-lg text-primary">Shifting the Forensic Anthropological Paradigm for TGD Communities</h4>
<span class="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold tracking-tight whitespace-nowrap self-start">Humans</span>
</div>
<p class="text-on-surface-variant text-sm mb-3">Adams, Blatt, Flaherty, Haug, <strong>Isa</strong>, Michael, &amp; Smith (2023). <em>Humans,</em> 3, 142-165.</p>
<p class="text-on-surface-variant leading-relaxed mb-4">Identified systemic cisgenderism within cultural and medicolegal institutions as a critical barrier to identifying transgender and gender-diverse persons, and provided actionable strategies for inclusive casework, research, and educational curricula.</p>
<a href="https://doi.org/10.3390/humans3030013" target="_blank" class="text-primary text-sm font-semibold hover:underline">Access Publication →</a>
</div>
</div>
</div>

<!-- Pillar 3: Ethics & Cold Case Resolution -->
<div>
<div class="flex items-center gap-3 mb-8">
<span class="material-symbols-outlined text-primary text-2xl">history_edu</span>
<h3 class="font-headline text-2xl text-primary">Ethics &amp; Cold Case Resolution</h3>
</div>
<div class="space-y-6">
<div class="bg-white p-8 rounded-xl border border-outline-variant/10">
<div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-3">
<h4 class="font-headline text-lg text-primary">Redefining Ethical Considerations in Forensic Anthropology</h4>
<span class="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold tracking-tight whitespace-nowrap self-start">American Anthropologist</span>
</div>
<p class="text-on-surface-variant text-sm mb-3">Adams, Goldstein, <strong>Isa</strong>, Kim, Moore, Pilloud, &amp; Tallman (2022). <em>American Anthropologist,</em> 124(3), 597-612.</p>
<p class="text-on-surface-variant leading-relaxed mb-4">Challenged the traditional paradigm that prioritizes strict scientific objectivity as an absolute ideal, establishing that advocacy, activism, and antiracism are essential ethical responsibilities for forensic anthropologists working with marginalized communities.</p>
<a href="https://doi.org/10.1111/aman.13753" target="_blank" class="text-primary text-sm font-semibold hover:underline">Access Publication →</a>
</div>
<div class="bg-white p-8 rounded-xl border border-outline-variant/10">
<div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-3">
<h4 class="font-headline text-lg text-primary">Solving a 103-Year-Old Homicide with Forensic Anthropology &amp; Genetic Genealogy</h4>
<span class="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold tracking-tight whitespace-nowrap self-start">Forensic Sciences Research</span>
</div>
<p class="text-on-surface-variant text-sm mb-3">Michael, Blatt, <strong>Isa</strong>, Redgrave, &amp; Ubelaker (2022). <em>Forensic Sciences Research,</em> 7(3), 412-426.</p>
<p class="text-on-surface-variant leading-relaxed mb-4">Demonstrated the successful identification of a 1916 murder victim (Joseph Henry Loveless) through the integration of forensic genetic genealogy with skeletal re-analysis — proving the power of combining interdisciplinary methods to resolve century-old cold cases.</p>
<a href="https://doi.org/10.1080/20961790.2022.2034717" target="_blank" class="text-primary text-sm font-semibold hover:underline">Access Publication →</a>
</div>
</div>
</div>

<p class="text-center text-on-surface-variant text-sm mt-16">* denotes student co-author</p>
</div>
</section>
```

**Step 2: Verify via Playwright** — scroll to publications section, confirm 3 pillars with 9 total papers display correctly, all "Access Publication" links are present.

**Step 3: Commit**
```bash
git add site/research.html
git commit -m "Replace consulting CTA with Selected Publications section (9 papers, 3 pillars)"
```

---

## Task 6: Make Bento Theme Cards Scroll to Relevant Content

**Files:**
- Modify: `site/research.html`

The 3 bento cards at the top look clickable but go nowhere. Add anchor links to the corresponding pillar sections.

**Step 1: Add IDs to the pillar headings in the new publications section**

Add `id="fractography"` to the first pillar div, `id="gender-inclusive"` to the second, `id="ethics-cold-cases"` to the third.

**Step 2: Wrap bento cards in anchor links**

Card 1 (Forensic Fractography, line 117): Wrap the div in `<a href="#fractography">` and add appropriate styling.

Card 2 (Skeletal Trauma, line 122): Wrap in `<a href="#fractography">` (same section — skeletal trauma falls under biomechanics).

Card 3 (Gender-Inclusive ID, line 127): Wrap in `<a href="#gender-inclusive">`.

**Step 3: Verify via Playwright** — click each bento card, confirm page scrolls to correct section.

**Step 4: Commit**
```bash
git add site/research.html
git commit -m "Make bento theme cards link to corresponding publication pillars"
```

---

## Task 7: Final Visual Verification and Link Audit

**Files:**
- Read: `site/research.html` (final state)

**Step 1: Start local server and verify in Playwright**

```bash
cd /Users/shayisa/Vibecode-projects/maris-website/site && python3 -m http.server 8765 &
```

Open `http://localhost:8765/research.html` in Playwright.

**Step 2: Take screenshots of all sections**

1. Hero + bento cards
2. Active Investigations cards
3. FBI Dual Abstracts
4. Pull-quote
5. Selected Publications (all 3 pillars)
6. Footer

**Step 3: Verify checklist**

- [ ] Page title shows in browser tab
- [ ] Zero instances of "Mariyam" anywhere
- [ ] Zero `href="#"` dead links
- [ ] Zero `data-alt` attributes (all converted to `alt`)
- [ ] All 9 publication DOI links present and formatted
- [ ] Footer matches homepage (CV, Profile, Privacy, social icons)
- [ ] Bento cards scroll to correct anchors
- [ ] Copyright says 2026

**Step 4: Link audit**

| Link | Target | Type |
|------|--------|------|
| All nav links | Internal pages | Should work |
| View Full List on Google Scholar | Scholar profile | External |
| 9x Access Publication | DOI links | External |
| Footer CV | TTU PDF | External |
| Footer Profile | TTU page | External |
| Footer social icons (3) | Email, Scholar, RG | External |

**Step 5: Document pending items**

```markdown
## Research Page Missing Links / Pending Items
- [ ] All 7 images still use Google-hosted placeholders (decorative, lower priority)
- [ ] 3 Active Investigation card images are illustrative, not real lab photos
- [ ] 4 pull-quote grid images are decorative placeholders
```

**Step 6: Stop server and final commit**

```bash
pkill -f "python3 -m http.server 8765"
git add -A
git commit -m "Complete research page: publications, links, accessibility all verified"
```

---

## Summary of All Changes

| What | Before | After |
|------|--------|-------|
| Page title | Missing | "Research Portfolio \| Dr. Mari Isa \| Forensic Anthropology" |
| Name (4 locations) | "Dr. Mariyam Isa" | "Dr. Mari Isa" |
| Image accessibility | 7 images with `data-alt` | All converted to proper `alt` |
| Footer | Dead CV/Profile links, no social icons | Matches homepage |
| CTA section | "Request Consultation" + "Speaking Schedule" consulting framing | **Selected Publications** — 9 papers across 3 pillars with synopses and DOI links |
| Bento cards | Styled clickable, went nowhere | Anchor-link to publication pillars |
| Copyright | 2024 | 2026 |

## Remaining Placeholders

- All 7 images use Google-hosted placeholders (decorative — not portraits)
- Active Investigation card images are illustrative, not real lab photos
