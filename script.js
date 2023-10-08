const dayInput = document.querySelector("#day"); // Get day input field
const monthInput = document.querySelector("#month"); // Get month input field
const yearInput = document.querySelector("#year"); // Get year input field
const submitButton = document.querySelector("#submitButton");
const yearsResult = document.querySelector("#yearsResult");
const monthsResult = document.querySelector("#monthsResult");
const daysResult = document.querySelector("#daysResult");
const errorResult = document.querySelector("#errorResult");

const calculateDate = () => {
    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);

    // Validation checks
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        clearResults();
        displayError("Please fill in all fields");
        return;
    }

    if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1) {
        clearResults();
        displayError("Please enter a valid date");
        return;
    }

    const inputDate = new Date(year, month - 1, day);
    const currentDate = new Date();

    const timeDifference = currentDate - inputDate;
    const millisecondsPerDay = 24 * 60 * 60 * 1000; // Definieer de duur van een dag in milliseconden
    const millisecondsPerMonth = 30.44 * millisecondsPerDay; // Definieer de duur van een maand in milliseconden
    const millisecondsPerYear = 365.24 * millisecondsPerDay; // Definieer de duur van een jaar in milliseconden

    const years = Math.floor(timeDifference / millisecondsPerYear);
    const months = Math.floor((timeDifference % millisecondsPerYear) / millisecondsPerMonth);
    const days = Math.floor(((timeDifference % millisecondsPerYear) % millisecondsPerMonth) / millisecondsPerDay);

    if (inputDate > currentDate) {
        clearResults();
        displayError("Please enter a date in the past");
        return;
    }

    yearsResult.textContent = `${years} years`;
    monthsResult.textContent = `${months} months`;
    daysResult.textContent = `${days} days`;
};

const clearResults = () => {
    yearsResult.textContent = "";
    monthsResult.textContent = "";
    daysResult.textContent = "";
};

const displayError = (message) => {
    errorResult.textContent = message;
};

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    calculateDate()
})






