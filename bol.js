// Bouton CTA
document.getElementById("cta").addEventListener("click", function() {
    alert("🚀 Votre boutique sera bientôt créée !");
  });
  // Menu hamburger
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Animation au scroll (apparition des sections)
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(sec => {
      const secTop = sec.getBoundingClientRect().top;

      if (secTop < triggerBottom) {
        sec.classList.add("show");
      }
    });
  });


// Effet "header change couleur en scroll"
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
