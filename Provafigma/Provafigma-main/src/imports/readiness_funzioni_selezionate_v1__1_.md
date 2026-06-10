# Readiness — Specifiche funzionali
*7 insight · 7 funzioni · 3 tier · Content engine*

---

## Architettura di sistema

L'utente dichiara tipo evento + data → il sistema genera automaticamente un piano da 15 min/giorno fino all'evento, attingendo a fonti classificate per dominio. L'utente non cerca fonti, non costruisce scalette.

---

## Insight

*Sondaggio (40 persone) + 3 interviste (Edoardo, Giardi, Alessandro) + call Edo*

---

### I01 — "Non ho tempo" è una scusa. Il vero blocco è non sapere da dove iniziare.

Il 52% di chi si è preparato male ha citato due cause: "non avevo tempo" (28%) e "non sapevo da dove iniziare" (25%). Edo: *"non è mancanza di voglia, è mancanza di tempo"* — poi ha aggiunto che gli servirebbe qualcosa che *"aiuti a riordinare e dare una scala di priorità."*

---

### I02 — La maggior parte delle persone usa strumenti AI per prepararsi. Ma chi non li usa risulta più preparato.

Il 55% del campione (22/40) usa strumenti AI. Chi la usa ha performato peggio di chi non la usa (3.14 vs 3.61/5). Edo: *"l'AI sputa fuori una grande mole non di facile fruizione."* Alessandro la usa per *"scalette in bullet point"* — senza che questo si traduca in una preparazione più efficace.

---

### I03 — Chi non si prepara dà per scontato di andare male. Poi se la cava. Il problema è l'ansia prima dell'evento, non solo la performance durante.

Le 14 persone non preparate si sono autovalutate 2.71/5 — poi hanno performato 3.07/5, meglio del previsto. Chi si era preparato aveva aspettative e risultati quasi identici (3.54 vs 3.50). Il momento più difficile non è l'evento: è l'incertezza che lo precede.

---

### I04 — Le informazioni sono così accessibili che scegliere quali ascoltare è diventato il vero problema.

Il 67% si aggiorna almeno una volta a settimana. Ma il 55% (22/40) lo fa su Instagram, TikTok, X. Solo 4 citano LinkedIn, 4 riviste di settore, 3 newsletter. Edo: *"c'è questo senso di FOMO di tutto che mi impedisce di farlo in maniera ordinata."*

---

### I05 — Le persone già provano mentalmente quello che diranno. Ma non portano mai il discorso a terra.

Il 42% (17/40) dichiara di "provare mentalmente la conversazione" — seconda attività di preparazione più citata. Ma chi lo fa non ottiene risultati migliori di chi non lo fa. Giardi usa screenshot per simulare il momento. Edo prova a ripetere ma non ha un metodo. È rehearsal senza resistenza: nessun feedback, nessun interlocutore, nessuna correzione.

---

### I06 — Le persone pagherebbero per qualcosa che le aiuta professionalmente. Ma hanno difficoltà a fidarsi del prodotto.

Il 62% (25/40) non ha mai considerato di pagare per la preparazione professionale. Ma tra le 6 persone che hanno pagato e trovato qualcosa di utile, il giudizio è unanime: valeva. I freelance sono i più propensi: il 50% ha pagato o ci ha pensato seriamente. La resistenza non è il prezzo — è l'assenza di una prima esperienza positiva.

---

### I07 — Le fonti fanno la sicurezza di un discorso. Non basta conoscere — devi sapere da dove viene quello che dici.

Alessandro: *"La conoscenza di chi mi ascoltava e la conoscenza del progetto. Un progetto studiato a fondo, di cui sapevo qualsiasi cosa. Le fonti danno la sicurezza."* Confermato in modo indipendente da Edo nella call di ricerca.

---

## Tier

| Tier | Nome | Pricing | Fonti | Intelligenza |
|---|---|---|---|---|
| 🟢 **Base** | Entusiasta | Gratuito | Tier 3 aggregato, non dichiarate | Piano fisso, nessuna personalizzazione |
| 🟡 **Professionista** | — | ~€15/ciclo o ~€30/mese | Tier 2 per dominio, fonte citata | Piano adattivo su lacune, simulazione |
| 🔴 **Expert/Hawking** | — | ~€25/ciclo o abbonamento | Tier 1 verificate, provenienza esplicita | Adattivo + memoria longitudinale + profilo interlocutore |

> Pricing pay-per-obiettivo preferito all'abbonamento per uso intermittente (Edo, call ricerca).

---

## Content engine — fonti per dominio

| Livello | Criterio |
|---|---|
| **Tier 1** | Peer review / institutional board — citabile accademicamente |
| **Tier 2** | Redazione professionale, editorial board — citabile con cautela |
| **Tier 3** | Reddit, X, forum — solo tono conversazionale, mai fonte primaria |

| Dominio | Tier 1 | Tier 2 | Tier 3 |
|---|---|---|---|
| **Design / UX** | NN/g · IDF · ACM/CHI | Smashing Magazine · A List Apart · UX Collective | r/UXDesign · X HCI researchers |
| **Graphic Design** | AIGA Eye on Design · Communication Arts · Eye Magazine | It's Nice That · Creative Review · Creative Boom | r/graphic_design · X art directors |
| **Advertising** | WARC · Ad Age · Adweek · Campaign | The Drum · Contagious | r/advertising · X creative directors |
| **Marketing** | HBR · WARC · Journal of Marketing (AMA) | Think with Google · Marketing Week · Digiday | r/marketing · LinkedIn newsletters |
| **AI** | arXiv (cs.AI/LG/CL) · Papers with Code · Stanford HAI · NeurIPS/ICML/ICLR | MIT Technology Review · The Batch (A. Ng) | r/MachineLearning · X AI researchers |
| **Tecnologia** | IEEE Spectrum · MIT Technology Review | Ars Technica · Stratechery · Wired | r/technology · Hacker News |
| **Scienza** | Nature · Science/AAAS · PubMed · arXiv/bioRxiv | Quanta Magazine · Scientific American | r/science · X academics |

**Tier 3:** attivo solo nelle 24–48h pre-evento per cogliere il tono corrente. Sempre dopo Tier 1 e 2.

---

## F01 — Triage d'ingresso
*I01 · Onboarding evento*

3 tap prima della generazione del piano:

| Domanda | Opzioni | Effetto |
|---|---|---|
| Quanto conta? | Routine / Importante / Decisivo | Profondità e numero sessioni |
| Familiarità del contesto? | Conosco bene / Qualche info / Nuovo | Livello di partenza del briefing |
| Tempo al giorno? | 5 / 15 / 30 min | Distribuzione del carico |

**Tier:** 🟢 piano fisso · 🟡 piano adattivo su lacune · 🔴 adattivo + profilo interlocutore attivo da subito

*"servirebbe qualcosa che aiuti a riordinare e dare una scala di priorità" — Edo*

---

## F02 — Starter del giorno
*I01 · Home screen sessione attiva*

Ad ogni apertura dell'app, una sola card con l'azione prioritaria del momento — calcolata su lacuna più critica, giorni rimasti, ultima sessione completata. L'utente non sceglie da dove ricominciare.

**Tier:** 🟢 sequenziale fisso · 🟡 su lacuna prioritaria · 🔴 + contesto da memoria longitudinale

---

## F03 — Modalità vigilia
*I03 · Attiva nelle 24h precedenti l'evento*

Tre componenti in sequenza che sostituiscono la modalità preparazione standard:

**A — Ultimo ripasso (5 min)**
Solo i 2–3 nodi con readiness score più basso. Niente di nuovo. Formato: bullet + esempio + domanda di verifica.
**Tier:** 🟢 punti stimati · 🟡🔴 punti da dati sessione reali

**B — Ancora di salvezza**
Risposta pre-scritta per le 2 situazioni più temute — argomento difendibile da usare in emergenza, con fonte dichiarata. Sblocca solo se readiness score ≥ soglia minima.
**Tier:** 🟢 non disponibile · 🟡 risposta per settore, fonte Tier 2 · 🔴 risposta su fonte Tier 1, calibrata su profilo interlocutore

**C — Mute mode**
Blocco totale di nuovi contenuti. Attivabile solo sopra soglia readiness.
**Tier:** 🟢 non disponibile · 🟡🔴 attivabile con soglia personalizzabile

*14 non-preparati: performance 3.07 > aspettative 2.71 — il problema è l'incertezza pre-evento, non la performance.*

---

## F04 — Briefing settimanale
*I04 · Modalità continua (tra eventi)*

Il sistema consegna 3 temi settimanali curati per settore e ruolo. L'utente non può superare N temi attivi (default: 5) — per aggiungerne uno, deve rimuoverne uno. Forza sostituzione, non accumulo.

**Tier:**
- 🟢 3 temi generici per macro-settore — Tier 3 aggregato, fonte non dichiarata
- 🟡 3 temi per ruolo + priorità aggiustata se evento imminente — Tier 2 citata (es. UX Collective, MIT Tech Review, The Drum, HBR)
- 🔴 3 temi Tier 1 con provenienza esplicita + nota contestuale (es. NN/g, arXiv, WARC, Ad Age) — convergono sull'evento imminente se presente

*"FOMO di tutto che mi impedisce di farlo in maniera ordinata" — Edo · 55% si aggiorna su Instagram/TikTok/X*

---

## F05 — Simulatore con resistenza
*I05 · Seconda metà del piano (base coperta)*

**A — Interruzione non annunciata**
Obiezione o cambio di tema inseriti nel mezzo della risposta, senza preavviso. Calibrata sul tipo evento: colloquio → "E se non avessi quella competenza?" · pitch → "I competitor non fanno già questo?" · networking → cambio tema adiacente non preparato.

**B — Specchio del registro**
Rileva in tempo reale il punto in cui il tono supera la soglia di attenzione dell'interlocutore dichiarato. Feedback localizzato. Soglia calibrata su contesto (cliente senior ≠ peer di settore).

**Tier:** 🟢 non disponibile (preview visibile) · 🟡 entrambe le componenti, calibrate su tipo evento · 🔴 calibrate su profilo interlocutore specifico (F07)

*42% prova mentalmente, risultati identici a chi non prova. "il cliente si annoia, io mi annoio" — Edo*

---

## F06 — Trial senza registrazione
*I06 · Entry point pre-login*

Una sessione reale completabile senza account. Meno intelligente, ma funzionante.

| | Trial | 🟢 Base |
|---|---|---|
| Piano | Generico, non salvato | Generico, salvato |
| Fonti | Tier 3, non citate | Tier 3, non citate |
| Sessioni | 1 | Ciclo completo |
| Readiness score | No | No |
| Memoria | No | No |

Al termine: confronto esplicito con Professionista — "hai coperto 1 dimensione; con Professionista ne avresti coperte 3, con fonti verificate e feedback sul registro".

*62% non ha mai pagato · chi ha pagato e trovato valore: giudizio unanime "valeva"*

---

## F07 — Profilo interlocutore preventivo
*I07 · Attivo dall'inizio del ciclo, alimenta F03-B, F04, F05*

Il sistema inferisce il profilo probabile dell'audience da: tipo evento + settore + ruolo/seniority del contesto. Restituisce: livello expertise atteso, obiettivi probabili, registro comunicativo tipico, 2–3 domande frequenti per quel profilo. L'utente corregge se ha info aggiuntive.

**Tier:**
- 🟢 profilo assente
- 🟡 archetipo per tipo evento + settore, correggibile — domande inferite da Tier 2 (HBR per business, Campaign per advertising, MIT Tech Review per tech)
- 🔴 archetipo + dossier su fonti Tier 1 dichiarate: profilo accademico via ACM/CHI, posizionamento via WARC/Ad Age, contributi AI via arXiv/Stanford HAI

*"La conoscenza di chi mi ascoltava… le fonti danno la sicurezza." — Alessandro · Nessun player supera 3/5 su briefing contestuale (benchmark)*

---

## Mappa funzioni × tier

| Funzione | 🟢 Base | 🟡 Professionista | 🔴 Expert/Hawking |
|---|---|---|---|
| F01 — Triage | Piano fisso | Piano adattivo | Adattivo + profilo interlocutore |
| F02 — Starter | Sequenziale fisso | Su lacuna prioritaria | + memoria longitudinale |
| F03-A — Ripasso | Punti stimati | Punti da dati reali | + allineamento profilo |
| F03-B — Ancora | — | Tier 2, fonte citata | Tier 1, provenienza esplicita |
| F03-C — Mute | — | Sopra soglia readiness | Soglia personalizzabile |
| F04 — Briefing | Tier 3, non dichiarata | Tier 2, citata | Tier 1, esplicita |
| F05-A — Interruzione | — (preview) | Per tipo evento | Per profilo interlocutore |
| F05-B — Registro | — (preview) | Per tipo evento | Per audience dichiarata |
| F06 — Trial | Entry point | Entry point | Entry point |
| F07 — Interlocutore | Assente | Archetipo Tier 2 | Dossier Tier 1 |

---

## Limiti e validazione

**Campione:** N=40, ±15pp, 65% Design/UX — generalizzazione limitata al cluster.
**Segment split I03:** Edoardo conferma ansia pre-evento; Alessandro la nega. F03 serve entrambi — ancora di salvezza e mute mode funzionano anche senza anxiety come driver.
**Prima di prototipare:** F03-B — testare se la soglia readiness come gate è motivante o frustrante (agile test 3–5 utenti) · F07 — testare precisione del profilo generato (2 walkthrough).
