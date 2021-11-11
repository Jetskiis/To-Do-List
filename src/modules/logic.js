import { format, isSameWeek } from "date-fns";
import { deleteTaskPopup, render } from "./render.js";

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
          render(toDoItem, "project");
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
          render(toDoItem, "inbox");
        }
      }
    }
  }

  //handles todayDatabse
  const todayObj = todayDatabase.projectsList[0];
  const toDoList = todayObj.Today;

  for (const element of toDoList.getItems()) {
    render(element, "today");
  }

  const deleteButtonArr = mainToDo.querySelectorAll(".delete");
  const editButtonArr = mainToDo.querySelectorAll(".edit");

  //deletes task but if task is part of inbox/project it tells the user to go to project/inbox to delete
  deleteButtonArr.forEach((element) => {
    element.addEventListener("click", (e) => deleteTaskPopup(e, todayDatabase));
  });

  /*       editButtonArr.forEach((element) => {
        element.addEventListener("click",);
      }) */

  name.textContent = "Today's Tasks";
}

//handles logic for UPCOMING
export function upcomingHandler(
  upcomingDatabase,
  inboxDatabase,
  projectsDatabase
) {
  //clears all task elements so that it can be re-rendered
  const toDoListDivs = mainToDo.querySelectorAll(".task");
  toDoListDivs.forEach((element) => element.remove());

  let currentDate = new Date();

  //handles projectDatabase
  for (const obj of projectsDatabase.projectsList) {
    for (const project in obj) {
      //todo list class
      let toDoList = obj[project];
      for (const toDoItem of toDoList.items) {
        let projectDate = toDoItem.getDueDate();
        let month = projectDate.split("/")[0];
        let day = projectDate.split("/")[1];
        let year = projectDate.split("/")[2];

        projectDate = new Date(year, month - 1, day);

        if (isSameWeek(currentDate, projectDate)) {
          render(toDoItem, "project");
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
        let projectDate = toDoItem.getDueDate();
        let month = projectDate.split("/")[0];
        let day = projectDate.split("/")[1];
        let year = projectDate.split("/")[2];

        projectDate = new Date(year, month - 1, day);

        if (isSameWeek(currentDate, projectDate)) {
          render(toDoItem, "inbox");
        }
      }
    }
  }

  //handles upcomingDatabase
  const upcomingObj = upcomingDatabase.projectsList[0];
  const toDoList = upcomingObj.Upcoming;

  for (const element of toDoList.getItems()) {
    render(element, "upcoming");
  }

  const deleteButtonArr = mainToDo.querySelectorAll(".delete");
  const editButtonArr = mainToDo.querySelectorAll(".edit");

  //deletes task but if task is part of inbox/project it tells the user to go to project/inbox to delete
  deleteButtonArr.forEach((element) => {
    element.addEventListener("click", (e) =>
      deleteTaskPopup(e, upcomingDatabase)
    );
  });

  /*       editButtonArr.forEach((element) => {
        element.addEventListener("click",);
      }) */

  name.textContent = "This Week's Tasks";
}
