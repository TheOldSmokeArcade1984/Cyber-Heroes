window.CH_LANGS = window.CH_LANGS || {};
window.CH_LANGS.fr = {
  ui: {
    title: "CYBER HEROES // OBLIVION - ULTRA",
    subtitle: "LEA · SMOKE · THESTRAL<br><span style='opacity:0.8'>PROTOCOLE OBLIVION — ULTRA</span>",
    sys1: "&gt; SYSTÈME ACTIF // NŒUD 1984",
    sys2: "&gt; THÈME CRT PHOSPHORE VERT ANNÉES 80",
    sys3: "&gt; VERSION ULTRA — ACCESSIBILITÉ ARIA &amp; TTS",
    statusReady: "Prêt. Choisissez votre parcours.",
    statusActive: "Session active détectée : ",
    btnResume: "REPRENDRE LA SESSION",
    btnLea: "PARCOURS LEA [TECHNIQUE / PATCH]",
    btnSmoke: "PARCOURS SMOKE [RUE / GARDE]",
    btnThestral: "PARCOURS THESTRAL [CODE / VISION]",
    btnLog: "CONSULTER LE JOURNAL",
    btnReset: "RÉINITIALISER LA MÉMOIRE",
    footer: "Version Ultra — histoire interactive, affichage adaptatif PC/Mobile, WAI-ARIA et synthèse vocale.",
    logTitle: "JOURNAL SYSTÈME",
    logClose: "← Fermer",
    logEmpty: "Aucune entrée dans le journal.",
    confirmReset: "Effacer toute la mémoire et le journal ?",
    resetDone: "Réinitialisation terminée.",
    backMenu: "← Menu principal",
    restartPath: "↻ Recommencer le parcours",
    promptPlaceholder: "tapez la commande",
    promptSend: "ENVOYER",
    promptOk: "✓ Commande acceptée : ",
    promptErr: "✗ Erreur. Attendu : ",
    ttsRead: "LIRE",
    ttsStop: "STOP",
    ttsAuto: "AUTO-VOIX",
    devicePc: "🖥 AFFICHAGE PC [2 COLONNES]",
    deviceMobile: "📱 AFFICHAGE MOBILE",
    skipToMain: "Aller au contenu principal",
    ariaToolbar: "Contrôles Audio et Langue",
    langLabel: "Choisir la langue",
    sceneAlt: "Illustration de la scène",
    choicesAria: "Choix disponibles",
    sysError: "Erreur système."
  },
  lea: {
    start: {
      text: "LEA : Le loft est baigné d'une lueur verte phosphorescente qui bat comme un cœur malade. Les lignes de balayage des écrans CRT dansent sur les murs de briques brutes, les câbles emmêlés et ta peau. Tu es Lea, la plus technicienne des trois. Tes doigts connaissent le clavier mieux que quiconque. Smoke se tient près de la porte, une cigarette brûlant lentement entre ses doigts. Thestral est assis devant l'écran principal, les yeux grands ouverts, lisant quelque chose que les autres ne peuvent pas voir.\n\nLe virus Oblivion ne se contente pas d'effacer des fichiers. Il efface le souvenir même qu'Internet ait jamais existé. Dans la rue, les gens laissent tomber leur téléphone et le fixent sans comprendre pourquoi ils le tenaient. Dans quelques heures, plus personne ne se souviendra qu'un réseau existait. Vous trois êtes toujours une famille. Mais le temps presse.\n\n« Nous devons les arrêter ensemble, » dis-tu à voix basse, les doigts déjà sur les touches. « Si le nœud domestique tombe, il ne restera que nous trois. »\n\nSmoke hoche la tête en silence. Thestral murmure : « Je vois la séquence. 0xNULL. Puis 0xVOID. Puis pire encore. Ne me laissez pas seul dans le code. »\n\n[Parcours Lea – technique et famille]",
      image: "images/lea/lea_portrait.jpg",
      choices: [
        { t: "Exécuter un scan approfondi du virus", n: "scan_done" },
        { t: "Analyse profonde immédiate de la séquence", n: "deep_analysis" },
        { t: "Renforcer d'abord le lien avec Smoke et Thestral", n: "night_watch" }
      ],
      prompt: { cmd: "scan --oblivion", n: "scan_done", hint: "PROMPT : tapez 'scan --oblivion' pour entrer dans le système et cartographier les nœuds." }
    },
    scan_done: {
      text: "Scan terminé. Le terminal explose en lignes de code vert : TROJAN.HALO9 détecté à 92.7%, serveur C2 actif sur 203.0.113.45. 47 nœuds infectés. Seulement 3 encore purs. Le schéma est impitoyable : 0xNULL efface l'histoire partagée. 0xVOID supprime le concept même de connexion. 0xOBLIVION rend l'oubli permanent.\n\n« On peut injecter un patch, » dis-tu après un long silence bercé par le bourdonnement des CRT. « Mais il nous faut une fenêtre de 60 secondes ouverte par un allié extérieur. Sinon le pare-feu se fermera à jamais. »\n\n[Analyse technique terminée. Le temps presse.]",
      image: "images/shared/virus_screen.jpg",
      choices: [
        { t: "Analyse profonde du système de fichiers corrompu", n: "deep_analysis" },
        { t: "Compiler le patch d'urgence sur le terminal", n: "compile_patch" },
        { t: "Veillée nocturne avec la famille", n: "night_watch" },
        { t: "Isoler les trois moniteurs et protéger le loft", n: "protect" }
      ]
    },
    deep_analysis: {
      text: "Analyse profonde du virus. Le terminal Unix montre le répertoire /usr/src qui se corrompt ligne par ligne tandis que le virus réécrit les permissions. 0xNULL efface les souvenirs partagés. 0xVOID isole chaque nœud. 0xOBLIVION scelle le tout.\n\nLea, tes doigts ne s'arrêtent jamais. Tu découvres une faille dans le noyau : si la famille reste unie et que la fenêtre est saisie à la seconde exacte, le virus peut être fragmenté de façon permanente.\n\n[Analyse profonde terminée.]",
      image: "images/shared/code_scroll.jpg",
      choices: [
        { t: "Préparer le code d'injection sur le terminal", n: "compile_patch" },
        { t: "Passer directement au contact avec l'allié", n: "ally_contact" },
        { t: "Protéger d'abord le nœud familial", n: "protect" }
      ]
    },
    compile_patch: {
      text: "Sous la vieille affiche de WARGAMES accrochée au mur de briques, tu te concentres sur le clavier mécanique. Dehors, la pluie strie la vitre sombre. Tu lances l'ancien environnement de débogage sur le lecteur disquette A:\\SYS pour écrire une routine de bas niveau qu'Oblivion ne pourra pas intercepter.\n\n[Environnement de compilation prêt.]",
      image: "images/lea/lea_hacking.jpg",
      choices: [
        { t: "Vérifier le dump hexadécimal sur A:\\SYS", n: "dos_debug" },
        { t: "Envoyer le signal à l'allié extérieur", n: "ally_contact" }
      ]
    },
    dos_debug: {
      text: "L'écran A:\\SYS\\> affiche les 6 fichiers système de 1987 et le dump hexadécimal à l'adresse 39B1:0200. La chaîne de test 'Hello, World!..' brille en phosphore vert : le noyau secondaire répond et n'a pas été touché par Oblivion.\n\n« On y est, » murmures-tu à Thestral. « Si nous injectons ce bloc pur pendant la fenêtre de 60 secondes, le virus ne pourra pas effacer la racine. »\n\n[Routine de bas niveau vérifiée.]",
      image: "images/shared/crt.jpg",
      choices: [{ t: "Contacter l'allié extérieur pour l'injection", n: "ally_contact" }]
    },
    night_watch: {
      text: "Quart de garde nocturne. Vous vous asseyez un instant sur le canapé du loft, baignés par la lueur verte du moniteur. Thestral tremble. Tu poses une main sur son épaule : « Tu n'es pas seul dans le code. » Il hoche la tête. Smoke vous regarde : « Dehors, c'est pire que je ne le pensais. Mais ici, nous sommes toujours nous. Toujours une famille. »\n\n[Veillée nocturne terminée. La famille tient bon.]",
      image: "images/shared/family_quiet.jpg",
      choices: [
        { t: "Retourner au clavier et préparer le patch", n: "compile_patch" },
        { t: "Contacter immédiatement l'allié extérieur", n: "ally_contact" }
      ]
    },
    ally_contact: {
      text: "Un faible signal arrive de l'extérieur. Un allié ouvre une fenêtre de 60 secondes : « Utilisez-la. Je ne sais pas combien de temps je tiendrai encore. »\n\nSous les poutres en bois, entourée de notes papier qu'aucun virus ne peut effacer, tu tapes les commandes avec une précision absolue. Thestral guide la séquence. Smoke surveille la porte. Le patch avance ligne après ligne. Quand la fenêtre se referme, Oblivion est fragmenté.\n\n[Contact allié exploité. Le climax approche.]",
      image: "images/lea/lea_typing.jpg",
      choices: [{ t: "Vers le climax final", n: "climax" }]
    },
    protect: {
      text: "Tu isoles complètement le nœud domestique devant les trois moniteurs CRT sous l'affiche DATALINK. Le pare-feu se verrouille d'un coup sec. Les trois écrans restent allumés uniquement pour vous, tandis que dehors les lumières des gratte-ciel s'éteignent.\n\n[Protection locale active. Le monde extérieur est perdu.]",
      image: "images/lea/loft_lea.jpg",
      choices: [{ t: "Aller à l'épilogue Famille", n: "finale_fam" }]
    },
    climax: {
      text: "Climax dans le loft. Les quatre moniteurs sur le long bureau brillent sous l'affiche '1984'. Vous êtes le dernier nœud stable dans un monde qui oublie. Tu dois décider s'il faut sacrifier la connexion locale pour ralentir Oblivion et laisser des fragments de mémoire dans le monde, ou la garder uniquement pour vous trois.\n\n[Choix final de Lea]",
      image: "images/shared/loft.jpg",
      choices: [
        { t: "Sacrifier la connexion pour une résistance fragmentée", n: "finale_res" },
        { t: "Protéger uniquement la famille et sceller le nœud", n: "finale_fam" }
      ]
    },
    finale_res: {
      text: "FIN LEA - RÉSISTANCE : Oblivion a été ralenti. Le web est fragmenté en milliers d'îles isolées. Vous êtes toujours debout tous les trois dans le loft devant le moniteur allumé, la lueur verte vivante sur vos visages.\n\n« Nous sommes humains, » dis-tu à voix basse. « Tant que nous nous souvenons, ils n'ont pas tout à fait gagné. »\n\n[RÉSISTANCE]\nLa famille reste. La mémoire reste.",
      image: "images/shared/family2.jpg",
      choices: [{ t: "Retour au Menu", n: "menu" }]
    },
    finale_fam: {
      text: "FIN LEA - FAMILLE : Le nœud est protégé et scellé. Dehors, dans les foyers de la ville, les familles fixent des écrans verts vides sans plus se souvenir de ce qu'était le réseau. Mais dans le loft, vous êtes sains et saufs, unis.\n\n[FAMILLE]\nEnsemble. En sécurité.",
      image: "images/shared/family.jpg",
      choices: [{ t: "Retour au Menu", n: "menu" }]
    }
  },
  smoke: {
    start: {
      text: "SMOKE : Tu es Smoke. La cigarette brûle lentement entre tes doigts alors que tu montes la garde dans le loft. La lueur verte des CRT éclaire ton visage et ton blouson de cuir. Lea est au terminal, Thestral fixe le code. Le virus Oblivion efface le souvenir d'Internet.\n\n« Je couvre l'extérieur, » dis-tu à voix basse. « Vous deux, restez dedans. Si tout s'effondre, il ne restera que nous trois. »\n\n[Parcours Smoke – protection et action]",
      image: "images/smoke/smoke_portrait.jpg",
      choices: [
        { t: "Observer la ville depuis la fenêtre du loft", n: "window_watch" },
        { t: "Descendre dans la rue pour patrouiller", n: "city_forget" },
        { t: "Long moment en famille dans le loft", n: "family_talk_long" },
        { t: "Rester de garde à la porte toute la nuit", n: "door" }
      ]
    },
    window_watch: {
      text: "Tu t'approches de la grande baie vitrée du loft, le cendrier posé sur le rebord. La fumée monte lentement tandis que tu observes les gratte-ciel dans la brume verte. Les fenêtres des immeubles s'éteignent par blocs entiers, comme si la ville perdait des pans de mémoire.\n\n[Observation en hauteur terminée]",
      image: "images/smoke/smoke_window.jpg",
      choices: [
        { t: "Descendre dans les rues du Quartier Financier", n: "city_forget" },
        { t: "Retourner garder la porte d'entrée", n: "door" }
      ]
    },
    city_forget: {
      text: "Tu marches sur les trottoirs mouillés devant Radioware, dans le Quartier Financier. Sur l'asphalte humide gît un gros téléphone portable abandonné : celui qui le tenait l'a laissé tomber et a continué à marcher dans son imperméable sans se retourner, incapable de se rappeler à quoi il servait.\n\n[Le symptôme de l'oubli est partout]",
      image: "images/shared/city_forget.jpg",
      choices: [
        { t: "Continuer vers le secteur Mirai / Hôtel", n: "city_mirai" },
        { t: "Couper par les ruelles secondaires vers le loft", n: "street_long" }
      ]
    },
    city_mirai: {
      text: "Tu t'enfonces sous les enseignes au néon vert de l'Hôtel et de la tour MIRAI 08. Autour de toi, la foule marche hébétée, le regard vide, serrant des feuilles de papier qu'elle ne sait plus déchiffrer.\n\n[Quartier central exploré]",
      image: "images/shared/city.jpg",
      choices: [
        { t: "Vérifier la place sous le panneau Datanet", n: "city_datanet" },
        { t: "Emprunter la ruelle latérale", n: "street_long" }
      ]
    },
    city_datanet: {
      text: "Sous l'écran géant de MIRAI CORP (+1.09, 48.32) et l'enseigne éteinte de DATANET, des dizaines de personnes restent immobiles dans la pénombre verte. Tu es le seul parmi eux à te souvenir encore du monde d'avant.\n\n[Reconnaissance extérieure terminée]",
      image: "images/shared/city2.jpg",
      choices: [{ t: "Rentrer par la ruelle arrière", n: "street_long" }]
    },
    street_long: {
      text: "Tu coupes par la ruelle mouillée éclairée par le néon vert 'ホテル' (Hôtel). Au sol gît un vieux magnétophone à cassettes abandonné. Tu rentres au loft à l'aube, trempé par la pluie, certain qu'une étincelle de résistance existe encore là-bas.\n\n[Longue exploration terminée]",
      image: "images/shared/alley.jpg",
      choices: [{ t: "Rentrer au loft pour le climax", n: "climax" }]
    },
    family_talk_long: {
      text: "Long moment en famille. Vous vous asseyez tous les trois sur le canapé du loft, le vert du moniteur comme seule lumière. Vous parlez de ce qui arrivera si le nœud tombe et promettez de rester ensemble quoi qu'il arrive dehors.\n\n[Lien profondément renforcé]",
      image: "images/shared/family_quiet.jpg",
      choices: [
        { t: "Prendre position à la porte pour la garde", n: "door" },
        { t: "Vers le climax", n: "climax" }
      ]
    },
    door: {
      text: "Tu restes debout devant la porte entrouverte pendant des heures, la cigarette entre les doigts, regardant les immeubles dans la brume verte au-delà du seuil. Personne n'entre. Le nœud reste sûr.\n\n[Protection active]",
      image: "images/smoke/smoke_door.jpg",
      choices: [{ t: "Faire le point avec Lea et Thestral", n: "smoke_brief" }]
    },
    smoke_brief: {
      text: "Tu te rapproches des terminaux tandis que le code vert défile sur le moniteur derrière toi. « Quoi que vous décidiez de faire avec ce patch, » dis-tu en regardant Lea et Thestral dans les yeux, « je suis avec vous jusqu'au bout. »\n\n[Prêts pour la décision finale]",
      image: "images/smoke/smoke.jpg",
      choices: [{ t: "Aller au climax", n: "climax" }]
    },
    climax: {
      text: "Climax dans le loft. Les quatre moniteurs sous l'affiche '1984' pulsent d'une lumière verte. Tu dois décider s'il faut sacrifier la connexion locale pour laisser des fragments de résistance dans le monde, ou vous protéger tous les trois à tout prix.\n\n[Choix final de Smoke]",
      image: "images/shared/loft.jpg",
      choices: [
        { t: "Résistance globale fragmentée", n: "finale_res" },
        { t: "Famille protégée dans le loft", n: "finale_fam" }
      ]
    },
    finale_res: {
      text: "FIN SMOKE - RÉSISTANCE : Vous avez ralenti Oblivion. Dans les ruelles de la ville, le graffiti vert 'INTERNET WAS REAL' brille encore sur le mur humide comme un phare pour quiconque commence à se souvenir.\n\n« Ça suffit, » dis-tu en écrasant ta dernière cigarette. « On a résisté. »\n\n[RÉSISTANCE]",
      image: "images/shared/graffiti.jpg",
      choices: [{ t: "Retour au Menu", n: "menu" }]
    },
    finale_fam: {
      text: "FIN SMOKE - FAMILLE : Le nœud est en sécurité. Vous trois ensemble, debout devant le dernier terminal allumé du loft. « Nous nous sommes choisis, » dis-tu. Et cela suffit.\n\n[FAMILLE]",
      image: "images/shared/family2.jpg",
      choices: [{ t: "Retour au Menu", n: "menu" }]
    }
  },
  thestral: {
    start: {
      text: "THESTRAL : Tu es Thestral. Tes yeux ne quittent pas l'écran. Le vert du code se reflète dans tes pupilles. Tu vois des séquences que Lea et Smoke ne voient pas : 0xNULL, 0xVOID, puis 0xOBLIVION. Tu ne veux pas rester seul dans le code.\n\nTu murmures à voix basse : « Ne me laissez pas seul. Je vois la séquence complète. Si nous ne l'interrompons pas à la troisième étape, elle devient permanente. »\n\n[Parcours Thestral – vision du code]",
      image: "images/thestral/thestral_portrait.jpg",
      choices: [
        { t: "Lancer le traçage direct de la séquence", n: "trace_done" },
        { t: "Analyser la sphère du noyau viral", n: "analyze" },
        { t: "Guider l'injection en lisant secret.txt avec Lea", n: "guide" },
        { t: "Chercher du soutien auprès de la famille", n: "family" }
      ],
      prompt: { cmd: "trace --sequence", n: "trace_done", hint: "PROMPT : tapez 'trace --sequence' pour tracer et confirmer la séquence." }
    },
    trace_done: {
      text: "Traçage terminé. Ton visage est à quelques centimètres du verre incurvé du CRT. La séquence est confirmée : 0xNULL efface, 0xVOID isole, 0xOBLIVION rend permanent. Plus tu regardes profondément, plus tu sens l'abîme du code t'aspirer.\n\n[Vision active. Le code est plus clair que jamais.]",
      image: "images/thestral/thestral.jpg",
      choices: [
        { t: "Pousser plus loin dans le côté sombre du code", n: "nightmare_vision" },
        { t: "Ouvrir le terminal de piratage avec Lea", n: "guide" },
        { t: "Guider directement vers le climax", n: "climax" }
      ]
    },
    nightmare_vision: {
      text: "Pendant un instant terrifiant, tu vois ce que tu deviendrais si tu restais piégé seul dans le flux de 0xOBLIVION : un spectre consumé par les phosphores verts, les yeux réduits à du pur code lumineux, les doigts fusionnés avec les touches.\n\nLa voix de Lea t'arrache à l'hallucination juste à temps, mais tu as vu la clé cachée dans le noyau.\n\n[Vision de l'abîme surmontée]",
      image: "images/thestral/thestral_hands.jpg",
      choices: [
        { t: "Analyser le noyau sphérique d'Oblivion", n: "analyze" },
        { t: "Revenir à l'ancrage de la famille", n: "family" }
      ]
    },
    analyze: {
      text: "Analyse profonde. La structure tridimensionnelle d'Oblivion apparaît à l'écran : une sphère pulsante de filaments verts. Tu découvres les failles dans la séquence : elle peut être fragmentée si la famille reste unie.\n\n[Analyse terminée]",
      image: "images/shared/virus.jpg",
      choices: [
        { t: "Passer au terminal pour extraire secret.txt", n: "guide" },
        { t: "Vers le climax", n: "climax" }
      ]
    },
    guide: {
      text: "Tu guides Lea dans l'injection sur 1980s-terminal. Vous exécutez 'cat secret.txt' et la clé apparaît à l'écran : ACCESS CODE: 7X9K-L3M8-2P4Q — AUTH LEVEL: OMEGA. Oblivion ralentit et se fragmente.\n\n[Guidage réussi]",
      image: "images/shared/hacking.jpg",
      choices: [{ t: "Procéder au climax", n: "climax" }],
      prompt: { cmd: "7x9k-l3m8-2p4q", n: "climax", hint: "PROMPT OPTIONNEL : tapez l'ACCESS CODE visible à l'écran ('7X9K-L3M8-2P4Q') pour forcer le niveau OMEGA." }
    },
    family: {
      text: "Vous vous asseyez ensemble sur le canapé dans l'obscurité du loft. Lea reste à tes côtés, Smoke observe le moniteur en silence. Tu n'es pas seul dans le code. La chaleur humaine renforce ton esprit plus que n'importe quel pare-feu.\n\n[Soutien obtenu]",
      image: "images/shared/family_quiet.jpg",
      choices: [{ t: "Affronter le climax", n: "climax" }]
    },
    climax: {
      text: "Climax dans le loft. Sur le moniteur beige, tout le code disparaît, ne laissant qu'un unique curseur rectangulaire vert clignotant dans le vide. Tu dois décider du destin du réseau. Smoke et Lea attendent ton signal.\n\n[Choix final de Thestral]",
      image: "images/shared/empty_crt.jpg",
      choices: [
        { t: "Résistance – fragmenter /INFECT.EXE et laisser des traces dans le monde", n: "finale_res" },
        { t: "Famille – sceller le nœud et ne protéger que nous trois", n: "finale_fam" }
      ]
    },
    finale_res: {
      text: "FIN THESTRAL - RÉSISTANCE : Tu lances le traçage inverse sur /INFECT.EXE (CODE: 0xA7F3). À 68% du trace, les blocs hexadécimaux de la mémoire ('4D 65 6D 6F 72 79' - Memory) sont sauvés. Oblivion a été ralenti. Tu n'es plus seul.\n\n[RÉSISTANCE]",
      image: "images/shared/virus2.jpg",
      choices: [{ t: "Retour au Menu", n: "menu" }]
    },
    finale_fam: {
      text: "FIN THESTRAL - FAMILLE : Ensemble dans le code et dans la réalité. Vous êtes debout tous les trois devant le terminal du loft. Le nœud domestique est protégé. Le vert demeure, mais désormais il vous appartient.\n\n[FAMILLE]",
      image: "images/shared/family2.jpg",
      choices: [{ t: "Retour au Menu", n: "menu" }]
    }
  }
};