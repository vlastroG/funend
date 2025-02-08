const inputElement = document.getElementById('user-input');
const outputElement = document.getElementById('results-div');
const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');

const isEmpty = () => {
    return !inputElement.value;
}

const validate = () => {
    if (isEmpty()) {
        alert("Please provide a phone number");
    }
    const str = inputElement.value.trim();
    outputElement.textContent = isValidNumber(str)
        ? `Valid US number: ${str}`
        : `Invalid US number: ${str}`;
}

const clear = () => {
    inputElement.value = '';
    outputElement.textContent = '';
}

const isValidNumber = (str) => {
    const usPhoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return usPhoneRegex.test(str);
}

checkButton.addEventListener('click', validate);
clearButton.addEventListener('click', clear);
