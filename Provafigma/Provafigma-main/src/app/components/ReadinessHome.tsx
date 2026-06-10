import { useState, ReactNode } from "react";

const BG = "#FFFFFF";
const BLACK = "#0A0A0A";
const WHITE = "#FFFFFF";
const GRAY = "#8E8E89";
const SURFACE = "#FBFAF6";
const BORDER = "#E4E3DD";
const ACCENT = "#E8FF5A";
const GREEN = "#1A6B3C";
const GREEN_BG = "#EBF5EF";
const AMBER = "#7A5700";
const AMBER_BG = "#FDF6E3";

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={BLACK} strokeWidth="1.8" strokeLinecap="round">
      <line x1="4" y1="8" x2="20" y2="8" />
      <line x1="4" y1="16" x2="14" y2="16" />
    </svg>
  );
}

function BellIcon({ badge }: { badge?: boolean }) {
  return (
    <div style={{ position: "relative", display: "inline-flex" }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={BLACK} strokeWidth="1.8" strokeLinecap="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
      {badge && (
        <div style={{
          position: "absolute", top: -3, right: -3,
          width: 9, height: 9, borderRadius: "50%",
          backgroundColor: BLACK, border: `1.5px solid ${BG}`,
        }} />
      )}
    </div>
  );
}

function ArrowRight({ color = BLACK, size = 18 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function ArrowLeft({ color = BLACK, size = 18 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={BLACK} strokeWidth="1.8" strokeLinecap="round">
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}

function PlayIcon({ color = BLACK }: { color?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={color} stroke="none">
      <polygon points="6 4 20 12 6 20 6 4" />
    </svg>
  );
}

function MicIcon({ color = BLACK }: { color?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round">
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="22" />
    </svg>
  );
}

function ChevronDown({ open, color = BLACK }: { open?: boolean; color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round"
      style={{ transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "none" }}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function Accordion({
  label, hint, defaultOpen = false, dark = false, children,
}: {
  label: string; hint?: string; defaultOpen?: boolean; dark?: boolean; children: ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const bg = dark ? "rgba(255,255,255,0.05)" : WHITE;
  const border = dark ? "rgba(255,255,255,0.12)" : BORDER;
  const fg = dark ? WHITE : BLACK;
  const gr = dark ? "rgba(255,255,255,0.5)" : GRAY;
  return (
    <div style={{
      backgroundColor: bg, border: `1px solid ${border}`,
      borderRadius: 14, overflow: "hidden",
    }}>
      <button onClick={() => setOpen(!open)} style={{
        width: "100%", padding: "14px 16px",
        backgroundColor: "transparent", border: "none", cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        textAlign: "left",
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <span style={{
            fontSize: 13, fontWeight: 600, color: fg, letterSpacing: "-0.01em",
          }}>
            {label}
          </span>
          {hint && (
            <span style={{ fontSize: 11, color: gr, fontWeight: 400 }}>{hint}</span>
          )}
        </div>
        <ChevronDown open={open} color={fg} />
      </button>
      {open && (
        <div style={{
          padding: "0 16px 16px",
          borderTop: `0.5px solid ${border}`,
          paddingTop: 14,
        }}>
          {children}
        </div>
      )}
    </div>
  );
}

function CheckIcon({ color = WHITE }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function HomeTabIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? BLACK : GRAY} strokeWidth={active ? 2 : 1.5} strokeLinecap="round">
      <path d="M3 9L12 2L21 9V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9z" />
    </svg>
  );
}
function PlanTabIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? BLACK : GRAY} strokeWidth={active ? 2 : 1.5} strokeLinecap="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
function SimulateTabIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? BLACK : GRAY} strokeWidth={active ? 2 : 1.5} strokeLinecap="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
function ProfileTabIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? BLACK : GRAY} strokeWidth={active ? 2 : 1.5} strokeLinecap="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

const TABS = [
  { label: "Home", Icon: HomeTabIcon },
  { label: "Piano", Icon: PlanTabIcon },
  { label: "Simula", Icon: SimulateTabIcon },
  { label: "Profilo", Icon: ProfileTabIcon },
];

function ScoreRing({ value, size = 132, stroke = 10, light = false }: { value: number; size?: number; stroke?: number; light?: boolean }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={light ? "#E4E3DD" : "rgba(255,255,255,0.12)"} strokeWidth={stroke} />
        <circle
          cx={size / 2} cy={size / 2} r={r}
          fill="none" stroke={light ? BLACK : ACCENT} strokeWidth={stroke}
          strokeDasharray={c} strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{ fontSize: size * 0.29, fontWeight: 700, color: light ? BLACK : WHITE, letterSpacing: "-0.03em", lineHeight: 1 }}>
          {value}<span style={{ fontSize: size * 0.13, color: light ? GRAY : "rgba(255,255,255,0.5)" }}>%</span>
        </div>
        <div style={{ fontSize: 9, color: light ? GRAY : "rgba(255,255,255,0.45)", letterSpacing: "0.12em", marginTop: 4 }}>
          READY
        </div>
      </div>
    </div>
  );
}

function PhoneFrame({ label, children, bg = BG }: { label: string; children: ReactNode; bg?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
      <div
        style={{
          width: 390,
          height: 844,
          backgroundColor: bg,
          borderRadius: 50,
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 8px #2A2A2A",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{
          position: "absolute", top: 14, left: "50%", transform: "translateX(-50%)",
          width: 120, height: 34, backgroundColor: BLACK, borderRadius: 20, zIndex: 10,
        }} />
        <div style={{ height: 59, flexShrink: 0 }} />
        {children}
      </div>
      <div style={{
        marginTop: 24, fontSize: 11, color: GRAY,
        letterSpacing: "0.16em", textTransform: "uppercase",
      }}>
        {label}
      </div>
    </div>
  );
}

function TabBar({ active }: { active: number }) {
  return (
    <div style={{
      backgroundColor: WHITE,
      borderTop: `1px solid ${BORDER}`,
      display: "flex",
      paddingBottom: 20,
      paddingTop: 8,
      flexShrink: 0,
    }}>
      {TABS.map((tab, i) => (
        <div key={tab.label} style={{
          flex: 1, display: "flex", flexDirection: "column", alignItems: "center",
          gap: 4, padding: "4px 0",
        }}>
          <tab.Icon active={active === i} />
          <span style={{
            fontSize: 10,
            fontWeight: active === i ? 600 : 400,
            color: active === i ? BLACK : GRAY,
          }}>
            {tab.label}
          </span>
        </div>
      ))}
    </div>
  );
}

// ───────────────────────── HOME SCREEN ─────────────────────────
function HomeScreen() {
  const score = 42;
  const daysLeft = 12;
  const [sourcesOpen, setSourcesOpen] = useState(false);
  return (
    <>
      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 20px 4px" }}>
          <MenuIcon />
          <BellIcon badge />
        </div>

        <div style={{ padding: "16px 20px 4px" }}>
          <div style={{ fontSize: 12, color: GRAY, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            CIAO SIMONE
          </div>
          <div style={{
            fontSize: 56, fontWeight: 800, color: BLACK,
            letterSpacing: "-0.045em", lineHeight: 0.9,
            textTransform: "uppercase", marginTop: 6,
          }}>
            READI<br />NESS.
          </div>
        </div>

        <div style={{
          margin: "20px 16px 0", backgroundColor: BLACK,
          borderRadius: 24, padding: "20px 18px 22px",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                Prossimo evento
              </div>
              <div style={{ fontSize: 19, fontWeight: 700, color: WHITE, letterSpacing: "-0.02em", marginTop: 6, lineHeight: 1.15 }}>
                Talent Garden<br />Talk · AI & Lavoro
              </div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                marginTop: 12, padding: "5px 10px",
                border: "1px solid rgba(255,255,255,0.18)", borderRadius: 100,
                fontSize: 11, color: "rgba(255,255,255,0.85)",
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: ACCENT }} />
                Tra {daysLeft} giorni · Mer 17 giu
              </div>
            </div>
            <ScoreRing value={score} />
          </div>

          <div style={{
            marginTop: 18, paddingTop: 14,
            borderTop: "1px solid rgba(255,255,255,0.12)",
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", lineHeight: 1.5, maxWidth: 220 }}>
              Punto critico: <span style={{ color: WHITE }}>basi di AI generativa</span>
            </div>
            <ArrowRight color={WHITE} />
          </div>
        </div>

        <div style={{
          margin: "10px 16px 0", backgroundColor: ACCENT,
          borderRadius: 20, padding: "16px 18px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 40, height: 40, borderRadius: "50%", backgroundColor: BLACK,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <PlayIcon color={ACCENT} />
            </div>
            <div>
              <div style={{ fontSize: 10, color: "rgba(10,10,10,0.6)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Oggi · 15 min
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: BLACK, letterSpacing: "-0.02em", marginTop: 2 }}>
                Giorno 3 — Cosa è un LLM
              </div>
            </div>
          </div>
          <ArrowRight />
        </div>

        <div style={{ margin: "10px 16px 0" }}>
          <button onClick={() => setSourcesOpen((v) => !v)} style={{
            width: "100%", padding: "14px 16px",
            backgroundColor: WHITE, border: `1px solid ${BORDER}`, borderRadius: 16,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            cursor: "pointer", fontFamily: "inherit",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10, backgroundColor: SURFACE,
                border: `1px solid ${BORDER}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, fontWeight: 600, color: BLACK,
              }}>
                5
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  Fonti di oggi
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: BLACK, marginTop: 2 }}>
                  2 accademiche · 3 giornalismo specializzato
                </div>
              </div>
            </div>
            <div style={{
              fontSize: 18, color: BLACK,
              transform: sourcesOpen ? "rotate(45deg)" : "none",
              transition: "transform 150ms",
            }}>+</div>
          </button>

          {sourcesOpen && (
            <div style={{
              marginTop: 8, padding: 14,
              backgroundColor: SURFACE, border: `1px solid ${BORDER}`, borderRadius: 14,
            }}>
              {[
                { kind: "Accademica", title: "Stanford CRFM — Foundation Models report", meta: "Paper · 2023" },
                { kind: "Accademica", title: "Bender & Koller — Climbing towards NLU", meta: "ACL · paper" },
                { kind: "Giornalismo", title: "MIT Tech Review — How LLMs really work", meta: "Long-form · 2024" },
                { kind: "Ricerca lab", title: "Anthropic — Mapping the mind of a model", meta: "Research note" },
                { kind: "Osservatorio", title: "PoliMi — AI nelle imprese italiane", meta: "Report · 2025" },
              ].map((src) => (
                <div key={src.title} style={{
                  display: "flex", gap: 10, paddingBottom: 10, marginBottom: 10,
                  borderBottom: `1px solid ${BORDER}`,
                }}>
                  <div style={{
                    minWidth: 78, height: 20, padding: "0 8px", borderRadius: 4, flexShrink: 0,
                    backgroundColor: src.kind === "Accademica" ? BLACK : "#E4E3DD",
                    color: src.kind === "Accademica" ? WHITE : BLACK,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 9, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase",
                  }}>{src.kind}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, color: BLACK, lineHeight: 1.35 }}>{src.title}</div>
                    <div style={{ fontSize: 10, color: GRAY, marginTop: 2 }}>{src.meta}</div>
                  </div>
                </div>
              ))}
              <div style={{ fontSize: 10, color: GRAY, lineHeight: 1.5 }}>
                Solo fonti accademiche, ricerca dei lab, osservatori e giornalismo specializzato verificato. Niente social, niente sintesi di terze parti.
              </div>
            </div>
          )}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, padding: "10px 16px 0" }}>
          <div style={{
            backgroundColor: WHITE, border: `1px solid ${BORDER}`,
            borderRadius: 18, padding: "14px 14px 16px", minHeight: 124,
            display: "flex", flexDirection: "column", justifyContent: "space-between",
          }}>
            <div>
              <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Check-in
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: BLACK, letterSpacing: "-0.01em", marginTop: 6, lineHeight: 1.25 }}>
                2 minuti<br />per tenere traccia
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 10, color: GRAY, letterSpacing: "0.06em" }}>INIZIA</span>
              <ArrowRight />
            </div>
          </div>

          <div style={{
            backgroundColor: BLACK, borderRadius: 18,
            padding: "14px 14px 16px", minHeight: 124,
            display: "flex", flexDirection: "column", justifyContent: "space-between",
          }}>
            <div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Simula
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: WHITE, letterSpacing: "-0.01em", marginTop: 6, lineHeight: 1.25 }}>
                Elevator pitch<br />· 60 secondi
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: "0.06em" }}>AVVIA</span>
              <ArrowRight color={WHITE} />
            </div>
          </div>
        </div>

        <div style={{ margin: "10px 16px 0" }}>
          <Accordion label="Dove sei forte / debole" hint="3 aree · tocca per vedere">
            {[
              { label: "Basi tecniche AI", value: 28 },
              { label: "Casi d'uso & impatto lavoro", value: 55 },
              { label: "Costruzione del discorso", value: 40 },
            ].map((item) => (
              <div key={item.label} style={{ marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: BLACK, marginBottom: 5, letterSpacing: "-0.01em" }}>
                  <span>{item.label}</span>
                  <span style={{ color: GRAY }}>{item.value}%</span>
                </div>
                <div style={{ height: 4, backgroundColor: "#E4E3DD", borderRadius: 2, overflow: "hidden" }}>
                  <div style={{ width: `${item.value}%`, height: "100%", backgroundColor: BLACK }} />
                </div>
              </div>
            ))}
          </Accordion>
        </div>

        <div style={{
          margin: "10px 16px 16px", backgroundColor: WHITE,
          border: `1px solid ${BORDER}`, borderRadius: 16, padding: "12px 16px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div>
            <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.14em", textTransform: "uppercase" }}>
              Piano
            </div>
            <div style={{ fontSize: 13, fontWeight: 600, color: BLACK, marginTop: 2 }}>
              Entusiasta · Free
            </div>
          </div>
          <div style={{
            fontSize: 11, fontWeight: 500, color: BLACK,
            border: `1px solid ${BLACK}`, borderRadius: 20, padding: "5px 12px",
          }}>
            Passa a Pro
          </div>
        </div>
      </div>
      <TabBar active={0} />
    </>
  );
}

// ───────────────────────── ABOUT YOU — shared question card ─────────────────────────
function AboutQuestion({
  step, total, eyebrow, question, options, selected, ctaLabel = "Continua",
}: {
  step: number; total: number;
  eyebrow: string; question: string;
  options: { label: string; sub?: string; selected?: boolean }[];
  selected?: number; ctaLabel?: string;
}) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 20px" }}>
      {/* Top: close + progress bar */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "10px 0 18px" }}>
        <CloseIcon />
        <div style={{ flex: 1, height: 8, backgroundColor: BORDER, borderRadius: 100, overflow: "hidden" }}>
          <div style={{
            width: `${(step / total) * 100}%`, height: "100%",
            backgroundColor: BLACK, borderRadius: 100,
          }} />
        </div>
      </div>

      <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.18em", textTransform: "uppercase", marginTop: 8 }}>
        {eyebrow}
      </div>
      <div style={{
        fontSize: 28, fontWeight: 700, color: BLACK,
        letterSpacing: "-0.025em", lineHeight: 1.15, marginTop: 10, marginBottom: 24,
      }}>
        {question}
      </div>

      {/* Options */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10, overflowY: "auto", minHeight: 0 }}>
        {options.map((o, i) => {
          const on = selected === i;
          return (
            <div key={o.label} style={{
              padding: "16px 18px",
              backgroundColor: on ? BLACK : WHITE,
              color: on ? WHITE : BLACK,
              border: `1.5px solid ${on ? BLACK : BORDER}`,
              borderRadius: 16,
              display: "flex", alignItems: "center", gap: 14,
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                backgroundColor: on ? ACCENT : SURFACE,
                border: on ? "none" : `1px solid ${BORDER}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 12, fontWeight: 700, color: BLACK,
              }}>
                {String.fromCharCode(65 + i)}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: "-0.01em" }}>
                  {o.label}
                </div>
                {o.sub && (
                  <div style={{
                    fontSize: 11, marginTop: 2,
                    color: on ? "rgba(255,255,255,0.55)" : GRAY,
                  }}>
                    {o.sub}
                  </div>
                )}
              </div>
              {on && (
                <div style={{
                  width: 22, height: 22, borderRadius: "50%",
                  backgroundColor: ACCENT,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <CheckIcon color={BLACK} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div style={{ paddingTop: 24, paddingBottom: 28 }}>
        <button style={{
          width: "100%", padding: "18px 0", border: "none",
          backgroundColor: selected !== undefined ? BLACK : "#C9C8C2",
          color: WHITE, borderRadius: 100,
          fontSize: 15, fontWeight: 600, cursor: "pointer",
        }}>
          {ctaLabel}
        </button>
      </div>
    </div>
  );
}

function AboutQ1() {
  return (
    <AboutQuestion
      step={1} total={4}
      eyebrow="Domanda 1 / 4"
      question="Perché sei qui?"
      selected={1}
      options={[
        { label: "Devo affrontare un evento specifico", sub: "Talk, colloquio, presentazione" },
        { label: "Voglio essere sempre pronto", sub: "Networking, meeting, riunioni ricorrenti" },
        { label: "Mi blocco quando devo parlare in pubblico", sub: "Cerco un metodo per non andare nel panico" },
        { label: "Curioso, sto esplorando" },
      ]}
    />
  );
}

function AboutQ2() {
  return (
    <AboutQuestion
      step={2} total={4}
      eyebrow="Domanda 2 / 4"
      question="Quanto tempo al giorno puoi dedicare?"
      selected={1}
      options={[
        { label: "5 minuti", sub: "Solo l'essenziale" },
        { label: "15 minuti", sub: "Consigliato — sessione completa" },
        { label: "30 minuti", sub: "Voglio andare a fondo" },
        { label: "Variabile", sub: "Mi adatto giorno per giorno" },
      ]}
    />
  );
}

function AboutQ3() {
  return (
    <AboutQuestion
      step={3} total={4}
      eyebrow="Domanda 3 / 4"
      question="Cosa ti rallenta di più oggi?"
      selected={0}
      options={[
        { label: "Non so da dove iniziare", sub: "Troppe cose, nessuna gerarchia" },
        { label: "Trovo le cose, ma non le ricordo dopo", sub: "Accumulo senza fissare" },
        { label: "So le cose, ma non so dirle", sub: "Mi manca la forma" },
        { label: "Tutto insieme" },
      ]}
    />
  );
}

function AboutQ4() {
  return (
    <AboutQuestion
      step={4} total={4}
      eyebrow="Domanda 4 / 4"
      question="Con che frequenza hai eventi importanti?"
      selected={2}
      ctaLabel="Crea il mio profilo"
      options={[
        { label: "Quasi ogni settimana" },
        { label: "Un paio al mese" },
        { label: "Uno ogni qualche mese" },
        { label: "Raramente, ma quando capita conta" },
      ]}
    />
  );
}

// ───────────────────────── ONBOARDING 1 — WELCOME ─────────────────────────
function OnboardingWelcome() {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 20px" }}>
      <div style={{ padding: "8px 0", display: "flex", justifyContent: "flex-end" }}>
        <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.1em" }}>Salta</div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", overflowY: "auto", minHeight: 0 }}>
        <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>
          Benvenuto
        </div>
        <div style={{
          fontSize: 72, fontWeight: 800, color: BLACK,
          letterSpacing: "-0.05em", lineHeight: 0.88,
          textTransform: "uppercase",
        }}>
          READI<br />NESS.
        </div>
        <div style={{
          fontSize: 17, color: BLACK, lineHeight: 1.4,
          letterSpacing: "-0.015em", marginTop: 28, maxWidth: 320,
        }}>
          Arriva a ogni evento sapendo cosa dire — e sapendo di saperlo.
        </div>

        <div style={{
          marginTop: 28, padding: "16px 18px",
          backgroundColor: SURFACE, border: `1px solid ${BORDER}`, borderRadius: 16,
        }}>
          <div style={{ fontSize: 12, color: GRAY, lineHeight: 1.55 }}>
            Un sistema che trasforma quello che impari in <span style={{ color: BLACK, fontWeight: 600 }}>prontezza misurabile</span>, giorno per giorno fino all'evento.
          </div>
        </div>
      </div>

      <div style={{ paddingBottom: 28 }}>
        <button style={{
          width: "100%", padding: "18px 0", border: "none",
          backgroundColor: BLACK, color: WHITE, borderRadius: 100,
          fontSize: 15, fontWeight: 600, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
        }}>
          Inizia il tour <ArrowRight color={WHITE} size={16} />
        </button>
        <div style={{ textAlign: "center", marginTop: 14, fontSize: 12, color: GRAY }}>
          Ho già un account · <span style={{ color: BLACK, textDecoration: "underline" }}>Accedi</span>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 18 }}>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} style={{
              width: i === 0 ? 18 : 6, height: 6, borderRadius: 4,
              backgroundColor: i === 0 ? BLACK : BORDER,
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ───────────────────────── ONBOARDING 2 — HOW IT WORKS ─────────────────────────
function OnboardingHowItWorks() {
  const steps = [
    { n: "01", t: "Dichiari il prossimo evento", d: "Data e tipo. Niente argomenti — li capiamo dal contesto." },
    { n: "02", t: "Ricevi un piano", d: "Micro-sessioni da 10–15 minuti al giorno fino al giorno X." },
    { n: "03", t: "Arrivi pronto", d: "Un readiness score ti dice dove sei forte e dove sei debole." },
  ];
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0" }}>
        <ArrowLeft />
        <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.1em" }}>2 / 6</div>
      </div>

      <div style={{ flex: 1, paddingTop: 40, overflowY: "auto", minHeight: 0 }}>
        <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>
          Come funziona
        </div>
        <div style={{
          fontSize: 36, fontWeight: 700, color: BLACK,
          letterSpacing: "-0.035em", lineHeight: 1.02,
        }}>
          Tre mosse.<br />Dichiari, alleni,<br />arrivi pronto.
        </div>

        <div style={{ marginTop: 36 }}>
          {steps.map((s, i, arr) => (
            <div key={s.n} style={{
              display: "flex", gap: 18, paddingBottom: 22, marginBottom: 22,
              borderBottom: i < arr.length - 1 ? `0.5px solid ${BORDER}` : "none",
            }}>
              <div style={{
                fontSize: 11, color: GRAY, letterSpacing: "0.1em",
                paddingTop: 3, width: 24, flexShrink: 0,
              }}>
                {s.n}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 17, fontWeight: 600, color: BLACK, letterSpacing: "-0.02em" }}>
                  {s.t}
                </div>
                <div style={{ fontSize: 13, color: GRAY, lineHeight: 1.55, marginTop: 6 }}>
                  {s.d}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ paddingBottom: 28 }}>
        <button style={{
          width: "100%", padding: "18px 0", border: "none",
          backgroundColor: BLACK, color: WHITE, borderRadius: 100,
          fontSize: 15, fontWeight: 600, cursor: "pointer",
        }}>
          Avanti
        </button>
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 18 }}>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} style={{
              width: i === 1 ? 18 : 6, height: 6, borderRadius: 4,
              backgroundColor: i === 1 ? BLACK : BORDER,
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ───────────────────────── ONBOARDING 3 — SOURCES ─────────────────────────
function OnboardingSources() {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0" }}>
        <ArrowLeft />
        <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.1em" }}>3 / 6</div>
      </div>

      <div style={{ flex: 1, paddingTop: 30, overflowY: "auto" }}>
        <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>
          Le fonti
        </div>
        <div style={{
          fontSize: 32, fontWeight: 700, color: BLACK,
          letterSpacing: "-0.03em", lineHeight: 1.05,
        }}>
          Niente feed.<br />Gerarchia.
        </div>
        <div style={{ fontSize: 13, color: GRAY, lineHeight: 1.55, marginTop: 14, maxWidth: 320 }}>
          Non aggregiamo notizie. Selezioniamo cosa, per il tuo evento, vale davvero la pena sapere.
        </div>

        {/* Source tiers */}
        <div style={{ marginTop: 26 }}>
          {[
            { tier: "01", label: "Fonti primarie", desc: "Paper, documentazione ufficiale, testi originali degli speaker.", weight: 100 },
            { tier: "02", label: "Editoriale verificato", desc: "Riviste di settore, newsletter curate, analisti riconosciuti.", weight: 70 },
            { tier: "03", label: "Voci di mercato", desc: "Post di addetti ai lavori, casi aziendali pubblicati.", weight: 40 },
            { tier: "—", label: "Social grezzi", desc: "Esclusi: feed, thread non verificati, hot take.", weight: 0, off: true },
          ].map((s) => (
            <div key={s.tier} style={{
              padding: "14px 0", borderBottom: `0.5px solid ${BORDER}`,
              opacity: s.off ? 0.5 : 1,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <div style={{ display: "flex", gap: 10, alignItems: "baseline" }}>
                  <span style={{ fontSize: 11, color: GRAY, letterSpacing: "0.1em" }}>{s.tier}</span>
                  <span style={{
                    fontSize: 14, fontWeight: 600, color: BLACK, letterSpacing: "-0.015em",
                    textDecoration: s.off ? "line-through" : "none",
                  }}>
                    {s.label}
                  </span>
                </div>
              </div>
              <div style={{ fontSize: 12, color: GRAY, lineHeight: 1.5, marginTop: 4, paddingLeft: 22 }}>
                {s.desc}
              </div>
              <div style={{ height: 3, backgroundColor: "#E4E3DD", borderRadius: 2, marginTop: 10, marginLeft: 22, overflow: "hidden" }}>
                <div style={{ width: `${s.weight}%`, height: "100%", backgroundColor: BLACK }} />
              </div>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div style={{
          marginTop: 22,
          fontSize: 14, color: BLACK, lineHeight: 1.45,
          letterSpacing: "-0.015em", fontWeight: 500,
          borderLeft: `2px solid ${BLACK}`, paddingLeft: 14,
        }}>
          "Questa settimana, per il tuo evento, vale la pena sapere queste 3 cose."
        </div>
      </div>

      <div style={{ paddingBottom: 28, paddingTop: 16 }}>
        <button style={{
          width: "100%", padding: "18px 0", border: "none",
          backgroundColor: BLACK, color: WHITE, borderRadius: 100,
          fontSize: 15, fontWeight: 600, cursor: "pointer",
        }}>
          Avanti
        </button>
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 18 }}>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} style={{
              width: i === 2 ? 18 : 6, height: 6, borderRadius: 4,
              backgroundColor: i === 2 ? BLACK : BORDER,
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ───────────────────────── ONBOARDING 4 — READINESS SCORE ─────────────────────────
function OnboardingScore() {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 20px", backgroundColor: BLACK }}>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "16px 0" }}>
        <ArrowLeft color={WHITE} />
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>4 / 6</div>
      </div>

      <div style={{ flex: 1, paddingTop: 30, overflowY: "auto" }}>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>
          Readiness score
        </div>
        <div style={{
          fontSize: 32, fontWeight: 700, color: WHITE,
          letterSpacing: "-0.03em", lineHeight: 1.05,
        }}>
          Non "hai fatto<br />il 70% del piano".
        </div>
        <div style={{ fontSize: 14, color: ACCENT, lineHeight: 1.45, marginTop: 12, letterSpacing: "-0.01em" }}>
          Dove sei forte. Dove sei debole. Quanto sei pronto.
        </div>

        {/* Visual demo */}
        <div style={{
          marginTop: 30, display: "flex", justifyContent: "center",
        }}>
          <ScoreRing value={65} size={150} stroke={10} />
        </div>

        <div style={{
          marginTop: 28, padding: "16px 18px",
          backgroundColor: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16,
        }}>
          <div style={{ fontSize: 14, color: WHITE, lineHeight: 1.5, letterSpacing: "-0.01em" }}>
            "Sei pronto al <span style={{ color: ACCENT }}>65%</span>. Il tuo punto critico è l'apertura conversazionale, non il contenuto."
          </div>
        </div>

        <div style={{ marginTop: 22, fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.55 }}>
          Il punteggio non promette che performerai meglio. Promette che saprai dove sei prima di entrare.
        </div>
      </div>

      <div style={{ paddingBottom: 28 }}>
        <button style={{
          width: "100%", padding: "18px 0", border: "none",
          backgroundColor: ACCENT, color: BLACK, borderRadius: 100,
          fontSize: 15, fontWeight: 700, cursor: "pointer",
        }}>
          Avanti
        </button>
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 18 }}>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} style={{
              width: i === 3 ? 18 : 6, height: 6, borderRadius: 4,
              backgroundColor: i === 3 ? WHITE : "rgba(255,255,255,0.2)",
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ───────────────────────── ONBOARDING 5 — MEMORY ─────────────────────────
function OnboardingMemory() {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0" }}>
        <ArrowLeft />
        <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.1em" }}>5 / 6</div>
      </div>

      <div style={{ flex: 1, paddingTop: 30, overflowY: "auto" }}>
        <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>
          Memoria longitudinale
        </div>
        <div style={{
          fontSize: 32, fontWeight: 700, color: BLACK,
          letterSpacing: "-0.03em", lineHeight: 1.05,
        }}>
          Più eventi fai,<br />più ti conosciamo.
        </div>
        <div style={{ fontSize: 13, color: GRAY, lineHeight: 1.55, marginTop: 14 }}>
          Dopo 3–4 eventi conosciamo dove rallenti, cosa salti, quale dimensione non consolidi mai. Ogni ciclo parte da una baseline più alta.
        </div>

        {/* Timeline visual */}
        <div style={{ marginTop: 30 }}>
          {[
            { e: "Evento 1", note: "Baseline 0%", v: 18 },
            { e: "Evento 2", note: "Ricordo: salti la chiusura", v: 38 },
            { e: "Evento 3", note: "Ricordo: 4 pattern ricorrenti", v: 58 },
            { e: "Evento 4", note: "Parti già da qui", v: 78, current: true },
          ].map((p, i, arr) => (
            <div key={p.e} style={{
              display: "flex", gap: 14, alignItems: "center",
              paddingBottom: 14, marginBottom: 14,
              borderBottom: i < arr.length - 1 ? `0.5px solid ${BORDER}` : "none",
            }}>
              <div style={{
                width: 10, height: 10, borderRadius: "50%", flexShrink: 0,
                backgroundColor: p.current ? ACCENT : BLACK,
                border: p.current ? `2px solid ${BLACK}` : "none",
              }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: BLACK }}>{p.e}</div>
                <div style={{ fontSize: 11, color: GRAY, marginTop: 2 }}>{p.note}</div>
              </div>
              <div style={{ width: 70 }}>
                <div style={{ height: 4, backgroundColor: "#E4E3DD", borderRadius: 2, overflow: "hidden" }}>
                  <div style={{ width: `${p.v}%`, height: "100%", backgroundColor: BLACK }} />
                </div>
                <div style={{ fontSize: 10, color: GRAY, marginTop: 4, textAlign: "right" }}>{p.v}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ paddingBottom: 28 }}>
        <button style={{
          width: "100%", padding: "18px 0", border: "none",
          backgroundColor: BLACK, color: WHITE, borderRadius: 100,
          fontSize: 15, fontWeight: 600, cursor: "pointer",
        }}>
          Dichiara il tuo primo evento
        </button>
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 18 }}>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} style={{
              width: i === 4 ? 18 : 6, height: 6, borderRadius: 4,
              backgroundColor: i === 4 ? BLACK : BORDER,
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ───────────────────────── ONBOARDING 6 — DECLARE EVENT ─────────────────────────
function OnboardingDeclare() {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0" }}>
        <ArrowLeft />
        <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.1em" }}>6 / 6</div>
      </div>

      <div style={{ flex: 1, paddingTop: 28, overflowY: "auto" }}>
        <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>
          Il tuo primo evento
        </div>
        <div style={{
          fontSize: 30, fontWeight: 700, color: BLACK,
          letterSpacing: "-0.03em", lineHeight: 1.05,
        }}>
          Cosa devi<br />affrontare?
        </div>

        {/* Type chips */}
        <div style={{ marginTop: 24 }}>
          <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 10 }}>
            Tipo
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {[
              { label: "Talk / Evento", active: true },
              { label: "Colloquio" },
              { label: "Networking" },
              { label: "Presentazione" },
              { label: "1-to-1 difficile" },
            ].map((t) => (
              <div key={t.label} style={{
                padding: "8px 14px",
                backgroundColor: t.active ? BLACK : WHITE,
                color: t.active ? WHITE : BLACK,
                border: `1px solid ${t.active ? BLACK : BORDER}`,
                borderRadius: 100, fontSize: 12,
              }}>
                {t.label}
              </div>
            ))}
          </div>
        </div>

        {/* Title input */}
        <div style={{ marginTop: 22 }}>
          <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 10 }}>
            Di che si tratta
          </div>
          <div style={{
            padding: "14px 16px", backgroundColor: WHITE,
            border: `1.5px solid ${BLACK}`, borderRadius: 14,
            fontSize: 15, color: BLACK, letterSpacing: "-0.01em",
          }}>
            Talk al Talent Garden su AI &amp; lavoro
          </div>
        </div>

        {/* Date */}
        <div style={{ marginTop: 18 }}>
          <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 10 }}>
            Quando
          </div>
          <div style={{
            padding: "14px 16px", backgroundColor: WHITE,
            border: `1px solid ${BORDER}`, borderRadius: 14,
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <span style={{ fontSize: 15, color: BLACK }}>Mer 17 giu 2026</span>
            <span style={{ fontSize: 12, color: GRAY }}>tra 12 giorni</span>
          </div>
        </div>

        {/* Auto info */}
        <div style={{
          marginTop: 18, padding: "12px 14px",
          backgroundColor: SURFACE, border: `1px solid ${BORDER}`, borderRadius: 12,
          display: "flex", gap: 10, alignItems: "flex-start",
        }}>
          <span style={{ fontSize: 9, color: BLACK, fontWeight: 600, letterSpacing: "0.12em", marginTop: 2 }}>
            AUTO →
          </span>
          <span style={{ fontSize: 12, color: GRAY, lineHeight: 1.5 }}>
            Capiamo da soli gli argomenti dal contesto. Non ti chiediamo di compilarli.
          </span>
        </div>
      </div>

      <div style={{ paddingBottom: 28 }}>
        <button style={{
          width: "100%", padding: "18px 0", border: "none",
          backgroundColor: ACCENT, color: BLACK, borderRadius: 100,
          fontSize: 15, fontWeight: 700, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
        }}>
          Costruisci il mio piano <ArrowRight size={16} />
        </button>
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 18 }}>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} style={{
              width: i === 5 ? 18 : 6, height: 6, borderRadius: 4,
              backgroundColor: i === 5 ? BLACK : BORDER,
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ───────────────────────── PLAN — 12 GIORNI ─────────────────────────
function PlanScreen() {
  const phases = [
    {
      title: "Fase 1 · Basi",
      hint: "Giorni 1–4 · Completata in parte",
      days: [
        { d: 1, t: "Cos'è AI generativa", done: true, mins: 12 },
        { d: 2, t: "Storia breve: da GPT-2 a oggi", done: true, mins: 14 },
        { d: 3, t: "Cosa è un LLM (in 3 frasi)", done: false, current: true, mins: 15 },
        { d: 4, t: "Prompt, context window, token", done: false, mins: 15 },
      ],
      openByDefault: true,
    },
    {
      title: "Fase 2 · Argomenti del talk",
      hint: "Giorni 5–8 · Da iniziare",
      days: [
        { d: 5, t: "Cosa cambia nel lavoro creativo", done: false, mins: 13 },
        { d: 6, t: "Casi d'uso reali in azienda", done: false, mins: 15 },
        { d: 7, t: "Limiti, hallucination, etica", done: false, mins: 14 },
        { d: 8, t: "Argomenti chiave del talk TAG", done: false, mins: 15, milestone: true },
      ],
    },
    {
      title: "Fase 3 · Performance",
      hint: "Giorni 9–12 · Costruzione discorso",
      days: [
        { d: 9, t: "Costruisci il tuo punto di vista", done: false, mins: 15 },
        { d: 10, t: "Domande tipo del pubblico", done: false, mins: 15 },
        { d: 11, t: "Simulazione conversazione 1:1", done: false, mins: 15, milestone: true },
        { d: 12, t: "Refresh + check finale", done: false, mins: 10 },
      ],
    },
  ];
  const allDays = phases.flatMap((p) => p.days);
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, overflowY: "auto", padding: "0 20px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0 16px" }}>
          <ArrowLeft />
          <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.1em" }}>Piano · 12 giorni</div>
          <MenuIcon />
        </div>

        <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.16em", textTransform: "uppercase" }}>
          Obiettivo
        </div>
        <div style={{ fontSize: 24, fontWeight: 700, color: BLACK, letterSpacing: "-0.025em", lineHeight: 1.15, marginTop: 6 }}>
          Talent Garden,<br />sapendo parlare di AI.
        </div>

        <div style={{
          marginTop: 20, backgroundColor: BLACK, color: WHITE,
          borderRadius: 18, padding: "16px 18px",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Avanzamento
            </span>
            <span style={{ fontSize: 11, color: WHITE }}>2 / 12</span>
          </div>
          <div style={{ display: "flex", gap: 3 }}>
            {allDays.map((d) => (
              <div key={d.d} style={{
                flex: 1, height: 6, borderRadius: 2,
                backgroundColor: d.done ? ACCENT : d.current ? WHITE : "rgba(255,255,255,0.15)",
              }} />
            ))}
          </div>
        </div>

        <div style={{ marginTop: 20, marginBottom: 24, display: "flex", flexDirection: "column", gap: 8 }}>
          {phases.map((phase) => (
            <Accordion key={phase.title} label={phase.title} hint={phase.hint} defaultOpen={phase.openByDefault}>
              {phase.days.map((d, i, arr) => (
                <div key={d.d} style={{
                  display: "flex", gap: 12, alignItems: "center",
                  padding: "10px 0",
                  borderBottom: i < arr.length - 1 ? `0.5px solid ${BORDER}` : "none",
                }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                    backgroundColor: d.done ? BLACK : d.current ? ACCENT : SURFACE,
                    border: d.current ? "none" : `1px solid ${BORDER}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11, fontWeight: 600, color: d.done ? WHITE : BLACK,
                  }}>
                    {d.done ? <CheckIcon /> : d.d}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontSize: 13, fontWeight: d.current ? 600 : 500,
                      color: d.done ? GRAY : BLACK, letterSpacing: "-0.01em",
                      textDecoration: d.done ? "line-through" : "none",
                    }}>
                      {d.t}
                    </div>
                    <div style={{ fontSize: 11, color: GRAY, marginTop: 2 }}>
                      {d.mins} min{d.milestone && <span style={{ color: AMBER }}> · milestone</span>}
                    </div>
                  </div>
                  {d.current && <ArrowRight size={16} />}
                </div>
              ))}
            </Accordion>
          ))}
        </div>
      </div>
      <TabBar active={1} />
    </div>
  );
}

// ───────────────────────── SESSION DETAIL ─────────────────────────
function SessionDetailScreen() {
  return (
    <div style={{ flex: 1, overflowY: "auto", padding: "0 20px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0 24px" }}>
        <ArrowLeft />
        <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.1em" }}>Giorno 3 di 12</div>
        <CloseIcon />
      </div>

      <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.16em", textTransform: "uppercase" }}>
        Sessione di oggi · 15 min
      </div>
      <div style={{ fontSize: 30, fontWeight: 700, color: BLACK, letterSpacing: "-0.03em", lineHeight: 1.1, marginTop: 8 }}>
        Cosa è un LLM,<br />in 3 frasi.
      </div>
      <div style={{ fontSize: 13, color: GRAY, lineHeight: 1.55, marginTop: 14 }}>
        Una base che ti serve per non rimanere fermo se al talk qualcuno dice "modello fondazionale". Niente formule — solo l'idea.
      </div>

      {/* Steps */}
      <div style={{ marginTop: 24 }}>
        {[
          { n: "01", t: "Briefing", d: "Leggi 4 concetti chiave", mins: 5, kind: "Lettura" },
          { n: "02", t: "Quick check", d: "3 micro-domande per fissare", mins: 3, kind: "Pratica" },
          { n: "03", t: "Costruisci il discorso", d: "Metti insieme la tua frase di apertura", mins: 5, kind: "Esercizio" },
          { n: "04", t: "Chiudi e salva", d: "Note che ritroverai prima dell'evento", mins: 2, kind: "Recap" },
        ].map((s, i, arr) => (
          <div key={s.n} style={{
            display: "flex", gap: 14, padding: "14px 0",
            borderBottom: i < arr.length - 1 ? `0.5px solid ${BORDER}` : "none",
          }}>
            <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.1em", paddingTop: 2, width: 22 }}>
              {s.n}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: BLACK, letterSpacing: "-0.015em" }}>
                  {s.t}
                </div>
                <div style={{ fontSize: 11, color: GRAY }}>{s.mins} min</div>
              </div>
              <div style={{ fontSize: 12, color: GRAY, lineHeight: 1.5, marginTop: 4 }}>
                {s.d}
              </div>
              <div style={{
                display: "inline-block", marginTop: 8, padding: "2px 8px",
                backgroundColor: SURFACE, border: `1px solid ${BORDER}`,
                borderRadius: 100, fontSize: 10, color: BLACK, letterSpacing: "0.06em",
              }}>
                {s.kind}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ paddingTop: 20, paddingBottom: 28 }}>
        <button style={{
          width: "100%", padding: "18px 0", border: "none",
          backgroundColor: ACCENT, color: BLACK, borderRadius: 100,
          fontSize: 15, fontWeight: 700, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
        }}>
          <PlayIcon /> Inizia la sessione
        </button>
      </div>
    </div>
  );
}

// ───────────────────────── BRIEFING / LEARNING ─────────────────────────
function BriefingScreen() {
  return (
    <div style={{ flex: 1, overflowY: "auto", padding: "0 20px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0 12px" }}>
        <ArrowLeft />
        <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.1em" }}>Briefing · 1 di 4</div>
        <CloseIcon />
      </div>

      {/* Step progress */}
      <div style={{ display: "flex", gap: 6, marginBottom: 24 }}>
        {[true, false, false, false].map((on, i) => (
          <div key={i} style={{
            flex: 1, height: 3, borderRadius: 2,
            backgroundColor: on ? BLACK : BORDER,
          }} />
        ))}
      </div>

      <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.14em", textTransform: "uppercase" }}>
        Concetto 1 / 4
      </div>
      <div style={{
        fontSize: 34, fontWeight: 700, color: BLACK,
        letterSpacing: "-0.035em", lineHeight: 1.02, marginTop: 10,
      }}>
        Un LLM è un<br />autocompletamento<br />molto intelligente.
      </div>

      {/* Definition card */}
      <div style={{
        marginTop: 28, padding: "20px 22px",
        backgroundColor: BLACK, color: WHITE, borderRadius: 20,
      }}>
        <div style={{ fontSize: 17, color: WHITE, lineHeight: 1.45, letterSpacing: "-0.015em" }}>
          Dato un testo, predice la parola più probabile successiva. Lo fa miliardi di volte, su miliardi di esempi.
        </div>
      </div>

      {/* Why it matters — inline, sottile */}
      <div style={{
        marginTop: 14, display: "flex", gap: 10, alignItems: "flex-start",
        fontSize: 12, color: GRAY, lineHeight: 1.5,
      }}>
        <span style={{
          flexShrink: 0, marginTop: 2,
          fontSize: 9, letterSpacing: "0.12em", color: BLACK, fontWeight: 600,
        }}>
          AL TALK →
        </span>
        <span>
          Non ragiona, predice. Quando qualcuno dirà "intelligenza", saprai cosa contestare.
        </span>
      </div>

      {/* Approfondimenti collassati */}
      <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 8 }}>
        <Accordion label="Analogia" hint="Per spiegarlo a chi non è tecnico" defaultOpen>
          <div style={{
            fontSize: 15, color: BLACK, lineHeight: 1.45,
            letterSpacing: "-0.015em", fontWeight: 400,
          }}>
            Un musicista che ha ascoltato 10 milioni di canzoni e improvvisa la nota successiva. Non capisce la musica — la conosce.
          </div>
        </Accordion>

        <Accordion label="Termini da riconoscere" hint="5 parole · glossario rapido">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {["Token", "Parametri", "Training", "Context window", "Fine-tuning"].map((t) => (
              <div key={t} style={{
                padding: "6px 12px", backgroundColor: SURFACE,
                border: `1px solid ${BORDER}`, borderRadius: 100,
                fontSize: 12, color: BLACK,
              }}>
                {t}
              </div>
            ))}
          </div>
        </Accordion>
      </div>

      <div style={{ display: "flex", gap: 10, paddingTop: 24, paddingBottom: 28 }}>
        <button style={{
          flex: 1, padding: "16px 0", backgroundColor: WHITE,
          border: `1px solid ${BORDER}`, color: BLACK, borderRadius: 100,
          fontSize: 13, fontWeight: 500, cursor: "pointer",
        }}>
          Salva
        </button>
        <button style={{
          flex: 2, padding: "16px 0", border: "none",
          backgroundColor: BLACK, color: WHITE, borderRadius: 100,
          fontSize: 14, fontWeight: 600, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
        }}>
          Concetto successivo <ArrowRight color={WHITE} size={16} />
        </button>
      </div>
    </div>
  );
}

// ───────────────────────── DISCORSO BUILDER ─────────────────────────
function DiscourseBuilderScreen() {
  return (
    <div style={{ flex: 1, overflowY: "auto", padding: "0 20px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0 24px" }}>
        <ArrowLeft />
        <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.1em" }}>Esercizio · 3 di 4</div>
        <CloseIcon />
      </div>

      <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.14em", textTransform: "uppercase" }}>
        Costruisci il discorso
      </div>
      <div style={{ fontSize: 26, fontWeight: 700, color: BLACK, letterSpacing: "-0.025em", lineHeight: 1.15, marginTop: 8 }}>
        Se al talk ti chiedono<br />"cos'è un LLM" — cosa dici?
      </div>
      <div style={{ fontSize: 12, color: GRAY, lineHeight: 1.5, marginTop: 12 }}>
        Assembla la tua risposta in 3 blocchi. Non serve essere preciso — serve essere chiaro.
      </div>

      {/* Block 1: Aggancio */}
      <div style={{ marginTop: 22 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <div style={{
            width: 22, height: 22, borderRadius: "50%", backgroundColor: BLACK, color: WHITE,
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 600,
          }}>1</div>
          <div style={{ fontSize: 11, color: BLACK, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
            Aggancio · una frase
          </div>
        </div>
        <div style={{
          padding: "14px 16px", backgroundColor: ACCENT, borderRadius: 14,
          fontSize: 14, color: BLACK, lineHeight: 1.45, letterSpacing: "-0.015em",
        }}>
          "È un autocompletamento molto intelligente."
        </div>
        <div style={{ fontSize: 10, color: GRAY, marginTop: 6, letterSpacing: "0.06em" }}>
          ↑ Selezionato dalle analogie del briefing
        </div>
      </div>

      {/* Block 2: Spiegazione */}
      <div style={{ marginTop: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <div style={{
            width: 22, height: 22, borderRadius: "50%", backgroundColor: BLACK, color: WHITE,
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 600,
          }}>2</div>
          <div style={{ fontSize: 11, color: BLACK, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
            Spiegazione · 2 frasi
          </div>
        </div>
        <div style={{
          padding: "14px 16px", backgroundColor: WHITE, border: `1px solid ${BORDER}`,
          borderRadius: 14, fontSize: 13, color: "#3D3D3D", lineHeight: 1.55,
        }}>
          Predice la parola successiva basandosi su miliardi di testi. Non capisce — riconosce pattern così bene che sembra capire.
        </div>
      </div>

      {/* Block 3: Punto di vista */}
      <div style={{ marginTop: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <div style={{
            width: 22, height: 22, borderRadius: "50%",
            border: `1.5px dashed ${GRAY}`, color: GRAY,
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 600,
          }}>3</div>
          <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
            Il tuo punto di vista
          </div>
        </div>
        <div style={{
          padding: "16px 16px", backgroundColor: WHITE, border: `1px dashed ${BORDER}`,
          borderRadius: 14, fontSize: 13, color: "#C9C8C2", lineHeight: 1.55, minHeight: 64,
          display: "flex", alignItems: "center",
        }}>
          Cosa ne pensi tu? (es. "per questo cambia chi fa lavoro creativo, ma non chi decide")
        </div>
        <div style={{ display: "flex", gap: 6, marginTop: 8, flexWrap: "wrap" }}>
          {["Suggerisci", "Riformula", "Più corto"].map((t) => (
            <div key={t} style={{
              padding: "5px 10px", backgroundColor: SURFACE,
              border: `1px solid ${BORDER}`, borderRadius: 100,
              fontSize: 11, color: BLACK,
            }}>
              {t}
            </div>
          ))}
        </div>
      </div>

      {/* Time estimate */}
      <div style={{
        marginTop: 22, padding: "12px 14px",
        backgroundColor: SURFACE, border: `1px solid ${BORDER}`, borderRadius: 12,
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.06em" }}>
          Tempo a voce stimato
        </div>
        <div style={{ fontSize: 14, fontWeight: 600, color: BLACK }}>
          ~22 sec
        </div>
      </div>

      <div style={{ paddingTop: 20, paddingBottom: 28 }}>
        <button style={{
          width: "100%", padding: "16px 0", border: "none",
          backgroundColor: BLACK, color: WHITE, borderRadius: 100,
          fontSize: 14, fontWeight: 600, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
        }}>
          Prova a dirla a voce <ArrowRight color={WHITE} size={16} />
        </button>
      </div>
    </div>
  );
}

// ───────────────────────── QUIZ — STEP 1: INTRO ─────────────────────────
function QuizIntroScreen() {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 20px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0" }}>
        <CloseIcon />
        <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.14em", textTransform: "uppercase" }}>
          Sessione 3 · Quiz
        </div>
        <div style={{ width: 22 }} />
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{
          fontSize: 10, color: GRAY, letterSpacing: "0.16em",
          textTransform: "uppercase", marginBottom: 16,
        }}>
          Active recall · 4 domande
        </div>
        <div style={{
          fontSize: 38, fontWeight: 700, color: BLACK,
          letterSpacing: "-0.035em", lineHeight: 1.02,
        }}>
          Vediamo cosa<br />sapresti dire<br />in conversazione.
        </div>
        <div style={{ fontSize: 14, color: GRAY, lineHeight: 1.5, marginTop: 20 }}>
          Domande aperte sul materiale di oggi. Non c'è giusto o sbagliato — misuriamo completezza e qualità dell'argomentazione.
        </div>

        <div style={{
          marginTop: 32, padding: "14px 16px",
          backgroundColor: SURFACE, border: `1px solid ${BORDER}`, borderRadius: 14,
          display: "flex", gap: 14,
        }}>
          {[
            { label: "Tempo", value: "~8 min" },
            { label: "Domande", value: "4" },
            { label: "Formato", value: "Aperto" },
          ].map((m, i) => (
            <div key={m.label} style={{
              flex: 1,
              borderRight: i < 2 ? `1px solid ${BORDER}` : "none",
            }}>
              <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {m.label}
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: BLACK, marginTop: 4 }}>
                {m.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ paddingBottom: 28 }}>
        <button style={{
          width: "100%", padding: "18px 0", border: "none",
          backgroundColor: BLACK, color: WHITE, borderRadius: 100,
          fontSize: 15, fontWeight: 600, letterSpacing: "-0.01em", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
        }}>
          Inizia il quiz <ArrowRight color={WHITE} size={16} />
        </button>
        <div style={{ textAlign: "center", fontSize: 11, color: GRAY, marginTop: 14 }}>
          Puoi rispondere a voce o testo
        </div>
      </div>
    </div>
  );
}

// ───────────────────────── QUIZ — STEP 2: QUESTION ─────────────────────────
function QuizQuestionScreen() {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 20px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0 16px" }}>
        <ArrowLeft />
        <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.1em" }}>
          2 di 4
        </div>
        <CloseIcon />
      </div>

      {/* Progress */}
      <div style={{ display: "flex", gap: 6, marginBottom: 32 }}>
        {[true, true, false, false].map((done, i) => (
          <div key={i} style={{
            flex: 1, height: 3, borderRadius: 2,
            backgroundColor: done ? BLACK : BORDER,
          }} />
        ))}
      </div>

      <div style={{ flex: 1 }}>
        <div style={{
          display: "inline-block", padding: "4px 10px",
          backgroundColor: SURFACE, border: `1px solid ${BORDER}`,
          borderRadius: 100, fontSize: 10, color: GRAY,
          letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20,
        }}>
          Cosa è un LLM
        </div>

        <div style={{
          fontSize: 26, fontWeight: 700, color: BLACK,
          letterSpacing: "-0.025em", lineHeight: 1.2,
        }}>
          Come risponderesti se al talk ti chiedessero:
        </div>

        <div style={{
          marginTop: 20, padding: "18px 20px",
          backgroundColor: BLACK, color: WHITE, borderRadius: 18,
          fontSize: 17, lineHeight: 1.4, letterSpacing: "-0.015em",
          fontStyle: "italic",
        }}>
          "Spiegami in 30 secondi cos'è un LLM, come se non sapessi niente di AI."
        </div>

        <div style={{ fontSize: 12, color: GRAY, marginTop: 14, lineHeight: 1.5 }}>
          Niente termini tecnici. Apri con un'analogia, poi una frase di precisione.
        </div>
      </div>

      {/* Input area */}
      <div style={{ paddingBottom: 20 }}>
        <div style={{
          backgroundColor: WHITE, border: `1px solid ${BORDER}`,
          borderRadius: 18, padding: "14px 16px", minHeight: 100,
          display: "flex", flexDirection: "column", justifyContent: "space-between",
        }}>
          <div style={{ fontSize: 13, color: "#C9C8C2", lineHeight: 1.5 }}>
            Scrivi qui la tua risposta…
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12 }}>
            <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.06em" }}>
              0 / 200 parole
            </div>
            <div style={{
              width: 44, height: 44, borderRadius: "50%",
              backgroundColor: BLACK,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <MicIcon color={WHITE} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ───────────────────────── QUIZ — STEP 3: ANSWERING (REC) ─────────────────────────
function QuizAnsweringScreen() {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 20px", backgroundColor: BLACK }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 0 16px" }}>
        <div style={{ width: 22 }} />
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>
          REGISTRAZIONE · 00:24
        </div>
        <div style={{
          display: "flex", alignItems: "center", gap: 6,
          fontSize: 11, color: WHITE,
          padding: "4px 10px",
          border: "1px solid rgba(255,255,255,0.2)", borderRadius: 100,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#FF3B30" }} />
          LIVE
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 12 }}>
          Domanda 2 di 4
        </div>
        <div style={{
          fontSize: 18, color: WHITE, textAlign: "center", lineHeight: 1.35,
          letterSpacing: "-0.01em", maxWidth: 300, marginBottom: 60,
        }}>
          "Spiegami in 30 secondi cos'è un LLM, come se non sapessi niente di AI."
        </div>

        {/* Waveform */}
        <div style={{
          display: "flex", alignItems: "center", gap: 4, height: 80, marginBottom: 40,
        }}>
          {Array.from({ length: 28 }).map((_, i) => {
            const h = 8 + Math.abs(Math.sin(i * 0.9)) * 60 + (i % 3) * 8;
            return (
              <div key={i} style={{
                width: 3, height: h,
                backgroundColor: i < 18 ? ACCENT : "rgba(255,255,255,0.2)",
                borderRadius: 2,
              }} />
            );
          })}
        </div>

        <div style={{
          width: 84, height: 84, borderRadius: "50%",
          backgroundColor: ACCENT,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: `0 0 0 8px rgba(232,255,90,0.15)`,
        }}>
          <div style={{ width: 28, height: 28, backgroundColor: BLACK, borderRadius: 4 }} />
        </div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 18 }}>
          Tocca per fermare
        </div>
      </div>

      <div style={{
        paddingBottom: 28, display: "flex", justifyContent: "space-between",
        fontSize: 12, color: "rgba(255,255,255,0.5)",
      }}>
        <span>Annulla</span>
        <span>Passa al testo →</span>
      </div>
    </div>
  );
}

// ───────────────────────── QUIZ — STEP 4: FEEDBACK ─────────────────────────
function QuizFeedbackScreen() {
  return (
    <div style={{ flex: 1, overflowY: "auto", padding: "0 20px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0 24px" }}>
        <ArrowLeft />
        <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.1em" }}>
          Feedback · D2
        </div>
        <CloseIcon />
      </div>

      <div style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        padding: "6px 12px", backgroundColor: AMBER_BG,
        borderRadius: 100, fontSize: 11, color: AMBER, marginBottom: 16,
      }}>
        Buono · 7.2 / 10
      </div>

      <div style={{
        fontSize: 26, fontWeight: 700, color: BLACK,
        letterSpacing: "-0.025em", lineHeight: 1.2, marginBottom: 24,
      }}>
        Hai la definizione.<br />Manca l'analogia.
      </div>

      {/* Your answer */}
      <div style={{
        backgroundColor: SURFACE, border: `1px solid ${BORDER}`,
        borderRadius: 16, padding: "14px 16px", marginBottom: 16,
      }}>
        <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
          La tua risposta
        </div>
        <div style={{ fontSize: 13, color: "#3D3D3D", lineHeight: 1.55, fontStyle: "italic" }}>
          "Un LLM è un modello statistico addestrato su grandi quantità di testo che predice il token successivo basandosi sui parametri…"
        </div>
      </div>

      {/* Scores */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
        {[
          { label: "Contenuto", value: 8.5, color: GREEN, bg: GREEN_BG },
          { label: "Argomentazione", value: 6.0, color: AMBER, bg: AMBER_BG },
        ].map((s) => (
          <div key={s.label} style={{
            backgroundColor: WHITE, border: `1px solid ${BORDER}`,
            borderRadius: 14, padding: "12px 14px",
          }}>
            <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              {s.label}
            </div>
            <div style={{ fontSize: 22, fontWeight: 700, color: BLACK, marginTop: 6, letterSpacing: "-0.02em" }}>
              {s.value.toFixed(1)}
            </div>
            <div style={{
              marginTop: 8, display: "inline-block",
              padding: "2px 8px", fontSize: 10,
              color: s.color, backgroundColor: s.bg, borderRadius: 100,
            }}>
              {s.value >= 8 ? "Forte" : "Migliorabile"}
            </div>
          </div>
        ))}
      </div>

      {/* Critique */}
      <div style={{
        backgroundColor: BLACK, color: WHITE, borderRadius: 16,
        padding: "16px 18px", marginBottom: 20,
      }}>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>
          Cosa migliorare
        </div>
        <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, lineHeight: 1.55, color: "rgba(255,255,255,0.85)" }}>
          <li style={{ marginBottom: 6 }}>Hai usato "token" e "parametri" senza spiegarli — chi non è tecnico si perde.</li>
          <li style={{ marginBottom: 6 }}>Apri con <span style={{ color: ACCENT }}>l'analogia del musicista</span>, poi entra nel dettaglio.</li>
          <li>Manca il "perché dovresti fregartene" — chiudi con una conseguenza pratica.</li>
        </ul>
      </div>

      <div style={{ paddingBottom: 28 }}>
        <button style={{
          width: "100%", padding: "16px 0", border: "none",
          backgroundColor: BLACK, color: WHITE, borderRadius: 100,
          fontSize: 14, fontWeight: 600, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
        }}>
          Domanda successiva <ArrowRight color={WHITE} size={16} />
        </button>
      </div>
    </div>
  );
}

// ───────────────────────── QUIZ — STEP 5: RESULTS ─────────────────────────
function QuizResultsScreen() {
  return (
    <div style={{ flex: 1, overflowY: "auto", padding: "0 20px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0 24px" }}>
        <CloseIcon />
        <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.1em" }}>
          Quiz completato
        </div>
        <div style={{ width: 22 }} />
      </div>

      <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 10 }}>
        Sessione 3 · Risultato
      </div>
      <div style={{
        fontSize: 32, fontWeight: 700, color: BLACK,
        letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 28,
      }}>
        Sei un po' più<br />pronto di ieri.
      </div>

      {/* Score delta */}
      <div style={{
        backgroundColor: WHITE, border: `1px solid ${BORDER}`,
        borderRadius: 20, padding: "20px 18px", marginBottom: 14,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div>
          <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Readiness score
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 6 }}>
            <span style={{ fontSize: 14, color: GRAY, textDecoration: "line-through" }}>61%</span>
            <span style={{ fontSize: 36, fontWeight: 700, color: BLACK, letterSpacing: "-0.03em" }}>65%</span>
          </div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 4,
            marginTop: 8, padding: "3px 10px",
            backgroundColor: GREEN_BG, color: GREEN,
            fontSize: 11, borderRadius: 100,
          }}>
            +4 punti
          </div>
        </div>
        <ScoreRing value={65} size={104} stroke={8} light />
      </div>

      <div style={{ marginBottom: 16 }}>
        <Accordion label="Dettaglio domande" hint="4 domande · 3 ok, 1 da rivedere">
          {[
            { q: "Spiegare cos'è un LLM", score: 7.2, ok: true },
            { q: "Differenza tra predire e ragionare", score: 8.4, ok: true },
            { q: "Rispondere su limiti e hallucination", score: 5.4, ok: false },
            { q: "Tuo punto di vista sul lavoro", score: 6.8, ok: true },
          ].map((item, i, arr) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "10px 0",
              borderBottom: i < arr.length - 1 ? `0.5px solid ${BORDER}` : "none",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1, minWidth: 0 }}>
                <div style={{
                  width: 22, height: 22, borderRadius: "50%",
                  backgroundColor: item.ok ? BLACK : "#E4E3DD",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  {item.ok && <CheckIcon />}
                </div>
                <div style={{ fontSize: 13, color: BLACK, letterSpacing: "-0.01em", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {item.q}
                </div>
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: BLACK, marginLeft: 10 }}>
                {item.score.toFixed(1)}
              </div>
            </div>
          ))}
        </Accordion>
      </div>

      {/* Gap update */}
      <div style={{
        backgroundColor: BLACK, color: WHITE, borderRadius: 16,
        padding: "16px 18px", marginBottom: 20,
      }}>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>
          Punto critico aggiornato
        </div>
        <div style={{ fontSize: 16, fontWeight: 600, color: WHITE, letterSpacing: "-0.015em", lineHeight: 1.35 }}>
          Limiti e hallucination — domani lo approfondiamo con casi reali.
        </div>
      </div>

      <div style={{ display: "flex", gap: 10, paddingBottom: 28 }}>
        <button style={{
          flex: 1, padding: "16px 0",
          backgroundColor: WHITE, border: `1px solid ${BLACK}`, color: BLACK,
          borderRadius: 100, fontSize: 13, fontWeight: 500, cursor: "pointer",
        }}>
          Rivedi
        </button>
        <button style={{
          flex: 2, padding: "16px 0", border: "none",
          backgroundColor: ACCENT, color: BLACK, borderRadius: 100,
          fontSize: 14, fontWeight: 600, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
        }}>
          Vai al piano <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

// ───────────────────────── PRE-EVENT — T-12h ─────────────────────────
function PreEvent12h() {
  return (
    <div style={{ flex: 1, overflowY: "auto", padding: "0 20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0 20px" }}>
        <MenuIcon />
        <BellIcon badge />
      </div>

      <div style={{
        fontSize: 11, color: GRAY, letterSpacing: "0.18em", textTransform: "uppercase",
      }}>
        Mancano
      </div>
      <div style={{
        fontSize: 80, fontWeight: 800, color: BLACK,
        letterSpacing: "-0.05em", lineHeight: 0.88, marginTop: 6,
      }}>
        12h
      </div>
      <div style={{
        fontSize: 14, color: BLACK, fontWeight: 400, marginTop: 10, letterSpacing: "-0.01em",
      }}>
        Talent Garden · domani ore 19:00
      </div>

      {/* Readiness final */}
      <div style={{
        marginTop: 24, padding: "18px 20px",
        backgroundColor: BLACK, color: WHITE, borderRadius: 20,
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <div>
          <div style={{
            fontSize: 10, color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500,
          }}>
            Pronto al
          </div>
          <div style={{
            fontSize: 48, fontWeight: 700, color: WHITE,
            letterSpacing: "-0.04em", marginTop: 4, lineHeight: 1,
          }}>
            82<span style={{ fontSize: 22, fontWeight: 400, color: "rgba(255,255,255,0.5)" }}>%</span>
          </div>
          <div style={{
            display: "inline-block", marginTop: 10,
            padding: "3px 10px", backgroundColor: ACCENT, color: BLACK,
            fontSize: 11, fontWeight: 600, borderRadius: 100,
          }}>
            +40 dal giorno 1
          </div>
        </div>
        <ScoreRing value={82} size={104} stroke={8} />
      </div>

      <div style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 8 }}>
        <Accordion label="Stasera, 10 minuti" hint="2 fatti · 2 da fare" defaultOpen>
          {[
            { t: "Rileggi i 4 concetti chiave su LLM", done: true },
            { t: "Ascolta il tuo discorso registrato (45s)", done: true },
            { t: "Una simulazione finale a voce", done: false },
            { t: "Prepara 2 domande per gli speaker", done: false },
          ].map((c, i, arr) => (
            <div key={c.t} style={{
              display: "flex", gap: 12, alignItems: "center",
              padding: "10px 0",
              borderBottom: i < arr.length - 1 ? `0.5px solid ${BORDER}` : "none",
            }}>
              <div style={{
                width: 20, height: 20, borderRadius: 5, flexShrink: 0,
                backgroundColor: c.done ? BLACK : WHITE,
                border: c.done ? "none" : `1.5px solid ${BORDER}`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {c.done && <CheckIcon />}
              </div>
              <div style={{
                flex: 1, fontSize: 13, color: c.done ? GRAY : BLACK,
                fontWeight: c.done ? 400 : 500,
                textDecoration: c.done ? "line-through" : "none",
                letterSpacing: "-0.01em",
              }}>
                {c.t}
              </div>
            </div>
          ))}
        </Accordion>

        <Accordion label="Suggerimento per stasera" hint="Memoria & sonno">
          <div style={{ fontSize: 12, color: GRAY, lineHeight: 1.55 }}>
            Dormi presto. La memoria fissa di notte quello che hai allenato di giorno.
          </div>
        </Accordion>
      </div>

      <div style={{ paddingTop: 20, paddingBottom: 28 }}>
        <button style={{
          width: "100%", padding: "18px 0", border: "none",
          backgroundColor: ACCENT, color: BLACK, borderRadius: 100,
          fontSize: 15, fontWeight: 700, cursor: "pointer",
          fontFamily: "inherit",
        }}>
          Apri la simulazione finale
        </button>
      </div>
    </div>
  );
}

// ───────────────────────── PRE-EVENT — T-2h ─────────────────────────
function PreEvent2h() {
  return (
    <div style={{ flex: 1, overflowY: "auto", padding: "0 20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0 20px" }}>
        <MenuIcon />
        <BellIcon badge />
      </div>

      <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.18em", textTransform: "uppercase" }}>
        Tra
      </div>
      <div style={{
        display: "flex", alignItems: "baseline", gap: 12,
        marginTop: 6,
      }}>
        <div style={{ fontSize: 80, fontWeight: 800, color: BLACK, letterSpacing: "-0.05em", lineHeight: 0.88 }}>
          2h
        </div>
        <div style={{ fontSize: 24, fontWeight: 300, color: GRAY, letterSpacing: "-0.02em" }}>
          14 min
        </div>
      </div>
      <div style={{ fontSize: 14, color: BLACK, marginTop: 10, fontWeight: 400 }}>
        Oggi · ore 19:00 · Talent Garden
      </div>

      {/* Mini stripes */}
      <div style={{
        marginTop: 20, padding: "14px 16px",
        backgroundColor: BLACK, color: WHITE, borderRadius: 16,
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500 }}>
            Stato
          </div>
          <div style={{ fontSize: 16, fontWeight: 600, color: WHITE, marginTop: 2, letterSpacing: "-0.015em" }}>
            Pronto · 82%
          </div>
        </div>
        <div style={{
          display: "flex", alignItems: "center", gap: 6,
          padding: "4px 10px", border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: 100, fontSize: 11, color: WHITE,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: ACCENT }} />
          Ultimo refresh
        </div>
      </div>

      {/* Last sprint */}
      <div style={{ marginTop: 22 }}>
        <div style={{
          fontSize: 10, color: GRAY, letterSpacing: "0.14em",
          textTransform: "uppercase", fontWeight: 500, marginBottom: 14,
        }}>
          Ultimo sprint · 8 min
        </div>

        {[
          {
            n: "01", t: "Le 3 frasi che ti tengono in piedi", mins: 2,
            sub: "Una analogia, una definizione, un punto di vista",
          },
          {
            n: "02", t: "Domanda trabocchetto: \"L'AI ragiona?\"", mins: 3,
            sub: "Hai già la risposta — ripassala a voce",
          },
          {
            n: "03", t: "Apertura: come ti presenti", mins: 3,
            sub: "Nome · cosa fai · perché sei qui",
          },
        ].map((s, i, arr) => (
          <div key={s.n} style={{
            display: "flex", gap: 14, padding: "12px 0",
            borderBottom: i < arr.length - 1 ? `0.5px solid ${BORDER}` : "none",
          }}>
            <div style={{
              fontSize: 11, color: GRAY, letterSpacing: "0.1em",
              paddingTop: 3, width: 22, flexShrink: 0, fontWeight: 500,
            }}>
              {s.n}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: BLACK, letterSpacing: "-0.015em" }}>
                  {s.t}
                </div>
                <div style={{ fontSize: 11, color: GRAY, fontWeight: 400 }}>{s.mins}m</div>
              </div>
              <div style={{ fontSize: 12, color: GRAY, lineHeight: 1.5, marginTop: 4 }}>
                {s.sub}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pep note */}
      <div style={{
        marginTop: 22,
        fontSize: 15, color: BLACK, lineHeight: 1.4,
        letterSpacing: "-0.02em", fontWeight: 500,
        borderLeft: `2px solid ${BLACK}`, paddingLeft: 14,
      }}>
        Sai cosa dire. Adesso ricordati solo di rallentare quando rispondi.
      </div>

      <div style={{ paddingTop: 22, paddingBottom: 28 }}>
        <button style={{
          width: "100%", padding: "18px 0", border: "none",
          backgroundColor: BLACK, color: WHITE, borderRadius: 100,
          fontSize: 15, fontWeight: 600, cursor: "pointer",
          fontFamily: "inherit",
        }}>
          Inizia l'ultimo sprint
        </button>
      </div>
    </div>
  );
}

// ───────────────────────── PRE-EVENT — T-30min · READY MODE ─────────────────────────
function PreEventReady() {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 20px", backgroundColor: BLACK }}>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "16px 0 16px" }}>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 500 }}>
          Ready mode
        </div>
        <div style={{
          display: "flex", alignItems: "center", gap: 6,
          fontSize: 11, color: WHITE, fontWeight: 500,
          padding: "4px 10px",
          border: "1px solid rgba(255,255,255,0.2)", borderRadius: 100,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: ACCENT }} />
          T-30 min
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", paddingTop: 16 }}>
        <div style={{
          fontSize: 38, fontWeight: 800, color: WHITE,
          letterSpacing: "-0.04em", lineHeight: 1, textTransform: "uppercase",
        }}>
          Tutto<br />quello che<br />ti serve.
        </div>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", marginTop: 16, fontWeight: 300 }}>
          Tre cose, non di più. Apri se ti senti perso.
        </div>

        {/* Three big cards */}
        <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            {
              n: "01", label: "Apertura",
              body: "\"Sono Simone, lavoro nel design. Sono qui perché voglio capire come l'AI cambia quello che faccio ogni giorno.\"",
            },
            {
              n: "02", label: "La frase che salva",
              body: "\"Un LLM è un autocompletamento molto intelligente. Non ragiona — predice.\"",
            },
            {
              n: "03", label: "Se ti chiedono cosa pensi",
              body: "\"Cambia chi esegue, non chi decide. Per questo il mio mestiere resta — cambia solo come lo faccio.\"",
            },
          ].map((c) => (
            <div key={c.n} style={{
              padding: "18px 20px",
              backgroundColor: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 18,
            }}>
              <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "baseline",
                marginBottom: 10,
              }}>
                <div style={{
                  fontSize: 10, color: ACCENT, letterSpacing: "0.14em",
                  textTransform: "uppercase", fontWeight: 600,
                }}>
                  {c.n} · {c.label}
                </div>
              </div>
              <div style={{
                fontSize: 16, color: WHITE, lineHeight: 1.4,
                letterSpacing: "-0.015em", fontWeight: 400,
              }}>
                {c.body}
              </div>
            </div>
          ))}
        </div>

        {/* Breathing reminder */}
        <div style={{
          marginTop: 18, padding: "14px 16px",
          backgroundColor: "rgba(232,255,90,0.08)",
          border: `1px solid rgba(232,255,90,0.25)`,
          borderRadius: 14,
          display: "flex", gap: 10, alignItems: "center",
        }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: ACCENT, flexShrink: 0 }} />
          <div style={{ fontSize: 12, color: WHITE, lineHeight: 1.5, fontWeight: 400 }}>
            <span style={{ fontWeight: 600 }}>Prima di entrare:</span> tre respiri lenti. 4 dentro, 6 fuori.
          </div>
        </div>

        {/* Post-event nudge */}
        <div style={{
          marginTop: 22, padding: "14px 16px",
          backgroundColor: "transparent",
          border: "1px dashed rgba(255,255,255,0.15)",
          borderRadius: 14,
          fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.5, fontWeight: 300,
        }}>
          Dopo l'evento ti chiederemo com'è andata. Bastano 2 minuti — serve a calibrare il prossimo ciclo.
        </div>
      </div>

      <div style={{ paddingTop: 18, paddingBottom: 28, display: "flex", gap: 10 }}>
        <button style={{
          flex: 1, padding: "16px 0",
          backgroundColor: "transparent", color: WHITE,
          border: "1px solid rgba(255,255,255,0.25)", borderRadius: 100,
          fontSize: 13, fontWeight: 500, cursor: "pointer",
          fontFamily: "inherit",
        }}>
          Silenzia 30 min
        </button>
        <button style={{
          flex: 2, padding: "16px 0", border: "none",
          backgroundColor: ACCENT, color: BLACK, borderRadius: 100,
          fontSize: 14, fontWeight: 700, cursor: "pointer",
          fontFamily: "inherit",
        }}>
          Sono pronto
        </button>
      </div>
    </div>
  );
}

// ───────────────────────── DAY SESSION TEMPLATES ─────────────────────────
type QuizMode = "text" | "voice-opt" | "voice" | "simulation";

interface DayTopic {
  day: number;          // numero di giorno (1..10)
  daysToEvent: number;  // T-N
  topic: string;
  topicShort: string;
  oneLiner: string;
  briefingBullets: string[];
  quizQuestion: string;
  mode: QuizMode;
  scoreBefore: number;
  scoreAfter: number;
}

function DayIntro({ t }: { t: DayTopic }) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 20px", overflowY: "auto" }}>
      <div style={{ paddingTop: 28, paddingBottom: 16 }}>
        <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 8 }}>
          Giorno {t.day} · T-{t.daysToEvent}g · 15 min
        </div>
        <div style={{ fontSize: 26, fontWeight: 500, color: BLACK, letterSpacing: "-0.02em", lineHeight: 1.15 }}>
          {t.topic}
        </div>
        <div style={{ fontSize: 13, color: GRAY, marginTop: 10, lineHeight: 1.5 }}>
          {t.oneLiner}
        </div>
      </div>

      <div style={{ marginTop: 8, padding: 16, backgroundColor: SURFACE, border: `1px solid ${BORDER}`, borderRadius: 14 }}>
        <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>
          Sessione di oggi
        </div>
        {[
          { n: "01", label: "3 briefing + 3 quiz a scelta multipla", time: "12 min" },
          { n: "02", label: t.mode === "simulation" ? "Quiz finale · simulazione" : t.mode === "voice" ? "Quiz finale · vocale" : t.mode === "voice-opt" ? "Quiz finale · testo o voce" : "Quiz finale · sintesi", time: "1 min" },
          { n: "03", label: "Aggiornamento readiness score", time: "2 min" },
        ].map((s) => (
          <div key={s.n} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: `0.5px solid ${BORDER}` }}>
            <div style={{ fontSize: 10, color: GRAY, width: 22 }}>{s.n}</div>
            <div style={{ flex: 1, fontSize: 13, color: BLACK, fontWeight: 500 }}>{s.label}</div>
            <div style={{ fontSize: 11, color: GRAY }}>{s.time}</div>
          </div>
        ))}
      </div>

      <button style={{
        marginTop: 18, padding: "16px 0", border: "none",
        backgroundColor: BLACK, color: WHITE, borderRadius: 100,
        fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "inherit",
      }}>
        Inizia ora →
      </button>
    </div>
  );
}

function DayBriefing({ t }: { t: DayTopic }) {
  const [step, setStep] = useState(0);
  const [sourcesOpen, setSourcesOpen] = useState(false);
  const [checks, setChecks] = useState<(number | null)[]>([null, null, null]);
  const microTitles = ["Definizione netta", "Punto operativo", "Trappola da evitare"];
  const microDurations = [4, 4, 4];
  const totalMin = microDurations.reduce((a, b) => a + b, 0);
  const current = t.briefingBullets[step] ?? t.briefingBullets[0];

  const quizzes = BRIEFING_QUIZZES[t.day] ?? [];
  const currentQuiz = quizzes[step];

  const pickCheck = (idx: number) => {
    setChecks((prev) => {
      const next = [...prev];
      next[step] = idx;
      return next;
    });
  };

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 20px", overflowY: "auto" }}>
      <div style={{ paddingTop: 22, paddingBottom: 10 }}>
        <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 8 }}>
          Briefing · {totalMin} min · 3 nozioni + 3 quiz
        </div>
        <div style={{ fontSize: 22, fontWeight: 500, color: BLACK, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
          {t.topic}
        </div>
      </div>

      <div style={{ display: "flex", gap: 4, marginBottom: 14 }}>
        {microTitles.map((_, i) => (
          <div key={i} style={{
            flex: 1, height: 3, borderRadius: 100,
            backgroundColor: checks[i] !== null ? BLACK : i === step ? "#888" : "#E4E3DD",
          }} />
        ))}
      </div>

      <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
        {microTitles.map((label, i) => (
          <button key={label} onClick={() => setStep(i)} style={{
            flex: 1, padding: "8px 4px", borderRadius: 10,
            border: `1px solid ${i === step ? BLACK : BORDER}`,
            backgroundColor: i === step ? BLACK : WHITE,
            color: i === step ? WHITE : BLACK,
            fontSize: 10, fontWeight: 500, cursor: "pointer", fontFamily: "inherit",
            letterSpacing: "0.04em",
          }}>
            {String(i + 1).padStart(2, "0")} · {microDurations[i]}m
          </button>
        ))}
      </div>

      <div style={{
        padding: 16, backgroundColor: SURFACE, border: `1px solid ${BORDER}`,
        borderRadius: 14, marginBottom: 12,
      }}>
        <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
          Nozione {step + 1} / 3 · {microTitles[step]}
        </div>
        <div style={{ fontSize: 14, color: BLACK, lineHeight: 1.55 }}>
          {step === 0 ? t.oneLiner : current}
        </div>
      </div>

      {currentQuiz && (
        <div style={{
          padding: 14, backgroundColor: WHITE, border: `1px solid ${BORDER}`,
          borderRadius: 14, marginBottom: 12,
        }}>
          <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
            Quiz briefing {step + 1} / 3
          </div>
          <div style={{ fontSize: 13, color: BLACK, lineHeight: 1.45, marginBottom: 12 }}>
            {currentQuiz.q}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {currentQuiz.options.map((opt, i) => {
              const picked = checks[step];
              const isPicked = picked === i;
              const showResult = picked !== null;
              const isCorrectOption = i === currentQuiz.correct;
              let bg: string = SURFACE;
              let bc: string = BORDER;
              let fc: string = BLACK;
              if (showResult) {
                if (isCorrectOption) { bg = "#EBF5EF"; bc = GREEN; fc = GREEN; }
                else if (isPicked) { bg = "#FDF6E3"; bc = AMBER; fc = AMBER; }
              } else if (isPicked) {
                bg = BLACK; bc = BLACK; fc = WHITE;
              }
              return (
                <button key={opt} onClick={() => picked === null && pickCheck(i)} style={{
                  padding: "10px 12px", textAlign: "left",
                  backgroundColor: bg, color: fc,
                  border: `1px solid ${bc}`,
                  borderRadius: 10, fontSize: 12, cursor: picked === null ? "pointer" : "default", fontFamily: "inherit",
                  lineHeight: 1.4,
                }}>
                  {opt}
                </button>
              );
            })}
          </div>
          {checks[step] !== null && (
            <div style={{
              marginTop: 10, padding: "8px 10px",
              backgroundColor: checks[step] === currentQuiz.correct ? "#EBF5EF" : "#FDF6E3",
              border: `1px solid ${checks[step] === currentQuiz.correct ? GREEN : AMBER}`,
              borderRadius: 8,
              fontSize: 11, color: checks[step] === currentQuiz.correct ? GREEN : AMBER, lineHeight: 1.4,
            }}>
              {checks[step] === currentQuiz.correct
                ? "Corretto. Lo salviamo come consolidato."
                : "Non proprio: la risposta giusta è quella in verde. Te la riproponiamo domani."}
            </div>
          )}
        </div>
      )}

      <button onClick={() => setSourcesOpen((v) => !v)} style={{
        padding: "11px 14px", backgroundColor: WHITE,
        border: `1px solid ${BORDER}`, borderRadius: 12,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        cursor: "pointer", fontFamily: "inherit", marginBottom: 10,
      }}>
        <div style={{ textAlign: "left" }}>
          <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Fonti tracciate
          </div>
          <div style={{ fontSize: 12, color: BLACK, marginTop: 2 }}>
            2 accademiche · 3 giornalismo specializzato
          </div>
        </div>
        <div style={{ fontSize: 16, color: BLACK, transform: sourcesOpen ? "rotate(45deg)" : "none", transition: "transform 150ms" }}>+</div>
      </button>

      {sourcesOpen && (
        <div style={{
          padding: 14, backgroundColor: SURFACE,
          border: `1px solid ${BORDER}`, borderRadius: 12, marginBottom: 12,
        }}>
          {[
            { kind: "Accademica", title: "Bender & Koller, 2020 — Climbing towards NLU", meta: "Paper · ACL" },
            { kind: "Accademica", title: "Stanford CRFM — Foundation Models report", meta: "Paper · 2023" },
            { kind: "Giornalismo", title: "MIT Tech Review — How LLMs really work", meta: "Long-form · 2024" },
            { kind: "Ricerca lab", title: "Anthropic — Mapping the mind of a model", meta: "Research note" },
            { kind: "Osservatorio", title: "PoliMi — AI nelle imprese italiane", meta: "Report · 2025" },
          ].map((src) => (
            <div key={src.title} style={{
              display: "flex", gap: 10, paddingBottom: 10, marginBottom: 10,
              borderBottom: `1px solid ${BORDER}`,
            }}>
              <div style={{
                minWidth: 78, height: 20, padding: "0 8px", borderRadius: 4, flexShrink: 0,
                backgroundColor: src.kind === "Accademica" ? BLACK : "#E4E3DD",
                color: src.kind === "Accademica" ? WHITE : BLACK,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 9, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase",
              }}>{src.kind}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, color: BLACK, lineHeight: 1.35 }}>{src.title}</div>
                <div style={{ fontSize: 10, color: GRAY, marginTop: 2 }}>{src.meta}</div>
              </div>
            </div>
          ))}
          <div style={{ fontSize: 10, color: GRAY, lineHeight: 1.5, paddingTop: 2 }}>
            Solo accademiche, ricerca dei lab, osservatori e giornalismo specializzato verificato.
          </div>
        </div>
      )}

      <button
        onClick={() => step < 2 ? setStep(step + 1) : undefined}
        style={{
          marginTop: "auto", marginBottom: 18,
          padding: "14px 0", border: "none",
          backgroundColor: BLACK, color: WHITE, borderRadius: 100,
          fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "inherit",
        }}>
        {step < 2 ? `Prossima nozione →` : "Vai al quiz finale →"}
      </button>
    </div>
  );
}

function DayQuiz({ t }: { t: DayTopic }) {
  const isDark = t.mode === "voice" || t.mode === "simulation";
  const fg = isDark ? WHITE : BLACK;
  const sub = isDark ? "#999" : GRAY;
  const surface = isDark ? "#181818" : SURFACE;
  const border = isDark ? "#262626" : BORDER;

  if (t.mode === "simulation") return <DaySimulation t={t} />;

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 20px", backgroundColor: isDark ? BLACK : undefined, overflowY: "auto" }}>
      <div style={{ paddingTop: 22, paddingBottom: 18 }}>
        <div style={{ fontSize: 10, color: sub, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 8 }}>
          {t.mode === "voice" ? "Quiz finale · vocale · T-" + t.daysToEvent + "g" : t.mode === "voice-opt" ? "Quiz finale · testo o voce" : "Quiz finale · sintesi dei 3 briefing"}
        </div>
        <div style={{ fontSize: 11, color: sub, letterSpacing: "0.04em", marginBottom: 8 }}>
          Una sola domanda che mette insieme le 3 nozioni di oggi.
        </div>
        <div style={{ fontSize: 18, fontWeight: 500, color: fg, lineHeight: 1.35 }}>
          {t.quizQuestion}
        </div>
      </div>

      {t.mode === "text" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {["A", "B", "C", "D"].map((l, i) => (
            <div key={l} style={{
              padding: "14px 16px",
              backgroundColor: i === 1 ? BLACK : WHITE,
              color: i === 1 ? WHITE : BLACK,
              border: `1px solid ${i === 1 ? BLACK : BORDER}`,
              borderRadius: 14,
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <div style={{
                width: 26, height: 26, borderRadius: 6,
                backgroundColor: i === 1 ? "#222" : "#F2F2F2",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 11, fontWeight: 500,
              }}>{l}</div>
              <div style={{ fontSize: 12, lineHeight: 1.4 }}>
                {["Opzione plausibile ma incompleta", "Risposta corretta e contestualizzata", "Definizione tecnica fuori contesto", "Affermazione vaga, non sostiene una conversazione"][i]}
              </div>
            </div>
          ))}
        </div>
      )}

      {t.mode === "voice-opt" && (
        <>
          <div style={{
            padding: 16, backgroundColor: surface, border: `1px solid ${border}`,
            borderRadius: 14, minHeight: 110, fontSize: 13, color: sub, lineHeight: 1.5,
          }}>
            Scrivi la tua risposta in 2–3 frasi...
          </div>
          <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
            <button style={{
              flex: 1, padding: "12px 0", borderRadius: 100,
              border: `1px solid ${BLACK}`, backgroundColor: WHITE, color: BLACK,
              fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "inherit",
            }}>
              Invia risposta
            </button>
            <button style={{
              flex: 1, padding: "12px 0", borderRadius: 100,
              border: "none", backgroundColor: BLACK, color: WHITE,
              fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "inherit",
            }}>
              Rispondi a voce →
            </button>
          </div>
          <div style={{ marginTop: 14, fontSize: 11, color: GRAY, textAlign: "center" }}>
            Mancano {t.daysToEvent} giorni — è il momento di iniziare ad allenare anche la voce
          </div>
        </>
      )}

      {t.mode === "voice" && (
        <>
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            height: 180, gap: 4,
          }}>
            {[18, 32, 24, 48, 36, 28, 52, 40, 22, 36, 28, 44, 20, 30, 26].map((h, i) => (
              <div key={i} style={{ width: 4, height: h, backgroundColor: ACCENT, borderRadius: 4 }} />
            ))}
          </div>
          <div style={{ textAlign: "center", color: sub, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            00:24 · Sto registrando
          </div>
          <button style={{
            marginTop: "auto", marginBottom: 18,
            padding: "14px 0", border: "none",
            backgroundColor: ACCENT, color: BLACK, borderRadius: 100,
            fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "inherit",
          }}>
            Stop e analizza →
          </button>
        </>
      )}
    </div>
  );
}

function DaySimulation({ t }: { t: DayTopic }) {
  const turns: { who: "ai" | "you"; text: string; meta?: string }[] = [
    { who: "ai", text: "Apriamo. Tesi che vuoi difendere oggi in 20 secondi.", meta: "Round 1 · apertura" },
    { who: "you", text: "[tua risposta · 18s · ritmo costante]", meta: "valutazione: chiarezza ✓ · esempio mancante" },
    { who: "ai", text: "«L'AI sostituirà ruoli interi, non solo task — la tua tesi è ingenua.» Rispondi.", meta: "Round 2 · obiezione forte" },
    { who: "you", text: "[tua risposta · 42s · 2 esempi]", meta: "valutazione: riformulazione mancata, sei partito con «in realtà»" },
    { who: "ai", text: "Dammi un dato concreto sul mercato italiano che sostiene la tesi.", meta: "Round 3 · richiesta numerica" },
  ];

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 20px", backgroundColor: BLACK, overflowY: "auto" }}>
      <div style={{ paddingTop: 22, paddingBottom: 12 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <div style={{ fontSize: 10, color: "#999", letterSpacing: "0.16em", textTransform: "uppercase" }}>
            Simulazione · T-{t.daysToEvent}g
          </div>
          <div style={{
            fontSize: 10, color: ACCENT, letterSpacing: "0.12em",
            border: `1px solid ${ACCENT}`, borderRadius: 100, padding: "3px 8px",
          }}>
            LIVE
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 6 }}>
          <div style={{ fontSize: 32, fontWeight: 500, color: WHITE, letterSpacing: "-0.02em", lineHeight: 1 }}>
            08:24
          </div>
          <div style={{ fontSize: 12, color: "#999" }}>/ 15:00 rimanenti</div>
        </div>
        <div style={{ height: 4, backgroundColor: "#262626", borderRadius: 100, overflow: "hidden", marginBottom: 14 }}>
          <div style={{ height: "100%", width: "44%", backgroundColor: ACCENT }} />
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
          {[1, 2, 3, 4, 5].map((r) => (
            <div key={r} style={{
              flex: 1, padding: "6px 0", textAlign: "center",
              fontSize: 10, letterSpacing: "0.08em",
              backgroundColor: r <= 3 ? ACCENT : "#181818",
              color: r <= 3 ? BLACK : "#666",
              borderRadius: 6, fontWeight: 500,
            }}>
              R{r}
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 14 }}>
        {turns.map((tr, i) => (
          <div key={i} style={{
            padding: 12,
            backgroundColor: tr.who === "ai" ? "#181818" : "transparent",
            border: tr.who === "you" ? `1px solid #262626` : "none",
            borderRadius: 12,
            alignSelf: tr.who === "ai" ? "flex-start" : "flex-end",
            maxWidth: "92%",
          }}>
            <div style={{
              fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase",
              color: tr.who === "ai" ? ACCENT : "#666", marginBottom: 6,
            }}>
              {tr.who === "ai" ? "Interlocutore AI" : "Tu"} · {tr.meta}
            </div>
            <div style={{
              fontSize: 12, lineHeight: 1.5,
              color: tr.who === "ai" ? WHITE : "#bbb",
            }}>
              {tr.text}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        padding: 12, backgroundColor: "#181818", border: `1px solid ${ACCENT}`,
        borderRadius: 12, marginBottom: 14,
      }}>
        <div style={{ fontSize: 9, color: ACCENT, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>
          Round 3 · stai parlando
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 60, gap: 3 }}>
          {[14, 22, 18, 36, 28, 20, 42, 30, 16, 28, 22, 34, 18, 24, 20, 32, 26].map((h, i) => (
            <div key={i} style={{ width: 3, height: h, backgroundColor: ACCENT, borderRadius: 3 }} />
          ))}
        </div>
        <div style={{ textAlign: "center", fontSize: 10, color: "#999", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 4 }}>
          00:24 · ritmo OK
        </div>
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
        <button style={{
          flex: 1, padding: "12px 0", border: `1px solid #262626`,
          backgroundColor: "#0A0A0A", color: WHITE, borderRadius: 100,
          fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "inherit",
        }}>
          Pausa
        </button>
        <button style={{
          flex: 2, padding: "12px 0", border: "none",
          backgroundColor: ACCENT, color: BLACK, borderRadius: 100,
          fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "inherit",
        }}>
          Chiudi turno e ricevi feedback →
        </button>
      </div>
    </div>
  );
}

function DayScore({ t }: { t: DayTopic }) {
  const delta = t.scoreAfter - t.scoreBefore;
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 20px", overflowY: "auto" }}>
      <div style={{ paddingTop: 22, paddingBottom: 14 }}>
        <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 8 }}>
          Sessione conclusa · Giorno {t.day}
        </div>
        <div style={{ fontSize: 22, fontWeight: 500, color: BLACK, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
          Sei pronto al {t.scoreAfter}%.
        </div>
        <div style={{ fontSize: 13, color: GRAY, marginTop: 6 }}>
          {delta >= 0 ? "+" : ""}{delta} pt rispetto a ieri
        </div>
      </div>

      <div style={{ marginTop: 6, padding: 18, backgroundColor: BLACK, color: WHITE, borderRadius: 16 }}>
        <div style={{ fontSize: 10, color: "#999", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>
          Readiness score
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 16 }}>
          <div style={{ fontSize: 56, fontWeight: 500, color: ACCENT, letterSpacing: "-0.03em", lineHeight: 1 }}>
            {t.scoreAfter}
          </div>
          <div style={{ fontSize: 18, color: "#999" }}>/ 100</div>
        </div>
        <div style={{ height: 6, backgroundColor: "#262626", borderRadius: 100, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${t.scoreAfter}%`, backgroundColor: ACCENT }} />
        </div>
      </div>

      <div style={{ marginTop: 14, padding: 14, backgroundColor: GREEN_BG, borderRadius: 12 }}>
        <div style={{ fontSize: 10, color: GREEN, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>
          Punto forte di oggi
        </div>
        <div style={{ fontSize: 12, color: GREEN, lineHeight: 1.5 }}>
          Hai consolidato «{t.topicShort}». Sai sostenerlo in una conversazione.
        </div>
      </div>

      <div style={{ marginTop: 10, padding: 14, backgroundColor: AMBER_BG, borderRadius: 12 }}>
        <div style={{ fontSize: 10, color: AMBER, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>
          Da rivedere domani
        </div>
        <div style={{ fontSize: 12, color: AMBER, lineHeight: 1.5 }}>
          {t.daysToEvent > 5 ? "L'apertura conversazionale resta il gap più grosso." : t.daysToEvent > 2 ? "Sotto pressione tendi a fare definizioni invece di esempi." : "Ritmo del discorso: rallenta nei passaggi tecnici."}
        </div>
      </div>

      <button style={{
        marginTop: "auto", marginBottom: 18,
        padding: "14px 0", border: "none",
        backgroundColor: BLACK, color: WHITE, borderRadius: 100,
        fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "inherit",
      }}>
        Chiudi sessione
      </button>
    </div>
  );
}

const DAY_TOPICS: DayTopic[] = [
  {
    day: 1, daysToEvent: 11,
    topic: "Cos'è davvero un LLM",
    topicShort: "cos'è un LLM",
    oneLiner: "Un modello statistico che prevede la parola successiva. Non «ragiona»: estrae pattern da miliardi di testi.",
    briefingBullets: [
      "Prevedere ≠ comprendere: l'output può essere fluente e sbagliato.",
      "La «conoscenza» è ferma alla data di training. Non sa nulla dopo.",
      "Non c'è memoria tra una conversazione e l'altra (a meno che tu non gliela dia).",
    ],
    quizQuestion: "Spiega in 2 frasi cos'è un LLM a qualcuno che non è del settore.",
    mode: "text",
    scoreBefore: 0, scoreAfter: 18,
  },
  {
    day: 2, daysToEvent: 10,
    topic: "Come si costruisce un buon prompt",
    topicShort: "il prompt come interfaccia",
    oneLiner: "Il prompt non è una domanda: è un brief. Ruolo + contesto + obiettivo + formato.",
    briefingBullets: [
      "Dai al modello un ruolo esplicito («sei un senior brand strategist»).",
      "Contesto prima della richiesta. Mai presupporre che capisca.",
      "Iterare: la prima risposta è quasi sempre da raffinare.",
    ],
    quizQuestion: "Quale di questi prompt produrrà il risultato più utile?",
    mode: "text",
    scoreBefore: 18, scoreAfter: 28,
  },
  {
    day: 3, daysToEvent: 9,
    topic: "RAG, fonti e ancoraggio",
    topicShort: "RAG e ancoraggio fonti",
    oneLiner: "RAG = aggiungere fonti esterne al modello in tempo reale. Riduce allucinazioni, aumenta tracciabilità.",
    briefingBullets: [
      "Retrieval = il modello cerca, poi risponde con le fonti recuperate.",
      "Funziona quando le fonti sono di qualità. Garbage in, garbage out resta vero.",
      "Le citazioni sono il vero deliverable per contesti professionali.",
    ],
    quizQuestion: "Perché un sistema RAG è preferibile a un LLM puro in ambito enterprise?",
    mode: "text",
    scoreBefore: 28, scoreAfter: 37,
  },
  {
    day: 4, daysToEvent: 8,
    topic: "Allucinazioni: cosa sono e perché succedono",
    topicShort: "allucinazioni",
    oneLiner: "Non è un bug — è il modo in cui funzionano. Generano testo plausibile anche quando non sanno.",
    briefingBullets: [
      "Più la domanda è specifica e fuori distribuzione, più alta la probabilità.",
      "Mai delegare decisioni dove l'errore non è verificabile a basso costo.",
      "Strategie: ancorare con fonti, chiedere «non lo so se non sicuro», cross-check.",
    ],
    quizQuestion: "Riassumi in 30 secondi: come riconosci un'allucinazione in produzione?",
    mode: "voice-opt",
    scoreBefore: 37, scoreAfter: 45,
  },
  {
    day: 5, daysToEvent: 7,
    topic: "AI nel mercato italiano: dove siamo davvero",
    topicShort: "AI in Italia",
    oneLiner: "Adozione a due velocità: enterprise sperimenta, PMI ancora ferma. Il gap di skill è il vincolo.",
    briefingBullets: [
      "Il 18% delle PMI italiane usa AI in produzione (vs 35% Germania).",
      "I casi d'uso che funzionano: customer support, ricerca interna, marketing operativo.",
      "Il freno non è la tecnologia: sono governance, dati sporchi, cultura.",
    ],
    quizQuestion: "Perché l'adozione AI in Italia è più lenta rispetto al resto d'Europa?",
    mode: "voice-opt",
    scoreBefore: 45, scoreAfter: 53,
  },
  {
    day: 6, daysToEvent: 6,
    topic: "Etica & regolamentazione: l'AI Act in pratica",
    topicShort: "AI Act in pratica",
    oneLiner: "L'AI Act europeo classifica i sistemi per rischio. Tu devi sapere in quale categoria cade il tuo caso d'uso.",
    briefingBullets: [
      "Rischio inaccettabile (bandito), alto rischio (regolato), limitato (trasparenza), minimo.",
      "Per progetti di brand: spesso ricadi in «rischio limitato» → obbligo di disclosure.",
      "Le multe sono percentuali sul fatturato globale. Non è teorico.",
    ],
    quizQuestion: "In quale categoria di rischio AI Act ricade un chatbot di customer service?",
    mode: "voice",
    scoreBefore: 53, scoreAfter: 60,
  },
  {
    day: 7, daysToEvent: 5,
    topic: "Il tuo posizionamento al talk",
    topicShort: "posizionamento al talk",
    oneLiner: "Decidi una tesi netta. Non riassumere il campo — prendi posizione. Le tre tesi che puoi sostenere.",
    briefingBullets: [
      "Tesi 1: «L'AI sostituisce task, non ruoli» (più sicura, meno memorabile).",
      "Tesi 2: «Il vero rischio non è l'AI: è la mediocrità che produce a scala».",
      "Tesi 3: «Chi userà AI batterà chi non la usa — ma a parità di prompt literacy».",
    ],
    quizQuestion: "Quale delle tre tesi sei pronto a difendere sotto pressione?",
    mode: "voice",
    scoreBefore: 60, scoreAfter: 66,
  },
  {
    day: 8, daysToEvent: 4,
    topic: "Stress test: simulazione obiezioni",
    topicShort: "tenere il punto sotto obiezioni",
    oneLiner: "Oggi non studi: pratichi sotto resistenza. L'interlocutore AI ti pone obiezioni come al talk vero.",
    briefingBullets: [
      "Schema: ascolta tutta l'obiezione, riformula, rispondi.",
      "Mai partire con «in realtà» — chiude la conversazione.",
      "Se non sai, ammetti e proponi una direzione. Mai improvvisare numeri.",
    ],
    quizQuestion: "L'interlocutore ti contesta la tesi. Rispondi.",
    mode: "simulation",
    scoreBefore: 66, scoreAfter: 73,
  },
  {
    day: 9, daysToEvent: 3,
    topic: "Apertura e chiusura del talk",
    topicShort: "apertura conversazionale",
    oneLiner: "I primi 30 secondi e gli ultimi 30 secondi. È lì che si decide se ti ricorderanno.",
    briefingBullets: [
      "Apri con una contraddizione apparente o un dato sorprendente — mai con la tua bio.",
      "Chiudi con una sola frase ripetibile. La gente cita una frase, non tre.",
      "Tra una sezione e l'altra: pausa di 2 secondi. Non riempire.",
    ],
    quizQuestion: "Prova la tua apertura. 30 secondi, niente di più.",
    mode: "simulation",
    scoreBefore: 73, scoreAfter: 80,
  },
  {
    day: 10, daysToEvent: 2,
    topic: "Q&A: gestire le domande del pubblico",
    topicShort: "gestione del Q&A",
    oneLiner: "Le domande sono la parte del talk dove perdi o guadagni autorevolezza. Si prepara, non si improvvisa.",
    briefingBullets: [
      "Anticipa le 5 domande più probabili e prepara la risposta in 2 frasi.",
      "Se non sai: «Non lo so, ma posso dirti come lo verificherei». Sempre meglio di inventare.",
      "Domande lunghe e confuse → riformula tu la domanda prima di rispondere.",
    ],
    quizQuestion: "Una domanda ostile dal pubblico — rispondi a voce.",
    mode: "simulation",
    scoreBefore: 80, scoreAfter: 86,
  },
];

type MiniQuiz = { q: string; options: string[]; correct: number };
const BRIEFING_QUIZZES: Record<number, MiniQuiz[]> = {
  1: [
    { q: "Cosa fa esattamente un LLM quando genera testo?", options: ["Prevede la parola successiva più probabile dato il contesto.", "Ragiona simulando il pensiero umano.", "Recupera la frase più simile dal database di training."], correct: 0 },
    { q: "Un LLM che dice «la legge X è entrata in vigore nel 2026» è affidabile?", options: ["Sì, se la sua data di training è successiva.", "No: anche con training aggiornato l'output può essere fluente e sbagliato.", "Sì, se la frase è grammaticalmente corretta."], correct: 1 },
    { q: "Tra una conversazione e l'altra, un LLM ricorda di te?", options: ["Sì, mantiene un profilo persistente.", "No, a meno che il sistema gli passi esplicitamente la memoria.", "Solo se sei loggato."], correct: 1 },
  ],
  2: [
    { q: "Quale apertura di prompt funziona meglio?", options: ["«Dimmi qualcosa sul marketing».", "«Sei un senior brand strategist. Lavoriamo su un B2B SaaS italiano…».", "«Spiegamelo bene»."], correct: 1 },
    { q: "Dove va messo il contesto in un prompt?", options: ["In fondo, come precisazione.", "Prima della richiesta, mai presupporre che capisca.", "Solo se il modello lo chiede."], correct: 1 },
    { q: "La prima risposta del modello è quasi sempre…", options: ["Definitiva, va presa così.", "Da raffinare iterando con follow-up mirati.", "Sbagliata, va scartata e rifatta da zero."], correct: 1 },
  ],
  3: [
    { q: "Cosa significa RAG?", options: ["Il modello inventa di meno grazie a un fine-tuning.", "Il modello recupera fonti esterne in tempo reale e poi risponde.", "Il modello viene ri-addestrato ogni notte."], correct: 1 },
    { q: "RAG funziona bene se…", options: ["Le fonti caricate sono di qualità — garbage in, garbage out.", "Si caricano più documenti possibili, anche duplicati.", "Si disattivano le citazioni per fluidità."], correct: 0 },
    { q: "Per un cliente enterprise, il vero deliverable di RAG è…", options: ["La velocità di risposta.", "Le citazioni tracciabili alle fonti.", "Il tono di voce coerente."], correct: 1 },
  ],
  4: [
    { q: "Le allucinazioni sono…", options: ["Un bug che verrà presto risolto.", "Il modo strutturale in cui i modelli generano testo plausibile anche quando non sanno.", "Errori dell'utente nel prompt."], correct: 1 },
    { q: "Su quale tipo di domande il rischio di allucinazione è più alto?", options: ["Domande generiche e ricorrenti.", "Domande molto specifiche e fuori distribuzione.", "Domande in inglese."], correct: 1 },
    { q: "Strategia anti-allucinazione più efficace?", options: ["Chiedere «sei sicuro?» dopo la risposta.", "Ancorare a fonti + chiedere al modello di dire «non lo so» se non sicuro.", "Aumentare la temperatura."], correct: 1 },
  ],
  5: [
    { q: "Quale percentuale di PMI italiane usa AI in produzione?", options: ["~5%", "~18%", "~35%"], correct: 1 },
    { q: "Casi d'uso che oggi funzionano meglio in azienda?", options: ["Customer support, ricerca interna, marketing operativo.", "Decisioni strategiche autonome.", "Sostituzione completa del middle management."], correct: 0 },
    { q: "Il freno principale all'adozione AI in Italia è…", options: ["La mancanza di modelli buoni.", "Governance, dati sporchi e cultura — non la tecnologia.", "Il costo delle API."], correct: 1 },
  ],
  6: [
    { q: "Quante categorie di rischio prevede l'AI Act?", options: ["Due: ammesso e vietato.", "Quattro: inaccettabile, alto, limitato, minimo.", "Sei, una per settore."], correct: 1 },
    { q: "Un chatbot di marketing in che categoria ricade tipicamente?", options: ["Alto rischio.", "Rischio limitato, con obbligo di disclosure.", "Inaccettabile."], correct: 1 },
    { q: "Le multe AI Act sono…", options: ["Forfettarie, max 100k €.", "Percentuali sul fatturato globale.", "Solo simboliche nella prima fase."], correct: 1 },
  ],
  7: [
    { q: "Cosa rende «forte» una tesi al talk?", options: ["È equilibrata e cita tutti i punti di vista.", "Prende posizione netta, non riassume il campo.", "È supportata da molte slide."], correct: 1 },
    { q: "La tesi «AI sostituisce task, non ruoli» è…", options: ["La più memorabile delle tre.", "La più sicura ma meno memorabile.", "Indifendibile sotto pressione."], correct: 1 },
    { q: "Il criterio per scegliere la tua tesi è…", options: ["Quella che fa più applauso.", "Quella che sei pronto a difendere sotto pressione.", "Quella più nuova."], correct: 1 },
  ],
  8: [
    { q: "Quando arriva un'obiezione forte, cosa fai prima di tutto?", options: ["Rispondi subito per non perdere ritmo.", "Ascolti tutta l'obiezione, riformuli, poi rispondi.", "Cambi argomento."], correct: 1 },
    { q: "Quale apertura di risposta va evitata?", options: ["«Buona domanda…»", "«In realtà…» — chiude la conversazione.", "«Capisco il tuo punto…»"], correct: 1 },
    { q: "Se non sai un numero, cosa fai?", options: ["Lo improvvisi per non sembrare debole.", "Ammetti e proponi come lo verificheresti.", "Cambi argomento."], correct: 1 },
  ],
  9: [
    { q: "Come apri i primi 30 secondi del talk?", options: ["Con la tua bio per dare credibilità.", "Con una contraddizione apparente o un dato sorprendente.", "Con un ringraziamento al pubblico."], correct: 1 },
    { q: "La chiusura più efficace è…", options: ["Tre take-away ben riassunti.", "Una sola frase ripetibile — la gente cita una frase, non tre.", "Una call to action lunga."], correct: 1 },
    { q: "Tra una sezione e l'altra cosa fai?", options: ["Riempi con un «quindi…».", "Pausa di 2 secondi, senza riempire.", "Passi subito alla slide successiva."], correct: 1 },
  ],
  10: [
    { q: "La gestione del Q&A si…", options: ["Improvvisa: dipende dal pubblico.", "Prepara: anticipi le 5 domande più probabili.", "Evita: si finisce il talk in tempo."], correct: 1 },
    { q: "Se non conosci la risposta, dici…", options: ["«Buona domanda, ne riparliamo offline».", "«Non lo so, ma posso dirti come lo verificherei».", "Una risposta plausibile per non perdere autorevolezza."], correct: 1 },
    { q: "Domanda lunga e confusa dal pubblico — cosa fai?", options: ["Rispondi a pezzi, sperando di coprire tutto.", "Riformuli tu la domanda prima di rispondere.", "Chiedi di ripeterla."], correct: 1 },
  ],
};

// ───────────────────────── PROTOTYPE LAYOUT ─────────────────────────
interface ScreenDef {
  label: string;
  render: () => ReactNode;
  bg?: string;
  phase: string;
  goal: string;
  insight: string;
}

interface DaySection {
  day: string;
  title: string;
  body: string;
  screens: ScreenDef[];
}

function buildDaySections(): DaySection[] {
  let counter = 11;
  const num = () => String(counter++).padStart(2, "0");
  const sections: DaySection[] = [];

  const t1 = DAY_TOPICS[0];
  sections.push({
    day: "Giorno 1",
    title: `Home, piano dei 12 giorni & prima sessione · ${t1.topic}`,
    body: "Il piano si materializza: home, traiettoria dei 12 giorni e prima micro-sessione. Briefing, quiz testuale, aggiornamento del readiness score.",
    screens: [
      { label: `${num()} · Home`, phase: "F06 · Dashboard", goal: "Mostrare progresso, gap e prossima sessione in un colpo d'occhio.", insight: "I06 — Aggiornamento ordinato, non FOMO.", render: () => <HomeScreen /> },
      { label: `${num()} · Piano 12 giorni`, phase: "F06 · Dashboard", goal: "Rendere visibile la sequenza che porta all'evento.", insight: "I01 — La struttura risolve il «da dove inizio».", render: () => <PlanScreen /> },
      { label: `${num()} · Sessione · intro`, phase: "F07 · Entrata sessione", goal: `Aprire la micro-sessione del giorno: ${t1.topicShort}.`, insight: "I01 — Micro-sessioni < soglia di rinvio.", render: () => <DayIntro t={t1} /> },
      { label: `${num()} · 3 briefing + quiz`, phase: "F08 · Briefing", goal: "Tre nozioni, ognuna con un quiz a scelta multipla subito dopo.", insight: "I04 — Seleziona, non aggrega.", render: () => <DayBriefing t={t1} /> },
      { label: `${num()} · Quiz finale`, phase: "F10 · Quiz finale", goal: "Una sola domanda che sintetizza i 3 briefing della giornata.", insight: "I08 — Rehearsal cumulativo, non puntuale.", render: () => <DayQuiz t={t1} /> },
      { label: `${num()} · Readiness score`, phase: "F13 · Readiness score", goal: "Chiusura del ciclo: percentuale + delta.", insight: "I03 — Saprai dove sei prima di entrare.", render: () => <DayScore t={t1} /> },
    ],
  });

  for (let i = 1; i < DAY_TOPICS.length; i++) {
    const t = DAY_TOPICS[i];
    const isDark = t.mode === "voice" || t.mode === "simulation";
    const quizPhase =
      t.mode === "text" ? "F10 · Quiz testuale"
      : t.mode === "voice-opt" ? "F10–11 · Quiz testo + voce"
      : t.mode === "voice" ? "F11 · Quiz vocale"
      : "F12 · Simulazione";
    sections.push({
      day: `Giorno ${t.day}`,
      title: `${t.topic} · T-${t.daysToEvent}g`,
      body: `${t.oneLiner} Briefing, costruzione dell'argomento, quiz adattivo, aggiornamento del readiness score.`,
      screens: [
        { label: `${num()} · Sessione · intro`, phase: "F07 · Entrata sessione", goal: `Aprire la micro-sessione del giorno: ${t.topicShort}.`, insight: "I01 — 15 min sotto la soglia di rinvio.", render: () => <DayIntro t={t} /> },
        { label: `${num()} · 3 briefing + quiz`, phase: "F08 · Briefing", goal: "Tre nozioni, ognuna con un quiz a scelta multipla subito dopo.", insight: "I04 — Seleziona, non aggrega.", render: () => <DayBriefing t={t} /> },
        {
          label: `${num()} · Quiz finale · ${t.mode === "text" ? "testo" : t.mode === "voice-opt" ? "testo+voce" : t.mode === "voice" ? "voce" : "simulazione"}`,
          phase: quizPhase,
          goal: t.mode === "simulation"
            ? "Praticare sotto resistenza, non studiare."
            : t.mode === "voice" ? "Ritmo e chiarezza valutati insieme al contenuto."
            : t.mode === "voice-opt" ? "Introdurre la voce come opzione, non come obbligo."
            : "Active recall a basso attrito — meccanica leggera.",
          insight: t.mode === "simulation" ? "I02 — La sequenza che l'AI da sola non chiude." : "I08 — Rehearsal con resistenza.",
          bg: isDark ? BLACK : undefined,
          render: () => <DayQuiz t={t} />,
        },
        { label: `${num()} · Readiness score`, phase: "F13 · Readiness score", goal: "Aggiornamento del punteggio con delta e gap residui.", insight: "I03 — Togliere l'incertezza pre-evento.", render: () => <DayScore t={t} /> },
      ],
    });
  }

  sections.push({
    day: "Giorno 11",
    title: "Vigilia · T-12h",
    body: "Niente nuovi contenuti: consolidamento, checklist mentale, suggerimento di riposo. La fiducia che resta è quella che hai costruito.",
    screens: [
      { label: `${num()} · T-12h · Vigilia`, phase: "F14 · Countdown", goal: "Consolidamento + suggerimento di riposo.", insight: "I03 — Saprai dove sei prima di entrare.", render: () => <PreEvent12h /> },
    ],
  });

  sections.push({
    day: "Giorno 12",
    title: "Evento · T-2h → T-30m",
    body: "Le ultime ore. Ripasso lampo dei tre punti chiave, poi il ready mode: si spegne il rumore, resta solo l'apertura conversazionale.",
    screens: [
      { label: `${num()} · T-2h · Ultimo sprint`, phase: "F14 · Countdown", goal: "Ripasso lampo dei 3 punti chiave dell'evento.", insight: "I06 — Selezione, non quantità.", render: () => <PreEvent2h /> },
      { label: `${num()} · T-30m · Ready mode`, bg: BLACK, phase: "F15 · Ready mode", goal: "Spegnere il rumore, lasciare solo l'apertura conversazionale.", insight: "I05 — La sicurezza nasce dalla padronanza.", render: () => <PreEventReady /> },
    ],
  });

  return sections;
}

const SECTIONS: DaySection[] = [
  {
    day: "Giorno 0",
    title: "Benvenuto & profilazione",
    body: "Onboarding a micro-passi. Quattro domande per calibrare il piano: chi sei, di cosa parli, quanto sei già esposto, come ti senti prima di un evento.",
    screens: [
      { label: "01 · Welcome", phase: "F01 · Apertura", goal: "Rimuovere ogni richiesta cognitiva al primo ingresso.", insight: "I01 — Il blocco non è il tempo, è il «da dove inizio».", render: () => <OnboardingWelcome /> },
      { label: "02 · About you · Q1", phase: "F02 · Profilazione", goal: "Capire chi è l'utente per calibrare il tono.", insight: "I04 — Senza chi sei davanti, niente gerarchia.", render: () => <AboutQ1 /> },
      { label: "03 · About you · Q2", phase: "F02 · Profilazione", goal: "Mappare gli ambiti di esposizione professionale.", insight: "I04 — Calibratore di profondità, non potenziatore.", render: () => <AboutQ2 /> },
      { label: "04 · About you · Q3", phase: "F02 · Profilazione", goal: "Capire la baseline di preparazione attuale.", insight: "I02 — Chi usa AI da solo non è più pronto.", render: () => <AboutQ3 /> },
      { label: "05 · About you · Q4", phase: "F02 · Profilazione", goal: "Misurare la tensione emotiva di partenza.", insight: "I05 — L'ansia non è universale: dipende dal profilo.", render: () => <AboutQ4 /> },
      { label: "06 · Come funziona", phase: "F03 · Tutorial", goal: "Spiegare le micro-sessioni quotidiane da 15 min.", insight: "I07 — Il bisogno esiste: serve solo attivarlo bene.", render: () => <OnboardingHowItWorks /> },
      { label: "07 · Le fonti", phase: "F03 · Tutorial", goal: "Costruire fiducia editoriale prima del contenuto.", insight: "I04 — La gerarchia delle fonti è il valore.", render: () => <OnboardingSources /> },
      { label: "08 · Readiness score", bg: BLACK, phase: "F04 · Promessa", goal: "Mostrare la chiusura del ciclo prima di iniziarlo.", insight: "I03 — Saprai dove sei prima di entrare.", render: () => <OnboardingScore /> },
      { label: "09 · Memoria nel tempo", phase: "F04 · Promessa", goal: "Anticipare il valore longitudinale del modello.", insight: "Memoria personale dopo 3–4 eventi.", render: () => <OnboardingMemory /> },
      { label: "10 · Dichiara evento", phase: "F05 · Attivazione", goal: "Trasformare l'intenzione in piano costruito.", insight: "I07 — 65% ha già un evento nei prossimi 3 mesi.", render: () => <OnboardingDeclare /> },
    ],
  },
  ...buildDaySections(),
];

function PhaseDetail({ s }: { s: ScreenDef }) {
  return (
    <div style={{
      width: 390, marginTop: 20, padding: 18,
      backgroundColor: "#FBFAF6", border: `1px solid ${BORDER}`,
      borderRadius: 14,
    }}>
      <div style={{
        fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase",
        color: GRAY, marginBottom: 8, fontWeight: 500,
      }}>
        {s.phase}
      </div>
      <div style={{ fontSize: 13, color: BLACK, lineHeight: 1.45, marginBottom: 10, fontWeight: 500 }}>
        {s.goal}
      </div>
      <div style={{ fontSize: 11, color: GRAY, lineHeight: 1.5, paddingTop: 10, borderTop: `1px solid ${BORDER}` }}>
        <span style={{ color: BLACK, fontWeight: 500 }}>Insight: </span>{s.insight}
      </div>
    </div>
  );
}

function DayHeader({ section, index }: { section: DaySection; index: number }) {
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "200px 1fr",
      gap: 48, padding: "0 60px",
      maxWidth: 1400, margin: "0 auto", marginBottom: 32,
      borderTop: `1.5px solid ${BLACK}`, paddingTop: 32, marginTop: index === 0 ? 0 : 64,
    }}>
      <div>
        <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 6 }}>
          {String(index + 1).padStart(2, "0")} · {section.day}
        </div>
        <div style={{ fontSize: 11, color: GRAY }}>
          {section.screens.length} schermat{section.screens.length === 1 ? "a" : "e"}
        </div>
      </div>
      <div>
        <div style={{ fontSize: 28, fontWeight: 500, color: BLACK, letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 12 }}>
          {section.title}
        </div>
        <div style={{ fontSize: 14, color: "#3D3D3D", lineHeight: 1.6, maxWidth: 720 }}>
          {section.body}
        </div>
      </div>
    </div>
  );
}

const FLAT_SCREENS: (ScreenDef & { day: string; dayTitle: string })[] =
  SECTIONS.flatMap((sec) => sec.screens.map((s) => ({ ...s, day: sec.day, dayTitle: sec.title })));

function NavigatorPanel({
  current, onPick,
}: { current: number; onPick: (i: number) => void }) {
  let runningIdx = 0;
  return (
    <div style={{
      backgroundColor: "#FBFAF6", border: `1px solid ${BORDER}`, borderRadius: 18,
      padding: 24, maxHeight: 900, overflowY: "auto",
    }}>
      <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 4 }}>
        Navigatore Schermate
      </div>
      <div style={{ fontSize: 12, color: GRAY, marginBottom: 18 }}>
        Clicca per saltare in qualsiasi punto del flusso
      </div>

      {SECTIONS.map((sec, sIdx) => {
        const sectionStart = runningIdx;
        runningIdx += sec.screens.length;
        return (
          <div key={sec.day} style={{ marginBottom: 20 }}>
            <div style={{
              fontSize: 11, color: BLACK, fontWeight: 500,
              letterSpacing: "0.08em", textTransform: "uppercase",
              marginBottom: 10, paddingBottom: 6,
              borderBottom: `1px solid ${BORDER}`,
            }}>
              {String(sIdx + 1).padStart(2, "0")} · {sec.day} — {sec.title}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {sec.screens.map((s, i) => {
                const globalIdx = sectionStart + i;
                const active = globalIdx === current;
                return (
                  <button
                    key={s.label}
                    onClick={() => onPick(globalIdx)}
                    style={{
                      textAlign: "left",
                      backgroundColor: active ? BLACK : "transparent",
                      color: active ? "#FFFFFF" : BLACK,
                      border: "none", padding: "8px 10px", borderRadius: 8,
                      fontSize: 12, lineHeight: 1.35,
                      cursor: "pointer", fontFamily: "inherit",
                      display: "flex", alignItems: "center", gap: 8,
                    }}
                  >
                    <span style={{
                      fontSize: 10, opacity: 0.6, minWidth: 24,
                    }}>
                      {s.label.split(" · ")[0]}
                    </span>
                    <span>{s.label.split(" · ").slice(1).join(" · ")}</span>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function InteractivePrototype() {
  const [idx, setIdx] = useState(0);
  const s = FLAT_SCREENS[idx];
  const total = FLAT_SCREENS.length;

  const go = (delta: number) => setIdx((c) => Math.max(0, Math.min(total - 1, c + delta)));

  return (
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 460px) 1fr", gap: 56, padding: "0 60px", maxWidth: 1400, margin: "0 auto" }}>
      {/* Colonna telefono */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ paddingTop: 24 }}>
          <PhoneFrame label={s.label} bg={s.bg}>
            {s.render()}
          </PhoneFrame>
        </div>

        {/* Controlli prev/next */}
        <div style={{ display: "flex", gap: 12, marginTop: 28, width: 390 }}>
          <button
            onClick={() => go(-1)}
            disabled={idx === 0}
            style={{
              flex: 1, padding: "12px 16px",
              backgroundColor: "#FFFFFF", color: BLACK,
              border: `1px solid ${BLACK}`, borderRadius: 100,
              fontSize: 12, fontWeight: 500, cursor: idx === 0 ? "not-allowed" : "pointer",
              opacity: idx === 0 ? 0.35 : 1, fontFamily: "inherit",
            }}
          >
            ← Precedente
          </button>
          <button
            onClick={() => go(1)}
            disabled={idx === total - 1}
            style={{
              flex: 1, padding: "12px 16px",
              backgroundColor: BLACK, color: "#FFFFFF",
              border: `1px solid ${BLACK}`, borderRadius: 100,
              fontSize: 12, fontWeight: 500, cursor: idx === total - 1 ? "not-allowed" : "pointer",
              opacity: idx === total - 1 ? 0.35 : 1, fontFamily: "inherit",
            }}
          >
            Successivo →
          </button>
        </div>
        <div style={{ marginTop: 12, fontSize: 11, color: GRAY }}>
          {idx + 1} / {total} · {s.day} — {s.dayTitle}
        </div>

        {/* Card dettaglio fase */}
        <div style={{ width: 390, marginTop: 24 }}>
          <PhaseDetail s={s} />
        </div>
      </div>

      {/* Colonna navigatore */}
      <NavigatorPanel current={idx} onPick={setIdx} />
    </div>
  );
}

function CatalogView() {
  return (
    <div>
      {SECTIONS.map((section, idx) => (
        <div key={section.day}>
          <DayHeader section={section} index={idx} />
          <div style={{
            display: "flex", gap: 60, padding: "40px 60px 24px",
            overflowX: "auto", scrollSnapType: "x mandatory",
          }}>
            {section.screens.map((s) => (
              <div key={s.label} style={{ scrollSnapAlign: "start", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 16 }}>
                <PhoneFrame label={s.label} bg={s.bg}>
                  {s.render()}
                </PhoneFrame>
                <PhaseDetail s={s} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ReadinessHome() {
  const [view, setView] = useState<"single" | "catalog">("single");

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#F2F1ED",
        padding: "60px 0 100px",
        fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
      }}
    >
      <style>{`
        .readiness-proto, .readiness-proto * {
          font-family: 'Helvetica Neue', Helvetica, sans-serif !important;
        }
        .readiness-proto button { font-family: inherit; }
        .readiness-proto *::-webkit-scrollbar { width: 0; height: 0; display: none; }
        .readiness-proto * { scrollbar-width: none; -ms-overflow-style: none; }
      `}</style>
      <div className="readiness-proto">
        {/* Header */}
        <div style={{ padding: "0 60px 32px", maxWidth: 1400, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 40, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 10 }}>
              READINESS · PROTOTIPO INTERATTIVO
            </div>
            <div style={{ fontSize: 36, fontWeight: 500, color: BLACK, letterSpacing: "-0.02em", lineHeight: 1.05 }}>
              Prototipi Interattivi
            </div>
            <div style={{ fontSize: 14, color: GRAY, marginTop: 12, maxWidth: 720, lineHeight: 1.6 }}>
              Pianificazione adattiva, audio reali e quiz multimodali del Readiness Score. Naviga le 23 schermate giorno per giorno o esplora il catalogo completo.
            </div>
          </div>

          {/* Switch view */}
          <div style={{ display: "flex", gap: 4, backgroundColor: "#FFFFFF", border: `1px solid ${BORDER}`, borderRadius: 100, padding: 4 }}>
            {[
              { id: "single" as const, label: "Prototipo Singolo" },
              { id: "catalog" as const, label: "Catalogo Completo" },
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => setView(opt.id)}
                style={{
                  padding: "10px 18px", borderRadius: 100, border: "none",
                  backgroundColor: view === opt.id ? BLACK : "transparent",
                  color: view === opt.id ? "#FFFFFF" : BLACK,
                  fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "inherit",
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {view === "single" ? <InteractivePrototype /> : <CatalogView />}
      </div>
    </div>
  );
}
