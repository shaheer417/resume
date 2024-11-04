document.addEventListener("DOMContentLoaded", function () {
    // Get all sections and buttons
    var sections = document.querySelectorAll(".section");
    var buttons = document.querySelectorAll(".toggle-button");
    // Initially hide each section
    sections.forEach(function (section) { return (section.style.display = "none"); });
    // Add click event listeners to each button
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            var section = button.nextElementSibling;
            if (section) {
                if (section.style.display === "none") {
                    section.style.display = "block";
                    section.classList.add("fade-in");
                }
                else {
                    section.style.display = "none";
                }
            }
        });
    });
});
