import {toDoList , toDoItem} from './toDoList.js';

//Project class has an array (projectsList) with objects (key: name of to do list) (value: toDoList class)
class Project {
 
    constructor() {
        this.projectsList = [];
    }

    addProject(toDoListName) {
        let newToDoList = new toDoList(toDoListName);
        let newProject = {
            [toDoListName]: newToDoList,
        }
        this.projectsList.push(newProject);
    }

    deleteProject(id) {
        this.projectsList.splice(id,1);
    }

    getProjects(){
        return this.projectsList;
    }

}

export default Project;

 