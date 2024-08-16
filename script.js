document.addEventListener('DOMContentLoaded', (event) => {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const darkModeIcon = darkModeToggle.querySelector('i');
    
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            darkModeIcon.classList.remove('fa-moon');
            darkModeIcon.classList.add('fa-sun');
        } else {
            darkModeIcon.classList.remove('fa-sun');
            darkModeIcon.classList.add('fa-moon');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Typing animation
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");

    const textArray = ["Web Developer", "Front-End Developer", "Back-End Developer", "Full-Stack Developer"];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } 
        else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } 
        else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if(textArrayIndex>=textArray.length) textArrayIndex=0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    if(textArray.length) setTimeout(type, newTextDelay + 250);

    // Animate skill bars on scroll
    function animateSkills() {
        const skillsSection = document.querySelector('#skills');
        const progressBars = document.querySelectorAll('.progress');
        
        const sectionPosition = skillsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if(sectionPosition < screenPosition) {
            progressBars.forEach(progress => {
                const value = progress.dataset.progress;
                progress.style.opacity = 1;
                progress.style.width = `${value}%`;
            });
        }
    }

    window.addEventListener('scroll', animateSkills);

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const parallax = document.querySelector('.parallax');
        let scrollPosition = window.pageYOffset;
        parallax.style.backgroundPositionY = scrollPosition * 0.7 + 'px';
    });

    // Add subtle animation to hero shapes
    const heroShapes = document.querySelectorAll('.hero-shape');
    heroShapes.forEach(shape => {
        setInterval(() => {
            shape.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px) rotate(${Math.random() * 10 - 5}deg)`;
        }, 3000);
    });
});
