$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }
    });
  });

website2
// apalah
  // Function to detect if the user is on a mobile device
=======

// Function to detect if the user is on a mobile device
// Function to detect if the user is on a mobile device
main
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

document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});

// Hamburger Menu

const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbarList = document.querySelector(".navbar-list");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navbarList.classList.toggle("show");
});

// Dark Mode

const darkModeToggle = document.querySelector(".dark-mode-toggle");
const body = document.body;

function setDarkMode(isDark) {
  if (isDark) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
  localStorage.setItem("darkMode", isDark);
}

const savedDarkMode = localStorage.getItem("darkMode");

if (savedDarkMode !== null) {
  setDarkMode(savedDarkMode === "true");
}

darkModeToggle.addEventListener("click", () => {
  const isDarkMode = body.classList.toggle("dark-mode");
  setDarkMode(isDarkMode);
});