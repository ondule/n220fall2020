//Assigning div to a variable
let feedback = document.getElementById("feedBack"); 
//Function checking to see if number is divisible by 7
function divisible(num) {
  //if statements change inner html depending on the user input   
    if ((num % 7) == 0) {
        document.getElementById("feedBack").innerHTML = "True";
        
    } else {
        document.getElementById("feedBack").innerHTML = "False";
    }
}
//function getting the value from the user input
function divsb() {
    let userInput = document.getElementById("myInput").value
    divisible(userInput) //divisible function with the userInput as the parameter
    
}