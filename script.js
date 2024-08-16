document.addEventListener('DOMContentLoaded', () => {
    // Typed effect
    const typed = new Typed('.typed-text', {
        strings: ['Web Developer', 'Problem Solver', 'Tech Enthusiast'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        links.forEach(link => {
            link.classList.toggle('fade');
        });
        hamburger.classList.toggle('toggle');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Intersection Observer for fade-in effect
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Close mobile menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            hamburger.classList.remove('toggle');
            links.forEach(link => {
                link.classList.remove('fade');
            });
        });
    });

    // Dynamic gradient background
    function updateGradient() {
        const hue = (Date.now() / 100) % 360;
        document.body.style.background = `linear-gradient(135deg, 
            hsl(${hue}, 30%, 25%), 
            hsl(${(hue + 60) % 360}, 30%, 25%)
        )`;
    }

    // Call updateGradient every 100ms
    setInterval(updateGradient, 100);

    // Prevent flash of unstyled content
    document.body.classList.add('js-loading');
    window.addEventListener("load", showPage);

    function showPage() {
        document.body.classList.remove('js-loading');
    }
});
