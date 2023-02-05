import { book_KEY } from "./API_KEY.js";
import menuRoad from "./menuload.js";

const bookhome = document.querySelector("#bookhome");
const bookForm = document.querySelector("#book_form");
const bookInput = bookForm.querySelector("input");
const bookImg = document.querySelector("#book-img");
const searchbtn = document.querySelector("#searchbtn");
const bookbtn = document.querySelector("#bookbtn");
const booktitle = document.querySelector("#booktitle");
const bookauthor = document.querySelector("#bookauthor");

function onclickmemo() {
  const clickClass = "hidden";
  const todohome = "todohome";
  const memohome = "memohome";
  menuRoad(clickClass, todohome, memohome);
  bookhome.classList.remove(clickClass); // 클래스가 존재하면 제거, 존재하지 않으면 추가
  // 다른 메뉴 클릭시 클래스 추가
}

bookbtn.addEventListener("click", onclickmemo);

function onbookSearch(event) {
  event.preventDefault();
  const Apiurl = `https://dapi.kakao.com/v3/search/book?target=title`;
  const bookName = bookInput.value;

  $.ajax({
    //코드 상단 : 요청에 대한 정보
    method: "GET", // 전송 방식
    url: Apiurl, // 전송 URL
    data: { query: `${bookName}` }, //전송 정보 JSON 형식
    headers: { Authorization: `KakaoAK ${book_KEY}` },
  }).done(function (msg) {
    //요청에 대한 응답이 올 때 처리하는 코드
    const title = msg.documents[0].title;
    const img = msg.documents[0].thumbnail;
    const authors = msg.documents[0].authors;

    booktitle.innerText = title;
    bookauthor.innerText = authors;
    bookImg.src = img;
    console.log(title);
  });
}

bookForm.addEventListener("submit", onbookSearch);
searchbtn.addEventListener("click", onbookSearch);
