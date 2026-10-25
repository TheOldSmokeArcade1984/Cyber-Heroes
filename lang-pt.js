window.CH_LANGS = window.CH_LANGS || {};
window.CH_LANGS.pt = {
  ui: {
    title: "CYBER HEROES // OBLIVION - ULTRA",
    subtitle: "LEA · SMOKE · THESTRAL<br><span style='opacity:0.8'>PROTOCOLO OBLIVION — ULTRA</span>",
    sys1: "&gt; SISTEMA ATIVO // NÓ 1984",
    sys2: "&gt; TEMA CRT FÓSFORO VERDE ANOS 80",
    sys3: "&gt; VERSÃO ULTRA — ACESSIBILIDADE ARIA E TTS",
    statusReady: "Pronto. Escolha o seu caminho.",
    statusActive: "Sessão ativa detectada: ",
    btnResume: "RETOMAR SESSÃO",
    btnLea: "CAMINHO DE LEA [TÉCNICA / PATCH]",
    btnSmoke: "CAMINHO DE SMOKE [RUA / GUARDA]",
    btnThestral: "CAMINHO DE THESTRAL [CÓDIGO / VISÃO]",
    btnLog: "VER REGISTRO",
    btnReset: "REDEFINIR MEMÓRIA",
    footer: "Versão Ultra — história interativa, layout adaptável PC/Mobile, WAI-ARIA e síntese de voz.",
    logTitle: "REGISTRO DO SISTEMA",
    logClose: "← Fechar",
    logEmpty: "Nenhuma entrada no registro.",
    confirmReset: "Apagar toda a memória e o registro?",
    resetDone: "Memória redefinida.",
    backMenu: "← Menu principal",
    restartPath: "↻ Reiniciar caminho",
    promptPlaceholder: "digite o comando",
    promptSend: "ENVIAR",
    promptOk: "✓ Comando aceito: ",
    promptErr: "✗ Erro. Esperado: ",
    ttsRead: "LER",
    ttsStop: "PARAR",
    ttsAuto: "AUTO-VOZ",
    devicePc: "🖥 LAYOUT PC [2 COLUNAS]",
    deviceMobile: "📱 LAYOUT MOBILE",
    skipToMain: "Pular para o conteúdo principal",
    ariaToolbar: "Controles de Áudio e Idioma",
    langLabel: "Selecionar idioma",
    sceneAlt: "Ilustração da cena",
    choicesAria: "Escolhas disponíveis",
    sysError: "Erro de sistema."
  },
  lea: {
    start: {
      text: "LEA: O loft está imerso em um brilho verde fosforescente que pulsa como um coração doente. As scanlines dos monitores CRT dançam nas paredes de tijolos aparentes, nos cabos emaranhados e na sua pele. Você é Lea, a mais técnica dos três. Seus dedos conhecem o teclado melhor do que qualquer coisa no mundo. Smoke está de pé perto da porta, o cigarro queimando lento entre os dedos. Thestral está sentado em frente à tela principal, olhos arregalados, lendo algo que os outros não conseguem ver.\n\nO vírus Oblivion não apaga apenas arquivos. Ele apaga a própria lembrança de que a internet já existiu. As pessoas na rua deixam cair os telefones e ficam olhando para eles sem entender por que os seguravam. Em poucas horas, ninguém lembrará que existia uma rede. Vocês três ainda são uma família. Mas o tempo está acabando.\n\n'Precisamos detê-los juntos,' você diz baixo, já com os dedos no teclado. 'Se o nó doméstico cair, só restaremos nós três.'\n\nSmoke assente em silêncio. Thestral murmura: 'Eu vejo a sequência. 0xNULL. Depois 0xVOID. Depois algo pior. Não me deixem sozinho no código.'\n\n[Caminho de Lea – foco técnico e família]",
      image: "images/lea/lea_portrait.jpg",
      choices: [
        { t: "Executar varredura profunda no vírus", n: "scan_done" },
        { t: "Análise profunda imediata da sequência", n: "deep_analysis" },
        { t: "Fortalecer primeiro o laço com Smoke e Thestral", n: "night_watch" }
      ],
      prompt: { cmd: "scan --oblivion", n: "scan_done", hint: "PROMPT: digite 'scan --oblivion' para entrar no sistema e mapear os nós ativos." }
    },
    scan_done: {
      text: "Varredura concluída. O terminal explode em linhas de código verde: TROJAN.HALO9 detectado em 92.7%, servidor C2 ativo em 203.0.113.45. 47 nós infectados. Apenas 3 ainda puros. O padrão é implacável: 0xNULL apaga a história compartilhada. 0xVOID remove o próprio conceito de conexão. 0xOBLIVION torna o esquecimento permanente.\n\n'Podemos injetar um patch,' você diz após longos minutos. 'Mas precisamos de uma janela de 60 segundos de um aliado externo. Caso contrário, o firewall se fechará para sempre.'\n\n[Análise técnica concluída. O tempo está se esgotando.]",
      image: "images/shared/virus_screen.jpg",
      choices: [
        { t: "Análise profunda do sistema de arquivos corrompido", n: "deep_analysis" },
        { t: "Compilar o patch de emergência no terminal", n: "compile_patch" },
        { t: "Vigília noturna com a família", n: "night_watch" },
        { t: "Isolar os três monitores e proteger o loft", n: "protect" }
      ]
    },
    deep_analysis: {
      text: "Análise profunda do vírus. O terminal Unix mostra o diretório /usr/src se corrompendo linha por linha enquanto o vírus reescreve as permissões do sistema. 0xNULL apaga memórias compartilhadas. 0xVOID isola cada nó. 0xOBLIVION sela tudo.\n\nLea, seus dedos não param. Você descobre uma brecha no kernel: se a família permanecer unida e a janela for aproveitada no momento exato, o vírus pode ser fragmentado permanentemente.\n\n[Análise profunda concluída.]",
      image: "images/shared/code_scroll.jpg",
      choices: [
        { t: "Preparar o código de injeção no terminal", n: "compile_patch" },
        { t: "Prosseguir diretamente para o contato com o aliado", n: "ally_contact" },
        { t: "Proteger primeiro o nó da família", n: "protect" }
      ]
    },
    compile_patch: {
      text: "Sob o antigo pôster de WARGAMES na parede de tijolos, você se concentra no teclado mecânico. Lá fora, a chuva risca o vidro escuro. Você inicia o antigo ambiente de depuração a partir do disquete A:\\SYS para escrever uma rotina de baixo nível que o Oblivion não consiga interceptar.\n\n[Ambiente de compilação pronto.]",
      image: "images/lea/lea_hacking.jpg",
      choices: [
        { t: "Verificar o dump hexadecimal em A:\\SYS", n: "dos_debug" },
        { t: "Enviar sinal ao aliado externo", n: "ally_contact" }
      ]
    },
    dos_debug: {
      text: "A tela A:\\SYS\\> mostra os 6 arquivos de sistema de 1987 e o dump hexadecimal no endereço 39B1:0200. A string de teste 'Hello, World!..' brilha em fósforo verde: o kernel secundário responde e não foi tocado pelo Oblivion.\n\n'Estamos prontos,' você sussurra para Thestral. 'Se injetarmos este bloco puro durante a janela de 60 segundos, o vírus não poderá apagar a raiz.'\n\n[Rotina de baixo nível verificada.]",
      image: "images/shared/crt.jpg",
      choices: [{ t: "Contatar o aliado externo para a injeção", n: "ally_contact" }]
    },
    night_watch: {
      text: "Turno de vigília noturna. Vocês se sentam juntos no sofá do loft, banhados pela luz verde do monitor. Thestral treme. Você coloca a mão no ombro dele: 'Você não está sozinho no código.' Ele assente. Smoke olha para vocês: 'Lá fora está pior do que eu pensava. Mas aqui dentro ainda somos nós. Ainda somos uma família.'\n\n[Vigília noturna concluída. A família resiste.]",
      image: "images/shared/family_quiet.jpg",
      choices: [
        { t: "Voltar ao teclado e preparar o patch", n: "compile_patch" },
        { t: "Contatar imediatamente o aliado externo", n: "ally_contact" }
      ]
    },
    ally_contact: {
      text: "Um sinal fraco chega de fora. Um aliado externo abre uma janela de 60 segundos: 'Usem agora. Não sei quanto tempo mais vou aguentar.'\n\nSob as vigas de madeira, cercada por anotações em papel que nenhum vírus pode apagar, você digita os comandos com precisão absoluta. Thestral guia a sequência. Smoke vigia a porta. O patch avança linha por linha. Quando a janela se fecha, o Oblivion está fragmentado.\n\n[Contato aliado aproveitado. O clímax está próximo.]",
      image: "images/lea/lea_typing.jpg",
      choices: [{ t: "Rumo ao clímax final", n: "climax" }]
    },
    protect: {
      text: "Você isola completamente o nó doméstico diante dos três monitores CRT sob o pôster DATALINK. O firewall se fecha com um estalo seco. As três telas permanecem acesas apenas para vocês, enquanto lá fora as luzes dos arranha-céus se apagam.\n\n[Proteção local ativa. O mundo lá fora está perdido.]",
      image: "images/lea/loft_lea.jpg",
      choices: [{ t: "Ir para o epílogo Família", n: "finale_fam" }]
    },
    climax: {
      text: "Clímax no loft. Os quatro monitores na longa mesa brilham sob o pôster '1984'. Vocês são o último nó estável em um mundo que está esquecendo. Você deve decidir se sacrifica a conexão local para desacelerar o Oblivion e deixar fragmentos de memória no mundo, ou se a mantém apenas para vocês três.\n\n[Escolha final de Lea]",
      image: "images/shared/loft.jpg",
      choices: [
        { t: "Sacrificar a conexão por uma resistência fragmentada", n: "finale_res" },
        { t: "Proteger apenas a família e selar o nó", n: "finale_fam" }
      ]
    },
    finale_res: {
      text: "FINAL LEA - RESISTÊNCIA: O Oblivion foi desacelerado. A web está fragmentada em milhares de ilhas isoladas. Vocês três continuam de pé no loft diante do monitor aceso, o verde vivo em seus rostos.\n\n'Somos humanos,' você diz baixo. 'Enquanto lembrarmos, eles não venceram totalmente.'\n\n[RESISTÊNCIA]\nA família permanece. A memória permanece.",
      image: "images/shared/family2.jpg",
      choices: [{ t: "Voltar ao Menu", n: "menu" }]
    },
    finale_fam: {
      text: "FINAL LEA - FAMÍLIA: O nó está protegido e selado. Lá fora, nas casas da cidade, as famílias olham para telas verdes vazias sem lembrar o que era a rede. Mas dentro do loft vocês três estão seguros e unidos.\n\n[FAMÍLIA]\nJuntos. Em segurança.",
      image: "images/shared/family.jpg",
      choices: [{ t: "Voltar ao Menu", n: "menu" }]
    }
  },
  smoke: {
    start: {
      text: "SMOKE: Você é Smoke. O cigarro queima lento entre os dedos enquanto você faz guarda no loft. O brilho verde dos CRTs ilumina seu rosto e sua jaqueta de couro. Lea está no terminal, Thestral fixa o código. O vírus Oblivion está apagando a lembrança da internet.\n\n'Eu cubro o lado de fora,' você diz em voz baixa. 'Vocês dois fiquem dentro. Se tudo cair, só restaremos nós três.'\n\n[Caminho de Smoke – proteção e ação]",
      image: "images/smoke/smoke_portrait.jpg",
      choices: [
        { t: "Observar a cidade pela janela do loft", n: "window_watch" },
        { t: "Descer à rua para patrulhar os bairros", n: "city_forget" },
        { t: "Longo momento em família no loft", n: "family_talk_long" },
        { t: "Ficar de guarda na porta a noite toda", n: "door" }
      ]
    },
    window_watch: {
      text: "Você se aproxima da grande janela do loft, com o cinzeiro apoiado no parapeito. A fumaça sobe lenta enquanto você observa os arranha-céus na névoa verde. As janelas dos prédios se apagam em blocos inteiros, como se a cidade estivesse perdendo pedaços de memória.\n\n[Observação do alto concluída]",
      image: "images/smoke/smoke_window.jpg",
      choices: [
        { t: "Descer para as ruas do Distrito Financeiro", n: "city_forget" },
        { t: "Voltar para vigiar a porta de entrada", n: "door" }
      ]
    },
    city_forget: {
      text: "Você caminha pelas calçadas molhadas em frente à Radioware, no Distrito Financeiro. No asfalto úmido jaz um grande telefone celular abandonado: quem o segurava deixou-o cair e continuou andando em seu sobretudo sem olhar para trás, incapaz de lembrar para que servia.\n\n[O sintoma do esquecimento está em toda parte]",
      image: "images/shared/city_forget.jpg",
      choices: [
        { t: "Prosseguir para o setor Mirai / Hotel", n: "city_mirai" },
        { t: "Cortar pelos becos secundários de volta ao loft", n: "street_long" }
      ]
    },
    city_mirai: {
      text: "Você avança sob os letreiros de néon verde do Hotel e da torre MIRAI 08. Ao seu redor, a multidão caminha desorientada com olhos vazios, segurando folhas de papel que não sabe mais decifrar.\n\n[Distrito central explorado]",
      image: "images/shared/city.jpg",
      choices: [
        { t: "Verificar a praça sob o painel da Datanet", n: "city_datanet" },
        { t: "Pegar o beco lateral", n: "street_long" }
      ]
    },
    city_datanet: {
      text: "Sob o gigantesco telão da MIRAI CORP (+1.09, 48.32) e o letreiro apagado da DATANET, dezenas de pessoas permanecem imóveis na penumbra verde. Você é o único entre elas que ainda se lembra do mundo de antes.\n\n[Reconhecimento externo concluído]",
      image: "images/shared/city2.jpg",
      choices: [{ t: "Voltar pelo beco dos fundos", n: "street_long" }]
    },
    street_long: {
      text: "Você corta pelo beco molhado iluminado pelo néon verde 'ホテル' (Hotel). No chão há um velho gravador de cassetes abandonado. Você retorna ao loft ao amanhecer, encharcado pela chuva, certo de que lá fora ainda existe uma centelha de resistência.\n\n[Exploração longa concluída]",
      image: "images/shared/alley.jpg",
      choices: [{ t: "Retornar ao loft para o clímax", n: "climax" }]
    },
    family_talk_long: {
      text: "Longo momento em família. Vocês três se sentam no sofá do loft, o verde do monitor como única luz. Conversam sobre o que acontecerá se o nó cair e prometem ficar juntos, aconteça o que acontecer lá fora.\n\n[Laço profundamente fortalecido]",
      image: "images/shared/family_quiet.jpg",
      choices: [
        { t: "Assumir posição na porta para o turno de guarda", n: "door" },
        { t: "Rumo ao clímax", n: "climax" }
      ]
    },
    door: {
      text: "Você permanece de pé diante da porta entreaberta por horas, o cigarro entre os dedos, olhando os prédios na névoa verde além da soleira. Ninguém entra. O nó continua seguro.\n\n[Proteção ativa]",
      image: "images/smoke/smoke_door.jpg",
      choices: [{ t: "Reunir-se com Lea e Thestral", n: "smoke_brief" }]
    },
    smoke_brief: {
      text: "Você se aproxima dos terminais enquanto o código verde corre no monitor atrás de você. 'Seja o que for que decidam fazer com esse patch,' você diz olhando Lea e Thestral nos olhos, 'estou com vocês até o fim.'\n\n[Prontos para a decisão final]",
      image: "images/smoke/smoke.jpg",
      choices: [{ t: "Ir para o clímax", n: "climax" }]
    },
    climax: {
      text: "Clímax no loft. Os quatro monitores sob o pôster '1984' pulsam com luz verde. Você deve decidir se sacrifica a conexão local para deixar fragmentos de resistência no mundo, ou se protege apenas vocês três a qualquer custo.\n\n[Escolha final de Smoke]",
      image: "images/shared/loft.jpg",
      choices: [
        { t: "Resistência global fragmentada", n: "finale_res" },
        { t: "Família protegida no loft", n: "finale_fam" }
      ]
    },
    finale_res: {
      text: "FINAL SMOKE - RESISTÊNCIA: Vocês desaceleraram o Oblivion. Nos becos da cidade, o grafite verde 'INTERNET WAS REAL' ainda brilha no muro molhado como um farol para quem começar a lembrar.\n\n'Chega,' você diz, apagando o último cigarro. 'Nós resistimos.'\n\n[RESISTÊNCIA]",
      image: "images/shared/graffiti.jpg",
      choices: [{ t: "Voltar ao Menu", n: "menu" }]
    },
    finale_fam: {
      text: "FINAL SMOKE - FAMÍLIA: O nó está seguro. Vocês três juntos, de pé diante do último terminal aceso do loft. 'Nós escolhemos a nós mesmos,' você diz. E basta.\n\n[FAMÍLIA]",
      image: "images/shared/family2.jpg",
      choices: [{ t: "Voltar ao Menu", n: "menu" }]
    }
  },
  thestral: {
    start: {
      text: "THESTRAL: Você é Thestral. Seus olhos não deixam a tela. O verde do código se reflete em suas pupilas. Você vê sequências que Lea e Smoke não veem: 0xNULL, 0xVOID, depois 0xOBLIVION. Você não quer ficar sozinho no código.\n\nVocê murmura baixo: 'Não me deixem sozinho. Eu vejo a sequência completa. Se não a interrompermos no terceiro passo, ela se tornará permanente.'\n\n[Caminho de Thestral – visão do código]",
      image: "images/thestral/thestral_portrait.jpg",
      choices: [
        { t: "Iniciar rastreamento direto da sequência", n: "trace_done" },
        { t: "Analisar a esfera do núcleo viral", n: "analyze" },
        { t: "Guiar a injeção lendo secret.txt com Lea", n: "guide" },
        { t: "Buscar apoio na família antes de mergulhar", n: "family" }
      ],
      prompt: { cmd: "trace --sequence", n: "trace_done", hint: "PROMPT: digite 'trace --sequence' para rastrear e confirmar a sequência." }
    },
    trace_done: {
      text: "Rastreamento concluído. Seu rosto está a centímetros do vidro curvo do CRT. A sequência está confirmada: 0xNULL apaga, 0xVOID isola, 0xOBLIVION torna permanente. Quanto mais fundo você olha, mais sente o abismo do código puxando você.\n\n[Visão ativa. O código está mais claro do que nunca.]",
      image: "images/thestral/thestral.jpg",
      choices: [
        { t: "Avançar mais no lado sombrio do código", n: "nightmare_vision" },
        { t: "Abrir o terminal de hacking com Lea", n: "guide" },
        { t: "Guiar diretamente para o clímax", n: "climax" }
      ]
    },
    nightmare_vision: {
      text: "Por um instante aterrorizante você vê no que se transformaria se ficasse preso sozinho no fluxo de 0xOBLIVION: um espectro consumido pelos fósforos verdes, olhos reduzidos a puro código luminoso, dedos fundidos às teclas.\n\nA voz de Lea arranca você da alucinação bem a tempo, mas você viu a chave escondida no núcleo.\n\n[Visão do abismo superada]",
      image: "images/thestral/thestral_hands.jpg",
      choices: [
        { t: "Analisar o núcleo esférico do Oblivion", n: "analyze" },
        { t: "Voltar ao porto seguro da família", n: "family" }
      ]
    },
    analyze: {
      text: "Análise profunda. Na tela aparece a estrutura tridimensional do Oblivion: uma esfera pulsante de filamentos verdes. Você descobre as rachaduras na sequência: ela pode ser fragmentada se a família permanecer unida.\n\n[Análise concluída]",
      image: "images/shared/virus.jpg",
      choices: [
        { t: "Passar ao terminal para extrair secret.txt", n: "guide" },
        { t: "Rumo ao clímax", n: "climax" }
      ]
    },
    guide: {
      text: "Você guia Lea na injeção no 1980s-terminal. Vocês executam 'cat secret.txt' e na tela aparece a chave: ACCESS CODE: 7X9K-L3M8-2P4Q — AUTH LEVEL: OMEGA. O Oblivion desacelera e se fragmenta.\n\n[Orientação bem-sucedida]",
      image: "images/shared/hacking.jpg",
      choices: [{ t: "Prosseguir para o clímax", n: "climax" }],
      prompt: { cmd: "7x9k-l3m8-2p4q", n: "climax", hint: "PROMPT OPCIONAL: digite o ACCESS CODE visível na tela ('7X9K-L3M8-2P4Q') para forçar o nível OMEGA." }
    },
    family: {
      text: "Vocês se sentam juntos no sofá no escuro do loft. Lea fica ao seu lado, Smoke observa o monitor em silêncio. Você não está sozinho no código. O calor humano fortalece sua mente mais do que qualquer firewall.\n\n[Apoio obtido]",
      image: "images/shared/family_quiet.jpg",
      choices: [{ t: "Enfrentar o clímax", n: "climax" }]
    },
    climax: {
      text: "Clímax no loft. No monitor bege todo o código desaparece, deixando apenas um único cursor retangular verde piscando no vazio. Você deve decidir o destino da rede. Smoke e Lea aguardam seu sinal.\n\n[Escolha final de Thestral]",
      image: "images/shared/empty_crt.jpg",
      choices: [
        { t: "Resistência – fragmentar /INFECT.EXE e deixar rastros no mundo", n: "finale_res" },
        { t: "Família – selar o nó e proteger apenas nós três", n: "finale_fam" }
      ]
    },
    finale_res: {
      text: "FINAL THESTRAL - RESISTÊNCIA: Você lança o rastreamento reverso em /INFECT.EXE (CODE: 0xA7F3). Aos 68% do trace, os blocos hexadecimais da memória ('4D 65 6D 6F 72 79' - Memory) são salvos. O Oblivion foi desacelerado. Você não está mais sozinho.\n\n[RESISTÊNCIA]",
      image: "images/shared/virus2.jpg",
      choices: [{ t: "Voltar ao Menu", n: "menu" }]
    },
    finale_fam: {
      text: "FINAL THESTRAL - FAMÍLIA: Juntos no código e na realidade. Vocês três estão de pé diante do terminal do loft. O nó doméstico está protegido. O verde permanece, mas agora pertence a vocês.\n\n[FAMÍLIA]",
      image: "images/shared/family2.jpg",
      choices: [{ t: "Voltar ao Menu", n: "menu" }]
    }
  }
};