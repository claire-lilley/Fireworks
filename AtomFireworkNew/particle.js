// Particle function passes in x,y coordinates, RGB values and boolean for if its a firework or an explosion
function Particle(x, y, currentR, currentG, currentB, firework) {
  this.pos = createVector(x, y);
  this.firework = firework;
  this.lifespan = 255;
  // this.blue = color (0, 0, 255)
  // this.hu = hu;

// creates either a single or multiple point fore firework or an explosion
  if (this.firework) {
  this.vel = createVector(0, random(-12, -8));
} else {
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(2, 10));
}
  this.acc = createVector(0, 0);

  this.applyForce = function(force) {
    this.acc.add(force);
  }
// moves particle
  this.update = function() {
    if (!this.firework){
      this.vel.mult(0.9);
      this.lifespan -= 4;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

  }
// removes particle
  this.done = function (){
    if (this.lifespan < 0){
      return true;
    } else {
      return false;
    }
  }
// sets the colour and initial point
  this.show = function(){

    if (!this.firework){
      strokeWeight(2);
      stroke(currentR, currentG, currentB, this.lifespan);
    } else {
      strokeWeight(4);
      stroke(currentR, currentG, currentB);
  }
    point(this.pos.x, this.pos.y);
  }

}
