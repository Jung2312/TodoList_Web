const menubtn = document.querySelector("#menubtn");

function onmenuClick() {
  const menu = document.querySelector("#menu");
  const clickClass = "hidden";
  menu.classList.toggle(clickClass); // 클래스가 존재하면 제거, 존재하지 않으면 추가
}

menubtn.addEventListener("click", onmenuClick);
