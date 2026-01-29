/* ----------------------------------
   Bells & Whistles CRUD Prototype
   Phase 1 – Frontend Only
----------------------------------- */
console.log("crud.js is working");

// ===== Globals =====
const STORAGE_KEY = "bw_projects";
const CURRENT_USER = { id: "demo_user" };

let editingProjectId = null;

// ===== DOM Elements =====
const addProjectBtn = document.getElementById("addProjectBtn");
const addProjectFormContainer = document.getElementById("addProjectFormContainer");
const addProjectForm = document.getElementById("addProjectForm");
const projectTableBody = document.getElementById("projectTableBody");
const submitProjectBtn = document.getElementById("submitProjectBtn");

const cancelAddProjectsBtn = document.getElementById("cancelAddProjectBtn");


cancelAddProjectBtn.addEventListener("click", () => {
  editingProjectId = null;
  addProjectForm.reset();
  document.querySelector("#addProjectFormContainer h2").textContent =
    "Add New Project";
  addProjectFormContainer.classList.add("hidden");
  submitProjectBtn.textContent = "Create Project";
});

// ===== Data Model =====
function createProject({ title, description = "", status = "active", notes = "" }) {
  const now = new Date().toISOString();

  return {
    id: `proj_${Date.now()}`,
    ownerId: CURRENT_USER.id,
    title,
    description,
    status, // new | draft | active | archived
    notes,
    createdAt: now,
    updatedAt: now
  };
}

// ===== Utilities =====
function loadProjects() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveProjects(projects) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/[&<>"']/g, m => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[m]);
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString();
}

// ===== Render Table =====
function renderProjects() {
  const projects = loadProjects();
  projectTableBody.innerHTML = "";

  if (projects.length === 0) {
    projectTableBody.innerHTML = `
      <tr>
        <td colspan="5" class="empty-state">No projects yet.</td>
      </tr>
    `;
    return;
  }

  projects.forEach(project => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${escapeHtml(project.title)}</td>
      <td>${project.status}</td>
      <td>${formatDate(project.updatedAt)}</td>
      <td>${project.notes ? "✔️" : ""}</td>
      <td>
        <button class="btn-secondary editBtn">Edit</button>
        <button class="btn-danger deleteBtn">Delete</button>
      </td>
    `;

    // Edit
    row.querySelector(".editBtn").addEventListener("click", () => {
      handleEditProject(project.id);
    });

    // Delete
    row.querySelector(".deleteBtn").addEventListener("click", () => {
      if (confirm("Delete this project?")) {
        deleteProject(project.id);
      }
    });

    projectTableBody.appendChild(row);
  });
}

// ===== Add Project Button =====
addProjectBtn.addEventListener("click", () => {
  editingProjectId = null;

  document.querySelector("#addProjectFormContainer h2").textContent =
    "Add New Project";

  addProjectForm.reset();
  addProjectFormContainer.classList.remove("hidden");
});

// ===== Handle Edit Project =====
function handleEditProject(projectId) {
   
  const projects = loadProjects();
  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  editingProjectId = projectId;

  document.querySelector("#addProjectFormContainer h2").textContent =
    "Edit Project";

  addProjectFormContainer.classList.remove("hidden");

  // Prefill form
  document.getElementById("projectTitle").value = project.title;
  document.getElementById("projectDescription").value = project.description;
  document.getElementById("projectStatus").value = project.status;
  document.getElementById("projectNotes").value = project.notes || "";

  submitProjectBtn.textContent = "Save";
}

// ===== Delete =====
function deleteProject(projectId) {
  let projects = loadProjects();
  projects = projects.filter(p => p.id !== projectId);
  saveProjects(projects);
  renderProjects();
}

// ===== Submit Add / Edit =====
addProjectForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("projectTitle").value.trim();
  const description = document.getElementById("projectDescription").value.trim();
  const status = document.getElementById("projectStatus").value;
  const notes = document.getElementById("projectNotes").value.trim();

  if (!title) {
    alert("Title cannot be empty.");
    return;
  }

  const now = new Date().toISOString();
  let projects = loadProjects();

  if (editingProjectId) {
    // EDIT
    const project = projects.find(p => p.id === editingProjectId);
    if (!project) return;

    project.title = title;
    project.description = description;
    project.status = status;
    project.notes = notes;
    project.updatedAt = now;

    editingProjectId = null;
  } else {
    // ADD
    const newProject = createProject({
    title,
    description,
    status,
    notes
});
projects.push(newProject);
       
}

  saveProjects(projects);
  addProjectForm.reset();
  addProjectFormContainer.classList.add("hidden");
  renderProjects();
});

// ===== Init =====
renderProjects();
