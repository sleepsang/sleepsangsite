class SquareA {

  constructor(_x,_y,_width,_height,_fill) { //init params denoted by _
    this.x = _x;
    this.y = _y;
    this.width = _width;
    this.height = _height;
    this.fill = _fill;
  }

  show() {
    stroke(0);
    fill(this.fill);
    rect(this.x,this.y,this.width,this.height);
  }

  update() {
    let countMod = frameCount % 2;
      if (countMod == 0) {
        this.fill = (255,0,0,50);
      } else{
        this.fill = ([50,200,200,50]);
      }

  }

}

class SquareB {

  constructor(_x,_y,_width,_height,_fill) { //init params denoted by _
    this.x = _x;
    this.y = _y;
    this.width = _width;
    this.height = _height;
    this.fill = _fill;
  }

  show() {
    stroke(0);
    fill(this.fill);
    rect(this.x,this.y,this.width,this.height);
  }

  update() {
    let countMod = frameCount % 2;
      if (countMod == 1) {
        this.fill = (255,0,0,50);
      } else{
        this.fill = ([50,200,200,50]);
      }

      //console.log(countMod);

  }

}
