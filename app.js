const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

const userId = "u123";

storeBtn.addEventListener("click", () => {
  localStorage.setItem("uid", userId);
});
retrBtn.addEventListener("click", () => {
  const extractedId = localStorage.getItem("uid");
  if (extractedId) {
    console.log(`Got the extracted id: ${extractedId}`);
  } else {
    console.log("Failed to get the extracted id");
  }
});
