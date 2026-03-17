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
    angular: "Auth guard ",
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
