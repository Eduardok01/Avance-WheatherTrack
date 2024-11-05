app.get('/combined-data', async (req, res) => {
    try {
      const [waqiData, openWeatherData] = await Promise.all([
        axios.get(`https://api.waqi.info/feed/${city}/?token=YOUR_TOKEN`),
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`)
      ]);
  
      res.json({
        waqi: waqiData.data,
        weather: openWeatherData.data
      });
    } catch (error) {
      res.status(500).send('Error al obtener los datos');
    }
});