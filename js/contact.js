// Example: Adding a click event listener to log messages
document.addEventListener('DOMContentLoaded', function () {
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
        card.addEventListener('click', () => {
            console.log(`Navigating to ${card.querySelector('.card-link').href}`);
        });
    });
});
