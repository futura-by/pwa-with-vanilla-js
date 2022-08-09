const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/coffee1.jpg",
  "/images/coffee2.jpg",
  "/images/coffee3.jpg",
  "/images/coffee4.jpg",
  "/images/coffee5.jpg",
  "/images/coffee6.jpg",
  "/images/coffee7.jpg",
  "/images/coffee8.jpg",
  "/images/coffee9.jpg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );

  // setInterval( function () {
  //   console.log('send notification');
  //   self.registration.showNotification(`My first spell ${(new Date()).getTime()}`, {
  //     body: `Hello - ${(new Date()).getTime()}`    
  //   });
  // }, 5000);
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.open(staticDevCoffee).then(cache => cache.match(fetchEvent.request)).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});


