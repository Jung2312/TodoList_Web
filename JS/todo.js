const todohome = document.querySelector("#todohome");
const todoForm = document.querySelector("#todo_form");
const todoList = document.querySelector("#todo_list");
const todoInput = todoForm.querySelector("input");
const todoplus = document.querySelector("#todoplus");
const todobtn = document.querySelector("#todobtn");

let todo = [];

let check = [];

function onclicktodo() {
  const clickClass = "hidden";
  todohome.classList.remove(clickClass); // 클래스가 존재하면 제거, 존재하지 않으면 추가
  // 다른 메뉴 클릭시 클래스 추가
}

todobtn.addEventListener("click", onclicktodo);

const TODOLIST = "TODOLIST";

function saveToDo() {
  localStorage.setItem(TODOLIST, JSON.stringify(todo));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  todo = todo.filter((todos) => todos.id !== parseInt(li.id)); // filter : 조건에 해당하는 값으로 새로운 배열 생성
  saveToDo();
}

function paintToDo(todoValue) {
  const li = document.createElement("li");
  li.id = todoValue.id; // li 생성 시 id를 줌

  const input = document.createElement("input");
  input.id = "todocheck";
  input.type = "checkbox";

  const span = document.createElement("span"); // 삭제 버튼을 넣어므로 span에 텍스트 추가
  span.innerText = todoValue.text; // 오브젝트의 텍스트만 추출

  const button = document.createElement("button");
  button.addEventListener("click", deleteToDo);
  button.innerText = "🗑️";
  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const todoValue = todoInput.value;
  todoInput.value = "";

  const newToDoObj = {
    text: todoValue,
    id: Date.now(),
  };

  todo.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDo();
}

todoForm.addEventListener("submit", handleToDoSubmit);
todoplus.addEventListener("click", handleToDoSubmit);

const savedToDo = localStorage.getItem(TODOLIST);

if (savedToDo !== null) {
  const parseToDo = JSON.parse(savedToDo);
  todo = parseToDo; // 배열 복사
  parseToDo.forEach(paintToDo); // js는 item을 자동으로 전달하므로 기존 메소드 사용
}
