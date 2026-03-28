// add Todo
function addCard(parent, beforeEle, head, desc) {
  let todo = document.createElement("div");
  let heading = document.createElement("div");
  let description = document.createElement("div");

  heading.textContent = head;
  description.textContent = desc;

  heading.classList.add("head");
  description.classList.add("desc");
  todo.classList.add("todo");
  todo.appendChild(heading);
  todo.appendChild(description);
  todo.id = crypto.randomUUID();
  todo.draggable = "true";
  todo.addEventListener("dragstart", (event) => {
    dragStartHandler(event);
  });

  parent.insertBefore(todo, beforeEle);
}

// Create input field and then add.
function createInput(parentEle, beforeEle) {
  let input1 = document.createElement("input");
  let input2 = document.createElement("input");
  let addBtn = document.createElement("div");

  addBtn.classList.add("button");

  addBtn.textContent = "Add";
  addBtn.style.margin = "10px";

  input1.style.margin = "10px";
  input2.style.margin = "10px";

  let inputDiv = document.createElement("div");
  inputDiv.id = "inputDiv";

  inputDiv.appendChild(input1);
  inputDiv.appendChild(input2);
  inputDiv.appendChild(addBtn);

  parentEle.insertBefore(inputDiv, beforeEle);

  addBtn.addEventListener("click", () => {
    let todoHead = input1.value;
    let todoDesc = input2.value;

    inputDiv.textContent = "";
    inputDiv.remove();
    addCard(parentEle, beforeEle, todoHead, todoDesc);
  });
}

// T_odo section

let addTodo = document.querySelector("#addTodo");

addTodo.addEventListener("click", () => {
  let parentEle = document.querySelector("#todoSection");
  let beforeEle = document.querySelector("#addTodo");

  createInput(parentEle, beforeEle);
});

// progress section

let addProgress = document.querySelector("#addProgress");
addProgress.addEventListener("click", () => {
  let parentEle = document.querySelector("#progressSection");
  let beforeEle = document.querySelector("#addProgress");

  createInput(parentEle, beforeEle);
});

// review section

let addReview = document.querySelector("#addReview");

addReview.addEventListener("click", () => {
  let parentEle = document.querySelector("#reviewSection");
  let beforeEle = document.querySelector("#addReview");

  createInput(parentEle, beforeEle);
});

// finished section

let addFinished = document.querySelector("#addFinished");

addFinished.addEventListener("click", () => {
  let parentEle = document.querySelector("#finishedSection");
  let beforeEle = document.querySelector("#addFinished");

  createInput(parentEle, beforeEle);
});

// Drag and drop fnction

function dropHandler(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData("text");
  let n = e.currentTarget.children.length;
  let refEle = e.currentTarget.children[n - 1];
  e.currentTarget.insertBefore(document.getElementById(data), refEle);
}

function dragOverHandler(e) {
  e.preventDefault();
}

function dragStartHandler(e) {
  e.dataTransfer.setData("text", e.currentTarget.id);
}
