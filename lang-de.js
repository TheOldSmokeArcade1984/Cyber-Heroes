window.CH_LANGS = window.CH_LANGS || {};
window.CH_LANGS.de = {
  ui: {
    title: "CYBER HEROES // OBLIVION - ULTRA",
    subtitle: "LEA · SMOKE · THESTRAL<br><span style='opacity:0.8'>OBLIVION-PROTOKOLL — ULTRA</span>",
    sys1: "&gt; SYSTEM AKTIV // KNOTEN 1984",
    sys2: "&gt; 80er GRÜNPHOSPHOR-CRT-MODUS",
    sys3: "&gt; ULTRA-VERSION — ARIA-BARRIEREFREIHEIT &amp; TTS",
    statusReady: "Bereit. Wähle deinen Pfad.",
    statusActive: "Aktive Sitzung erkannt: ",
    btnResume: "SITZUNG FORTSETZEN",
    btnLea: "PFAD LEA [TECHNIK / PATCH]",
    btnSmoke: "PFAD SMOKE [STRASSE / WACHE]",
    btnThestral: "PFAD THESTRAL [CODE / VISION]",
    btnLog: "SYSTEMLOG ANSEHEN",
    btnReset: "SPEICHER ZURÜCKSETZEN",
    footer: "Ultra-Version — interaktive Geschichte, adaptives PC-/Mobil-Layout, WAI-ARIA und Sprachausgabe.",
    logTitle: "SYSTEMPROTOKOLL",
    logClose: "← Schließen",
    logEmpty: "Keine Einträge im Protokoll.",
    confirmReset: "Gesamten Speicher und das Protokoll löschen?",
    resetDone: "Speicher zurückgesetzt.",
    backMenu: "← Hauptmenü",
    restartPath: "↻ Pfad neu starten",
    promptPlaceholder: "Befehl eingeben",
    promptSend: "SENDEN",
    promptOk: "✓ Befehl akzeptiert: ",
    promptErr: "✗ Fehler. Erwartet: ",
    ttsRead: "VORLESEN",
    ttsStop: "STOPP",
    ttsAuto: "AUTO-TTS",
    devicePc: "🖥 PC-LAYOUT [2 SPALTEN]",
    deviceMobile: "📱 MOBIL-LAYOUT",
    skipToMain: "Zum Hauptinhalt springen",
    ariaToolbar: "Audio- und Sprachsteuerung",
    langLabel: "Sprache wählen",
    sceneAlt: "Szenenbild",
    choicesAria: "Verfügbare Entscheidungen",
    sysError: "Systemfehler."
  },
  lea: {
    start: {
      text: "LEA: Das Loft ist in ein phosphoreszierendes grünes Leuchten getaucht, das wie ein krankes Herz pulsiert. Die Scanlines der CRT-Monitore tanzen über rohe Ziegelwände, verknotete Kabel und deine Haut. Du bist Lea, die Technikerin von euch dreien. Deine Finger kennen die Tastatur besser als alles andere auf der Welt. Smoke steht an der Tür, eine Zigarette glimmt langsam zwischen seinen Fingern. Thestral sitzt vor dem Hauptbildschirm, die Augen weit geöffnet, und liest etwas, das andere nicht sehen können.\n\nDas Oblivion-Virus löscht nicht nur Dateien. Es löscht die Erinnerung daran, dass das Internet jemals existiert hat. Menschen auf der Straße lassen ihre Telefone fallen und starren sie an, ohne zu verstehen, warum sie sie in der Hand hielten. In wenigen Stunden wird sich niemand mehr an ein Netzwerk erinnern. Ihr drei seid immer noch eine Familie. Aber die Zeit läuft ab.\n\n„Wir müssen sie gemeinsam aufhalten“, sagst du leise, die Finger bereits auf den Tasten. „Wenn unser Heimknoten fällt, bleiben nur noch wir drei.“\n\nSmoke nickt schweigend. Thestral murmelt: „Ich sehe die Sequenz. 0xNULL. Dann 0xVOID. Dann etwas Schlimmeres. Lasst mich nicht allein im Code.“\n\n[Pfad Lea – Technik und Familie]",
      image: "images/lea/lea_portrait.jpg",
      choices: [
        { t: "Tiefenscan des Virus ausführen", n: "scan_done" },
        { t: "Sofortige Tiefenanalyse der Sequenz", n: "deep_analysis" },
        { t: "Zuerst das Band zu Smoke und Thestral stärken", n: "night_watch" }
      ],
      prompt: { cmd: "scan --oblivion", n: "scan_done", hint: "PROMPT: Tippe 'scan --oblivion', um in das System einzudringen und aktive Knoten zu kartieren." }
    },
    scan_done: {
      text: "Scan abgeschlossen. Das Terminal explodiert in grünem Code: TROJAN.HALO9 zu 92.7% erkannt, C2-Server aktiv auf 203.0.113.45. 47 infizierte Knoten. Nur noch 3 rein. Das Muster ist gnadenlos: 0xNULL löscht die gemeinsame Geschichte. 0xVOID entfernt das Konzept von Verbindung. 0xOBLIVION macht das Vergessen dauerhaft.\n\n„Wir können einen Patch injizieren“, sagst du nach langen Minuten. „Aber wir brauchen ein 60-Sekunden-Fenster von einem externen Verbündeten. Sonst schließt sich die Firewall für immer.“\n\n[Technische Analyse abgeschlossen. Die Zeit drängt.]",
      image: "images/shared/virus_screen.jpg",
      choices: [
        { t: "Tiefenanalyse des beschädigten Dateisystems", n: "deep_analysis" },
        { t: "Notfall-Patch am Terminal kompilieren", n: "compile_patch" },
        { t: "Nachtwache mit der Familie", n: "night_watch" },
        { t: "Drei Monitore isolieren und das Loft schützen", n: "protect" }
      ]
    },
    deep_analysis: {
      text: "Tiefenanalyse des Virus. Das Unix-Terminal zeigt, wie das Verzeichnis /usr/src Zeile für Zeile beschädigt wird, während das Virus die Systemberechtigungen überschreibt. 0xNULL löscht gemeinsame Erinnerungen. 0xVOID isoliert jeden Knoten. 0xOBLIVION versiegelt alles.\n\nLea, deine Finger stehen niemals still. Du entdeckst eine Schwachstelle im Kernel: Wenn die Familie zusammenhält und das Zeitfenster im exakten Moment genutzt wird, kann das Virus dauerhaft fragmentiert werden.\n\n[Tiefenanalyse abgeschlossen.]",
      image: "images/shared/code_scroll.jpg",
      choices: [
        { t: "Injektionscode am Terminal vorbereiten", n: "compile_patch" },
        { t: "Direkt zum Kontakt mit dem Verbündeten übergehen", n: "ally_contact" },
        { t: "Zuerst den Familienknoten schützen", n: "protect" }
      ]
    },
    compile_patch: {
      text: "Unter dem alten WARGAMES-Poster an der Ziegelwand konzentrierst du dich auf die mechanische Tastatur. Draußen zieht der Regen Streifen über das dunkle Glas. Du startest die alte Disketten-Debug-Umgebung auf Laufwerk A:\\SYS, um eine Low-Level-Routine zu schreiben, die Oblivion nicht abfangen kann.\n\n[Kompilierungsumgebung bereit.]",
      image: "images/lea/lea_hacking.jpg",
      choices: [
        { t: "Hex-Dump auf A:\\SYS überprüfen", n: "dos_debug" },
        { t: "Signal an den externen Verbündeten senden", n: "ally_contact" }
      ]
    },
    dos_debug: {
      text: "Der Bildschirm A:\\SYS\\> zeigt die 6 Systemdateien von 1987 und den Hex-Dump an Adresse 39B1:0200. Der Teststring 'Hello, World!..' leuchtet in grünem Phosphor: Der sekundäre Kernel antwortet und wurde von Oblivion nicht berührt.\n\n„Wir sind soweit“, flüsterst du Thestral zu. „Wenn wir diesen reinen Block während des 60-Sekunden-Fensters injizieren, kann das Virus das Wurzelverzeichnis nicht löschen.“\n\n[Low-Level-Routine verifiziert.]",
      image: "images/shared/crt.jpg",
      choices: [{ t: "Externen Verbündeten für die Injektion kontaktieren", n: "ally_contact" }]
    },
    night_watch: {
      text: "Nachtwache. Ihr sitzt gemeinsam auf dem Sofa im Loft, getaucht in das grüne Licht des Monitors. Thestral zittert. Du legst ihm eine Hand auf die Schulter: „Du bist nicht allein im Code.“ Er nickt. Smoke sieht euch an: „Draußen ist es schlimmer, als ich dachte. Aber hier drinnen sind wir immer noch wir. Immer noch eine Familie.“\n\n[Nachtwache beendet. Die Familie hält zusammen.]",
      image: "images/shared/family_quiet.jpg",
      choices: [
        { t: "Zurück an die Tastatur und den Patch vorbereiten", n: "compile_patch" },
        { t: "Sofort den externen Verbündeten kontaktieren", n: "ally_contact" }
      ]
    },
    ally_contact: {
      text: "Ein schwaches Signal kommt von draußen. Ein Verbündeter öffnet ein 60-Sekunden-Fenster: „Nutzt es. Ich weiß nicht, wie lange ich noch durchhalte.“\n\nUnter den Holzbalken, umgeben von Papiernotizen, die kein Virus löschen kann, tippst du die Befehle mit absoluter Präzision. Thestral leitet die Sequenz. Smoke bewacht die Tür. Der Patch schreitet Zeile für Zeile voran. Als sich das Fenster schließt, ist Oblivion fragmentiert.\n\n[Verbündetenkontakt genutzt. Der Höhepunkt naht.]",
      image: "images/lea/lea_typing.jpg",
      choices: [{ t: "Zum finalen Höhepunkt", n: "climax" }]
    },
    protect: {
      text: "Du isolierst den Heimknoten vollständig vor den drei CRT-Monitoren unter dem DATALINK-Poster. Die Firewall schließt sich mit einem trockenen Klicken. Die drei Bildschirme leuchten nur noch für euch, während draußen die Lichter der Wolkenkratzer erlöschen.\n\n[Lokaler Schutz aktiv. Die Außenwelt ist verloren.]",
      image: "images/lea/loft_lea.jpg",
      choices: [{ t: "Zum Familien-Epilog", n: "finale_fam" }]
    },
    climax: {
      text: "Höhepunkt im Loft. Die vier Monitore auf dem langen Schreibtisch leuchten unter dem '1984'-Poster. Ihr seid der letzte stabile Knoten in einer vergessenden Welt. Du musst entscheiden, ob du die lokale Verbindung opferst, um Oblivion weiter zu bremsen und Erinnerungsfragmente in der Welt zu hinterlassen, oder sie nur für euch drei bewahrst.\n\n[Leas letzte Entscheidung]",
      image: "images/shared/loft.jpg",
      choices: [
        { t: "Verbindung für einen fragmentierten Widerstand opfern", n: "finale_res" },
        { t: "Nur die Familie schützen und den Knoten versiegeln", n: "finale_fam" }
      ]
    },
    finale_res: {
      text: "ENDE LEA - WIDERSTAND: Oblivion wurde verlangsamt. Das Netz ist in tausende isolierte Inseln zersplittert. Ihr drei steht immer noch im Loft vor dem leuchtenden Monitor, das Grün lebendig auf euren Gesichtern.\n\n„Wir sind Menschen“, sagst du leise. „Solange wir uns erinnern, haben sie nicht ganz gewonnen.“\n\n[WIDERSTAND]\nDie Familie bleibt. Die Erinnerung bleibt.",
      image: "images/shared/family2.jpg",
      choices: [{ t: "Zurück zum Menü", n: "menu" }]
    },
    finale_fam: {
      text: "ENDE LEA - FAMILIE: Der Knoten ist geschützt und versiegelt. Draußen in den Häusern der Stadt starren Familien auf leere grüne Bildschirme, ohne sich an das Netz zu erinnern. Aber im Loft seid ihr drei sicher und vereint.\n\n[FAMILIE]\nZusammen. In Sicherheit.",
      image: "images/shared/family.jpg",
      choices: [{ t: "Zurück zum Menü", n: "menu" }]
    }
  },
  smoke: {
    start: {
      text: "SMOKE: Du bist Smoke. Die Zigarette glimmt langsam zwischen deinen Fingern, während du im Loft Wache hältst. Das grüne CRT-Licht beleuchtet dein Gesicht und deine Lederjacke. Lea sitzt am Terminal, Thestral starrt in den Code. Das Oblivion-Virus löscht die Erinnerung an das Internet.\n\n„Ich sichere nach draußen ab“, sagst du mit tiefer Stimme. „Ihr zwei bleibt drinnen. Wenn alles fällt, bleiben nur wir drei.“\n\n[Pfad Smoke – Schutz und Aktion]",
      image: "images/smoke/smoke_portrait.jpg",
      choices: [
        { t: "Die Stadt vom Fenster des Lofts aus beobachten", n: "window_watch" },
        { t: "Auf die Straße gehen und die Viertel patrouillieren", n: "city_forget" },
        { t: "Langer Familienmoment im Loft", n: "family_talk_long" },
        { t: "Die ganze Nacht an der Tür Wache halten", n: "door" }
      ]
    },
    window_watch: {
      text: "Du trittst an das große Loftfenster, der Aschenbecher steht auf dem Sims. Der Rauch steigt langsam auf, während du die Wolkenkratzer im grünen Dunst beobachtest. Die Fenster der Gebäude erlöschen blockweise, als würde die Stadt Stücke ihrer Erinnerung verlieren.\n\n[Beobachtung von oben abgeschlossen]",
      image: "images/smoke/smoke_window.jpg",
      choices: [
        { t: "Hinunter in die Straßen des Finanzviertels gehen", n: "city_forget" },
        { t: "Zurückkehren und die Eingangstür bewachen", n: "door" }
      ]
    },
    city_forget: {
      text: "Du gehst über nasse Gehwege vor Radioware im Finanzviertel. Auf dem feuchten Asphalt liegt ein großes, verlassenes Mobiltelefon: Wer es hielt, hat es fallen lassen und ist im Trenchcoat weitergegangen, unfähig sich zu erinnern, wozu es diente.\n\n[Das Symptom des Vergessens ist überall]",
      image: "images/shared/city_forget.jpg",
      choices: [
        { t: "Weiter zum Sektor Mirai / Hotel", n: "city_mirai" },
        { t: "Durch die Seitenstraßen zurück zum Loft", n: "street_long" }
      ]
    },
    city_mirai: {
      text: "Du gehst unter den grünen Neonschildern des Hotels und des MIRAI 08-Turms hindurch. Um dich herum irrt die Menge mit leeren Augen umher und klammert sich an Papierblätter, die sie nicht mehr entziffern kann.\n\n[Zentraler Bezirk erkundet]",
      image: "images/shared/city.jpg",
      choices: [
        { t: "Den Platz unter der Datanet-Tafel prüfen", n: "city_datanet" },
        { t: "Die Seitengasse nehmen", n: "street_long" }
      ]
    },
    city_datanet: {
      text: "Unter dem riesigen Bildschirm der MIRAI CORP (+1.09, 48.32) und dem dunklen DATANET-Schild stehen Dutzende Menschen reglos im grünen Dämmerlicht. Du bist der Einzige unter ihnen, der sich noch an die Welt von vorher erinnert.\n\n[Außenaufklärung abgeschlossen]",
      image: "images/shared/city2.jpg",
      choices: [{ t: "Über die hintere Gasse zurückkehren", n: "street_long" }]
    },
    street_long: {
      text: "Du kürzt durch die nasse Gasse ab, die vom grünen Neonlicht 'ホテル' (Hotel) erhellt wird. Auf dem Boden liegt ein alter Kassettenrekorder. Im Morgengrauen kehrst du regendurchtränkt ins Loft zurück, sicher, dass da draußen noch ein Funke Widerstand existiert.\n\n[Lange Erkundung abgeschlossen]",
      image: "images/shared/alley.jpg",
      choices: [{ t: "Für den Höhepunkt ins Loft zurückkehren", n: "climax" }]
    },
    family_talk_long: {
      text: "Langer Familienmoment. Ihr sitzt zu dritt auf dem Sofa im Loft, das Grün des Monitors als einziges Licht. Ihr sprecht darüber, was passiert, wenn der Knoten fällt, und versprecht, zusammenzubleiben, egal was draußen geschieht.\n\n[Band tief gestärkt]",
      image: "images/shared/family_quiet.jpg",
      choices: [
        { t: "Position an der Tür für die Wache einnehmen", n: "door" },
        { t: "Zum Höhepunkt", n: "climax" }
      ]
    },
    door: {
      text: "Stundenlang stehst du vor der halb geöffneten Tür, die Zigarette zwischen den Fingern, und blickst auf die Gebäude im grünen Nebel jenseits der Schwelle. Niemand kommt herein. Der Knoten bleibt sicher.\n\n[Schutz aktiv]",
      image: "images/smoke/smoke_door.jpg",
      choices: [{ t: "Lagebesprechung mit Lea und Thestral", n: "smoke_brief" }]
    },
    smoke_brief: {
      text: "Du trittst zurück an die Terminals, während grüner Code über den Monitor hinter dir läuft. „Was auch immer ihr mit diesem Patch vorhabt“, sagst du und siehst Lea und Thestral in die Augen, „ich bin bis zum Ende bei euch.“\n\n[Bereit für die letzte Entscheidung]",
      image: "images/smoke/smoke.jpg",
      choices: [{ t: "Zum Höhepunkt", n: "climax" }]
    },
    climax: {
      text: "Höhepunkt im Loft. Die vier Monitore unter dem '1984'-Poster pulsieren in grünem Licht. Du musst entscheiden, ob ihr die lokale Verbindung opfert, um Fragmente des Widerstands in der Welt zu hinterlassen, oder nur euch drei um jeden Preis schützt.\n\n[Smokes letzte Entscheidung]",
      image: "images/shared/loft.jpg",
      choices: [
        { t: "Fragmentierter globaler Widerstand", n: "finale_res" },
        { t: "Geschützte Familie im Loft", n: "finale_fam" }
      ]
    },
    finale_res: {
      text: "ENDE SMOKE - WIDERSTAND: Ihr habt Oblivion verlangsamt. In den Gassen der Stadt leuchtet das grüne Graffiti 'INTERNET WAS REAL' noch immer auf der nassen Mauer wie ein Leuchtfeuer für jeden, der sich zu erinnern beginnt.\n\n„Genug“, sagst du und drückst deine letzte Zigarette aus. „Wir haben Widerstand geleistet.“\n\n[WIDERSTAND]",
      image: "images/shared/graffiti.jpg",
      choices: [{ t: "Zurück zum Menü", n: "menu" }]
    },
    finale_fam: {
      text: "ENDE SMOKE - FAMILIE: Der Knoten ist sicher. Ihr drei zusammen, stehend vor dem letzten leuchtenden Terminal im Loft. „Wir haben uns für uns entschieden“, sagst du. Und das reicht.\n\n[FAMILIE]",
      image: "images/shared/family2.jpg",
      choices: [{ t: "Zurück zum Menü", n: "menu" }]
    }
  },
  thestral: {
    start: {
      text: "THESTRAL: Du bist Thestral. Deine Augen lassen den Bildschirm nicht los. Das Grün des Codes spiegelt sich in deinen Pupillen. Du siehst Sequenzen, die Lea und Smoke nicht sehen: 0xNULL, 0xVOID, dann 0xOBLIVION. Du willst nicht allein im Code bleiben.\n\nDu murmelst leise: „Lasst mich nicht allein. Ich sehe die vollständige Sequenz. Wenn wir sie beim dritten Schritt nicht unterbrechen, wird sie dauerhaft.“\n\n[Pfad Thestral – Code-Vision]",
      image: "images/thestral/thestral_portrait.jpg",
      choices: [
        { t: "Direkte Sequenzverfolgung starten", n: "trace_done" },
        { t: "Die Sphäre des Viruskern analysieren", n: "analyze" },
        { t: "Injektion durch Lesen von secret.txt mit Lea leiten", n: "guide" },
        { t: "Rückhalt bei der Familie suchen", n: "family" }
      ],
      prompt: { cmd: "trace --sequence", n: "trace_done", hint: "PROMPT: Tippe 'trace --sequence', um die Sequenz zu verfolgen und zu bestätigen." }
    },
    trace_done: {
      text: "Verfolgung abgeschlossen. Dein Gesicht ist nur Zentimeter vom gewölbten CRT-Glas entfernt. Die Sequenz ist bestätigt: 0xNULL löscht, 0xVOID isoliert, 0xOBLIVION macht es dauerhaft. Je tiefer du blickst, desto mehr zieht dich der Abgrund des Codes hinein.\n\n[Vision aktiv. Der Code ist klarer als je zuvor.]",
      image: "images/thestral/thestral.jpg",
      choices: [
        { t: "Weiter in die dunkle Seite des Codes vordringen", n: "nightmare_vision" },
        { t: "Hacking-Terminal mit Lea öffnen", n: "guide" },
        { t: "Direkt zum Höhepunkt führen", n: "climax" }
      ]
    },
    nightmare_vision: {
      text: "Für einen schrecklichen Moment siehst du, was aus dir würde, wenn du allein im Strom von 0xOBLIVION gefangen bliebst: ein vom grünen Phosphor verzehrtes Gespenst, Augen reduziert auf reinen leuchtenden Code, blasse Finger mit den Tasten verschmolzen.\n\nLeas Stimme reißt dich im letzten Moment aus der Halluzination, aber du hast den verborgenen Schlüssel im Kern gesehen.\n\n[Vision des Abgrunds überwunden]",
      image: "images/thestral/thestral_hands.jpg",
      choices: [
        { t: "Den kugelförmigen Kern von Oblivion analysieren", n: "analyze" },
        { t: "Zum Rettungsanker der Familie zurückkehren", n: "family" }
      ]
    },
    analyze: {
      text: "Tiefenanalyse. Auf dem Bildschirm erscheint die dreidimensionale Struktur von Oblivion: eine pulsierende Kugel aus grünen Filamenten. Du entdeckst die Risse in der Sequenz: Sie kann fragmentiert werden, wenn die Familie zusammenhält.\n\n[Analyse abgeschlossen]",
      image: "images/shared/virus.jpg",
      choices: [
        { t: "Zum Terminal wechseln, um secret.txt zu extrahieren", n: "guide" },
        { t: "Zum Höhepunkt", n: "climax" }
      ]
    },
    guide: {
      text: "Du leitest Lea bei der Injektion auf 1980s-terminal. Ihr führt 'cat secret.txt' aus und auf dem Bildschirm erscheint der Schlüssel: ACCESS CODE: 7X9K-L3M8-2P4Q — AUTH LEVEL: OMEGA. Oblivion verlangsamt sich und zersplittert.\n\n[Führung erfolgreich]",
      image: "images/shared/hacking.jpg",
      choices: [{ t: "Weiter zum Höhepunkt", n: "climax" }],
      prompt: { cmd: "7x9k-l3m8-2p4q", n: "climax", hint: "OPTIONALER PROMPT: Tippe den auf dem Bildschirm sichtbaren ACCESS CODE ('7X9K-L3M8-2P4Q'), um Level OMEGA zu erzwingen." }
    },
    family: {
      text: "Ihr sitzt zusammen auf dem Sofa im dunklen Loft. Lea bleibt an deiner Seite, Smoke beobachtet schweigend den Monitor. Du bist nicht allein im Code. Menschliche Wärme stärkt deinen Geist mehr als jede Firewall.\n\n[Unterstützung erhalten]",
      image: "images/shared/family_quiet.jpg",
      choices: [{ t: "Dem Höhepunkt stellen", n: "climax" }]
    },
    climax: {
      text: "Höhepunkt im Loft. Auf dem beigen Monitor verschwindet der gesamte Code und hinterlässt nur einen einzigen grünen rechteckigen Cursor, der im Nichts blinkt. Du musst über das Schicksal des Netzes entscheiden. Smoke und Lea warten auf dein Zeichen.\n\n[Thestrals letzte Entscheidung]",
      image: "images/shared/empty_crt.jpg",
      choices: [
        { t: "Widerstand – /INFECT.EXE fragmentieren und Spuren hinterlassen", n: "finale_res" },
        { t: "Familie – den Knoten versiegeln und nur uns drei schützen", n: "finale_fam" }
      ]
    },
    finale_res: {
      text: "ENDE THESTRAL - WIDERSTAND: Du startest die Rückverfolgung auf /INFECT.EXE (CODE: 0xA7F3). Bei 68% Trace werden die hexadezimalen Speicherblöcke ('4D 65 6D 6F 72 79' - Memory) gerettet. Oblivion wurde gebremst. Du bist nicht mehr allein.\n\n[WIDERSTAND]",
      image: "images/shared/virus2.jpg",
      choices: [{ t: "Zurück zum Menü", n: "menu" }]
    },
    finale_fam: {
      text: "ENDE THESTRAL - FAMILIE: Vereint im Code und in der Realität. Ihr drei steht vor dem Terminal im Loft. Der Heimknoten ist geschützt. Das Grün bleibt, aber jetzt gehört es euch.\n\n[FAMILIE]",
      image: "images/shared/family2.jpg",
      choices: [{ t: "Zurück zum Menü", n: "menu" }]
    }
  }
};