window.CH_LANGS = window.CH_LANGS || {};
window.CH_LANGS.it = {
  ui: {
    title: "CYBER HEROES // OBLIVION - ULTRA",
    subtitle: "LEA · SMOKE · THESTRAL<br><span style='opacity:0.8'>PROTOCOLLO OBLIVION — ULTRA</span>",
    sys1: "&gt; SISTEMA ATTIVO // NODO 1984",
    sys2: "&gt; TEMA CRT FOSFORI VERDI ANNI 80",
    sys3: "&gt; VERSIONE ULTRA — ACCESSIBILITÀ ARIA &amp; TTS",
    statusReady: "Pronto. Scegli il tuo percorso.",
    statusActive: "Sessione attiva rilevata: ",
    btnResume: "RIPRENDI SESSIONE",
    btnLea: "PERCORSO LEA [TECNICA / PATCH]",
    btnSmoke: "PERCORSO SMOKE [STRADA / GUARDIA]",
    btnThestral: "PERCORSO THESTRAL [CODICE / VISIONE]",
    btnLog: "CONSULTA LOG",
    btnReset: "RESET MEMORIA",
    footer: "Versione Ultra — storia interattiva, layout adattivo PC/Mobile, WAI-ARIA e sintesi vocale.",
    logTitle: "LOG DI SISTEMA",
    logClose: "← Chiudi",
    logEmpty: "Nessuna voce nel log.",
    confirmReset: "Azzerare tutta la memoria e il log?",
    resetDone: "Reset completato.",
    backMenu: "← Menu principale",
    restartPath: "↻ Ricomincia percorso",
    promptPlaceholder: "digita il comando",
    promptSend: "INVIA",
    promptOk: "✓ Comando accettato: ",
    promptErr: "✗ Errore. Atteso: ",
    ttsRead: "LEGGI",
    ttsStop: "STOP",
    ttsAuto: "AUTO-VOCE",
    devicePc: "🖥 LAYOUT PC [2 COLONNE]",
    deviceMobile: "📱 LAYOUT MOBILE",
    skipToMain: "Salta al contenuto principale",
    ariaToolbar: "Controlli Audio e Lingua",
    langLabel: "Seleziona lingua",
    sceneAlt: "Illustrazione scena",
    choicesAria: "Scelte disponibili",
    sysError: "Errore di sistema."
  },
  lea: {
    start: {
      text: "LEA: Il loft è immerso in un bagliore verde fosforico che pulsa come un cuore malato. Le scanline dei CRT danzano sui muri di mattoni grezzi, sui cavi aggrovigliati e sulla tua pelle. Sei Lea, la più tecnica dei tre. Le tue dita conoscono la tastiera meglio di qualsiasi altra cosa al mondo. Smoke sta in piedi vicino alla porta, la sigaretta che brucia lenta tra le dita, il fumo che si mescola al verde e sale verso il soffitto. Thestral è seduto davanti allo schermo principale, occhi spalancati, quasi senza battere ciglio, come se stesse leggendo qualcosa che gli altri non possono vedere.\n\nIl virus Oblivion non cancella solo file. Cancella il ricordo stesso che internet sia mai esistito. La gente per strada lascia cadere i telefoni e resta a fissarli senza capire perché li aveva in mano. Tra poche ore, se non interveniamo, nessuno ricorderà che esisteva una rete. Voi tre siete ancora una famiglia. Ma il tempo stringe.\n\n'Dobbiamo fermarli insieme,' dici a bassa voce, già con le dita sulla tastiera. 'Si proclamano dominatori del tempo. Se il nodo domestico cade, restiamo solo noi tre. E se cadiamo noi, non resta nessuno a ricordare cosa eravamo.'\n\nSmoke annuisce senza parlare. Thestral mormora: 'Vedo la sequenza. 0xNULL. Poi 0xVOID. Poi qualcosa di peggio. Non lasciatemi solo nel codice.'\n\n[Inizio percorso Lea – focus tecnico e famiglia]",
      image: "images/lea/lea_portrait.jpg",
      choices: [
        { t: "Esegui scan approfondito sul virus", n: "scan_done" },
        { t: "Analisi profonda immediata della sequenza", n: "deep_analysis" },
        { t: "Rafforza prima il legame con Smoke e Thestral", n: "night_watch" }
      ],
      prompt: { cmd: "scan --oblivion", n: "scan_done", hint: "PROMPT: digita 'scan --oblivion' per entrare nel sistema e mappare i nodi attivi." }
    },
    scan_done: {
      text: "Scan completato. Il terminale esplode in linee di codice verde: TROJAN.HALO9 rilevato al 92.7%, server C2 attivo su 203.0.113.45. 47 nodi infetti. Solo 3 ancora puri. Il pattern è chiaro e spietato: 0xNULL cancella la storia condivisa. 0xVOID rimuove il concetto stesso di connessione. 0xOBLIVION rende l'oblio permanente.\n\n'Possiamo iniettare un patch,' dici dopo lunghi minuti di silenzio rotto solo dal ronzio dei CRT. 'Ma serve una finestra di 60 secondi da un alleato esterno. Altrimenti il firewall si chiude e restiamo isolati per sempre.'\n\n[Analisi tecnica completata. Il tempo continua a stringere.]",
      image: "images/shared/virus_screen.jpg",
      choices: [
        { t: "Analisi profonda del file system corrotto", n: "deep_analysis" },
        { t: "Compila il patch di emergenza al terminale", n: "compile_patch" },
        { t: "Notte di veglia con la famiglia", n: "night_watch" },
        { t: "Isola subito i tre monitor e proteggi il loft", n: "protect" }
      ]
    },
    deep_analysis: {
      text: "Analisi profonda del virus. Il terminale Unix mostra la directory /usr/src che inizia a corrompersi riga dopo riga mentre il virus riscrive i permessi di sistema. 0xNULL cancella il ricordo condiviso di conversazioni e siti visitati. 0xVOID isola ogni nodo. 0xOBLIVION sigilla tutto.\n\nLea, le tue dita non si fermano. Scopri un punto debole nel kernel: se la famiglia resta unita e la finestra viene sfruttata al momento esatto, il virus può essere frammentato in modo permanente.\n\n[Analisi profonda completata.]",
      image: "images/shared/code_scroll.jpg",
      choices: [
        { t: "Prepara il codice di iniezione sul terminale", n: "compile_patch" },
        { t: "Procedi direttamente al contatto con l'alleato", n: "ally_contact" },
        { t: "Proteggi prima il nodo di famiglia", n: "protect" }
      ]
    },
    compile_patch: {
      text: "Sotto il vecchio poster di WARGAMES appeso al muro di mattoni, ti concentri sulla tastiera meccanica. Fuori dalla finestra la pioggia riga il vetro scuro. Richiami il vecchio ambiente di debug da floppy sull'unità A:\\SYS per scrivere una routine a basso livello che Oblivion non possa intercettare.\n\n[Ambiente di compilazione pronto.]",
      image: "images/lea/lea_hacking.jpg",
      choices: [
        { t: "Verifica il dump esadecimale su A:\\SYS", n: "dos_debug" },
        { t: "Invia il segnale all'alleato esterno", n: "ally_contact" }
      ]
    },
    dos_debug: {
      text: "Lo schermo A:\\SYS\\> mostra i 6 file di sistema del 1987 e il dump esadecimale all'indirizzo 39B1:0200. La stringa di test 'Hello, World!..' brilla nei fosfori verdi: il kernel secondario risponde e non è stato toccato da Oblivion.\n\n'Ci siamo,' sussurri a Thestral. 'Se iniettiamo questo blocco puro durante la finestra di 60 secondi, il virus non potrà cancellare la radice.'\n\n[Routine a basso livello verificata.]",
      image: "images/shared/crt.jpg",
      choices: [{ t: "Contatta l'alleato esterno per l'iniezione", n: "ally_contact" }]
    },
    night_watch: {
      text: "Turno di guardia notturno. Vi sedete un momento sul divano del loft, immersi nella luce verde del monitor. Thestral trema. Gli metti una mano sulla spalla: 'Non sei solo nel codice.' Lui annuisce. Smoke vi guarda: 'Fuori è peggio di quanto pensassi. Ma qui siamo ancora noi. Ancora una famiglia.'\n\n[Notte di veglia completata. La famiglia tiene.]",
      image: "images/shared/family_quiet.jpg",
      choices: [
        { t: "Torna alla tastiera e prepara il patch", n: "compile_patch" },
        { t: "Contatta subito l'alleato esterno", n: "ally_contact" }
      ]
    },
    ally_contact: {
      text: "Un segnale debole arriva da fuori. Un alleato esterno apre una finestra di 60 secondi: 'Usatela. Non so quanto resisterò ancora.'\n\nSotto le travi del soffitto, circondata da pile di appunti cartacei che nessun virus può cancellare, digiti i comandi con precisione assoluta. Thestral guida la sequenza. Smoke controlla la porta. Il patch avanza riga dopo riga. Quando la finestra si chiude, Oblivion è frammentato.\n\n[Contatto alleato sfruttato. Il climax è vicino.]",
      image: "images/lea/lea_typing.jpg",
      choices: [{ t: "Verso il climax finale", n: "climax" }]
    },
    protect: {
      text: "Isoli completamente il nodo domestico davanti alla batteria dei tre monitor CRT sotto il poster DATALINK. Il firewall si chiude con un suono secco. I tre schermi restano accesi solo per voi, mentre fuori le luci dei grattacieli si spengono.\n\n[Protezione locale attiva. Il mondo fuori è perso.]",
      image: "images/lea/loft_lea.jpg",
      choices: [{ t: "Vai all'epilogo Famiglia", n: "finale_fam" }]
    },
    climax: {
      text: "Climax nel loft. I quattro monitor sulla lunga scrivania brillano sotto il poster '1984'. Siete l'ultimo nodo stabile in un mondo che sta dimenticando. Devi decidere se sacrificare la connessione locale per rallentare Oblivion e lasciare frammenti di memoria nel mondo, o mantenerla solo per voi tre.\n\n[Scelta finale Lea]",
      image: "images/shared/loft.jpg",
      choices: [
        { t: "Sacrifica la connessione per una resistenza frammentata", n: "finale_res" },
        { t: "Proteggi solo la famiglia e chiudi il nodo", n: "finale_fam" }
      ]
    },
    finale_res: {
      text: "FINALE LEA - RESISTENZA: Oblivion è stato rallentato. Il web è frammentato in migliaia di isole isolate. Voi tre siete ancora in piedi nel loft, davanti al monitor acceso, il verde ancora vivo sui vostri volti.\n\n'Siamo umani,' dici a bassa voce. 'Finché ricordiamo, loro non hanno vinto del tutto.'\n\n[RESISTENZA]\nLa famiglia resta. La memoria resta.",
      image: "images/shared/family2.jpg",
      choices: [{ t: "Torna al Menu", n: "menu" }]
    },
    finale_fam: {
      text: "FINALE LEA - FAMIGLIA: Il nodo è protetto e sigillato. Fuori, nelle case della città, le famiglie fissano schermi vuoti immersi nel bagliore verde senza più ricordare cosa fosse la rete. Ma dentro il loft voi tre siete salvi e uniti.\n\n[FAMIGLIA]\nInsieme. Al sicuro.",
      image: "images/shared/family.jpg",
      choices: [{ t: "Torna al Menu", n: "menu" }]
    }
  },
  smoke: {
    start: {
      text: "SMOKE: Sei Smoke. La sigaretta brucia lenta tra le dita mentre stai di guardia nel loft. Il bagliore verde dei CRT illumina il tuo volto e la giacca di pelle. Lea è al terminale, Thestral fissa il codice. Il virus Oblivion sta cancellando il ricordo di internet.\n\n'Io copro l'esterno,' dici, voce bassa. 'Voi restate dentro. Se cade tutto, restiamo solo noi tre.'\n\n[Percorso Smoke – protezione e azione]",
      image: "images/smoke/smoke_portrait.jpg",
      choices: [
        { t: "Osserva la città dalla finestra del loft", n: "window_watch" },
        { t: "Scendi in strada per pattugliare i quartieri", n: "city_forget" },
        { t: "Lungo momento di famiglia nel loft", n: "family_talk_long" },
        { t: "Resta di guardia alla porta tutta la notte", n: "door" }
      ]
    },
    window_watch: {
      text: "Ti avvicini alla grande vetrata del loft, il posacenere sul davanzale. Il fumo sale lento mentre guardi i grattacieli nella foschia verde. Le finestre dei palazzi si spengono a blocchi interi, come se la città stesse perdendo pezzi di memoria.\n\n[Osservazione dall'alto completata]",
      image: "images/smoke/smoke_window.jpg",
      choices: [
        { t: "Scendi nelle strade del Financial District", n: "city_forget" },
        { t: "Torna a presidiare la porta d'ingresso", n: "door" }
      ]
    },
    city_forget: {
      text: "Cammini lungo i marciapiedi bagnati davanti alle vetrine di Radioware, nel Financial District. Sull'asfalto umido giace un grosso telefono cellulare abbandonato: chi lo aveva in mano lo ha lasciato cadere e ha continuato a camminare senza voltarsi, incapace di ricordare a cosa servisse.\n\n[Il sintomo dell'oblio è ovunque]",
      image: "images/shared/city_forget.jpg",
      choices: [
        { t: "Prosegui verso il settore Mirai / Hotel", n: "city_mirai" },
        { t: "Taglia per i vicoli secondari verso il loft", n: "street_long" }
      ]
    },
    city_mirai: {
      text: "Ti addentri tra le insegne al neon verdi dell'Hotel e della torre MIRAI 08. Intorno a te la folla cammina spaesata con occhi vuoti, stringendo fogli di carta che non sanno più decifrare.\n\n[Quartiere centrale esplorato]",
      image: "images/shared/city.jpg",
      choices: [
        { t: "Controlla la piazza sotto il tabellone Datanet", n: "city_datanet" },
        { t: "Imbocca il vicolo laterale", n: "street_long" }
      ]
    },
    city_datanet: {
      text: "Sotto il gigantesco schermo di MIRAI CORP (+1.09, 48.32) e l'insegna spenta di DATANET, decine di persone restano immobili nel buio verde. Sei l'unico in mezzo a loro a ricordare ancora il mondo di prima.\n\n[Rilevamento esterno completato]",
      image: "images/shared/city2.jpg",
      choices: [{ t: "Rientra passando dal vicolo sul retro", n: "street_long" }]
    },
    street_long: {
      text: "Tagli per il vicolo bagnato illuminato dal neon verde 'ホテル' (Hotel). A terra c'è un vecchio registratore a cassette abbandonato. Torni al loft all'alba, sporco di pioggia, con la certezza che là fuori una scintilla di resistenza esiste ancora.\n\n[Esplorazione lunga completata]",
      image: "images/shared/alley.jpg",
      choices: [{ t: "Rientra nel loft per il climax", n: "climax" }]
    },
    family_talk_long: {
      text: "Lungo momento di famiglia. Vi sedete tutti e tre sul divano del loft, il verde del monitor come unica luce. Parlate di cosa succederà se il nodo cade e promettete di restare insieme, qualunque cosa accada fuori.\n\n[Legame rafforzato in profondità]",
      image: "images/shared/family_quiet.jpg",
      choices: [
        { t: "Prendi posizione alla porta per il turno di guardia", n: "door" },
        { t: "Verso il climax", n: "climax" }
      ]
    },
    door: {
      text: "Resti in piedi davanti alla porta socchiusa per ore, la sigaretta tra le dita, guardando i palazzi immersi nella nebbia verde oltre la soglia. Nessuno entra. Il nodo resta sicuro.\n\n[Protezione attiva]",
      image: "images/smoke/smoke_door.jpg",
      choices: [{ t: "Fai il punto con Lea e Thestral", n: "smoke_brief" }]
    },
    smoke_brief: {
      text: "Ti riavvicini alla postazione dei terminali mentre il codice verde scorre sul monitor alle tue spalle. 'Qualunque cosa decidiate di fare con quel patch,' dici guardando Lea e Thestral negli occhi, 'io sono con voi fino alla fine.'\n\n[Pronti alla decisione finale]",
      image: "images/smoke/smoke.jpg",
      choices: [{ t: "Vai al climax", n: "climax" }]
    },
    climax: {
      text: "Climax nel loft. I quattro monitor sotto il poster '1984' pulsano di luce verde. Devi decidere se sacrificare la connessione locale per lasciare frammenti di resistenza nel mondo, o proteggere solo voi tre a ogni costo.\n\n[Scelta finale Smoke]",
      image: "images/shared/loft.jpg",
      choices: [
        { t: "Resistenza globale frammentata", n: "finale_res" },
        { t: "Famiglia protetta nel loft", n: "finale_fam" }
      ]
    },
    finale_res: {
      text: "FINALE SMOKE - RESISTENZA: Avete rallentato Oblivion. Nei vicoli della città, la scritta spray verde 'INTERNET WAS REAL' brilla ancora sul muro bagnato come un faro per chiunque inizi a ricordare.\n\n'Basta,' dici, spegnendo l'ultima sigaretta. 'Abbiamo resistito.'\n\n[RESISTENZA]",
      image: "images/shared/graffiti.jpg",
      choices: [{ t: "Torna al Menu", n: "menu" }]
    },
    finale_fam: {
      text: "FINALE SMOKE - FAMIGLIA: Il nodo è sicuro. Voi tre insieme, in piedi davanti all'ultimo terminale acceso del loft. 'Abbiamo scelto noi,' dici. E basta.\n\n[FAMIGLIA]",
      image: "images/shared/family2.jpg",
      choices: [{ t: "Torna al Menu", n: "menu" }]
    }
  },
  thestral: {
    start: {
      text: "THESTRAL: Sei Thestral. I tuoi occhi non lasciano lo schermo. Il verde del codice si riflette nelle pupille. Vedi sequenze che Lea e Smoke non vedono: 0xNULL, 0xVOID, poi 0xOBLIVION. Non vuoi restare solo nel codice.\n\nTu mormori, voce bassa: 'Non lasciatemi solo. Vedo la sequenza completa. Se non interrompiamo al terzo passo, diventa permanente.'\n\n[Percorso Thestral – visione del codice]",
      image: "images/thestral/thestral_portrait.jpg",
      choices: [
        { t: "Avvia la traccia diretta della sequenza", n: "trace_done" },
        { t: "Analizza la sfera del nucleo virale", n: "analyze" },
        { t: "Guida l'inject leggendo secret.txt insieme a Lea", n: "guide" },
        { t: "Cerca supporto nella famiglia prima di immergerti", n: "family" }
      ],
      prompt: { cmd: "trace --sequence", n: "trace_done", hint: "PROMPT: digita 'trace --sequence' per tracciare e confermare la sequenza." }
    },
    trace_done: {
      text: "Traccia completata. Il tuo volto è a pochi centimetri dal vetro curvo del CRT. La sequenza è confermata: 0xNULL cancella, 0xVOID isola, 0xOBLIVION rende permanente. Più guardi in profondità, più senti l'abisso del codice tirarti dentro.\n\n[Visione attiva. Il codice è più chiaro che mai.]",
      image: "images/thestral/thestral.jpg",
      choices: [
        { t: "Spingiti oltre nel lato oscuro del codice", n: "nightmare_vision" },
        { t: "Apri il terminale di hacking con Lea", n: "guide" },
        { t: "Guida direttamente verso il climax", n: "climax" }
      ]
    },
    nightmare_vision: {
      text: "Per un istante terrificante vedi cosa diventeresti se restassi intrappolato da solo nel flusso di 0xOBLIVION: uno spettro consumato dai fosfori verdi, occhi ridotti a puro codice luminoso, dita fuse con i tasti.\n\nLa voce di Lea ti strappa via dall'allucinazione appena in tempo, ma hai visto la chiave nascosta nel nucleo.\n\n[Visione dell'abisso superata]",
      image: "images/thestral/thestral_hands.jpg",
      choices: [
        { t: "Analizza il nucleo sferico di Oblivion", n: "analyze" },
        { t: "Torna all'ancora di salvezza della famiglia", n: "family" }
      ]
    },
    analyze: {
      text: "Analisi profonda. Sullo schermo appare la struttura tridimensionale di Oblivion: una sfera pulsante di filamenti verdi. Scopri le crepe nella sequenza: può essere frammentato se la famiglia resta unita.\n\n[Analisi completata]",
      image: "images/shared/virus.jpg",
      choices: [
        { t: "Passa al terminale per estrarre secret.txt", n: "guide" },
        { t: "Verso il climax", n: "climax" }
      ]
    },
    guide: {
      text: "Guidi Lea nell'inject su 1980s-terminal. Eseguite 'cat secret.txt' e sullo schermo compare la chiave: ACCESS CODE: 7X9K-L3M8-2P4Q — AUTH LEVEL: OMEGA. Oblivion rallenta e si frammenta.\n\n[Guida riuscita]",
      image: "images/shared/hacking.jpg",
      choices: [{ t: "Procedi al climax", n: "climax" }],
      prompt: { cmd: "7x9k-l3m8-2p4q", n: "climax", hint: "PROMPT OPZIONALE: digita l'ACCESS CODE visibile sullo schermo ('7X9K-L3M8-2P4Q') per forzare il livello OMEGA." }
    },
    family: {
      text: "Vi sedete insieme sul divano nel buio del loft. Lea ti resta accanto, Smoke osserva il monitor in silenzio. Non sei solo nel codice. Il calore umano rafforza la tua mente più di qualsiasi firewall.\n\n[Supporto ottenuto]",
      image: "images/shared/family_quiet.jpg",
      choices: [{ t: "Affronta il climax", n: "climax" }]
    },
    climax: {
      text: "Climax nel loft. Sul monitor beige tutto il codice scompare, lasciando solo un unico cursore rettangolare verde che lampeggia nel vuoto. Devi decidere il destino della rete. Smoke e Lea aspettano un tuo cenno.\n\n[Scelta finale Thestral]",
      image: "images/shared/empty_crt.jpg",
      choices: [
        { t: "Resistenza – frammenta /INFECT.EXE e lascia tracce nel mondo", n: "finale_res" },
        { t: "Famiglia – sigilla il nodo e proteggi solo noi tre", n: "finale_fam" }
      ]
    },
    finale_res: {
      text: "FINALE THESTRAL - RESISTENZA: Lanci il tracciamento inverso su /INFECT.EXE (CODE: 0xA7F3). Al 68% del trace, i blocchi esadecimali della memoria ('4D 65 6D 6F 72 79' - Memory) vengono salvati. Oblivion è stato rallentato. Non sei più solo.\n\n[RESISTENZA]",
      image: "images/shared/virus2.jpg",
      choices: [{ t: "Torna al Menu", n: "menu" }]
    },
    finale_fam: {
      text: "FINALE THESTRAL - FAMIGLIA: Insieme nel codice e nella realtà. Siete in piedi tutti e tre davanti al terminale del loft. Il nodo domestico è protetto. Il verde resta, ma adesso appartiene a voi.\n\n[FAMIGLIA]",
      image: "images/shared/family2.jpg",
      choices: [{ t: "Torna al Menu", n: "menu" }]
    }
  }
};