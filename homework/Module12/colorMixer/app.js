//div displaying black by default
let blkDiv = document.getElementById("blkDiv");
//div with text displaying current color
let currentColor = document.getElementById("currentColor");
//red buttons
let rouge = document.getElementsByClassName("rouge");
//green buttons
let vert = document.getElementsByClassName("vert");
//blue buttons
let bleu = document.getElementsByClassName("bleu");

//assigning initial rgb values to a variable
let r = 0;
let g = 0;
let b = 0;
//setting initial rgb values using template literals
blkDiv.style.backgroundColor = `rgb(${r},${g},${b})`;
blkDiv.style.width = "500px";
blkDiv.style.height = "200px";

//for loop adding event listeners to all elements with corresponding class name
 for (let i = 0; i < rouge.length; i++) {
    rouge[i].addEventListener("click", changeRed);
    
} 
//event that changes rgb values to the custom attribute value when clicked
function changeRed(event) {    
    let addRed = Number(event.target.dataset.red);
    r += addRed; 
    blkDiv.style.backgroundColor = `rgb(${r},${g},${b})`;
    //gets the background color value and assigns it to the display div
    currentColor.innerHTML = blkDiv.style.getPropertyValue('background-color');
    
    
}

//the rest of the functions do the same but for the other two colors

for (let i = 0; i < vert.length; i++) {
    vert[i].addEventListener("click", changeGreen);
} 

function changeGreen(event) {    
    let addGreen = Number(event.target.dataset.green);
    g += addGreen; 
    blkDiv.style.backgroundColor = `rgb(${r},${g},${b})`;
    currentColor.innerHTML = blkDiv.style.getPropertyValue('background-color');
    
}

for (let i = 0; i < bleu.length; i++) {
    bleu[i].addEventListener("click", changeBlue);
} 

function changeBlue(event) {    
    let addBlue = Number(event.target.dataset.blue);
    b += addBlue; 
    blkDiv.style.backgroundColor = `rgb(${r},${g},${b})`;
    currentColor.innerHTML = blkDiv.style.getPropertyValue('background-color');
}   


