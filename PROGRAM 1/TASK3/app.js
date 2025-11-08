function multiplyNumbers() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let product = n1 * n2;
    document.getElementById("output").innerHTML = `Multiplication: ${n1} * ${n2} = ${product}`;
}

function divideNumbers() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    if (n2 === 0) {
        document.getElementById("output").innerHTML = "Error: Division by zero is not allowed.";
    } else {
        let quotient = n1 / n2;
        document.getElementById("output").innerHTML = `Division: ${n1} ÷ ${n2} = ${quotient}`;
    }
}