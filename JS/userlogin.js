const logininput = document.querySelector("#inputname");
const loginform = document.querySelector("#loginform");
const loginname = document.querySelector("#username");

const loginbtn = document.querySelector("#loginbtn");

const USERNAME_KEY = "username";


function hidden()
{
    const clickClass = "hidden";
    loginform.classList.toggle(clickClass); // 클래스가 존재하면 제거, 존재하지 않으면 추가
    loginbtn.classList.toggle(clickClass); // 클래스가 존재하면 제거, 존재하지 않으면 추가
}

function usersave()
{
    const username = logininput.value;
    logininput.value = "";
    loginname.innerText =`${username}님`;
    localStorage.setItem(USERNAME_KEY, username);  
}

function onLoginsubmit(event) {
    event.preventDefault();
    hidden();
    usersave();
}


function onLoginclick()
{
    hidden();
    usersave();
}


const savedusername = localStorage.getItem(USERNAME_KEY);

if(savedusername === null)
{
    loginform.addEventListener("submit", onLoginsubmit);
    loginbtn.addEventListener("click", onLoginclick);
}

else
{
    hidden();
    loginname.innerText = `${savedusername}님`;
}






