function runDestructuring() {
  let output = "";

  // Basic destructuring
  const student = { name: "Kaniha", age: 22, course: "IT" };
  const { name, age, course } = student;
  output += `Name: ${name}, Age: ${age}, Course: ${course}\n\n`;

  // Destructuring with default value
  const { grade = "Not Assigned" } = student;
  output += `Grade (default): ${grade}\n\n`;

  // Nested object destructuring
  const employee = {
    id: 101,
    info: { dept: "HR", location: "Chennai" }
  };
  const { info: { dept, location } } = employee;
  output += `Nested destructuring → Dept: ${dept}, Location: ${location}\n\n`;

  // Spread operator for objects
  const address = { city: "coimbatore", country: "India" };
  const merged = { ...student, ...address };
  output += "Merged Object (Spread):\n" + JSON.stringify(merged, null, 2) + "\n";

  document.getElementById("output").textContent = output;
  console.log(output);
}
