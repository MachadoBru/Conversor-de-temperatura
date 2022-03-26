function CalculaConversao() {
  var temperaturaCelsius = parseFloat(document.getElementById("tempCelsius").value);
  var resultado = document.getElementById("resultadoFinal");
  var itemSelecionado = document.getElementById("escalaDeTemperatura");
  var tempSelecionada = itemSelecionado.options[itemSelecionado.selectedIndex].value;
  
  var fahrenheit = document.getElementById("fahrenheit").value;
  var kelvin = document.getElementById("kelvin").value;
  
  var valorFahrenheit = ((temperaturaCelsius * 1.8) + 32).toFixed(1);  //F = C x 1,8 + 32
  var valorKelvin = (temperaturaCelsius + 273).toFixed(1); //K = C + 273
  
  if(tempSelecionada == fahrenheit) {
    resultado.innerHTML = "A temperatura convertida é " + valorFahrenheit + " ºF.";
  } else if (tempSelecionada == kelvin) {
    resultado.innerHTML = "A temperatura convertida é " + valorKelvin + " K.";
  }
}