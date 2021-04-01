const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    Stone=new Stone(20,50);
    Rubber=new Rubber (30,150);
    Iron=new Iron(40,120);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

Plane.display();
Hammer.display();
Stone.display();
Rubber.display();
Iron.display();

    
 
}