window.CH_LANGS = window.CH_LANGS || {};
window.CH_LANGS.en = {
  ui: {
    title: "CYBER HEROES // OBLIVION - ULTRA",
    subtitle: "LEA · SMOKE · THESTRAL<br><span style='opacity:0.8'>OBLIVION PROTOCOL — ULTRA</span>",
    sys1: "&gt; SYSTEM ACTIVE // NODE 1984",
    sys2: "&gt; 80s GREEN PHOSPHOR CRT THEME",
    sys3: "&gt; ULTRA VERSION — ARIA ACCESSIBILITY &amp; TTS",
    statusReady: "Ready. Choose your path.",
    statusActive: "Active session detected: ",
    btnResume: "RESUME SESSION",
    btnLea: "LEA'S PATH [TECH / PATCH]",
    btnSmoke: "SMOKE'S PATH [STREETS / GUARD]",
    btnThestral: "THESTRAL'S PATH [CODE / VISION]",
    btnLog: "VIEW SYSTEM LOG",
    btnReset: "RESET MEMORY",
    footer: "Ultra Version — interactive story, adaptive PC/Mobile layout, WAI-ARIA and voice synthesis.",
    logTitle: "SYSTEM LOG",
    logClose: "← Close",
    logEmpty: "No entries in the log.",
    confirmReset: "Wipe all memory and system logs?",
    resetDone: "Memory reset complete.",
    backMenu: "← Main Menu",
    restartPath: "↻ Restart path",
    promptPlaceholder: "type command here",
    promptSend: "SEND",
    promptOk: "✓ Command accepted: ",
    promptErr: "✗ Error. Expected: ",
    ttsRead: "READ",
    ttsStop: "STOP",
    ttsAuto: "AUTO-TTS",
    devicePc: "🖥 PC LAYOUT [2 COLUMNS]",
    deviceMobile: "📱 MOBILE LAYOUT",
    skipToMain: "Skip to main content",
    ariaToolbar: "Audio and Language Controls",
    langLabel: "Select language",
    sceneAlt: "Scene illustration",
    choicesAria: "Available choices",
    sysError: "System error."
  },
  lea: {
    start: {
      text: "LEA: The loft is bathed in a phosphor-green glow pulsing like an ailing heart. CRT scanlines dance across raw brick walls, tangled cables, and your skin. You are Lea, the most technical of the three. Your fingers know the keyboard better than anything else in the world. Smoke stands by the door, a cigarette burning slowly between his fingers, smoke mingling with the green light. Thestral sits before the main screen, eyes wide, barely blinking, reading something others cannot see.\n\nThe Oblivion virus doesn't just delete files. It erases the very memory that the internet ever existed. People on the street drop their phones and stare at them without understanding why they were holding them. Within hours, if we don't act, no one will remember a network ever existed. The three of you are still a family. But time is running out.\n\n'We have to stop them together,' you say softly, fingers already on the keys. 'They call themselves masters of time. If our home node falls, only the three of us remain. And if we fall, no one will be left to remember what we were.'\n\nSmoke nods silently. Thestral murmurs: 'I see the sequence. 0xNULL. Then 0xVOID. Then something worse. Don't leave me alone in the code.'\n\n[Lea's Path – technical focus and family]",
      image: "images/lea/lea_portrait.jpg",
      choices: [
        { t: "Run a deep scan on the virus", n: "scan_done" },
        { t: "Immediate deep analysis of the sequence", n: "deep_analysis" },
        { t: "Strengthen the bond with Smoke and Thestral first", n: "night_watch" }
      ],
      prompt: { cmd: "scan --oblivion", n: "scan_done", hint: "PROMPT: type 'scan --oblivion' to enter the system and map active nodes." }
    },
    scan_done: {
      text: "Scan complete. The terminal erupts in lines of fast-scrolling green code: TROJAN.HALO9 detected at 92.7%, C2 server active at 203.0.113.45. 47 infected nodes. Only 3 still pure. The pattern is ruthless: 0xNULL erases shared history. 0xVOID removes the very concept of connection. 0xOBLIVION makes the oblivion permanent.\n\n'We can inject a patch,' you say after long minutes broken only by the CRT hum. 'But we need a 60-second window from an outside ally. Otherwise the firewall closes and we stay isolated forever.'\n\n[Technical analysis complete. Time is running out.]",
      image: "images/shared/virus_screen.jpg",
      choices: [
        { t: "Deep analysis of the corrupted file system", n: "deep_analysis" },
        { t: "Compile the emergency patch at the terminal", n: "compile_patch" },
        { t: "Night watch with the family", n: "night_watch" },
        { t: "Isolate the three monitors now and protect the loft", n: "protect" }
      ]
    },
    deep_analysis: {
      text: "Deep virus analysis. The Unix terminal shows the /usr/src directory corrupting line by line as the virus rewrites system permissions. 0xNULL erases shared memories of conversations and websites. 0xVOID isolates every node. 0xOBLIVION seals everything.\n\nLea, your fingers never stop. You discover a kernel weakness: if the family stays united and the window is used at the exact moment, the virus can be permanently fragmented.\n\n[Deep analysis complete.]",
      image: "images/shared/code_scroll.jpg",
      choices: [
        { t: "Prepare the injection code on the terminal", n: "compile_patch" },
        { t: "Proceed directly to ally contact", n: "ally_contact" },
        { t: "Protect the family node first", n: "protect" }
      ]
    },
    compile_patch: {
      text: "Underneath the old WARGAMES poster on the brick wall, you focus on the mechanical keyboard. Outside the window, rain streaks the dark glass. You boot the old floppy debug environment on drive A:\\SYS to write a low-level routine Oblivion cannot intercept.\n\n[Compilation environment ready.]",
      image: "images/lea/lea_hacking.jpg",
      choices: [
        { t: "Verify hex dump on A:\\SYS", n: "dos_debug" },
        { t: "Send signal to the outside ally", n: "ally_contact" }
      ]
    },
    dos_debug: {
      text: "The A:\\SYS\\> screen displays the 6 system files from 1987 and the hex dump at address 39B1:0200. The test string 'Hello, World!..' glows in green phosphor: the secondary kernel responds and hasn't been touched by Oblivion.\n\n'We're ready,' you whisper to Thestral. 'If we inject this pure block during the 60-second window, the virus won't be able to wipe the root.'\n\n[Low-level routine verified.]",
      image: "images/shared/crt.jpg",
      choices: [{ t: "Contact the outside ally for injection", n: "ally_contact" }]
    },
    night_watch: {
      text: "Night watch shift. You sit together on the loft couch, bathed in the green light of the monitor. Thestral trembles. You place a hand on his shoulder: 'You're not alone in the code.' He nods. Smoke looks at you both: 'Outside is worse than I thought. But in here, we are still us. Still a family.'\n\n[Night watch complete. The family holds strong.]",
      image: "images/shared/family_quiet.jpg",
      choices: [
        { t: "Return to the keyboard and prepare the patch", n: "compile_patch" },
        { t: "Contact the outside ally immediately", n: "ally_contact" }
      ]
    },
    ally_contact: {
      text: "A weak signal comes from outside. An external ally opens a 60-second window: 'Use it. I don't know how much longer I can hold on.'\n\nUnder the wooden rafters, surrounded by stacks of paper notes no virus can erase, you type the commands with absolute precision. Thestral guides the sequence. Smoke guards the door. The patch advances line by line. When the window slams shut, Oblivion is fragmented.\n\n[Ally contact used. Climax approaches.]",
      image: "images/lea/lea_typing.jpg",
      choices: [{ t: "Toward the final climax", n: "climax" }]
    },
    protect: {
      text: "You completely isolate the home node in front of the three CRT monitors under the DATALINK poster. The firewall closes with a sharp click. The three screens stay lit only for you, while outside the skyscraper lights go out.\n\n[Local protection active. The outside world is lost.]",
      image: "images/lea/loft_lea.jpg",
      choices: [{ t: "Go to Family epilogue", n: "finale_fam" }]
    },
    climax: {
      text: "Climax in the loft. The four monitors on the long desk glow beneath the '1984' poster. You are the last stable node in a forgetting world. You must decide whether to sacrifice your local connection to slow Oblivion and leave memory fragments in the world, or keep it only for the three of you.\n\n[Lea's Final Choice]",
      image: "images/shared/loft.jpg",
      choices: [
        { t: "Sacrifice connection for a fragmented resistance", n: "finale_res" },
        { t: "Protect only the family and seal the node", n: "finale_fam" }
      ]
    },
    finale_res: {
      text: "LEA ENDING - RESISTANCE: Oblivion has been slowed. The web is shattered into thousands of isolated islands. The three of you still stand in the loft before the lit monitor, green light alive on your faces.\n\n'We are human,' you say softly. 'As long as we remember, they haven't truly won.'\n\n[RESISTANCE]\nThe family remains. Memory remains.",
      image: "images/shared/family2.jpg",
      choices: [{ t: "Back to Menu", n: "menu" }]
    },
    finale_fam: {
      text: "LEA ENDING - FAMILY: The node is protected and sealed. Outside, in city homes, families stare at blank green screens without remembering what the network was. Inside the loft, the three of you are safe and united.\n\n[FAMILY]\nTogether. Safe.",
      image: "images/shared/family.jpg",
      choices: [{ t: "Back to Menu", n: "menu" }]
    }
  },
  smoke: {
    start: {
      text: "SMOKE: You are Smoke. A cigarette burns slowly between your fingers as you stand guard in the loft. The green CRT glow lights your face and leather jacket. Lea is at the terminal, Thestral stares into the code. The Oblivion virus is erasing the memory of the internet.\n\n'I'll cover the outside,' you say in a low voice. 'You two stay inside. If everything falls, we're all that's left.'\n\n[Smoke's Path – protection and action]",
      image: "images/smoke/smoke_portrait.jpg",
      choices: [
        { t: "Watch the city from the loft window", n: "window_watch" },
        { t: "Head down to patrol the streets", n: "city_forget" },
        { t: "Long family moment in the loft", n: "family_talk_long" },
        { t: "Stand guard at the door all night", n: "door" }
      ]
    },
    window_watch: {
      text: "You step up to the large loft window, ashtray resting on the sill. Cigarette smoke curls against the glass as you watch the skyscrapers in the green haze. Building windows go dark in whole blocks, as if the city is losing chunks of memory.\n\n[High-ground observation complete]",
      image: "images/smoke/smoke_window.jpg",
      choices: [
        { t: "Go down to the Financial District streets", n: "city_forget" },
        { t: "Return to guard the front door", n: "door" }
      ]
    },
    city_forget: {
      text: "You walk along wet sidewalks past Radioware in the Financial District. On the damp asphalt lies an abandoned brick cellphone: whoever held it dropped it and kept walking in their trench coat without looking back, unable to remember what it was for.\n\n[The symptom of oblivion is everywhere]",
      image: "images/shared/city_forget.jpg",
      choices: [
        { t: "Proceed toward the Mirai / Hotel sector", n: "city_mirai" },
        { t: "Cut through the back alleys toward the loft", n: "street_long" }
      ]
    },
    city_mirai: {
      text: "You walk beneath the green neon signs of the Hotel and the MIRAI 08 tower. Around you, the crowd wanders dazed with empty eyes, clutching sheets of paper they can no longer decipher.\n\n[Central district explored]",
      image: "images/shared/city.jpg",
      choices: [
        { t: "Check the plaza under the Datanet board", n: "city_datanet" },
        { t: "Take the side alley", n: "street_long" }
      ]
    },
    city_datanet: {
      text: "Beneath the giant MIRAI CORP screen (+1.09, 48.32) and the dark DATANET sign, dozens of people stand motionless in the green gloom. You are the only one among them who still remembers the world before.\n\n[External recon complete]",
      image: "images/shared/city2.jpg",
      choices: [{ t: "Head back via the rear alley", n: "street_long" }]
    },
    street_long: {
      text: "You cut through the wet alley lit by the green neon 'ホテル' (Hotel) sign. On the ground lies an abandoned cassette recorder. You return to the loft at dawn, rain-soaked, certain that a spark of resistance still exists out there.\n\n[Long exploration complete]",
      image: "images/shared/alley.jpg",
      choices: [{ t: "Return to the loft for the climax", n: "climax" }]
    },
    family_talk_long: {
      text: "Long family moment. All three of you sit on the loft couch, the green monitor as your only light. You talk about what will happen if the node falls and promise to stay together, whatever happens outside.\n\n[Bond deeply strengthened]",
      image: "images/shared/family_quiet.jpg",
      choices: [
        { t: "Take position at the door for guard duty", n: "door" },
        { t: "Toward the climax", n: "climax" }
      ]
    },
    door: {
      text: "You stand by the half-open door for hours, cigarette between your fingers, watching the buildings in the green mist beyond the threshold. No one enters. The node stays safe.\n\n[Protection active]",
      image: "images/smoke/smoke_door.jpg",
      choices: [{ t: "Regroup with Lea and Thestral", n: "smoke_brief" }]
    },
    smoke_brief: {
      text: "You step back to the terminal desk as green code scrolls on the monitor behind you. 'Whatever you two decide to do with that patch,' you say looking Lea and Thestral in the eye, 'I'm with you to the end.'\n\n[Ready for the final decision]",
      image: "images/smoke/smoke.jpg",
      choices: [{ t: "Go to climax", n: "climax" }]
    },
    climax: {
      text: "Climax in the loft. The four monitors under the '1984' poster pulse with green light. You must decide whether to sacrifice the local connection to leave fragments of resistance in the world, or protect only the three of you at all costs.\n\n[Smoke's Final Choice]",
      image: "images/shared/loft.jpg",
      choices: [
        { t: "Fragmented global resistance", n: "finale_res" },
        { t: "Protected family in the loft", n: "finale_fam" }
      ]
    },
    finale_res: {
      text: "SMOKE ENDING - RESISTANCE: You slowed Oblivion down. In the city alleys, the green spray-painted words 'INTERNET WAS REAL' still shine on the wet wall like a beacon for anyone beginning to remember.\n\n'That's enough,' you say, putting out your last cigarette. 'We resisted.'\n\n[RESISTANCE]",
      image: "images/shared/graffiti.jpg",
      choices: [{ t: "Back to Menu", n: "menu" }]
    },
    finale_fam: {
      text: "SMOKE ENDING - FAMILY: The node is secure. The three of you together, standing before the last lit terminal in the loft. 'We chose us,' you say. And that's enough.\n\n[FAMILY]",
      image: "images/shared/family2.jpg",
      choices: [{ t: "Back to Menu", n: "menu" }]
    }
  },
  thestral: {
    start: {
      text: "THESTRAL: You are Thestral. Your eyes never leave the screen. Green code reflects in your pupils. You see sequences Lea and Smoke cannot see: 0xNULL, 0xVOID, then 0xOBLIVION. You don't want to be left alone in the code.\n\nYou murmur in a low voice: 'Don't leave me alone. I see the full sequence. If we don't interrupt it at the third step, it becomes permanent.'\n\n[Thestral's Path – code vision]",
      image: "images/thestral/thestral_portrait.jpg",
      choices: [
        { t: "Start direct sequence trace", n: "trace_done" },
        { t: "Analyze the viral core sphere", n: "analyze" },
        { t: "Guide the injection reading secret.txt with Lea", n: "guide" },
        { t: "Seek support from the family before diving in", n: "family" }
      ],
      prompt: { cmd: "trace --sequence", n: "trace_done", hint: "PROMPT: type 'trace --sequence' to trace and confirm the sequence." }
    },
    trace_done: {
      text: "Trace complete. Your face is inches from the curved CRT glass. The sequence is confirmed: 0xNULL erases, 0xVOID isolates, 0xOBLIVION makes it permanent. The deeper you look, the more you feel the code's abyss pulling you in.\n\n[Vision active. The code is clearer than ever.]",
      image: "images/thestral/thestral.jpg",
      choices: [
        { t: "Push further into the dark side of the code", n: "nightmare_vision" },
        { t: "Open the hacking terminal with Lea", n: "guide" },
        { t: "Guide directly toward the climax", n: "climax" }
      ]
    },
    nightmare_vision: {
      text: "For one terrifying instant you see what you would become if trapped alone in the flow of 0xOBLIVION: a specter consumed by green phosphors, eyes reduced to pure glowing code, pale skeletal fingers fused with the keys.\n\nLea's voice pulls you out of the hallucination just in time, but you saw the hidden key inside the core.\n\n[Abyss vision overcome]",
      image: "images/thestral/thestral_hands.jpg",
      choices: [
        { t: "Analyze Oblivion's spherical core", n: "analyze" },
        { t: "Return to the family lifeline", n: "family" }
      ]
    },
    analyze: {
      text: "Deep analysis. The 3D structure of Oblivion appears on screen: a pulsing sphere of green filaments. You find the cracks in the sequence: it can be fragmented if the family stays united.\n\n[Analysis complete]",
      image: "images/shared/virus.jpg",
      choices: [
        { t: "Switch to terminal to extract secret.txt", n: "guide" },
        { t: "Toward the climax", n: "climax" }
      ]
    },
    guide: {
      text: "You guide Lea through the injection on 1980s-terminal. You run 'cat secret.txt' and the key appears on screen: ACCESS CODE: 7X9K-L3M8-2P4Q — AUTH LEVEL: OMEGA. Oblivion slows down and fragments.\n\n[Guidance successful]",
      image: "images/shared/hacking.jpg",
      choices: [{ t: "Proceed to climax", n: "climax" }],
      prompt: { cmd: "7x9k-l3m8-2p4q", n: "climax", hint: "OPTIONAL PROMPT: type the ACCESS CODE visible on screen ('7X9K-L3M8-2P4Q') to force OMEGA level." }
    },
    family: {
      text: "You sit together on the couch in the dark loft. Lea stays beside you, Smoke watches the monitor in silence. You are not alone in the code. Human warmth strengthens your mind more than any firewall.\n\n[Support gained]",
      image: "images/shared/family_quiet.jpg",
      choices: [{ t: "Face the climax", n: "climax" }]
    },
    climax: {
      text: "Climax in the loft. On the beige monitor all code vanishes, leaving only a single green rectangular cursor blinking in the void. You must decide the fate of the network. Smoke and Lea wait for your signal.\n\n[Thestral's Final Choice]",
      image: "images/shared/empty_crt.jpg",
      choices: [
        { t: "Resistance – fragment /INFECT.EXE and leave traces in the world", n: "finale_res" },
        { t: "Family – seal the node and protect only the three of us", n: "finale_fam" }
      ]
    },
    finale_res: {
      text: "THESTRAL ENDING - RESISTANCE: You launch the reverse trace on /INFECT.EXE (CODE: 0xA7F3). At 68% trace, the hexadecimal memory blocks ('4D 65 6D 6F 72 79' - Memory) are saved. Oblivion has been slowed. You are no longer alone.\n\n[RESISTANCE]",
      image: "images/shared/virus2.jpg",
      choices: [{ t: "Back to Menu", n: "menu" }]
    },
    finale_fam: {
      text: "THESTRAL ENDING - FAMILY: Together in the code and in reality. All three of you stand before the loft terminal. The home node is protected. The green light remains, but now it belongs to you.\n\n[FAMILY]",
      image: "images/shared/family2.jpg",
      choices: [{ t: "Back to Menu", n: "menu" }]
    }
  }
};