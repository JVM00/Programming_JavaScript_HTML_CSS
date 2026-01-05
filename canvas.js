function getCanvas() {
  return document.getElementById("artCanvas");
}

function makeBlue() {
  var canvas = getCanvas();
  var colorPicker = document.getElementById("canvasColor");
  canvas.style.backgroundColor = "#5da9ff";
  colorPicker.value = "#5da9ff";
}

function doColorChange() {
  var canvas = getCanvas();
  var colorPicker = document.getElementById("canvasColor");
  canvas.style.backgroundColor = colorPicker.value;
}

function doSquare() {
  var slider = document.getElementById("sizeSlider");
  var length = parseInt(slider.value, 10);
  var canvas = getCanvas();
  var ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#222";
  ctx.fillRect(30, 50, length, length);

  ctx.fillStyle = "#fff27b";
  var secondSize = Math.max(15, Math.round(length * 0.6));
  ctx.fillRect(50 + length, 50, secondSize, secondSize);

  ctx.fillStyle = "#111";
  ctx.font = "16px Arial";
  ctx.fillText(length + " px square", 30, 35);
}

doColorChange();
doSquare();
