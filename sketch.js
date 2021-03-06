const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var engine,world;
var block1;
var ground1;

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
    //level one
	block1=new Block(300,275,30,40);
	block2=new Block(330,275,30,40);
	block3=new Block(360,275,30,40);
	block4=new Block(390,275,30,40);
	block5=new Block(420,275,30,40);
	block6=new Block(450,275,30,40);
	block7=new Block(420,275,30,40);
    //level two
	block8=new Block(330,235,30,40);
	block9=new Block(360,235,30,40);
	block10=new Block(390,235,30,40);
	block11=new Block(420,235,30,40);
	block12=new Block(450,235,30,40);
    //level three
	block13=new Block(360,195,30,40);
	block14=new Block(390,195,30,40);
	block15=new Block(420,195,30,40);
    //top
	block16=new Block(390,155,30,40);
	//ground
    ground1=new Ground(390,300,300,10);
	ground2=new Ground(650,550,1400,10);
	Engine.run(engine);

}

function draw() {

  background(230);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  ground1.display();
  ground2.display();

  text("Drag The Hexagon Stone And Release It,To Launch It Towards The Blocks",650,50)
  textSize(24);
  
}