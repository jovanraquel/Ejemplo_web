//(21/08/2023)
//Carrusel y contacto

//Carrusel de imagenes
const carousel = document.querySelector(".carousel");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
let currentIndex = 0;

function showSlide(index) {
  if (index < 0) {
    index = carousel.children.length - 1;
  } else if (index >= carousel.children.length) {
    index = 0;
  }

  carousel.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

setInterval(nextSlide, 5000); // Cambiar de imagen cada 5 segundos

showSlide(currentIndex);

//contacto
const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Envío de formularios
  // Ejemplo:
  // fetch('url_de_tu_servidor', {
  //     method: 'POST',
  //     body: new FormData(contactForm)
  // })
  // .then(response => response.json())
  // .then(data => {
  //     // Respuesta del servidor
  // });
});

