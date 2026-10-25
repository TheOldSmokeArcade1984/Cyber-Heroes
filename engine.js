window.CH_LANGS = {};
const SUPPORTED_LANGS = ['en', 'it', 'es', 'fr', 'de', 'pt', 'ja', 'zh'];
const LANG_NAMES = {
  en: 'English', it: 'Italiano', es: 'Español', fr: 'Français',
  de: 'Deutsch', pt: 'Português', ja: '日本語', zh: '中文'
};
const TTS_LOCALES = {
  en: 'en-US', it: 'it-IT', es: 'es-ES', fr: 'fr-FR',
  de: 'de-DE', pt: 'pt-BR', ja: 'ja-JP', zh: 'zh-CN'
};

let currentLang = 'en';
let currentDevice = 'pc';
let currentNode = 'start';
let activePrompt = null;
let autoTts = localStorage.getItem('ch_autotts') === 'true';

// 1. Rilevamento Dispositivo (PC vs Mobile)
function detectDevice() {
  const uaMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const touchScreen = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
  const smallViewport = window.innerWidth < 860;
  currentDevice = (uaMobile || (touchScreen && smallViewport) || smallViewport) ? 'mobile' : 'pc';
  document.body.classList.toggle('is-pc', currentDevice === 'pc');
  document.body.classList.toggle('is-mobile', currentDevice === 'mobile');
  updateDeviceBadge();
}

function updateDeviceBadge() {
  const badge = document.getElementById('dev-badge');
  const L = getDict();
  if (badge && L && L.ui) {
    badge.textContent = currentDevice === 'pc' ? L.ui.devicePc : L.ui.deviceMobile;
  }
}

// 2. Pop-up Modal CRT Custom (Niente alert/confirm di sistema)
function ensureModalDom() {
  if (document.getElementById('crt-modal-overlay')) return;
  const ov = document.createElement('div');
  ov.id = 'crt-modal-overlay';
  ov.className = 'crt-modal-overlay hidden';
  ov.setAttribute('role', 'dialog');
  ov.setAttribute('aria-modal', 'true');
  ov.setAttribute('aria-labelledby', 'crt-modal-title');
  ov.innerHTML = `
    <div class="crt-modal">
      <div id="crt-modal-title" class="crt-modal-title">&gt; SYSTEM INTERRUPT</div>
      <div id="crt-modal-msg" class="crt-modal-msg"></div>
      <div id="crt-modal-actions" class="crt-modal-actions"></div>
    </div>
  `;
  document.body.appendChild(ov);
}

function showCrtModal(message, options = {}) {
  ensureModalDom();
  const ov = document.getElementById('crt-modal-overlay');
  const msgEl = document.getElementById('crt-modal-msg');
  const actEl = document.getElementById('crt-modal-actions');
  msgEl.textContent = message;
  actEl.innerHTML = '';

  const close = () => ov.classList.add('hidden');

  if (options.type === 'confirm') {
    const btnYes = document.createElement('button');
    btnYes.type = 'button';
    btnYes.className = 'btn';
    btnYes.textContent = '[ OK ]';
    btnYes.onclick = () => { close(); if (options.onConfirm) options.onConfirm(); };

    const btnNo = document.createElement('button');
    btnNo.type = 'button';
    btnNo.className = 'btn';
    btnNo.textContent = '[ ESC ]';
    btnNo.onclick = () => { close(); };

    actEl.appendChild(btnYes);
    actEl.appendChild(btnNo);
    ov.classList.remove('hidden');
    btnYes.focus();
  } else {
    const btnOk = document.createElement('button');
    btnOk.type = 'button';
    btnOk.className = 'btn';
    btnOk.textContent = '[ OK ]';
    btnOk.onclick = () => { close(); if (options.onClose) options.onClose(); };
    actEl.appendChild(btnOk);
    ov.classList.remove('hidden');
    btnOk.focus();
  }
}

// 3. Lingua automatica + caricamento file esterno
function detectInitialLang() {
  const saved = localStorage.getItem('ch_lang');
  if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
  const navLangs = navigator.languages || [navigator.language || 'en'];
  for (let l of navLangs) {
    const short = (l || '').toLowerCase().slice(0, 2);
    if (SUPPORTED_LANGS.includes(short)) return short;
  }
  return 'en';
}

function loadLangFile(langCode, callback) {
  if (!SUPPORTED_LANGS.includes(langCode)) langCode = 'en';
  if (window.CH_LANGS[langCode]) {
    callback(langCode);
    return;
  }
  const s = document.createElement('script');
  s.src = 'lang-' + langCode + '.js';
  s.onload = () => callback(langCode);
  s.onerror = () => {
    if (langCode !== 'en') loadLangFile('en', callback);
    else callback('en');
  };
  document.head.appendChild(s);
}

function getDict() {
  return window.CH_LANGS[currentLang] || window.CH_LANGS['en'] || {};
}

// 4. Sintesi Vocale (TTS)
function speakText(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  if (!text) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = TTS_LOCALES[currentLang] || 'en-US';
  const voices = window.speechSynthesis.getVoices();
  const match = voices.find(v => v.lang.toLowerCase().startsWith(currentLang));
  if (match) u.voice = match;
  u.rate = 1.0;
  window.speechSynthesis.speak(u);
}

function stopSpeech() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
}

function speakCurrentNode() {
  const dlg = document.getElementById('dlg');
  if (dlg) speakText(dlg.textContent);
}

function toggleAutoTts() {
  autoTts = !autoTts;
  localStorage.setItem('ch_autotts', autoTts ? 'true' : 'false');
  const btn = document.getElementById('btn-autotts');
  if (btn) btn.setAttribute('aria-pressed', autoTts ? 'true' : 'false');
  if (autoTts) speakCurrentNode();
  else stopSpeech();
}

// 5. Barra Superiore con Dropdown Lingua CRT Custom
function renderTopBar() {
  const bar = document.getElementById('top-bar');
  if (!bar) return;
  const L = getDict();
  const ui = L.ui || {};

  bar.innerHTML = `
    <div id="dev-badge" aria-live="polite">${currentDevice === 'pc' ? (ui.devicePc || 'PC') : (ui.deviceMobile || 'MOBILE')}</div>
    <div class="top-controls" role="toolbar" aria-label="${ui.ariaToolbar || 'Audio & Language Controls'}">
      <button type="button" class="ctrl-btn" id="btn-speak" onclick="speakCurrentNode()" aria-label="${ui.ttsRead || 'Read'}">🔊 ${ui.ttsRead || 'TTS'}</button>
      <button type="button" class="ctrl-btn" id="btn-stop" onclick="stopSpeech()" aria-label="${ui.ttsStop || 'Stop'}">⏹ ${ui.ttsStop || 'STOP'}</button>
      <button type="button" class="ctrl-btn" id="btn-autotts" onclick="toggleAutoTts()" aria-pressed="${autoTts ? 'true' : 'false'}">🔁 ${ui.ttsAuto || 'AUTO'}</button>
      <div class="lang-dropdown">
        <button type="button" class="ctrl-btn" id="lang-btn" aria-haspopup="listbox" aria-expanded="false" onclick="toggleLangMenu()">
          🌐 ${currentLang.toUpperCase()} - ${LANG_NAMES[currentLang]} ▾
        </button>
        <div id="lang-menu" class="lang-menu hidden" role="listbox" aria-label="${ui.langLabel || 'Language'}">
          ${SUPPORTED_LANGS.map(code => `
            <button type="button" role="option" aria-selected="${code === currentLang}" class="lang-opt ${code === currentLang ? 'active' : ''}" onclick="changeLanguage('${code}')">
              [${code.toUpperCase()}] ${LANG_NAMES[code]}
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function toggleLangMenu() {
  const menu = document.getElementById('lang-menu');
  const btn = document.getElementById('lang-btn');
  if (!menu || !btn) return;
  const isHidden = menu.classList.toggle('hidden');
  btn.setAttribute('aria-expanded', isHidden ? 'false' : 'true');
}

document.addEventListener('click', e => {
  const dd = document.querySelector('.lang-dropdown');
  const menu = document.getElementById('lang-menu');
  const btn = document.getElementById('lang-btn');
  if (dd && menu && !dd.contains(e.target)) {
    menu.classList.add('hidden');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const menu = document.getElementById('lang-menu');
    if (menu) menu.classList.add('hidden');
    const ov = document.getElementById('crt-modal-overlay');
    if (ov) ov.classList.add('hidden');
  }
});

function changeLanguage(newLang) {
  stopSpeech();
  loadLangFile(newLang, loaded => {
    currentLang = loaded;
    localStorage.setItem('ch_lang', currentLang);
    document.documentElement.lang = currentLang;
    renderPage();
  });
}

// 6. Rendering Pagine
function renderPage() {
  const L = getDict();
  const ui = L.ui || {};
  const skip = document.getElementById('skip-link');
  if (skip && ui.skipToMain) skip.textContent = ui.skipToMain;

  renderTopBar();

  const pageType = document.body.dataset.page;
  if (pageType === 'menu') {
    renderMenuPage();
  } else if (pageType) {
    showNode(currentNode);
  }
}

function renderMenuPage() {
  const L = getDict();
  const ui = L.ui || {};
  document.title = ui.title || 'CYBER HEROES // OBLIVION';

  const setTxt = (id, val) => { const el = document.getElementById(id); if (el && val) el.innerHTML = val; };
  setTxt('m-sub', ui.subtitle);
  setTxt('m-sys1', ui.sys1);
  setTxt('m-sys2', ui.sys2);
  setTxt('m-sys3', ui.sys3);
  setTxt('btn-lea', ui.btnLea);
  setTxt('btn-smoke', ui.btnSmoke);
  setTxt('btn-thestral', ui.btnThestral);
  setTxt('btn-log', ui.btnLog);
  setTxt('btn-reset', ui.btnReset);
  setTxt('m-foot', ui.footer);
  setTxt('log-title', ui.logTitle);
  setTxt('log-close', ui.logClose);

  const savedPath = localStorage.getItem('ch_path');
  const savedCh = localStorage.getItem('ch_ch');
  const rb = document.getElementById('resumeBtn');
  const st = document.getElementById('st');

  if (savedPath && savedCh && !savedCh.startsWith('finale_')) {
    rb.textContent = '▶ ' + (ui.btnResume || 'RESUME') + ' (' + savedPath.toUpperCase() + ')';
    rb.classList.remove('hidden');
    rb.onclick = () => { location.href = savedPath + '.html'; };
    st.textContent = (ui.statusActive || 'Active session: ') + savedPath.toUpperCase() + ' [' + savedCh + ']';
  } else {
    rb.classList.add('hidden');
    st.textContent = ui.statusReady || 'Ready.';
  }
}

function showNode(id) {
  if (id === 'menu') {
    stopSpeech();
    location.href = 'index.html';
    return;
  }
  const pathId = document.body.dataset.page;
  const L = getDict();
  const ui = L.ui || {};
  const pathStory = L[pathId] || {};
  const node = pathStory[id];

  if (!node) {
    document.getElementById('dlg').innerHTML = (ui.sysError || 'System Error.') + ` <a href="index.html">${ui.backMenu || '← Menu'}</a>`;
    return;
  }

  currentNode = id;
  localStorage.setItem('ch_path', pathId);
  localStorage.setItem('ch_ch', id);

  const backLink = document.getElementById('link-back');
  const restartLink = document.getElementById('link-restart');
  if (backLink && ui.backMenu) backLink.textContent = ui.backMenu;
  if (restartLink && ui.restartPath) restartLink.textContent = ui.restartPath;

  const dlg = document.getElementById('dlg');
  dlg.textContent = node.text || '';

  const imgC = document.getElementById('img-container');
  imgC.innerHTML = node.image
    ? `<img class="scene" src="${node.image}" alt="${ui.sceneAlt || 'Scene'}: ${id}" onerror="this.style.display='none'">`
    : '';

  const c = document.getElementById('choices');
  c.innerHTML = '';
  c.setAttribute('aria-label', ui.choicesAria || 'Available choices');

  (node.choices || []).forEach((x, idx) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'ch';
    b.textContent = '> ' + x.t;
    b.setAttribute('aria-label', (idx + 1) + ': ' + x.t);
    b.onclick = () => {
      let log = [];
      try { log = JSON.parse(localStorage.getItem('ch_log') || '[]'); } catch(e) {}
      log.push({ path: pathId, ch: id, choice: x.t, lang: currentLang, time: Date.now() });
      localStorage.setItem('ch_log', JSON.stringify(log));
      showNode(x.n);
    };
    c.appendChild(b);
  });

  const pb = document.getElementById('promptbox');
  const pin = document.getElementById('pin');
  const goBtn = document.getElementById('btn-go');
  document.getElementById('pmsg').textContent = '';
  pin.value = '';
  if (ui.promptPlaceholder) pin.placeholder = ui.promptPlaceholder;
  if (ui.promptSend) goBtn.textContent = ui.promptSend;

  if (node.prompt) {
    pb.style.display = 'block';
    document.getElementById('req-txt').textContent = node.prompt.hint || '';
    activePrompt = node.prompt;
  } else {
    pb.style.display = 'none';
    activePrompt = null;
  }

  const rightCol = document.querySelector('.right-col');
  if (rightCol) rightCol.scrollTop = 0;
  window.scrollTo(0, 0);
  if (autoTts) speakText(node.text);
}

function checkPrompt() {
  if (!activePrompt) return;
  const pathId = document.body.dataset.page;
  const L = getDict();
  const ui = L.ui || {};
  const v = document.getElementById('pin').value.trim();
  const m = document.getElementById('pmsg');

  if (v.toLowerCase() === (activePrompt.cmd || '').toLowerCase()) {
    m.style.color = '#00ff00';
    m.textContent = (ui.promptOk || '✓ Accepted: ') + v;
    let log = [];
    try { log = JSON.parse(localStorage.getItem('ch_log') || '[]'); } catch(e) {}
    log.push({ path: pathId, ch: currentNode, choice: 'PROMPT: ' + v, lang: currentLang, time: Date.now() });
    localStorage.setItem('ch_log', JSON.stringify(log));
    setTimeout(() => showNode(activePrompt.n), 700);
  } else {
    m.style.color = '#ff5555';
    m.textContent = (ui.promptErr || '✗ Error. Expected: ') + activePrompt.cmd;
  }
}

function startPath(p) {
  stopSpeech();
  if (localStorage.getItem('ch_path') !== p) {
    localStorage.setItem('ch_path', p);
    localStorage.setItem('ch_ch', 'start');
  }
  location.href = p + '.html';
}

function showLog() {
  const L = getDict();
  const ui = L.ui || {};
  let log = [];
  try { log = JSON.parse(localStorage.getItem('ch_log') || '[]'); } catch(e) {}
  document.getElementById('logview').textContent = log.length ? JSON.stringify(log, null, 2) : (ui.logEmpty || 'Empty log.');
  document.getElementById('logbox').classList.remove('hidden');
}

function resetAll() {
  const L = getDict();
  const ui = L.ui || {};
  showCrtModal(ui.confirmReset || 'Wipe all memory and system logs?', {
    type: 'confirm',
    onConfirm: () => {
      localStorage.removeItem('ch_log');
      localStorage.removeItem('ch_path');
      localStorage.removeItem('ch_ch');
      renderMenuPage();
      showCrtModal(ui.resetDone || 'Memory reset complete.', { type: 'alert' });
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  detectDevice();
  window.addEventListener('resize', detectDevice);

  const pageType = document.body.dataset.page;
  if (pageType && pageType !== 'menu') {
    const savedPath = localStorage.getItem('ch_path');
    const savedCh = localStorage.getItem('ch_ch');
    if (savedPath === pageType && savedCh && !savedCh.startsWith('finale_')) {
      currentNode = savedCh;
    } else {
      currentNode = 'start';
    }
  }

  const initLang = detectInitialLang();
  loadLangFile(initLang, loaded => {
    currentLang = loaded;
    document.documentElement.lang = currentLang;
    renderPage();
  });
});