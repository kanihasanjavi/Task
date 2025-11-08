// Array Destructuring
const fruits = ["apple", "banana", "cherry"];
const [first, second] = fruits;
console.log("Array Destructuring:", first, second);

// Object Destructuring with nested object
const person = {
  name: "Alice",
  address: { city: "Paris", country: "France" },
};
const { name, address: { city } } = person;
console.log("Object Destructuring:", name, city);

// Dot and Bracket Notation
console.log("Dot notation:", person.name);
console.log("Bracket notation:", person["address"]["country"]);

// Iterating through object
for (let key in person) {
  console.log("for...in:", key, "=", person[key]);
}

console.log("Object.keys:", Object.keys(person));
console.log("Object.values:", Object.values(person));
console.log("Object.entries:", Object.entries(person));
