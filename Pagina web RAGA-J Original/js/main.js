//(21/08/2023)
//Carrusel y contacto

// Funcion de cargar pagina
window.addEventListener("load", function () {
  const loaderContainer = document.querySelector(".loader-container");
  loaderContainer.style.display = "none";
});

("use strict");

// Menu plegable
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  burger.classList.toggle("active");
});

  // Función para mostrar el logotipo en pantalla completa
  function mostrarLogotipoEnPantallaCompleta() {
    var contenedor = document.getElementById('logo-en-pantalla-completa');
    contenedor.style.display = 'block';
  }

  // Función para ocultar el logotipo en pantalla completa
  function ocultarLogotipoEnPantallaCompleta() {
    document.getElementById('logo-en-pantalla-completa').style.display = 'none';
  }

