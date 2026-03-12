/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos


  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(index) {
    if (index < 0 || index > this.todos.length - 1) return null;
    this.todos.splice(index, 1);
  }

  update(index, updatedTodo) {
    if (index > this.todos.length - 1) return null;
    this.todos[index] = updatedTodo;
  }

  getAll() {
    return this.todos;
  }

  get(index) {
    if (index > this.todos.length - 1) return null;
    return this.todos[index];
  }

  clear() {
    this.todos = [];
  }
}

let obj = new Todo();
obj.add("one");
obj.add("two");
obj.add("three");

obj.update(1, "updated two");

console.log(obj.getAll());
console.log(obj.get(1));

module.exports = Todo;
