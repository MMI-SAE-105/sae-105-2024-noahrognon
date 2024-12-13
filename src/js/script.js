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

if (prevButton) {
    prevButton.addEventListener('click', () => {
    carouselContent.scrollBy({
        left: -carouselContent.clientWidth,
        behavior: 'smooth',
    });
});}

if (nextButton) {
    nextButton.addEventListener('click', () => {
    carouselContent.scrollBy({
        left: carouselContent.clientWidth,
        behavior: 'smooth',
    });
});}
const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        scrollToTopButton.style.display = "flex";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

if (scrollToTopButton) {
    scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});}
document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.faq-question').forEach((otherButton) => {
            if (otherButton !== button) {
                otherButton.setAttribute('aria-expanded', 'false');
                const otherAnswer = otherButton.nextElementSibling;
                if (otherAnswer) {
                    otherAnswer.setAttribute('aria-hidden', 'true');
                }
            }
        });

        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !expanded);

        const answer = button.nextElementSibling;
        if (answer) {
            answer.setAttribute('aria-hidden', expanded);
        }
    });
});
