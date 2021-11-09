import { format } from "date-fns";
import { render } from "./render.js";
import { deleteTask, deleteTaskPopup } from "./render.js";

const mainContainer = document.querySelector(".main-container");
const mainToDo = document.querySelector("#main-todo");
let name = mainToDo.querySelector("h2");
const button = mainToDo.querySelector("#add-task");

//handles logic for TODAY
export function todayHandler(todayDatabase, inboxDatabase, projectsDatabase) {
  //clears all task elements so that it can be re-rendered
  const toDoListDivs = mainToDo.querySelectorAll(".task");
  toDoListDivs.forEach((element) => element.remove());

  let currentDate = format(new Date(), "MM/dd/yyyy");
  //handles projectDatabase
  for (const obj of projectsDatabase.projectsList) {
    for (const project in obj) {
      //todo list class
      let toDoList = obj[project];
      for (const toDoItem of toDoList.items) {
        if (toDoItem.getDueDate() == currentDate) {
          render(toDoItem,"project");
        }
      }
    }
  }

  //handles inboxDatabase
  for (const obj of inboxDatabase.projectsList) {
    for (const project in obj) {
      //todo list class
      let toDoList = obj[project];
      for (const toDoItem of toDoList.items) {
        if (toDoItem.getDueDate() == currentDate) {
          render(toDoItem,"inbox");
        }
      }
    }
  }

  //handles todayDatabse
  const todayObj = todayDatabase.projectsList[0];
  const toDoList = todayObj.Today;

  for (const element of toDoList.getItems()) {
    render(element,"today");
  }

  const deleteButtonArr = mainToDo.querySelectorAll(".delete");
  const editButtonArr = mainToDo.querySelectorAll(".edit");

  deleteButtonArr.forEach((element) => {
    element.addEventListener("click", (e) => deleteTaskPopup(e, todayDatabase));
  });

  /*       editButtonArr.forEach((element) => {
        element.addEventListener("click",);
      }) */

  //deletes task but if task is part of inbox/project it tells the user to go to project/inbox to delete
  name.textContent = "Today";
}

//handles logic for UPCOMING
export function upcomingHandler(
  upcomingDatabse,
  inboxDatabase,
  projectsDatabase
) {}
