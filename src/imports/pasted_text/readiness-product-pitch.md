Ecco il discorso aggiornato con la sezione insight integrata organicamente — non come appendice, ma come fondamento della logica di prodotto.

---

## Discorso per la presentazione di Readiness — versione con insight

---

### 1. Da dove viene il prodotto — la ricerca

Readiness non nasce da un'intuizione. Nasce da dati raccolti: 40 risposte a un sondaggio, tre interviste semi-strutturate, una call di review con un mentor. Il campione è concentrato in Design/UX e studenti — lo dichiaro, perché ogni finding va letto dentro quel perimetro, non generalizzato.

Da quella raccolta sono emersi sette insight. Ne illustro i quattro che hanno impatto diretto sull'architettura del prodotto.

---

### 2. Gli insight che giustificano il design

**I01 — "Non ho tempo" è una scusa. Il vero blocco è non sapere da dove iniziare.** *(confidenza: Sicuro)*
Il 52% di chi si è preparato male ha citato due cause: mancanza di tempo (28%) e disorientamento (25%). Dall'intervista a Edoardo: *"non è mancanza di voglia, è mancanza di tempo"* — poi ha aggiunto che gli servirebbe qualcosa che *"aiuti a riordinare e dare una scala di priorità."* Il blocco non è motivazionale: è architetturale. Non c'è un punto di ingresso chiaro. Readiness risponde a questo con un onboarding a input minimo: dichiari la data e il tipo di evento, il sistema costruisce il piano da zero.

**I04 — Le informazioni sono così accessibili che scegliere quali ascoltare è diventato il vero problema.** *(confidenza: Sicuro)*
Il 67% si aggiorna almeno una volta a settimana. Ma il 55% lo fa su Instagram, TikTok, X. Solo 4 persone su 40 citano LinkedIn, 4 riviste di settore, 3 newsletter. Edoardo: *"c'è questo senso di FOMO di tutto che mi impedisce di farlo in maniera ordinata."* Il problema non è la mancanza di contenuti — è l'assenza di gerarchia. Readiness non genera più contenuti: seleziona e sequenzia quelli rilevanti per l'evento dichiarato.

**I05 — Le persone già provano mentalmente quello che diranno. Ma non portano mai il discorso a terra.** *(confidenza: Sicuro)*
Il 42% dichiara di "provare mentalmente la conversazione" — seconda attività di preparazione più citata. Ma chi lo fa non ottiene risultati migliori di chi non lo fa. Giardi usa screenshot per simulare il momento, Edoardo ripete mentalmente senza metodo. È rehearsal senza resistenza: nessun feedback, nessun interlocutore, nessuna correzione. Da qui nasce la simulazione conversazionale come componente core — non feature aggiuntiva.

**I02 — La maggior parte delle persone usa AI per prepararsi. Ma spesso chi non la usa risulta più preparato.** *(confidenza: Probabile)*
Il 55% del campione usa strumenti AI. Chi la usa ha dichiarato performance medie inferiori rispetto a chi non la usa: 3.14 vs 3.61 su 5. L'AI genera volume, non gerarchia, e non chiude il ciclo. Questo è il motivo per cui Readiness non è un chatbot con un'interfaccia più bella: il problema non è la qualità del modello, è la struttura del processo.

---

### 3. Il problema (sintesi)

Il problema non è la mancanza di contenuti. È l'assenza di un sistema che trasformi quello che si sa in prontezza effettiva — misurabile, allenabile, con un punto di chiusura definito. Chi si prepara bene arriva ugualmente con una sensazione vaga perché nessuno strumento dice quando sei pronto e su cosa sei ancora debole.

---

### 4. Come funziona

L'utente dichiara una data e una tipologia di evento: colloquio, networking, presentazione, one-to-one difficile. Il sistema non chiede argomenti — li identifica dal contesto. Da lì costruisce un piano di micro-sessioni da 10–15 minuti al giorno. Ogni sessione combina briefing contestuale, esercizi di argomentazione e, man mano che si avvicina la data, simulazione conversazionale con un interlocutore realistico.

L'output non è "hai completato il 70% del piano". È un **readiness score**: una misurazione che dice dove sei forte e dove sei ancora debole, e chiude il ciclo con un punto di arrivo definito. *"Sei pronto al 65%. Il tuo punto critico è l'apertura conversazionale, non il contenuto."*

Tra un evento e l'altro, un daily check-in di 2 minuti mantiene attiva la traccia e aggiusta il piano residuo. Questo è il differenziatore strutturale rispetto a qualsiasi LLM: ChatGPT non esiste tra una sessione e l'altra. Readiness sì.

---

### 5. Il quiz — struttura

Il quiz non testa la memoria. È uno strumento di **active recall** applicato al contenuto specifico dell'evento dichiarato. Dopo ogni sessione di briefing, il sistema genera 3–5 domande aperte ancorate al materiale: non "cos'è X", ma "come risponderesti se qualcuno te lo chiedesse in una conversazione?". Le risposte vengono valutate su completezza del contenuto e qualità dell'argomentazione. Il delta tra sessione e sessione alimenta il gap tracker e aggiorna il readiness score. Man mano che si avvicina l'evento, il quiz si trasforma progressivamente in simulazione conversazionale: da domanda aperta a dialogo con obiezioni e approfondimenti.

---

### 6. Il modello di abbonamento

Freemium a tre livelli. La separazione non è quantitativa ma qualitativa: non meno contenuti, ma meno trasformazione.

| Tier | Nome | Cosa cambia per l'utente |
|---|---|---|
| **Free** | Entusiasta | Briefing da leggere. Primo evento con piano base. Sai cosa sta succedendo nel tuo settore. |
| **Pro** | Professionista | Micro-sessioni complete con simulazione e readiness score. Piani illimitati. Sai parlarne bene quando conta. |
| **Expert** | "Stephen Hawking" | Modello personale longitudinale pieno, briefing a fonti certificate, simulazioni calibrate sull'interlocutore specifico. |

Il conversion trigger è qualitativo: al termine del primo evento gratuito il sistema mostra all'utente il confronto tra la preparazione raggiunta e quella che avrebbe raggiunto con il piano premium. Il gap è visibile prima di chiedere il pagamento. *(I06 — la resistenza non è il prezzo: è l'assenza di una prima esperienza positiva.)*

In alternativa all'abbonamento ricorrente, è in valutazione un modello **pay-per-obiettivo** a ~30€ a evento — coerente con il pattern di uso intermittente emerso dal campione.

---

### 7. Perché non è un LLM con un'interfaccia carina

La differenza non sta nel modello sottostante. Sta nella UX, nelle fonti, nel system prompt e nella **memoria longitudinale**: dopo 3–4 eventi, il sistema conosce i pattern ricorrenti dell'utente — cosa salta, dove rallenta, quale dimensione non consolida mai — e ogni ciclo successivo parte da una baseline più alta. Un utente con buona prompt literacy può farsi un piano con ChatGPT in 10 minuti. Non può ottenere un sistema che lo ricordi, lo tenga pronto nel tempo e sappia dove è strutturalmente debole dopo tre eventi. Quello è il prodotto.

---

**Durata stimata:** 6–7 minuti con ritmo normale.