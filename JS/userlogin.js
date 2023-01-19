const logininput = document.querySelector("#inputname");
const loginform = document.querySelector("#loginform");
const loginname = document.querySelector("#username");


const USERNAME_KEY = "username";

function usersave()
{
    const username = logininput.value;
    logininput.value = "";
    loginname.innerText =`${username}님`;
    localStorage.setItem(USERNAME_KEY, username);  
}

function onLoginsubmit(event) {
    event.preventDefault();
    usersave();
}


const loginbtn = document.querySelector("#loginbtn");

function onLoginclick()
{
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
    loginname.innerText = `${savedusername}님`;
}





