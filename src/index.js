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

function celsiusToFahrenheit(temp){
  return ((temp * 9/5) + 32).toFixed(2)
}

function fahrenheitToCelsius(temp){
  return ((temp - 32) * 5/9).toFixed(2)
}

function mmHrToinHr(speed){
  return (speed/25.4).toFixed(4);
}

function inHrTommHr(speed){
  return (speed * 25.4).toFixed(2);
}

function msTomph(speed){
  return (speed * 2.237).toFixed(2);
}

function mphToms(speed){
  return (speed / 2.237).toFixed(2);
}

function kmTomi(distance){
  return (distance/1.609).toFixed(2);
}

function miTokm(distance){
  return (distance*1.609).toFixed(1);
}

function changeUnits() {
  let temp = document.getElementById('temperature').textContent;
  let realFeel = document.getElementById('real-feel').textContent;
  let precipitation = document.getElementById('precipitation').textContent;
  let windSpeed = document.getElementById('wind-speed').textContent;
  let visibility = document.getElementById('visibility').textContent;

  const tempUnit = document.querySelectorAll(".t-scale");

  if (temp !== "--" && realFeel !== "--"){
    if (document.getElementById('units-toggler').checked){
      console.log("convertir a sistema internaciona")
      temp = fahrenheitToCelsius(temp);
      realFeel = fahrenheitToCelsius(realFeel);
      precipitation = inHrTommHr(precipitation);
      windSpeed = mphToms(windSpeed);
      visibility = miTokm(visibility);
    } else {
      console.log("convertir a us")
      temp = celsiusToFahrenheit(temp);
      realFeel = celsiusToFahrenheit(realFeel);
      precipitation = mmHrToinHr(precipitation);
      windSpeed = msTomph(windSpeed);
      visibility = kmTomi(visibility);
      console.log(precipitation);
    }
    document.getElementById('temperature').textContent = temp;
    document.getElementById('real-feel').textContent = realFeel;
    document.getElementById('precipitation').textContent = precipitation;
    document.getElementById('wind-speed').textContent = windSpeed;
    document.getElementById('visibility').textContent = visibility;
  }
  

    console.log(temp)
    console.log(realFeel)
    if (document.getElementById('units-toggler').checked){
      tempUnit.forEach(elem => elem.textContent = "°C");
      document.querySelector('.p-scale').textContent = "mm/hr";
      document.querySelector('.w-scale').textContent = "m/s";
      document.querySelector('.v-scale').textContent = "km";
    } else {
      tempUnit.forEach(elem => elem.textContent = "°F");
      document.querySelector('.p-scale').textContent = "in/hr";
      document.querySelector('.w-scale').textContent = "mph";
      document.querySelector('.v-scale').textContent = "mi";
    }
  
}

document.getElementById('units-toggler').addEventListener("change", changeUnits)


const query = (lat, lon, apiKey, unit) => {
  return `https://api.climacell.co/v3/weather/realtime?apikey=${apiKey}&lat=${lat}&lon=${lon}&unit_system=${unit}&fields=temp,feels_like,precipitation,wind_speed,visibility,weather_code`;
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
    let units = "si"
    if (!document.getElementById('units-toggler').checked){
      units = "us"
    }

    fetch(query(lat, long, wKey , units), { mode: "cors" })
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
