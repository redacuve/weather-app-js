import "./style.css"
import places from "places.js";



const wKey = "UJkWsapTKh6XOfJS2Ru41FaJxw91Rs6Q";
const appID = "plJANF80UWQC";
const appKey = "1d63e8697da40ad9323a23250c18de76";

//const cityName =  
let lat;
let long;
const latitude = 19.5408;
const longitude = -96.9146;

const query = (lat, lon, apiKey) => {
  return `https://api.climacell.co/v3/weather/realtime?apikey=${apiKey}&lat=${lat}&lon=${lon}&unit_system=si&fields=temp,feels_like,precipitation,wind_speed,visibility,weather_code`;
};



(function () {
  const placesAutocomplete = places({
    appId: appID,
    apiKey: appKey,
    container: document.querySelector("#city"),
  });

  const city = document.querySelector("#city-name");

  placesAutocomplete.on("change", (e) => {
    city.textContent = e.suggestion.value;

    lat = e.suggestion.latlng.lat;
    long = e.suggestion.latlng.lng;
    console.log(lat, long);
    fetch(query(lat, long, wKey), { mode: "cors" })
      .then((response) => {
        return response.json();
      })
      .then((response) => {


        document.getElementById('weather-icon').classList = response.weather_code.value;
        document.getElementById('date').textContent = new Date(response.observation_time.value).toDateString();
        document.getElementById('weather-code').textContent = response.weather_code.value;
        document.getElementById('temperature').textContent = response.temp.value;
        document.getElementById('real-feel').textContent = response.feels_like.value;
        document.getElementById('precipitation').textContent = response.precipitation.value;
        document.getElementById('wind-speed').textContent = response.wind_speed.value;
        document.getElementById('visibility').textContent = response.visibility.value;

      });
  });

  placesAutocomplete.on("clear", () => {
    city.textContent = "none";
  });
})();
