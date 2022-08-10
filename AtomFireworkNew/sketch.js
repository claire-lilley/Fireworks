////////////////////////////////////////////////////////

//Shiffman, D., 2016. Coding Challenge #27: Fireworks!. [online]
//Youtube.com. Available at: <https://www.youtube.com/watch?v=CKeyIbT3vXI>
//[Accessed 10 August 2022].

////////////////////////////////////////////////////////

// global variables to use throughout the code
var fireworks = [];
var gravity;
var currentR = 248;
var currentG = 247;
var currentB = 245;
var sounds = [];
var sound1;
var sound2;
var sound3;
var sound4;
var sound5;
var sound6;
// loading each sound passing them through an array
function preload() {
  sound1 = loadSound('sounds/1.mp3');
  sounds.push(sound1);
  sound2 = loadSound('sounds/2.mp3');
  sounds.push(sound2);
  sound3 = loadSound('sounds/3.mp3');
  sounds.push(sound3);
  sound4 = loadSound('sounds/4.mp3');
  sounds.push(sound4);
  sound5 = loadSound('sounds/5.mp3');
  sounds.push(sound5);
  sound6 = loadSound('sounds/6.mp3');
  sounds.push(sound6);
}

function setup() {
createCanvas(850,450);
colorMode(RGB);
//color(0, 0, 255);
gravity = createVector(0, 0.2);
//the inital firework
fireworks.push(new Firework(currentR, currentG, currentB, sounds));
stroke(255);
strokeWeight(4);
background(0);
}
// key presses for each colour
function keyPressed() {
  if (keyCode === 66) { //b button for blue
    currentR = 32;
    currentG = 81;
    currentB = 209;
  }
  if (keyCode === 71) { // g button for green
    currentR = 83;
    currentG = 210;
    currentB = 23;
  }
  if (keyCode === 82) { // r button for red
    currentR = 230;
    currentG = 27;
    currentB = 18;
  }
  if (keyCode === 89) { //y button for yellow
    currentR = 247;
    currentG = 203;
    currentB = 21;
  }
  if (keyCode === 80) { //p button for purple
    currentR = 148;
    currentG = 72;
    currentB = 188;
  }
  if (keyCode === 13) { //enter button to go back to white.
    currentR = 255;
    currentG = 255;
    currentB = 255;
  }
  if (keyCode === 79) { //o  button for orange
    currentR = 239;
    currentG = 123;
    currentB = 69;
  }

}

function draw(){
background(0, 25);
//color(0, 0, 255);
//colorMode(RGB)
// random time interval for making fireworks
if (random(1) < 0.03) {
  // var audioTrack = int(random(0, 5));
  // this.sounds[audioTrack].play();
  fireworks.push(new Firework(currentR, currentG, currentB, sounds));
}
//iterate through life of firework
for (var i = fireworks.length-1; i >= 0; i--){
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
}
}

// function keyPressed(){
//   if (keyCode === UP_ARROW){
//
//   this.blue (0, 0, 255)
// }
// else{
//     return false;
// }
//console.log(fireworks.length);
