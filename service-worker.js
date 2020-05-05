/*jshint esversion: 6 */

const cacheName = 'v1::static';

self.addEventListener('install', function(e) {
  console.log("Installed", e);
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll([
        './images/android-chrome-192x192.png',
        './images/android-chrome-512x512.png',
        './images/apple-touch-icon.png',
        './browserconfig.xml',
        './images/favicon-16x16.png',
        './images/favicon-32x32.png',
        './images/favicon.ico',
        './images/mstile-150x150.png',
        './safari-pinned-tab.svg',
        './site.webmanifest',
        './sw.js',
        './style.css',
        './index.html',
        './index.js'

      ]).then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('fetch', function(e) {
  console.log("Service worker fetch", e);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});