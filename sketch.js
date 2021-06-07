const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground
var division1,division2,division3,division4,division5,division6,division7
var plinko,plinkos1

var particles=[]
var plinkos=[]

function setup() {
  createCanvas( 480,800);

  engine = Engine.create();
  world = engine.world;


ground= new Ground(200,795,580,10)
division1= new Division(8,640,10,300)
division2=new Division(74,640,10,300)
 division3= new Division(146,640,10,300) 
 division4=new Division(224,640,10,300)
 division5=new Division(311,640,10,300)
 division6=new Division(389,640,10,300)
 division7=new Division(473,640,10,300)

  for(var i =40; i<=width;i=i+50){
    plinkos.push(new Plinko(i,75));
  }
  for(var i=15; i<=width-10; i=i+50)
  {
    plinkos1.push(new Plinko(i,175));
  }
 
  
}

 
 

function draw() {
  background( 0);  

  

  drawSprites();


ground.display()
division1.display()
division2.display()
division3.display()
division4.display()
division5.display()
division6.display()
division7.display()

plinkos.display() 
 


}

 