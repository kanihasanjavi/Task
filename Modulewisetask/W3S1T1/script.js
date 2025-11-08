function runAdvancedArray() {
  let output = "";

  const numbers = [5, 12, 8, 130, 44];
  output += "Original Array: " + numbers + "\n\n";

  // filter()
  const filtered = numbers.filter(num => num > 10);
  output += "filter() - numbers > 10: " + filtered + "\n";

  // reduce()
  const sum = numbers.reduce((acc, val) => acc + val, 0);
  output += "reduce() - Sum: " + sum + "\n";
  const product = numbers.reduce((acc, val) => acc * val, 1);
  output += "reduce() - Product: " + product + "\n\n";

  // slice()
  const sliced = numbers.slice(1, 4);
  output += "slice(1,4): " + sliced + "\n";
  output += "After slice(), original array: " + numbers + "\n\n";

  // splice()
  const spliced = numbers.splice(2, 1, 99);
  output += "splice(2,1,99) → Removed: " + spliced + "\n";
  output += "After splice(): " + numbers + "\n\n";

  // spread operator
  const clone = [...numbers];
  const merged = [...numbers, ...filtered];
  output += "Cloned array (spread): " + clone + "\n";
  output += "Merged arrays (spread): " + merged + "\n";

  document.getElementById("output").textContent = output;
  console.log(output);
}
