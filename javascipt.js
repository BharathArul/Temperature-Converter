function convertToCelsius() {
    let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    if (!isNaN(fahrenheit)) {
        let celsius = (fahrenheit - 32) * (5/9);
        document.getElementById("celsius").value = celsius.toFixed(2);
    } else {
        alert("Please enter a valid Fahrenheit temperature.");
    }
}

function convertToFahrenheit() {
    let celsius = parseFloat(document.getElementById("celsius").value);
    if (!isNaN(celsius)) {
        let fahrenheit = (celsius * (9/5)) + 32;
        document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    } else {
        alert("Please enter a valid Celsius temperature.");
    }
}

function convertToKelvin() {
    let celsius = parseFloat(document.getElementById("celsius").value);
    if (!isNaN(celsius)) {
        let kelvin = celsius + 273.15;
        document.getElementById("kelvin").value = kelvin.toFixed(2);
    } else {
        alert("Please enter a valid Celsius temperature.");
    }
}