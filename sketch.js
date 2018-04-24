/* minify for optimised loading https://www.minifier.org/ */

var canvas;
var playbutton;
var logoone;
var logotwo;
var logotwonoisy;

function resizeWindow() {
  createCanvas(windowWidth, windowHeight);
}

/* instead of these two functions and having to load in two images and then change
their transparency using CSS, we can use JS to alter the SVG to apply the same filter
used in our 2nd file.
http://svgtutorial.com/manipulating-svg-with-javascript/
http://web.archive.org/web/20140228202850/http://dev.opera.com/articles/view/advanced-svg-animation-techniques
https://medium.com/@aniboaz/animate-svg-4fa7dd00e860

https://svgontheweb.com/ - SVG practical guide
https://jakearchibald.github.io/svgomg/ - SVG optimiser
*/

function addVhsBlur() {
   let object = document.getElementById("logotwonormal");
   let svgDocument = object.contentDocument;
   let snazzup = svgDocument.getElementsByClassName("firstb");
   snazzup[0].setAttribute("fill", "yellow");
}

function transparentLogoTwoNormal() {
  logotwo.style('opacity', 0.01);
  logotwonoisy.style('opacity', 0.34);
  logoone.style('opacity', 0.24);
}

function opaqueLogoTwoNormal() {
  logotwo.style('opacity', 0.79);
  logotwonoisy.style('opacity', 0.01);
  logoone.style('opacity',0.73);
}


function setup() {
       for (var i = 0; i < 4; i++) {
         wanderers[i] = new Wanderer();
       }

       for (var i = 0; i < 40; i++) {
         followers[i] = new Follower();
       }
       //logos = selectAll('.logo');
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

      logoone = select('#logoone');
      logotwo = select('#logotwonormal');
      logotwonoisy = select('#logotwonoisy');
      logotwo.mouseOver(transparentLogoTwoNormal);
      logotwo.mouseOut(opaqueLogoTwoNormal);

      //playbutton.mouseOver(rotatePlaybutto);
      //playbutton.mouseOut(stoprotatePlaybutto);

}

/*
// maybe put this inside some script tags in the html and also sort out the syntax
function rotatePlaybutton() {
  this.rotate(PI / 3.0););
}
*/

/*
function stoprotatePlaybutton() {
  // ???stop rotation lol, empty function?

}
*/

/*
If any transformations are performed within draw()
(ex: scale, rotate, translate, their effects will
be undone at the beginning of draw(), so transformations
will not accumulate over time. On the other hand,
styling applied (ex: fill, stroke, etc) will remain in effect.
*/
