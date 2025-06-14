// Mobile Navigation Toggle
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const hamburger = document.querySelector('.hamburger');

    mobileMenu.classList.toggle('hidden');
    hamburger.classList.toggle('active');

    // Animate hamburger bars
    const bars = hamburger.querySelectorAll('.bar');
    if (hamburger.classList.contains('active')) {
        bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    }
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const mobileMenu = document.querySelector('.mobile-menu');
        const hamburger = document.querySelector('.hamburger');
        const bars = hamburger.querySelectorAll('.bar');

        mobileMenu.classList.add('hidden');
        hamburger.classList.remove('active');

        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    });
});

// Carousel functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dots .dot');

function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.add('hidden');
        slide.classList.remove('active');
    });

    // Update dots
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-blue-600');
        } else {
            dot.classList.remove('bg-blue-600');
            dot.classList.add('bg-gray-300');
        }
    });

    // Show current slide
    slides[index].classList.remove('hidden');
    slides[index].classList.add('active');
}

function changeSlide(direction) {
    currentSlideIndex += direction;

    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }

    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
}

// Auto-advance carousel
setInterval(() => {
    changeSlide(1);
}, 5000);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form handling
const contactForm = document.querySelector('form[name="contact"]');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        // Get form data
        const formData = new FormData(this);
        const data = {};
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }

        // Simple form validation
        if (!data.name || !data.email || !data.message || !data.service) {
            e.preventDefault();
            alert('Bitte füllen Sie alle Pflichtfelder aus.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            e.preventDefault();
            alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
            return;
        }

        // Show loading state
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;

        submitButton.textContent = 'Wird gesendet...';
        submitButton.disabled = true;

        // Let Netlify handle the actual form submission
        // The form will redirect to /thank-you.html automatically
    });
}

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.service-item, .project-card, .contact-info, .contact-form');

    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Add floating label functionality
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    // Set placeholder to empty initially for floating label effect
    input.placeholder = '';

    input.addEventListener('focus', function () {
        this.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', function () {
        if (this.value === '') {
            this.parentElement.classList.remove('focused');
        }
    });

    // Check if input has value on page load
    if (input.value !== '') {
        input.parentElement.classList.add('focused');
    }
});

// Touch support for carousel on mobile
let touchStartX = 0;
let touchEndX = 0;

const carousel = document.querySelector('.carousel');

carousel.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

carousel.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next slide
            changeSlide(1);
        } else {
            // Swipe right - previous slide
            changeSlide(-1);
        }
    }
}
function sendMail() {
    // Function to send email using EmailJS
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        company: document.getElementById("company").value,
        service: document.getElementById("service").value,
        message: document.getElementById("message").value
    }

    EmailJSResponseStatus.send("service_yxqbkpc", "template_47lvydc", parms).then(alert("Nachricht gesendet!"))
}