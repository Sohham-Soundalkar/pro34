const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var canvasmouse, mConstraint, Mouse;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;

function setup() {
  canvas = createCanvas(windowWidth/2, windowHeight/1.5);
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  }
  sling1 = new Sling(pendulum1.body, {x:100, y: 100});
  pendulum1 = new Pendulum(300,500,"black");
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(pendulum1.body, {x: mouseX, y:mouseY});
}