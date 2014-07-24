
function init() {
    var stage = new createjs.Stage("largeCanvas");
    stage.mouseMoveOutside = true;
    stage.enableMouseOver();
    var circle;
    var drag = new createjs.Container();
    stage.addChild(drag);

    var listClr = ["red", "orange", "yellow", "green", "blue", "purple", "silver", "lime", "aqua"];
    var num = 0;

    for(var i = 0; i<250; i++) {
        circle = new createjs.Shape();
        if(num >= listClr.length) {
            num = 0;
        }
        circle.graphics.beginFill(listClr[num]).drawCircle(0, 0, 25);
        num = num + 1;
        circle.x = largeCanvas.width * Math.random()|0;
		circle.y = largeCanvas.height * Math.random()|0;
        circle.alpha = .5;
        
        circle.on("mouseover", function(event) {
        	event.currentTarget.alpha = 1;
            stage.update();
        });
        
        circle.on("mouseout", function(event) {
        	event.currentTarget.alpha = 0.5;
            stage.update();
        });

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
