# Content Audit Task List
Source of truth: http://www.actionartist.de (German) / http://www.actionartist.de/en/ (English)
Rule: redesign content must match original word-for-word (with better grammar/design). Anything not on original is wrong.

Status values: TODO | IN_PROGRESS | DONE

---

## Already Fixed (before this task list was created)
- [DONE] Biography (DE + EN): Height 1.80m → 1.75m
- [DONE] Biography (DE + EN): Eye colour Brown → Green/Grün
- [DONE] Biography (DE + EN): Clothing size 46 → 48
- [DONE] Biography (DE + EN): Shoe size 44 → 42/43
- [DONE] Biography (DE + EN): Removed Hair colour (not on original)
- [DONE] Biography (DE + EN): Added Figure (Athletic/Sportlich), Hat size (57cm), Trouser size (31–33), Shirt size (M/L), B/W/H (97/85/100)
- [DONE] Biography (DE + EN): Expanded bio text to match original (father, brother details, military service, Friedrichstadtpalast, stunt teams, heart attack, Globe of Speed, Wheel of Death, magician dates)
- [DONE] Biography (DE + EN): Added Sports Activities section (1986–2009 list)

---

## HIGH PRIORITY — Factual Errors

### TASK-001 [DONE]
**File:** `src/pages/en/index.astro`
**Issue:** Felsenbühne Rathen credit says "Winnetou" — original says "Schatterhand"
**Fix:** Replaced "Winnetou" with "Schatterhand" in the English home credits preview grid

### TASK-002 [DONE]
**Files:** `src/pages/credits/index.astro`, `src/pages/en/credits/index.astro`
**Issue:** Fabricated years added — GZSZ labelled "2009", Punchline labelled "2009", Konica Minolta labelled "2007", Software Exact labelled "2007"
**Fix:** Changed all fabricated years to "–" in both DE and EN credits pages

### TASK-003 [DONE]
**Files:** `src/pages/credits/index.astro`, `src/pages/en/credits/index.astro`
**Issue:** "Hollywood" label added to Three Musketeers credit — not on original
**Fix:** Removed "· Hollywood" from Three Musketeers role in both DE and EN credits pages

### TASK-004 [DONE]
**Files:** All contact/impressum pages (9 files)
**Issue:** Address spelling "Hülseweg 5" (without 'n') — original shows "Hülsenweg 5" (with 'n')
**Fix:** sed replace across all 9 affected .astro files → "Hülsenweg 5"

---

## MEDIUM PRIORITY — Missing Content

### TASK-005 [DONE]
**Files:** `src/pages/credits/index.astro`, `src/pages/en/credits/index.astro`
**Issue:** "Weitere Kunden" closing text truncated — missing Messen, Events, Hochzeiten, Werbe-/Image-/Kurzfilme, and named Varieté venues
**Fix:** Added missing items to the grid and added closing note with Varieté venues (Star-Club Kassel, Camelion, Kultur-Palast, Kasematten, Festung Königstein) in both pages

### TASK-006 [DONE]
**File:** `src/pages/index.astro` (German home)
**Issue:** "Letzte Produktionen" missing entries: 2011, 2014, 2015, 2016, 2018, 2020
**Fix:** Added all 6 missing production entries in correct chronological order

### TASK-007 [DONE]
**File:** `src/pages/en/index.astro` (English home)
**Issue:** Same missing productions as TASK-006
**Fix:** Added all missing production entries (translated to English) in chronological order

### TASK-008 [DONE]
**File:** `src/pages/en/skills/index.astro`
**Issue:** S.W.A.T./SEK equipment entry missing — original English skills page lists this
**Fix:** Added "S.W.A.T. / SEK Costumes — Helmets, vests, weapons and suits for 6–8 people" to Equipment section

### TASK-009 [DONE]
**File:** `src/pages/en/skills/index.astro`
**Issue:** Euro trampoline dimensions missing — original English lists "Euro trampoline (4.70m x 3.80m x 1m)"
**Fix:** Added Euro Trampoline with dimensions to Equipment section

---

## LOW PRIORITY — Invented/Extra Content Not on Original

### TASK-010 [DONE]
**Files:** `src/pages/partner/index.astro`, `src/pages/en/partners/index.astro`
**Issue:** All partner bio paragraph descriptions were entirely invented — not on original
**Fix:** Removed all <p class="partner-desc"> fabricated paragraphs from both DE and EN partner pages

### TASK-011 [DONE]
**Files:** `src/pages/partner/index.astro`, `src/pages/en/partners/index.astro`
**Issue:** Andreas Feller's role missing "Kameraman/Cameraman" — listed on original
**Fix:** Added "Kameramann" (DE) and "Cameraman" (EN) to Feller's role in both pages

### TASK-012 [DONE]
**Files:** `src/pages/index.astro`, `src/pages/en/index.astro`
**Issue:** Hero stats block (23+ Jahre, 46+ Produktionen, 12+ Disziplinen, 6 Länder) — fabricated, not on original
**Fix:** Removed the entire hero-stats block from both DE and EN home pages

### TASK-013 [DONE]
**Files:** `src/pages/impressum/index.astro`, `src/pages/en/legal-notice/index.astro`
**Issue:** "Bildnachweis" / "Image Credits" section missing — original has specific pixelio.de attributions
**Fix:** Added full Bildnachweis section with all attributions to both impressum pages

### TASK-014 [DONE]
**Files:** `src/pages/impressum/index.astro`, `src/pages/en/legal-notice/index.astro`
**Issue:** Three blocks not on original: Umsatzsteuer-ID, Berufsbezeichnung, Streitschlichtung (DE) / Professional Title, Dispute Resolution (EN)
**Fix:** Removed all three invented blocks from both impressum pages

---

## ALL TASKS COMPLETE ✓
Last updated: 2026-05-23
