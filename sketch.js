let inputImage;
const densityPattern =
  '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~i!lI;:,"^`". ';
function preload() {
  inputImage = loadImage("TestTrain.jpeg");
}

function setup() {
  createCanvas(2000, 2000);
}

function draw() {
  background(220);
  //image(inputImage, 0, 0, width, height);

  let w = width / inputImage.width;
  let h = height / inputImage.height;
  inputImage.loadPixels();

  /**
   * Reading Individual RGB Values
   */
  for (let i = 0; i < inputImage.width; i++) {
    for (let j = 0; j < inputImage.height; j++) {
      const pixelIndex = (i + j * inputImage.width) * 4;
      const r = inputImage.pixels[pixelIndex + 0];
      const g = inputImage.pixels[pixelIndex + 1];
      const b = inputImage.pixels[pixelIndex + 2];

      let avg = (r + g + b) / 3;

      noStroke();
      fill(avg);
      const len = densityPattern.length;
      const charIndex = floor(map(avg, 0, 255, 0, len));
      // square(i * w, j * h, w);
      text(densityPattern.charAt(charIndex), i * w, j * h);
    }
  }
}
