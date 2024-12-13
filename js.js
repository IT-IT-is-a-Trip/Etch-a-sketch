const resizeBtn = document.querySelector('#resizeBtn');

// .row - класс ряда
// .cell - класс каждой клетки

for (let i = 0; i<16; i++) {
    const row = createRow();
    for (let e = 0; e<16; e++){
    createCell(row);
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

