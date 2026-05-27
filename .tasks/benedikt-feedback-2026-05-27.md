# Benedikt Feedback — 27 May 2026

Tasks derived from Benedikt Sterra's feedback message.

---

## Status

- [x] **1. Shrink hero section** — sedcard bar moved inside hero (absolute bottom); hero height 92vh → 80vh, top padding removed; bar now overlays hero bottom edge
- [x] **2. Darken accent color** — `--orange` changed from `#E05A1E` to `#C05218` site-wide in global.css
- [x] **3. Scale down portrait images 50%** — home about-section photo and both biography photos set to `max-width: 50%; margin: auto`
- [x] **4. Add Workshops to header nav** — link added to Layout.astro nav; `/workshops/index.astro` landing page created
- [x] **5. Update address everywhere** — Deubner Str 40c · 01159 Dresden applied to all pages; footer copyright city also updated
- [x] **6. Partner & Kollegen links** — all 7 partners now link to external sites; name spellings fixed (Feiler, Gliwe); DE + EN pages updated
- [x] **7. Skills strip on all heroes** — injected dynamically via Layout.astro JS after any `.page-hero`, with DE/EN labels auto-detected from `html[lang]`
- [x] **8. Fix carousel scroll on PC** — `overflow: hidden` → `overflow-x: auto`, hidden scrollbar, drag-to-scroll JS added via Layout.astro
- [x] **9. Hero image background-position** — changed from `top center` → `center center` in global.css for all page heroes
- [x] **10. Wikipedia footer link** — https://de.wikipedia.org/wiki/Ilian_Simeonow added as pill in footer profiles row
- [ ] **11. Skills & Fertigkeiten production years** — Benedikt will supply the data (skip)
- [ ] **12. DNS / hosting** — DNS via Ionos; reference only, no code change

---

## Notes

- Task 2 (color): Benedikt wrote `rgb(95, 92, 22)` — assumed typo for `rgb(195, 92, 22)`. Used `#C05218` (darker burnt orange). Confirm if different shade needed.
- Task 1 (hero): sedcard bar is now inside `.hero` with `position: absolute; bottom: 0`. Check it doesn't overlap hero-actions on small viewports.
- Task 3 (images): "50% scale" interpreted as `max-width: 50%` of the grid column. Confirm if a different interpretation was intended.
