import { useState, useEffect, useRef, ReactNode, createContext, useContext } from "react";
import { getReadinessTier } from "../utils/readinessTier";
import { ReadinessBadge } from "./ReadinessBadge";

// ─── Prototype Navigation Context ───────────────────────────────────────────
const ProtoNavCtx = createContext<{ goNext: () => void; goPrev: () => void; goToIndex?: (idx: number) => void } | null>(null);
function useProtoNav() { return useContext(ProtoNavCtx); }

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

function CloseIcon({ color = BLACK }: { color?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round">
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
  const nav = useProtoNav();

  const handleTabClick = (index: number) => {
    if (!nav?.goToIndex) return;
    if (index === 0) {
      const homeIdx = FLAT_SCREENS.findIndex(s => s.label.includes("· Home"));
      if (homeIdx !== -1) nav.goToIndex(homeIdx);
    } else if (index === 1) {
      const planIdx = FLAT_SCREENS.findIndex(s => s.label.includes("· Piano 12 giorni"));
      if (planIdx !== -1) nav.goToIndex(planIdx);
    } else if (index === 2) {
      const simIdx = FLAT_SCREENS.findIndex(s => s.day === "Giorno 8" && s.label.includes("Sessione · intro"));
      if (simIdx !== -1) nav.goToIndex(simIdx);
    } else if (index === 3) {
      const scoreIdx = FLAT_SCREENS.findIndex(s => s.label.includes("· Readiness score"));
      if (scoreIdx !== -1) nav.goToIndex(scoreIdx);
    }
  };

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
        <div key={tab.label} 
          onClick={() => handleTabClick(i)}
          style={{
            flex: 1, display: "flex", flexDirection: "column", alignItems: "center",
            gap: 4, padding: "4px 0", cursor: "pointer",
          }}
        >
          <tab.Icon active={active === i} />
          <span style={{
            fontSize: 11,
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
  const nav = useProtoNav();
  const score = 42;
  const daysLeft = 12;
  const [sourcesOpen, setSourcesOpen] = useState(false);
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", minHeight: 0, WebkitOverflowScrolling: 'touch' }}>
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

        <div 
          onClick={() => {
            const planIdx = FLAT_SCREENS.findIndex(s => s.label.includes("· Piano 12 giorni"));
            if (planIdx !== -1 && nav?.goToIndex) nav.goToIndex(planIdx);
          }}
          style={{
            margin: "20px 16px 0", backgroundColor: BLACK,
            borderRadius: 24, padding: "20px 18px 22px",
            cursor: "pointer",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                  Prossimo evento
                </div>
                <div style={{ fontSize: 19, fontWeight: 700, color: WHITE, letterSpacing: "-0.02em", marginTop: 6, lineHeight: 1.15 }}>
                  Talent Garden Talk · AI & Lavoro
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
            </div>
            <div style={{ backgroundColor: "rgba(255,255,255,0.05)", borderRadius: 16, padding: "12px 14px", border: "1px solid rgba(255,255,255,0.08)", width: "100%", boxSizing: "border-box" }}>
              <ReadinessBadge value={score} />
            </div>
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

        <div 
          onClick={() => {
            const idx = FLAT_SCREENS.findIndex(s => s.day === "Giorno 3" && s.label.includes("Sessione · intro"));
            if (idx !== -1 && nav?.goToIndex) nav.goToIndex(idx);
          }}
          style={{
            margin: "10px 16px 0", backgroundColor: ACCENT,
            borderRadius: 20, padding: "16px 18px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            cursor: "pointer",
          }}
        >
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
          <div 
            onClick={() => {
              const idx = FLAT_SCREENS.findIndex(s => s.day === "Giorno 1" && s.label.includes("Sessione · intro"));
              if (idx !== -1 && nav?.goToIndex) nav.goToIndex(idx);
            }}
            style={{
              backgroundColor: WHITE, border: `1px solid ${BORDER}`,
              borderRadius: 18, padding: "14px 14px 16px", minHeight: 124,
              display: "flex", flexDirection: "column", justifyContent: "space-between",
              cursor: "pointer",
            }}
          >
            <div>
              <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Check-in
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: BLACK, letterSpacing: "-0.01em", marginTop: 6, lineHeight: 1.25 }}>
                2 minuti per tenere traccia
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 10, color: GRAY, letterSpacing: "0.06em" }}>INIZIA</span>
              <ArrowRight />
            </div>
          </div>

          <div 
            onClick={() => {
              const idx = FLAT_SCREENS.findIndex(s => s.day === "Giorno 8" && s.label.includes("Sessione · intro"));
              if (idx !== -1 && nav?.goToIndex) nav.goToIndex(idx);
            }}
            style={{
              backgroundColor: BLACK, borderRadius: 18,
              padding: "14px 14px 16px", minHeight: 124,
              display: "flex", flexDirection: "column", justifyContent: "space-between",
              cursor: "pointer",
            }}
          >
            <div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Simula
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: WHITE, letterSpacing: "-0.01em", marginTop: 6, lineHeight: 1.25 }}>
                Elevator pitch · 60 secondi
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
              <div key={item.label} style={{ marginBottom: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 13, color: BLACK, fontWeight: 500, letterSpacing: "-0.01em" }}>{item.label}</span>
                <span style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: BLACK,
                  backgroundColor: "#E8FF5A",
                  padding: "3px 8px",
                  borderRadius: 100,
                }}>
                  {getReadinessTier(item.value).label}
                </span>
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
    </div>
  );
}

// ───────────────────────── ABOUT YOU — shared question card ─────────────────────────
function AboutQuestion({
  step, total, eyebrow, question, options, selected: initialSelected, ctaLabel = "Avanti →",
}: {
  step: number; total: number;
  eyebrow: string; question: string;
  options: { label: string; sub?: string; selected?: boolean }[];
  selected?: number; ctaLabel?: string;
}) {
  const nav = useProtoNav();
  const [selected, setSelected] = useState<number | undefined>(initialSelected);

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ flex: 1, overflowY: "auto", padding: "0 20px", WebkitOverflowScrolling: 'touch' }}>
        {/* Top: close + progress bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "10px 0 18px" }}>
          <button 
            onClick={() => nav?.goPrev()}
            style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            <ArrowLeft />
          </button>
          <div style={{ flex: 1, height: 8, backgroundColor: BORDER, borderRadius: 100, overflow: "hidden" }}>
            <div style={{
              width: `${(step / total) * 100}%`, height: "100%",
              backgroundColor: BLACK, borderRadius: 100,
            }} />
          </div>
          <button 
            onClick={() => nav?.goToIndex?.(10)}
            style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            <CloseIcon />
          </button>
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
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
          {options.map((o, i) => {
            const on = selected === i;
            return (
              <button 
                key={o.label} 
                onClick={() => setSelected(i)}
                style={{
                  padding: "16px 18px",
                  backgroundColor: on ? BLACK : WHITE,
                  color: on ? WHITE : BLACK,
                  border: `1.5px solid ${on ? BLACK : BORDER}`,
                  borderRadius: 16,
                  display: "flex", alignItems: "center", gap: 14,
                  cursor: "pointer", fontFamily: "inherit",
                  textAlign: "left", width: "100%",
                }}
              >
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
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ position: "sticky", bottom: 0, backgroundColor: "#F9F8F4", borderTop: `1px solid ${BORDER}`, padding: "16px 20px 28px", zIndex: 10 }}>
        <button 
          onClick={() => selected !== undefined && nav?.goNext()}
          style={{
            width: "100%", padding: "18px 0", border: "none",
            backgroundColor: selected !== undefined ? BLACK : "#C9C8C2",
            color: WHITE, borderRadius: 100,
            fontSize: 15, fontWeight: 600, cursor: selected !== undefined ? "pointer" : "not-allowed",
          }}
        >
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
  const nav = useProtoNav();
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 20px", height: "100%" }}>
      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", WebkitOverflowScrolling: 'touch', minHeight: 0 }}>
        <div style={{ padding: "8px 0", display: "flex", justifyContent: "flex-end", flexShrink: 0 }}>
          <div 
            onClick={() => nav?.goToIndex?.(10)}
            style={{ fontSize: 11, color: GRAY, letterSpacing: "0.1em", cursor: "pointer" }}
          >
            Salta
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
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
            marginBottom: 20,
          }}>
            <div style={{ fontSize: 12, color: GRAY, lineHeight: 1.55 }}>
              Un sistema che trasforma quello che impari in <span style={{ color: BLACK, fontWeight: 600 }}>prontezza misurabile</span>, giorno per giorno fino all'evento.
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "sticky", bottom: 0, backgroundColor: "#F9F8F4", borderTop: `1px solid ${BORDER}`, padding: "16px 0 28px", zIndex: 10, flexShrink: 0 }}>
        <button
          onClick={() => nav?.goNext()}
          style={{
            width: "100%", padding: "18px 0", border: "none",
            backgroundColor: BLACK, color: WHITE, borderRadius: 100,
            fontSize: 15, fontWeight: 600, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
          }}
        >
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
  const nav = useProtoNav();
  const steps = [
    { n: "01", t: "Dichiari il prossimo evento", d: "Data e tipo. Niente argomenti — li capiamo dal contesto." },
    { n: "02", t: "Ricevi un piano", d: "Micro-sessioni da 10–15 minuti al giorno fino al giorno X." },
    { n: "03", t: "Arrivi pronto", d: "Un readiness score ti dice dove sei forte e dove sei debole." },
  ];
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 20px", height: "100%" }}>
      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", WebkitOverflowScrolling: 'touch', minHeight: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", flexShrink: 0 }}>
          <button onClick={() => nav?.goPrev()} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center" }}>
            <ArrowLeft />
          </button>
          <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.1em" }}>2 / 6</div>
        </div>

        <div style={{ paddingTop: 20 }}>
          <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>
            Come funziona
          </div>
          <div style={{
            fontSize: 36, fontWeight: 700, color: BLACK,
            letterSpacing: "-0.035em", lineHeight: 1.02,
          }}>
            Tre mosse.<br />Dichiari, alleni,<br />arrivi pronto.
          </div>

          <div style={{ marginTop: 36, marginBottom: 20 }}>
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
      </div>

      <div style={{ position: "sticky", bottom: 0, backgroundColor: "#F9F8F4", borderTop: `1px solid ${BORDER}`, padding: "16px 0 28px", zIndex: 10, flexShrink: 0 }}>
        <button 
          onClick={() => nav?.goNext()}
          style={{
            width: "100%", padding: "18px 0", border: "none",
            backgroundColor: BLACK, color: WHITE, borderRadius: 100,
            fontSize: 15, fontWeight: 600, cursor: "pointer",
          }}
        >
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
  const nav = useProtoNav();
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 20px", height: "100%" }}>
      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", WebkitOverflowScrolling: 'touch', minHeight: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", flexShrink: 0 }}>
          <button onClick={() => nav?.goPrev()} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center" }}>
            <ArrowLeft />
          </button>
          <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.1em" }}>3 / 6</div>
        </div>

        <div style={{ paddingTop: 20 }}>
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
            marginBottom: 20,
          }}>
            "Questa settimana, per il tuo evento, vale la pena sapere queste 3 cose."
          </div>
        </div>
      </div>

      <div style={{ position: "sticky", bottom: 0, backgroundColor: "#F9F8F4", borderTop: `1px solid ${BORDER}`, padding: "16px 0 28px", zIndex: 10, flexShrink: 0 }}>
        <button 
          onClick={() => nav?.goNext()}
          style={{
            width: "100%", padding: "18px 0", border: "none",
            backgroundColor: BLACK, color: WHITE, borderRadius: 100,
            fontSize: 15, fontWeight: 600, cursor: "pointer",
          }}
        >
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
  const nav = useProtoNav();
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 20px", backgroundColor: BLACK, height: "100%" }}>
      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", WebkitOverflowScrolling: 'touch', minHeight: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "16px 0", flexShrink: 0 }}>
          <button onClick={() => nav?.goPrev()} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center" }}>
            <ArrowLeft color={WHITE} />
          </button>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>4 / 6</div>
        </div>

        <div style={{ paddingTop: 20 }}>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>
            Readiness score
          </div>
          <div style={{
            fontSize: 32, fontWeight: 700, color: WHITE,
            letterSpacing: "-0.03em", lineHeight: 1.05,
          }}>
            Non "hai fatto<br />tutto il piano".
          </div>
          <div style={{ fontSize: 14, color: ACCENT, lineHeight: 1.45, marginTop: 12, letterSpacing: "-0.01em" }}>
            Dove sei forte. Dove sei debole. Quanto sei pronto.
          </div>

          {/* Visual demo */}
          <div style={{
            marginTop: 30, display: "flex", justifyContent: "center",
          }}>
            <ReadinessBadge value={65} />
          </div>

          <div style={{
            marginTop: 28, padding: "16px 18px",
            backgroundColor: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16,
          }}>
            <div style={{ fontSize: 14, color: WHITE, lineHeight: 1.5, letterSpacing: "-0.01em" }}>
              "Il tuo punto critico è l'apertura conversazionale, non il contenuto."
            </div>
          </div>

          <div style={{ marginTop: 22, fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.55, marginBottom: 20 }}>
            Il punteggio non promette che performerai meglio. Promette che saprai dove sei prima di entrare.
          </div>
        </div>
      </div>

      <div style={{ position: "sticky", bottom: 0, backgroundColor: BLACK, borderTop: "1px solid rgba(255,255,255,0.1)", padding: "16px 0 28px", zIndex: 10, flexShrink: 0 }}>
        <button 
          onClick={() => nav?.goNext()}
          style={{
            width: "100%", padding: "18px 0", border: "none",
            backgroundColor: ACCENT, color: BLACK, borderRadius: 100,
            fontSize: 15, fontWeight: 700, cursor: "pointer",
          }}
        >
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
  const nav = useProtoNav();
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 20px", height: "100%" }}>
      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", WebkitOverflowScrolling: 'touch', minHeight: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", flexShrink: 0 }}>
          <button onClick={() => nav?.goPrev()} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center" }}>
            <ArrowLeft />
          </button>
          <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.1em" }}>5 / 6</div>
        </div>

        <div style={{ paddingTop: 20 }}>
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
          <div style={{ marginTop: 30, marginBottom: 20 }}>
            {[
              { e: "Evento 1", note: "Baseline iniziale", v: 18 },
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
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <span style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: BLACK,
                    backgroundColor: "#E8FF5A",
                    padding: "4px 10px",
                    borderRadius: 100,
                    whiteSpace: "nowrap"
                  }}>
                    {getReadinessTier(p.v).label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ position: "sticky", bottom: 0, backgroundColor: "#F9F8F4", borderTop: `1px solid ${BORDER}`, padding: "16px 0 28px", zIndex: 10, flexShrink: 0 }}>
        <button 
          onClick={() => nav?.goNext()}
          style={{
            width: "100%", padding: "18px 0", border: "none",
            backgroundColor: BLACK, color: WHITE, borderRadius: 100,
            fontSize: 15, fontWeight: 600, cursor: "pointer",
          }}
        >
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
  const nav = useProtoNav();
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 20px", height: "100%" }}>
      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", WebkitOverflowScrolling: 'touch', minHeight: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", flexShrink: 0 }}>
          <button onClick={() => nav?.goPrev()} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center" }}>
            <ArrowLeft />
          </button>
          <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.1em" }}>6 / 6</div>
        </div>

        <div style={{ paddingTop: 20 }}>
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
            marginBottom: 20,
          }}>
            <span style={{ fontSize: 9, color: BLACK, fontWeight: 600, letterSpacing: "0.12em", marginTop: 2 }}>
              AUTO →
            </span>
            <span style={{ fontSize: 12, color: GRAY, lineHeight: 1.5 }}>
              Capiamo da soli gli argomenti dal contesto. Non ti chiediamo di compilarli.
            </span>
          </div>
        </div>
      </div>

      <div style={{ position: "sticky", bottom: 0, backgroundColor: "#F9F8F4", borderTop: `1px solid ${BORDER}`, padding: "16px 0 28px", zIndex: 10, flexShrink: 0 }}>
        <button 
          onClick={() => nav?.goNext()}
          style={{
            width: "100%", padding: "18px 0", border: "none",
            backgroundColor: ACCENT, color: BLACK, borderRadius: 100,
            fontSize: 15, fontWeight: 700, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
          }}
        >
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
  const nav = useProtoNav();
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
    <div style={{ flex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ flex: 1, overflowY: "auto", padding: "0 20px", WebkitOverflowScrolling: 'touch', minHeight: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0 16px" }}>
          <button 
            onClick={() => {
              const homeIdx = FLAT_SCREENS.findIndex(s => s.label.includes("· Home"));
              if (homeIdx !== -1 && nav?.goToIndex) nav.goToIndex(homeIdx);
            }} 
            style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            <ArrowLeft />
          </button>
          <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.1em" }}>Piano · 12 giorni</div>
          <MenuIcon />
        </div>

        <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.16em", textTransform: "uppercase" }}>
          Obiettivo
        </div>
        <div style={{ fontSize: 24, fontWeight: 700, color: BLACK, letterSpacing: "-0.025em", lineHeight: 1.15, marginTop: 6 }}>
          Talent Garden, sapendo parlare di AI.
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
              {phase.days.map((d, i, arr) => {
                const dayIntroIdx = FLAT_SCREENS.findIndex(
                  (s) => s.day === `Giorno ${d.d}` && s.label.includes("Sessione · intro")
                );
                return (
                  <div 
                    key={d.d}
                    onClick={() => {
                      if (dayIntroIdx !== -1 && nav?.goToIndex) {
                        nav.goToIndex(dayIntroIdx);
                      }
                    }}
                    style={{
                      display: "flex", gap: 12, alignItems: "center",
                      padding: "10px 0",
                      borderBottom: i < arr.length - 1 ? `0.5px solid ${BORDER}` : "none",
                      cursor: dayIntroIdx !== -1 ? "pointer" : "default",
                    }}
                  >
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
                );
              })}
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
  const nav = useProtoNav();
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ flex: 1, overflowY: "auto", padding: "0 20px", WebkitOverflowScrolling: 'touch', minHeight: 0 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0 24px" }}>
        <button onClick={() => nav?.goPrev()} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center" }}>
          <ArrowLeft />
        </button>
        <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.1em" }}>Giorno 3 di 12</div>
        <button onClick={() => {
          const homeIdx = FLAT_SCREENS.findIndex(s => s.label.includes("· Home"));
          if (homeIdx !== -1 && nav?.goToIndex) nav.goToIndex(homeIdx);
        }} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center" }}>
          <CloseIcon />
        </button>
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
      </div>
 
      <div style={{ position: "sticky", bottom: 0, backgroundColor: "#F9F8F4", borderTop: `1px solid ${BORDER}`, padding: "16px 20px 28px", zIndex: 10 }}>
        <button 
          onClick={() => {
            const idx = FLAT_SCREENS.findIndex(s => s.day === "Giorno 3" && s.label.includes("Sessione · intro"));
            if (idx !== -1 && nav?.goToIndex) nav.goToIndex(idx);
          }}
          style={{
            width: "100%", padding: "18px 0", border: "none",
            backgroundColor: ACCENT, color: BLACK, borderRadius: 100,
            fontSize: 15, fontWeight: 700, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
          }}
        >
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
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10,
      }}>
        <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Stato di preparazione
        </div>
        <ReadinessBadge value={65} />
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
  const nav = useProtoNav();
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ flex: 1, overflowY: "auto", padding: "0 20px", WebkitOverflowScrolling: 'touch' }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0 20px" }}>
          <button onClick={() => nav?.goPrev()} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center" }}>
            <ArrowLeft />
          </button>
          <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.1em" }}>Vigilia</div>
          <button onClick={() => {
            const homeIdx = FLAT_SCREENS.findIndex(s => s.label.includes("· Home"));
            if (homeIdx !== -1 && nav?.goToIndex) nav.goToIndex(homeIdx);
          }} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center" }}>
            <CloseIcon />
          </button>
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
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10,
        }}>
          <div style={{
            fontSize: 10, color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500,
          }}>
            Stato di preparazione
          </div>
          <ReadinessBadge value={82} />
        </div>

        <div style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 8 }}>
          <Accordion label="Stasera, 10 minuti" hint="2 fatti · 2 da fare" defaultOpen>
            {[
              { t: "Rileggi i 4 concetti chiave su LLM", done: true },
              { t: "Ascolta il tuo discorso registrot (45s)", done: true },
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
            <div style={{ fontSize: 12, color: GRAY, lineHeight: 1.55, marginBottom: 12 }}>
              Dormi presto. La memoria fissa di notte quello che hai allenato di giorno.
            </div>
          </Accordion>
        </div>
      </div>

      <div style={{ position: "sticky", bottom: 0, backgroundColor: "#FFFFFF", borderTop: "1px solid #E4E3DD", padding: "16px 20px", zIndex: 10 }}>
        <button 
          onClick={() => nav?.goNext()}
          style={{
            width: "100%", padding: "18px 0", border: "none",
            backgroundColor: BLACK, color: WHITE, borderRadius: 100,
            fontSize: 15, fontWeight: 600, cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          Apri la simulazione finale
        </button>
      </div>
    </div>
  );
}

// ───────────────────────── PRE-EVENT — T-2h ─────────────────────────
function PreEvent2h() {
  const nav = useProtoNav();
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ flex: 1, overflowY: "auto", padding: "0 20px", WebkitOverflowScrolling: 'touch' }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0 20px" }}>
          <button onClick={() => nav?.goPrev()} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center" }}>
            <ArrowLeft />
          </button>
          <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.1em" }}>Ultimo Sprint</div>
          <button onClick={() => {
            const homeIdx = FLAT_SCREENS.findIndex(s => s.label.includes("· Home"));
            if (homeIdx !== -1 && nav?.goToIndex) nav.goToIndex(homeIdx);
          }} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center" }}>
            <CloseIcon />
          </button>
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

        {/* Readiness final */}
        <div style={{
          marginTop: 20, padding: "18px 20px",
          backgroundColor: BLACK, color: WHITE, borderRadius: 20,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10,
        }}>
          <div style={{
            fontSize: 10, color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500,
          }}>
            Stato di preparazione
          </div>
          <ReadinessBadge value={82} />
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
          marginBottom: 20
        }}>
          Sai cosa dire. Adesso ricordati solo di rallentare quando rispondi.
        </div>
      </div>

      <div style={{ position: "sticky", bottom: 0, backgroundColor: "#FFFFFF", borderTop: "1px solid #E4E3DD", padding: "16px 20px", zIndex: 10 }}>
        <button 
          onClick={() => nav?.goNext()}
          style={{
            width: "100%", padding: "18px 0", border: "none",
            backgroundColor: BLACK, color: WHITE, borderRadius: 100,
            fontSize: 15, fontWeight: 600, cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          Inizia l'ultimo sprint
        </button>
      </div>
    </div>
  );
}

// ───────────────────────── PRE-EVENT — T-30min · READY MODE ─────────────────────────
function PreEventReady() {
  const nav = useProtoNav();
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 20px", backgroundColor: BLACK }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 0 16px" }}>
        <button onClick={() => nav?.goPrev()} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center" }}>
          <ArrowLeft color={WHITE} />
        </button>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 500 }}>
          Ready mode
        </div>
        <button onClick={() => {
          const homeIdx = FLAT_SCREENS.findIndex(s => s.label.includes("· Home"));
          if (homeIdx !== -1 && nav?.goToIndex) nav.goToIndex(homeIdx);
        }} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center" }}>
          <CloseIcon color={WHITE} />
        </button>
      </div>

      <div style={{ flex: 1, overflowY: "auto", paddingTop: 16 }}>
        <div style={{
          fontSize: 38, fontWeight: 800, color: WHITE,
          letterSpacing: "-0.04em", lineHeight: 1, textTransform: "uppercase",
        }}>
          Tutto quello che ti serve.
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
        <button 
          onClick={() => {
            const homeIdx = FLAT_SCREENS.findIndex(s => s.label.includes("· Home"));
            if (homeIdx !== -1 && nav?.goToIndex) nav.goToIndex(homeIdx);
          }}
          style={{
            flex: 2, padding: "16px 0", border: "none",
            backgroundColor: ACCENT, color: BLACK, borderRadius: 100,
            fontSize: 14, fontWeight: 700, cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          Sono pronto
        </button>
      </div>
    </div>
  );
}

// ───────────────────────── DAY SESSION TEMPLATES ─────────────────────────
type QuizMode = "text" | "voice-opt" | "voice" | "simulation";

interface MiniGameConfig {
  type: "drag-match" | "sequence" | "true-false" | "fill-blank" | "scramble";
  pairs?: { term: string; definition: string }[];
  items?: { id: string; text: string }[];
  correctOrder?: string[];
  statements?: { text: string; isTrue: boolean; explanation: string }[];
  sentences?: { before: string; answer: string; after: string; options: string[] }[];
  target?: string;
  hint?: string;
}

interface BriefingItem {
  text: string;
  videoUrl?: string;
  conceptTitle?: string;
  sourceName?: string;
  sourceYear?: number;
  miniGame?: MiniGameConfig;
}

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
  briefings?: BriefingItem[];
}

// ───────────────────────── VIDEO PILL COMPONENT ─────────────────────────
interface VideoPillProps {
  videoUrl: string;
  conceptNumber: number;
  totalConcepts: number;
  conceptTitle: string;
  sourceName: string;
  sourceYear: number;
  onNext: () => void;
  onSaveVoice?: () => void;
}

function VideoPill({
  videoUrl,
  conceptNumber,
  totalConcepts,
  conceptTitle,
  sourceName,
  sourceYear,
  onNext,
  onSaveVoice,
}: VideoPillProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);
  const [showCTA, setShowCTA] = useState(false);
  const [canTapToSkip, setCanTapToSkip] = useState(false);

  useEffect(() => {
    // Enable tap to skip after 3 seconds
    const timer = setTimeout(() => {
      setCanTapToSkip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.duration) {
      const currentProgress = video.currentTime / video.duration;
      setProgress(currentProgress * 100);
      if (currentProgress >= 0.85) {
        setShowCTA(true);
      }
    }
  };

  const handleVideoClick = () => {
    if (canTapToSkip) {
      setShowCTA(true);
    }
  };

  return (
    <div
      onClick={handleVideoClick}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "9/16",
        borderRadius: "20px",
        overflow: "hidden",
        backgroundColor: "#0A0A0A",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <video
        ref={videoRef}
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
        onTimeUpdate={handleTimeUpdate}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      {/* Bottom overlay with linear gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.6) 30%, transparent 65%)",
          pointerEvents: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "20px 16px 24px 16px",
        }}
      >
        <div style={{ pointerEvents: "auto", display: "flex", flexDirection: "column", gap: 8, marginBottom: 54 }}>
          {/* Concept Title */}
          <div
            style={{
              fontFamily: "Inter, 'Helvetica Neue', sans-serif",
              fontSize: "22px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "#FFFFFF",
              maxWidth: "85%",
            }}
          >
            {conceptTitle}
          </div>

          {/* Concept Label */}
          <div
            style={{
              fontFamily: "Inter, 'Helvetica Neue', sans-serif",
              fontSize: "10px",
              fontWeight: 400,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              marginTop: 4,
            }}
          >
            CONCETTO {conceptNumber} / {totalConcepts}
          </div>

          {/* Source Badge */}
          <div style={{ display: "flex", marginTop: 4 }}>
            <div
              style={{
                fontFamily: "Inter, 'Helvetica Neue', sans-serif",
                fontSize: "9px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.7)",
                backgroundColor: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
                padding: "4px 10px",
                borderRadius: "100px",
              }}
            >
              {sourceName} · {sourceYear}
            </div>
          </div>
        </div>

        {/* Buttons Flex Row */}
        <div
          style={{
            pointerEvents: "auto",
            display: "flex",
            gap: 10,
            width: "100%",
            zIndex: 10,
            marginBottom: 4,
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (onSaveVoice) onSaveVoice();
            }}
            style={{
              flex: 1,
              padding: "14px 0",
              backgroundColor: "transparent",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#FFFFFF",
              borderRadius: 100,
              fontSize: 13,
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "inherit",
              backdropFilter: "blur(8px)",
              transition: "all 0.2s",
            }}
          >
            Salva nota vocale
          </button>
          
          {showCTA && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              style={{
                flex: 2,
                padding: "14px 0",
                border: "none",
                backgroundColor: "#E8FF5A",
                color: "#0A0A0A",
                borderRadius: 100,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "inherit",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                animation: "fadeIn 0.3s ease-out",
              }}
            >
              Concetto successivo →
            </button>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "3px",
          backgroundColor: "rgba(255,255,255,0.15)",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            backgroundColor: "#E8FF5A",
            transition: "width 0.1s linear",
          }}
        />
      </div>
    </div>
  );
}

// ───────────────────────── MINI-GAMES ─────────────────────────

// GAME 1: DragMatchGame
interface DragMatchGameProps {
  pairs: { term: string; definition: string }[];
  onComplete: (score: number) => void;
}

function DragMatchGame({ pairs, onComplete }: DragMatchGameProps) {
  const [shuffledTerms, setShuffledTerms] = useState<string[]>([]);
  const [shuffledDefs, setShuffledDefs] = useState<string[]>([]);
  const [matches, setMatches] = useState<Record<string, string>>({}); // definition -> term
  const [attempts, setAttempts] = useState<Record<string, number>>({}); // term -> attemptCount
  const [shakingTerm, setShakingTerm] = useState<string | null>(null);
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);

  useEffect(() => {
    const terms = pairs.map((p) => p.term).sort(() => Math.random() - 0.5);
    const defs = pairs.map((p) => p.definition).sort(() => Math.random() - 0.5);
    setShuffledTerms(terms);
    setShuffledDefs(defs);
  }, [pairs]);

  const handleMatch = (term: string, definition: string) => {
    const pair = pairs.find((p) => p.term === term);
    const isCorrect = pair && pair.definition === definition;

    setAttempts((prev) => ({
      ...prev,
      [term]: (prev[term] || 0) + 1,
    }));

    if (isCorrect) {
      setMatches((prev) => {
        const next = { ...prev, [definition]: term };
        const matchedCount = Object.keys(next).length;
        if (matchedCount === pairs.length) {
          let firstAttemptCorrect = 0;
          pairs.forEach((p) => {
            const termAttempts = (attempts[p.term] || 0) + (p.term === term ? 1 : 0);
            if (termAttempts === 1) {
              firstAttemptCorrect++;
            }
          });
          const score = Math.round((firstAttemptCorrect / pairs.length) * 100);
          setTimeout(() => onComplete(score), 800);
        }
        return next;
      });
      setSelectedTerm(null);
    } else {
      setShakingTerm(term);
      setTimeout(() => setShakingTerm(null), 200);
    }
  };

  const handleDragStart = (e: React.DragEvent, term: string) => {
    e.dataTransfer.setData("text/plain", term);
  };

  const handleDrop = (e: React.DragEvent, definition: string) => {
    e.preventDefault();
    const term = e.dataTransfer.getData("text/plain");
    if (term) {
      handleMatch(term, definition);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.08em", textTransform: "uppercase" }}>
        Trascina o clicca per accoppiare
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 12 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {shuffledTerms.map((term) => {
            const isMatched = Object.values(matches).includes(term);
            const isShaking = shakingTerm === term;
            const isSelected = selectedTerm === term;

            return (
              <div
                key={term}
                draggable={!isMatched}
                onDragStart={(e) => handleDragStart(e, term)}
                onClick={() => !isMatched && setSelectedTerm(isSelected ? null : term)}
                style={{
                  background: isMatched ? "#EBF5EF" : isSelected ? "#E8FF5A" : "#FBFAF6",
                  border: `1px solid ${isMatched ? GREEN : isSelected ? BLACK : BORDER}`,
                  borderRadius: 10,
                  padding: "10px 14px",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13,
                  fontWeight: 500,
                  color: isMatched ? GREEN : "#0A0A0A",
                  cursor: isMatched ? "default" : "grab",
                  opacity: isMatched ? 0.6 : 1,
                  transform: isShaking ? "translateX(0px)" : "none",
                  animation: isShaking ? "shake 0.2s ease-in-out infinite" : "none",
                  userSelect: "none",
                }}
              >
                {term}
              </div>
            );
          })}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {shuffledDefs.map((def) => {
            const matchedTerm = matches[def];
            const hasMatch = !!matchedTerm;

            return (
              <div
                key={def}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleDrop(e, def)}
                onClick={() => selectedTerm && handleMatch(selectedTerm, def)}
                style={{
                  minHeight: 40,
                  border: hasMatch ? `2px solid ${GREEN}` : "2px dashed #E4E3DD",
                  borderRadius: 10,
                  padding: "10px 14px",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 12,
                  lineHeight: 1.35,
                  backgroundColor: hasMatch ? "#EBF5EF" : "#FFFFFF",
                  color: hasMatch ? GREEN : "#0A0A0A",
                  transition: "all 0.2s",
                  cursor: selectedTerm && !hasMatch ? "pointer" : "default",
                }}
              >
                {hasMatch ? (
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", color: GREEN }}>
                      {matchedTerm}
                    </span>
                    <span>{def}</span>
                  </div>
                ) : (
                  <span style={{ color: GRAY }}>{def}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// GAME 2: SequenceOrderGame
interface SequenceOrderGameProps {
  items: { id: string; text: string }[];
  correctOrder: string[];
  onComplete: (score: number) => void;
}

function SequenceOrderGame({ items, correctOrder, onComplete }: SequenceOrderGameProps) {
  const [list, setList] = useState<{ id: string; text: string }[]>([]);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [hasMoved, setHasMoved] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    setList(shuffled);
  }, [items]);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (index: number) => {
    if (draggedIndex === null || draggedIndex === index) return;
    const newList = [...list];
    const draggedItem = newList[draggedIndex];
    newList.splice(draggedIndex, 1);
    newList.splice(index, 0, draggedItem);
    setDraggedIndex(index);
    setList(newList);
    setHasMoved(true);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const handleConfirm = () => {
    setIsSubmitted(true);
    let correctCount = 0;
    list.forEach((item, index) => {
      if (correctOrder[index] === item.id) {
        correctCount++;
      }
    });
    const score = Math.round((correctCount / items.length) * 100);
    setTimeout(() => onComplete(score), 2000);
  };

  const moveItem = (fromIndex: number, direction: "up" | "down") => {
    const toIndex = direction === "up" ? fromIndex - 1 : fromIndex + 1;
    if (toIndex < 0 || toIndex >= list.length) return;
    const newList = [...list];
    const item = newList[fromIndex];
    newList.splice(fromIndex, 1);
    newList.splice(toIndex, 0, item);
    setList(newList);
    setHasMoved(true);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.08em", textTransform: "uppercase" }}>
        Ordina la sequenza corretta
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {list.map((item, index) => {
          const isDragging = draggedIndex === index;
          const isCorrect = correctOrder[index] === item.id;

          return (
            <div
              key={item.id}
              draggable={!isSubmitted}
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => {
                e.preventDefault();
                handleDragOver(index);
              }}
              onDragEnd={handleDragEnd}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                background: isDragging ? "#FBFAF6" : "#FFFFFF",
                border: isSubmitted
                  ? `1px solid ${isCorrect ? GREEN : "#D32F2F"}`
                  : `1px solid ${BORDER}`,
                borderRadius: 12,
                padding: "12px 16px",
                boxShadow: isDragging ? "0 4px 16px rgba(0,0,0,0.12)" : "none",
                transform: isDragging ? "scale(1.02)" : "none",
                transition: "box-shadow 0.2s, transform 0.2s",
                cursor: isSubmitted ? "default" : "grab",
              }}
            >
              {!isSubmitted && (
                <div style={{ display: "flex", alignItems: "center", cursor: "grab" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E4E3DD" strokeWidth="2.5">
                    <line x1="4" y1="8" x2="20" y2="8" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="16" x2="20" y2="16" />
                  </svg>
                </div>
              )}
              <div style={{ flex: 1, fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 500, color: BLACK }}>
                {item.text}
              </div>
              {isSubmitted ? (
                isCorrect ? (
                  <span style={{ color: GREEN, fontWeight: "bold" }}>✓</span>
                ) : (
                  <span style={{ color: "#D32F2F", fontWeight: "bold" }}>✕</span>
                )
              ) : (
                <div style={{ display: "flex", gap: 4 }}>
                  <button
                    disabled={index === 0}
                    onClick={() => moveItem(index, "up")}
                    style={{
                      border: "none",
                      backgroundColor: "transparent",
                      color: index === 0 ? BORDER : GRAY,
                      cursor: index === 0 ? "default" : "pointer",
                      fontSize: 12,
                    }}
                  >
                    ▲
                  </button>
                  <button
                    disabled={index === list.length - 1}
                    onClick={() => moveItem(index, "down")}
                    style={{
                      border: "none",
                      backgroundColor: "transparent",
                      color: index === list.length - 1 ? BORDER : GRAY,
                      cursor: index === list.length - 1 ? "default" : "pointer",
                      fontSize: 12,
                    }}
                  >
                    ▼
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {hasMoved && !isSubmitted && (
        <button
          onClick={handleConfirm}
          style={{
            width: "100%",
            padding: "14px 0",
            backgroundColor: BLACK,
            color: WHITE,
            border: "none",
            borderRadius: 100,
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          Conferma ordine
        </button>
      )}
    </div>
  );
}

// GAME 3: TrueFalseGame
interface TrueFalseGameProps {
  statements: { text: string; isTrue: boolean; explanation: string }[];
  onComplete: (score: number) => void;
}

function TrueFalseGame({ statements, onComplete }: TrueFalseGameProps) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<boolean | null>(null);
  const [scoreCount, setScoreCount] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  const current = statements[index];

  const handleAnswer = (answer: boolean) => {
    setSelected(answer);
    setShowFeedback(true);
    const isCorrect = answer === current.isTrue;
    if (isCorrect) {
      setScoreCount((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (index < statements.length - 1) {
      setIndex((prev) => prev + 1);
      setSelected(null);
      setShowFeedback(false);
    } else {
      const finalScore = Math.round((scoreCount / statements.length) * 100);
      onComplete(finalScore);
    }
  };

  const isAnswerCorrect = selected === current?.isTrue;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", justifyContent: "center", gap: 6 }}>
        {statements.map((_, idx) => (
          <div
            key={idx}
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: idx < index ? BLACK : idx === index && selected !== null ? BLACK : BORDER,
            }}
          />
        ))}
      </div>
      {current && (
        <>
          <div
            style={{
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
              fontWeight: 500,
              letterSpacing: "-0.01em",
              color: showFeedback ? (isAnswerCorrect ? "#1A6B3C" : "#7A5700") : "#0A0A0A",
              padding: "24px 16px",
              borderRadius: 16,
              border: `1px solid ${showFeedback ? (isAnswerCorrect ? GREEN : AMBER) : BORDER}`,
              backgroundColor: showFeedback ? (isAnswerCorrect ? "#EBF5EF" : "#FDF6E3") : "#FFFFFF",
              transition: "all 0.3s",
            }}
          >
            {current.text}
          </div>
          {!showFeedback ? (
            <div style={{ display: "flex", gap: 12 }}>
              <button
                onClick={() => handleAnswer(true)}
                style={{
                  flex: 1,
                  padding: "12px 0",
                  borderRadius: 100,
                  backgroundColor: "#EBF5EF",
                  color: "#1A6B3C",
                  border: `1px solid ${GREEN}`,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                Vero
              </button>
              <button
                onClick={() => handleAnswer(false)}
                style={{
                  flex: 1,
                  padding: "12px 0",
                  borderRadius: 100,
                  backgroundColor: "#FDF6E3",
                  color: "#7A5700",
                  border: `1px solid ${AMBER}`,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                Falso
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 12,
                  lineHeight: 1.5,
                  color: isAnswerCorrect ? GREEN : AMBER,
                  padding: "8px 12px",
                }}
              >
                {current.explanation}
              </div>
              <button
                onClick={handleNext}
                style={{
                  width: "100%",
                  padding: "14px 0",
                  backgroundColor: BLACK,
                  color: WHITE,
                  border: "none",
                  borderRadius: 100,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                {index < statements.length - 1 ? "Prossima →" : "Termina gioco →"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

// GAME 4: FillBlankGame
interface FillBlankGameProps {
  sentences: { before: string; answer: string; after: string; options: string[] }[];
  onComplete: (score: number) => void;
}

function FillBlankGame({ sentences, onComplete }: FillBlankGameProps) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [shakingOption, setShakingOption] = useState<string | null>(null);
  const [firstAttemptCorrectCount, setFirstAttemptCorrectCount] = useState(0);
  const [hasFailedThisOne, setHasFailedThisOne] = useState(false);

  const current = sentences[index];

  const handleSelect = (option: string) => {
    if (selected === current.answer) return;
    if (option === current.answer) {
      setSelected(option);
      if (!hasFailedThisOne) {
        setFirstAttemptCorrectCount((prev) => prev + 1);
      }
    } else {
      setHasFailedThisOne(true);
      setShakingOption(option);
      setTimeout(() => setShakingOption(null), 400);
    }
  };

  const handleNext = () => {
    if (index < sentences.length - 1) {
      setIndex((prev) => prev + 1);
      setSelected(null);
      setHasFailedThisOne(false);
    } else {
      const score = Math.round((firstAttemptCorrectCount / sentences.length) * 100);
      onComplete(score);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.08em", textTransform: "uppercase" }}>
        Riempi lo spazio vuoto
      </div>
      {current && (
        <>
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
              lineHeight: 1.6,
              color: BLACK,
              padding: "16px 12px",
              backgroundColor: SURFACE,
              border: `1px solid ${BORDER}`,
              borderRadius: 12,
            }}
          >
            {current.before}
            <span
              style={{
                borderBottom: `2px solid ${selected ? GREEN : BORDER}`,
                minWidth: "80px",
                display: "inline-block",
                textAlign: "center",
                fontWeight: 600,
                color: selected ? GREEN : "transparent",
                padding: "0 6px",
                margin: "0 6px",
              }}
            >
              {selected || "________"}
            </span>
            {current.after}
          </div>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
            {current.options.map((opt) => {
              const isCorrect = opt === current.answer;
              const isShaking = shakingOption === opt;
              const isSolved = selected === current.answer;

              let bg = "#FBFAF6";
              let bc = BORDER;
              let fc = BLACK;

              if (isSolved && isCorrect) {
                bg = "#EBF5EF";
                bc = GREEN;
                fc = GREEN;
              } else if (isShaking) {
                bg = "#FDF6E3";
                bc = AMBER;
                fc = AMBER;
              }

              return (
                <button
                  key={opt}
                  onClick={() => handleSelect(opt)}
                  disabled={isSolved}
                  style={{
                    backgroundColor: bg,
                    border: `1px solid ${bc}`,
                    color: fc,
                    borderRadius: 100,
                    padding: "8px 16px",
                    fontFamily: "Inter, sans-serif",
                    fontSize: 13,
                    fontWeight: 500,
                    cursor: isSolved ? "default" : "pointer",
                    animation: isShaking ? "shake 0.2s ease-in-out infinite" : "none",
                    transition: "background-color 0.2s, border-color 0.2s",
                  }}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          {selected === current.answer && (
            <button
              onClick={handleNext}
              style={{
                width: "100%",
                padding: "14px 0",
                backgroundColor: BLACK,
                color: WHITE,
                border: "none",
                borderRadius: 100,
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "inherit",
                marginTop: 12,
              }}
            >
              {index < sentences.length - 1 ? "Prossima →" : "Termina gioco →"}
            </button>
          )}
        </>
      )}
    </div>
  );
}

// GAME 5: WordScrambleGame
interface WordScrambleGameProps {
  target: string;
  hint: string;
  onComplete: (score: number) => void;
}

function WordScrambleGame({ target, hint, onComplete }: WordScrambleGameProps) {
  const correctWords = useRef(target.split(" "));
  const [scrambledPool, setScrambledPool] = useState<{ word: string; id: string }[]>([]);
  const [assembled, setAssembled] = useState<( { word: string; id: string } | null)[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const pool = correctWords.current.map((w, index) => ({
      word: w,
      id: `${w}-${index}`,
    })).sort(() => Math.random() - 0.5);

    setScrambledPool(pool);
    setAssembled(Array(correctWords.current.length).fill(null));
  }, [target]);

  const handlePoolTap = (item: { word: string; id: string }) => {
    if (isSubmitted) return;
    const firstEmptyIdx = assembled.findIndex((slot) => slot === null);
    if (firstEmptyIdx !== -1) {
      const nextAssembled = [...assembled];
      nextAssembled[firstEmptyIdx] = item;
      setAssembled(nextAssembled);
      setScrambledPool((prev) => prev.filter((p) => p.id !== item.id));
    }
  };

  const handleAssembledTap = (index: number) => {
    if (isSubmitted) return;
    const item = assembled[index];
    if (item) {
      setScrambledPool((prev) => [...prev, item]);
      const nextAssembled = [...assembled];
      nextAssembled[index] = null;
      setAssembled(nextAssembled);
    }
  };

  const handleConfirm = () => {
    setIsSubmitted(true);
    let correctCount = 0;
    assembled.forEach((item, index) => {
      if (item && item.word === correctWords.current[index]) {
        correctCount++;
      }
    });
    const score = Math.round((correctCount / correctWords.current.length) * 100);
    setTimeout(() => onComplete(score), 2500);
  };

  const isFull = assembled.every((slot) => slot !== null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ fontSize: 11, color: GRAY, fontFamily: "Inter, sans-serif" }}>
        Ricostruisci la definizione: <span style={{ fontWeight: 500, color: BLACK }}>{hint}</span>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
          minHeight: 40,
          padding: 8,
          backgroundColor: SURFACE,
          borderRadius: 8,
          border: `1px solid ${BORDER}`,
        }}
      >
        {scrambledPool.map((item) => (
          <div
            key={item.id}
            onClick={() => handlePoolTap(item)}
            style={{
              backgroundColor: "#FBFAF6",
              border: `1px solid ${BORDER}`,
              borderRadius: 8,
              padding: "8px 12px",
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              fontWeight: 500,
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            {item.word}
          </div>
        ))}
        {scrambledPool.length === 0 && (
          <div style={{ fontSize: 11, color: GRAY, fontStyle: "italic", margin: "auto" }}>
            Tutti i chip posizionati
          </div>
        )}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12, minHeight: 60 }}>
        {assembled.map((slot, index) => {
          const hasWord = slot !== null;
          const isWordCorrect = slot?.word === correctWords.current[index];

          let bg = "transparent";
          let bc = "#E4E3DD";
          let fc = BLACK;

          if (isSubmitted && hasWord) {
            bg = isWordCorrect ? "#EBF5EF" : "#FDF6E3";
            bc = isWordCorrect ? GREEN : AMBER;
            fc = isWordCorrect ? GREEN : AMBER;
          } else if (hasWord) {
            bg = "#FBFAF6";
            bc = BORDER;
          }

          return (
            <div
              key={index}
              onClick={() => hasWord && handleAssembledTap(index)}
              style={{
                borderBottom: hasWord ? "none" : "1.5px solid #E4E3DD",
                border: hasWord ? `1px solid ${bc}` : undefined,
                backgroundColor: bg,
                color: fc,
                borderRadius: hasWord ? 8 : 0,
                padding: hasWord ? "8px 12px" : "8px 0",
                minWidth: hasWord ? "auto" : 48,
                textAlign: "center",
                fontFamily: "Inter, sans-serif",
                fontSize: 13,
                fontWeight: 500,
                cursor: hasWord && !isSubmitted ? "pointer" : "default",
                userSelect: "none",
              }}
            >
              {slot?.word || ""}
            </div>
          );
        })}
      </div>
      {isFull && !isSubmitted && (
        <button
          onClick={handleConfirm}
          style={{
            width: "100%",
            padding: "14px 0",
            backgroundColor: BLACK,
            color: WHITE,
            border: "none",
            borderRadius: 100,
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "inherit",
            marginTop: 12,
          }}
        >
          Conferma
        </button>
      )}
      {isSubmitted && (
        <div style={{ fontSize: 12, color: GREEN, lineHeight: 1.45, fontStyle: "italic", marginTop: 8 }}>
          Definizione corretta: {target}
        </div>
      )}
    </div>
  );
}

function DayIntro({ t }: { t: DayTopic }) {
  const nav = useProtoNav();
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ flex: 1, overflowY: "auto", padding: "0 20px", WebkitOverflowScrolling: 'touch' }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0" }}>
          <button onClick={() => {
            const planIdx = FLAT_SCREENS.findIndex(s => s.label.includes("· Piano 12 giorni"));
            if (planIdx !== -1 && nav?.goToIndex) nav.goToIndex(planIdx);
          }} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center" }}>
            <ArrowLeft />
          </button>
          <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.1em" }}>Sessione</div>
          <button onClick={() => {
            const homeIdx = FLAT_SCREENS.findIndex(s => s.label.includes("· Home"));
            if (homeIdx !== -1 && nav?.goToIndex) nav.goToIndex(homeIdx);
          }} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center" }}>
            <CloseIcon />
          </button>
        </div>

        <div style={{ paddingTop: 12, paddingBottom: 16 }}>
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

        <div style={{ marginTop: 8, padding: 16, backgroundColor: SURFACE, border: `1px solid ${BORDER}`, borderRadius: 14, marginBottom: 20 }}>
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
      </div>

      <div style={{ position: "sticky", bottom: 0, backgroundColor: "#FFFFFF", borderTop: "1px solid #E4E3DD", padding: "16px 20px", zIndex: 10 }}>
        <button
          onClick={() => nav?.goNext()}
          style={{
            width: "100%", padding: "18px 0", border: "none",
            backgroundColor: BLACK, color: WHITE, borderRadius: 100,
            fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
          }}
        >
          Inizia ora →
        </button>
      </div>
    </div>
  );
}

function DayBriefing({ t }: { t: DayTopic }) {
  const nav = useProtoNav();
  const [step, setStep] = useState(0);
  const [sourcesOpen, setSourcesOpen] = useState(false);
  const [checks, setChecks] = useState<(number | null)[]>([null, null, null]);
  const [gameScores, setGameScores] = useState<Record<number, number>>({});
  
  // Format preference states
  const [formatPref, setFormatPref] = useState<"video" | "text">(() => 
    (localStorage.getItem("readiness_format_pref") as "video" | "text") || "video"
  );
  const [skipCount, setSkipCount] = useState<number>(() => 
    parseInt(localStorage.getItem("readiness_video_skips") || "0", 10)
  );

  const microTitles = ["Definizione netta", "Punto operativo", "Trappola da evitare"];
  const microDurations = [4, 4, 4];
  const totalMin = microDurations.reduce((a, b) => a + b, 0);

  // Get briefings list for this topic
  const briefings = t.briefings || [
    { text: t.oneLiner },
    { text: t.briefingBullets[1] ?? t.briefingBullets[0] },
    { text: t.briefingBullets[2] ?? t.briefingBullets[0] },
  ];
  const currentBriefing = briefings[step] ?? briefings[0];

  const quizzes = BRIEFING_QUIZZES[t.day] ?? [];
  const currentQuiz = quizzes[step];

  const pickCheck = (idx: number) => {
    setChecks((prev) => {
      const next = [...prev];
      next[step] = idx;
      return next;
    });
  };

  const handleNextStep = (isSkipped = false) => {
    if (isSkipped) {
      const newSkips = skipCount + 1;
      setSkipCount(newSkips);
      localStorage.setItem("readiness_video_skips", String(newSkips));
    }
    if (step < briefings.length - 1) {
      setStep(step + 1);
    } else {
      nav?.goNext();
    }
  };

  const handleGameComplete = (score: number) => {
    setGameScores((prev) => ({ ...prev, [step]: score }));
    setChecks((prev) => {
      const next = [...prev];
      next[step] = score; // Mark as complete (stores score)
      return next;
    });
  };

  const hasVideo = currentBriefing.videoUrl && formatPref === "video";

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ flex: 1, overflowY: "auto", padding: "0 20px", WebkitOverflowScrolling: 'touch', minHeight: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", flexShrink: 0 }}>
        <button onClick={() => {
          if (step > 0) {
            setStep(step - 1);
          } else {
            nav?.goPrev();
          }
        }} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center" }}>
          <ArrowLeft />
        </button>
        <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.1em" }}>Briefing · {step + 1} di {briefings.length}</div>
        <button onClick={() => {
          const homeIdx = FLAT_SCREENS.findIndex(s => s.label.includes("· Home"));
          if (homeIdx !== -1 && nav?.goToIndex) nav.goToIndex(homeIdx);
        }} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center" }}>
          <CloseIcon />
        </button>
      </div>

      <div style={{ paddingTop: 12, paddingBottom: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.16em", textTransform: "uppercase" }}>
            Briefing · {totalMin} min · {briefings.length} nozioni
          </div>
          
          {skipCount >= 2 && (
            <button
              onClick={() => {
                const nextPref = formatPref === "video" ? "text" : "video";
                setFormatPref(nextPref);
                localStorage.setItem("readiness_format_pref", nextPref);
              }}
              style={{
                padding: "4px 10px",
                backgroundColor: "#FBFAF6",
                border: "1px solid #E4E3DD",
                borderRadius: "100px",
                fontFamily: "Inter, sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                color: "#8E8E89",
                cursor: "pointer",
                userSelect: "none",
              }}
            >
              {formatPref === "video" ? "Preferisci il testo?" : "Preferisci i video?"}
            </button>
          )}
        </div>
        <div style={{ fontSize: 22, fontWeight: 500, color: BLACK, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
          {t.topic}
        </div>
      </div>

      <div style={{ display: "flex", gap: 4, marginBottom: 14 }}>
        {briefings.map((_, i) => (
          <div key={i} style={{
            flex: 1, height: 3, borderRadius: 100,
            backgroundColor: checks[i] !== null ? BLACK : i === step ? "#888" : "#E4E3DD",
          }} />
        ))}
      </div>

      <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
        {briefings.map((_, i) => (
          <button key={i} onClick={() => setStep(i)} style={{
            flex: 1, padding: "8px 4px", borderRadius: 10,
            border: `1px solid ${i === step ? BLACK : BORDER}`,
            backgroundColor: i === step ? BLACK : WHITE,
            color: i === step ? WHITE : BLACK,
            fontSize: 10, fontWeight: 500, cursor: "pointer", fontFamily: "inherit",
            letterSpacing: "0.04em",
          }}>
            {String(i + 1).padStart(2, "0")} · {microDurations[i] || 4}m
          </button>
        ))}
      </div>

      {currentBriefing.miniGame ? (
        <div style={{
          backgroundColor: WHITE,
          borderRadius: 16,
          border: "1px solid #E4E3DD",
          padding: 20,
          margin: "0 0px 16px 0px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
        }}>
          {currentBriefing.miniGame.type === "drag-match" && (
            <DragMatchGame
              pairs={currentBriefing.miniGame.pairs || []}
              onComplete={handleGameComplete}
            />
          )}
          {currentBriefing.miniGame.type === "sequence" && (
            <SequenceOrderGame
              items={currentBriefing.miniGame.items || []}
              correctOrder={currentBriefing.miniGame.correctOrder || []}
              onComplete={handleGameComplete}
            />
          )}
          {currentBriefing.miniGame.type === "true-false" && (
            <TrueFalseGame
              statements={currentBriefing.miniGame.statements || []}
              onComplete={handleGameComplete}
            />
          )}
          {currentBriefing.miniGame.type === "fill-blank" && (
            <FillBlankGame
              sentences={currentBriefing.miniGame.sentences || []}
              onComplete={handleGameComplete}
            />
          )}
          {currentBriefing.miniGame.type === "scramble" && (
            <WordScrambleGame
              target={currentBriefing.miniGame.target || ""}
              hint={currentBriefing.miniGame.hint || ""}
              onComplete={handleGameComplete}
            />
          )}

          {checks[step] !== null && (
            <div style={{
              marginTop: 14,
              padding: "10px 12px",
              backgroundColor: GREEN_BG,
              border: `1px solid ${GREEN}`,
              borderRadius: 8,
              fontSize: 12,
              color: GREEN,
              fontWeight: 500,
              textAlign: "center"
            }}>
              Gioco completato! Punteggio: {checks[step]}%
            </div>
          )}
        </div>
      ) : hasVideo ? (
        <div style={{ marginBottom: 16 }}>
          <VideoPill
            videoUrl={currentBriefing.videoUrl || ""}
            conceptNumber={step + 1}
            totalConcepts={briefings.length}
            conceptTitle={currentBriefing.conceptTitle || t.topic}
            sourceName={currentBriefing.sourceName || "Readiness Source"}
            sourceYear={currentBriefing.sourceYear || 2026}
            onNext={(isSkipped) => handleNextStep(isSkipped)}
            onSaveVoice={() => alert("Nota vocale salvata!")}
          />
        </div>
      ) : (
        <>
          <div style={{
            padding: 16, backgroundColor: SURFACE, border: `1px solid ${BORDER}`,
            borderRadius: 14, marginBottom: 12,
          }}>
            <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
              Nozione {step + 1} / {briefings.length} · {microTitles[step] || "Concetto chiave"}
            </div>
            <div style={{ fontSize: 14, color: BLACK, lineHeight: 1.55 }}>
              {currentBriefing.text}
            </div>
          </div>

          {currentQuiz && (
            <div style={{
              padding: 14, backgroundColor: WHITE, border: `1px solid ${BORDER}`,
              borderRadius: 14, marginBottom: 12,
            }}>
              <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
                Quiz briefing {step + 1} / {briefings.length}
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
        </>
      )}

      {!currentBriefing.miniGame && !hasVideo && (
        <>
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
        </>
      )}

      </div>

      {!hasVideo && (
        <div style={{ position: "sticky", bottom: 0, backgroundColor: "#F9F8F4", borderTop: `1px solid ${BORDER}`, padding: "16px 20px 28px", zIndex: 10, flexShrink: 0 }}>
          <button
            onClick={() => handleNextStep(false)}
            disabled={!!(currentBriefing.miniGame && checks[step] === null)}
            style={{
              width: "100%", padding: "18px 0", border: "none",
              backgroundColor: BLACK, color: WHITE, borderRadius: 100,
              fontSize: 15, fontWeight: 600, cursor: (currentBriefing.miniGame && checks[step] === null) ? "not-allowed" : "pointer",
              fontFamily: "inherit",
              opacity: (currentBriefing.miniGame && checks[step] === null) ? 0.4 : 1,
            }}>
            {step < briefings.length - 1 ? `Prossima nozione →` : "Vai al quiz finale →"}
          </button>
        </div>
      )}
    </div>
  );
}


function DayQuiz({ t }: { t: DayTopic }) {
  const isDark = t.mode === "voice" || t.mode === "simulation";
  const fg = isDark ? WHITE : BLACK;
  const sub = isDark ? "#999" : GRAY;
  const surface = isDark ? "#181818" : SURFACE;
  const border = isDark ? "#262626" : BORDER;

  const nav = useProtoNav();
  const [selected, setSelected] = useState<number | null>(null);
  const [voiceSubmitted, setVoiceSubmitted] = useState(false);

  if (t.mode === "simulation") return <DaySimulation t={t} />;

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", backgroundColor: isDark ? BLACK : undefined, height: "100%" }}>
      {/* Scrollable container for content */}
      <div style={{ flex: 1, overflowY: "auto", minHeight: 0, WebkitOverflowScrolling: 'touch', padding: "0 20px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0", borderBottom: `0.5px solid ${border}`, marginBottom: 12 }}>
          <button onClick={() => nav?.goPrev()} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center" }}>
            <ArrowLeft color={fg} />
          </button>
          <div style={{ fontSize: 11, color: sub, letterSpacing: "0.1em" }}>Quiz finale</div>
          <button onClick={() => {
            const homeIdx = FLAT_SCREENS.findIndex(s => s.label.includes("· Home"));
            if (homeIdx !== -1 && nav?.goToIndex) nav.goToIndex(homeIdx);
          }} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center" }}>
            <CloseIcon color={fg} />
          </button>
        </div>

        <div style={{ paddingTop: 10, paddingBottom: 18 }}>
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
          <div style={{ display: "flex", flexDirection: "column", gap: 10, paddingBottom: 20 }}>
            {["A", "B", "C", "D"].map((l, i) => {
              const picked = selected === i;
              const correctOption = 1; // Option B is correct
              const isCorrect = i === correctOption;
              const showResult = selected !== null;
              let bg: string = WHITE;
              let bc: string = BORDER;
              let fc: string = BLACK;
              if (showResult) {
                if (isCorrect) { bg = "#EBF5EF"; bc = GREEN; fc = GREEN; }
                else if (picked) { bg = "#FDF6E3"; bc = AMBER; fc = AMBER; }
              } else if (picked) {
                bg = BLACK; bc = BLACK; fc = WHITE;
              }
              return (
                <button 
                  key={l} 
                  onClick={() => selected === null && setSelected(i)}
                  style={{
                    padding: "14px 16px",
                    backgroundColor: bg,
                    color: fc,
                    border: `1px solid ${bc}`,
                    borderRadius: 14,
                    display: "flex", alignItems: "center", gap: 12,
                    cursor: selected === null ? "pointer" : "default",
                    fontFamily: "inherit",
                    textAlign: "left",
                  }}
                >
                  <div style={{
                    width: 26, height: 26, borderRadius: 6,
                    backgroundColor: picked ? ACCENT : "#F2F2F2",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11, fontWeight: 500, color: BLACK,
                  }}>{l}</div>
                  <div style={{ fontSize: 12, lineHeight: 1.4, flex: 1 }}>
                    {["Opzione plausibile ma incompleta", "Risposta corretta e contestualizzata", "Definizione tecnica fuori contesto", "Affermazione vaga, non sostiene una conversazione"][i]}
                  </div>
                </button>
              );
            })}

            {selected !== null && (
              <div style={{
                marginTop: 10, padding: "8px 10px",
                backgroundColor: selected === 1 ? "#EBF5EF" : "#FDF6E3",
                border: `1px solid ${selected === 1 ? GREEN : AMBER}`,
                borderRadius: 8,
                fontSize: 11, color: selected === 1 ? GREEN : AMBER, lineHeight: 1.4,
              }}>
                {selected === 1
                  ? "Corretto. Lo salviamo come consolidato."
                  : "Non proprio: la risposta B è quella corretta. Te la riproponiamo domani per consolidarla."}
              </div>
            )}
          </div>
        )}

        {t.mode === "voice-opt" && (
          <div style={{ paddingBottom: 20 }}>
            <div style={{
              padding: 16, backgroundColor: surface, border: `1px solid ${border}`,
              borderRadius: 14, minHeight: 110, fontSize: 13, color: sub, lineHeight: 1.5,
            }}>
              {voiceSubmitted ? "Esempio di trascrizione vocale: \"Penso che le allucinazioni siano un aspetto strutturale degli LLM...\"" : "Scrivi la tua risposta in 2–3 frasi..."}
            </div>
          </div>
        )}

        {t.mode === "voice" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10, paddingBottom: 20 }}>
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
          </div>
        )}
      </div>

      {/* Sticky footer with buttons */}
      {t.mode === "text" && (
        <div style={{ position: "sticky", bottom: 0, backgroundColor: isDark ? BLACK : "#FFFFFF", borderTop: `1px solid ${border}`, padding: "16px 20px", zIndex: 10 }}>
          <button
            onClick={() => nav?.goNext()}
            disabled={selected === null}
            style={{
              width: "100%", padding: "14px 0", border: "none",
              backgroundColor: selected !== null ? BLACK : "#C9C8C2",
              color: WHITE, borderRadius: 100,
              fontSize: 13, fontWeight: 500, cursor: selected !== null ? "pointer" : "not-allowed",
              fontFamily: "inherit",
              opacity: selected !== null ? 1 : 0.5,
            }}
          >
            Completa e vedi il punteggio →
          </button>
        </div>
      )}

      {t.mode === "voice-opt" && (
        <div style={{ position: "sticky", bottom: 0, backgroundColor: isDark ? BLACK : "#FFFFFF", borderTop: `1px solid ${border}`, padding: "16px 20px", zIndex: 10, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex", gap: 10 }}>
            <button 
              onClick={() => nav?.goNext()}
              style={{
                flex: 1, padding: "12px 0", borderRadius: 100,
                border: `1px solid ${fg}`, backgroundColor: isDark ? BLACK : WHITE, color: fg,
                fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "inherit",
              }}
            >
              Invia risposta
            </button>
            <button 
              onClick={() => {
                setVoiceSubmitted(true);
              }}
              style={{
                flex: 1, padding: "12px 0", borderRadius: 100,
                border: "none", backgroundColor: isDark ? ACCENT : BLACK, color: isDark ? BLACK : WHITE,
                fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "inherit",
              }}
            >
              {voiceSubmitted ? "Riprova voce" : "Rispondi a voce →"}
            </button>
          </div>
          {voiceSubmitted && (
            <button
              onClick={() => nav?.goNext()}
              style={{
                width: "100%", padding: "14px 0", border: "none",
                backgroundColor: ACCENT, color: BLACK, borderRadius: 100,
                fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
              }}
            >
              Usa questa risposta vocale e continua →
            </button>
          )}
          <div style={{ fontSize: 11, color: GRAY, textAlign: "center", marginTop: 4 }}>
            Mancano {t.daysToEvent} giorni — è il momento di iniziare ad allenare anche la voce
          </div>
        </div>
      )}

      {t.mode === "voice" && (
        <div style={{ position: "sticky", bottom: 0, backgroundColor: isDark ? BLACK : "#FFFFFF", borderTop: `1px solid ${border}`, padding: "16px 20px", zIndex: 10 }}>
          <button 
            onClick={() => nav?.goNext()}
            style={{
              width: "100%", padding: "14px 0", border: "none",
              backgroundColor: ACCENT, color: BLACK, borderRadius: 100,
              fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "inherit",
            }}
          >
            Stop e analizza →
          </button>
        </div>
      )}
    </div>
  );
}

function DaySimulation({ t }: { t: DayTopic }) {
  const nav = useProtoNav();
  const turns: { who: "ai" | "you"; text: string; meta?: string }[] = [
    { who: "ai", text: "Apriamo. Tesi che vuoi difendere oggi in 20 secondi.", meta: "Round 1 · apertura" },
    { who: "you", text: "[tua risposta · 18s · ritmo costante]", meta: "valutazione: chiarezza ✓ · esempio mancante" },
    { who: "ai", text: "«L'AI sostituirà ruoli interi, non solo task — la tua tesi è ingenua.» Rispondi.", meta: "Round 2 · obiezione forte" },
    { who: "you", text: "[tua risposta · 42s · 2 esempi]", meta: "valutazione: riformulazione mancata, sei partito con «in realtà»" },
    { who: "ai", text: "Dammi un dato concreto sul mercato italiano che sostiene la tesi.", meta: "Round 3 · richiesta numerica" },
  ];

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 20px", backgroundColor: BLACK, height: "100%" }}>
      {/* Top Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #262626", marginBottom: 12, flexShrink: 0 }}>
        <button onClick={() => nav?.goPrev()} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center" }}>
          <ArrowLeft color={WHITE} />
        </button>
        <div style={{ fontSize: 11, color: "#999", letterSpacing: "0.1em" }}>Simulazione</div>
        <button onClick={() => {
          const homeIdx = FLAT_SCREENS.findIndex(s => s.label.includes("· Home"));
          if (homeIdx !== -1 && nav?.goToIndex) nav.goToIndex(homeIdx);
        }} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center" }}>
          <CloseIcon color={WHITE} />
        </button>
      </div>

      <div style={{ flex: 1, overflowY: "auto", minHeight: 0, WebkitOverflowScrolling: 'touch', display: "flex", flexDirection: "column" }}>
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

      </div>

      <div style={{
        padding: 12, backgroundColor: "#181818", border: `1px solid ${ACCENT}`,
        borderRadius: 12, marginBottom: 14, flexShrink: 0,
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

      <div style={{ display: "flex", gap: 8, marginBottom: 18, flexShrink: 0 }}>
        <button style={{
          flex: 1, padding: "12px 0", border: `1px solid #262626`,
          backgroundColor: "#0A0A0A", color: WHITE, borderRadius: 100,
          fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "inherit",
        }}>
          Pausa
        </button>
        <button 
          onClick={() => nav?.goNext()}
          style={{
            flex: 2, padding: "12px 0", border: "none",
            backgroundColor: ACCENT, color: BLACK, borderRadius: 100,
            fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "inherit",
          }}
        >
          Chiudi turno e ricevi feedback →
        </button>
      </div>
    </div>
  );
}

function DayScore({ t }: { t: DayTopic }) {
  const nav = useProtoNav();
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ flex: 1, overflowY: "auto", padding: "0 20px", WebkitOverflowScrolling: 'touch' }}>
        {/* Top Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0", borderBottom: `1px solid ${BORDER}`, marginBottom: 12 }}>
          <button onClick={() => nav?.goPrev()} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center" }}>
            <ArrowLeft />
          </button>
          <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.1em" }}>Readiness Score</div>
          <button onClick={() => {
            const homeIdx = FLAT_SCREENS.findIndex(s => s.label.includes("· Home"));
            if (homeIdx !== -1 && nav?.goToIndex) nav.goToIndex(homeIdx);
          }} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center" }}>
            <CloseIcon />
          </button>
        </div>

        <div style={{ paddingTop: 10, paddingBottom: 14 }}>
          <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 8 }}>
            Sessione conclusa · Giorno {t.day}
          </div>
          <div style={{ fontSize: 22, fontWeight: 500, color: BLACK, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
            Preparazione migliorata.
          </div>
        </div>

        {/* Readiness final */}
        <div style={{
          marginTop: 6, padding: "18px 20px",
          backgroundColor: BLACK, color: WHITE, borderRadius: 20,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10,
        }}>
          <div style={{
            fontSize: 10, color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500,
          }}>
            Stato di preparazione
          </div>
          <ReadinessBadge value={t.scoreAfter} />
        </div>

        <div style={{ marginTop: 14, padding: 14, backgroundColor: GREEN_BG, borderRadius: 12 }}>
          <div style={{ fontSize: 10, color: GREEN, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>
            Punto forte di oggi
          </div>
          <div style={{ fontSize: 12, color: GREEN, lineHeight: 1.5 }}>
            Hai consolidato «{t.topicShort}». Sai sostenerlo in una conversazione.
          </div>
        </div>

        <div style={{ marginTop: 10, padding: 14, backgroundColor: AMBER_BG, borderRadius: 12, marginBottom: 20 }}>
          <div style={{ fontSize: 10, color: AMBER, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>
            Da rivedere domani
          </div>
          <div style={{ fontSize: 12, color: AMBER, lineHeight: 1.5 }}>
            {t.daysToEvent > 5 ? "L'apertura conversazionale resta il gap più grosso." : t.daysToEvent > 2 ? "Sotto pressione tendi a fare definizioni invece di esempi." : "Ritmo del discorso: rallenta nei passaggi tecnici."}
          </div>
        </div>
      </div>

      <div style={{ position: "sticky", bottom: 0, backgroundColor: "#FFFFFF", borderTop: "1px solid #E4E3DD", padding: "16px 20px", zIndex: 10 }}>
        <button
          onClick={() => nav?.goNext()}
          style={{
            width: "100%", padding: "18px 0", border: "none",
            backgroundColor: BLACK, color: WHITE, borderRadius: 100,
            fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
          }}
        >
          Prossima sessione →
        </button>
      </div>
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
    briefings: [
      {
        text: "Un modello statistico che prevede la parola successiva. Non «ragiona»: estrae pattern da miliardi di testi.",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        conceptTitle: "Previsione statistica vs Ragionamento",
        sourceName: "Bender & Koller",
        sourceYear: 2020,
      },
      {
        text: "Prevedere ≠ comprendere: l'output può essere fluente e sbagliato.",
        miniGame: {
          type: "drag-match",
          pairs: [
            { term: "Token", definition: "Unità base di testo elaborata dal modello" },
            { term: "Parametri", definition: "Pesi interni che definiscono la conoscenza" },
            { term: "Training", definition: "Fase di apprendimento su testi preesistenti" },
            { term: "Context window", definition: "Limite di memoria della conversazione" }
          ]
        }
      },
      {
        text: "La «conoscenza» è ferma alla data di training. Non sa nulla dopo."
      }
    ]
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
    briefings: [
      {
        text: "Il prompt non è una domanda: è un brief. Ruolo + contesto + obiettivo + formato."
      },
      {
        text: "Dai al modello un ruolo esplicito («sei un senior brand strategist»).",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        conceptTitle: "Ruolo e Contesto nel Prompt",
        sourceName: "Stanford CRFM",
        sourceYear: 2023,
      },
      {
        text: "Contesto prima della richiesta. Mai presupporre che capisca.",
        miniGame: {
          type: "sequence",
          items: [
            { id: "1", text: "Assegna un Ruolo chiaro" },
            { id: "2", text: "Fornisci il Contesto aziendale" },
            { id: "3", text: "Definisci l'Obiettivo finale" },
            { id: "4", text: "Specifica il Formato di output" }
          ],
          correctOrder: ["1", "2", "3", "4"]
        }
      }
    ]
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
    briefings: [
      {
        text: "RAG = aggiungere fonti esterne al modello in tempo reale. Riduce allucinazioni, aumenta tracciabilità.",
        miniGame: {
          type: "true-false",
          statements: [
            { text: "RAG riaddestra i pesi interni del modello ad ogni query.", isTrue: false, explanation: "Falso: RAG recupera documenti e li passa nel contesto, senza modificare i pesi del modello." },
            { text: "Un sistema RAG riduce il rischio di allucinazioni.", isTrue: true, explanation: "Vero: ancorare le risposte a documenti reali limita la generazione di informazioni false." },
            { text: "Se i documenti caricati contengono errori, RAG produrrà comunque risposte corrette.", isTrue: false, explanation: "Falso: vale il principio 'garbage in, garbage out'. Fonti errate producono risposte errate." },
            { text: "Le citazioni tracciabili sono fondamentali in ambito professionale.", isTrue: true, explanation: "Vero: permettono all'utente di verificare l'attendibilità della fonte originale." },
            { text: "RAG sta per Retrieval-Augmented Generation.", isTrue: true, explanation: "Vero: indica la generazione arricchita dal recupero di informazioni esterne." }
          ]
        }
      },
      {
        text: "Retrieval = il modello cerca, poi risponde con le fonti recuperate."
      },
      {
        text: "Funziona quando le fonti sono di qualità. Garbage in, garbage out resta vero.",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        conceptTitle: "Ancoraggio e Qualità delle Fonti",
        sourceName: "Anthropic Research",
        sourceYear: 2024,
      }
    ]
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
    briefings: [
      {
        text: "Non è un bug — è il modo in cui funzionano. Generano testo plausibile anche quando non sanno."
      },
      {
        text: "Più la domanda è specifica e fuori distribuzione, più alta la probabilità.",
        miniGame: {
          type: "fill-blank",
          sentences: [
            { before: "Le allucinazioni sono il modo in cui il modello genera testo ", answer: "plausibile", after: " anche quando non conosce la risposta.", options: ["plausibile", "verificato", "strutturato"] },
            { before: "Il rischio aumenta quando facciamo domande fuori ", answer: "distribuzione", after: " rispetto ai dati di training.", options: ["distribuzione", "temperatura", "contesto"] },
            { before: "Per limitarle, è utile ordinare al modello di rispondere '", answer: "non lo so", after: "' se non è sicuro.", options: ["non lo so", "riprova", "errore"] }
          ]
        }
      },
      {
        text: "Mai delegare decisioni dove l'errore non è verificabile a basso costo."
      }
    ]
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
    briefings: [
      {
        text: "Adozione a due velocità: enterprise sperimenta, PMI ancora ferma. Il gap di skill è il vincolo."
      },
      {
        text: "Il 18% delle PMI italiane usa AI in produzione (vs 35% Germania)."
      },
      {
        text: "I casi d'uso che funzionano: customer support, ricerca interna, marketing operativo.",
        miniGame: {
          type: "scramble",
          target: "governance dati sporchi e cultura frenano l'adozione",
          hint: "Fattori non tecnologici che rallentano l'AI in Italia"
        }
      }
    ]
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

// ── Catalog-only wrapper: shows a single Video Pill in static preview mode ──
function VideoPillCatalogScreen({ b, step, total, t }: { b: BriefingItem; step: number; total: number; t: DayTopic }) {
  const nav = useProtoNav();
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Top Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 20px", borderBottom: `1px solid ${BORDER}`, flexShrink: 0 }}>
        <button onClick={() => nav?.goPrev()} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center" }}>
          <ArrowLeft />
        </button>
        <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.1em" }}>Concept {step}/{total}</div>
        <button onClick={() => {
          const homeIdx = FLAT_SCREENS.findIndex(s => s.label.includes("· Home"));
          if (homeIdx !== -1 && nav?.goToIndex) nav.goToIndex(homeIdx);
        }} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center" }}>
          <CloseIcon />
        </button>
      </div>

      <div style={{ flex: 1, overflowY: "auto", minHeight: 0, WebkitOverflowScrolling: 'touch' }}>
        <div style={{ padding: "16px 20px 10px" }}>
          <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 6 }}>
            Video Pill · Concetto {step} / {total}
          </div>
          <div style={{ fontSize: 16, fontWeight: 600, color: BLACK, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
            {b.conceptTitle || t.topic}
          </div>
        </div>
        <div style={{ padding: "0 20px 16px" }}>
          <VideoPill
            videoUrl={b.videoUrl || ""}
            conceptNumber={step}
            totalConcepts={total}
            conceptTitle={b.conceptTitle || t.topic}
            sourceName={b.sourceName || "Readiness"}
            sourceYear={b.sourceYear || 2026}
            onNext={() => nav?.goNext()}
            onSaveVoice={() => {}}
          />
        </div>
      </div>
    </div>
  );
}

// ── Catalog-only wrapper: shows a single Mini-Game in static preview mode ──
function MiniGameCatalogScreen({ b, t }: { b: BriefingItem; t: DayTopic }) {
  const nav = useProtoNav();
  const game = b.miniGame!;
  const gameLabels: Record<string, string> = {
    "drag-match": "Abbina Termini",
    "sequence": "Ordina Sequenza",
    "true-false": "Vero o Falso",
    "fill-blank": "Riempi il Vuoto",
    "scramble": "Ricostruisci",
  };
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Top Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 20px", borderBottom: `0.5px solid ${BORDER}`, flexShrink: 0 }}>
        <button onClick={() => nav?.goPrev()} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center" }}>
          <ArrowLeft />
        </button>
        <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.1em" }}>Mini-Game</div>
        <button onClick={() => {
          const homeIdx = FLAT_SCREENS.findIndex(s => s.label.includes("· Home"));
          if (homeIdx !== -1 && nav?.goToIndex) nav.goToIndex(homeIdx);
        }} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center" }}>
          <CloseIcon />
        </button>
      </div>

      <div style={{ flex: 1, overflowY: "auto", minHeight: 0, WebkitOverflowScrolling: 'touch', padding: "12px 20px 20px" }}>
        <div style={{ paddingTop: 4, paddingBottom: 12 }}>
          <div style={{ fontSize: 10, color: GRAY, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 4 }}>
            Mini-Game · {gameLabels[game.type] || game.type}
          </div>
          <div style={{ fontSize: 13, color: BLACK, lineHeight: 1.45, marginBottom: 12 }}>
            {b.text}
          </div>
        </div>
        <div style={{
          backgroundColor: WHITE,
          borderRadius: 16,
          border: "1px solid #E4E3DD",
          padding: 20,
          boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
        }}>
          {game.type === "drag-match" && (
            <DragMatchGame pairs={game.pairs || []} onComplete={() => nav?.goNext()} />
          )}
          {game.type === "sequence" && (
            <SequenceOrderGame items={game.items || []} correctOrder={game.correctOrder || []} onComplete={() => nav?.goNext()} />
          )}
          {game.type === "true-false" && (
            <TrueFalseGame statements={game.statements || []} onComplete={() => nav?.goNext()} />
          )}
          {game.type === "fill-blank" && (
            <FillBlankGame sentences={game.sentences || []} onComplete={() => nav?.goNext()} />
          )}
          {game.type === "scramble" && (
            <WordScrambleGame target={game.target || ""} hint={game.hint || ""} onComplete={() => nav?.goNext()} />
          )}
        </div>
      </div>
    </div>
  );
}

function buildDaySections(): DaySection[] {
  let counter = 11;
  const num = () => String(counter++).padStart(2, "0");
  const sections: DaySection[] = [];

  // Helper: build extra screens for video pills and mini-games in a day's briefings
  const buildBriefingExtras = (t: DayTopic): ScreenDef[] => {
    const extras: ScreenDef[] = [];
    const briefings = t.briefings || [];
    const total = briefings.length;
    briefings.forEach((b, i) => {
      if (b.videoUrl) {
        const capturedB = b;
        const capturedT = t;
        extras.push({
          label: `${num()} · Video Pill · C${i + 1}`,
          phase: "F08b · Video Pill",
          goal: `Concept ${i + 1}: ${capturedB.conceptTitle || capturedT.topic}. Formato verticale 9:16 con CTA adattiva.`,
          insight: "Apprendimento video in formato TikTok-style: 85% visualizzato attiva la CTA.",
          render: () => <VideoPillCatalogScreen b={capturedB} step={i + 1} total={total} t={capturedT} />,
        });
      }
      if (b.miniGame) {
        const capturedB = b;
        const capturedT = t;
        const gameTypeLabel: Record<string, string> = {
          "drag-match": "Abbina",
          "sequence": "Ordina",
          "true-false": "V/F",
          "fill-blank": "Blank",
          "scramble": "Scramble",
        };
        extras.push({
          label: `${num()} · Mini-Game · ${gameTypeLabel[capturedB.miniGame!.type] || capturedB.miniGame!.type}`,
          phase: "F08c · Mini-Game",
          goal: `Active recall interattivo: ${capturedB.miniGame!.type === "drag-match" ? "associazione terminologia" : capturedB.miniGame!.type === "sequence" ? "riordinamento sequenziale" : capturedB.miniGame!.type === "true-false" ? "vero/falso con spiegazione" : capturedB.miniGame!.type === "fill-blank" ? "completamento frase" : "ricostruzione definizione"}.`,
          insight: "I08 — Active recall con resistenza: migliora la ritenzione del 40% vs lettura passiva.",
          render: () => <MiniGameCatalogScreen b={capturedB} t={capturedT} />,
        });
      }
    });
    return extras;
  };

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
      ...buildBriefingExtras(t1),
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
        ...buildBriefingExtras(t),
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
    <ProtoNavCtx.Provider value={{
      goNext: () => go(1),
      goPrev: () => go(-1),
      goToIndex: (targetIdx: number) => setIdx(Math.max(0, Math.min(total - 1, targetIdx)))
    }}>
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
    </ProtoNavCtx.Provider>
  );
}

// ─── Mobile full-screen prototype (Figma-like on real phone) ────────────────
function MobilePrototypeApp() {
  const [idx, setIdx] = useState(0);
  const s = FLAT_SCREENS[idx];
  const total = FLAT_SCREENS.length;
  const touchStartX = useRef<number | null>(null);

  const go = (delta: number) => setIdx((c) => Math.max(0, Math.min(total - 1, c + delta)));

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 60) go(dx < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  return (
    <ProtoNavCtx.Provider value={{
      goNext: () => go(1),
      goPrev: () => go(-1),
      goToIndex: (targetIdx: number) => setIdx(Math.max(0, Math.min(total - 1, targetIdx)))
    }}>
      <style>{`
        html, body, #root { height: 100dvh; margin: 0; padding: 0; overflow: hidden; }
        .mobile-proto-screen { animation: slideIn 0.22s ease-out; }
        @keyframes slideIn { from { opacity: 0; transform: translateX(18px); } to { opacity: 1; transform: none; } }
      `}</style>
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{
          width: "100%", height: "100dvh",
          backgroundColor: s.bg || "#F9F8F4",
          display: "flex", flexDirection: "column",
          fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
          overflow: "hidden", position: "relative",
        }}
      >
        {/* Top status bar */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "14px 20px 8px",
          backgroundColor: s.bg || "#F9F8F4",
          flexShrink: 0, zIndex: 10,
          borderBottom: `1px solid rgba(0,0,0,0.06)`,
        }}>
          <button
            onClick={() => go(-1)}
            disabled={idx === 0}
            style={{
              background: "none", border: "none", padding: 4,
              opacity: idx === 0 ? 0.25 : 1, cursor: idx === 0 ? "default" : "pointer",
              color: s.bg === BLACK ? WHITE : BLACK, fontSize: 20, lineHeight: 1,
            }}
          >←</button>

          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: s.bg === BLACK ? "rgba(255,255,255,0.5)" : GRAY }}>
              {s.day}
            </div>
            <div style={{ fontSize: 11, fontWeight: 500, color: s.bg === BLACK ? WHITE : BLACK, marginTop: 1 }}>
              {idx + 1} / {total}
            </div>
          </div>

          <button
            onClick={() => go(1)}
            disabled={idx === total - 1}
            style={{
              background: "none", border: "none", padding: 4,
              opacity: idx === total - 1 ? 0.25 : 1, cursor: idx === total - 1 ? "default" : "pointer",
              color: s.bg === BLACK ? WHITE : BLACK, fontSize: 20, lineHeight: 1,
            }}
          >→</button>
        </div>

        {/* Screen content */}
        <div
          key={idx}
          className="mobile-proto-screen"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            backgroundColor: s.bg || "#F9F8F4",
          }}
        >
          {s.render()}
        </div>

        {/* Progress bar */}
        <div style={{ height: 3, backgroundColor: "rgba(0,0,0,0.06)", flexShrink: 0 }}>
          <div style={{ height: "100%", width: `${((idx + 1) / total) * 100}%`, backgroundColor: ACCENT, transition: "width 0.3s ease" }} />
        </div>
      </div>
    </ProtoNavCtx.Provider>
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
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth <= 640);

  useEffect(() => {
    const handle = () => setIsMobile(window.innerWidth <= 640);
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  // On real phones: full-screen Figma-like prototype
  if (isMobile) return <MobilePrototypeApp />;

  return (
    <div
      id="interactive-prototype"
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
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
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
