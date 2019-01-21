var beta, gamma;
var xpos, ypos;

var img;

function setup() 
{
  // set canvas size
  createCanvas(windowWidth, windowHeight);
  
  // default values
  xpos = 200;
  ypos = 200;
  beta = 0;
  gamma = 0;
  
  img = createImg('assets/hills.jpg').addClass('pics');
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
  var b2 = map(b, -20, 20, -w/2, 0);
  
  var g = constrain(gamma, -70, -20);
  var g2 = map(g, -70, -20, -h/2, 0);
  
  fill(250);
  //rect(b2, g2, 40, 40);
  
  img.position(b2, g2);
  //img.position(0, 0);
  img.style('width', w + 'px');
  
  
  
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