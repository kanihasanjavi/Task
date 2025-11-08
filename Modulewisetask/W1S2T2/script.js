// ===== While Loop Example =====
    function whileLoopExample() {
      let i = 1;
      let result = "Numbers from 1 to 10:\n";
      while (i <= 10) {
        result += i + " ";
        i++;
      }
      document.getElementById("whileOutput").textContent = result;
      console.log(result);
    }

    // ===== Do While Loop Example =====
    function doWhileExample() {
      let password;
      let attempts = 0;
      const correctPassword = "1234";
      do {
        password = prompt("Enter password (hint: 1234):");
        attempts++;
      } while (password !== correctPassword);

      let msg = `✅ Correct password entered after ${attempts} attempt(s)!`;
      document.getElementById("doWhileOutput").textContent = msg;
      console.log(msg);
    }

    // ===== For Loop Example =====
    function forLoopExample() {
      let n = parseInt(document.getElementById("sumInput").value);
      if (isNaN(n) || n <= 0) {
        document.getElementById("forOutput").textContent = "⚠️ Please enter a positive number.";
        return;
      }

      let sum = 0;
      for (let i = 1; i <= n; i++) {
        sum += i;
      }

      let message = `The sum of first ${n} natural numbers is: ${sum}`;
      document.getElementById("forOutput").textContent = message;
      console.log(message);
    }

    // ===== Nested For Loop Example =====
    function nestedLoopExample() {
      let num = parseInt(document.getElementById("tableInput").value);
      if (isNaN(num) || num <= 0) {
        document.getElementById("nestedOutput").textContent = "⚠️ Please enter a valid number.";
        return;
      }

      let table = `Multiplication Table of ${num}:\n`;
      for (let i = 1; i <= 10; i++) {
        table += `${num} × ${i} = ${num * i}\n`;
      }

      document.getElementById("nestedOutput").textContent = table;
      console.log(table);
    }