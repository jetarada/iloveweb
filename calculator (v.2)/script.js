// Selecting Key Elements
const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');
const darkToggle = document.getElementById('dark-toggle');

// Variables for Calculator Logic
let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;
let memoryValue = null;

// Handling Number Input
function sendNumberValue(number) {
    if (awaitingNextValue) {
        calculatorDisplay.textContent = number;
        awaitingNextValue = false;
    } else {
        const displayValue = calculatorDisplay.textContent;
        calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
    }
}

// Handling Decimal Input
function addDecimal() {
    if (awaitingNextValue) return;
    if (!calculatorDisplay.textContent.includes('.')) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }
}

// Calculation Logic
const calculate = {
    '/': (firstNumber, secondNumber) => firstNumber / secondNumber,
    '*': (firstNumber, secondNumber) => firstNumber * secondNumber,
    '+': (firstNumber, secondNumber) => firstNumber + secondNumber,
    '-': (firstNumber, secondNumber) => firstNumber - secondNumber,
    '=': (firstNumber, secondNumber) => secondNumber,
    '**': (firstNumber, secondNumber) => Math.pow(firstNumber, secondNumber), // Exponentiation
};

// Handling Operator Input
function useOperator(operator) {
    const currentValue = Number(calculatorDisplay.textContent);
    if (operatorValue && awaitingNextValue) {
        operatorValue = operator;
        return;
    }
    if (!firstValue) {
        firstValue = currentValue;
    } else {
        const calculation = calculate[operatorValue](firstValue, currentValue);
        calculatorDisplay.textContent = calculation;
        firstValue = calculation;
    }
    awaitingNextValue = true;
    operatorValue = operator;
}

// Button Click Event Listeners
inputBtns.forEach((inputBtn) => {
    if (inputBtn.classList.length === 0) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    } else if (inputBtn.classList.contains('operator')) {
        inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
    } else if (inputBtn.classList.contains('decimal')) {
        inputBtn.addEventListener('click', () => addDecimal());
    }
});

// Reset Calculator
function resetAll() {
    firstValue = 0;
    operatorValue = '';
    awaitingNextValue = false;
    calculatorDisplay.textContent = '0';
}
clearBtn.addEventListener('click', resetAll);

// Memory Functions (MS, MR, MC)
const memorySaveBtn = document.getElementById('memory-save');
const memoryRecallBtn = document.getElementById('memory-recall');
const memoryClearBtn = document.getElementById('memory-clear');

// Save to Memory (MS)
memorySaveBtn.addEventListener('click', () => {
    memoryValue = Number(calculatorDisplay.textContent);
    console.log(`Memory Saved: ${memoryValue}`);
});

// Recall from Memory (MR)
memoryRecallBtn.addEventListener('click', () => {
    if (memoryValue !== null) {
        calculatorDisplay.textContent = memoryValue;
    }
});

// Clear Memory (MC)
memoryClearBtn.addEventListener('click', () => {
    memoryValue = null;
    console.log('Memory Cleared');
});

// Dark Mode Toggle
let isDarkMode = false;
darkToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    darkToggle.textContent = isDarkMode ? "🌞" : "🌙";
});