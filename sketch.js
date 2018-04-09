function setup() {
 createCanvas(600,600);
 stroke(10);
 //fill(255,255,255);
 //frameRate(60);
 for (var i = 0; i < 4; i++) { //make new wanderer a set number of times. !offset - add way to change starting x and starting y
   wanderers[i] = new Wanderer();
 }

 for (var i = 0; i < 400; i++) { //make new follower a set number of times. !offset - add way to change starting x and starting y... eventually to link each follower to it's wanderer?
   followers[i] = new Follower();
 }

}

function draw() {
  background(0);

  for (var i = 0; i < wanderers.length; i++) {
    wanderers[i].wanshow();
    wanderers[i].wanmove();
}

for (var i = 0; i < followers.length; i++) {
    followers[i].folshow();
    followers[i].folmove();
}

}

/*
  if ( mouseX > width/2 ) {
    ellipse(Math.floor(random(0, width)),Math.floor(random(0, height)),10,11);
  }
  */ //random dots when mouse is on right side of canvas

/*
- explore sound libraries or ways of interfacing between p5 and supcol/pd. each random gen dot to trigger note etc
- create constructor function for iteration - self-similar dots.
- initialise an array and create a new follower object with left and right offset to create V trail effect
- geometric patterned diagonal lines

*/
