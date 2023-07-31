// CAROUSEL

let swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// BOTÓN SELECCIONADO

const toggleSelected = button => {
  button.classList.toggle('selected');
}

// BOTONES SIGUIENTE & ATRÁS

const productoContainer = document.querySelectorAll('.producto-container');
const antBoton = document.querySelectorAll('.ant-boton');
const sigBoton = document.querySelectorAll('.sig-boton');

productoContainer.forEach((card, i) => {
  const cardWidth = card.querySelector('.producto-card').offsetWidth;

  sigBoton[i].addEventListener('click', () => {
    card.scrollLeft += cardWidth;
  });

  antBoton[i].addEventListener('click', () => {
    card.scrollLeft -= cardWidth;
  });
});