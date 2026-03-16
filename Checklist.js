const roadmap = {
  1: {
    angular: "HTML5 basics, semantic tags",
    dotnet: "C# setup, variables",
    sql: "DBMS concepts",
    practice: "HTML page + console app",
  },

  2: {
    angular: "Forms, input types",
    dotnet: "Conditions if/else",
    sql: "Create database",
    practice: "Registration form",
  },

  3: {
    angular: "CSS basics",
    dotnet: "Loops",
    sql: "Insert & select",
    practice: "Fetch data",
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
