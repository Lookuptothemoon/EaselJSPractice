var stage;
var text;

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

    stage.addChild(basketball, hoop);

    createjs.Ticker.addEventListener("tick", tick);
}

function tick(event) {
    stage.update();
}

init();
init();
init();