type Confidence = "sicuro" | "probabile" | "da-verificare";

interface Insight {
  number: string;
  title: string;
  cosa: string;
  perche: string;
  prodotto: string;
  confidence: Confidence;
  confidenceLabel: string;
}

const insightsData: Insight[] = [
  {
    number: "01",
    title: '"Non ho tempo" è una scusa. Il vero blocco è non sapere da dove iniziare.',
    cosa: 'Il 52% delle persone che si sono preparate male ci ha detto due cose: "non avevo tempo" (28%) e "non sapevo da dove iniziare" (25%). Edo, titolare di agenzia, ha detto chiaramente: "non è mancanza di voglia, è mancanza di tempo" — poi ha aggiunto che gli servirebbe qualcosa che "aiuti a riordinare e dare una scala di priorità".',
    perche: "Il tempo è la prima risposta che ci viene in mente, ma non è la vera causa. Quando non sai cosa fare per primo, rimandi. E quando rimandi abbastanza, non fai niente. La mancanza di un punto di partenza chiaro blocca più della mancanza di tempo.",
    prodotto: "La prima cosa che l'app deve fare non è dare contenuti. Deve costruire un piano. L'utente dice cosa deve affrontare e quando — l'app decide cosa fare e in che ordine. Togliere il \"da dove inizio\" è il valore principale.",
    confidence: "sicuro",
    confidenceLabel: "✅ Sicuro — confermato dal sondaggio e da 2 interviste"
  },
  {
    number: "02",
    title: "Più della metà usa già l'AI per prepararsi. Ma chi la usa non se la cava meglio degli altri.",
    cosa: 'Il 55% del campione (22 su 40) usa strumenti AI per prepararsi. Nel sondaggio, chi usa l\'AI ha dichiarato di aver performato peggio rispetto a chi non la usa (3.14 vs 3.61 su una scala da 1 a 5). Edo: "l\'AI sputa fuori una grande mole non di facile fruizione". Alessandro la usa per "scalette in bullet point".',
    perche: "L'AI viene usata per organizzare i pensieri in modo preliminare — scalette, appunti, strutture base. Ma non guida su cosa portare all'evento, non simula la conversazione, non dice quando sei abbastanza pronto. Produce materiale senza chiudere il ciclo.",
    prodotto: "Il differenziatore non è generare contenuto migliore dell'AI. È costruire la sequenza che trasforma il contenuto in prontezza reale: informati → esercitati → simulati → misura il tuo livello. Questa sequenza l'AI da sola non la offre.",
    confidence: "probabile",
    confidenceLabel: "⚠️ Probabile — il dato del sondaggio ha un'ambiguità (chi si sente più impreparato usa l'AI per compensare), da chiarire con altre interviste"
  },
  {
    number: "03",
    title: "Chi non si prepara pensa di fare schifo. Poi se la cava. Il problema è l'ansia prima dell'evento, non la performance durante.",
    cosa: "Le 14 persone che non si sono preparate si sono date un voto basso sulla preparazione (2.71/5). Ma una volta dentro all'evento hanno performato a 3.07/5 — meglio di quanto si aspettassero. Chi invece si era preparato aveva aspettative e risultati quasi identici (3.54 vs 3.50).",
    perche: "Il dolore non è performare male. È non sapere come andrà prima di entrare. L'incertezza pre-evento è il momento più difficile — non l'evento stesso.",
    prodotto: 'Il punteggio di prontezza non deve promettere "performerai meglio". Deve promettere "saprai dove sei prima di entrare". Il valore è togliere l\'incertezza, non trasformare le persone.',
    confidence: "probabile",
    confidenceLabel: "⚠️ Probabile — un solo dato quantitativo, campione piccolo (14 persone)"
  },
  {
    number: "04",
    title: "Sapere chi hai di fronte cambia come ti prepari, non quanto.",
    cosa: 'Il 35% (14 su 40) cerca informazioni sulle persone che incontrerà come parte della preparazione. Nel sondaggio questo comportamento non produce risultati migliori in termini di numeri — ma nelle interviste emerge chiaramente come elemento chiave. Giardi ha ricercato il nuovo capo prima della prima riunione con lui. Ha preparato la Games Week sapendo chi ci sarebbe. "Per la Games Week mi sono preparato con l\'obiettivo di fare networking, perché lì potevano esserci dei publisher."',
    perche: "Chi cerca informazioni sulle persone lo fa perché si sente insicuro rispetto al contesto — è una compensazione. Ma le interviste mostrano che conoscere il pubblico non aumenta la performance in assoluto: cambia la direzione e la profondità di quello che porti. Non è un potenziatore — è un calibratore.",
    prodotto: "Chi sarà presente all'evento deve essere una domanda obbligatoria durante la configurazione, non un'opzione avanzata. Il sistema usa questa informazione per calibrare quanto approfondire, non per aggiungere contenuto.",
    confidence: "probabile",
    confidenceLabel: "⚠️ Probabile — 3 fonti convergono sulla rilevanza, ma con letture diverse tra dati numerici e interviste"
  },
  {
    number: "05",
    title: "L'ansia da prestazione non è uguale per tutti. Per alcuni non esiste.",
    cosa: 'Nei testi liberi del sondaggio: 3 persone menzionano esplicitamente l\'ansia, 5 menzionano la mancanza di sicurezza o fiducia in sé. Ma nelle interviste i tre profili sono completamente diversi. Edo: "io vivo di ansia", ha fatto logopedia e yoga per gestirla. Giardi si demoralizza solo in contesti con capi aggressivi o gerarchici. Alessandro, alla domanda sulle emozioni durante la riunione, risponde semplicemente: "No."',
    perche: "L'ansia dipende dal profilo e dal contesto, non dalla preparazione in sé. Per qualcuno è strutturale (c'è sempre). Per altri emerge solo in situazioni specifiche. Per altri ancora non è il punto — il punto è dominare i contenuti. Il bisogno comune non è \"gestire l'ansia\": è costruire sicurezza attraverso la padronanza di quello che sai.",
    prodotto: "Non costruire una feature specifica per \"gestire l'ansia\" come se fosse un problema universale. Costruire per il bisogno condiviso tra tutti e tre i profili: sentirsi sicuri perché si sa cosa si sta per dire. La sicurezza nasce dalla preparazione — non dalla respirazione.",
    confidence: "probabile",
    confidenceLabel: "⚠️ Probabile — tutti e 4 gli strumenti toccano il tema, ma con risposte diverse. La divergenza è il dato, non un'anomalia."
  },
  {
    number: "06",
    title: "Le persone si aggiornano ogni giorno. Ma da fonti che non valgono quasi nulla.",
    cosa: 'Il 67% del campione si aggiorna almeno una volta a settimana. Ma il 55% (22 su 40) lo fa principalmente sui social media — Instagram, TikTok, X. Solo 4 persone citano LinkedIn, 4 riviste di settore, 3 newsletter. Il 62% dedica meno di 30 minuti a settimana o non ha un tempo dedicato. Edo: "c\'è questo senso di FOMO di tutto che mi impedisce di farlo in maniera ordinata".',
    perche: "Il campione consuma segnali, non contenuti. Scorrere un feed è aggiornamento nella forma ma non nella sostanza: produce esposizione ma non comprensione. Il risultato è una conoscenza frammentata che non regge una conversazione strutturata.",
    prodotto: 'Il briefing di settore non deve essere un aggregatore di notizie. Deve fare la selezione al posto dell\'utente: "questa settimana, per il tuo contesto, vale la pena sapere queste 3 cose". La gerarchia delle fonti per qualità — non per quantità — è il valore editoriale centrale.',
    confidence: "sicuro",
    confidenceLabel: "✅ Sicuro — dato diretto dal sondaggio confermato qualitativamente da Edo"
  },
  {
    number: "07",
    title: "Quasi due terzi delle persone hanno già un evento importante in vista. Il bisogno non va creato — esiste già.",
    cosa: "Il 65% del campione (26 su 40) ha dichiarato di avere un momento professionale importante nei prossimi 3 mesi. Di questi, 14 hanno già una data definita. Il 67% partecipa a eventi importanti con frequenza mensile o più.",
    perche: "Il bisogno di prepararsi non è latente — è già attivo per la maggior parte del campione. Non si tratta di convincere le persone che prepararsi ha senso. Si tratta di essere presenti nel momento in cui stanno già cercando un modo per farlo.",
    prodotto: "Il primo gesto utile dell'app è \"dichiara il tuo prossimo evento\". L'onboarding non deve spiegare il prodotto — deve iniziare a usarlo. Il valore si dimostra facendolo, non descrivendolo.",
    confidence: "sicuro",
    confidenceLabel: "✅ Sicuro — dato diretto, verificato sul file grezzo"
  },
  {
    number: "08",
    title: "Le persone già provano mentalmente cosa diranno. Lo fanno male perché lo fanno da soli e senza metodo.",
    cosa: "Il 42% del campione (17 su 40) dice di \"provare mentalmente la conversazione\" come parte della preparazione — è la seconda attività più citata. Ma nel sondaggio chi lo fa non ottiene risultati migliori di chi non lo fa. Giardi si prepara le frasi e usa screenshot per simulare il momento. Edo prova a ripetere ma non ha un metodo.",
    perche: "La simulazione mentale esiste già nel comportamento naturale. Il problema è che è informale: è un monologo interiore senza feedback, senza un contesto realistico, senza qualcuno che risponda. Non è pratica vera — è rehearsal senza resistenza.",
    prodotto: "Le simulazioni di conversazione devono essere il formato centrale delle sessioni, non un extra. L'utente già cerca questo comportamento — l'app lo struttura e lo rende utile aggiungendo feedback e un interlocutore realistico.",
    confidence: "probabile",
    confidenceLabel: "⚠️ Probabile — comportamento confermato in 3 fonti, ma l'efficacia va dimostrata con test"
  },
  {
    number: "09",
    title: "Prepararsi troppo è un problema quanto non prepararsi affatto.",
    cosa: 'Edo ha portato 20 pagine di contratto a clienti che "erano molto più terra terra". Risultato: ha sprecato energie per qualcosa che non serviva. "Bastava anche poco, e io invece ho iperperformato." Nel sondaggio, chi si prepara ha valori di preparazione e performance quasi identici (3.54 vs 3.50): prepararsi di più non produce risultati proporzionalmente migliori.',
    perche: "Senza informazioni su chi hai di fronte e su cosa si aspetta, non sai quanto approfondire. Il rischio non è solo essere sotto-preparati — è essere fuori registro rispetto al contesto. Troppo è frustrante quanto troppo poco.",
    prodotto: "Il sistema deve raccogliere informazioni sull'interlocutore e sul contesto per calibrare anche la profondità, non solo il contenuto. \"Per chi stai preparando questo?\" e \"A che livello si aspettano di parlarne?\" sono variabili di design, non dettagli.",
    confidence: "da-verificare",
    confidenceLabel: "🔍 Da verificare — emerso con forza da una sola intervista. Servono altre 2 persone con alto livello di autonomia professionale per capire se è un pattern."
  },
  {
    number: "10",
    title: "La gente non paga perché non ha mai provato qualcosa che valesse. Non è questione di prezzo.",
    cosa: "Il 62% (25 su 40) non ha mai considerato di pagare per qualcosa legato alla preparazione professionale. Ma tra le 6 persone che hanno pagato e trovato qualcosa di utile, il giudizio è unanime: valeva. I freelance sono quelli più propensi a farlo: il 50% ha pagato o ci ha pensato seriamente. Gli studenti che hanno pagato: 4 su 19, e tutti e 4 lo hanno trovato utile.",
    perche: "La resistenza non è il prezzo — è l'assenza di una prima esperienza positiva. La maggior parte delle persone non ha mai trovato niente in questo spazio che valesse i propri soldi. La diffidenza è costruita sull'esperienza pregressa (o sulla mancanza di esperienza), non sul valore del prodotto.",
    prodotto: "Il modello gratuito/a pagamento non deve essere un muro di contenuti. Deve essere un'esperienza del gap: \"ecco cosa avresti potuto avere\". Prima fai vivere il valore, poi chiedi se vuole di più. I freelance sono il primo segmento da acquisire: hanno già la mentalità di pagare per strumenti che fanno guadagnare tempo.",
    confidence: "sicuro",
    confidenceLabel: "✅ Sicuro — pattern robusto nel sondaggio, verificato sul file grezzo"
  },
  {
    number: "11",
    title: "Essere pronti non vuol dire solo sapere le cose. Vuol dire anche saper come dirle.",
    cosa: 'Edo: "ho difficoltà a proiettare la mia voce — questa cosa nel public speaking mi ha creato grande disagio". Ha fatto logopedia per questo. Giardi: "bisogna essere preparati anche a comunicare bene con gli sconosciuti, avere un certo tipo di postura e velocità di linguaggio". Il 42% del campione prova mentalmente la conversazione — cioè non solo cosa dire, ma come dirlo.',
    perche: "La prontezza non è un fatto solo di contenuto. Il modo in cui si dice una cosa — il ritmo, la chiarezza, la struttura del discorso — è parte di come si viene percepiti. Nessuno degli strumenti analizzati risolve questo in modo contestuale: chi ci prova lo fa in modo generico, senza collegarlo alla situazione specifica.",
    prodotto: "Le simulazioni non devono valutare solo cosa l'utente sa — devono valutare anche come lo dice. Anche solo un feedback minimo su chiarezza e struttura del discorso copre un bisogno che oggi non ha risposta.",
    confidence: "probabile",
    confidenceLabel: "⚠️ Probabile — confermato da 2 interviste e indirettamente dal sondaggio. I due intervistati sono però profili con alta esposizione pubblica — da verificare su profili più junior."
  }
];

const topInsights = [
  { number: "01", label: "Struttura prima del contenuto", desc: "Definisce cosa deve fare il primo schermo: non un feed, ma un piano. È il più solido in termini di dati." },
  { number: "07", label: "Il bisogno esiste già", desc: "Il 65% ha un evento in vista. L'onboarding non deve educare — deve attivare un'intenzione già presente." },
  { number: "10", label: "Prima fai vivere il valore", desc: "Il modello gratuito/a pagamento funziona solo se mostra il gap prima di chiedere soldi. Il dato lo supporta." }
];

const openQuestions = [
  { domanda: "Chi usa l'AI si sente davvero meno preparato degli altri o è solo una coincidenza del campione?", perche: "Cambia come posizionare il prodotto rispetto all'AI" },
  { domanda: "La tendenza a iperpreparare è comune o tipica solo di chi lavora in autonomia?", perche: "Cambia se il calibratore di profondità è una feature core o di nicchia" },
  { domanda: "Chi non sente ansia (come Alessandro) è la norma nel mondo del design italiano?", perche: "Blocca le decisioni sull'asse emotivo del prodotto" },
  { domanda: "I freelance pagano davvero di più o erano solo 4 persone per caso?", perche: "Orienta il primo segmento da acquisire" }
];

import { CustomerJourneyMapsSection } from "./components/CustomerJourneyMap";
import { FunzionaliSpecSection } from "./components/FunzionaliSpec";
import { ReadinessHome } from "./components/ReadinessHome";
import { ReadinessLanding, ResearchIntro } from "./components/ReadinessLanding";

interface TableRow {
  obiettivo: string;
  area: string;
  cluster: string;
}

interface InterviewData {
  phase: string;
  name: string;
  role: string;
  rows: TableRow[];
}

interface PersonaData {
  name: string;
  quote: string;
  age: number;
  education: string;
  profession: string;
  city: string;
  bio: string;
  goals: string[];
  needs: string[];
  frustrations: string[];
  motivations: string;
  behaviors: string[];
  interviewEvidence: string[];
  surveyEvidence: string[];
  implications: string[];
  personality: string[];
  confidence: string;
}

const personasData: PersonaData[] = [
  {
    name: "Edoardo Ferrante",
    quote: "Le informazioni ci sono. Il problema è che sono troppe e non riesco a capire quali portare.",
    age: 34,
    education: "Formazione mista (on the job + autodidatta)",
    profession: "Titolare agenzia multidisciplinare (moda, branding, digital)",
    city: "Centro-Sud Italia",
    bio: "Edoardo gestisce un'agenzia in autonomia. Lavora su più fronti contemporaneamente — clienti, collaboratori, contenuti, strategia — e si prepara agli incontri importanti con metodo, ma non riesce a chiudere il ciclo. Accumula informazioni su Notion e AI, le filtra parzialmente, le porta agli incontri con un grado di preparazione oggettivamente alto. Eppure vive di ansia. Non perché le informazioni manchino: perché non ha un sistema che gli dica quando è pronto e su cosa è ancora debole.",
    goals: [
      "Portare ai clienti i 5–6 temi chiave senza disperdere l'attenzione su dettagli irrilevanti",
      "Costruire credibilità percepibile nei nuovi incontri, non solo competenza reale",
      "Ridurre il tempo di preparazione senza ridurre la qualità dell'output"
    ],
    needs: [
      "Uno strumento che prioritizzi le informazioni per lui, non che gliene generi di nuove",
      "Un sistema che gli dica cosa comunicare in quel contesto specifico, a quella persona specifica",
      "Un modo per verificare quanto è pronto prima di entrare in una riunione, senza farlo da solo"
    ],
    frustrations: [
      "L'AI genera contenuti, non priorità: \"l'AI sputa fuori una grande mole non di facile fruizione — il cliente si annoia, io mi annoio\"",
      "Il tempo non manca per voglia — manca perché il flusso di informazioni è continuo e non ha mai una chiusura naturale",
      "Iperperforma con clienti che richiedono molto meno: arriva con 20 pagine dove ne servivano 2",
      "Non si fida dei consigli emotivi o di public speaking dall'AI: \"mi fido più della mia psicologa, mi fido più dei miei amici\""
    ],
    motivations: "Vuole essere percepito come il professionista più preparato nella stanza — non perché sia insicuro, ma perché la credibilità è il suo capitale. Sa di essere bravo. Il problema è tradurre quella bravura in una presentazione che l'interlocutore medio riesca a seguire e ricordare.",
    behaviors: [
      "Usa AI (Perplexity, Claude) come tandem operativo, non come oracolo",
      "Crea progetti su Notion divisi per aree: strategia, content, marketing",
      "Legge selettivamente: solo i contenuti che deve usare direttamente",
      "Ha fatto logopedia e yoga per gestire l'ansia da presentazione",
      "Percepisce l'attenzione dell'interlocutore durante la riunione e adatta l'intonazione in tempo reale"
    ],
    interviewEvidence: [
      "\"C'è questo senso di overwhelm che spesso non riesco a canalizzare nei 5–6 temi principali.\" — Edoardo, Intervista 2",
      "\"La facilità di reperire le informazioni fa sì che tu non riesca nemmeno a dargli una priorità.\" — Edoardo, Intervista 2",
      "\"Magari uno spazio che mi aiuti con una scaletta a riorganizzare le idee lo posso fare, però c'è anche la FOMO di tutto.\" — Edoardo, Intervista 2"
    ],
    surveyEvidence: [
      "55% dichiara di usare AI per prepararsi — ma chi la usa non dichiara performance superiori (I2, confidenza Media)",
      "28% indica \"mancanza di tempo\" come causa primaria di preparazione insufficiente (confidenza Alta)",
      "62% aggiorna le proprie conoscenze meno di 30 min a settimana o non aggiorna affatto (confidenza Alta)",
      "Il cluster emotivo (ansia/fiducia) nel testo aperto del sondaggio ha peso equivalente al cluster strutturale (tempo/organizzazione)"
    ],
    implications: [
      "Prioritizzazione strutturata: il valore non è nell'informazione, è nella gerarchia. Readiness deve dirgli \"i 3 punti da tenere in questo incontro\" — non dargliene 20.",
      "Readiness score come chiusura: questo profilo non si ferma mai perché non ha un segnale di completamento. Il readiness score risolve esattamente questo: \"sei al 78%, manca l'apertura conversazionale\".",
      "Preparazione a conversazioni, non a contenuti: la proposta di valore deve parlare di \"sostenere una conversazione credibile\", non di \"sapere di più\"."
    ],
    personality: ["Iperemotivo", "Sistemico", "Overcritical", "Empatico", "Perfezionista operativo"],
    confidence: "Media-Alta — Direttamente supportata da intervista verbatim (Intervista 2) con alta coerenza interna. Il pattern è parzialmente confermato dal sondaggio sul cluster emotivo e strutturale. Mancano ulteriori interviste senior nello stesso beachhead per elevare a \"Alta\"."
  },
  {
    name: "Alessandro Marino",
    quote: "Quando conosco il progetto a fondo, sono tranquillo. Le fonti mi danno sicurezza.",
    age: 24,
    education: "Laurea triennale / Magistrale in corso (Art Direction, Design, Comunicazione)",
    profession: "Laureando in art direction, ufficio comunicazione accademica",
    city: "Centro Italia",
    bio: "Alessandro studia e lavora contemporaneamente. Si muove in un ambiente familiare — persone che conosce, processi che ha già visto — e si prepara in modo metodico quando l'evento lo richiede. Analisi, KPI, to-do list: dedica 2–3 ore qualche giorno prima, costruisce una scaletta in bullet point su Claude. Non vive l'evento come una fonte di ansia: la sicurezza viene dalla padronanza del contenuto, non dalla gestione emotiva. Il suo problema non è il freeze: è l'ottimismo organizzativo — sottostima il tempo necessario e si ritrova meno pronto di quanto avrebbe voluto.",
    goals: [
      "Arrivare agli incontri con la sensazione di aver coperto tutto il necessario",
      "Sviluppare la capacità di andare \"più a braccio\" — meno dipendente dalla scaletta memorizzata",
      "Costruire credibilità professionale prima ancora di uscire dall'accademia"
    ],
    needs: [
      "Un sistema che organizzi la preparazione prima che sia lui a doverlo fare",
      "Possibilità di esercitarsi in modo strutturato senza dover inventare il formato da zero",
      "Feedback su cosa ha coperto e cosa manca, senza dover autovalutarsi"
    ],
    frustrations: [
      "Si prepara bene quando ha tempo, ma l'organizzazione è \"troppo ottimista\": sovrastima il tempo disponibile",
      "Vorrebbe meno dipendenza dalla memoria e più capacità di costruire argomentazioni live",
      "Ritiene che la conoscenza dell'audience (chi mi ascolta) sia critica quanto la conoscenza del contenuto — ma non ha un sistema per acquisirla sistematicamente"
    ],
    motivations: "La competenza è il suo ancoraggio emotivo. Quando sa tutto del progetto — come nel caso dei brand francesi studiati a fondo — non ha bisogno di gestire l'ansia perché non c'è ansia da gestire. Il suo motore è la padronanza, non la performance. Readiness deve dargli più padronanza in meno tempo.",
    behaviors: [
      "Usa Claude per costruire scalette in bullet point prima di presentazioni e call",
      "Si confronta con amici del network per ricevere feedback contestualizzati",
      "Dedica tempo puntuale alla preparazione (2–3 ore) quando l'evento è definito",
      "Distingue chiaramente le situazioni che richiedono preparazione da quelle che no"
    ],
    interviewEvidence: [
      "\"La conoscenza di chi mi ascoltava e la conoscenza del progetto. Un progetto studiato a fondo, di cui sapevo qualsiasi cosa. Le fonti danno la sicurezza.\" — Alessandro, Intervista 3",
      "\"Avendo fatto prima un'analisi, ero tranquillo.\" — Alessandro, Intervista 3",
      "\"Una questione di tempo e di un'organizzazione troppo ottimista.\" — Alessandro, Intervista 3 (causa di preparazione insufficiente)",
      "Nessuna attivazione emotiva dichiarata durante l'evento: l'unica risposta annotata alla domanda sul lato emotivo è una negazione esplicita"
    ],
    surveyEvidence: [
      "47% studenti nel campione — segmento più rappresentato",
      "25% cita \"non sapevo da dove iniziare\" come causa di preparazione insufficiente (confidenza Alta)",
      "35% ha un gap Q15 > Q13 di almeno 1 punto — autostima di performance inferiore rispetto alla preparazione dichiarata (I3, confidenza Alta)",
      "WTP paradosso: gli studenti mostrano sia il tasso di conversione più alto (4/6 di chi ha pagato) che la resistenza più alta (13/19 non hanno mai considerato di pagare)"
    ],
    implications: [
      "Onboarding per eventi dichiarati: questo profilo attiva la preparazione solo se esiste un evento. La modalità evento è il suo ingresso naturale in Readiness.",
      "Gap tracker come strumento di chiusura: sa quando è pronto quando ha visto tutto. Il gap tracker — \"hai coperto il contenuto, manca la simulazione dell'apertura\" — risolve la sua necessità di completamento.",
      "Audience briefing come feature differenziante: la conoscenza di chi ascolta è critica quanto la conoscenza del contenuto. Un briefing sull'interlocutore (background, contesto, aspettative) è un unmet need esplicito."
    ],
    personality: ["Metodico", "Autosufficiente", "Ottimista organizzativo", "Analitico", "Content-driven"],
    confidence: "Alta nel beachhead Design/IT — Supportata da intervista con alta coerenza interna (Intervista 3, unica fonte diretta nel beachhead dichiarato). Il profilo contraddice direttamente l'ipotesi I4 (emotional freeze) e per questo è il più rilevante per le decisioni di product design. Non generalizzabile al di fuori del cluster Design/UX senza ulteriori interviste."
  },
  {
    name: "Giardi Luca",
    quote: "Per la Games Week mi sono preparato perché ci potevano essere publisher. In azienda ero un dipendente — contesto diverso.",
    age: 27,
    education: "Accademia (Game/Level Design)",
    profession: "Level designer in azienda internazionale; ex indipendente",
    city: "Roma / lavoro remoto",
    bio: "Giardi lavora in modo esecutivo su progetti altrui durante la settimana. Ma ha anche un lato indipendente: ha portato un progetto proprio a eventi di settore, ha fatto networking con publisher, conosce il valore del contesto prima ancora del contenuto. La sua preparazione è selettiva e razionale: si prepara quando l'evento ha un obiettivo professionale chiaro e autonomo. Non si prepara quando il contesto è già noto o l'evento è gestito dall'alto. Sa esattamente perché fa questa distinzione — e articola la logica senza esitazione.",
    goals: [
      "Sfruttare gli eventi di networking per costruire relazioni e opportunità concrete",
      "Presentare il proprio lavoro in modo impeccabile quando la posta in gioco è alta",
      "Mantenere visibilità nel settore anche quando non ha un progetto attivo da portare"
    ],
    needs: [
      "Sapere in anticipo chi sarà presente a un evento e costruire la preparazione su quello",
      "Un sistema che mappi i gap tra la sua preparazione e il livello che l'evento richiede",
      "Supporto per i contesti ad alta pressione — come riunioni con figure di potere che usano l'aggressività come tecnica di controllo"
    ],
    frustrations: [
      "Il tempo per prepararsi all'incontro di networking spesso non c'è: \"mi sono buttato, non ho avuto modo di trovare il tempo\"",
      "In riunioni con dinamiche di potere aggressive (nuovo direttore), perde performance non per mancanza di contenuto, ma per la gestione del clima",
      "In azienda, la preparazione non è riconosciuta né richiesta: il valore percepito della preparazione dipende dal contesto",
      "Agli eventi di settore in Italia, la qualità del networking è disomogenea: difficile distinguere le persone di valore da chi \"non è professionale\""
    ],
    motivations: "Vuole essere competitivo fuori dal suo ruolo esecutivo. Sa che la preparazione cambia il risultato di un evento — lo ha vissuto alla Games Week. Ma il sistema attuale non supporta questa preparazione: tocca farsela da soli, senza struttura, senza feedback, senza un modo per sapere se si è pronti abbastanza.",
    behaviors: [
      "Ricerca online i partecipanti agli eventi prima di andarci (LinkedIn, sito evento, giuria)",
      "Prepara slide, screenshot e frasi calibrate per le sprint review aziendali",
      "Distingue tra contesti che richiedono preparazione formale e contesti che no",
      "Ha una sensazione ricorrente post-riunione: \"potevo fare meglio\" — segnalata ogni volta, non solo nelle occasioni ad alta pressione",
      "Quando presenta a 40 persone, nota la qualità delle presentazioni altrui e la paragona alla propria"
    ],
    interviewEvidence: [
      "\"Per la Games Week mi sono preparato con l'obiettivo di fare networking, perché lì potevano esserci dei publisher.\" — Giardi, Intervista 1",
      "\"Appena è entrato, prima dell'evento in sé, ho capito chi fosse e cosa avesse fatto, innanzitutto per capire perché avesse preso quella linea da direttore.\" — Giardi, Intervista 1",
      "\"Sempre. Succede perché quando presenti qualcosa davanti a 40 persone vuoi farlo in modo impeccabile.\" — Giardi, Intervista 1 (sul pensiero post-riunione \"potevo fare meglio\")",
      "\"Sì, è successo. Succede a malincuore, ma se si vuole essere oggettivi bisogna ammetterlo.\" — Giardi, Intervista 1 (sentendo parlare altri più preparati agli eventi)"
    ],
    surveyEvidence: [
      "65% dichiara di avere un momento professionale importante nei prossimi 3 mesi (confidenza Alta) — Giardi è il profilo che risponde a questo trigger",
      "62% non ha un modello di preparazione per il networking (I5, confidenza Da confermare — n=8 troppo basso)",
      "35% dichiara preparazione insufficiente (14/40) — Giardi appartiene al cluster che si prepara in modo selettivo, non a quello che non si prepara mai"
    ],
    implications: [
      "Modalità evento come core use case: questo profilo entra in Readiness quando ha una data e un obiettivo. Il trigger è l'evento, non l'ansia.",
      "Briefing sull'interlocutore: la ricerca su chi sarà presente è già un comportamento spontaneo. Readiness deve automatizzare questo processo e strutturarlo come parte del piano.",
      "Differenziazione per contesto: lo stesso utente cambia comportamento in base alla posta in gioco. Il sistema deve poter calibrare il piano sull'importanza dell'evento, non solo sul tempo disponibile.",
      "Segnale \"potevo fare meglio\" come hook di retention: questo profilo è motivato dal miglioramento iterativo. Il post-event debrief è l'interfaccia giusta per catturarlo."
    ],
    personality: ["Strategico", "Selettivo", "Autocritico", "Indipendente", "Ambizioso lateralmente"],
    confidence: "Media — Supportata da un'intervista completa (Intervista 1) con alta coerenza interna e parziale convergenza con il sondaggio (65% con evento imminente, 62% senza modello per il networking). Il profilo è quello più aderente all'utente \"evento-driven\" descritto nel concept v3. Richiede 2–3 interviste aggiuntive su profili simili per elevare la confidenza."
  }
];

const interviewsData: InterviewData[] = [
  {
    phase: "INTERVISTA 1",
    name: "Edo",
    role: "Titolare agenzia multidisciplinare",
    rows: [
      {
        obiettivo: "Conoscere l'utente e il contesto",
        area: "Occupazione e ruolo",
        cluster: "Gestisce un'agenzia che opera su branding, web, fotografia, content e digital marketing. Si interfaccia quotidianamente con clienti che non hanno chiari i propri obiettivi e con collaboratori di profili diversi. I momenti professionali ricorrenti sono riunioni di allineamento, presentazioni di progetto e trattative commerciali."
      },
      {
        obiettivo: "Conoscere il contesto",
        area: "Episodio chiave",
        cluster: "Una serie di incontri con un nuovo cliente caratterizzati da informazioni frammentate e prive di struttura. Il contesto era da ricostruire dall'esterno, senza una presentazione organizzata da parte del cliente. Edo ha dovuto gestire il disorientamento informativo in parallelo alla relazione commerciale."
      },
      {
        obiettivo: "Necessità",
        area: "Processo di preparazione",
        cluster: "Si prepara attraverso ricerche online, ma il volume di informazioni disponibili rende difficile identificare i contenuti davvero rilevanti da portare. La sensazione ricorrente è di non riuscire a selezionare i cinque o sei temi principali senza disperdere il focus."
      },
      {
        obiettivo: "Valori",
        area: "Lato emotivo",
        cluster: "Si descrive come persona iperemotiva. Riconosce un disagio specifico con la propria voce e la capacità di proiezione, che percepisce come limite nella comunicazione con i clienti. Ha affrontato il problema attraverso logopedia, yoga e tecniche di respirazione."
      },
      {
        obiettivo: "Necessità",
        area: "Strumenti usati",
        cluster: "Utilizza l'AI per costruire scalette, ma in modo non strutturato. La FOMO informativa — la percezione di non riuscire a stare dietro a tutto — interferisce con un uso ordinato degli strumenti disponibili."
      },
      {
        obiettivo: "Necessità",
        area: "Bisogno insoddisfatto",
        cluster: "Ha bisogno di uno strumento che aiuti a riordinare le informazioni e a stabilire una gerarchia di priorità, in modo da poterle veicolare in maniera efficace all'interlocutore. La difficoltà non è trovare le informazioni: è capire quali portare e come."
      }
    ]
  },
  {
    phase: "INTERVISTA 2",
    name: "Giardi",
    role: "Level designer, studio videoludico",
    rows: [
      {
        obiettivo: "Conoscere l'utente e il contesto",
        area: "Occupazione e ruolo",
        cluster: "Lavora come level designer in uno studio italiano, occupandosi della costruzione delle mappe di gioco, del fix di bug e della gestione delle build quotidiane. Il ruolo è progressivamente diventato più esecutivo: le decisioni creative principali arrivano dall'alto, con margini di autonomia limitati."
      },
      {
        obiettivo: "Conoscere il contesto",
        area: "Episodio chiave",
        cluster: "La partecipazione alla Games Week e allo Svilupparty di Bologna, dove ha presentato il proprio progetto indipendente a publisher e giurie. Contesto ad alto rischio relazionale, con interlocutori sconosciuti e posta in gioco concreta."
      },
      {
        obiettivo: "Necessità",
        area: "Processo di preparazione",
        cluster: "Per la Games Week ha approfondito il genere di riferimento attraverso game analysis scritta e appunti. Per il networking improvvisato in azienda non ha avuto modo di prepararsi: si è presentato senza una strategia, per mancanza di tempo piuttosto che di interesse."
      },
      {
        obiettivo: "Valori",
        area: "Lato emotivo",
        cluster: "Non dichiara ansia anticipatoria. La consapevolezza del gap emerge solo nel confronto diretto con altri, durante o dopo l'evento. Il riconoscimento dell'impreparazione è retrospettivo, non preventivo."
      },
      {
        obiettivo: "Necessità",
        area: "Strumenti usati",
        cluster: "Ricerche online, appunti manuali e game analysis per gli eventi specifici. Nessun uso dichiarato di strumenti digitali o AI per la preparazione professionale."
      },
      {
        obiettivo: "Necessità",
        area: "Bisogno insoddisfatto",
        cluster: "Riconosce che incontrare publisher e interlocutori nuovi richiede una preparazione diversa da quella tecnica: postura, velocità di linguaggio, capacità di comunicare con sconosciuti. Identifica nell'anticipo la variabile che cambierebbe di più il suo modo di prepararsi."
      }
    ]
  },
  {
    phase: "INTERVISTA 3",
    name: "Alessandro",
    role: "Laureando art direction, ufficio comunicazione",
    rows: [
      {
        obiettivo: "Conoscere l'utente e il contesto",
        area: "Occupazione e ruolo",
        cluster: "Laureando in art direction, lavora nell'ufficio comunicazione dell'accademia sul reparto below the line. Gestisce il passaggio di informazioni tra segreteria, docenti e team, spesso con scadenze ravvicinate e contesti già noti."
      },
      {
        obiettivo: "Conoscere il contesto",
        area: "Episodio chiave",
        cluster: "Una riunione interna con più reparti per definire le criticità del sito accademico in vista della sua trasformazione in e-commerce. Il contesto era familiare, gli interlocutori già conosciuti."
      },
      {
        obiettivo: "Necessità",
        area: "Processo di preparazione",
        cluster: "Ha condotto un'analisi autonoma del sito — KPI e to-do list — con un approccio estetico, dedicandoci circa tre ore qualche giorno prima dell'incontro. La conoscenza approfondita del progetto e del pubblico è stata la fonte principale della sua sicurezza."
      },
      {
        obiettivo: "Valori",
        area: "Lato emotivo",
        cluster: "Non dichiara attivazione emotiva. La sicurezza è interamente legata alla padronanza del contenuto e alla conoscenza degli interlocutori, non alla gestione dell'ansia. Profilo divergente rispetto agli altri due intervistati."
      },
      {
        obiettivo: "Necessità",
        area: "Strumenti usati",
        cluster: "Utilizza Claude per costruire scalette in bullet point. Si confronta con una figura di riferimento del proprio network — un'amica con ruolo di account — per ottenere feedback contestualizzato sul progetto."
      },
      {
        obiettivo: "Necessità",
        area: "Bisogno insoddisfatto",
        cluster: "La preparazione ideale si fonda su tre elementi: una persona che conosce il progetto, un'analisi approfondita delle fonti, la possibilità di ripetere. La sicurezza non viene dalla gestione dell'ansia ma dal livello di conoscenza raggiunto."
      }
    ]
  }
];

function InterviewTable({ data }: { data: InterviewData }) {
  return (
    <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
      {/* Label fase */}
      <div
        style={{
          fontSize: "11px",
          fontWeight: 400,
          color: "#888888",
          letterSpacing: "0.5px",
          marginBottom: "6px"
        }}
      >
        {data.phase}
      </div>

      {/* Titolo intervistato */}
      <div
        style={{
          fontSize: "22px",
          fontWeight: 500,
          color: "#0A0A0A",
          lineHeight: 1.15,
          marginBottom: "20px"
        }}
      >
        {data.name} — {data.role}
      </div>

      {/* Tabella */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th
              style={{
                fontSize: "13px",
                fontWeight: 500,
                color: "#0A0A0A",
                textAlign: "left",
                padding: "12px 16px",
                borderBottom: "1.5px solid #0A0A0A",
                width: "160px"
              }}
            >
              Obiettivo
            </th>
            <th
              style={{
                fontSize: "13px",
                fontWeight: 500,
                color: "#0A0A0A",
                textAlign: "left",
                padding: "12px 16px",
                borderBottom: "1.5px solid #0A0A0A",
                width: "180px"
              }}
            >
              Area d'indagine
            </th>
            <th
              style={{
                fontSize: "13px",
                fontWeight: 500,
                color: "#0A0A0A",
                textAlign: "left",
                padding: "12px 16px",
                borderBottom: "1.5px solid #0A0A0A"
              }}
            >
              Cluster di risposta
            </th>
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, index) => (
            <tr key={index}>
              <td
                style={{
                  fontSize: "13.5px",
                  fontWeight: 500,
                  color: "#0A0A0A",
                  lineHeight: 1.5,
                  padding: "12px 16px",
                  borderBottom: "0.5px solid #E0E0E0",
                  verticalAlign: "top"
                }}
              >
                {row.obiettivo}
              </td>
              <td
                style={{
                  fontSize: "13.5px",
                  fontWeight: 400,
                  color: "#3D3D3D",
                  lineHeight: 1.5,
                  padding: "12px 16px",
                  borderBottom: "0.5px solid #E0E0E0",
                  verticalAlign: "top"
                }}
              >
                {row.area}
              </td>
              <td
                style={{
                  fontSize: "13.5px",
                  fontWeight: 400,
                  color: "#3D3D3D",
                  lineHeight: 1.6,
                  padding: "12px 16px",
                  borderBottom: "0.5px solid #E0E0E0",
                  verticalAlign: "top"
                }}
              >
                {row.cluster}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PersonaCard({ data }: { data: PersonaData }) {
  const SectionTitle = ({ children }: { children: string }) => (
    <div
      style={{
        fontSize: "11px",
        fontWeight: 500,
        color: "#0A0A0A",
        letterSpacing: "0.8px",
        marginBottom: "10px"
      }}
    >
      {children}
    </div>
  );

  return (
    <div
      style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        display: "grid",
        gridTemplateColumns: "280px 1fr",
        gap: "48px"
      }}
    >
      {/* Colonna sinistra - Sidebar */}
      <div>
        {/* Foto placeholder */}
        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            backgroundColor: "#E0E0E0",
            marginBottom: "24px"
          }}
        />

        {/* Nome */}
        <div
          style={{
            fontSize: "24px",
            fontWeight: 500,
            color: "#0A0A0A",
            lineHeight: 1.15,
            marginBottom: "24px"
          }}
        >
          {data.name}
        </div>

        {/* Info demografiche */}
        <div style={{ marginBottom: "32px" }}>
          <div style={{ marginBottom: "12px" }}>
            <div style={{ fontSize: "11px", fontWeight: 500, color: "#888888", marginBottom: "4px" }}>TARGET</div>
            <div style={{ fontSize: "13px", fontWeight: 400, color: "#0A0A0A" }}>
              {data.age <= 26 ? "Studente-lavoratore / Junior" : "Professionista"}
            </div>
          </div>

          <div style={{ marginBottom: "12px" }}>
            <div style={{ fontSize: "11px", fontWeight: 500, color: "#888888", marginBottom: "4px" }}>ETÀ</div>
            <div style={{ fontSize: "13px", fontWeight: 400, color: "#0A0A0A" }}>{data.age}</div>
          </div>

          <div style={{ marginBottom: "12px" }}>
            <div style={{ fontSize: "11px", fontWeight: 500, color: "#888888", marginBottom: "4px" }}>EDUCAZIONE</div>
            <div style={{ fontSize: "13px", fontWeight: 400, color: "#0A0A0A" }}>{data.education}</div>
          </div>

          <div style={{ marginBottom: "12px" }}>
            <div style={{ fontSize: "11px", fontWeight: 500, color: "#888888", marginBottom: "4px" }}>PROFESSIONE</div>
            <div style={{ fontSize: "13px", fontWeight: 400, color: "#0A0A0A" }}>{data.profession}</div>
          </div>

          <div style={{ marginBottom: "12px" }}>
            <div style={{ fontSize: "11px", fontWeight: 500, color: "#888888", marginBottom: "4px" }}>CITTÀ</div>
            <div style={{ fontSize: "13px", fontWeight: 400, color: "#0A0A0A" }}>{data.city}</div>
          </div>
        </div>

        {/* Quote */}
        <div
          style={{
            padding: "16px",
            backgroundColor: "#F8F8F8",
            borderRadius: "4px",
            marginBottom: "32px"
          }}
        >
          <div style={{ fontSize: "32px", fontWeight: 500, color: "#0A0A0A", marginBottom: "8px" }}>"</div>
          <div
            style={{
              fontSize: "13px",
              fontWeight: 400,
              color: "#3D3D3D",
              lineHeight: 1.6,
              fontStyle: "italic"
            }}
          >
            {data.quote}
          </div>
        </div>

        {/* Personality */}
        <div>
          <SectionTitle>Personality</SectionTitle>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {data.personality.map((trait, index) => (
              <div
                key={index}
                style={{
                  padding: "6px 12px",
                  backgroundColor: "#F0F0F0",
                  fontSize: "11px",
                  fontWeight: 400,
                  color: "#0A0A0A",
                  borderRadius: "4px"
                }}
              >
                {trait}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Colonna destra - Contenuto */}
      <div>
        {/* Bio */}
        <div style={{ marginBottom: "24px" }}>
          <SectionTitle>Bio</SectionTitle>
          <div
            style={{
              fontSize: "13px",
              fontWeight: 400,
              color: "#3D3D3D",
              lineHeight: 1.6
            }}
          >
            {data.bio}
          </div>
        </div>

        {/* Necessità */}
        <div style={{ marginBottom: "24px" }}>
          <SectionTitle>Necessità</SectionTitle>
          <ul style={{ margin: 0, paddingLeft: "20px" }}>
            {data.needs.map((need, index) => (
              <li
                key={index}
                style={{
                  fontSize: "13px",
                  fontWeight: 400,
                  color: "#3D3D3D",
                  lineHeight: 1.6,
                  marginBottom: "6px"
                }}
              >
                {need}
              </li>
            ))}
          </ul>
        </div>

        {/* Frustrazioni */}
        <div style={{ marginBottom: "24px" }}>
          <SectionTitle>Frustrazioni</SectionTitle>
          <ul style={{ margin: 0, paddingLeft: "20px" }}>
            {data.frustrations.map((frustration, index) => (
              <li
                key={index}
                style={{
                  fontSize: "13px",
                  fontWeight: 400,
                  color: "#3D3D3D",
                  lineHeight: 1.6,
                  marginBottom: "6px"
                }}
              >
                {frustration}
              </li>
            ))}
          </ul>
        </div>

        {/* Obiettivi */}
        <div style={{ marginBottom: "24px" }}>
          <SectionTitle>Obiettivi e Aspirazioni</SectionTitle>
          <ul style={{ margin: 0, paddingLeft: "20px" }}>
            {data.goals.map((goal, index) => (
              <li
                key={index}
                style={{
                  fontSize: "13px",
                  fontWeight: 400,
                  color: "#3D3D3D",
                  lineHeight: 1.6,
                  marginBottom: "6px"
                }}
              >
                {goal}
              </li>
            ))}
          </ul>
        </div>

        {/* Implicazioni progettuali */}
        <div style={{ marginBottom: "24px" }}>
          <SectionTitle>Professionale</SectionTitle>
          <ul style={{ margin: 0, paddingLeft: "20px" }}>
            {data.implications.map((implication, index) => (
              <li
                key={index}
                style={{
                  fontSize: "13px",
                  fontWeight: 400,
                  color: "#3D3D3D",
                  lineHeight: 1.6,
                  marginBottom: "6px"
                }}
              >
                {implication}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        minHeight: "100vh",
        padding: "0"
      }}
    >
      {/* Landing page — Hero, How it works, Pricing */}
      <ReadinessLanding />

      {/* Readiness Home — Mobile Prototype (schermate) */}
      <ReadinessHome />

      {/* Sezione ricerca UX */}
      <ResearchIntro />

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "48px" }}>
        {/* Header Interviste */}
        <div style={{ marginBottom: "64px" }}>
          <div
            style={{
              fontSize: "11px",
              fontWeight: 400,
              color: "#888888",
              letterSpacing: "0.5px",
              marginBottom: "12px"
            }}
          >
            READINESS — UX RESEARCH
          </div>
          <div
            style={{
              fontSize: "32px",
              fontWeight: 500,
              color: "#0A0A0A",
              lineHeight: 1.15
            }}
          >
            Interviste semi-strutturate
          </div>
        </div>

        {/* Tabelle interviste */}
        {interviewsData.map((interview, index) => (
          <div key={index}>
            <InterviewTable data={interview} />
            {index < interviewsData.length - 1 && (
              <div
                style={{
                  margin: "48px 0",
                  borderBottom: "0.5px solid #E0E0E0"
                }}
              />
            )}
          </div>
        ))}

        {/* Separatore sezione */}
        <div
          style={{
            margin: "96px 0",
            borderBottom: "1.5px solid #0A0A0A"
          }}
        />

        {/* Header Personas */}
        <div style={{ marginBottom: "64px" }}>
          <div
            style={{
              fontSize: "11px",
              fontWeight: 400,
              color: "#888888",
              letterSpacing: "0.5px",
              marginBottom: "12px"
            }}
          >
            READINESS — UX RESEARCH
          </div>
          <div
            style={{
              fontSize: "32px",
              fontWeight: 500,
              color: "#0A0A0A",
              lineHeight: 1.15
            }}
          >
            User Personas
          </div>
        </div>

        {/* Personas */}
        {personasData.map((persona, index) => (
          <div key={index}>
            <PersonaCard data={persona} />
            {index < personasData.length - 1 && (
              <div
                style={{
                  margin: "64px 0",
                  borderBottom: "0.5px solid #E0E0E0"
                }}
              />
            )}
          </div>
        ))}

        {/* Separatore sezione Insight */}
        <div style={{ margin: "96px 0", borderBottom: "1.5px solid #0A0A0A" }} />

        {/* Header Insight */}
        <div style={{ marginBottom: "64px", fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
          <div style={{ fontSize: "11px", fontWeight: 400, color: "#888888", letterSpacing: "0.5px", marginBottom: "12px" }}>
            READINESS — UX RESEARCH
          </div>
          <div style={{ fontSize: "32px", fontWeight: 500, color: "#0A0A0A", lineHeight: 1.15, marginBottom: "8px" }}>
            Insight dalla ricerca
          </div>
          <div style={{ fontSize: "13px", fontWeight: 400, color: "#888888" }}>
            Sondaggio (40 persone) + 3 interviste + analisi dei competitor
          </div>
        </div>

        {/* Lista insight */}
        <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
          {insightsData.map((insight, index) => (
            <div key={insight.number}>
              <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "32px" }}>
                {/* Numero */}
                <div style={{ fontSize: "11px", fontWeight: 400, color: "#888888", letterSpacing: "0.5px", paddingTop: "3px" }}>
                  {insight.number}
                </div>

                {/* Contenuto */}
                <div>
                  {/* Titolo */}
                  <div style={{ fontSize: "18px", fontWeight: 500, color: "#0A0A0A", lineHeight: 1.3, marginBottom: "28px" }}>
                    {insight.title}
                  </div>

                  {/* Tre colonne */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "32px", marginBottom: "20px" }}>
                    <div>
                      <div style={{ fontSize: "11px", fontWeight: 500, color: "#0A0A0A", letterSpacing: "0.8px", marginBottom: "10px" }}>
                        COSA ABBIAMO VISTO
                      </div>
                      <div style={{ fontSize: "13px", fontWeight: 400, color: "#3D3D3D", lineHeight: 1.6 }}>
                        {insight.cosa}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "11px", fontWeight: 500, color: "#0A0A0A", letterSpacing: "0.8px", marginBottom: "10px" }}>
                        PERCHÉ SUCCEDE
                      </div>
                      <div style={{ fontSize: "13px", fontWeight: 400, color: "#3D3D3D", lineHeight: 1.6 }}>
                        {insight.perche}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "11px", fontWeight: 500, color: "#0A0A0A", letterSpacing: "0.8px", marginBottom: "10px" }}>
                        COSA SIGNIFICA PER IL PRODOTTO
                      </div>
                      <div style={{ fontSize: "13px", fontWeight: 400, color: "#3D3D3D", lineHeight: 1.6 }}>
                        {insight.prodotto}
                      </div>
                    </div>
                  </div>

                  {/* Confidence badge */}
                  <div style={{ display: "inline-block" }}>
                    <div
                      style={{
                        fontSize: "11px",
                        fontWeight: 400,
                        color: insight.confidence === "sicuro" ? "#1A6B3C" : insight.confidence === "probabile" ? "#7A5700" : "#4A3A8A",
                        backgroundColor: insight.confidence === "sicuro" ? "#EBF5EF" : insight.confidence === "probabile" ? "#FDF6E3" : "#F0EDFA",
                        padding: "6px 12px",
                        borderRadius: "4px",
                        lineHeight: 1.4
                      }}
                    >
                      {insight.confidenceLabel}
                    </div>
                  </div>
                </div>
              </div>

              {index < insightsData.length - 1 && (
                <div style={{ margin: "48px 0", borderBottom: "0.5px solid #E0E0E0" }} />
              )}
            </div>
          ))}
        </div>

        {/* Separatore */}
        <div style={{ margin: "80px 0", borderBottom: "0.5px solid #E0E0E0" }} />

        {/* I 3 insight più importanti */}
        <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", marginBottom: "64px" }}>
          <div style={{ fontSize: "11px", fontWeight: 500, color: "#0A0A0A", letterSpacing: "0.8px", marginBottom: "32px" }}>
            I 3 INSIGHT PIÙ IMPORTANTI PER LE DECISIONI IMMEDIATE
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "32px" }}>
            {topInsights.map((item) => (
              <div key={item.number} style={{ borderTop: "1.5px solid #0A0A0A", paddingTop: "20px" }}>
                <div style={{ fontSize: "11px", fontWeight: 400, color: "#888888", letterSpacing: "0.5px", marginBottom: "10px" }}>
                  {item.number}
                </div>
                <div style={{ fontSize: "15px", fontWeight: 500, color: "#0A0A0A", marginBottom: "12px" }}>
                  {item.label}
                </div>
                <div style={{ fontSize: "13px", fontWeight: 400, color: "#3D3D3D", lineHeight: 1.6 }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Separatore */}
        <div style={{ margin: "64px 0", borderBottom: "0.5px solid #E0E0E0" }} />

        {/* Domande aperte */}
        <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
          <div style={{ fontSize: "11px", fontWeight: 500, color: "#0A0A0A", letterSpacing: "0.8px", marginBottom: "24px" }}>
            COSA VA ANCORA VERIFICATO (PROSSIME 2–3 INTERVISTE)
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ fontSize: "13px", fontWeight: 500, color: "#0A0A0A", textAlign: "left", padding: "12px 16px", borderBottom: "1.5px solid #0A0A0A" }}>
                  Domanda aperta
                </th>
                <th style={{ fontSize: "13px", fontWeight: 500, color: "#0A0A0A", textAlign: "left", padding: "12px 16px", borderBottom: "1.5px solid #0A0A0A", width: "340px" }}>
                  Perché è importante
                </th>
              </tr>
            </thead>
            <tbody>
              {openQuestions.map((q, i) => (
                <tr key={i}>
                  <td style={{ fontSize: "13.5px", fontWeight: 400, color: "#3D3D3D", lineHeight: 1.6, padding: "12px 16px", borderBottom: "0.5px solid #E0E0E0", verticalAlign: "top" }}>
                    {q.domanda}
                  </td>
                  <td style={{ fontSize: "13.5px", fontWeight: 400, color: "#3D3D3D", lineHeight: 1.6, padding: "12px 16px", borderBottom: "0.5px solid #E0E0E0", verticalAlign: "top" }}>
                    {q.perche}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer nota metodologica */}
        <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", marginTop: "64px", paddingTop: "24px", borderTop: "0.5px solid #E0E0E0" }}>
          <div style={{ fontSize: "11px", fontWeight: 400, color: "#888888", lineHeight: 1.6 }}>
            Basato su: sondaggio con 40 rispondenti (dati grezzi verificati), 3 interviste registrate e trascritte, analisi di 8 strumenti concorrenti. Nessun dato inventato o sintetico in questo documento.
          </div>
        </div>

        {/* Separatore sezione CJM */}
        <div style={{ margin: "96px 0", borderBottom: "1.5px solid #0A0A0A" }} />

        {/* Customer Journey Maps */}
        <CustomerJourneyMapsSection />

        {/* Separatore sezione Spec Funzionali */}
        <div style={{ margin: "96px 0", borderBottom: "1.5px solid #0A0A0A" }} />
      </div>

      {/* Sezione dark — Specifiche Funzionali */}
      <FunzionaliSpecSection />
    </div>
  );
}