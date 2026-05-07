const swiper = new Swiper(".mySwiper", {

  slidesPerView: 1,

  spaceBetween: 15,

  loop: false,

  speed: 700,

  grabCursor: true,

  centeredSlides: false,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },

  breakpoints: {

    768: {
      slidesPerView: 1.2,
    },

    1024: {
      slidesPerView: 1.4,
    }

  }

});

const elements = document.querySelectorAll(
  ".section-title, .service-card, .requirements-list li, .hero-content"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

elements.forEach((el) => {
  el.classList.add("fade-in");
  observer.observe(el);
});