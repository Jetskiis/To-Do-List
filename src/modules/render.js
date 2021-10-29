//renders to do list for INBOX/TODAY/PROJECTS
export function renderToDoList(id, type) {
    let main = document.querySelector("#main-todo");
    let name = main.querySelector("h2");
    let button = main.querySelector("#add-task");
  
    if (type == "Project") {
      let project = projectsDatabase.projectsList[id];
      let projectName = Object.keys(project)[0];
      let toDoList = projectsDatabase.projectsList[id][projectName];
  
      name.textContent = projectName;
  
    }
  }
  