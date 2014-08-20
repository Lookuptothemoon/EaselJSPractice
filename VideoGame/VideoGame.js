// thanks Paul Irish for this RAF fallback shim
window.requestAnimFrame = (function (callback) {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
})();


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var infiniteImage;
var infiniteImageWidth;
var img = document.createElement("img");
img.onload = function () {

    // use a tempCanvas to create a horizontal mirror image
    // This makes the panning appear seamless when
    // transitioning to a new image on the right
    var tempCanvas = document.createElement("canvas");
    var tempCtx = tempCanvas.getContext("2d");
    tempCanvas.width = img.width - 15;
    tempCanvas.height = img.height;
    tempCtx.drawImage(img, 0, 0);
    tempCtx.save();
    tempCtx.scale(-1, 1);
    tempCtx.drawImage(img, 0, 0);
    tempCtx.restore();
    infiniteImageWidth = img.width;
    infiniteImage = document.createElement("img");
    infiniteImage.onload = function () {
        pan();
    };
    infiniteImage.src = tempCanvas.toDataURL();
};
img.crossOrigin = "anonymous";
img.src = "images/CityBackground.png";


var fps = 500;
var offsetLeft = 0;

function pan() {

    // increase the left offset
    offsetLeft += 1;
    if (offsetLeft > infiniteImageWidth) {
        offsetLeft = 0;
    }

    ctx.drawImage(infiniteImage, -offsetLeft, 0);
    ctx.drawImage(infiniteImage, infiniteImage.width - offsetLeft, 0);

    setTimeout(function () {
        requestAnimFrame(pan);
    }, 1000 / fps);
}