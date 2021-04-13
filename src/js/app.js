import "../scss/app.scss";

/* function add task */
document.getElementById("add-task__button").onclick = function () {
  let tasks = document.getElementById("tasks");
  let task = document.createElement("li");
  let textTask = document.createElement("span");
  let markImportant = document.createElement("button");
  let remove = document.createElement("button");
  task.className = "task task--active";
  markImportant.className = "task__markImportant";
  remove.className = "task__remove";
  textTask.textContent = document.getElementById("newTask").value;
  document.getElementById("newTask").value = "";
  tasks.append(task);
  task.prepend(textTask);
  task.append(markImportant);
  markImportant.textContent = "MARK IMPORTANT";
  markImportant.setAttribute("type", "button");
  task.append(remove);
  remove.setAttribute("type", "button");
};

/* function remove task,  mark important, active(done) task */
document.getElementById("tasks").onclick = function (e) {
  if (e.target.classList.contains("task__remove")) {
    let task = e.target.closest(".task");
    task.remove();
  } else if (e.target.classList.contains("task__markImportant")) {
    let markImportant = e.target.closest(".task__markImportant");
    markImportant.classList.toggle("task__markImportant--not");
    markImportant.textContent == "MARK IMPORTANT"
      ? (markImportant.textContent = "NOT IMPORTANT")
      : (markImportant.textContent = "MARK IMPORTANT");
    let task = e.target.closest(".task");
    task.classList.toggle("task--important");
  } else {
    let task = e.target.closest(".task");
    task.classList.toggle("task--done");
    task.classList.toggle("task--active");
  }
  return;
};

document.querySelector(".tabs").onclick = function (e) {
  let tab = e.target.closest(".tab");
  let siblings = document.querySelectorAll(".tab");
  for (let i = 0, sibling; (sibling = siblings[i]); i++) {
    sibling.classList.remove("tab--active");
  }
  tab.classList.add("tab--active");
};

// Когда мы устанавливаем обработчик событий на объект document, мы всегда должны использовать метод addEventListener,
// а не document.on<событие>, т.к. в случае последнего могут возникать конфликты: новые обработчики будут перезаписывать уже существующие.
