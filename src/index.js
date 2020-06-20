const wKey = "UJkWsapTKh6XOfJS2Ru41FaJxw91Rs6Q";
const appID = "plJANF80UWQC";
const appKey = "1d63e8697da40ad9323a23250c18de76";
const latitude = 19.5408;
const longitude = -96.9146;
// ["temp", "feels_like", "dewpoint", "humidity", wind_speed, sunrise, sunset, weather_code]
import places from "places.js";
const query = (lat, lon, apiKey) => {
  return `https://api.climacell.co/v3/weather/realtime?apikey=${apiKey}&lat=${lat}&lon=${lon}&unit_system=si&fields=temp,feels_like`;
};
let lat;
let long;

(function () {
  const placesAutocomplete = places({
    appId: appID,
    apiKey: appKey,
    container: document.querySelector("#city"),
  });

  const city = document.querySelector("#city-value");

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
        console.log(response);
      });
  });

  placesAutocomplete.on("clear", () => {
    city.textContent = "none";
  });
})();
