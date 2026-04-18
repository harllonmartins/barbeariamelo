// Header Scroll Effect
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if (navList.classList.contains('active')) {
        icon.classList.remove('ri-menu-line');
        icon.classList.add('ri-close-line');
    } else {
        icon.classList.remove('ri-close-line');
        icon.classList.add('ri-menu-line');
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('ri-close-line');
        icon.classList.add('ri-menu-line');
    });
});

// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal(); // Trigger on load

// Active Navigation Link Update on Scroll
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const currentNavLink = document.querySelector('.nav-link[href*=' + sectionId + ']');

        if (currentNavLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                currentNavLink.classList.add('active');
            } else {
                currentNavLink.classList.remove('active');
            }
        }
    });
}
window.addEventListener('scroll', scrollActive);
