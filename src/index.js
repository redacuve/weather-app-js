const wKey = 'UJkWsapTKh6XOfJS2Ru41FaJxw91Rs6Q';
const appID = 'plJANF80UWQC';
const appKey = '1d63e8697da40ad9323a23250c18de76';
import places from 'places.js';

(function () {
  const placesAutocomplete = places({
    appId: appID,
    apiKey: appKey,
    container: document.querySelector('#city'),
  });

  const city = document.querySelector('#city-value');

  placesAutocomplete.on('change', (e) => {
    city.textContent = e.suggestion.value;
    console.log(e);
  });

  placesAutocomplete.on('clear', () => {
    city.textContent = 'none';
  });
}());
