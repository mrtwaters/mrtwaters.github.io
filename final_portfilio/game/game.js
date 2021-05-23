var ballx=300;
var bally=300;
var ballSize=40;
var img;
var img2;
var score=0;
var gameState="L1";

function preload() {

 img = loadImage('https://mrtwaters.github.io/game/pacman.gif');
 img2 = loadImage('https://mrtwaters.github.io/game/ghost.gif');
} 
// preload() runs once, it may make you wait
  // you can link to an image on your github account

function setup() {

createCanvas (600,600);
textAlign(CENTER);
textSize(20);

} // end of setup


function draw() {

background (220);
if (gameState == "L1"){
levelOne();
}
if (gameState == "L2"){
levelTwo();
}
if (gameState == "L3"){
levelThree();
}

text(("Score:"+score),width/2,40);

} // end of draw

function levelOne() {

text ("level 1", width/2, height-20);

var distToBall=dist(ballx,bally,mouseX,mouseY);
if (distToBall<ballSize/2){
  ballx=random(width);
  bally=random(height);
score=score+1;
} //if distToBall

if (score>=5) {
gameState ="L2";
}
line(ballx,bally,mouseX,mouseY);

//ellipse(ballx,bally,ballSize,ballSize);
image(img2,ballx,bally,ballSize,ballSize);

} // end level one

function levelTwo() {
background(200,100,0);
text ("level 2", width/2, height-20);

var distToBall=dist(ballx,bally,mouseX,mouseY);
if (distToBall<ballSize/2){
  ballx=random(width);
  bally=random(height);
score=score+1;
} //if distToBall

if (score>=10) {
gameState="L3";
}
//line(ballx,bally,mouseX,mouseY);

ellipse(ballx,bally,ballSize,ballSize);

} // end level two 

function levelThree() {
background(0,100,200);
text ("level 3", width/2, height-20);

var distToBall=dist(ballx,bally,mouseX,mouseY);
if (distToBall<ballSize/2){
  ballx=random(width);
  bally=random(height);
score=score+1;
ballSize=ballSize-5;
} //if distToBall

if (score>=15) {
background(random(255));
}
//line(ballx,bally,mouseX,mouseY);

ellipse(ballx,bally,ballSize,ballSize);

} // end level three 
