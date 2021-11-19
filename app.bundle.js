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
  alert("hi");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxXQUFXLHNGQUFzRixVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksY0FBYyxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxTQUFTLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxh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Q0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzRkFBc0Y7QUFDdEY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05Ba0MsbUJBQU8sQ0FBQyxzQ0FBRCxDQUFQOztBQUNBO0FBQ0E7Q0FHQTs7QUFDQXZKLGlFQUFpQjtBQUNqQnJCLDZEQUFRLElBQ1IsSyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9Qcm9qZWN0TWFuYWdlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2xvZ2ljLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvRG9MaXN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNEYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZVdlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS9zdHlsZS5jc3M/YmNmMiIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt0b0RvTGlzdCAsIHRvRG9JdGVtfSBmcm9tICcuL3RvRG9MaXN0LmpzJztcclxuXHJcbi8vUHJvamVjdCBjbGFzcyBoYXMgYW4gYXJyYXkgKHByb2plY3RzTGlzdCkgd2l0aCBvYmplY3RzIChrZXk6IG5hbWUgb2YgdG8gZG8gbGlzdCkgKHZhbHVlOiB0b0RvTGlzdCBjbGFzcylcclxuY2xhc3MgUHJvamVjdCB7XHJcbiBcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdHNMaXN0ID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUHJvamVjdCh0b0RvTGlzdE5hbWUpIHtcclxuICAgICAgICBsZXQgbmV3VG9Eb0xpc3QgPSBuZXcgdG9Eb0xpc3QodG9Eb0xpc3ROYW1lKTtcclxuICAgICAgICBsZXQgbmV3UHJvamVjdCA9IHtcclxuICAgICAgICAgICAgW3RvRG9MaXN0TmFtZV06IG5ld1RvRG9MaXN0LFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb2plY3RzTGlzdC5wdXNoKG5ld1Byb2plY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVByb2plY3QoaWQpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzTGlzdC5zcGxpY2UoaWQsMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJvamVjdHMoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0c0xpc3Q7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xyXG5cclxuICIsImltcG9ydCB7IHRvZGF5SGFuZGxlciwgdXBjb21pbmdIYW5kbGVyIH0gZnJvbSBcIi4vbG9naWMuanNcIjtcclxuaW1wb3J0IHsgcmVuZGVyVG9Eb0xpc3QgfSBmcm9tIFwiLi9yZW5kZXIuanNcIjtcclxuaW1wb3J0IHtcclxuICBpbmJveERhdGFiYXNlLFxyXG4gIHByb2plY3RzRGF0YWJhc2UsXHJcbiAgdG9kYXlEYXRhYmFzZSxcclxuICB1cGNvbWluZ0RhdGFiYXNlLFxyXG59IGZyb20gXCIuL1VJLmpzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RvcmVEYXRhKCkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNEYXRhYmFzZVwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0RhdGFiYXNlKSk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpbmJveERhdGFiYXNlXCIsIEpTT04uc3RyaW5naWZ5KGluYm94RGF0YWJhc2UpKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZGF5RGF0YWJhc2VcIiwgSlNPTi5zdHJpbmdpZnkodG9kYXlEYXRhYmFzZSkpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXBjb21pbmdEYXRhYmFzZVwiLCBKU09OLnN0cmluZ2lmeSh1cGNvbWluZ0RhdGFiYXNlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGF0YSgpIHtcclxuICByZW5kZXJUb0RvTGlzdChpbmJveERhdGFiYXNlLG51bGwsXCJJbmJveFwiKTtcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcbmltcG9ydCBpc1NhbWVXZWVrIGZyb20gXCJkYXRlLWZucy9pc1NhbWVXZWVrXCI7XHJcbmltcG9ydCB7IHRvQ2xhc3MsIHRvZGF5SGFuZGxlciwgdXBjb21pbmdIYW5kbGVyIH0gZnJvbSBcIi4vbG9naWMuanNcIjtcclxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdE1hbmFnZXIuanNcIjtcclxuaW1wb3J0IHsgcmVuZGVyVG9Eb0xpc3QsIGRlbGV0ZVByb2plY3RQb3B1cCB9IGZyb20gXCIuL3JlbmRlci5qc1wiO1xyXG5pbXBvcnQgeyBzdG9yZURhdGEgfSBmcm9tIFwiLi9TdG9yYWdlLmpzXCI7XHJcbmltcG9ydCB7IHRvRG9JdGVtIH0gZnJvbSBcIi4vdG9Eb0xpc3QuanNcIjtcclxuXHJcbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpO1xyXG5jb25zdCB0YWJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhYi1jb250YWluZXJcIik7XHJcblxyXG5jb25zdCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5ib3hcIik7XHJcbmNvbnN0IHRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RheVwiKTtcclxuY29uc3QgdXBjb21pbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VwY29taW5nXCIpO1xyXG5jb25zdCBwcm9qZWN0c1NsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHMtc2xpZGVyXCIpO1xyXG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdFwiKTtcclxuY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2tcIik7XHJcblxyXG5sZXQgcHJvamVjdHNEYXRhYmFzZSA9IG5ldyBQcm9qZWN0KCk7XHJcbmxldCBpbmJveERhdGFiYXNlID0gbmV3IFByb2plY3QoKTtcclxuaW5ib3hEYXRhYmFzZS5hZGRQcm9qZWN0KFwiSW5ib3hcIik7XHJcblxyXG5sZXQgdG9kYXlEYXRhYmFzZSA9IG5ldyBQcm9qZWN0KCk7XHJcbnRvZGF5RGF0YWJhc2UuYWRkUHJvamVjdChcIlRvZGF5XCIpO1xyXG5cclxubGV0IHVwY29taW5nRGF0YWJhc2UgPSBuZXcgUHJvamVjdCgpO1xyXG51cGNvbWluZ0RhdGFiYXNlLmFkZFByb2plY3QoXCJVcGNvbWluZ1wiKTtcclxuXHJcbmxldCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHMtYm9keVwiKTtcclxuXHJcbmlmIChcclxuICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNEYXRhYmFzZVwiKSkgfHxcclxuICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaW5ib3hEYXRhYmFzZVwiKSkgfHxcclxuICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kYXlEYXRhYmFzZVwiKSkgfHxcclxuICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXBjb21pbmdEYXRhYmFzZVwiKSlcclxuKSB7XHJcbiAgdG9DbGFzcyhcIkluYm94XCIsIGluYm94RGF0YWJhc2UsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaW5ib3hEYXRhYmFzZVwiKSk7XHJcbiAgdG9DbGFzcyhcIlRvZGF5XCIsIHRvZGF5RGF0YWJhc2UsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kYXlEYXRhYmFzZVwiKSk7XHJcbiAgdG9DbGFzcyhcclxuICAgIFwiVXBjb21pbmdcIixcclxuICAgIHVwY29taW5nRGF0YWJhc2UsXHJcbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVwY29taW5nRGF0YWJhc2VcIilcclxuICApO1xyXG4gIHRvQ2xhc3MoXHJcbiAgICBcIlByb2plY3RcIixcclxuICAgIHByb2plY3RzRGF0YWJhc2UsXHJcbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzRGF0YWJhc2VcIilcclxuICApO1xyXG59XHJcblxyXG4vL2luYm94IGlzIHNlbGVjdGVkIGJ5IGRlZmF1bHRcclxuaW5ib3guY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG5cclxuLy9hZGRzIGV2ZW50IGxpc3RlbmVycyB0byBhbGwgY2xpY2thYmxlIGJ1dHRvbnNcclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gIGluYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5SW5ib3hEaXYpO1xyXG4gIHRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5VG9kYXlEaXYpO1xyXG4gIHVwY29taW5nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5VXBjb21pbmdEaXYpO1xyXG4gIHByb2plY3RzU2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5UHJvamVjdExpc3QpO1xyXG4gIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld1Byb2plY3RQcm9tcHQpO1xyXG4gIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFRhc2spO1xyXG59XHJcblxyXG4vL2FkZCBuZXcgdGFzayB0byBjdXJyZW50IHRvIGRvIGxpc3Qgc2VsZWN0aW9uXHJcbmZ1bmN0aW9uIGFkZFRhc2soZSkge1xyXG4gIGxldCBidXR0b24gPSBlLnRhcmdldDtcclxuICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsZXQgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLXRvZG9cIik7XHJcblxyXG4gIGRpdi5pbm5lckhUTUwgPSBgXHJcbiAgPGZvcm0gbWV0aG9kPVwicG9zdFwiPlxyXG5cclxuICA8aDM+QWRkIFRhc2s8L2gzPlxyXG5cclxuICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGlkPVwiYWRkLXRhc2stbmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiPlxyXG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkZXNjXCIgaWQ9XCJhZGQtdGFzay1kZXNjXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiPlxyXG4gIDxzcGFuPlxyXG4gIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkYXRlXCIgaWQ9XCJhZGQtdGFzay1kYXRlXCI+XHJcbiAgPHNlbGVjdCBuYW1lPVwicHJpb3JpdHlcIiBpZD1cImFkZC10YXNrLXByaW9yaXR5XCI+XHJcbiAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IFRhc2sgUHJpb3JpdHk8L29wdGlvbj5cclxuICAgIDxvcHRpb24gdmFsdWU9XCJIaWdoXCI+IEhpZ2ggPC9vcHRpb24+XHJcbiAgICA8b3B0aW9uIHZhbHVlPVwiTWVkaXVtXCI+IE1lZGl1bSA8L29wdGlvbj5cclxuICAgIDxvcHRpb24gdmFsdWU9XCJMb3dcIj4gTG93IDwvb3B0aW9uPlxyXG4gIDwvc2VsZWN0PlxyXG4gIDwvc3Bhbj5cclxuXHJcblxyXG4gIDxzcGFuPlxyXG4gIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJBZGRcIj5cclxuICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQ2FuY2VsXCI+XHJcbiAgPC9zcGFuPlxyXG5cclxuICA8L2Zvcm0+XHJcbmA7XHJcblxyXG4gIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG4gIGRpdi5zdHlsZVtcInotaW5kZXhcIl0gPSBcIjJcIjtcclxuICBkaXYuY2xhc3NMaXN0LmFkZChcIm5ldy10YXNrXCIpO1xyXG4gIHBhcmVudC5hcHBlbmRDaGlsZChkaXYpO1xyXG4gIGFkZFBhZ2VMb2NrKCk7XHJcblxyXG4gIGxldCBuZXdUYXNrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctdGFza1wiKTtcclxuICBsZXQgaW5wdXRGaWVsZCA9IG5ld1Rhc2tEaXYucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1uYW1lXCIpO1xyXG4gIGxldCBzdWJtaXRCb3hlcyA9IG5ld1Rhc2tEaXYucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9c3VibWl0XVwiKTtcclxuICBjb25zdCBjdXJyZW50bHlTZWxlY3RlZCA9IHRhYkNvbnRhaW5lclxyXG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIilcclxuICAgIC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuXHJcbiAgLy9jaGVja3MgdXNlciBpbnB1dFxyXG4gIHN1Ym1pdEJveGVzLmZvckVhY2goKGlucHV0KSA9PlxyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKGlucHV0LnZhbHVlID09PSBcIkFkZFwiICYmIGlucHV0RmllbGQudmFsdWUgIT0gXCJcIikge1xyXG4gICAgICAgIGxldCBmb3JtID0gbmV3VGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcclxuICAgICAgICBsZXQgbmFtZSA9IGZvcm0uZWxlbWVudHNbXCJuYW1lXCJdLnZhbHVlO1xyXG4gICAgICAgIGxldCBkZXNjID0gZm9ybS5lbGVtZW50c1tcImRlc2NcIl0udmFsdWU7XHJcbiAgICAgICAgbGV0IGRhdGUgPSBmb3JtLmVsZW1lbnRzW1wiZGF0ZVwiXS52YWx1ZTtcclxuICAgICAgICBsZXQgcHJpb3JpdHkgPSBmb3JtLmVsZW1lbnRzW1wicHJpb3JpdHlcIl0udmFsdWU7XHJcblxyXG4gICAgICAgIC8vY3VycmVudGx5U2VsZWN0ZWQgaXMgYSBwcm9qZWN0LCBhZGQgbmV3IHRhc2sgdG8gcHJvamVjdFxyXG4gICAgICAgIGlmICghaXNOYU4oY3VycmVudGx5U2VsZWN0ZWQpKSB7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGN1cnJlbnRseVNlbGVjdGVkKTtcclxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID1cclxuICAgICAgICAgICAgcHJvamVjdHNEYXRhYmFzZS5wcm9qZWN0c0xpc3RbY3VycmVudGx5U2VsZWN0ZWRdO1xyXG4gICAgICAgICAgY29uc3Qgb2JqTmFtZSA9IE9iamVjdC5rZXlzKGN1cnJlbnRQcm9qZWN0KVswXTtcclxuXHJcbiAgICAgICAgICBsZXQgdG9Eb0xpc3QgPSBjdXJyZW50UHJvamVjdFtvYmpOYW1lXTtcclxuICAgICAgICAgIGxldCB0b0RvVGFzayA9IG5ldyB0b0RvSXRlbShuYW1lLCBkZXNjLCBkYXRlLCBwcmlvcml0eSk7XHJcbiAgICAgICAgICB0b0RvTGlzdC5uZXdJdGVtKHRvRG9UYXNrKTtcclxuXHJcbiAgICAgICAgICBzdG9yZURhdGEoKTtcclxuICAgICAgICAgIHJlbmRlclRvRG9MaXN0KHByb2plY3RzRGF0YWJhc2UsIGN1cnJlbnRseVNlbGVjdGVkLCBcIlByb2plY3RcIik7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKHRvRG9MaXN0KTtlZGl0VGFza1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9jdXJyZW50bHlTZWxlY3RlZCBpcyBJbmJveC9Ub2RheS9VcGNvbWluZ1xyXG4gICAgICAgIGVsc2UgaWYgKGN1cnJlbnRseVNlbGVjdGVkID09IFwiaW5ib3hcIikge1xyXG4gICAgICAgICAgY29uc3QgaW5ib3hPYmogPSBpbmJveERhdGFiYXNlLnByb2plY3RzTGlzdFswXTtcclxuICAgICAgICAgIGNvbnN0IHRvRG9MaXN0ID0gaW5ib3hPYmouSW5ib3g7XHJcblxyXG4gICAgICAgICAgbGV0IHRvRG9UYXNrID0gbmV3IHRvRG9JdGVtKG5hbWUsIGRlc2MsIGRhdGUsIHByaW9yaXR5KTtcclxuICAgICAgICAgIHRvRG9MaXN0Lm5ld0l0ZW0odG9Eb1Rhc2spO1xyXG5cclxuICAgICAgICAgIHN0b3JlRGF0YSgpO1xyXG4gICAgICAgICAgcmVuZGVyVG9Eb0xpc3QoaW5ib3hEYXRhYmFzZSwgbnVsbCwgXCJJbmJveFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vY3VycmVudGx5U2VsZWN0ZWQgaXMgVG9kYXkvVXBjb21pbmdcclxuICAgICAgICBlbHNlIGlmIChjdXJyZW50bHlTZWxlY3RlZCA9PSBcInRvZGF5XCIpIHtcclxuICAgICAgICAgIGNvbnN0IHRvZGF5T2JqID0gdG9kYXlEYXRhYmFzZS5wcm9qZWN0c0xpc3RbMF07XHJcbiAgICAgICAgICBjb25zdCB0b0RvTGlzdCA9IHRvZGF5T2JqLlRvZGF5O1xyXG5cclxuICAgICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IGZvcm1hdChuZXcgRGF0ZSgpLCBcInl5eXktTU0tZGRcIik7XHJcbiAgICAgICAgICBpZiAoZGF0ZSAhPSBjdXJyZW50RGF0ZSkge1xyXG4gICAgICAgICAgICBkYXRlID0gY3VycmVudERhdGU7XHJcbiAgICAgICAgICAgIGxldCB0b0RvVGFzayA9IG5ldyB0b0RvSXRlbShuYW1lLCBkZXNjLCBkYXRlLCBwcmlvcml0eSk7XHJcbiAgICAgICAgICAgIHRvRG9MaXN0Lm5ld0l0ZW0odG9Eb1Rhc2spO1xyXG4gICAgICAgICAgICBhbGVydChcIkRhdGUgYXV0b21hdGljYWxseSBzZXQgdG8gdG9kYXlcIik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgdG9Eb1Rhc2sgPSBuZXcgdG9Eb0l0ZW0obmFtZSwgZGVzYywgZGF0ZSwgcHJpb3JpdHkpO1xyXG4gICAgICAgICAgICB0b0RvTGlzdC5uZXdJdGVtKHRvRG9UYXNrKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBzdG9yZURhdGEoKTtcclxuICAgICAgICAgIHRvZGF5SGFuZGxlcih0b2RheURhdGFiYXNlLCBpbmJveERhdGFiYXNlLCBwcm9qZWN0c0RhdGFiYXNlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRseVNlbGVjdGVkID09IFwidXBjb21pbmdcIikge1xyXG4gICAgICAgICAgY29uc3QgdXBjb21pbmdPYmogPSB1cGNvbWluZ0RhdGFiYXNlLnByb2plY3RzTGlzdFswXTtcclxuICAgICAgICAgIGNvbnN0IHRvRG9MaXN0ID0gdXBjb21pbmdPYmouVXBjb21pbmc7XHJcblxyXG4gICAgICAgICAgbGV0IGZvcm1hdHRlZEN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgIGxldCB5ZWFyID0gZGF0ZS5zcGxpdChcIi1cIilbMF07XHJcbiAgICAgICAgICBsZXQgbW9udGggPSBkYXRlLnNwbGl0KFwiLVwiKVsxXTtcclxuICAgICAgICAgIGxldCBkYXkgPSBkYXRlLnNwbGl0KFwiLVwiKVsyXTtcclxuXHJcbiAgICAgICAgICBsZXQgZm9ybWF0dGVkUHJvamVjdERhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7XHJcblxyXG4gICAgICAgICAgaWYgKGlzU2FtZVdlZWsoZm9ybWF0dGVkQ3VycmVudERhdGUsIGZvcm1hdHRlZFByb2plY3REYXRlKSkge1xyXG4gICAgICAgICAgICBsZXQgdG9Eb1Rhc2sgPSBuZXcgdG9Eb0l0ZW0obmFtZSwgZGVzYywgZGF0ZSwgcHJpb3JpdHkpO1xyXG4gICAgICAgICAgICB0b0RvTGlzdC5uZXdJdGVtKHRvRG9UYXNrKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgICAgIFwiVGFzayBtdXN0IGJlIGR1ZSB0aGlzIHdlZWsgdG8gYmUgY29uc2lkZXJlZCB1cGNvbWluZywgdHJ5IGFnYWluXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBzdG9yZURhdGEoKTtcclxuICAgICAgICAgIHVwY29taW5nSGFuZGxlcih1cGNvbWluZ0RhdGFiYXNlLCBpbmJveERhdGFiYXNlLCBwcm9qZWN0c0RhdGFiYXNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpdi5yZW1vdmUoKTtcclxuICAgICAgICByZW1vdmVQYWdlTG9jaygpO1xyXG5cclxuICAgICAgICBidXR0b24uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgIH0gZWxzZSBpZiAoaW5wdXRGaWVsZC52YWx1ZSA9PSBcIlwiICYmIGlucHV0LnZhbHVlICE9IFwiQ2FuY2VsXCIpIHtcclxuICAgICAgICBhbGVydChcIk5hbWUgbXVzdCBiZSBhdCBsZWFzdCAxIGNoYXJhY3RlclwiKTtcclxuICAgICAgfVxyXG4gICAgICAvL2NhbmNlbFxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBkaXYucmVtb3ZlKCk7XHJcbiAgICAgICAgcmVtb3ZlUGFnZUxvY2soKTtcclxuICAgICAgICBidXR0b24uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgKTtcclxufVxyXG5cclxuLy9lZGl0IGV4aXN0aW5nIHRhc2tcclxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRUYXNrKGUpIHtcclxuICBsZXQgYnV0dG9uID0gZS50YXJnZXQ7XHJcbiAgbGV0IHNlbGVjdGVkRGl2ID0gYnV0dG9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICBsZXQgc2VsZWN0ZWREaXZTcGFuID0gc2VsZWN0ZWREaXYucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIik7XHJcbiAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbGV0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi10b2RvXCIpO1xyXG4gIGxldCB0b0RvQXJyID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKTtcclxuXHJcbiAgZGl2LmlubmVySFRNTCA9IGBcclxuICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCI+XHJcblxyXG4gIDxoMz5FZGl0IFRhc2s8L2gzPlxyXG5cclxuICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGlkPVwiYWRkLXRhc2stbmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiIHZhbHVlPVwiJHtzZWxlY3RlZERpdlNwYW5bMF0uaW5uZXJUZXh0LnRyaW0oKX1cIj5cclxuICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZGVzY1wiIGlkPVwiYWRkLXRhc2stZGVzY1wiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIiB2YWx1ZT1cIiR7c2VsZWN0ZWREaXZcclxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLmJvdHRvbVwiKVxyXG4gICAgLmlubmVyVGV4dC5zdWJzdHJpbmcoXHJcbiAgICAgIHNlbGVjdGVkRGl2LnF1ZXJ5U2VsZWN0b3IoXCIuYm90dG9tXCIpLmlubmVyVGV4dC5pbmRleE9mKFwiIFwiKVxyXG4gICAgKVxyXG4gICAgLnRyaW0oKX1cIj5cclxuICA8c3Bhbj5cclxuICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZGF0ZVwiIGlkPVwiYWRkLXRhc2stZGF0ZVwiPlxyXG4gIDxzZWxlY3QgbmFtZT1cInByaW9yaXR5XCIgaWQ9XCJhZGQtdGFzay1wcmlvcml0eVwiPlxyXG4gICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBUYXNrIFByaW9yaXR5PC9vcHRpb24+XHJcbiAgICA8b3B0aW9uIHZhbHVlPVwiSGlnaFwiPiBIaWdoIDwvb3B0aW9uPlxyXG4gICAgPG9wdGlvbiB2YWx1ZT1cIk1lZGl1bVwiPiBNZWRpdW0gPC9vcHRpb24+XHJcbiAgICA8b3B0aW9uIHZhbHVlPVwiTG93XCI+IExvdyA8L29wdGlvbj5cclxuICA8L3NlbGVjdD5cclxuICA8L3NwYW4+XHJcblxyXG4gIDxzcGFuPlxyXG4gIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJFZGl0XCI+XHJcbiAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkNhbmNlbFwiPlxyXG4gIDwvc3Bhbj5cclxuXHJcbiAgPC9mb3JtPlxyXG5gO1xyXG5cclxuICBidXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICBkaXYuc3R5bGVbXCJ6LWluZGV4XCJdID0gXCIyXCI7XHJcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJuZXctdGFza1wiKTtcclxuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICBhZGRQYWdlTG9jaygpO1xyXG5cclxuICBsZXQgbmV3VGFza0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRhc2tcIik7XHJcbiAgbGV0IGlucHV0RmllbGQgPSBuZXdUYXNrRGl2LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stbmFtZVwiKTtcclxuICBsZXQgc3VibWl0Qm94ZXMgPSBuZXdUYXNrRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPXN1Ym1pdF1cIik7XHJcbiAgY29uc3QgY3VycmVudGx5U2VsZWN0ZWQgPSB0YWJDb250YWluZXJcclxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpXHJcbiAgICAuZ2V0QXR0cmlidXRlKFwiaWRcIik7XHJcblxyXG4gIC8vY2hlY2tzIHVzZXIgaW5wdXRcclxuICBzdWJtaXRCb3hlcy5mb3JFYWNoKChpbnB1dCkgPT5cclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmIChpbnB1dC52YWx1ZSA9PT0gXCJFZGl0XCIgJiYgaW5wdXRGaWVsZC52YWx1ZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgbGV0IGZvcm0gPSBuZXdUYXNrRGl2LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xyXG4gICAgICAgIGxldCBuYW1lID0gZm9ybS5lbGVtZW50c1tcIm5hbWVcIl0udmFsdWU7XHJcbiAgICAgICAgbGV0IGRlc2MgPSBmb3JtLmVsZW1lbnRzW1wiZGVzY1wiXS52YWx1ZTtcclxuICAgICAgICBsZXQgZGF0ZSA9IGZvcm0uZWxlbWVudHNbXCJkYXRlXCJdLnZhbHVlO1xyXG4gICAgICAgIGxldCBwcmlvcml0eSA9IGZvcm0uZWxlbWVudHNbXCJwcmlvcml0eVwiXS52YWx1ZTtcclxuXHJcbiAgICAgICAgLy9jdXJyZW50bHlTZWxlY3RlZCBpcyBhIHByb2plY3QsIGVkaXQgdGFza1xyXG4gICAgICAgIGlmICghaXNOYU4oY3VycmVudGx5U2VsZWN0ZWQpKSB7XHJcbiAgICAgICAgICBsZXQgbmV3VG9Eb0FyciA9IEFycmF5LmZyb20odG9Eb0Fycik7XHJcbiAgICAgICAgICBsZXQgaW5kZXhPZlNlbGVjdGVkRWxlbWVudCA9IG5ld1RvRG9BcnIuZmluZEluZGV4KFxyXG4gICAgICAgICAgICAoZWxlbWVudCkgPT4gZWxlbWVudCA9PSBidXR0b24ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnV0dG9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9XHJcbiAgICAgICAgICAgIHByb2plY3RzRGF0YWJhc2UucHJvamVjdHNMaXN0W2N1cnJlbnRseVNlbGVjdGVkXTtcclxuICAgICAgICAgIGNvbnN0IG9iak5hbWUgPSBPYmplY3Qua2V5cyhjdXJyZW50UHJvamVjdClbMF07XHJcblxyXG4gICAgICAgICAgbGV0IHRvRG9MaXN0ID0gY3VycmVudFByb2plY3Rbb2JqTmFtZV07XHJcbiAgICAgICAgICBsZXQgdG9Eb1Rhc2sgPSBuZXcgdG9Eb0l0ZW0obmFtZSwgZGVzYywgZGF0ZSwgcHJpb3JpdHkpO1xyXG4gICAgICAgICAgdG9Eb0xpc3QudXBkYXRlSXRlbShpbmRleE9mU2VsZWN0ZWRFbGVtZW50LCB0b0RvVGFzayk7XHJcblxyXG4gICAgICAgICAgc3RvcmVEYXRhKCk7XHJcbiAgICAgICAgICByZW5kZXJUb0RvTGlzdChwcm9qZWN0c0RhdGFiYXNlLCBjdXJyZW50bHlTZWxlY3RlZCwgXCJQcm9qZWN0XCIpO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyh0b0RvTGlzdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2N1cnJlbnRseVNlbGVjdGVkIGlzIEluYm94XHJcbiAgICAgICAgZWxzZSBpZiAoY3VycmVudGx5U2VsZWN0ZWQgPT0gXCJpbmJveFwiKSB7XHJcbiAgICAgICAgICBsZXQgbmV3VG9Eb0FyciA9IEFycmF5LmZyb20odG9Eb0Fycik7XHJcbiAgICAgICAgICBsZXQgaW5kZXhPZlNlbGVjdGVkRWxlbWVudCA9IG5ld1RvRG9BcnIuZmluZEluZGV4KFxyXG4gICAgICAgICAgICAoZWxlbWVudCkgPT4gZWxlbWVudCA9PSBidXR0b24ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnV0dG9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICBjb25zdCBpbmJveE9iaiA9IGluYm94RGF0YWJhc2UucHJvamVjdHNMaXN0WzBdO1xyXG4gICAgICAgICAgY29uc3QgdG9Eb0xpc3QgPSBpbmJveE9iai5JbmJveDtcclxuXHJcbiAgICAgICAgICBsZXQgdG9Eb1Rhc2sgPSBuZXcgdG9Eb0l0ZW0obmFtZSwgZGVzYywgZGF0ZSwgcHJpb3JpdHkpO1xyXG4gICAgICAgICAgdG9Eb0xpc3QudXBkYXRlSXRlbShpbmRleE9mU2VsZWN0ZWRFbGVtZW50LCB0b0RvVGFzayk7XHJcblxyXG4gICAgICAgICAgc3RvcmVEYXRhKCk7XHJcbiAgICAgICAgICByZW5kZXJUb0RvTGlzdChpbmJveERhdGFiYXNlLCBudWxsLCBcIkluYm94XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9jdXJyZW50bHlTZWxlY3RlZCBpcyBUb2RheVxyXG4gICAgICAgIGVsc2UgaWYgKGN1cnJlbnRseVNlbGVjdGVkID09IFwidG9kYXlcIikge1xyXG4gICAgICAgICAgY29uc3QgdG9kYXlPYmogPSB0b2RheURhdGFiYXNlLnByb2plY3RzTGlzdFswXTtcclxuICAgICAgICAgIGNvbnN0IHRvRG9MaXN0ID0gdG9kYXlPYmouVG9kYXk7XHJcblxyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBidXR0b24ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcclxuICAgICAgICAgICAgICBcImZyb20tcHJvamVjdFwiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBhbGVydChcIkVkaXQgdGhlIHRhc2sgZnJvbSB0aGUgcHJvamVjdCB0aGF0IGl0IGlzIGluXCIpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgYnV0dG9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJmcm9tLWluYm94XCIpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJFZGl0IHRoZSB0YXNrIGZyb20gdGhlIEluYm94IHNlY3Rpb25cIik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudERhdGUgPSBmb3JtYXQobmV3IERhdGUoKSwgXCJ5eXl5LU1NLWRkXCIpO1xyXG4gICAgICAgICAgICBsZXQgbmV3VG9Eb0FyciA9IEFycmF5LmZyb20oXHJcbiAgICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLmZyb20tdG9kYXlcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbGV0IGluZGV4T2ZTZWxlY3RlZEVsZW1lbnQgPSBuZXdUb0RvQXJyLmZpbmRJbmRleChcclxuICAgICAgICAgICAgICAoZWxlbWVudCkgPT4gZWxlbWVudCA9PSBidXR0b24ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0ZSAhPSBjdXJyZW50RGF0ZSkge1xyXG4gICAgICAgICAgICAgIGRhdGUgPSBjdXJyZW50RGF0ZTtcclxuICAgICAgICAgICAgICBsZXQgdG9Eb1Rhc2sgPSBuZXcgdG9Eb0l0ZW0obmFtZSwgZGVzYywgZGF0ZSwgcHJpb3JpdHkpO1xyXG4gICAgICAgICAgICAgIHRvRG9MaXN0LnVwZGF0ZUl0ZW0oaW5kZXhPZlNlbGVjdGVkRWxlbWVudCwgdG9Eb1Rhc2spO1xyXG4gICAgICAgICAgICAgIGFsZXJ0KFwiRGF0ZSBhdXRvbWF0aWNhbGx5IHNldCB0byB0b2RheVwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBsZXQgdG9Eb1Rhc2sgPSBuZXcgdG9Eb0l0ZW0obmFtZSwgZGVzYywgZGF0ZSwgcHJpb3JpdHkpO1xyXG4gICAgICAgICAgICAgIHRvRG9MaXN0LnVwZGF0ZUl0ZW0oaW5kZXhPZlNlbGVjdGVkRWxlbWVudCwgdG9Eb1Rhc2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc3RvcmVEYXRhKCk7XHJcbiAgICAgICAgICB0b2RheUhhbmRsZXIodG9kYXlEYXRhYmFzZSwgaW5ib3hEYXRhYmFzZSwgcHJvamVjdHNEYXRhYmFzZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50bHlTZWxlY3RlZCA9PSBcInVwY29taW5nXCIpIHtcclxuICAgICAgICAgIGNvbnN0IHVwY29taW5nT2JqID0gdXBjb21pbmdEYXRhYmFzZS5wcm9qZWN0c0xpc3RbMF07XHJcbiAgICAgICAgICBjb25zdCB0b0RvTGlzdCA9IHVwY29taW5nT2JqLlVwY29taW5nO1xyXG5cclxuICAgICAgICAgIGxldCBmb3JtYXR0ZWRDdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICBsZXQgeWVhciA9IGRhdGUuc3BsaXQoXCItXCIpWzBdO1xyXG4gICAgICAgICAgbGV0IG1vbnRoID0gZGF0ZS5zcGxpdChcIi1cIilbMV07XHJcbiAgICAgICAgICBsZXQgZGF5ID0gZGF0ZS5zcGxpdChcIi1cIilbMl07XHJcblxyXG4gICAgICAgICAgbGV0IGZvcm1hdHRlZFByb2plY3REYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXkpO1xyXG5cclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgYnV0dG9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgICAgICAgICAgICAgXCJmcm9tLXByb2plY3RcIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJFZGl0IHRoZSB0YXNrIGZyb20gdGhlIHByb2plY3QgdGhhdCBpdCBpcyBpblwiKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZnJvbS1pbmJveFwiKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiRWRpdCB0aGUgdGFzayBmcm9tIHRoZSBJbmJveCBzZWN0aW9uXCIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IG5ld1RvRG9BcnIgPSBBcnJheS5mcm9tKFxyXG4gICAgICAgICAgICAgIG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5mcm9tLXVwY29taW5nXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGxldCBpbmRleE9mU2VsZWN0ZWRFbGVtZW50ID0gbmV3VG9Eb0Fyci5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnQgPT0gYnV0dG9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBidXR0b24ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzU2FtZVdlZWsoZm9ybWF0dGVkQ3VycmVudERhdGUsIGZvcm1hdHRlZFByb2plY3REYXRlKSkge1xyXG4gICAgICAgICAgICAgIGxldCB0b0RvVGFzayA9IG5ldyB0b0RvSXRlbShuYW1lLCBkZXNjLCBkYXRlLCBwcmlvcml0eSk7XHJcbiAgICAgICAgICAgICAgdG9Eb0xpc3QudXBkYXRlSXRlbShpbmRleE9mU2VsZWN0ZWRFbGVtZW50LCB0b0RvVGFzayk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAgICAgICBcIlRhc2sgbXVzdCBiZSBkdWUgdGhpcyB3ZWVrIHRvIGJlIGNvbnNpZGVyZWQgdXBjb21pbmcsIHRyeSBhZ2FpblwiXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHN0b3JlRGF0YSgpO1xyXG4gICAgICAgICAgdXBjb21pbmdIYW5kbGVyKHVwY29taW5nRGF0YWJhc2UsIGluYm94RGF0YWJhc2UsIHByb2plY3RzRGF0YWJhc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2LnJlbW92ZSgpO1xyXG4gICAgICAgIHJlbW92ZVBhZ2VMb2NrKCk7XHJcblxyXG4gICAgICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgfSBlbHNlIGlmIChpbnB1dEZpZWxkLnZhbHVlID09IFwiXCIgJiYgaW5wdXQudmFsdWUgIT0gXCJDYW5jZWxcIikge1xyXG4gICAgICAgIGFsZXJ0KFwiTmFtZSBtdXN0IGJlIGF0IGxlYXN0IDEgY2hhcmFjdGVyXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vY2FuY2VsXHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGRpdi5yZW1vdmUoKTtcclxuICAgICAgICByZW1vdmVQYWdlTG9jaygpO1xyXG4gICAgICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICApO1xyXG59XHJcblxyXG4vL3Byb21wdHMgdGhlIHVzZXIgdG8gYWRkIGEgbmV3IHByb2plY3RcclxuZnVuY3Rpb24gbmV3UHJvamVjdFByb21wdCgpIHtcclxuICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgZGl2LmlubmVySFRNTCA9IGBcclxuICAgICAgICA8aDM+QWRkIFByb2plY3Q8L2gzPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cImFkZC1wcm9qZWN0LW5hbWVcIj48aDQ+TmFtZTwvaDQ+PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGlkPVwiYWRkLXByb2plY3QtbmFtZVwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJBZGRcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQ2FuY2VsXCI+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJuZXctcHJvamVjdC1jYXJkXCIpO1xyXG4gIGRpdi5zdHlsZVtcInotaW5kZXhcIl0gPSBcIjJcIjtcclxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgYWRkUGFnZUxvY2soKTtcclxuXHJcbiAgbGV0IG5ld1Byb2plY3RDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdC1jYXJkXCIpO1xyXG4gIGxldCBpbnB1dEZpZWxkID0gbmV3UHJvamVjdENhcmQucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9dGV4dF1cIik7XHJcbiAgbGV0IHN1Ym1pdEJveGVzID0gbmV3UHJvamVjdENhcmQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9c3VibWl0XVwiKTtcclxuXHJcbiAgLy9jaGVja3MgdXNlciBpbnB1dFxyXG4gIHN1Ym1pdEJveGVzLmZvckVhY2goKGlucHV0KSA9PlxyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGlmIChpbnB1dC52YWx1ZSA9PT0gXCJBZGRcIiAmJiBpbnB1dEZpZWxkLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT0gXCJpbmJveFwiKSB7XHJcbiAgICAgICAgYWxlcnQoXCJpbmJveCBpcyBhbiBpbnZhbGlkIG5hbWUsIHRyeSBzb21ldGhpbmcgZWxzZVwiKTtcclxuICAgICAgfSBlbHNlIGlmIChpbnB1dC52YWx1ZSA9PT0gXCJBZGRcIiAmJiBpbnB1dEZpZWxkLnZhbHVlICE9IFwiXCIpIHtcclxuICAgICAgICBsZXQgaW5wdXRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPXRleHRdXCIpLnZhbHVlO1xyXG4gICAgICAgIGxldCBjdXJyZW50SWQgPSBwcm9qZWN0c0RhdGFiYXNlLnByb2plY3RzTGlzdC5sZW5ndGg7XHJcbiAgICAgICAgcHJvamVjdHNEYXRhYmFzZS5hZGRQcm9qZWN0KGlucHV0VmFsdWUpO1xyXG4gICAgICAgIHN0b3JlRGF0YSgpO1xyXG4gICAgICAgIGluc2VydFByb2plY3REaXYoaW5wdXRWYWx1ZSwgY3VycmVudElkKTtcclxuICAgICAgICBkaXYucmVtb3ZlKCk7XHJcbiAgICAgICAgcmVtb3ZlUGFnZUxvY2soKTtcclxuICAgICAgfSBlbHNlIGlmIChpbnB1dEZpZWxkLnZhbHVlID09IFwiXCIgJiYgaW5wdXQudmFsdWUgIT0gXCJDYW5jZWxcIikge1xyXG4gICAgICAgIGFsZXJ0KFwiTmFtZSBtdXN0IGJlIGF0IGxlYXN0IDEgY2hhcmFjdGVyXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vY2FuY2VsXHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGRpdi5yZW1vdmUoKTtcclxuICAgICAgICByZW1vdmVQYWdlTG9jaygpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICk7XHJcbn1cclxuXHJcbi8vYWRkcyB0aGUgbmV3IHByb2plY3QgdG8gc2lkZWJhclxyXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0UHJvamVjdERpdihuYW1lLCBpZCkge1xyXG4gIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBsaS5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gIGJ1dHRvbi5pbm5lckhUTUwgPSBgXHJcbiAgPGkgY2xhc3M9XCJmYXMgZmEtdGltZXMtY2lyY2xlIGZhLTAuMjV4XCI+PC9pPlxyXG4gICAgJiM5NjQyICR7bmFtZX1cclxuICAgIGA7XHJcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy1jaGlsZHJlblwiKTtcclxuICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7aWR9YCk7XHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5UHJvamVjdERpdik7XHJcbiAgcHJvamVjdHNEaXYucXVlcnlTZWxlY3RvcihcInVsXCIpLmFwcGVuZENoaWxkKGxpKTtcclxufVxyXG5cclxuLy9yZXNldCBzZWxlY3Rpb25zXHJcbmZ1bmN0aW9uIHJlc2V0QnV0dG9ucyhlKSB7XHJcbiAgLy9jb25zb2xlLmxvZyhlKVxyXG4gIGxldCBzZWxlY3RlZERpdiA9IGU7XHJcbiAgbGV0IGJ1dHRvbnMgPSB0YWJDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcclxuXHJcbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgfSk7XHJcbiAgc2VsZWN0ZWREaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG59XHJcblxyXG4vL2NhbGxzIGZ1bmN0aW9uIHRvIGRpc3BsYXkgUFJPSkVDVFNcclxuZnVuY3Rpb24gZGlzcGxheVByb2plY3REaXYoZSkge1xyXG4gIGxldCBzZWxlY3RlZERpdiA9IGUudGFyZ2V0O1xyXG4gIGxldCBpZFZhbHVlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIik7XHJcbiAgbGV0IGJ1dHRvbnMgPSB0YWJDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcclxuXHJcbiAgaWYgKHNlbGVjdGVkRGl2Lm5vZGVOYW1lID09IFwiSVwiKSB7XHJcbiAgICBkZWxldGVQcm9qZWN0UG9wdXAocHJvamVjdHNEYXRhYmFzZSwgZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgICB9KTtcclxuICAgIHNlbGVjdGVkRGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICAgIHJlbmRlclRvRG9MaXN0KHByb2plY3RzRGF0YWJhc2UsIGlkVmFsdWUsIFwiUHJvamVjdFwiKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlJbmJveERpdihlKSB7XHJcbiAgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lID09IFwiSVwiKSB7XHJcbiAgICBlID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICAgIHJlc2V0QnV0dG9ucyhlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzZXRCdXR0b25zKGUudGFyZ2V0KTtcclxuICB9XHJcblxyXG4gIHJlbmRlclRvRG9MaXN0KGluYm94RGF0YWJhc2UsIG51bGwsIFwiSW5ib3hcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlUb2RheURpdihlKSB7XHJcbiAgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lID09IFwiSVwiKSB7XHJcbiAgICBlID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICAgIHJlc2V0QnV0dG9ucyhlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzZXRCdXR0b25zKGUudGFyZ2V0KTtcclxuICB9XHJcblxyXG4gIHRvZGF5SGFuZGxlcih0b2RheURhdGFiYXNlLCBpbmJveERhdGFiYXNlLCBwcm9qZWN0c0RhdGFiYXNlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVVwY29taW5nRGl2KGUpIHtcclxuICBpZiAoZS50YXJnZXQubm9kZU5hbWUgPT0gXCJJXCIpIHtcclxuICAgIGUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG4gICAgcmVzZXRCdXR0b25zKGUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXNldEJ1dHRvbnMoZS50YXJnZXQpO1xyXG4gIH1cclxuXHJcbiAgdXBjb21pbmdIYW5kbGVyKHVwY29taW5nRGF0YWJhc2UsIGluYm94RGF0YWJhc2UsIHByb2plY3RzRGF0YWJhc2UpO1xyXG59XHJcblxyXG4vL21ha2VzIGl0IHNvIG9ubHkgb25lIHBvcHVwIGNhbiBiZSBzZWxlY3RlZCBhdCBvbmNlIGFuZCB0aGUgcmVzdCBvZiB0aGUgcGFnZSBpcyB1bnNlbGVjdGFibGVcclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBhZ2VMb2NrKCkge1xyXG4gIGxldCBwYWdlTG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcGFnZUxvY2suY2xhc3NMaXN0LmFkZChcInBhZ2UtbG9ja1wiKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhZ2VMb2NrKTtcclxuXHJcbiAgbGV0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIik7XHJcbiAgdGFzay5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJsb2NrXCIpKTtcclxuICB0YWJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxvY2tcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYWdlTG9jaygpIHtcclxuICBsZXQgdGFza0xvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIik7XHJcbiAgdGFza0xvY2suZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKSk7XHJcbiAgdGFiQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpO1xyXG5cclxuICBsZXQgcGFnZUxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2UtbG9ja1wiKTtcclxuICBwYWdlTG9jay5yZW1vdmUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RMaXN0KCkge1xyXG4gIGxldCBpID0gcHJvamVjdHNTbGlkZXIucXVlcnlTZWxlY3RvcihcImlcIik7XHJcbiAgcHJvamVjdHNEaXYuY2xhc3NMaXN0LnRvZ2dsZShcImNvbGxhcHNlXCIpO1xyXG5cclxuICBpLmNsYXNzTGlzdC50b2dnbGUoXCJmYS1jYXJldC1kb3duXCIpO1xyXG4gIGkuY2xhc3NMaXN0LnRvZ2dsZShcImZhLWNhcmV0LXJpZ2h0XCIpO1xyXG59XHJcblxyXG5leHBvcnQgeyBwcm9qZWN0c0RhdGFiYXNlLCBpbmJveERhdGFiYXNlLCB0b2RheURhdGFiYXNlLCB1cGNvbWluZ0RhdGFiYXNlIH07XHJcbiIsImltcG9ydCB7IGZvcm1hdCwgaXNTYW1lV2VlayB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5pbXBvcnQgeyBkZWxldGVUYXNrUG9wdXAsIHJlbmRlciB9IGZyb20gXCIuL3JlbmRlci5qc1wiO1xyXG5pbXBvcnQgeyB0b0RvSXRlbSB9IGZyb20gXCIuL3RvRG9MaXN0LmpzXCI7XHJcbmltcG9ydCB7IGVkaXRUYXNrLCBpbnNlcnRQcm9qZWN0RGl2IH0gZnJvbSBcIi4vVUkuanNcIjtcclxuXHJcbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpO1xyXG5jb25zdCBtYWluVG9EbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi10b2RvXCIpO1xyXG5sZXQgbmFtZSA9IG1haW5Ub0RvLnF1ZXJ5U2VsZWN0b3IoXCJoMlwiKTtcclxuY29uc3QgYnV0dG9uID0gbWFpblRvRG8ucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFza1wiKTtcclxuXHJcbi8vaGFuZGxlcyBsb2dpYyBmb3IgVE9EQVlcclxuZXhwb3J0IGZ1bmN0aW9uIHRvZGF5SGFuZGxlcih0b2RheURhdGFiYXNlLCBpbmJveERhdGFiYXNlLCBwcm9qZWN0c0RhdGFiYXNlKSB7XHJcbiAgLy9jbGVhcnMgYWxsIHRhc2sgZWxlbWVudHMgc28gdGhhdCBpdCBjYW4gYmUgcmUtcmVuZGVyZWRcclxuICBjb25zdCB0b0RvTGlzdERpdnMgPSBtYWluVG9Eby5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIik7XHJcbiAgdG9Eb0xpc3REaXZzLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQucmVtb3ZlKCkpO1xyXG5cclxuICBsZXQgY3VycmVudERhdGUgPSBmb3JtYXQobmV3IERhdGUoKSwgXCJNTS9kZC95eXl5XCIpO1xyXG4gIC8vaGFuZGxlcyBwcm9qZWN0RGF0YWJhc2VcclxuICBmb3IgKGNvbnN0IG9iaiBvZiBwcm9qZWN0c0RhdGFiYXNlLnByb2plY3RzTGlzdCkge1xyXG4gICAgZm9yIChjb25zdCBwcm9qZWN0IGluIG9iaikge1xyXG4gICAgICAvL3RvZG8gbGlzdCBjbGFzc1xyXG4gICAgICBsZXQgdG9Eb0xpc3QgPSBvYmpbcHJvamVjdF07XHJcbiAgICAgIGZvciAoY29uc3QgdG9Eb0l0ZW0gb2YgdG9Eb0xpc3QuaXRlbXMpIHtcclxuICAgICAgICBpZiAodG9Eb0l0ZW0uZ2V0RHVlRGF0ZSgpID09IGN1cnJlbnREYXRlKSB7XHJcbiAgICAgICAgICByZW5kZXIodG9Eb0l0ZW0sIFwicHJvamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vaGFuZGxlcyBpbmJveERhdGFiYXNlXHJcbiAgZm9yIChjb25zdCBvYmogb2YgaW5ib3hEYXRhYmFzZS5wcm9qZWN0c0xpc3QpIHtcclxuICAgIGZvciAoY29uc3QgcHJvamVjdCBpbiBvYmopIHtcclxuICAgICAgLy90b2RvIGxpc3QgY2xhc3NcclxuICAgICAgbGV0IHRvRG9MaXN0ID0gb2JqW3Byb2plY3RdO1xyXG4gICAgICBmb3IgKGNvbnN0IHRvRG9JdGVtIG9mIHRvRG9MaXN0Lml0ZW1zKSB7XHJcbiAgICAgICAgaWYgKHRvRG9JdGVtLmdldER1ZURhdGUoKSA9PSBjdXJyZW50RGF0ZSkge1xyXG4gICAgICAgICAgcmVuZGVyKHRvRG9JdGVtLCBcImluYm94XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9oYW5kbGVzIHRvZGF5RGF0YWJzZVxyXG4gIGNvbnN0IHRvZGF5T2JqID0gdG9kYXlEYXRhYmFzZS5wcm9qZWN0c0xpc3RbMF07XHJcbiAgY29uc3QgdG9Eb0xpc3QgPSB0b2RheU9iai5Ub2RheTtcclxuXHJcbiAgZm9yIChjb25zdCBlbGVtZW50IG9mIHRvRG9MaXN0LmdldEl0ZW1zKCkpIHtcclxuICAgIHJlbmRlcihlbGVtZW50LCBcInRvZGF5XCIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGVsZXRlQnV0dG9uQXJyID0gbWFpblRvRG8ucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGVcIik7XHJcbiAgY29uc3QgZWRpdEJ1dHRvbkFyciA9IG1haW5Ub0RvLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRpdFwiKTtcclxuXHJcbiAgLy9kZWxldGVzIHRhc2sgYnV0IGlmIHRhc2sgaXMgcGFydCBvZiBpbmJveC9wcm9qZWN0IGl0IHRlbGxzIHRoZSB1c2VyIHRvIGdvIHRvIHByb2plY3QvaW5ib3ggdG8gZGVsZXRlXHJcbiAgZGVsZXRlQnV0dG9uQXJyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBkZWxldGVUYXNrUG9wdXAoZSwgdG9kYXlEYXRhYmFzZSkpO1xyXG4gIH0pO1xyXG5cclxuICBlZGl0QnV0dG9uQXJyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRUYXNrKTtcclxuICB9KTtcclxuXHJcbiAgbmFtZS50ZXh0Q29udGVudCA9IFwiVG9kYXkncyBUYXNrc1wiO1xyXG59XHJcblxyXG4vL2hhbmRsZXMgbG9naWMgZm9yIFVQQ09NSU5HXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGNvbWluZ0hhbmRsZXIoXHJcbiAgdXBjb21pbmdEYXRhYmFzZSxcclxuICBpbmJveERhdGFiYXNlLFxyXG4gIHByb2plY3RzRGF0YWJhc2VcclxuKSB7XHJcbiAgLy9jbGVhcnMgYWxsIHRhc2sgZWxlbWVudHMgc28gdGhhdCBpdCBjYW4gYmUgcmUtcmVuZGVyZWRcclxuICBjb25zdCB0b0RvTGlzdERpdnMgPSBtYWluVG9Eby5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIik7XHJcbiAgdG9Eb0xpc3REaXZzLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQucmVtb3ZlKCkpO1xyXG5cclxuICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAvL2hhbmRsZXMgcHJvamVjdERhdGFiYXNlXHJcbiAgZm9yIChjb25zdCBvYmogb2YgcHJvamVjdHNEYXRhYmFzZS5wcm9qZWN0c0xpc3QpIHtcclxuICAgIGZvciAoY29uc3QgcHJvamVjdCBpbiBvYmopIHtcclxuICAgICAgLy90b2RvIGxpc3QgY2xhc3NcclxuICAgICAgbGV0IHRvRG9MaXN0ID0gb2JqW3Byb2plY3RdO1xyXG4gICAgICBmb3IgKGNvbnN0IHRvRG9JdGVtIG9mIHRvRG9MaXN0Lml0ZW1zKSB7XHJcbiAgICAgICAgbGV0IHByb2plY3REYXRlID0gdG9Eb0l0ZW0uZ2V0RHVlRGF0ZSgpO1xyXG4gICAgICAgIGxldCBtb250aCA9IHByb2plY3REYXRlLnNwbGl0KFwiL1wiKVswXTtcclxuICAgICAgICBsZXQgZGF5ID0gcHJvamVjdERhdGUuc3BsaXQoXCIvXCIpWzFdO1xyXG4gICAgICAgIGxldCB5ZWFyID0gcHJvamVjdERhdGUuc3BsaXQoXCIvXCIpWzJdO1xyXG5cclxuICAgICAgICBwcm9qZWN0RGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5KTtcclxuXHJcbiAgICAgICAgaWYgKGlzU2FtZVdlZWsoY3VycmVudERhdGUsIHByb2plY3REYXRlKSkge1xyXG4gICAgICAgICAgcmVuZGVyKHRvRG9JdGVtLCBcInByb2plY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL2hhbmRsZXMgaW5ib3hEYXRhYmFzZVxyXG4gIGZvciAoY29uc3Qgb2JqIG9mIGluYm94RGF0YWJhc2UucHJvamVjdHNMaXN0KSB7XHJcbiAgICBmb3IgKGNvbnN0IHByb2plY3QgaW4gb2JqKSB7XHJcbiAgICAgIC8vdG9kbyBsaXN0IGNsYXNzXHJcbiAgICAgIGxldCB0b0RvTGlzdCA9IG9ialtwcm9qZWN0XTtcclxuICAgICAgZm9yIChjb25zdCB0b0RvSXRlbSBvZiB0b0RvTGlzdC5pdGVtcykge1xyXG4gICAgICAgIGxldCBwcm9qZWN0RGF0ZSA9IHRvRG9JdGVtLmdldER1ZURhdGUoKTtcclxuICAgICAgICBsZXQgbW9udGggPSBwcm9qZWN0RGF0ZS5zcGxpdChcIi9cIilbMF07XHJcbiAgICAgICAgbGV0IGRheSA9IHByb2plY3REYXRlLnNwbGl0KFwiL1wiKVsxXTtcclxuICAgICAgICBsZXQgeWVhciA9IHByb2plY3REYXRlLnNwbGl0KFwiL1wiKVsyXTtcclxuXHJcbiAgICAgICAgcHJvamVjdERhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7XHJcblxyXG4gICAgICAgIGlmIChpc1NhbWVXZWVrKGN1cnJlbnREYXRlLCBwcm9qZWN0RGF0ZSkpIHtcclxuICAgICAgICAgIHJlbmRlcih0b0RvSXRlbSwgXCJpbmJveFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vaGFuZGxlcyB1cGNvbWluZ0RhdGFiYXNlXHJcbiAgY29uc3QgdXBjb21pbmdPYmogPSB1cGNvbWluZ0RhdGFiYXNlLnByb2plY3RzTGlzdFswXTtcclxuICBjb25zdCB0b0RvTGlzdCA9IHVwY29taW5nT2JqLlVwY29taW5nO1xyXG5cclxuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgdG9Eb0xpc3QuZ2V0SXRlbXMoKSkge1xyXG4gICAgcmVuZGVyKGVsZW1lbnQsIFwidXBjb21pbmdcIik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkZWxldGVCdXR0b25BcnIgPSBtYWluVG9Eby5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZVwiKTtcclxuICBjb25zdCBlZGl0QnV0dG9uQXJyID0gbWFpblRvRG8ucXVlcnlTZWxlY3RvckFsbChcIi5lZGl0XCIpO1xyXG5cclxuICAvL2RlbGV0ZXMgdGFzayBidXQgaWYgdGFzayBpcyBwYXJ0IG9mIGluYm94L3Byb2plY3QgaXQgdGVsbHMgdGhlIHVzZXIgdG8gZ28gdG8gcHJvamVjdC9pbmJveCB0byBkZWxldGVcclxuICBkZWxldGVCdXR0b25BcnIuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+XHJcbiAgICAgIGRlbGV0ZVRhc2tQb3B1cChlLCB1cGNvbWluZ0RhdGFiYXNlKVxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgZWRpdEJ1dHRvbkFyci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0VGFzayk7XHJcbiAgfSk7XHJcblxyXG4gIG5hbWUudGV4dENvbnRlbnQgPSBcIlRoaXMgV2VlaydzIFRhc2tzXCI7XHJcbn1cclxuXHJcbi8vY29udmVyc3RzIHN0b3JlZCBsb2NhbFN0b3JhZ2Ugc3RyaW5nIHRvIEpTT04gdXNlIC5wYXJzZSBhbmQgY292bmVydHMgdGhhdCB0byBhIFByb2plY3QvVG9Eb0xpc3QvVG9Eb0l0ZW0gY2xhc3MgYWNjb3JkaW5nbHlcclxuZXhwb3J0IGZ1bmN0aW9uIHRvQ2xhc3ModHlwZSwgZGF0YWJhc2UsIHN0cmluZykge1xyXG4gIGxldCBvYmogPSBKU09OLnBhcnNlKHN0cmluZyk7XHJcblxyXG4gIGlmICh0eXBlID09IFwiSW5ib3hcIikge1xyXG4gICAgbGV0IGl0ZW1zID0gZGF0YWJhc2UucHJvamVjdHNMaXN0WzBdLkluYm94Lml0ZW1zO1xyXG4gICAgbGV0IG9iakluYm94ID0gb2JqLnByb2plY3RzTGlzdFswXS5JbmJveDtcclxuICAgIGxldCBvYmpJbmJveEl0ZW1zID0gb2JqSW5ib3guaXRlbXM7XHJcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2Ygb2JqSW5ib3hJdGVtcykge1xyXG4gICAgICBsZXQgZGF0ZSA9IGVsZW1lbnQuX2R1ZURhdGU7XHJcbiAgICAgIGlmIChkYXRlICE9IFwiTm9uZVwiKSB7XHJcbiAgICAgICAgbGV0IG1vbnRoID0gZGF0ZS5zcGxpdChcIi9cIilbMF07XHJcbiAgICAgICAgbGV0IGRheSA9IGRhdGUuc3BsaXQoXCIvXCIpWzFdO1xyXG4gICAgICAgIGxldCB5ZWFyID0gZGF0ZS5zcGxpdChcIi9cIilbMl07XHJcbiAgICAgICAgZGF0ZSA9IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0ZSA9IFwiXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBuZXdUb0RvID0gbmV3IHRvRG9JdGVtKFxyXG4gICAgICAgIGVsZW1lbnQuX3RpdGxlLFxyXG4gICAgICAgIGVsZW1lbnQuX2Rlc2NyaXB0aW9uLFxyXG4gICAgICAgIGRhdGUsXHJcbiAgICAgICAgZWxlbWVudC5fcHJpb3JpdHlcclxuICAgICAgKTtcclxuICAgICAgaXRlbXMucHVzaChuZXdUb0RvKTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJUb2RheVwiKSB7XHJcbiAgICBsZXQgaXRlbXMgPSBkYXRhYmFzZS5wcm9qZWN0c0xpc3RbMF0uVG9kYXkuaXRlbXM7XHJcbiAgICBsZXQgb2JqVG9kYXkgPSBvYmoucHJvamVjdHNMaXN0WzBdLlRvZGF5O1xyXG4gICAgbGV0IG9ialRvZGF5SXRlbXMgPSBvYmpUb2RheS5pdGVtcztcclxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBvYmpUb2RheUl0ZW1zKSB7XHJcbiAgICAgIGxldCBkYXRlID0gZWxlbWVudC5fZHVlRGF0ZTtcclxuICAgICAgbGV0IG1vbnRoID0gZGF0ZS5zcGxpdChcIi9cIilbMF07XHJcbiAgICAgIGxldCBkYXkgPSBkYXRlLnNwbGl0KFwiL1wiKVsxXTtcclxuICAgICAgbGV0IHllYXIgPSBkYXRlLnNwbGl0KFwiL1wiKVsyXTtcclxuICAgICAgZGF0ZSA9IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XHJcblxyXG4gICAgICBsZXQgbmV3VG9EbyA9IG5ldyB0b0RvSXRlbShcclxuICAgICAgICBlbGVtZW50Ll90aXRsZSxcclxuICAgICAgICBlbGVtZW50Ll9kZXNjcmlwdGlvbixcclxuICAgICAgICBkYXRlLFxyXG4gICAgICAgIGVsZW1lbnQuX3ByaW9yaXR5XHJcbiAgICAgICk7XHJcbiAgICAgIGl0ZW1zLnB1c2gobmV3VG9Ebyk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmICh0eXBlID09IFwiVXBjb21pbmdcIikge1xyXG4gICAgbGV0IGl0ZW1zID0gZGF0YWJhc2UucHJvamVjdHNMaXN0WzBdLlVwY29taW5nLml0ZW1zO1xyXG4gICAgbGV0IG9ialVwY29taW5nID0gb2JqLnByb2plY3RzTGlzdFswXS5VcGNvbWluZztcclxuICAgIGxldCBvYmpVcGNvbWluZ0l0ZW1zID0gb2JqVXBjb21pbmcuaXRlbXM7XHJcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2Ygb2JqVXBjb21pbmdJdGVtcykge1xyXG4gICAgICBsZXQgZGF0ZSA9IGVsZW1lbnQuX2R1ZURhdGU7XHJcbiAgICAgIGxldCBtb250aCA9IGRhdGUuc3BsaXQoXCIvXCIpWzBdO1xyXG4gICAgICBsZXQgZGF5ID0gZGF0ZS5zcGxpdChcIi9cIilbMV07XHJcbiAgICAgIGxldCB5ZWFyID0gZGF0ZS5zcGxpdChcIi9cIilbMl07XHJcbiAgICAgIGRhdGUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xyXG5cclxuICAgICAgbGV0IG5ld1RvRG8gPSBuZXcgdG9Eb0l0ZW0oXHJcbiAgICAgICAgZWxlbWVudC5fdGl0bGUsXHJcbiAgICAgICAgZWxlbWVudC5fZGVzY3JpcHRpb24sXHJcbiAgICAgICAgZGF0ZSxcclxuICAgICAgICBlbGVtZW50Ll9wcmlvcml0eVxyXG4gICAgICApO1xyXG4gICAgICBpdGVtcy5wdXNoKG5ld1RvRG8pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAodHlwZSA9PSBcIlByb2plY3RcIikge1xyXG4gICAgbGV0IGl0ZW1zID0gZGF0YWJhc2UucHJvamVjdHNMaXN0O1xyXG4gICAgbGV0IG9ialByb2plY3QgPSBvYmoucHJvamVjdHNMaXN0O1xyXG4gICAgZm9yIChjb25zdCBbaWQscHJval0gb2Ygb2JqUHJvamVjdC5lbnRyaWVzKCkpIHtcclxuICAgICAgbGV0IGtleSA9IE9iamVjdC5rZXlzKHByb2opO1xyXG4gICAgICBkYXRhYmFzZS5hZGRQcm9qZWN0KGtleSk7XHJcbiAgICAgIGluc2VydFByb2plY3REaXYoa2V5LGlkKTtcclxuICAgICAgZm9yIChjb25zdCB0YXNrIG9mIHByb2pba2V5XS5pdGVtcykge1xyXG4gICAgICAgIGxldCBkYXRlID0gdGFzay5fZHVlRGF0ZTtcclxuICAgICAgICBpZiAoZGF0ZSAhPSBcIk5vbmVcIikge1xyXG4gICAgICAgICAgbGV0IG1vbnRoID0gZGF0ZS5zcGxpdChcIi9cIilbMF07XHJcbiAgICAgICAgICBsZXQgZGF5ID0gZGF0ZS5zcGxpdChcIi9cIilbMV07XHJcbiAgICAgICAgICBsZXQgeWVhciA9IGRhdGUuc3BsaXQoXCIvXCIpWzJdO1xyXG4gICAgICAgICAgZGF0ZSA9IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRhdGUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG5ld1RvRG8gPSBuZXcgdG9Eb0l0ZW0oXHJcbiAgICAgICAgICB0YXNrLl90aXRsZSxcclxuICAgICAgICAgIHRhc2suX2Rlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgZGF0ZSxcclxuICAgICAgICAgIHRhc2suX3ByaW9yaXR5XHJcbiAgICAgICAgKTtcclxuICAgICAgICBpdGVtc1tpZF1ba2V5XS5uZXdJdGVtKG5ld1RvRG8pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHN0b3JlRGF0YSB9IGZyb20gXCIuL1N0b3JhZ2UuanNcIjtcclxuaW1wb3J0IHsgYWRkUGFnZUxvY2ssIGVkaXRUYXNrLCByZW1vdmVQYWdlTG9jayB9IGZyb20gXCIuL1VJLmpzXCI7XHJcblxyXG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKTtcclxuY29uc3QgbWFpblRvRG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tdG9kb1wiKTtcclxubGV0IG5hbWUgPSBtYWluVG9Eby5xdWVyeVNlbGVjdG9yKFwiaDJcIik7XHJcbmNvbnN0IGJ1dHRvbiA9IG1haW5Ub0RvLnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2tcIik7XHJcblxyXG4vL2Jhc2ljIHJlbmRlcmluZ1xyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKGVsZW1lbnQsIGZsYWcpIHtcclxuICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBkaXYuaW5uZXJIVE1MID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJ0b3BcIj5cclxuICA8aSBjbGFzcz1cImZhciBmYS1jaXJjbGUgZGVsZXRlXCI+PC9pPlxyXG4gIDxzcGFuPiAke2VsZW1lbnQuZ2V0VGl0bGUoKX08L3NwYW4+XHJcbiAgPHNwYW4gPkR1ZSBEYXRlOiAke2VsZW1lbnQuZ2V0RHVlRGF0ZSgpfSAgPC9zcGFuPlxyXG4gIDxzcGFuPiBQcmlvcml0eTogJHtcclxuICAgIGVsZW1lbnQuZ2V0UHJpb3JpdHkoKSAhPSBcIlwiID8gZWxlbWVudC5nZXRQcmlvcml0eSgpIDogXCJOb25lXCJcclxuICB9ICA8L3NwYW4+XHJcbiAgPGkgY2xhc3M9XCJmYXMgZmEtYmFycyBlZGl0XCI+PC9pPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiYm90dG9tXCI+XHJcbiAgRGVzY3JpcHRpb246ICZuYnNwOyR7ZWxlbWVudC5nZXREZXNjcmlwdGlvbigpfVxyXG4gIDwvZGl2PlxyXG4gIGA7XHJcblxyXG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcclxuICBkaXYuY2xhc3NMaXN0LmFkZChgZnJvbS0ke2ZsYWd9YCk7XHJcbiAgbWFpblRvRG8uaW5zZXJ0QmVmb3JlKGRpdiwgYnV0dG9uKTtcclxufVxyXG5cclxuLy9yZW5kZXJzIHRvIGRvIGxpc3QgZm9yIElOQk9YL1BST0pFQ1RTXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUb0RvTGlzdChwcm9qZWN0TGlzdCwgaWQsIHR5cGUpIHtcclxuICBjb25zdCBkYXRhYmFzZSA9IHByb2plY3RMaXN0O1xyXG5cclxuICAvL2NsZWFycyBhbGwgdGFzayBlbGVtZW50cyBzbyB0aGF0IGl0IGNhbiBiZSByZS1yZW5kZXJlZFxyXG4gIGNvbnN0IHRvRG9MaXN0RGl2cyA9IG1haW5Ub0RvLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKTtcclxuICB0b0RvTGlzdERpdnMuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5yZW1vdmUoKSk7XHJcblxyXG4gIGlmICh0eXBlID09IFwiUHJvamVjdFwiKSB7XHJcbiAgICBsZXQgcHJvamVjdCA9IGRhdGFiYXNlLnByb2plY3RzTGlzdFtpZF07XHJcbiAgICBsZXQgcHJvamVjdE5hbWUgPSBPYmplY3Qua2V5cyhwcm9qZWN0KVswXTtcclxuICAgIGxldCB0b0RvTGlzdCA9IHByb2plY3RbcHJvamVjdE5hbWVdO1xyXG5cclxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiB0b0RvTGlzdC5nZXRJdGVtcygpKSB7XHJcbiAgICAgIHJlbmRlcihlbGVtZW50LCBcInByb2plY3RcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbmFtZS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xyXG4gIH0gZWxzZSBpZiAodHlwZSA9PSBcIkluYm94XCIpIHtcclxuICAgIGNvbnN0IGluYm94T2JqID0gZGF0YWJhc2UucHJvamVjdHNMaXN0WzBdO1xyXG4gICAgY29uc3QgdG9Eb0xpc3QgPSBpbmJveE9iai5JbmJveDtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgdG9Eb0xpc3QuZ2V0SXRlbXMoKSkge1xyXG4gICAgICByZW5kZXIoZWxlbWVudCwgXCJpbmJveFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBuYW1lLnRleHRDb250ZW50ID0gXCJJbmJveFwiO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGVsZXRlQnV0dG9uQXJyID0gbWFpblRvRG8ucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGVcIik7XHJcbiAgY29uc3QgZWRpdEJ1dHRvbkFyciA9IG1haW5Ub0RvLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRpdFwiKTtcclxuXHJcbiAgZGVsZXRlQnV0dG9uQXJyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBkZWxldGVUYXNrUG9wdXAoZSwgZGF0YWJhc2UpKTtcclxuICB9KTtcclxuXHJcbiAgZWRpdEJ1dHRvbkFyci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0VGFzayk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0UG9wdXAoZGF0YWJhc2UsZSkge1xyXG4gIGFsZXJ0KFwiaGlcIik7XHJcbiAgbGV0IHNlbGVjdGVkRGl2ID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICBsZXQgaWRWYWx1ZSA9IHNlbGVjdGVkRGl2LmdldEF0dHJpYnV0ZShcImlkXCIpO1xyXG5cclxuICBsZXQgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHBvcHVwLmlubmVySFRNTCA9IGBcclxuICAgIDxoMz5EZWxldGUgUHJvamVjdD88L2gzPlxyXG4gICAgPHNwYW4+ICAgICBcclxuICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJZZXNcIj5cclxuICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJOb1wiPlxyXG4gICAgPC9zcGFuPlxyXG4gIGA7XHJcbiAgcG9wdXAuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS10YXNrLXBvcHVwXCIpO1xyXG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocG9wdXApO1xyXG4gIHBvcHVwLnN0eWxlW1wiei1pbmRleFwiXSA9IFwiMlwiO1xyXG4gIGFkZFBhZ2VMb2NrKCk7XHJcblxyXG4gIGxldCBpbnB1dHMgPSBkb2N1bWVudFxyXG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlLXRhc2stcG9wdXBcIilcclxuICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT1zdWJtaXRdXCIpO1xyXG5cclxuICBpbnB1dHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAoZWxlbWVudC52YWx1ZSA9PSBcIlllc1wiKSB7XHJcbiAgICAgICAgZGF0YWJhc2UuZGVsZXRlUHJvamVjdChpZFZhbHVlKTtcclxuICAgICAgICBzdG9yZURhdGEoKTtcclxuICAgICAgICBzZWxlY3RlZERpdi5yZW1vdmUoKTtcclxuICAgICAgICBwb3B1cC5yZW1vdmUoKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgcmVtb3ZlUGFnZUxvY2soKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwb3B1cC5yZW1vdmUoKTtcclxuICAgICAgICByZW1vdmVQYWdlTG9jaygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2tQb3B1cChlLCBkYXRhYmFzZSkge1xyXG4gIC8vY3JlYXRlIHByb21wdCBmb3IgdXNlciB0byBjb25maXJtL2RlbnkgZGVsZXRpbmcgYSB0YXNrXHJcbiAgbGV0IG9yaWdpbmFsRWxlbWVudCA9IGU7XHJcbiAgbGV0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwb3B1cC5pbm5lckhUTUwgPSBgXHJcbiAgICA8aDM+RGVsZXRlIFRhc2s/PC9oMz5cclxuICAgIDxzcGFuPiAgICAgXHJcbiAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiWWVzXCI+XHJcbiAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTm9cIj5cclxuICAgIDwvc3Bhbj5cclxuICBgO1xyXG5cclxuICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXRhc2stcG9wdXBcIik7XHJcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwb3B1cCk7XHJcbiAgcG9wdXAuc3R5bGVbXCJ6LWluZGV4XCJdID0gXCIyXCI7XHJcbiAgYWRkUGFnZUxvY2soKTtcclxuXHJcbiAgbGV0IGlucHV0cyA9IGRvY3VtZW50XHJcbiAgICAucXVlcnlTZWxlY3RvcihcIi5kZWxldGUtdGFzay1wb3B1cFwiKVxyXG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPXN1Ym1pdF1cIik7XHJcblxyXG4gIGlucHV0cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmIChlbGVtZW50LnZhbHVlID09IFwiWWVzXCIpIHtcclxuICAgICAgICBkZWxldGVUYXNrKG9yaWdpbmFsRWxlbWVudCwgZGF0YWJhc2UpO1xyXG4gICAgICAgIHBvcHVwLnJlbW92ZSgpO1xyXG4gICAgICAgIHJlbW92ZVBhZ2VMb2NrKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcG9wdXAucmVtb3ZlKCk7XHJcbiAgICAgICAgcmVtb3ZlUGFnZUxvY2soKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUYXNrKGUsIGRhdGFiYXNlKSB7XHJcbiAgbGV0IHNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKTtcclxuICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgY29uc3QgdG9Eb0FyciA9IG1haW5Ub0RvLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKTtcclxuXHJcbiAgLy9kZWxldGUgcHJvamVjdCB0YXNrXHJcbiAgaWYgKHNlbGVjdGVkLmNsYXNzTGlzdC5jb250YWlucyhcInByb2plY3RzLWNoaWxkcmVuXCIpKSB7XHJcbiAgICBsZXQgaWQgPSBzZWxlY3RlZC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuICAgIGxldCBwcm9qZWN0ID0gZGF0YWJhc2UuZ2V0UHJvamVjdHMoKVtpZF07XHJcbiAgICBsZXQgcHJvamVjdE5hbWUgPSBPYmplY3Qua2V5cyhwcm9qZWN0KVswXTtcclxuICAgIGxldCB0b0RvTGlzdCA9IHByb2plY3RbcHJvamVjdE5hbWVdO1xyXG5cclxuICAgIGxldCBuZXdUb0RvQXJyID0gQXJyYXkuZnJvbSh0b0RvQXJyKTtcclxuICAgIGxldCBpbmRleE9mU2VsZWN0ZWRFbGVtZW50ID0gbmV3VG9Eb0Fyci5maW5kSW5kZXgoXHJcbiAgICAgIChlbGVtZW50KSA9PiBlbGVtZW50ID09IHRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnRcclxuICAgICk7XHJcbiAgICB0b0RvTGlzdC5yZW1vdmVJdGVtKGluZGV4T2ZTZWxlY3RlZEVsZW1lbnQpO1xyXG4gICAgdGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgIHN0b3JlRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgLy9kZWxldGUgaW5ib3ggdGFza1xyXG4gIGVsc2UgaWYgKHNlbGVjdGVkLmdldEF0dHJpYnV0ZShcImlkXCIpID09IFwiaW5ib3hcIikge1xyXG4gICAgY29uc3QgaW5ib3hPYmogPSBkYXRhYmFzZS5wcm9qZWN0c0xpc3RbMF07XHJcbiAgICBjb25zdCB0b0RvTGlzdCA9IGluYm94T2JqLkluYm94O1xyXG5cclxuICAgIGxldCBuZXdUb0RvQXJyID0gQXJyYXkuZnJvbSh0b0RvQXJyKTtcclxuICAgIGxldCBpbmRleE9mU2VsZWN0ZWRFbGVtZW50ID0gbmV3VG9Eb0Fyci5maW5kSW5kZXgoXHJcbiAgICAgIChlbGVtZW50KSA9PiBlbGVtZW50ID09IHRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnRcclxuICAgICk7XHJcbiAgICB0b0RvTGlzdC5yZW1vdmVJdGVtKGluZGV4T2ZTZWxlY3RlZEVsZW1lbnQpO1xyXG4gICAgdGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgIHN0b3JlRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgLy9kZWxldGUgdG9kYXkgdGFza1xyXG4gIGVsc2UgaWYgKHNlbGVjdGVkLmdldEF0dHJpYnV0ZShcImlkXCIpID09IFwidG9kYXlcIikge1xyXG4gICAgY29uc3QgdG9kYXlPYmogPSBkYXRhYmFzZS5wcm9qZWN0c0xpc3RbMF07XHJcbiAgICBjb25zdCB0b0RvTGlzdCA9IHRvZGF5T2JqLlRvZGF5O1xyXG5cclxuICAgIGlmICh0YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImZyb20tcHJvamVjdFwiKSkge1xyXG4gICAgICBhbGVydChcIkRlbGV0ZSB0aGUgdGFzayBmcm9tIHRoZSBwcm9qZWN0IHRoYXQgaXQgaXMgaW5cIik7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICB0YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImZyb20taW5ib3hcIilcclxuICAgICkge1xyXG4gICAgICBhbGVydChcIkRlbGV0ZSB0aGUgdGFzayBmcm9tIHRoZSBJbmJveCBzZWN0aW9uXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IG5ld1RvRG9BcnIgPSBBcnJheS5mcm9tKG1haW5Ub0RvLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZnJvbS10b2RheVwiKSk7XHJcbiAgICAgIGxldCBpbmRleE9mU2VsZWN0ZWRFbGVtZW50ID0gbmV3VG9Eb0Fyci5maW5kSW5kZXgoXHJcbiAgICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnQgPT0gdGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudFxyXG4gICAgICApO1xyXG4gICAgICB0b0RvTGlzdC5yZW1vdmVJdGVtKGluZGV4T2ZTZWxlY3RlZEVsZW1lbnQpO1xyXG4gICAgICB0YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICBzdG9yZURhdGEoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vZGVsZXRlIHVwY29taW5nIHRhc2tcclxuICBlbHNlIGlmIChzZWxlY3RlZC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSA9PSBcInVwY29taW5nXCIpIHtcclxuICAgIGNvbnN0IHVwY29taW5nT2JqID0gZGF0YWJhc2UucHJvamVjdHNMaXN0WzBdO1xyXG4gICAgY29uc3QgdG9Eb0xpc3QgPSB1cGNvbWluZ09iai5VcGNvbWluZztcclxuXHJcbiAgICBpZiAodGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJmcm9tLXByb2plY3RcIikpIHtcclxuICAgICAgYWxlcnQoXCJEZWxldGUgdGhlIHRhc2sgZnJvbSB0aGUgcHJvamVjdCB0aGF0IGl0IGlzIGluXCIpO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgdGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJmcm9tLWluYm94XCIpXHJcbiAgICApIHtcclxuICAgICAgYWxlcnQoXCJEZWxldGUgdGhlIHRhc2sgZnJvbSB0aGUgSW5ib3ggc2VjdGlvblwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBuZXdUb0RvQXJyID0gQXJyYXkuZnJvbShtYWluVG9Eby5xdWVyeVNlbGVjdG9yQWxsKFwiLmZyb20tdXBjb21pbmdcIikpO1xyXG4gICAgICBsZXQgaW5kZXhPZlNlbGVjdGVkRWxlbWVudCA9IG5ld1RvRG9BcnIuZmluZEluZGV4KFxyXG4gICAgICAgIChlbGVtZW50KSA9PiBlbGVtZW50ID09IHRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnRcclxuICAgICAgKTtcclxuICAgICAgdG9Eb0xpc3QucmVtb3ZlSXRlbShpbmRleE9mU2VsZWN0ZWRFbGVtZW50KTtcclxuICAgICAgdGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgc3RvcmVEYXRhKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vdG9Eb0xpc3QgaGFzIGFuIGFycmF5IG9mIHRvRG9JdGVtXHJcbmNsYXNzIHRvRG9MaXN0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5pdGVtcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgc2V0IG5hbWUodmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZS5sZW5ndGggPiAyMCkge1xyXG4gICAgICBhbGVydChcIk5hbWUgaXMgdG9vIGxvbmdcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIG5ld0l0ZW0oaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiB0b0RvSXRlbSkge1xyXG4gICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJdGVtKGlkLCBuZXdJdGVtKSB7XHJcbiAgICB0aGlzLml0ZW1zLnNwbGljZShpZCwxLG5ld0l0ZW0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlSXRlbShpbmRleCkge1xyXG4gICAgdGhpcy5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SXRlbXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pdGVtcztcclxuICB9XHJcblxyXG4gIGdldE5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gIH1cclxufVxyXG5cclxuLy90b0RvSXRlbSBpcyBhIGNsYXNzXHJcbmNsYXNzIHRvRG9JdGVtIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gIH1cclxuXHJcbiAgc2V0IHRpdGxlKHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUubGVuZ3RoID4gMzApIHtcclxuICAgICAgYWxlcnQoXCJUaXRsZSBpcyB0b28gbG9uZ1wiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHNldCBkZXNjcmlwdGlvbih2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA+IDQwMCkge1xyXG4gICAgICBhbGVydChcIkRlc2NyaXB0aW9uIGlzIHRvbyBsb25nXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0IGR1ZURhdGUodmFsdWUpIHtcclxuICAgIGxldCB5ZWFyID0gdmFsdWUuc3BsaXQoXCItXCIpWzBdO1xyXG4gICAgbGV0IG1vbnRoID0gdmFsdWUuc3BsaXQoXCItXCIpWzFdO1xyXG4gICAgbGV0IGRheSA9IHZhbHVlLnNwbGl0KFwiLVwiKVsyXTtcclxuXHJcbiAgICBpZiAobW9udGggPT0gdW5kZWZpbmVkIHx8IGRheSA9PSB1bmRlZmluZWQgfHwgeWVhciA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5fZHVlRGF0ZSA9IFwiTm9uZVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fZHVlRGF0ZSA9IGAke21vbnRofS8ke2RheX0vJHt5ZWFyfWA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXQgcHJpb3JpdHkodmFsdWUpIHtcclxuICAgIHRoaXMuX3ByaW9yaXR5ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXRUaXRsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl90aXRsZTtcclxuICB9XHJcblxyXG4gIGdldERlc2NyaXB0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgZ2V0RHVlRGF0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJpb3JpdHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyB0b0RvTGlzdCwgdG9Eb0l0ZW0gfTtcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTBweCk7XFxyXFxufVxcclxcbmFzaWRlIHtcXHJcXG4gIHdpZHRoOiAxOCU7XFxyXFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi8qIFRvcCBCYW5uZXIgKi9cXHJcXG4uYmFubmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgcGFkZGluZzogMS4yNWVtIDRlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbn1cXHJcXG4uYmFubmVyIGkge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDAuOGVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKlNpZGViYXIgKi9cXHJcXG4jdGFiLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDUpO1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcXHJcXG59XFxyXFxuI3RhYi1jb250YWluZXIgKiB7XFxyXFxuICBwYWRkaW5nOiAwLjVlbSAxLjI1ZW07XFxyXFxuICBmb250LXNpemU6IDEuMWVtO1xcclxcbn1cXHJcXG4jdGFiLWNvbnRhaW5lciBidXR0b24ge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcbiNpbmJveDpob3ZlcixcXHJcXG4jdG9kYXk6aG92ZXIsXFxyXFxuI3VwY29taW5nOmhvdmVyLFxcclxcbiNwcm9qZWN0cy1zbGlkZXI6aG92ZXIsXFxyXFxuI2FkZC1wcm9qZWN0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDIwMSwgMjAxKTtcXHJcXG59XFxyXFxuI3RhYi1jb250YWluZXIgaSB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcclxcbn1cXHJcXG4jaW5ib3gge1xcclxcbiAgcGFkZGluZy10b3A6IDEuMWVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMjAxLCAyMDEpO1xcclxcbn1cXHJcXG4jcHJvamVjdHMge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbi10b3A6IDJlbTtcXHJcXG59XFxyXFxuI3Byb2plY3RzLWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4jcHJvamVjdHMtaGVhZGVyIGgyIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LXNpemU6IDEuNWVtO1xcclxcbn1cXHJcXG4jcHJvamVjdHMtaGVhZGVyIGkge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuLmZhLWNhcmV0LXJpZ2h0e1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuLnNlbGVjdGVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDIwMSwgMjAxKSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBwcm9qZWN0cyBzZWN0aW9uIG9mIHNpZGViYXIgKi9cXHJcXG4uY29sbGFwc2Uge1xcclxcbiAgdHJhbnNpdGlvbjogMC41cztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MGVtKTtcXHJcXG59XFxyXFxuI3Byb2plY3RzLWJvZHkge1xcclxcbiAgbWFyZ2luLXRvcDogMC4yNWVtO1xcclxcbn1cXHJcXG4jcHJvamVjdHMtYm9keSB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcbiNwcm9qZWN0cy1ib2R5IGxpIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuI3Byb2plY3RzLWJvZHkgYnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMWVtO1xcclxcbn1cXHJcXG4jcHJvamVjdHMtYm9keSAucHJvamVjdHMtY2hpbGRyZW57XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbiNwcm9qZWN0cy1ib2R5IC5wcm9qZWN0cy1jaGlsZHJlbiBpIHtcXHJcXG4gIGhlaWdodDogMC4xZW07XFxyXFxuICB3aWR0aDogMC4xZW07XFxyXFxuICBwYWRkaW5nOiAwLjVlbTtcXHJcXG4gIG1hcmdpbjogMC4yNWVtIDA7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC44ZW07XFxyXFxufVxcclxcbiNwcm9qZWN0cy1ib2R5IC5wcm9qZWN0cy1jaGlsZHJlbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAyMDEsIDIwMSk7XFxyXFxufVxcclxcblxcclxcbi8qIE1haW4gaW50ZXJmYWNlIHdpdGggdG8tZG9zICovXFxyXFxuLm1haW4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE4JSk7XFxyXFxufVxcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiAzZW0gMTBlbSA3ZW0gMTFlbTtcXHJcXG59XFxyXFxuLm1haW4tY29udGFpbmVyIGgyIHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyZW07XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZGFya2dyYXk7XFxyXFxufVxcclxcbiNhZGQtdGFzayB7XFxyXFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMWVtIDA7XFxyXFxuXFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBsaW5lLWhlaWdodDogMmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMWVtO1xcclxcbn1cXHJcXG4jYWRkLXRhc2sgaSB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEuMmVtO1xcclxcbn1cXHJcXG4jYWRkLXRhc2s6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOSwgMjM5LCAyMzkpO1xcclxcbn1cXHJcXG4vKkFkZCBuZXcgcHJvamVjdCBwcm9tcHQgKi9cXHJcXG4ubmV3LXByb2plY3QtY2FyZCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDQwJTtcXHJcXG4gIGxlZnQ6IDQwJTtcXHJcXG4gIHdpZHRoOiAyNWVtO1xcclxcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLm5ldy1wcm9qZWN0LWNhcmQgaDMge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMC41ZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDQsIDI0NCk7XFxyXFxufVxcclxcbi5uZXctcHJvamVjdC1jYXJkIGRpdiB7XFxyXFxuICBwYWRkaW5nOiAxLjVlbTtcXHJcXG59XFxyXFxuLm5ldy1wcm9qZWN0LWNhcmQgaDQge1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuOGVtO1xcclxcbn1cXHJcXG4ubmV3LXByb2plY3QtY2FyZCBpbnB1dCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjNTg1ODU4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC40ZW07XFxyXFxuICBwYWRkaW5nOiAwLjRlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4ubmV3LXByb2plY3QtY2FyZCBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxyXFxuICBwYWRkaW5nOiAwLjZyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDYwJSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCA4NCwgODQpO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcbi8qQWRkIHRhc2sgcHJvbXB0Ki9cXHJcXG4ubmV3LXRhc2sge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcmlnaHQ6IDZlbTtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBtYXJnaW4tdG9wOiAxLjVlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5uZXctdGFzayBmb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMmVtO1xcclxcbiAgZ2FwOiAxZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5uZXctdGFzayBmb3JtIHNwYW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuI2FkZC10YXNrLW5hbWUge1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG59XFxyXFxuI2FkZC10YXNrLWRlc2Mge1xcclxcbiAgdGV4dC1hbGlnbjogdG9wO1xcclxcbiAgcGFkZGluZzogMS41ZW07XFxyXFxufVxcclxcbiNhZGQtdGFzay1wcmlvcml0eSB7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbn1cXHJcXG4jYWRkLXRhc2stZGF0ZSB7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbn1cXHJcXG4ubmV3LXRhc2sgZm9ybSBpbnB1dCxcXHJcXG4ubmV3LXRhc2sgZm9ybSBzZWxlY3Qge1xcclxcbiAgcGFkZGluZzogMC40cmVtO1xcclxcbn1cXHJcXG4ubmV3LXRhc2sgZm9ybSBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDg0LCA4NCk7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qdGFzayBzdHlsaW5nKi9cXHJcXG4udGFzayB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMWVtIDAuMjVlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXHJcXG59XFxyXFxuLnRhc2sgc3BhbiB7XFxyXFxuICBtYXJnaW4tbGVmdDogMWVtO1xcclxcbn1cXHJcXG4udG9wIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjI1ZW0gM2ZyIDNmciAzZnIgMS4yNWVtO1xcclxcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXHJcXG59XFxyXFxuLmJvdHRvbSB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEuOGVtO1xcclxcbiAgY29sb3I6IHJnYmEoOTQsIDkxLCA5MSwgMC43ODgpO1xcclxcbn1cXHJcXG4udGFzayBpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnRhc2sgaTpob3ZlciB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMjAxLCAyMDEpO1xcclxcbn1cXHJcXG4vKiBwb3B1cCBhc2tpbmcgdG8gY29uZmlybSBkZWxldGUgdGFzayAqL1xcclxcbi5kZWxldGUtdGFzay1wb3B1cCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDQwJTtcXHJcXG4gIGxlZnQ6IDQ1JTtcXHJcXG4gIHdpZHRoOiAxNWVtO1xcclxcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLmRlbGV0ZS10YXNrLXBvcHVwIGgzIHtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuM2VtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjNlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xcclxcbn1cXHJcXG4uZGVsZXRlLXRhc2stcG9wdXAgc3BhbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgcGFkZGluZzogMC44ZW07XFxyXFxufVxcclxcbi5kZWxldGUtdGFzay1wb3B1cCBpbnB1dCB7XFxyXFxuICBmb250LXNpemU6IDAuOGVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIHBhZGRpbmc6IDAuN2VtIDEuMmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG4vKnBhZ2UgbG9jayBkaXYgKi9cXHJcXG4ucGFnZS1sb2NrIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG4gIG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuLmxvY2sge1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBLGVBQWU7QUFDZjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1COztFQUVuQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLFdBQVc7QUFDWDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUNwQyw0QkFBNEI7QUFD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QSxlQUFlO0FBQ2Y7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCOztFQUV0QixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixnREFBZ0Q7RUFDaEQsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysb0NBQW9DO0FBQ3RDO0FBQ0Esd0NBQXdDO0FBQ3hDO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtBQUN2QjtBQUNBLGlCQUFpQjtBQUNqQjtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRO0VBQ1IsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTBweCk7XFxyXFxufVxcclxcbmFzaWRlIHtcXHJcXG4gIHdpZHRoOiAxOCU7XFxyXFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi8qIFRvcCBCYW5uZXIgKi9cXHJcXG4uYmFubmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgcGFkZGluZzogMS4yNWVtIDRlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbn1cXHJcXG4uYmFubmVyIGkge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDAuOGVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKlNpZGViYXIgKi9cXHJcXG4jdGFiLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDUpO1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcXHJcXG59XFxyXFxuI3RhYi1jb250YWluZXIgKiB7XFxyXFxuICBwYWRkaW5nOiAwLjVlbSAxLjI1ZW07XFxyXFxuICBmb250LXNpemU6IDEuMWVtO1xcclxcbn1cXHJcXG4jdGFiLWNvbnRhaW5lciBidXR0b24ge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcbiNpbmJveDpob3ZlcixcXHJcXG4jdG9kYXk6aG92ZXIsXFxyXFxuI3VwY29taW5nOmhvdmVyLFxcclxcbiNwcm9qZWN0cy1zbGlkZXI6aG92ZXIsXFxyXFxuI2FkZC1wcm9qZWN0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDIwMSwgMjAxKTtcXHJcXG59XFxyXFxuI3RhYi1jb250YWluZXIgaSB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcclxcbn1cXHJcXG4jaW5ib3gge1xcclxcbiAgcGFkZGluZy10b3A6IDEuMWVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMjAxLCAyMDEpO1xcclxcbn1cXHJcXG4jcHJvamVjdHMge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbi10b3A6IDJlbTtcXHJcXG59XFxyXFxuI3Byb2plY3RzLWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4jcHJvamVjdHMtaGVhZGVyIGgyIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LXNpemU6IDEuNWVtO1xcclxcbn1cXHJcXG4jcHJvamVjdHMtaGVhZGVyIGkge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuLmZhLWNhcmV0LXJpZ2h0e1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuLnNlbGVjdGVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDIwMSwgMjAxKSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBwcm9qZWN0cyBzZWN0aW9uIG9mIHNpZGViYXIgKi9cXHJcXG4uY29sbGFwc2Uge1xcclxcbiAgdHJhbnNpdGlvbjogMC41cztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MGVtKTtcXHJcXG59XFxyXFxuI3Byb2plY3RzLWJvZHkge1xcclxcbiAgbWFyZ2luLXRvcDogMC4yNWVtO1xcclxcbn1cXHJcXG4jcHJvamVjdHMtYm9keSB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcbiNwcm9qZWN0cy1ib2R5IGxpIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuI3Byb2plY3RzLWJvZHkgYnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMWVtO1xcclxcbn1cXHJcXG4jcHJvamVjdHMtYm9keSAucHJvamVjdHMtY2hpbGRyZW57XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbiNwcm9qZWN0cy1ib2R5IC5wcm9qZWN0cy1jaGlsZHJlbiBpIHtcXHJcXG4gIGhlaWdodDogMC4xZW07XFxyXFxuICB3aWR0aDogMC4xZW07XFxyXFxuICBwYWRkaW5nOiAwLjVlbTtcXHJcXG4gIG1hcmdpbjogMC4yNWVtIDA7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC44ZW07XFxyXFxufVxcclxcbiNwcm9qZWN0cy1ib2R5IC5wcm9qZWN0cy1jaGlsZHJlbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAyMDEsIDIwMSk7XFxyXFxufVxcclxcblxcclxcbi8qIE1haW4gaW50ZXJmYWNlIHdpdGggdG8tZG9zICovXFxyXFxuLm1haW4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE4JSk7XFxyXFxufVxcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiAzZW0gMTBlbSA3ZW0gMTFlbTtcXHJcXG59XFxyXFxuLm1haW4tY29udGFpbmVyIGgyIHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyZW07XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZGFya2dyYXk7XFxyXFxufVxcclxcbiNhZGQtdGFzayB7XFxyXFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMWVtIDA7XFxyXFxuXFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBsaW5lLWhlaWdodDogMmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMWVtO1xcclxcbn1cXHJcXG4jYWRkLXRhc2sgaSB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEuMmVtO1xcclxcbn1cXHJcXG4jYWRkLXRhc2s6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOSwgMjM5LCAyMzkpO1xcclxcbn1cXHJcXG4vKkFkZCBuZXcgcHJvamVjdCBwcm9tcHQgKi9cXHJcXG4ubmV3LXByb2plY3QtY2FyZCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDQwJTtcXHJcXG4gIGxlZnQ6IDQwJTtcXHJcXG4gIHdpZHRoOiAyNWVtO1xcclxcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLm5ldy1wcm9qZWN0LWNhcmQgaDMge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMC41ZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDQsIDI0NCk7XFxyXFxufVxcclxcbi5uZXctcHJvamVjdC1jYXJkIGRpdiB7XFxyXFxuICBwYWRkaW5nOiAxLjVlbTtcXHJcXG59XFxyXFxuLm5ldy1wcm9qZWN0LWNhcmQgaDQge1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuOGVtO1xcclxcbn1cXHJcXG4ubmV3LXByb2plY3QtY2FyZCBpbnB1dCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjNTg1ODU4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC40ZW07XFxyXFxuICBwYWRkaW5nOiAwLjRlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4ubmV3LXByb2plY3QtY2FyZCBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxyXFxuICBwYWRkaW5nOiAwLjZyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDYwJSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCA4NCwgODQpO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcbi8qQWRkIHRhc2sgcHJvbXB0Ki9cXHJcXG4ubmV3LXRhc2sge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcmlnaHQ6IDZlbTtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBtYXJnaW4tdG9wOiAxLjVlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5uZXctdGFzayBmb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMmVtO1xcclxcbiAgZ2FwOiAxZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5uZXctdGFzayBmb3JtIHNwYW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuI2FkZC10YXNrLW5hbWUge1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG59XFxyXFxuI2FkZC10YXNrLWRlc2Mge1xcclxcbiAgdGV4dC1hbGlnbjogdG9wO1xcclxcbiAgcGFkZGluZzogMS41ZW07XFxyXFxufVxcclxcbiNhZGQtdGFzay1wcmlvcml0eSB7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbn1cXHJcXG4jYWRkLXRhc2stZGF0ZSB7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbn1cXHJcXG4ubmV3LXRhc2sgZm9ybSBpbnB1dCxcXHJcXG4ubmV3LXRhc2sgZm9ybSBzZWxlY3Qge1xcclxcbiAgcGFkZGluZzogMC40cmVtO1xcclxcbn1cXHJcXG4ubmV3LXRhc2sgZm9ybSBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDg0LCA4NCk7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qdGFzayBzdHlsaW5nKi9cXHJcXG4udGFzayB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMWVtIDAuMjVlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXHJcXG59XFxyXFxuLnRhc2sgc3BhbiB7XFxyXFxuICBtYXJnaW4tbGVmdDogMWVtO1xcclxcbn1cXHJcXG4udG9wIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjI1ZW0gM2ZyIDNmciAzZnIgMS4yNWVtO1xcclxcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXHJcXG59XFxyXFxuLmJvdHRvbSB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEuOGVtO1xcclxcbiAgY29sb3I6IHJnYmEoOTQsIDkxLCA5MSwgMC43ODgpO1xcclxcbn1cXHJcXG4udGFzayBpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnRhc2sgaTpob3ZlciB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMjAxLCAyMDEpO1xcclxcbn1cXHJcXG4vKiBwb3B1cCBhc2tpbmcgdG8gY29uZmlybSBkZWxldGUgdGFzayAqL1xcclxcbi5kZWxldGUtdGFzay1wb3B1cCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDQwJTtcXHJcXG4gIGxlZnQ6IDQ1JTtcXHJcXG4gIHdpZHRoOiAxNWVtO1xcclxcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLmRlbGV0ZS10YXNrLXBvcHVwIGgzIHtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuM2VtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjNlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xcclxcbn1cXHJcXG4uZGVsZXRlLXRhc2stcG9wdXAgc3BhbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgcGFkZGluZzogMC44ZW07XFxyXFxufVxcclxcbi5kZWxldGUtdGFzay1wb3B1cCBpbnB1dCB7XFxyXFxuICBmb250LXNpemU6IDAuOGVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIHBhZGRpbmc6IDAuN2VtIDEuMmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG4vKnBhZ2UgbG9jayBkaXYgKi9cXHJcXG4ucGFnZS1sb2NrIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG4gIG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuLmxvY2sge1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICB2YXIgc2lnbiA9IG51bWJlciA8IDAgPyAnLScgOiAnJztcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKTtcblxuICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgfVxuXG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufSIsImltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSBcIi4uL2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbnZhciBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogJ2FtJyxcbiAgcG06ICdwbScsXG4gIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICBub29uOiAnbm9vbicsXG4gIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICBuaWdodDogJ25pZ2h0J1xufTtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZXJhID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlICdHJzpcbiAgICAgIGNhc2UgJ0dHJzpcbiAgICAgIGNhc2UgJ0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBBLCBCXG5cbiAgICAgIGNhc2UgJ0dHR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuXG4gICAgICBjYXNlICdHR0dHJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAneW8nKSB7XG4gICAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2lnbmVkV2Vla1llYXIgPSBnZXRVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyOyAvLyBUd28gZGlnaXQgeWVhclxuXG4gICAgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgICB2YXIgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfSAvLyBPcmRpbmFsIG51bWJlclxuXG5cbiAgICBpZiAodG9rZW4gPT09ICdZbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfSAvLyBQYWRkaW5nXG5cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBpc29XZWVrWWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRhdGUpOyAvLyBQYWRkaW5nXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAnUSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdRUSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAnUW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAnUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdRUVFRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAnUVFRUSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ3EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAncXEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ3FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ3FxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAncXFxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ3FxcXEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgY2FzZSAnTU0nOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdNbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ01NTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ01NTU0nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTCc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuXG4gICAgICBjYXNlICdMTCc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTG8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ0xMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdMTExMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdMTExMJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgd2VlayA9IGdldFVUQ1dlZWsoZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodG9rZW4gPT09ICd3bycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBpc29XZWVrID0gZ2V0VVRDSVNPV2VlayhkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnZG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0RhdGUoKSwge1xuICAgICAgICB1bml0OiAnZGF0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZZZWFyID0gZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnRG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHtcbiAgICAgICAgdW5pdDogJ2RheU9mWWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ0UnOlxuICAgICAgY2FzZSAnRUUnOlxuICAgICAgY2FzZSAnRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ0VFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnRUVFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ0VFRUUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSAnZSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdlZSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2VvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2VlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnZWVlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2VlZWUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlICdjJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2NjJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdjbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2NjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdjY2NjJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSAnaSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG5cbiAgICAgIGNhc2UgJ2lpJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcblxuICAgICAgY2FzZSAnaW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZVxuXG4gICAgICBjYXNlICdpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdpaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnaWlpaSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdiJzpcbiAgICAgIGNhc2UgJ2JiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2JiYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmJiJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ0InOlxuICAgICAgY2FzZSAnQkInOlxuICAgICAgY2FzZSAnQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnaG8nKSB7XG4gICAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ0hvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENIb3VycygpLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuXG4gICAgaWYgKHRva2VuID09PSAnS28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuXG4gICAgaWYgKHRva2VuID09PSAna28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnbW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ01pbnV0ZXMoKSwge1xuICAgICAgICB1bml0OiAnbWludXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdzbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB7XG4gICAgICAgIHVuaXQ6ICdzZWNvbmQnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiAnWic7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ1gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuXG4gICAgICBjYXNlICdYWFhYJzpcbiAgICAgIGNhc2UgJ1hYJzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFhYJzpcbiAgICAgIGNhc2UgJ1hYWCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICd4JzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcblxuICAgICAgY2FzZSAneHh4eCc6XG4gICAgICBjYXNlICd4eCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuXG4gICAgICBjYXNlICd4eHh4eCc6XG4gICAgICBjYXNlICd4eHgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAnTyc6XG4gICAgICBjYXNlICdPTyc6XG4gICAgICBjYXNlICdPT08nOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICdPT09PJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAneic6XG4gICAgICBjYXNlICd6eic6XG4gICAgICBjYXNlICd6enonOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICd6enp6JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IE1hdGguZmxvb3Iob3JpZ2luYWxEYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBvcmlnaW5hbERhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XG4gIHZhciBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG5cbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cblxuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksIDIpO1xuICB2YXIgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG4gICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09ICd5eScgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gJ00nID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRVVENIb3VycygpIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09ICdhbScgPyAnYS5tLicgOiAncC5tLic7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgIHZhciBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMykpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImZ1bmN0aW9uIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0aW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ3AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcHAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGF0ZVRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgdmFyIG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/Lyk7XG4gIHZhciBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICB2YXIgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcblxuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG5cbiAgdmFyIGRhdGVUaW1lRm9ybWF0O1xuXG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBkYXRlVGltZUZvcm1hdC5yZXBsYWNlKCd7e2RhdGV9fScsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSkucmVwbGFjZSgne3t0aW1lfX0nLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufVxuXG52YXIgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXJcbn07XG5leHBvcnQgZGVmYXVsdCBsb25nRm9ybWF0dGVyczsiLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0RheU9mWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZZZWFyVGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciBkaWZmZXJlbmNlID0gdGltZXN0YW1wIC0gc3RhcnRPZlllYXJUaW1lc3RhbXA7XG4gIHJldHVybiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyBNSUxMSVNFQ09ORFNfSU5fREFZKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ0lTT1dlZWsoZGF0ZSkuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRhdGUpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDV2VlayhkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgZGlydHlPcHRpb25zKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwidmFyIHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFsnRCcsICdERCddO1xudmFyIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gWydZWScsICdZWVlZJ107XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gJ1lZWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnRCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0REJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vlay5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrLCBkaXJ0eU9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZE1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZXN0YW1wID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIGFtb3VudCk7XG59IiwiaW1wb3J0IGlzVmFsaWQgZnJvbSBcIi4uL2lzVmFsaWQvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmltcG9ydCBzdWJNaWxsaXNlY29uZHMgZnJvbSBcIi4uL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGxvbmdGb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiwgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLCB0aHJvd1Byb3RlY3RlZEVycm9yIH0gZnJvbSBcIi4uL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG5cbnZhciBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nOyAvLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG5cbnZhciBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xudmFyIGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbnZhciBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xudmFyIHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyfVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcn0pLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGhlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gVGhlIHNlY29uZCBhcmd1bWVudCBpcyBub3cgcmVxdWlyZWQgZm9yIHRoZSBzYWtlIG9mIGV4cGxpY2l0bmVzcy5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgLy8gQmVmb3JlIHYyLjAuMFxuICogICBmb3JtYXQobmV3IERhdGUoMjAxNiwgMCwgMSkpXG4gKlxuICogICAvLyB2Mi4wLjAgb253YXJkXG4gKiAgIGZvcm1hdChuZXcgRGF0ZSgyMDE2LCAwLCAxKSwgXCJ5eXl5LU1NLWRkJ1QnSEg6bW06c3MuU1NTeHh4XCIpXG4gKiAgIGBgYFxuICpcbiAqIC0gTmV3IGZvcm1hdCBzdHJpbmcgQVBJIGZvciBgZm9ybWF0YCBmdW5jdGlvblxuICogICB3aGljaCBpcyBiYXNlZCBvbiBbVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1XShodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlKS5cbiAqICAgU2VlIFt0aGlzIHBvc3RdKGh0dHBzOi8vYmxvZy5kYXRlLWZucy5vcmcvcG9zdC91bmljb2RlLXRva2Vucy1pbi1kYXRlLWZucy12Mi1zcmVhdHlraTkxamcpIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogLSBDaGFyYWN0ZXJzIGFyZSBub3cgZXNjYXBlZCB1c2luZyBzaW5nbGUgcXVvdGUgc3ltYm9scyAoYCdgKSBpbnN0ZWFkIG9mIHNxdWFyZSBicmFja2V0cy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyIHRva2VucyBgWVlgIGFuZCBgWVlZWWA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIGRheSBvZiB5ZWFyIHRva2VucyBgRGAgYW5kIGBERGA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoZGlydHlEYXRlLCBkaXJ0eUZvcm1hdFN0ciwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZm9ybWF0U3RyID0gU3RyaW5nKGRpcnR5Rm9ybWF0U3RyKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSB8fCBkZWZhdWx0TG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBsb2NhbGVXZWVrU3RhcnRzT24gPSBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy53ZWVrU3RhcnRzT247XG4gIHZhciBkZWZhdWx0V2Vla1N0YXJ0c09uID0gbG9jYWxlV2Vla1N0YXJ0c09uID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGxvY2FsZVdlZWtTdGFydHNPbik7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSBvcHRpb25zLndlZWtTdGFydHNPbiA9PSBudWxsID8gZGVmYXVsdFdlZWtTdGFydHNPbiA6IHRvSW50ZWdlcihvcHRpb25zLndlZWtTdGFydHNPbik7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUubG9jYWxpemUpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0TG9uZykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdExvbmcgcHJvcGVydHknKTtcbiAgfVxuXG4gIHZhciBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfSAvLyBDb252ZXJ0IHRoZSBkYXRlIGluIHN5c3RlbSB0aW1lem9uZSB0byB0aGUgc2FtZSBkYXRlIGluIFVUQyswMDowMCB0aW1lem9uZS5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgd2hlbiBVVEMgZnVuY3Rpb25zIHdpbGwgYmUgaW1wbGVtZW50ZWQsIGxvY2FsZXMgd2lsbCBiZSBjb21wYXRpYmxlIHdpdGggdGhlbS5cbiAgLy8gU2VlIGFuIGlzc3VlIGFib3V0IFVUQyBmdW5jdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cblxuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSk7XG4gIHZhciB1dGNEYXRlID0gc3ViTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSwgdGltZXpvbmVPZmZzZXQpO1xuICB2YXIgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT246IHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBfb3JpZ2luYWxEYXRlOiBvcmlnaW5hbERhdGVcbiAgfTtcbiAgdmFyIHJlc3VsdCA9IGZvcm1hdFN0ci5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09ICdwJyB8fCBmaXJzdENoYXJhY3RlciA9PT0gJ1AnKSB7XG4gICAgICB2YXIgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgcmV0dXJuIFwiJ1wiO1xuICAgIH1cblxuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKTtcbiAgICB9XG5cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG5cbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBpZiAoIW9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zICYmIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgZGlydHlEYXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMgJiYgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgZGlydHlEYXRlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZvcm1hdHRlcih1dGNEYXRlLCBzdWJzdHJpbmcsIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0Zvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgJyArIGZpcnN0Q2hhcmFjdGVyICsgJ2AnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIHJldHVybiBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKVsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJpbXBvcnQgc3RhcnRPZldlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZVdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheSxcbiAqIC8vIGFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xuICogICB3ZWVrU3RhcnRzT246IDFcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZVdlZWsoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgZGlydHlPcHRpb25zKTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZldlZWsuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mV2Vlay5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzRGF0ZSBmcm9tIFwiLi4vaXNEYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIE5vdyBgaXNWYWxpZGAgZG9lc24ndCB0aHJvdyBhbiBleGNlcHRpb25cbiAqICAgaWYgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICogICBJbnN0ZWFkLCBhcmd1bWVudCBpcyBjb252ZXJ0ZWQgYmVmb3JlaGFuZCB1c2luZyBgdG9EYXRlYC5cbiAqXG4gKiAgIEV4YW1wbGVzOlxuICpcbiAqICAgfCBgaXNWYWxpZGAgYXJndW1lbnQgICAgICAgIHwgQmVmb3JlIHYyLjAuMCB8IHYyLjAuMCBvbndhcmQgfFxuICogICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS18XG4gKiAgIHwgYG5ldyBEYXRlKClgICAgICAgICAgICAgICB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoJzIwMTYtMDEtMDEnKWAgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgnJylgICAgICAgICAgICAgfCBgZmFsc2VgICAgICAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKDE0ODgzNzA4MzUwODEpYCB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoTmFOKWAgICAgICAgICAgIHwgYGZhbHNlYCAgICAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAnMjAxNi0wMS0wMSdgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYCcnYCAgICAgICAgICAgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgMTQ4ODM3MDgzNTA4MWAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBOYU5gICAgICAgICAgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKlxuICogICBXZSBpbnRyb2R1Y2UgdGhpcyBjaGFuZ2UgdG8gbWFrZSAqZGF0ZS1mbnMqIGNvbnNpc3RlbnQgd2l0aCBFQ01BU2NyaXB0IGJlaGF2aW9yXG4gKiAgIHRoYXQgdHJ5IHRvIGNvZXJjZSBhcmd1bWVudHMgdG8gdGhlIGV4cGVjdGVkIHR5cGVcbiAqICAgKHdoaWNoIGlzIGFsc28gdGhlIGNhc2Ugd2l0aCBvdGhlciAqZGF0ZS1mbnMqIGZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG5cbiAgaWYgKCFpc0RhdGUoZGlydHlEYXRlKSAmJiB0eXBlb2YgZGlydHlEYXRlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKGRhdGUpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBkaXJ0eU9wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcblxuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7IC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGFuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG5cbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcblxudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcblxuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xuXG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiAodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07IC8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cblxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcblxudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiAoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpOyAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG5cbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG5cbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiAocXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwXG4gICAgLyogU3VuZGF5ICovXG4gICAgLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy53ZWVrU3RhcnRzT247XG4gIHZhciBkZWZhdWx0V2Vla1N0YXJ0c09uID0gbG9jYWxlV2Vla1N0YXJ0c09uID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGxvY2FsZVdlZWtTdGFydHNPbik7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSBvcHRpb25zLndlZWtTdGFydHNPbiA9PSBudWxsID8gZGVmYXVsdFdlZWtTdGFydHNPbiA6IHRvSW50ZWdlcihvcHRpb25zLndlZWtTdGFydHNPbik7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1Yk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNzUwIG1pbGxpc2Vjb25kcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NToyOS4yNTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8IURPQ1RZUEUgaHRtbD5cXHJcXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxyXFxuICA8aGVhZD5cXHJcXG4gICAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiIC8+XFxyXFxuICAgIDxtZXRhIGh0dHAtZXF1aXY9XFxcIlgtVUEtQ29tcGF0aWJsZVxcXCIgY29udGVudD1cXFwiSUU9ZWRnZVxcXCIgLz5cXHJcXG4gICAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiIC8+XFxyXFxuICAgIDx0aXRsZT5UbyBEbyBMaXN0PC90aXRsZT5cXHJcXG4gICAgPHNjcmlwdFxcclxcbiAgICAgIHNyYz1cXFwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tLzk2OWEwZTMyZjMuanNcXFwiXFxyXFxuICAgICAgY3Jvc3NvcmlnaW49XFxcImFub255bW91c1xcXCJcXHJcXG4gICAgPjwvc2NyaXB0PlxcclxcbiAgPC9oZWFkPlxcclxcbiAgPGJvZHk+XFxyXFxuICAgIDxoZWFkZXI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiYmFubmVyXFxcIj5cXHJcXG4gICAgICAgIDxoMT5Uby1EbzwvaDE+XFxyXFxuICAgICAgICA8aSBjbGFzcz1cXFwiZmFzIGZhLWxpc3QtdWwgZmEtMnhcXFwiPjwvaT5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9oZWFkZXI+XFxyXFxuICAgIDxtYWluPlxcclxcbiAgICAgIDxhc2lkZT5cXHJcXG4gICAgICAgICAgPGRpdiBpZD1cXFwidGFiLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwiaW5ib3hcXFwiPjxpIGNsYXNzPVxcXCJmYXMgZmEtaW5ib3hcXFwiPjwvaT5JbmJveDwvYnV0dG9uPlxcclxcblxcclxcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcInRvZGF5XFxcIj48aSBjbGFzcz1cXFwiZmFzIGZhLWNhbGVuZGFyLWRheVxcXCI+PC9pPlRvZGF5PC9idXR0b24+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwidXBjb21pbmdcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhcyBmYS1jYWxlbmRhci1taW51c1xcXCI+PC9pPlVwY29taW5nXFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwicHJvamVjdHNcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGRpdiBpZD1cXFwicHJvamVjdHMtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwicHJvamVjdHMtc2xpZGVyXFxcIj48aSBjbGFzcz1cXFwiZmFzIGZhLWNhcmV0LWRvd24gZmEtMXhcXFwiPjwvaT48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGgyPlByb2plY3RzPC9oMj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwiYWRkLXByb2plY3RcXFwiPiA8aSBjbGFzcz1cXFwiZmFzIGZhLXBsdXNcXFwiPjwvaT4gPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgIDxkaXYgaWQ9XFxcInByb2plY3RzLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dWw+PC91bD5cXHJcXG4gICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvYXNpZGU+XFxyXFxuXFxyXFxuICAgICAgPHNlY3Rpb24gY2xhc3M9XFxcIm1haW5cXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibWFpbi1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICA8ZGl2IGlkPVxcXCJtYWluLXRvZG9cXFwiPlxcclxcbiAgICAgICAgICAgIDxoMj5JbmJveDwvaDI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cXFwiYWRkLXRhc2tcXFwiPjxpIGNsYXNzPVxcXCJmYXMgZmEtcGx1c1xcXCI+PC9pPkFkZCBUYXNrPC9idXR0b24+XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9zZWN0aW9uPlxcclxcblxcclxcbiAgICAgIFxcclxcbiAgICA8L21haW4+XFxyXFxuXFxyXFxuICA8L2JvZHk+XFxyXFxuPC9odG1sPlxcclxcblwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInJlcXVpcmUoJy4vaW5kZXguaHRtbCcpXHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZS9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgYWRkRXZlbnRMaXN0ZW5lcnMgfSBmcm9tIFwiLi9tb2R1bGVzL1VJLmpzXCI7XHJcbmltcG9ydCB7bG9hZERhdGF9IGZyb20gXCIuL21vZHVsZXMvU3RvcmFnZS5qc1wiO1xyXG5cclxuLy9hZGRzIGFsbCByZXF1aXJlZCBldmVudCBsaXN0ZW5lcnMgZm9yIHRoZSBwYWdlIHRvIHJ1biBwcm9wZXJseVxyXG5hZGRFdmVudExpc3RlbmVycygpO1xyXG5sb2FkRGF0YSgpO1xyXG4vL2VuZCJdLCJuYW1lcyI6WyJ0b0RvTGlzdCIsInRvRG9JdGVtIiwiUHJvamVjdCIsInByb2plY3RzTGlzdCIsInRvRG9MaXN0TmFtZSIsIm5ld1RvRG9MaXN0IiwibmV3UHJvamVjdCIsInB1c2giLCJpZCIsInNwbGljZSIsInRvZGF5SGFuZGxlciIsInVwY29taW5nSGFuZGxlciIsInJlbmRlclRvRG9MaXN0IiwiaW5ib3hEYXRhYmFzZSIsInByb2plY3RzRGF0YWJhc2UiLCJ0b2RheURhdGFiYXNlIiwidXBjb21pbmdEYXRhYmFzZSIsInN0b3JlRGF0YSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwibG9hZERhdGEiLCJmb3JtYXQiLCJpc1NhbWVXZWVrIiwidG9DbGFzcyIsImRlbGV0ZVByb2plY3RQb3B1cCIsIm1haW5Db250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0YWJDb250YWluZXIiLCJpbmJveCIsInRvZGF5IiwidXBjb21pbmciLCJwcm9qZWN0c1NsaWRlciIsImFkZFByb2plY3RCdXR0b24iLCJhZGRUYXNrQnV0dG9uIiwiYWRkUHJvamVjdCIsInByb2plY3RzRGl2IiwicGFyc2UiLCJnZXRJdGVtIiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVyIiwiZGlzcGxheUluYm94RGl2IiwiZGlzcGxheVRvZGF5RGl2IiwiZGlzcGxheVVwY29taW5nRGl2IiwiZGlzcGxheVByb2plY3RMaXN0IiwibmV3UHJvamVjdFByb21wdCIsImFkZFRhc2siLCJlIiwiYnV0dG9uIiwidGFyZ2V0IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsInBhcmVudCIsImlubmVySFRNTCIsInN0eWxlIiwiZGlzcGxheSIsImFwcGVuZENoaWxkIiwiYWRkUGFnZUxvY2siLCJuZXdUYXNrRGl2IiwiaW5wdXRGaWVsZCIsInN1Ym1pdEJveGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImN1cnJlbnRseVNlbGVjdGVkIiwiZ2V0QXR0cmlidXRlIiwiZm9yRWFjaCIsImlucHV0IiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsImZvcm0iLCJuYW1lIiwiZWxlbWVudHMiLCJkZXNjIiwiZGF0ZSIsInByaW9yaXR5IiwiaXNOYU4iLCJjdXJyZW50UHJvamVjdCIsIm9iak5hbWUiLCJPYmplY3QiLCJrZXlzIiwidG9Eb1Rhc2siLCJuZXdJdGVtIiwiaW5ib3hPYmoiLCJJbmJveCIsInRvZGF5T2JqIiwiVG9kYXkiLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJhbGVydCIsInVwY29taW5nT2JqIiwiVXBjb21pbmciLCJmb3JtYXR0ZWRDdXJyZW50RGF0ZSIsInllYXIiLCJzcGxpdCIsIm1vbnRoIiwiZGF5IiwiZm9ybWF0dGVkUHJvamVjdERhdGUiLCJyZW1vdmUiLCJyZW1vdmVQYWdlTG9jayIsImVkaXRUYXNrIiwic2VsZWN0ZWREaXYiLCJwYXJlbnRFbGVtZW50Iiwic2VsZWN0ZWREaXZTcGFuIiwidG9Eb0FyciIsImlubmVyVGV4dCIsInRyaW0iLCJzdWJzdHJpbmciLCJpbmRleE9mIiwibmV3VG9Eb0FyciIsIkFycmF5IiwiZnJvbSIsImluZGV4T2ZTZWxlY3RlZEVsZW1lbnQiLCJmaW5kSW5kZXgiLCJlbGVtZW50IiwidXBkYXRlSXRlbSIsImNvbnRhaW5zIiwibmV3UHJvamVjdENhcmQiLCJ0b0xvd2VyQ2FzZSIsImlucHV0VmFsdWUiLCJjdXJyZW50SWQiLCJsZW5ndGgiLCJpbnNlcnRQcm9qZWN0RGl2IiwibGkiLCJzZXRBdHRyaWJ1dGUiLCJkaXNwbGF5UHJvamVjdERpdiIsInJlc2V0QnV0dG9ucyIsImJ1dHRvbnMiLCJpZFZhbHVlIiwibm9kZU5hbWUiLCJwYWdlTG9jayIsImJvZHkiLCJ0YXNrIiwidGFza0xvY2siLCJpIiwidG9nZ2xlIiwiZGVsZXRlVGFza1BvcHVwIiwicmVuZGVyIiwibWFpblRvRG8iLCJ0b0RvTGlzdERpdnMiLCJvYmoiLCJwcm9qZWN0IiwiaXRlbXMiLCJnZXREdWVEYXRlIiwiZ2V0SXRlbXMiLCJkZWxldGVCdXR0b25BcnIiLCJlZGl0QnV0dG9uQXJyIiwidGV4dENvbnRlbnQiLCJwcm9qZWN0RGF0ZSIsInR5cGUiLCJkYXRhYmFzZSIsInN0cmluZyIsIm9iakluYm94Iiwib2JqSW5ib3hJdGVtcyIsIl9kdWVEYXRlIiwibmV3VG9EbyIsIl90aXRsZSIsIl9kZXNjcmlwdGlvbiIsIl9wcmlvcml0eSIsIm9ialRvZGF5Iiwib2JqVG9kYXlJdGVtcyIsIm9ialVwY29taW5nIiwib2JqVXBjb21pbmdJdGVtcyIsIm9ialByb2plY3QiLCJlbnRyaWVzIiwicHJvaiIsImtleSIsImZsYWciLCJnZXRUaXRsZSIsImdldFByaW9yaXR5IiwiZ2V0RGVzY3JpcHRpb24iLCJpbnNlcnRCZWZvcmUiLCJwcm9qZWN0TGlzdCIsInByb2plY3ROYW1lIiwicG9wdXAiLCJpbnB1dHMiLCJkZWxldGVQcm9qZWN0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJvcmlnaW5hbEVsZW1lbnQiLCJkZWxldGVUYXNrIiwic2VsZWN0ZWQiLCJnZXRQcm9qZWN0cyIsInJlbW92ZUl0ZW0iLCJfbmFtZSIsIml0ZW0iLCJpbmRleCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwidW5kZWZpbmVkIiwicmVxdWlyZSJdLCJzb3VyY2VSb290IjoiIn0=