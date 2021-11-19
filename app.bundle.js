/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/ProjectManager.js":
/*!***************************************!*\
  !*** ./src/modules/ProjectManager.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoList.js */ "./src/modules/toDoList.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 //Project class has an array (projectsList) with objects (key: name of to do list) (value: toDoList class)

var Project = /*#__PURE__*/function () {
  function Project() {
    _classCallCheck(this, Project);

    this.projectsList = [];
  }

  _createClass(Project, [{
    key: "addProject",
    value: function addProject(toDoListName) {
      var newToDoList = new _toDoList_js__WEBPACK_IMPORTED_MODULE_0__.toDoList(toDoListName);

      var newProject = _defineProperty({}, toDoListName, newToDoList);

      this.projectsList.push(newProject);
    }
  }, {
    key: "deleteProject",
    value: function deleteProject(id) {
      this.projectsList.splice(id, 1);
    }
  }, {
    key: "getProjects",
    value: function getProjects() {
      return this.projectsList;
    }
  }]);

  return Project;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storeData": () => (/* binding */ storeData),
/* harmony export */   "loadData": () => (/* binding */ loadData)
/* harmony export */ });
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ "./src/modules/logic.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ "./src/modules/render.js");
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI.js */ "./src/modules/UI.js");



function storeData() {
  localStorage.setItem("projectsDatabase", JSON.stringify(_UI_js__WEBPACK_IMPORTED_MODULE_2__.projectsDatabase));
  localStorage.setItem("inboxDatabase", JSON.stringify(_UI_js__WEBPACK_IMPORTED_MODULE_2__.inboxDatabase));
  localStorage.setItem("todayDatabase", JSON.stringify(_UI_js__WEBPACK_IMPORTED_MODULE_2__.todayDatabase));
  localStorage.setItem("upcomingDatabase", JSON.stringify(_UI_js__WEBPACK_IMPORTED_MODULE_2__.upcomingDatabase));
}
function loadData() {
  (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderToDoList)(_UI_js__WEBPACK_IMPORTED_MODULE_2__.inboxDatabase, null, "Inbox");
}

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addEventListeners": () => (/* binding */ addEventListeners),
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "insertProjectDiv": () => (/* binding */ insertProjectDiv),
/* harmony export */   "addPageLock": () => (/* binding */ addPageLock),
/* harmony export */   "removePageLock": () => (/* binding */ removePageLock),
/* harmony export */   "projectsDatabase": () => (/* binding */ projectsDatabase),
/* harmony export */   "inboxDatabase": () => (/* binding */ inboxDatabase),
/* harmony export */   "todayDatabase": () => (/* binding */ todayDatabase),
/* harmony export */   "upcomingDatabase": () => (/* binding */ upcomingDatabase)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns_isSameWeek__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/isSameWeek */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ "./src/modules/logic.js");
/* harmony import */ var _ProjectManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectManager.js */ "./src/modules/ProjectManager.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render.js */ "./src/modules/render.js");
/* harmony import */ var _Storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Storage.js */ "./src/modules/Storage.js");
/* harmony import */ var _toDoList_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toDoList.js */ "./src/modules/toDoList.js");







var mainContainer = document.querySelector(".main-container");
var tabContainer = document.querySelector("#tab-container");
var inbox = document.querySelector("#inbox");
var today = document.querySelector("#today");
var upcoming = document.querySelector("#upcoming");
var projectsSlider = document.querySelector("#projects-slider");
var addProjectButton = document.querySelector("#add-project");
var addTaskButton = document.querySelector("#add-task");
var projectsDatabase = new _ProjectManager_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
var inboxDatabase = new _ProjectManager_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
inboxDatabase.addProject("Inbox");
var todayDatabase = new _ProjectManager_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
todayDatabase.addProject("Today");
var upcomingDatabase = new _ProjectManager_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
upcomingDatabase.addProject("Upcoming");
var projectsDiv = document.querySelector("#projects-body");

if (JSON.parse(localStorage.getItem("projectsDatabase")) || JSON.parse(localStorage.getItem("inboxDatabase")) || JSON.parse(localStorage.getItem("todayDatabase")) || JSON.parse(localStorage.getItem("upcomingDatabase"))) {
  (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.toClass)("Inbox", inboxDatabase, localStorage.getItem("inboxDatabase"));
  (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.toClass)("Today", todayDatabase, localStorage.getItem("todayDatabase"));
  (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.toClass)("Upcoming", upcomingDatabase, localStorage.getItem("upcomingDatabase"));
  (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.toClass)("Project", projectsDatabase, localStorage.getItem("projectsDatabase"));
} //inbox is selected by default


inbox.classList.add("selected"); //adds event listeners to all clickable buttons

function addEventListeners() {
  inbox.addEventListener("click", displayInboxDiv);
  today.addEventListener("click", displayTodayDiv);
  upcoming.addEventListener("click", displayUpcomingDiv);
  projectsSlider.addEventListener("click", displayProjectList);
  addProjectButton.addEventListener("click", newProjectPrompt);
  addTaskButton.addEventListener("click", addTask);
} //add new task to current to do list selection

function addTask(e) {
  var button = e.target;
  var div = document.createElement("div");
  var parent = document.querySelector("#main-todo");
  div.innerHTML = "\n  <form method=\"post\">\n\n  <h3>Add Task</h3>\n\n  <input type=\"text\" name=\"name\" id=\"add-task-name\" placeholder=\"Name\">\n  <input type=\"text\" name=\"desc\" id=\"add-task-desc\" placeholder=\"Description\">\n  <span>\n  <input type=\"date\" name=\"date\" id=\"add-task-date\">\n  <select name=\"priority\" id=\"add-task-priority\">\n    <option value=\"\">Select Task Priority</option>\n    <option value=\"High\"> High </option>\n    <option value=\"Medium\"> Medium </option>\n    <option value=\"Low\"> Low </option>\n  </select>\n  </span>\n\n\n  <span>\n  <input type=\"submit\" value=\"Add\">\n  <input type=\"submit\" value=\"Cancel\">\n  </span>\n\n  </form>\n";
  button.style.display = "none";
  div.style["z-index"] = "2";
  div.classList.add("new-task");
  parent.appendChild(div);
  addPageLock();
  var newTaskDiv = document.querySelector(".new-task");
  var inputField = newTaskDiv.querySelector("#add-task-name");
  var submitBoxes = newTaskDiv.querySelectorAll("input[type=submit]");
  var currentlySelected = tabContainer.querySelector(".selected").getAttribute("id"); //checks user input

  submitBoxes.forEach(function (input) {
    return input.addEventListener("click", function (e) {
      e.preventDefault();

      if (input.value === "Add" && inputField.value != "") {
        var form = newTaskDiv.querySelector("form");
        var name = form.elements["name"].value;
        var desc = form.elements["desc"].value;
        var date = form.elements["date"].value;
        var priority = form.elements["priority"].value; //currentlySelected is a project, add new task to project

        if (!isNaN(currentlySelected)) {
          //console.log(currentlySelected);
          var currentProject = projectsDatabase.projectsList[currentlySelected];
          var objName = Object.keys(currentProject)[0];
          var toDoList = currentProject[objName];
          var toDoTask = new _toDoList_js__WEBPACK_IMPORTED_MODULE_4__.toDoItem(name, desc, date, priority);
          toDoList.newItem(toDoTask);
          (0,_Storage_js__WEBPACK_IMPORTED_MODULE_3__.storeData)();
          (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderToDoList)(projectsDatabase, currentlySelected, "Project"); //console.log(toDoList);editTask
        } //currentlySelected is Inbox/Today/Upcoming
        else if (currentlySelected == "inbox") {
          var inboxObj = inboxDatabase.projectsList[0];
          var _toDoList = inboxObj.Inbox;

          var _toDoTask = new _toDoList_js__WEBPACK_IMPORTED_MODULE_4__.toDoItem(name, desc, date, priority);

          _toDoList.newItem(_toDoTask);

          (0,_Storage_js__WEBPACK_IMPORTED_MODULE_3__.storeData)();
          (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderToDoList)(inboxDatabase, null, "Inbox");
        } //currentlySelected is Today/Upcoming
        else if (currentlySelected == "today") {
          var todayObj = todayDatabase.projectsList[0];
          var _toDoList2 = todayObj.Today;
          var currentDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(), "yyyy-MM-dd");

          if (date != currentDate) {
            date = currentDate;

            var _toDoTask2 = new _toDoList_js__WEBPACK_IMPORTED_MODULE_4__.toDoItem(name, desc, date, priority);

            _toDoList2.newItem(_toDoTask2);

            alert("Date automatically set to today");
          } else {
            var _toDoTask3 = new _toDoList_js__WEBPACK_IMPORTED_MODULE_4__.toDoItem(name, desc, date, priority);

            _toDoList2.newItem(_toDoTask3);
          }

          (0,_Storage_js__WEBPACK_IMPORTED_MODULE_3__.storeData)();
          (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.todayHandler)(todayDatabase, inboxDatabase, projectsDatabase);
        } else if (currentlySelected == "upcoming") {
          var upcomingObj = upcomingDatabase.projectsList[0];
          var _toDoList3 = upcomingObj.Upcoming;
          var formattedCurrentDate = new Date();
          var year = date.split("-")[0];
          var month = date.split("-")[1];
          var day = date.split("-")[2];
          var formattedProjectDate = new Date(year, month - 1, day);

          if ((0,date_fns_isSameWeek__WEBPACK_IMPORTED_MODULE_6__["default"])(formattedCurrentDate, formattedProjectDate)) {
            var _toDoTask4 = new _toDoList_js__WEBPACK_IMPORTED_MODULE_4__.toDoItem(name, desc, date, priority);

            _toDoList3.newItem(_toDoTask4);
          } else {
            alert("Task must be due this week to be considered upcoming, try again");
          }

          (0,_Storage_js__WEBPACK_IMPORTED_MODULE_3__.storeData)();
          (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.upcomingHandler)(upcomingDatabase, inboxDatabase, projectsDatabase);
        }

        div.remove();
        removePageLock();
        button.style.display = "inline-block";
      } else if (inputField.value == "" && input.value != "Cancel") {
        alert("Name must be at least 1 character");
      } //cancel
      else {
        div.remove();
        removePageLock();
        button.style.display = "inline-block";
      }
    });
  });
} //edit existing task


function editTask(e) {
  var button = e.target;
  var selectedDiv = button.parentElement.parentElement;
  var selectedDivSpan = selectedDiv.querySelectorAll("span");
  var div = document.createElement("div");
  var parent = document.querySelector("#main-todo");
  var toDoArr = parent.querySelectorAll(".task");
  div.innerHTML = "\n  <form method=\"post\">\n\n  <h3>Edit Task</h3>\n\n  <input type=\"text\" name=\"name\" id=\"add-task-name\" placeholder=\"Name\" value=\"".concat(selectedDivSpan[0].innerText.trim(), "\">\n  <input type=\"text\" name=\"desc\" id=\"add-task-desc\" placeholder=\"Description\" value=\"").concat(selectedDiv.querySelector(".bottom").innerText.substring(selectedDiv.querySelector(".bottom").innerText.indexOf(" ")).trim(), "\">\n  <span>\n  <input type=\"date\" name=\"date\" id=\"add-task-date\">\n  <select name=\"priority\" id=\"add-task-priority\">\n    <option value=\"\">Select Task Priority</option>\n    <option value=\"High\"> High </option>\n    <option value=\"Medium\"> Medium </option>\n    <option value=\"Low\"> Low </option>\n  </select>\n  </span>\n\n  <span>\n  <input type=\"submit\" value=\"Edit\">\n  <input type=\"submit\" value=\"Cancel\">\n  </span>\n\n  </form>\n");
  button.style.display = "none";
  div.style["z-index"] = "2";
  div.classList.add("new-task");
  parent.appendChild(div);
  addPageLock();
  var newTaskDiv = document.querySelector(".new-task");
  var inputField = newTaskDiv.querySelector("#add-task-name");
  var submitBoxes = newTaskDiv.querySelectorAll("input[type=submit]");
  var currentlySelected = tabContainer.querySelector(".selected").getAttribute("id"); //checks user input

  submitBoxes.forEach(function (input) {
    return input.addEventListener("click", function (e) {
      e.preventDefault();

      if (input.value === "Edit" && inputField.value != "") {
        var form = newTaskDiv.querySelector("form");
        var name = form.elements["name"].value;
        var desc = form.elements["desc"].value;
        var date = form.elements["date"].value;
        var priority = form.elements["priority"].value; //currentlySelected is a project, edit task

        if (!isNaN(currentlySelected)) {
          var newToDoArr = Array.from(toDoArr);
          var indexOfSelectedElement = newToDoArr.findIndex(function (element) {
            return element == button.parentElement.parentElement;
          });
          button.parentElement.parentElement.remove();
          var currentProject = projectsDatabase.projectsList[currentlySelected];
          var objName = Object.keys(currentProject)[0];
          var toDoList = currentProject[objName];
          var toDoTask = new _toDoList_js__WEBPACK_IMPORTED_MODULE_4__.toDoItem(name, desc, date, priority);
          toDoList.updateItem(indexOfSelectedElement, toDoTask);
          (0,_Storage_js__WEBPACK_IMPORTED_MODULE_3__.storeData)();
          (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderToDoList)(projectsDatabase, currentlySelected, "Project"); //console.log(toDoList);
        } //currentlySelected is Inbox
        else if (currentlySelected == "inbox") {
          var _newToDoArr = Array.from(toDoArr);

          var _indexOfSelectedElement = _newToDoArr.findIndex(function (element) {
            return element == button.parentElement.parentElement;
          });

          button.parentElement.parentElement.remove();
          var inboxObj = inboxDatabase.projectsList[0];
          var _toDoList4 = inboxObj.Inbox;

          var _toDoTask5 = new _toDoList_js__WEBPACK_IMPORTED_MODULE_4__.toDoItem(name, desc, date, priority);

          _toDoList4.updateItem(_indexOfSelectedElement, _toDoTask5);

          (0,_Storage_js__WEBPACK_IMPORTED_MODULE_3__.storeData)();
          (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderToDoList)(inboxDatabase, null, "Inbox");
        } //currentlySelected is Today
        else if (currentlySelected == "today") {
          var todayObj = todayDatabase.projectsList[0];
          var _toDoList5 = todayObj.Today;

          if (button.parentElement.parentElement.classList.contains("from-project")) {
            alert("Edit the task from the project that it is in");
          } else if (button.parentElement.parentElement.classList.contains("from-inbox")) {
            alert("Edit the task from the Inbox section");
          } else {
            var currentDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(), "yyyy-MM-dd");

            var _newToDoArr2 = Array.from(mainContainer.querySelectorAll(".from-today"));

            var _indexOfSelectedElement2 = _newToDoArr2.findIndex(function (element) {
              return element == button.parentElement.parentElement;
            });

            button.parentElement.parentElement.remove();

            if (date != currentDate) {
              date = currentDate;

              var _toDoTask6 = new _toDoList_js__WEBPACK_IMPORTED_MODULE_4__.toDoItem(name, desc, date, priority);

              _toDoList5.updateItem(_indexOfSelectedElement2, _toDoTask6);

              alert("Date automatically set to today");
            } else {
              var _toDoTask7 = new _toDoList_js__WEBPACK_IMPORTED_MODULE_4__.toDoItem(name, desc, date, priority);

              _toDoList5.updateItem(_indexOfSelectedElement2, _toDoTask7);
            }
          }

          (0,_Storage_js__WEBPACK_IMPORTED_MODULE_3__.storeData)();
          (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.todayHandler)(todayDatabase, inboxDatabase, projectsDatabase);
        } else if (currentlySelected == "upcoming") {
          var upcomingObj = upcomingDatabase.projectsList[0];
          var _toDoList6 = upcomingObj.Upcoming;
          var formattedCurrentDate = new Date();
          var year = date.split("-")[0];
          var month = date.split("-")[1];
          var day = date.split("-")[2];
          var formattedProjectDate = new Date(year, month - 1, day);

          if (button.parentElement.parentElement.classList.contains("from-project")) {
            alert("Edit the task from the project that it is in");
          } else if (button.parentElement.parentElement.classList.contains("from-inbox")) {
            alert("Edit the task from the Inbox section");
          } else {
            var _newToDoArr3 = Array.from(mainContainer.querySelectorAll(".from-upcoming"));

            var _indexOfSelectedElement3 = _newToDoArr3.findIndex(function (element) {
              return element == button.parentElement.parentElement;
            });

            button.parentElement.parentElement.remove();

            if ((0,date_fns_isSameWeek__WEBPACK_IMPORTED_MODULE_6__["default"])(formattedCurrentDate, formattedProjectDate)) {
              var _toDoTask8 = new _toDoList_js__WEBPACK_IMPORTED_MODULE_4__.toDoItem(name, desc, date, priority);

              _toDoList6.updateItem(_indexOfSelectedElement3, _toDoTask8);
            } else {
              alert("Task must be due this week to be considered upcoming, try again");
            }
          }

          (0,_Storage_js__WEBPACK_IMPORTED_MODULE_3__.storeData)();
          (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.upcomingHandler)(upcomingDatabase, inboxDatabase, projectsDatabase);
        }

        div.remove();
        removePageLock();
        button.style.display = "inline-block";
      } else if (inputField.value == "" && input.value != "Cancel") {
        alert("Name must be at least 1 character");
      } //cancel
      else {
        div.remove();
        removePageLock();
        button.style.display = "inline-block";
      }
    });
  });
} //prompts the user to add a new project

function newProjectPrompt() {
  var div = document.createElement("div");
  div.innerHTML = "\n        <h3>Add Project</h3>\n        <div>\n        <form>\n        <label for=\"add-project-name\"><h4>Name</h4></label>\n        <input type=\"text\" name=\"name\" id=\"add-project-name\">\n        <input type=\"submit\" value=\"Add\">\n        <input type=\"submit\" value=\"Cancel\">\n        </form>\n        </div>\n    ";
  div.classList.add("new-project-card");
  div.style["z-index"] = "2";
  mainContainer.appendChild(div);
  addPageLock();
  var newProjectCard = document.querySelector(".new-project-card");
  var inputField = newProjectCard.querySelector("input[type=text]");
  var submitBoxes = newProjectCard.querySelectorAll("input[type=submit]"); //checks user input

  submitBoxes.forEach(function (input) {
    return input.addEventListener("click", function (e) {
      e.preventDefault();

      if (input.value === "Add" && inputField.value.toLowerCase() == "inbox") {
        alert("inbox is an invalid name, try something else");
      } else if (input.value === "Add" && inputField.value != "") {
        var inputValue = document.querySelector("input[type=text]").value;
        var currentId = projectsDatabase.projectsList.length;
        projectsDatabase.addProject(inputValue);
        (0,_Storage_js__WEBPACK_IMPORTED_MODULE_3__.storeData)();
        insertProjectDiv(inputValue, currentId);
        div.remove();
        removePageLock();
      } else if (inputField.value == "" && input.value != "Cancel") {
        alert("Name must be at least 1 character");
      } //cancel
      else {
        div.remove();
        removePageLock();
      }
    });
  });
} //adds the new project to sidebar


function insertProjectDiv(name, id) {
  var li = document.createElement("li");
  var button = document.createElement("button");
  li.appendChild(button);
  button.innerHTML = "\n  <i class=\"fas fa-times-circle fa-0.25x\"></i>\n    &#9642 ".concat(name, "\n    ");
  button.classList.add("projects-children");
  button.setAttribute("id", "".concat(id));
  button.addEventListener("click", displayProjectDiv);
  projectsDiv.querySelector("ul").appendChild(li);
} //reset selections

function resetButtons(e) {
  //console.log(e)
  var selectedDiv = e;
  var buttons = tabContainer.querySelectorAll("button");
  buttons.forEach(function (button) {
    button.classList.remove("selected");
  });
  selectedDiv.classList.add("selected");
} //calls function to display PROJECTS


function displayProjectDiv(e) {
  var selectedDiv = e.target;
  var idValue = e.target.getAttribute("id");
  var buttons = tabContainer.querySelectorAll("button");

  if (selectedDiv.nodeName == "I") {
    (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.deleteProjectPopup)(projectsDatabase, e);
  } else {
    buttons.forEach(function (button) {
      button.classList.remove("selected");
    });
    selectedDiv.classList.add("selected");
    (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderToDoList)(projectsDatabase, idValue, "Project");
  }
}

function displayInboxDiv(e) {
  if (e.target.nodeName == "I") {
    e = e.target.parentElement;
    resetButtons(e);
  } else {
    resetButtons(e.target);
  }

  (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderToDoList)(inboxDatabase, null, "Inbox");
}

function displayTodayDiv(e) {
  if (e.target.nodeName == "I") {
    e = e.target.parentElement;
    resetButtons(e);
  } else {
    resetButtons(e.target);
  }

  (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.todayHandler)(todayDatabase, inboxDatabase, projectsDatabase);
}

function displayUpcomingDiv(e) {
  if (e.target.nodeName == "I") {
    e = e.target.parentElement;
    resetButtons(e);
  } else {
    resetButtons(e.target);
  }

  (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.upcomingHandler)(upcomingDatabase, inboxDatabase, projectsDatabase);
} //makes it so only one popup can be selected at once and the rest of the page is unselectable


function addPageLock() {
  var pageLock = document.createElement("div");
  pageLock.classList.add("page-lock");
  document.body.appendChild(pageLock);
  var task = document.querySelectorAll(".task");
  task.forEach(function (element) {
    return element.classList.add("lock");
  });
  tabContainer.classList.add("lock");
}
function removePageLock() {
  var taskLock = document.querySelectorAll(".task");
  taskLock.forEach(function (element) {
    return element.classList.remove("lock");
  });
  tabContainer.classList.remove("lock");
  var pageLock = document.querySelector(".page-lock");
  pageLock.remove();
}

function displayProjectList() {
  var i = projectsSlider.querySelector("i");
  projectsDiv.classList.toggle("collapse");
  i.classList.toggle("fa-caret-down");
  i.classList.toggle("fa-caret-right");
}



/***/ }),

/***/ "./src/modules/logic.js":
/*!******************************!*\
  !*** ./src/modules/logic.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todayHandler": () => (/* binding */ todayHandler),
/* harmony export */   "upcomingHandler": () => (/* binding */ upcomingHandler),
/* harmony export */   "toClass": () => (/* binding */ toClass)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ "./src/modules/render.js");
/* harmony import */ var _toDoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoList.js */ "./src/modules/toDoList.js");
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI.js */ "./src/modules/UI.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var mainContainer = document.querySelector(".main-container");
var mainToDo = document.querySelector("#main-todo");
var name = mainToDo.querySelector("h2");
var button = mainToDo.querySelector("#add-task"); //handles logic for TODAY

function todayHandler(todayDatabase, inboxDatabase, projectsDatabase) {
  //clears all task elements so that it can be re-rendered
  var toDoListDivs = mainToDo.querySelectorAll(".task");
  toDoListDivs.forEach(function (element) {
    return element.remove();
  });
  var currentDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(), "MM/dd/yyyy"); //handles projectDatabase

  var _iterator = _createForOfIteratorHelper(projectsDatabase.projectsList),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var obj = _step.value;

      for (var project in obj) {
        //todo list class
        var _toDoList = obj[project];

        var _iterator4 = _createForOfIteratorHelper(_toDoList.items),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _toDoItem = _step4.value;

            if (_toDoItem.getDueDate() == currentDate) {
              (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)(_toDoItem, "project");
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    } //handles inboxDatabase

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _iterator2 = _createForOfIteratorHelper(inboxDatabase.projectsList),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _obj = _step2.value;

      for (var _project in _obj) {
        //todo list class
        var _toDoList2 = _obj[_project];

        var _iterator5 = _createForOfIteratorHelper(_toDoList2.items),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _toDoItem2 = _step5.value;

            if (_toDoItem2.getDueDate() == currentDate) {
              (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)(_toDoItem2, "inbox");
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
    } //handles todayDatabse

  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var todayObj = todayDatabase.projectsList[0];
  var toDoList = todayObj.Today;

  var _iterator3 = _createForOfIteratorHelper(toDoList.getItems()),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var element = _step3.value;
      (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)(element, "today");
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  var deleteButtonArr = mainToDo.querySelectorAll(".delete");
  var editButtonArr = mainToDo.querySelectorAll(".edit"); //deletes task but if task is part of inbox/project it tells the user to go to project/inbox to delete

  deleteButtonArr.forEach(function (element) {
    element.addEventListener("click", function (e) {
      return (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.deleteTaskPopup)(e, todayDatabase);
    });
  });
  editButtonArr.forEach(function (element) {
    element.addEventListener("click", _UI_js__WEBPACK_IMPORTED_MODULE_2__.editTask);
  });
  name.textContent = "Today's Tasks";
} //handles logic for UPCOMING

function upcomingHandler(upcomingDatabase, inboxDatabase, projectsDatabase) {
  //clears all task elements so that it can be re-rendered
  var toDoListDivs = mainToDo.querySelectorAll(".task");
  toDoListDivs.forEach(function (element) {
    return element.remove();
  });
  var currentDate = new Date(); //handles projectDatabase

  var _iterator6 = _createForOfIteratorHelper(projectsDatabase.projectsList),
      _step6;

  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var obj = _step6.value;

      for (var project in obj) {
        //todo list class
        var _toDoList3 = obj[project];

        var _iterator9 = _createForOfIteratorHelper(_toDoList3.items),
            _step9;

        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var _toDoItem3 = _step9.value;

            var projectDate = _toDoItem3.getDueDate();

            var month = projectDate.split("/")[0];
            var day = projectDate.split("/")[1];
            var year = projectDate.split("/")[2];
            projectDate = new Date(year, month - 1, day);

            if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(currentDate, projectDate)) {
              (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)(_toDoItem3, "project");
            }
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
      }
    } //handles inboxDatabase

  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }

  var _iterator7 = _createForOfIteratorHelper(inboxDatabase.projectsList),
      _step7;

  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var _obj2 = _step7.value;

      for (var _project2 in _obj2) {
        //todo list class
        var _toDoList4 = _obj2[_project2];

        var _iterator10 = _createForOfIteratorHelper(_toDoList4.items),
            _step10;

        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var _toDoItem4 = _step10.value;

            var _projectDate = _toDoItem4.getDueDate();

            var _month = _projectDate.split("/")[0];

            var _day = _projectDate.split("/")[1];

            var _year = _projectDate.split("/")[2];

            _projectDate = new Date(_year, _month - 1, _day);

            if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(currentDate, _projectDate)) {
              (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)(_toDoItem4, "inbox");
            }
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
      }
    } //handles upcomingDatabase

  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }

  var upcomingObj = upcomingDatabase.projectsList[0];
  var toDoList = upcomingObj.Upcoming;

  var _iterator8 = _createForOfIteratorHelper(toDoList.getItems()),
      _step8;

  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      var element = _step8.value;
      (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)(element, "upcoming");
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }

  var deleteButtonArr = mainToDo.querySelectorAll(".delete");
  var editButtonArr = mainToDo.querySelectorAll(".edit"); //deletes task but if task is part of inbox/project it tells the user to go to project/inbox to delete

  deleteButtonArr.forEach(function (element) {
    element.addEventListener("click", function (e) {
      return (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.deleteTaskPopup)(e, upcomingDatabase);
    });
  });
  editButtonArr.forEach(function (element) {
    element.addEventListener("click", _UI_js__WEBPACK_IMPORTED_MODULE_2__.editTask);
  });
  name.textContent = "This Week's Tasks";
} //conversts stored localStorage string to JSON use .parse and covnerts that to a Project/ToDoList/ToDoItem class accordingly

function toClass(type, database, string) {
  var obj = JSON.parse(string);

  if (type == "Inbox") {
    var items = database.projectsList[0].Inbox.items;
    var objInbox = obj.projectsList[0].Inbox;
    var objInboxItems = objInbox.items;

    var _iterator11 = _createForOfIteratorHelper(objInboxItems),
        _step11;

    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var element = _step11.value;
        var date = element._dueDate;

        if (date != "None") {
          var month = date.split("/")[0];
          var day = date.split("/")[1];
          var year = date.split("/")[2];
          date = "".concat(year, "-").concat(month, "-").concat(day);
        } else {
          date = "";
        }

        var newToDo = new _toDoList_js__WEBPACK_IMPORTED_MODULE_1__.toDoItem(element._title, element._description, date, element._priority);
        items.push(newToDo);
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
  } else if (type == "Today") {
    var _items = database.projectsList[0].Today.items;
    var objToday = obj.projectsList[0].Today;
    var objTodayItems = objToday.items;

    var _iterator12 = _createForOfIteratorHelper(objTodayItems),
        _step12;

    try {
      for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
        var _element = _step12.value;
        var _date = _element._dueDate;

        var _month2 = _date.split("/")[0];

        var _day2 = _date.split("/")[1];

        var _year2 = _date.split("/")[2];

        _date = "".concat(_year2, "-").concat(_month2, "-").concat(_day2);

        var _newToDo = new _toDoList_js__WEBPACK_IMPORTED_MODULE_1__.toDoItem(_element._title, _element._description, _date, _element._priority);

        _items.push(_newToDo);
      }
    } catch (err) {
      _iterator12.e(err);
    } finally {
      _iterator12.f();
    }
  } else if (type == "Upcoming") {
    var _items2 = database.projectsList[0].Upcoming.items;
    var objUpcoming = obj.projectsList[0].Upcoming;
    var objUpcomingItems = objUpcoming.items;

    var _iterator13 = _createForOfIteratorHelper(objUpcomingItems),
        _step13;

    try {
      for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
        var _element2 = _step13.value;
        var _date2 = _element2._dueDate;

        var _month3 = _date2.split("/")[0];

        var _day3 = _date2.split("/")[1];

        var _year3 = _date2.split("/")[2];

        _date2 = "".concat(_year3, "-").concat(_month3, "-").concat(_day3);

        var _newToDo2 = new _toDoList_js__WEBPACK_IMPORTED_MODULE_1__.toDoItem(_element2._title, _element2._description, _date2, _element2._priority);

        _items2.push(_newToDo2);
      }
    } catch (err) {
      _iterator13.e(err);
    } finally {
      _iterator13.f();
    }
  } else if (type == "Project") {
    var _items3 = database.projectsList;
    var objProject = obj.projectsList;

    var _iterator14 = _createForOfIteratorHelper(objProject.entries()),
        _step14;

    try {
      for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
        var _step14$value = _slicedToArray(_step14.value, 2),
            id = _step14$value[0],
            proj = _step14$value[1];

        var key = Object.keys(proj);
        database.addProject(key);
        (0,_UI_js__WEBPACK_IMPORTED_MODULE_2__.insertProjectDiv)(key, id);

        var _iterator15 = _createForOfIteratorHelper(proj[key].items),
            _step15;

        try {
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
            var task = _step15.value;
            var _date3 = task._dueDate;

            if (_date3 != "None") {
              var _month4 = _date3.split("/")[0];

              var _day4 = _date3.split("/")[1];

              var _year4 = _date3.split("/")[2];

              _date3 = "".concat(_year4, "-").concat(_month4, "-").concat(_day4);
            } else {
              _date3 = "";
            }

            var _newToDo3 = new _toDoList_js__WEBPACK_IMPORTED_MODULE_1__.toDoItem(task._title, task._description, _date3, task._priority);

            _items3[id][key].newItem(_newToDo3);
          }
        } catch (err) {
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }
      }
    } catch (err) {
      _iterator14.e(err);
    } finally {
      _iterator14.f();
    }
  }
}

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "renderToDoList": () => (/* binding */ renderToDoList),
/* harmony export */   "deleteProjectPopup": () => (/* binding */ deleteProjectPopup),
/* harmony export */   "deleteTaskPopup": () => (/* binding */ deleteTaskPopup),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask)
/* harmony export */ });
/* harmony import */ var _Storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage.js */ "./src/modules/Storage.js");
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI.js */ "./src/modules/UI.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var mainContainer = document.querySelector(".main-container");
var mainToDo = document.querySelector("#main-todo");
var name = mainToDo.querySelector("h2");
var button = mainToDo.querySelector("#add-task"); //basic rendering

function render(element, flag) {
  var div = document.createElement("div");
  div.innerHTML = "\n  <div class=\"top\">\n  <i class=\"far fa-circle delete\"></i>\n  <span> ".concat(element.getTitle(), "</span>\n  <span >Due Date: ").concat(element.getDueDate(), "  </span>\n  <span> Priority: ").concat(element.getPriority() != "" ? element.getPriority() : "None", "  </span>\n  <i class=\"fas fa-bars edit\"></i>\n  </div>\n\n  <div class=\"bottom\">\n  Description: &nbsp;").concat(element.getDescription(), "\n  </div>\n  ");
  div.classList.add("task");
  div.classList.add("from-".concat(flag));
  mainToDo.insertBefore(div, button);
} //renders to do list for INBOX/PROJECTS

function renderToDoList(projectList, id, type) {
  var database = projectList; //clears all task elements so that it can be re-rendered

  var toDoListDivs = mainToDo.querySelectorAll(".task");
  toDoListDivs.forEach(function (element) {
    return element.remove();
  });

  if (type == "Project") {
    var project = database.projectsList[id];
    var projectName = Object.keys(project)[0];
    var toDoList = project[projectName];

    var _iterator = _createForOfIteratorHelper(toDoList.getItems()),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var element = _step.value;
        render(element, "project");
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    name.textContent = projectName;
  } else if (type == "Inbox") {
    var inboxObj = database.projectsList[0];
    var _toDoList = inboxObj.Inbox;

    var _iterator2 = _createForOfIteratorHelper(_toDoList.getItems()),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _element = _step2.value;
        render(_element, "inbox");
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    name.textContent = "Inbox";
  }

  var deleteButtonArr = mainToDo.querySelectorAll(".delete");
  var editButtonArr = mainToDo.querySelectorAll(".edit");
  deleteButtonArr.forEach(function (element) {
    element.addEventListener("click", function (e) {
      return deleteTaskPopup(e, database);
    });
  });
  editButtonArr.forEach(function (element) {
    element.addEventListener("click", _UI_js__WEBPACK_IMPORTED_MODULE_1__.editTask);
  });
}
function deleteProjectPopup(database, e) {
  var selectedDiv = e.target.parentElement;
  var idValue = selectedDiv.getAttribute("id");
  var popup = document.createElement("div");
  popup.innerHTML = "\n    <h3>Delete Project?</h3>\n    <span>     \n    <input type=\"submit\" value=\"Yes\">\n    <input type=\"submit\" value=\"No\">\n    </span>\n  ";
  popup.classList.add("delete-task-popup");
  mainContainer.appendChild(popup);
  popup.style["z-index"] = "2";
  (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.addPageLock)();
  var inputs = document.querySelector(".delete-task-popup").querySelectorAll("input[type=submit]");
  inputs.forEach(function (element) {
    element.addEventListener("click", function (e) {
      e.preventDefault();

      if (element.value == "Yes") {
        database.deleteProject(idValue);
        (0,_Storage_js__WEBPACK_IMPORTED_MODULE_0__.storeData)();
        selectedDiv.remove();
        popup.remove();
        window.location.reload();
        (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.removePageLock)();
      } else {
        popup.remove();
        (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.removePageLock)();
      }
    });
  });
}
function deleteTaskPopup(e, database) {
  //create prompt for user to confirm/deny deleting a task
  var originalElement = e;
  var popup = document.createElement("div");
  popup.innerHTML = "\n    <h3>Delete Task?</h3>\n    <span>     \n    <input type=\"submit\" value=\"Yes\">\n    <input type=\"submit\" value=\"No\">\n    </span>\n  ";
  popup.classList.add("delete-task-popup");
  mainContainer.appendChild(popup);
  popup.style["z-index"] = "2";
  (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.addPageLock)();
  var inputs = document.querySelector(".delete-task-popup").querySelectorAll("input[type=submit]");
  inputs.forEach(function (element) {
    element.addEventListener("click", function (e) {
      e.preventDefault();

      if (element.value == "Yes") {
        deleteTask(originalElement, database);
        popup.remove();
        (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.removePageLock)();
      } else {
        popup.remove();
        (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.removePageLock)();
      }
    });
  });
}
function deleteTask(e, database) {
  var selected = document.querySelector(".selected");
  var target = e.target;
  var toDoArr = mainToDo.querySelectorAll(".task"); //delete project task

  if (selected.classList.contains("projects-children")) {
    var id = selected.getAttribute("id");
    var project = database.getProjects()[id];
    var projectName = Object.keys(project)[0];
    var toDoList = project[projectName];
    var newToDoArr = Array.from(toDoArr);
    var indexOfSelectedElement = newToDoArr.findIndex(function (element) {
      return element == target.parentElement.parentElement;
    });
    toDoList.removeItem(indexOfSelectedElement);
    target.parentElement.parentElement.remove();
    (0,_Storage_js__WEBPACK_IMPORTED_MODULE_0__.storeData)();
  } //delete inbox task
  else if (selected.getAttribute("id") == "inbox") {
    var inboxObj = database.projectsList[0];
    var _toDoList2 = inboxObj.Inbox;

    var _newToDoArr = Array.from(toDoArr);

    var _indexOfSelectedElement = _newToDoArr.findIndex(function (element) {
      return element == target.parentElement.parentElement;
    });

    _toDoList2.removeItem(_indexOfSelectedElement);

    target.parentElement.parentElement.remove();
    (0,_Storage_js__WEBPACK_IMPORTED_MODULE_0__.storeData)();
  } //delete today task
  else if (selected.getAttribute("id") == "today") {
    var todayObj = database.projectsList[0];
    var _toDoList3 = todayObj.Today;

    if (target.parentElement.parentElement.classList.contains("from-project")) {
      alert("Delete the task from the project that it is in");
    } else if (target.parentElement.parentElement.classList.contains("from-inbox")) {
      alert("Delete the task from the Inbox section");
    } else {
      var _newToDoArr2 = Array.from(mainToDo.querySelectorAll(".from-today"));

      var _indexOfSelectedElement2 = _newToDoArr2.findIndex(function (element) {
        return element == target.parentElement.parentElement;
      });

      _toDoList3.removeItem(_indexOfSelectedElement2);

      target.parentElement.parentElement.remove();
      (0,_Storage_js__WEBPACK_IMPORTED_MODULE_0__.storeData)();
    }
  } //delete upcoming task
  else if (selected.getAttribute("id") == "upcoming") {
    var upcomingObj = database.projectsList[0];
    var _toDoList4 = upcomingObj.Upcoming;

    if (target.parentElement.parentElement.classList.contains("from-project")) {
      alert("Delete the task from the project that it is in");
    } else if (target.parentElement.parentElement.classList.contains("from-inbox")) {
      alert("Delete the task from the Inbox section");
    } else {
      var _newToDoArr3 = Array.from(mainToDo.querySelectorAll(".from-upcoming"));

      var _indexOfSelectedElement3 = _newToDoArr3.findIndex(function (element) {
        return element == target.parentElement.parentElement;
      });

      _toDoList4.removeItem(_indexOfSelectedElement3);

      target.parentElement.parentElement.remove();
      (0,_Storage_js__WEBPACK_IMPORTED_MODULE_0__.storeData)();
    }
  }
}

/***/ }),

/***/ "./src/modules/toDoList.js":
/*!*********************************!*\
  !*** ./src/modules/toDoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDoList": () => (/* binding */ toDoList),
/* harmony export */   "toDoItem": () => (/* binding */ toDoItem)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//toDoList has an array of toDoItem
var toDoList = /*#__PURE__*/function () {
  function toDoList(name) {
    _classCallCheck(this, toDoList);

    this.name = name;
    this.items = [];
  }

  _createClass(toDoList, [{
    key: "name",
    set: function set(value) {
      if (value.length > 20) {
        alert("Name is too long");
        return;
      }

      this._name = value;
    }
  }, {
    key: "newItem",
    value: function newItem(item) {
      if (item instanceof toDoItem) {
        this.items.push(item);
      }
    }
  }, {
    key: "updateItem",
    value: function updateItem(id, newItem) {
      this.items.splice(id, 1, newItem);
    }
  }, {
    key: "removeItem",
    value: function removeItem(index) {
      this.items.splice(index, 1);
    }
  }, {
    key: "getItems",
    value: function getItems() {
      return this.items;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }]);

  return toDoList;
}(); //toDoItem is a class


var toDoItem = /*#__PURE__*/function () {
  function toDoItem(title, description, dueDate, priority) {
    _classCallCheck(this, toDoItem);

    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  _createClass(toDoItem, [{
    key: "title",
    set: function set(value) {
      if (value.length > 30) {
        alert("Title is too long");
        return;
      }

      this._title = value;
    }
  }, {
    key: "description",
    set: function set(value) {
      if (value.length > 400) {
        alert("Description is too long");
        return;
      }

      this._description = value;
    }
  }, {
    key: "dueDate",
    set: function set(value) {
      var year = value.split("-")[0];
      var month = value.split("-")[1];
      var day = value.split("-")[2];

      if (month == undefined || day == undefined || year == undefined) {
        this._dueDate = "None";
      } else {
        this._dueDate = "".concat(month, "/").concat(day, "/").concat(year);
      }
    }
  }, {
    key: "priority",
    set: function set(value) {
      this._priority = value;
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      return this._title;
    }
  }, {
    key: "getDescription",
    value: function getDescription() {
      return this._description;
    }
  }, {
    key: "getDueDate",
    value: function getDueDate() {
      return this._dueDate;
    }
  }, {
    key: "getPriority",
    value: function getPriority() {
      return this._priority;
    }
  }]);

  return toDoItem;
}();



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\nmain {\r\n  display: flex;\r\n  flex-direction: row;\r\n  height: calc(100vh - 90px);\r\n}\r\naside {\r\n  width: 18%;\r\n  height: inherit;\r\n}\r\n\r\n/* Top Banner */\r\n.banner {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n\r\n  width: 100%;\r\n  color: whitesmoke;\r\n  background-color: red;\r\n  text-align: left;\r\n  padding: 1.25em 4em;\r\n  font-size: 1.1rem;\r\n}\r\n.banner i {\r\n  margin-left: 0.8em;\r\n}\r\n\r\n/*Sidebar */\r\n#tab-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  padding-bottom: 1em;\r\n  background-color: rgb(240, 240, 245);\r\n  border-right: 1px solid gray;\r\n}\r\n#tab-container * {\r\n  padding: 0.5em 1.25em;\r\n  font-size: 1.1em;\r\n}\r\n#tab-container button {\r\n  background: none;\r\n  border: none;\r\n  text-align: left;\r\n}\r\n#inbox:hover,\r\n#today:hover,\r\n#upcoming:hover,\r\n#projects-slider:hover,\r\n#add-project:hover {\r\n  background-color: rgb(209, 201, 201);\r\n}\r\n#tab-container i {\r\n  margin-right: 0.5em;\r\n}\r\n#inbox {\r\n  padding-top: 1.1em;\r\n  background-color: rgb(209, 201, 201);\r\n}\r\n#projects {\r\n  padding: 0;\r\n  margin-top: 2em;\r\n}\r\n#projects-header {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n}\r\n#projects-header h2 {\r\n  padding: 0;\r\n  font-size: 1.5em;\r\n}\r\n#projects-header i {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n.fa-caret-right{\r\n  color: red;\r\n}\r\n.selected {\r\n  background-color: rgb(209, 201, 201) !important;\r\n}\r\n\r\n/* projects section of sidebar */\r\n.collapse {\r\n  transition: 0.5s;\r\n  position: absolute;\r\n  transform: translate(-50em);\r\n}\r\n#projects-body {\r\n  margin-top: 0.25em;\r\n}\r\n#projects-body ul {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0;\r\n}\r\n#projects-body li {\r\n  padding: 0;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n#projects-body button {\r\n  display: inline-flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1em;\r\n}\r\n#projects-body .projects-children{\r\n  width: auto;\r\n  text-align: center;\r\n  overflow: hidden;\r\n}\r\n#projects-body .projects-children i {\r\n  height: 0.1em;\r\n  width: 0.1em;\r\n  padding: 0.5em;\r\n  margin: 0.25em 0;\r\n  margin-right: 0.5em;\r\n  margin-bottom: 0.8em;\r\n}\r\n#projects-body .projects-children:hover {\r\n  background-color: rgb(209, 201, 201);\r\n}\r\n\r\n/* Main interface with to-dos */\r\n.main {\r\n  display: inline;\r\n  width: calc(100% - 18%);\r\n}\r\n.main-container {\r\n  padding: 3em 10em 7em 11em;\r\n}\r\n.main-container h2 {\r\n  line-height: 2em;\r\n  border-bottom: 1px solid darkgray;\r\n}\r\n#add-task {\r\n  margin-top: 0.5em;\r\n  width: 100%;\r\n  border: none;\r\n  padding: 1em 0;\r\n\r\n  text-align: left;\r\n  background-color: white;\r\n  line-height: 2em;\r\n  font-weight: 500;\r\n  font-size: 1em;\r\n}\r\n#add-task i {\r\n  margin-right: 1.2em;\r\n}\r\n#add-task:hover {\r\n  background-color: rgb(239, 239, 239);\r\n}\r\n/*Add new project prompt */\r\n.new-project-card {\r\n  position: absolute;\r\n  top: 40%;\r\n  left: 40%;\r\n  width: 25em;\r\n  border: 1px black solid;\r\n  background-color: white;\r\n}\r\n.new-project-card h3 {\r\n  text-align: center;\r\n  padding: 0.5em;\r\n  background-color: rgb(245, 244, 244);\r\n}\r\n.new-project-card div {\r\n  padding: 1.5em;\r\n}\r\n.new-project-card h4 {\r\n  font-size: 1.2em;\r\n  margin-bottom: 0.8em;\r\n}\r\n.new-project-card input {\r\n  border: 1px solid #585858;\r\n  border-radius: 0.4em;\r\n  padding: 0.4em;\r\n  width: 100%;\r\n}\r\n.new-project-card input[type=\"submit\"] {\r\n  padding: 0.6rem;\r\n  margin-top: 1.25rem;\r\n  margin-right: 0.5rem;\r\n  width: 30%;\r\n  transform: translateX(60%);\r\n  background-color: rgb(250, 84, 84);\r\n  font-size: 1.1rem;\r\n}\r\n/*Add task prompt*/\r\n.new-task {\r\n  position: relative;\r\n  right: 6em;\r\n  width: 70%;\r\n  margin: auto;\r\n  margin-top: 1.5em;\r\n  border: 1px solid black;\r\n  background-color: white;\r\n}\r\n.new-task form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 2em;\r\n  gap: 1em;\r\n  text-align: center;\r\n}\r\n.new-task form span {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-evenly;\r\n}\r\n#add-task-name {\r\n  margin: auto;\r\n  width: 30%;\r\n}\r\n#add-task-desc {\r\n  text-align: top;\r\n  padding: 1.5em;\r\n}\r\n#add-task-priority {\r\n  width: 30%;\r\n}\r\n#add-task-date {\r\n  width: 30%;\r\n}\r\n.new-task form input,\r\n.new-task form select {\r\n  padding: 0.4rem;\r\n}\r\n.new-task form input[type=\"submit\"] {\r\n  margin-top: 1rem;\r\n  width: 30%;\r\n  background-color: rgb(250, 84, 84);\r\n  font-size: 1rem;\r\n  text-align: center;\r\n}\r\n\r\n/*task styling*/\r\n.task {\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  width: 100%;\r\n  padding: 1em 0.25em;\r\n  line-height: 1.4em;\r\n  font-size: 1.3em;\r\n  border-bottom: 1px solid grey;\r\n}\r\n.task span {\r\n  margin-left: 1em;\r\n}\r\n.top {\r\n  display: inline-grid;\r\n  grid-template-columns: 1.25em 3fr 3fr 3fr 1.25em;\r\n  grid-auto-flow: column;\r\n}\r\n.bottom {\r\n  padding-left: 1.8em;\r\n  color: rgba(94, 91, 91, 0.788);\r\n}\r\n.task i {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.task i:hover {\r\n  padding: 0;\r\n  background-color: rgb(209, 201, 201);\r\n}\r\n/* popup asking to confirm delete task */\r\n.delete-task-popup {\r\n  position: absolute;\r\n  top: 40%;\r\n  left: 45%;\r\n  width: 15em;\r\n  border: 1px black solid;\r\n  background-color: white;\r\n}\r\n.delete-task-popup h3 {\r\n  padding: 0.5em;\r\n  line-height: 1.3em;\r\n  text-align: center;\r\n  font-size: 1.3em;\r\n  border-bottom: 1px solid gray;\r\n}\r\n.delete-task-popup span {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  padding: 0.8em;\r\n}\r\n.delete-task-popup input {\r\n  font-size: 0.8em;\r\n  font-weight: 600;\r\n  padding: 0.7em 1.2em;\r\n  background-color: red;\r\n}\r\n/*page lock div */\r\n.page-lock {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: 1;\r\n  pointer-events: none;\r\n  background-color: grey;\r\n  opacity: 0.8;\r\n}\r\n.lock {\r\n  pointer-events: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,0BAA0B;AAC5B;AACA;EACE,UAAU;EACV,eAAe;AACjB;;AAEA,eAAe;AACf;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;;EAEnB,WAAW;EACX,iBAAiB;EACjB,qBAAqB;EACrB,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;AACnB;AACA;EACE,kBAAkB;AACpB;;AAEA,WAAW;AACX;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,oCAAoC;EACpC,4BAA4B;AAC9B;AACA;EACE,qBAAqB;EACrB,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;AAClB;AACA;;;;;EAKE,oCAAoC;AACtC;AACA;EACE,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,oCAAoC;AACtC;AACA;EACE,UAAU;EACV,eAAe;AACjB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,UAAU;EACV,gBAAgB;AAClB;AACA;EACE,UAAU;EACV,SAAS;AACX;AACA;EACE,UAAU;AACZ;AACA;EACE,+CAA+C;AACjD;;AAEA,gCAAgC;AAChC;EACE,gBAAgB;EAChB,kBAAkB;EAClB,2BAA2B;AAC7B;AACA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;AACZ;AACA;EACE,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;AACV;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,YAAY;EACZ,cAAc;EACd,gBAAgB;EAChB,mBAAmB;EACnB,oBAAoB;AACtB;AACA;EACE,oCAAoC;AACtC;;AAEA,+BAA+B;AAC/B;EACE,eAAe;EACf,uBAAuB;AACzB;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,gBAAgB;EAChB,iCAAiC;AACnC;AACA;EACE,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,cAAc;;EAEd,gBAAgB;EAChB,uBAAuB;EACvB,gBAAgB;EAChB,gBAAgB;EAChB,cAAc;AAChB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,oCAAoC;AACtC;AACA,0BAA0B;AAC1B;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,WAAW;EACX,uBAAuB;EACvB,uBAAuB;AACzB;AACA;EACE,kBAAkB;EAClB,cAAc;EACd,oCAAoC;AACtC;AACA;EACE,cAAc;AAChB;AACA;EACE,gBAAgB;EAChB,oBAAoB;AACtB;AACA;EACE,yBAAyB;EACzB,oBAAoB;EACpB,cAAc;EACd,WAAW;AACb;AACA;EACE,eAAe;EACf,mBAAmB;EACnB,oBAAoB;EACpB,UAAU;EACV,0BAA0B;EAC1B,kCAAkC;EAClC,iBAAiB;AACnB;AACA,kBAAkB;AAClB;EACE,kBAAkB;EAClB,UAAU;EACV,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,uBAAuB;EACvB,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,QAAQ;EACR,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;AAC/B;AACA;EACE,YAAY;EACZ,UAAU;AACZ;AACA;EACE,eAAe;EACf,cAAc;AAChB;AACA;EACE,UAAU;AACZ;AACA;EACE,UAAU;AACZ;AACA;;EAEE,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,UAAU;EACV,kCAAkC;EAClC,eAAe;EACf,kBAAkB;AACpB;;AAEA,eAAe;AACf;EACE,aAAa;EACb,sBAAsB;;EAEtB,WAAW;EACX,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,6BAA6B;AAC/B;AACA;EACE,gBAAgB;AAClB;AACA;EACE,oBAAoB;EACpB,gDAAgD;EAChD,sBAAsB;AACxB;AACA;EACE,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,UAAU;EACV,oCAAoC;AACtC;AACA,wCAAwC;AACxC;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,WAAW;EACX,uBAAuB;EACvB,uBAAuB;AACzB;AACA;EACE,cAAc;EACd,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,6BAA6B;AAC/B;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,cAAc;AAChB;AACA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,oBAAoB;EACpB,qBAAqB;AACvB;AACA,iBAAiB;AACjB;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,SAAS;EACT,QAAQ;EACR,YAAY;EACZ,WAAW;EACX,UAAU;EACV,oBAAoB;EACpB,sBAAsB;EACtB,YAAY;AACd;AACA;EACE,oBAAoB;AACtB","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\nmain {\r\n  display: flex;\r\n  flex-direction: row;\r\n  height: calc(100vh - 90px);\r\n}\r\naside {\r\n  width: 18%;\r\n  height: inherit;\r\n}\r\n\r\n/* Top Banner */\r\n.banner {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n\r\n  width: 100%;\r\n  color: whitesmoke;\r\n  background-color: red;\r\n  text-align: left;\r\n  padding: 1.25em 4em;\r\n  font-size: 1.1rem;\r\n}\r\n.banner i {\r\n  margin-left: 0.8em;\r\n}\r\n\r\n/*Sidebar */\r\n#tab-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  padding-bottom: 1em;\r\n  background-color: rgb(240, 240, 245);\r\n  border-right: 1px solid gray;\r\n}\r\n#tab-container * {\r\n  padding: 0.5em 1.25em;\r\n  font-size: 1.1em;\r\n}\r\n#tab-container button {\r\n  background: none;\r\n  border: none;\r\n  text-align: left;\r\n}\r\n#inbox:hover,\r\n#today:hover,\r\n#upcoming:hover,\r\n#projects-slider:hover,\r\n#add-project:hover {\r\n  background-color: rgb(209, 201, 201);\r\n}\r\n#tab-container i {\r\n  margin-right: 0.5em;\r\n}\r\n#inbox {\r\n  padding-top: 1.1em;\r\n  background-color: rgb(209, 201, 201);\r\n}\r\n#projects {\r\n  padding: 0;\r\n  margin-top: 2em;\r\n}\r\n#projects-header {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n}\r\n#projects-header h2 {\r\n  padding: 0;\r\n  font-size: 1.5em;\r\n}\r\n#projects-header i {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n.fa-caret-right{\r\n  color: red;\r\n}\r\n.selected {\r\n  background-color: rgb(209, 201, 201) !important;\r\n}\r\n\r\n/* projects section of sidebar */\r\n.collapse {\r\n  transition: 0.5s;\r\n  position: absolute;\r\n  transform: translate(-50em);\r\n}\r\n#projects-body {\r\n  margin-top: 0.25em;\r\n}\r\n#projects-body ul {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0;\r\n}\r\n#projects-body li {\r\n  padding: 0;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n#projects-body button {\r\n  display: inline-flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1em;\r\n}\r\n#projects-body .projects-children{\r\n  width: auto;\r\n  text-align: center;\r\n  overflow: hidden;\r\n}\r\n#projects-body .projects-children i {\r\n  height: 0.1em;\r\n  width: 0.1em;\r\n  padding: 0.5em;\r\n  margin: 0.25em 0;\r\n  margin-right: 0.5em;\r\n  margin-bottom: 0.8em;\r\n}\r\n#projects-body .projects-children:hover {\r\n  background-color: rgb(209, 201, 201);\r\n}\r\n\r\n/* Main interface with to-dos */\r\n.main {\r\n  display: inline;\r\n  width: calc(100% - 18%);\r\n}\r\n.main-container {\r\n  padding: 3em 10em 7em 11em;\r\n}\r\n.main-container h2 {\r\n  line-height: 2em;\r\n  border-bottom: 1px solid darkgray;\r\n}\r\n#add-task {\r\n  margin-top: 0.5em;\r\n  width: 100%;\r\n  border: none;\r\n  padding: 1em 0;\r\n\r\n  text-align: left;\r\n  background-color: white;\r\n  line-height: 2em;\r\n  font-weight: 500;\r\n  font-size: 1em;\r\n}\r\n#add-task i {\r\n  margin-right: 1.2em;\r\n}\r\n#add-task:hover {\r\n  background-color: rgb(239, 239, 239);\r\n}\r\n/*Add new project prompt */\r\n.new-project-card {\r\n  position: absolute;\r\n  top: 40%;\r\n  left: 40%;\r\n  width: 25em;\r\n  border: 1px black solid;\r\n  background-color: white;\r\n}\r\n.new-project-card h3 {\r\n  text-align: center;\r\n  padding: 0.5em;\r\n  background-color: rgb(245, 244, 244);\r\n}\r\n.new-project-card div {\r\n  padding: 1.5em;\r\n}\r\n.new-project-card h4 {\r\n  font-size: 1.2em;\r\n  margin-bottom: 0.8em;\r\n}\r\n.new-project-card input {\r\n  border: 1px solid #585858;\r\n  border-radius: 0.4em;\r\n  padding: 0.4em;\r\n  width: 100%;\r\n}\r\n.new-project-card input[type=\"submit\"] {\r\n  padding: 0.6rem;\r\n  margin-top: 1.25rem;\r\n  margin-right: 0.5rem;\r\n  width: 30%;\r\n  transform: translateX(60%);\r\n  background-color: rgb(250, 84, 84);\r\n  font-size: 1.1rem;\r\n}\r\n/*Add task prompt*/\r\n.new-task {\r\n  position: relative;\r\n  right: 6em;\r\n  width: 70%;\r\n  margin: auto;\r\n  margin-top: 1.5em;\r\n  border: 1px solid black;\r\n  background-color: white;\r\n}\r\n.new-task form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 2em;\r\n  gap: 1em;\r\n  text-align: center;\r\n}\r\n.new-task form span {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-evenly;\r\n}\r\n#add-task-name {\r\n  margin: auto;\r\n  width: 30%;\r\n}\r\n#add-task-desc {\r\n  text-align: top;\r\n  padding: 1.5em;\r\n}\r\n#add-task-priority {\r\n  width: 30%;\r\n}\r\n#add-task-date {\r\n  width: 30%;\r\n}\r\n.new-task form input,\r\n.new-task form select {\r\n  padding: 0.4rem;\r\n}\r\n.new-task form input[type=\"submit\"] {\r\n  margin-top: 1rem;\r\n  width: 30%;\r\n  background-color: rgb(250, 84, 84);\r\n  font-size: 1rem;\r\n  text-align: center;\r\n}\r\n\r\n/*task styling*/\r\n.task {\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  width: 100%;\r\n  padding: 1em 0.25em;\r\n  line-height: 1.4em;\r\n  font-size: 1.3em;\r\n  border-bottom: 1px solid grey;\r\n}\r\n.task span {\r\n  margin-left: 1em;\r\n}\r\n.top {\r\n  display: inline-grid;\r\n  grid-template-columns: 1.25em 3fr 3fr 3fr 1.25em;\r\n  grid-auto-flow: column;\r\n}\r\n.bottom {\r\n  padding-left: 1.8em;\r\n  color: rgba(94, 91, 91, 0.788);\r\n}\r\n.task i {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.task i:hover {\r\n  padding: 0;\r\n  background-color: rgb(209, 201, 201);\r\n}\r\n/* popup asking to confirm delete task */\r\n.delete-task-popup {\r\n  position: absolute;\r\n  top: 40%;\r\n  left: 45%;\r\n  width: 15em;\r\n  border: 1px black solid;\r\n  background-color: white;\r\n}\r\n.delete-task-popup h3 {\r\n  padding: 0.5em;\r\n  line-height: 1.3em;\r\n  text-align: center;\r\n  font-size: 1.3em;\r\n  border-bottom: 1px solid gray;\r\n}\r\n.delete-task-popup span {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  padding: 0.8em;\r\n}\r\n.delete-task-popup input {\r\n  font-size: 0.8em;\r\n  font-weight: 600;\r\n  padding: 0.7em 1.2em;\r\n  background-color: red;\r\n}\r\n/*page lock div */\r\n.page-lock {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: 1;\r\n  pointer-events: none;\r\n  background-color: grey;\r\n  opacity: 0.8;\r\n}\r\n.lock {\r\n  pointer-events: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/);
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.firstWeekContainsDate);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeek, dirtyOptions);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");









 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week?
 *
 * @description
 * Are the given dates in the same week?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, dirtyOptions);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, dirtyOptions);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challange you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function (token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function (token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function (dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <title>To Do List</title>\r\n    <script\r\n      src=\"https://kit.fontawesome.com/969a0e32f3.js\"\r\n      crossorigin=\"anonymous\"\r\n    ></script>\r\n  </head>\r\n  <body>\r\n    <header>\r\n      <div class=\"banner\">\r\n        <h1>To-Do</h1>\r\n        <i class=\"fas fa-list-ul fa-2x\"></i>\r\n      </div>\r\n    </header>\r\n    <main>\r\n      <aside>\r\n          <div id=\"tab-container\">\r\n            <button id=\"inbox\"><i class=\"fas fa-inbox\"></i>Inbox</button>\r\n\r\n            <button id=\"today\"><i class=\"fas fa-calendar-day\"></i>Today</button>\r\n\r\n            <button id=\"upcoming\">\r\n              <i class=\"fas fa-calendar-minus\"></i>Upcoming\r\n            </button>\r\n\r\n            <div id=\"projects\">\r\n              <div id=\"projects-header\">\r\n                <button id=\"projects-slider\"><i class=\"fas fa-caret-down fa-1x\"></i></button>\r\n                <h2>Projects</h2>\r\n                <button id=\"add-project\"> <i class=\"fas fa-plus\"></i> </button>\r\n              </div>\r\n              <div id=\"projects-body\">\r\n                <ul></ul>\r\n              </div>\r\n\r\n            </div>\r\n            \r\n          </div>\r\n        </div>\r\n      </aside>\r\n\r\n      <section class=\"main\">\r\n        <div class=\"main-container\">\r\n          <div id=\"main-todo\">\r\n            <h2>Inbox</h2>\r\n            <button id=\"add-task\"><i class=\"fas fa-plus\"></i>Add Task</button>\r\n          </div>\r\n\r\n        </div>\r\n      </section>\r\n\r\n      \r\n    </main>\r\n\r\n  </body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");
/* harmony import */ var _modules_UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UI.js */ "./src/modules/UI.js");
/* harmony import */ var _modules_Storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Storage.js */ "./src/modules/Storage.js");
__webpack_require__(/*! ./index.html */ "./src/index.html");



 //adds all required event listeners for the page to run properly

(0,_modules_UI_js__WEBPACK_IMPORTED_MODULE_1__.addEventListeners)();
(0,_modules_Storage_js__WEBPACK_IMPORTED_MODULE_2__.loadData)(); //end
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGNBQWMsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sU0FBUyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSw2QkFBNkIsZ0JBQWdCLGlCQUFpQiw2QkFBNkIsS0FBSyxVQUFVLG9CQUFvQiwwQkFBMEIsaUNBQWlDLEtBQUssV0FBVyxpQkFBaUIsc0JBQXNCLEtBQUsscUNBQXFDLG9CQUFvQiwwQkFBMEIsMEJBQTBCLHNCQUFzQix3QkFBd0IsNEJBQTRCLHVCQUF1QiwwQkFBMEIsd0JBQXdCLEtBQUssZUFBZSx5QkFBeUIsS0FBSyx3Q0FBd0Msb0JBQW9CLDZCQUE2QixtQkFBbUIseUJBQXlCLHVCQUF1QiwwQkFBMEIsMkNBQTJDLG1DQUFtQyxLQUFLLHNCQUFzQiw0QkFBNEIsdUJBQXVCLEtBQUssMkJBQTJCLHVCQUF1QixtQkFBbUIsdUJBQXVCLEtBQUsseUdBQXlHLDJDQUEyQyxLQUFLLHNCQUFzQiwwQkFBMEIsS0FBSyxZQUFZLHlCQUF5QiwyQ0FBMkMsS0FBSyxlQUFlLGlCQUFpQixzQkFBc0IsS0FBSyxzQkFBc0Isb0JBQW9CLDBCQUEwQiw4QkFBOEIsS0FBSyx5QkFBeUIsaUJBQWlCLHVCQUF1QixLQUFLLHdCQUF3QixpQkFBaUIsZ0JBQWdCLEtBQUssb0JBQW9CLGlCQUFpQixLQUFLLGVBQWUsc0RBQXNELEtBQUssd0RBQXdELHVCQUF1Qix5QkFBeUIsa0NBQWtDLEtBQUssb0JBQW9CLHlCQUF5QixLQUFLLHVCQUF1QixvQkFBb0IsNkJBQTZCLGlCQUFpQixLQUFLLHVCQUF1QixpQkFBaUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsMEJBQTBCLEtBQUssMkJBQTJCLDJCQUEyQiwwQkFBMEIsOEJBQThCLDBCQUEwQixlQUFlLEtBQUssc0NBQXNDLGtCQUFrQix5QkFBeUIsdUJBQXVCLEtBQUsseUNBQXlDLG9CQUFvQixtQkFBbUIscUJBQXFCLHVCQUF1QiwwQkFBMEIsMkJBQTJCLEtBQUssNkNBQTZDLDJDQUEyQyxLQUFLLG1EQUFtRCxzQkFBc0IsOEJBQThCLEtBQUsscUJBQXFCLGlDQUFpQyxLQUFLLHdCQUF3Qix1QkFBdUIsd0NBQXdDLEtBQUssZUFBZSx3QkFBd0Isa0JBQWtCLG1CQUFtQixxQkFBcUIsMkJBQTJCLDhCQUE4Qix1QkFBdUIsdUJBQXVCLHFCQUFxQixLQUFLLGlCQUFpQiwwQkFBMEIsS0FBSyxxQkFBcUIsMkNBQTJDLEtBQUssc0RBQXNELHlCQUF5QixlQUFlLGdCQUFnQixrQkFBa0IsOEJBQThCLDhCQUE4QixLQUFLLDBCQUEwQix5QkFBeUIscUJBQXFCLDJDQUEyQyxLQUFLLDJCQUEyQixxQkFBcUIsS0FBSywwQkFBMEIsdUJBQXVCLDJCQUEyQixLQUFLLDZCQUE2QixnQ0FBZ0MsMkJBQTJCLHFCQUFxQixrQkFBa0IsS0FBSyw4Q0FBOEMsc0JBQXNCLDBCQUEwQiwyQkFBMkIsaUJBQWlCLGlDQUFpQyx5Q0FBeUMsd0JBQXdCLEtBQUssc0NBQXNDLHlCQUF5QixpQkFBaUIsaUJBQWlCLG1CQUFtQix3QkFBd0IsOEJBQThCLDhCQUE4QixLQUFLLG9CQUFvQixvQkFBb0IsNkJBQTZCLG1CQUFtQixlQUFlLHlCQUF5QixLQUFLLHlCQUF5QixvQkFBb0IsMEJBQTBCLG9DQUFvQyxLQUFLLG9CQUFvQixtQkFBbUIsaUJBQWlCLEtBQUssb0JBQW9CLHNCQUFzQixxQkFBcUIsS0FBSyx3QkFBd0IsaUJBQWlCLEtBQUssb0JBQW9CLGlCQUFpQixLQUFLLG9EQUFvRCxzQkFBc0IsS0FBSywyQ0FBMkMsdUJBQXVCLGlCQUFpQix5Q0FBeUMsc0JBQXNCLHlCQUF5QixLQUFLLG1DQUFtQyxvQkFBb0IsNkJBQTZCLHNCQUFzQiwwQkFBMEIseUJBQXlCLHVCQUF1QixvQ0FBb0MsS0FBSyxnQkFBZ0IsdUJBQXVCLEtBQUssVUFBVSwyQkFBMkIsdURBQXVELDZCQUE2QixLQUFLLGFBQWEsMEJBQTBCLHFDQUFxQyxLQUFLLGFBQWEsb0JBQW9CLDhCQUE4QixLQUFLLG1CQUFtQixpQkFBaUIsMkNBQTJDLEtBQUsscUVBQXFFLHlCQUF5QixlQUFlLGdCQUFnQixrQkFBa0IsOEJBQThCLDhCQUE4QixLQUFLLDJCQUEyQixxQkFBcUIseUJBQXlCLHlCQUF5Qix1QkFBdUIsb0NBQW9DLEtBQUssNkJBQTZCLG9CQUFvQiwwQkFBMEIsb0NBQW9DLHFCQUFxQixLQUFLLDhCQUE4Qix1QkFBdUIsdUJBQXVCLDJCQUEyQiw0QkFBNEIsS0FBSyxzQ0FBc0Msc0JBQXNCLGFBQWEsY0FBYyxnQkFBZ0IsZUFBZSxtQkFBbUIsa0JBQWtCLGlCQUFpQiwyQkFBMkIsNkJBQTZCLG1CQUFtQixLQUFLLFdBQVcsMkJBQTJCLEtBQUssdUJBQXVCO0FBQ3Z6ZjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVCQUF1QixrQkFBa0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0Isc0JBQXNCO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JCZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1QwRDtBQUNXO0FBQ0o7QUFDUTtBQUNkO0FBQ1E7QUFDTjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLHlCQUF5Qix3RUFBYyxpQkFBaUI7O0FBRXhELDZFQUE2RTs7QUFFN0U7QUFDQTtBQUNBLGFBQWEscUVBQWU7QUFDNUIsTUFBTTs7O0FBR047QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07OztBQUdOLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQkFBc0IsMkVBQWlCLFFBQVE7O0FBRS9DLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtRUFBaUI7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxlQUFlLG9FQUFVOztBQUV6QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGtCQUFrQix1RUFBYTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IseUVBQWU7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCO0FBQ0E7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RUEsc0ZBQXNGO0FBQ3RGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEUsd0JBQXdCLDRDQUE0QztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUSxpRUFBaUU7QUFDcEYsV0FBVyxlQUFlO0FBQzFCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxhQUFhLFFBQVE7QUFDckIsWUFBWSxXQUFXO0FBQ3ZCLFlBQVksWUFBWTtBQUN4QixZQUFZLFlBQVk7QUFDeEIsWUFBWSxZQUFZO0FBQ3hCLFlBQVksWUFBWTtBQUN4QixZQUFZLFlBQVk7QUFDeEIsWUFBWSxZQUFZLHlHQUF5RztBQUNqSSxZQUFZLFlBQVkscUdBQXFHO0FBQzdILFlBQVksWUFBWSwrR0FBK0c7QUFDdkksWUFBWSxZQUFZLGlIQUFpSDtBQUN6SSxZQUFZLFlBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkO0FBQ0E7QUFDQSxpQ0FBaUMsOERBQWE7QUFDOUM7QUFDQSwrRUFBK0UsbUVBQVM7QUFDeEYscUdBQXFHLG1FQUFTLGlDQUFpQzs7QUFFL0k7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkRBQTZELG1FQUFTO0FBQ3RFLDBFQUEwRSxtRUFBUyx3QkFBd0I7O0FBRTNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQiw0REFBTTs7QUFFM0IsT0FBTyw2REFBTztBQUNkO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7OztBQUdBLHVCQUF1Qix5RkFBK0I7QUFDdEQsZ0JBQWdCLHFFQUFlO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsMkVBQWM7QUFDeEM7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHVFQUFVOztBQUU5QjtBQUNBLGtEQUFrRCx1RkFBd0I7QUFDMUUsUUFBUSxrRkFBbUI7QUFDM0I7O0FBRUEsbURBQW1ELHdGQUF5QjtBQUM1RSxRQUFRLGtGQUFtQjtBQUMzQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaGJ5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q2tEO0FBQ087O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUSxpRUFBaUU7QUFDcEYsV0FBVyxlQUFlO0FBQzFCLGFBQWEsU0FBUztBQUN0QixZQUFZLFdBQVc7QUFDdkIsWUFBWSxZQUFZO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLDRCQUE0QixpRUFBVztBQUN2Qyw2QkFBNkIsaUVBQVc7QUFDeEM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ3dDO0FBQ0E7QUFDaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7O0FBRWQsT0FBTyw0REFBTTtBQUNiO0FBQ0E7O0FBRUEsYUFBYSw0REFBTTtBQUNuQjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHdGQUF3Rjs7QUFFeEY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQy9DZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEMsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixRQUFRO0FBQzNCLEdBQUc7QUFDSDtBQUNBO0FBQ0EscUJBQXFCLFFBQVE7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSix5Q0FBeUMsT0FBTztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7O0FDdkY0QztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTyxPQUFPLE1BQU07QUFDL0IsV0FBVyxPQUFPLE9BQU8sTUFBTTtBQUMvQixhQUFhLE1BQU0sSUFBSSxNQUFNO0FBQzdCLFlBQVksTUFBTSxJQUFJLE1BQU07QUFDNUI7QUFDQTtBQUNBLFFBQVEsMkVBQWlCO0FBQ3pCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsUUFBUSwyRUFBaUI7QUFDekI7QUFDQTtBQUNBLEdBQUc7QUFDSCxZQUFZLDJFQUFpQjtBQUM3QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUNqQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7OztBQ2J3QztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPLHlFQUFlO0FBQ3RCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsV0FBVyx5RUFBZTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILFNBQVMseUVBQWU7QUFDeEI7QUFDQTtBQUNBLEdBQUc7QUFDSCxPQUFPLHlFQUFlO0FBQ3RCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsYUFBYSx5RUFBZTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSndDO0FBQ2M7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDZFQUFtQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILE9BQU8sc0VBQVk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsV0FBVyxzRUFBWTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxTQUFTLHNFQUFZO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILE9BQU8sc0VBQVk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsYUFBYSxzRUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGlFQUFlLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR3dDO0FBQ1I7QUFDUTtBQUNaO0FBQ047O0FBRTFDO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isb0VBQWM7QUFDaEMsY0FBYyxnRUFBVTtBQUN4QixrQkFBa0Isb0VBQWM7QUFDaEMsWUFBWSw4REFBUTtBQUNwQixTQUFTLDJEQUFLO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdCbUI7QUFDVztBQUNNO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVEsaUVBQWlFO0FBQ3BGLFdBQVcsZUFBZTtBQUMxQixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCLFlBQVksWUFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLGlCQUFpQjtBQUNsRjtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxtRUFBUztBQUN0RSwwRUFBMEUsbUVBQVMsd0JBQXdCOztBQUUzRztBQUNBO0FBQ0E7O0FBRUEsYUFBYSw0REFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRtRDtBQUNPO0FBQ0Q7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxlQUFlLG1FQUFTO0FBQ3hCLFNBQVMscUVBQWU7QUFDeEI7Ozs7Ozs7Ozs7Ozs7OztBQzlCeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLHlEQUF5RDs7QUFFekQ7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSx3S0FBd0s7O0FBRXhLO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRm5CLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNHO0FBQ3RHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQWtDLG1CQUFPLENBQUMsc0NBQUQsQ0FBUDs7QUFDQTtBQUNBO0NBR0E7O0FBQ0F2SixpRUFBaUI7QUFDakJyQiw2REFBUSxJQUNSLEsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvUHJvamVjdE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvcmVuZGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy90b0RvTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5odG1sIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2JjZjIiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dG9Eb0xpc3QgLCB0b0RvSXRlbX0gZnJvbSAnLi90b0RvTGlzdC5qcyc7XHJcblxyXG4vL1Byb2plY3QgY2xhc3MgaGFzIGFuIGFycmF5IChwcm9qZWN0c0xpc3QpIHdpdGggb2JqZWN0cyAoa2V5OiBuYW1lIG9mIHRvIGRvIGxpc3QpICh2YWx1ZTogdG9Eb0xpc3QgY2xhc3MpXHJcbmNsYXNzIFByb2plY3Qge1xyXG4gXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzTGlzdCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFByb2plY3QodG9Eb0xpc3ROYW1lKSB7XHJcbiAgICAgICAgbGV0IG5ld1RvRG9MaXN0ID0gbmV3IHRvRG9MaXN0KHRvRG9MaXN0TmFtZSk7XHJcbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSB7XHJcbiAgICAgICAgICAgIFt0b0RvTGlzdE5hbWVdOiBuZXdUb0RvTGlzdCxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0c0xpc3QucHVzaChuZXdQcm9qZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVQcm9qZWN0KGlkKSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0c0xpc3Quc3BsaWNlKGlkLDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2plY3RzKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHNMaXN0O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcclxuXHJcbiAiLCJpbXBvcnQgeyB0b2RheUhhbmRsZXIsIHVwY29taW5nSGFuZGxlciB9IGZyb20gXCIuL2xvZ2ljLmpzXCI7XHJcbmltcG9ydCB7IHJlbmRlclRvRG9MaXN0IH0gZnJvbSBcIi4vcmVuZGVyLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgaW5ib3hEYXRhYmFzZSxcclxuICBwcm9qZWN0c0RhdGFiYXNlLFxyXG4gIHRvZGF5RGF0YWJhc2UsXHJcbiAgdXBjb21pbmdEYXRhYmFzZSxcclxufSBmcm9tIFwiLi9VSS5qc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlRGF0YSgpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzRGF0YWJhc2VcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNEYXRhYmFzZSkpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaW5ib3hEYXRhYmFzZVwiLCBKU09OLnN0cmluZ2lmeShpbmJveERhdGFiYXNlKSk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RheURhdGFiYXNlXCIsIEpTT04uc3RyaW5naWZ5KHRvZGF5RGF0YWJhc2UpKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVwY29taW5nRGF0YWJhc2VcIiwgSlNPTi5zdHJpbmdpZnkodXBjb21pbmdEYXRhYmFzZSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZERhdGEoKSB7XHJcbiAgcmVuZGVyVG9Eb0xpc3QoaW5ib3hEYXRhYmFzZSxudWxsLFwiSW5ib3hcIik7XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5pbXBvcnQgaXNTYW1lV2VlayBmcm9tIFwiZGF0ZS1mbnMvaXNTYW1lV2Vla1wiO1xyXG5pbXBvcnQgeyB0b0NsYXNzLCB0b2RheUhhbmRsZXIsIHVwY29taW5nSGFuZGxlciB9IGZyb20gXCIuL2xvZ2ljLmpzXCI7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3RNYW5hZ2VyLmpzXCI7XHJcbmltcG9ydCB7IHJlbmRlclRvRG9MaXN0LCBkZWxldGVQcm9qZWN0UG9wdXAgfSBmcm9tIFwiLi9yZW5kZXIuanNcIjtcclxuaW1wb3J0IHsgc3RvcmVEYXRhIH0gZnJvbSBcIi4vU3RvcmFnZS5qc1wiO1xyXG5pbXBvcnQgeyB0b0RvSXRlbSB9IGZyb20gXCIuL3RvRG9MaXN0LmpzXCI7XHJcblxyXG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKTtcclxuY29uc3QgdGFiQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWItY29udGFpbmVyXCIpO1xyXG5cclxuY29uc3QgaW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luYm94XCIpO1xyXG5jb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kYXlcIik7XHJcbmNvbnN0IHVwY29taW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1cGNvbWluZ1wiKTtcclxuY29uc3QgcHJvamVjdHNTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzLXNsaWRlclwiKTtcclxuY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3RcIik7XHJcbmNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrXCIpO1xyXG5cclxubGV0IHByb2plY3RzRGF0YWJhc2UgPSBuZXcgUHJvamVjdCgpO1xyXG5sZXQgaW5ib3hEYXRhYmFzZSA9IG5ldyBQcm9qZWN0KCk7XHJcbmluYm94RGF0YWJhc2UuYWRkUHJvamVjdChcIkluYm94XCIpO1xyXG5cclxubGV0IHRvZGF5RGF0YWJhc2UgPSBuZXcgUHJvamVjdCgpO1xyXG50b2RheURhdGFiYXNlLmFkZFByb2plY3QoXCJUb2RheVwiKTtcclxuXHJcbmxldCB1cGNvbWluZ0RhdGFiYXNlID0gbmV3IFByb2plY3QoKTtcclxudXBjb21pbmdEYXRhYmFzZS5hZGRQcm9qZWN0KFwiVXBjb21pbmdcIik7XHJcblxyXG5sZXQgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzLWJvZHlcIik7XHJcblxyXG5pZiAoXHJcbiAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzRGF0YWJhc2VcIikpIHx8XHJcbiAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImluYm94RGF0YWJhc2VcIikpIHx8XHJcbiAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZGF5RGF0YWJhc2VcIikpIHx8XHJcbiAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVwY29taW5nRGF0YWJhc2VcIikpXHJcbikge1xyXG4gIHRvQ2xhc3MoXCJJbmJveFwiLCBpbmJveERhdGFiYXNlLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImluYm94RGF0YWJhc2VcIikpO1xyXG4gIHRvQ2xhc3MoXCJUb2RheVwiLCB0b2RheURhdGFiYXNlLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZGF5RGF0YWJhc2VcIikpO1xyXG4gIHRvQ2xhc3MoXHJcbiAgICBcIlVwY29taW5nXCIsXHJcbiAgICB1cGNvbWluZ0RhdGFiYXNlLFxyXG4gICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1cGNvbWluZ0RhdGFiYXNlXCIpXHJcbiAgKTtcclxuICB0b0NsYXNzKFxyXG4gICAgXCJQcm9qZWN0XCIsXHJcbiAgICBwcm9qZWN0c0RhdGFiYXNlLFxyXG4gICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c0RhdGFiYXNlXCIpXHJcbiAgKTtcclxufVxyXG5cclxuLy9pbmJveCBpcyBzZWxlY3RlZCBieSBkZWZhdWx0XHJcbmluYm94LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuXHJcbi8vYWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gYWxsIGNsaWNrYWJsZSBidXR0b25zXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICBpbmJveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheUluYm94RGl2KTtcclxuICB0b2RheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheVRvZGF5RGl2KTtcclxuICB1cGNvbWluZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheVVwY29taW5nRGl2KTtcclxuICBwcm9qZWN0c1NsaWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheVByb2plY3RMaXN0KTtcclxuICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdQcm9qZWN0UHJvbXB0KTtcclxuICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUYXNrKTtcclxufVxyXG5cclxuLy9hZGQgbmV3IHRhc2sgdG8gY3VycmVudCB0byBkbyBsaXN0IHNlbGVjdGlvblxyXG5mdW5jdGlvbiBhZGRUYXNrKGUpIHtcclxuICBsZXQgYnV0dG9uID0gZS50YXJnZXQ7XHJcbiAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbGV0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi10b2RvXCIpO1xyXG5cclxuICBkaXYuaW5uZXJIVE1MID0gYFxyXG4gIDxmb3JtIG1ldGhvZD1cInBvc3RcIj5cclxuXHJcbiAgPGgzPkFkZCBUYXNrPC9oMz5cclxuXHJcbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBpZD1cImFkZC10YXNrLW5hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIj5cclxuICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZGVzY1wiIGlkPVwiYWRkLXRhc2stZGVzY1wiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIj5cclxuICA8c3Bhbj5cclxuICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZGF0ZVwiIGlkPVwiYWRkLXRhc2stZGF0ZVwiPlxyXG4gIDxzZWxlY3QgbmFtZT1cInByaW9yaXR5XCIgaWQ9XCJhZGQtdGFzay1wcmlvcml0eVwiPlxyXG4gICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBUYXNrIFByaW9yaXR5PC9vcHRpb24+XHJcbiAgICA8b3B0aW9uIHZhbHVlPVwiSGlnaFwiPiBIaWdoIDwvb3B0aW9uPlxyXG4gICAgPG9wdGlvbiB2YWx1ZT1cIk1lZGl1bVwiPiBNZWRpdW0gPC9vcHRpb24+XHJcbiAgICA8b3B0aW9uIHZhbHVlPVwiTG93XCI+IExvdyA8L29wdGlvbj5cclxuICA8L3NlbGVjdD5cclxuICA8L3NwYW4+XHJcblxyXG5cclxuICA8c3Bhbj5cclxuICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQWRkXCI+XHJcbiAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkNhbmNlbFwiPlxyXG4gIDwvc3Bhbj5cclxuXHJcbiAgPC9mb3JtPlxyXG5gO1xyXG5cclxuICBidXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICBkaXYuc3R5bGVbXCJ6LWluZGV4XCJdID0gXCIyXCI7XHJcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJuZXctdGFza1wiKTtcclxuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICBhZGRQYWdlTG9jaygpO1xyXG5cclxuICBsZXQgbmV3VGFza0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRhc2tcIik7XHJcbiAgbGV0IGlucHV0RmllbGQgPSBuZXdUYXNrRGl2LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stbmFtZVwiKTtcclxuICBsZXQgc3VibWl0Qm94ZXMgPSBuZXdUYXNrRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPXN1Ym1pdF1cIik7XHJcbiAgY29uc3QgY3VycmVudGx5U2VsZWN0ZWQgPSB0YWJDb250YWluZXJcclxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpXHJcbiAgICAuZ2V0QXR0cmlidXRlKFwiaWRcIik7XHJcblxyXG4gIC8vY2hlY2tzIHVzZXIgaW5wdXRcclxuICBzdWJtaXRCb3hlcy5mb3JFYWNoKChpbnB1dCkgPT5cclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmIChpbnB1dC52YWx1ZSA9PT0gXCJBZGRcIiAmJiBpbnB1dEZpZWxkLnZhbHVlICE9IFwiXCIpIHtcclxuICAgICAgICBsZXQgZm9ybSA9IG5ld1Rhc2tEaXYucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBmb3JtLmVsZW1lbnRzW1wibmFtZVwiXS52YWx1ZTtcclxuICAgICAgICBsZXQgZGVzYyA9IGZvcm0uZWxlbWVudHNbXCJkZXNjXCJdLnZhbHVlO1xyXG4gICAgICAgIGxldCBkYXRlID0gZm9ybS5lbGVtZW50c1tcImRhdGVcIl0udmFsdWU7XHJcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZm9ybS5lbGVtZW50c1tcInByaW9yaXR5XCJdLnZhbHVlO1xyXG5cclxuICAgICAgICAvL2N1cnJlbnRseVNlbGVjdGVkIGlzIGEgcHJvamVjdCwgYWRkIG5ldyB0YXNrIHRvIHByb2plY3RcclxuICAgICAgICBpZiAoIWlzTmFOKGN1cnJlbnRseVNlbGVjdGVkKSkge1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhjdXJyZW50bHlTZWxlY3RlZCk7XHJcbiAgICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9XHJcbiAgICAgICAgICAgIHByb2plY3RzRGF0YWJhc2UucHJvamVjdHNMaXN0W2N1cnJlbnRseVNlbGVjdGVkXTtcclxuICAgICAgICAgIGNvbnN0IG9iak5hbWUgPSBPYmplY3Qua2V5cyhjdXJyZW50UHJvamVjdClbMF07XHJcblxyXG4gICAgICAgICAgbGV0IHRvRG9MaXN0ID0gY3VycmVudFByb2plY3Rbb2JqTmFtZV07XHJcbiAgICAgICAgICBsZXQgdG9Eb1Rhc2sgPSBuZXcgdG9Eb0l0ZW0obmFtZSwgZGVzYywgZGF0ZSwgcHJpb3JpdHkpO1xyXG4gICAgICAgICAgdG9Eb0xpc3QubmV3SXRlbSh0b0RvVGFzayk7XHJcblxyXG4gICAgICAgICAgc3RvcmVEYXRhKCk7XHJcbiAgICAgICAgICByZW5kZXJUb0RvTGlzdChwcm9qZWN0c0RhdGFiYXNlLCBjdXJyZW50bHlTZWxlY3RlZCwgXCJQcm9qZWN0XCIpO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyh0b0RvTGlzdCk7ZWRpdFRhc2tcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vY3VycmVudGx5U2VsZWN0ZWQgaXMgSW5ib3gvVG9kYXkvVXBjb21pbmdcclxuICAgICAgICBlbHNlIGlmIChjdXJyZW50bHlTZWxlY3RlZCA9PSBcImluYm94XCIpIHtcclxuICAgICAgICAgIGNvbnN0IGluYm94T2JqID0gaW5ib3hEYXRhYmFzZS5wcm9qZWN0c0xpc3RbMF07XHJcbiAgICAgICAgICBjb25zdCB0b0RvTGlzdCA9IGluYm94T2JqLkluYm94O1xyXG5cclxuICAgICAgICAgIGxldCB0b0RvVGFzayA9IG5ldyB0b0RvSXRlbShuYW1lLCBkZXNjLCBkYXRlLCBwcmlvcml0eSk7XHJcbiAgICAgICAgICB0b0RvTGlzdC5uZXdJdGVtKHRvRG9UYXNrKTtcclxuXHJcbiAgICAgICAgICBzdG9yZURhdGEoKTtcclxuICAgICAgICAgIHJlbmRlclRvRG9MaXN0KGluYm94RGF0YWJhc2UsIG51bGwsIFwiSW5ib3hcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2N1cnJlbnRseVNlbGVjdGVkIGlzIFRvZGF5L1VwY29taW5nXHJcbiAgICAgICAgZWxzZSBpZiAoY3VycmVudGx5U2VsZWN0ZWQgPT0gXCJ0b2RheVwiKSB7XHJcbiAgICAgICAgICBjb25zdCB0b2RheU9iaiA9IHRvZGF5RGF0YWJhc2UucHJvamVjdHNMaXN0WzBdO1xyXG4gICAgICAgICAgY29uc3QgdG9Eb0xpc3QgPSB0b2RheU9iai5Ub2RheTtcclxuXHJcbiAgICAgICAgICBsZXQgY3VycmVudERhdGUgPSBmb3JtYXQobmV3IERhdGUoKSwgXCJ5eXl5LU1NLWRkXCIpO1xyXG4gICAgICAgICAgaWYgKGRhdGUgIT0gY3VycmVudERhdGUpIHtcclxuICAgICAgICAgICAgZGF0ZSA9IGN1cnJlbnREYXRlO1xyXG4gICAgICAgICAgICBsZXQgdG9Eb1Rhc2sgPSBuZXcgdG9Eb0l0ZW0obmFtZSwgZGVzYywgZGF0ZSwgcHJpb3JpdHkpO1xyXG4gICAgICAgICAgICB0b0RvTGlzdC5uZXdJdGVtKHRvRG9UYXNrKTtcclxuICAgICAgICAgICAgYWxlcnQoXCJEYXRlIGF1dG9tYXRpY2FsbHkgc2V0IHRvIHRvZGF5XCIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHRvRG9UYXNrID0gbmV3IHRvRG9JdGVtKG5hbWUsIGRlc2MsIGRhdGUsIHByaW9yaXR5KTtcclxuICAgICAgICAgICAgdG9Eb0xpc3QubmV3SXRlbSh0b0RvVGFzayk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc3RvcmVEYXRhKCk7XHJcbiAgICAgICAgICB0b2RheUhhbmRsZXIodG9kYXlEYXRhYmFzZSwgaW5ib3hEYXRhYmFzZSwgcHJvamVjdHNEYXRhYmFzZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50bHlTZWxlY3RlZCA9PSBcInVwY29taW5nXCIpIHtcclxuICAgICAgICAgIGNvbnN0IHVwY29taW5nT2JqID0gdXBjb21pbmdEYXRhYmFzZS5wcm9qZWN0c0xpc3RbMF07XHJcbiAgICAgICAgICBjb25zdCB0b0RvTGlzdCA9IHVwY29taW5nT2JqLlVwY29taW5nO1xyXG5cclxuICAgICAgICAgIGxldCBmb3JtYXR0ZWRDdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICBsZXQgeWVhciA9IGRhdGUuc3BsaXQoXCItXCIpWzBdO1xyXG4gICAgICAgICAgbGV0IG1vbnRoID0gZGF0ZS5zcGxpdChcIi1cIilbMV07XHJcbiAgICAgICAgICBsZXQgZGF5ID0gZGF0ZS5zcGxpdChcIi1cIilbMl07XHJcblxyXG4gICAgICAgICAgbGV0IGZvcm1hdHRlZFByb2plY3REYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXkpO1xyXG5cclxuICAgICAgICAgIGlmIChpc1NhbWVXZWVrKGZvcm1hdHRlZEN1cnJlbnREYXRlLCBmb3JtYXR0ZWRQcm9qZWN0RGF0ZSkpIHtcclxuICAgICAgICAgICAgbGV0IHRvRG9UYXNrID0gbmV3IHRvRG9JdGVtKG5hbWUsIGRlc2MsIGRhdGUsIHByaW9yaXR5KTtcclxuICAgICAgICAgICAgdG9Eb0xpc3QubmV3SXRlbSh0b0RvVGFzayk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydChcclxuICAgICAgICAgICAgICBcIlRhc2sgbXVzdCBiZSBkdWUgdGhpcyB3ZWVrIHRvIGJlIGNvbnNpZGVyZWQgdXBjb21pbmcsIHRyeSBhZ2FpblwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc3RvcmVEYXRhKCk7XHJcbiAgICAgICAgICB1cGNvbWluZ0hhbmRsZXIodXBjb21pbmdEYXRhYmFzZSwgaW5ib3hEYXRhYmFzZSwgcHJvamVjdHNEYXRhYmFzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYucmVtb3ZlKCk7XHJcbiAgICAgICAgcmVtb3ZlUGFnZUxvY2soKTtcclxuXHJcbiAgICAgICAgYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICB9IGVsc2UgaWYgKGlucHV0RmllbGQudmFsdWUgPT0gXCJcIiAmJiBpbnB1dC52YWx1ZSAhPSBcIkNhbmNlbFwiKSB7XHJcbiAgICAgICAgYWxlcnQoXCJOYW1lIG11c3QgYmUgYXQgbGVhc3QgMSBjaGFyYWN0ZXJcIik7XHJcbiAgICAgIH1cclxuICAgICAgLy9jYW5jZWxcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgZGl2LnJlbW92ZSgpO1xyXG4gICAgICAgIHJlbW92ZVBhZ2VMb2NrKCk7XHJcbiAgICAgICAgYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICk7XHJcbn1cclxuXHJcbi8vZWRpdCBleGlzdGluZyB0YXNrXHJcbmV4cG9ydCBmdW5jdGlvbiBlZGl0VGFzayhlKSB7XHJcbiAgbGV0IGJ1dHRvbiA9IGUudGFyZ2V0O1xyXG4gIGxldCBzZWxlY3RlZERpdiA9IGJ1dHRvbi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgbGV0IHNlbGVjdGVkRGl2U3BhbiA9IHNlbGVjdGVkRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuXCIpO1xyXG4gIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxldCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tdG9kb1wiKTtcclxuICBsZXQgdG9Eb0FyciA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIik7XHJcblxyXG4gIGRpdi5pbm5lckhUTUwgPSBgXHJcbiAgPGZvcm0gbWV0aG9kPVwicG9zdFwiPlxyXG5cclxuICA8aDM+RWRpdCBUYXNrPC9oMz5cclxuXHJcbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBpZD1cImFkZC10YXNrLW5hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiB2YWx1ZT1cIiR7c2VsZWN0ZWREaXZTcGFuWzBdLmlubmVyVGV4dC50cmltKCl9XCI+XHJcbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRlc2NcIiBpZD1cImFkZC10YXNrLWRlc2NcIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCIgdmFsdWU9XCIke3NlbGVjdGVkRGl2XHJcbiAgICAucXVlcnlTZWxlY3RvcihcIi5ib3R0b21cIilcclxuICAgIC5pbm5lclRleHQuc3Vic3RyaW5nKFxyXG4gICAgICBzZWxlY3RlZERpdi5xdWVyeVNlbGVjdG9yKFwiLmJvdHRvbVwiKS5pbm5lclRleHQuaW5kZXhPZihcIiBcIilcclxuICAgIClcclxuICAgIC50cmltKCl9XCI+XHJcbiAgPHNwYW4+XHJcbiAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImRhdGVcIiBpZD1cImFkZC10YXNrLWRhdGVcIj5cclxuICA8c2VsZWN0IG5hbWU9XCJwcmlvcml0eVwiIGlkPVwiYWRkLXRhc2stcHJpb3JpdHlcIj5cclxuICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgVGFzayBQcmlvcml0eTwvb3B0aW9uPlxyXG4gICAgPG9wdGlvbiB2YWx1ZT1cIkhpZ2hcIj4gSGlnaCA8L29wdGlvbj5cclxuICAgIDxvcHRpb24gdmFsdWU9XCJNZWRpdW1cIj4gTWVkaXVtIDwvb3B0aW9uPlxyXG4gICAgPG9wdGlvbiB2YWx1ZT1cIkxvd1wiPiBMb3cgPC9vcHRpb24+XHJcbiAgPC9zZWxlY3Q+XHJcbiAgPC9zcGFuPlxyXG5cclxuICA8c3Bhbj5cclxuICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiRWRpdFwiPlxyXG4gIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJDYW5jZWxcIj5cclxuICA8L3NwYW4+XHJcblxyXG4gIDwvZm9ybT5cclxuYDtcclxuXHJcbiAgYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgZGl2LnN0eWxlW1wiei1pbmRleFwiXSA9IFwiMlwiO1xyXG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwibmV3LXRhc2tcIik7XHJcbiAgcGFyZW50LmFwcGVuZENoaWxkKGRpdik7XHJcbiAgYWRkUGFnZUxvY2soKTtcclxuXHJcbiAgbGV0IG5ld1Rhc2tEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy10YXNrXCIpO1xyXG4gIGxldCBpbnB1dEZpZWxkID0gbmV3VGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLW5hbWVcIik7XHJcbiAgbGV0IHN1Ym1pdEJveGVzID0gbmV3VGFza0Rpdi5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT1zdWJtaXRdXCIpO1xyXG4gIGNvbnN0IGN1cnJlbnRseVNlbGVjdGVkID0gdGFiQ29udGFpbmVyXHJcbiAgICAucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKVxyXG4gICAgLmdldEF0dHJpYnV0ZShcImlkXCIpO1xyXG5cclxuICAvL2NoZWNrcyB1c2VyIGlucHV0XHJcbiAgc3VibWl0Qm94ZXMuZm9yRWFjaCgoaW5wdXQpID0+XHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAoaW5wdXQudmFsdWUgPT09IFwiRWRpdFwiICYmIGlucHV0RmllbGQudmFsdWUgIT0gXCJcIikge1xyXG4gICAgICAgIGxldCBmb3JtID0gbmV3VGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcclxuICAgICAgICBsZXQgbmFtZSA9IGZvcm0uZWxlbWVudHNbXCJuYW1lXCJdLnZhbHVlO1xyXG4gICAgICAgIGxldCBkZXNjID0gZm9ybS5lbGVtZW50c1tcImRlc2NcIl0udmFsdWU7XHJcbiAgICAgICAgbGV0IGRhdGUgPSBmb3JtLmVsZW1lbnRzW1wiZGF0ZVwiXS52YWx1ZTtcclxuICAgICAgICBsZXQgcHJpb3JpdHkgPSBmb3JtLmVsZW1lbnRzW1wicHJpb3JpdHlcIl0udmFsdWU7XHJcblxyXG4gICAgICAgIC8vY3VycmVudGx5U2VsZWN0ZWQgaXMgYSBwcm9qZWN0LCBlZGl0IHRhc2tcclxuICAgICAgICBpZiAoIWlzTmFOKGN1cnJlbnRseVNlbGVjdGVkKSkge1xyXG4gICAgICAgICAgbGV0IG5ld1RvRG9BcnIgPSBBcnJheS5mcm9tKHRvRG9BcnIpO1xyXG4gICAgICAgICAgbGV0IGluZGV4T2ZTZWxlY3RlZEVsZW1lbnQgPSBuZXdUb0RvQXJyLmZpbmRJbmRleChcclxuICAgICAgICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnQgPT0gYnV0dG9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPVxyXG4gICAgICAgICAgICBwcm9qZWN0c0RhdGFiYXNlLnByb2plY3RzTGlzdFtjdXJyZW50bHlTZWxlY3RlZF07XHJcbiAgICAgICAgICBjb25zdCBvYmpOYW1lID0gT2JqZWN0LmtleXMoY3VycmVudFByb2plY3QpWzBdO1xyXG5cclxuICAgICAgICAgIGxldCB0b0RvTGlzdCA9IGN1cnJlbnRQcm9qZWN0W29iak5hbWVdO1xyXG4gICAgICAgICAgbGV0IHRvRG9UYXNrID0gbmV3IHRvRG9JdGVtKG5hbWUsIGRlc2MsIGRhdGUsIHByaW9yaXR5KTtcclxuICAgICAgICAgIHRvRG9MaXN0LnVwZGF0ZUl0ZW0oaW5kZXhPZlNlbGVjdGVkRWxlbWVudCwgdG9Eb1Rhc2spO1xyXG5cclxuICAgICAgICAgIHN0b3JlRGF0YSgpO1xyXG4gICAgICAgICAgcmVuZGVyVG9Eb0xpc3QocHJvamVjdHNEYXRhYmFzZSwgY3VycmVudGx5U2VsZWN0ZWQsIFwiUHJvamVjdFwiKTtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2codG9Eb0xpc3QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9jdXJyZW50bHlTZWxlY3RlZCBpcyBJbmJveFxyXG4gICAgICAgIGVsc2UgaWYgKGN1cnJlbnRseVNlbGVjdGVkID09IFwiaW5ib3hcIikge1xyXG4gICAgICAgICAgbGV0IG5ld1RvRG9BcnIgPSBBcnJheS5mcm9tKHRvRG9BcnIpO1xyXG4gICAgICAgICAgbGV0IGluZGV4T2ZTZWxlY3RlZEVsZW1lbnQgPSBuZXdUb0RvQXJyLmZpbmRJbmRleChcclxuICAgICAgICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnQgPT0gYnV0dG9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgY29uc3QgaW5ib3hPYmogPSBpbmJveERhdGFiYXNlLnByb2plY3RzTGlzdFswXTtcclxuICAgICAgICAgIGNvbnN0IHRvRG9MaXN0ID0gaW5ib3hPYmouSW5ib3g7XHJcblxyXG4gICAgICAgICAgbGV0IHRvRG9UYXNrID0gbmV3IHRvRG9JdGVtKG5hbWUsIGRlc2MsIGRhdGUsIHByaW9yaXR5KTtcclxuICAgICAgICAgIHRvRG9MaXN0LnVwZGF0ZUl0ZW0oaW5kZXhPZlNlbGVjdGVkRWxlbWVudCwgdG9Eb1Rhc2spO1xyXG5cclxuICAgICAgICAgIHN0b3JlRGF0YSgpO1xyXG4gICAgICAgICAgcmVuZGVyVG9Eb0xpc3QoaW5ib3hEYXRhYmFzZSwgbnVsbCwgXCJJbmJveFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vY3VycmVudGx5U2VsZWN0ZWQgaXMgVG9kYXlcclxuICAgICAgICBlbHNlIGlmIChjdXJyZW50bHlTZWxlY3RlZCA9PSBcInRvZGF5XCIpIHtcclxuICAgICAgICAgIGNvbnN0IHRvZGF5T2JqID0gdG9kYXlEYXRhYmFzZS5wcm9qZWN0c0xpc3RbMF07XHJcbiAgICAgICAgICBjb25zdCB0b0RvTGlzdCA9IHRvZGF5T2JqLlRvZGF5O1xyXG5cclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgYnV0dG9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgICAgICAgICAgICAgXCJmcm9tLXByb2plY3RcIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJFZGl0IHRoZSB0YXNrIGZyb20gdGhlIHByb2plY3QgdGhhdCBpdCBpcyBpblwiKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZnJvbS1pbmJveFwiKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiRWRpdCB0aGUgdGFzayBmcm9tIHRoZSBJbmJveCBzZWN0aW9uXCIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnREYXRlID0gZm9ybWF0KG5ldyBEYXRlKCksIFwieXl5eS1NTS1kZFwiKTtcclxuICAgICAgICAgICAgbGV0IG5ld1RvRG9BcnIgPSBBcnJheS5mcm9tKFxyXG4gICAgICAgICAgICAgIG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5mcm9tLXRvZGF5XCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGxldCBpbmRleE9mU2VsZWN0ZWRFbGVtZW50ID0gbmV3VG9Eb0Fyci5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnQgPT0gYnV0dG9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBidXR0b24ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGUgIT0gY3VycmVudERhdGUpIHtcclxuICAgICAgICAgICAgICBkYXRlID0gY3VycmVudERhdGU7XHJcbiAgICAgICAgICAgICAgbGV0IHRvRG9UYXNrID0gbmV3IHRvRG9JdGVtKG5hbWUsIGRlc2MsIGRhdGUsIHByaW9yaXR5KTtcclxuICAgICAgICAgICAgICB0b0RvTGlzdC51cGRhdGVJdGVtKGluZGV4T2ZTZWxlY3RlZEVsZW1lbnQsIHRvRG9UYXNrKTtcclxuICAgICAgICAgICAgICBhbGVydChcIkRhdGUgYXV0b21hdGljYWxseSBzZXQgdG8gdG9kYXlcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgbGV0IHRvRG9UYXNrID0gbmV3IHRvRG9JdGVtKG5hbWUsIGRlc2MsIGRhdGUsIHByaW9yaXR5KTtcclxuICAgICAgICAgICAgICB0b0RvTGlzdC51cGRhdGVJdGVtKGluZGV4T2ZTZWxlY3RlZEVsZW1lbnQsIHRvRG9UYXNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHN0b3JlRGF0YSgpO1xyXG4gICAgICAgICAgdG9kYXlIYW5kbGVyKHRvZGF5RGF0YWJhc2UsIGluYm94RGF0YWJhc2UsIHByb2plY3RzRGF0YWJhc2UpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudGx5U2VsZWN0ZWQgPT0gXCJ1cGNvbWluZ1wiKSB7XHJcbiAgICAgICAgICBjb25zdCB1cGNvbWluZ09iaiA9IHVwY29taW5nRGF0YWJhc2UucHJvamVjdHNMaXN0WzBdO1xyXG4gICAgICAgICAgY29uc3QgdG9Eb0xpc3QgPSB1cGNvbWluZ09iai5VcGNvbWluZztcclxuXHJcbiAgICAgICAgICBsZXQgZm9ybWF0dGVkQ3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgbGV0IHllYXIgPSBkYXRlLnNwbGl0KFwiLVwiKVswXTtcclxuICAgICAgICAgIGxldCBtb250aCA9IGRhdGUuc3BsaXQoXCItXCIpWzFdO1xyXG4gICAgICAgICAgbGV0IGRheSA9IGRhdGUuc3BsaXQoXCItXCIpWzJdO1xyXG5cclxuICAgICAgICAgIGxldCBmb3JtYXR0ZWRQcm9qZWN0RGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5KTtcclxuXHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFxyXG4gICAgICAgICAgICAgIFwiZnJvbS1wcm9qZWN0XCJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiRWRpdCB0aGUgdGFzayBmcm9tIHRoZSBwcm9qZWN0IHRoYXQgaXQgaXMgaW5cIik7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICBidXR0b24ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImZyb20taW5ib3hcIilcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBhbGVydChcIkVkaXQgdGhlIHRhc2sgZnJvbSB0aGUgSW5ib3ggc2VjdGlvblwiKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdUb0RvQXJyID0gQXJyYXkuZnJvbShcclxuICAgICAgICAgICAgICBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZnJvbS11cGNvbWluZ1wiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBsZXQgaW5kZXhPZlNlbGVjdGVkRWxlbWVudCA9IG5ld1RvRG9BcnIuZmluZEluZGV4KFxyXG4gICAgICAgICAgICAgIChlbGVtZW50KSA9PiBlbGVtZW50ID09IGJ1dHRvbi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYnV0dG9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc1NhbWVXZWVrKGZvcm1hdHRlZEN1cnJlbnREYXRlLCBmb3JtYXR0ZWRQcm9qZWN0RGF0ZSkpIHtcclxuICAgICAgICAgICAgICBsZXQgdG9Eb1Rhc2sgPSBuZXcgdG9Eb0l0ZW0obmFtZSwgZGVzYywgZGF0ZSwgcHJpb3JpdHkpO1xyXG4gICAgICAgICAgICAgIHRvRG9MaXN0LnVwZGF0ZUl0ZW0oaW5kZXhPZlNlbGVjdGVkRWxlbWVudCwgdG9Eb1Rhc2spO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgXCJUYXNrIG11c3QgYmUgZHVlIHRoaXMgd2VlayB0byBiZSBjb25zaWRlcmVkIHVwY29taW5nLCB0cnkgYWdhaW5cIlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBzdG9yZURhdGEoKTtcclxuICAgICAgICAgIHVwY29taW5nSGFuZGxlcih1cGNvbWluZ0RhdGFiYXNlLCBpbmJveERhdGFiYXNlLCBwcm9qZWN0c0RhdGFiYXNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpdi5yZW1vdmUoKTtcclxuICAgICAgICByZW1vdmVQYWdlTG9jaygpO1xyXG5cclxuICAgICAgICBidXR0b24uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgIH0gZWxzZSBpZiAoaW5wdXRGaWVsZC52YWx1ZSA9PSBcIlwiICYmIGlucHV0LnZhbHVlICE9IFwiQ2FuY2VsXCIpIHtcclxuICAgICAgICBhbGVydChcIk5hbWUgbXVzdCBiZSBhdCBsZWFzdCAxIGNoYXJhY3RlclwiKTtcclxuICAgICAgfVxyXG4gICAgICAvL2NhbmNlbFxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBkaXYucmVtb3ZlKCk7XHJcbiAgICAgICAgcmVtb3ZlUGFnZUxvY2soKTtcclxuICAgICAgICBidXR0b24uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgKTtcclxufVxyXG5cclxuLy9wcm9tcHRzIHRoZSB1c2VyIHRvIGFkZCBhIG5ldyBwcm9qZWN0XHJcbmZ1bmN0aW9uIG5ld1Byb2plY3RQcm9tcHQoKSB7XHJcbiAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIGRpdi5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGgzPkFkZCBQcm9qZWN0PC9oMz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJhZGQtcHJvamVjdC1uYW1lXCI+PGg0Pk5hbWU8L2g0PjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBpZD1cImFkZC1wcm9qZWN0LW5hbWVcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQWRkXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkNhbmNlbFwiPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwibmV3LXByb2plY3QtY2FyZFwiKTtcclxuICBkaXYuc3R5bGVbXCJ6LWluZGV4XCJdID0gXCIyXCI7XHJcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xyXG4gIGFkZFBhZ2VMb2NrKCk7XHJcblxyXG4gIGxldCBuZXdQcm9qZWN0Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXByb2plY3QtY2FyZFwiKTtcclxuICBsZXQgaW5wdXRGaWVsZCA9IG5ld1Byb2plY3RDYXJkLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPXRleHRdXCIpO1xyXG4gIGxldCBzdWJtaXRCb3hlcyA9IG5ld1Byb2plY3RDYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPXN1Ym1pdF1cIik7XHJcblxyXG4gIC8vY2hlY2tzIHVzZXIgaW5wdXRcclxuICBzdWJtaXRCb3hlcy5mb3JFYWNoKChpbnB1dCkgPT5cclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBpZiAoaW5wdXQudmFsdWUgPT09IFwiQWRkXCIgJiYgaW5wdXRGaWVsZC52YWx1ZS50b0xvd2VyQ2FzZSgpID09IFwiaW5ib3hcIikge1xyXG4gICAgICAgIGFsZXJ0KFwiaW5ib3ggaXMgYW4gaW52YWxpZCBuYW1lLCB0cnkgc29tZXRoaW5nIGVsc2VcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoaW5wdXQudmFsdWUgPT09IFwiQWRkXCIgJiYgaW5wdXRGaWVsZC52YWx1ZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgbGV0IGlucHV0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT10ZXh0XVwiKS52YWx1ZTtcclxuICAgICAgICBsZXQgY3VycmVudElkID0gcHJvamVjdHNEYXRhYmFzZS5wcm9qZWN0c0xpc3QubGVuZ3RoO1xyXG4gICAgICAgIHByb2plY3RzRGF0YWJhc2UuYWRkUHJvamVjdChpbnB1dFZhbHVlKTtcclxuICAgICAgICBzdG9yZURhdGEoKTtcclxuICAgICAgICBpbnNlcnRQcm9qZWN0RGl2KGlucHV0VmFsdWUsIGN1cnJlbnRJZCk7XHJcbiAgICAgICAgZGl2LnJlbW92ZSgpO1xyXG4gICAgICAgIHJlbW92ZVBhZ2VMb2NrKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoaW5wdXRGaWVsZC52YWx1ZSA9PSBcIlwiICYmIGlucHV0LnZhbHVlICE9IFwiQ2FuY2VsXCIpIHtcclxuICAgICAgICBhbGVydChcIk5hbWUgbXVzdCBiZSBhdCBsZWFzdCAxIGNoYXJhY3RlclwiKTtcclxuICAgICAgfVxyXG4gICAgICAvL2NhbmNlbFxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBkaXYucmVtb3ZlKCk7XHJcbiAgICAgICAgcmVtb3ZlUGFnZUxvY2soKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICApO1xyXG59XHJcblxyXG4vL2FkZHMgdGhlIG5ldyBwcm9qZWN0IHRvIHNpZGViYXJcclxuZXhwb3J0IGZ1bmN0aW9uIGluc2VydFByb2plY3REaXYobmFtZSwgaWQpIHtcclxuICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgbGkuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICBidXR0b24uaW5uZXJIVE1MID0gYFxyXG4gIDxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzLWNpcmNsZSBmYS0wLjI1eFwiPjwvaT5cclxuICAgICYjOTY0MiAke25hbWV9XHJcbiAgICBgO1xyXG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHMtY2hpbGRyZW5cIik7XHJcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2lkfWApO1xyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheVByb2plY3REaXYpO1xyXG4gIHByb2plY3RzRGl2LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKS5hcHBlbmRDaGlsZChsaSk7XHJcbn1cclxuXHJcbi8vcmVzZXQgc2VsZWN0aW9uc1xyXG5mdW5jdGlvbiByZXNldEJ1dHRvbnMoZSkge1xyXG4gIC8vY29uc29sZS5sb2coZSlcclxuICBsZXQgc2VsZWN0ZWREaXYgPSBlO1xyXG4gIGxldCBidXR0b25zID0gdGFiQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XHJcblxyXG4gIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xyXG4gIH0pO1xyXG4gIHNlbGVjdGVkRGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxufVxyXG5cclxuLy9jYWxscyBmdW5jdGlvbiB0byBkaXNwbGF5IFBST0pFQ1RTXHJcbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0RGl2KGUpIHtcclxuICBsZXQgc2VsZWN0ZWREaXYgPSBlLnRhcmdldDtcclxuICBsZXQgaWRWYWx1ZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpO1xyXG4gIGxldCBidXR0b25zID0gdGFiQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XHJcblxyXG4gIGlmIChzZWxlY3RlZERpdi5ub2RlTmFtZSA9PSBcIklcIikge1xyXG4gICAgZGVsZXRlUHJvamVjdFBvcHVwKHByb2plY3RzRGF0YWJhc2UsIGUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xyXG4gICAgfSk7XHJcbiAgICBzZWxlY3RlZERpdi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XHJcbiAgICByZW5kZXJUb0RvTGlzdChwcm9qZWN0c0RhdGFiYXNlLCBpZFZhbHVlLCBcIlByb2plY3RcIik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5SW5ib3hEaXYoZSkge1xyXG4gIGlmIChlLnRhcmdldC5ub2RlTmFtZSA9PSBcIklcIikge1xyXG4gICAgZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICByZXNldEJ1dHRvbnMoZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlc2V0QnV0dG9ucyhlLnRhcmdldCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJUb0RvTGlzdChpbmJveERhdGFiYXNlLCBudWxsLCBcIkluYm94XCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5VG9kYXlEaXYoZSkge1xyXG4gIGlmIChlLnRhcmdldC5ub2RlTmFtZSA9PSBcIklcIikge1xyXG4gICAgZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICByZXNldEJ1dHRvbnMoZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlc2V0QnV0dG9ucyhlLnRhcmdldCk7XHJcbiAgfVxyXG5cclxuICB0b2RheUhhbmRsZXIodG9kYXlEYXRhYmFzZSwgaW5ib3hEYXRhYmFzZSwgcHJvamVjdHNEYXRhYmFzZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlVcGNvbWluZ0RpdihlKSB7XHJcbiAgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lID09IFwiSVwiKSB7XHJcbiAgICBlID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICAgIHJlc2V0QnV0dG9ucyhlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzZXRCdXR0b25zKGUudGFyZ2V0KTtcclxuICB9XHJcblxyXG4gIHVwY29taW5nSGFuZGxlcih1cGNvbWluZ0RhdGFiYXNlLCBpbmJveERhdGFiYXNlLCBwcm9qZWN0c0RhdGFiYXNlKTtcclxufVxyXG5cclxuLy9tYWtlcyBpdCBzbyBvbmx5IG9uZSBwb3B1cCBjYW4gYmUgc2VsZWN0ZWQgYXQgb25jZSBhbmQgdGhlIHJlc3Qgb2YgdGhlIHBhZ2UgaXMgdW5zZWxlY3RhYmxlXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRQYWdlTG9jaygpIHtcclxuICBsZXQgcGFnZUxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHBhZ2VMb2NrLmNsYXNzTGlzdC5hZGQoXCJwYWdlLWxvY2tcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYWdlTG9jayk7XHJcblxyXG4gIGxldCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpO1xyXG4gIHRhc2suZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKSk7XHJcbiAgdGFiQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsb2NrXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGFnZUxvY2soKSB7XHJcbiAgbGV0IHRhc2tMb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpO1xyXG4gIHRhc2tMb2NrLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIikpO1xyXG4gIHRhYkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKTtcclxuXHJcbiAgbGV0IHBhZ2VMb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlLWxvY2tcIik7XHJcbiAgcGFnZUxvY2sucmVtb3ZlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0TGlzdCgpIHtcclxuICBsZXQgaSA9IHByb2plY3RzU2xpZGVyLnF1ZXJ5U2VsZWN0b3IoXCJpXCIpO1xyXG4gIHByb2plY3RzRGl2LmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZVwiKTtcclxuXHJcbiAgaS5jbGFzc0xpc3QudG9nZ2xlKFwiZmEtY2FyZXQtZG93blwiKTtcclxuICBpLmNsYXNzTGlzdC50b2dnbGUoXCJmYS1jYXJldC1yaWdodFwiKTtcclxufVxyXG5cclxuZXhwb3J0IHsgcHJvamVjdHNEYXRhYmFzZSwgaW5ib3hEYXRhYmFzZSwgdG9kYXlEYXRhYmFzZSwgdXBjb21pbmdEYXRhYmFzZSB9O1xyXG4iLCJpbXBvcnQgeyBmb3JtYXQsIGlzU2FtZVdlZWsgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuaW1wb3J0IHsgZGVsZXRlVGFza1BvcHVwLCByZW5kZXIgfSBmcm9tIFwiLi9yZW5kZXIuanNcIjtcclxuaW1wb3J0IHsgdG9Eb0l0ZW0gfSBmcm9tIFwiLi90b0RvTGlzdC5qc1wiO1xyXG5pbXBvcnQgeyBlZGl0VGFzaywgaW5zZXJ0UHJvamVjdERpdiB9IGZyb20gXCIuL1VJLmpzXCI7XHJcblxyXG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKTtcclxuY29uc3QgbWFpblRvRG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tdG9kb1wiKTtcclxubGV0IG5hbWUgPSBtYWluVG9Eby5xdWVyeVNlbGVjdG9yKFwiaDJcIik7XHJcbmNvbnN0IGJ1dHRvbiA9IG1haW5Ub0RvLnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2tcIik7XHJcblxyXG4vL2hhbmRsZXMgbG9naWMgZm9yIFRPREFZXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2RheUhhbmRsZXIodG9kYXlEYXRhYmFzZSwgaW5ib3hEYXRhYmFzZSwgcHJvamVjdHNEYXRhYmFzZSkge1xyXG4gIC8vY2xlYXJzIGFsbCB0YXNrIGVsZW1lbnRzIHNvIHRoYXQgaXQgY2FuIGJlIHJlLXJlbmRlcmVkXHJcbiAgY29uc3QgdG9Eb0xpc3REaXZzID0gbWFpblRvRG8ucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpO1xyXG4gIHRvRG9MaXN0RGl2cy5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LnJlbW92ZSgpKTtcclxuXHJcbiAgbGV0IGN1cnJlbnREYXRlID0gZm9ybWF0KG5ldyBEYXRlKCksIFwiTU0vZGQveXl5eVwiKTtcclxuICAvL2hhbmRsZXMgcHJvamVjdERhdGFiYXNlXHJcbiAgZm9yIChjb25zdCBvYmogb2YgcHJvamVjdHNEYXRhYmFzZS5wcm9qZWN0c0xpc3QpIHtcclxuICAgIGZvciAoY29uc3QgcHJvamVjdCBpbiBvYmopIHtcclxuICAgICAgLy90b2RvIGxpc3QgY2xhc3NcclxuICAgICAgbGV0IHRvRG9MaXN0ID0gb2JqW3Byb2plY3RdO1xyXG4gICAgICBmb3IgKGNvbnN0IHRvRG9JdGVtIG9mIHRvRG9MaXN0Lml0ZW1zKSB7XHJcbiAgICAgICAgaWYgKHRvRG9JdGVtLmdldER1ZURhdGUoKSA9PSBjdXJyZW50RGF0ZSkge1xyXG4gICAgICAgICAgcmVuZGVyKHRvRG9JdGVtLCBcInByb2plY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL2hhbmRsZXMgaW5ib3hEYXRhYmFzZVxyXG4gIGZvciAoY29uc3Qgb2JqIG9mIGluYm94RGF0YWJhc2UucHJvamVjdHNMaXN0KSB7XHJcbiAgICBmb3IgKGNvbnN0IHByb2plY3QgaW4gb2JqKSB7XHJcbiAgICAgIC8vdG9kbyBsaXN0IGNsYXNzXHJcbiAgICAgIGxldCB0b0RvTGlzdCA9IG9ialtwcm9qZWN0XTtcclxuICAgICAgZm9yIChjb25zdCB0b0RvSXRlbSBvZiB0b0RvTGlzdC5pdGVtcykge1xyXG4gICAgICAgIGlmICh0b0RvSXRlbS5nZXREdWVEYXRlKCkgPT0gY3VycmVudERhdGUpIHtcclxuICAgICAgICAgIHJlbmRlcih0b0RvSXRlbSwgXCJpbmJveFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vaGFuZGxlcyB0b2RheURhdGFic2VcclxuICBjb25zdCB0b2RheU9iaiA9IHRvZGF5RGF0YWJhc2UucHJvamVjdHNMaXN0WzBdO1xyXG4gIGNvbnN0IHRvRG9MaXN0ID0gdG9kYXlPYmouVG9kYXk7XHJcblxyXG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiB0b0RvTGlzdC5nZXRJdGVtcygpKSB7XHJcbiAgICByZW5kZXIoZWxlbWVudCwgXCJ0b2RheVwiKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbkFyciA9IG1haW5Ub0RvLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlXCIpO1xyXG4gIGNvbnN0IGVkaXRCdXR0b25BcnIgPSBtYWluVG9Eby5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkaXRcIik7XHJcblxyXG4gIC8vZGVsZXRlcyB0YXNrIGJ1dCBpZiB0YXNrIGlzIHBhcnQgb2YgaW5ib3gvcHJvamVjdCBpdCB0ZWxscyB0aGUgdXNlciB0byBnbyB0byBwcm9qZWN0L2luYm94IHRvIGRlbGV0ZVxyXG4gIGRlbGV0ZUJ1dHRvbkFyci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gZGVsZXRlVGFza1BvcHVwKGUsIHRvZGF5RGF0YWJhc2UpKTtcclxuICB9KTtcclxuXHJcbiAgZWRpdEJ1dHRvbkFyci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0VGFzayk7XHJcbiAgfSk7XHJcblxyXG4gIG5hbWUudGV4dENvbnRlbnQgPSBcIlRvZGF5J3MgVGFza3NcIjtcclxufVxyXG5cclxuLy9oYW5kbGVzIGxvZ2ljIGZvciBVUENPTUlOR1xyXG5leHBvcnQgZnVuY3Rpb24gdXBjb21pbmdIYW5kbGVyKFxyXG4gIHVwY29taW5nRGF0YWJhc2UsXHJcbiAgaW5ib3hEYXRhYmFzZSxcclxuICBwcm9qZWN0c0RhdGFiYXNlXHJcbikge1xyXG4gIC8vY2xlYXJzIGFsbCB0YXNrIGVsZW1lbnRzIHNvIHRoYXQgaXQgY2FuIGJlIHJlLXJlbmRlcmVkXHJcbiAgY29uc3QgdG9Eb0xpc3REaXZzID0gbWFpblRvRG8ucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpO1xyXG4gIHRvRG9MaXN0RGl2cy5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LnJlbW92ZSgpKTtcclxuXHJcbiAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgLy9oYW5kbGVzIHByb2plY3REYXRhYmFzZVxyXG4gIGZvciAoY29uc3Qgb2JqIG9mIHByb2plY3RzRGF0YWJhc2UucHJvamVjdHNMaXN0KSB7XHJcbiAgICBmb3IgKGNvbnN0IHByb2plY3QgaW4gb2JqKSB7XHJcbiAgICAgIC8vdG9kbyBsaXN0IGNsYXNzXHJcbiAgICAgIGxldCB0b0RvTGlzdCA9IG9ialtwcm9qZWN0XTtcclxuICAgICAgZm9yIChjb25zdCB0b0RvSXRlbSBvZiB0b0RvTGlzdC5pdGVtcykge1xyXG4gICAgICAgIGxldCBwcm9qZWN0RGF0ZSA9IHRvRG9JdGVtLmdldER1ZURhdGUoKTtcclxuICAgICAgICBsZXQgbW9udGggPSBwcm9qZWN0RGF0ZS5zcGxpdChcIi9cIilbMF07XHJcbiAgICAgICAgbGV0IGRheSA9IHByb2plY3REYXRlLnNwbGl0KFwiL1wiKVsxXTtcclxuICAgICAgICBsZXQgeWVhciA9IHByb2plY3REYXRlLnNwbGl0KFwiL1wiKVsyXTtcclxuXHJcbiAgICAgICAgcHJvamVjdERhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7XHJcblxyXG4gICAgICAgIGlmIChpc1NhbWVXZWVrKGN1cnJlbnREYXRlLCBwcm9qZWN0RGF0ZSkpIHtcclxuICAgICAgICAgIHJlbmRlcih0b0RvSXRlbSwgXCJwcm9qZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9oYW5kbGVzIGluYm94RGF0YWJhc2VcclxuICBmb3IgKGNvbnN0IG9iaiBvZiBpbmJveERhdGFiYXNlLnByb2plY3RzTGlzdCkge1xyXG4gICAgZm9yIChjb25zdCBwcm9qZWN0IGluIG9iaikge1xyXG4gICAgICAvL3RvZG8gbGlzdCBjbGFzc1xyXG4gICAgICBsZXQgdG9Eb0xpc3QgPSBvYmpbcHJvamVjdF07XHJcbiAgICAgIGZvciAoY29uc3QgdG9Eb0l0ZW0gb2YgdG9Eb0xpc3QuaXRlbXMpIHtcclxuICAgICAgICBsZXQgcHJvamVjdERhdGUgPSB0b0RvSXRlbS5nZXREdWVEYXRlKCk7XHJcbiAgICAgICAgbGV0IG1vbnRoID0gcHJvamVjdERhdGUuc3BsaXQoXCIvXCIpWzBdO1xyXG4gICAgICAgIGxldCBkYXkgPSBwcm9qZWN0RGF0ZS5zcGxpdChcIi9cIilbMV07XHJcbiAgICAgICAgbGV0IHllYXIgPSBwcm9qZWN0RGF0ZS5zcGxpdChcIi9cIilbMl07XHJcblxyXG4gICAgICAgIHByb2plY3REYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXkpO1xyXG5cclxuICAgICAgICBpZiAoaXNTYW1lV2VlayhjdXJyZW50RGF0ZSwgcHJvamVjdERhdGUpKSB7XHJcbiAgICAgICAgICByZW5kZXIodG9Eb0l0ZW0sIFwiaW5ib3hcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL2hhbmRsZXMgdXBjb21pbmdEYXRhYmFzZVxyXG4gIGNvbnN0IHVwY29taW5nT2JqID0gdXBjb21pbmdEYXRhYmFzZS5wcm9qZWN0c0xpc3RbMF07XHJcbiAgY29uc3QgdG9Eb0xpc3QgPSB1cGNvbWluZ09iai5VcGNvbWluZztcclxuXHJcbiAgZm9yIChjb25zdCBlbGVtZW50IG9mIHRvRG9MaXN0LmdldEl0ZW1zKCkpIHtcclxuICAgIHJlbmRlcihlbGVtZW50LCBcInVwY29taW5nXCIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGVsZXRlQnV0dG9uQXJyID0gbWFpblRvRG8ucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGVcIik7XHJcbiAgY29uc3QgZWRpdEJ1dHRvbkFyciA9IG1haW5Ub0RvLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRpdFwiKTtcclxuXHJcbiAgLy9kZWxldGVzIHRhc2sgYnV0IGlmIHRhc2sgaXMgcGFydCBvZiBpbmJveC9wcm9qZWN0IGl0IHRlbGxzIHRoZSB1c2VyIHRvIGdvIHRvIHByb2plY3QvaW5ib3ggdG8gZGVsZXRlXHJcbiAgZGVsZXRlQnV0dG9uQXJyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PlxyXG4gICAgICBkZWxldGVUYXNrUG9wdXAoZSwgdXBjb21pbmdEYXRhYmFzZSlcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIGVkaXRCdXR0b25BcnIuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFRhc2spO1xyXG4gIH0pO1xyXG5cclxuICBuYW1lLnRleHRDb250ZW50ID0gXCJUaGlzIFdlZWsncyBUYXNrc1wiO1xyXG59XHJcblxyXG4vL2NvbnZlcnN0cyBzdG9yZWQgbG9jYWxTdG9yYWdlIHN0cmluZyB0byBKU09OIHVzZSAucGFyc2UgYW5kIGNvdm5lcnRzIHRoYXQgdG8gYSBQcm9qZWN0L1RvRG9MaXN0L1RvRG9JdGVtIGNsYXNzIGFjY29yZGluZ2x5XHJcbmV4cG9ydCBmdW5jdGlvbiB0b0NsYXNzKHR5cGUsIGRhdGFiYXNlLCBzdHJpbmcpIHtcclxuICBsZXQgb2JqID0gSlNPTi5wYXJzZShzdHJpbmcpO1xyXG5cclxuICBpZiAodHlwZSA9PSBcIkluYm94XCIpIHtcclxuICAgIGxldCBpdGVtcyA9IGRhdGFiYXNlLnByb2plY3RzTGlzdFswXS5JbmJveC5pdGVtcztcclxuICAgIGxldCBvYmpJbmJveCA9IG9iai5wcm9qZWN0c0xpc3RbMF0uSW5ib3g7XHJcbiAgICBsZXQgb2JqSW5ib3hJdGVtcyA9IG9iakluYm94Lml0ZW1zO1xyXG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIG9iakluYm94SXRlbXMpIHtcclxuICAgICAgbGV0IGRhdGUgPSBlbGVtZW50Ll9kdWVEYXRlO1xyXG4gICAgICBpZiAoZGF0ZSAhPSBcIk5vbmVcIikge1xyXG4gICAgICAgIGxldCBtb250aCA9IGRhdGUuc3BsaXQoXCIvXCIpWzBdO1xyXG4gICAgICAgIGxldCBkYXkgPSBkYXRlLnNwbGl0KFwiL1wiKVsxXTtcclxuICAgICAgICBsZXQgeWVhciA9IGRhdGUuc3BsaXQoXCIvXCIpWzJdO1xyXG4gICAgICAgIGRhdGUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRhdGUgPSBcIlwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgbmV3VG9EbyA9IG5ldyB0b0RvSXRlbShcclxuICAgICAgICBlbGVtZW50Ll90aXRsZSxcclxuICAgICAgICBlbGVtZW50Ll9kZXNjcmlwdGlvbixcclxuICAgICAgICBkYXRlLFxyXG4gICAgICAgIGVsZW1lbnQuX3ByaW9yaXR5XHJcbiAgICAgICk7XHJcbiAgICAgIGl0ZW1zLnB1c2gobmV3VG9Ebyk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmICh0eXBlID09IFwiVG9kYXlcIikge1xyXG4gICAgbGV0IGl0ZW1zID0gZGF0YWJhc2UucHJvamVjdHNMaXN0WzBdLlRvZGF5Lml0ZW1zO1xyXG4gICAgbGV0IG9ialRvZGF5ID0gb2JqLnByb2plY3RzTGlzdFswXS5Ub2RheTtcclxuICAgIGxldCBvYmpUb2RheUl0ZW1zID0gb2JqVG9kYXkuaXRlbXM7XHJcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2Ygb2JqVG9kYXlJdGVtcykge1xyXG4gICAgICBsZXQgZGF0ZSA9IGVsZW1lbnQuX2R1ZURhdGU7XHJcbiAgICAgIGxldCBtb250aCA9IGRhdGUuc3BsaXQoXCIvXCIpWzBdO1xyXG4gICAgICBsZXQgZGF5ID0gZGF0ZS5zcGxpdChcIi9cIilbMV07XHJcbiAgICAgIGxldCB5ZWFyID0gZGF0ZS5zcGxpdChcIi9cIilbMl07XHJcbiAgICAgIGRhdGUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xyXG5cclxuICAgICAgbGV0IG5ld1RvRG8gPSBuZXcgdG9Eb0l0ZW0oXHJcbiAgICAgICAgZWxlbWVudC5fdGl0bGUsXHJcbiAgICAgICAgZWxlbWVudC5fZGVzY3JpcHRpb24sXHJcbiAgICAgICAgZGF0ZSxcclxuICAgICAgICBlbGVtZW50Ll9wcmlvcml0eVxyXG4gICAgICApO1xyXG4gICAgICBpdGVtcy5wdXNoKG5ld1RvRG8pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAodHlwZSA9PSBcIlVwY29taW5nXCIpIHtcclxuICAgIGxldCBpdGVtcyA9IGRhdGFiYXNlLnByb2plY3RzTGlzdFswXS5VcGNvbWluZy5pdGVtcztcclxuICAgIGxldCBvYmpVcGNvbWluZyA9IG9iai5wcm9qZWN0c0xpc3RbMF0uVXBjb21pbmc7XHJcbiAgICBsZXQgb2JqVXBjb21pbmdJdGVtcyA9IG9ialVwY29taW5nLml0ZW1zO1xyXG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIG9ialVwY29taW5nSXRlbXMpIHtcclxuICAgICAgbGV0IGRhdGUgPSBlbGVtZW50Ll9kdWVEYXRlO1xyXG4gICAgICBsZXQgbW9udGggPSBkYXRlLnNwbGl0KFwiL1wiKVswXTtcclxuICAgICAgbGV0IGRheSA9IGRhdGUuc3BsaXQoXCIvXCIpWzFdO1xyXG4gICAgICBsZXQgeWVhciA9IGRhdGUuc3BsaXQoXCIvXCIpWzJdO1xyXG4gICAgICBkYXRlID0gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcclxuXHJcbiAgICAgIGxldCBuZXdUb0RvID0gbmV3IHRvRG9JdGVtKFxyXG4gICAgICAgIGVsZW1lbnQuX3RpdGxlLFxyXG4gICAgICAgIGVsZW1lbnQuX2Rlc2NyaXB0aW9uLFxyXG4gICAgICAgIGRhdGUsXHJcbiAgICAgICAgZWxlbWVudC5fcHJpb3JpdHlcclxuICAgICAgKTtcclxuICAgICAgaXRlbXMucHVzaChuZXdUb0RvKTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJQcm9qZWN0XCIpIHtcclxuICAgIGxldCBpdGVtcyA9IGRhdGFiYXNlLnByb2plY3RzTGlzdDtcclxuICAgIGxldCBvYmpQcm9qZWN0ID0gb2JqLnByb2plY3RzTGlzdDtcclxuICAgIGZvciAoY29uc3QgW2lkLHByb2pdIG9mIG9ialByb2plY3QuZW50cmllcygpKSB7XHJcbiAgICAgIGxldCBrZXkgPSBPYmplY3Qua2V5cyhwcm9qKTtcclxuICAgICAgZGF0YWJhc2UuYWRkUHJvamVjdChrZXkpO1xyXG4gICAgICBpbnNlcnRQcm9qZWN0RGl2KGtleSxpZCk7XHJcbiAgICAgIGZvciAoY29uc3QgdGFzayBvZiBwcm9qW2tleV0uaXRlbXMpIHtcclxuICAgICAgICBsZXQgZGF0ZSA9IHRhc2suX2R1ZURhdGU7XHJcbiAgICAgICAgaWYgKGRhdGUgIT0gXCJOb25lXCIpIHtcclxuICAgICAgICAgIGxldCBtb250aCA9IGRhdGUuc3BsaXQoXCIvXCIpWzBdO1xyXG4gICAgICAgICAgbGV0IGRheSA9IGRhdGUuc3BsaXQoXCIvXCIpWzFdO1xyXG4gICAgICAgICAgbGV0IHllYXIgPSBkYXRlLnNwbGl0KFwiL1wiKVsyXTtcclxuICAgICAgICAgIGRhdGUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkYXRlID0gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBuZXdUb0RvID0gbmV3IHRvRG9JdGVtKFxyXG4gICAgICAgICAgdGFzay5fdGl0bGUsXHJcbiAgICAgICAgICB0YXNrLl9kZXNjcmlwdGlvbixcclxuICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICB0YXNrLl9wcmlvcml0eVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaXRlbXNbaWRdW2tleV0ubmV3SXRlbShuZXdUb0RvKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBzdG9yZURhdGEgfSBmcm9tIFwiLi9TdG9yYWdlLmpzXCI7XHJcbmltcG9ydCB7IGFkZFBhZ2VMb2NrLCBlZGl0VGFzaywgcmVtb3ZlUGFnZUxvY2sgfSBmcm9tIFwiLi9VSS5qc1wiO1xyXG5cclxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIik7XHJcbmNvbnN0IG1haW5Ub0RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLXRvZG9cIik7XHJcbmxldCBuYW1lID0gbWFpblRvRG8ucXVlcnlTZWxlY3RvcihcImgyXCIpO1xyXG5jb25zdCBidXR0b24gPSBtYWluVG9Eby5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrXCIpO1xyXG5cclxuLy9iYXNpYyByZW5kZXJpbmdcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihlbGVtZW50LCBmbGFnKSB7XHJcbiAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZGl2LmlubmVySFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPVwidG9wXCI+XHJcbiAgPGkgY2xhc3M9XCJmYXIgZmEtY2lyY2xlIGRlbGV0ZVwiPjwvaT5cclxuICA8c3Bhbj4gJHtlbGVtZW50LmdldFRpdGxlKCl9PC9zcGFuPlxyXG4gIDxzcGFuID5EdWUgRGF0ZTogJHtlbGVtZW50LmdldER1ZURhdGUoKX0gIDwvc3Bhbj5cclxuICA8c3Bhbj4gUHJpb3JpdHk6ICR7XHJcbiAgICBlbGVtZW50LmdldFByaW9yaXR5KCkgIT0gXCJcIiA/IGVsZW1lbnQuZ2V0UHJpb3JpdHkoKSA6IFwiTm9uZVwiXHJcbiAgfSAgPC9zcGFuPlxyXG4gIDxpIGNsYXNzPVwiZmFzIGZhLWJhcnMgZWRpdFwiPjwvaT5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImJvdHRvbVwiPlxyXG4gIERlc2NyaXB0aW9uOiAmbmJzcDske2VsZW1lbnQuZ2V0RGVzY3JpcHRpb24oKX1cclxuICA8L2Rpdj5cclxuICBgO1xyXG5cclxuICBkaXYuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XHJcbiAgZGl2LmNsYXNzTGlzdC5hZGQoYGZyb20tJHtmbGFnfWApO1xyXG4gIG1haW5Ub0RvLmluc2VydEJlZm9yZShkaXYsIGJ1dHRvbik7XHJcbn1cclxuXHJcbi8vcmVuZGVycyB0byBkbyBsaXN0IGZvciBJTkJPWC9QUk9KRUNUU1xyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVG9Eb0xpc3QocHJvamVjdExpc3QsIGlkLCB0eXBlKSB7XHJcbiAgY29uc3QgZGF0YWJhc2UgPSBwcm9qZWN0TGlzdDtcclxuXHJcbiAgLy9jbGVhcnMgYWxsIHRhc2sgZWxlbWVudHMgc28gdGhhdCBpdCBjYW4gYmUgcmUtcmVuZGVyZWRcclxuICBjb25zdCB0b0RvTGlzdERpdnMgPSBtYWluVG9Eby5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIik7XHJcbiAgdG9Eb0xpc3REaXZzLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQucmVtb3ZlKCkpO1xyXG5cclxuICBpZiAodHlwZSA9PSBcIlByb2plY3RcIikge1xyXG4gICAgbGV0IHByb2plY3QgPSBkYXRhYmFzZS5wcm9qZWN0c0xpc3RbaWRdO1xyXG4gICAgbGV0IHByb2plY3ROYW1lID0gT2JqZWN0LmtleXMocHJvamVjdClbMF07XHJcbiAgICBsZXQgdG9Eb0xpc3QgPSBwcm9qZWN0W3Byb2plY3ROYW1lXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgdG9Eb0xpc3QuZ2V0SXRlbXMoKSkge1xyXG4gICAgICByZW5kZXIoZWxlbWVudCwgXCJwcm9qZWN0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcclxuICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJJbmJveFwiKSB7XHJcbiAgICBjb25zdCBpbmJveE9iaiA9IGRhdGFiYXNlLnByb2plY3RzTGlzdFswXTtcclxuICAgIGNvbnN0IHRvRG9MaXN0ID0gaW5ib3hPYmouSW5ib3g7XHJcblxyXG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIHRvRG9MaXN0LmdldEl0ZW1zKCkpIHtcclxuICAgICAgcmVuZGVyKGVsZW1lbnQsIFwiaW5ib3hcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbmFtZS50ZXh0Q29udGVudCA9IFwiSW5ib3hcIjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbkFyciA9IG1haW5Ub0RvLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlXCIpO1xyXG4gIGNvbnN0IGVkaXRCdXR0b25BcnIgPSBtYWluVG9Eby5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkaXRcIik7XHJcblxyXG4gIGRlbGV0ZUJ1dHRvbkFyci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gZGVsZXRlVGFza1BvcHVwKGUsIGRhdGFiYXNlKSk7XHJcbiAgfSk7XHJcblxyXG4gIGVkaXRCdXR0b25BcnIuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFRhc2spO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdFBvcHVwKGRhdGFiYXNlLGUpIHtcclxuICBsZXQgc2VsZWN0ZWREaXYgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG4gIGxldCBpZFZhbHVlID0gc2VsZWN0ZWREaXYuZ2V0QXR0cmlidXRlKFwiaWRcIik7XHJcblxyXG4gIGxldCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcG9wdXAuaW5uZXJIVE1MID0gYFxyXG4gICAgPGgzPkRlbGV0ZSBQcm9qZWN0PzwvaDM+XHJcbiAgICA8c3Bhbj4gICAgIFxyXG4gICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlllc1wiPlxyXG4gICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIk5vXCI+XHJcbiAgICA8L3NwYW4+XHJcbiAgYDtcclxuICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXRhc2stcG9wdXBcIik7XHJcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwb3B1cCk7XHJcbiAgcG9wdXAuc3R5bGVbXCJ6LWluZGV4XCJdID0gXCIyXCI7XHJcbiAgYWRkUGFnZUxvY2soKTtcclxuXHJcbiAgbGV0IGlucHV0cyA9IGRvY3VtZW50XHJcbiAgICAucXVlcnlTZWxlY3RvcihcIi5kZWxldGUtdGFzay1wb3B1cFwiKVxyXG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPXN1Ym1pdF1cIik7XHJcblxyXG4gIGlucHV0cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmIChlbGVtZW50LnZhbHVlID09IFwiWWVzXCIpIHtcclxuICAgICAgICBkYXRhYmFzZS5kZWxldGVQcm9qZWN0KGlkVmFsdWUpO1xyXG4gICAgICAgIHN0b3JlRGF0YSgpO1xyXG4gICAgICAgIHNlbGVjdGVkRGl2LnJlbW92ZSgpO1xyXG4gICAgICAgIHBvcHVwLnJlbW92ZSgpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICByZW1vdmVQYWdlTG9jaygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBvcHVwLnJlbW92ZSgpO1xyXG4gICAgICAgIHJlbW92ZVBhZ2VMb2NrKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFza1BvcHVwKGUsIGRhdGFiYXNlKSB7XHJcbiAgLy9jcmVhdGUgcHJvbXB0IGZvciB1c2VyIHRvIGNvbmZpcm0vZGVueSBkZWxldGluZyBhIHRhc2tcclxuICBsZXQgb3JpZ2luYWxFbGVtZW50ID0gZTtcclxuICBsZXQgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHBvcHVwLmlubmVySFRNTCA9IGBcclxuICAgIDxoMz5EZWxldGUgVGFzaz88L2gzPlxyXG4gICAgPHNwYW4+ICAgICBcclxuICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJZZXNcIj5cclxuICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJOb1wiPlxyXG4gICAgPC9zcGFuPlxyXG4gIGA7XHJcblxyXG4gIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtdGFzay1wb3B1cFwiKTtcclxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHBvcHVwKTtcclxuICBwb3B1cC5zdHlsZVtcInotaW5kZXhcIl0gPSBcIjJcIjtcclxuICBhZGRQYWdlTG9jaygpO1xyXG5cclxuICBsZXQgaW5wdXRzID0gZG9jdW1lbnRcclxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZS10YXNrLXBvcHVwXCIpXHJcbiAgICAucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9c3VibWl0XVwiKTtcclxuXHJcbiAgaW5wdXRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKGVsZW1lbnQudmFsdWUgPT0gXCJZZXNcIikge1xyXG4gICAgICAgIGRlbGV0ZVRhc2sob3JpZ2luYWxFbGVtZW50LCBkYXRhYmFzZSk7XHJcbiAgICAgICAgcG9wdXAucmVtb3ZlKCk7XHJcbiAgICAgICAgcmVtb3ZlUGFnZUxvY2soKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwb3B1cC5yZW1vdmUoKTtcclxuICAgICAgICByZW1vdmVQYWdlTG9jaygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2soZSwgZGF0YWJhc2UpIHtcclxuICBsZXQgc2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpO1xyXG4gIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICBjb25zdCB0b0RvQXJyID0gbWFpblRvRG8ucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpO1xyXG5cclxuICAvL2RlbGV0ZSBwcm9qZWN0IHRhc2tcclxuICBpZiAoc2VsZWN0ZWQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJvamVjdHMtY2hpbGRyZW5cIikpIHtcclxuICAgIGxldCBpZCA9IHNlbGVjdGVkLmdldEF0dHJpYnV0ZShcImlkXCIpO1xyXG4gICAgbGV0IHByb2plY3QgPSBkYXRhYmFzZS5nZXRQcm9qZWN0cygpW2lkXTtcclxuICAgIGxldCBwcm9qZWN0TmFtZSA9IE9iamVjdC5rZXlzKHByb2plY3QpWzBdO1xyXG4gICAgbGV0IHRvRG9MaXN0ID0gcHJvamVjdFtwcm9qZWN0TmFtZV07XHJcblxyXG4gICAgbGV0IG5ld1RvRG9BcnIgPSBBcnJheS5mcm9tKHRvRG9BcnIpO1xyXG4gICAgbGV0IGluZGV4T2ZTZWxlY3RlZEVsZW1lbnQgPSBuZXdUb0RvQXJyLmZpbmRJbmRleChcclxuICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnQgPT0gdGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudFxyXG4gICAgKTtcclxuICAgIHRvRG9MaXN0LnJlbW92ZUl0ZW0oaW5kZXhPZlNlbGVjdGVkRWxlbWVudCk7XHJcbiAgICB0YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgc3RvcmVEYXRhKCk7XHJcbiAgfVxyXG5cclxuICAvL2RlbGV0ZSBpbmJveCB0YXNrXHJcbiAgZWxzZSBpZiAoc2VsZWN0ZWQuZ2V0QXR0cmlidXRlKFwiaWRcIikgPT0gXCJpbmJveFwiKSB7XHJcbiAgICBjb25zdCBpbmJveE9iaiA9IGRhdGFiYXNlLnByb2plY3RzTGlzdFswXTtcclxuICAgIGNvbnN0IHRvRG9MaXN0ID0gaW5ib3hPYmouSW5ib3g7XHJcblxyXG4gICAgbGV0IG5ld1RvRG9BcnIgPSBBcnJheS5mcm9tKHRvRG9BcnIpO1xyXG4gICAgbGV0IGluZGV4T2ZTZWxlY3RlZEVsZW1lbnQgPSBuZXdUb0RvQXJyLmZpbmRJbmRleChcclxuICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnQgPT0gdGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudFxyXG4gICAgKTtcclxuICAgIHRvRG9MaXN0LnJlbW92ZUl0ZW0oaW5kZXhPZlNlbGVjdGVkRWxlbWVudCk7XHJcbiAgICB0YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgc3RvcmVEYXRhKCk7XHJcbiAgfVxyXG5cclxuICAvL2RlbGV0ZSB0b2RheSB0YXNrXHJcbiAgZWxzZSBpZiAoc2VsZWN0ZWQuZ2V0QXR0cmlidXRlKFwiaWRcIikgPT0gXCJ0b2RheVwiKSB7XHJcbiAgICBjb25zdCB0b2RheU9iaiA9IGRhdGFiYXNlLnByb2plY3RzTGlzdFswXTtcclxuICAgIGNvbnN0IHRvRG9MaXN0ID0gdG9kYXlPYmouVG9kYXk7XHJcblxyXG4gICAgaWYgKHRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZnJvbS1wcm9qZWN0XCIpKSB7XHJcbiAgICAgIGFsZXJ0KFwiRGVsZXRlIHRoZSB0YXNrIGZyb20gdGhlIHByb2plY3QgdGhhdCBpdCBpcyBpblwiKTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZnJvbS1pbmJveFwiKVxyXG4gICAgKSB7XHJcbiAgICAgIGFsZXJ0KFwiRGVsZXRlIHRoZSB0YXNrIGZyb20gdGhlIEluYm94IHNlY3Rpb25cIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgbmV3VG9Eb0FyciA9IEFycmF5LmZyb20obWFpblRvRG8ucXVlcnlTZWxlY3RvckFsbChcIi5mcm9tLXRvZGF5XCIpKTtcclxuICAgICAgbGV0IGluZGV4T2ZTZWxlY3RlZEVsZW1lbnQgPSBuZXdUb0RvQXJyLmZpbmRJbmRleChcclxuICAgICAgICAoZWxlbWVudCkgPT4gZWxlbWVudCA9PSB0YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50XHJcbiAgICAgICk7XHJcbiAgICAgIHRvRG9MaXN0LnJlbW92ZUl0ZW0oaW5kZXhPZlNlbGVjdGVkRWxlbWVudCk7XHJcbiAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgIHN0b3JlRGF0YSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9kZWxldGUgdXBjb21pbmcgdGFza1xyXG4gIGVsc2UgaWYgKHNlbGVjdGVkLmdldEF0dHJpYnV0ZShcImlkXCIpID09IFwidXBjb21pbmdcIikge1xyXG4gICAgY29uc3QgdXBjb21pbmdPYmogPSBkYXRhYmFzZS5wcm9qZWN0c0xpc3RbMF07XHJcbiAgICBjb25zdCB0b0RvTGlzdCA9IHVwY29taW5nT2JqLlVwY29taW5nO1xyXG5cclxuICAgIGlmICh0YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImZyb20tcHJvamVjdFwiKSkge1xyXG4gICAgICBhbGVydChcIkRlbGV0ZSB0aGUgdGFzayBmcm9tIHRoZSBwcm9qZWN0IHRoYXQgaXQgaXMgaW5cIik7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICB0YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImZyb20taW5ib3hcIilcclxuICAgICkge1xyXG4gICAgICBhbGVydChcIkRlbGV0ZSB0aGUgdGFzayBmcm9tIHRoZSBJbmJveCBzZWN0aW9uXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IG5ld1RvRG9BcnIgPSBBcnJheS5mcm9tKG1haW5Ub0RvLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZnJvbS11cGNvbWluZ1wiKSk7XHJcbiAgICAgIGxldCBpbmRleE9mU2VsZWN0ZWRFbGVtZW50ID0gbmV3VG9Eb0Fyci5maW5kSW5kZXgoXHJcbiAgICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnQgPT0gdGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudFxyXG4gICAgICApO1xyXG4gICAgICB0b0RvTGlzdC5yZW1vdmVJdGVtKGluZGV4T2ZTZWxlY3RlZEVsZW1lbnQpO1xyXG4gICAgICB0YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICBzdG9yZURhdGEoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy90b0RvTGlzdCBoYXMgYW4gYXJyYXkgb2YgdG9Eb0l0ZW1cclxuY2xhc3MgdG9Eb0xpc3Qge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgfVxyXG5cclxuICBzZXQgbmFtZSh2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA+IDIwKSB7XHJcbiAgICAgIGFsZXJ0KFwiTmFtZSBpcyB0b28gbG9uZ1wiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgbmV3SXRlbShpdGVtKSB7XHJcbiAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIHRvRG9JdGVtKSB7XHJcbiAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUl0ZW0oaWQsIG5ld0l0ZW0pIHtcclxuICAgIHRoaXMuaXRlbXMuc3BsaWNlKGlkLDEsbmV3SXRlbSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVJdGVtKGluZGV4KSB7XHJcbiAgICB0aGlzLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgfVxyXG5cclxuICBnZXRJdGVtcygpIHtcclxuICAgIHJldHVybiB0aGlzLml0ZW1zO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgfVxyXG59XHJcblxyXG4vL3RvRG9JdGVtIGlzIGEgY2xhc3NcclxuY2xhc3MgdG9Eb0l0ZW0ge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgfVxyXG5cclxuICBzZXQgdGl0bGUodmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZS5sZW5ndGggPiAzMCkge1xyXG4gICAgICBhbGVydChcIlRpdGxlIGlzIHRvbyBsb25nXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUubGVuZ3RoID4gNDAwKSB7XHJcbiAgICAgIGFsZXJ0KFwiRGVzY3JpcHRpb24gaXMgdG9vIGxvbmdcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXQgZHVlRGF0ZSh2YWx1ZSkge1xyXG4gICAgbGV0IHllYXIgPSB2YWx1ZS5zcGxpdChcIi1cIilbMF07XHJcbiAgICBsZXQgbW9udGggPSB2YWx1ZS5zcGxpdChcIi1cIilbMV07XHJcbiAgICBsZXQgZGF5ID0gdmFsdWUuc3BsaXQoXCItXCIpWzJdO1xyXG5cclxuICAgIGlmIChtb250aCA9PSB1bmRlZmluZWQgfHwgZGF5ID09IHVuZGVmaW5lZCB8fCB5ZWFyID09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLl9kdWVEYXRlID0gXCJOb25lXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9kdWVEYXRlID0gYCR7bW9udGh9LyR7ZGF5fS8ke3llYXJ9YDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldCBwcmlvcml0eSh2YWx1ZSkge1xyXG4gICAgdGhpcy5fcHJpb3JpdHkgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldFRpdGxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGVzY3JpcHRpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XHJcbiAgfVxyXG5cclxuICBnZXREdWVEYXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XHJcbiAgfVxyXG5cclxuICBnZXRQcmlvcml0eSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IHRvRG9MaXN0LCB0b0RvSXRlbSB9O1xyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5MHB4KTtcXHJcXG59XFxyXFxuYXNpZGUge1xcclxcbiAgd2lkdGg6IDE4JTtcXHJcXG4gIGhlaWdodDogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLyogVG9wIEJhbm5lciAqL1xcclxcbi5iYW5uZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBwYWRkaW5nOiAxLjI1ZW0gNGVtO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcbi5iYW5uZXIgaSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMC44ZW07XFxyXFxufVxcclxcblxcclxcbi8qU2lkZWJhciAqL1xcclxcbiN0YWItY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0NSk7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xcclxcbn1cXHJcXG4jdGFiLWNvbnRhaW5lciAqIHtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDEuMjVlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxufVxcclxcbiN0YWItY29udGFpbmVyIGJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuI2luYm94OmhvdmVyLFxcclxcbiN0b2RheTpob3ZlcixcXHJcXG4jdXBjb21pbmc6aG92ZXIsXFxyXFxuI3Byb2plY3RzLXNsaWRlcjpob3ZlcixcXHJcXG4jYWRkLXByb2plY3Q6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMjAxLCAyMDEpO1xcclxcbn1cXHJcXG4jdGFiLWNvbnRhaW5lciBpIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMC41ZW07XFxyXFxufVxcclxcbiNpbmJveCB7XFxyXFxuICBwYWRkaW5nLXRvcDogMS4xZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAyMDEsIDIwMSk7XFxyXFxufVxcclxcbiNwcm9qZWN0cyB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luLXRvcDogMmVtO1xcclxcbn1cXHJcXG4jcHJvamVjdHMtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbiNwcm9qZWN0cy1oZWFkZXIgaDIge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxufVxcclxcbiNwcm9qZWN0cy1oZWFkZXIgaSB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG4uZmEtY2FyZXQtcmlnaHR7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG4uc2VsZWN0ZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMjAxLCAyMDEpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi8qIHByb2plY3RzIHNlY3Rpb24gb2Ygc2lkZWJhciAqL1xcclxcbi5jb2xsYXBzZSB7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwZW0pO1xcclxcbn1cXHJcXG4jcHJvamVjdHMtYm9keSB7XFxyXFxuICBtYXJnaW4tdG9wOiAwLjI1ZW07XFxyXFxufVxcclxcbiNwcm9qZWN0cy1ib2R5IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuI3Byb2plY3RzLWJvZHkgbGkge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4jcHJvamVjdHMtYm9keSBidXR0b24ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxZW07XFxyXFxufVxcclxcbiNwcm9qZWN0cy1ib2R5IC5wcm9qZWN0cy1jaGlsZHJlbntcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuI3Byb2plY3RzLWJvZHkgLnByb2plY3RzLWNoaWxkcmVuIGkge1xcclxcbiAgaGVpZ2h0OiAwLjFlbTtcXHJcXG4gIHdpZHRoOiAwLjFlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgbWFyZ2luOiAwLjI1ZW0gMDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMC41ZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjhlbTtcXHJcXG59XFxyXFxuI3Byb2plY3RzLWJvZHkgLnByb2plY3RzLWNoaWxkcmVuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDIwMSwgMjAxKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFpbiBpbnRlcmZhY2Ugd2l0aCB0by1kb3MgKi9cXHJcXG4ubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICB3aWR0aDogY2FsYygxMDAlIC0gMTglKTtcXHJcXG59XFxyXFxuLm1haW4tY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDNlbSAxMGVtIDdlbSAxMWVtO1xcclxcbn1cXHJcXG4ubWFpbi1jb250YWluZXIgaDIge1xcclxcbiAgbGluZS1oZWlnaHQ6IDJlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBkYXJrZ3JheTtcXHJcXG59XFxyXFxuI2FkZC10YXNrIHtcXHJcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAxZW0gMDtcXHJcXG5cXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAxZW07XFxyXFxufVxcclxcbiNhZGQtdGFzayBpIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMS4yZW07XFxyXFxufVxcclxcbiNhZGQtdGFzazpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyMzksIDIzOSk7XFxyXFxufVxcclxcbi8qQWRkIG5ldyBwcm9qZWN0IHByb21wdCAqL1xcclxcbi5uZXctcHJvamVjdC1jYXJkIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNDAlO1xcclxcbiAgbGVmdDogNDAlO1xcclxcbiAgd2lkdGg6IDI1ZW07XFxyXFxuICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4ubmV3LXByb2plY3QtY2FyZCBoMyB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjVlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NCwgMjQ0KTtcXHJcXG59XFxyXFxuLm5ldy1wcm9qZWN0LWNhcmQgZGl2IHtcXHJcXG4gIHBhZGRpbmc6IDEuNWVtO1xcclxcbn1cXHJcXG4ubmV3LXByb2plY3QtY2FyZCBoNCB7XFxyXFxuICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC44ZW07XFxyXFxufVxcclxcbi5uZXctcHJvamVjdC1jYXJkIGlucHV0IHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1ODU4NTg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjRlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNGVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5uZXctcHJvamVjdC1jYXJkIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXHJcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDEuMjVyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNjAlKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDg0LCA4NCk7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG59XFxyXFxuLypBZGQgdGFzayBwcm9tcHQqL1xcclxcbi5uZXctdGFzayB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICByaWdodDogNmVtO1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIG1hcmdpbi10b3A6IDEuNWVtO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLm5ldy10YXNrIGZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAyZW07XFxyXFxuICBnYXA6IDFlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLm5ldy10YXNrIGZvcm0gc3BhbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG4jYWRkLXRhc2stbmFtZSB7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbn1cXHJcXG4jYWRkLXRhc2stZGVzYyB7XFxyXFxuICB0ZXh0LWFsaWduOiB0b3A7XFxyXFxuICBwYWRkaW5nOiAxLjVlbTtcXHJcXG59XFxyXFxuI2FkZC10YXNrLXByaW9yaXR5IHtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxufVxcclxcbiNhZGQtdGFzay1kYXRlIHtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxufVxcclxcbi5uZXctdGFzayBmb3JtIGlucHV0LFxcclxcbi5uZXctdGFzayBmb3JtIHNlbGVjdCB7XFxyXFxuICBwYWRkaW5nOiAwLjRyZW07XFxyXFxufVxcclxcbi5uZXctdGFzayBmb3JtIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgODQsIDg0KTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyp0YXNrIHN0eWxpbmcqL1xcclxcbi50YXNrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxZW0gMC4yNWVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xcclxcbiAgZm9udC1zaXplOiAxLjNlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xcclxcbn1cXHJcXG4udGFzayBzcGFuIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxZW07XFxyXFxufVxcclxcbi50b3Age1xcclxcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuMjVlbSAzZnIgM2ZyIDNmciAxLjI1ZW07XFxyXFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcclxcbn1cXHJcXG4uYm90dG9tIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMS44ZW07XFxyXFxuICBjb2xvcjogcmdiYSg5NCwgOTEsIDkxLCAwLjc4OCk7XFxyXFxufVxcclxcbi50YXNrIGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4udGFzayBpOmhvdmVyIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAyMDEsIDIwMSk7XFxyXFxufVxcclxcbi8qIHBvcHVwIGFza2luZyB0byBjb25maXJtIGRlbGV0ZSB0YXNrICovXFxyXFxuLmRlbGV0ZS10YXNrLXBvcHVwIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNDAlO1xcclxcbiAgbGVmdDogNDUlO1xcclxcbiAgd2lkdGg6IDE1ZW07XFxyXFxuICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4uZGVsZXRlLXRhc2stcG9wdXAgaDMge1xcclxcbiAgcGFkZGluZzogMC41ZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS4zZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuM2VtO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XFxyXFxufVxcclxcbi5kZWxldGUtdGFzay1wb3B1cCBzcGFuIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBwYWRkaW5nOiAwLjhlbTtcXHJcXG59XFxyXFxuLmRlbGV0ZS10YXNrLXBvcHVwIGlucHV0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgcGFkZGluZzogMC43ZW0gMS4yZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcbi8qcGFnZSBsb2NrIGRpdiAqL1xcclxcbi5wYWdlLWxvY2sge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAgb3BhY2l0eTogMC44O1xcclxcbn1cXHJcXG4ubG9jayB7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUEsZUFBZTtBQUNmO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7O0VBRW5CLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsV0FBVztBQUNYO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JB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QkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdEQUFnRDtFQUNoRCxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFVBQVU7RUFDVixvQ0FBb0M7QUFDdEM7QUFDQSx3Q0FBd0M7QUFDeEM7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIscUJBQXFCO0FBQ3ZCO0FBQ0EsaUJBQWlCO0FBQ2pCO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULFFBQVE7RUFDUixZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5MHB4KTtcXHJcXG59XFxyXFxuYXNpZGUge1xcclxcbiAgd2lkdGg6IDE4JTtcXHJcXG4gIGhlaWdodDogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLyogVG9wIEJhbm5lciAqL1xcclxcbi5iYW5uZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBwYWRkaW5nOiAxLjI1ZW0gNGVtO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcbi5iYW5uZXIgaSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMC44ZW07XFxyXFxufVxcclxcblxcclxcbi8qU2lkZWJhciAqL1xcclxcbiN0YWItY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0NSk7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xcclxcbn1cXHJcXG4jdGFiLWNvbnRhaW5lciAqIHtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDEuMjVlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxufVxcclxcbiN0YWItY29udGFpbmVyIGJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuI2luYm94OmhvdmVyLFxcclxcbiN0b2RheTpob3ZlcixcXHJcXG4jdXBjb21pbmc6aG92ZXIsXFxyXFxuI3Byb2plY3RzLXNsaWRlcjpob3ZlcixcXHJcXG4jYWRkLXByb2plY3Q6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMjAxLCAyMDEpO1xcclxcbn1cXHJcXG4jdGFiLWNvbnRhaW5lciBpIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMC41ZW07XFxyXFxufVxcclxcbiNpbmJveCB7XFxyXFxuICBwYWRkaW5nLXRvcDogMS4xZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAyMDEsIDIwMSk7XFxyXFxufVxcclxcbiNwcm9qZWN0cyB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luLXRvcDogMmVtO1xcclxcbn1cXHJcXG4jcHJvamVjdHMtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbiNwcm9qZWN0cy1oZWFkZXIgaDIge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxufVxcclxcbiNwcm9qZWN0cy1oZWFkZXIgaSB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG4uZmEtY2FyZXQtcmlnaHR7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG4uc2VsZWN0ZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMjAxLCAyMDEpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi8qIHByb2plY3RzIHNlY3Rpb24gb2Ygc2lkZWJhciAqL1xcclxcbi5jb2xsYXBzZSB7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwZW0pO1xcclxcbn1cXHJcXG4jcHJvamVjdHMtYm9keSB7XFxyXFxuICBtYXJnaW4tdG9wOiAwLjI1ZW07XFxyXFxufVxcclxcbiNwcm9qZWN0cy1ib2R5IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuI3Byb2plY3RzLWJvZHkgbGkge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4jcHJvamVjdHMtYm9keSBidXR0b24ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxZW07XFxyXFxufVxcclxcbiNwcm9qZWN0cy1ib2R5IC5wcm9qZWN0cy1jaGlsZHJlbntcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuI3Byb2plY3RzLWJvZHkgLnByb2plY3RzLWNoaWxkcmVuIGkge1xcclxcbiAgaGVpZ2h0OiAwLjFlbTtcXHJcXG4gIHdpZHRoOiAwLjFlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgbWFyZ2luOiAwLjI1ZW0gMDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMC41ZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjhlbTtcXHJcXG59XFxyXFxuI3Byb2plY3RzLWJvZHkgLnByb2plY3RzLWNoaWxkcmVuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDIwMSwgMjAxKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFpbiBpbnRlcmZhY2Ugd2l0aCB0by1kb3MgKi9cXHJcXG4ubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICB3aWR0aDogY2FsYygxMDAlIC0gMTglKTtcXHJcXG59XFxyXFxuLm1haW4tY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDNlbSAxMGVtIDdlbSAxMWVtO1xcclxcbn1cXHJcXG4ubWFpbi1jb250YWluZXIgaDIge1xcclxcbiAgbGluZS1oZWlnaHQ6IDJlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBkYXJrZ3JheTtcXHJcXG59XFxyXFxuI2FkZC10YXNrIHtcXHJcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAxZW0gMDtcXHJcXG5cXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAxZW07XFxyXFxufVxcclxcbiNhZGQtdGFzayBpIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMS4yZW07XFxyXFxufVxcclxcbiNhZGQtdGFzazpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyMzksIDIzOSk7XFxyXFxufVxcclxcbi8qQWRkIG5ldyBwcm9qZWN0IHByb21wdCAqL1xcclxcbi5uZXctcHJvamVjdC1jYXJkIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNDAlO1xcclxcbiAgbGVmdDogNDAlO1xcclxcbiAgd2lkdGg6IDI1ZW07XFxyXFxuICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4ubmV3LXByb2plY3QtY2FyZCBoMyB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjVlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NCwgMjQ0KTtcXHJcXG59XFxyXFxuLm5ldy1wcm9qZWN0LWNhcmQgZGl2IHtcXHJcXG4gIHBhZGRpbmc6IDEuNWVtO1xcclxcbn1cXHJcXG4ubmV3LXByb2plY3QtY2FyZCBoNCB7XFxyXFxuICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC44ZW07XFxyXFxufVxcclxcbi5uZXctcHJvamVjdC1jYXJkIGlucHV0IHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1ODU4NTg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjRlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNGVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5uZXctcHJvamVjdC1jYXJkIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXHJcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDEuMjVyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNjAlKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDg0LCA4NCk7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG59XFxyXFxuLypBZGQgdGFzayBwcm9tcHQqL1xcclxcbi5uZXctdGFzayB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICByaWdodDogNmVtO1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIG1hcmdpbi10b3A6IDEuNWVtO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLm5ldy10YXNrIGZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAyZW07XFxyXFxuICBnYXA6IDFlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLm5ldy10YXNrIGZvcm0gc3BhbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG4jYWRkLXRhc2stbmFtZSB7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbn1cXHJcXG4jYWRkLXRhc2stZGVzYyB7XFxyXFxuICB0ZXh0LWFsaWduOiB0b3A7XFxyXFxuICBwYWRkaW5nOiAxLjVlbTtcXHJcXG59XFxyXFxuI2FkZC10YXNrLXByaW9yaXR5IHtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxufVxcclxcbiNhZGQtdGFzay1kYXRlIHtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxufVxcclxcbi5uZXctdGFzayBmb3JtIGlucHV0LFxcclxcbi5uZXctdGFzayBmb3JtIHNlbGVjdCB7XFxyXFxuICBwYWRkaW5nOiAwLjRyZW07XFxyXFxufVxcclxcbi5uZXctdGFzayBmb3JtIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgODQsIDg0KTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyp0YXNrIHN0eWxpbmcqL1xcclxcbi50YXNrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxZW0gMC4yNWVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xcclxcbiAgZm9udC1zaXplOiAxLjNlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xcclxcbn1cXHJcXG4udGFzayBzcGFuIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxZW07XFxyXFxufVxcclxcbi50b3Age1xcclxcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuMjVlbSAzZnIgM2ZyIDNmciAxLjI1ZW07XFxyXFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcclxcbn1cXHJcXG4uYm90dG9tIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMS44ZW07XFxyXFxuICBjb2xvcjogcmdiYSg5NCwgOTEsIDkxLCAwLjc4OCk7XFxyXFxufVxcclxcbi50YXNrIGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4udGFzayBpOmhvdmVyIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAyMDEsIDIwMSk7XFxyXFxufVxcclxcbi8qIHBvcHVwIGFza2luZyB0byBjb25maXJtIGRlbGV0ZSB0YXNrICovXFxyXFxuLmRlbGV0ZS10YXNrLXBvcHVwIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNDAlO1xcclxcbiAgbGVmdDogNDUlO1xcclxcbiAgd2lkdGg6IDE1ZW07XFxyXFxuICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4uZGVsZXRlLXRhc2stcG9wdXAgaDMge1xcclxcbiAgcGFkZGluZzogMC41ZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS4zZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuM2VtO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XFxyXFxufVxcclxcbi5kZWxldGUtdGFzay1wb3B1cCBzcGFuIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBwYWRkaW5nOiAwLjhlbTtcXHJcXG59XFxyXFxuLmRlbGV0ZS10YXNrLXBvcHVwIGlucHV0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgcGFkZGluZzogMC43ZW0gMS4yZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcbi8qcGFnZSBsb2NrIGRpdiAqL1xcclxcbi5wYWdlLWxvY2sge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAgb3BhY2l0eTogMC44O1xcclxcbn1cXHJcXG4ubG9jayB7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuXG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiaW1wb3J0IGxpZ2h0Rm9ybWF0dGVycyBmcm9tIFwiLi4vbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDRGF5T2ZZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xudmFyIGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiAnYW0nLFxuICBwbTogJ3BtJyxcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gIG5vb246ICdub29uJyxcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICBldmVuaW5nOiAnZXZlbmluZycsXG4gIG5pZ2h0OiAnbmlnaHQnXG59O1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBlcmEgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcblxuICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG5cbiAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7IC8vIFR3byBkaWdpdCB5ZWFyXG5cbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9IC8vIE9yZGluYWwgbnVtYmVyXG5cblxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9IC8vIFBhZGRpbmdcblxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7IC8vIFBhZGRpbmdcblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdRbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ1FRUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdRUVFRJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAncSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdxcSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAncXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTU1NTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG5cbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdMbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciB3ZWVrID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGlzb1dlZWsgPSBnZXRVVENJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdkbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7XG4gICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdEbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwge1xuICAgICAgICB1bml0OiAnZGF5T2ZZZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnRSc6XG4gICAgICBjYXNlICdFRSc6XG4gICAgICBjYXNlICdFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2VlJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnZWVlZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnY2MnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2NvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnY2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlICdpJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcblxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuXG4gICAgICBjYXNlICdpbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlXG5cbiAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2lpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdpaWlpJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdaJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcblxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG5cbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcblxuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcbiAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gJ3l5JyA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldFVUQ0hvdXJzKCkgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiZnVuY3Rpb24gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAncCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKTtcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0LnJlcGxhY2UoJ3t7ZGF0ZX19JywgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKS5yZXBsYWNlKCd7e3RpbWV9fScsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59XG5cbnZhciBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxufTtcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSkuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBkaXJ0eU9wdGlvbnMpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJ2YXIgcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zID0gWydEJywgJ0REJ107XG52YXIgcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMgPSBbJ1lZJywgJ1lZWVknXTtcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgaWYgKHRva2VuID09PSAnWVlZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdEJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnREQnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgeWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSk7XG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWsoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVXZWVrU3RhcnRzT24gPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMud2Vla1N0YXJ0c09uO1xuICB2YXIgZGVmYXVsdFdlZWtTdGFydHNPbiA9IGxvY2FsZVdlZWtTdGFydHNPbiA9PSBudWxsID8gMCA6IHRvSW50ZWdlcihsb2NhbGVXZWVrU3RhcnRzT24pO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gb3B0aW9ucy53ZWVrU3RhcnRzT24gPT0gbnVsbCA/IGRlZmF1bHRXZWVrU3RhcnRzT24gOiB0b0ludGVnZXIob3B0aW9ucy53ZWVrU3RhcnRzT24pOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIHllYXIgPSBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWssIGRpcnR5T3B0aW9ucyk7XG4gIHJldHVybiBkYXRlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNzUwIG1pbGxpc2Vjb25kcyB0byAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gYWRkTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzAuNzUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciB0aW1lc3RhbXAgPSB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgYW1vdW50KTtcbn0iLCJpbXBvcnQgaXNWYWxpZCBmcm9tIFwiLi4vaXNWYWxpZC9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcblxudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7IC8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcblxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXJ9XG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyfSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0aGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBUaGUgc2Vjb25kIGFyZ3VtZW50IGlzIG5vdyByZXF1aXJlZCBmb3IgdGhlIHNha2Ugb2YgZXhwbGljaXRuZXNzLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKiAgIGZvcm1hdChuZXcgRGF0ZSgyMDE2LCAwLCAxKSlcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqICAgZm9ybWF0KG5ldyBEYXRlKDIwMTYsIDAsIDEpLCBcInl5eXktTU0tZGQnVCdISDptbTpzcy5TU1N4eHhcIilcbiAqICAgYGBgXG4gKlxuICogLSBOZXcgZm9ybWF0IHN0cmluZyBBUEkgZm9yIGBmb3JtYXRgIGZ1bmN0aW9uXG4gKiAgIHdoaWNoIGlzIGJhc2VkIG9uIFtVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzVdKGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGUpLlxuICogICBTZWUgW3RoaXMgcG9zdF0oaHR0cHM6Ly9ibG9nLmRhdGUtZm5zLm9yZy9wb3N0L3VuaWNvZGUtdG9rZW5zLWluLWRhdGUtZm5zLXYyLXNyZWF0eWtpOTFqZykgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiAtIENoYXJhY3RlcnMgYXJlIG5vdyBlc2NhcGVkIHVzaW5nIHNpbmdsZSBxdW90ZSBzeW1ib2xzIChgJ2ApIGluc3RlYWQgb2Ygc3F1YXJlIGJyYWNrZXRzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdCAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIgdG9rZW5zIGBZWWAgYW5kIGBZWVlZYDtcbiAqICAgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcbiAqICAgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChkaXJ0eURhdGUsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBmb3JtYXRTdHIgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHIpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuXG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9IC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuXG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZywgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcblxuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eURhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucyAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eURhdGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZywgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgcmV0dXJuIGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSB0aGUgdmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNTYW1lV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrP1xuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZVJpZ2h0LCBkaXJ0eU9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mV2Vlay5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZXZWVrLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNEYXRlIGZyb20gXCIuLi9pc0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gTm93IGBpc1ZhbGlkYCBkb2Vzbid0IHRocm93IGFuIGV4Y2VwdGlvblxuICogICBpZiB0aGUgZmlyc3QgYXJndW1lbnQgaXMgbm90IGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKiAgIEluc3RlYWQsIGFyZ3VtZW50IGlzIGNvbnZlcnRlZCBiZWZvcmVoYW5kIHVzaW5nIGB0b0RhdGVgLlxuICpcbiAqICAgRXhhbXBsZXM6XG4gKlxuICogICB8IGBpc1ZhbGlkYCBhcmd1bWVudCAgICAgICAgfCBCZWZvcmUgdjIuMC4wIHwgdjIuMC4wIG9ud2FyZCB8XG4gKiAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLXxcbiAqICAgfCBgbmV3IERhdGUoKWAgICAgICAgICAgICAgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgnMjAxNi0wMS0wMScpYCAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKCcnKWAgICAgICAgICAgICB8IGBmYWxzZWAgICAgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoMTQ4ODM3MDgzNTA4MSlgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZShOYU4pYCAgICAgICAgICAgfCBgZmFsc2VgICAgICAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYCcyMDE2LTAxLTAxJ2AgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgJydgICAgICAgICAgICAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAxNDg4MzcwODM1MDgxYCAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYE5hTmAgICAgICAgICAgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqXG4gKiAgIFdlIGludHJvZHVjZSB0aGlzIGNoYW5nZSB0byBtYWtlICpkYXRlLWZucyogY29uc2lzdGVudCB3aXRoIEVDTUFTY3JpcHQgYmVoYXZpb3JcbiAqICAgdGhhdCB0cnkgdG8gY29lcmNlIGFyZ3VtZW50cyB0byB0aGUgZXhwZWN0ZWQgdHlwZVxuICogICAod2hpY2ggaXMgYWxzbyB0aGUgY2FzZSB3aXRoIG90aGVyICpkYXRlLWZucyogZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcblxuICBpZiAoIWlzRGF0ZShkaXJ0eURhdGUpICYmIHR5cGVvZiBkaXJ0eURhdGUgIT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoZGF0ZSkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIGRpcnR5T3B0aW9ucykge1xuICAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuXG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDsgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsYW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcblxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xuXG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiAodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuXG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG5cbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uICh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFJlbGF0aXZlOyIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTsgLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xuXG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIChkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7IC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcblxuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufTtcblxudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIChxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBtYXRjaDsiLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdExvbmcgZnJvbSBcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGxvY2FsaXplIGZyb20gXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDBcbiAgICAvKiBTdW5kYXkgKi9cbiAgICAsXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRNaWxsaXNlY29uZHMgZnJvbSBcIi4uL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Yk1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcclxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXHJcXG4gIDxoZWFkPlxcclxcbiAgICA8bWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCIgLz5cXHJcXG4gICAgPG1ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJJRT1lZGdlXFxcIiAvPlxcclxcbiAgICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCIgLz5cXHJcXG4gICAgPHRpdGxlPlRvIERvIExpc3Q8L3RpdGxlPlxcclxcbiAgICA8c2NyaXB0XFxyXFxuICAgICAgc3JjPVxcXCJodHRwczovL2tpdC5mb250YXdlc29tZS5jb20vOTY5YTBlMzJmMy5qc1xcXCJcXHJcXG4gICAgICBjcm9zc29yaWdpbj1cXFwiYW5vbnltb3VzXFxcIlxcclxcbiAgICA+PC9zY3JpcHQ+XFxyXFxuICA8L2hlYWQ+XFxyXFxuICA8Ym9keT5cXHJcXG4gICAgPGhlYWRlcj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJiYW5uZXJcXFwiPlxcclxcbiAgICAgICAgPGgxPlRvLURvPC9oMT5cXHJcXG4gICAgICAgIDxpIGNsYXNzPVxcXCJmYXMgZmEtbGlzdC11bCBmYS0yeFxcXCI+PC9pPlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8L2hlYWRlcj5cXHJcXG4gICAgPG1haW4+XFxyXFxuICAgICAgPGFzaWRlPlxcclxcbiAgICAgICAgICA8ZGl2IGlkPVxcXCJ0YWItY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJpbmJveFxcXCI+PGkgY2xhc3M9XFxcImZhcyBmYS1pbmJveFxcXCI+PC9pPkluYm94PC9idXR0b24+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwidG9kYXlcXFwiPjxpIGNsYXNzPVxcXCJmYXMgZmEtY2FsZW5kYXItZGF5XFxcIj48L2k+VG9kYXk8L2J1dHRvbj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJ1cGNvbWluZ1xcXCI+XFxyXFxuICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmFzIGZhLWNhbGVuZGFyLW1pbnVzXFxcIj48L2k+VXBjb21pbmdcXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJwcm9qZWN0c1xcXCI+XFxyXFxuICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJwcm9qZWN0cy1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJwcm9qZWN0cy1zbGlkZXJcXFwiPjxpIGNsYXNzPVxcXCJmYXMgZmEtY2FyZXQtZG93biBmYS0xeFxcXCI+PC9pPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8aDI+UHJvamVjdHM8L2gyPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJhZGQtcHJvamVjdFxcXCI+IDxpIGNsYXNzPVxcXCJmYXMgZmEtcGx1c1xcXCI+PC9pPiA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgPGRpdiBpZD1cXFwicHJvamVjdHMtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx1bD48L3VsPlxcclxcbiAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9hc2lkZT5cXHJcXG5cXHJcXG4gICAgICA8c2VjdGlvbiBjbGFzcz1cXFwibWFpblxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYWluLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgIDxkaXYgaWQ9XFxcIm1haW4tdG9kb1xcXCI+XFxyXFxuICAgICAgICAgICAgPGgyPkluYm94PC9oMj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJhZGQtdGFza1xcXCI+PGkgY2xhc3M9XFxcImZhcyBmYS1wbHVzXFxcIj48L2k+QWRkIFRhc2s8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L3NlY3Rpb24+XFxyXFxuXFxyXFxuICAgICAgXFxyXFxuICAgIDwvbWFpbj5cXHJcXG5cXHJcXG4gIDwvYm9keT5cXHJcXG48L2h0bWw+XFxyXFxuXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwicmVxdWlyZSgnLi9pbmRleC5odG1sJylcclxuaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBhZGRFdmVudExpc3RlbmVycyB9IGZyb20gXCIuL21vZHVsZXMvVUkuanNcIjtcclxuaW1wb3J0IHtsb2FkRGF0YX0gZnJvbSBcIi4vbW9kdWxlcy9TdG9yYWdlLmpzXCI7XHJcblxyXG4vL2FkZHMgYWxsIHJlcXVpcmVkIGV2ZW50IGxpc3RlbmVycyBmb3IgdGhlIHBhZ2UgdG8gcnVuIHByb3Blcmx5XHJcbmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbmxvYWREYXRhKCk7XHJcbi8vZW5kIl0sIm5hbWVzIjpbInRvRG9MaXN0IiwidG9Eb0l0ZW0iLCJQcm9qZWN0IiwicHJvamVjdHNMaXN0IiwidG9Eb0xpc3ROYW1lIiwibmV3VG9Eb0xpc3QiLCJuZXdQcm9qZWN0IiwicHVzaCIsImlkIiwic3BsaWNlIiwidG9kYXlIYW5kbGVyIiwidXBjb21pbmdIYW5kbGVyIiwicmVuZGVyVG9Eb0xpc3QiLCJpbmJveERhdGFiYXNlIiwicHJvamVjdHNEYXRhYmFzZSIsInRvZGF5RGF0YWJhc2UiLCJ1cGNvbWluZ0RhdGFiYXNlIiwic3RvcmVEYXRhIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2FkRGF0YSIsImZvcm1hdCIsImlzU2FtZVdlZWsiLCJ0b0NsYXNzIiwiZGVsZXRlUHJvamVjdFBvcHVwIiwibWFpbkNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRhYkNvbnRhaW5lciIsImluYm94IiwidG9kYXkiLCJ1cGNvbWluZyIsInByb2plY3RzU2xpZGVyIiwiYWRkUHJvamVjdEJ1dHRvbiIsImFkZFRhc2tCdXR0b24iLCJhZGRQcm9qZWN0IiwicHJvamVjdHNEaXYiLCJwYXJzZSIsImdldEl0ZW0iLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaXNwbGF5SW5ib3hEaXYiLCJkaXNwbGF5VG9kYXlEaXYiLCJkaXNwbGF5VXBjb21pbmdEaXYiLCJkaXNwbGF5UHJvamVjdExpc3QiLCJuZXdQcm9qZWN0UHJvbXB0IiwiYWRkVGFzayIsImUiLCJidXR0b24iLCJ0YXJnZXQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwicGFyZW50IiwiaW5uZXJIVE1MIiwic3R5bGUiLCJkaXNwbGF5IiwiYXBwZW5kQ2hpbGQiLCJhZGRQYWdlTG9jayIsIm5ld1Rhc2tEaXYiLCJpbnB1dEZpZWxkIiwic3VibWl0Qm94ZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3VycmVudGx5U2VsZWN0ZWQiLCJnZXRBdHRyaWJ1dGUiLCJmb3JFYWNoIiwiaW5wdXQiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwiZm9ybSIsIm5hbWUiLCJlbGVtZW50cyIsImRlc2MiLCJkYXRlIiwicHJpb3JpdHkiLCJpc05hTiIsImN1cnJlbnRQcm9qZWN0Iiwib2JqTmFtZSIsIk9iamVjdCIsImtleXMiLCJ0b0RvVGFzayIsIm5ld0l0ZW0iLCJpbmJveE9iaiIsIkluYm94IiwidG9kYXlPYmoiLCJUb2RheSIsImN1cnJlbnREYXRlIiwiRGF0ZSIsImFsZXJ0IiwidXBjb21pbmdPYmoiLCJVcGNvbWluZyIsImZvcm1hdHRlZEN1cnJlbnREYXRlIiwieWVhciIsInNwbGl0IiwibW9udGgiLCJkYXkiLCJmb3JtYXR0ZWRQcm9qZWN0RGF0ZSIsInJlbW92ZSIsInJlbW92ZVBhZ2VMb2NrIiwiZWRpdFRhc2siLCJzZWxlY3RlZERpdiIsInBhcmVudEVsZW1lbnQiLCJzZWxlY3RlZERpdlNwYW4iLCJ0b0RvQXJyIiwiaW5uZXJUZXh0IiwidHJpbSIsInN1YnN0cmluZyIsImluZGV4T2YiLCJuZXdUb0RvQXJyIiwiQXJyYXkiLCJmcm9tIiwiaW5kZXhPZlNlbGVjdGVkRWxlbWVudCIsImZpbmRJbmRleCIsImVsZW1lbnQiLCJ1cGRhdGVJdGVtIiwiY29udGFpbnMiLCJuZXdQcm9qZWN0Q2FyZCIsInRvTG93ZXJDYXNlIiwiaW5wdXRWYWx1ZSIsImN1cnJlbnRJZCIsImxlbmd0aCIsImluc2VydFByb2plY3REaXYiLCJsaSIsInNldEF0dHJpYnV0ZSIsImRpc3BsYXlQcm9qZWN0RGl2IiwicmVzZXRCdXR0b25zIiwiYnV0dG9ucyIsImlkVmFsdWUiLCJub2RlTmFtZSIsInBhZ2VMb2NrIiwiYm9keSIsInRhc2siLCJ0YXNrTG9jayIsImkiLCJ0b2dnbGUiLCJkZWxldGVUYXNrUG9wdXAiLCJyZW5kZXIiLCJtYWluVG9EbyIsInRvRG9MaXN0RGl2cyIsIm9iaiIsInByb2plY3QiLCJpdGVtcyIsImdldER1ZURhdGUiLCJnZXRJdGVtcyIsImRlbGV0ZUJ1dHRvbkFyciIsImVkaXRCdXR0b25BcnIiLCJ0ZXh0Q29udGVudCIsInByb2plY3REYXRlIiwidHlwZSIsImRhdGFiYXNlIiwic3RyaW5nIiwib2JqSW5ib3giLCJvYmpJbmJveEl0ZW1zIiwiX2R1ZURhdGUiLCJuZXdUb0RvIiwiX3RpdGxlIiwiX2Rlc2NyaXB0aW9uIiwiX3ByaW9yaXR5Iiwib2JqVG9kYXkiLCJvYmpUb2RheUl0ZW1zIiwib2JqVXBjb21pbmciLCJvYmpVcGNvbWluZ0l0ZW1zIiwib2JqUHJvamVjdCIsImVudHJpZXMiLCJwcm9qIiwia2V5IiwiZmxhZyIsImdldFRpdGxlIiwiZ2V0UHJpb3JpdHkiLCJnZXREZXNjcmlwdGlvbiIsImluc2VydEJlZm9yZSIsInByb2plY3RMaXN0IiwicHJvamVjdE5hbWUiLCJwb3B1cCIsImlucHV0cyIsImRlbGV0ZVByb2plY3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsIm9yaWdpbmFsRWxlbWVudCIsImRlbGV0ZVRhc2siLCJzZWxlY3RlZCIsImdldFByb2plY3RzIiwicmVtb3ZlSXRlbSIsIl9uYW1lIiwiaXRlbSIsImluZGV4IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJ1bmRlZmluZWQiLCJyZXF1aXJlIl0sInNvdXJjZVJvb3QiOiIifQ==