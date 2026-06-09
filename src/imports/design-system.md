# [NOME APP] — Mobile App Design System & Project File
> **Source of truth per Figma Make.** I token sono estratti dagli screen di riferimento (sezione CONCEPT). Le sezioni PRESENTATION e RESEARCH **ereditano** questi token. Nessuno stile autonomo, nessun valore hardcoded: solo Variables.

---

## 0. DIRETTIVE GLOBALI
- Estetica: **monocromatica brutalist-minimal** (estratta dagli screen: alto contrasto bianco/nero, off-white caldo, accento arancione minimo).
- Frame base **390×844** (iPhone 14/15). Safe area top 59px, bottom 34px.
- Tutto in **Variables/Tokens**. Naming: `color/`, `type/`, `space/`, `radius/`, `elevation/`.
- **Auto Layout obbligatorio** su ogni componente e schermata.

---

## 1. DESIGN TOKENS

### 1.1 Color
*Giustificazione: palette desaturata e ad alto contrasto perché tutti e 4 gli screen rinunciano al colore per spingere la gerarchia tipografica; l'arancione compare solo come segnale (badge notifica screen 3).*

| Token | Hex | Uso |
|---|---|---|
| color/bg | `#F2F1ED` | sfondo schermate (off-white caldo) |
| color/surface | `#FFFFFF` | card chiare, sheet |
| color/surface-inverse | `#0A0A0A` | card scure, CTA primaria, tab attivo |
| color/text-primary | `#0A0A0A` | titoli, body |
| color/text-secondary | `#9A9A95` | label inattive, caption, testo "fantasma" |
| color/text-inverse | `#FFFFFF` | testo su superfici scure |
| color/accent | `#FF7B00` | badge, dot/stati attivi, micro-CTA |
| color/border | `#E2E1DC` | divider, stroke 1px |
| color/success | `#2E7D32` | feedback positivo |
| color/error | `#C0392B` | errori |

> Regola accento: `color/accent` solo su elementi-segnale. Mai su grandi superfici.

### 1.2 Typography
Font: grottesca tight — `Neue Haas Grotesk` / fallback `Inter`. *Tracking negativo sui display: replica il set-tight serrato degli screen 1, 3 e 4.*

| Token | Size / Line | Weight | Tracking | Uso |
|---|---|---|---|---|
| type/display | 40 / 42 | Bold | -2% | hero wordmark/headline |
| type/h1 | 28 / 32 | Semibold | -1% | titoli schermata |
| type/h2 | 22 / 28 | Semibold | -1% | titoli sezione/card |
| type/body | 16 / 24 | Regular | 0 | testo |
| type/label | 14 / 20 | Medium | 0 | label card, bottoni |
| type/caption | 12 / 16 | Regular | 0 | meta, copyright, microtesto |

> Scala 1.25 (minor third), base 16pt. Display fuori scala per impatto editoriale.

### 1.3 Spacing / Radius / Elevation
- Spacing (4pt grid): `space/4 8 12 16 24 32 48`
- Radius: `radius/sm 12` · `radius/md 20` · `radius/lg 28` · `radius/pill 999` *(radius alto = card morbide degli screen 1-3)*
- Elevation/card: shadow Y6 blur 24 opacity 6% *(ombre quasi-flat coerenti col minimal)*
- Stroke: 1px `color/border` su card chiare/sfondo chiaro

---

## 2. COMPONENTI
Variants + states, tutti in Auto Layout.

- **Button** — Primary (bg `surface-inverse`, text `text-inverse`, `radius/pill`) · Secondary (bg `surface`, stroke `border`) · Ghost (solo testo). States: Default / Pressed (scale 0.98) / Disabled (opacity 40%).
- **Card azione** (screen 1, 3) — icona linea + `h2` + sottotitolo `caption`. Variant chiara (`surface`) e scura (`surface-inverse`).
- **Top App Bar** (56px) — leading icon (back / "?"), trailing icon (notifica + badge `accent`).
- **Tab Bar bottom** — 4 voci, icona linea + `caption`. Attivo `text-primary` + indicatore; inattivo `text-secondary`. Variant pill scura flottante (screen 2).
- **Toggle/Switch** — track scuro ON, knob bianco.
- **Stepper** (screen 2) — `-  valore  +` in pill.
- **List item** (screen 2) — label + value a dx + chevron.
- **Search field** — pill, icona lente, placeholder `text-secondary`.
- **Badge notifica** — cerchio `accent`, numero `text-inverse` `caption`.
- **Loyalty row** (screen 1) — icone ripetute + counter "0/5".
- **Menu item testuale** (screen 4) — voce attiva `text-primary` Bold, altre `text-secondary`.

---

## 3. STRUTTURA FILE FIGMA MAKE
3 sezioni che condividono gli stessi token.

### A. PROJECT PRESENTATION
Poster editoriali non-funzionali. A1 Cover (wordmark display + tagline + copyright caption) · A2 Problema & obiettivo · A3 Target & posizionamento.

### B. RESEARCH
Stesso linguaggio visivo. B1 Metodo/fonti · B2 Insight in card numerate · B3 Personas/data (chart in grigi + accento `accent`).

### C. CONCEPT
Schermate reali (sez. 4) dentro mockup device 390×844.

---

## 4. SCHERMATE APP (CONCEPT)
Tutte 390×844, bg `color/bg`.

- **S1 — Home**: Top App Bar (logo sx, profilo dx) · hero wordmark `display` · 2 card azione affiancate (1 chiara + 1 scura) · card larga full-width `surface` · loyalty row · Tab Bar.
- **S2 — Lista/Catalogo**: Top App Bar `h1` + search field · griglia 2 col di card azione · empty state `text-secondary` centrato.
- **S3 — Dettaglio**: header oggetto su `surface` · `h2` + meta · List item con value + chevron + toggle (screen 2) · CTA pill scura sticky bottom.
- **S4 — Controllo/Regolazione** (screen 2): gruppi di chip (attivo = card scura) · stepper/slider in pill · Tab Bar pill attiva scura.
- **S5 — Menu testuale** (screen 4): lista voci tipografiche grandi (attiva `text-primary` Bold) · indice display sx + "*" dx · "back" in basso.

> Coerenza: alternare schermate chiare e accenti scuri come negli screen. Arancione solo come badge/dot.

---

## 5. ACCESSIBILITÀ
Contrasto testo >= 4.5:1 · touch target >= 44x44px · stati attivi non affidati al solo colore (peso/forma).
