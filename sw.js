self.addEventListener('install',(event)=>{
  console.log('sw: Instalado');
const promiseCache= caches.open('cache-v1').then((cache)=>{
        cache.add('https://evelynbahena7u7.github.io/PWA-Practica8/');
        cache.add('https://evelynbahena7u7.github.io/PWA-Practica8/index.html');
        cache.add('https://evelynbahena7u7.github.io/PWA-Practica8/app.js');
        cache.add('https://evelynbahena7u7.github.io/PWA-Practica8/js/camera.js');
        cache.add('images/icons/android-launchericon-48-48.png');
        cache.add('images/icons/android-launchericon-72-72.png');
        cache.add('images/icons/android-launchericon-96-96.png');
        cache.add('images/icons/android-launchericon-144-144.png');
        cache.add('images/icons/android-launchericon-192-192.png');
        cache.add('images/icons/android-launchericon-512-512.png');
        cache.add('https://evelynbahena7u7.github.io/PWA-Practica8/manifest.json');
        cache.add('https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css');
        cache.add('https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js');
        cache.add('https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js');
      })
      event.waitUntil(promiseCache);
 })

 self.addEventListener('fetch', (event)=>{
  event.respondWith(
      caches.match(event.request).then((response)=>{
          if(response){
              return response;
          }
          return fetch(event.request);
      })
  );
})