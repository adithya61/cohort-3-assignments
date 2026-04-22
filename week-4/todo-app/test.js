const express = require("express");
const app = express();

const todos = [];

app.post("/add/:task", (req, res) => {
  const todo = req.params.task;

  todos.push(todo);

  res.send(todos);
});

app.get("/todos", (req, res) => {
  res.send(todos);
});

app.put("/update/:id/:task", (req, res) => {
  const id = req.params.id;
  const task = req.params.task;
  todos[id] = task;

  res.send(todos);
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  todos.splice(id, 1);
  res.send(todos);
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000);
