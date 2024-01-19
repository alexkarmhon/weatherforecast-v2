const API_KEY = '531234909003fb2cf97fea2704db1ea5';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=531234909003fb2cf97fea2704db1ea5';

async function getWeather() {
  const resp = await fetch(BASE_URL);
  const data = await resp.json()
  console.log(data);
}

getWeather()