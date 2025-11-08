 // ===== Example 1: Function Expression =====
    // Traditional function declaration
    function greet(name) {
      return "Hello, " + name + "!";
    }

    // Converted to function expression
    const greetExpression = function(name) {
      return "Hi, " + name + "! (from function expression)";
    };

    function runExpressionExample() {
      const msg1 = greet("Alice");
      const msg2 = greetExpression("Bob");
      const result = `Function Declaration: ${msg1}\nFunction Expression: ${msg2}`;
      document.getElementById("expressionOutput").textContent = result;
      console.log(result);
    }

    // ===== Example 2: Arrow Function =====
    // Function expression version
    const add = function(a, b) {
      return a + b;
    };

    // Converted to arrow function
    const addArrow = (a, b) => a + b;

    function runArrowExample() {
      const sum1 = add(4, 6);
      const sum2 = addArrow(4, 6);
      const result = `Function Expression: add(4,6) = ${sum1}\nArrow Function: addArrow(4,6) = ${sum2}`;
      document.getElementById("arrowOutput").textContent = result;
      console.log(result);
    }

    // ===== Example 3: "this" behavior difference =====
    const person = {
      name: "Kaniha",
      traditionalFn: function() {
        return "Traditional Function: Hello, " + this.name;
      },
      arrowFn: () => {
        // Arrow functions don't bind their own `this`
        return "Arrow Function: Hello, " + (this.name || "undefined (no binding)");
      }
    };

    function runThisExample() {
      const msg1 = person.traditionalFn();
      const msg2 = person.arrowFn();
      const result = `${msg1}\n${msg2}`;
      document.getElementById("thisOutput").textContent = result;
      console.log(result);
    }