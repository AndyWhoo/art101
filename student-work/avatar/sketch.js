let mic;
let hair1;
let hair2;

function setup() {
  createCanvas(400, 400);  
  
  hair1 = new Hair (50, 139, 30, 2);
  hair2 = new Hair (300, 40, 30, 1);
  
  angleMode(DEGREES);
  mic = new p5.AudioIn()
  mic.start();
  r = random(255);
  g = random(255);
  b = random(255);


}

function draw() {

  micLevel = mic.getLevel(.97);

  background(400, 200, 100);
  
  hair1.display();
  hair2.display();
  
  hair1.move();
  hair2.move();

  drawLegs();
  drawHead();
  drawWingsFeet();
//colorChange();
}


function drawLegs() {
  
  
  //legs
  stroke(30);
  strokeWeight(6);
  fill(30, 240, 89);
  rect(180, 250, 15, 135);
  rect(228, 240, 15, 135);

}

function drawHead() {
  //head
  push();
  translate(0, -micLevel * 255);

  stroke(30);
  strokeWeight(6);
  ellipse(200, 230, 200);
  fill(235, 255, 56);

  //hair
  triangle(140, 139, 30, 39, 11, 70);
  triangle(100, 22, 80, 30, 150, 149);
  //eyes
  circle(200, 200, 40, 40);
  circle(265, 170, 20, 20);
  //beaks
  triangle(240, 250, 246, 185, 380, 200);

  triangle(246, 258, 358, 290, 290, 300);

  pop();

}

function drawWingsFeet() {

  fill(235, 255, 56);

  //wing
  rect(70, 220, 130, 110, 400, 90, 350, 0);
  //feet
  rect(226, 360, 60, 20, 10, 10, 0, 30);
  rect(177, 370, 60, 20, 10, 10, 0, 30);

}

function colorChange(){
push();
if (mouseX < 100) {
    background(400, 200, 100);
  } else if (mouseX >= 100 && mouseX < 300) {
    background(r, b);
  } else if (mouseX >= 300) {
    background(r, b, g);
  }
  push();
}
