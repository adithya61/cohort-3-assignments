let selectField = document.querySelector("#selectField");
let fieldLabel = document.querySelector("#fieldLabel");
let addButton = document.querySelector("#addButton");

let preview = document.querySelector("#preview");

addButton.addEventListener("click", () => {
  let fieldType = selectField.value;
  let label = fieldLabel.value;

  fieldLabel.value = "";

  let contanerElement = document.createElement("div");

  let labelElement = document.createElement("label");
  labelElement.textContent = label;

  let inputElement = document.createElement("input");
  inputElement.type = fieldType;

  contanerElement.appendChild(labelElement);
  contanerElement.appendChild(inputElement);

  preview.appendChild(contanerElement);
});
