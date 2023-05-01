function convertCtoF(tempInCelsius) {
  let tempInFahrenheit = 1.8*tempInCelsius + 32;
  return tempInFahrenheit;
}

let tempInCelsiusOne = 100;
let tempInFahrenheitOne = convertCtoF(tempInCelsiusOne);
console.log(`${tempInCelsiusOne} degree celsius is equal to ${tempInFahrenheitOne.toFixed(2)} degree fahrenheit`);

let tempInCelsiusTwo = 45;
let tempInFahrenheitTwo = convertCtoF(tempInCelsiusTwo);
console.log(`${tempInCelsiusTwo} degree celsius is equal to ${tempInFahrenheitTwo.toFixed(2)} degree fahrenheit`);

let tempInCelsiusThree = 19;
let tempInFahrenheitThree = convertCtoF(tempInCelsiusThree);
console.log(`${tempInCelsiusThree} degree celsius is equal to ${tempInFahrenheitThree.toFixed(2)} degree fahrenheit`);

let tempInCelsiusFour = 0;
let tempInFahrenheitFour = convertCtoF(tempInCelsiusFour);
console.log(`${tempInCelsiusFour} degree celsius is equal to ${tempInFahrenheitFour.toFixed(2)} degree fahrenheit`);

let tempInCelsiusFive = -7;
let tempInFahrenheitFive = convertCtoF(tempInCelsiusFive);
console.log(`${tempInCelsiusFive} degree celsius is equal to ${tempInFahrenheitFive.toFixed(2)} degree fahrenheit`);

let tempInCelsiusSix = -40;
let tempInFahrenheitSix = convertCtoF(tempInCelsiusSix);
console.log(`${tempInCelsiusSix} degree celsius is equal to ${tempInFahrenheitSix.toFixed(2)} degree fahrenheit`);