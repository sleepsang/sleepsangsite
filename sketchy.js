//var img;  // Declare variable 'img'.

/*
function setup() {
  createCanvas(960, 540);
}
*/


/*
function draw() {
    if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
*/

/*
shifting gaussian blur to imitate the effect of a heat haze mirage from surfaces (grounds on hot days etc)

    - create a function which blurs only a vertical slice of the image (filter blur)
    - change vertical slice to zig zag
    - curve the line between points on the zig zag
    - animate the lines of the zig zag so it wobbles slightly
    - nest within horizontal movement through the image with wraparound

    * deviceMoved, deviceShaken? accelerationX, pAccelerationX?
*/
/*
// create web audio api context
var audioCtx = new (window.AudioContext)();

// create Oscillator node

var oscillator = audioCtx.createOscillator();

*/

//warning loud oscillator

/*
oscillator.type = 'square';
oscillator.frequency.value = 280; // value in hertz
oscillator.connect(audioCtx.destination);
oscillator.start();
*/

// create gain node

/*
var gainNode = audioCtx.createGain();
var source;
gainNode.gain(0.2);
source.connect(gainNode);
gainNode.connect(audioCtx.destination);
*/
