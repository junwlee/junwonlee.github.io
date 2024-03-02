const API_KEYS = "5cf811310b6de524701d11915b89e45e";

const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

const weatherID = document.querySelector("#weather");

function success(pos) {
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEYS}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText = data.name;
    }
    );
}

function error() {
    alert("I can't find you.");
}

navigator.geolocation.getCurrentPosition(success, error);