const fs = require('fs');
const { PNG } = require('pngjs');

try {
  const buf = fs.readFileSync('chapel.png');
  const png = PNG.sync.read(buf);
  const data = png.data;
  for (let i = 0; i < data.length; i += 4) {
    data[i] = 0; // red channel
  }
  const out = PNG.sync.write(png);
  fs.writeFileSync('chapel-no-red.png', out);
  console.log('Saved chapel-no-red.png');
} catch (err) {
  console.error(err);
  process.exitCode = 1;
}
