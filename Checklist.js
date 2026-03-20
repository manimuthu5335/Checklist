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
  15: {
    angular: "Angular CLI & project structure",
    dotnet: ".NET Core architecture",
    sql: "Normalization (1NF, 2NF)",
    practice: "Create Angular app",
  },
  16: {
    angular: "Components",
    dotnet: "Dependency Injection basics",
    sql: "3NF",
    practice: "Angular component creation",
  },
  17: {
    angular: "Modules",
    dotnet: "Services concept",
    sql: "Relationships",
    practice: "Modular Angular app",
  },
  18: {
    angular: "Data binding",
    dotnet: "Logging basics",
    sql: "ER diagrams",
    practice: "Bind data in UI",
  },
  19: {
    angular: "Directives (ngIf, ngFor)",
    dotnet: "Config files",
    sql: "Sample schema design",
    practice: "UI lists",
  },
  20: {
    angular: "Saturday - Revision + practice",
    dotnet: "Saturday - Revision + practice",
    sql: "Saturday - Revision + practice",
    practice: "Saturday - Revision + practice",
  },
  21: {
    angular: "Sunday - Mini Project: Angular Todo App",
    dotnet: "Sunday - Mini Project: Angular Todo App",
    sql: "Sunday - Mini Project: Angular Todo App",
    practice: "Sunday - Mini Project: Angular Todo App",
  },
  22: {
    angular: "Template-driven forms",
    dotnet: "Exception handling",
    sql: "Index basics",
    practice: "Simple form",
  },
  23: {
    angular: "Reactive forms",
    dotnet: "Collections (List)",
    sql: "Composite keys",
    practice: "Reactive form",
  },
  24: {
    angular: "Validators",
    dotnet: "Dictionary",
    sql: "Views",
    practice: "Validated forms",
  },
  25: {
    angular: "Custom validators",
    dotnet: "LINQ - Select, Where",
    sql: "Stored procedures",
    practice: "LINQ queries",
  },
  26: {
    angular: "Form submission",
    dotnet: "LINQ joins",
    sql: "SP with parameters",
    practice: "Form → console logic",
  },
  27: {
    angular: "Saturday - Revision + practice",
    dotnet: "Saturday - Revision + practice",
    sql: "Saturday - Revision + practice",
    practice: "Saturday - Revision + practice",
  },
  28: {
    angular: "Sunday - Project: Angular Forms + SQL schema",
    dotnet: "Sunday - Project: Angular Forms + SQL schema",
    sql: "Sunday - Project: Angular Forms + SQL schema",
    practice: "Sunday - Project: Angular Forms + SQL schema",
  },
  29: {
    angular: "API concepts",
    dotnet: "Web API intro",
    sql: "API-driven schema",
    practice: "Create API project",
  },
  30: {
    angular: "HttpClient GET",
    dotnet: "Controllers & routing",
    sql: "SELECT for APIs",
    practice: "GET API",
  },
  31: {
    angular: "POST request",
    dotnet: "POST API",
    sql: "INSERT logic",
    practice: "Create record",
  },
  32: {
    angular: " PUT request",
    dotnet: "PUT API",
    sql: "UPDATE via API",
    practice: "Update record",
  },
  33: {
    angular: " DELETE request",
    dotnet: "DELETE API",
    sql: "DELETE safely",
    practice: "Full CRUD",
  },
  34: {
    angular: "Saturday - API testing with Postman",
    dotnet: "Saturday - API testing with Postman",
    sql: "Saturday - API testing with Postman",
    practice: "Saturday - API testing with Postman",
  },
  35: {
    angular: "Sunday - Project: User CRUD App",
    dotnet: "Sunday - Project: User CRUD App",
    sql: "Sunday - Project: User CRUD App",
    practice: "Sunday - Project: User CRUD App",
  },
  36: {
    angular: "Service refactor",
    dotnet: "EF Core intro",
    sql: "Code-first vs DB-first",
    practice: "Add EF",
  },
  37: {
    angular: "Observable patterns",
    dotnet: "DbContext",
    sql: "Migration tables",
    practice: "Run migration",
  },
  38: {
    angular: "Async pipe",
    dotnet: "Relationships mapping",
    sql: "FK constraints",
    practice: "EF joins",
  },
  39: {
    angular: "Error handling",
    dotnet: "EF CRUD",
    sql: "Index tuning",
    practice: "Optimize calls",
  },
  40: {
    angular: "Pagination UI",
    dotnet: "Pagination logic",
    sql: "OFFSET FETCH",
    practice: "Paged API",
  },
  41: {
    angular: "Saturday - EF Core practice",
    dotnet: "Saturday - EF Core practice",
    sql: "Saturday - EF Core practice",
    practice: "Saturday - EF Core practice",
  },
  42: {
    angular: "Sunday - Project: EF-based CRUD",
    dotnet: "Sunday - Project: EF-based CRUD",
    sql: "Sunday - Project: EF-based CRUD",
    practice: "Sunday - Project: EF-based CRUD",
  },
  43: {
    angular: "Routing",
    dotnet: "Middleware",
    sql: "Auth tables",
    practice: "Routes",
  },
  44: {
    angular: "Lazy loading",
    dotnet: "JWT basics",
    sql: "User roles",
    practice: "Token generation",
  },
  45: {
    angular: "Auth guard",
    dotnet: "JWT validation",
    sql: "Role mapping",
    practice: "Secure routes",
  },
  46: {
    angular: "Interceptors",
    dotnet: "Authorization policies",
    sql: "Index roles",
    practice: "Token attach",
  },
  47: {
    angular: "Logout flow",
    dotnet: "Refresh token",
    sql: "Session data",
    practice: "Secure app",
  },
  48: {
    angular: "Saturday - Revision & practice",
    dotnet: "Saturday - Revision & practice",
    sql: "Saturday - Revision & practice",
    practice: "Saturday - Revision & practice",
  },
  49: {
    angular: "Sunday - Project: Login + Role-based app",
    dotnet: "Sunday - Project: Login + Role-based app",
    sql: "Sunday - Project: Login + Role-based app",
    practice: "Sunday - Project: Login + Role-based app",
  },
  50: {
    angular: "Create project structure, core & shared modules",
    dotnet: "Create Web API solution, folder architecture",
    sql: "Create main database & base tables",
    practice: "Run Angular + API together",
  },
  51: {
    angular: "Layout (header, sidebar, footer)",
    dotnet: "Base controller, health check API",
    sql: "Master tables (Roles, Status)",
    practice: "Static dashboard UI",
  },
  52: {
    angular: "Routing for modules(lazy loading)",
    dotnet: "Global exception handling middleware",
    sql: "Audit columns (CreatedAt, UpdatedAt)",
    practice: " Navigation flow",
  },
  53: {
    angular: "Auth service skeleton",
    dotnet: "JWT token generation",
    sql: "Users table",
    practice: "Token generation test",
  },
  54: {
    angular: "Login UI",
    dotnet: "Login API",
    sql: "User authentication query",
    practice: "Login end-to-end",
  },
  55: {
    angular: "Auth guard",
    dotnet: "Authorization attributes",
    sql: "Role mapping table",
    practice: "Role protected routes",
  },
  56: {
    angular: "Sunday - Feature Completion: Secure login + role access",
    dotnet: "Sunday - Feature Completion: Secure login + role access",
    sql: "Sunday - Feature Completion: Secure login + role access",
    practice: "Sunday - Feature Completion: Secure login + role access",
  },
  57: {
    angular: "Admin dashboard UI",
    dotnet: "Admin controller",
    sql: "Admin-related tables",
    practice: "Admin route setup",
  },
  58: {
    angular: "Create entity form",
    dotnet: "POST API (Admin)",
    sql: "Insert procedure",
    practice: "Create record",
  },
  59: {
    angular: "List view with table",
    dotnet: "GET API (Admin)",
    sql: "Select query",
    practice: "List records",
  },
  60: {
    angular: "Edit form",
    dotnet: "PUT API",
    sql: "Update query",
    practice: "Update record",
  },
  61: {
    angular: "Delete confirmation",
    dotnet: "DELETE API",
    sql: "Soft delete",
    practice: "Delete flow",
  },
  62: {
    angular: "Pagination",
    dotnet: "Server-side paging",
    sql: "OFFSET FETCH",
    practice: "Large data handling",
  },
  63: {
    angular: "Sunday - Feature Completion: Full Admin CRUD",
    dotnet: "Sunday - Feature Completion: Full Admin CRUD",
    sql: "Sunday - Feature Completion: Full Admin CRUD",
    practice: "Sunday - Feature Completion: Full Admin CRUD",
  },
  64: {
    angular: "User dashboard",
    dotnet: "User controller",
    sql: "User-specific tables",
    practice: "User routing",
  },
  65: {
    angular: "Create request UI",
    dotnet: "Create request API",
    sql: "Insert request",
    practice: "Submit",
  },
  66: {
    angular: "View request list",
    dotnet: "Get user requests",
    sql: "Filter by user",
    practice: "User data isolation",
  },
  67: {
    angular: "Request detail page",
    dotnet: "Get by ID API",
    sql: "Join queries",
    practice: "Detail view",
  },
  68: {
    angular: "Status badge UI",
    dotnet: "Status update logic",
    sql: "Status history table",
    practice: "Status tracking",
  },
  69: {
    angular: "Search & filter",
    dotnet: "Search API",
    sql: "LIKE queries",
    practice: "Filtered results",
  },
  70: {
    angular: "Sunday - Feature Completion: User request flow",
    dotnet: "Sunday - Feature Completion: User request flow",
    sql: "Sunday - Feature Completion: User request flow",
    practice: "Sunday - Feature Completion: User request flow",
  },
  71: {
    angular: "File upload UI",
    dotnet: "File upload API",
    sql: "File metadata table",
    practice: "Upload documents",
  },
  72: {
    angular: "File preview/download",
    dotnet: "File serve API",
    sql: "File mapping",
    practice: "Download flow",
  },
  73: {
    angular: "Approval UI",
    dotnet: "Approval API",
    sql: "Approval table",
    practice: "Approve / Reject",
  },
  74: {
    angular: "Notifications UI",
    dotnet: "Notification service",
    sql: "Notification table",
    practice: "Trigger notification",
  },
  75: {
    angular: "Sorting UI",
    dotnet: "Sorting API",
    sql: "ORDER BY optimization",
    practice: "Sorted lists",
  },
  76: {
    angular: "Dashboard charts",
    dotnet: "Dashboard metrics API",
    sql: "Aggregate queries",
    practice: "Charts data",
  },
  77: {
    angular: "Sunday - Feature Completion: Advanced module",
    dotnet: "Sunday - Feature Completion: Advanced module",
    sql: "Sunday - Feature Completion: Advanced module",
    practice: "Sunday - Feature Completion: Advanced module",
  },
  78: {
    angular: "Global error UI",
    dotnet: "Error logging",
    sql: "Error log table",
    practice: "Error simulation",
  },
  79: {
    angular: "Loading indicators",
    dotnet: "Async optimization",
    sql: "Index tuning",
    practice: "Performance testing",
  },
  80: {
    angular: "Form validations polish",
    dotnet: "Data annotations",
    sql: "Constraints review",
    practice: "Validation checks",
  },
  81: {
    angular: "Code refactoring",
    dotnet: "Service refactor",
    sql: "Query optimization",
    practice: "Clean code",
  },
  82: {
    angular: "Role-based UI",
    dotnet: "Policy-based auth",
    sql: "Role index",
    practice: "Role scenarios",
  },
  83: {
    angular: "Export to Excel",
    dotnet: "Export API",
    sql: "Reporting queries",
    practice: "Excel export",
  },
  84: {
    angular: "Import from Excel",
    dotnet: "Import API",
    sql: "Bulk insert",
    practice: "Bulk upload",
  },
  85: {
    angular: "End-to-End Testing - Bug fixing - UI/UX improvements",
    dotnet: "End-to-End Testing - Bug fixing - UI/UX improvements",
    sql: "End-to-End Testing - Bug fixing - UI/UX improvements",
    practice: "End-to-End Testing - Bug fixing - UI/UX improvements",
  },
  86: {
    angular: "End-to-End Testing - Bug fixing - UI/UX improvements",
    dotnet: "End-to-End Testing - Bug fixing - UI/UX improvements",
    sql: "End-to-End Testing - Bug fixing - UI/UX improvements",
    practice: "End-to-End Testing - Bug fixing - UI/UX improvements",
  },
  87: {
    angular: "End-to-End Testing - Bug fixing - UI/UX improvements",
    dotnet: "End-to-End Testing - Bug fixing - UI/UX improvements",
    sql: "End-to-End Testing - Bug fixing - UI/UX improvements",
    practice: "End-to-End Testing - Bug fixing - UI/UX improvements",
  },
  88: {
    angular: "End-to-End Testing - Bug fixing - UI/UX improvements",
    dotnet: "End-to-End Testing - Bug fixing - UI/UX improvements",
    sql: "End-to-End Testing - Bug fixing - UI/UX improvements",
    practice: "End-to-End Testing - Bug fixing - UI/UX improvements",
  },
  89: {
    angular: "End-to-End Testing - Bug fixing - UI/UX improvements",
    dotnet: "End-to-End Testing - Bug fixing - UI/UX improvements",
    sql: "End-to-End Testing - Bug fixing - UI/UX improvements",
    practice: "End-to-End Testing - Bug fixing - UI/UX improvements",
  },
  90: {
    angular: "End-to-End Testing - Bug fixing - UI/UX improvements",
    dotnet: "End-to-End Testing - Bug fixing - UI/UX improvements",
    sql: "End-to-End Testing - Bug fixing - UI/UX improvements",
    practice: "End-to-End Testing - Bug fixing - UI/UX improvements",
  },
  91: {
    angular: "Deployment prep - IIS setup - Environment configs",
    dotnet: "Deployment prep - IIS setup - Environment configs",
    sql: "Deployment prep - IIS setup - Environment configs",
    practice: "Deployment prep - IIS setup - Environment configs",
  },
  92: {
    angular: "Deployment prep - IIS setup - Environment configs",
    dotnet: "Deployment prep - IIS setup - Environment configs",
    sql: "Deployment prep - IIS setup - Environment configs",
    practice: "Deployment prep - IIS setup - Environment configs",
  },
  93: {
    angular: "Deployment prep - IIS setup - Environment configs",
    dotnet: "Deployment prep - IIS setup - Environment configs",
    sql: "Deployment prep - IIS setup - Environment configs",
    practice: "Deployment prep - IIS setup - Environment configs",
  },
  94: {
    angular: "Deployment prep - IIS setup - Environment configs",
    dotnet: "Deployment prep - IIS setup - Environment configs",
    sql: "Deployment prep - IIS setup - Environment configs",
    practice: "Deployment prep - IIS setup - Environment configs",
  },
  95: {
    angular: "Deployment prep - IIS setup - Environment configs",
    dotnet: "Deployment prep - IIS setup - Environment configs",
    sql: "Deployment prep - IIS setup - Environment configs",
    practice: "Deployment prep - IIS setup - Environment configs",
  },
  96: {
    angular: "Final polishing - Documentation - Demo preparation",
    dotnet: "Final polishing - Documentation - Demo preparation",
    sql: "Final polishing - Documentation - Demo preparation",
    practice: "Final polishing - Documentation - Demo preparation",
  },
  97: {
    angular: "Final polishing - Documentation - Demo preparation",
    dotnet: "Final polishing - Documentation - Demo preparation",
    sql: "Final polishing - Documentation - Demo preparation",
    practice: "Final polishing - Documentation - Demo preparation",
  },
  98: {
    angular: "Final polishing - Documentation - Demo preparation",
    dotnet: "Final polishing - Documentation - Demo preparation",
    sql: "Final polishing - Documentation - Demo preparation",
    practice: "Final polishing - Documentation - Demo preparation",
  },
};
const devQuotes = [
  "Code daily, improve constantly 💻",
  "Bugs are proof you're trying 🐛",
  "Think like a developer 🧠",
  "Consistency beats talent in coding 💪",
  "Write code, learn faster 🚀",
  "Every bug you fix makes you stronger 🔧",
  "Debugging is problem-solving 🔍",
  "Small commits, big progress 📈",
  "Code, break, fix, repeat 🔁",
  "Practice makes you a better developer 💯",

  "Read code more than you write 📘",
  "Clean code matters 🧼",
  "Understand before you implement 🧠",
  "Google is your best friend 🌐",
  "Stack Overflow saves lives 😄",
  "Focus on logic, not syntax 🎯",
  "Break problems into smaller parts 🧩",
  "Learn by building projects 🏗️",
  "Don't fear errors ❌",
  "Errors teach you better than success 🔥",

  "Push your code, not excuses 🚀",
  "Think twice, code once 🧠",
  "Refactor for clarity 🔧",
  "Readable code > clever code 📖",
  "Master the fundamentals 💯",
  "Stay curious, keep coding 🌟",
  "Your code reflects your thinking 🪞",
  "Consistency builds skill 🔁",
  "Version control is your safety net 🛡️",
  "Commit often, commit smart 📌",
  "Test your code, trust your logic ✔️",
  "Fix one bug at a time 🐞",
  "Stay patient while debugging ⏳",
  "Good code is simple code ✨",
  "Don’t copy, understand 📚",
  "Write code for humans 👨‍💻",
  "Code quality matters 🏆",
  "Learn patterns, not just syntax 🔄",
  "Keep your code DRY 💧",
  "Practice problem-solving daily 🧠",
  "Frontend or backend, logic is key 🔑",
  "Understand the flow 📊",
  "Optimize when necessary ⚡",
  "First make it work, then improve 🔧",
  "Code is like art 🎨",
  "Think scalable 📈",
  "Write less, achieve more 💡",
  "Avoid overengineering 🚫",
  "Build, break, learn 🔁",
  "Stay consistent daily 📅",
  "Errors are stepping stones 🪜",
  "Master debugging skills 🔍",
  "Code reviews improve quality 👀",
  "Naming matters 🏷️",
  "Structure your code well 🏗️",
  "Understand APIs deeply 🌐",
  "Keep learning frameworks 🔄",
  "Stay updated with tech 📰",
  "Solve real-world problems 🌍",
  "Focus on performance ⚡",
  "Angular today, fullstack tomorrow 🚀",
  "Master TypeScript 🧠",
  "Components are your building blocks 🧩",
  "Services handle logic 🔧",
  "Routing defines flow 🛣️",
  "Reusable code saves time ⏳",
  "State management is powerful ⚙️",
  "Write scalable apps 📈",
  "Keep UI clean and simple 🎨",
  "User experience matters 💡",
  "Backend is logic powerhouse ⚡",
  "APIs connect everything 🌐",
  "Database design is crucial 🗄️",
  "Optimize queries 🔍",
  "Handle errors gracefully ❌",
  "Secure your APIs 🔐",
  "Understand async programming ⏱️",
  "Write efficient code 💻",
  "Test your endpoints ✔️",
  "Logging helps debugging 📜",
  "Think fullstack 🔄",
  "Integrate frontend & backend 🔗",
  "Build end-to-end projects 🏗️",
  "Deploy your apps 🚀",
  "Learn from failures 💥",
  "Stay consistent 💯",
  "Practice daily 📅",
  "Focus on growth 📈",
  "Keep improving 🔧",
  "Be a problem solver 🧠",
  "Write code with purpose 🎯",
  "Stay disciplined 💪",
  "Avoid distractions 🚫",
  "Time management matters ⏳",
  "Code every single day 📆",
  "Review your own code 👀",
  "Simplify complexity ✨",
  "Think before coding 🧠",
  "Stay humble, keep learning 📘",
  "Share knowledge 🤝",
  "Learn new tools 🛠️",
  "Explore frameworks 🔍",
  "Master debugging 🔧",
  "Keep experimenting ⚗️",
  "Stay motivated 🔥",
  "Take breaks wisely ☕",
  "Don’t burn out ⚠️",
  "Stay consistent 💯",
  "Push your limits 🚀",
  "Believe in your journey ✨",
  "Code is your superpower 🦸‍♂️",
  "Build your portfolio 📁",
  "Solve challenges daily 🧩",
  "Think like an engineer ⚙️",
  "Stay focused 🎯",
  "Keep growing 🌱",
  "Be better than yesterday 📈",
  "Stay strong 💪",
  "Never quit coding ❗",
  "Win with consistency 🏆",
];
let quoteQueue = JSON.parse(localStorage.getItem("quoteQueue")) || [];
function getNextQuote() {
  if (quoteQueue.length === 0) {
    quoteQueue = [...devQuotes];
    for (let i = quoteQueue.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [quoteQueue[i], quoteQueue[j]] = [quoteQueue[j], quoteQueue[i]];
    }
  }
  const nextQuote = quoteQueue.shift();
  localStorage.setItem("quoteQueue", JSON.stringify(quoteQueue));
  return nextQuote;
}

function showRandomQuote() {
  const quote = getNextQuote();
  const quoteElement = document.getElementById("quoteText");
  if (quoteElement) {
    quoteElement.innerText = quote;
  }
}
let completedDays = JSON.parse(localStorage.getItem("completedDays")) || [];
let selectedDay = null;
const daysContainer = document.getElementById("days");
const circle = document.getElementById("circleProgress");
const radius = 32;
const circumference = 2 * Math.PI * radius;
circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;
function showWelcome() {
  document.getElementById("welcome").style.display = "block";
  document.getElementById("topics").style.display = "none";
}
function showTopics() {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("topics").style.display = "block";
}
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
  showTopics();
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
    ? "Completed"
    : "Not Completed";
  showRandomQuote();
}

function markComplete() {
  if (selectedDay === null) return;
  if (!completedDays.includes(selectedDay)) {
    completedDays.push(selectedDay);
    localStorage.setItem("completedDays", JSON.stringify(completedDays));
  }
  renderDays();
  updateProgress();
  // showDay(selectedDay);
}

function updateProgress() {
  const totalDays = 140;
  const completed = completedDays.length;
  const percent = Math.round((completed / totalDays) * 100);
  const circle = document.getElementById("circleProgress");
  const text = document.getElementById("circleText");
  if (!circle || !text) return;
  const radius = 32;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset = offset;
  text.innerText = percent + "%";
}
document.addEventListener("DOMContentLoaded", () => {
  renderDays();
  updateProgress();
  showWelcome();
  showRandomQuote();
});
