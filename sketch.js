function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  circle(mouseX, mouseY, 20);
}
let x1 = mouseX;
let y1 = mouseY;
let radio1 = 40;

let x2 = width / 2;
let y2 = height / 2;
let radio2 = 60;

let distancia = dist(x1, y1, x2, y2);

ellipse(x1, y1, 2 * radio1);
ellipse(x2, y2, 2 * radio2);

stroke(0);
line(x1, y1, x2, y2);
