var canvas;
var element;

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


// maybe put this inside some script tags in the html and als sort out the syntax
function rotatePlaybutto() {
  element = select('#playbutto');
  this.rotate(PI / 3.0););
  //element.style(‘background-color’, ‘#FFFFFF’);
}

function element.mouseOver() {
  rotatePlaybutto();
}
