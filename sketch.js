var beta, gamma;
var xpos, ypos;

var img;

function preventBehavior(e) {
  e.preventDefault(); 
} // stop drag behaviour on mobile

function setup() {
  // set canvas size
  createCanvas(windowWidth, windowHeight);
  
  // default values
  xpos = 200;
  ypos = 200;
  beta = 0;
  gamma = 0;
  
  //img = createImg('assets/hills.jpg').addClass('pics');
  img = document.getElementsByClassName('pics')[0];
}

function draw() {
  // set background color to white
  background(10);
  
  angleMode(DEGREES);
  rectMode(RADIUS);
  noStroke();
  // display variables
  
  var w = windowWidth * 2;
  var h = img.height;

  
  var b = constrain(beta, -20, 20);
  var b2 = map(b, -20, 20, 0, -w/2);
  
  var g = constrain(abs(gamma), 5, 50);
  var g2 = map(g, 5, 50, 0, -h/2);
  
  fill(250);
  img.style.left = b2 + "px"
  img.style.top = g2 + "px"
  img.style.width = w + "px"
  //rect(b2, g2, 40, 40);
  
  //img.position(b2, g2);
  //img.position(0, 0);
  //img.style('width', w + 'px');
  
  //img.style('width', w + 'px');
  
  
  
  fill(255, 0, 0);

  text("beta: " + beta, 25, 50);
  text("gamma: " + gamma, 25, 75);
  
}

// accelerometer Data
window.addEventListener('deviceorientation', function(e) {
  
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
  
});