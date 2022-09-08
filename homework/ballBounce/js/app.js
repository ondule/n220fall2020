/* Jesús Andrade
FALL2022 N220 */

//Ball Bounce
var radius = 100; //Ball size
var x = 220; //horizontal starting point
var y = 80; //vertical starting point
var speed = 5; //amound of pixels ball is traveling at per frame
var yDirection = 1; //direction only affecting y axis
var xDirection = 1; //direction only affecting x axis

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(255, 1, 100);
    noStroke();
    y += speed * yDirection; //makes vertical position move at the set speed and direction
    x += speed * xDirection; //makes hortizontal position move at the set speed and direction
    if ((y > height)  || (y < 0) ) { //tells program to move in the opposite direction if y axis of ball is greater than the bottom of the canvas or the top
        yDirection = -yDirection;
    }
    if 
        ((x > width) || (x < 0)) { //tells program to move in the opposite direction if x axis of ball is greater than the right of the canvas or the left side
        xDirection = -xDirection;
    }  
        ellipse(x, y, radius); // creates a ball
} 
 

