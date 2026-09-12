const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

// 1. Klik hamburger buat buka tutup
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// 2. Klik menu buat nutup otomatis
const navLinks = document.querySelectorAll("#nav-menu a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  });
});
