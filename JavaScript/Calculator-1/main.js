const display = document.getElementById('display');
const numbers = document.querySelectorAll('#keys .number');
const operators = document.querySelectorAll('.operators');
const decimalBtn = document.querySelector('.decimal');
const calculatorKeys = document.querySelector('#keys')

let decimalAdded = false;

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        clickedNumber = number.value;
        display.value += clickedNumber;
    })
})

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        clickedOperator = operator.value;
        display.value += clickedOperator;

        decimalAdded = false;
    }) 
})

decimalBtn.addEventListener('click', () => {
    if(!decimalAdded) {
        display.value += decimalBtn.textContent;
        decimalAdded = true;
    }
})

calculatorKeys.addEventListener('click', (e) => {
    if(e.target.id === 'delete') {
        let newDisplay = display.value.slice(0, -1)
        display.value = newDisplay
    } else if(e.target.id === 'clear') {
        display.value = '';
    } else if(e.target.id === 'equality') {
        display.value = eval(display.value)
    }
})