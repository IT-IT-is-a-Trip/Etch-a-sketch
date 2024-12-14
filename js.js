const resizeBtn = document.getElementById('resizeBtn');

// .row - класс ряда
// .cell - класс каждой клетки
function resizeGrid(px) {
    
for (let i = 0; i<px; i++) {
    const row = createRow();
    for (let e = 0; e<px; e++){
    createCell(row);
    };
};
}
function createRow() {
    const container = document.getElementById('container');
    const row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);
    return row;
}

function createCell(parent) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    parent.appendChild(cell);
}
resizeBtn.addEventListener('click', () => {
    const size = prompt('enter the grid size');
    clearGrid();
    resizeGrid(size);
});

function clearGrid() {
    const container = document.getElementById('container');
    container.innerHTML = '';
}
const container = document.getElementById('container');

container.addEventListener('pointerdown', e => {
    fillCell(e);
    container.addEventListener('pointermove', fillCell);
    container.addEventListener('pointerup', () => {
        container.removeEventListener('pointermove', fillCell)
    }, {once: true})
});

function fillCell(e) {
    if (e.target.className === "cell") {
        e.target.style.background = "pink";
        }
}
