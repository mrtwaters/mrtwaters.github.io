var img;
//var initials ='tw'; // your initials
//var choice = '1'; // starting choice, so it is not empty
//var screenbg = 250; // off white background
//var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
// img = loadImage('https://dma-git.github.io/images/74.png');
  img = loadImage('https://mrtwaters.github.io/astronaut.jpg');
  img4 = loadImage('https://mrtwaters.github.io/cluster.jpg');
  img5 = loadImage('https://mrtwaters.github.io/asteroids.png');
  img3 = loadImage('https://mrtwaters.github.io/sci-fi.png');
  img2 = loadImage('https://mrtwaters.github.io/sith_planet.png');
  img6 = loadImage('https://mrtwaters.github.io/marble_planet.png');
  img7 = loadImage('https://mrtwaters.github.io/jupiter.jpg');
  img8 = loadImage('https://mrtwaters.github.io/star.png');
  img9 = loadImage('https://mrtwaters.github.io/fallcon.jpg');
  img0 = loadImage('https://mrtwaters.github.io/destoryer.jpg');
  
}

function setup() {
createCanvas(500, 749);  // canvas size
//background(screenbg);   // use our background screen color
//}
//function setup() {
  // Here, we use a callback to display the image after loading
  loadImage('https://mrtwaters.github.io/moon.jpg', img => {
    image(img, 0, 0);
  });
}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   
   // stroke(01);
    //line(mouseX, mouseY, pmouseX, pmouseY);
  y = 60;
  d = 80;
  x = 0;
  easing = x<0.01;
  var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
    strokeWeight(weight);
    triangle(mouseX, mouseY, pmouseX, pmouseY);
    ellipse(mouseX, mouseY,(1, y, d, 3));
    
  } else if (toolChoice == '2') { // second tool

    //stroke(20);
    //image(img3, mouseX, mouseY);
    image(img4,mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '3') { // third tool

    //stroke(300, 100, 0, 80);
    image(img5,mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '4') {

    //stroke(0, 0, 255);
    image(img3,mouseX, mouseY, pmouseX, pmouseY);
  } else if (key == '5') { // this tool calls a function
   // stroke(0, 0, 255);
    //testbox(20, 20, 200);
    //testbox(200, 20, 20);
    image(img2,mouseX, mouseY, pmouseX, pmouseY);
    
    
    
    // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {

    //stroke(200);
    //line(mouseX, mouseY, pmouseX, pmouseY);
    image(img,mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '7') {

   // fill(100, 200, 100);
   // rect(mouseX, mouseY, 20, 20);
   image(img6,mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '8') {

   // fill(300, 100, 0, 80);
   // rect(mouseX, mouseY, 20, 20);
   image(img7,mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '9') {

    //fill(300, 100, 0, 80);
   // rect(mouseX, mouseY, 40, 40);
   image(img8,mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '0') {
   // stroke(0, 0);
    //fill(random(255), random(255), random(255), random(255));
    //rect(mouseX, mouseY, 200, 150);
    image(img9,mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img0,mouseX, mouseY, pmouseX, pmouseY);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
