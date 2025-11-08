function runArrayTask() {
  let output = "";

  const numbers = [10, 20, 30, 40, 50];
  const fruits = ["apple", "banana", "cherry"];

  output += `Numbers: ${numbers}\nFruits: ${fruits}\n\n`;
  output += `First Number: ${numbers[0]}\n`;

  numbers[2] = 99;
  output += `After modification: ${numbers}\n\n`;

  output += `Fruit count: ${fruits.length}\n`;

  fruits.push("orange");
  output += `After push: ${fruits}\n`;

  fruits.pop();
  output += `After pop: ${fruits}\n`;

  fruits.shift();
  output += `After shift: ${fruits}\n`;

  fruits.unshift("kiwi");
  output += `After unshift: ${fruits}\n`;

  document.getElementById("output").textContent = output;
  console.log(output);
}
