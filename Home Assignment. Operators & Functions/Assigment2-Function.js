//Task 1

function convertCelsiusToKelvin(tempCelsius){
    let toKelvin = tempCelsius + 273.15;

    return toKelvin;
}

function convertFahrenheitToKelvin(tempFahrenheit){
    let toKelvin = (5/9) * (tempFahrenheit + 459.67);

    return toKelvin;
}

let celsius = 37;
let fahrenheit = 98.6;

console.log(`${celsius} Celsius to Kelvin ${convertCelsiusToKelvin(celsius)}`);
console.log(`${fahrenheit} Fahrenheit to Kelvin ${convertFahrenheitToKelvin(fahrenheit)}`);


//Task 2
function computeTip(totalBill){
    return totalBill * 0.10;
}

console.log(`The tip is ${computeTip(3500)}`);