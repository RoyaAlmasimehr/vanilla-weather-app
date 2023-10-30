function displayTemperature(response) {
  console.log(response.data.main.temp);
}

let apiKey = "2672779dd04931dc0259289fbe9db665";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&and units =metric`;

axios.get(apiUrl).then(displayTemperature);
