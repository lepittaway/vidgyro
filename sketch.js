var alpha, beta, gamma;
var xpos, ypos;

var heya;

function setup() 
{
  // set canvas size
  createCanvas(windowWidth, windowHeight);
  
  // default values
  xpos = 200;
  ypos = 200;
}

function draw() {
  // set background color to white
  background(10);
  
  
  var alpha = 0;
var beta = 0;
var gamma = 0;
  
  //heya = document.getElementsByClassName("hills"); 

  // display variables
  fill(100);
  noStroke();
  text("alpha: " + alpha, 25, 25);
  text("gamma: " + gamma, 25, 50);
  
  var a = constrain(alpha, 70, 120);
  var a2 = map(a, 70, 120, 40, windowWidth - 40);
  
  var g = constrain(gamma, -89, -1);
  var g2 = map(g, -89, -1, windowHeight - 40, 40);
  
  push();
  angleMode(DEGREES);
  rectMode(RADIUS);
  //translate(200, 200);
  //rotate(a2);
  fill(250);
  rect(a2, g2, 40, 40);
  fill(0);
  //rect(-40, 40, 80, 5);
  pop();	
}

// accelerometer Data

var gn = new GyroNorm();

gn.init().then(function() {
	supported = true;
	gn.start(function(event) {
		alpha = event.do.alpha;
		beta = event.do.beta;
		gamma = event.do.gamma;
	});
}).catch(function(e) {
  // Catch if the DeviceOrientation or DeviceMotion is not supported by the browser or device
	// Do stuff here when device does not have a gyro
});