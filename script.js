const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const iconOpen = document.getElementById("iconOpen");
const iconClose = document.getElementById("iconClose");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  
  iconOpen.classList.toggle("opacity-0");
  iconOpen.classList.toggle("scale-75");
  iconOpen.classList.toggle("rotate-45");
  
  iconClose.classList.toggle("opacity-0");
  iconClose.classList.toggle("scale-100");
  iconClose.classList.toggle("rotate-0");
});

// Smooth Scrolling (Optional if anchor links don't scroll smoothly)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
    document.getElementById("mobileMenu").classList.add("hidden");
  });
});