const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
let toDos = [];

const TODOS_KEY = "toDos";

function savingToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function todoDelete(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  savingToDos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", todoDelete);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newTodo,
    id: Date.now() // 각각의 li를 구별
  }
  toDos.push(newToDoObj);
  paintTodo(newToDoObj); // id를 사용하기 위해 객체를 전달
  savingToDos();
}

toDoForm.addEventListener("submit", handleSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}