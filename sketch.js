let p = [];
let np = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < np; i++) {
    let newP = new Pelotita();
    p.push(newP);
  }
}

function draw() {
  background(0, 25, 0);
  for (let i = 0; i < np; i++) {
    p[i].update();
    p[i].display();

    for (let iP = 0; iP < np; iP++) {
      if (i !== iP) {
        p[i].colision(p[iP]);
      }
    }
  }
}
