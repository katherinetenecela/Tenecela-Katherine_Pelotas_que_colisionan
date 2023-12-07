function setup() {
createCanvas(windowWidth, windowHeight);
p =new Pelotita();
}


function draw() {
  p.update();
  p.display()
  
}

























//let numPelotas = 20;
//let pelotas = [];

//function setup() {
  //createCanvas(windowWidth, windowHeight);

  //for (let i = 0; i < numPelotas; i++) {
  //  let pelota = {
   //   x: random(width),
    //  y: random(height),
     // radio: random(20, 50),
     // velocidadX: random(-2, 2), // velocidad en el eje X
     // velocidadY: random(-2, 2), // velocidad en el eje Y
    };
   // pelotas.push(pelota);
  }
}

//function draw() {
 // background(220);

//  for (let i = 0; i < numPelotas; i++) {
 //   let pelota = pelotas[i];

    // Mover la pelota
 //   pelota.x += pelota.velocidadX;
 //   pelota.y += pelota.velocidadY;

    // Rebote en los bordes
   // if (pelota.x < 0 || pelota.x > width) {
   //   pelota.velocidadX *= -1;
    }

   // if (pelota.y < 0 || pelota.y > height) {
    //  pelota.velocidadY *= -1;
    }

   // let distancia = dist(pelota.x, pelota.y, pelota.x, pelota.y);

  //  if (distancia < 20 - pelota.radio) {
    //  fill(255, 0, 0);
  //  } else {
     // fill(0, 0, 255);
    }

   // ellipse(pelota.x, pelota.y, 2 * pelota.radio);
  }

  // let x1 = mouseX;
  // let y1 = mouseY;
  // let radio1 = 40;

  // let x2 = width / 2;
  // let y2 = height / 2;
  // let radio2 = 60;

  //let distancia = dist(x1, y1, x2, y2);

  // if (distancia < radio1 + radio2) {
  //   fill(255, 0, 0);
  // } else {
  //   fill(0, 0, 255);
  //}

  // ellipse(x1, y1, 2 * radio1);
  // ellipse(x2, y2, 2 * radio2);

  //stroke(0);
  //line(x1, y1, x2, y2);
}
