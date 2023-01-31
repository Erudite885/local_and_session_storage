const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

const userId = "u123";
const user = {
  name: "matt",
  age: 25,
  hobbies: ["cooking", "dancing"],
};

storeBtn.addEventListener("click", () => {
  localStorage.setItem("uid", userId);
  localStorage.setItem("user", JSON.stringify(user));
});
retrBtn.addEventListener("click", () => {
  const extractedId = localStorage.getItem("uid");
  const extractedUser = JSON.parse(localStorage.getItem("user"));
  console.log(extractedUser);
  if (extractedId) {
    console.log(`Got the extracted id: ${extractedId}`);
  } else {
    console.log("Failed to get the extracted id");
  }
});
