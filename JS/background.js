const madeinfo = document.querySelector("#madeinfo");

const IMG_NUMBER = 4;

/* 이미지를 가져오는 함수 */
function paintImage(imgNumber) {
  madeinfo.style.backgroundImage = "url(" + `../img/${imgNumber}.gif` + ")";
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();

  /* 이미지(갯수) 함수와 randeomNumber변수(랜덤숫자생성함수)를 인자로 설정 */
  paintImage(randomNumber);
}

init();
