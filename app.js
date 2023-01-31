const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

let db;

const dbRequest = indexedDB.open("storageDummy", 1);

dbRequest.onsuccess = function (event) {
  db = event.target.result;
};

dbRequest.onupgradeneeded = function (event) {
  db = event.target.result;

  const objStore = db.createObjectStore("products", { keyPath: "id" });

  objStore.transaction.oncomplete = function (event) {
    const productsStore = db
      .transaction("products", "readonly")
      .objectStore("products");
    productsStore.add({
      id: "p1",
      title: "A First Product",
      price: 10,
      tags: ["classic", "posh", "affordable"],
    });
  };
};

dbRequest.onerror = function (event) {
  console.log("error!!!!!!!!!!!!!!");
};

storeBtn.addEventListener("click", () => {
  if (!db) {
    return;
  }
  const productsStore = db
    .transaction("products", "readonly")
    .objectStore("products");
  productsStore.add({
    id: "p2",
    title: "A Second Product",
    price: 100,
    tags: ["pricy", "posh", "luxury"],
  });
});

retrBtn.addEventListener("click", () => {
  const productsStore = db
    .transaction("products", "readonly")
    .objectStore("products");
  const request = productsStore.get("p2");

  request.onsuccess = function () {
    console.log(request.result);
  };
});
