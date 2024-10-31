function calcularIMC() {
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
    resultado.value = "Por favor, insira valores válidos!";
    return;
  }

  const imc = peso / (altura * altura);
  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Baixo peso";
  } else if (imc >= 18.5 && imc <= 24.9) {
    classificacao = "Peso normal";
  } else if (imc >= 25.0 && imc <= 29.9) {
    classificacao = "Sobrepeso";
  } else if (imc >= 30.0 && imc <= 34.9) {
    classificacao = "Obesidade grau I";
  } else if (imc >= 35.0 && imc <= 39.9) {
    classificacao = "Obesidade grau II";
  } else {
    classificacao = "Obesidade grau III";
  }

  resultado.value = `IMC: ${imc.toFixed(2)} - ${classificacao}`;
}
