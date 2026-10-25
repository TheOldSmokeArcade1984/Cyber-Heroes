const CACHE_NAME = 'cyberheroes-v5';

const CORE_ASSETS = [
  './',
  './index.html',
  './lea.html',
  './smoke.html',
  './thestral.html',
  './style.css',
  './engine.js',
  './lang-en.js',
  './lang-it.js',
  './lang-es.js',
  './lang-fr.js',
  './lang-de.js',
  './lang-pt.js',
  './lang-ja.js',
  './lang-zh.js',
  './manifest.json',
  './favicon.png',
  './favicon_src.jpg'
];

const IMAGE_ASSETS = [
  './images/lea/lea_portrait.jpg',
  './images/lea/lea_hacking.jpg',
  './images/lea/lea_typing.jpg',
  './images/lea/loft_lea.jpg',
  './images/smoke/smoke_portrait.jpg',
  './images/smoke/smoke.jpg',
  './images/smoke/smoke_door.jpg',
  './images/smoke/smoke_window.jpg',
  './images/thestral/thestral_portrait.jpg',
  './images/thestral/thestral.jpg',
  './images/thestral/thestral_hands.jpg',
  './images/shared/alley.jpg',
  './images/shared/city.jpg',
  './images/shared/city2.jpg',
  './images/shared/city_forget.jpg',
  './images/shared/code_scroll.jpg',
  './images/shared/crt.jpg',
  './images/shared/empty_crt.jpg',
  './images/shared/family.jpg',
  './images/shared/family2.jpg',
  './images/shared/family_quiet.jpg',
  './images/shared/graffiti.jpg',
  './images/shared/hacking.jpg',
  './images/shared/loft.jpg',
  './images/shared/virus.jpg',
  './images/shared/virus2.jpg',
  './images/shared/virus_screen.jpg'
];

const ALL_ASSETS = [...CORE_ASSETS, ...IMAGE_ASSETS];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => Promise.allSettled(
        ALL_ASSETS.map(url => cache.add(url).catch(() => {}))
      ))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;

      return fetch(e.request).then(response => {
        if (response && response.status === 200 && (response.type === 'basic' || response.type === 'cors')) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return response;
      }).catch(() => {
        if (e.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});