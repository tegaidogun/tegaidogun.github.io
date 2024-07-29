// Existing JavaScript code
function toggleMenu() {
    const burger = document.querySelector('.burger');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    burger.classList.toggle('burger-open');
    navbar.classList.toggle('nav-open');

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
}

// Add the animation keyframes to the navmenu.css file
const styleSheet = document.styleSheets[1];
styleSheet.insertRule(`
@keyframes navLinkFade {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}`, styleSheet.cssRules.length);

// Load navmenu
fetch('pages/navmenu.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navmenu').innerHTML = data;
    });

function changeBurgerColor(origin, destination, direction) {
    const bars = document.querySelectorAll('.burger .bar');
    const sectionColors = {
        0: 'white', // Default color for the first section
        1: '#2a5298', // Color for the second section
        // Add more sections and their colors here
    };

    const color = sectionColors[destination.index] || 'initial';
    bars.forEach(bar => {
        bar.style.backgroundColor = color;
    });
}
