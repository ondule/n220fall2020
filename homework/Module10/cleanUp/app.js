//binding an empty string to variable to be used in function
let newStrng = ""; 

//function to remove hash
function removeHash(word) {
    if (word.includes("#")) {
        newStrng = word.replace('#', '');
    } 
}



function cleanWord() {
    //binding input value to strng variable
    let strng = document.getElementById('ogStrng').value 
    //invoking function with strng variable as parameter
    removeHash(strng)
    //getting div element and assigning its content to the newStrng variable
    document.getElementById('cleanStrng').innerHTML = newStrng 
}