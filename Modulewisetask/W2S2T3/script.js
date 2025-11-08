function runLoopTask() {
  const numbers = [1, 2, 3, 4, 5];
  let output = "";

  output += "📋 forEach Loop:\n";
  numbers.forEach(num => output += num + " ");
  output += "\n\n🧮 map() (Squares):\n";
  const squares = numbers.map(n => n * n);
  output += squares.join(", ") + "\n";

  output += "\n🔢 for-in Loop (Indexes):\n";
  for (let index in numbers) {
    output += index + " ";
  }

  output += "\n\n🔁 for-of Loop (Values):\n";
  for (let value of numbers) {
    output += value + " ";
  }

  document.getElementById("output").textContent = output;
  console.log(output);
}
