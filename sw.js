/* Service worker del portal. Ojo: está en la raíz de geol21.github.io, donde viven
   también las demás apps. Por eso solo atiende los archivos del portal y nunca
   toca las peticiones ni las cachés de las otras apps.
   Al publicar cambios, sube el número de VERSION. */
const VERSION = 'portal-v2';
const ARCHIVOS = ['/', '/index.html', '/manifest.json', '/logo.jpg', '/PlusJakartaSans.ttf', '/icon-192.png', '/icon-512.png',
  '/iconos/cilindros.png', '/iconos/ronda.png', '/iconos/inv-cilindros.png', '/iconos/inv-gases.png', '/iconos/tanques.png', '/iconos/alarmas.png', '/iconos/verificar.png'];
const DEL_PORTAL = new Set(ARCHIVOS);

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k.indexOf('portal-') === 0 && k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== self.location.origin || !DEL_PORTAL.has(u.pathname)) return;  // lo demás no es del portal
  e.respondWith((async () => {
    const cache = await caches.open(VERSION);
    const guardado = await cache.match(u.pathname);
    const red = fetch(e.request).then(r => { if (r && r.ok) cache.put(u.pathname, r.clone()); return r; }).catch(() => null);
    return guardado || (await red) || new Response('Sin conexión', { status: 503 });
  })());
});
