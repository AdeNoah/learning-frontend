console.log('hello world')

let   count = 0;
let  counter = document.getElementById('counter')

const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');

decreaseBtn.addEventListener('click', () => {
    count --;
    counter.innerText = count;
})

resetBtn.addEventListener('click', () => {
    count = '0';
    counter.innerText = count;
})

increaseBtn.addEventListener('click', () => {
    count++;
    counter.innerText = count;
})