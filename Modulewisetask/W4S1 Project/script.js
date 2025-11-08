// Initial Employees
let employees = [
  { id: 1, name: "Alice", position: "Developer", salary: 60000, department: "IT", available: true },
  { id: 2, name: "Bob", position: "Designer", salary: 50000, department: "Design", available: true },
  { id: 3, name: "Charlie", position: "Manager", salary: 80000, department: "HR", available: false }
];

// DOM Elements
const empForm = document.getElementById("employeeForm");
const empTableBody = document.getElementById("empTableBody");
const outputArea = document.getElementById("outputArea");
const employeeList = document.getElementById("employee-list");

// Function to display employees
function displayEmployees(list = employees) {
  empTableBody.innerHTML = "";
  list.forEach(emp => {
    empTableBody.innerHTML += `
      <tr>
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.position}</td>
        <td>${emp.salary}</td>
        <td>${emp.department}</td>
        <td>${emp.available ? "✅" : "❌"}</td>
      </tr>
    `;
  });
  employeeList.style.display = "block";
  outputArea.textContent = "📋 Displayed all employees.";
}

// Add / Update Employee
empForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newEmp = {
    id: parseInt(document.getElementById("empId").value),
    name: document.getElementById("empName").value,
    position: document.getElementById("empPosition").value,
    salary: parseFloat(document.getElementById("empSalary").value),
    department: document.getElementById("empDept").value,
    available: document.getElementById("empAvailability").value === "true"
  };

  const index = employees.findIndex(e => e.id === newEmp.id);
  if (index >= 0) {
    employees[index] = newEmp;
    outputArea.textContent = `🔄 Employee ID ${newEmp.id} updated successfully.`;
  } else {
    employees.push(newEmp);
    outputArea.textContent = `✅ Employee ${newEmp.name} added successfully.`;
  }
  empForm.reset();
});

// Display Button
document.getElementById("displayBtn").onclick = () => displayEmployees();

// Search Employee
document.getElementById("searchBtn").onclick = () => {
  const name = prompt("Enter employee name to search:").toLowerCase();
  const found = employees.filter(emp => emp.name.toLowerCase().includes(name));
  if (found.length) {
    displayEmployees(found);
    outputArea.textContent = `🔍 Found ${found.length} employee(s) matching "${name}".`;
  } else {
    outputArea.textContent = `❌ No employees found with name "${name}".`;
  }
};

// Remove Employee by ID
document.getElementById("removeBtn").onclick = () => {
  const id = parseInt(prompt("Enter Employee ID to remove:"));
  const before = employees.length;
  employees = employees.filter(emp => emp.id !== id);
  const after = employees.length;
  outputArea.textContent = before === after
    ? `⚠️ No employee found with ID ${id}.`
    : `🗑️ Employee ID ${id} removed.`;
  displayEmployees();
};

// Update Employee Availability
document.getElementById("updateAvailBtn").onclick = () => {
  const id = parseInt(prompt("Enter Employee ID to update availability:"));
  const emp = employees.find(e => e.id === id);
  if (emp) {
    emp.available = !emp.available;
    outputArea.textContent = `🔁 Employee ${emp.name} availability changed to ${emp.available ? "Available" : "Not Available"}.`;
    displayEmployees();
  } else {
    outputArea.textContent = `⚠️ Employee with ID ${id} not found.`;
  }
};

// Sort by Salary Ascending
document.getElementById("sortAsc").onclick = () => {
  employees.sort((a, b) => a.salary - b.salary);
  displayEmployees();
  outputArea.textContent = "⬆️ Employees sorted by salary (Ascending).";
};

// Sort by Salary Descending
document.getElementById("sortDesc").onclick = () => {
  employees.sort((a, b) => b.salary - a.salary);
  displayEmployees();
  outputArea.textContent = "⬇️ Employees sorted by salary (Descending).";
};

// Calculate Total Salary of Available Employees
document.getElementById("calcTotal").onclick = () => {
  const total = employees
    .filter(e => e.available)
    .reduce((sum, e) => sum + e.salary, 0);
  outputArea.textContent = `💰 Total Salary (Available Employees): ${total}`;
};

// Department-wise Salary Report
document.getElementById("deptReport").onclick = () => {
  const report = {};
  employees.forEach(emp => {
    report[emp.department] = (report[emp.department] || 0) + emp.salary;
  });
  let result = "📊 Department-wise Salary Report:\n";
  for (let [dept, total] of Object.entries(report)) {
    result += `${dept}: ${total}\n`;
  }
  outputArea.textContent = result;
};
