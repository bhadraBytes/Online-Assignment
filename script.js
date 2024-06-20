document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".section-nav ul li a");
  const sections = document.querySelectorAll(".content-section");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top:
          targetSection.offsetTop -
          document.querySelector(".section-nav").offsetHeight,
        behavior: "smooth",
      });

      navLinks.forEach((nav) => nav.classList.remove("active"));
      this.classList.add("active");
    });
  });

  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach((section) => {
      const sectionTop =
        section.offsetTop -
        document.querySelector(".section-nav").offsetHeight -
        10;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active");
      }
    });
  });
});



function toggleHelpBox() {
  var helpBox = document.getElementById("helpBox");
  helpBox.classList.toggle("open");
}


document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu-icon');
  const navMenu = document.getElementById('nav-menu');
  const contactInfo = document.querySelector('.contact-info');

  menuIcon.addEventListener('click', function () {
    menuIcon.classList.toggle('active');
    navMenu.classList.toggle('active');
    contactInfo.classList.toggle('active');
  });
});
