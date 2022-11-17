let value = document.querySelector('#value');
const btnIncrease = document.querySelector('.increase');
const btnDecrease = document.querySelector('.decrease');
const btnReset = document.querySelector('.reset');

increase();
decrease();
reset();

function decrease() {
    btnDecrease.addEventListener('click', () => {
        value.textContent--;
        value.style.color = 'red';
        if (value.textContent == 0) {
            value.style.color = 'black';
        }
        if (value.textContent > 0) {
            value.style.color = 'green';
        }
    });
}

function increase() {
    btnIncrease.addEventListener('click', () => {
        value.textContent++;
        value.style.color = 'green';
        if (value.textContent == 0) {
            value.style.color = 'black';
        }
        if (value.textContent < 0) {
            value.style.color = 'red';
        }
    });
}

function reset() {
    btnReset.addEventListener('click', () => {
        value.textContent = 0;
        value.style.color = 'black';
    });
}
