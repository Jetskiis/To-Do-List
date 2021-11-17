import { format, isSameWeek } from "date-fns";
import { deleteTaskPopup, render } from "./render.js";
import { toDoItem } from "./toDoList.js";
import { editTask, insertProjectDiv } from "./UI.js";

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

  editButtonArr.forEach((element) => {
    element.addEventListener("click", editTask);
  });

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

  editButtonArr.forEach((element) => {
    element.addEventListener("click", editTask);
  });

  name.textContent = "This Week's Tasks";
}

//conversts stored localStorage string to JSON use .parse and covnerts that to a Project/ToDoList/ToDoItem class accordingly
export function toClass(type, database, string) {
  let obj = JSON.parse(string);

  if (type == "Inbox") {
    let items = database.projectsList[0].Inbox.items;
    let objInbox = obj.projectsList[0].Inbox;
    let objInboxItems = objInbox.items;
    for (const element of objInboxItems) {
      let date = element._dueDate;
      if (date != "None") {
        let month = date.split("/")[0];
        let day = date.split("/")[1];
        let year = date.split("/")[2];
        date = `${year}-${month}-${day}`;
      } else {
        date = "";
      }

      let newToDo = new toDoItem(
        element._title,
        element._description,
        date,
        element._priority
      );
      items.push(newToDo);
    }
  } else if (type == "Today") {
    let items = database.projectsList[0].Today.items;
    let objToday = obj.projectsList[0].Today;
    let objTodayItems = objToday.items;
    for (const element of objTodayItems) {
      let date = element._dueDate;
      let month = date.split("/")[0];
      let day = date.split("/")[1];
      let year = date.split("/")[2];
      date = `${year}-${month}-${day}`;

      let newToDo = new toDoItem(
        element._title,
        element._description,
        date,
        element._priority
      );
      items.push(newToDo);
    }
  } else if (type == "Upcoming") {
    let items = database.projectsList[0].Upcoming.items;
    let objUpcoming = obj.projectsList[0].Upcoming;
    let objUpcomingItems = objUpcoming.items;
    for (const element of objUpcomingItems) {
      let date = element._dueDate;
      let month = date.split("/")[0];
      let day = date.split("/")[1];
      let year = date.split("/")[2];
      date = `${year}-${month}-${day}`;

      let newToDo = new toDoItem(
        element._title,
        element._description,
        date,
        element._priority
      );
      items.push(newToDo);
    }
  } else if (type == "Project") {
    let items = database.projectsList;
    let objProject = obj.projectsList;
    for (const [id,proj] of objProject.entries()) {
      let key = Object.keys(proj);
      database.addProject(key);
      insertProjectDiv(key,id);
      for (const task of proj[key].items) {
        let date = task._dueDate;
        if (date != "None") {
          let month = date.split("/")[0];
          let day = date.split("/")[1];
          let year = date.split("/")[2];
          date = `${year}-${month}-${day}`;
        } else {
          date = "";
        }

        let newToDo = new toDoItem(
          task._title,
          task._description,
          date,
          task._priority
        );
        items[id][key].newItem(newToDo);
      }
    }
  }
}
