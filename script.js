document.addEventListener("DOMContentLoaded", function () {
    const ageForm = document.getElementById("ageForm");
    const dayInput = document.getElementById("day");
    const monthInput = document.getElementById("month");
    const yearInput = document.getElementById("year");
    const resultContainer = document.querySelector(".result");

    ageForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get user input values
        const day = parseInt(dayInput.value);
        const month = parseInt(monthInput.value);
        const year = parseInt(yearInput.value);

        // Validate user input
        if (isNaN(day) || isNaN(month) || isNaN(year)) {
            showError("Please fill in all fields.");
            return;
        }

        if (day < 1 || day > 31 || month < 1 || month > 12) {
            showError("Invalid day or month.");
            return;
        }

        const currentDate = new Date();
        const inputDate = new Date(year, month - 1, day); // Month is 0-based

        if (inputDate > currentDate) {
            showError("The date cannot be in the future.");
            return;
        }

        // Calculate age
        const { years, months, days } = calculateAge(currentDate, inputDate);

        // Display age result
        showResult(years, months, days);
    });

    // Helper function to calculate age
    function calculateAge(currentDate, inputDate) {
        const ageDate = new Date(currentDate - inputDate);

        const years = ageDate.getUTCFullYear() - 1970;
        const months = ageDate.getUTCMonth();
        const days = ageDate.getUTCDate() - 1;

        return { years, months, days };
    }

    // Helper function to display error message
    function showError(message) {
        resultContainer.innerHTML = `<p class="error">${message}</p>`;
    }

    // Helper function to display age result
    function showResult(years, months, days) {
        resultContainer.innerHTML = `
    <p>${years} years</p>
    <p>${months} months</p>
    <p>${days} days</p>
  `;
    }
});