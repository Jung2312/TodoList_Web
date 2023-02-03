import { API_KEY } from "./API_KEY.js";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
  fetch(url) // call url
    .then((response) => response.json())
    .then((data) => {
      const weatherIcon = data.weather[0].icon;
      const weatherIconAdrs = `../img/${weatherIcon}.png`;
      const weatherIconImg = document.querySelector("#weather-img");
      const weather = document.querySelector("#weather-temp");
      weather.innerText = `${data.name}, ${data.main.temp}°C`;
      weatherIconImg.src = weatherIconAdrs;
    });
}

function onGeoError() {
  alert("날씨를 찾을 수 없습니다.");
}

// PC의 현재 위치 불러옴
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
