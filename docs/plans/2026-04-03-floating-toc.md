# Floating Table of Contents — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Use /frontend-design and /ui-ux-pro-max skills for all visual decisions. Follow the "Academic Editorial" design system in maris-website-template/curated_scholar/DESIGN.md.

**Goal:** Add a floating table of contents component to all 6 pages that auto-generates from h2/h3 elements, uses scroll spy to show the user's current position, and can be minimized to a thin vertical label.

**Architecture:** A single shared JavaScript file (`toc.js`) and a shared CSS block are included on all 6 pages. The JS scans the page for h2/h3 elements, builds the TOC dynamically, manages scroll spy via IntersectionObserver, handles open/minimized/hidden states, and persists the user's preference via localStorage. No manual TOC markup needed — fully auto-generated.

**Tech Stack:** Vanilla JS, Tailwind CSS (existing CDN), IntersectionObserver API, localStorage

---

## CRITICAL RULES

1. **Use /frontend-design and /ui-ux-pro-max skills** for designing the component
2. **Follow DESIGN.md** — frosted glass treatment uses existing color tokens (surface, outline-variant, primary, tertiary, secondary)
3. **No layout shifts** — the TOC is `position: fixed`, overlays page content, never affects document flow
4. **Auto-generated** — the JS reads h2/h3 elements, no hardcoded TOC lists
5. **Accessible** — keyboard navigable, proper ARIA labels, respects `prefers-reduced-motion`

---

## STARTING STATE

The website has 6 HTML pages. Each page has:
- A hero section at the top (except privacy.html which has no hero)
- Multiple h2/h3 sections below the hero (ranging from 6 on privacy to 22+ on research)
- An existing hamburger menu JS script at the bottom of each page
- No h2/h3 elements currently have `id` attributes (except `service-impact.html` which has one: `id="casework"`)

**Problem:** Pages have grown very content-heavy (Research = 12+ screen-heights, Service & Impact = 10+) and visitors can't see what's below the fold.

---

## END STATE

Every page has a floating TOC that:
- **Desktop:** Right-side frosted-glass panel, visible after scrolling past the hero
- **Mobile:** Bottom-right floating pill that expands to an overlay panel
- **Scroll spy:** Active section highlighted as user scrolls
- **Expandable:** h2s always visible, h3s expand on click
- **Minimizable:** Collapses to a thin vertical label showing current section name
- **Persistent:** Open/minimized state remembered across pages via localStorage

---

## ROLLBACK INSTRUCTIONS

If the TOC needs to be completely reverted:

```bash
# Option 1: Revert the TOC commits (safe — keeps everything else)
git log --oneline -10  # Find the commit hashes for TOC work
git revert <toc-commit-hash-1> <toc-commit-hash-2> ...

# Option 2: Remove manually (3 steps)
# 1. Delete the file: site/js/toc.js
# 2. Remove the <script src="js/toc.js"> line from all 6 HTML files
# 3. Remove id attributes from h2/h3 elements (optional — they don't hurt anything)

# Option 3: Nuclear — reset to pre-TOC state
git log --oneline -20  # Find the last commit before TOC work
git reset --hard <pre-toc-commit>  # WARNING: destroys all work after that commit
```

The TOC is entirely additive — it adds one JS file and one script tag per page + id attributes on headings. Removing it leaves the pages exactly as they were. No existing markup or styles are modified.

---

## DESIGN DECISIONS (from brainstorming)

| Decision | Choice |
|----------|--------|
| TOC depth | h2s visible, h3s expandable on click |
| Desktop position | Right sidebar, overlays content (not beside it) |
| Mobile position | Bottom-right floating pill → slide-up overlay panel |
| Visual treatment | Frosted glass: `bg-white/60 backdrop-blur-md rounded-xl` |
| Scroll tracking | IntersectionObserver scroll spy, active section highlighted |
| Hero behavior | TOC hidden while hero in view, fades in after scrolling past |
| Minimize | User can collapse to thin vertical label showing current section |
| Persistence | Open/minimized state saved to localStorage, persists across pages |
| Architecture | Single shared `toc.js`, auto-generates from h2/h3 elements |
| Which h3s to include | Only h3s that are direct children of section containers — skip card titles, faculty names, individual publication titles |

---

## DESIGN SYSTEM REFERENCE

**Frosted glass panel (open state):**
```css
background: rgba(255, 255, 255, 0.6);
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid rgba(208, 195, 203, 0.15);  /* outline-variant at 15% */
border-radius: 12px;
```

**Frosted glass (minimized state):**
```css
background: rgba(255, 255, 255, 0.4);
backdrop-filter: blur(8px);
border-radius: 8px;
```

**Active section indicator:** Left border accent in tertiary gold (#342200) at 40% opacity
**Text:** `font-family: 'Manrope'` (font-label), 11px, color: on-surface-variant (#4d444b)
**Active text:** `font-family: 'Manrope'`, 11px, color: primary (#361c36), font-weight: bold

---

## PAGE-BY-PAGE: SECTIONS TO INCLUDE IN TOC

Each page's TOC should show these h2 sections (and their expandable h3 sub-sections). Items marked "skip" are h3s that are card titles or items, not true subsections.

### index.html (6 h2s)
| h2 | Suggested ID | h3 Sub-sections |
|----|-------------|-----------------|
| Integrated Scholar | `integrated-scholar` | None for TOC (the 3 pillar cards are not sub-sections) |
| A Commitment to Vulnerable Identities | `vulnerable-identities` | None |
| Laboratory Experience | `laboratory-experience` | None |
| The ARID Lab | `the-arid-lab` | None |
| Key Research | `key-research` | None |
| Join the Conversation | `join-the-conversation` | None |

### research.html (7 h2s, 12 relevant h3s)
| h2 | Suggested ID | h3 Sub-sections |
|----|-------------|-----------------|
| Active Investigations | `active-investigations` | None for TOC |
| A Guide to Forensic Fractography of Bone | `fractography-book` | Scientific Abstract, Public Impact Summary |
| Selected Publications | `selected-publications` | Forensic Fractography & Biomechanics, Inclusive Identification, Ethics & Cold Case Resolution |
| Books & Chapters | `books-and-chapters` | None |
| Research Reports | `research-reports` | None |
| Conference Activity | `conference-activity` | Cranial Fracture & Biomechanics, Long Bone Fractography, Pediatric Trauma, Inclusive Identification & Ethics, Bioarchaeology |
| Research Funding | `research-funding` | Faculty Research Grants, Doctoral & Graduate Funding |

### teaching.html (3 h2s, 3 relevant h3s)
| h2 | Suggested ID | h3 Sub-sections |
|----|-------------|-----------------|
| Curriculum Excellence | `curriculum-excellence` | None (individual courses are card titles, not TOC items) |
| Student Mentorship | `student-mentorship` | Thesis Chair, Committee Member, Undergraduate Mentees |
| Investigating the Past, Shaping the Future | `closing-cta` | None |

### service-impact.html (7 h2s, 6 relevant h3s)
| h2 | ID | h3 Sub-sections |
|----|-----|-----------------|
| Professional Leadership | `professional-leadership` | None (individual roles are card titles) |
| Workshops & Invited Lectures | `workshops-lectures` | None |
| Advocacy & Community | `advocacy-community` | None |
| Archaeological Fieldwork | `archaeological-fieldwork` | Italy, Belize, United States |
| University & Department Service | `university-service` | None |
| Peer Review | `peer-review` | None |
| Forensic Casework Record | `casework` (already exists) | Expert Witness Testimony, Texas Jurisdictions, Michigan Jurisdictions |

### arid-lab.html (5 h2s)
| h2 | Suggested ID | h3 Sub-sections |
|----|-------------|-----------------|
| Our Mission | `our-mission` | None |
| Affiliated Faculty | `affiliated-faculty` | None (individual faculty are card titles) |
| In Action | `in-action` | None |
| Notable Publications | `notable-publications` | None |
| Join the Lab | `join-the-lab` | None |

### privacy.html (6 h2s, no hero)
| h2 | Suggested ID | h3 Sub-sections |
|----|-------------|-----------------|
| Introduction | `introduction` | None |
| Information Collection | `information-collection` | None |
| Use of Information | `use-of-information` | None |
| Academic & Research Context | `academic-research-context` | None |
| External Links | `external-links` | None |
| Contact | `contact` | None |

---

## Task 1: Add `id` Attributes to All h2 Elements

**Files:** Modify all 6 HTML files in `site/`

This is the prep work. Every h2 that should appear in the TOC needs an `id` attribute for anchor linking. The JS will use these IDs.

**Step 1:** Add `id` attributes to all h2 elements listed in the tables above. Use the suggested kebab-case IDs. Do NOT change any existing content or styling — only add the `id` attribute.

**Example change:**
```html
<!-- Before -->
<h2 class="font-headline text-4xl text-primary">Selected <i class="font-normal italic">Publications</i></h2>

<!-- After -->
<h2 id="selected-publications" class="font-headline text-4xl text-primary">Selected <i class="font-normal italic">Publications</i></h2>
```

**Full list of IDs to add:**

**index.html (6):**
- `integrated-scholar` (h2 ~L162)
- `vulnerable-identities` (h2 ~L234)
- `laboratory-experience` (h2 ~L273)
- `the-arid-lab` (h2 ~L375)
- `key-research` (h2 ~L391)
- `join-the-conversation` (h2 ~L440)

**research.html (7):**
- `active-investigations` (h2 ~L154)
- `fractography-book` (h2 ~L249)
- `selected-publications` (h2 ~L308)
- `books-and-chapters` (h2 ~L468)
- `research-reports` (h2 ~L521)
- `conference-activity` (h2 ~L550)
- `research-funding` (h2 ~L780)

**teaching.html (3):**
- `curriculum-excellence` (h2 ~L155)
- `student-mentorship` (h2 ~L274)
- `closing-cta` (h2 ~L475)

**service-impact.html (6 — `casework` already exists):**
- `professional-leadership` (h2 ~L135)
- `workshops-lectures` (h2 ~L208)
- `advocacy-community` (h2 ~L299)
- `archaeological-fieldwork` (h2 ~L348)
- `university-service` (h2 ~L416)
- `peer-review` (h2 ~L464)

**arid-lab.html (5):**
- `our-mission` (h2 ~L141)
- `affiliated-faculty` (h2 ~L207)
- `in-action` (h2 ~L281)
- `notable-publications` (h2 ~L306)
- `join-the-lab` (h2 ~L344)

**privacy.html (6):**
- `introduction` (h2 ~L101)
- `information-collection` (h2 ~L106)
- `use-of-information` (h2 ~L111)
- `academic-research-context` (h2 ~L116)
- `external-links` (h2 ~L121)
- `contact` (h2 ~L126)

**Step 2:** Also add `id` attributes to the relevant h3 elements (sub-sections that should be expandable in the TOC). Use the `data-toc="true"` attribute to mark them as TOC-eligible h3s (so the JS can distinguish section headings from card titles).

**research.html h3 IDs:**
- `scientific-abstract` + `data-toc="true"` (~L257)
- `public-impact-summary` + `data-toc="true"` (~L272)
- `pub-fractography` + `data-toc="true"` (~L317) — under Selected Publications
- `pub-inclusive` + `data-toc="true"` (~L408)
- `pub-ethics` + `data-toc="true"` (~L436)
- `conf-cranial` + `data-toc="true"` (~L581)
- `conf-long-bone` + `data-toc="true"` (~L660)
- `conf-pediatric` + `data-toc="true"` (~L699)
- `conf-inclusive` + `data-toc="true"` (~L714)
- `conf-bioarch` + `data-toc="true"` (~L757)
- `grants-faculty` + `data-toc="true"` (~L789)
- `grants-doctoral` + `data-toc="true"` (~L842)

**teaching.html h3 IDs:**
- `thesis-chair` + `data-toc="true"` (~L299)
- `committee-member` + `data-toc="true"` (~L359)
- `undergraduate-mentees` + `data-toc="true"` (~L434)

**service-impact.html h3 IDs:**
- `fieldwork-italy` + `data-toc="true"` (~L357)
- `fieldwork-belize` + `data-toc="true"` (~L381)
- `fieldwork-us` + `data-toc="true"` (~L400)
- `casework-testimony` + `data-toc="true"` (~L562)
- `casework-texas` + `data-toc="true"` (~L579)
- `casework-michigan` + `data-toc="true"` (~L671)

**Step 3: Verify** — grep for `id=` on h2 elements to confirm all are present. Total expected: 33 h2 IDs + 21 h3 IDs = 54 new IDs.

**Step 4: Commit**

---

## Task 2: Create the TOC JavaScript File

**Files:** Create `site/js/toc.js`

**Step 1: Use /frontend-design** to design the TOC component following the design spec above.

**Step 2: Create the directory and file.** Run `mkdir -p site/js` then create `site/js/toc.js`.

**Step 3: Implement the full TOC JavaScript.** The file must handle ALL of the following:

### 3a. DOM Construction
The JS builds the TOC DOM on page load:
```
<div id="toc-wrapper"> ← fixed position container
  <div id="toc-panel"> ← the open-state frosted glass panel
    <div id="toc-header"> ← "ON THIS PAGE" + close button
    <div id="toc-list"> ← the section links
  </div>
  <div id="toc-minimized"> ← the minimized vertical label
  <div id="toc-mobile-pill"> ← the mobile floating button
  <div id="toc-mobile-overlay"> ← the mobile expanded panel + scrim
</div>
```

### 3b. Section Discovery
On load, the script:
1. Finds all `h2[id]` elements on the page
2. For each h2, finds subsequent `h3[data-toc="true"]` elements until the next h2
3. Builds a nested list: `[{ id, text, children: [{ id, text }] }]`
4. Generates clickable links for each

### 3c. Hero Detection
The script finds the first `<section>` element on the page. If the page has a hero (all pages except privacy.html), it uses IntersectionObserver to watch that section:
- Hero **in view** → TOC hidden (`opacity: 0, pointer-events: none`)
- Hero **out of view** → TOC fades in (`opacity: 1, transition: 300ms`)

For privacy.html (no hero), the TOC is visible immediately.

### 3d. Scroll Spy
Uses IntersectionObserver on all h2[id] elements:
```javascript
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setActiveSection(entry.target.id);
    }
  });
}, {
  rootMargin: '-20% 0px -70% 0px'  // active when in top 30% of viewport
});
```

When active section changes:
- The corresponding TOC link gets `active` class (bold, primary color, left border accent)
- If the active section is an h3 inside a collapsed group, that group auto-expands
- The minimized label updates to show the current section name

### 3e. Expand/Collapse h3 Groups
Each h2 that has h3 children shows a `▸` chevron. Clicking it toggles the h3 list:
- `▸` → `▾` and h3 list slides down (max-height transition)
- Click again → collapse back
- If scroll spy activates an h3 inside a collapsed group → auto-expand

### 3f. Open/Minimized State
- **Open → Minimized:** User clicks the ✕ button. Panel slides out right, minimized label slides in.
- **Minimized → Open:** User clicks the minimized label. Label slides out, panel slides in.
- State saved to `localStorage.setItem('toc-minimized', 'true'/'false')`
- On page load: read localStorage, apply correct state before any fade-in

### 3g. Mobile Behavior
At `window.innerWidth < 768` (or use `matchMedia('(max-width: 767px)')`):
- Desktop panel is hidden
- Mobile pill is shown (bottom-right, 44px circle)
- Pill shows abbreviated current section name next to icon
- Tap pill → scrim + slide-up panel with all sections
- Tap section → smooth scroll + auto-close panel
- Tap scrim or ✕ → close panel
- Swipe down on panel → close (optional, nice-to-have)

### 3h. Smooth Scrolling
Clicking any TOC link:
```javascript
document.getElementById(targetId).scrollIntoView({
  behavior: 'smooth',
  block: 'start'
});
```
With a small offset for the fixed header (the nav is ~64px tall).

### 3i. Responsive Handling
Listen for `resize` events (debounced) or use `matchMedia` to switch between desktop and mobile modes without page reload.

**Step 4: Commit**

---

## Task 3: Add Styles to the TOC

**Files:** The CSS can be either:
- Inline within `toc.js` (injected via `<style>` element on load) — **recommended** for single-file simplicity
- Or a separate `site/css/toc.css` file

**Recommended: Inject styles from toc.js** so there's only one file to include.

**Step 1:** The JS should inject a `<style>` element into `<head>` with all TOC-specific CSS:

```css
/* TOC Panel — Open State (Desktop) */
#toc-panel {
  position: fixed;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  width: 180px;
  max-height: 70vh;
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(208, 195, 203, 0.15);
  border-radius: 12px;
  padding: 16px;
  z-index: 40;
  transition: opacity 0.3s ease, transform 0.3s ease;
  font-family: 'Manrope', sans-serif;
}

/* Scrollbar styling for long TOCs */
#toc-panel::-webkit-scrollbar { width: 3px; }
#toc-panel::-webkit-scrollbar-thumb { background: rgba(77, 68, 75, 0.2); border-radius: 3px; }

/* TOC Header */
#toc-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(208, 195, 203, 0.15);
}
#toc-header span {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #546253; /* secondary */
}
#toc-close {
  cursor: pointer;
  color: #4d444b; /* on-surface-variant */
  font-size: 16px;
  line-height: 1;
  opacity: 0.6;
  transition: opacity 0.2s;
}
#toc-close:hover { opacity: 1; }

/* TOC Links */
.toc-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
  font-size: 11px;
  color: #4d444b; /* on-surface-variant */
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s;
  border-left: 2px solid transparent;
  padding-left: 8px;
}
.toc-link:hover { color: #361c36; /* primary */ }
.toc-link.active {
  color: #361c36;
  font-weight: 700;
  border-left-color: rgba(52, 34, 0, 0.4); /* tertiary at 40% */
}
.toc-link-h3 {
  padding-left: 20px;
  font-size: 10px;
}

/* Chevron for expandable groups */
.toc-chevron {
  font-size: 10px;
  transition: transform 0.2s;
  color: #4d444b;
  flex-shrink: 0;
}
.toc-chevron.expanded { transform: rotate(90deg); }

/* h3 sub-list */
.toc-children {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}
.toc-children.expanded { max-height: 500px; }

/* Minimized State */
#toc-minimized {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(208, 195, 203, 0.1);
  border-radius: 8px 0 0 8px;
  padding: 12px 4px;
  cursor: pointer;
  z-index: 40;
  transition: opacity 0.3s ease;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-family: 'Manrope', sans-serif;
  font-size: 10px;
  color: #4d444b;
  letter-spacing: 0.05em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 200px;
}
#toc-minimized:hover {
  background: rgba(255, 255, 255, 0.6);
  color: #361c36;
}

/* Hidden state (during hero) */
.toc-hidden { opacity: 0 !important; pointer-events: none !important; }

/* Mobile Pill */
#toc-mobile-pill {
  display: none; /* shown via media query */
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(208, 195, 203, 0.2);
  z-index: 40;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(77, 68, 75, 0.1);
  transition: opacity 0.3s ease;
}
#toc-mobile-pill .material-symbols-outlined {
  font-size: 20px;
  color: #361c36;
}

/* Mobile Overlay */
#toc-mobile-overlay {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 50;
}
#toc-mobile-overlay.open { display: flex; flex-direction: column; justify-content: flex-end; }
#toc-mobile-scrim {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
}
#toc-mobile-panel {
  position: relative;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 16px 16px 0 0;
  padding: 24px;
  max-height: 60vh;
  overflow-y: auto;
  z-index: 51;
}

/* Responsive */
@media (max-width: 767px) {
  #toc-panel, #toc-minimized { display: none !important; }
  #toc-mobile-pill { display: flex; }
}
@media (min-width: 768px) {
  #toc-mobile-pill, #toc-mobile-overlay { display: none !important; }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  #toc-panel, #toc-minimized, .toc-children, .toc-chevron,
  #toc-mobile-pill, #toc-mobile-overlay {
    transition: none !important;
  }
}
```

**Step 2: Commit** (included with Task 2 commit)

---

## Task 4: Include toc.js on All 6 Pages

**Files:** Modify all 6 HTML files in `site/`

**Step 1:** Add the script tag to each page. Insert it BEFORE the existing hamburger menu `<script>` block (which is the last script before `</body>`):

```html
<script src="js/toc.js"></script>
<script>
document.getElementById('menu-toggle').addEventListener('click', function() {
  ...existing hamburger code...
});
</script>
</body>
```

**The exact insertion points (insert BEFORE these lines):**
- `index.html`: before line ~468
- `research.html`: before line ~925
- `teaching.html`: before line ~507
- `service-impact.html`: before line ~825
- `arid-lab.html`: before line ~389
- `privacy.html`: before line ~148

**Step 2: Special case — privacy.html** has no hero section. Add a `data-no-hero="true"` attribute to the `<main>` element so the JS knows to show the TOC immediately:

```html
<main data-no-hero="true" class="max-w-4xl mx-auto px-8 py-32">
```

**Step 3: Verify** — open each page in Playwright browser and confirm the TOC appears after scrolling past the hero.

**Step 4: Commit**

---

## Task 5: Visual Testing & Polish

**Files:** Possibly adjust `site/js/toc.js` for fine-tuning

**Step 1: Desktop testing (Playwright at 1440px width)**
- [ ] Navigate to each of the 6 pages
- [ ] Confirm TOC is hidden during hero section
- [ ] Scroll past hero — confirm TOC fades in
- [ ] Confirm active section highlights correctly as you scroll
- [ ] Click a section — confirm smooth scroll to that section
- [ ] Click ✕ — confirm panel minimizes to vertical label
- [ ] Confirm minimized label shows current section name
- [ ] Click minimized label — confirm panel re-opens
- [ ] Navigate to another page — confirm minimized state persists

**Step 2: Mobile testing (Playwright at 375px width)**
- [ ] Confirm desktop panel is hidden
- [ ] Confirm mobile pill appears after scrolling past hero
- [ ] Tap pill — confirm overlay panel slides up
- [ ] Confirm sections are listed correctly
- [ ] Tap a section — confirm scroll + panel close
- [ ] Tap scrim — confirm panel close

**Step 3: Research page stress test**
Research.html has the most sections (7 h2 + 12 h3). Verify:
- [ ] All 7 h2 sections appear in TOC
- [ ] Expanding Conference Activity shows all 5 theme sub-sections
- [ ] Panel doesn't overflow — scrollable if needed
- [ ] Scroll spy works correctly through all sections

**Step 4: Fix any issues found in testing**

**Step 5: Commit**

---

## Task 6: Accessibility & Edge Cases

**Files:** Modify `site/js/toc.js`

**Step 1: ARIA attributes**
- TOC panel: `role="navigation"`, `aria-label="Table of contents"`
- Close button: `aria-label="Minimize table of contents"`
- Minimized label: `aria-label="Expand table of contents"`
- Mobile pill: `aria-label="Open table of contents"`
- Each section link: `role="link"`

**Step 2: Keyboard navigation**
- TOC links should be focusable (`tabindex="0"`)
- Enter key triggers the same action as click
- Escape key minimizes the panel (desktop) or closes the overlay (mobile)

**Step 3: Edge case — very short pages**
If a page has fewer than 3 h2 sections (only privacy.html has 6, but future-proofing), still show the TOC. If a page has ZERO h2 sections with IDs, don't render the TOC at all.

**Step 4: Commit**

---

## Task 7: Dev Server Review — User Approval Gate

**This is a MANDATORY gate. Do NOT push to GitHub until the user has reviewed and approved the TOC on the dev server.**

**Step 1: Start a local dev server** to serve the site files:

```bash
cd /Users/shayisa/Vibecode-projects/maris-website/site
python3 -m http.server 8080
```

**Step 2: Present the dev server URL to the user:**
Tell the user: "The site is running at http://localhost:8080 — please review the TOC on these pages and let me know if anything needs adjusting:
- http://localhost:8080/index.html
- http://localhost:8080/research.html
- http://localhost:8080/teaching.html
- http://localhost:8080/service-impact.html
- http://localhost:8080/arid-lab.html
- http://localhost:8080/privacy.html"

**Step 3: Wait for user feedback.** The user may request:
- Visual adjustments (size, position, transparency, colors)
- Content changes (which sections appear, label text)
- Behavior changes (animation speed, auto-expand rules)
- Mobile-specific tweaks

**Step 4: Iterate on feedback.** Apply any requested changes, re-test on the dev server, and ask for approval again. Repeat until the user confirms.

**Step 5: User confirms approval.** Only proceed to Task 8 after explicit "looks good" or equivalent confirmation.

---

## Task 8: Final Push to GitHub

**Step 1: Stop the dev server** (Ctrl+C on the python process).

**Step 2: Review all changes** — confirm only the following files were modified:
- Created: `site/js/toc.js`
- Modified: `site/index.html` (IDs + script tag)
- Modified: `site/research.html` (IDs + script tag)
- Modified: `site/teaching.html` (IDs + script tag)
- Modified: `site/service-impact.html` (IDs + script tag)
- Modified: `site/arid-lab.html` (IDs + script tag)
- Modified: `site/privacy.html` (IDs + script tag + data-no-hero)

**Step 3: Push to GitHub**

```bash
git push
```

**Step 4: Verify live site** at https://shayisa.github.io/drmariisa/

---

## Summary

| Task | What | Files |
|------|------|-------|
| 1 | Add id attributes to 33 h2s + 21 h3s | All 6 HTML files |
| 2 | Create toc.js with full functionality | Create `site/js/toc.js` |
| 3 | CSS injected from toc.js | Part of toc.js |
| 4 | Add script tag to all 6 pages | All 6 HTML files |
| 5 | Visual testing & polish | Adjust toc.js as needed |
| 6 | Accessibility & edge cases | Adjust toc.js |
| 7 | **Dev server review — USER APPROVAL GATE** | User reviews locally |
| 8 | Final push | Git push |

**Rollback:** Delete `site/js/toc.js`, remove 6 script tags. IDs can stay (harmless). One commit to revert.
