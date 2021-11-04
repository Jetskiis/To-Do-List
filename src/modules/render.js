//renders to do list for INBOX/TODAY/PROJECTS
export function renderToDoList(projectList, id, type) {
  let main = document.querySelector("#main-todo");
  let name = main.querySelector("h2");
  let button = main.querySelector("#add-task");

  //clears all task elements so that it can be re-rendered
  const toDoListDivs = main.querySelectorAll(".task");
  toDoListDivs.forEach((element) => element.remove());

  if (type == "Project") {
    const projectsDatabase = projectList;
    let project = projectsDatabase.projectsList[id];
    let projectName = Object.keys(project)[0];
    //toDoList class
    let toDoList = project[projectName];

    for (const element of toDoList.getItems()) {
      let div = document.createElement("div");
      div.innerHTML = `
      <div class="top">
      <i class="far fa-circle"></i>
      <span> ${element.getTitle()}</span>
      <span >Due Date: ${element.getDueDate()}  </span>
      <span> Priority: ${element.getPriority()}  </span>
      <i class="fas fa-bars"></i>
      </div>

      <div class="bottom">
      Description: ${element.getDescription()}
      </div>
      `;

      div.classList.add("task");
      main.insertBefore(div, button);
    }

    name.textContent = projectName;
  }
}
