
    // ===== Simple if statement =====
    function simpleIf() {
      let num = 10;
      let message = "";

      if (num > 5) {
        message = "✅ The number " + num + " is greater than 5.";
      }

      document.getElementById("ifOutput").textContent = message;
      console.log("Simple if:", message);
    }

    // ===== if-else example =====
    function ifElseExample() {
      let temperature = 22;
      let result = "";

      if (temperature >= 30) {
        result = "🌞 It's a hot day!";
      } else {
        result = "🌤️ The weather is pleasant.";
      }

      document.getElementById("ifElseOutput").textContent = result;
      console.log("If-else:", result);
    }

    // ===== else-if ladder =====
    function elseIfExample() {
      let marks = 75;
      let grade = "";

      if (marks >= 90) {
        grade = "🏆 Grade: A+";
      } else if (marks >= 80) {
        grade = "🎯 Grade: A";
      } else if (marks >= 70) {
        grade = "👏 Grade: B";
      } else if (marks >= 60) {
        grade = "👍 Grade: C";
      } else {
        grade = "❌ Grade: Fail";
      }

      document.getElementById("elseIfOutput").textContent = grade;
      console.log("Else-if:", grade);
    }

    // ===== switch statement =====
    function switchExample() {
      let day = parseInt(document.getElementById("dayInput").value);
      let dayName = "";

      switch (day) {
        case 1: dayName = "Monday"; break;
        case 2: dayName = "Tuesday"; break;
        case 3: dayName = "Wednesday"; break;
        case 4: dayName = "Thursday"; break;
        case 5: dayName = "Friday"; break;
        case 6: dayName = "Saturday"; break;
        case 7: dayName = "Sunday"; break;
        default: dayName = "❗ Invalid input! Please enter a number between 1 and 7.";
      }

      document.getElementById("switchOutput").textContent = "📅 Day: " + dayName;
      console.log("Switch:", dayName);
    }
  