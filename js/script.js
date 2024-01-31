const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const mixer = mixitup(".project__grid");

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content h4", {
  ...scrollRevealOption,
  delay: 300,
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__content .btn", {
  ...scrollRevealOption,
  delay: 1300,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 300,
});

ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content h4", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

// service container
ScrollReveal().reveal(".service__card", {
  duration: 1000,
  interval: 500,
});

// blog container
ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});

document.addEventListener('DOMContentLoaded', function () {
  var interestedSelect = document.getElementById("interested");
  var options = interestedSelect.getElementsByTagName("option");

  for (var i = 0; i < options.length; i++) {
    options[i].style.color = "black"; // Mengatur warna teks opsi menjadi biru
    options[i].style.fontWeight = "bold";
    options[i].style.color = "white";
    options[i].style.backgroundColor = "#0f1221";
      if (options[i].disabled) {
          options[i].style.color = "grey"; // Mengubah warna font opsi yang dinonaktifkan
      }
      if (options[i].selected) {
          options[i].style.fontWeight = "bold"; // Mengubah tebal font opsi yang terpilih
      }
  }
});




