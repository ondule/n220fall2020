//Assigning div to a variable
let numDisplay = document.getElementById("display"); 

//function to generate random number
function randomNum(max) {
    return Math.floor(Math.random() * max)
}

function genRanNum() {
    numDisplay.innerHTML = randomNum(10)
    
}