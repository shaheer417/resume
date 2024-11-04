document.addEventListener("DOMContentLoaded", () => {
  // Get all sections and buttons
  const sections = document.querySelectorAll<HTMLElement>(".section");
  const buttons =
    document.querySelectorAll<HTMLButtonElement>(".toggle-button");

  // Initially hide each section
  sections.forEach((section) => (section.style.display = "none"));

  // Add click event listeners to each button
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const section = button.nextElementSibling as HTMLElement | null;
      if (section) {
        if (section.style.display === "none") {
          section.style.display = "block";
          section.classList.add("fade-in");
        } else {
          section.style.display = "none";
        }
      }
    });
  });
});
