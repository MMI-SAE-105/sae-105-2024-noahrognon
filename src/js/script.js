// Gestion de l'ouverture et fermeture du menu
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true' || false;
    menuBtn.setAttribute('aria-expanded', !expanded);
    menu.setAttribute('aria-hidden', expanded);
    menu.classList.toggle('active');
});
const carouselContent = document.getElementById('carousel-content');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

prevButton.addEventListener('click', () => {
    carouselContent.scrollBy({
        left: -carouselContent.clientWidth,
        behavior: 'smooth',
    });
});

nextButton.addEventListener('click', () => {
    carouselContent.scrollBy({
        left: carouselContent.clientWidth,
        behavior: 'smooth',
    });
});

