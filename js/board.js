var pacman = pacman || {};

pacman.PLAYER = 99;
pacman.ENEMY = 98;

let upbtn = document.getElementById("upbtn");
let leftbtn = document.getElementById("leftbtn");
let downbtn = document.getElementById("downbtn");
let rightbtn = document.getElementById("rightbtn");

upbtn.onclick = function() {moveEntity(pacman.PLAYER, 0, 0)};

pacman.Board = class {
    constructor() {
        this.map = [
            [0, 0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0, 1],
            [0, 0, 0, 0, 0, 0],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 0, 1, 0, 0]
        ];

        this.entities = [];
    }

    addEntity(type) {
        if (type === pacman.PLAYER) {
            let player = new pacman.Entity(0, 0, pacman.PLAYER);
            this.map[0][0] = player;
            this.entities.push(player);
        } else if (type === pacman.ENEMY) {
            let enemy = new pacman.Entity(1, 0, pacman.ENEMY);
            this.map[1][0] = enemy;
            this.entities.push(enemy);
        }
    }

    drawBoard() {
        let field = this.map;
        for (let i = 0; i < field.length; i++) {
            for (let j = 0; j < field[i].length; j++) {
                if (typeof field[i][j] == 'object') {
                    if (field[i][j].type === pacman.PLAYER) {
                        console.log('P');
                    } else if (field[i][j].type === pacman.ENEMY) {
                        console.log('E');
                    }
                } else {
                    console.log(field[i][j]);
                }
            }
        }
    }

    moveEntity(entity, x, y) {
        let field = this.map;
        if (x >= 0 && x < field[y].length && y >= 0 && y < field.length) {
            console.log('A');
        }
    }
}