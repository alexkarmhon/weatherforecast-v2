const API_KEY = '531234909003fb2cf97fea2704db1ea5';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const searchForm = document.querySelector('#search-form');
const weatherCard = document.querySelector('#weather');
const errorMsg = document.querySelector('#error');

errorMsg.classList.add('is-hidden');



async function getWeather(e) {
  e.preventDefault();

  const city = e.target.elements.cityname.value;
  const resp = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);

  if (!resp.ok || !city) {
    errorMsg.classList.remove('is-hidden');
    setTimeout(() => {
      errorMsg.classList.add('is-hidden');  
    }, 3000);
    return;
  };

  const data = await resp.json()
  console.log(resp);

  document.querySelector('#weather__temp').innerHTML = Math.round(data.main.temp) + '&#8451';
  document.querySelector('#weather__city').innerHTML = data.name;
  document.querySelector('#humidity').innerHTML = data.main.humidity + '%';
  document.querySelector('#wind-speed').innerHTML = data.wind.speed + 'km/h';
  document.querySelector('#weather-icon-path').attributes.href.textContent = `/weather-icons.2c0c02e3.svg#${data.weather[0].main}`

  weatherCard.classList.remove('is-hidden');
  searchForm.reset();
}

searchForm.addEventListener('submit', getWeather)

// /weather-icons.2c0c02e3.svg#cloud-snowflakes
// /weather-icons.2c0c02e3.svg#Clouds