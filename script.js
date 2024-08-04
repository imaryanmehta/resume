document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Smooth scroll to section heading
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }

            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });
        });
    });
});
