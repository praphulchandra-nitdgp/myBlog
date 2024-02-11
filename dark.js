document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("dark-mode-toggle-checkbox");
    const body = document.body;

    darkModeToggle.addEventListener("change", function() {
        body.classList.toggle("dark-theme");
        // Save the user's preference to localStorage
        const isDarkMode = body.classList.contains("dark-theme");
        localStorage.setItem("darkMode", isDarkMode);
    });

    // Check if the user has a preference for dark mode and apply it
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    darkModeToggle.checked = isDarkMode;
    if (isDarkMode) {
        body.classList.add("dark-theme");
    }
});