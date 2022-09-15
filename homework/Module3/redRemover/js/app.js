/* 
Jesús Andrade
N220 FALL 2022
*/

//Red Remover



function setup() {
    createCanvas(800, 400);
    
}

 function removeRed(r,g,b) { //function to remove red
    let noRed = color(250, 150, 60); //pick any color
    noRed.setRed(0); //removes red
    fill(noRed); //fills shape with any color without the red
    
}


function draw() {
    removeRed(); //calling the no red function fills shape with color without red value
    rect(20, 20, 60, 60);
} 

