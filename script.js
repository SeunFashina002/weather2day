// DIV ID's I need access to 👇
let cityName = document.getElementById("city-name");
let weather = document.getElementById("weather-type");
let temp = document.getElementById("temp");
let minTemp = document.getElementById("min-temp");
let maxTemp = document.getElementById("max-temp");

let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

const getWeatherData = (city) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};

const searchCity = async () => {
  const city = document.getElementById("city-input").value;
  let data = await getWeatherData(city);
  showWeatherData(data, city);
};

searchCity();

const showWeatherData = (weatherData, city) => {
  try {
    cityName.innerText = city.toUpperCase();
    weather.innerText = weatherData.weather[0].main;
    temp.innerText = weatherData.main.temp;
    minTemp.innerText = weatherData.main.temp_min;
    maxTemp.innerText = weatherData.main.temp_max;
  } catch (error) {
    console.log(error);
  }
};
