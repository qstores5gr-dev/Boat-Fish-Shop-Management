const labels = {
  dashboard: ["Dashboard", "අද වෙළඳසැලේ තත්ත්වය"],
  pos: ["විකුණුම් / POS", "විකුණුම්"],
  purchases: ["මිලදී ගැනීම්", "මිලදී ගැනීම්"],
  stock: ["තොග කළමනාකරණය", "තොග කළමනාකරණය"],
  customers: ["පාරිභෝගික ණය", "පාරිභෝගික ණය"],
  suppliers: ["සැපයුම්කරුවන්", "සැපයුම්කරුවන්"],
  bills: ["බිල්පත්", "බිල්පත්"],
  expenses: ["ආදායම් / වියදම්", "ආදායම් / වියදම්"],
  reports: ["ව්‍යාපාර වාර්තා", "ව්‍යාපාර වාර්තා"],
  users: ["පරිශීලකයන්", "පරිශීලකයන්"],
  settings: ["සැකසුම්", "සැකසුම්"]
};
let currentUser = "KING";
const loginScreen = document.getElementById("login-screen");
const app = document.getElementById("app");

function enterApp(user) {
  currentUser = user;
  loginScreen.classList.add("hidden");
  app.classList.remove("hidden");
  document.getElementById("active-user").textContent = user;
  document.getElementById("welcome-user").textContent = user;
  document.getElementById("user-dot").classList.toggle("queen", user === "QUEEN");
  document.querySelector(".welcome-row h1 span").style.color = user === "KING" ? "#2d70c4" : "#16834e";
}
document.querySelectorAll(".user-choice").forEach(button => {
  button.addEventListener("click", () => enterApp(button.dataset.user));
});

function showPage(page) {
  const info = labels[page] || labels.dashboard;
  document.getElementById("dashboard-page").classList.toggle("hidden", page !== "dashboard");
  document.getElementById("placeholder-page").classList.toggle("hidden", page === "dashboard");
  document.getElementById("page-heading").textContent = info[0];
  document.getElementById("placeholder-title").textContent = info[1];
  document.getElementById("placeholder-description").textContent =
    page === "dashboard" ? "" : "මෙම කොටස ඊළඟ සංවර්ධන අදියරේදී සකස් කරනු ලැබේ. දත්ත සම්බන්ධ කිරීම තවම සිදු කර නැත.";
  document.querySelectorAll(".nav-item").forEach(item => item.classList.toggle("active", item.dataset.page === page));
  document.getElementById("sidebar").classList.remove("open");
}
document.querySelectorAll(".nav-item").forEach(item => item.addEventListener("click", () => showPage(item.dataset.page)));
document.querySelectorAll("[data-go]").forEach(button => button.addEventListener("click", () => showPage(button.dataset.go)));
document.getElementById("menu-toggle").addEventListener("click", () => document.getElementById("sidebar").classList.toggle("open"));
document.getElementById("user-pill").addEventListener("click", () => {
  app.classList.add("hidden");
  loginScreen.classList.remove("hidden");
});
const now = new Date();
document.getElementById("today").textContent = now.toLocaleDateString("si-LK", { day:"numeric", month:"short", year:"numeric" });
document.getElementById("date-chip").textContent = now.toLocaleDateString("si-LK", { weekday:"long", day:"numeric", month:"long", year:"numeric" });
