  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");
  const emptyMessage = document.getElementById("emptyMessage");

  function updateEmptyMessage() {
    emptyMessage.style.display = taskList.children.length === 0 ? "block" : "none";
  }

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") { alert("Please enter a task before adding."); return; }

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.className = "taskText";
    span.textContent = taskText;

    const btnGroup = document.createElement("div");

    const completeBtn = document.createElement("button");
    completeBtn.className = "completeBtn";
    completeBtn.textContent = "Complete";
    completeBtn.addEventListener("click", () => li.classList.toggle("completed"));

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(li);
      updateEmptyMessage();
    });

    btnGroup.appendChild(completeBtn);
    btnGroup.appendChild(deleteBtn);
    li.appendChild(span);
    li.appendChild(btnGroup);
    taskList.appendChild(li);

    taskInput.value = "";
    updateEmptyMessage();
  }

  addTaskBtn.addEventListener("click", addTask);
  taskInput.addEventListener("keydown", (e) => { if (e.key === "Enter") addTask(); });

  updateEmptyMessage();