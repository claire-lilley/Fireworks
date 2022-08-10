// firework function passes in RGB values and sound array
function Firework(currentR, currentG, currentB, sounds){

  // this.sounds = sounds;
  this.currentR = currentR;
  this.currentG = currentG;
  this.currentB = currentB;
  this.firework = new Particle(random(width), height, this.currentR, this.currentG, this.currentB ,true);
  this.exploded = false;
  this.particles = [];
  this.sounds = sounds;


// function for end of firework
  this.done = function() {
    if (this.exploded && this.particles.length === 0){
    return true;
  } else {
    return false;
  }
}
// controls the firework going upwards
  this.update = function() {
if (!this.exploded) {
    this.firework.applyForce(gravity);
    this.firework.update();
        if (this.firework.vel.y >= 0) { //making it disapear wen it gets to the top
          this.exploded = true;
          this.explode();
    }
}
  for (var i = this.particles.length -1; i >= 0; i--){
      this.particles[i].applyForce(gravity);
      this.particles[i].update();
      if (this.particles[i].done()) {
        this.particles.splice(i, 1);
      }
  }
}
// explode function which creates exploding particles and creates random sounds
this.explode = function() {
  var audioTrack = int(random(0, 5));
  // this.sounds[audioTrack].play();
//   console.log(sounds[0]);
// this.sounds[0].play();
// console.log(sounds);
  this.sounds[audioTrack].play();
  for (var i = 0; i < 100; i++){
    var p = new Particle(this.firework.pos.x, this.firework.pos.y, this.currentR, this.currentG, this.currentB);
    this.particles.push(p);
  }
}

    this.show = function(){
      if (!this.exploded) {
        this.firework.show();
}
      for (var i = 0; i < this.particles.length; i++){
          this.particles[i].show();

    }
  }
}
