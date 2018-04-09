var wanderers = []; //initialise empty array to contain wanderers
var followers = []; // % % % to contain followers - note lower case convention for array vs caps for constructor

function Wanderer() { //constructor function for each wanderer

    this.x = 0; //set initial vector values. future: add way to change starting x and starting y for
    this.y = 0;
    //this.fill = fill(); //attempting to change colours of wanderer but fill changes globally

  this.wanmove = function() { //moving element of the wanderer

      if (this.x <= width && this.y <= height) {

      this.x += 1 + (random(-1.7,1.7)+(mouseX/250));
      this.y += 1 + (random(-1.7,1.7)+(mouseY/230));
        }

      else {
      this.x *= 0;
      this.y *= 0;
        }
  }

  this.wanshow = function() { //displaying element of the wanderer
    ellipse(this.x,this.y,10,10);
  }

}

// constructor for each 'wanderer' dot. requires changeable x and y offset from starting position, with same movement

function Follower() {

  this.x = (windowWidth-224); //set initial vector values - this time starting far enough behind to follow the wanderer(s)
  this.y = (windowHeight-224);

  this.folmove = function() {

    if (this.x <= width && this.y <= height) {

      this.x += 1 + (random(-1.7,1.7)+(mouseX/250));
      this.y += 1 + (random(-1.7,1.7)+(mouseY/230));
        }

      else {
      this.x *= 0;
      this.y *= 0;
        }


  }

  this.folshow = function() {
    ellipse(this.x,this.y,8,8); //smaller circles for follower
    this.fill = fill(130,140,220,78);
  }

}

// constructor for each 'follower' dot. starts a little bit after the wanderer and is smaller
