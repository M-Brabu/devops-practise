let tasks = [];

// LOGIN
function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "brabu" && pass === "1234") {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("appPage").classList.remove("hidden");
  } else {
    document.getElementById("error").innerText = "Wrong login!";
  }
}

// ADD TASK
function addTask() {
  let input = document.getElementById("taskInput");

  if (input.value === "") return;

  tasks.push(input.value);
  input.value = "";

  loadTasks();
}

// LOAD TASKS
function loadTasks() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerText = task;

    li.onclick = () => {
      tasks.splice(index, 1);
      loadTasks();
    };

    list.appendChild(li);
  });
}