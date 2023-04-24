const navMenu = document.querySelector(".navMenu");
const navIcon = document.querySelector("#navIcon");

let toggle = false;

const mobileNavLinks = document.querySelectorAll(".mnavLinks");

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hideNav();
  });
});

navMenu.addEventListener("click", () => {
  showNav();
});

function showNav() {
  gsap.to(".mobileNav", { x: 0, opacity: 1 });
}

function hideNav() {
  gsap.to(".mobileNav", { x: 800, opacity: 0 });
}
