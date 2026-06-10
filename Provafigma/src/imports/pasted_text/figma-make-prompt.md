# FIGMA MAKE PROMPT — Mobile App Design System
> Incolla questo prompt intero in Figma Make in una nuova sessione.

---

Create a complete Figma Make project for a mobile app (390×844px, iPhone 14/15 format). This is a brutalist-minimal editorial design system. Follow the steps below in exact order — do not skip ahead.

---

## STEP 1 — VARIABLES

Create all design tokens as Figma Variables before building anything. Use these exact names and values.

**Collection: color/**
| Variable name | Value |
|---|---|
| color/bg | #F2F1ED |
| color/surface | #FFFFFF |
| color/surface-inverse | #0A0A0A |
| color/text-primary | #0A0A0A |
| color/text-secondary | #9A9A95 |
| color/text-inverse | #FFFFFF |
| color/accent | #FF7B00 |
| color/border | #E2E1DC |
| color/success | #2E7D32 |
| color/error | #C0392B |

**Collection: type/** (store as number variables)
| Variable name | Value |
|---|---|
| type/display-size | 40 |
| type/display-line | 42 |
| type/h1-size | 28 |
| type/h1-line | 32 |
| type/h2-size | 22 |
| type/h2-line | 28 |
| type/body-size | 16 |
| type/body-line | 24 |
| type/label-size | 14 |
| type/label-line | 20 |
| type/caption-size | 12 |
| type/caption-line | 16 |

**Collection: space/**
| Variable name | Value |
|---|---|
| space/4 | 4 |
| space/8 | 8 |
| space/12 | 12 |
| space/16 | 16 |
| space/24 | 24 |
| space/32 | 32 |
| space/48 | 48 |

**Collection: radius/**
| Variable name | Value |
|---|---|
| radius/sm | 12 |
| radius/md | 20 |
| radius/lg | 28 |
| radius/pill | 999 |

**Collection: elevation/**
| Variable name | Value |
|---|---|
| elevation/card-y | 6 |
| elevation/card-blur | 24 |
| elevation/card-opacity | 6 |

---

## STEP 2 — COMPONENTS

Build each component using Auto Layout. Apply Variables — no hardcoded values. Place all components on a dedicated "🧱 Components" page.

### Button
Three variants in a component set:
- **Primary**: fill `color/surface-inverse`, text `color/text-inverse`, font Inter Semibold 14px, height 52px, horizontal padding `space/24`, corner radius `radius/pill`. Full width with Auto Layout.
- **Secondary**: fill `color/surface`, stroke 1px `color/border`, text `color/text-primary`, same sizing as Primary.
- **Ghost**: no fill, no stroke, text `color/text-primary`, same font.

States for each: Default / Pressed (scale 0.98 effect label) / Disabled (opacity 40%).

### Card — Action
Width: fill container. Height: auto. Padding `space/16`. Corner radius `radius/md`. Shadow: Y6, blur 24, opacity 6%, color #000000. Auto Layout vertical, gap `space/8`.
- **Light variant**: fill `color/surface`, line icon 24×24px (use a simple rounded square placeholder), h2 text `color/text-primary`, caption `color/text-secondary`.
- **Dark variant**: fill `color/surface-inverse`, icon `color/text-inverse`, h2 `color/text-inverse`, caption text `color/text-secondary` at 70% opacity.

### Top App Bar
Height 56px. Width: fill. Auto Layout horizontal, align center, padding horizontal `space/16`. Fill: `color/bg`.
- Leading: back arrow icon 24×24 `color/text-primary`.
- Center: app name text Inter Semibold 16px `color/text-primary`.
- Trailing: bell icon 24×24 with Badge notification (circle 16px fill `color/accent`, text "1" Inter Bold 10px `color/text-inverse`, positioned top-right of icon).

### Tab Bar — Bottom
Height 64px + safe area 34px = 98px total. Width: fill. Fill: `color/surface`. Stroke top 1px `color/border`. Auto Layout horizontal, distributed spacing, padding horizontal `space/8`. 4 tabs: Home · Catalog · Detail · Menu.
- Active tab: icon 24×24 `color/text-primary` + caption label `color/text-primary` Medium.
- Inactive tab: icon + caption `color/text-secondary`.

**Variant — Pill floating**: dark pill `color/surface-inverse`, corner radius `radius/pill`, height 56px, padding horizontal `space/24`. Active item has white fill, others are `color/text-inverse` at 60% opacity.

### Toggle / Switch
Width 51px, height 31px. Track: ON state fill `color/surface-inverse`, OFF state fill `color/border`. Knob: circle 27px fill white, shadow Y2 blur 4 opacity 20%.

### Stepper
Auto Layout horizontal. Pill shape `radius/pill`, height 44px, padding horizontal `space/16`. Fill `color/surface`, stroke `color/border`. Three elements: "–" icon · number value Inter Medium 16px `color/text-primary` · "+" icon. Gap `space/16`.

### List Item
Height 56px. Width: fill. Auto Layout horizontal, align center, padding horizontal `space/16`. Content: label text 16px `color/text-primary` (flex grow) · value text 14px `color/text-secondary` · chevron icon 16×16 `color/text-secondary`. Bottom border 1px `color/border`.

### Search Field
Height 44px. Corner radius `radius/pill`. Fill `color/surface`. Stroke 1px `color/border`. Auto Layout horizontal, padding horizontal `space/16`, gap `space/8`. Contents: magnifying glass icon 16×16 `color/text-secondary` · placeholder text 14px `color/text-secondary` "Cerca...".

### Badge Notification
Circle 20px. Fill `color/accent`. Label Inter Bold 10px `color/text-inverse` centered.

### Loyalty Row
Auto Layout horizontal, gap `space/8`, height 44px, padding `space/16`. 5 circle icons 32×32px (fill `color/border` when empty, fill `color/surface-inverse` when filled). Counter label "0/5" Inter Medium 14px `color/text-secondary` at right end.

### Menu Item — Textual
Height 64px. Width: fill. Auto Layout horizontal, align center, padding horizontal `space/16`. 
- Active: text Inter Bold 22px `color/text-primary`.
- Inactive: text Inter Regular 22px `color/text-secondary`.

---

## STEP 3 — CONCEPT SCREENS (C. CONCEPT page)

Create a new page called "C. CONCEPT". Place 5 frames side by side with 48px gap. Each frame: 390×844px, fill `color/bg`, corner radius 0, clip content ON.

### S1 — Home
Auto Layout vertical, no gap (sections stacked).

1. **Top App Bar** (instance from component): logo text "R" Inter Bold 20px left, profile circle 32px right.
2. **Hero section** — padding `space/24`, padding-top 48px: wordmark text "Readiness" Inter Bold 40px `color/text-primary` letter-spacing -2%, line height 42px. Below: tagline Inter Regular 16px `color/text-secondary` "La tua prossimità al prossimo evento." padding-bottom `space/32`.
3. **Two action cards side by side** — Auto Layout horizontal, gap `space/12`, padding horizontal `space/16`: Left card (light, width fill): "Inizia" h2 + "Evento in 5 giorni" caption. Right card (dark, width fill): "Simulatore" h2 + "Prova ora" caption.
4. **Full-width card** — padding `space/16`, margin `space/16`: "Il tuo piano" h2 + progress row with 3 dots (2 filled `color/surface-inverse`, 1 empty `color/border`) + "Sessione 3 di 5" caption.
5. **Loyalty row** (instance) — padding `space/16`.
6. **Spacer** flex grow.
7. **Tab Bar** (instance, default variant) — pinned bottom.

### S2 — Catalog / Lista
Auto Layout vertical.

1. **Top App Bar**: title "Catalogo" Inter Semibold 28px `color/text-primary` (h1 style).
2. **Search field** (instance) — margin `space/16`, full width minus padding.
3. **Grid 2 columns** — Auto Layout horizontal wrap, gap `space/12`, padding `space/16`: 4 action cards (alternating light/dark), each ~172px wide.
4. **Empty state area** below grid: text centered "Nessun risultato" Inter Regular 16px `color/text-secondary`.
5. **Tab Bar** pill floating variant (instance) — centered horizontally, bottom `space/24` from bottom edge.

### S3 — Detail
Auto Layout vertical.

1. **Top App Bar**: back arrow left, "Dettaglio" center, bell+badge right.
2. **Header card** — full width, fill `color/surface`, corner radius 0, padding `space/24`: title Inter Semibold 22px `color/text-primary` "Triage d'ingresso" + meta Inter Regular 12px `color/text-secondary` "F01 · I01".
3. **List items** (3 instances): "Quanto conta?" / "Routine → Importante → Decisivo" / chevron. "Familiarità?" / "Conosco bene" / toggle ON. "Tempo/giorno?" / "15 min" / chevron.
4. **Divider** 1px `color/border`.
5. **Body text** padding `space/24`: Inter Regular 16px `color/text-primary` line height 24px, 3 lines of lorem text about the feature.
6. **CTA sticky bottom** — full width pill button Primary (instance): "Avvia preparazione". Bottom safe area `space/32`.

### S4 — Control / Regolazione
Auto Layout vertical.

1. **Top App Bar**: "Sessione" title.
2. **Chip group** — Auto Layout horizontal wrap, gap `space/8`, padding `space/16`: 4 chips. Active chip: fill `color/surface-inverse`, text `color/text-inverse`, `radius/pill`, height 36px, padding horizontal `space/16`. Inactive: fill `color/surface`, stroke `color/border`, text `color/text-primary`.
3. **Section label** — Inter Medium 12px `color/text-secondary` uppercase tracking 0.08em "INTENSITÀ" padding horizontal `space/16`.
4. **Stepper** (instance) — centered, margin `space/16`.
5. **Slider pill** — full width minus `space/32`, height 44px, `radius/pill`, fill `color/surface`, stroke `color/border`. Track fill `color/surface-inverse` 60% width. Thumb circle 28px fill white shadow.
6. **Section label**: "DURATA".
7. **Three list items** with toggle instances.
8. **Tab Bar** pill floating variant (instance) — bottom `space/24`.

### S5 — Textual Menu
Auto Layout vertical. Padding `space/32`.

1. **Index display** — Inter Bold 40px `color/text-secondary` letter-spacing -2%: "01" left aligned.
2. **Menu items list** (instances, vertical Auto Layout gap `space/4`): 6 items — "Profilo" (active, Bold `color/text-primary`), "Storico", "Impostazioni", "Fonti", "Abbonamento", "Supporto" (all inactive `color/text-secondary`).
3. **Asterisk decoration** — Inter Regular 40px `color/text-secondary` "*" aligned right, same vertical position as index.
4. **Spacer** flex grow.
5. **Back link** — "← Indietro" Inter Regular 14px `color/text-secondary` bottom left.

---

## STEP 4 — RESEARCH PAGE (B. RESEARCH)

Create page "B. RESEARCH". Three frames 390×844px side by side, 48px gap. Same `color/bg` fill. Reuse components.

### B1 — Metodo / Fonti
Auto Layout vertical, padding `space/32`.

1. **Label** Inter Medium 12px `color/text-secondary` uppercase "METODO DI RICERCA".
2. **Title** Inter Bold 40px `color/text-primary` letter-spacing -2%: "Come\nabbiamo\nlavorato."
3. **Divider** 1px `color/border` margin vertical `space/24`.
4. **Three method blocks** (Auto Layout vertical, gap `space/16`): Each block: number "01/02/03" Inter Bold 12px `color/accent` · title Inter Semibold 16px `color/text-primary` · description Inter Regular 14px `color/text-secondary` line height 20px.
   - 01: "Sondaggio" · "40 rispondenti, campione Design/UX 65%."
   - 02: "Interviste" · "3 interviste semi-strutturate (Edoardo, Giardi, Alessandro)."
   - 03: "Benchmark" · "8 strumenti competitor analizzati."
5. **Footer caption** Inter Regular 12px `color/text-secondary` bottom: "Giugno 2026 · Progetto Readiness".

### B2 — Insight Cards
Auto Layout vertical, padding `space/16`.

1. **Label** "INSIGHT CHIAVE" style as above.
2. **Seven cards** (use Card Action component, light variant, stacked vertically, gap `space/8`). Each card: number tag "I01"–"I07" Inter Bold 10px `color/accent` top-left inside card · headline Inter Semibold 14px `color/text-primary` · one-line data Inter Regular 12px `color/text-secondary`.
   - I01: "Struttura prima del tempo" · "52% bloccato dal 'non so da dove iniziare'."
   - I02: "L'AI non chiude il ciclo" · "Utenti AI: 3.14/5 vs non-AI: 3.61/5."
   - I03: "Ansia pre-evento, non performance" · "Non preparati: 2.71 attesa → 3.07 reale."
   - I04: "FOMO informativa" · "55% si aggiorna su Instagram/TikTok/X."
   - I05: "Rehearsal senza resistenza" · "42% prova mentalmente, risultati identici."
   - I06: "Prima l'esperienza, poi il prezzo" · "62% non ha mai pagato. Chi ha pagato: 'valeva'."
   - I07: "Le fonti fanno la sicurezza" · "Confermato da 2 intervistati in modo indipendente."

### B3 — Personas / Data
Auto Layout vertical, padding `space/32`.

1. **Label** "USER PERSONAS".
2. **Three persona blocks** (gap `space/24`). Each block Auto Layout horizontal, gap `space/16`:
   - Left: circle avatar 48×48px fill `color/border` · below: name Inter Semibold 14px `color/text-primary` · role Inter Regular 12px `color/text-secondary`.
   - Right: quote Inter Regular 14px `color/text-secondary` italic, line height 20px. Below: 2 stat pills (Auto Layout horizontal, gap `space/8`): pill `radius/pill` height 24px padding horizontal `space/12`, fill `color/surface`, stroke `color/border`, text Inter Medium 11px `color/text-primary`.
3. **Data bar chart** (manual construction, Auto Layout horizontal, gap `space/4`, align bottom): 5 bars, widths proportional to data. Bar fill: `color/surface-inverse` for primary, `color/border` for others. Height: tallest bar 80px. Labels below each bar: Inter Regular 10px `color/text-secondary`.
4. **Accent annotation**: one small dot 8px fill `color/accent` with line to bar.

---

## STEP 5 — PRESENTATION PAGE (A. PROJECT PRESENTATION)

Create page "A. PROJECT PRESENTATION". Three frames 390×844px, 48px gap. Editorial/poster style. No UI chrome (no Tab Bar, no App Bar).

### A1 — Cover
Fill `color/surface-inverse` (dark poster). Auto Layout vertical, padding `space/48`, justify space-between.

1. **Top row** Auto Layout horizontal, space-between: monogram "R" Inter Bold 20px `color/text-inverse` · year "2026" Inter Regular 14px `color/text-secondary`.
2. **Center block**: wordmark "Readiness" Inter Bold 40px `color/text-inverse` letter-spacing -2% · below: tagline Inter Regular 16px at 60% white opacity "App mobile per la prontezza professionale." · accent line: 2px tall, 40px wide, fill `color/accent`, margin-top `space/16`.
3. **Bottom row** Auto Layout horizontal, space-between: caption "Progetto Tesi · Giugno 2026" `color/text-secondary` 12px · caption "Design / UX" `color/text-secondary` 12px.

### A2 — Problema & Obiettivo
Fill `color/bg`. Auto Layout vertical, padding `space/32`, gap `space/32`.

1. **Label** "PROBLEMA" Inter Medium 12px `color/text-secondary` uppercase.
2. **Problem statement** Inter Bold 28px `color/text-primary` letter-spacing -1% line-height 32px:
   "I professionisti non riescono a prepararsi agli eventi chiave perché non sanno da dove iniziare."
3. **Divider** 1px `color/border`.
4. **Label** "OBIETTIVO".
5. **Objective statement** Inter Semibold 22px `color/text-primary`: "Costruire un piano automatico, calibrato sul contesto — togliere il 'da dove inizio'."
6. **Accent block** — fill `color/accent`, `radius/sm`, padding `space/16`: text Inter Medium 14px `color/text-inverse` "7 funzioni · 3 tier · Content engine classificato per dominio."

### A3 — Target & Posizionamento
Fill `color/bg`. Auto Layout vertical, padding `space/32`, gap `space/24`.

1. **Label** "TARGET PRIMARIO".
2. **Three target rows** (List Item component instances, no chevron variant): "Professionisti autonomi" / "25–40 anni, Design/Marketing/Tech" / "Freelance e titolari" — each with accent dot `color/accent` 8px left.
3. **Divider**.
4. **Label** "POSIZIONAMENTO".
5. **2×2 matrix** (manual, 280×280px, Auto Layout grid): quadrant lines 1px `color/border`, axis labels Inter Regular 10px `color/text-secondary`: top "Alto contenuto", bottom "Basso contenuto", left "Bassa struttura", right "Alta struttura". Dot 12px fill `color/accent` positioned top-right quadrant. Label "Readiness" Inter Medium 12px `color/text-primary` next to dot.
6. **Caption** Inter Regular 12px `color/text-secondary`: "Nessun competitor combina struttura del piano + qualità delle fonti dichiarata."

---

## FINAL INSTRUCTIONS

- Use Auto Layout on every frame, section, and component. No manual positioning.
- Apply Variables everywhere — no hardcoded hex values or pixel values where a variable exists.
- Font: Inter throughout (Neue Haas Grotesk if available, Inter as fallback).
- Display text (40px): letter-spacing -2%. H1 (28px): -1%. All others: 0.
- Accent color `#FF7B00` only on: badge numbers, insight number tags, accent lines/dots, CTA accent block. Never as a large fill.
- All cards: shadow Y6 blur 24 opacity 6% color #000000.
- Layer naming: use the component/section names from this document exactly.
- Page order: 🧱 Components · A. PROJECT PRESENTATION · B. RESEARCH · C. CONCEPT.

---

*Prompt generato da design-system.md · Progetto Readiness · Giugno 2026*
