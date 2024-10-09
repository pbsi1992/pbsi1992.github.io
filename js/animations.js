// animations.js

// Function to add slide-in effect on scroll
const slideInElements = document.querySelectorAll('.slide-in');
const fadeInElements = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

fadeInElements.forEach(fadeInElement => {
    appearOnScroll.observe(fadeInElement);
});

const slideInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

slideInElements.forEach(slideInElement => {
    slideInObserver.observe(slideInElement);
});