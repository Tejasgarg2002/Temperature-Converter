function convertTemperature() {
  const temperatureInput = parseFloat(
    document.getElementById("temperature").value
  );
  const unit = document.getElementById("unit").value;

  if (isNaN(temperatureInput)) {
    alert("Please enter a valid number for temperature.");
    return;
  }

  let result;
  switch (unit) {
    case "celsius":
      result = {
        celsius: temperatureInput,
        fahrenheit: (temperatureInput * 9) / 5 + 32,
        kelvin: temperatureInput + 273.15,
      };
      break;
    case "fahrenheit":
      result = {
        celsius: ((temperatureInput - 32) * 5) / 9,
        fahrenheit: temperatureInput,
        kelvin: ((temperatureInput - 32) * 5) / 9 + 273.15,
      };
      break;
    case "kelvin":
      result = {
        celsius: temperatureInput - 273.15,
        fahrenheit: ((temperatureInput - 273.15) * 9) / 5 + 32,
        kelvin: temperatureInput,
      };
      break;
    default:
      alert("Invalid unit selected.");
      return;
  }

  const resultText = `Celsius: ${result.celsius.toFixed(2)}°C<br>
                        Fahrenheit: ${result.fahrenheit.toFixed(2)}°F<br>
                        Kelvin: ${result.kelvin.toFixed(2)}K`;
  document.getElementById("result").innerHTML = resultText;
}
