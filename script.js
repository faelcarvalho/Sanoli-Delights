function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(
  "#home, #home img, #product, #product h2, #product p, #product img, #about, #about h2, #about p, #about img, #contact, #contact h2, #contact .contact-info, #contact form"
);
