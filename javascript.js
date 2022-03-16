const container = document.querySelector('#container')

const gridDivLeft = document.createElement('div');
gridDivLeft.classList.add('gridDivLeft');
container.appendChild(gridDivLeft)

const gridDiv = document.createElement('div');
gridDiv.classList.add('gridDiv');
container.appendChild(gridDiv);

const gridDivRight = document.createElement('div');
gridDivRight.classList.add('gridDivRight');
container.appendChild(gridDivRight)

let cellCount = 256;

function createCells(c) {
    for(let i = 0; i < c; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell', `cell${1+i}`);
    // cell.textContent = 'cell';
    gridDiv.appendChild(cell);
    }
}

createCells(cellCount);

let cells = document.querySelectorAll('.cell');

document.querySelectorAll('.cell').forEach(item => {
    item.addEventListener('mouseover', e => e.target.classList.add('hover-color')
    )
})

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => { 
    document.querySelectorAll('.cell').forEach(item => {
        item.classList.remove('hover-color');
    })
});


// for (let i = 0; i < cellCount; i++) {
//     cells.addEventListener('mouseover', () => {
//         console.log("mouseover");
//     });
// }

