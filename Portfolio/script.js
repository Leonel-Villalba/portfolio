const ham = document.querySelector('.menu-ham');
const enlaces = document.querySelector('.enlaces-menu')
const barras = document.querySelectorAll('.menu-ham span')


ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')})
});

ScrollReveal().reveal('.img', {delay: 500});
ScrollReveal().reveal('.acerca-contenido', {delay: 500});
ScrollReveal().reveal('.portfolio-projects', {delay: 500});
ScrollReveal().reveal('.form', {delay: 500});