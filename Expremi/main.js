const navbarLinks = document.getElementsByClassName("navbar-links")[0];
document
  .getElementsByClassName("toggle-button")[0]
  .addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
  });
