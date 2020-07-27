import './style.css';
import changeUnits from './changeUnits';
import { addDeleteEvent, openNotification } from './notificationHandler';

const wKey = 'UJkWsapTKh6XOfJS2Ru41FaJxw91Rs6Q';
const query = (lat, lon, apiKey, unit) => `https://api.climacell.co/v3/weather/realtime?apikey=${apiKey}&lat=${lat}&lon=${lon}&unit_system=${unit}&fields=temp,feels_like,precipitation,wind_speed,visibility,weather_code`;
const city = document.querySelector('#city-name');
let lat;
let long;

const citySearch = document.getElementById('city');
const cityList = document.getElementById('city-list');
let arr = [];

let cities;
window.onload = async () => {
  const resp = await fetch('./JSON/city.list.json');
  cities = await resp.json();
  document.querySelector('.spinner').classList.add('hide');
  citySearch.classList.remove('hide');
};

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

function domResults(resultAr) {
  if (resultAr.length > 0 && resultAr.length > 7) {
    arr = resultAr.slice(0, 7);
  } else if (resultAr.length > 0) {
    arr = [...resultAr];
  } else {
    arr = [];
  }
  const innerCities = arr.map(
    (city, index) => `
    <div class="city" id="city-${index}">
      <h4>${city.name}</h4>
      <small>Lat: ${city.coord.lat} / Lon: ${city.coord.lon} / Country: ${city.country}</small>
      <hr>
    </div>
    `,
  );

  cityList.innerHTML = innerCities.join('');
}

function searchCity(query) {
  let result = [];
  if (query.length > 0) {
    result = cities.cities.filter((city) => {
      const regex = new RegExp(`^${query}`, 'gi');
      return city.name.match(regex);
    });
  }
  if (query.length > 2) {
    result.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }
  domResults(result);
}

citySearch.addEventListener('input', () => searchCity(citySearch.value));
