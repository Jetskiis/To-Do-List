
import Project from "./ProjectManager.js";

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
  /*     addTaskButton.addEventListener() */
}

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

  submitBoxes.forEach((input) =>
    input.addEventListener("click", (e) => {
      e.preventDefault();
      if (input.value === "Add" && inputField.value != "") {
        let inputValue = document.querySelector("input[type=text]").value;
        let currentId = projectsDatabase.projectsList.length;
        projectsDatabase.addProject(inputValue);
        insertProjectDiv(inputValue,currentId);
        div.remove("new-project-card");
      } else if (inputField.value == "" && input.value != "Cancel") {
        alert("Name must be at least 1 character");
      } else {
        div.remove("new-project-card");
      }
    })
  );
}


function insertProjectDiv(name,id) {
    let div = document.createElement("button");
    div.innerHTML=`
    <li>
    ${name}
    </li>
    `;
    div.classList.add("projects-children");
    div.setAttribute('id',`${id}`);
    div.addEventListener("click",displayProjectDiv);
    projectsDiv.querySelector("ul").appendChild(div);
}

function displayProjectDiv(id) {
  let idValue = id.target.getAttribute('id');
  let project = (projectsDatabase.projectsList[idValue]);
  
  //console.log(project);
}

function renderToDoList() {

}





