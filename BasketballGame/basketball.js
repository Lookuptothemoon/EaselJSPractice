var stage;
var text;
var sprite;
var num;
var stickman;
var stick;

function init() {
    //sets the stage as the ballCanvas
    stage = new createjs.Stage("ballCanvas");
    stage.mouseMoveOutside = true;
    stage.enableMouseOver(10);

    //makes a basketball bitmap
    var basketball = new createjs.Bitmap("images/basketball.png");
    basketball.scaleX = 0.3;
    basketball.scaleY = 0.3;
    basketball.x = 570;   //570     // -122 & 833
    basketball.y = 50;         //  -87 & 570
    basketball.alpha = 0.7;

    /*
    basketball.on("tick", function(event) {
            event.currentTarget.x = event.stageX;
            event.currentTarget.y = event.stageY;
    });
    */

    //basketball.currentTarget.x = basketball.stageX;
    //basketball.currentTarget.y = basketball.stageY;

    //makes a backboard bitmap for the hoop in the stage
    var backboard = new createjs.Bitmap("images/backboard.png");
    backboard.x = 322;
    backboard.y = -50;
    backboard.scaleY = 1.30;
    backboard.scaleX = 1.05;

    //makes a new bitmap for the hoop and places it in stage
    var hoop = new createjs.Bitmap("images/hoop.png");
    hoop.x = 250;
    hoop.y = -110;
    hoop.scaleY = 1.30;
    hoop.scaleX = 1.07;

    //creates a test hit test shape for the basket
    var hits = new createjs.Shape();
    hits.graphics.beginFill("black").drawRect(0, 0, 20, 5);
    hits.alpha = 0;
    hits.x = 750; //700
    hits.y = 326; //300

    //makes a new ellipse which is the hit test for the hoop
    var ell = new createjs.Shape();
    ell.graphics.beginFill("blue").drawEllipse(0, 0 , 60, 30); //60, 10
    ell.x = 600; //730
    ell.y = 320; //320
    hoop.hitArea = ell;

    //makes a new stickman sprite and makes it stand up
    var stick = new createjs.SpriteSheet({
     images: [ "images/stickmanShoot.png" ],
     frames: { width: 192, height: 374 },
     animations: {
         "start": { frames: [ 0 ], frequency: 4},
         "shoot": { frames: [ 0, 1, 2, 3, 4 ], next:false, frequency: 4 },
         "relax": { frames: [ 4, 3], frequency: 4}}
    });

    stickman = new createjs.Sprite(stick, "shoot");
    stickman.x = 100;
    stickman.y = 100;

    //makes a new Sprite of a man crawling in and out
    var data = new createjs.SpriteSheet({
     images: [ "images/crawl.png" ],
     frames: { width: 140, height: 230 },
     animations: {
         "stand": { frames: [ 13,12,11,10,9,8,7,6,5,4,3,2,1,0 ], next:false, frequency: 8 },
         "crawl": { frames: [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13 ], next:false, frequency: 8 }}
    });

    sprite = new createjs.Sprite(data, "stand");
    sprite.x = 100;
    sprite.y = 400;

    var info = new createjs.SpriteSheet({
         images: [ "images/stick.png" ],
         frames: { width: 66.66666666666667, height: 125.875 },
         animations: {
              "default": { frames: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71 ], frequency: 30 },
              "up": {frames: [42], frequency: 0},
              "run": {frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30/*, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69*/], next:false, speed:5}
         }
    });

    stick = new createjs.Sprite(info, "up");
    stick.x = 300;
    stick.y = 500;

    hoop.hitArea = ell;
    //makes hoop opacity .50% when clicked on
    hoop.addEventListener("click", function glow(){
        hoop.alpha = .5;
    });

    //makes a hitTest for the basketball and practice shape --> rectangle
    hits.addEventListener("tick", function madeContact(){
        var pt = hits.localToLocal(0,0,basketball);
        if(basketball.hitTest(pt.x,pt.y)){
            text = new createjs.Text("YOU WIN!", "50px Arial", "orange");
            text.x = 430;
            text.y = 250;
            stage.addChild(text);
            //basketball.scaleX = basketball.scaleX/0.1;
        }
    });

    //basketball is shot when the stickman is clicked on
    basketball.addEventListener("click", function handleClick(){
        createjs.Tween.get(basketball).to({x:800}, 3000, createjs.Ease.circIn(7));
        createjs.Tween.get(basketball).to({y:500}, 2500, createjs.Ease.bounceOut);


        //createjs.Tween.get(basketball).to({x:620}, 500, createjs.Ease.circIn(7));
        //createjs.Tween.get(basketball).to({y:500}, 2500, createjs.Ease.bounceOut);

    });

    //makes the opacity of the basketball 100% when clicked on
    basketball.addEventListener("mouseover", function handleInteraction(){
        basketball.alpha = 1;
    });

    //checks to see if sprite is crawled in or out and does the other
    num = 1;
    sprite.addEventListener("click", function go(){
        if (num%2==0) {
            sprite.gotoAndPlay("stand");
        }else{
            sprite.gotoAndPlay("crawl");
        }
        num = num + 1;
    });

    ballCanvas.addEventListener("click", function run(){
        var num = 0;
        while (num<25) {
            stick.gotoAndPlay("run");
            stick.x = stick.x + 20;
        }
        num = num + 1;
    });


    //adds the objects made above to the stage
    stage.addChild(backboard, basketball, hoop, hits/*, ell*/);
    stage.addChild(sprite, stick/*, stickman*/);

    createjs.Ticker.addEventListener("tick", tick);
}

function draggable(item) {
    item.on("pressmove", function(event) {
        event.currentTarget.x = event.stageX;
        event.currentTarget.y = event.stageY;
        stage.update();
    });
}

function tick() {
    //updates the stage automatically
    stage.update();
}

//calls the function
init();







        var canvas, stage;
        var drawingCanvas;
        var oldPt;
        var oldMidPt;
        var title;
        var color;
        var stroke;
        var colors;
        var index;

        function init() {
            if (window.top != window) {
                document.getElementById("header").style.display = "none";
            }
            canvas = document.getElementById("myCanvas");
            index = 0;
            colors = ["#828b20", "#b0ac31", "#cbc53d", "#fad779", "#f9e4ad", "#faf2db", "#563512", "#9b4a0b", "#d36600", "#fe8a00", "#f9a71f"];

            //check to see if we are running in a browser with touch support
            stage = new createjs.Stage(canvas);
            stage.autoClear = false;
            stage.enableDOMEvents(true);

            createjs.Touch.enable(stage);
            createjs.Ticker.setFPS(24);

            drawingCanvas = new createjs.Shape();

            stage.addEventListener("stagemousedown", handleMouseDown);
            stage.addEventListener("stagemouseup", handleMouseUp);

            title = new createjs.Text("Click and Drag to draw", "36px Arial", "#777777");
            title.x = 300;
            title.y = 200;
            stage.addChild(title);

            stage.addChild(drawingCanvas);
            stage.update();
        }

        function stop() {}

        function handleMouseDown(event) {
            if (stage.contains(title)) { stage.clear(); stage.removeChild(title); }
            color = colors[(index++)%colors.length];
            stroke = Math.random()*30 + 10 | 0;
            oldPt = new createjs.Point(stage.mouseX, stage.mouseY);
            oldMidPt = oldPt;
            stage.addEventListener("stagemousemove" , handleMouseMove);
        }

        function handleMouseMove(event) {
            var midPt = new createjs.Point(oldPt.x + stage.mouseX>>1, oldPt.y+stage.mouseY>>1);

            drawingCanvas.graphics.clear().setStrokeStyle(stroke, 'round', 'round').beginStroke(color).moveTo(midPt.x, midPt.y).curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);

            oldPt.x = stage.mouseX;
            oldPt.y = stage.mouseY;

            oldMidPt.x = midPt.x;
            oldMidPt.y = midPt.y;

            stage.update();
        }

        function handleMouseUp(event) {
            stage.removeEventListener("stagemousemove" , handleMouseMove);
        }

