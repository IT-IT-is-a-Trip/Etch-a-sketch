const resizeBtn = document.getElementById('resizeBtn');

const body = document.querySelector('body');
// .row
// .cell
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


const plus = document.getElementById('plusSZ');
const minus = document.getElementById("minusSZ");

plus.addEventListener('click', () => {
    if (size >= 4 && size <= 96) {
        size += 4;
        resizePattern();
    };
});
minus.addEventListener('click', () => {
    if (size !==4) {
        size -= 4;
        resizePattern();
    };
});

let size = 16;
resizeBtn.innerText = size + `x${size}`;
resizeGrid(size);

function resizePattern() {
    resizeBtn.innerText = size + `x${size}`;
    clearGrid();
    resizeGrid(size);
}
// resizeBtn.addEventListener('click', resizePattern);

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
    body.addEventListener('mouseup', () => {
        container.removeEventListener('mouseover', fillCell)
    })
});

let color = "black";
let mode = "";
function fillCell(e) {
    if (e.target.className === "cell") {
        if (mode !== 'rainbow' && mode !== 'darkering' && mode !== 'erase') {
            e.target.style.background = color;
            e.target.style.opacity = 1;
            cursor.style.backgroundColor = color;
        } else if (mode == "darkering") {
            e.target.style.background = color;
            e.target.style.opacity = darkeringMode();
        } else if (mode == 'erase') {
            e.target.style.background = 'white';
            e.target.style.opacity = 1;
            cursor.style.backgroundColor = 'white';
        }
        else {e.target.style.opacity = 1;
            e.target.style.background = getRandomColor()
            cursor.style.backgroundColor = getRandomColor();
            cursor.style.border = getRandomColor();}
        }
}

//erase mode
const erase = document.getElementById('erase');
erase.addEventListener('click', () => mode = 'erase')
//rainbow mode
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let rcolor = '#';
    for (let i = 0; i < 6; i++) {
        rcolor += letters[Math.floor(Math.random() * 16)];
    }
    return rcolor;
}


let opa = 0;

const darkMode = document.getElementById('progressiveDark');
darkMode.addEventListener('click', () => mode = 'darkering');
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
    const yellow = document.getElementById('yellow');
    const green = document.getElementById('green');
    const red = document.getElementById('red');
    const blue = document.getElementById('blue');
    const violet = document.getElementById('violet');
    const orange = document.getElementById('orange');
    const lime = document.getElementById('lime');
    const darkblue = document.getElementById('darkblue');

    rainbow.addEventListener('click', () => {
        mode = 'rainbow';
    });
    black.addEventListener('click', () => {
        color = 'black';
        cursor.style.backgroundColor = 'black';
        if (mode !== 'darkering') {
            mode = '';
        } 
    });
    pink.addEventListener('click', () => {
        color = 'pink';
        cursor.style.backgroundColor = 'pink';
        if (mode !== 'darkering') {
            mode = '';
        } 
    })
    yellow.addEventListener('click', () => {
        color = 'yellow';
        cursor.style.backgroundColor = 'yellow';
        if (mode !== 'darkering') {
            mode = '';
        }
    })
    green.addEventListener('click', () => {
        color = 'green';
        cursor.style.backgroundColor = 'green';
        if (mode !== 'darkering') {
            mode = '';
        }
    })
    red.addEventListener('click', () => {
        color = 'red';
        cursor.style.backgroundColor = 'red';
        if (mode !== 'darkering') {
            mode = '';
        }
    })
    blue.addEventListener('click', () => {
        color = 'blue';
        cursor.style.backgroundColor = 'blue';
        if (mode !== 'darkering') {
            mode = '';
        }
    })
    violet.addEventListener('click', () => {
        color = 'violet';
        cursor.style.backgroundColor = 'violet';
        if (mode !== 'darkering') {
            mode = '';
        }
    })
    orange.addEventListener('click', () => {
        color = 'orange';
        cursor.style.backgroundColor = 'orange';
        if (mode !== 'darkering') {
            mode = '';
        }
    })
    lime.addEventListener('click', () => {
        color = 'lime';
        cursor.style.backgroundColor = 'lime';
        if (mode !== 'darkering') {
            mode = '';
        }
    })
    darkblue.addEventListener('click', () => {
        color = 'darkblue';
        cursor.style.backgroundColor = '';
        if (mode !== 'darkering') {
            mode = '';
        }
    })
const normalMode = document.getElementById('normMode');
normalMode.addEventListener('click', () => {
    mode = '';
})
document.body.oncontextmenu = function () {
        return false;
}
const cursor = document.querySelector(".cursor");

const mouseMove = function (e) {
let x = e.clientX;
let y = e.clientY;
cursor.style.left = x + "px";
cursor.style.top = y + "px";
};

document.addEventListener("mousemove", mouseMove);   