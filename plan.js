const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");
const clearAll = document.getElementById("clearAll");

function loadTodos() {
  const todos = JSON.parse(localStorage.getItem("todos") || "[]");
  list.innerHTML = "";
  todos.forEach((t, i) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `<span>${t}</span><button class='btn btn-sm btn-danger' onclick='deleteTodo(${i})'>X</button>`;
    list.appendChild(li);
  });
}

function saveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  const todos = JSON.parse(localStorage.getItem("todos") || "[]");
  todos.push(text);
  saveTodos(todos);
  input.value = "";
  loadTodos();
});

function deleteTodo(i) {
  const todos = JSON.parse(localStorage.getItem("todos") || "[]");
  todos.splice(i, 1);
  saveTodos(todos);
  loadTodos();
}

clearAll.addEventListener("click", () => {
  localStorage.removeItem("todos");
  loadTodos();
});

loadTodos();
