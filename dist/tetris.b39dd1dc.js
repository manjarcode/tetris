const BLOCK_SIZE = 40;
const ROWS = 20;
const COLS = 10;
const DOWN_ITERATIONS = 5;
const SPEED = 10;
const matrix = Array.from({
    length: COLS
}, ()=>Array(ROWS).fill(0));
/*
Fichas:
- Palito
- T
- S
- S inversa
- L
- L inversa
- Cuadrado

*/ function getColor(number) {
    const colors = [
        "#FF6B6B",
        "#FF9F1C",
        "#FFD23F",
        "#17C3B2",
        "#227C9D",
        "#8B5CF6",
        "#E6E6EA"
    ];
    return colors[number];
}
function getDarkerColors(number) {
    const borders = [
        "#C34C4C",
        "#B36D14",
        "#B8962E",
        "#0F8175",
        "#165166",
        "#5A3EAB",
        "#A1A1A5"
    ];
    return borders[number];
}
function random(number) {
    return Math.round(Math.random() * number);
}
class Game {
    constructor(canvas){
        this.matrix = matrix;
        this.drawer = new Drawer(canvas);
        this.iteration = 0;
        this.active = new Block(1, 1, 6, matrix);
    }
    draw(x, y) {
        const color = this.matrix[x][y];
        if (color > 0) this.drawer.block(x, y, color);
    }
    render() {
        this.table();
        this.drawer.clear();
        for(let i = 0; i < COLS; i++)for(let j = 0; j < ROWS; j++)this.draw(i, j);
    }
    table() {
        const table = document.getElementById('matrix');
        table.innerHTML = "";
        for(let i = 0; i < COLS; i++){
            const row = document.createElement('tr');
            for(let j = 0; j < ROWS; j++){
                const cell = document.createElement('td');
                cell.textContent = this.matrix[i][j];
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
    }
    down() {
        if (this.active.canDown()) this.active.down();
        else {
            this.active = null;
            this.buildActive();
        }
    }
    mustDown() {
        return this.iteration++ % DOWN_ITERATIONS === 0;
    }
    iterate() {
        if (this.mustDown()) this.down();
        this.render();
    }
    buildActive() {
        console.log('build active');
        const randomX = random(COLS);
        const randomColor = random(7);
        this.active = new Block(randomX, 0, randomColor, this.matrix);
    }
    status() {
        console.log('active', this.active);
        console.log('game', this.game);
    }
}
class Block {
    constructor(x, y, color, matrix){
        this.x = x;
        this.y = y;
        this.color = color;
        this.matrix = matrix;
    }
    canDown() {
        const nextY = this.y + 1;
        const isOutOfBound = nextY >= ROWS;
        const hasBlockBelow = this.matrix[this.x][nextY] > 0;
        return !isOutOfBound && !hasBlockBelow;
    }
    down() {
        const nextY = this.y + 1;
        this.matrix[this.x][this.y] = 0;
        this.matrix[this.x][nextY] = this.color;
        this.y = nextY;
    }
}
class Drawer {
    constructor(canvas){
        this.canvas = canvas;
    }
    block(x, y, color) {
        const posX = x * 40;
        const posY = y * 40;
        this.canvas.fillStyle = getColor(color);
        this.canvas.fillRect(posX, posY, BLOCK_SIZE, BLOCK_SIZE);
        this.canvas.strokeStyle = getDarkerColors(color);
        this.canvas.strokeRect(posX, posY, BLOCK_SIZE, BLOCK_SIZE);
    }
    clear() {
        this.canvas.fillStyle = "white";
        this.canvas.fillRect(0, 0, COLS * BLOCK_SIZE, ROWS * BLOCK_SIZE);
    }
}
let game = null;
window.onload = ()=>{
    const canvas = document.getElementById("game");
    const ctx = canvas.getContext("2d");
    game = new Game(ctx);
    game.render();
    window.setInterval(()=>{
        gameLoop();
    }, SPEED);
};
function gameLoop() {
    try {
        if (!error) game.iterate();
    } catch (err) {
        game.status();
        error = err;
        console.error(err);
    }
}
let error = null;
document.addEventListener("keydown", (ev)=>{
    console.log(ev);
});

//# sourceMappingURL=tetris.b39dd1dc.js.map
