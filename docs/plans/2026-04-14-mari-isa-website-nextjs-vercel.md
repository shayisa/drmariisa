# Dr. Mari Isa Website — Next.js Build & Vercel Deployment

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a production-ready academic portfolio website for Dr. Mariyam (Mari) Isa using the Stitch-generated design system, grounded content from her CV, and the existing floating TOC — then deploy to Vercel.

**Architecture:** Static Next.js (App Router) site with 6 pages. Tailwind CSS with a custom theme matching Stitch's Material Design 3 token system. Floating Table of Contents as a React component ported from the existing vanilla JS implementation. All content sourced exclusively from the grounded Content Brief (verified against CV). Deployed to Vercel via GitHub.

**Tech Stack:** Next.js 14+ (App Router, static export), Tailwind CSS 3, React 18, TypeScript, Vercel CLI, Google Fonts (Noto Serif + Inter)

---

## Context for a Fresh Session

> **READ THESE FILES BEFORE STARTING ANY TASK:**
>
> 1. `docs/content-brief-grounded.md` — Source-of-truth for ALL text content. Every fact is cited. Contains 10 resolved flag decisions. **Never write content that isn't in this file.**
> 2. `docs/stitch-prompt.md` — The original 6-page design brief describing layout, visual direction, and UX requirements.
> 3. `site/js/toc.js` — The existing floating TOC implementation (691 lines). Port this to React.
> 4. `stitch-export/*.html` — Stitch design templates. The `<head>` section contains the complete Tailwind config with all color tokens, font families, and border radii. The body HTML is incomplete (truncated during export). Use the Stitch MCP tools or the existing `/site/*.html` pages as layout reference.
> 5. `site/*.html` — The current live site. Use these for layout structure reference (section ordering, grid patterns, component shapes). **Do NOT copy text content from these files** — use only the Content Brief.

### Project Location
- **Working directory:** `/Users/shayisa/Vibecode-projects/maris-website/`
- **New Next.js app:** `/Users/shayisa/Vibecode-projects/maris-website/nextjs-site/`
- **Stitch exports:** `/Users/shayisa/Vibecode-projects/maris-website/stitch-export/`
- **Content Brief:** `/Users/shayisa/Vibecode-projects/maris-website/docs/content-brief-grounded.md`
- **Existing site (layout ref):** `/Users/shayisa/Vibecode-projects/maris-website/site/`
- **TOC source:** `/Users/shayisa/Vibecode-projects/maris-website/site/js/toc.js`

### Credentials
- **Vercel token:** `~/.vercel-token` (loaded in shell via `~/.zshrc`)
- **Stitch API key:** `~/.config/stitch/api-key` (env var: `STITCH_API_KEY`)
- **Stitch project ID:** `3618720275764106223`
- **Node.js:** `/opt/homebrew/opt/node@24/bin/node`

### Stitch MCP (available in new sessions)
The Stitch MCP is registered at user scope. In a new session, these tools are available:
- `list_projects`, `list_screens`, `get_screen_code`, `get_screen_image`, `build_site`
- If MCP tools aren't loaded, use CLI: `npx -y @_davideast/stitch-mcp tool <command> -d '<json>'`

### Stitch Screen IDs (Desktop — use these for code extraction)
| Page | Screen ID | Title |
|------|-----------|-------|
| Homepage | `880990f23bfd4ff1bfa5b3fe8ce8190d` | Homepage - Desktop |
| Research | `6c3e62fd3a784ce592de19ce28d6ef85` | Research - Desktop |
| ARID Lab | `39ab1fb460564624aff1b1078b446433` | ARID Lab - Desktop |
| Teaching | `8c9862f4d46e4adf9af3b1c64fe66c35` | Teaching - Desktop |
| Service & Impact | `e20f4f38113349ff813c775902b75d0d` | Service & Impact - Desktop |
| Privacy | `55198d73a06942c6b3bde1ce99c20880` | Privacy Policy - Desktop |

### Design System (from Stitch Tailwind Config)
```
Colors (warm earth MD3 tokens):
  primary: #332c23          primary-container: #4a4238
  surface: #fbf9f4          background: #fbf9f4
  surface-container: #f0eee9
  surface-container-low: #f5f3ee
  surface-container-high: #eae8e3
  secondary: #56642b        secondary-container: #d6e7a1
  outline: #7d766e          outline-variant: #cfc5bb
  on-surface: #1b1c19       on-primary: #ffffff
  error: #ba1a1a

Fonts:
  font-headline: Noto Serif (serif, headings)
  font-body: Inter (sans, body/labels)
  Icons: Material Symbols Outlined

Border Radius: DEFAULT 0.125rem, lg 0.25rem, xl 0.5rem, full 0.75rem
Dark Mode: class-based
```

### Grounding Rules (HARD MUST)
- **Every piece of text** on the site must come from `docs/content-brief-grounded.md`
- **No embellishment.** No adjectives or framing not in the Content Brief
- **No inference.** If it's not explicitly stated, don't include it
- **Verified statistics only:** 12 articles, 61 cases, 20+ students, 7 courses, 4 books/chapters, 35 presentations, 9 workshops
- **Resolved flags:** See the "CONTENT FLAGS — RESOLVED DECISIONS" section in the Content Brief. Follow every decision exactly.
- **When in doubt, leave it out.** Better to have a gap than a misrepresentation.

---

## Phase 1: Project Scaffolding

### Task 1: Create Next.js Project

**Files:**
- Create: `nextjs-site/` (entire directory via create-next-app)

**Step 1: Scaffold the project**

```bash
cd /Users/shayisa/Vibecode-projects/maris-website
npx create-next-app@latest nextjs-site --typescript --tailwind --app --src-dir --no-eslint --import-alias "@/*"
```

Select defaults: No Turbopack, Yes to src directory, Yes to App Router.

**Step 2: Verify it runs**

```bash
cd nextjs-site
npm run dev
```

Expected: Dev server starts on `http://localhost:3000`, shows default Next.js page.

**Step 3: Stop the dev server (Ctrl+C)**

**Step 4: Commit**

```bash
git init
git add -A
git commit -m "chore: scaffold Next.js project with TypeScript and Tailwind"
```

---

### Task 2: Configure Tailwind with Stitch Design Tokens

**Files:**
- Modify: `nextjs-site/tailwind.config.ts`
- Modify: `nextjs-site/src/app/globals.css`

**Step 1: Read the Stitch Tailwind config**

Read `stitch-export/index.html` lines 10–79 to extract the full color/font/radius config.

**Step 2: Update tailwind.config.ts**

Replace the default config with the Stitch design tokens:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "outline-variant": "#cfc5bb",
        "error-container": "#ffdad6",
        "surface-container-highest": "#e4e2dd",
        "tertiary-fixed": "#f0e0cc",
        "secondary-fixed": "#d9eaa3",
        "secondary-fixed-dim": "#bdce89",
        "inverse-primary": "#d1c5b7",
        "surface-dim": "#dbdad5",
        "inverse-on-surface": "#f2f1ec",
        "surface-container-high": "#eae8e3",
        "surface-container": "#f0eee9",
        "inverse-surface": "#30312e",
        "surface-container-low": "#f5f3ee",
        "secondary": "#56642b",
        "on-primary-container": "#baaea1",
        "surface-variant": "#e4e2dd",
        "surface-bright": "#fbf9f4",
        "secondary-container": "#d6e7a1",
        "on-primary-fixed": "#211b12",
        "outline": "#7d766e",
        "on-error": "#ffffff",
        "on-primary-fixed-variant": "#4e453b",
        "on-primary": "#ffffff",
        "on-surface": "#1b1c19",
        "primary-fixed": "#eee0d2",
        "surface-container-lowest": "#ffffff",
        "error": "#ba1a1a",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#5a682f",
        "on-tertiary-container": "#bdae9c",
        "on-error-container": "#93000a",
        "primary-fixed-dim": "#d1c5b7",
        "on-surface-variant": "#4c463f",
        "on-secondary-fixed": "#161f00",
        "background": "#fbf9f4",
        "surface-tint": "#665d52",
        "primary-container": "#4a4238",
        "on-tertiary-fixed": "#221a0e",
        "on-background": "#1b1c19",
        "tertiary-container": "#4c4234",
        "tertiary": "#352c1f",
        "primary": "#332c23",
        "tertiary-fixed-dim": "#d3c4b1",
        "on-secondary-fixed-variant": "#3e4c16",
        "surface": "#fbf9f4",
        "on-tertiary-fixed-variant": "#4f4537",
        "on-tertiary": "#ffffff",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
      fontFamily: {
        headline: ["Noto Serif", "serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")],
};
export default config;
```

**Step 3: Install Tailwind plugins**

```bash
npm install @tailwindcss/forms @tailwindcss/container-queries
```

**Step 4: Update globals.css**

Replace contents of `src/app/globals.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-background text-on-surface font-body;
  }
  h1, h2, h3, h4 {
    @apply font-headline;
  }
}

/* Material Symbols */
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
```

**Step 5: Verify build**

```bash
npm run build
```

Expected: Build succeeds with no errors.

**Step 6: Commit**

```bash
git add -A
git commit -m "feat: configure Tailwind with Stitch MD3 design tokens"
```

---

### Task 3: Set Up Google Fonts & Layout Shell

**Files:**
- Modify: `nextjs-site/src/app/layout.tsx`

**Step 1: Update the root layout with fonts and metadata**

```typescript
import type { Metadata } from "next";
import { Noto_Serif, Inter } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-headline",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Mariyam (Mari) Isa, PhD | Forensic Anthropologist",
  description:
    "Assistant Professor of Anthropology at Texas Tech University. Director, ARID Laboratory. Forensic fractography, inclusive identification, and medicolegal casework.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${notoSerif.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface font-body antialiased">
        {children}
      </body>
    </html>
  );
}
```

**Step 2: Update tailwind.config.ts font families to use CSS variables**

Change the fontFamily section to:

```typescript
fontFamily: {
  headline: ["var(--font-headline)", "serif"],
  body: ["var(--font-body)", "sans-serif"],
  label: ["var(--font-body)", "sans-serif"],
},
```

**Step 3: Verify dev server shows correct fonts**

```bash
npm run dev
```

Open `http://localhost:3000`, inspect the page — body should use Inter, headings Noto Serif.

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: configure Google Fonts (Noto Serif + Inter) and root layout"
```

---

### Task 4: Configure Static Export for Vercel

**Files:**
- Modify: `nextjs-site/next.config.mjs` (or `next.config.ts`)

**Step 1: Enable static export**

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
```

**Step 2: Verify static build**

```bash
npm run build
```

Expected: Build succeeds and creates `out/` directory with static HTML files.

**Step 3: Commit**

```bash
git add -A
git commit -m "chore: configure static export for Vercel deployment"
```

---

## Phase 2: Shared Components

### Task 5: Build the Navigation Component

**Files:**
- Create: `nextjs-site/src/components/Nav.tsx`

**Step 1: Read the nav structure from `site/index.html`**

The nav is: sticky top, `bg-[#f9f9f8]/80 backdrop-blur-xl`, logo "Dr. Mari Isa" (Noto Serif, italic), links to 5 pages, mailto CTA, Google Scholar button, mobile hamburger menu.

**Step 2: Create Nav.tsx**

Build a React component that matches the existing nav structure. Include:
- Logo linking to `/`
- Desktop links: Home, ARID Lab, Research, Teaching, Service & Impact
- Mobile hamburger toggle with slide-down menu
- "Contact" mailto link and "Google Scholar" external link button
- `usePathname()` from `next/navigation` for active link highlighting
- Sticky positioning with glassmorphic blur

**Important:** The contact email is `mari.isa@ttu.edu` (from CV). The Google Scholar link should be left as a placeholder `#` until verified with Dr. Isa.

**Step 3: Verify in browser — nav renders on all viewport sizes**

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add sticky glassmorphic navigation component"
```

---

### Task 6: Build the Footer Component

**Files:**
- Create: `nextjs-site/src/components/Footer.tsx`

**Step 1: Read footer structure from `site/index.html`**

Footer is: `bg-[#eeeeed]`, centered layout, nav links (same 5 pages), copyright "© 2026 Dr. Mari Isa", social icons (email, Google Scholar, ResearchGate).

**Step 2: Create Footer.tsx**

Build matching React component. Links:
- Email: `mari.isa@ttu.edu` (CV p.1)
- Google Scholar: placeholder `#` (needs verification)
- ResearchGate: placeholder `#` (needs verification)
- CV PDF link: placeholder `#` (the CV references a TTU institutional profile)

**Step 3: Verify in browser**

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add footer component with social links"
```

---

### Task 7: Port the Floating Table of Contents

**Files:**
- Create: `nextjs-site/src/components/TableOfContents.tsx`
- Create: `nextjs-site/src/lib/siteMap.ts`

**Step 1: Read the existing TOC implementation**

Read `site/js/toc.js` (691 lines). Key behaviors to port:
- `siteMap` data structure (6 pages, each with section IDs and labels)
- Desktop: fixed right panel, glassmorphic, 210px wide, expandable page sections
- Mobile: circular pill button → bottom sheet overlay
- Scrollspy on `h2[id]` elements with 100px offset
- IntersectionObserver to hide TOC during hero section
- Minimized state persisted in localStorage
- Escape key closes/minimizes

**Step 2: Create siteMap.ts**

```typescript
export interface SiteSection {
  id: string;
  text: string;
}

export interface SitePage {
  path: string;
  label: string;
  sections: SiteSection[];
}

export const siteMap: SitePage[] = [
  {
    path: "/",
    label: "Home",
    sections: [
      { id: "integrated-scholar", text: "Integrated Scholar" },
      { id: "about", text: "About" },
      { id: "laboratory-experience", text: "Laboratory Experience" },
      { id: "the-arid-lab", text: "The ARID Lab" },
      { id: "key-research", text: "Key Research" },
    ],
  },
  {
    path: "/research",
    label: "Research",
    sections: [
      { id: "active-investigations", text: "Active Investigations" },
      { id: "fractography-book", text: "FBI Fractography Guide" },
      { id: "selected-publications", text: "Publications (12)" },
      { id: "books-and-chapters", text: "Books & Chapters (4)" },
      { id: "research-reports", text: "Research Reports" },
      { id: "conference-activity", text: "Conference Activity (35)" },
      { id: "research-funding", text: "Research Funding" },
    ],
  },
  {
    path: "/teaching",
    label: "Teaching",
    sections: [
      { id: "curriculum-excellence", text: "Courses (9)" },
      { id: "student-mentorship", text: "Student Mentorship (20+)" },
    ],
  },
  {
    path: "/service-impact",
    label: "Service & Impact",
    sections: [
      { id: "professional-leadership", text: "Professional Leadership" },
      { id: "workshops-lectures", text: "Workshops & Lectures" },
      { id: "advocacy-community", text: "Advocacy & Community" },
      { id: "archaeological-fieldwork", text: "Archaeological Fieldwork" },
      { id: "university-service", text: "University Service" },
      { id: "peer-review", text: "Peer Review" },
      { id: "casework", text: "Casework Record (61)" },
    ],
  },
  {
    path: "/arid-lab",
    label: "ARID Lab",
    sections: [
      { id: "our-mission", text: "Mission" },
      { id: "affiliated-faculty", text: "Affiliated Faculty" },
      { id: "notable-publications", text: "Notable Publications" },
      { id: "join-the-lab", text: "Join the Lab" },
    ],
  },
  {
    path: "/privacy",
    label: "Privacy Policy",
    sections: [],
  },
];
```

**Step 3: Create TableOfContents.tsx**

Port the full TOC from `site/js/toc.js` to React. Must include:
- `"use client"` directive (uses hooks, DOM APIs, localStorage)
- `usePathname()` to detect current page
- `useState` for minimized state (init from localStorage)
- `useEffect` for scrollspy (IntersectionObserver + scroll listener)
- Desktop panel: fixed right, glassmorphic, collapsible sections with chevrons
- Minimized tab: vertical text, right edge
- Mobile pill: 44px circle, bottom-right
- Mobile overlay: bottom sheet, scrim backdrop
- All CSS as Tailwind classes (inline) matching the existing style values
- Keyboard: Escape to close/minimize

**Step 4: Add TOC to root layout**

In `layout.tsx`, import and render `<TableOfContents />` after `{children}`.

**Step 5: Verify in browser at multiple viewports**

- Desktop (1440px): TOC panel visible on right, sections expand/collapse
- Desktop minimized: click X, panel collapses to vertical tab
- Mobile (375px): pill button bottom-right, tap opens bottom sheet
- Scroll: active section highlights update

**Step 6: Commit**

```bash
git add -A
git commit -m "feat: port floating table of contents from vanilla JS to React"
```

---

## Phase 3: Page Implementation

> **CRITICAL RULE FOR ALL PAGES:** Every piece of text must come from `docs/content-brief-grounded.md`. Open the Content Brief, find the exact text, use it. Do not paraphrase, summarize, or embellish.

### Task 8: Pull Clean Stitch HTML (if needed)

Before building pages, attempt to get clean full-body HTML from Stitch. The previous export was truncated.

**Step 1: Try the Stitch MCP tools (if available in this session)**

```
Use get_screen_code with projectId "3618720275764106223" and each screenId from the table above.
```

If MCP tools aren't available, use CLI:

```bash
export STITCH_API_KEY="$(cat ~/.config/stitch/api-key)"
npx -y @_davideast/stitch-mcp tool get_screen_code \
  -d '{"projectId": "3618720275764106223", "screenId": "880990f23bfd4ff1bfa5b3fe8ce8190d"}' \
  -o raw
```

**Step 2: Save the HTML to `stitch-export/` (overwriting truncated files)**

**Step 3: If Stitch pull fails, use the existing `/site/*.html` files as layout reference**

The existing site in `/site/` has the complete layout structure. Use it as a visual/structural reference for building React components. The key layout patterns are:

- **Section rhythm:** Alternating `bg-surface` / `bg-surface-container-low` with `py-24` or `py-32`
- **Grid patterns:** `grid md:grid-cols-2/3/4 gap-6/8/12` for responsive layouts
- **Hero pattern:** `min-h-[80vh] flex items-center` or `grid lg:grid-cols-12 gap-12`
- **Card pattern:** Rounded containers with `bg-surface-container-low` or `bg-surface`
- **Stats pattern:** `grid grid-cols-2 sm:grid-cols-4 gap-4` with large number + label

---

### Task 9: Build Homepage (`/`)

**Files:**
- Create: `nextjs-site/src/app/page.tsx`

**Step 1: Read Content Brief sections needed**

From `docs/content-brief-grounded.md`, gather:
- Identity & Contact (name, title, department, institution)
- Recognition — Integrated Scholar 2025–2026
- Education (PhD, MA, dual BS)
- Employment (all 4 roles)
- Verified statistics table
- Selected publications for preview cards (FBI pub + COSAGE)
- Laboratory Experience entries

**Step 2: Build the page with these sections (in order)**

1. **Hero** — h1: "Dr. Mariyam Isa" (from CV p.1). Subtitle: "Assistant Professor of Anthropology, Texas Tech University. Director, ARID Laboratory." CTA buttons.
2. **Integrated Scholar Banner** — "2025–2026 Integrated Scholar" (from Provost letter). Note: say "selected by Office of the Provost" — do NOT say "one of six university-wide" (flagged as unverified).
3. **Bio Section** — Use CV-grounded facts only. Mention: PhD from MSU (NSF GRFP funded), FBI Laboratory publication, NIST OSAC Executive Secretary, 4 current roles at TTU.
4. **Statistics Strip** — 12 peer-reviewed articles | 61 forensic cases | 20+ students mentored | 7 courses developed (all from Verified Statistics table).
5. **Key Research Preview** — Two cards: (a) Forensic Fractography — link to FBI pub, (b) Inclusive Identification — COSAGE guide. Use ONLY descriptions from the Content Brief.
6. **Organizations Engaged** — Label: "Organizations Engaged" (NOT "Affiliations" — per Flag 10 decision). Show: NIST OSAC, FBI, DPAA, NYC OCME.
7. **Contact CTA** — Email: `mari.isa@ttu.edu`, "Join the Lab" button linking to `/arid-lab#join-the-lab`.

**Step 3: Add `id` attributes to each `<section>` h2 matching the siteMap**

```
integrated-scholar, about, laboratory-experience, the-arid-lab, key-research
```

**Step 4: Verify in browser — all sections render, TOC scrollspy works**

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: build homepage with grounded content"
```

---

### Task 10: Build Research Page (`/research`)

**Files:**
- Create: `nextjs-site/src/app/research/page.tsx`

**Step 1: Read Content Brief sections**

- Publications — Peer-Reviewed Articles (all 12)
- Publications — Books & Book Chapters (all 4)
- Publications — Research Reports (2)
- Conference Presentations (count: 35)
- Grants, Honors & Awards (research grants table)

**Step 2: Build page sections**

1. **Hero** — "The Research Portfolio"
2. **Research Pillars** — 3 cards: Forensic Fractography & Biomechanics, Inclusive Identification (COSAGE), Cold Case Resolution. Descriptions from Content Brief only.
3. **Active Investigations** — 3 cards matching Content Brief entries (NSF GRFP/NIJ project, COSAGE, Cold Cases). Use ONLY the publication titles and descriptions from the CV.
4. **FBI Publication Feature** — "A Guide to Forensic Fractography of Bone" (2022). Pull quote from the publication itself (the existing site has a verified quote from the book — confirm it matches the source).
5. **Selected Publications** — All 12 peer-reviewed articles, listed with full citation from CV pp.1–2. Organized by theme (Fractography/Biomechanics, Inclusive ID, Ethics/Cold Case).
6. **Books & Chapters** — All 4 entries from CV p.2.
7. **Research Reports** — 2 entries from CV p.2.
8. **Conference Activity** — Summary: "35 presentations at 24 AAFS meetings, 6 regional forensic conferences, and 5 other venues (2013–2025)." All numbers from CV count.
9. **Research Funding** — Table of 4 active grants + fellowships/awards. All from CV pp.2–3.

**Step 3: Add section `id` attributes matching siteMap**

**Step 4: Verify — all publications render correctly, no missing entries**

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: build research page with all 12 publications"
```

---

### Task 11: Build ARID Lab Page (`/arid-lab`)

**Files:**
- Create: `nextjs-site/src/app/arid-lab/page.tsx`

**Step 1: Read Content Brief sections**

- Laboratory Experience (ARID Lab entry: 2021–present)
- Forensic Casework (all case counts)
- Affiliated Faculty (from TTU ARID Lab page)

**Step 2: Build page sections**

1. **Hero** — "Anthropology Research & IDentification Laboratory"
2. **Mission** — Use the official ARID Lab TTU page text: "We conduct research, provide graduate academic training, and offer forensic anthropology and archaeology casework services to requesting law enforcement agencies and medicolegal professionals."
3. **Casework Stats** — 61 total cases | 20+ counties | Active since 2014 (from Verified Statistics).
4. **Service Categories** — 4 cards: Medicolegal Significance, Biological Profile, Trauma Analysis, Search & Recovery. Descriptions from the TTU ARID Lab page (these are official).
5. **Affiliated Faculty** — 4 members. For each: name + ARID role from TTU page. For titles beyond that, verify from each person's own TTU faculty page first (per Flag 8 decision). If unverifiable, show name + role only.
6. **Notable Publications** — 2 cards highlighting Edwards & Isa 2024 and Blatt, Isa et al. 2025. Full citations from CV.
7. **Join the Lab** — Application window info ("M.A. applications typically reviewed in December for following Fall"). Contact: `mari.isa@ttu.edu`. No FAQ answers (per Flag 9 decision — facts only).

**Step 3: Add section `id` attributes matching siteMap**

**Step 4: Verify in browser**

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: build ARID Lab page with casework stats and faculty"
```

---

### Task 12: Build Teaching Page (`/teaching`)

**Files:**
- Create: `nextjs-site/src/app/teaching/page.tsx`

**Step 1: Read Content Brief sections**

- Teaching (all courses from CV p.5)
- Student Mentorship (all entries from CV pp.5–6)
- Grants — Outstanding Faculty Mentor Award (CV p.2)
- The verified quote from *American Anthropologist* 2022

**Step 2: Build page sections**

1. **Hero** — "Pedagogy & Purpose" with verified quote (Flag 7 decision): "The field of forensic anthropology can and should conceptualize professional ethical behavior beyond so-called scientific objectivity and justice beyond the court system." — *American Anthropologist*, 2022
2. **Mentor Award** — "2022 Outstanding Faculty Mentor Award — TTU Center for Transformative Undergraduate Experiences" (CV p.2).
3. **Courses** — 7 TTU courses + 2 MSU courses. For each: course code, name, level (UG/Grad), years. **For descriptions: attempt to pull from TTU course catalog. If unavailable, list code + name + years only** (Flag 4 decision).
4. **Student Mentorship Stats** — 20+ students mentored (Flag 5 decision).
5. **Thesis Chair** — List all 5 from CV (Edwards 2023, Unger 2024, Leeah/Taylor/Sanchez in progress, Howard non-thesis 2024).
6. **Undergraduate Mentees** — Lebechi, Finch, Knysz/Curry, Wainer — with their project titles and outcomes exactly as stated in CV.

**Step 3: Add section `id` attributes matching siteMap**

**Step 4: Verify in browser**

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: build teaching page with courses and mentorship"
```

---

### Task 13: Build Service & Impact Page (`/service-impact`)

**Files:**
- Create: `nextjs-site/src/app/service-impact/page.tsx`

**Step 1: Read Content Brief sections**

- Service (all entries from CV p.7)
- Workshops, Trainings & Invited Lectures (CV p.6)
- Archaeological Experience (CV p.9)
- Forensic Casework (CV pp.7–8)

**Step 2: Build page sections**

1. **Hero** — "Service & Impact — Beyond the Lab"
2. **Professional Leadership** — NIST OSAC Executive Secretary (2024–present), AAFS Standards Board (2025–present), conference co-organizer (2022–2026), OSAC member (2023–present), OERR subcommittee (2020–present). All from CV p.7.
3. **Workshops & Lectures** — All 9 entries from CV p.6. Group by: Federal/Institutional, Professional Education, Public Engagement, Law Enforcement Training.
4. **Advocacy & Community** — Trans Doe Task Force collaboration. Reference the COSAGE guide (Blatt, Isa et al. 2025) and the TRANScending webinar (2021). Use Flag 3 decision language: "shifting the forensic anthropological paradigm to incorporate the transgender and gender diverse community."
5. **Archaeological Fieldwork** — Italy (3 entries), Belize (2 entries), USA (1 entry). All from CV p.9.
6. **University Service** — 5 entries from CV p.7.
7. **Peer Review** — Journals (4), Grant proposals (2), Book chapters (1). All from CV p.7.
8. **Casework Record** — 61 total cases. Expert witness testimony (1, Winkler Co. 2025). Texas (19 entries, 2021–2025), Michigan (41 entries, 2014–2019). Summarize by jurisdiction count.

**Step 3: Add section `id` attributes matching siteMap**

**Step 4: Verify in browser**

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: build service and impact page with full casework record"
```

---

### Task 14: Build Privacy Policy Page (`/privacy`)

**Files:**
- Create: `nextjs-site/src/app/privacy/page.tsx`

**Step 1: Read the existing privacy policy from `site/privacy.html`**

This is a utility page. The content is standard privacy policy language (not CV-sourced). It's acceptable to use the existing privacy page text as-is since it's legal boilerplate, not biographical claims.

**Step 2: Build a simple single-column page**

- h1: "Privacy Policy"
- 6 sections: Introduction, Information Collection, Use of Information, Academic & Research Context, External Links, Contact
- Use `data-no-hero="true"` on `<main>` so TOC appears immediately (matching existing behavior)

**Step 3: Verify in browser**

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add privacy policy page"
```

---

## Phase 4: Visual Polish & Responsive Testing

### Task 15: Responsive Testing & Fixes

**Files:**
- Modify: All page files as needed

**Step 1: Test every page at 3 viewports**

Use Playwright MCP or browser dev tools:
- Desktop: 1440×900
- Tablet: 768×1024
- Mobile: 375×812

**Step 2: Check these specific things on each page**

- [ ] Nav hamburger works on mobile
- [ ] All grids collapse properly (4-col → 2-col → 1-col)
- [ ] Text is readable at all sizes (no overflow, no tiny text)
- [ ] TOC desktop panel doesn't overlap content
- [ ] TOC mobile pill is visible and tappable
- [ ] Stats numbers are prominently displayed
- [ ] All links work (internal navigation between pages)
- [ ] Section IDs match siteMap for scrollspy

**Step 3: Fix any issues found**

**Step 4: Commit**

```bash
git add -A
git commit -m "fix: responsive layout adjustments for tablet and mobile"
```

---

### Task 16: Dark Mode Implementation

**Files:**
- Modify: `nextjs-site/src/app/layout.tsx` (add theme toggle)
- Create: `nextjs-site/src/components/ThemeToggle.tsx`

**Step 1: Add dark mode color overrides**

The Stitch config uses `darkMode: "class"`. Add dark variants to key elements:
- Background: `dark:bg-inverse-surface` (`#30312e`)
- Text: `dark:text-inverse-on-surface` (`#f2f1ec`)
- Surfaces: appropriate dark token variants

**Step 2: Create a theme toggle button**

Small icon button in the nav that toggles `dark` class on `<html>`. Persist in localStorage.

**Step 3: Test dark mode on all pages**

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: implement dark mode with theme toggle"
```

---

## Phase 5: Deployment

### Task 17: Push to GitHub

**Files:**
- Create: `.gitignore` (should already exist from create-next-app)

**Step 1: Create GitHub repository**

```bash
cd /Users/shayisa/Vibecode-projects/maris-website/nextjs-site
gh repo create mari-isa-website --public --source=. --push
```

**Step 2: Verify repo is accessible on GitHub**

**Step 3: No additional commit needed**

---

### Task 18: Deploy to Vercel

**Files:**
- Create: `nextjs-site/vercel.json` (if needed)

**Step 1: Link the project to Vercel**

```bash
cd /Users/shayisa/Vibecode-projects/maris-website/nextjs-site
npx vercel link
```

Follow prompts to link to Shay's Vercel account.

**Step 2: Deploy to production**

```bash
npx vercel --prod
```

Expected: Vercel builds the static export and returns a production URL.

**Step 3: Verify the live site**

Open the Vercel URL in a browser. Check:
- [ ] All 6 pages load
- [ ] Navigation works between pages
- [ ] TOC works (desktop and mobile)
- [ ] Fonts load (Noto Serif + Inter)
- [ ] Colors match the Stitch design system
- [ ] All content matches the Content Brief

**Step 4: Commit the Vercel config if any was generated**

```bash
git add -A
git commit -m "chore: add Vercel deployment config"
git push
```

---

### Task 19: Custom Domain (Optional)

**Step 1: Ask Shay if there's a custom domain for Dr. Isa's site**

If yes:
```bash
npx vercel domains add <domain>
```

Follow DNS configuration instructions from Vercel.

---

## Phase 6: Content Verification Gate

### Task 20: Final Grounding Audit

**This is the most important task. Do not skip it.**

**Step 1: Open `docs/content-brief-grounded.md` side by side with each page**

**Step 2: For EVERY piece of text on the site, verify:**

- [ ] The text exists in the Content Brief
- [ ] It matches the Content Brief exactly (no rewording)
- [ ] Numbers match the Verified Statistics table
- [ ] All 10 flag decisions are correctly implemented
- [ ] No editorialized language ("leading voice," "groundbreaking," etc.)
- [ ] No inferred claims
- [ ] Organizations are labeled "Organizations Engaged" (not "Affiliations")
- [ ] Student count says "20+" (not "24")
- [ ] Casework count says "61" (not "55")
- [ ] Teaching quote is from *American Anthropologist* 2022 (not the unverified philosophy)
- [ ] No course descriptions unless pulled from official TTU catalog

**Step 3: Document any discrepancies and fix them**

**Step 4: Final commit**

```bash
git add -A
git commit -m "fix: final grounding audit - all content verified against CV"
git push
```

---

## Summary

| Phase | Tasks | What It Delivers |
|-------|-------|-----------------|
| 1. Scaffolding | 1–4 | Next.js project with Stitch design tokens, fonts, static export |
| 2. Components | 5–7 | Nav, Footer, Floating TOC (ported from existing JS) |
| 3. Pages | 8–14 | All 6 pages built with grounded content |
| 4. Polish | 15–16 | Responsive fixes + dark mode |
| 5. Deploy | 17–19 | GitHub repo + Vercel production deployment |
| 6. Verification | 20 | Final grounding audit against Content Brief |

**Total: 20 tasks across 6 phases.**

---

*Plan version: 1.0 — April 14, 2026*
*Author: Claude Code for Shay*
