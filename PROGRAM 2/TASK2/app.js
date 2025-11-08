const secretNumber = 45;

function checkGuess() {
    let userGuess = Number(document.getElementById("userInput").value);
    
    if (userGuess < secretNumber) {
        document.getElementById("result").innerHTML = "Too Low!";
        document.getElementById("result").style.color = "blue";
    } 
    else if (userGuess > secretNumber) {
        document.getElementById("result").innerHTML = "Too High!";
        document.getElementById("result").style.color = "red";
    } 
    else {
        document.getElementById("result").innerHTML = "Correct! 🎉";
        document.getElementById("result").style.color = "green";
    }
}