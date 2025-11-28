const CACHE_NAME = "orchasstra-v3"; 
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./assets/doug.wav",
  "./assets/stem1.wav",
  "./assets/stem2.wav",
  "./assets/stem3.wav",
  "./assets/stem4.wav",
  "./assets/stem5.wav",
  "./assets/stem6.wav",
  "./assets/secret.wav",
  "https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.js",
  "https://cdn.jsdelivr.net/npm/webmidi@3.1.6/dist/iife/webmidi.iife.js"
];

// Install
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[Service Worker] Caching app shell & audio");
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Fetch
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});