# Mobile Responsiveness Fix Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Fix all 9 mobile responsiveness issues across the site so every page renders correctly on phones (375px width / iPhone viewport).

**Architecture:** CSS-only fixes using Tailwind responsive prefixes where possible. One JavaScript addition for the hamburger menu toggle. No new dependencies. All changes are additive responsive overrides — desktop layout is NOT touched.

**Tech Stack:** HTML, Tailwind CSS (CDN), vanilla JavaScript (hamburger menu only)

---

## Task 1: Add Mobile Hamburger Menu to All 6 Pages

**Files:**
- Modify: ALL 6 HTML files in `site/`

This is the most critical fix — on mobile (<768px), the nav links are hidden (`hidden md:flex`) but there's no hamburger button to show them.

**The Pattern (apply to each page):**

**Step 1: Add a hamburger button inside the nav's inner div, BEFORE the right-side action buttons**

The hamburger button should:
- Be visible only on mobile: `md:hidden`
- Use a Material Symbol icon: `menu` (open) / `close` (close)
- Toggle a mobile menu panel

**Step 2: Add a mobile menu panel after the nav**

The panel should:
- Be hidden by default: `hidden` (toggled via JS)
- Contain all 5 nav links stacked vertically
- Contain the Contact + Google Scholar buttons
- Use the same glassmorphism styling as the nav
- Have id `mobile-menu`

**Step 3: Add toggle JavaScript**

Add a small `<script>` before `</body>` on each page:

```html
<script>
document.getElementById('menu-toggle').addEventListener('click', function() {
  const menu = document.getElementById('mobile-menu');
  const icon = this.querySelector('.material-symbols-outlined');
  menu.classList.toggle('hidden');
  icon.textContent = menu.classList.contains('hidden') ? 'menu' : 'close';
});
</script>
```

**Exact HTML to add for each page** (adjust active link per page):

Hamburger button (insert after the `hidden md:flex` links div, before the action buttons div):
```html
<button id="menu-toggle" class="md:hidden text-primary">
<span class="material-symbols-outlined text-2xl">menu</span>
</button>
```

Mobile menu panel (insert immediately after `</nav>` closing tag):
```html
<div id="mobile-menu" class="hidden md:hidden bg-[#f9f9f8]/95 backdrop-blur-xl border-b border-outline-variant/20 px-8 py-6 sticky top-[88px] z-40">
<div class="flex flex-col gap-4 font-['Noto_Serif'] text-sm tracking-wide">
<a class="text-zinc-500 hover:text-[#361c36] py-2" href="index.html">Home</a>
<a class="text-zinc-500 hover:text-[#361c36] py-2" href="arid-lab.html">ARID Lab</a>
<a class="text-zinc-500 hover:text-[#361c36] py-2" href="research.html">Research</a>
<a class="text-zinc-500 hover:text-[#361c36] py-2" href="teaching.html">Teaching</a>
<a class="text-zinc-500 hover:text-[#361c36] py-2" href="service-impact.html">Service & Impact</a>
<div class="flex flex-col gap-3 pt-4 border-t border-outline-variant/20">
<a href="mailto:mari.isa@ttu.edu" class="bg-primary text-on-primary px-5 py-2.5 rounded-md text-xs font-medium text-center">Contact</a>
<a href="https://scholar.google.com/citations?user=fw-qsXcAAAAJ&hl=en" target="_blank" class="border border-outline text-primary px-5 py-2.5 rounded-md text-xs font-medium text-center">Google Scholar</a>
</div>
</div>
</div>
```

Note: The active link for each page should get `text-[#361c36] font-semibold` instead of `text-zinc-500`.

Also: On mobile, hide the desktop action buttons: change the action buttons container from `flex` to `hidden md:flex` so only the hamburger shows on mobile.

**Step 4: Verify via Playwright at 375px** — hamburger appears, clicking opens menu, links work.

**Step 5: Commit**
```bash
git add site/
git commit -m "Add mobile hamburger menu to all 6 pages"
```

---

## Task 2: Fix Homepage Sticky Core Philosophy Overlap

**Files:**
- Modify: `site/index.html`

**The Problem:** Line 146 has `<div class="sticky top-40">` which makes the left column (quote + NSF badge) stick while scrolling on desktop — but on mobile where the layout is single-column, it freezes over the bio text below.

**Step 1: Add responsive prefix to sticky**

```
Old: <div class="sticky top-40">
New: <div class="lg:sticky lg:top-40">
```

This makes sticky behavior only activate at `lg:` (1024px+) where the two-column layout is active. On mobile (single column), it scrolls normally.

**Step 2: Verify** — scroll through the section on mobile, quote no longer sticks.

**Step 3: Commit**
```bash
git add site/index.html
git commit -m "Fix Core Philosophy sticky overlap on mobile"
```

---

## Task 3: Fix Homepage "Explore Laboratory Initiatives" Button Overflow

**Files:**
- Modify: `site/index.html`

**The Problem:** Line 194 — button text "Explore Laboratory Initiatives" with `uppercase tracking-widest` overflows on mobile due to tight padding in the parent card (`p-12`).

**Step 1: Make button text smaller on mobile and reduce parent padding**

Button fix:
```
Old: class="bg-surface-container-lowest text-primary px-10 py-5 rounded-md font-bold uppercase tracking-widest hover:bg-white transition-colors"
New: class="bg-surface-container-lowest text-primary px-6 py-4 md:px-10 md:py-5 rounded-md font-bold uppercase tracking-widest text-xs md:text-base hover:bg-white transition-colors"
```

**Step 2: Verify** — button fully visible on 375px screen.

**Step 3: Commit**
```bash
git add site/index.html
git commit -m "Fix Explore button overflow on mobile"
```

---

## Task 4: Fix ARID Lab Gallery Grid Height on Mobile

**Files:**
- Modify: `site/arid-lab.html`

**The Problem:** Line 227 — `h-[800px]` is applied at ALL screen sizes (no `md:` prefix). On mobile with single-column layout, this forces images into a tiny fraction of 800px each.

**Step 1: Add responsive prefix**

```
Old: <div class="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px]">
New: <div class="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-[800px]">
```

Also add min-height to each grid cell on mobile so images are visible:
- Large cell (line 228): add `min-h-[300px]` 
- Other cells (lines 234, 240, 243): add `min-h-[200px]`

**Step 2: Verify** — gallery images visible and properly sized on mobile.

**Step 3: Commit**
```bash
git add site/arid-lab.html
git commit -m "Fix ARID Lab gallery grid height on mobile"
```

---

## Task 5: Fix Teaching Page Floating Quote Card Bleed

**Files:**
- Modify: `site/teaching.html`

**The Problem:** Line 130 — `absolute -bottom-6 -left-6` positions the quote card outside the container, bleeding off-screen left on mobile.

**Step 1: Reset position on mobile**

```
Old: <div class="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-lg shadow-xl max-w-[200px]">
New: <div class="relative mt-4 lg:absolute lg:-bottom-6 lg:-left-6 bg-surface-container-lowest p-6 rounded-lg shadow-xl max-w-[200px]">
```

On mobile: `relative mt-4` — card flows normally below the image.
On desktop (lg:): `absolute -bottom-6 -left-6` — original floating effect.

**Step 2: Verify** — quote card visible and in-flow on mobile, floats on desktop.

**Step 3: Commit**
```bash
git add site/teaching.html
git commit -m "Fix teaching page floating quote card on mobile"
```

---

## Task 6: Fix Teaching Page Student Gallery Mobile Heights

**Files:**
- Modify: `site/teaching.html`

**The Problem:** Line 210 — grid uses `md:h-[800px]` (correct breakpoint), but on mobile the cells with images have no explicit height so they collapse.

**Step 1: Add min-heights to image cells on mobile**

Large feature cell (line 212): add `min-h-[350px]`
```
Old: <div class="md:col-span-2 md:row-span-2 bg-surface-container rounded-2xl overflow-hidden relative group">
New: <div class="md:col-span-2 md:row-span-2 bg-surface-container rounded-2xl overflow-hidden relative group min-h-[350px]">
```

Last image cell (the one that was "Lab Community", now Carter Unger — no image, just text): no change needed — it has padding and text content.

**Step 2: Verify** — student gallery images visible on mobile.

**Step 3: Commit**
```bash
git add site/teaching.html
git commit -m "Fix teaching student gallery image heights on mobile"
```

---

## Task 7: Fix Research Page Image Grid Translate Offset

**Files:**
- Modify: `site/research.html`

**The Problem:** Lines 284, 286 — `translate-y-8` on alternating images creates a nice stagger on desktop 2-column grid, but on mobile (1-column) it pushes images into the content below.

**Step 1: Make translate responsive only**

```
Old: class="rounded-lg w-full h-48 object-cover translate-y-8"
New: class="rounded-lg w-full h-48 object-cover md:translate-y-8"
```

Apply to both instances (lines 284 and 286).

**Step 2: Verify** — images align normally on mobile, stagger on desktop.

**Step 3: Commit**
```bash
git add site/research.html
git commit -m "Fix research page image translate offset on mobile"
```

---

## Task 8: Fix Research Page Inner 2-Column Grid

**Files:**
- Modify: `site/research.html`

**The Problem:** Line 161 — `grid grid-cols-2 gap-8` inside research cards forces two tight columns on mobile.

**Step 1: Make it stack on mobile**

This pattern appears 3 times (one per Active Investigation card):

```
Old: <div class="grid grid-cols-2 gap-8 border-t border-outline-variant/20 pt-8">
New: <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 border-t border-outline-variant/20 pt-8">
```

Apply to all 3 instances.

**Step 2: Verify** — Status/Team fields stack vertically on mobile, side-by-side on sm+.

**Step 3: Commit**
```bash
git add site/research.html
git commit -m "Fix research card inner grid stacking on mobile"
```

---

## Task 9: Fix Nav Action Buttons Crowding on Mobile

**Files:**
- Modify: ALL 6 HTML files

**The Problem:** The desktop action buttons (Contact + Google Scholar) show at all sizes, crowding the nav on small screens. The hamburger menu (Task 1) already includes these buttons, so they should be hidden on mobile.

**Step 1: Hide desktop action buttons on mobile**

Each page has a `<div class="flex gap-4">` (or similar) containing the Contact + Google Scholar buttons. Change to `hidden md:flex gap-4`.

This is already handled as part of Task 1's implementation — when adding the hamburger, the desktop buttons get `hidden md:flex`. Verify during Task 1 that this is done.

**Step 2: Verify** — only hamburger visible on mobile nav, both buttons visible on desktop.

**Step 3: Commit** (included in Task 1 commit)

---

## Task 10: Final Mobile Verification

**Files:**
- All 6 pages

**Step 1: Start local server, set Playwright viewport to 375×812 (iPhone)**

**Step 2: Screenshot each page at mobile size**

For each page, take a full-page screenshot and verify:
- [ ] Hamburger menu appears (no desktop links visible)
- [ ] Hamburger opens and shows all 5 nav links + 2 buttons
- [ ] No horizontal overflow (no sideways scrolling)
- [ ] All text readable, no truncation
- [ ] Images properly sized
- [ ] No elements bleeding off-screen

**Step 3: Test specific fixed issues:**
- [ ] index.html: Core Philosophy scrolls normally (no sticky overlap)
- [ ] index.html: "Explore Laboratory Initiatives" button fully visible
- [ ] arid-lab.html: Gallery images properly sized (not crushed)
- [ ] teaching.html: Quote card doesn't bleed left
- [ ] teaching.html: Student gallery images visible
- [ ] research.html: Pull-quote images aligned (no stagger on mobile)
- [ ] research.html: Status/Team fields stacked in cards

**Step 4: Commit and push**
```bash
git add -A
git commit -m "Complete mobile responsiveness: all 9 issues fixed across 6 pages"
git push
```

---

## Summary

| Task | Page(s) | Fix |
|------|---------|-----|
| 1 | All 6 | Add hamburger menu + hide desktop buttons on mobile |
| 2 | index.html | `sticky top-40` → `lg:sticky lg:top-40` |
| 3 | index.html | Reduce Explore button padding/size on mobile |
| 4 | arid-lab.html | `h-[800px]` → `md:h-[800px]` + add cell min-heights |
| 5 | teaching.html | Floating card `absolute` → `relative` on mobile |
| 6 | teaching.html | Add min-height to gallery image cells |
| 7 | research.html | `translate-y-8` → `md:translate-y-8` |
| 8 | research.html | `grid-cols-2` → `grid-cols-1 sm:grid-cols-2` |
| 9 | All 6 | Desktop nav buttons → `hidden md:flex` (part of Task 1) |
| 10 | All 6 | Final mobile verification |
