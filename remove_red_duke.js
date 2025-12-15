//https://www.dukelearntoprogram.com/course1/example/index.php

var image = new SimpleImage("chapel.png");

for (var px of image.values()) {
    px.setRed(0);
}

print(image);
