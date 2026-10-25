window.CH_LANGS = window.CH_LANGS || {};
window.CH_LANGS.zh = {
  ui: {
    title: "CYBER HEROES // OBLIVION - ULTRA",
    subtitle: "LEA · SMOKE · THESTRAL<br><span style='opacity:0.8'>遗忘协议 (OBLIVION) — 终极版</span>",
    sys1: "&gt; 系统已激活 // 节点 1984",
    sys2: "&gt; 80年代绿磷CRT终端主题",
    sys3: "&gt; 终极版 — 支持 ARIA 无障碍与 TTS 语音朗读",
    statusReady: "准备就绪。请选择你的路线。",
    statusActive: "检测到活动会话：",
    btnResume: "继续会话",
    btnLea: "LEA 路线 [技术 / 补丁]",
    btnSmoke: "SMOKE 路线 [街道 / 守卫]",
    btnThestral: "THESTRAL 路线 [代码 / 视界]",
    btnLog: "查看系统日志",
    btnReset: "重置记忆数据",
    footer: "终极版 — 互动叙事、PC/移动端自适应布局、WAI-ARIA 无障碍标准及语音合成。",
    logTitle: "系统日志",
    logClose: "← 关闭",
    logEmpty: "日志中暂无记录。",
    confirmReset: "确定要清空所有记忆和系统日志吗？",
    resetDone: "记忆重置完成。",
    backMenu: "← 返回主菜单",
    restartPath: "↻ 重新开始本路线",
    promptPlaceholder: "输入终端指令",
    promptSend: "发送",
    promptOk: "✓ 指令已接受：",
    promptErr: "✗ 错误。需要输入：",
    ttsRead: "朗读",
    ttsStop: "停止",
    ttsAuto: "自动朗读",
    devicePc: "🖥 PC 桌面布局 [双栏]",
    deviceMobile: "📱 移动设备布局",
    skipToMain: "跳转到主要内容",
    ariaToolbar: "语音与语言控制栏",
    langLabel: "选择语言",
    sceneAlt: "场景插图",
    choicesAria: "可用选项",
    sysError: "系统错误。"
  },
  lea: {
    start: {
      text: "LEA：阁楼笼罩在宛如病态心脏般跳动的绿磷光芒中。CRT显示器的扫描线在粗糙的砖墙、纠缠的电缆和你的皮肤上跃动。你是莉娅（Lea），三人中技术最强的黑客。斯莫克（Smoke）站在门边，指间的香烟缓慢燃烧。夜骐（Thestral）坐在主屏幕前，双眼圆睁，仿佛在阅读别人看不见的东西。\n\n“遗忘（Oblivion）”病毒不仅删除文件，它还会抹去人类脑海中“互联网曾经存在过”的记忆本身。街上的人们任由手机滑落在地，茫然地盯着它，不明白自己为什么拿着它。再过几个小时，世上将没有人记得网络曾经存在过。但你们三人依然是一家人。\n\n“我们必须联手阻止他们，”你低声说道，手指已经搭在键盘上，“如果家庭节点沦陷，就只剩下我们三个人了。”\n\n斯莫克沉默着点头。夜骐喃喃自语：“我看到了序列。0xNULL，然后是0xVOID，接着是更可怕的东西。别把我一个人留在代码里。”\n\n[莉娅路线开始 – 技术核心与家人]",
      image: "images/lea/lea_portrait.jpg",
      choices: [
        { t: "对病毒执行深度扫描", n: "scan_done" },
        { t: "立即深度分析病毒序列", n: "deep_analysis" },
        { t: "先稳固与斯莫克和夜骐的羁绊", n: "night_watch" }
      ],
      prompt: { cmd: "scan --oblivion", n: "scan_done", hint: "提示：输入 'scan --oblivion' 进入系统并绘制活动节点图。" }
    },
    scan_done: {
      text: "扫描完成。终端瞬间迸发出飞速滚动的绿色代码：检测到 TROJAN.HALO9（92.7%），C2服务器活跃于 203.0.113.45。47个节点已感染，仅剩3个依然纯净。规律冷酷无情：0xNULL 抹去共同历史，0xVOID 移除连接的概念，0xOBLIVION 让遗忘成为永恒。\n\n“我们可以注入补丁，”在只有CRT嗡鸣的漫长沉默后你开口道，“但需要外部盟友打开60秒的窗口。否则防火墙一旦关闭，我们将永远被孤立。”\n\n[技术分析完成。时间所剩无几。]",
      image: "images/shared/virus_screen.jpg",
      choices: [
        { t: "深度分析受损的文件系统", n: "deep_analysis" },
        { t: "在终端编译紧急补丁", n: "compile_patch" },
        { t: "与家人一起守夜", n: "night_watch" },
        { t: "立即隔离三台显示器并保护阁楼", n: "protect" }
      ]
    },
    deep_analysis: {
      text: "病毒深度分析。Unix终端显示 /usr/src 目录正随着病毒篡改系统权限而逐行损坏。0xNULL 抹去对话与网站的共同记忆，0xVOID 孤立每个节点，0xOBLIVION 封死一切。\n\n莉娅，你的手指从未停歇。你发现了内核的一个弱点：只要一家人团结一致，并在最精确的时刻利用窗口，就能将病毒永久击碎。\n\n[深度分析完成。]",
      image: "images/shared/code_scroll.jpg",
      choices: [
        { t: "在终端准备注入代码", n: "compile_patch" },
        { t: "直接联系外部盟友", n: "ally_contact" },
        { t: "优先保护家庭节点", n: "protect" }
      ]
    },
    compile_patch: {
      text: "在砖墙上那张老旧的《战争游戏 (WARGAMES)》海报下，你全神贯注地敲击机械键盘。窗外雨水划过漆黑的玻璃。你从 A:\\SYS 软盘启动了1987年的底层调试环境，编写一段“遗忘”病毒无法拦截的低级例程。\n\n[编译环境准备就绪。]",
      image: "images/lea/lea_hacking.jpg",
      choices: [
        { t: "核对 A:\\SYS 上的十六进制转储", n: "dos_debug" },
        { t: "向外部盟友发送信号", n: "ally_contact" }
      ]
    },
    dos_debug: {
      text: "A:\\SYS\\> 屏幕显示出1987年的6个系统文件以及地址 39B1:0200 处的十六进制转储。测试字符串 'Hello, World!..' 在绿磷光中闪烁：备用内核仍有响应，尚未被“遗忘”污染。\n\n“准备好了，”你向夜骐低语，“只要在60秒窗口内注入这段纯净区块，病毒就无法抹除根目录。”\n\n[底层例程验证完毕。]",
      image: "images/shared/crt.jpg",
      choices: [{ t: "联系外部盟友进行补丁注入", n: "ally_contact" }]
    },
    night_watch: {
      text: "夜间守卫。你们三人坐在阁楼沙发上，沐浴在显示器的绿光中。夜骐在发抖。你把手放在他肩上：“在代码里你不是一个人。”他点了点头。斯莫克看着你们：“外面比我想象的更糟。但在这里，我们依然是我们，依然是一家人。”\n\n[守夜完成。家人的羁绊坚不可摧。]",
      image: "images/shared/family_quiet.jpg",
      choices: [
        { t: "回到键盘前准备补丁", n: "compile_patch" },
        { t: "立即联系外部盟友", n: "ally_contact" }
      ]
    },
    ally_contact: {
      text: "外面传来微弱的信号。外部盟友打开了60秒的窗口：“快用它，我不知道还能撑多久。”\n\n在木梁之下，周围堆满了任何病毒都无法抹去的纸质笔记，你以绝对的精准输入指令。夜骐引导序列，斯莫克守卫大门。当窗口猛然关闭时，你们精疲力竭，但“遗忘”已被击成碎片。\n\n[盟友窗口已利用。最终高潮临近。]",
      image: "images/lea/lea_typing.jpg",
      choices: [{ t: "迈向最终高潮", n: "climax" }]
    },
    protect: {
      text: "在《DATALINK》海报下的三台CRT显示器前，你彻底隔离了家庭节点。防火墙发出一声干脆的闭合声。三块屏幕只为你们亮起，而窗外摩天大楼的灯火正一盏接一盏熄灭。\n\n[本地保护已激活。外部世界已失落。]",
      image: "images/lea/loft_lea.jpg",
      choices: [{ t: "前往家庭结局", n: "finale_fam" }]
    },
    climax: {
      text: "阁楼高潮。《1984》海报下，长桌上的四台显示器闪烁着绿光。你们是这个正在遗忘的世界里最后一个稳定的节点。你必须做出抉择：牺牲本地连接来进一步拖慢“遗忘”、为世界留下记忆碎片，还是只为你们三人保留连接。\n\n[莉娅的最终抉择]",
      image: "images/shared/loft.jpg",
      choices: [
        { t: "牺牲连接，换取碎片化的全球抵抗", n: "finale_res" },
        { t: "只保护家人并封闭节点", n: "finale_fam" }
      ]
    },
    finale_res: {
      text: "莉娅结局 - 抵抗：“遗忘”被减缓了。网络碎成了成千上万座孤岛。你们三人依然站在阁楼亮着的显示器前，绿光映照着你们的脸庞。\n\n“我们是人类，”你低声说，“只要我们还记得，他们就没有真正获胜。”\n\n[抵抗]\n家人在。记忆在。",
      image: "images/shared/family2.jpg",
      choices: [{ t: "返回主菜单", n: "menu" }]
    },
    finale_fam: {
      text: "莉娅结局 - 家人：节点已被保护并封存。外面的城市里，无数家庭呆望着空白的绿色屏幕，不再记得网络是什么。但在阁楼里，你们三人安全而紧密地相连。\n\n[家人]\n在一起，平安无事。",
      image: "images/shared/family.jpg",
      choices: [{ t: "返回主菜单", n: "menu" }]
    }
  },
  smoke: {
    start: {
      text: "SMOKE：你是斯莫克。你在阁楼里站岗，指间的香烟缓缓燃烧。CRT的绿光映亮你的脸庞和皮夹克。莉娅在终端前忙碌，夜骐紧盯着代码。“遗忘”病毒正在抹去互联网的记忆。\n\n“外面的情况交给我，”你低声说道，“你们俩待在里面。就算天塌下来，也还有我们三个人。”\n\n[斯莫克路线 – 守护与行动]",
      image: "images/smoke/smoke_portrait.jpg",
      choices: [
        { t: "从阁楼窗口观察城市", n: "window_watch" },
        { t: "下楼巡逻街道", n: "city_forget" },
        { t: "在阁楼与家人共度漫长时光", n: "family_talk_long" },
        { t: "整夜守在门前", n: "door" }
      ]
    },
    window_watch: {
      text: "你走到阁楼巨大的玻璃窗前，烟灰缸放在窗台上。烟雾贴着玻璃缓缓升起，你凝视着绿色雾霭中的摩天大楼。建筑物的窗户整片整片地熄灭，仿佛这座城市正在失去一块块记忆。\n\n[高处观察完成]",
      image: "images/smoke/smoke_window.jpg",
      choices: [
        { t: "下楼前往金融区街道", n: "city_forget" },
        { t: "返回守卫正门", n: "door" }
      ]
    },
    city_forget: {
      text: "你走过金融区 Radioware 橱窗前潮湿的人行道。湿漉漉的沥青路面上躺着一部被遗弃的大哥大手机：刚才拿着它的人任由它掉在地上，穿着风衣头也不回地继续前行，已经完全记不起它有什么用。\n\n[遗忘的症状无处不在]",
      image: "images/shared/city_forget.jpg",
      choices: [
        { t: "继续前往未来（Mirai）/ 旅馆街区", n: "city_mirai" },
        { t: "穿过后巷返回阁楼", n: "street_long" }
      ]
    },
    city_mirai: {
      text: "你走入“ホテル (HOTEL)”与“未来 MIRAI 08”大厦的绿色霓虹灯下。周围的人群目光空洞地游荡，手里紧攥着再也无法读懂的纸张。\n\n[中心街区探索完成]",
      image: "images/shared/city.jpg",
      choices: [
        { t: "检查数据网（Datanet）大屏下的广场", n: "city_datanet" },
        { t: "走入侧边小巷", n: "street_long" }
      ]
    },
    city_datanet: {
      text: "在“未来電子 MIRAI CORP”（股价 48.32 +1.09）的巨型屏幕与熄灭的“データ DATANET”招牌下，数十人一动不动地站在绿色的幽暗中。你是他们之中唯一还记得过去世界的人。\n\n[外部侦察完成]",
      image: "images/shared/city2.jpg",
      choices: [{ t: "从后巷返回", n: "street_long" }]
    },
    street_long: {
      text: "你穿过被绿色霓虹灯“ホテル”照亮的潮湿小巷。地上丢着一台老旧的磁带录音机。黎明时分你浑身湿透地回到阁楼，确信外面的世界里依然残存着反抗的火种。\n\n[长途探索完成]",
      image: "images/shared/alley.jpg",
      choices: [{ t: "回到阁楼迎接高潮", n: "climax" }]
    },
    family_talk_long: {
      text: "漫长的家人时光。你们三人坐在阁楼的沙发上，显示器的绿光是唯一的照明。你们谈论着如果节点沦陷会发生什么，并发誓无论外面发生什么都要在一起。\n\n[羁绊深深加固]",
      image: "images/shared/family_quiet.jpg",
      choices: [
        { t: "到门前就位执行守卫", n: "door" },
        { t: "迈向高潮", n: "climax" }
      ]
    },
    door: {
      text: "你在半开的门前站了几个小时，指间夹着香烟，注视着门槛外绿色浓雾中的楼群。没有人闯入。节点依然安全。\n\n[防护激活]",
      image: "images/smoke/smoke_door.jpg",
      choices: [{ t: "与莉娅和夜骐汇合", n: "smoke_brief" }]
    },
    smoke_brief: {
      text: "你回到终端桌旁，绿色代码在你身后的显示器上滚动。“无论你们俩决定怎么处理那个补丁，”你注视着莉娅和夜骐的眼睛说道，“我都会陪你们到底。”\n\n[准备好做出最终决定]",
      image: "images/smoke/smoke.jpg",
      choices: [{ t: "前往高潮", n: "climax" }]
    },
    climax: {
      text: "阁楼高潮。《1984》海报下的四台显示器闪烁着绿光。你必须决定是牺牲本地连接在世界上留下抵抗的碎片，还是不惜一切代价只保护你们三人。\n\n[斯莫克的最终抉择]",
      image: "images/shared/loft.jpg",
      choices: [
        { t: "碎片化的全球抵抗", n: "finale_res" },
        { t: "在阁楼中保护家人", n: "finale_fam" }
      ]
    },
    finale_res: {
      text: "斯莫克结局 - 抵抗：你们拖慢了“遗忘”。在城市的小巷里，潮湿墙壁上的绿色喷漆字迹“INTERNET WAS REAL”依然闪耀，如同指引每一个开始记起一切之人的灯塔。\n\n“够了，”你掐灭最后一支烟，“我们反抗过了。”\n\n[抵抗]",
      image: "images/shared/graffiti.jpg",
      choices: [{ t: "返回主菜单", n: "menu" }]
    },
    finale_fam: {
      text: "斯莫克结局 - 家人：节点安全了。你们三人并肩站在阁楼最后一台亮着的终端前。“我们选择了彼此，”你说。这就够了。\n\n[家人]",
      image: "images/shared/family2.jpg",
      choices: [{ t: "返回主菜单", n: "menu" }]
    }
  },
  thestral: {
    start: {
      text: "THESTRAL：你是夜骐。你的双眼从未离开屏幕。绿色的代码映在你的瞳孔中。你看到了莉娅和斯莫克看不见的序列：0xNULL、0xVOID，然后是 0xOBLIVION。你不想一个人被困在代码里。\n\n你低声呢喃：“别丢下我一个人。我看到了完整的序列。如果不从第三步打断它，遗忘就会变成永久的。”\n\n[夜骐路线 – 代码视界]",
      image: "images/thestral/thestral_portrait.jpg",
      choices: [
        { t: "启动序列直接追踪", n: "trace_done" },
        { t: "分析病毒核心球体", n: "analyze" },
        { t: "与莉娅一起读取 secret.txt 引导注入", n: "guide" },
        { t: "深入之前向家人寻求支持", n: "family" }
      ],
      prompt: { cmd: "trace --sequence", n: "trace_done", hint: "提示：输入 'trace --sequence' 追踪并确认病毒序列。" }
    },
    trace_done: {
      text: "追踪完成。你的脸距离弯曲的CRT玻璃只有几厘米。序列已确认：0xNULL 抹除，0xVOID 孤立，0xOBLIVION 永久化。你看越深，就越能感觉到代码深渊正在将你拉入其中。\n\n[视界已激活。代码前所未有地清晰。]",
      image: "images/thestral/thestral.jpg",
      choices: [
        { t: "进一步深入代码的黑暗面", n: "nightmare_vision" },
        { t: "与莉娅一起打开黑客终端", n: "guide" },
        { t: "直接引导迈向高潮", n: "climax" }
      ]
    },
    nightmare_vision: {
      text: "在令人毛骨悚然的一瞬间，你看到了自己独自被困在 0xOBLIVION 洪流中的下场：一个被绿磷吞噬的幽灵，双眼化作纯粹的发光代码，苍白枯槁的手指与背光键盘融为一体。\n\n莉娅的呼唤及时将你从幻觉中拉了回来，而你已经看清了隐藏在核心中的密钥。\n\n[克服深渊幻象]",
      image: "images/thestral/thestral_hands.jpg",
      choices: [
        { t: "分析“遗忘”的球状核心", n: "analyze" },
        { t: "回到家人这条生命线身边", n: "family" }
      ]
    },
    analyze: {
      text: "深度分析。屏幕上浮现出“遗忘”的三维结构：一个由绿色丝线构成的脉动球体。你发现了序列中的裂痕：只要一家人团结一致，就能将它击碎。\n\n[分析完成]",
      image: "images/shared/virus.jpg",
      choices: [
        { t: "切换到终端提取 secret.txt", n: "guide" },
        { t: "迈向高潮", n: "climax" }
      ]
    },
    guide: {
      text: "你在 1980s-terminal 上引导莉娅进行注入。你们执行了 'cat secret.txt'，屏幕上显现出密钥：ACCESS CODE: 7X9K-L3M8-2P4Q — AUTH LEVEL: OMEGA。“遗忘”开始减速并碎裂。\n\n[引导成功]",
      image: "images/shared/hacking.jpg",
      choices: [{ t: "前往高潮", n: "climax" }],
      prompt: { cmd: "7x9k-l3m8-2p4q", n: "climax", hint: "可选提示：输入屏幕上显示的访问码 ('7X9K-L3M8-2P4Q') 强制开启 OMEGA 权限。" }
    },
    family: {
      text: "你们在昏暗的阁楼沙发上坐在一起。莉娅陪在你身边，斯莫克静静地注视着显示器。在代码里你并不孤单。人性的温暖比任何防火墙都更能坚固你的心智。\n\n[获得支持]",
      image: "images/shared/family_quiet.jpg",
      choices: [{ t: "迎接高潮", n: "climax" }]
    },
    climax: {
      text: "阁楼高潮。米色显示器上的所有代码都消失了，只剩下一个绿色的矩形光标在虚空中缓慢闪烁。你必须决定网络的命运。斯莫克和莉娅正等待你的信号。\n\n[夜骐的最终抉择]",
      image: "images/shared/empty_crt.jpg",
      choices: [
        { t: "抵抗 – 击碎 /INFECT.EXE 并在世上留下痕迹", n: "finale_res" },
        { t: "家人 – 封印节点，只保护我们三个人", n: "finale_fam" }
      ]
    },
    finale_res: {
      text: "夜骐结局 - 抵抗：你对 /INFECT.EXE (CODE: 0xA7F3) 发起了反向追踪。在进度达到 68% 时，十六进制内存块 ('4D 65 6D 6F 72 79' - Memory) 成功获救。“遗忘”已被拖慢。你不再孤单。\n\n[抵抗]",
      image: "images/shared/virus2.jpg",
      choices: [{ t: "返回主菜单", n: "menu" }]
    },
    finale_fam: {
      text: "夜骐结局 - 家人：无论在代码还是现实中都紧紧相依。你们三人站在阁楼的终端前。家庭节点得到了保护。绿光依然长存，但现在它属于你们。\n\n[家人]",
      image: "images/shared/family2.jpg",
      choices: [{ t: "返回主菜单", n: "menu" }]
    }
  }
};