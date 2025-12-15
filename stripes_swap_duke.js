//https://www.dukelearntoprogram.com/course1/example/index.php

// Part 1: vertical stripes (left third red, middle third green, right third blue)
function verticalStripes(image) {
  var w = image.getWidth();
  for (var px of image.values()) {
    var x = px.getX();
    if (x < w / 3) {
      px.setRed(255);
    } else if (x < 2 * w / 3) {
      px.setGreen(255);
    } else {
      px.setBlue(255);
    }
  }
  return image;
}

// Part 2: swap red and green of a single pixel
function swapRedGreen(pixel) {
  var r = pixel.getRed();
  var g = pixel.getGreen();
  pixel.setRed(g);
  pixel.setGreen(r);
}

function applySwapToImage(image) {
  for (var px of image.values()) {
    swapRedGreen(px);
  }
  return image;
}

// Part 3: turn strongly-blue pixels to yellow (red+green)
function blueToYellow(image) {
  for (var px of image.values()) {
    var r = px.getRed();
    var g = px.getGreen();
    var b = px.getBlue();
    // Identify blue pixels: blue significantly larger than red and green
    if (b > 120 && b > r + 30 && b > g + 30) {
      px.setRed(255);
      px.setGreen(255);
      px.setBlue(0);
    }
  }
  return image;
}

// --- Example usage ---
// Part 1 example (Drew's picture): change 'drew.png' to your image file
var img1 = new SimpleImage('dinos.png');
print(verticalStripes(img1));

// Part 2 example: choose an image with noticeable red/green differences
var img2 = new SimpleImage('chapel.png');
print(applySwapToImage(img2));

// Part 3 example: change 'duke.png' to the blue-devil image filename you have
var img3 = new SimpleImage('duke_blue_devil.png');
print(blueToYellow(img3));
