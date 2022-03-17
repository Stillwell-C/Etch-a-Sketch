const container = document.querySelector('#container')

const gridDiv = document.createElement('div');
gridDiv.classList.add('gridDiv');
container.appendChild(gridDiv);

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => { 
    document.querySelectorAll('.cell').forEach(item => {
        item.classList.remove('hover-color');
    })
    let usrCellColumn = prompt('How many squares do you want on each side of your next grid?', '');
    if (usrCellNum > 100) {
        alert('Number too large. Please try again.')
    } else {
        document.querySelectorAll('.cell').forEach(item => {
            gridDiv.removeChild(item)
        })
        createCells(usrCellColumn);
    }
});

let cellColumn = 16;

const maxWidth = 500

function createCells(c) {
    let a = c*c;
    for(let i = 0; i < a; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell', `cell${1+i}`);
    gridDiv.appendChild(cell);
    let cells = document.getElementsByClassName('cell');
    for (let p = 0; p < cells.length; p++) {
        cells[p].style.width = maxWidth / c + 'px';
        cells[p].style.height = maxWidth / c + 'px';
    }
    }
}

// function createCells(c) {
//     for (let i = 0; i < c; i++) {
//         let row = document.createElement('div');
//         row.classList.add(row);
//         for (let j = 0; j < c; i++) {
//             const cell = document.createElement('div');
//             cell.classList.add('cell');
//             row.appendChild(cell);
//         }
//         document.querySelector('gridDiv').appendChild(row);
//         let cell = document.getElementsByClassName('cell')
//         for (let t = 0; t < cell.length; t++) {
//             cell[t].style.width = maxWidth / size + 'px';
//             cell[t].style.height = maxHeight / size + 'px';
//         }
//     }
// }

// function createCells (c) {
//     for (let i = 0; i < c; i++) {
//         let row = document.createElement('div');
//         row.classList.add('row');
//         gridDiv.appendChild(row);
//     }
//     document.querySelectorAll('.row').forEach(item => {
//         for (let o = 0; o < c; o++) {
//             let cell = document.createElement('div');
//             cell.classList.add('cell');
//             row.appendChild(cell);
//         }
//     })
// }

createCells(cellColumn);

let cells = document.querySelectorAll('.cell');

document.querySelectorAll('.cell').forEach(item => {
    item.addEventListener('mouseover', e => e.target.classList.add('hover-color')
    )
})




// for (let i = 0; i < cellCount; i++) {
//     cells.addEventListener('mouseover', () => {
//         console.log("mouseover");
//     });
// }

