var canvas;

function resizeWindow() {
  createCanvas(windowWidth, windowHeight);
}

function setup() {

 for (var i = 0; i < 4; i++) {
   wanderers[i] = new Wanderer();
 }

 for (var i = 0; i < 40; i++) {
   followers[i] = new Follower();
 }

}

function draw() {
   canvas = createCanvas(windowWidth, windowHeight);
   canvas.position(0,0);
   canvas.style('z-index','-1');
  for (var i = 0; i < wanderers.length; i++) {
    wanderers[i].wanshow();
    wanderers[i].wanmove();
}

for (var i = 0; i < followers.length; i++) {
    followers[i].folshow();
    followers[i].folmove();
}

if ( mouseY > height/2 ) {
  strokeWeight(0);
  fill(Math.floor(random(220,255)), Math.floor(random(100,185)), Math.floor(random(155,230)) );
  ellipse(Math.floor(random(0, width-100)),Math.floor(random(0, height-100)),8,8);
}

}




/*
- explore sound libraries or ways of interfacing between p5 and supcol/pd. each random gen dot to trigger note etc
- create constructor function for iteration - self-similar dots.
- initialise an array and create a new follower object with left and right offset to create V trail effect
- geometric patterned diagonal lines

*/
