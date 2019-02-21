function setup() {
  createCanvas(1920, 1080);
  angleMode(DEGREES);
  colorMode(HSB, width, height, 120);

}

var x = []; // new empty array
var y = []; // new empty array

function draw() {
  background(255);
  // noFill();

  x.push(mouseX); // equivalent to append(x, mouseX)
  y.push(mouseY); // equivalent to append(y, mouseY)

  for (var i = 0; i < x.length; i = i + 5) {
    fill(x[i], y[i], 100)
    rotate(x[i]);
    // translate(x[i]+50, y[i]+50)
    push();
    triangle(x[i], y[i], x[i] - 25, y[i] + 75, x[i] + 25, y[i] + 75);
    pop();
    fill(y[i], x[i], 120)
    ellipse(x[i], y[i], 1 + (x.length - i), 1 + (x.length - i));
  }
  x = x.slice(-50); // keep the last 50 x values
  y = y.slice(-50); // keep the last 50 y values
}
