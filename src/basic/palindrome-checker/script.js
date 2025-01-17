const inputElement = document.getElementById('text-input');
const resultElement = document.getElementById('result');
const checkButton = document.getElementById('check-btn');


function checkInput() {
    const inputValue = inputElement.value;
    if (inputValue.trim() === '') {
        alert('Please input a value');
    } else {
        resultElement.textContent = inputValue + (isPalindrome(inputValue) ? " is a palindrome" : " is not a palindrome");
        resultElement.style.color = 'green';
    }
}

function isPalindrome(str) {
    let strClean = clearStr(str);
    for (let i = 0; i < Math.floor(strClean.length / 2) + 1; i++) {
        if (i <= strClean.length - i) {
            if (strClean[i] !== strClean[strClean.length - 1 - i]) {
                return false;
            }
        }
    }
    return true;
}

function clearStr(str) {
    const regex = /[^a-zA-Z0-9]/g;
    return str.toLowerCase().trim().replace(regex, '');
}

checkButton.addEventListener('click', checkInput);
