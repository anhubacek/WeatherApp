const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const currentWeatherItemsEl = document.getElementById("current-weather-items");
const timeZone = document.getElementById("time-zone");
const countryEl = document.getElementById("country");
const weatherForecastEl = document.getElementById("weather-forecast");
const currentTempEl = document.getElementById("current-temp");

const days = ["Sunday", "Monday", "Tuesday" , "Wednesday", "Thursday", "Friday", "Saturday"]

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]

setInterval(()=> {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const minutesok = minutes < 10 ? `0${minutes}` : minutes
    const hourIn12HsFormat = hour >= 13 ? hour % 12 : hour;
    const ampm = hour >=12 ? "PM" : "AM";

timeEl.innerHTML = hourIn12HsFormat + ":" + minutesok + " " + `<span id="am-pm">${ampm}</span>`;

dateEl.innerHTML = days[day] + ", " + day + " " + months[month];

}, 1000)