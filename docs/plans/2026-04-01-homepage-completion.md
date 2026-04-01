# Homepage (index.html) Completion Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Complete the homepage with real, verified content from NotebookLM, fix all broken links, replace placeholder photo, and standardize name to "Dr. Mari Isa" throughout.

**Architecture:** Static HTML site using Tailwind CSS via CDN. No build system, no framework. Changes are direct HTML edits. Verification via Playwright MCP visual checks and link audits.

**Tech Stack:** HTML, Tailwind CSS (CDN), Google Fonts (Noto Serif + Manrope), Material Symbols

**Data Source:** NotebookLM notebook "Mari Isa Website" (ID: a4581dc1-eeec-48f2-bfff-4d081d1d4a5a)

---

## Key Reference Data (from NotebookLM)

These verified facts drive every edit below:

- **Name:** Dr. Mari Isa, PhD (standardized — never "Mariyam (Mari) Isa")
- **Title:** Assistant Professor of Anthropology, Texas Tech University
- **Additional Roles:** Director, ARID Lab | Adjunct Faculty, Dept. of Environmental Toxicology | Affiliate Faculty, Women's & Gender Studies Program
- **Email:** mari.isa@ttu.edu
- **Phone:** 806-834-3532
- **Office:** Holden Hall 158, Box 41012, 1011 Boston Ave., Lubbock, TX 79409
- **Education:** PhD Anthropology (2020, MSU, NSF GRFP funded) | MA Anthropology (2016, MSU) | Dual BS Anthropology + Human Biology with High Honors (2014, MSU)
- **Google Scholar:** https://scholar.google.com/citations?user=fw-qsXcAAAAJ&hl=en
- **ResearchGate:** https://www.researchgate.net/profile/Mariyam-Isa
- **TTU Profile:** https://www.depts.ttu.edu/entx/Department/Personnel/Faculty/Mari_Isa.php?v=preview
- **CV PDF (hosted):** https://www.depts.ttu.edu/sasw/Anthropology/CV/CV_Isa.pdf
- **FBI Fractography Guide:** https://doi.org/10.5281/zenodo.6013747
- **ARID Lab (TTU):** https://www.depts.ttu.edu/sasw/Anthropology/FAART.php
- **Photo file:** /Users/shayisa/Downloads/Mari-Isa.jpg

---

## Task 1: Initialize Git Repository

**Why:** We need version control before making any changes so we can track progress and roll back if needed.

**Files:**
- Modify: project root (git init)

**Step 1: Initialize git repo**

```bash
cd /Users/shayisa/Vibecode-projects/maris-website
git init
```

**Step 2: Create initial commit with current state**

```bash
git add -A
git commit -m "Initial commit: existing site before homepage completion"
```

---

## Task 2: Copy Photo to Site Directory

**Why:** The hero section currently uses a Google-hosted placeholder image. We need to use Dr. Isa's actual photo.

**Files:**
- Create: `site/images/mari-isa-portrait.jpg`

**Step 1: Create images directory and copy photo**

```bash
mkdir -p /Users/shayisa/Vibecode-projects/maris-website/site/images
cp /Users/shayisa/Downloads/Mari-Isa.jpg /Users/shayisa/Vibecode-projects/maris-website/site/images/mari-isa-portrait.jpg
```

**Step 2: Verify file exists**

```bash
ls -la /Users/shayisa/Vibecode-projects/maris-website/site/images/
```
Expected: `mari-isa-portrait.jpg` present with non-zero file size.

**Step 3: Commit**

```bash
git add site/images/mari-isa-portrait.jpg
git commit -m "Add Dr. Mari Isa portrait photo"
```

---

## Task 3: Add Page Title and Fix Meta

**Why:** The homepage has no `<title>` tag, which is bad for SEO and accessibility.

**Files:**
- Modify: `site/index.html`

**Step 1: Add title tag**

After line 5 (`<meta content="width=device-width...`), insert:
```html
<title>Dr. Mari Isa, PhD | Forensic Anthropologist | Texas Tech University</title>
<meta name="description" content="Dr. Mari Isa is an Assistant Professor of Anthropology at Texas Tech University and Director of the ARID Lab, specializing in forensic fractography and gender-inclusive identification."/>
```

**Step 2: Verify by opening the page**

Open `site/index.html` in browser via Playwright MCP. Check that the browser tab shows the correct title.

**Step 3: Commit**

```bash
git add site/index.html
git commit -m "Add page title and meta description to homepage"
```

---

## Task 4: Standardize Name Throughout Page

**Why:** All instances of "Mariyam (Mari) Isa" or "Dr. Mariyam Isa" must become "Dr. Mari Isa" per project requirements.

**Files:**
- Modify: `site/index.html`

There are exactly 5 name instances to change:

**Step 1: Nav logo (line 87)**
```
Old: Dr. Mariyam Isa
New: Dr. Mari Isa
```

**Step 2: Hero H1 (lines 108-110)**
```
Old: Dr. Mariyam<br/>(Mari) Isa, <span class="serif-italic">PhD</span>
New: Dr. Mari<br/>Isa, <span class="serif-italic">PhD</span>
```

**Step 3: Bio paragraph (line 161)**
```
Old: Dr. Mariyam (Mari) Isa is an Assistant Professor
New: Dr. Mari Isa is an Assistant Professor
```

**Step 4: Footer name (line 264)**
```
Old: Dr. Mariyam Isa
New: Dr. Mari Isa
```

**Step 5: Copyright (line 272)**
```
Old: © 2024 Dr. Mariyam Isa. All rights reserved.
New: © 2026 Dr. Mari Isa. All rights reserved.
```

**Step 6: Verify via Playwright**

Open page, visually confirm all 5 locations show "Dr. Mari Isa" and no instance of "Mariyam" remains.

**Step 7: Commit**

```bash
git add site/index.html
git commit -m "Standardize name to Dr. Mari Isa throughout homepage"
```

---

## Task 5: Replace Hero Portrait Image

**Why:** The hero currently shows a Google-hosted placeholder. Replace with the actual photo.

**Files:**
- Modify: `site/index.html`

**Step 1: Update image src and alt (line 130)**
```
Old: <img class="w-full h-full object-cover" data-alt="Professional portrait of Dr. Mariyam Isa in a sunlit academic library setting, wearing a sophisticated dark blazer, warm and confident expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhC5RDMWNXfgyBet7IGU0j1i2QCYI2tHl_dd2a50Q9VlO5UWY-xTt-oubQZsi-9v46KtN4Cf3CRgtUhKa0OXqD7JyM1byYYjSfVOwNR9sG-mNsawsv-JnngumMCOQyA3PDCzwWOCksql_kjZDO6k5P6n6EDKjDXYHqJjMwQXeTIbbx2_QdL_dZOgn_izQBs82F2CdgtdnrE7P2kh2Ge0yJGLFsJ2VU6-XeTecMzZD_TimVUGngQgNYTac3lVet-tIgCoeAGfudkA"/>

New: <img class="w-full h-full object-cover" alt="Professional portrait of Dr. Mari Isa" src="images/mari-isa-portrait.jpg"/>
```

Note: Change `data-alt` to proper `alt` attribute for accessibility.

**Step 2: Verify via Playwright**

Open page, confirm the portrait photo loads and displays correctly in the hero section.

**Step 3: Commit**

```bash
git add site/index.html
git commit -m "Replace placeholder portrait with actual Dr. Mari Isa photo"
```

---

## Task 6: Fix Footer Links (CV, Profile, Social Icons)

**Why:** The footer has 3 dead links (href="#") for CV, Institutional Profile, and a social icon. The Google Scholar link points to the generic homepage instead of her profile.

**Files:**
- Modify: `site/index.html`

**Step 1: Fix Curriculum Vitae link (line 267)**
```
Old: <a ... href="#">Curriculum Vitae</a>
New: <a ... href="https://www.depts.ttu.edu/sasw/Anthropology/CV/CV_Isa.pdf" target="_blank">Curriculum Vitae</a>
```

**Step 2: Fix Institutional Profile link (line 268)**
```
Old: <a ... href="#">Institutional Profile</a>
New: <a ... href="https://www.depts.ttu.edu/entx/Department/Personnel/Faculty/Mari_Isa.php?v=preview" target="_blank">Institutional Profile</a>
```

**Step 3: Fix email link (line 275)**
```
Old: href="mailto:m.isa@ttu.edu"
New: href="mailto:mari.isa@ttu.edu"
```

**Step 4: Fix Google Scholar link (line 276)**
```
Old: href="https://scholar.google.com/"
New: href="https://scholar.google.com/citations?user=fw-qsXcAAAAJ&hl=en"
```

**Step 5: Fix third social icon to ResearchGate (line 277)**
```
Old: <a class="text-primary opacity-60 hover:opacity-100 transition-opacity" href="#"><span class="material-symbols-outlined">account_circle</span></a>
New: <a class="text-primary opacity-60 hover:opacity-100 transition-opacity" href="https://www.researchgate.net/profile/Mariyam-Isa" target="_blank"><span class="material-symbols-outlined">account_circle</span></a>
```

**Step 6: Verify via Playwright**

Open page, scroll to footer, visually confirm all links are present. Click each to verify they open correct targets.

**Step 7: Commit**

```bash
git add site/index.html
git commit -m "Fix all footer links: CV, institutional profile, Google Scholar, ResearchGate"
```

---

## Task 7: Fix Research Card Links

**Why:** Both "View Case Study" links in the Key Research section have no href — they're just styled divs, not actual links. Link them to the research page with appropriate anchors.

**Files:**
- Modify: `site/index.html`

**Step 1: Wrap Fractography card "View Case Study" in a link (lines 218-220)**
```
Old: <div class="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                            View Case Study <span class="material-symbols-outlined">arrow_right_alt</span>
</div>

New: <a href="research.html" class="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                            View Case Study <span class="material-symbols-outlined">arrow_right_alt</span>
</a>
```

**Step 2: Wrap COSAGE card "View Case Study" in a link (lines 230-232)**
```
Old: <div class="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                            View Case Study <span class="material-symbols-outlined">arrow_right_alt</span>
</div>

New: <a href="research.html" class="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                            View Case Study <span class="material-symbols-outlined">arrow_right_alt</span>
</a>
```

**Step 3: Verify via Playwright**

Click both "View Case Study" links, confirm they navigate to research.html.

**Step 4: Commit**

```bash
git add site/index.html
git commit -m "Fix View Case Study links to point to research page"
```

---

## Task 8: Update Affiliations Section

**Why:** Add NIST OSAC — Dr. Isa serves as Executive Secretary of the Forensic Anthropology Subcommittee (2024-present). This is a significant national-level affiliation.

**Files:**
- Modify: `site/index.html`

**Step 1: Add NIST OSAC to affiliations (after FBI, around line 245)**
```
Old: <span class="font-headline text-2xl font-bold text-primary">FBI</span>

New: <span class="font-headline text-2xl font-bold text-primary">FBI</span>
<span class="font-headline text-2xl font-bold text-primary">NIST OSAC</span>
```

**Step 2: Verify via Playwright**

Scroll to affiliations bar, confirm 5 items display correctly.

**Step 3: Commit**

```bash
git add site/index.html
git commit -m "Add NIST OSAC to institutional affiliations"
```

---

## Task 9: Replace Email CTA with Proper Contact Link

**Why:** The "Quick Contact" section has a fake email input + button with no backend. Replace with a clear call-to-action linking to the media-contact page form.

**Files:**
- Modify: `site/index.html`

**Step 1: Replace the email input/button with proper CTAs (lines 254-257)**
```
Old: <div class="flex flex-col sm:flex-row gap-4 justify-center">
<input class="flex-grow max-w-sm px-6 py-4 bg-surface-container rounded-md border-none focus:ring-2 focus:ring-primary" placeholder="Your Email Address" type="email"/>
<button class="bg-primary text-on-primary px-8 py-4 rounded-md font-bold uppercase tracking-widest">Connect</button>
</div>

New: <div class="flex flex-col sm:flex-row gap-4 justify-center">
<a href="media-contact.html#contact" class="px-8 py-4 bg-primary text-on-primary rounded-md font-bold uppercase tracking-widest hover:translate-y-[-2px] hover:shadow-xl transition-all">Get in Touch</a>
<a href="arid-lab.html#join" class="px-8 py-4 bg-surface-container text-primary rounded-md font-bold uppercase tracking-widest border border-outline-variant/30 hover:bg-surface-container-high transition-colors">Join the Lab</a>
</div>
```

**Step 2: Verify via Playwright**

Scroll to contact section, confirm two buttons appear. Click "Get in Touch" — should go to media-contact.html#contact. Click "Join the Lab" — should go to arid-lab.html#join.

**Step 3: Commit**

```bash
git add site/index.html
git commit -m "Replace fake email input with proper contact and lab CTAs"
```

---

## Task 10: Final Visual Verification and Link Audit

**Why:** Protocol B verification gate — confirm everything looks correct end-to-end.

**Files:**
- Read: `site/index.html` (final state)

**Step 1: Full page visual verification via Playwright**

Open `site/index.html` in Playwright. Take screenshots of:
1. Hero section (photo, name, title)
2. Bio/Why section
3. ARID Lab highlight
4. Research cards
5. Affiliations bar
6. Contact CTA
7. Footer

**Step 2: Link audit**

Verify every link on the page:

| Link | Expected Target | Status |
|------|----------------|--------|
| Nav: Home | index.html | Internal - should work |
| Nav: ARID Lab | arid-lab.html | Internal - should work |
| Nav: Research | research.html | Internal - should work |
| Nav: Teaching | teaching.html | Internal - should work |
| Nav: Media/Contact | media-contact.html | Internal - should work |
| Speaking Inquiries | media-contact.html#contact | Internal - should work |
| Prospective Students | arid-lab.html#join | Internal - should work |
| View Publications | research.html | Internal - should work |
| Read the Full Story | arid-lab.html | Internal - should work |
| Explore Lab Initiatives | arid-lab.html | Internal - should work |
| View All Projects | research.html | Internal - should work |
| View Case Study (x2) | research.html | Internal - should work |
| Get in Touch | media-contact.html#contact | Internal - should work |
| Join the Lab | arid-lab.html#join | Internal - should work |
| Curriculum Vitae | TTU-hosted CV PDF | External - verify loads |
| Institutional Profile | TTU profile page | External - verify loads |
| Privacy Policy | privacy.html | Internal - should work |
| Email icon | mailto:mari.isa@ttu.edu | mailto - verify address |
| Google Scholar icon | Scholar profile | External - verify loads |
| ResearchGate icon | RG profile | External - verify loads |

**Step 3: Create missing links tracker**

Document any links that don't work or point to pages not yet completed:

```markdown
## Homepage Missing Links / Pending Items

- [ ] ARID Lab page (arid-lab.html) — exists but needs content completion (Phase 2)
- [ ] Research page (research.html) — exists but needs content completion (Phase 3)
- [ ] Teaching page (teaching.html) — exists but needs content completion (Phase 4)
- [ ] Media/Contact page (media-contact.html) — exists but needs content completion (Phase 5)
- [ ] Lab background image still uses Google-hosted placeholder (not a portrait, lower priority)
- [ ] Research card images still use Google-hosted placeholders (lower priority)
```

**Step 4: Final commit**

```bash
git add -A
git commit -m "Complete homepage: all content verified, links audited"
```

---

## Summary of All Changes

| What | Before | After |
|------|--------|-------|
| Page title | Missing | "Dr. Mari Isa, PhD \| Forensic Anthropologist \| Texas Tech University" |
| Name (5 locations) | "Mariyam (Mari) Isa" / "Mariyam Isa" | "Mari Isa" everywhere |
| Hero portrait | Google placeholder | Actual photo (images/mari-isa-portrait.jpg) |
| CV link | Dead (#) | TTU-hosted PDF |
| Institutional Profile link | Dead (#) | TTU profile page |
| Google Scholar | Generic homepage | Her actual profile |
| 3rd social icon | Dead (#) | ResearchGate profile |
| Email | m.isa@ttu.edu | mari.isa@ttu.edu |
| Research card links | No href (divs) | Links to research.html |
| Contact section | Fake email input | Two real CTA buttons |
| Affiliations | 4 items | 5 items (added NIST OSAC) |
| Copyright year | 2024 | 2026 |

## Remaining Placeholders (to track)

These items on the homepage still use Google-hosted images but are NOT portraits — they're decorative/illustrative. They should be addressed when we have proper lab/research imagery:
- Lab background image in ARID Lab Highlight section (line 184)
- Fractography research card image (line 213)
- COSAGE research card image (line 225)
