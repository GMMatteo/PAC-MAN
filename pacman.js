var world = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,],
    [2,0,1,2,1,1,1,1,1,1,1,3,1,1,1,1,1,1,3,2,],
    [2,1,1,2,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,],
    [2,1,1,2,3,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,],
    [2,1,1,2,2,2,1,2,1,1,1,1,1,2,1,1,2,1,1,2,],
    [2,1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,2,],
    [2,1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,2,],
    [2,1,1,2,2,2,1,2,1,3,1,1,1,2,1,1,2,1,1,2,],
    [2,1,1,1,1,2,1,2,1,1,1,1,1,2,1,3,2,1,1,2,],
    [2,1,1,1,3,2,1,2,1,1,1,1,1,2,2,2,2,1,1,2,],
    [2,1,1,2,2,2,1,2,1,1,1,1,1,1,1,1,1,1,1,2,],
    [2,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,],
    [2,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,],
    [2,3,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,3,2,],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,]
]

var score = 0;
var pacman = {
    x: 1,
    y: 1
};

function displayWorld () {
    var output = '';
        for(var i=0; i<world.length; i++) {
            output += "<div class='row'>";
            for(var j=0; j<world[i].length; j++){
                if(world[i][j] == 2)
                    output += "<div class='brick'></div>";
                if(world[i][j] == 1)
                    output += "<div class='coin'></div>";
                if(world[i][j] == 0)
                    output += "<div class='empty'></div>";
                if(world[i][j] == 3)
                    output += "<div id='cherry'></div>";
            }
            output += "</div>";
        }
        // console.log(output);
        document.getElementById('world').innerHTML = output;
}

function displayPacman(){
    document.getElementById('pacman').style.top = pacman.y*30+"px"
    document.getElementById('pacman').style.left = pacman.x*30+"px"
}

function displayScore(){
    document.getElementById('score').innerHTML = score;
}

displayWorld();
displayPacman();


document.onkeydown = function (e) {
    var img =document.getElementById('pacman');

    if(e.key == "ArrowLeft" && world[pacman.y][pacman.x-1] !=2){
        pacman.x--;
        img.style.transform = 'rotate(180deg)';
    }
    else if (e.key =="ArrowRight" && world[pacman.y][pacman.x+1] !=2) {
        pacman.x++;
        img.style.transform = 'rotate(0deg)';
    }
    else if (e.key =="ArrowUp" && world[pacman.y-1][pacman.x] !=2) {
        pacman.y--;
        img.style.transform = 'rotate(270deg)';
    }
    else if (e.key =="ArrowDown" && world[pacman.y+1][pacman.x] !=2) {
        pacman.y++;
        img.style.transform = 'rotate(90deg)';
    }

    if(world[pacman.y][pacman.x] == 1){
        world[pacman.y][pacman.x] = 0;
        score+=10;
        displayWorld();
        displayScore();
    }

    else if(world[pacman.y][pacman.x] == 3){
        world[pacman.y][pacman.x] = 0;
        score+=50;
        displayWorld();
        displayScore();
    }
    displayPacman();
}

