function getInput() {
    let bill = Number(document.getElementById('myInput').value);
    let tipPerc = 20;
    let tip = (tipPerc / 100) * bill;
    let total = tip + bill;
    console.log("Tip: $" + tip + " Total: $" + total);
    document.getElementById("dispTip").innerHTML = "Tip: $" + tip + " Total: $" + total;
}



