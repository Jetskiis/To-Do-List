import Project from "./projectManager.js";
import {inboxHandler, todayHandler} from "./logic.js";
import { renderToDoList } from "./render.js";

const mainContainer = document.querySelector(".main-container");

const inbox = document.querySelector("#inbox");
const today = document.querySelector("#today");
const upcoming = document.querySelector("#upcoming");
const projectsSlider = document.querySelector("#project-slider");
const addProjectButton = document.querySelector("#add-project");
const addTaskButton = document.querySelector("#add-task");

let projectsDatabase = new Project();
let projectsDiv = document.querySelector("#projects-body");

//adds event listeners to all clickable buttons
export function addEventListeners() {
  /*     inbox.addEventListener()
    today.addEventListener()
    upcoming.addEventListener()
    projectsSlider.addEventListener() */
  addProjectButton.addEventListener("click", newProjectPrompt);
  addTaskButton.addEventListener("click", addTask);
}

//add new task to current to do list selection
function addTask() {}

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
        div.remove("new-project-card");
      } else if (inputField.value == "" && input.value != "Cancel") {
        alert("Name must be at least 1 character");
      } else {
        div.remove("new-project-card");
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

//calls function to display PROJECTS
function displayProjectDiv(id) {
  let idValue = id.target.getAttribute("id");
  renderToDoList(idValue, "Project");
  //console.log(project);
}




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
