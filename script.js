// Dom Elements
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links"); // Changed to target .nav-links
const buttons = document.querySelectorAll("[data-carousel-button]");
let jonasAge = document.getElementById("age");

// Adds active class to the section you are on
navLinks[0].classList.add("active");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.href.includes(current)) {
      link.classList.add("active");
    }
  });
});

// Function to change my age

function calculateAge(birthDate) {
  const currentDate = new Date();
  const birth = new Date(birthDate);
  let age = currentDate.getFullYear() - birth.getFullYear();
  const monthDiff = currentDate.getMonth() - birth.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && currentDate.getDate() < birth.getDate())
  ) {
    age--;
  }
  return age;
}

function showAge() {
  const myAge = calculateAge("1999-02-13");
  jonasAge.textContent = myAge;
}

showAge();

// Picture carousel
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
    console.log("muthafucka");
  });
});
