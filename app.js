const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retr-btn");

storeBtn.addEventListener("click", () => {
    const userId = 'u123'
    document.cookie = `uid=${userId}`
});
retrBtn.addEventListener("click", () => {
    console.log(document.cookie);
});
