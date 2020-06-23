import {
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  inHrTommHr,
  mmHrToinHr,
  mphToms,
  msTomph,
  kmTomi,
  miTokm,
} from './convertHelper';

function setScales(scale) {
  const tempUnit = document.querySelectorAll('.t-scale');
  const si = (scale === 'si');
  tempUnit.forEach((elem) => {
    elem.textContent = si ? '°C' : '°F';
  });
  document.querySelector('.p-scale').textContent = si ? 'mm/hr' : 'in/hr';
  document.querySelector('.w-scale').textContent = si ? 'm/s' : 'mph';
  document.querySelector('.v-scale').textContent = si ? 'km' : 'mi';
}

export default function changeUnits() {
  const tempNode = document.getElementById('temperature');
  const realFeelNode = document.getElementById('real-feel');
  const precipitationNode = document.getElementById('precipitation');
  const windSpeedNode = document.getElementById('wind-speed');
  const visibilityNode = document.getElementById('visibility');

  let temp = tempNode.textContent;
  let realFeel = realFeelNode.textContent;
  let precipitation = precipitationNode.textContent;
  let windSpeed = windSpeedNode.textContent;
  let visibility = visibilityNode.textContent;

  if (temp !== '--.-' && realFeel !== '--.-') {
    if (document.getElementById('units-toggler').checked) {
      temp = fahrenheitToCelsius(temp);
      realFeel = fahrenheitToCelsius(realFeel);
      precipitation = inHrTommHr(precipitation);
      windSpeed = mphToms(windSpeed);
      visibility = miTokm(visibility);
    } else {
      temp = celsiusToFahrenheit(temp);
      realFeel = celsiusToFahrenheit(realFeel);
      precipitation = mmHrToinHr(precipitation);
      windSpeed = msTomph(windSpeed);
      visibility = kmTomi(visibility);
    }
    tempNode.textContent = temp;
    realFeelNode.textContent = realFeel;
    precipitationNode.textContent = precipitation;
    windSpeedNode.textContent = windSpeed;
    visibilityNode.textContent = visibility;
  }

  if (document.getElementById('units-toggler').checked) {
    setScales('si');
  } else {
    setScales('us');
  }
}