function scrollToSection() {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
}

// Scroll reveal for sections
const sections = document.querySelectorAll('.section');

function revealSections() {
  const windowHeight = window.innerHeight;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight - 100) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);
