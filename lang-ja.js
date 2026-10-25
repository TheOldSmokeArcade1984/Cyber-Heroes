window.CH_LANGS = window.CH_LANGS || {};
window.CH_LANGS.ja = {
  ui: {
    title: "CYBER HEROES // OBLIVION - ULTRA",
    subtitle: "LEA · SMOKE · THESTRAL<br><span style='opacity:0.8'>オブリビオン・プロトコル — ULTRA</span>",
    sys1: "&gt; システム稼働中 // ノード 1984",
    sys2: "&gt; 80年代グリーン蛍光CRTテーマ",
    sys3: "&gt; ULTRA版 — ARIAアクセシビリティ＆音声読み上げ対応",
    statusReady: "準備完了。ルートを選択してください。",
    statusActive: "進行中のセッションを検出: ",
    btnResume: "セッションを再開",
    btnLea: "LEAルート [技術 / パッチ]",
    btnSmoke: "SMOKEルート [市街 / 警備]",
    btnThestral: "THESTRALルート [コード / 幻視]",
    btnLog: "システムログを表示",
    btnReset: "メモリを初期化",
    footer: "Ultra版 — インタラクティブノベル、PC/モバイル自動最適化、WAI-ARIA・音声合成対応。",
    logTitle: "システムログ",
    logClose: "← 閉じる",
    logEmpty: "ログの記録はありません。",
    confirmReset: "すべてのメモリとログを消去しますか？",
    resetDone: "メモリを初期化しました。",
    backMenu: "← メインメニュー",
    restartPath: "↻ ルートを最初からやり直す",
    promptPlaceholder: "コマンドを入力",
    promptSend: "送信",
    promptOk: "✓ コマンド承認: ",
    promptErr: "✗ エラー。必要なコマンド: ",
    ttsRead: "読み上げ",
    ttsStop: "停止",
    ttsAuto: "自動音声",
    devicePc: "🖥 PCレイアウト [2カラム]",
    deviceMobile: "📱 モバイルレイアウト",
    skipToMain: "メインコンテンツへスキップ",
    ariaToolbar: "音声と表示言語のコントロール",
    langLabel: "言語を選択",
    sceneAlt: "シーン画像",
    choicesAria: "選択肢",
    sysError: "システムエラー。"
  },
  lea: {
    start: {
      text: "LEA：ロフトは病んだ心臓のように脈打つ緑色の蛍光に包まれている。CRTモニターの走査線がむき出しのレンガ壁や絡み合ったケーブル、そしてあなたの肌の上で揺れている。あなたはレア、3人の中で最も技術に長けたハッカーだ。スモークはドアのそばに立ち、指の間でゆっくりと煙草をくゆらせている。セストラルはメイン画面の前に座り、他の誰にも見えない何かを読み取るように目を見開いている。\n\nウイルス『オブリビオン』は単にファイルを消去するだけではない。「インターネットが存在していた」という記憶そのものを人間の脳から消し去ってしまうのだ。街ゆく人々は手にした電話を落とし、なぜそれを持っていたのかも分からずに立ち尽くしている。あと数時間で、ネットワークが存在したことを覚えている者は誰もいなくなるだろう。それでもあなたたち3人は家族だ。\n\n「力を合わせて止めなきゃ」あなたはすでにキーボードに指を置き、低く呟く。「このホームノードが落ちれば、残るのは私たち3人だけよ」\n\nスモークは無言で頷く。セストラルが呟く。「シーケンスが見える。0xNULL、次に0xVOID、そしてもっと恐ろしい何かが来る。僕をコードの中で一人にしないでくれ」\n\n[レア編開始 – 技術と家族の絆]",
      image: "images/lea/lea_portrait.jpg",
      choices: [
        { t: "ウイルスのディープスキャンを実行する", n: "scan_done" },
        { t: "シーケンスの深層解析へ直行する", n: "deep_analysis" },
        { t: "まずスモークとセストラルとの絆を確かめる", n: "night_watch" }
      ],
      prompt: { cmd: "scan --oblivion", n: "scan_done", hint: "PROMPT: 'scan --oblivion' と入力してシステムに侵入し、稼働ノードをマッピングしてください。" }
    },
    scan_done: {
      text: "スキャン完了。ターミナルに緑色のコードが奔流のように走る。TROJAN.HALO9を92.7%検出、C2サーバー（203.0.113.45）が稼働中。47のノードが感染し、無傷なのはわずか3つ。パターンは冷酷だ。0xNULLが共有された歴史を消し、0xVOIDが「繋がり」という概念を奪い、0xOBLIVIONが忘却を永久に固定する。\n\n「パッチを注入できるわ」CRTの唸りだけが響く沈黙のあと、あなたは口を開く。「でも外部の協力者からの60秒間のウィンドウが必要よ。さもなければファイアウォールが閉じて永遠に孤立する」\n\n[技術解析完了。時間は残りわずかだ]",
      image: "images/shared/virus_screen.jpg",
      choices: [
        { t: "破損したファイルシステムを深層解析する", n: "deep_analysis" },
        { t: "ターミナルで緊急パッチをコンパイルする", n: "compile_patch" },
        { t: "家族とともに夜の警戒にあたる", n: "night_watch" },
        { t: "3台のモニターを隔離しロフトを守る", n: "protect" }
      ]
    },
    deep_analysis: {
      text: "ウイルスの深層解析。Unixターミナルには、ウイルスがシステム権限を書き換えるにつれて /usr/src ディレクトリが1行ずつ崩壊していく様子が映し出されている。0xNULLは会話や訪れたサイトの記憶を消し、0xVOIDは各ノードを孤立させ、0xOBLIVIONがすべてを封印する。\n\nあなたの指は止まらない。そしてカーネルの弱点を発見する。家族が団結し、正確なタイミングでウィンドウを突けば、ウイルスを永久に分断できる。\n\n[深層解析完了]",
      image: "images/shared/code_scroll.jpg",
      choices: [
        { t: "ターミナルで注入コードを準備する", n: "compile_patch" },
        { t: "外部の協力者との通信へ進む", n: "ally_contact" },
        { t: "家族のノードを最優先で保護する", n: "protect" }
      ]
    },
    compile_patch: {
      text: "レンガ壁に貼られた古い『WARGAMES』のポスターの下で、あなたはメカニカルキーボードに集中する。窓の外では雨が暗いガラスを叩いている。オブリビオンに傍受されない低レベルルーチンを書くため、A:\\SYSドライブのフロッピーから1987年製のデバッグ環境を起動した。\n\n[コンパイル環境準備完了]",
      image: "images/lea/lea_hacking.jpg",
      choices: [
        { t: "A:\\SYSの16進数ダンプを確認する", n: "dos_debug" },
        { t: "外部の協力者へシグナルを送る", n: "ally_contact" }
      ]
    },
    dos_debug: {
      text: "A:\\SYS\\> の画面に1987年の6つのシステムファイルとアドレス 39B1:0200 の16進ダンプが表示される。緑の蛍光に輝く『Hello, World!..$』のテスト文字列——セカンダリ・カーネルは応答しており、まだオブリビオンに侵されていない。\n\n「いけるわ」あなたはセストラルに囁く。「60秒のウィンドウの間にこの純粋なブロックを流し込めば、ルート領域の消去を防げる」\n\n[低レベルルーチン確認完了]",
      image: "images/shared/crt.jpg",
      choices: [{ t: "パッチ注入のため外部の協力者と通信する", n: "ally_contact" }]
    },
    night_watch: {
      text: "夜番のシフト。モニターの緑の光に照らされながら、3人でロフトのソファに腰を下ろす。震えるセストラルの肩にあなたは手を置いた。「コードの中で一人になんてさせないわ」彼は頷く。スモークが静かに言う。「外は想像以上に酷い。だが、ここにいる限り俺たちは俺たちのままだ。家族のままさ」\n\n[夜の警戒完了。家族の絆は揺るがない]",
      image: "images/shared/family_quiet.jpg",
      choices: [
        { t: "キーボードに戻りパッチを準備する", n: "compile_patch" },
        { t: "今すぐ外部の協力者に連絡する", n: "ally_contact" }
      ]
    },
    ally_contact: {
      text: "外から微かな通信が入る。協力者が60秒間のウィンドウを開いた。『今だ、使ってくれ。いつまで持ちこたえられるか分からない』\n\n木の梁の下、どんなウイルスにも消せない紙のメモ束に囲まれながら、あなたは寸分の狂いもなくコマンドを打ち込む。セストラルがシーケンスを導き、スモークが扉を守る。ウィンドウが閉じた瞬間、オブリビオンは分断された。\n\n[協力者の通信を活用。クライマックスが迫る]",
      image: "images/lea/lea_typing.jpg",
      choices: [{ t: "最終クライマックスへ", n: "climax" }]
    },
    protect: {
      text: "『DATALINK』のポスターの下、3台のCRTモニターの前でホームノードを完全に隔離する。ファイアウォールが乾いた音を立てて閉じる。外の摩天楼の明かりが次々と消えていく中、3つの画面だけがあなたたちのために輝き続けている。\n\n[ローカル保護稼働。外の世界は失われた]",
      image: "images/lea/loft_lea.jpg",
      choices: [{ t: "家族のエピローグへ", n: "finale_fam" }]
    },
    climax: {
      text: "ロフトでのクライマックス。『1984』のポスターの下、長いデスクに並んだ4台のモニターが緑に輝く。忘却に沈む世界で、ここが最後の安定したノードだ。ローカル接続を犠牲にして世界に記憶の断片を残すか、3人だけの接続を守り抜くか、決断の時が来た。\n\n[レアの最終選択]",
      image: "images/shared/loft.jpg",
      choices: [
        { t: "接続を犠牲にして世界に抵抗の断片を残す", n: "finale_res" },
        { t: "家族だけを守りノードを完全に封鎖する", n: "finale_fam" }
      ]
    },
    finale_res: {
      text: "LEA ENDING - 抵抗：オブリビオンの進行は遅らせられた。ウェブは無数の孤島に分断されたが、消滅は免れた。あなたたち3人はロフトのモニターの前に立ち、その顔には今も緑の光が宿っている。\n\n「私たちは人間よ」あなたは静かに言う。「私たちが覚えている限り、奴らの完全な勝利じゃない」\n\n[RESISTANCE]\n家族はここにいる。記憶は生き続ける。",
      image: "images/shared/family2.jpg",
      choices: [{ t: "メニューへ戻る", n: "menu" }]
    },
    finale_fam: {
      text: "LEA ENDING - 家族：ノードは保護され封印された。街の家々では、家族がネットワークの意味すら忘れたまま緑の画面を虚ろに見つめている。だがロフトの中で、あなたたち3人は確かに結ばれ、守られている。\n\n[FAMILY]\n共に、安全な場所で。",
      image: "images/shared/family.jpg",
      choices: [{ t: "メニューへ戻る", n: "menu" }]
    }
  },
  smoke: {
    start: {
      text: "SMOKE：お前はスモークだ。ロフトで見張りに立ちながら、指の間で煙草がゆっくりと燃えている。CRTの緑の光がお前の顔と革ジャンを照らす。レアはターミナルに向かい、セストラルはコードを凝視している。オブリビオンはインターネットの記憶を消し去ろうとしている。\n\n「外は俺が受け持つ」お前は低い声で言う。「お前たちは中にいろ。すべてが崩れても、俺たち3人は残る」\n\n[スモーク編 – 守護と行動]",
      image: "images/smoke/smoke_portrait.jpg",
      choices: [
        { t: "ロフトの窓から街を見下ろす", n: "window_watch" },
        { t: "街へ降りてパトロールする", n: "city_forget" },
        { t: "ロフトで家族と語り合う", n: "family_talk_long" },
        { t: "一晩中ドアの前で見張りを続ける", n: "door" }
      ]
    },
    window_watch: {
      text: "窓辺の灰皿のそばに立ち、大きな窓から外を見つめる。緑の霧に包まれた摩天楼の明かりが、まるで街が記憶の欠片を失っていくかのようにブロック単位で消えていく。\n\n[高所からの偵察完了]",
      image: "images/smoke/smoke_window.jpg",
      choices: [
        { t: "金融街の通りへ降りる", n: "city_forget" },
        { t: "玄関の扉の警備に戻る", n: "door" }
      ]
    },
    city_forget: {
      text: "金融街の『Radioware』のショーウィンドウの前、濡れた歩道を歩く。足元のアスファルトには巨大な携帯電話が捨てられていた。持ち主はそれが何なのかを思い出すこともできず、トレンチコート姿で振り返りもせずに歩き去っていく。\n\n[忘却の兆候は街中に広がっている]",
      image: "images/shared/city_forget.jpg",
      choices: [
        { t: "ミライ・ホテル地区へ進む", n: "city_mirai" },
        { t: "裏路地を抜けてロフトへ戻る", n: "street_long" }
      ]
    },
    city_mirai: {
      text: "『ホテル』と『未来 MIRAI 08』の緑のネオンサインの下を進む。周囲では虚ろな目をした群衆が、もはや読めなくなった紙切れを握りしめて彷徨っている。\n\n[中央地区の探索完了]",
      image: "images/shared/city.jpg",
      choices: [
        { t: "データネットの電光掲示板の下を調べる", n: "city_datanet" },
        { t: "脇の路地へ入る", n: "street_long" }
      ]
    },
    city_datanet: {
      text: "『未来電子 MIRAI CORP』（株価 48.32 +1.09）の巨大スクリーンと消えかけた『データ DATANET』の看板の下、何十人もの人々が緑の闇の中で立ち尽くしている。かつての世界を覚えているのは、この群衆の中でただ一人、お前だけだ。\n\n[外部偵察完了]",
      image: "images/shared/city2.jpg",
      choices: [{ t: "裏路地を通って帰還する", n: "street_long" }]
    },
    street_long: {
      text: "『ホテル』の緑のネオンが照らす濡れた路地を抜ける。水たまりには古いカセットレコーダーが打ち捨てられていた。夜明けに雨に濡れてロフトへ戻ったお前は、外の世界にもまだ抵抗の火種が残っていることを確信する。\n\n[長時間探索完了]",
      image: "images/shared/alley.jpg",
      choices: [{ t: "クライマックスのためロフトへ入る", n: "climax" }]
    },
    family_talk_long: {
      text: "家族との時間。モニターの緑の光だけを頼りに、3人でロフトのソファに座る。もしノードが落ちたらどうなるかを語り合い、外で何が起きようとも絶対に離れないと誓い合った。\n\n[深く強まった絆]",
      image: "images/shared/family_quiet.jpg",
      choices: [
        { t: "扉の前に立ち夜番につく", n: "door" },
        { t: "クライマックスへ", n: "climax" }
      ]
    },
    door: {
      text: "半開きの扉の前に何時間も立ち続け、指に煙草を挟んだまま緑の霧に沈むビル群を見据える。誰も侵入させない。ノードは安全だ。\n\n[防衛継続中]",
      image: "images/smoke/smoke_door.jpg",
      choices: [{ t: "レアとセストラルの元へ戻る", n: "smoke_brief" }]
    },
    smoke_brief: {
      text: "背後で緑のコードが流れるモニターの前に戻り、レアとセストラルの目を見つめる。「お前たちがそのパッチでどうするつもりだろうと、俺は最後までお前たちと一緒だ」\n\n[最終決断の準備完了]",
      image: "images/smoke/smoke.jpg",
      choices: [{ t: "クライマックスへ", n: "climax" }]
    },
    climax: {
      text: "ロフトでのクライマックス。『1984』のポスターの下で4台のモニターが緑に脈打つ。ローカル接続を犠牲にして世界に抵抗の断片を残すか、何としても3人だけを守り抜くか。\n\n[スモークの最終選択]",
      image: "images/shared/loft.jpg",
      choices: [
        { t: "分断された世界の抵抗に賭ける", n: "finale_res" },
        { t: "ロフトの家族を守り抜く", n: "finale_fam" }
      ]
    },
    finale_res: {
      text: "SMOKE ENDING - 抵抗：オブリビオンの進行を遅らせた。街の路地裏では、濡れた壁に描かれた『INTERNET WAS REAL』の緑のスプレー文字が、記憶を取り戻し始めた者たちへの灯台のように輝いている。\n\n「十分だ」お前は最後の煙草をもみ消す。「俺たちは抗ったんだ」\n\n[RESISTANCE]",
      image: "images/shared/graffiti.jpg",
      choices: [{ t: "メニューへ戻る", n: "menu" }]
    },
    finale_fam: {
      text: "SMOKE ENDING - 家族：ノードは守られた。ロフトの最後のターミナルの前に3人で並び立つ。「俺たちは俺たちを選んだ」それだけで十分だった。\n\n[FAMILY]",
      image: "images/shared/family2.jpg",
      choices: [{ t: "メニューへ戻る", n: "menu" }]
    }
  },
  thestral: {
    start: {
      text: "THESTRAL：君はセストラルだ。画面から目を離すことができない。瞳に緑色のコードが映り込む。レアやスモークには見えないシーケンス——0xNULL、0xVOID、そして0xOBLIVIONが見える。コードの中で一人きりにはなりたくない。\n\n君は低く呟く。「一人にしないでくれ。完全なシーケンスが見えるんだ。第3段階で止めなければ、忘却は永久になる」\n\n[セストラル編 – コードの幻視]",
      image: "images/thestral/thestral_portrait.jpg",
      choices: [
        { t: "シーケンスの直接トレースを開始する", n: "trace_done" },
        { t: "ウイルスの球状コアを解析する", n: "analyze" },
        { t: "レアと共に secret.txt を読み取り注入を導く", n: "guide" },
        { t: "深く潜る前に家族の支えを求める", n: "family" }
      ],
      prompt: { cmd: "trace --sequence", n: "trace_done", hint: "PROMPT: 'trace --sequence' と入力してシーケンスを追跡・確認してください。" }
    },
    trace_done: {
      text: "トレース完了。湾曲したCRTガラスの数センチ先に君の顔がある。0xNULLが消去し、0xVOIDが孤立させ、0xOBLIVIONが永久化する。深く見つめるほど、コードの深淵が君を引きずり込もうとする。\n\n[幻視稼働中。コードはかつてないほど鮮明だ]",
      image: "images/thestral/thestral.jpg",
      choices: [
        { t: "コードの暗黒面へさらに踏み込む", n: "nightmare_vision" },
        { t: "レアと共にハッキング端末を開く", n: "guide" },
        { t: "クライマックスへ直接導く", n: "climax" }
      ]
    },
    nightmare_vision: {
      text: "恐ろしい一瞬、0xOBLIVIONの奔流に一人で閉じ込められた自分の成れの果てが視える。緑の蛍光に蝕まれた亡霊、純粋なコードの光と化した瞳、光るキーと融合した青白い指。\n\nレアの声が間一髪で君を幻覚から引き戻してくれたが、君はコアに隠された鍵を見抜いた。\n\n[深淵の幻視を克服]",
      image: "images/thestral/thestral_hands.jpg",
      choices: [
        { t: "オブリビオンの球状コアを解析する", n: "analyze" },
        { t: "家族という命綱へ戻る", n: "family" }
      ]
    },
    analyze: {
      text: "深層解析。画面にオブリビオンの立体構造——緑のフィラメントが脈打つ球体が浮かび上がる。シーケンスの亀裂を見つけた。家族が一つになればウイルスを分断できる。\n\n[解析完了]",
      image: "images/shared/virus.jpg",
      choices: [
        { t: "端末で secret.txt を抽出する", n: "guide" },
        { t: "クライマックスへ", n: "climax" }
      ]
    },
    guide: {
      text: "1980s-terminalでレアの注入を導く。'cat secret.txt' を実行すると画面に鍵が現れた。ACCESS CODE: 7X9K-L3M8-2P4Q — AUTH LEVEL: OMEGA。オブリビオンが減速し、砕け散っていく。\n\n[誘導成功]",
      image: "images/shared/hacking.jpg",
      choices: [{ t: "クライマックスへ進む", n: "climax" }],
      prompt: { cmd: "7x9k-l3m8-2p4q", n: "climax", hint: "任意PROMPT: 画面に表示されたACCESS CODE ('7X9K-L3M8-2P4Q') を入力してOMEGAレベルを強制起動できます。" }
    },
    family: {
      text: "暗いロフトのソファに3人で座る。レアが寄り添い、スモークが静かにモニターを見守る。君はコードの中で一人じゃない。人の温もりはどんなファイアウォールよりも君の心を強くする。\n\n[家族の支えを得た]",
      image: "images/shared/family_quiet.jpg",
      choices: [{ t: "クライマックスに臨む", n: "climax" }]
    },
    climax: {
      text: "ロフトでのクライマックス。ベージュ色のモニターからすべてのコードが消え、緑の長方形のカーソルだけが虚空で点滅している。ネットワークの運命を決める時だ。スモークとレアが君の合図を待っている。\n\n[セストラルの最終選択]",
      image: "images/shared/empty_crt.jpg",
      choices: [
        { t: "抵抗 – /INFECT.EXE を分断し世界に痕跡を残す", n: "finale_res" },
        { t: "家族 – ノードを封印し3人だけを守る", n: "finale_fam" }
      ]
    },
    finale_res: {
      text: "THESTRAL ENDING - 抵抗：/INFECT.EXE (CODE: 0xA7F3) への逆トレースを実行。68%の段階で16進数のメモリブロック ('4D 65 6D 6F 72 79' = Memory) が保護された。オブリビオンは減速し、君はもう一人ではない。\n\n[RESISTANCE]",
      image: "images/shared/virus2.jpg",
      choices: [{ t: "メニューへ戻る", n: "menu" }]
    },
    finale_fam: {
      text: "THESTRAL ENDING - 家族：コードの中でも現実でも共に。ロフトのターミナルの前に3人で立つ。ホームノードは守られた。緑の光は今もここにあるが、それはもう君たちのものだ。\n\n[FAMILY]",
      image: "images/shared/family2.jpg",
      choices: [{ t: "メニューへ戻る", n: "menu" }]
    }
  }
};