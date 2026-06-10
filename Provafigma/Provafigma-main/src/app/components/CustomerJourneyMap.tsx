interface CJMPhase {
  trigger: string;
  orientamento: string;
  preparazione: string;
  esecuzione: string;
  postEvento: string;
  cicloSuccessivo: string;
}

interface CJMData {
  id: string;
  name: string;
  quote: string;
  scopeGoal: string;
  actions: CJMPhase;
  emotions: CJMPhase;
  painpoints: CJMPhase;
  opportunities: CJMPhase;
  touchpoints: CJMPhase;
}

const phases = ["TRIGGER", "ORIENTAMENTO", "PREPARAZIONE", "ESECUZIONE", "POST-EVENTO", "CICLO SUCCESSIVO"];

const rowConfig = [
  { key: "actions", label: "ACTIONS", bg: "#FFFFFF" },
  { key: "emotions", label: "EMOTIONS", bg: "#FFF8F0" },
  { key: "painpoints", label: "PAINPOINTS", bg: "#FFF3F3" },
  { key: "opportunities", label: "OPPORTUNITIES", bg: "#F0FAF4" },
  { key: "touchpoints", label: "TOUCHPOINTS", bg: "#F4F4FF" },
] as const;

function phaseValues(phase: CJMPhase): string[] {
  return [
    phase.trigger,
    phase.orientamento,
    phase.preparazione,
    phase.esecuzione,
    phase.postEvento,
    phase.cicloSuccessivo,
  ];
}

function CJMTable({ data, index }: { data: CJMData; index: number }) {
  return (
    <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", marginBottom: "0" }}>
      {/* Section label */}
      <div
        style={{
          fontSize: "11px",
          fontWeight: 400,
          color: "#888888",
          letterSpacing: "0.5px",
          marginBottom: "16px",
        }}
      >
        CJM #{index + 1} — {data.name.toUpperCase()} (AS-IS)
      </div>

      {/* Scope header bar */}
      <div
        style={{
          backgroundColor: "#2B2B2B",
          display: "grid",
          gridTemplateColumns: "220px 1fr",
          minHeight: "64px",
          border: "1px solid #2B2B2B",
          borderBottom: "none",
        }}
      >
        {/* Left: name + quote */}
        <div
          style={{
            padding: "12px 16px",
            borderRight: "1px solid #444444",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "4px",
          }}
        >
          <div style={{ fontSize: "13px", fontWeight: 700, color: "#FFFFFF", letterSpacing: "0.05em" }}>
            {data.name.toUpperCase()}
          </div>
          <div
            style={{
              fontSize: "11px",
              fontWeight: 400,
              color: "#AAAAAA",
              fontStyle: "italic",
              lineHeight: 1.4,
            }}
          >
            "{data.quote}"
          </div>
        </div>

        {/* Right: scope & goal */}
        <div
          style={{
            padding: "12px 16px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              fontSize: "11px",
              fontWeight: 600,
              color: "#FFFFFF",
              letterSpacing: "0.06em",
              whiteSpace: "nowrap",
            }}
          >
            SCOPE AND GOAL:
          </span>
          <span style={{ fontSize: "12px", fontWeight: 400, color: "#CCCCCC", lineHeight: 1.5 }}>
            {data.scopeGoal}
          </span>
        </div>
      </div>

      {/* Table */}
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            border: "1px solid #DDDDDD",
            tableLayout: "fixed",
          }}
        >
          {/* Phase headers row */}
          <thead>
            <tr>
              <th
                style={{
                  backgroundColor: "#2B2B2B",
                  width: "120px",
                  padding: "12px",
                  border: "1px solid #444444",
                }}
              />
              {phases.map((phase) => (
                <th
                  key={phase}
                  style={{
                    backgroundColor: "#2B2B2B",
                    color: "#FFFFFF",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textAlign: "left",
                    padding: "12px",
                    border: "1px solid #444444",
                  }}
                >
                  {phase}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rowConfig.map(({ key, label, bg }) => {
              const values = phaseValues(data[key]);
              return (
                <tr key={key}>
                  {/* Row label */}
                  <td
                    style={{
                      backgroundColor: "#F0F0F0",
                      color: "#1A1A1A",
                      fontSize: "10px",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      padding: "12px",
                      border: "1px solid #DDDDDD",
                      verticalAlign: "middle",
                      textAlign: "center",
                    }}
                  >
                    {label}
                  </td>
                  {/* Phase cells */}
                  {values.map((val, i) => (
                    <td
                      key={i}
                      style={{
                        backgroundColor: bg,
                        color: "#1A1A1A",
                        fontSize: "12px",
                        fontWeight: 400,
                        lineHeight: 1.5,
                        padding: "12px",
                        border: "1px solid #DDDDDD",
                        verticalAlign: "top",
                      }}
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const cjmData: CJMData[] = [
  {
    id: "edoardo",
    name: "Edoardo Ferrante",
    quote: "Le informazioni ci sono. Il problema è che sono troppe e non riesco a capire quali portare.",
    scopeGoal:
      "Titolare di agenzia che gestisce incontri con clienti nuovi. Bisogno: calibrare la preparazione al contesto dell'interlocutore ed uscire con un senso di completamento, non di ansia residua.",
    actions: {
      trigger:
        "Riceve richiesta da un cliente nuovo o fissa appuntamento. Sa che servirà presentarsi bene. Comincia ad accumulare appunti e bookmark senza ancora un piano strutturato.",
      orientamento:
        "Usa Perplexity per ricerche, Claude per strutturare, Notion per costruire knowledge base. Crea progetti divisi per aree (strategia, content, marketing). Legge in modo selettivo mentre l'AI genera i contenuti.",
      preparazione:
        "Tenta di sintetizzare in scaletta ma non completa il processo. Prepara documenti, contratti, materiali. Non sa quando fermarsi. Continua ad aggiungere contenuto invece di chiudere il ciclo.",
      esecuzione:
        "Si presenta con preparazione oggettivamente alta. Percepisce l'attenzione dell'interlocutore in tempo reale e adatta intonazione. Porta 20 pagine dove ne servono 2.",
      postEvento:
        "Riflette sull'incontro in modo critico, spesso negativo. Non struttura nessun apprendimento. Non registra cosa ha funzionato vs cosa era in eccesso.",
      cicloSuccessivo:
        "Ricomincia lo stesso ciclo al prossimo evento. Nessun apprendimento trasferito. Ogni preparazione è come la prima.",
    },
    emotions: {
      trigger:
        'Ansia anticipatoria. "Mi sentivo di dover performare." Pressione auto-generata indipendente dal livello di aspettativa reale del cliente.',
      orientamento:
        'FOMO pervasiva. "C\'è questo senso di overwhelm." Urgenza di completezza che contrasta con i tempi disponibili.',
      preparazione:
        "Non sa quando è abbastanza. Segnale di completamento assente. Ansia che cresce anziché diminuire durante la preparazione.",
      esecuzione:
        "Percepisce la bassa attenzione del cliente come fallimento personale. Frustrazione. Tiene l'ansia sotto controllo con sforzo attivo (logopedia, yoga, respirazione).",
      postEvento:
        '"Il primo pensiero è stato mettermi le mani in faccia." Autovalutazione sistematicamente negativa indipendente dall\'esito reale.',
      cicloSuccessivo:
        "Pattern ricorrente: ansia → overwhelm → iperpreparazione → frustrazione. Nessun reset del ciclo emotivo.",
    },
    painpoints: {
      trigger:
        "Non sa a priori il livello di aspettativa del cliente. La calibrazione è impossibile senza informazioni sull'interlocutore.",
      orientamento:
        '"La facilità di reperire le informazioni fa sì che tu non riesca nemmeno a dargli una priorità." L\'AI genera volume, non gerarchia.',
      preparazione:
        '"Bastava anche poco, e io invece ho iperperformato." Zero segnale di completamento. Non distingue le informazioni da portare da quelle da tenere di riserva.',
      esecuzione:
        '"Il cliente si annoia, io mi annoio." Attenzione dell\'interlocutore bassa. Difficoltà di proiezione vocale.',
      postEvento:
        '"Penso sempre di sottoperformare." Bias di autosvalutazione sistematico. Nessuno strumento per confrontare aspettativa vs esito reale.',
      cicloSuccessivo: "Nessun loop di feedback. La preparazione non migliora nel tempo. Ogni ciclo riparte da zero.",
    },
    opportunities: {
      trigger:
        "Briefing contestuale sull'interlocutore prima ancora della raccolta dati: chi è, cosa si aspetta, qual è il livello di conoscenza.",
      orientamento: "Sistema di prioritizzazione automatica: non generare più contenuti, ma selezionare i 3–5 temi da portare.",
      preparazione:
        'Readiness score come segnale di chiusura: "sei al 78%, il gap residuo è l\'apertura conversazionale."',
      esecuzione:
        "Simulazione conversazionale calibrata sul profilo dell'interlocutore per ridurre il disallineamento tra registro del relatore e aspettative del cliente.",
      postEvento:
        "Post-event debrief strutturato (5 domande, 3 min) per ancorare cosa ha funzionato e aggiornare il modello personale.",
      cicloSuccessivo:
        "Modello personale cumulativo che personalizza la preparazione successiva sui pattern ricorrenti dell'utente.",
    },
    touchpoints: {
      trigger: "Email/messaggi di richiesta appuntamento. Chiamate telefoniche con cliente.",
      orientamento:
        "Perplexity (ricerca), Claude (strutturazione), Notion (knowledge base). Nessun touchpoint dedicato alla valutazione della fonte.",
      preparazione:
        "Notion (documenti), AI (generazione), documenti fisici/digitali. Nessuno strumento di verifica del livello di completezza.",
      esecuzione: "Meeting fisici o video. Presentazioni. Contratti. Documenti prodotti in preparazione.",
      postEvento: "Solo riflessione personale, nessuno strumento. Zero formalizzazione dell'apprendimento.",
      cicloSuccessivo: "Nessun touchpoint strutturato. Il ciclo ricomincia quando arriva la prossima richiesta.",
    },
  },
  {
    id: "alessandro",
    name: "Alessandro Marino",
    quote: "Quando conosco il progetto a fondo, sono tranquillo. Le fonti mi danno sicurezza.",
    scopeGoal:
      "Laureando in art direction che gestisce riunioni interne e presentazioni. Bisogno: tradurre la padronanza del contenuto in comunicazione flessibile, prepararsi in modo realistico senza sopravvalutare il tempo disponibile.",
    actions: {
      trigger:
        "Riceve notifica di riunione o scadenza. Valuta internamente cosa serve. Decide di prepararsi. Il contesto è quasi sempre già noto (colleghi, ambiente familiare).",
      orientamento:
        "Analisi diretta del prodotto/progetto (KPI, to-do list con approccio estetico). Vede i partecipanti già conoscendoli. Quando il contesto è meno noto, fa ricerca più approfondita.",
      preparazione:
        "Costruisce scaletta in bullet point su Claude. Dedica 2–3 ore qualche giorno prima. Si concentra sui contenuti, non sulla simulazione della conversazione. A volte si confronta con amici per feedback.",
      esecuzione:
        "Presenta in modo tranquillo. Comunica le analisi. Risponde agli imprevisti tecnici che emergono. Gestisce le call col capo senza preparazione specifica per quella dinamica.",
      postEvento:
        "Lieve delusione per task non portate a termine. Nessuna riflessione strutturata. Non registra cosa ha funzionato diversamente rispetto alle volte precedenti.",
      cicloSuccessivo: "Ripete la stessa routine al prossimo evento. Ottimismo organizzativo si ripresenta identico.",
    },
    emotions: {
      trigger: "Neutro, pragmatico. L'evento è un task da eseguire. Nessuna attivazione emotiva anticipatoria dichiarata.",
      orientamento:
        'Sicuro quando il contesto è familiare. "Le casistiche erano già conosciute." Meno orientato quando l\'interlocutore è nuovo o il contesto è esterno.',
      preparazione:
        'Metodico. "Un progetto studiato a fondo, di cui sapevo qualsiasi cosa. Le fonti danno la sicurezza." La sicurezza viene dalla padronanza, non dalla gestione emotiva.',
      esecuzione:
        'Tranquillo quando ben preparato. "Avendo fatto prima un\'analisi, ero tranquillo." Lieve disagio quando emergono task non completate o imprevisti tecnici.',
      postEvento: "Delusione lieve per task mancanti. Nessun senso acuto di fallimento. Generalmente stabile.",
      cicloSuccessivo: "Stabile, coerente. Non accumula ansia inter-ciclo.",
    },
    painpoints: {
      trigger:
        'Ottimismo organizzativo: sottostima sistematicamente il tempo necessario. "Una questione di tempo e di un\'organizzazione troppo ottimista."',
      orientamento:
        "Quando l'interlocutore è esterno e meno noto, la preparazione non ha un metodo strutturato per costruire il contesto dell'audience.",
      preparazione:
        'La preparazione a memoria non è flessibile nell\'esecuzione. "Non imparare le cose troppo a memoria e andare di più a braccio." Nessuna simulazione conversazionale.',
      esecuzione:
        "Task non portate a termine emergono durante la call. Imprevisti tecnici non anticipati. Alcune incertezze su aspettative del capo.",
      postEvento:
        "Nessun sistema per capitalizzare cosa è andato bene o male. L'ottimismo organizzativo non viene corretto perché non c'è un confronto post-evento tra piano e realtà.",
      cicloSuccessivo:
        "Nessun accumulo di apprendimento specifico. L'ottimismo organizzativo è un pattern strutturale che si ripete senza correzione.",
    },
    opportunities: {
      trigger:
        'Stima realistica del tempo di preparazione basata su profilo dell\'utente e tipo di evento: "per questo tipo di riunione ti servono 2 ore, non 1."',
      orientamento:
        "Audience briefing automatico per contesti non familiari: background dell'interlocutore, aspettative probabili, dinamica tipica del contesto.",
      preparazione:
        'Gap tracker: "hai coperto il contenuto, manca la simulazione dell\'apertura." Distinzione tra preparare il contenuto e prepararsi alla conversazione.',
      esecuzione:
        "Simulazione conversazionale con interlocutore realistico per trasformare la scaletta in flessibilità esecutiva.",
      postEvento:
        "Debrief leggero (3 min) per ancorare il delta tra piano e realtà eseguita: correzione progressiva dell'ottimismo organizzativo.",
      cicloSuccessivo:
        "Modello personale che registra il pattern di sottostima e calibra la stima del tempo nei cicli successivi.",
    },
    touchpoints: {
      trigger: "Calendar, messaggi, notifiche di riunione.",
      orientamento: "Analisi diretta del prodotto. Note personali. Feedback di amici/colleghi per contesti noti.",
      preparazione: "Claude (scalette bullet point). Analisi KPI. Nessuno strumento di simulazione o verifica.",
      esecuzione: "Riunioni interne. Call con il capo. Strumenti di presentazione (slide, documenti).",
      postEvento: "Solo riflessione personale. Nessuno strumento formale.",
      cicloSuccessivo: "Nessun touchpoint strutturato.",
    },
  },
  {
    id: "giardi",
    name: "Giardi Luca",
    quote: "Per la Games Week mi sono preparato perché ci potevano essere publisher. In azienda ero un dipendente — contesto diverso.",
    scopeGoal:
      "Level designer che alterna contesti esecutivi (azienda) a contesti indipendenti (eventi di settore). Bisogno: prepararsi in modo selettivo e strategico quando la posta è alta, con informazioni sull'interlocutore costruite in anticipo.",
    actions: {
      trigger:
        "Identifica l'evento e valuta se merita preparazione. Distingue consapevolmente contesti ad alta posta (publisher, eventi di settore) da contesti esecutivi (brainstorming aziendale). Decide se investire tempo o andare a braccio.",
      orientamento:
        "Cerca l'evento online. Guarda i partecipanti e i giudici. Fa ricerca su LinkedIn. Identifica le figure chiave da incontrare. Per la Games Week: approfondisce il genere horror, fa game analysis scritta.",
      preparazione:
        "Scrive appunti, prepara frasi calibrate, costruisce slide e screenshot per le sprint review. Prova mentalmente cosa dire. Per il networking con publisher: nessun metodo strutturato per conversazioni con sconosciuti.",
      esecuzione:
        "All'evento di settore: presenta il progetto, fa networking. In azienda: presenta gli sprint. In riunioni con dinamiche aggressive: gestisce il clima oltre che il contenuto. Agli eventi di networking puri: si butta senza preparazione strutturata.",
      postEvento:
        "Riflette confrontando la propria performance con quella degli altri presenti. Sente quasi sempre che \"potevo fare meglio\". Non struttura nessun piano di miglioramento.",
      cicloSuccessivo:
        "Torna al pattern selettivo. Aspetta l'evento con posta alta per prepararsi seriamente. Non accumula competenza sistematica nei periodi tra un evento e l'altro.",
    },
    emotions: {
      trigger:
        "Razionale, selettivo. Motivato quando l'evento è strategico e l'autonomia è alta. Indifferente quando il contesto è esecutivo e la preparazione non è richiesta.",
      orientamento:
        'Motivato e metodico per gli eventi ad alto valore. Frustrazione quando non riesce a trovare le informazioni sui partecipanti in anticipo ("i publisher molte volte non li riconosci").',
      preparazione:
        "Determinato quando l'obiettivo è chiaro e i tempi ci sono. Insoddisfatto quando il tempo è scarso e si deve \"buttare\". Insicurezza specifica sulla comunicazione con sconosciuti.",
      esecuzione:
        "Soddisfatto quando il contesto è preparato. Demoralizzato in riunioni con dinamiche aggressive. Consapevolezza acuta del proprio livello rispetto agli altri.",
      postEvento:
        '"Sempre. Succede perché quando presenti davanti a 40 persone vuoi farlo in modo impeccabile." Autocritico ma senza catastrofismo.',
      cicloSuccessivo:
        'Accettazione pragmatica. "Ci vuole una via di mezzo fra le due cose." Non accumula ansia inter-ciclo, ma non accumula neanche miglioramento.',
    },
    painpoints: {
      trigger:
        'La soglia di attivazione è alta: eventi vengono sottovalutati in anticipo e rimpianti in retrospettiva. "Mi sono buttato, non ho avuto modo di trovare il tempo."',
      orientamento:
        '"I publisher molte volte non li riconosci, lo vieni a sapere troppo tardi." In Italia la qualità del networking agli eventi è disomogenea. Nessuno strumento aggregato.',
      preparazione:
        "Non ha un metodo strutturato per prepararsi a conversazioni con sconosciuti. La comunicazione interpersonale nei contesti di networking non è coperta dai suoi strumenti attuali.",
      esecuzione:
        "Con il nuovo direttore: la gestione del clima aggressivo destabilizza la performance indipendentemente dalla preparazione dei contenuti. Barriera linguistica (inglese). Difficile identificare le persone giuste in tempo reale.",
      postEvento:
        "Nessun sistema per formalizzare la riflessione post-evento. Il confronto con chi era \"più bravo\" aumenta il gap percepito senza produrre un piano d'azione.",
      cicloSuccessivo:
        "Non accumula apprendimento sistematico. La preparazione rimane reattiva: esiste solo quando c'è un evento con obiettivo dichiarato.",
    },
    opportunities: {
      trigger:
        "Sistema di calibrazione dell'investimento preparatorio: aiuta a stimare quanto prepararsi in base all'obiettivo specifico dell'evento.",
      orientamento:
        "Audience briefing automatizzato: chi sarà presente, chi sono le figure chiave, come si posizionano nel settore. Ricerche aggregate in un'unica interfaccia.",
      preparazione:
        "Simulazione conversazionale per contesti di networking: come presentare il proprio progetto a un publisher sconosciuto, come qualificare un interlocutore in 60 secondi.",
      esecuzione:
        "Preparazione contestuale per dinamiche di potere diverse: non solo \"cosa so\" ma \"come mi relaziono con questo tipo di interlocutore in questo tipo di clima.\"",
      postEvento:
        "Post-event debrief per trasformare il senso ricorrente di \"potevo fare meglio\" in un piano d'azione concreto e tracciabile.",
      cicloSuccessivo:
        "Micro-sessioni di mantenimento tra eventi ad alta posta: mantiene la prontezza attiva anche quando non c'è un evento imminente.",
    },
    touchpoints: {
      trigger:
        "Calendario, inviti eventi, conoscenza personale del settore. Nessun touchpoint esterno che supporti la valutazione dell'investimento preparatorio.",
      orientamento: "LinkedIn, sito dell'evento, Google. Nessuno strumento aggregato. Ricerca manuale e frammentata.",
      preparazione:
        "Appunti personali, slide, screenshot, giochi (per game analysis). Nessuno strumento di simulazione conversazionale.",
      esecuzione: "Eventi fisici di settore (Games Week, Svilupparty). Riunioni aziendali. Sprint review. Meeting informali.",
      postEvento: "Solo riflessione personale. Nessuno strumento formale di debriefing.",
      cicloSuccessivo: "Nessun touchpoint strutturato tra cicli. La preparazione non esiste tra un evento e l'altro.",
    },
  },
];

export function CustomerJourneyMapsSection() {
  return (
    <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
      {/* Section header */}
      <div style={{ marginBottom: "64px" }}>
        <div
          style={{
            fontSize: "11px",
            fontWeight: 400,
            color: "#888888",
            letterSpacing: "0.5px",
            marginBottom: "12px",
          }}
        >
          READINESS — UX RESEARCH
        </div>
        <div style={{ fontSize: "32px", fontWeight: 500, color: "#0A0A0A", lineHeight: 1.15, marginBottom: "8px" }}>
          Customer Journey Maps — As-Is
        </div>
        <div style={{ fontSize: "13px", fontWeight: 400, color: "#888888" }}>
          Stato attuale senza Readiness · 3 interviste + sondaggio N=40
        </div>
      </div>

      {/* Phase legend */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "0",
          marginBottom: "48px",
          border: "1px solid #DDDDDD",
        }}
      >
        {[
          { phase: "TRIGGER", desc: "Il bisogno emerge: l'evento si avvicina" },
          { phase: "ORIENTAMENTO", desc: "Capisce cosa preparare, raccoglie informazioni" },
          { phase: "PREPARAZIONE", desc: "Esegue la preparazione concreta" },
          { phase: "ESECUZIONE", desc: "Il momento professionale in sé" },
          { phase: "POST-EVENTO", desc: "Riflessione, autovalutazione, apprendimento" },
          { phase: "CICLO SUCCESSIVO", desc: "Pattern ricorrente all'evento successivo" },
        ].map((item, i, arr) => (
          <div
            key={item.phase}
            style={{
              padding: "12px 14px",
              borderRight: i < arr.length - 1 ? "1px solid #DDDDDD" : "none",
            }}
          >
            <div style={{ fontSize: "10px", fontWeight: 700, color: "#0A0A0A", letterSpacing: "0.06em", marginBottom: "4px" }}>
              {item.phase}
            </div>
            <div style={{ fontSize: "11px", fontWeight: 400, color: "#888888", lineHeight: 1.4 }}>{item.desc}</div>
          </div>
        ))}
      </div>

      {/* Row legend */}
      <div style={{ display: "flex", gap: "16px", marginBottom: "48px", flexWrap: "wrap" }}>
        {rowConfig.map(({ label, bg }) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                width: "16px",
                height: "16px",
                backgroundColor: bg,
                border: "1px solid #DDDDDD",
                borderRadius: "2px",
                flexShrink: 0,
              }}
            />
            <span style={{ fontSize: "11px", fontWeight: 500, color: "#0A0A0A", letterSpacing: "0.04em" }}>{label}</span>
          </div>
        ))}
      </div>

      {/* Tables */}
      {cjmData.map((cjm, index) => (
        <div key={cjm.id}>
          <CJMTable data={cjm} index={index} />
          {index < cjmData.length - 1 && (
            <div style={{ margin: "64px 0", borderBottom: "0.5px solid #E0E0E0" }} />
          )}
        </div>
      ))}

      {/* Metodological note */}
      <div style={{ marginTop: "64px", paddingTop: "24px", borderTop: "0.5px solid #E0E0E0" }}>
        <div style={{ fontSize: "11px", fontWeight: 500, color: "#0A0A0A", letterSpacing: "0.8px", marginBottom: "16px" }}>
          NOTE METODOLOGICHE
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
          <div>
            {[
              { fase: "TRIGGER", conf: "Alta", note: "Triangolata su sondaggio + 3 interviste" },
              { fase: "ORIENTAMENTO", conf: "Alta (Edoardo/Giardi) · Media (Alessandro)", note: "Verbatim specifici sugli strumenti per Edoardo e Giardi" },
              { fase: "PREPARAZIONE", conf: "Alta (Edoardo/Alessandro) · Media (Giardi)", note: "Edoardo e Alessandro: comportamenti dettagliati" },
              { fase: "ESECUZIONE", conf: "Media-Alta", note: "Tutti e tre descrivono episodi specifici, ma l'emotività è auto-dichiarata" },
              { fase: "POST-EVENTO", conf: "Media", note: "Dato presente ma non approfondito in intervista" },
              { fase: "CICLO SUCCESSIVO", conf: "Media", note: "Inferita dai pattern comportamentali, non da domanda diretta" },
            ].map((row) => (
              <div
                key={row.fase}
                style={{
                  display: "grid",
                  gridTemplateColumns: "140px 1fr",
                  gap: "12px",
                  padding: "8px 0",
                  borderBottom: "0.5px solid #F0F0F0",
                }}
              >
                <div style={{ fontSize: "11px", fontWeight: 600, color: "#0A0A0A" }}>{row.fase}</div>
                <div>
                  <div style={{ fontSize: "11px", fontWeight: 400, color: "#3D3D3D" }}>{row.conf}</div>
                  <div style={{ fontSize: "11px", fontWeight: 400, color: "#888888", marginTop: "2px" }}>{row.note}</div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: "11px", fontWeight: 600, color: "#0A0A0A", marginBottom: "8px" }}>LIMITI</div>
            {[
              "Le CJM sono as-is: descrivono il comportamento attuale senza Readiness.",
              "Alessandro non è verbatim: le celle relative a Int.3 sono parafrasi di appunti, non quote dirette.",
              "Il post-evento è l'area meno coperta dalla ricerca: 2–3 interviste aggiuntive dovrebbero includere una domanda specifica.",
              "I4 (emotional freeze) rimane irrisolto: Edoardo e Giardi mostrano attivazione emotiva situazionale; Alessandro la nega.",
            ].map((limit, i) => (
              <div
                key={i}
                style={{
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "#3D3D3D",
                  lineHeight: 1.6,
                  marginBottom: "8px",
                  paddingLeft: "12px",
                  borderLeft: "2px solid #E0E0E0",
                }}
              >
                {limit}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
