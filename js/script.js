// nav

document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.toggle-button');
  const smNav = document.querySelector('.sm-nav');
  const closeButton = document.querySelector('.close-button');

  toggleButton.addEventListener('click', function () {
    smNav.style.display = 'flex';
  });

  closeButton.addEventListener('click', function () {
    smNav.style.display = 'none';
  });

  // Initialize sections as hidden
  hideAllSections();

  // Event listener for icon clicks
  const icons = document.querySelectorAll('.icons span');
  icons.forEach(function (icon) {
    icon.addEventListener('click', function (event) {
      // Prevent other document click events
      event.stopPropagation();

      // Determine which card to show
      const cardId = event.target.getAttribute('data-target');
      if (cardId) {
        // Hide all sections first
        hideAllSections();
        // Show the clicked section
        document.getElementById(cardId).style.display = 'flex';
      }
    });
  });
});

// Function to hide all sections
function hideAllSections() {
  const sections = document.querySelectorAll('.cards');
  sections.forEach(function (section) {
    section.style.display = 'none';
  });
}











//////






// Function to toggle visibility of cards
function toggleCard(cardId) {
  var card = document.getElementById(cardId);
  if (card.style.display === "flex") {
      card.style.display = "none";
  } else {
      card.style.display = "flex";
  }
}

// Example usage for your icons
function showhtml() {
  toggleCard("html");
}

function showcss() {
  toggleCard("css");
}

function showjs() {
  toggleCard("js");
}

function hidehtml() {
  document.getElementById("html").style.display = "none";
}

function hidecss() {
  document.getElementById("css").style.display = "none";
}

function hidejs() {
  document.getElementById("js").style.display = "none";
}









// Add event listener to hide all cards when clicking outside
document.addEventListener('click', function(event) {
  // Check if the click is outside the cards
  if (!event.target.closest('.cards') && !event.target.closest('.icons span')) {
    hideAllSections();
  }
});

// Function to hide all sections
function hideAllSections() {
  hidehtml();
  hidecss();
  hidejs();
}