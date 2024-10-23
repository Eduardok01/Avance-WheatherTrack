const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const app = express();

app.get('/scrape-waqi', async (req, res) => {
  try {
    const { data } = await axios.get('https://waqi.info');
    const $ = cheerio.load(data);
    let airQuality = [];
    $('selector').each((i, el) => {
      airQuality.push($(el).text());
    });
    res.json({ airQuality });
  } catch (error) {
    res.status(500).send('Error al hacer scraping');
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
