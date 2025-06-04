// Day 3
// JavaScript: Create a basic calculator (add, subtract, multiply, divide).
// Frontend: Design a calculator layout using Flexbox. Add input validation.
// Backend: API for calculator operations. Return proper status codes.

const padButtons = document.querySelectorAll('.pad-button');
const displayBox = document.getElementById('text-box');

let output = [];
let status_code = {200: 'ok'};
padButtons.forEach(button => {
    button.addEventListener('click', () => {
        const val = button.value;
        handleInput(val);
    });
});

function handleInput(val) {
    if (val === 'c') {
        clear();
        return;
    }

    if (val === '=') {
        evaluateExpression();
        return;
    }

    output.push(val);
    displayBox.value = output.join('');
}

function evaluateExpression() {
    try {
        const expression = output.join('');
        const result = eval(expression); 
        displayBox.value = result;
        output = [result.toString()];
    } catch (e) {
        displayBox.value = 'Error';
        output = [];
    }
}

function clear() {
    output = [];
    displayBox.value = '0';
}
