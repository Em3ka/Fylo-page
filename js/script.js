document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navbar.classList.add("navbar--scroll");
    } else {
      navbar.classList.remove("navbar--scroll");
    }
  });

  const email = document.getElementById("email");
  const errorMessage = document.querySelector(".error-message");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,4}$/;

  document.getElementById("email-form").addEventListener("submit", (event) => {
    if (!emailRegex.test(email.value)) {
      event.preventDefault();
      errorMessage.style.opacity = 1;
    }
  });

  const icons = document.querySelectorAll(".footer__social-icon");
  icons.forEach((icon) => {
    if (icon.classList.contains("fa-brands")) {
      icon.classList.add("loaded");
    } else {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (
            mutation.attributeName === "class" &&
            icon.classList.contains("fa-brands")
          ) {
            icon.classList.add("loaded");
            observer.disconnect();
          }
        });
      });

      observer.observe(icon, { attributes: true });
    }
  });
});