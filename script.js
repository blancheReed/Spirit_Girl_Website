const hamburgerButton = document.querySelector(".hamburger-button");
const mobileNav = document.querySelector(".mobile-nav");

hamburgerButton.addEventListener("click", () => {
  mobileNav.classList.toggle("display-none");
});

// const charactersButton = document.querySelector(".characters-button");
// const mobileNav2 = document.querySelector(".mobile-nav2");

// charactersButton.addEventListener("click", () => {
//   mobileNav2.classList.toggle("display-none");
// });
