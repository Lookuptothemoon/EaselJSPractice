//thing = createjs.Sprite()
//thing.x = 200


var stage = null;

function init() {
    stage = new createjs.Stage("largeCanvas");
    stage.mouseMoveOutside = true;
    var circle = new createjs.Shape();
    circle.graphics.beginFill("red").drawCircle(0, 0, 50);
    // stage.addChild(new createjs.Shape()).setTransform(100,100).graphics.f("red").dc(0,0,50);

    var text = new createjs.Text("Circle", "25px Marker Felt", "white");
    text.textAlign = "center";
    text.y = -10;

    var drag = new createjs.Container();
    drag.x = 100;
    drag.y = 100;
    drag.addChild(circle, text);
    stage.addChild(drag);

    drag.on("pressmove", function(event) {
        event.currentTarget.x = event.stageX;
        event.currentTarget.y = event.stageY;
        stage.update();
    });

    stage.update();
}

function StarShape() {
    var star = new createjs.Shape();
    star.graphics.beginFill("blue").drawPolyStar(0, 0, 50, 7, 0.5, -90);
    star.x = 100;
    star.y = 100;
    stage.addChild(star);
    stage.update();
}

function buttonClick() {
    var btton = new createjs.Shape();
    btton.graphics.beginFill("blue").drawRoundRect(0, 0, 200, 100, 15);
    btton.x = 100;
    btton.y = 100;
    stage.addChild(btton);
    stage.update();

    btton.addEventListener("click", RandomText);
    function RandomText(event) {
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

function pic() {
    var image = new createjs.Bitmap("http://www.writerscentre.com.au/wp-content/uploads/2013/12/Writing-Picture-Books-grid.jpg");
    stage.addChild(image);
    stage.update();
}

init();