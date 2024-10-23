const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeAirQualityData() {
  const response = await axios.get('URL_DEL_SITIO_WEB');
  const $ = cheerio.load(response.data);

  const data = [];
  $('.air-quality-item').each((index, element) => {
    const location = $(element).find('.location').text();
    const qualityIndex = $(element).find('.quality-index').text();
    data.push({ location, qualityIndex: parseInt(qualityIndex) });
  });

  return data;
}