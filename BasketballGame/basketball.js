var stage;
var tween;

function init() {
    stage = new createjs.Stage("ballCanvas");
    stage.mouseMoveOutside = true;
    stage.enableMouseOver();

    var basketball = new createjs.Bitmap("http://icons.iconseeker.com/png/fullsize/snowe-2-xp/games-basketball-1.png");

    if('ontouchstart' in document.documentElement) {
        stage.addEventListener('touchstart', function(event) {
            handleKeyDown();
        }, false);

        stage.addEventListener('touchend', function(event){
            handleKeyUp();
        }, false);
    } else {
        document.onkeydown = handleKeyDown;
        document.onkeyup = handleKeyUp;
        document.onmousedown = handleKeyDown;
        document.onmouseup = handleKeyUp;
    }
    stage.addChild(basketball);

    function handleKeyUp(event) {
        /*tween = createjs.Tween.get(basketball, {loop:true})
            .to({x:basketball.x, y:ballCanvas.height - 55, rotation:-360}, 1500, createjs.Ease.bounceOut)
            .wait(1000)
            .to({x:ballCanvas.width-55, rotation:360}, 2500, createjs.Ease.bounceOut)
            .wait(1000).call(handleComplete)
            .to({scaleX:2, scaleY:2, x:ballCanvas.width - 110, y:ballCanvas.height-110}, 2500, createjs.Ease.bounceOut)
            .wait(1000)
            .to({scaleX:.5, scaleY:.5, x:30, rotation:-360, y:ballCanvas.height-30}, 2500, createjs.Ease.bounceOut);
            */
    }

    function handleKeyDown(event) {
        createjs.Tween.get(basketball).to({x:385}, 2500, createjs.Ease.quadOut);
        createjs.Tween.get(basketball).to({y:197}, 2000, createjs.Ease.bounceOut);
    }


    createjs.Ticker.addEventListener("tick", tick);

}

function handleComplete(tween) {
    var basketball = tween._target;
}

function tick(event) {
    stage.update();
}

init();