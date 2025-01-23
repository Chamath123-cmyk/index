// script.js

// Select the elements (you can use classes already in the HTML)
const hamburger = document.querySelector(".hamburger"); // You may have to add this class in the HTML to represent the hamburger icon
const menu = document.querySelector(".menu"); // The menu container
const button = document.querySelector(".get-started-btn"); // Get Started button

// Check if hamburger and menu elements exist
if (hamburger && menu) {
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active"); // Toggle 'active' class to show/hide the menu
  });
}

const toggleButton = document.querySelector(".dark-mode-toggle"); // The button that toggles dark mode

// Check if the user previously selected dark mode and save this in localStorage
const darkModePreference = localStorage.getItem("dark-mode") === "enabled";

// Apply dark mode based on stored preference (if any)
if (darkModePreference) {
  document.body.classList.add("dark-mode");
}

toggleButton.addEventListener("click", () => {
  // Toggle dark mode class
  document.body.classList.toggle("dark-mode");

  // Store the user's preference in localStorage so it's remembered on page reload
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "enabled");
  } else {
    localStorage.setItem("dark-mode", "disabled");
  }
});

// Our Process

// Scroll container
const scrollContainer = document.querySelector(".process-scroll-container");

// Scroll buttons
const scrollLeft = document.getElementById("scroll-left");
const scrollRight = document.getElementById("scroll-right");

// Scroll amount
const scrollAmount = 300;

scrollLeft.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

scrollRight.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

// script.js

// Select the dark mode toggle button
const darkModeToggle = document.querySelector(".dark-mode-toggle");

// Check for saved user preference in localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
}

// Toggle dark mode on button click
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Save user preference in localStorage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
});

// About

const toggleMode = () => {
  const root = document.documentElement;
  if (root.classList.contains("light-mode")) {
    root.classList.remove("light-mode");
    root.classList.add("dark-mode");
  } else {
    root.classList.remove("dark-mode");
    root.classList.add("light-mode");
  }
};

// Example button for toggling modes
document.querySelector("#modeToggle").addEventListener("click", toggleMode);

// contact
const toggleModeButton = document.getElementById("modeToggle");
toggleModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
});

// Default Mode
document.body.classList.add("light-mode");

// scroll animation
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // Optional: Stop observing once animated
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  );

  const scrollElements = document.querySelectorAll(".scroll-animate");
  scrollElements.forEach((element) => observer.observe(element));
});
