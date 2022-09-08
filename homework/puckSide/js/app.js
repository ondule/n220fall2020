/*PUCK SIDE 
    Jesús Andrade
    FALL2022 N220
*/ 
function setup() {
    createCanvas(400, 300);
    fill(120, 20, 20);
}

//if else statement tells the program if horizontal coordinates of the mouse go over 200px or half of the canvas the mouse is red, blue if it's less than that
function draw() {
    background(180);
    if (mouseX < 200) { 
        fill(255, 0, 0);
    }  else {
        fill(0, 0, 255);
    }
    ellipse(mouseX, mouseY, 20, 20)
} 


