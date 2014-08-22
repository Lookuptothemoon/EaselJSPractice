window.requestAnimFrame = (function (callback) {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
})();

/*
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
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










//Key codes for keyboard input
var enter_key = 13;
var space_key = 32;
var up_key = 38;
var left_key = 37;
var right_key = 39;
//letters
var w_key = 87;
var a_key = 65;
var d_key = 68;

//document.onkeydown = handleKeydown;
//document.onkeyup = handleKeyUp;


var stage;

function init() {
    //sets the stage as the ballCanvas
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.mouseMoveOutside = true;
    stage.enableMouseOver(10);

    //makes the container move horizontally giving it a scroll effect
    var scrollImg = new createjs.Container();
    var bckgrd1 = new createjs.Bitmap("images/CityBackground.png");
    bckgrd1.x = 0;
    bckgrd1.y = -10;
    bckgrd1.scaleX = 1.15;

    var bckgrd2 = bckgrd1.clone();
    bckgrd2.x = bckgrd2.x - 1085;

    scrollImg.addChild(bckgrd2, bckgrd1);


    var player = new createjs.Bitmap("images/player.png");
    player.x = 0;
    player.y = 490;
    player.scaleX = .25;
    player.scaleY = .25;

    var airplane = new createjs.Bitmap("images/airplane.png");
    airplane.x = 600;
    airplane.y = -250;

    //adds the objects made above to the stage
    stage.addChild(scrollImg);
    stage.addChild(player);
    stage.addChild(airplane);

    scrollImg.addEventListener("tick", function move() {
        scrollImg.x = scrollImg.x + 5;
        airplane.x = airplane.x - 10;
        //if (player.x < 800) {
        //    player.x = player.x + 5;
        //}
    });

    canvas.addEventListener("click", function stop() {
        scrollImg.removeAllEventListeners();
    });

    player.addEventListener("pressmove", function move(event) {
        player.x = event.stageX;
        player.y = event.stageY;
        console.log(event.stageX);
        stage.update();
    });

    createjs.Ticker.addEventListener("tick", tick);

    document.addEventListener("keydown", handleRight);

}

function tick() {
    //updates the stage automatically
    stage.update();
}

function handleRight(event) {
    if (event.keyCode == right_key){
        player.x = player.x + 5;
    }
}

//calls the function
init();