
const Engine = Matter.Engine;
//Engine se utiliza para crear el motor físico
const World = Matter.World;
//World se utiliza para crear el mundo físico y agregarle objetos
const Bodies = Matter.Bodies;
//Bodies se utiliza para crear los objetos físicos que habitan el mundo
const Body = Matter.Body;
//Un cuerpo - diseño 

let engine;
let world;
//declrar variables

var pelota;
var piso;
var wedge;
var angle = 20

function setup()
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  var ball_options = {
    frictionAir: 0.5,
    restitution: 1.5,
  }

  pelota = Bodies.circle(200,0,10, ball_options);
  World.add (world,pelota);

  
  var piso_options = {
    isStatic: true
  }

  piso = Bodies.rectangle(0,350,400,50, piso_options);
  World.add (world,piso);
  
  wedge = Bodies.rectangle(200,200,100,20, piso_options);
  World.add (world,wedge);
  
  rectMode(CENTER);


}

function draw() 
{
  background(51);
  Engine.update(engine);
  
  Matter.Body.rotate(wedge, angle);
  push();
  translate(wedge.position.x, wedge.position.y);
  rotate(angle);
  rect(20,200,100,20);
  pop();

  angle += 0.02;

  ellipse (pelota.position.x, pelota.position.y,10)
  rect (piso.position.x, piso.position.y, 400,50)
  
}

