function convertTempRange() {
    let start = Number(prompt("Enter the start number"));
    let stop = Number(prompt("Enter the stop number"));
    let letter = prompt("Menu: 1. Celsius - 2. Fahrenheit");

    for (let i = start; i <= stop; i++) {
        if (letter === "1") {
            let celsius = (i - 32) * 5/9; 
            document.getElementById("equals").innerHTML += `<p>${i}°F is ${celsius.toFixed(2)}°C</p>`;
        } else if (letter === "2") {
            let fahrenheit = (i * 9/5) + 32;
            document.getElementById("equals").innerHTML += `<p>${i}°C is ${fahrenheit.toFixed(2)}°F</p>`;
        }
    }
}