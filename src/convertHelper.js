export function celsiusToFahrenheit(temp) {
  return ((temp * 9) / 5 + 32).toFixed(2);
}

export function fahrenheitToCelsius(temp) {
  return (((temp - 32) * 5) / 9).toFixed(2);
}

export function mmHrToinHr(speed) {
  return (speed / 25.4).toFixed(4);
}

export function inHrTommHr(speed) {
  return (speed * 25.4).toFixed(2);
}

export function msTomph(speed) {
  return (speed * 2.237).toFixed(2);
}

export function mphToms(speed) {
  return (speed / 2.237).toFixed(2);
}

export function kmTomi(distance) {
  return (distance / 1.609).toFixed(2);
}

export function miTokm(distance) {
  return (distance * 1.609).toFixed(1);
}
