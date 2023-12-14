class Pelotita {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(5), 0);
    this.vel = rotate(random(TWO_PI));
    this.c = color(200, 150, 30);

    this.diam = int(random(10, 100));
  }
  update() {
    this.pos.add(this.vel);

    if (this.pos.x > width - 10) {
      this.vel.x *= -1;
    }
    if (this.pos.x < 0 + 10) {
      this.vel.x *= -1;
    }

    if (this.pos.y > height - 10) {
      this.vel.y *= -1;
    }
    if (this.pos.y < 0 + 10) {
      this.vel.y *= -1;
    }
  }

  display() {
    fill(this.c);
    circle(this.pos.x, this.pos.y, this.diam);
  }

  colorRandom() {
    this.c = color(random(20), random(255), random(255));
  }

  colision(_px) {
    this.distancia = p5.Vector.dist(this.pos, _px.pos);
    if (this.distancia < this.diam / 2 + _px.diam / 2) {
      this.colorRandom();
      this.vel.rotate(PI);
    }
  }
}
