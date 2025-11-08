function runObjects() {
  let output = "";

  // Object with properties and method
  const student = {
    name: "kaniha",
    age: 19,
    course: "Computer Science",
    displayInfo: function() {
      return `Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`;
    }
  };

  output += "Original Object:\n" + JSON.stringify(student, null, 2) + "\n\n";
  output += "Method Output:\n" + student.displayInfo() + "\n\n";

  // Accessing & modifying properties
  student.age = 22;
  student.grade = "A";
  output += "After Modification:\n" + JSON.stringify(student, null, 2) + "\n";

  // Another object example
  const car = {
    brand: "Toyota",
    model: "Camry",
    start() {
      return `${this.brand} ${this.model} is starting...`;
    }
  };

  output += "\nCar Object:\n" + JSON.stringify(car, null, 2) + "\n";
  output += "Method Call: " + car.start();

  document.getElementById("output").textContent = output;
  console.log(output);
}
