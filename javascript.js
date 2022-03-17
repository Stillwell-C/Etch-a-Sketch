const container = document.querySelector('#container')

const gridDiv = document.createElement('div');
gridDiv.classList.add('gridDiv');
container.appendChild(gridDiv);



let cellColumn = 16;

const maxSize = 500

function createCells(c) {
    let a = c*c;
    for(let i = 0; i < a; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell', `cell${1+i}`);
    gridDiv.appendChild(cell);
}
    let cells = document.getElementsByClassName('cell');
    for (let p = 0; p < cells.length; p++) {
        cells[p].style.width = `${maxSize / c}px`;
        cells[p].style.height = `${maxSize / c}px`;
    }
    changeColor(color)
    
}

let color = "black"

function changeColor(color) {
    document.querySelectorAll('.cell').forEach(item => {
        item.addEventListener('mouseover', e => e.target.style.backgroundColor = color)
    })
}

let ranColor

function changeColorRandom() {
    document.querySelectorAll('.cell').forEach(item => {
        item.addEventListener('mouseover', e => e.target.style.backgroundColor = 
        "#" + ((1<<24)*Math.random() | 0).toString(16))
    })
}


createCells(cellColumn);

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => { 
    let usrCellColumn = prompt('How many squares do you want on each side of your next grid?', '');
    if (usrCellColumn > 100 || usrCellColumn < 0) {
        alert('Please enter a number between 1-100.')
    } else {
        document.querySelectorAll('.cell').forEach(item => {
            gridDiv.removeChild(item)
        });
        createCells(usrCellColumn);
    }
});

const eraseBtn = document.getElementById('erase');
eraseBtn.addEventListener('click', () => { 
    document.querySelectorAll('.cell').forEach(item => {
        item.style.backgroundColor = "transparent";
    })
})


const blueBtn = document.getElementById('blue');
const yellowBtn = document.getElementById('yellow');
const redBtn = document.getElementById('red');
const greenBtn = document.getElementById('green');
const purpleBtn = document.getElementById('purple');
const orangeBtn = document.getElementById('orange');
const blackBtn = document.getElementById('black');
const rainbowBtn = document.getElementById('rainbow');

blueBtn.addEventListener('click', () => {
    changeColor("blue");
})

yellowBtn.addEventListener('click', () => {
    changeColor("yellow");
})

redBtn.addEventListener('click', () => {
    changeColor("red");
})

greenBtn.addEventListener('click', () => {
    changeColor("green");
})

purpleBtn.addEventListener('click', () => {
    changeColor("purple");
})

orangeBtn.addEventListener('click', () => {
    changeColor("orange");
})

blackBtn.addEventListener('click', () => {
    changeColor("black");
})

rainbowBtn.addEventListener('click', () => {
    changeColorRandom();
})