const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");
const toggleTheme = document.getElementById("toggle-theme");
const body = document.body;

// Toggle Navbar Menu for Mobile
menuIcon.onclick = () => {
  menu.classList.toggle("active");
  menuIcon.textContent = menu.classList.contains("active") ? "✖" : "☰";
};

// Dark/Light Mode Toggle
toggleTheme.onclick = () => {
  body.classList.toggle("dark-mode");
  toggleTheme.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
};
