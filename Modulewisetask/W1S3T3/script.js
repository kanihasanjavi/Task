 // ===== Example 1: Using break =====
    function breakExample() {
      let result = "Checking numbers 2 to 20 for prime...\n";
      let firstPrime = null;

      for (let i = 2; i <= 20; i++) {
        let isPrime = true;

        // Check if i is prime
        for (let j = 2; j < i; j++) {
          if (i % j === 0) {
            isPrime = false;
            break;
          }
        }

        if (isPrime) {
          firstPrime = i;
          result += `✅ Found first prime number: ${i}`;
          break; // Exit the loop immediately after finding the first prime
        }
      }

      if (firstPrime === null) {
        result += "No prime numbers found.";
      }

      document.getElementById("breakOutput").textContent = result;
      console.log(result);
    }

    // ===== Example 2: Using continue =====
    function continueExample() {
      let result = "Odd numbers between 1 and 20:\n";

      for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
          continue; // Skip even numbers
        }
        result += i + " ";
      }

      document.getElementById("continueOutput").textContent = result;
      console.log(result);
    }