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

document.addEventListener('DOMContentLoaded', function () {
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    const backToPortraitButtons = document.querySelectorAll('.back-to-portrait');

    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function () {
            const portraitCard = button.closest('.profile-card.portrait');
            const landscapeCard = portraitCard.nextElementSibling; // The landscape card comes right after the portrait

            // Hide the portrait card and show the landscape card
            portraitCard.classList.add('hidden');
            landscapeCard.classList.remove('hidden');
        });
    });

    backToPortraitButtons.forEach(button => {
        button.addEventListener('click', function () {
            const landscapeCard = button.closest('.profile-card.landscape');
            const portraitCard = landscapeCard.previousElementSibling; // The portrait card comes right before the landscape

            // Hide the landscape card and show the portrait card
            landscapeCard.classList.add('hidden');
            portraitCard.classList.remove('hidden');
        });
    });
});