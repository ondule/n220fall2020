/* Jesús Andrade
FALL2022 N220 */

//Even Larger, Until Not
let radius = 1; // initial circle size
let x = 400; // horizontal position of the circle
let y = 200; // vertical position of the circle
function setup() {
    createCanvas(800, 400) //size of the drawing canvas
}

function draw() {
background(150) //color of the background
fill(252, 3, 102); //color of the circle
noStroke(); //removes stroke of the circle
ellipse(x, y, radius); //draws circle according to global variables
radius += 1;
if (radius > 200) { //if statements reverts the radius to 1 once the circle reaches 200 px
    radius = 1;
}
} 



