const API = "http://localhost:5000/api/tasks";

const form = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

const taskIdInput = document.getElementById("taskId");
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const statusInput = document.getElementById("status");

/* ---------------- READ TASKS ---------------- */
async function getTasks() {
  const res = await fetch(API);
  const tasks = await res.json();

  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");

    const statusClass =
      task.status === "Pending"
        ? "pending"
        : task.status === "In Progress"
        ? "in-progress"
        : "completed";

    li.innerHTML = `
      <div class="task-title">${task.title}</div>

      <div class="task-desc">
        ${task.description ? task.description : ""}
      </div>

      <span class="badge ${statusClass}">
        ${task.status}
      </span>

      <div class="actions">
        <button class="edit-btn" onclick="loadTaskForEdit('${task._id}')">
          Edit
        </button>
        <button class="delete-btn" onclick="deleteTask('${task._id}')">
          Delete
        </button>
      </div>
    `;

    taskList.appendChild(li);
  });
}

/* ---------------- LOAD TASK FOR EDIT ---------------- */
async function loadTaskForEdit(id) {
  const res = await fetch(API);
  const tasks = await res.json();
  const task = tasks.find(t => t._id === id);

  taskIdInput.value = task._id;
  titleInput.value = task.title;
  descriptionInput.value = task.description;
  statusInput.value = task.status;

  // UI polish
  form.classList.add("editing");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ---------------- CREATE / UPDATE ---------------- */
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const taskData = {
    title: titleInput.value.trim(),
    description: descriptionInput.value.trim(),
    status: statusInput.value
  };

  if (taskIdInput.value) {
    // UPDATE
    await fetch(`${API}/${taskIdInput.value}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(taskData)
    });
  } else {
    // CREATE
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(taskData)
    });
  }

  // Reset UI
  form.reset();
  taskIdInput.value = "";
  form.classList.remove("editing");

  getTasks();
});

/* ---------------- DELETE ---------------- */
async function deleteTask(id) {
  const confirmDelete = confirm("Delete this task?");
  if (!confirmDelete) return;

  await fetch(`${API}/${id}`, {
    method: "DELETE"
  });

  getTasks();
}

// Initial load
getTasks();
