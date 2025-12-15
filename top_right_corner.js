//https://www.dukelearntoprogram.com/course1/example/index.php

function topRightCorner(cornerWidth, cornerHeight, someImage, red, green, blue) {
    for (var px of someImage.values()) {
        var x = px.getX();
        var y = px.getY();
        if (x >= someImage.getWidth() - cornerWidth && y < cornerHeight) {
            px.setRed(red);
            px.setGreen(green);
            px.setBlue(blue);
        }
    }
    return someImage;
}

var picture = new SimpleImage("chapel.png");
var result = topRightCorner(30, 60, picture, 255, 255, 0);
print(result);
var picture2 = new SimpleImage("smalllion.jpg");
var result2 = topRightCorner(125, 20, picture2, 255, 0, 0);
print(result2);
