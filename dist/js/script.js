const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
const toTop = document.querySelector("#to-top");

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
// 3. Munculin tombol pas scroll
window.onscroll = function () {
  if (window.scrollY > 300) {
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// 4. Klik tombol buat scroll ke atas
toTop.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
