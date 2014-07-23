//Draws a bar graph from indicated information
var stage;
var rect; var color; var border; var text; var text2;
var data = [48,117,200,240,160,260,220, 25, 122, 112, 57, 225, 67, 72, 300, 101, 100, 99];

function drawBar(height, x, y){
    stage = new createjs.Stage("barCanvas");
    stage.mouseMoveOutside = true;

    border = new createjs.Shape();
    border.graphics.beginStroke("white").rect(0,0,800,520);
    border.graphics.setStrokeStyle(1);
    border.x = Math.round(barCanvas.width/2 - 380);
    border.y = Math.round(barCanvas.height/2 - 280);

    rect = new createjs.Shape();
    if(height>=200) {                                       //color coded based on height
        color = "yellow";
    }else if(height>100 && height<200) {
        color = "red";
    }else {
        color = "green";
    }
    rect.graphics.beginFill(color).rect(0,0,50,height);

    text = new createjs.Text(height.toString(), "25px Times New Roman", "black");
    text.textAlign = "center";
    text.x = 25;
    text.outline = false;
    text2 = text.clone();                                   //Outline shadow for text above
    text2.outline = 2;
    text2.color = "white";

    var container = new createjs.Container();
    container.x = x;
    container.y = y;
    container.addChild(rect, text2, text);
    stage.addChild(border);
    stage.addChild(container);
    stage.update();

    border.on("pressmove", function(event){
        event.currentTarget.x = event.stageX;
        event.currentTarget.y = event.stageY;
        stage.update();
    })
}

function Graph(){
    var num = 100;
    for(var i=0; i<data.length; i++) {
        drawBar(data[i], num, 800);
        num = num + 50;
    }
}

function full(){
    var barChart = new Chart(ctx)
}

drawBar(100,120,390);
console.log(data.length);