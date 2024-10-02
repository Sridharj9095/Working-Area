var inputTitle = document.getElementById("title");
var inputContent = document.getElementById("content");
function saveFile() {
  const title = inputTitle.value;
  const content = inputContent.value;

  if (title == "" && content == "") return;

  const divElement = document.createElement("div");
  const titleElement = document.createElement("h3");
  const para = document.createElement("p");
  const editElement = document.createElement("button");
  const deleteElement = document.createElement("button");

  titleElement.innerText = title;
  para.innerText = content;
  editElement.innerText = "Edit";
  deleteElement.innerText = "Delete";

  document.getElementById("show").appendChild(divElement);

  divElement.appendChild(titleElement);
  divElement.appendChild(para);
  divElement.appendChild(editElement);
  divElement.appendChild(deleteElement);

  deleteElement.addEventListener("click", deleteValue);
  editElement.addEventListener("click", setValue);

  inputTitle.addEventListener("change", () => {
    const changeButton = document.getElementById("save");
    changeButton.innerText = "Update";
  });

  function deleteValue(event) {
    event.target.parentElement.remove();
  }
  function setValue(event) {
    inputTitle.value = title;
    inputContent.value = content;
  }
  let clearInput = document.querySelectorAll("input");
  clearInput.forEach((reSet) => (reSet.value = ""));
}
