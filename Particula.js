class Particula {
  constructor() {
    this.tamaño = random(10, 50);
    this.estaMuerta = false;
    this.tiempodeVida = Math.ceil(random(10, 30));

    //tiempo de vida de 10 frames por segundo

    this.pos = createVector(width / 2, height / 2);

    this.vel = createVector(0, random(3, 5));
    this.vel.rotate(random(360));

    this.g = createVector(0, 0.1);
  }

  //los objetos de forma interna tienen métodos
  //Método = método update
  actualizar() {
    this.vel.add(this.g);
    this.pos.add(this.vel);

    this.tiempodeVida -= 1;

    if (this.tiempodeVida <= 0) {
      this.estaMuerta = true;
    }
  }

  //Método = método display
  mostrar() {
    //background(0);
    //colorstoke(255);
    Stroke(20);
    fill(0, 200, 20);
    circle(this.pos.x, this.pos.y, this.tamaño);
  }
}
