function generateRandomNumber() {
    // Math.random() generates between 0 and 1
    // Multiply by 100, then add 1 to make it between 1 and 100
    let randomNum = Math.floor(Math.random() * 100) + 1;
    document.getElementById("output").innerHTML = `Random Number: ${randomNum}`;
}