// This script handles the navigation and section switching functionality for the personal portfolio website.

document.addEventListener("DOMContentLoaded", () => {
  // Select the navigation buttons, card container, and sections
  const buttons = document.querySelectorAll(".card-buttons button");
  const card = document.querySelector(".card");
  const sections = document.querySelectorAll(".card-section");

  // Add click event listener to each navigation button
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from buttons and sections
      [...buttons].flatMap((item) => item.classList.remove("is-active"));
      [...sections].flatMap((sec) => sec.classList.remove("is-active"));

      // Add active class to the clicked button
      btn.classList.add("is-active");

      // Toggle card animation based on the clicked section
      btn.getAttribute("data-section") !== "#about"
        ? card.classList.add("is-active")
        : card.classList.remove("is-active");

      // Update the card data-state attribute and activate the corresponding section
      card.setAttribute("data-state", btn.getAttribute("data-section"));
      const section = document.querySelector(btn.getAttribute("data-section"));
      section.classList.add("is-active");
    });
  });
});
