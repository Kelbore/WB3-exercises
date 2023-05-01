function convertFtoc(tempInFahrenheit) {
   let tempInCelsius = 5/9*(tempInFahrenheit-32);
   return tempInCelsius;
}

let tempInFahrenheit = 212;
let tempInCelsius = convertFtoc(tempInFahrenheit);
console.log(`${tempInFahrenheit} degree fahrenheit is equal to ${tempInCelsius} degree celsius`);
