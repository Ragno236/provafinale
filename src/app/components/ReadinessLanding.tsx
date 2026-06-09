const BLACK = "#0A0A0A";
const GRAY = "#888888";
const TEXT = "#3D3D3D";
const BORDER = "#E0E0E0";
const BG = "#FFFFFF";
const ACCENT = "#E8FF5A";
const SOFT = "#F8F8F8";

const FONT = "'Helvetica Neue', Helvetica, Arial, sans-serif";

interface Tier {
  name: string;
  alias: string;
  price: string;
  cadence: string;
  promise: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

const tiers: Tier[] = [
  {
    name: "Free",
    alias: "Entusiasta",
    price: "0€",
    cadence: "per sempre",
    promise: "Sai cosa sta succedendo nel tuo settore.",
    features: [
      "Briefing da leggere, selezionati per il tuo contesto",
      "Primo evento con piano base 7 giorni",
      "Readiness score di base — sai solo dove sei",
      "1 evento attivo alla volta",
    ],
    cta: "Inizia gratis",
  },
  {
    name: "Pro",
    alias: "Professionista",
    price: "9€",
    cadence: "al mese",
    promise: "Sai parlarne bene quando conta.",
    features: [
      "Micro-sessioni da 10–15 min con simulazione conversazionale",
      "Readiness score completo — dove sei forte e dove sei debole",
      "Piani illimitati, eventi paralleli",
      "Daily check-in da 2 minuti tra un evento e l'altro",
      "Memoria longitudinale dopo 3 eventi",
    ],
    cta: "Prova 14 giorni",
    highlight: true,
  },
  {
    name: "Expert",
    alias: "Stephen Hawking",
    price: "29€",
    cadence: "al mese",
    promise: "Calibrato sull'interlocutore specifico.",
    features: [
      "Tutto Pro",
      "Modello personale longitudinale pieno",
      "Briefing a fonti certificate (paper, riviste di settore, ricerca)",
      "Simulazioni calibrate sull'interlocutore — non sul ruolo",
      "Debrief post-evento con piano di gap permanenti",
    ],
    cta: "Parla con noi",
  },
];

interface Step {
  n: string;
  title: string;
  body: string;
}

const steps: Step[] = [
  {
    n: "01",
    title: "Dichiara l'evento",
    body: "Una data, un tipo (colloquio, networking, talk, one-to-one difficile). Niente argomenti da scrivere — li identifica il sistema dal contesto.",
  },
  {
    n: "02",
    title: "Il piano si costruisce da solo",
    body: "Micro-sessioni da 10–15 minuti al giorno. Briefing contestuale, esercizi di argomentazione, simulazione conversazionale man mano che la data si avvicina.",
  },
  {
    n: "03",
    title: "Active recall, non lettura passiva",
    body: "Dopo ogni briefing, 3–5 domande aperte ancorate al materiale. Non «cos'è X», ma «come risponderesti se te lo chiedessero». Valutazione su contenuto e argomentazione.",
  },
  {
    n: "04",
    title: "Readiness score",
    body: "Non «hai completato il 70% del piano». «Sei pronto al 65%. Il punto critico è l'apertura conversazionale, non il contenuto.» Un punto di chiusura definito.",
  },
  {
    n: "05",
    title: "Memoria tra eventi",
    body: "Daily check-in da 2 minuti mantiene attiva la traccia. Dopo 3–4 eventi il sistema conosce i pattern ricorrenti — cosa salti, dove rallenti, quale dimensione non consolidi mai.",
  },
];

interface Insight {
  code: string;
  short: string;
  body: string;
}

const foundationInsights: Insight[] = [
  {
    code: "I01",
    short: "«Non ho tempo» è una scusa.",
    body: "Il 52% di chi si è preparato male ha citato due cause: mancanza di tempo (28%) e disorientamento (25%). Il blocco non è motivazionale — è architetturale. Manca un punto di ingresso.",
  },
  {
    code: "I04",
    short: "Troppi contenuti, zero gerarchia.",
    body: "Il 67% si aggiorna almeno una volta a settimana. Ma il 55% lo fa su Instagram, TikTok, X. Readiness non genera contenuti: seleziona e sequenzia quelli rilevanti per l'evento dichiarato.",
  },
  {
    code: "I05",
    short: "Rehearsal mentale senza resistenza.",
    body: "Il 42% «prova mentalmente la conversazione». Ma chi lo fa non ottiene risultati migliori — è un monologo interiore senza feedback. La simulazione conversazionale è componente core, non feature aggiuntiva.",
  },
  {
    code: "I02",
    short: "L'AI da sola non chiude il ciclo.",
    body: "Il 55% usa strumenti AI. Performance media inferiore a chi non la usa (3.14 vs 3.61 su 5). L'AI genera volume, non gerarchia. Il problema non è il modello — è la struttura del processo.",
  },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <div style={{ fontSize: 11, fontWeight: 400, color: GRAY, letterSpacing: "0.5px", marginBottom: 12, fontFamily: FONT }}>
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: string }) {
  return (
    <div style={{ fontSize: 32, fontWeight: 500, color: BLACK, lineHeight: 1.15, fontFamily: FONT }}>
      {children}
    </div>
  );
}

function Hero() {
  return (
    <div style={{ padding: "120px 48px 96px", borderBottom: `0.5px solid ${BORDER}`, fontFamily: FONT }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ fontSize: 11, fontWeight: 400, color: GRAY, letterSpacing: "0.5px", marginBottom: 24 }}>
          READINESS — UN PRODOTTO PER CHI HA UN EVENTO IN VISTA
        </div>
        <div style={{ fontSize: 64, fontWeight: 500, color: BLACK, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 32, maxWidth: 1100 }}>
          Saprai dove sei prima di entrare.
          <span style={{ color: GRAY }}> Non «hai completato il 70% del piano». «Sei pronto al 65%, il punto critico è l'apertura.»</span>
        </div>
        <div style={{ fontSize: 16, fontWeight: 400, color: TEXT, lineHeight: 1.6, maxWidth: 720, marginBottom: 48 }}>
          Readiness trasforma quello che sai in prontezza misurabile. Un piano da micro-sessioni di 10–15 minuti, simulazione conversazionale, un readiness score che chiude il ciclo. Costruito su 40 risposte di sondaggio, 3 interviste, una call con un mentor.
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
          <button
            style={{
              backgroundColor: BLACK, color: "#FFFFFF", border: "none",
              padding: "16px 28px", fontSize: 14, fontWeight: 500,
              fontFamily: FONT, cursor: "pointer", borderRadius: 0,
            }}
          >
            Dichiara il tuo prossimo evento →
          </button>
          <button
            style={{
              backgroundColor: "transparent", color: BLACK, border: `1px solid ${BLACK}`,
              padding: "16px 28px", fontSize: 14, fontWeight: 500,
              fontFamily: FONT, cursor: "pointer", borderRadius: 0,
            }}
          >
            Vedi come funziona
          </button>
          <div style={{ fontSize: 12, color: GRAY, marginLeft: 8 }}>
            Free per sempre. Nessuna carta richiesta.
          </div>
        </div>

        {/* Riga di prova sociale dai dati */}
        <div style={{ marginTop: 96, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 48, borderTop: `1.5px solid ${BLACK}`, paddingTop: 32 }}>
          {[
            { num: "65%", label: "Ha un evento importante nei prossimi 3 mesi" },
            { num: "55%", label: "Usa già AI per prepararsi — senza risultati migliori" },
            { num: "42%", label: "Prova mentalmente le conversazioni, da solo" },
            { num: "62%", label: "Dedica meno di 30 min/settimana ad aggiornarsi" },
          ].map((s) => (
            <div key={s.num}>
              <div style={{ fontSize: 40, fontWeight: 500, color: BLACK, lineHeight: 1, marginBottom: 12, letterSpacing: "-0.02em" }}>
                {s.num}
              </div>
              <div style={{ fontSize: 12, fontWeight: 400, color: TEXT, lineHeight: 1.5 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HowItWorks() {
  return (
    <div style={{ padding: "96px 48px", borderBottom: `0.5px solid ${BORDER}`, fontFamily: FONT }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ marginBottom: 64 }}>
          <SectionLabel>COME FUNZIONA</SectionLabel>
          <SectionTitle>Cinque passaggi. Un ciclo che si chiude.</SectionTitle>
          <div style={{ fontSize: 14, color: GRAY, marginTop: 12, maxWidth: 640 }}>
            ChatGPT non esiste tra una sessione e l'altra. Readiness sì. La differenza non sta nel modello — sta nella sequenza.
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 24 }}>
          {steps.map((s) => (
            <div key={s.n} style={{ borderTop: `1.5px solid ${BLACK}`, paddingTop: 20 }}>
              <div style={{ fontSize: 11, fontWeight: 400, color: GRAY, letterSpacing: "0.5px", marginBottom: 16 }}>
                {s.n}
              </div>
              <div style={{ fontSize: 16, fontWeight: 500, color: BLACK, marginBottom: 12, lineHeight: 1.25 }}>
                {s.title}
              </div>
              <div style={{ fontSize: 13, fontWeight: 400, color: TEXT, lineHeight: 1.6 }}>
                {s.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WhyNotLLM() {
  return (
    <div style={{ padding: "96px 48px", backgroundColor: BLACK, color: "#FFFFFF", fontFamily: FONT }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ fontSize: 11, fontWeight: 400, color: "#888888", letterSpacing: "0.5px", marginBottom: 24 }}>
          PERCHÉ NON È UN LLM CON UN'INTERFACCIA CARINA
        </div>
        <div style={{ fontSize: 40, fontWeight: 500, lineHeight: 1.15, marginBottom: 48, maxWidth: 1000, letterSpacing: "-0.01em" }}>
          La differenza sta nella <span style={{ backgroundColor: ACCENT, color: BLACK, padding: "0 8px" }}>memoria longitudinale</span>.
          Dopo 3–4 eventi, il sistema conosce i pattern ricorrenti dell'utente. Ogni ciclo successivo parte da una baseline più alta.
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, fontSize: 14, lineHeight: 1.7, color: "#CCCCCC", maxWidth: 1100 }}>
          <div>
            Un utente con buona prompt literacy può farsi un piano con un chatbot in 10 minuti. Quello che non può ottenere è un sistema che lo ricordi, lo tenga pronto nel tempo, e sappia dove è strutturalmente debole dopo tre eventi.
          </div>
          <div>
            La memoria si costruisce dal daily check-in di 2 minuti tra un evento e l'altro. Cosa salti, dove rallenti, quale dimensione non consolidi mai. Quello è il prodotto.
          </div>
        </div>
      </div>
    </div>
  );
}

function Foundation() {
  return (
    <div style={{ padding: "96px 48px", borderBottom: `0.5px solid ${BORDER}`, fontFamily: FONT }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ marginBottom: 64 }}>
          <SectionLabel>DA DOVE VIENE</SectionLabel>
          <SectionTitle>I quattro insight che giustificano il design.</SectionTitle>
          <div style={{ fontSize: 14, color: GRAY, marginTop: 12, maxWidth: 720 }}>
            Readiness non nasce da un'intuizione. 40 risposte a un sondaggio, 3 interviste semi-strutturate, una call di review. Campione concentrato in Design/UX e studenti — i finding vanno letti dentro quel perimetro.
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
          {foundationInsights.map((i) => (
            <div key={i.code} style={{ borderTop: `1.5px solid ${BLACK}`, paddingTop: 24 }}>
              <div style={{ fontSize: 11, fontWeight: 400, color: GRAY, letterSpacing: "0.5px", marginBottom: 16 }}>
                {i.code} — CONFIDENZA SICURA
              </div>
              <div style={{ fontSize: 22, fontWeight: 500, color: BLACK, lineHeight: 1.25, marginBottom: 16, letterSpacing: "-0.01em" }}>
                {i.short}
              </div>
              <div style={{ fontSize: 14, fontWeight: 400, color: TEXT, lineHeight: 1.65 }}>
                {i.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Pricing() {
  return (
    <div style={{ padding: "96px 48px", borderBottom: `0.5px solid ${BORDER}`, fontFamily: FONT, backgroundColor: SOFT }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ marginBottom: 16 }}>
          <SectionLabel>ABBONAMENTI</SectionLabel>
          <SectionTitle>Tre livelli. La separazione non è quantitativa — è qualitativa.</SectionTitle>
          <div style={{ fontSize: 14, color: GRAY, marginTop: 12, maxWidth: 720 }}>
            Non meno contenuti. Meno trasformazione. Al termine del primo evento gratuito il sistema mostra il gap tra la preparazione raggiunta e quella che avresti avuto con il piano premium — il valore è visibile prima di chiederti soldi.
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 64 }}>
          {tiers.map((t) => (
            <div
              key={t.name}
              style={{
                backgroundColor: t.highlight ? BLACK : "#FFFFFF",
                color: t.highlight ? "#FFFFFF" : BLACK,
                padding: 32,
                border: `1px solid ${t.highlight ? BLACK : BORDER}`,
                display: "flex",
                flexDirection: "column",
                minHeight: 560,
                position: "relative",
              }}
            >
              {t.highlight && (
                <div style={{
                  position: "absolute", top: -10, left: 32,
                  backgroundColor: ACCENT, color: BLACK,
                  fontSize: 10, fontWeight: 500, letterSpacing: "0.8px",
                  padding: "5px 10px",
                }}>
                  PIÙ SCELTO
                </div>
              )}

              <div style={{ fontSize: 11, fontWeight: 400, color: t.highlight ? "#888888" : GRAY, letterSpacing: "0.5px", marginBottom: 8 }}>
                {t.alias.toUpperCase()}
              </div>
              <div style={{ fontSize: 24, fontWeight: 500, marginBottom: 24, letterSpacing: "-0.01em" }}>
                {t.name}
              </div>

              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 8 }}>
                <div style={{ fontSize: 44, fontWeight: 500, lineHeight: 1, letterSpacing: "-0.02em" }}>
                  {t.price}
                </div>
                <div style={{ fontSize: 12, color: t.highlight ? "#888888" : GRAY }}>
                  {t.cadence}
                </div>
              </div>

              <div style={{ fontSize: 14, color: t.highlight ? "#CCCCCC" : TEXT, lineHeight: 1.5, marginBottom: 28, paddingBottom: 24, borderBottom: `0.5px solid ${t.highlight ? "#333333" : BORDER}` }}>
                {t.promise}
              </div>

              <ul style={{ margin: 0, padding: 0, listStyle: "none", flex: 1 }}>
                {t.features.map((f, idx) => (
                  <li
                    key={idx}
                    style={{
                      fontSize: 13, fontWeight: 400,
                      color: t.highlight ? "#CCCCCC" : TEXT,
                      lineHeight: 1.55,
                      marginBottom: 12,
                      paddingLeft: 18, position: "relative",
                    }}
                  >
                    <span style={{ position: "absolute", left: 0, top: 0, color: t.highlight ? ACCENT : BLACK }}>—</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                style={{
                  marginTop: 24,
                  backgroundColor: t.highlight ? ACCENT : BLACK,
                  color: BLACK,
                  border: "none",
                  padding: "14px 20px",
                  fontSize: 13, fontWeight: 500,
                  fontFamily: FONT, cursor: "pointer", borderRadius: 0,
                  ...(t.highlight ? {} : { color: "#FFFFFF" }),
                }}
              >
                {t.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Alternativa pay-per-evento */}
        <div style={{ marginTop: 48, padding: 24, border: `1px dashed ${BORDER}`, backgroundColor: "#FFFFFF", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: 11, color: GRAY, letterSpacing: "0.5px", marginBottom: 6 }}>IN VALUTAZIONE</div>
            <div style={{ fontSize: 16, fontWeight: 500, color: BLACK, marginBottom: 4 }}>Pay-per-obiettivo — ~30€ a evento</div>
            <div style={{ fontSize: 13, color: TEXT, lineHeight: 1.5, maxWidth: 720 }}>
              Coerente con il pattern di uso intermittente emerso dal campione. Niente abbonamento, paghi quando hai un evento.
            </div>
          </div>
          <button style={{ backgroundColor: "transparent", color: BLACK, border: `1px solid ${BLACK}`, padding: "12px 20px", fontSize: 13, fontWeight: 500, fontFamily: FONT, cursor: "pointer", borderRadius: 0 }}>
            Avvisami al lancio
          </button>
        </div>
      </div>
    </div>
  );
}

function ScreensIntro() {
  return (
    <div style={{ padding: "96px 48px 48px", fontFamily: FONT, backgroundColor: BG }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <SectionLabel>IL PRODOTTO IN MANO</SectionLabel>
        <SectionTitle>23 schermate — dall'onboarding alle ore prima dell'evento.</SectionTitle>
        <div style={{ fontSize: 14, color: GRAY, marginTop: 12, maxWidth: 720 }}>
          Uno scenario unico: Simone, 12 giorni a un talk di Talent Garden sull'AI. Onboarding, piano, sessioni di briefing, quiz di active recall, simulazione conversazionale, countdown pre-evento.
        </div>
      </div>
    </div>
  );
}

function ResearchIntro() {
  return (
    <div style={{ padding: "96px 48px 48px", fontFamily: FONT, backgroundColor: BG, borderTop: `1.5px solid ${BLACK}` }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <SectionLabel>LA RICERCA SOTTO IL PRODOTTO</SectionLabel>
        <SectionTitle>Interviste, personas, 11 insight, journey map e specifiche funzionali.</SectionTitle>
        <div style={{ fontSize: 14, color: GRAY, marginTop: 12, maxWidth: 720 }}>
          Tutto il materiale di ricerca su cui Readiness è costruita. Nessun dato inventato o sintetico.
        </div>
      </div>
    </div>
  );
}

export function ReadinessLanding() {
  return (
    <div style={{ backgroundColor: BG, fontFamily: FONT }}>
      <Hero />
      <HowItWorks />
      <WhyNotLLM />
      <Foundation />
      <Pricing />
      <ScreensIntro />
    </div>
  );
}

export { ResearchIntro };
