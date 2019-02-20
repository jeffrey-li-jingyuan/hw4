function setup() {
  createCanvas(400, 400);
  colorMode(HSB, width, height, 100);
}

function draw() {
  //x and y increasing together
	for (var x = 0; x < width; x += 100){
  		for (var y = 0; y < height; y += 100){
      stroke(x, y, 100);
  		point(random(x), random(y));
    }
  }
}
