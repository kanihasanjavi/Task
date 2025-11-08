/* ========================================
       1️⃣ CALLBACK FUNCTION EXAMPLE
    ======================================== */
    // Function that performs an action and calls a callback
    function doTask(taskName, callback) {
      const startMsg = `Starting: ${taskName}...`;
      console.log(startMsg);

      // Simulate async task with setTimeout
      setTimeout(() => {
        const doneMsg = `${taskName} completed successfully!`;
        callback(doneMsg); // callback invoked here
      }, 1000);
    }

    // Run example
    function runCallbackExample() {
      document.getElementById("callbackOutput").textContent = "Processing task...";

      // Call doTask and provide callback function
      doTask("Downloading File", function(message) {
        document.getElementById("callbackOutput").textContent = message;
        console.log(message);
      });
    }

    /* ========================================
       2️⃣ SCOPE DEMONSTRATION
    ======================================== */
    var globalVar = "🌍 this is a GLOBAL variable (var)";

    function runScopeExample() {
      let output = "";

      // Global scope
      output += `Global Scope:\n${globalVar}\n\n`;

      // Local scope (inside a function)
      function localScopeDemo() {
        var localVar = "🏠 this is a LOCAL variable (var)";
        output += `Inside localScopeDemo():\n${localVar}\n\n`;
      }
      localScopeDemo();

      // Block scope
      {
        let blockLet = "📦 this is a BLOCK variable (let)";
        const blockConst = "📦this is a BLOCK constant (const)";
        var blockVar = "❗ this is declared with var inside a block";

        output += `Inside Block:\n${blockLet}\n${blockConst}\n${blockVar}\n\n`;
      }

      // Accessing variables after block
      output += `After Block:\nvar is still accessible: ${blockVar}\n`;
      output += `let/const are NOT accessible outside the block.\n`;

      document.getElementById("scopeOutput").textContent = output;
      console.log(output);
    }