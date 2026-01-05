var fgImage = null;
var bgImage = null;
var fgCanvas = null;
var bgCanvas = null;

function loadForegroundImage() {
  fgCanvas = document.getElementById("fgCanvas");
  var input = document.getElementById("fgInput");
  if (!input || !input.files || input.files.length === 0) {
    return;
  }

  fgImage = new SimpleImage(input);
  fgCanvas.width = fgImage.getWidth();
  fgCanvas.height = fgImage.getHeight();
  fgImage.drawTo(fgCanvas);
  alert("Foreground image loaded");
}

function loadBackgroundImage() {
  bgCanvas = document.getElementById("bgCanvas");
  var input = document.getElementById("bgInput");
  if (!input || !input.files || input.files.length === 0) {
    return;
  }

  bgImage = new SimpleImage(input);
  bgCanvas.width = bgImage.getWidth();
  bgCanvas.height = bgImage.getHeight();
  bgImage.drawTo(bgCanvas);
  alert("Background image loaded");
}

function clearCanvas() {
  if (fgCanvas) {
    fgCanvas.getContext("2d").clearRect(0, 0, fgCanvas.width, fgCanvas.height);
  }
  if (bgCanvas) {
    bgCanvas.getContext("2d").clearRect(0, 0, bgCanvas.width, bgCanvas.height);
  }
  alert("Canvases cleared");
}

function doGreenScreen() {
  if (!fgImage || !fgImage.complete()) {
    alert("Foreground image not loaded");
    return;
  }
  if (!bgImage || !bgImage.complete()) {
    alert("Background image not loaded");
    return;
  }

  fgCanvas = document.getElementById("fgCanvas");
  bgCanvas = document.getElementById("bgCanvas");
  fgCanvas.getContext("2d").clearRect(0, 0, fgCanvas.width, fgCanvas.height);
  bgCanvas.getContext("2d").clearRect(0, 0, bgCanvas.width, bgCanvas.height);

  var output = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());
  var greenThreshold = 240;

  for (var pixel of fgImage.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    if (pixel.getGreen() > greenThreshold) {
      if (x < bgImage.getWidth() && y < bgImage.getHeight()) {
        output.setPixel(x, y, bgImage.getPixel(x, y));
      } else {
        output.setPixel(x, y, pixel);
      }
    } else {
      output.setPixel(x, y, pixel);
    }
  }

  bgCanvas.width = output.getWidth();
  bgCanvas.height = output.getHeight();
  output.drawTo(bgCanvas);
  alert("Composite created");
}
