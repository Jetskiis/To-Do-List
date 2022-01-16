import { todayHandler, upcomingHandler } from "./logic.js";
import { renderToDoList } from "./render.js";
import {
  inboxDatabase,
  projectsDatabase,
  todayDatabase,
  upcomingDatabase,
} from "./UI.js";

export function storeData() {
  localStorage.setItem("projectsDatabase", JSON.stringify(projectsDatabase));
  localStorage.setItem("inboxDatabase", JSON.stringify(inboxDatabase));
  localStorage.setItem("todayDatabase", JSON.stringify(todayDatabase));
  localStorage.setItem("upcomingDatabase", JSON.stringify(upcomingDatabase));
}

export function loadData() {
  renderToDoList(inboxDatabase,null,"Inbox");
}

