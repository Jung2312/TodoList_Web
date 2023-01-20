const clock = document.querySelector("#date");

function dayformat(day)
{
    switch(day)
    {
        case 0:
            return "SUN";
        case 1:
            return "MON";
        case 2:
            return "THU";
        case 3:
            return "WED";
        case 4:
            return "THR";
        case 5:
            return "FRI";
        case 6:
            return "SAT";
    }
}

function getClock()
{
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = String(date.getFullYear()).padStart(4, "0");
    const today = date.getDay();

    clock.innerText = `${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${dayformat(today)}`;
}


getClock(); // 실행하자마자 미리 출력
setInterval(getClock, 1000); // 1초마다 getClock 함수를 실행한다.