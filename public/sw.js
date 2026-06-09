const CACHE_NAME = 'gym-douce-cache-v3';

const BASE_URL = new URL(self.registration.scope).pathname;
const withBase = (path) => `${BASE_URL}${path.replace(/^\//, '')}`;

const STATIC_ASSETS = [
  withBase(''),
  withBase('index.html'),
  withBase('manifest.json'),
  withBase('icon-192.png'),
  withBase('icon-512.png'),
  withBase('exercises/dos-superieur.webp'),
  withBase('exercises/epaules.webp'),
  withBase('exercises/posture.webp'),
  withBase('exercises/posture-torse.webp'),
  withBase('exercises/posture-deadlift.webp'),
  withBase('exercises/posture-epaule-bras.webp'),
  withBase('exercises/posture-epaules.webp'),
  withBase('exercises/superman.webp'),
  withBase('exercises/torse.webp')
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
          return undefined;
        })
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }

          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        })
        .catch(() => {
          if (event.request.mode === 'navigate') {
            return caches.match(withBase('index.html'));
          }
          return undefined;
        });
    })
  );
});
