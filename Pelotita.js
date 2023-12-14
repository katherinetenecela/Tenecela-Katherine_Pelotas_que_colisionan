class Pelotita {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.random2D().mult(random(3));
    this.c = color(20, 150, 30);
    this.diam = int(random(10, 120));
    this.growing = true;
  }

  update() {
    this.pos.add(this.vel);

    if (this.pos.x > width - this.diam / 2 || this.pos.x < this.diam / 2) {
      this.vel.x *= -1;
    }

    if (this.pos.y > height - this.diam / 2 || this.pos.y < this.diam / 2) {
      this.vel.y *= -1;
    }

    // la pelota crezca y decrezca
    if (this.growing) {
      this.diam += 2;
    } else {
      this.diam -= 2;
    }

    //Cambia de dirección cuando alcanza cierto tamaño
    if (this.diam > 100 || this.diam < 10) {
      this.growing = !this.growing;
    }
  }

  display() {
    fill(this.c);
    noStroke();
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
