function checkInput() {
    const input = document.getElementById('text-input').value;
    const resultElement = document.getElementById('result');
    if (input.trim() === '') {
        alert('Please input a value');
    } else {
        resultElement.textContent = input + (isPalindrome(input) ? " is a palindrome" : " is not a palindrome");
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