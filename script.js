// Function to detect if the user is on a mobile device
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Apply mobile adjustments if the user is on a mobile device
function adjustForMobile() {
    if (isMobile()) {
        // Add a mobile-specific class to the body
        document.body.classList.add('mobile');

        // Adjust elements like the navigation menu, text size, or spacing
        adjustNavbarForMobile();
        adjustRunningTextForMobile();
        adjustCardsForMobile();
    }
}

function adjustNavbarForMobile() {
    const navbar = document.querySelector('.navbar');
    navbar.style.flexDirection = 'column'; // Stack the navigation links vertically

    // You can hide the menu initially and display it using a hamburger icon
    const menuIcon = document.getElementById('menu-icon');
    menuIcon.style.display = 'block'; // Show the menu icon on mobile

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('show-menu'); // Toggle the menu when icon is clicked
    });
}

function adjustRunningTextForMobile() {
    const runningText = document.querySelectorAll('.running-text p');
    runningText.forEach(text => {
        text.style.fontSize = '14px'; // Adjust text size for mobile
    });
}

function adjustCardsForMobile() {
    const cards = document.querySelectorAll('.card-container .card');
    cards.forEach(card => {
        card.style.flexDirection = 'column'; // Stack card content for mobile
        card.style.width = '100%';           // Full width for mobile screens
        card.style.marginBottom = '20px';    // Add space between cards
    });
}

// Execute the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    adjustForMobile();
});
