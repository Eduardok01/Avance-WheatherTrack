import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const fetchAirQualityData = async () => {
  const response = await api.get('/airQualityData');
  return response.data;
};