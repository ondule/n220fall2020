/* let message = document.getElementById("message") //getting html element to display message
var answer = 7;  

function checkGuess() {
    let userGuess = document.getElementById('userGuess').value;
    if (userGuess == answer) {
        message.innerHTML = "CORRECT!";
        document.getElementById('userGuess').value = "";
    } else if (userGuess > answer){
        message.innerHTML = "Number is too high"; //displaying result to html element
        document.getElementById('userGuess').value = "";     
    } else {
        message.innerHTML = "Number is too low";
        document.getElementById('userGuess').value = "";
    }
        
} */

let message = document.getElementById("message") //getting div to display message
function getRandomInt(max) { //function generates a random whole number that is greater than 0 
    return Math.floor(Math.random() * max) + 1;
 }

 function getRandomInt2(max) { //function generates a random whole number that is greater than 0 
    return Math.floor(Math.random() * max) + 1;
 }

 let answer = getRandomInt(20); //assigning the random function to a variable and maxing it out to 20



function checkGuess() { //on click function 
    
    let userGuess = document.getElementById('userGuess').value; //getting the user's input
    // if statements are checking the users answer and display a message accordingly
        if (userGuess == answer) { 
            message.innerHTML = "CORRECT!";
            document.getElementById('userGuess').value = "";
        } else if (userGuess > answer){
            message.innerHTML = "Number is too high"; //displaying result to html element
            document.getElementById('userGuess').value = "";     
        } else {
            message.innerHTML = "Number is too low";
            document.getElementById('userGuess').value = "";
        } 
    console.log(answer);  //you can check the answer in the console  
}




