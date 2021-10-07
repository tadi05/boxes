var box1
var box2, box3
function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(100, 200, 50, 100, 3, 6)
  box2 = new Box(145, 200, 50, 100, 4, 7)
  box3 = new Box(160, 200, 50, 100, 2, 5)
}

function draw() 
{
  background(220);
  box1.show();
  box1.move();
  box1.bounce();
  box2.show();
  box2.move();
  box2.bounce();
  box3.show();
  box3.move();
  box3.bounce();
}

