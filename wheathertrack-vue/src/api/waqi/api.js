import axios from 'axios';

const API_KEY = 'process.env.d88ef262773794780e8511cf8bbcdc2347707e30';
const BASE_URL = 'https://api.waqi.info/feed';

export async function getAirQuality(city) {
  try {
    const response = await axios.get(`${BASE_URL}/${city}/`, {
      params: {
        token: API_KEY
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching air quality data from WAQI:', error);
    throw error;
  }
}
