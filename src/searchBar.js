export let arr = []; // eslint-disable-line import/no-mutable-exports

export let cities; // eslint-disable-line import/no-mutable-exports

export const cityList = document.getElementById('city-list');
export const citySearch = document.getElementById('city');

export async function loadCities() {
  const resp = await fetch('./JSON/city.list.json');
  cities = await resp.json();
  document.querySelector('.spinner').classList.add('hide');
  citySearch.classList.remove('hide');
}

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

export function searchCity(query) {
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
