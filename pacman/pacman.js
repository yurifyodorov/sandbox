// 1 = <div class='wall'></div>
// 2 = <div class='coin'></div>
// 3 = <div class='ground'></div> 
// 5 = <div class='pacman'></div>

let map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 1, 1, 5, 1, 1, 2, 2, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1],
    [1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1],
    [1, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1],
    [1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

let pacman = {
    x: 6,
    y: 4
}

let score = 0;

function drawWorld() {
    document.getElementById('world').innerHTML = ""; // не позволяет отрисовать мир при повторном вызове drawWorld()
    for (let y = 0; y < map.length; y = y + 1) {
        // console.log(map[y])
        for (let x = 0; x < map[y].length; x = x + 1) {
            console.log(map[y][x])
            if (map[y][x] === 1) {
                document.getElementById('world').innerHTML += "<div class='wall'></div>";
            }
            else if (map[y][x] === 2) {
                document.getElementById('world').innerHTML += "<div class='coin'></div>";
            }
            else if (map[y][x] === 3) {
                document.getElementById('world').innerHTML += "<div class='ground'></div>";
            }
            else if (map[y][x] === 5) {
                document.getElementById('world').innerHTML += "<div class='pacman'><div class='pacman__eye'></div><div class='pacman__mouth'></div></div>";
            }
        }
        document.getElementById('world').innerHTML += "<br>"
    }
}

document.onkeydown = function (e) {
    console.log(e.keyCode);
    if (e.keyCode === 37) {
        // left
        if (map[pacman.y][pacman.x - 1] !== 1) { // не позволяет "съесть" стену
            if (map[pacman.y][pacman.x - 1] === 2) {
                score = score + 10; // про вывод очков с 1:02:15
            }
            map[pacman.y][pacman.x] = 3;
            pacman.x = pacman.x - 1;
            map[pacman.y][pacman.x] = 5;
            drawWorld();
        }
    }
    else if (e.keyCode === 38) {
        // up
        if (map[pacman.y - 1][pacman.x] !== 1) { // не позволяет "съесть" стену
            map[pacman.y][pacman.x] = 3;
            pacman.y = pacman.y - 1;
            map[pacman.y][pacman.x] = 5;
            drawWorld();
        }
    }
    else if (e.keyCode === 39) {
        // right
        if (map[pacman.y][pacman.x + 1] !== 1) { // не позволяет "съесть" стену
            map[pacman.y][pacman.x] = 3;
            pacman.x = pacman.x + 1;
            map[pacman.y][pacman.x] = 5;
            drawWorld();
        }
    }
    else if (e.keyCode === 40) {
        // down
        if (map[pacman.y + 1][pacman.x] !== 1) { // не позволяет "съесть" стену
            map[pacman.y][pacman.x] = 3;
            pacman.y = pacman.y + 1;
            map[pacman.y][pacman.x] = 5;
            drawWorld();
        }
    }
}

drawWorld();