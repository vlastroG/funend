const inputElement = document.getElementById('cash');
const outputElement = document.getElementById('change-due');
const checkButton = document.getElementById('purchase-btn');
const priceElement = document.querySelector("#price span");

let price = 1.87;
let cid = [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
];

priceElement.textContent = String(price);

class CashRegister {
    constructor() {
        this.pennyPerUnit = {
            'PENNY': 1,
            'NICKEL': 5,
            'DIME': 10,
            'QUARTER': 25,
            'ONE': 100,
            'FIVE': 500,
            'TEN': 1000,
            'TWENTY': 2000,
            'ONE HUNDRED': 10000
        }
    }

    getCidSum() {
        return Math.round(cid.reduce((acc, current) => acc + current[1], 0) * 100) / 100;
    }

    clearCid() {
        for (let i = 0; i < cid.length; i++) {
            cid[i][1] = 0;
        }
    }

    getChangeDue(amount) {
        const sum = this.getCidSum();
        if (Math.abs(amount - sum) < 0.001) {
            let str = "Status: CLOSED";
            for (let i = cid.length - 1; i >= 0; i--) {
                if (cid[i][1] > 0) {
                    str += ` ${cid[i][0]}: $${cid[i][1]}`;
                }
            }
            this.clearCid();
            return str;
        } else if (amount < sum) {
            let reminderPenny = Math.round(amount * 100);
            const changePennies = {
                'PENNY': 0,
                'NICKEL': 0,
                'DIME': 0,
                'QUARTER': 0,
                'ONE': 0,
                'FIVE': 0,
                'TEN': 0,
                'TWENTY': 0,
                'ONE HUNDRED': 0
            }
            const cidBackup = cid.map(function (arr) {
                return arr.slice();
            });
            for (let i = cid.length - 1; i >= 0; i--) {
                const unitName = cid[i][0];
                const unitPennyValue = this.pennyPerUnit[unitName];
                let unitAmount = cid[i][1];
                while (unitAmount > 0 && reminderPenny >= unitPennyValue) {
                    changePennies[unitName] += unitPennyValue;
                    reminderPenny -= unitPennyValue;
                    cid[i][1] -= (unitPennyValue / 100);
                    unitAmount = cid[i][1];
                }
                if (reminderPenny === 0) {
                    let str = Object.entries(changePennies)
                        .filter(entry => entry[1] > 0)
                        .toSorted((a, b) => b[1] - a[1])
                        .map(entry => `${entry[0]}: $${entry[1] / 100}`)
                        .join(" ");
                    return `Status: OPEN ${str}`;
                }
            }
            if (reminderPenny > 0) {
                cid = cidBackup;
                return "Status: INSUFFICIENT_FUNDS";
            }
        }
    }
}

const cashRegister = new CashRegister();

const isEmpty = () => {
    return !inputElement.value;
}

const getOutput = (money) => {
    if (money < price) {
        alert("Customer does not have enough money to purchase the item");
        return "";
    } else if (Math.abs(money - price) < 0.01) {
        return "No change due - customer paid with exact cash";
    } else if (cashRegister.getCidSum() < (money - price)) {
        return "Status: INSUFFICIENT_FUNDS";
    } else {
        return cashRegister.getChangeDue(money - price);
    }
}

const clearOutput = () => {
    outputElement.textContent = '';
}

checkButton.addEventListener('click', () => {
    if (isEmpty()) {
        alert("Please enter cash amount");
        clearOutput();
        return;
    }
    const str = inputElement.value.trim();
    if (str.includes("e") || Number(str) < 0) {
        alert("Please provide valid cash amount");
        clearOutput();
        return;
    }
    outputElement.textContent = getOutput(Number(str));
})
