function convertCtoF(tempInCelsius) {
  let tempInFahrenheit = 1.8*tempInCelsius + 32;
  return tempInFahrenheit;
}

let tempInCelsius = 100;
let tempInFahrenheit = convertCtoF(tempInCelsius);
console.log(tempInFahrenheit);