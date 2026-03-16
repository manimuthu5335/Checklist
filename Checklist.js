const roadmap = {
  1: {
    angular: "HTML5 basics, semantic tags",
    dotnet: "C# setup, variables, data types",
    sql: "What is DBMS, RDBMS concepts",
    practice: " HTML page + C# console print",
  },
  2: {
    angular: "Forms, input types",
    dotnet: "Operators, conditions (if/else)",
    sql: " CREATE DATABASE, CREATE TABLE",
    practice: "Registration form + table creation",
  },
  3: {
    angular: "CSS basics, box model",
    dotnet: "Loops (for, while)",
    sql: "INSERT, SELECT",
    practice: "Insert & fetch data",
  },
  4: {
    angular: "Flexbox layout",
    dotnet: "Methods & parameters",
    sql: "WHERE clause",
    practice: "Filtered queries",
  },
  5: {
    angular: "Responsive design",
    dotnet: "Arrays",
    sql: "UPDATE, DELETE",
    practice: "CRUD cycle",
  },
  6: {
    angular: "Saturday Revision of Week 1",
    dotnet: "Saturday Revision of Week 1",
    sql: "Practice: Simple static website",
    practice: "Practice: Simple static website",
  },
  7: {
    angular: "Sunday - Mini Project: Student Registration (HTML + SQL)",
    dotnet: "Sunday - Mini Project: Student Registration (HTML + SQL)",
    sql: "Sunday - Mini Project: Student Registration (HTML + SQL)",
    practice: "Sunday - Mini Project: Student Registration (HTML + SQL)",
  },
  8: {
    angular: "JavaScript variables & functions",
    dotnet: " Classes & objects",
    sql: "Primary keys",
    practice: "JS form validation",
  },
  9: {
    angular: "Arrays & objects",
    dotnet: "Constructors",
    sql: "Constraints",
    practice: "OOP programs",
  },
  10: {
    angular: "DOM manipulation",
    dotnet: "Inheritance",
    sql: "Foreign keys",
    practice: "Parent-child tables",
  },
  11: {
    angular: "Events & handlers",
    dotnet: "Polymorphism",
    sql: "JOIN basics",
    practice: "Join queries",
  },
  12: {
    angular: "ES6 features",
    dotnet: "Interfaces",
    sql: "INNER JOIN",
    practice: "Multi-table fetch",
  },
  13: {
    angular: "Saturday - Revision + practice",
    dotnet: "Saturday - Revision + practice",
    sql: "Saturday - Revision + practice",
    practice: "Saturday - Revision + practice",
  },
  14: {
    angular: "Sunday - Mini Project: Employee Management (Console + SQL)",
    dotnet: "Sunday - Mini Project: Employee Management (Console + SQL)",
    sql: "Sunday - Mini Project: Employee Management (Console + SQL)",
    practice: "Sunday - Mini Project: Employee Management (Console + SQL)",
  }, 
};
let completedDays = JSON.parse(localStorage.getItem("completedDays")) || [];
let selectedDay = null;
const daysContainer = document.getElementById("days");
function renderDays() {
  daysContainer.innerHTML = "";
  for (let i = 1; i <= 140; i++) {
    let div = document.createElement("div");
    div.className = "day";
    if (completedDays.includes(i)) {
      div.classList.add("completed");
    }
    div.innerHTML = `Day ${i} <span>${completedDays.includes(i) ? "✓" : ""}</span>`;
    div.onclick = () => showDay(i);
    daysContainer.appendChild(div);
  }
}
function showDay(day) {
  selectedDay = day;
  let data = roadmap[day];
  document.getElementById("title").innerText = "Day " + day + " Topics";
  if (data) {
    document.getElementById("angular").innerText = data.angular;
    document.getElementById("dotnet").innerText = data.dotnet;
    document.getElementById("sql").innerText = data.sql;
    document.getElementById("practice").innerText = data.practice;
  } else {
    document.getElementById("angular").innerText = "Planned later";
    document.getElementById("dotnet").innerText = "Planned later";
    document.getElementById("sql").innerText = "Planned later";
    document.getElementById("practice").innerText = "Planned later";
  }
  document.getElementById("status").innerText = completedDays.includes(day)
    ? "Completed ✅"
    : "Not Completed ❌";
}

function markComplete() {
  if (selectedDay === null) return;
  if (!completedDays.includes(selectedDay)) {
    completedDays.push(selectedDay);
    localStorage.setItem("completedDays", JSON.stringify(completedDays));
  }
  renderDays();
  showDay(selectedDay);
}
renderDays();
