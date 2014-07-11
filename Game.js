//thing = createjs.Sprite()
//thing.x = 200

function init() {
    var stage = new createjs.Stage("demoCanvas");
    var circle = new createjs.Shape();
    circle.graphics.beginFill("red").drawCircle(0, 0, 50);
    circle.x = 100;
    circle.y = 100;
    stage.addChild(circle);
    stage.update();
    // stage.addChild(new createjs.Shape()).setTransform(100,100).graphics.f("red").dc(0,0,50);
}

function StarShape() {
    var stage = new createjs.Stage("starCanvas");
    var star = new createjs.Shape();
    star.graphics.beginFill("blue").drawPolyStar(0, 0, 50, 7, 0.5, -90);
    star.x = 100;
    star.y = 100;
    stage.addChild(star);
    stage.update();
}

function buttonClick() {
    var stage = new createjs.Stage("buttonCanvas");
    var btton = new createjs.Shape();
    btton.graphics.beginFill("blue").drawRoundRect(0, 0, 200, 100, 15);
    btton.x = 100;
    btton.y = 100;
    stage.addChild(btton);
    stage.update();

    btton.addEventListener("click", RandomText);
    function RandomText(event) {
        var stage = new createjs.Stage("textCanvas");
        var text1 = new createjs.Text("Hello", "45px Comic Sans MS", "pink");
        var text2 = new createjs.Text("world", "45px Marker Felt", "blue");
        var text3 = new createjs.Text("!!!!!", "45px Monotype Corsiva", "red");
        text1.x = 100;
        text1.y = 90;
        text2.x = 220;
        text2.y = 100;
        text3.x = 320;
        text3.y = 100;
        stage.addChild(text1);
        stage.addChild(text2);
        stage.addChild(text3);
        stage.update();
    }
}