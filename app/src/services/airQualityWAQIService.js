import axios from 'axios';

const API_KEY = 'process.env.d88ef262773794780e8511cf8bbcdc2347707e30';

export const getAirQualityByCity = async (cityName) => {
  try {
    const response = await axios.get(`https://api.waqi.info/feed/${cityName}/?token=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching air quality data:', error);
    alert('No se pudo conectar con la API. Por favor, intenta más tarde.');
  }  
};
