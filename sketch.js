const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var Stone;
var Iron;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(10,10,30*30/2/2/2/1.75);
    Stone = new stone(300,10,30*30/2/2/2/1.75);
    Iron = new iron(900,10,30*30/2/2/2/1.75);


  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    Stone.display();
    Iron.display();
    //console.log(rubber.position);
 
}