var m = []
function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  frameRate(24)
  for (i = 0; i < 1000; i++){
	var marching = {
	x: random(width),

  }
  m.push(marching)
	}
}


function draw() {
  background(255);
  
  for (var i = 100; i <width; i++) {
    stroke(random(255))
    line(m[i].x, height / 2, m[i].x + 100, height / 2 - 75);
  }
}
