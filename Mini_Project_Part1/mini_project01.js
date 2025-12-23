const imageInput = document.querySelector("#imageInput");
const redButton = document.querySelector("#redBtn");
const rainbowButton = document.querySelector("#rainbowBtn");
const blueButton = document.querySelector("#blueBtn");
const grayButton = document.querySelector("#grayBtn");
const invertButton = document.querySelector("#invertBtn");
const sepiaButton = document.querySelector("#sepiaBtn");
const spotlightButton = document.querySelector("#spotlightBtn");
const windowButton = document.querySelector("#windowBtn");
const waveButton = document.querySelector("#waveBtn");
const pixelateButton = document.querySelector("#pixelateBtn");
const resetButton = document.querySelector("#resetBtn");

const canvas = document.querySelector("#previewCanvas");
let originalImage = null;
let redImage = null;
let rainbowImage = null;
let blueImage = null;
let grayImage = null;
let invertImage = null;
let sepiaImage = null;
let spotlightImage = null;
let windowImage = null;
let waveImage = null;
let pixelateImage = null;

function loadImage() {
  originalImage = new SimpleImage(imageInput);
  redImage = new SimpleImage(imageInput);
  rainbowImage = new SimpleImage(imageInput);
  blueImage = new SimpleImage(imageInput);
  grayImage = new SimpleImage(imageInput);
  invertImage = new SimpleImage(imageInput);
  sepiaImage = new SimpleImage(imageInput);
  spotlightImage = new SimpleImage(imageInput);
  windowImage = new SimpleImage(imageInput);
  waveImage = new SimpleImage(imageInput);
  pixelateImage = new SimpleImage(imageInput);
  originalImage.drawTo(canvas);
}

function applyRedFilter() {
  if (!imageIsLoaded(redImage)) {
    return;
  }
  makeRed(redImage);
  redImage.drawTo(canvas);
}

function applyRainbowFilter() {
  if (!imageIsLoaded(rainbowImage)) {
    return;
  }
  makeRainbow(rainbowImage);
  rainbowImage.drawTo(canvas);
}

function applyBlueFilter() {
  if (!imageIsLoaded(blueImage)) {
    return;
  }
  makeBlue(blueImage);
  blueImage.drawTo(canvas);
}

function applyGrayscaleFilter() {
  if (!imageIsLoaded(grayImage)) {
    return;
  }
  makeGrayscale(grayImage);
  grayImage.drawTo(canvas);
}

function applyInvertFilter() {
  if (!imageIsLoaded(invertImage)) {
    return;
  }
  makeInvert(invertImage);
  invertImage.drawTo(canvas);
}

function applySepiaFilter() {
  if (!imageIsLoaded(sepiaImage)) {
    return;
  }
  makeSepia(sepiaImage);
  sepiaImage.drawTo(canvas);
}

function applySpotlightFilter() {
  if (!imageIsLoaded(spotlightImage)) {
    return;
  }
  makeSpotlight(spotlightImage);
  spotlightImage.drawTo(canvas);
}

function applyWindowFilter() {
  if (!imageIsLoaded(windowImage)) {
    return;
  }
  makeWindowPane(windowImage);
  windowImage.drawTo(canvas);
}

function applyWaveFilter() {
  if (!imageIsLoaded(waveImage)) {
    return;
  }
  makeWaveDistortion(waveImage);
  waveImage.drawTo(canvas);
}

function applyPixelateFilter() {
  if (!imageIsLoaded(pixelateImage)) {
    return;
  }
  makePixelate(pixelateImage);
  pixelateImage.drawTo(canvas);
}

function resetImage() {
  if (!imageIsLoaded(originalImage)) {
    return;
  }
  originalImage.drawTo(canvas);
  redImage = new SimpleImage(imageInput);
  rainbowImage = new SimpleImage(imageInput);
  blueImage = new SimpleImage(imageInput);
  grayImage = new SimpleImage(imageInput);
  invertImage = new SimpleImage(imageInput);
  sepiaImage = new SimpleImage(imageInput);
  spotlightImage = new SimpleImage(imageInput);
  windowImage = new SimpleImage(imageInput);
  waveImage = new SimpleImage(imageInput);
  pixelateImage = new SimpleImage(imageInput);
}

function imageIsLoaded(image) {
  if (image && image.complete()) {
    return true;
  }
  alert("Please upload an image first.");
  return false;
}

function makeRed(image) {
  for (let pixel of image.values()) {
    pixel.setRed(255);
  }
}

function makeBlue(image) {
  for (let pixel of image.values()) {
    pixel.setBlue(255);
  }
}

function makeGrayscale(image) {
  for (let pixel of image.values()) {
    const avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
}

function makeInvert(image) {
  for (let pixel of image.values()) {
    pixel.setRed(255 - pixel.getRed());
    pixel.setGreen(255 - pixel.getGreen());
    pixel.setBlue(255 - pixel.getBlue());
  }
}

function makeSepia(image) {
  for (let pixel of image.values()) {
    const red = pixel.getRed();
    const green = pixel.getGreen();
    const blue = pixel.getBlue();
    const sepiaRed = Math.min(255, 0.393 * red + 0.769 * green + 0.189 * blue);
    const sepiaGreen = Math.min(255, 0.349 * red + 0.686 * green + 0.168 * blue);
    const sepiaBlue = Math.min(255, 0.272 * red + 0.534 * green + 0.131 * blue);
    pixel.setRed(sepiaRed);
    pixel.setGreen(sepiaGreen);
    pixel.setBlue(sepiaBlue);
  }
}

function makeSpotlight(image) {
  const centerX = image.getWidth() / 2;
  const centerY = image.getHeight() / 2;
  const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
  for (let pixel of image.values()) {
    const dx = pixel.getX() - centerX;
    const dy = pixel.getY() - centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const dimFactor = Math.min(1, distance / maxDistance);
    const boost = 1.2 - 0.8 * dimFactor;
    pixel.setRed(clampColor(pixel.getRed() * boost));
    pixel.setGreen(clampColor(pixel.getGreen() * boost));
    pixel.setBlue(clampColor(pixel.getBlue() * boost));
  }
}

function clampColor(value) {
  return Math.max(0, Math.min(255, value));
}

function makeWindowPane(image) {
  const spacing = 40;
  const lineWidth = 5;
  for (let pixel of image.values()) {
    const x = pixel.getX();
    const y = pixel.getY();
    if (x % spacing < lineWidth || y % spacing < lineWidth) {
      pixel.setRed(40);
      pixel.setGreen(30);
      pixel.setBlue(20);
    }
  }
}

function makeWaveDistortion(image) {
  const source = originalImage;
  const amplitude = 18;
  const frequency = 2 * Math.PI / 64;
  const width = image.getWidth();
  for (let pixel of image.values()) {
    const x = pixel.getX();
    const y = pixel.getY();
    const offset = Math.round(Math.sin(y * frequency) * amplitude);
    const sourceX = clampIndex(x + offset, width - 1);
    const sourcePixel = source.getPixel(sourceX, y);
    pixel.setRed(sourcePixel.getRed());
    pixel.setGreen(sourcePixel.getGreen());
    pixel.setBlue(sourcePixel.getBlue());
  }
}

function makePixelate(image) {
  const source = originalImage;
  const blockSize = 14;
  const width = image.getWidth();
  const height = image.getHeight();
  for (let y = 0; y < height; y += blockSize) {
    for (let x = 0; x < width; x += blockSize) {
      const samplePixel = source.getPixel(x, y);
      for (let dy = 0; dy < blockSize && y + dy < height; dy += 1) {
        for (let dx = 0; dx < blockSize && x + dx < width; dx += 1) {
          const pixel = image.getPixel(x + dx, y + dy);
          pixel.setRed(samplePixel.getRed());
          pixel.setGreen(samplePixel.getGreen());
          pixel.setBlue(samplePixel.getBlue());
        }
      }
    }
  }
}

function clampIndex(value, max) {
  return Math.max(0, Math.min(max, value));
}

function makeRainbow(image) {
  const height = image.getHeight();
  for (let pixel of image.values()) {
    const y = pixel.getY();
    if (y < height / 7) {
      pixel.setRed(255);
      pixel.setGreen(0);
      pixel.setBlue(0);
    } else if (y < (2 * height) / 7) {
      pixel.setRed(255);
      pixel.setGreen(127);
      pixel.setBlue(0);
    } else if (y < (3 * height) / 7) {
      pixel.setRed(255);
      pixel.setGreen(255);
      pixel.setBlue(0);
    } else if (y < (4 * height) / 7) {
      pixel.setRed(0);
      pixel.setGreen(255);
      pixel.setBlue(0);
    } else if (y < (5 * height) / 7) {
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(255);
    } else if (y < (6 * height) / 7) {
      pixel.setRed(75);
      pixel.setGreen(0);
      pixel.setBlue(130);
    } else {
      pixel.setRed(148);
      pixel.setGreen(0);
      pixel.setBlue(211);
    }
  }
}

imageInput.addEventListener("change", loadImage);
redButton.addEventListener("click", applyRedFilter);
rainbowButton.addEventListener("click", applyRainbowFilter);
blueButton.addEventListener("click", applyBlueFilter);
grayButton.addEventListener("click", applyGrayscaleFilter);
invertButton.addEventListener("click", applyInvertFilter);
sepiaButton.addEventListener("click", applySepiaFilter);
spotlightButton.addEventListener("click", applySpotlightFilter);
windowButton.addEventListener("click", applyWindowFilter);
waveButton.addEventListener("click", applyWaveFilter);
pixelateButton.addEventListener("click", applyPixelateFilter);
resetButton.addEventListener("click", resetImage);
