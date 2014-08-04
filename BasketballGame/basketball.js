var stage;
//var tween;
var text;

function init() {
    stage = new createjs.Stage("ballCanvas");
    stage.mouseMoveOutside = true;
    stage.enableMouseOver();

    var basketball = new createjs.Bitmap("images/basketball.png");
    var hoop = new createjs.Bitmap("images/hoop.png");
    hoop.x = 180;   //-65
    hoop.y = -10;
    hoop.alpha = 0.5;

    ballCanvas.addEventListener("click", function handleClick(){
        createjs.Tween.get(basketball).to({x:884}, 2500, createjs.Ease.quadOut);
        createjs.Tween.get(basketball).to({y:397}, 2000, createjs.Ease.bounceOut);
    });


    hoop.addEventListener("mouseover", function handleInteraction(event){
        event.currentTarget.alpha = 1;
    });
    hoop.addEventListener("mouseout", function other(event){
        event.currentTarget.alpha = 0.5;
    });

    basketball.addEventListener("tick", function hit(event){
        var pt = basketball.localToLocal(0,0,hoop);
        if(hoop.hitTest(pt.x,pt.y)){
            hoop.x = Math.floor((Math.random() * 723) - 82);
            hoop.y = Math.floor((Math.random() * 256 - 38));
            text = new createjs.Text("YOU WIN!", "50px Arial", "orange");
            text.x = 430;
            text.y = 250;
            stage.addChild(text);
        }
    });

    stage.addChild(basketball);
    stage.addChild(hoop);

    createjs.Ticker.addEventListener("tick", tick);
}

function tick(event) {
    stage.update();
}

init();