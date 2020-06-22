import './style.css';
import places from 'places.js';
import changeUnits from './changeUnits';
import {addDeleteEvent, openNotification} from './notificationHandler';

const wKey = 'UJkWsapTKh6XOfJS2Ru41FaJxw91Rs6Q';
const appID = 'plJANF80UWQC';
const appKey = '1d63e8697da40ad9323a23250c18de76';
const query = (lat, lon, apiKey, unit) => `https://api.climacell.co/v3/weather/realtime?apikey=${apiKey}&lat=${lat}&lon=${lon}&unit_system=${unit}&fields=temp,feels_like,precipitation,wind_speed,visibility,weather_code`;
const city = document.querySelector('#city-name');
let lat;
let long;

document.getElementById('units-toggler').addEventListener('change', changeUnits);
addDeleteEvent();

const placesAutocomplete = places({
  appId: appID,
  apiKey: appKey,
  container: document.querySelector('#city'),
});

placesAutocomplete.on('change', (e) => {
  city.textContent = e.suggestion.value;
  lat = e.suggestion.latlng.lat;
  long = e.suggestion.latlng.lng;
  let units = 'si';
  if (!document.getElementById('units-toggler').checked) {
    units = 'us';
  }

  fetch(query(lat, long, wKey, units), { mode: 'cors' })
    .then((response) => response.json())
    .catch(error => openNotification("The server has problems, please try again later", "error"))
    .then((response) => {
      console.log(response)
      document.getElementById('weather-icon').classList = response.weather_code.value;
      document.getElementById('date').textContent = new Date(response.observation_time.value).toDateString();
      document.getElementById('weather-code').textContent = response.weather_code.value.replace('_', ' ');
      document.getElementById('temperature').textContent = response.temp.value;
      document.getElementById('real-feel').textContent = response.feels_like.value;
      document.getElementById('precipitation').textContent = response.precipitation.value;
      document.getElementById('wind-speed').textContent = response.wind_speed.value;
      document.getElementById('visibility').textContent = response.visibility.value;
    }).catch(error => openNotification("This is taking time, please try again later", "warning"));
});

placesAutocomplete.on('clear', () => {
  city.textContent = 'none';
});
