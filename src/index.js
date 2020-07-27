import './style.css';
import changeUnits from './changeUnits';
import { addDeleteEvent, openNotification } from './notificationHandler';

const wKey = 'UJkWsapTKh6XOfJS2Ru41FaJxw91Rs6Q';
const query = (lat, lon, apiKey, unit) => `https://api.climacell.co/v3/weather/realtime?apikey=${apiKey}&lat=${lat}&lon=${lon}&unit_system=${unit}&fields=temp,feels_like,precipitation,wind_speed,visibility,weather_code`;
const city = document.querySelector('#city-name');
let lat;
let long;

const citySearch =  document.getElementById('city');
let cities;
window.onload = async () => {
  const resp = await fetch('./JSON/city.list.json');
  cities = await resp.json();
  document.querySelector('.spinner').classList.add('hide');
  citySearch.classList.remove('hide');
}

document.getElementById('units-toggler').addEventListener('change', changeUnits);
addDeleteEvent();

function searchCity(query) {
  console.log(query);
  console.log(cities);
}
citySearch.addEventListener('input', () => searchCity(citySearch.value));

