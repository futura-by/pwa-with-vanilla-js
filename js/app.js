const container = document.querySelector(".container");
const coffees = [
  {
    name: "Perspiciatis",
    image: "images/coffee1.jpg",
  },
  {
    name: "Voluptatem",
    image: "images/coffee2.jpg",
  },
  {
    name: "Explicabo",
    image: "images/coffee3.jpg",
  },
  {
    name: "Rchitecto",
    image: "images/coffee4.jpg",
  },
  {
    name: " Beatae",
    image: "images/coffee5.jpg",
  },
  {
    name: " Vitae",
    image: "images/coffee6.jpg",
  },
  {
    name: "Inventore",
    image: "images/coffee7.jpg",
  },
  {
    name: "Veritatis",
    image: "images/coffee8.jpg",
  },
  {
    name: "Accusantium",
    image: "images/coffee9.jpg",
  },
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}

Notification.requestPermission(function (result) {
  console.log("User choice", result);
  if (result !== "granted") {
    console.log("No notification permission granted!");
    // } else {
    //   configurePushSub();// Write your custom function that pushes your message
  }
});

navigator.serviceWorker.ready.then((sw) => {
  console.log('ready');
  sw.showNotification(`My first spell`, {
    body: `Hello - `,
  });
});
