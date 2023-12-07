class Pelotita 
constructor(){
    this.pos =createVector(random(width), random (heihgt));
    this.vel =createVector(random(10), 0);
    this.vel= rotate(random(tWO_PI));

}
update(){
    this.pos.add(this.vel)

}

display(){
    circle(this.pos.x, this.pos.y, 20);
}