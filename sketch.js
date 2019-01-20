var alpha = 0;
var beta = 0;
var gamma = 0;
var xpos, ypos;

function setup() 
{
  // set canvas size
  createCanvas(400, 400);
  
  // default values
  xpos = 200;
  ypos = 200;
}

function draw() 
{
  // set background color to white
  background(255);

  // display variables
  fill(100);
  noStroke();
  text("alpha: " + alpha, 25, 25);
  text("beta: " + beta, 25, 50);
  fill(255, 0, 0);
  text("gamma: " + gamma, 25, 75);
  
  /*push();
  translate(200, 200);
  //rotate(degrees(gamma));
  fill(255, 0, 0);
  rect(-40, -40, 80, 80);
  fill(0);
  rect(-40, 40, 80, 5);
  pop();*/	
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