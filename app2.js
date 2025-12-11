// Load the image using SimpleImage
var image = new SimpleImage("chapel.png");  // file in same folder

// Draw the image onto the canvas
window.onload = function () {
  var canvas = document.getElementById("can1");
  image.drawTo(canvas);
};