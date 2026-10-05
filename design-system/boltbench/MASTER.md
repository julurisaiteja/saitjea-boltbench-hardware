# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Boltbench
**Generated:** 2026-10-04 19:30:28
**Category:** Pharmacy/Drug Store

---

## Global Rules

## Brand Lock (source of truth — overrides generator defaults)

> **Anti-pattern ban:** No AI-purple (#f5c518 / violet stacks), no IBM Plex Sans/Roboto/Arial system defaults.
> Live tokens match the shipped showcase brand.

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary / Accent | `#f5c518` | `--accent` / `--color-primary` / `--color-ring` |
| Secondary | `#1d4ed8` | `--accent2` / `--color-secondary` |
| Background | `#eceef1` | `--bg` / `--color-background` |
| Foreground | `#111827` | `--fg` / `--color-foreground` |
| Muted | `#4b5563` | `--muted` / `--color-muted-foreground` |
| Surface / Card | `#ffffff` | `--surface` / `--color-card` |
| Border | `#cfd5de` | `--border` / `--color-border` |
| On Accent | `#ffffff` | `--color-on-accent` |

### Typography (locked)

- **Display:** Archivo Black
- **Body:** IBM Plex Sans
- **Google Fonts:** already loaded in `app/layout.tsx`

### Layout identity

- **Variant:** `bench`
- **Niche:** hardware
- **Motion craft:** HeroFilm + MotionReveal + CraftStrip (no SKU WebGL turntables)

### Pro Max checklist (must ship)

- [x] Touch targets ≥44×44px on nav, CTA, icon buttons, chat, 3D controls
- [x] Visible `:focus-visible` rings using `--accent`
- [x] `prefers-reduced-motion` disables marquee / float / auto-spin
- [x] SVG icons only (no emoji as UI icons)
- [x] 3D a11y: aria label, keyboard rotate, pause auto-rotate, reduced-motion respect
- [x] cursor-pointer on interactive controls
- [x] Hover transitions 150–300ms
- [x] Contrast: brand fg/bg retained; no gray-on-gray body

---

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |

---

## Component Specs

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: #0369A1;
  color: #FFFFFF;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #15803D;
  border: 2px solid #15803D;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}
```

### Cards

```css
.card {
  background: #F0FDF4;
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-md);
  transition: all 200ms ease;
  cursor: pointer;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

### Inputs

```css
.input {
  padding: 12px 16px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 200ms ease;
}

.input:focus {
  border-color: #15803D;
  outline: none;
  box-shadow: 0 0 0 3px #15803D20;
}
```

### Modals

```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.modal {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--shadow-xl);
  max-width: 500px;
  width: 90%;
}
```

---

## Style Guidelines

**Style:** Flat Design

**Keywords:** 2D, minimalist, bold colors, no shadows, clean lines, simple shapes, typography-focused, modern, icon-heavy

**Best For:** Web apps, mobile apps, cross-platform, startup MVPs, user-friendly, SaaS, dashboards, corporate

**Key Effects:** No gradients/shadows, simple hover (color/opacity shift), fast loading, clean transitions (150-200ms ease), minimal icons

### Page Pattern

**Pattern Name:** Trust & Authority + Conversion

- **Conversion Strategy:** Security badges. Case studies. Transparent pricing. Low-friction form. Provide pause/stop and stop the logo carousel on focus, hover, and reduced motion. Previous/next controls provide the keyboard equivalent; pause offscreen/hidden and render a static logo set under reduced motion.
- **CTA Placement:** Contact Sales / Get Quote (primary) + Nav
- **Section Order:** Hero (mission/credibility) > Proof (logos, certs, stats) > Solution overview > Clear CTA path

---

## Anti-Patterns (Do NOT Use)

- ❌ Confusing layout
- ❌ Privacy concerns
- ❌ AI purple/pink gradients

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile


## Stunning redesign lock
- No SKU WebGL turntables / product pedestals
- Wow from cinema hero, scroll storytelling, craft strips
