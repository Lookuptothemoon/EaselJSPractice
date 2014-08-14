window.onload = function () {
    var R = Raphael(document.getElementById("canvas"), 700, 700);
    var l = R.path("M100 200L200 200L300 200");
    l.attr({ stroke: 'red', 'stroke-width': 4 });
    var c = R.circle(200, 200, 5).attr({ fill: 'white', stroke: 'red', 'stroke-width': 4 });
    var ball = R.circle(100,100,20).attr({ fill: "orange", stroke: "red", "stroke-width": 2});

    function move(dx, dy) {
        var x = 200 + dx, y = 200 + dy;
        this.attr({cx: x, cy: y});
        l.attr({path: "M100 200L" + x + " " + y + "L300 200"});
    }

    function start() {
        c.stop();
        l.stop();
    }

    function end() {
        this.animate({cx: 200, cy: 200}, 2000, "elastic");
        l.animate({path: "M100 200L200 200L300 200"},
            2000, "elastic");
    }

    c.drag(move, start, end);
    ball.drag(move,start,end);

};