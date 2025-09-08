const menuIcon = document.getElementById("menu-icon");
const nav = document.getElementById("nav");
const closeBtn = document.getElementById("close-btn");
const navLinks = nav.querySelectorAll("a");

const menuDisplay = () => {
   nav.style.display = "flex";
}

const menuHide = () => {
    nav.style.display = "none";
}

menuIcon.addEventListener("click", menuDisplay);
closeBtn.addEventListener("click", menuHide);

navLinks.forEach(link => {
    link.addEventListener("click", menuHide);
});

// Image Fade-In on Scroll
const images = document.querySelectorAll('.img-container img');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

images.forEach(image => {
    image.classList.add('fade-in');
    imageObserver.observe(image);
});

// Horizontal Gallery Navigation
const galleryWrappers = document.querySelectorAll('.gallery-wrapper');

galleryWrappers.forEach((wrapper, index) => {
    const gallery = wrapper.querySelector('.gallery-container');
    const leftArrow = wrapper.querySelector(`#left-arrow-${index + 1}`);
    const rightArrow = wrapper.querySelector(`#right-arrow-${index + 1}`);

    const scrollAmount = gallery.offsetWidth / 2;

    if (leftArrow) {
        leftArrow.addEventListener('click', () => {
            gallery.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
    }

    if (rightArrow) {
        rightArrow.addEventListener('click', () => {
            gallery.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }
});