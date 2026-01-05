
//https://www.dukelearntoprogram.com/course1/example/index.php
// Part 2: Draw 200x200 square with quadrants: top-left red, top-right green,
// bottom-left magenta, bottom-right blue.
var img = new SimpleImage(200, 200);
for (var px of img.values()) {
  var x = px.getX();
  var y = px.getY();
  var w = img.getWidth();
  var h = img.getHeight();
  if (x < w / 2 && y < h / 2) {
    // top-left: red
    px.setRed(255); px.setGreen(0); px.setBlue(0);
  } else if (x >= w / 2 && y < h / 2) {
    // top-right: green
    px.setRed(0); px.setGreen(255); px.setBlue(0);
  } else if (x < w / 2 && y >= h / 2) {
    // bottom-left: magenta (red + blue)
    px.setRed(255); px.setGreen(0); px.setBlue(255);
  } else {
    // bottom-right: blue
    px.setRed(0); px.setGreen(0); px.setBlue(255);
  }
}
print(img);

// Part 3: setBlack and addBorder
function setBlack(pixel) {
  pixel.setRed(0);
  pixel.setGreen(0);
  pixel.setBlue(0);
  return pixel;
}

function addBorder(image, thickness) {
  var w = image.getWidth();
  var h = image.getHeight();
  for (var px of image.values()) {
    var x = px.getX();
    var y = px.getY();
    if (x < thickness || x >= w - thickness || y < thickness || y >= h - thickness) {
      setBlack(px);
    }
  }
  return image;
}

// Example: add 10-pixel border to an example image (change filename as needed)
var pic = new SimpleImage('chapel.png');
var withBorder = addBorder(pic, 10);
print(withBorder);


