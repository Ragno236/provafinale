const TIER_GREEN = "#22C55E";
const TIER_AMBER = "#F59E0B";
const TIER_RED = "#EF4444";

const CARD_BG = "#1A1A1A";
const CARD_BORDER = "#2A2A2A";
const PAGE_BG = "#0F0F0F";
const TEXT_MAIN = "#E5E5E5";
const TEXT_MUTED = "#6B7280";
const DIVIDER = "#2A2A2A";

function Label({ children }: { children: string }) {
  return (
    <div
      style={{
        fontSize: "11px",
        fontWeight: 500,
        color: TEXT_MUTED,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        marginBottom: "20px",
      }}
    >
      {children}
    </div>
  );
}

function TierDot({ tier }: { tier: "base" | "pro" | "expert" }) {
  const color = tier === "base" ? TIER_GREEN : tier === "pro" ? TIER_AMBER : TIER_RED;
  return (
    <span
      style={{
        display: "inline-block",
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        backgroundColor: color,
        marginRight: "4px",
        flexShrink: 0,
      }}
    />
  );
}

function TierTag({ tier, label }: { tier: "base" | "pro" | "expert"; label: string }) {
  const color = tier === "base" ? TIER_GREEN : tier === "pro" ? TIER_AMBER : TIER_RED;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        padding: "3px 8px",
        borderRadius: "3px",
        backgroundColor: `${color}18`,
        border: `1px solid ${color}40`,
        fontSize: "11px",
        fontWeight: 500,
        color,
        marginRight: "6px",
        marginBottom: "4px",
      }}
    >
      <TierDot tier={tier} />
      {label}
    </span>
  );
}

function SourcePill({ label, tier }: { label: string; tier: "t1" | "t2" | "t3" }) {
  const color = tier === "t1" ? TIER_GREEN : tier === "t2" ? TIER_AMBER : TEXT_MUTED;
  const bg = tier === "t1" ? `${TIER_GREEN}15` : tier === "t2" ? `${TIER_AMBER}15` : "#2A2A2A";
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 7px",
        borderRadius: "3px",
        backgroundColor: bg,
        border: `1px solid ${color}40`,
        fontSize: "10px",
        fontWeight: 400,
        color,
        marginRight: "4px",
        marginBottom: "4px",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

function InsightCard({
  id,
  headline,
  body,
  quote,
}: {
  id: string;
  headline: string;
  body: string;
  quote?: string;
}) {
  return (
    <div
      style={{
        backgroundColor: CARD_BG,
        border: `1px solid ${CARD_BORDER}`,
        borderRadius: "4px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div style={{ fontSize: "11px", fontWeight: 500, color: TEXT_MUTED, fontFamily: "monospace" }}>{id}</div>
      <div style={{ fontSize: "13px", fontWeight: 600, color: TEXT_MAIN, lineHeight: 1.45 }}>{headline}</div>
      <div style={{ fontSize: "12px", fontWeight: 400, color: TEXT_MUTED, lineHeight: 1.6 }}>{body}</div>
      {quote && (
        <div
          style={{
            fontSize: "12px",
            fontStyle: "italic",
            color: "#9CA3AF",
            fontFamily: "monospace",
            lineHeight: 1.5,
            borderLeft: `2px solid ${DIVIDER}`,
            paddingLeft: "10px",
          }}
        >
          {quote}
        </div>
      )}
    </div>
  );
}

function FunctionCard({
  id,
  name,
  insightRef,
  context,
  description,
  tiers,
  quote,
  table,
  subComponents,
}: {
  id: string;
  name: string;
  insightRef: string;
  context: string;
  description: string;
  tiers: { base: string; pro: string; expert: string };
  quote?: string;
  table?: { headers: string[]; rows: string[][] };
  subComponents?: { label: string; desc: string; tier: string }[];
}) {
  return (
    <div
      style={{
        backgroundColor: CARD_BG,
        border: `1px solid ${CARD_BORDER}`,
        borderRadius: "4px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
            <span style={{ fontSize: "11px", fontWeight: 600, color: TEXT_MUTED, fontFamily: "monospace" }}>{id}</span>
            <span style={{ fontSize: "13px", fontWeight: 600, color: TEXT_MAIN }}>{name}</span>
          </div>
          <div style={{ fontSize: "11px", color: TEXT_MUTED }}>{context}</div>
        </div>
        <div
          style={{
            fontSize: "11px",
            fontWeight: 500,
            color: TEXT_MUTED,
            fontFamily: "monospace",
            backgroundColor: "#222",
            padding: "3px 8px",
            borderRadius: "3px",
            whiteSpace: "nowrap",
          }}
        >
          {insightRef}
        </div>
      </div>

      {/* Description */}
      <div style={{ fontSize: "12px", fontWeight: 400, color: TEXT_MUTED, lineHeight: 1.6 }}>{description}</div>

      {/* Table if present */}
      {table && (
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                {table.headers.map((h, i) => (
                  <th
                    key={i}
                    style={{
                      fontSize: "10px",
                      fontWeight: 600,
                      color: TEXT_MUTED,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      textAlign: "left",
                      padding: "6px 8px",
                      borderBottom: `1px solid ${DIVIDER}`,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, ri) => (
                <tr key={ri} style={{ backgroundColor: ri % 2 === 0 ? "transparent" : "#111111" }}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      style={{
                        fontSize: "11px",
                        fontWeight: ci === 0 ? 500 : 400,
                        color: ci === 0 ? TEXT_MAIN : TEXT_MUTED,
                        padding: "6px 8px",
                        borderBottom: `1px solid ${DIVIDER}`,
                        lineHeight: 1.5,
                        verticalAlign: "top",
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Sub-components if present */}
      {subComponents && (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {subComponents.map((sc) => (
            <div
              key={sc.label}
              style={{
                padding: "10px 12px",
                backgroundColor: "#111",
                borderRadius: "3px",
                borderLeft: `2px solid ${DIVIDER}`,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px", marginBottom: "4px" }}>
                <span style={{ fontSize: "11px", fontWeight: 600, color: TEXT_MAIN }}>{sc.label}</span>
                <span style={{ fontSize: "10px", color: TEXT_MUTED, fontFamily: "monospace", whiteSpace: "nowrap" }}>{sc.tier}</span>
              </div>
              <div style={{ fontSize: "11px", color: TEXT_MUTED, lineHeight: 1.5 }}>{sc.desc}</div>
            </div>
          ))}
        </div>
      )}

      {/* Tier line */}
      <div
        style={{
          display: "flex",
          gap: "4px",
          flexWrap: "wrap",
          paddingTop: "8px",
          borderTop: `1px solid ${DIVIDER}`,
        }}
      >
        <TierTag tier="base" label={tiers.base} />
        <TierTag tier="pro" label={tiers.pro} />
        <TierTag tier="expert" label={tiers.expert} />
      </div>

      {/* Quote */}
      {quote && (
        <div
          style={{
            fontSize: "11px",
            fontStyle: "italic",
            color: "#6B7280",
            fontFamily: "monospace",
            lineHeight: 1.5,
          }}
        >
          {quote}
        </div>
      )}
    </div>
  );
}

const matrixRows = [
  { fn: "F01 — Triage", base: "Piano fisso (3 domande, output predefinito)", pro: "Piano adattivo su lacune rilevate", expert: "Adattivo + profilo interlocutore attivo da subito" },
  { fn: "F02 — Starter", base: "Sequenziale fisso, stessa priorità ogni giorno", pro: "Su lacuna prioritaria calcolata", expert: "+ memoria longitudinale dei cicli precedenti" },
  { fn: "F03-A — Ripasso", base: "Punti stimati (non da dati reali)", pro: "Punti da dati sessione reali", expert: "+ allineamento su profilo interlocutore" },
  { fn: "F03-B — Ancora", base: "Non disponibile", pro: "Risposta per settore, fonte Tier 2 citata", expert: "Fonte Tier 1, calibrata su profilo interlocutore" },
  { fn: "F03-C — Mute", base: "Non disponibile", pro: "Attivabile sopra soglia readiness", expert: "Soglia personalizzabile dall'utente" },
  { fn: "F04 — Briefing", base: "3 temi generici, Tier 3 aggregato non dichiarato", pro: "3 temi per ruolo, Tier 2 citata", expert: "Tier 1 esplicita + nota contestuale su evento imminente" },
  { fn: "F05-A — Interruzione", base: "Non disponibile (preview visibile)", pro: "Calibrata su tipo evento", expert: "Calibrata su profilo interlocutore specifico" },
  { fn: "F05-B — Registro", base: "Non disponibile (preview visibile)", pro: "Soglia per tipo evento", expert: "Soglia per audience dichiarata" },
  { fn: "F06 — Trial", base: "Entry point (1 sessione, no account)", pro: "Entry point", expert: "Entry point" },
  { fn: "F07 — Interlocutore", base: "Profilo assente", pro: "Archetipo per tipo evento + settore, Tier 2", expert: "Dossier su fonti Tier 1 dichiarate" },
];

const domainRows = [
  {
    domain: "Design / UX",
    t1: ["NN/g", "IDF", "ACM/CHI"],
    t2: ["Smashing Mag", "A List Apart", "UX Collective"],
    t3: ["r/UXDesign", "X HCI researchers"],
  },
  {
    domain: "Graphic Design",
    t1: ["AIGA Eye", "Comm. Arts", "Eye Magazine"],
    t2: ["It's Nice That", "Creative Review", "Creative Boom"],
    t3: ["r/graphic_design", "X art directors"],
  },
  {
    domain: "Advertising",
    t1: ["WARC", "Ad Age", "Adweek", "Campaign"],
    t2: ["The Drum", "Contagious"],
    t3: ["r/advertising", "X creative directors"],
  },
  {
    domain: "Marketing",
    t1: ["HBR", "WARC", "Journal of Marketing"],
    t2: ["Think with Google", "Marketing Week", "Digiday"],
    t3: ["r/marketing", "LinkedIn newsletters"],
  },
  {
    domain: "AI",
    t1: ["arXiv cs.AI/LG", "Papers with Code", "NeurIPS/ICML"],
    t2: ["MIT Tech Review", "The Batch (A.Ng)"],
    t3: ["r/MachineLearning", "X AI researchers"],
  },
  {
    domain: "Tecnologia",
    t1: ["IEEE Spectrum", "MIT Tech Review"],
    t2: ["Ars Technica", "Stratechery", "Wired"],
    t3: ["r/technology", "Hacker News"],
  },
  {
    domain: "Scienza",
    t1: ["Nature", "Science/AAAS", "PubMed", "arXiv/bioRxiv"],
    t2: ["Quanta Magazine", "Scientific American"],
    t3: ["r/science", "X academics"],
  },
];

export function FunzionaliSpecSection() {
  return (
    <div
      style={{
        backgroundColor: PAGE_BG,
        color: TEXT_MAIN,
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        padding: "48px",
        borderRadius: "4px",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>

        {/* ── 1. HEADER ── */}
        <div style={{ marginBottom: "64px", borderBottom: `1px solid ${DIVIDER}`, paddingBottom: "48px" }}>
          <div style={{ fontSize: "11px", fontWeight: 500, color: TEXT_MUTED, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px" }}>
            READINESS — SPECIFICHE FUNZIONALI
          </div>
          <div style={{ fontSize: "28px", fontWeight: 700, color: TEXT_MAIN, lineHeight: 1.2, marginBottom: "8px" }}>
            7 insight · 7 funzioni · 3 tier · content engine
          </div>
          <div style={{ fontSize: "13px", fontWeight: 400, color: TEXT_MUTED, lineHeight: 1.6 }}>
            L'utente dichiara tipo evento + data → il sistema genera automaticamente un piano da 15 min/giorno fino all'evento, attingendo a fonti classificate per dominio. L'utente non cerca fonti, non costruisce scalette.
          </div>
        </div>

        {/* ── 2. INSIGHT ── */}
        <div style={{ marginBottom: "64px" }}>
          <Label>Insight — ricerca sul campo</Label>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <InsightCard
              id="I01"
              headline='"Non ho tempo" è una scusa. Il vero blocco è non sapere da dove iniziare.'
              body='Il 52% di chi si è preparato male ha citato due cause: "non avevo tempo" (28%) e "non sapevo da dove iniziare" (25%). La mancanza di un punto di partenza chiaro blocca più della mancanza di tempo.'
              quote='"servirebbe qualcosa che aiuti a riordinare e dare una scala di priorità" — Edo'
            />
            <InsightCard
              id="I02"
              headline="La maggior parte delle persone usa strumenti AI per prepararsi. Ma chi non li usa risulta più preparato."
              body="Il 55% del campione (22/40) usa strumenti AI. Chi la usa ha performato peggio di chi non la usa (3.14 vs 3.61/5). L'AI produce materiale senza chiudere il ciclo della prontezza."
              quote={`"l'AI sputa fuori una grande mole non di facile fruizione" — Edo`}
            />
            <InsightCard
              id="I03"
              headline="Chi non si prepara dà per scontato di andare male. Poi se la cava. Il problema è l'ansia prima dell'evento."
              body="Le 14 persone non preparate si sono autovalutate 2.71/5 — poi hanno performato 3.07/5. Chi si era preparato aveva aspettative e risultati quasi identici (3.54 vs 3.50). Il momento più difficile è l'incertezza pre-evento."
            />
            <InsightCard
              id="I04"
              headline="Le informazioni sono così accessibili che scegliere quali ascoltare è diventato il vero problema."
              body="Il 67% si aggiorna almeno una volta a settimana. Ma il 55% (22/40) lo fa su Instagram, TikTok, X. Solo 4 citano LinkedIn, 4 riviste di settore, 3 newsletter."
              quote={`"c'è questo senso di FOMO di tutto che mi impedisce di farlo in maniera ordinata" — Edo`}
            />
            <InsightCard
              id="I05"
              headline="Le persone già provano mentalmente quello che diranno. Ma non portano mai il discorso a terra."
              body="Il 42% (17/40) dichiara di provare mentalmente la conversazione — seconda attività più citata. Ma chi lo fa non ottiene risultati migliori. È rehearsal senza resistenza: nessun feedback, nessun interlocutore."
              quote='"il cliente si annoia, io mi annoio" — Edo'
            />
            <InsightCard
              id="I06"
              headline="Le persone pagherebbero per qualcosa che le aiuta professionalmente. Ma hanno difficoltà a fidarsi del prodotto."
              body="Il 62% (25/40) non ha mai considerato di pagare. Ma tra le 6 persone che hanno pagato e trovato qualcosa di utile, il giudizio è unanime: valeva. La resistenza non è il prezzo — è l'assenza di una prima esperienza positiva."
            />
            <InsightCard
              id="I07"
              headline="Le fonti fanno la sicurezza di un discorso. Non basta conoscere — devi sapere da dove viene quello che dici."
              body="Confermato da Alessandro e in modo indipendente da Edo nella call di ricerca. La provenienza della fonte è parte integrante della prontezza percepita, non un dettaglio accessorio."
              quote='"Un progetto studiato a fondo, di cui sapevo qualsiasi cosa. Le fonti danno la sicurezza." — Alessandro'
            />
          </div>
        </div>

        {/* ── 3. TIER COMPARISON ── */}
        <div style={{ marginBottom: "64px" }}>
          <Label>Architettura Tier</Label>
          <div style={{ border: `1px solid ${CARD_BORDER}`, borderRadius: "4px", overflow: "hidden" }}>
            {/* Header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "180px 140px 1fr 1fr",
                gap: "0",
                backgroundColor: "#111",
              }}
            >
              {["Tier", "Pricing", "Fonti", "Intelligenza"].map((h) => (
                <div
                  key={h}
                  style={{
                    fontSize: "10px",
                    fontWeight: 600,
                    color: TEXT_MUTED,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "10px 16px",
                    borderBottom: `1px solid ${DIVIDER}`,
                    borderRight: `1px solid ${DIVIDER}`,
                  }}
                >
                  {h}
                </div>
              ))}
            </div>

            {/* Rows */}
            {[
              {
                color: TIER_GREEN,
                tier: "🟢 Base",
                sub: "Entusiasta",
                pricing: "Gratuito",
                fonti: "Tier 3 aggregato, non dichiarate",
                intelligenza: "Piano fisso, nessuna personalizzazione",
              },
              {
                color: TIER_AMBER,
                tier: "🟡 Professionista",
                sub: "",
                pricing: "~€15/ciclo · ~€30/mese",
                fonti: "Tier 2 per dominio, fonte citata",
                intelligenza: "Piano adattivo su lacune, simulazione",
              },
              {
                color: TIER_RED,
                tier: "🔴 Expert/Hawking",
                sub: "",
                pricing: "~€25/ciclo · abbonamento",
                fonti: "Tier 1 verificate, provenienza esplicita",
                intelligenza: "Adattivo + memoria longitudinale + profilo interlocutore",
              },
            ].map((row, i) => (
              <div
                key={row.tier}
                style={{
                  display: "grid",
                  gridTemplateColumns: "180px 140px 1fr 1fr",
                  borderTop: i > 0 ? `1px solid ${DIVIDER}` : "none",
                  borderLeft: `3px solid ${row.color}`,
                }}
              >
                <div style={{ padding: "14px 16px", borderRight: `1px solid ${DIVIDER}` }}>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: row.color, marginBottom: "2px" }}>{row.tier}</div>
                  {row.sub && <div style={{ fontSize: "11px", color: TEXT_MUTED }}>{row.sub}</div>}
                </div>
                <div style={{ padding: "14px 16px", borderRight: `1px solid ${DIVIDER}`, fontSize: "12px", color: TEXT_MAIN, display: "flex", alignItems: "center" }}>
                  {row.pricing}
                </div>
                <div style={{ padding: "14px 16px", borderRight: `1px solid ${DIVIDER}`, fontSize: "12px", color: TEXT_MUTED, display: "flex", alignItems: "center" }}>
                  {row.fonti}
                </div>
                <div style={{ padding: "14px 16px", fontSize: "12px", color: TEXT_MUTED, display: "flex", alignItems: "center" }}>
                  {row.intelligenza}
                </div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: "11px", color: TEXT_MUTED, marginTop: "10px", fontStyle: "italic", fontFamily: "monospace" }}>
            Pricing pay-per-obiettivo preferito all'abbonamento per uso intermittente (Edo, call ricerca).
          </div>
        </div>

        {/* ── 4. CONTENT ENGINE ── */}
        <div style={{ marginBottom: "64px" }}>
          <Label>Content engine — fonti per dominio</Label>

          {/* Criteri */}
          <div style={{ border: `1px solid ${CARD_BORDER}`, borderRadius: "4px", overflow: "hidden", marginBottom: "20px" }}>
            {[
              { tier: "Tier 1", color: TIER_GREEN, def: "Peer review / institutional board — citabile accademicamente" },
              { tier: "Tier 2", color: TIER_AMBER, def: "Redazione professionale, editorial board — citabile con cautela" },
              { tier: "Tier 3", color: TEXT_MUTED, def: "Reddit, X, forum — solo tono conversazionale, mai fonte primaria" },
            ].map((row, i) => (
              <div
                key={row.tier}
                style={{
                  display: "grid",
                  gridTemplateColumns: "100px 1fr",
                  borderTop: i > 0 ? `1px solid ${DIVIDER}` : "none",
                  borderLeft: `3px solid ${row.color}`,
                }}
              >
                <div style={{ padding: "10px 14px", borderRight: `1px solid ${DIVIDER}`, fontSize: "11px", fontWeight: 600, color: row.color, display: "flex", alignItems: "center" }}>
                  {row.tier}
                </div>
                <div style={{ padding: "10px 14px", fontSize: "12px", color: TEXT_MUTED, display: "flex", alignItems: "center" }}>
                  {row.def}
                </div>
              </div>
            ))}
          </div>

          {/* Domain table */}
          <div style={{ border: `1px solid ${CARD_BORDER}`, borderRadius: "4px", overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "140px 1fr 1fr 1fr", backgroundColor: "#111" }}>
              {["Dominio", "Tier 1", "Tier 2", "Tier 3"].map((h, i) => (
                <div
                  key={h}
                  style={{
                    fontSize: "10px",
                    fontWeight: 600,
                    color: i === 1 ? TIER_GREEN : i === 2 ? TIER_AMBER : i === 3 ? TEXT_MUTED : TEXT_MUTED,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "10px 14px",
                    borderBottom: `1px solid ${DIVIDER}`,
                    borderRight: i < 3 ? `1px solid ${DIVIDER}` : "none",
                  }}
                >
                  {h}
                </div>
              ))}
            </div>
            {domainRows.map((row, i) => (
              <div
                key={row.domain}
                style={{
                  display: "grid",
                  gridTemplateColumns: "140px 1fr 1fr 1fr",
                  borderTop: `1px solid ${DIVIDER}`,
                  backgroundColor: i % 2 === 0 ? "#111111" : "#161616",
                }}
              >
                <div style={{ padding: "10px 14px", borderRight: `1px solid ${DIVIDER}`, fontSize: "11px", fontWeight: 600, color: TEXT_MAIN, display: "flex", alignItems: "center" }}>
                  {row.domain}
                </div>
                <div style={{ padding: "10px 14px", borderRight: `1px solid ${DIVIDER}`, display: "flex", flexWrap: "wrap", alignContent: "flex-start" }}>
                  {row.t1.map((s) => <SourcePill key={s} label={s} tier="t1" />)}
                </div>
                <div style={{ padding: "10px 14px", borderRight: `1px solid ${DIVIDER}`, display: "flex", flexWrap: "wrap", alignContent: "flex-start" }}>
                  {row.t2.map((s) => <SourcePill key={s} label={s} tier="t2" />)}
                </div>
                <div style={{ padding: "10px 14px", display: "flex", flexWrap: "wrap", alignContent: "flex-start" }}>
                  {row.t3.map((s) => <SourcePill key={s} label={s} tier="t3" />)}
                </div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: "11px", color: TEXT_MUTED, marginTop: "10px", fontFamily: "monospace" }}>
            Tier 3: attivo solo nelle 24–48h pre-evento per cogliere il tono corrente. Sempre dopo Tier 1 e 2.
          </div>
        </div>

        {/* ── 5. FUNCTION CARDS ── */}
        <div style={{ marginBottom: "64px" }}>
          <Label>Funzioni — F01 → F07</Label>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <FunctionCard
              id="F01"
              name="Triage d'ingresso"
              insightRef="I01"
              context="Onboarding evento"
              description="3 tap prima della generazione del piano. Il sistema usa queste risposte per costruire il piano e calibrare profondità, punto di partenza e carico giornaliero."
              tiers={{
                base: "Piano fisso",
                pro: "Piano adattivo",
                expert: "Adattivo + profilo interlocutore",
              }}
              table={{
                headers: ["Domanda", "Opzioni", "Effetto"],
                rows: [
                  ["Quanto conta?", "Routine / Importante / Decisivo", "Profondità e numero sessioni"],
                  ["Familiarità del contesto?", "Conosco bene / Qualche info / Nuovo", "Livello di partenza del briefing"],
                  ["Tempo al giorno?", "5 / 15 / 30 min", "Distribuzione del carico"],
                ],
              }}
              quote='"servirebbe qualcosa che aiuti a riordinare e dare una scala di priorità" — Edo'
            />

            <FunctionCard
              id="F02"
              name="Starter del giorno"
              insightRef="I01"
              context="Home screen — sessione attiva"
              description="Ad ogni apertura dell'app, una sola card con l'azione prioritaria del momento — calcolata su lacuna più critica, giorni rimasti, ultima sessione completata. L'utente non sceglie da dove ricominciare."
              tiers={{
                base: "Sequenziale fisso",
                pro: "Su lacuna prioritaria",
                expert: "+ memoria longitudinale",
              }}
            />

            <FunctionCard
              id="F03"
              name="Modalità vigilia"
              insightRef="I03"
              context="Attiva nelle 24h precedenti l'evento"
              description="Tre componenti in sequenza che sostituiscono la modalità preparazione standard. Progettate per ridurre l'incertezza pre-evento, non per aggiungere contenuto."
              tiers={{ base: "—", pro: "A + B + C sopra soglia", expert: "A + B Tier 1 + C soglia custom" }}
              subComponents={[
                {
                  label: "A — Ultimo ripasso (5 min)",
                  desc: "Solo i 2–3 nodi con readiness score più basso. Niente di nuovo. Formato: bullet + esempio + domanda di verifica.",
                  tier: "🟢 stimati · 🟡🔴 da dati reali",
                },
                {
                  label: "B — Ancora di salvezza",
                  desc: "Risposta pre-scritta per le 2 situazioni più temute. Fonte dichiarata. Sblocca solo se readiness score ≥ soglia minima.",
                  tier: "🟢 — · 🟡 Tier 2 · 🔴 Tier 1 su profilo",
                },
                {
                  label: "C — Mute mode",
                  desc: "Blocco totale di nuovi contenuti. Attivabile solo sopra soglia readiness.",
                  tier: "🟢 — · 🟡🔴 soglia personalizzabile",
                },
              ]}
              quote="14 non-preparati: performance 3.07 > aspettative 2.71 — il problema è l'incertezza pre-evento."
            />

            <FunctionCard
              id="F04"
              name="Briefing settimanale"
              insightRef="I04"
              context="Modalità continua — tra eventi"
              description="Il sistema consegna 3 temi settimanali curati per settore e ruolo. L'utente non può superare N temi attivi (default: 5) — per aggiungerne uno deve rimuoverne uno. Forza sostituzione, non accumulo."
              tiers={{
                base: "3 temi generici, Tier 3 non dichiarato",
                pro: "3 temi per ruolo, Tier 2 citata",
                expert: "Tier 1, provenienza esplicita",
              }}
              quote='"FOMO di tutto che mi impedisce di farlo in maniera ordinata" — Edo · 55% si aggiorna su Instagram/TikTok/X'
            />

            <FunctionCard
              id="F05"
              name="Simulatore con resistenza"
              insightRef="I05"
              context="Seconda metà del piano — base coperta"
              description="Due componenti per trasformare il rehearsal mentale informale in pratica strutturata con feedback reale."
              tiers={{
                base: "Non disponibile (preview visibile)",
                pro: "Entrambe, calibrate su tipo evento",
                expert: "Calibrate su profilo interlocutore specifico",
              }}
              subComponents={[
                {
                  label: "A — Interruzione non annunciata",
                  desc: "Obiezione o cambio di tema inseriti nel mezzo della risposta. Calibrata su tipo evento: colloquio → competenza · pitch → competitor · networking → cambio tema adiacente.",
                  tier: "🟢 — · 🟡 tipo evento · 🔴 profilo interlocutore",
                },
                {
                  label: "B — Specchio del registro",
                  desc: "Rileva in tempo reale il punto in cui il tono supera la soglia di attenzione dell'interlocutore dichiarato. Feedback localizzato. Soglia calibrata su contesto.",
                  tier: "🟢 — · 🟡 tipo evento · 🔴 audience dichiarata",
                },
              ]}
              quote='"42% prova mentalmente, risultati identici a chi non prova. "il cliente si annoia, io mi annoio" — Edo'
            />

            <FunctionCard
              id="F06"
              name="Trial senza registrazione"
              insightRef="I06"
              context="Entry point pre-login"
              description="Una sessione reale completabile senza account. Meno intelligente, ma funzionante. Al termine: confronto esplicito con Professionista — mostra il gap prima di chiedere la conversione."
              tiers={{
                base: "Entry point",
                pro: "Entry point",
                expert: "Entry point",
              }}
              table={{
                headers: ["", "Trial", "🟢 Base"],
                rows: [
                  ["Piano", "Generico, non salvato", "Generico, salvato"],
                  ["Fonti", "Tier 3, non citate", "Tier 3, non citate"],
                  ["Sessioni", "1", "Ciclo completo"],
                  ["Readiness score", "No", "No"],
                  ["Memoria", "No", "No"],
                ],
              }}
              quote='62% non ha mai pagato · chi ha pagato e trovato valore: giudizio unanime "valeva"'
            />

            <FunctionCard
              id="F07"
              name="Profilo interlocutore preventivo"
              insightRef="I07"
              context="Attivo dall'inizio del ciclo · alimenta F03-B, F04, F05"
              description="Il sistema inferisce il profilo probabile dell'audience da: tipo evento + settore + ruolo/seniority del contesto. Restituisce: livello expertise atteso, obiettivi probabili, registro comunicativo tipico, 2–3 domande frequenti. L'utente corregge se ha info aggiuntive."
              tiers={{
                base: "Profilo assente",
                pro: "Archetipo Tier 2, correggibile",
                expert: "Dossier Tier 1 dichiarate",
              }}
              quote='"La conoscenza di chi mi ascoltava… le fonti danno la sicurezza." — Alessandro · Nessun player supera 3/5 su briefing contestuale (benchmark)'
            />
          </div>
        </div>

        {/* ── 6. SUMMARY MATRIX ── */}
        <div style={{ marginBottom: "64px" }}>
          <Label>Mappa funzioni × tier</Label>
          <div style={{ border: `1px solid ${CARD_BORDER}`, borderRadius: "4px", overflow: "hidden" }}>
            {/* Header */}
            <div style={{ display: "grid", gridTemplateColumns: "160px 1fr 1fr 1fr" }}>
              <div style={{ padding: "12px 14px", borderRight: `1px solid ${DIVIDER}`, borderBottom: `1px solid ${DIVIDER}`, fontSize: "10px", color: TEXT_MUTED, textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>
                Funzione
              </div>
              {[
                { label: "🟢 Base", color: TIER_GREEN },
                { label: "🟡 Professionista", color: TIER_AMBER },
                { label: "🔴 Expert/Hawking", color: TIER_RED },
              ].map((col, i) => (
                <div
                  key={col.label}
                  style={{
                    padding: "12px 14px",
                    borderRight: i < 2 ? `1px solid ${DIVIDER}` : "none",
                    borderBottom: `1px solid ${DIVIDER}`,
                    backgroundColor: `${col.color}12`,
                    fontSize: "11px",
                    fontWeight: 600,
                    color: col.color,
                  }}
                >
                  {col.label}
                </div>
              ))}
            </div>
            {/* Rows */}
            {matrixRows.map((row, i) => (
              <div
                key={row.fn}
                style={{
                  display: "grid",
                  gridTemplateColumns: "160px 1fr 1fr 1fr",
                  borderTop: `1px solid ${DIVIDER}`,
                  backgroundColor: i % 2 === 0 ? "#111111" : "#161616",
                }}
              >
                <div style={{ padding: "10px 14px", borderRight: `1px solid ${DIVIDER}`, fontSize: "11px", fontWeight: 600, color: TEXT_MAIN }}>
                  {row.fn}
                </div>
                <div style={{ padding: "10px 14px", borderRight: `1px solid ${DIVIDER}`, fontSize: "11px", color: TEXT_MUTED, lineHeight: 1.5 }}>
                  {row.base}
                </div>
                <div style={{ padding: "10px 14px", borderRight: `1px solid ${DIVIDER}`, fontSize: "11px", color: TEXT_MUTED, lineHeight: 1.5 }}>
                  {row.pro}
                </div>
                <div style={{ padding: "10px 14px", fontSize: "11px", color: TEXT_MUTED, lineHeight: 1.5 }}>
                  {row.expert}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 7. FOOTER ── */}
        <div style={{ borderTop: `1px solid ${DIVIDER}`, paddingTop: "24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "32px" }}>
            <div>
              <div style={{ fontSize: "10px", fontWeight: 600, color: TEXT_MUTED, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>
                Campione
              </div>
              <div style={{ fontSize: "12px", color: TEXT_MUTED, lineHeight: 1.5 }}>
                N=40, ±15pp, 65% Design/UX — generalizzazione limitata al cluster.
              </div>
            </div>
            <div>
              <div style={{ fontSize: "10px", fontWeight: 600, color: TEXT_MUTED, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>
                Segment split I03
              </div>
              <div style={{ fontSize: "12px", color: TEXT_MUTED, lineHeight: 1.5 }}>
                Edoardo conferma ansia pre-evento; Alessandro la nega. F03 serve entrambi — ancora e mute mode funzionano anche senza anxiety come driver.
              </div>
            </div>
            <div>
              <div style={{ fontSize: "10px", fontWeight: 600, color: TEXT_MUTED, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>
                Prima di prototipare
              </div>
              <div style={{ fontSize: "12px", color: TEXT_MUTED, lineHeight: 1.5 }}>
                F03-B — testare se la soglia readiness come gate è motivante o frustrante (agile test 3–5 utenti). F07 — testare precisione del profilo generato (2 walkthrough).
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
