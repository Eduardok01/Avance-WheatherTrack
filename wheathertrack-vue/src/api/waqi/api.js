export async function getAirQuality(city) {
  const apiKey = process.env.d88ef262773794780e8511cf8bbcdc2347707e30;
  const url = `https://api.waqi.info/feed/${encodeURIComponent(city)}/?token=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al realizar la solicitud a la API de WAQI:', error);
    throw error;
  }
}
