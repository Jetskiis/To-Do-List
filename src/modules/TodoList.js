class toDoList {
  constructor() {
    this.items = [];
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

  getItems() {
    return this.items;
  }
}

class toDoItem {
  constructor(name, description, dueDate, priority) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  set name(value) {
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
    const month = value.split("/")[0];
    const day = value.split("/")[1];
    const year = value.split("/")[2];
    this._dueDate = `${month}/${day}/${year}`;
  }

  set priority(value) {
    if (isNaN(value)) {
      alert("Not a valid priority");
      return;
    }
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
