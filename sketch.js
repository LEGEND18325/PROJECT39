const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1,stand2;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12,block13,block14;
var block15,block16,block17,block18,block19,block20,block21;
var block22,block23,block24,block25;
var polygonimg,polygon;
var  slingshot;
var bg;
var score=0;
var gameState="play";
function preload() {
    polygonimg=loadImage("polygon.png")
    bg=loadImage("bg.jpeg")
}


function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    stand1=new Stand(450,350,250,20)
    stand2=new Stand(820,250,200,20)
    block1=new Blocks(370,340,30,40)
    block2=new Blocks(395,340,30,40)
    block3=new Blocks(420,340,30,40)
    block4=new Blocks(445,340,30,40)
    block5=new Blocks(470,340,30,40)
    block6=new Blocks(495,340,30,40)
    block7=new Blocks(520,340,30,40)

    block8=new Blocks(395,330,30,40)
    block9=new Blocks(420,330,30,40)
    block10=new Blocks(445,330,30,40)
    block11=new Blocks(470,330,30,40)
    block12=new Blocks(495,330,30,40)

    block13=new Blocks(420,320,30,40)
    block14=new Blocks(445,320,30,40)
    block15=new Blocks(470,320,30,40)

    block16=new Blocks(445,310,30,40)


    block17=new Blocks(770,240,30,40)
    block18=new Blocks(795,240,30,40)
    block19=new Blocks(820,240,30,40)
    block20=new Blocks(845,240,30,40)
    block21=new Blocks(870,240,30,40)

    block22=new Blocks(795,230,30,40)
    block23=new Blocks(820,230,30,40)
    block24=new Blocks(845,230,30,40)

    block25=new Blocks(820,210,30,40)

    

   polygon = Bodies.circle(50,200,20);
   World.add(world,polygon)

  slingshot=new Slingshot(polygon,{x:100,y:200})
  
}


function draw(){
    background(bg);

    textSize(40)
    fill("red")
    text("score :"+score,width-200,50)
    Engine.update(engine);
   imageMode(CENTER)
   image(polygonimg,polygon.position.x,polygon.position.y,40,40);

    
  
    fill("red")
    stand1.display();
    stand2.display();
    block1.display();
    block1.score();
    block2.display();
    block2.score();
    block3.display();
    block3.score();
    block4.display();
    block4.score();
    block5.display();
    block5.score();
    block6.display();
    block6.score();
    block7.display();
    block7.score();
    fill("blue")
    block8.display();
    block8.score();
    block9.display();
    block9.score();
    block10.display();
    block10.score();
    block11.display();
    block11.score();
    block12.display();
    block12.score();
    fill("green")
    block13.display();
    block13.score();
    block14.display();
    block14.score();
    block15.display();
    block15.score();
    fill("brown")
    block16.display();
    block16.score();
    fill("pink")
    block17.display();
    block17.score();
    block18.display();
    block18.score();
    block19.display();
    block19.score();
    block20.display();
    block20.score();
    block21.display();
    block21.score();
    fill("purple")
    block22.display();
    block22.score();
    block23.display();
    block23.score();
    block24.display();
    block24.score();
    fill("yellow")
    block25.display();
    block25.score();

    if(score===500){
        gameState="end"
    }
    if(gameState==="end"){
        
        fill("red")
        textSize(80)
        text("GAME IS OVER",400,250)
    }
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    slingshot.attach(polygon)
}