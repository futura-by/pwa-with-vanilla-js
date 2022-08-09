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

  setTimeout( function () {
    console.log('send notification');
    self.registration.showNotification(

      'Hello', {
        dir: 'ltr',
        actions: [
                    {
                        action: "confirm",
                        title: "Okay",
                        icon: "images/icons/icon-96x96.png",
                    },
                    {
                        action: "cancel",
                        title: "Cancel",
                        icon: "images/icons/icon-96x96.png",
                    },
                ],
        vibrate: [200, 100, 200, 100, 200, 100, 200],
    }

    );
  }, 5000);
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.open(staticDevCoffee).then(cache => cache.match(fetchEvent.request)).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});


