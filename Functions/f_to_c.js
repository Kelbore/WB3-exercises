function convertFtoc(tempInFahrenheit) {
   let tempInCelsius = 5/9*(tempInFahrenheit-32);
   return tempInCelsius;
}

let tempInFahrenheitOne = 212;
let tempInCelsiusOne = convertFtoc(tempInFahrenheitOne);
console.log(`${tempInFahrenheitOne} degree fahrenheit is equal to ${tempInCelsiusOne.toFixed(2)} degree celsius`);

let tempInFahrenheitTwo = 90;
let tempInCelsiusTwo = convertFtoc(tempInFahrenheitTwo);
console.log(`${tempInFahrenheitTwo} degree fahrenheit is equal to ${tempInCelsiusTwo.toFixed(2)} degree celsius`);

let tempInFahrenheitThree = 72;
let tempInCelsiusThree = convertFtoc(tempInFahrenheitThree);
console.log(`${tempInFahrenheitThree} degree fahrenheit is equal to ${tempInCelsiusThree.toFixed(2)} degree celsius`);

let tempInFahrenheitFour = 32;
let tempInCelsiusFour = convertFtoc(tempInFahrenheitFour);
console.log(`${tempInFahrenheitFour} degree fahrenheit is equal to ${tempInCelsiusFour.toFixed(2)} degree celsius`);

let tempInFahrenheitFive = 0;
let tempInCelsiusFive = convertFtoc(tempInFahrenheitFive);
console.log(`${tempInFahrenheitFive} degree fahrenheit is equal to ${tempInCelsiusFive.toFixed(2)} degree celsius`);

let tempInFahrenheitSix = 212;
let tempInCelsiusSix = convertFtoc(tempInFahrenheitSix);
console.log(`${tempInFahrenheitSix} degree fahrenheit is equal to ${tempInCelsiusSix.toFixed(2)} degree celsius`);


