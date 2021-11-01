import Project from "./projectManager.js";
import { renderToDoList } from "./render.js";

const mainContainer = document.querySelector(".main-container");
const tabContainer = document.querySelector("#tab-container");

const inbox = document.querySelector("#inbox");
const today = document.querySelector("#today");
const upcoming = document.querySelector("#upcoming");
const projectsSlider = document.querySelector("#projects-slider");
const addProjectButton = document.querySelector("#add-project");
const addTaskButton = document.querySelector("#add-task");

let projectsDatabase = new Project();
let projectsDiv = document.querySelector("#projects-body");

//inbox is selected by default
inbox.classList.add("selected");

//adds event listeners to all clickable buttons
export function addEventListeners() {
  inbox.addEventListener("click", displayInboxDiv);
  today.addEventListener("click", displayTodayDiv);
  upcoming.addEventListener("click", displayUpcomingDiv);
  projectsSlider.addEventListener("click", displayProjectList);
  addProjectButton.addEventListener("click", newProjectPrompt);
  addTaskButton.addEventListener("click", addTask);
}

//add new task to current to do list selection
function addTask(e) {
  let button = e.target;
  let dimensions = button.getBoundingClientRect();
  let div = document.createElement("div");
  let parent = document.querySelector("#main-todo");

  div.innerHTML = `
  <form>

  <h3>Add Task</h3>

  <input type="text" name="name" id="add-task-name" placeholder="Name">
  <input type="text" name="name" id="add-task-desc" placeholder="Description">
  <span>
  <input type="date" name="date" id="add-task-date">
  <select name="priority" id="add-task-priority">
    <option value="">Select Task Priority</option>
    <option value="high"> High </option>
    <option value="medium"> Medium </option>
    <option value="low"> Low </option>
  </select>
  </span>


  <span>
  <input type="submit" value="Add">
  <input type="submit" value="Cancel">
  </span>

  </form>
`;

  button.style.display = "none";
  div.style.x = dimensions.x;
  div.style.y = dimensions.y;
  div.classList.add("new-task");

  parent.appendChild(div);

  let newTaskDiv = document.querySelector(".new-task");
  let inputField = newTaskDiv.querySelector("#add-task-name");
  let submitBoxes = newTaskDiv.querySelectorAll("input[type=submit]");

  //checks user input
  submitBoxes.forEach((input) =>
    input.addEventListener("click", (e) => {
      e.preventDefault();
      if (input.value === "Add" && inputField.value != "") {
        div.remove();
        button.style.display = "inline-block";
      } else if (inputField.value == "" && input.value != "Cancel") {
        alert("Name must be at least 1 character");
      } else {
        div.remove();
        button.style.display = "inline-block";
      }
    })
  );
}

//prompts the user to add a new project
function newProjectPrompt() {
  let div = document.createElement("div");

  div.innerHTML = `
        <h3>Add Project</h3>
        <div>
        <form>
        <label for="add-project-name"><h4>Name</h4></label>
        <input type="text" name="name" id="add-project-name">
        <input type="submit" value="Add">
        <input type="submit" value="Cancel">
        </form>
        </div>
    `;

  div.classList.add("new-project-card");
  mainContainer.appendChild(div);

  let newProjectCard = document.querySelector(".new-project-card");
  let inputField = newProjectCard.querySelector("input[type=text]");
  let submitBoxes = newProjectCard.querySelectorAll("input[type=submit]");

  //checks user input
  submitBoxes.forEach((input) =>
    input.addEventListener("click", (e) => {
      e.preventDefault();
      if (input.value === "Add" && inputField.value != "") {
        let inputValue = document.querySelector("input[type=text]").value;
        let currentId = projectsDatabase.projectsList.length;
        projectsDatabase.addProject(inputValue);
        insertProjectDiv(inputValue, currentId);
        div.remove();
      } else if (inputField.value == "" && input.value != "Cancel") {
        alert("Name must be at least 1 character");
      } else {
        div.remove();
      }
    })
  );
}

//adds the new project to sidebar
function insertProjectDiv(name, id) {
  let li = document.createElement("li");
  let button = document.createElement("button");
  li.appendChild(button);
  button.innerHTML = `
    &#9642 ${name}
    `;
  button.classList.add("projects-children");
  button.setAttribute("id", `${id}`);
  button.addEventListener("click", displayProjectDiv);
  projectsDiv.querySelector("ul").appendChild(li);
}

//reset selections
function resetButtons(e) {
  let selectedDiv = e.target;
  let buttons = tabContainer.querySelectorAll("button");

  buttons.forEach((button) => {
    button.classList.remove("selected");
  });
  selectedDiv.classList.add("selected");
}

//calls function to display PROJECTS
function displayProjectDiv(e) {
  let selectedDiv = e.target;
  let idValue = e.target.getAttribute("id");
  let buttons = tabContainer.querySelectorAll("button");

  buttons.forEach((button) => {
    button.classList.remove("selected");
  });
  selectedDiv.classList.add("selected");

  renderToDoList(projectsDatabase, idValue, "Project");
}

function displayInboxDiv(e) {
  resetButtons(e);
}

function displayTodayDiv(e) {
  resetButtons(e);
}

function displayUpcomingDiv(e) {
  resetButtons(e);
}

function displayProjectList(e) {}

/* function renderToDoList(type,id) {
  if (type == "Project"){
  render()
  }
  else if (type == "Today"){

  }
  else if (type =="Inbox"){

  }
  else if (type == "Upcoming") {
    
  }
} */
