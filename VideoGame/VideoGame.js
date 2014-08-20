window.requestAnimFrame = (function (callback) {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
})();

/*
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var width = 1000,
    height = 700,
    player = {
      x : width/2,
      y : height - 5,
      width : 5,
      height : 5,
      speed: 3,                 //controls the height and speed the player jumps
      velX: 0,
      velY: 0,
      jumping: false
    },
    keys = [],
    friction = 0.8,
    gravity = 0.3;

canvas.width = width;
canvas.height = height;

function update(){
  // check keys
    if (keys[38] || keys[32]) {
        // up arrow or space
      if(!player.jumping){
       player.jumping = true;
       player.velY = -player.speed*2;
      }
    }
    if (keys[39]) {
        // right arrow
        if (player.velX < player.speed) {
            player.velX++;
        }
    }
    if (keys[37]) {
        // left arrow
        if (player.velX > -player.speed) {
            player.velX--;
        }
    }

    player.velX *= friction;

    player.velY += gravity;

    player.x += player.velX;
    player.y += player.velY;

    if (player.x >= width-player.width) {
        player.x = width-player.width;
    } else if (player.x <= 0) {
        player.x = 0;
    }

    if(player.y >= height-player.height){
        player.y = height - player.height;
        player.jumping = false;
    }

  ctx.clearRect(0,0,width,height);
  ctx.fillStyle = "red";
  ctx.fillRect(player.x, player.y, player.width, player.height);

  requestAnimationFrame(update);
}

document.body.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
});


window.addEventListener("load",function(){
    update();
});
*/








var stage;

function init() {
    //sets the stage as the ballCanvas
    stage = new createjs.Stage("canvas");
    stage.mouseMoveOutside = true;
    stage.enableMouseOver(10);

    //makes a basketball bitmap
    var bckgrd1 = new createjs.Bitmap("images/CityBackground.png");
    bckgrd1.x = 0;
    bckgrd1.y = -10;

    var player = new createjs.Bitmap("images/player.png");
    player.x = 0;
    player.y = 490;
    player.scaleX = .25;
    player.scaleY = .25;

    var airplane = new createjs.Bitmap("images/airplane.png");
    airplane.x = 600;
    airplane.y = -250;

    //adds the objects made above to the stage
    stage.addChild(bckgrd1);
    stage.addChild(player);
    stage.addChild(airplane);

    bckgrd1.addEventListener("tick", function move(){
        bckgrd1.x = bckgrd1.x + 1;
        airplane.x = airplane.x - 10;
        if(player.x < 800) {
            player.x = player.x + 5;
        }
    });

    canvas.addEventListener("click", function stop(){
        bckgrd1.removeAllEventListeners();
    });

    player.addEventListener("pressmove", function move(event){
        player.x = event.stageX;
        player.y = event.stageY;
        console.log(event.stageX);
        stage.update();
    });

    createjs.Ticker.addEventListener("tick", tick);
}

function tick() {
    //updates the stage automatically
    stage.update();
}

//calls the function
init();