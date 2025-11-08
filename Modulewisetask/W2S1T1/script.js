// ===== Example 1: Fixed Parameters =====
    function addNumbers(a, b) {
      return a + b;
    }

    function runFixedFunction() {
      const sum = addNumbers(5, 8);
      const result = `Function addNumbers(5, 8) called.\nResult: ${sum}`;
      document.getElementById("fixedOutput").textContent = result;
      console.log(result);
    }

    // ===== Example 2: Using arguments object =====
    function multiplyAll() {
      let product = 1;
      for (let i = 0; i < arguments.length; i++) {
        product *= arguments[i];
      }
      return product;
    }

    function runArgumentsFunction() {
      const resultValue = multiplyAll(2, 3, 4);
      const result = `Function multiplyAll(2, 3, 4) called.\nResult: ${resultValue}`;
      document.getElementById("argsOutput").textContent = result;
      console.log(result);
    }

    // ===== Example 3: Using rest operator =====
    function average(...numbers) {
      let sum = 0;
      for (let num of numbers) {
        sum += num;
      }
      return sum / numbers.length;
    }

    function runRestFunction() {
      const resultValue = average(10, 20, 30, 40);
      const result = `Function average(10, 20, 30, 40) called.\nAverage: ${resultValue}`;
      document.getElementById("restOutput").textContent = result;
      console.log(result);
    }