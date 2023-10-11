const dayInput = document.querySelector("#day"); // Get day input field
const monthInput = document.querySelector("#month"); // Get month input field
const yearInput = document.querySelector("#year"); // Get year input field
const inputFields =  document.querySelectorAll('.input-field')
const submitButton = document.querySelector("#submitButton");
const yearsResult = document.querySelector("#yearsResult");
const monthsResult = document.querySelector("#monthsResult");
const daysResult = document.querySelector("#daysResult");
const errorResult = document.querySelector("#errorResult");

const calculateDate = () => {
    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);

    displayError("");

    for (const field of inputFields) {
        field.classList.remove('input-error');
        const id = field.getAttribute('id');
        const value = field.value.trim();

        if (id === 'day') {
            if (value === '' || isNaN(value)) {
                displayError(field, 'Please fill in day field');
            }

            if (value < 1 || value > 31) {
                displayError(field, 'Please enter a valid date');
            }
        }

        else if (id === 'month') {
            if (value === '' || isNaN(value)) {
                displayError(field, 'Please fill in month field');
            }

            if (value < 1 || value > 12) {
                displayError(field, 'Please enter a valid date');
            }
        }

        else if (id === 'year') {
            if (value === '' || isNaN(value)) {
                displayError(field, 'Please fill in year field');
            }

            if (value < 1) {
                displayError(field, 'Please enter a valid date');
            }

            if (value > new Date().getFullYear()) {
                displayError(field, 'Please enter a date in the past');
            }
        }
    }

    // // Validation checks
    // if (isNaN(day) || isNaN(month) || isNaN(year)) {
    //     // clearResults();
    //     displayError("Please fill in all fields");
    //
    //     return;
    // }
    //
    // if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1) {
    //     // clearResults();
    //     displayError("Please enter a valid date");
    //     return;
    // }

    const inputDate = new Date(year, month - 1, day);
    const currentDate = new Date();

    const timeDifference = currentDate - inputDate;
    const millisecondsPerDay = 24 * 60 * 60 * 1000; // Definieer de duur van een dag in milliseconden
    const millisecondsPerMonth = 30.44 * millisecondsPerDay; // Definieer de duur van een maand in milliseconden
    const millisecondsPerYear = 365.24 * millisecondsPerDay; // Definieer de duur van een jaar in milliseconden

    const years = Math.floor(timeDifference / millisecondsPerYear);
    const months = Math.floor((timeDifference % millisecondsPerYear) / millisecondsPerMonth);
    const days = Math.floor(((timeDifference % millisecondsPerYear) % millisecondsPerMonth) / millisecondsPerDay);

    // if (inputDate > currentDate) {
    //     // clearResults();
    //     displayError("Please enter a date in the past");
    //     return;
    // }

    yearsResult.textContent = `${years}`;
    monthsResult.textContent = `${months}`;
    daysResult.textContent = `${days}`;
};

// const clearResults = () => {
//     yearsResult.textContent = "";
//     monthsResult.textContent = "";
//     daysResult.textContent = "";
// };

// const displayError = (inputElement, message) => {
//     errorResult.textContent = message;
//     inputElement.classList.add("input-error");
// };

function displayError(inputElement, message) {
    errorResult.textContent = message;
    inputElement.classList.add("input-error");
}

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    calculateDate()
})






