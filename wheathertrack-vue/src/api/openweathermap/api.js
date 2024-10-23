import axios from 'axios';

const API_KEY = 'process.env.5cc5ea727bacf0116e07f13bf3ab5ba6';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/air_pollution';

export async function getAirQuality(lat, lon) {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        lat: lat,
        lon: lon,
        appid: API_KEY
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching air quality data from OpenWeatherMap:', error);
    throw error;
  }
}
