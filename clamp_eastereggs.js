//https://www.dukelearntoprogram.com/course1/example/index.php
var image = new SimpleImage("eastereggs.jpg");

for (var px of image.values()) {
    if (px.getRed() > 70) {
        px.setRed(70);
    }
}

print(image);
