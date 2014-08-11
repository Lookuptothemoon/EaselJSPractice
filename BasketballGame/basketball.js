var stage;
var text;
var sprite;
var num;

function init() {
    stage = new createjs.Stage("ballCanvas");
    stage.mouseMoveOutside = true;
    stage.enableMouseOver();

    var basketball = new createjs.Bitmap("images/basketball.png");
    basketball.scaleX = 0.3;
    basketball.scaleY = 0.3;
    basketball.x = -122;        // -122 & 833
    basketball.y = -87;         //  -87 & 570
    basketball.alpha = 0.5;

    var backboard = new createjs.Bitmap("images/backboard.png");
    backboard.x = 322;
    backboard.y = -50;
    backboard.scaleY = 1.30;
    backboard.scaleX = 1.05;

    var hoop = new createjs.Bitmap("images/hoop.png");
    hoop.x = 258;
    hoop.y = -110;
    hoop.scaleY = 1.30;
    hoop.scaleX = 1.05;

    //creates a hit test shape for the basket
    var hits = new createjs.Shape();
    hits.graphics.beginFill("black").drawRect(0, 0, 40, 10);
    hits.alpha = 0.5;
    hits.x = 190; //700
    hits.y = 100; //300

    var ell = new createjs.Shape();
    ell.graphics.beginFill("blue").drawEllipse(0, 0 , 60, 10);
    ell.x = 730; //730
    ell.y = 320; //320
    hoop.hitArea = ell;

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

    num = 1;
    sprite.addEventListener("click", function go(){
        if (num%2==0) {
            sprite.gotoAndPlay("stand");
        }else{
            sprite.gotoAndPlay("crawl");
        }
        num = num + 1;
    });


    basketball.addEventListener("click", function handleClick(){
        createjs.Tween.get(basketball).to({x:833}, 2500, createjs.Ease.quadOut);
        createjs.Tween.get(basketball).to({y:570}, 2000, createjs.Ease.bounceOut);
    });

    basketball.addEventListener("mouseover", function handleInteraction(){
        basketball.alpha = 1;
    });

    hoop.addEventListener("click", function glow(){
        hoop.alpha = .5;
    });

    basketball.addEventListener("tick", function madeContact(){
        var pt = basketball.globalToLocal(0,0,hits);
        if(hits.hitTest(pt.x,pt.y)){
            text = new createjs.Text("YOU WIN!", "50px Arial", "orange");
            text.x = 430;
            text.y = 250;
            stage.addChild(text);
        }
    });

    stage.addChild(backboard, basketball, hits, hoop);
    stage.addChild(sprite);

    createjs.Ticker.addEventListener("tick", tick);
}

function tick() {
    stage.update();
}

init();