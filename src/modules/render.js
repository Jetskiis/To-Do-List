import { addPageLock, removePageLock } from "./UI.js";

const mainContainer = document.querySelector(".main-container");
const mainToDo = document.querySelector("#main-todo");
let name = mainToDo.querySelector("h2");
const button = mainToDo.querySelector("#add-task");

//renders to do list for INBOX/TODAY/PROJECTS
export function renderToDoList(projectList, id, type) {
  const database = projectList;

  //clears all task elements so that it can be re-rendered
  const toDoListDivs = mainToDo.querySelectorAll(".task");
  toDoListDivs.forEach((element) => element.remove());

  if (type == "Project") {
    let project = database.projectsList[id];
    let projectName = Object.keys(project)[0];
    let toDoList = project[projectName];

    for (const element of toDoList.getItems()) {
      let div = document.createElement("div");
      div.innerHTML = `
      <div class="top">
      <i class="far fa-circle delete"></i>
      <span> ${element.getTitle()}</span>
      <span >Due Date: ${element.getDueDate()}  </span>
      <span> Priority: ${
        element.getPriority() != "" ? element.getPriority() : "None"
      }  </span>
      <i class="fas fa-bars edit"></i>
      </div>

      <div class="bottom">
      Description: ${element.getDescription()}
      </div>
      `;

      div.classList.add("task");
      mainToDo.insertBefore(div, button);
    }

    name.textContent = projectName;
  } else if (type == "Inbox") {
    const inboxObj = database.projectsList[0];
    const toDoList = inboxObj.Inbox;

    for (const element of toDoList.getItems()) {
      let div = document.createElement("div");
      div.innerHTML = `
      <div class="top">
      <i class="far fa-circle delete"></i>
      <span> ${element.getTitle()}</span>
      <span >Due Date: ${element.getDueDate()}  </span>
      <span> Priority: ${
        element.getPriority() != "" ? element.getPriority() : "None"
      }  </span>
      <i class="fas fa-bars edit"></i>
      </div>

      <div class="bottom">
      Description: ${element.getDescription()}
      </div>
      `;

      div.classList.add("task");
      mainToDo.insertBefore(div, button);
    }

    name.textContent = "Inbox";
  }

  const deleteButtonArr = mainToDo.querySelectorAll(".delete");
  const editButtonArr = mainToDo.querySelectorAll(".edit");

  deleteButtonArr.forEach((element) => {
    element.addEventListener("click", (e) => deleteTaskPopup(e, database));
  });

  /*       editButtonArr.forEach((element) => {
        element.addEventListener("click",);
      }) */
}

function deleteTaskPopup(e, database) {
  //create prompt for user to confirm/deny deleting a task
  let originalElement = e;
  let popup = document.createElement("div");
  popup.innerHTML = `
    <h3>Delete Task?</h3>
    <span>     
    <input type="submit" value="Yes">
    <input type="submit" value="No">
    </span>
  `;

  popup.classList.add("delete-task-popup");
  mainContainer.appendChild(popup);
  popup.style["z-index"] = "2";
  addPageLock();

  let inputs = document
    .querySelector(".delete-task-popup")
    .querySelectorAll("input[type=submit]");

  inputs.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      if (element.value == "Yes") {
        deleteTask(originalElement, database);
        popup.remove();
        removePageLock();
      } else {
        popup.remove();
        removePageLock();
      }
    });
  });
}

function deleteTask(e, database) {
  let selected = document.querySelector(".selected");
  let target = e.target;
  const toDoArr = mainToDo.querySelectorAll(".task");

  //delete project task
  if (selected.classList.contains("projects-children")) {
    let id = selected.getAttribute("id");
    let project = database.getProjects()[id];
    let projectName = Object.keys(project)[0];
    let toDoList = project[projectName];

    let newToDoArr = Array.from(toDoArr);
    let indexOfSelectedElement = newToDoArr.findIndex(
      (element) => element == target.parentElement.parentElement
    );
    toDoList.removeItem(indexOfSelectedElement);
    target.parentElement.parentElement.remove();
  }

  //delete inbox task
  else if (selected.getAttribute("id") == "inbox") {
    const inboxObj = database.projectsList[0];
    const toDoList = inboxObj.Inbox;

    let newToDoArr = Array.from(toDoArr);
    let indexOfSelectedElement = newToDoArr.findIndex(
      (element) => element == target.parentElement.parentElement
    );
    toDoList.removeItem(indexOfSelectedElement);
    target.parentElement.parentElement.remove();
  }
}
