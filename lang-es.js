window.CH_LANGS = window.CH_LANGS || {};
window.CH_LANGS.es = {
  ui: {
    title: "CYBER HEROES // OBLIVION - ULTRA",
    subtitle: "LEA · SMOKE · THESTRAL<br><span style='opacity:0.8'>PROTOCOLO OBLIVION — ULTRA</span>",
    sys1: "&gt; SISTEMA ACTIVO // NODO 1984",
    sys2: "&gt; TEMA CRT FÓSFORO VERDE AÑOS 80",
    sys3: "&gt; VERSIÓN ULTRA — ACCESIBILIDAD ARIA Y TTS",
    statusReady: "Listo. Elige tu camino.",
    statusActive: "Sesión activa detectada: ",
    btnResume: "REANUDAR SESIÓN",
    btnLea: "CAMINO DE LEA [TÉCNICA / PARCHE]",
    btnSmoke: "CAMINO DE SMOKE [CALLE / GUARDIA]",
    btnThestral: "CAMINO DE THESTRAL [CÓDIGO / VISIÓN]",
    btnLog: "CONSULTAR REGISTRO",
    btnReset: "REINICIAR MEMORIA",
    footer: "Versión Ultra — historia interactiva, diseño adaptable PC/Móvil, WAI-ARIA y síntesis de voz.",
    logTitle: "REGISTRO DEL SISTEMA",
    logClose: "← Cerrar",
    logEmpty: "No hay entradas en el registro.",
    confirmReset: "¿Borrar toda la memoria y el registro?",
    resetDone: "Reinicio completado.",
    backMenu: "← Menú principal",
    restartPath: "↻ Reiniciar camino",
    promptPlaceholder: "escribe el comando",
    promptSend: "ENVIAR",
    promptOk: "✓ Comando aceptado: ",
    promptErr: "✗ Error. Se esperaba: ",
    ttsRead: "LEER",
    ttsStop: "PARAR",
    ttsAuto: "AUTO-VOZ",
    devicePc: "🖥 DISEÑO PC [2 COLUMNAS]",
    deviceMobile: "📱 DISEÑO MÓVIL",
    skipToMain: "Saltar al contenido principal",
    ariaToolbar: "Controles de Audio e Idioma",
    langLabel: "Seleccionar idioma",
    sceneAlt: "Ilustración de la escena",
    choicesAria: "Opciones disponibles",
    sysError: "Error del sistema."
  },
  lea: {
    start: {
      text: "LEA: El loft está sumergido en un resplandor verde fosforescente que late como un corazón enfermo. Las líneas de escaneo de los monitores CRT bailan sobre las paredes de ladrillo, los cables enredados y tu piel. Eres Lea, la más técnica de los tres. Tus dedos conocen el teclado mejor que nada en el mundo. Smoke está de pie junto a la puerta, con un cigarrillo ardiendo lentamente entre los dedos. Thestral está sentado frente a la pantalla principal, con los ojos muy abiertos, leyendo algo que los demás no pueden ver.\n\nEl virus Oblivion no solo borra archivos. Borra el recuerdo mismo de que internet haya existido alguna vez. La gente en la calle deja caer sus teléfonos y se queda mirándolos sin entender por qué los tenían en la mano. En pocas horas, nadie recordará que existía una red. Ustedes tres siguen siendo una familia. Pero el tiempo se acaba.\n\n'Debemos detenerlos juntos,' dices en voz baja, con los dedos ya sobre el teclado. 'Se proclaman amos del tiempo. Si el nodo doméstico cae, solo quedamos nosotros tres.'\n\nSmoke asiente en silencio. Thestral murmura: 'Veo la secuencia. 0xNULL. Luego 0xVOID. Luego algo peor. No me dejen solo en el código.'\n\n[Inicio del camino de Lea – enfoque técnico y familia]",
      image: "images/lea/lea_portrait.jpg",
      choices: [
        { t: "Ejecutar escaneo profundo del virus", n: "scan_done" },
        { t: "Análisis profundo inmediato de la secuencia", n: "deep_analysis" },
        { t: "Reforzar primero el vínculo con Smoke y Thestral", n: "night_watch" }
      ],
      prompt: { cmd: "scan --oblivion", n: "scan_done", hint: "PROMPT: escribe 'scan --oblivion' para entrar al sistema y mapear los nodos activos." }
    },
    scan_done: {
      text: "Escaneo completado. La terminal estalla en líneas de código verde: TROJAN.HALO9 detectado al 92.7%, servidor C2 activo en 203.0.113.45. 47 nodos infectados. Solo 3 siguen puros. El patrón es despiadado: 0xNULL borra la historia compartida. 0xVOID elimina el concepto mismo de conexión. 0xOBLIVION hace que el olvido sea permanente.\n\n'Podemos inyectar un parche,' dices tras largos minutos rotos solo por el zumbido de los CRT. 'Pero necesitamos una ventana de 60 segundos de un aliado externo. De lo contrario, el cortafuegos se cerrará para siempre.'\n\n[Análisis técnico completado. El tiempo apremia.]",
      image: "images/shared/virus_screen.jpg",
      choices: [
        { t: "Análisis profundo del sistema de archivos corrupto", n: "deep_analysis" },
        { t: "Compilar el parche de emergencia en la terminal", n: "compile_patch" },
        { t: "Noche de vigilia con la familia", n: "night_watch" },
        { t: "Aislar los tres monitores y proteger el loft", n: "protect" }
      ]
    },
    deep_analysis: {
      text: "Análisis profundo del virus. La terminal Unix muestra el directorio /usr/src corrompiéndose línea por línea mientras el virus reescribe los permisos del sistema. 0xNULL borra el recuerdo compartido de conversaciones y sitios web. 0xVOID aísla cada nodo. 0xOBLIVION lo sella todo.\n\nLea, tus dedos no se detienen. Descubres un punto débil en el kernel: si la familia permanece unida y la ventana se aprovecha en el momento exacto, el virus puede ser fragmentado permanentemente.\n\n[Análisis profundo completado.]",
      image: "images/shared/code_scroll.jpg",
      choices: [
        { t: "Preparar el código de inyección en la terminal", n: "compile_patch" },
        { t: "Proceder directamente al contacto con el aliado", n: "ally_contact" },
        { t: "Proteger primero el nodo familiar", n: "protect" }
      ]
    },
    compile_patch: {
      text: "Bajo el viejo póster de WARGAMES en la pared de ladrillos, te concentras en el teclado mecánico. Afuera, la lluvia raya el cristal oscuro. Inicias el antiguo entorno de depuración desde el disquete A:\\SYS para escribir una rutina de bajo nivel que Oblivion no pueda interceptar.\n\n[Entorno de compilación listo.]",
      image: "images/lea/lea_hacking.jpg",
      choices: [
        { t: "Verificar el volcado hexadecimal en A:\\SYS", n: "dos_debug" },
        { t: "Enviar señal al aliado externo", n: "ally_contact" }
      ]
    },
    dos_debug: {
      text: "La pantalla A:\\SYS\\> muestra los 6 archivos del sistema de 1987 y el volcado hexadecimal en la dirección 39B1:0200. La cadena de prueba 'Hello, World!..' brilla en fósforo verde: el kernel secundario responde y no ha sido tocado por Oblivion.\n\n'Estamos listos,' le susurras a Thestral. 'Si inyectamos este bloque puro durante la ventana de 60 segundos, el virus no podrá borrar la raíz.'\n\n[Rutina de bajo nivel verificada.]",
      image: "images/shared/crt.jpg",
      choices: [{ t: "Contactar al aliado externo para la inyección", n: "ally_contact" }]
    },
    night_watch: {
      text: "Turno de guardia nocturno. Se sientan juntos en el sofá del loft, bañados por la luz verde del monitor. Thestral tiembla. Pones una mano en su hombro: 'No estás solo en el código.' Él asiente. Smoke los mira: 'Afuera está peor de lo que pensaba. Pero aquí seguimos siendo nosotros. Seguimos siendo una familia.'\n\n[Vigilia nocturna completada. La familia resiste.]",
      image: "images/shared/family_quiet.jpg",
      choices: [
        { t: "Volver al teclado y preparar el parche", n: "compile_patch" },
        { t: "Contactar de inmediato al aliado externo", n: "ally_contact" }
      ]
    },
    ally_contact: {
      text: "Una señal débil llega desde afuera. Un aliado externo abre una ventana de 60 segundos: 'Úsenla. No sé cuánto más resistiré.'\n\nBajo las vigas de madera, rodeada de notas en papel que ningún virus puede borrar, escribes los comandos con precisión absoluta. Thestral guía la secuencia. Smoke vigila la puerta. El parche avanza línea tras línea. Cuando la ventana se cierra, Oblivion queda fragmentado.\n\n[Contacto aliado aprovechado. El clímax se acerca.]",
      image: "images/lea/lea_typing.jpg",
      choices: [{ t: "Hacia el clímax final", n: "climax" }]
    },
    protect: {
      text: "Aíslas por completo el nodo doméstico frente a los tres monitores CRT bajo el póster DATALINK. El cortafuegos se cierra con un golpe seco. Las tres pantallas quedan encendidas solo para ustedes, mientras afuera las luces de los rascacielos se apagan.\n\n[Protección local activa. El mundo exterior está perdido.]",
      image: "images/lea/loft_lea.jpg",
      choices: [{ t: "Ir al epílogo Familia", n: "finale_fam" }]
    },
    climax: {
      text: "Clímax en el loft. Los cuatro monitores sobre el largo escritorio brillan bajo el póster '1984'. Son el último nodo estable en un mundo que olvida. Debes decidir si sacrificar la conexión local para frenar a Oblivion y dejar fragmentos de memoria en el mundo, o mantenerla solo para ustedes tres.\n\n[Decisión final de Lea]",
      image: "images/shared/loft.jpg",
      choices: [
        { t: "Sacrificar la conexión por una resistencia fragmentada", n: "finale_res" },
        { t: "Proteger solo a la familia y sellar el nodo", n: "finale_fam" }
      ]
    },
    finale_res: {
      text: "FINAL LEA - RESISTENCIA: Oblivion ha sido frenado. La red está fragmentada en miles de islas aisladas. Ustedes tres siguen de pie en el loft frente al monitor encendido, con el verde vivo en sus rostros.\n\n'Somos humanos,' dices en voz baja. 'Mientras recordemos, no habrán ganado del todo.'\n\n[RESISTENCIA]\nLa familia permanece. La memoria permanece.",
      image: "images/shared/family2.jpg",
      choices: [{ t: "Volver al Menú", n: "menu" }]
    },
    finale_fam: {
      text: "FINAL LEA - FAMILIA: El nodo está protegido y sellado. Afuera, en las casas de la ciudad, las familias miran pantallas verdes vacías sin recordar qué era la red. Dentro del loft, ustedes tres están a salvo y unidos.\n\n[FAMILIA]\nJuntos. A salvo.",
      image: "images/shared/family.jpg",
      choices: [{ t: "Volver al Menú", n: "menu" }]
    }
  },
  smoke: {
    start: {
      text: "SMOKE: Eres Smoke. El cigarrillo arde lento entre tus dedos mientras haces guardia en el loft. El resplandor verde de los CRT ilumina tu rostro y tu chaqueta de cuero. Lea está en la terminal, Thestral mira fijamente el código. El virus Oblivion está borrando el recuerdo de internet.\n\n'Yo cubro el exterior,' dices en voz baja. 'Ustedes quédense dentro. Si todo cae, solo quedamos nosotros tres.'\n\n[Camino de Smoke – protección y acción]",
      image: "images/smoke/smoke_portrait.jpg",
      choices: [
        { t: "Observar la ciudad desde la ventana del loft", n: "window_watch" },
        { t: "Bajar a la calle para patrullar los barrios", n: "city_forget" },
        { t: "Largo momento en familia en el loft", n: "family_talk_long" },
        { t: "Quedarse de guardia en la puerta toda la noche", n: "door" }
      ]
    },
    window_watch: {
      text: "Te acercas al gran ventanal del loft, con el cenicero en el alféizar. El humo sube lento mientras observas los rascacielos en la niebla verde. Las ventanas de los edificios se apagan por bloques enteros, como si la ciudad perdiera trozos de memoria.\n\n[Observación desde las alturas completada]",
      image: "images/smoke/smoke_window.jpg",
      choices: [
        { t: "Bajar a las calles del Distrito Financiero", n: "city_forget" },
        { t: "Volver a vigilar la puerta de entrada", n: "door" }
      ]
    },
    city_forget: {
      text: "Caminas por las aceras mojadas frente a Radioware, en el Distrito Financiero. Sobre el asfalto húmedo yace un gran teléfono móvil abandonado: quien lo llevaba lo dejó caer y siguió caminando en su gabardina sin mirar atrás, incapaz de recordar para qué servía.\n\n[El síntoma del olvido está en todas partes]",
      image: "images/shared/city_forget.jpg",
      choices: [
        { t: "Continuar hacia el sector Mirai / Hotel", n: "city_mirai" },
        { t: "Cortar por los callejones secundarios hacia el loft", n: "street_long" }
      ]
    },
    city_mirai: {
      text: "Te adentras entre los letreros de neón verde del Hotel y la torre MIRAI 08. A tu alrededor, la multitud camina desorientada con ojos vacíos, apretando hojas de papel que ya no saben descifrar.\n\n[Distrito central explorado]",
      image: "images/shared/city.jpg",
      choices: [
        { t: "Revisar la plaza bajo el panel de Datanet", n: "city_datanet" },
        { t: "Tomar el callejón lateral", n: "street_long" }
      ]
    },
    city_datanet: {
      text: "Bajo la gigantesca pantalla de MIRAI CORP (+1.09, 48.32) y el letrero apagado de DATANET, decenas de personas permanecen inmóviles en la penumbra verde. Eres el único entre ellos que aún recuerda el mundo de antes.\n\n[Reconocimiento externo completado]",
      image: "images/shared/city2.jpg",
      choices: [{ t: "Regresar por el callejón trasero", n: "street_long" }]
    },
    street_long: {
      text: "Cruzas el callejón mojado iluminado por el neón verde 'ホテル' (Hotel). En el suelo hay una vieja grabadora de casetes abandonada. Vuelves al loft al amanecer, empapado por la lluvia, con la certeza de que ahí fuera aún existe una chispa de resistencia.\n\n[Exploración larga completada]",
      image: "images/shared/alley.jpg",
      choices: [{ t: "Volver al loft para el clímax", n: "climax" }]
    },
    family_talk_long: {
      text: "Largo momento en familia. Los tres se sientan en el sofá del loft, con el verde del monitor como única luz. Hablan de lo que pasará si el nodo cae y prometen permanecer juntos pase lo que pase afuera.\n\n[Vínculo profundamente fortalecido]",
      image: "images/shared/family_quiet.jpg",
      choices: [
        { t: "Tomar posición en la puerta para la guardia", n: "door" },
        { t: "Hacia el clímax", n: "climax" }
      ]
    },
    door: {
      text: "Permaneces de pie frente a la puerta entreabierta durante horas, con el cigarrillo entre los dedos, mirando los edificios en la niebla verde más allá del umbral. Nadie entra. El nodo sigue seguro.\n\n[Protección activa]",
      image: "images/smoke/smoke_door.jpg",
      choices: [{ t: "Reunirse con Lea y Thestral", n: "smoke_brief" }]
    },
    smoke_brief: {
      text: "Te acercas a los terminales mientras el código verde corre en el monitor a tus espaldas. 'Sea lo que sea que decidan hacer con ese parche,' dices mirando a Lea y Thestral a los ojos, 'estoy con ustedes hasta el final.'\n\n[Listos para la decisión final]",
      image: "images/smoke/smoke.jpg",
      choices: [{ t: "Ir al clímax", n: "climax" }]
    },
    climax: {
      text: "Clímax en el loft. Los cuatro monitores bajo el póster '1984' laten con luz verde. Debes decidir si sacrificar la conexión local para dejar fragmentos de resistencia en el mundo, o proteger solo a ustedes tres a toda costa.\n\n[Decisión final de Smoke]",
      image: "images/shared/loft.jpg",
      choices: [
        { t: "Resistencia global fragmentada", n: "finale_res" },
        { t: "Familia protegida en el loft", n: "finale_fam" }
      ]
    },
    finale_res: {
      text: "FINAL SMOKE - RESISTENCIA: Han frenado a Oblivion. En los callejones de la ciudad, la pintada verde 'INTERNET WAS REAL' sigue brillando en el muro mojado como un faro para cualquiera que empiece a recordar.\n\n'Basta,' dices, apagando el último cigarrillo. 'Resistimos.'\n\n[RESISTENCIA]",
      image: "images/shared/graffiti.jpg",
      choices: [{ t: "Volver al Menú", n: "menu" }]
    },
    finale_fam: {
      text: "FINAL SMOKE - FAMILIA: El nodo está seguro. Ustedes tres juntos, de pie frente al último terminal encendido del loft. 'Nos elegimos a nosotros,' dices. Y basta.\n\n[FAMILIA]",
      image: "images/shared/family2.jpg",
      choices: [{ t: "Volver al Menú", n: "menu" }]
    }
  },
  thestral: {
    start: {
      text: "THESTRAL: Eres Thestral. Tus ojos no dejan la pantalla. El verde del código se refleja en tus pupilas. Ves secuencias que Lea y Smoke no ven: 0xNULL, 0xVOID, luego 0xOBLIVION. No quieres quedarte solo en el código.\n\nMurmuras en voz baja: 'No me dejen solo. Veo la secuencia completa. Si no la interrumpimos en el tercer paso, se vuelve permanente.'\n\n[Camino de Thestral – visión del código]",
      image: "images/thestral/thestral_portrait.jpg",
      choices: [
        { t: "Iniciar rastreo directo de la secuencia", n: "trace_done" },
        { t: "Analizar la esfera del núcleo viral", n: "analyze" },
        { t: "Guiar la inyección leyendo secret.txt con Lea", n: "guide" },
        { t: "Buscar apoyo en la familia antes de sumergirte", n: "family" }
      ],
      prompt: { cmd: "trace --sequence", n: "trace_done", hint: "PROMPT: escribe 'trace --sequence' para rastrear y confirmar la secuencia." }
    },
    trace_done: {
      text: "Rastreo completado. Tu rostro está a centímetros del cristal curvo del CRT. La secuencia está confirmada: 0xNULL borra, 0xVOID aísla, 0xOBLIVION lo hace permanente. Cuanto más profundo miras, más sientes que el abismo del código te arrastra.\n\n[Visión activa. El código está más claro que nunca.]",
      image: "images/thestral/thestral.jpg",
      choices: [
        { t: "Adentrarse más en el lado oscuro del código", n: "nightmare_vision" },
        { t: "Abrir la terminal de hacking con Lea", n: "guide" },
        { t: "Guiar directamente hacia el clímax", n: "climax" }
      ]
    },
    nightmare_vision: {
      text: "Por un instante aterrador ves en qué te convertirías si quedaras atrapado solo en el flujo de 0xOBLIVION: un espectro consumido por los fósforos verdes, ojos reducidos a puro código luminoso, dedos fusionados con las teclas.\n\nLa voz de Lea te saca de la alucinación justo a tiempo, pero has visto la llave oculta en el núcleo.\n\n[Visión del abismo superada]",
      image: "images/thestral/thestral_hands.jpg",
      choices: [
        { t: "Analizar el núcleo esférico de Oblivion", n: "analyze" },
        { t: "Volver al salvavidas de la familia", n: "family" }
      ]
    },
    analyze: {
      text: "Análisis profundo. En la pantalla aparece la estructura tridimensional de Oblivion: una esfera pulsante de filamentos verdes. Descubres las grietas en la secuencia: puede fragmentarse si la familia permanece unida.\n\n[Análisis completado]",
      image: "images/shared/virus.jpg",
      choices: [
        { t: "Pasar a la terminal para extraer secret.txt", n: "guide" },
        { t: "Hacia el clímax", n: "climax" }
      ]
    },
    guide: {
      text: "Guías a Lea en la inyección en 1980s-terminal. Ejecutan 'cat secret.txt' y en pantalla aparece la clave: ACCESS CODE: 7X9K-L3M8-2P4Q — AUTH LEVEL: OMEGA. Oblivion se frena y se fragmenta.\n\n[Guía exitosa]",
      image: "images/shared/hacking.jpg",
      choices: [{ t: "Proceder al clímax", n: "climax" }],
      prompt: { cmd: "7x9k-l3m8-2p4q", n: "climax", hint: "PROMPT OPCIONAL: escribe el ACCESS CODE visible en pantalla ('7X9K-L3M8-2P4Q') para forzar el nivel OMEGA." }
    },
    family: {
      text: "Se sientan juntos en el sofá en la oscuridad del loft. Lea permanece a tu lado, Smoke observa el monitor en silencio. No estás solo en el código. El calor humano fortalece tu mente más que cualquier cortafuegos.\n\n[Apoyo obtenido]",
      image: "images/shared/family_quiet.jpg",
      choices: [{ t: "Enfrentar el clímax", n: "climax" }]
    },
    climax: {
      text: "Clímax en el loft. En el monitor beige todo el código desaparece, dejando solo un único cursor rectangular verde parpadeando en el vacío. Debes decidir el destino de la red. Smoke y Lea esperan tu señal.\n\n[Decisión final de Thestral]",
      image: "images/shared/empty_crt.jpg",
      choices: [
        { t: "Resistencia – fragmentar /INFECT.EXE y dejar rastros en el mundo", n: "finale_res" },
        { t: "Familia – sellar el nodo y protegernos solo a los tres", n: "finale_fam" }
      ]
    },
    finale_res: {
      text: "FINAL THESTRAL - RESISTENCIA: Lanzas el rastreo inverso sobre /INFECT.EXE (CODE: 0xA7F3). Al 68% del rastreo, los bloques hexadecimales de la memoria ('4D 65 6D 6F 72 79' - Memory) se salvan. Oblivion ha sido frenado. Ya no estás solo.\n\n[RESISTENCIA]",
      image: "images/shared/virus2.jpg",
      choices: [{ t: "Volver al Menú", n: "menu" }]
    },
    finale_fam: {
      text: "FINAL THESTRAL - FAMILIA: Juntos en el código y en la realidad. Los tres están de pie frente a la terminal del loft. El nodo doméstico está protegido. El verde permanece, pero ahora les pertenece.\n\n[FAMILIA]",
      image: "images/shared/family2.jpg",
      choices: [{ t: "Volver al Menú", n: "menu" }]
    }
  }
};