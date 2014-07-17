var stage = null;

function init() {
    stage = new createjs.Stage("largeCanvas");
    stage.mouseMoveOutside = true;
    var circle; var text;
    var drag = new createjs.Container();
    stage.addChild(drag);

    for(var i = 0; i<100; i++){
        circle = new createjs.Shape();
        circle.graphics.beginFill("red").drawCircle(0, 0, 50);
        circle.x = stage.width * Math.random()|0;
		circle.y = stage.height * Math.random()|0;

        circle.on("pressmove", function(event) {
        event.currentTarget.x = event.stageX;
        event.currentTarget.y = event.stageY;
        stage.update();
        });

        circle.name = "circle_" + i;
        drag.addChild(circle);
    }


    stage.update();
}

init();