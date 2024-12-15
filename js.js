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


let size = ''
resizeBtn.addEventListener('click', () => {
    size = prompt('enter the grid size');
    clearGrid();
    resizeGrid(size);
});

function clearGrid() {
    const container = document.getElementById('container');
    container.innerHTML = '';
}
    const clear = document.getElementById('clear');
    clear.addEventListener('click', () => {
        clearGrid();
        resizeGrid(size);
    });


const container = document.getElementById('container');

container.addEventListener('pointerdown', e => {
    fillCell(e);
    container.addEventListener('mouseover', fillCell);
    container.addEventListener('pointerup', () => {
        container.removeEventListener('mouseover', fillCell)
    })
});

let color = "";
function fillCell(e) {
    if (e.target.className === "cell") {
        if (color !== 'rainbow' && color !== 'darkering') {
            e.target.style.background = color;
        } else if (color == "darkering") {
            e.target.style.background = 'black';
            e.target.style.opacity = darkeringMode();
        }
        else {e.target.style.background = getRandomColor()}
        }
}


//rainbow mode
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let rcolor = '#';
    for (let i = 0; i < 6; i++) {
        rcolor += letters[Math.floor(Math.random() * 16)];
    }
    return rcolor;
}
let opacity = 0;
let opa = 0;

const darkMode = document.getElementById('progressiveDark');
darkMode.addEventListener('click', () => color = 'darkering');
function darkeringMode() {
    for (i = 0; i<10; i++) {
        if (opa <= 1) {
            opa += 0.1;
        } else {
        opa = 0.1;}
        return opa;
    }
}



    const rainbow = document.getElementById('rainbow');
    const black = document.getElementById('black');
    const pink = document.getElementById('pink');
    rainbow.addEventListener('click', () => {
        color = 'rainbow';
        rainbow.style.background = color;
    });
    black.addEventListener('click', () => {
        color = 'black';
    });
    pink.addEventListener('click', () => {
        color = 'pink';
    })

