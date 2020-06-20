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
      
        // temp,feels_like,precipitation,wind_speed,visibility,weather_code
        //response.feels_like.value
        //response.observation_time.value
        //response.temp.value
        document.getElementById('weather-icon').classList = response.weather_code.value;

      });
  });

  placesAutocomplete.on("clear", () => {
    city.textContent = "none";
  });
})();
