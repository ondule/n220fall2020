/* 
Jesús Andrade
N220 FALL 2022
*/

//Polar Points
function setup() {
    createCanvas(200, 200);
}

function polarPoint(r) {
    let x = r*Math.sin(mouseX); 
    let y = r*Math.cos(mouseX); 
    return createVector(x, y);
} 

function draw() {
//background(150);
translate(100, 100);
let res = polarPoint(50);
ellipse(res.x, res.y, 10);
}


//math.sin() returns value of the sin
//sin() calculates the sine value of an angle??

