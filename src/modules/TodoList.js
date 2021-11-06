//toDoList has an array of toDoItem
class toDoList {
  constructor(name) {
    this.name = name;
    this.items = [];
  }

  set name(value) {
    if (value.length > 20) {
      alert("Name is too long");
      return;
    }
    this._name = value;
  }

  newItem(item) {
    if (item instanceof toDoItem) {
      this.items.push(item);
    }
  }

  findItem(itemName) {
    for (const element of this.items) {
      if (element.getTitle === itemName) return element;
    }
    return;
  }

  updateItem(itemName, updateType, updateData) {
    let item = this.findItem(itemName);
    item.updateType = updateData;
  }

  removeItem(index) {
    this.items.splice(index, 1);
  }

  getItems() {
    return this.items;
  }

  getName() {
    return this.name;
  }
}

//toDoItem is a class
class toDoItem {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  set title(value) {
    if (value.length > 30) {
      alert("Title is too long");
      return;
    }
    this._title = value;
  }

  set description(value) {
    if (value.length > 400) {
      alert("Description is too long");
      return;
    }
    this._description = value;
  }

  set dueDate(value) {
    let year = value.split("-")[0];
    let month = value.split("-")[1];
    let day = value.split("-")[2];

    if (month == undefined || day == undefined || year == undefined) {
      this._dueDate = "None";
    } else {
      this._dueDate = `${month}/${day}/${year}`;
    }
  }

  set priority(value) {
    this._priority = value;
  }

  getTitle() {
    return this._title;
  }

  getDescription() {
    return this._description;
  }

  getDueDate() {
    return this._dueDate;
  }

  getPriority() {
    return this._priority;
  }
}

export { toDoList, toDoItem };
