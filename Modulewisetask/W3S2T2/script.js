// Array of Objects
const users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Emma", age: 30 },
  { id: 3, name: "Liam", age: 28 },
];

users.forEach(user => console.log(`${user.name} is ${user.age} years old`));

// Rest Parameters
function sumAll(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}
console.log("Sum using rest parameters:", sumAll(10, 20, 30, 40));

// Spread Operator (Combine Arrays)
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const combined = [...arr1, ...arr2];
console.log("Combined Array using Spread:", combined);

// Parameter Destructuring
function displayUser({ name, age }) {
  console.log(`User ${name} is ${age} years old.`);
}
displayUser(users[1]);
