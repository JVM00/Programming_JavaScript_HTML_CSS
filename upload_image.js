var originalImage = null;
var grayImage = null;

function upload() {
  var input = document.getElementById("imageInput");
  if (!input || !input.files || input.files.length === 0) {
    return;
  }

  originalImage = new SimpleImage(input);
  grayImage = new SimpleImage(input);

  var canvas = document.getElementById("originalCanvas");
  canvas.width = originalImage.getWidth();
  canvas.height = originalImage.getHeight();
  originalImage.drawTo(canvas);
}

function makeGray() {
  if (!grayImage) {
    return;
  }

  for (var pixel of grayImage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }

  var canvas = document.getElementById("grayCanvas");
  canvas.width = grayImage.getWidth();
  canvas.height = grayImage.getHeight();
  grayImage.drawTo(canvas);
}
