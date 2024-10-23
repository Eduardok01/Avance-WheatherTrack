const axios = require('axios');
const cheerio = require('cheerio');

async function AirQualityWidget() {
  const response = await axios.get('https://api.waqi.info/feed/${cityName}/?token=${API_KEY}');
  const $ = cheerio.load(response.data);

  const data = [];
  $('.air-quality-item').each((index, element) => {
    const location = $(element).find('.location').text();
    const qualityIndex = $(element).find('.quality-index').text();
    data.push({ location, qualityIndex: parseInt(qualityIndex) });
  });

  return data;
}