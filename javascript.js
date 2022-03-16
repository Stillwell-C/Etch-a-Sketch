const container = document.querySelector('#container')

const gridDiv = document.createElement('div');
gridDiv.classList.add('gridDiv');
container.appendChild(gridDiv);

let cellCount = 256;

function createCells(c) {
    for(i = 0; i < c; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.textContent = 'cell';
    gridDiv.appendChild(cell);
    }
}

createCells(cellCount);