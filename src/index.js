document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById("create-task-form");
  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userInput = document.getElementById("new-task-description").value;
    const newTask = document.createElement("li");
    newTask.innerText = userInput;
    const taskList = document.getElementById("tasks");
    taskList.appendChild(newTask);
  });
});
