var stage;
var text;
var sprite;
var num;

/*
var box2d = {
    b2Vec2 : Box2D.Common.Math.b2Vec2,
    b2BodyDef : Box2D.Dynamics.b2BodyDef,
    b2Body : Box2D.Dynamics.b2Body,
    b2FixtureDef : Box2D.Dynamics.b2FixtureDef,
    b2Fixture : Box2D.Dynamics.b2Fixture,
    b2World : Box2D.Dynamics.b2World,
    b2MassData : Box2D.Collision.Shapes.b2MassData,
    b2PolygonShape : Box2D.Collision.Shapes.b2PolygonShape,
    b2CircleShape : Box2D.Collision.Shapes.b2CircleShape,
    b2DebugDraw : Box2D.Dynamics.b2DebugDraw;
};
*/

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

    var hoop = new createjs.Bitmap("images/Hoop.png");
    hoop.x = 322;
    hoop.y = -50;
    hoop.scaleY = 1.30;
    hoop.scaleX = 1.05;

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


    basketball.addEventListener("mouseover", function handleInteraction(event){
        basketball.alpha = 1;
    });
    /*
    basketball.addEventListener("mouseout", function other(event){
        basketball.alpha = 0.5;
    });
    */

    hoop.addEventListener("click", function glow(){
        hoop.alpha = .5;
    });


    basketball.addEventListener("tick", function hit(event){
        var pt = basketball.localToLocal(0,0,hoop);
        if(hoop.hitTest(pt.x,pt.y)){
            basketball.x = Math.floor((Math.random() * 833) - 122);
            basketball.y = Math.floor((Math.random() * 570 - 87));
            text = new createjs.Text("YOU WIN!", "50px Arial", "orange");
            text.x = 430;
            text.y = 250;
            stage.addChild(text);
        }
    });

    stage.addChild(hoop, basketball);
    stage.addChild(sprite);

    createjs.Ticker.addEventListener("tick", tick);
}

function tick(event) {
    stage.update();
}

init();