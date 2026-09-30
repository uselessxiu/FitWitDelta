# Fit-Wit™ Delta — Project Architecture & Developer Walkthrough

This document outlines the refactored production architecture for **Fit-Wit™ Delta** (`1433 Survey Park, Santoshpur, Kolkata 700075`).

---

## 1. Directory Structure

```
FitWitDelta/
├── index.html              # Main semantic HTML5 document with structured data & SEO
├── css/
│   └── style.css           # Design tokens, double-bezel styles, layout, and responsive rules
├── js/
│   └── script.js           # Vanilla JS: dynamic year, mobile menu, lightbox modal, scroll reveal
├── assets/
│   ├── images/             # Dedicated folder for photography assets (with placement guide)
│   └── icons/              # Dedicated folder for brand/system icon assets
└── walkthrough.md          # Architectural guide & maintenance reference
```

---

## 2. Component & Architecture Breakdown

### A. Markup & Semantics (`index.html`)
- **Typography:** Loads Google Fonts (`Plus Jakarta Sans`, `Syne`, `JetBrains Mono`) with preconnect for zero layout shifts.
- **Stylesheet Link:** References `css/style.css` via `<link rel="stylesheet" href="css/style.css">`.
- **Script Link:** References `js/script.js` via `<script src="js/script.js" defer></script>`.
- **Structured Data:** Embedded `<script type="application/ld+json">` declaring `ExerciseGym` LocalBusiness schema with coordinates (`22.4860846, 88.3882514`), opening hours, telephone, and aggregate rating.
- **Section Layout Diversity:** Split Hero, Utilitarian Trust Strip, Editorial About, 4-Step Numbered Approach, 5-Cell Bento Programs Grid, Transformation Caseboard, Community Reviews, Asymmetric Masonry Gallery, Location & Live Hours Timetable, and Calm Closing CTA.

### B. Design System & Styling (`css/style.css`)
- **CSS Variables at `:root`:**
  - `--fw-bg`: `#FBFBFA` (Alabaster canvas)
  - `--fw-text-primary`: `#111215` (Obsidian)
  - `--fw-text-secondary`: `#575965` (Slate-stone)
  - `--fw-border`: `#E4E4E7` (Hairline structural border)
  - `--fw-signal`: `#C8F135` (Kinetic Volt subtle signal accent)
  - `--fw-phone-primary`: `+91 97485 33875`
  - `--fw-phone-secondary`: `+91 70034 56625`
  - `--fw-rating`: `5.0`
- **Haptic Double-Bezel (`.double-bezel` & `.double-bezel-inner`):** Nested machined shells with concentric curvature (`outer 24px, inner 18px`).
- **Button-in-Button Island CTAs (`.btn-island` & `.btn-icon-disc`):** Rounded pills with distinct trailing circular discs and tactile hover physics.
- **Floating Island Navigation (`.nav-island`):** Detached glass capsule with backdrop blur (`blur(20px)`), morphing hamburger icon, and full-screen mobile veil.
- **Responsive Breakpoints:** Fully fluid from 375px mobile, 768px tablet, 960px, to 1280px+ desktop.

### C. Interactive Logic (`js/script.js`)
- **Global Handlers:** `toggleMobileMenu()`, `closeMobileMenu()`, `openLightbox()`, `closeLightbox()`, `handleLightboxClick()` explicitly bound to `window` for reliable inline trigger execution.
- **Dynamic Date:** Auto-populates the current copyright year (`#currentYear`).
- **Scroll Reveals:** Hardware-accelerated `IntersectionObserver` fading elements in via `transform` and `opacity` with `prefers-reduced-motion` compliance.
- **Escape Key Listener:** Smoothly dismisses open modals and mobile drawers.

---

## 3. Verified Business Reference

- **Studio Name:** Fit-Wit™ Delta
- **Address:** 1433 Survey Park, Santoshpur, Kolkata, West Bengal 700075
- **Coordinates:** `22.4860846, 88.3882514`
- **Phone Primary:** `+91 97485 33875`
- **Phone Secondary:** `+91 70034 56625`
- **Email:** `fitwitfs@gmail.com`
- **Instagram:** `@fitwitdelta`
- **Facebook:** `facebook.com/people/Fit-Wit-Delta/100063990924976/`
- **Operating Hours:**
  - Mon – Wed: `06:30 AM – 11:00 PM`
  - Thursday: **CLOSED** (Weekly Maintenance & Reset)
  - Fri – Sat: `06:30 AM – 11:00 PM`
  - Sunday: `06:30 AM – 01:30 PM` (Morning Only)

---

## 4. How to Insert Real Photography

All photographic containers use the `.photo-placeholder-blueprint` system with documented aspect ratios. When verified photographs are available:
1. Save the image file in `assets/images/` (e.g. `assets/images/hero-floor.jpg`).
2. In `index.html`, replace the `.photo-placeholder-blueprint` element with:
   ```html
   <img src="assets/images/hero-floor.jpg" alt="Fit-Wit Delta Training Floor" style="width:100%; height:100%; object-fit:cover;">
   ```
3. The double-bezel container automatically handles edge radii and overflow clipping.
