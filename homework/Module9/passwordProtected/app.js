let message = document.getElementById("message")

function checkCreds() {
    let user = document.getElementById('user').value;
    let pass = document.getElementById('password').value;
    if (user == "Username" && pass == "Password") {
        message.innerHTML = "Success!"; 
    } else {
        message.innerHTML = "Wrong Information";  
    }
    
}



