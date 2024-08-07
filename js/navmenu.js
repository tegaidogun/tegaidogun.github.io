function toggleMenu() {
    const burger = document.querySelector('.burger');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle the nav-open and burger-open classes
    const isMenuOpenBeforeToggle = navbar.classList.contains('nav-open');
    burger.classList.toggle('burger-open');
    navbar.classList.toggle('nav-open');

    // Animation for nav links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    if (isMenuOpenBeforeToggle) {
        // Menu was open and is now being closed, update burger color based on the current section
        updateBurgerColorForSection();
    } else {
        // Menu is being opened, set the burger button color for the open state
        updateBurgerColorForOpenMenu();
    }
}

// Function to set a specific color for the burger button when the menu is open
function updateBurgerColorForOpenMenu() {
    const bars = document.querySelectorAll('.burger .bar');
    const openMenuColor = '#2a5298'; // Set the desired color when menu is open

    bars.forEach(bar => {
        bar.style.backgroundColor = openMenuColor;
    });
}

// Define section colors for different pages
const pageSectionColors = {
    index: {
        0: '#ffffff',
        1: 'red',
        2: '#ffffff',
        3: 'red',
        4: '#ffffff',
        5: 'red',
    },
    projects: {
        0: '#2a5298',
        1: 'red',
    },
    shelf: {
        0: '#f0f0f0',
        1: 'red',
    },
    contact: {
        0: '#2a5298',
        1: 'red',
    },
    // Add more pages as needed
};

// Extract the current page name from the URL
function getPageName() {
    const path = window.location.pathname;
    const page = path.substring(path.lastIndexOf('/') + 1);
    if (!page.split('.')[0]) {
        return "index";
    } else {
        return page.split('.')[0]; // Return the page name without extension
    }
}

// Get the section colors for the current page
const currentPage = getPageName();
const sectionColors = pageSectionColors[currentPage] || {};

// Function to update the burger color based on the current active section
function updateBurgerColorForSection() {
    const bars = document.querySelectorAll('.burger .bar');
    const activeSection = document.querySelector('.fp-section.active');

    if (activeSection) {
        const sectionIndex = Array.from(activeSection.parentElement.children).indexOf(activeSection);
        const color = sectionColors[sectionIndex] || 'initial';
        bars.forEach(bar => {
            bar.style.backgroundColor = color;
        });
    }
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
fetch('components/navmenu.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navmenu').innerHTML = data;
    });

function changeBurgerColor(origin, destination, direction) {
    const bars = document.querySelectorAll('.burger .bar');
    const navbar = document.querySelector('.navbar');

    // Only change the color if the navbar is not open
    if (!navbar.classList.contains('nav-open')) {
        const color = sectionColors[destination.index] || 'initial';
        bars.forEach(bar => {
            bar.style.backgroundColor = color;
        });
    }
}
