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
  background(255);
  for (let i = 0; i < np; i++) {
    p[i].update();
    p[i].display();

    for (let iP = 0; iP < np; iP++) {
      if (i !== iP) {
        // Corregir condición de colisión
        p[i].colision(p[iP]);
      }
    }
  }
}
