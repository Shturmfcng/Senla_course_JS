import "../scss/app.scss";

const searchTasks = document.getElementById("searchTasks");
const newTask = document.getElementById("newTask");
const addTaskButton = document.getElementById("addTaskButton");
const tasks = document.getElementById("tasks");
const tabs = document.querySelector(".tabs");

function savedToDos() {
  localStorage.setItem("savedToDos", tasks.innerHTML);
}

function loadToDos() {
  let data = localStorage.getItem("savedToDos");
  if (data) {
    tasks.innerHTML = data;
  }
}

function removeClass(array, rClass) {
  for (let item of array) {
    item.classList.remove(rClass);
  }
}

function addClass(array, aClass) {
  for (let item of array) {
    item.classList.add(aClass);
  }
}

function getSearchResult(e) {
  let tabActive = document.querySelector(".tab--active");
  let tasksAll = document.querySelectorAll(".task");
  let tasksActive = document.querySelectorAll(".task--active");
  let tasksDone = document.querySelectorAll(".task--done");

  function getSearchResult(e, tabActive) {
    for (let task of tabActive) {
      if (
        !task.querySelector("span").textContent.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        task.classList.add("display--none");
      } else {
        task.classList.remove("display--none");
      }
    }
  }

  if (tabActive.textContent === "Active") {
    getSearchResult(e, tasksActive);
  } else if (tabActive.textContent === "Done") {
    getSearchResult(e, tasksDone);
  } else {
    getSearchResult(e, tasksAll);
  }
}

function switchTabs(e) {
  let siblings = document.querySelectorAll(".tab");
  let tab = e.target.closest(".tab");

  if (e.target.classList.contains("tab")) {
    removeClass(siblings, "tab--active");
    tab.classList.add("tab--active");
  }

  let tabActive = document.querySelector(".tab--active");
  let tasksAll = document.querySelectorAll(".task");
  let tasksActive = document.querySelectorAll(".task--active");
  let tasksDone = document.querySelectorAll(".task--done");
  let addTask = document.querySelectorAll(".add-task__wrapper");

  if (tabActive.textContent === "Active") {
    removeClass(tasksAll, "display--none");
    addClass(tasksDone, "display--none");
    removeClass(addTask, "display--none");
  } else if (tabActive.textContent === "Done") {
    removeClass(tasksAll, "display--none");
    addClass(tasksActive, "display--none");
    addClass(addTask, "display--none");
  } else {
    removeClass(tasksAll, "display--none");
    removeClass(addTask, "display--none");
  }
}

function addTask() {
  let task = document.createElement("li");
  let textTask = document.createElement("span");
  let newTask = document.getElementById("newTask");
  let markImportant = document.createElement("button");
  let remove = document.createElement("button");

  if (newTask.value != "") {
    task.className = "task task--active";
    markImportant.className = "task__btn-important task__btn-important--yes";
    remove.className = "task__btn-remove";
    textTask.textContent = newTask.value;
    tasks.prepend(task);
    task.prepend(textTask);
    newTask.value = "";
    task.setAttribute("tabindex", "0");
    task.append(markImportant);
    markImportant.textContent = "MARK IMPORTANT";
    markImportant.setAttribute("type", "button");
    markImportant.setAttribute("tabindex", "0");
    task.append(remove);
    remove.setAttribute("type", "button");
    remove.setAttribute("tabindex", "0");
    savedToDos();
  }
}

function taskManagement(e) {
  const task = e.target.closest(".task");
  const markImportant = e.target.closest(".task__btn-important");
  const remove = e.target.closest(".task__btn-remove");
  if (task && !markImportant && !remove) {
    task.classList.toggle("task--done");
    task.classList.toggle("task--active");
  } else if (markImportant) {
    markImportant.classList.toggle("task__btn-important--not");
    markImportant.classList.toggle("task__btn-important--yes");
    if (markImportant.textContent == "MARK IMPORTANT") {
      markImportant.textContent = "NOT IMPORTANT";
    } else {
      markImportant.textContent = "MARK IMPORTANT";
    }
    task.classList.toggle("task--important");
  } else if (remove) {
    task.classList.add("task--delete");
    setTimeout(() => task.remove(), 500);
  } else {
    return;
  }
  taskStateSwitch();
  setTimeout(() => savedToDos(), 750);
}

function taskStateSwitch() {
  let tasksDone = document.querySelectorAll(".task--done > .task__btn-important");
  let tasksActive = document.querySelectorAll(".task--active > .task__btn-important");

  addClass(tasksDone, "display--none");
  removeClass(tasksActive, "display--none");
}

document.addEventListener("DOMContentLoaded", loadToDos);
searchTasks.addEventListener("input", getSearchResult);
searchTasks.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getSearchResult(e);
    e.preventDefault();
  }
});
tabs.addEventListener("click", switchTabs);
tabs.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    switchTabs(e);
  }
});
newTask.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
    e.preventDefault();
  }
});
addTaskButton.addEventListener("click", addTask);
tasks.addEventListener("click", taskManagement);
tasks.addEventListener("keypress", function (e) {
  const task = e.target.closest(".task");
  const markImportant = e.target.closest(".task__btn-important");
  const remove = e.target.closest(".task__btn-remove");
  if (!markImportant && !remove && e.key === "Enter") {
    task.classList.toggle("task--done");
    task.classList.toggle("task--active");
    taskStateSwitch();
    savedToDos();
  }
});
