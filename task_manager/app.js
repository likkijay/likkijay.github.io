const form = document.getElementById("task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.getElementById("filter");
const taskInput = document.getElementById("task");

function loadEventListeners() {
  document.addEventListener("DOMContentLoaded", getTasks);
  form.addEventListener("submit", addTask);
  taskList.addEventListener("click", removeTask);
  clearBtn.addEventListener("click", clearTasks);
  filter.addEventListener("keyup", filterTasks);
}

function getTasks() {
  let tasks;
  if(!localStorage.getItem("tasks")) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = "collection-item";
    li.appendChild(document.createTextNode(task));
    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = "<i class='fa fa-remove'></i>";
    li.appendChild(link);
    taskList.appendChild(li);
  });
}

function addTask(e) {
  e.preventDefault();
  if(!taskInput.value) {
    alert("Add a task");
  }

  const li = document.createElement("li");
  li.className = "collection-item";
  li.appendChild(document.createTextNode(taskInput.value));
  const link = document.createElement("a");
  link.className = "delete-item secondary-content";
  link.innerHTML = "<i class='fa fa-remove'></i>";
  li.appendChild(link);
  taskList.appendChild(li);

  storeTask(taskInput.value);

  taskInput.value = "";
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    e.target.parentElement.parentElement.remove();
    unstoreTask(e.target.parentElement.parentElement);
  }
}

function clearTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  localStorage.removeItem("tasks");
}

function filterTasks() {
  let val = filter.value.toLowerCase();
  let li = taskList.querySelectorAll("li.collection-item");
  for (let i = 0; i < li.length; i++) {
    let text = li[i].textContent;
    if (text.toLowerCase().indexOf(val) > -1) {
      li[i].style.display = "block";
    } else {
      li[i].style.display = "none";
    }
  }
}

function storeTask(task) {
  let tasks;
  if(!localStorage.getItem("tasks")) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function unstoreTask(taskItem) {
  let tasks;
  if(!localStorage.getItem("tasks")) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach((task, index) => {
    if(taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

loadEventListeners();