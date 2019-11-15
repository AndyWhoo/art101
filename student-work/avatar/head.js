class Hair {
  constructor(_xPos, _yPos, _rotation, _size) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.rotation = _rotation;
    this.size = _size;

  }


  display() {

    push();
    translate(this.xPos, this.yPos);
    rotate(this.rotation);
    scale(this.size);
    fill(235, 255, 56);

    triangle(140, 139, 30, 39, 11, 70);
    pop();
  }

  move() {

      if (this.yPos <= height * 1.02) {

        this.yPos += 2;

      } else if (this.yPos > height) {
        
        this.yPos = -height * .6;
      }
    
  }
}