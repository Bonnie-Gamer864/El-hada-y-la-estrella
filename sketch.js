const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var starImg, bgImg, hadaImg;
var star, starBody;
var hada, hadaBody;
var sonido;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	hadaImg = loadAnimation ("fairyImage1.png", "fairyImage2.png");

	sonido = loadSound ("JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	sonido.play();

	hada = createSprite (90, 515);
	hada.addAnimation ("movimiento", hadaImg);
	hada.scale = 0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	var star_options = {
		isStatic: true,
		restitution:0.5
	}

	starBody = Bodies.circle(650 , 30 , 5 , star_options);
	World.add(world, starBody);

	hadaBody = Bodies.rectangle (660, 400, 200);
	World.add(world, hadaBody);

	Engine.run(engine);

}

function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  if (star.y > 470 && starBody.position.y > 470){
	Matter.Body.setStatic(starBody, true);
  }

  drawSprites();
}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody, false); 
	}
	
	if (keyCode === LEFT_ARROW){
		hada.x = hada.x - 6;
	}
	
	if (keyCode === RIGHT_ARROW){
		hada.x = hada.x + 6;
	}
}
