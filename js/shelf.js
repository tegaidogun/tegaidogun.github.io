// Example: Adding a click event listener to log messages
document.addEventListener('DOMContentLoaded', function () {
    const shelfCards = document.querySelectorAll('.shelf-card');
    shelfCards.forEach(card => {
        card.addEventListener('click', () => {
            console.log(`Navigating to ${card.querySelector('.card-link').href}`);
        });
    });
});
