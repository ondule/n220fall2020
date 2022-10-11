let count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

let myDiv = document.getElementById("myDiv");

for (let i = 0; i <26; i++) {
    count[i];
    if(count % 3 == 0)
        myDiv.innerHTML = "beep";
    if(count % 5 == 0)
        myDiv.innerHTML = "bop";
    if(count % 3 && 5 == 0)
        myDiv.innerHTML = "beep bop";
        
    
        
}
myDiv.innerHTML = count;



