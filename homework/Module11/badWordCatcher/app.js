//Getting input element
let userInput = document.getElementById("userInput")
//Getting Div to display results
let sumDisp = document.getElementById("sum")
let foundDisp = document.getElementById("found")

//list of bad words to find
let clear = "clear";
let water = "water";
let tires = "tires"


//on click function
function catchWords() {
    //getting the value from input
    let userWords = userInput.value;

    //creating array from input value sans spaces 
    let splitWords = userWords.split(" ")

    //sets var to zero to add badword instances in loop
    let badWordsum = 0;
    //set var to false and switches to true if instance is found in loop
    let badWordsFound = "false";

    //loops through array and adds 1 for every instance of the word found
    //uppercase makes sure word is found regardless of case style
    for (let i = 0; i < splitWords.length; i++) {
        if (splitWords[i].toUpperCase() == clear.toUpperCase() || splitWords[i].toUpperCase() == water.toUpperCase() || splitWords[i].toUpperCase() == tires.toUpperCase())  {
            badWordsum += 1;
            badWordsFound = "true";
        }  
    }

    foundDisp.innerHTML = "Bad words were found: " + badWordsFound;
    sumDisp.innerHTML = "Total instances: " + badWordsum;
    userInput.value = "";
}