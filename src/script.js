let now = new Date();
let date = document.querySelector("#date");
let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
date.innerHTML = ` Last Updated:${day} 
${hours}: ${minutes} `;

function displayTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidity.innerHTML = `Humidity:${response.data.main.humidity}%`;
  wind.innerHTML = `Wind:${Math.round(response.data.wind.speed)} km/h`;
}

  
  //   document.querySelector("#temperature-description").innerHTML =

  //   temperatureElement.innerHTML = `${temperature}°C`;

  //   document.querySelector("#city").innerhtml = response.data.name;

  //   let temperature = Math.round(response.data.main.temp);
  //   let h1 = document.querySelector("h1");
  //   h1.innerHTML = `${response.data.name}`;
  //   console.log(temperature);
  //   let temperatureElement = document.querySelector("#temperature");
  //   temperatureElement.innerHTML = `${temperature}°C`;
  //   let humidity = document.querySelector("#humidity");
  //   humidity.innerHTML = `Humidity:${response.data.main.humidity}%`;
  //   document.querySelector("#temperature-description").innerHTML =
  // response.data.weather[0].main;
  //   let wind = document.querySelector("#wind");
  //   wind.innerHTML = `Wind:${response.data.wind.speed} km/h`;


let apiKey = "2672779dd04931dc0259289fbe9db665";

let city = "paris";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
