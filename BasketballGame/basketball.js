var stage;
var text;
var sprite;
var num;
var stickman;

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


    //adds the objects made above to the stage
    stage.addChild(backboard, basketball, hoop, hits/*, ell*/);
    stage.addChild(sprite/*, stickman*/);

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