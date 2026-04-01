# Design System Specification: The Academic Editorial

## 1. Overview & Creative North Star
**Creative North Star: The Curated Monograph**

This design system moves away from the "web portal" aesthetic and toward the feel of a high-end, limited-edition academic monograph. It is designed to frame intellectual contribution as an art form. By leveraging intentional asymmetry, expansive whitespace, and a "content-first" hierarchy, we transform a portfolio into a digital exhibition.

The system rejects the rigidity of standard bootstrap-style grids. Instead, it embraces **layered depth** and **tonal transitions**. The goal is to make the interface feel invisible, allowing the user's research, field photography, and portraits to act as the primary structural pillars.

---

## 2. Colors: Tonal Atmosphere
The palette is rooted in a "Warm Minimalist" philosophy. We use sophisticated, desaturated tones to provide a sense of history and authority, accented by feminine, jewel-toned depths.

### The "No-Line" Rule
**Traditional 1px borders are strictly prohibited for sectioning.** 
Structural separation must be achieved through background shifts. For example, a section transition should move from `surface` (#f9f9f8) to `surface-container-low` (#f4f4f3). This creates a "soft-edge" transition that feels more premium and less mechanical.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, fine-paper sheets.
- **Base Layer:** `surface` (#f9f9f8).
- **Secondary Content Areas:** `surface-container` (#eeeeed).
- **Interactive/Floating Elements:** `surface-container-lowest` (#ffffff) to provide a subtle "lift" against the off-white background.

### The Glass & Gradient Rule
To prevent the UI from feeling "flat," use **Glassmorphism** for navigation bars and floating action cards. Use `surface` colors at 80% opacity with a `20px` backdrop-blur. 
*   **Signature Accent:** Apply a subtle linear gradient (from `primary` #361c36 to `primary-container` #4e314d) for high-impact CTAs to add "soul" and dimension.

---

## 3. Typography: Authority meets Accessibility
The typographic pairing is a conversation between tradition (The Professor) and modernity (The Researcher).

*   **Refined Serif (Noto Serif):** Used for all `display` and `headline` tokens. This conveys the weight of academic tradition. Use `display-lg` for hero headers to create an editorial, "magazine-cover" feel.
*   **Clean Sans-Serif (Manrope):** Used for `title`, `body`, and `label` tokens. It provides a contemporary contrast that ensures high readability for long-form research papers or case studies.

**Typographic Intent:**
- **Asymmetry:** Align `display-lg` headers to the far left, while offsetting the corresponding `body-lg` text to the right-center of the grid to create visual tension and interest.

---

## 4. Elevation & Depth: Tonal Layering
We avoid the "shadow-heavy" look of standard Material Design in favor of **Ambient Presence.**

*   **The Layering Principle:** Depth is achieved by "stacking." A `surface-container-lowest` card placed on a `surface-container-high` background creates a natural focal point without a single drop shadow.
*   **Ambient Shadows:** If a floating element requires a shadow (e.g., a modal), use an ultra-diffused shadow: `box-shadow: 0 20px 40px rgba(77, 68, 75, 0.06);`. The shadow color uses a low-opacity tint of `on-surface-variant` rather than pure black to maintain a natural look.
*   **The "Ghost Border" Fallback:** If accessibility requires a stroke, use `outline-variant` (#d0c3cb) at **15% opacity**. It should be felt, not seen.

---

## 5. Components: Editorial Elements

### Buttons
- **Primary:** `primary` (#361c36) background with `on-primary` (#ffffff) text. Use `rounded-md` (0.375rem) for a tailored, professional look.
- **Secondary:** Transparent background with an `outline` (#7e747b) ghost border.
- **Tertiary:** Text-only using `secondary` (#546253) with an underline that appears only on hover.

### Cards & Lists
- **The "No-Divider" Rule:** Forbid horizontal lines between list items. Use the **Spacing Scale** (`8` or `10`) to create separation through "breathing room."
- **Cards:** Use `surface-container-low` with no border. Imagery within cards should use `rounded-lg` (0.5rem).

### Input Fields
- **Styling:** Minimalist bottom-border only, using `outline-variant`. Upon focus, transition the border color to `primary`. Helper text should always use `label-sm` in `on-surface-variant`.

### Academic-Specific Components
- **The "Field-Note" Chip:** Use `secondary-container` (#d7e7d3) for tags/categories. They should feel organic, using `rounded-full` for a softer, feminine touch.
- **The Pull-Quote:** A custom component using `headline-sm` in `tertiary` (#342200), centered with generous `24` (8.5rem) vertical spacing to break up long research text.

---

## 6. Do's and Don'ts

### Do:
- **Do** use large, "artsy" imagery that overlaps container boundaries (e.g., an image popping out of a `surface-container` box).
- **Do** use `20` (7rem) or `24` (8.5rem) spacing for top-level section padding to emphasize the "Luxury of Space."
- **Do** use `tertiary` (muted gold) for small, meaningful details like icons or bullet points to add a sense of "Award-Winning" prestige.

### Don't:
- **Don't** use pure black (#000000) for text. Always use `on-surface` (#1a1c1c) to keep the contrast sophisticated rather than harsh.
- **Don't** use heavy "Elevated" cards with thick shadows. It breaks the "fine paper" metaphor.
- **Don't** crowd the layout. If you feel the need to add a divider line, try adding `3.5rem` of whitespace instead.
- **Don't** use standard "system" fonts. Stick strictly to the Noto Serif / Manrope pairing to maintain the signature identity.