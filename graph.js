//Draws a bar graph from indicated information

var data = new Array(48,117,200,240,160,260,220, 25, 122, 112, 57, 225, 67, 72, 300, 101, 100, 99);

function max() {
    max = data[0];
    for(i=0; i<data.length; i++) {
        if(data[i]>max) {
            max = data[i];
        }
    }
    return max;
}

function practice() {
    console.log(max());
    console.log(Math.PI);
}

function drawBar(height) {
	var rect = new createjs.Shape()
	if(height>=200) {
		var color = "yellow";
	}else if(height>100 && height<200) {
		var color = "red";
	}else {
		var color = "green";
	}
	rect.graphics.beginFill(color).drawRect(0, 0, 25);
}

stage = new createjs.Stage("BarCanvas");
practice();