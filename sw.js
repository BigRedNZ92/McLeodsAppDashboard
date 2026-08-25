// Minimal service worker — required by Chrome/Android for standalone install.
// Doesn't cache anything yet; just needs to exist and control the page.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Pass-through — no offline caching for now.
  event.respondWith(fetch(event.request));
});
