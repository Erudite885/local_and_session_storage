const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retr-btn");

storeBtn.addEventListener("click", () => {
  const userId = "u123";
  const user = {
    name: "matt",
    age: 25,
  };
  document.cookie = `uid=${userId}`;
  document.cookie = `uid=${JSON.stringify(user)}`;
});

retrBtn.addEventListener("click", () => {
  const cookieData = document.cookie.split(";");
  const data = cookieData.map((i) => {
    return i.trim();
  });
  console.log(data);
});
