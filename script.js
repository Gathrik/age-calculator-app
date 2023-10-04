const dayInput = document.querySelector("#day"); // get day input field
const monthInput = document.querySelector("#month"); // get month input field
const yearInput = document.querySelector("#year"); // get year input field
const submitButton = document.querySelector("#submit");

const calculateDate = () => {
    const d = new Date(yearInput.value, monthInput.value - 1, dayInput.value);
    let newDate = Date.now() - d.getTime();
};

submitButton.addEventListener("click", (event) => {
    calculateDate()
})






