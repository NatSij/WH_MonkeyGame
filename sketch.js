
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0, ground
var survivalTime
var backImage

function preload(){
  
  
  monkey_running =        loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  backImage = loadImage("80s-vintage-retro-sunset-landscape_1390-788.jpg");
 
  FoodGroup= new Group();
  obstacleGroup= new Group();
  
}



function setup() {
  createCanvas(600, 400);
  
  monkey = createSprite(67,360,20,20);
  monkey.addAnimation("monkeyWalking",monkey_running);
  monkey.scale = 0.085;
  
   ground = createSprite(300,385,600,5);
   ground.velocityX = -7;
   ground.x = ground.width/2;
  ground.visible = false;
  
  }
function draw() {
  background(backImage);
  text("Scores: " + score, 500,50);
  
  monkey.collide(ground);
  
   if(ground.x < 300){
 ground.x = ground.width/2;
   }
     
  if(keyDown("space") && monkey.y >= 327){
  monkey.velocityY = -10;
  }
    
  monkey.velocityY += 0.8
     
   Food(); 
   Obstacles(); 
     
  if(FoodGroup.isTouching(monkey)){
    score = score+2
    FoodGroup.destroyEach();
  }
     
    if(obstacleGroup.isTouching(monkey)){
    monkey.scale = 0.085;
    score = 0;
    obstacleGroup.destroyEach();
  }
  
  switch(score){
         case 10:monkey.scale=0.12;
         break;
         case 20:monkey.scale=0.14;
         break;
         case 30:monkey.scale=0.16;
         break;
         case 40:monkey.scale=0.18;
         break;
         
         default:break;
         }
  
 
  

 drawSprites()
}

function Food() {
  if(frameCount % 100 === 0){
    var food = createSprite(600,250,20,20)
    food.addImage("foodMoving",bananaImage);
    food.scale = 0.1;
    food.velocityX = -6;
    food.y = random(300,250);
    food.lifetime = 100;
    FoodGroup.add(food);
  }
  
}


function Obstacles() {
  if(frameCount % 110 === 0){
    var obstacle = createSprite(600,360,20,20)
    obstacle.addImage("obstacleMoving",obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -6;
    obstacle.lifetime = 100;   
    obstacle.visible = true;
    obstacleGroup.add(obstacle);
  }
  
}

