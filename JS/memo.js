import menuRoad from "./menuload.js";
const memohome = document.querySelector("#memohome");
const memoForm = document.querySelector("#memo_form");
const memoInput = memoForm.querySelector("input");
const memoarea = document.querySelector("#memoarea");
const savebtn = document.querySelector("#savebtn");
const memobtn = document.querySelector("#memobtn");

const memoTitle = "memoTitle";
const memoText = "memoText";

function onclickmemo() {
  const clickClass = "hidden";
  const todohome = "todohome";
  const bookhome = "bookhome";
  menuRoad(clickClass, todohome, bookhome);
  memohome.classList.remove(clickClass); // 클래스가 존재하면 제거, 존재하지 않으면 추가
  // 다른 메뉴 클릭시 클래스 추가
}

memobtn.addEventListener("click", onclickmemo);

function memoTitleSave(event) {
  event.preventDefault();
  const title = memoInput.value;
  localStorage.setItem(memoTitle, title);
  memoTextSave();
}

function memoTextSave() {
  const text = memoarea.value;
  localStorage.setItem(memoText, text);
}

memoForm.addEventListener("keypress", memoTitleSave);
savebtn.addEventListener("click", memoTitleSave);

const savedTitle = localStorage.getItem(memoTitle);
const savedText = localStorage.getItem(memoText);

if (savedTitle !== null) {
  memoInput.value = savedTitle;
}

if (savedText !== null) {
  memoarea.value = savedText;
}
