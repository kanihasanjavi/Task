// call(), apply(), and bind() examples
const person = {
  name: "Olivia",
};

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

// Using call()
greet.call(person, "Hello", "!");

// Using apply()
greet.apply(person, ["Hi there", "!!"]);

// Using bind()
const boundGreet = greet.bind(person, "Good Morning");
boundGreet("?");

// Compare
console.log("Difference:");
console.log("call() → executes immediately");
console.log("apply() → executes immediately but takes arguments as array");
console.log("bind() → returns a new function with fixed context");
