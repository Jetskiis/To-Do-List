import Project from "./projectManager.js";
import { renderToDoList } from "./render.js";
import { toDoItem } from "./toDoList.js";

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
  <form method="post">

  <h3>Add Task</h3>

  <input type="text" name="name" id="add-task-name" placeholder="Name">
  <input type="text" name="desc" id="add-task-desc" placeholder="Description">
  <span>
  <input type="date" name="date" id="add-task-date">
  <select name="priority" id="add-task-priority">
    <option value="">Select Task Priority</option>
    <option value="High"> High </option>
    <option value="Medium"> Medium </option>
    <option value="Low"> Low </option>
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

        let form = newTaskDiv.querySelector("form");
        let name = form.elements["name"].value;
        let desc = form.elements["desc"].value;
        let date = form.elements["date"].value;
        let priority = form.elements["priority"].value;

        const currentlySelected = tabContainer
          .querySelector(".selected")
          .getAttribute("id");

        //currentlySelected is a project, add new task to project
        if (!isNaN(currentlySelected)) {
          //console.log(currentlySelected);
          const currentProject =
            projectsDatabase.projectsList[currentlySelected];
          const objName = Object.keys(currentProject)[0];

          let toDoList = currentProject[objName];
          let toDoTask = new toDoItem(name, desc, date, priority);
          toDoList.newItem(toDoTask);

          renderToDoList(projectsDatabase, currentlySelected, "Project");
          //console.log(toDoList);
        }

        //currentlySelected is Inbox/Today/Upcoming
        else {
        }

        button.style.display = "inline-block";
      } else if (inputField.value == "" && input.value != "Cancel") {
        alert("Name must be at least 1 character");
      }
      //cancel
      else {
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
      }
      //cancel
      else {
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
  //console.log(e)
  let selectedDiv = e;
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
  if (e.target.nodeName == "I") {
    e = e.target.parentElement;
    resetButtons(e);
  } else {
    resetButtons(e.target);
  }
}

function displayTodayDiv(e) {
  if (e.target.nodeName == "I") {
    e = e.target.parentElement;
    resetButtons(e);
  } else {
    resetButtons(e.target);
  }
}

function displayUpcomingDiv(e) {
  if (e.target.nodeName == "I") {
    e = e.target.parentElement;
    resetButtons(e);
  } else {
    resetButtons(e.target);
  }
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
