const secretNumber = 75;

function checkGuess() {
    let guess = Number(document.getElementById("userInput").value);

    if (guess < secretNumber) {
        document.getElementById("output").innerHTML += `Guess ${guess}: Too Low!<br>`;
    } 
    else if (guess > secretNumber) {
        document.getElementById("output").innerHTML += `Guess ${guess}: Too High!<br>`;
    } 
    else {
        document.getElementById("output").innerHTML += `Guess ${guess}: Correct! 🎉<br>`;
        document.getElementById("userInput").disabled = true; // Stop further guesses
    }

    document.getElementById("userInput").value = ""; // Clear input after each guess
}