const sprite_w = 902;
const sprite_h = 1160;

function spritePositionToImgPosition(row, col) {
    return {
        x: (col * sprite_w),
        y: (row * sprite_h)
    }
}

var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

var spriteSheetURL = 'sprite3.png';

var img = new Image();
img.src = spriteSheetURL;
img.crossOrigin = true;

var row = 0;
var col = 0;

function animate() {
    if (col === 5) {
        col = 0;
        row += 1;
    }
    if (row === 3 && col === 1) {
        col = 0;
        row = 0;
    }
    var position = spritePositionToImgPosition(row, col);
    context.clearRect(
        0,0,canvas.width, canvas.height
    );
    context.drawImage(
        img, position.x, position.y, sprite_w, sprite_h, 0, 0,sprite_w, sprite_h
    );
    col += 1;
}

img.onload = function() {
    setInterval(animate, 120);
};