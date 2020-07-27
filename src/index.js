import './style.css';
import changeUnits from './changeUnits';
import { addDeleteEvent, openNotification } from './notificationHandler';
import {
  arr, loadCities, searchCity, cityList, citySearch,
} from './searchBar';

const wKey = 'UJkWsapTKh6XOfJS2Ru41FaJxw91Rs6Q';
const query = (lat, lon, apiKey, unit) => `https://api.climacell.co/v3/weather/realtime?apikey=${apiKey}&lat=${lat}&lon=${lon}&unit_system=${unit}&fields=temp,feels_like,precipitation,wind_speed,visibility,weather_code`;
const city = document.querySelector('#city-name');
let lat;
let long;

window.onload = loadCities;

document
  .getElementById('units-toggler')
  .addEventListener('change', changeUnits);

document.getElementById('city-list').addEventListener('click', (e) => {
  cityList.innerHTML = '';
  const indx = e.target.closest('div').id.match(/\d+/)[0];
  city.textContent = arr[indx].name;
  lat = arr[indx].coord.lat;
  long = arr[indx].coord.lon;
  let units = 'si';
  if (!document.getElementById('units-toggler').checked) {
    units = 'us';
  }

  fetch(query(lat, long, wKey, units), { mode: 'cors' })
    .then((response) => response.json())
    .catch((error) => openNotification(
      `The server has problems, please try again later ${error.toString()}`,
      'error',
    ))
    .then((response) => {
      document.getElementById('weather-icon').classList = response.weather_code.value;
      document.querySelector(
        'body',
      ).classList = `${response.weather_code.value}_weather`;
      document.getElementById('date').textContent = new Date(
        response.observation_time.value,
      ).toDateString();
      document.getElementById(
        'weather-code',
      ).textContent = response.weather_code.value.replace('_', ' ');
      document.getElementById('temperature').textContent = response.temp.value;
      document.getElementById('real-feel').textContent = response.feels_like.value;
      document.getElementById('precipitation').textContent = response.precipitation.value;
      document.getElementById('wind-speed').textContent = response.wind_speed.value;
      document.getElementById('visibility').textContent = response.visibility.value;
    })
    .catch((error) => openNotification(
      `This is taking time, please try again later, error: ${error.toString()}`,
      'warning',
    ));
});

addDeleteEvent();

citySearch.addEventListener('input', () => searchCity(citySearch.value));
