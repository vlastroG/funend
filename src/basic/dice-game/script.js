const listOfAllDice = document.querySelectorAll(".die");
const scoreInputs = document.querySelectorAll("#score-options input");
const scoreSpans = document.querySelectorAll("#score-options span");
const roundElement = document.getElementById("current-round");
const rollsElement = document.getElementById("current-round-rolls");
const totalScoreElement = document.getElementById("total-score");
const scoreHistory = document.getElementById("score-history");
const rollDiceBtn = document.getElementById("roll-dice-btn");
const keepScoreBtn = document.getElementById("keep-score-btn");
const rulesContainer = document.querySelector(".rules-container");
const rulesBtn = document.getElementById("rules-btn");

let diceValuesArr = [];
let isModalShowing = false;
let score = 0;
let round = 1;
let rolls = 0;

const rollDice = () => {
    diceValuesArr = [];

    for (let i = 0; i < 5; i++) {
        const randomDice = Math.floor(Math.random() * 6) + 1;
        diceValuesArr.push(randomDice);
    }

    listOfAllDice.forEach((dice, index) => {
        dice.textContent = diceValuesArr[index];
    });
    updateRadioOption(5, 0);
};

const updateStats = () => {
    rollsElement.textContent = String(rolls);
    roundElement.textContent = String(round);
}

const updateRadioOption = (index, score) => {
    scoreInputs[index].disabled = false;
    scoreInputs[index].value = score;
    scoreSpans[index].textContent = `, score = ${score}`;
}

const getHighestDuplicates = (nums) => {
    const uniqueNums = [...new Set(nums)];
    const numsCounts = uniqueNums.reduce(
        (acc, num) => {
            acc[num] = nums.filter(x => x === num).length;
            return acc;
        },
        {});
    const sum = nums.reduce((acc, num) => acc + num, 0);
    if (Object.values(numsCounts).find(x => x >= 3)) {
        updateRadioOption(0, sum);
    }
    if (Object.values(numsCounts).find(x => x >= 4)) {
        updateRadioOption(1, sum);
    }
};

const detectFullHouse = (nums) => {
    const uniqueNums = [...new Set(nums)];
    const firstNumCount = nums.filter(x => x === nums[0]).length;
    if (uniqueNums.length === 2 && (firstNumCount === 2 || firstNumCount === 3)) {
        updateRadioOption(2, 25);
    }
}

const checkForStraights = (nums) => {
    const uniqueNums = [...new Set(nums)];
    const ordered = uniqueNums.toSorted((a, b) => a - b);
    let length = 1;
    let maxLength = ordered.length;
    let current = ordered[0];
    for (let i = 1; i < ordered.length; i++) {
        if (ordered[i] === (current + 1)) {
            length++;
        } else {
            maxLength = length;
            length = 1;
        }
        current = ordered[i];
    }
    if (maxLength >= 4) {
        updateRadioOption(3, 30);
    }
    if (maxLength >= 5) {
        updateRadioOption(4, 40);
    }
}

const resetRadioOptions = () => {
    scoreInputs.forEach(item => {
        item.disabled = true;
        item.checked = false;
    })
    scoreSpans.forEach(span => span.textContent = "");
}

const updateScore = (value, id) => {
    score += Number(value);
    totalScoreElement.textContent = score;
    scoreHistory.innerHTML += `<li>${id} : ${value}</li>`;
}

const resetGame = () => {
    listOfAllDice.forEach((dice) => {
        dice.textContent = "0";
    })
    score = 0;
    rolls = 0;
    round = 1;
    totalScoreElement.textContent = score;
    scoreHistory.innerHTML = "";
    rollsElement.textContent = rolls;
    roundElement.textContent = round;
    scoreInputs.forEach(item => {
        item.value = 0;
        item.checked = false;
        item.disabled = true;
    })
}

rollDiceBtn.addEventListener("click", () => {
    if (rolls === 3) {
        alert("You have made three rolls this round. Please select a score.");
    } else {
        rolls++;
        resetRadioOptions();
        rollDice();
        updateStats();
        getHighestDuplicates(diceValuesArr);
        detectFullHouse(diceValuesArr);
        checkForStraights(diceValuesArr);
    }
});


rulesBtn.addEventListener("click", () => {
    isModalShowing = !isModalShowing;

    if (isModalShowing) {
        rulesBtn.textContent = "Hide rules";
        rulesContainer.style.display = "block";
    } else {
        rulesBtn.textContent = "Show rules";
        rulesContainer.style.display = "none";
    }
});

keepScoreBtn.addEventListener("click", () => {
    const selectedValue = [...scoreInputs].find(item => item.checked);
    if (selectedValue) {
        rolls = 0;
        round++;
        updateStats();
        resetRadioOptions();
        updateScore(selectedValue.value, selectedValue.id);
        if (round > 6) {
            setTimeout(() => {
                alert(`Game over! Your final score is ${score}`);
                resetGame();
            }, 500)
        }
    } else {
        alert("Please select a score");
    }
});