class Pelotita {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.random2D().mult(random(5));
    this.c = color(random(20), random(255), random(255)); // Inicializar color aquí

    this.diam = int(random(10, 100));
  }

  update() {
    this.pos.add(this.vel);

    if (this.pos.x > width - this.diam / 2 || this.pos.x < this.diam / 2) {
      this.vel.x *= -1;
    }

    if (this.pos.y > height - this.diam / 2 || this.pos.y < this.diam / 2) {
      this.vel.y *= -1;
    }
  }

  display() {
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.diam, this.diam);
  }

  colorRandom() {
    this.c = color(random(20), random(255), random(255));
  }

  colision(_px) {
    const distancia = this.pos.dist(_px.pos);
    if (distancia < this.diam / 2 + _px.diam / 2) {
      this.colorRandom();
      this.vel.rotate(PI);
    }
  }
}
