const inputElement = document.getElementById('number');
const outputElement = document.getElementById('output');
const convertButton = document.getElementById('convert-btn');

function numeralToRomain(number) {
    let result = "";
    while (number >= 1) {
        if (number >= 1000) {
            result += "M".repeat(Math.floor(number / 1000));
            number = number % 1000;
        } else if (number >= 900) {
            result += "CM".repeat(Math.floor(number / 900));
            number = number % 900;
        } else if (number >= 500) {
            result += "D".repeat(Math.floor(number / 500));
            number = number % 500;
        } else if (number >= 400) {
            result += "CD".repeat(Math.floor(number / 400));
            number = number % 400;
        } else if (number >= 100) {
            result += "C".repeat(Math.floor(number / 100));
            number = number % 100;
        } else if (number >= 90) {
            result += "XC".repeat(Math.floor(number / 90));
            number = number % 90;
        } else if (number >= 50) {
            result += "L".repeat(Math.floor(number / 50));
            number = number % 50;
        } else if (number >= 40) {
            result += "XL".repeat(Math.floor(number / 40));
            number = number % 40;
        } else if (number >= 10) {
            result += "X".repeat(Math.floor(number / 10));
            number = number % 10;
        } else if (number >= 9) {
            result += "IX".repeat(Math.floor(number / 9));
            number = number % 9;
        } else if (number >= 5) {
            result += "V".repeat(Math.floor(number / 5));
            number = number % 5;
        } else if (number >= 4) {
            result += "IV".repeat(Math.floor(number / 4));
            number = number % 4;
        } else {
            result += "I".repeat(Math.floor(number));
            number = 0;
        }
    }
    return result;
}

function checkUserInput() {
    const number = parseInt(inputElement.value);
    if (!inputElement.value || isNaN(number)) {
        outputElement.innerText = `Please enter a valid number`;
    } else if (number < 1) {
        outputElement.innerText = "Please enter a number greater than or equal to 1";
    } else if (number >= 4000) {
        outputElement.innerText = "Please enter a number less than or equal to 3999";
    } else {
        outputElement.innerText = numeralToRomain(number);
    }
}

convertButton.addEventListener('click', checkUserInput);
