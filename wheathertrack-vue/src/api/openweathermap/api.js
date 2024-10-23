import axios from 'axios';

const API_KEY = 'process.env.5cc5ea727bacf0116e07f13bf3ab5ba6';

async function getWeather(city) {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  const response = await axios.get(url);
  
  return {
    temperature: response.data.main.temp,
    weather: response.data.weather[0].description
  };
}