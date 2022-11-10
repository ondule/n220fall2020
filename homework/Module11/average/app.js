//Getting input element
let userInput = document.getElementById("userInput")
//Getting Div to display sum/avrg
let avrgDisp = document.getElementById("average")
let sumDisp = document.getElementById("sum")


//on click function
function separateNums() {

    let userNums = userInput.value;
    //creating array from input value sans coma 
    let splitNums = userNums.split(",")
    //sets var number in prep to adding array together
    let sum = 0;

    let avrg = 0;

    for (let i = 0; i < splitNums.length; i++) {
        //converts string array into number
        sum += Number(splitNums[i]);
        avrg = sum/splitNums.length    
    }

    avrgDisp.innerHTML = avrg;
    sumDisp.innerHTML = sum;
}