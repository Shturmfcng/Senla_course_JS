import "../scss/app.scss";

function addTask() {
  let task = document.createElement("li");
  task.className = "task";
  task.innerHTML = "";
  tasks.append(task);
}

button.addEventListener("click", addTask);
