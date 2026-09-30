// Простой Service Worker для PWA.
// Нужен, чтобы Chrome на Android показал кнопку "Установить".
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});