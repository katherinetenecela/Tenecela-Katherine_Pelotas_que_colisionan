function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  let x1 = mouseX;
  let y1 = mouseY;
  let radio1 = 40;

  let x2 = width / 2;
  let y2 = height / 2;
  let radio2 = 60;

  let distancia = dist(x1, y1, x2, y2);

  if (distancia < radio1 + radio2) {
    fill(255, 0, 0);
  } else {
    fill(0, 0, 255);
  }

  ellipse(x1, y1, 2 * radio1);
  ellipse(x2, y2, 2 * radio2);

  stroke(0);
  line(x1, y1, x2, y2);
}
