document.addEventListener('DOMContentLoaded', (event) => {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const darkModeIcon = darkModeToggle.querySelector('i');
    
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            darkModeIcon.classList.remove('fa-moon');
            darkModeIcon.classList.add('fa-sun');
            nightSkyAnimation();
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

    // Add star twinkling effect
    function twinkleStars() {
        const stars = document.querySelector('.stars');
        setInterval(() => {
            stars.style.backgroundPosition = `${Math.random() * 100}px ${Math.random() * 100}px`;
        }, 1000);
    }

    twinkleStars();

    function createComet() {
        const comet = document.querySelector('.comet');
        const startY = Math.random() * window.innerHeight;
        comet.style.top = `${startY}px`;
        comet.style.left = '-150px';
        comet.style.opacity = '1';
        comet.style.transform = 'rotate(-45deg)';
        
        let position = -150;
        const moveComet = setInterval(() => {
            position += 5;
            comet.style.left = `${position}px`;
            comet.style.top = `${startY + position * 0.5}px`;
            
            if (position > window.innerWidth + 150) {
                clearInterval(moveComet);
                comet.style.opacity = '0';
            }
        }, 20);
    }

    function animateGalaxies() {
        const galaxies = document.querySelectorAll('.galaxy');
        galaxies.forEach((galaxy, index) => {
            galaxy.style.top = `${Math.random() * 100}%`;
            galaxy.style.left = `${Math.random() * 100}%`;
            galaxy.style.opacity = '0.5';
            
            setTimeout(() => {
                galaxy.style.opacity = '0';
            }, 10000 + index * 5000);
        });
    }

    function nightSkyAnimation() {
        if (document.body.classList.contains('dark-mode')) {
            createComet();
            animateGalaxies();
            setTimeout(nightSkyAnimation, Math.random() * 10000 + 5000);
        }
    }

    // Initial call to start the night sky animation if in dark mode
    if (document.body.classList.contains('dark-mode')) {
        nightSkyAnimation();
    }
});
