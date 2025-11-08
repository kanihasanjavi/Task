function runMathString() {
  let output = "🔢 Math Functions:\n";

  const randomNum = Math.random() * 10;
  const rounded = Math.round(randomNum);
  const floor = Math.floor(randomNum);
  const ceil = Math.ceil(randomNum);
  const minVal = Math.min(3, 7, 1, 9);
  const maxVal = Math.max(3, 7, 1, 9);

  output += `Random: ${randomNum.toFixed(2)} | Round: ${rounded} | Floor: ${floor} | Ceil: ${ceil}\n`;
  output += `Min: ${minVal}, Max: ${maxVal}\n\n`;

  let str = "JavaScript is Fun!";
  output += "🧵 String Functions:\n";
  output += `Uppercase: ${str.toUpperCase()}\n`;
  output += `Lowercase: ${str.toLowerCase()}\n`;
  output += `Substring (0–10): ${str.substring(0, 10)}\n`;
  output += `Includes 'Fun': ${str.includes("Fun")}\n`;
  output += `Replace 'Fun' → 'Awesome': ${str.replace("Fun", "Awesome")}\n`;

  document.getElementById("output").textContent = output;
  console.log(output);
}
