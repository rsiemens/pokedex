function leftPad (s, pad, size) {
  while (s.length < size) {
    s = pad + s;
  }
  return s;
}

this.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open('v1').then(cache => {
      var cacheFiles = [
        '/index.html',
        '/css/index.css',
        '/js/app.bundle.js'
      ];

      for (let i = 1; i < 152; i++) {
        var stringNum = leftPad(i.toString(), '0', 3);
        cacheFiles.push('/img/pokemon/' + stringNum + '.gif');
      }

      return cache.addAll(cacheFiles);
    })
  );
});

this.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).catch(() => {
      return fetch(evt.request);
    })
  );
});

