function calcular(){
    const Altura = parseFloat(document.getElementById('altura1').value);
    const Peso = parseFloat(document.getElementById('peso1').value);

    let resultado = 0;

      if (isNaN(Altura) || isNaN(Peso)) {
        alert("Digite dois números válidos.");
        return;
      }
      if (Altura <= 0 || Peso <= 0) {
        alert("Digite valores positivos maiores que zero.");
        return;
        }
        resultado = Peso / (Altura * Altura);

      document.getElementById('resultado').innerHTML = `<strong>Resultado:</strong> ${resultado.toFixed(2)}`;

if (resultado < 18.5) {
  document.getElementById('pesoStatus').innerHTML = `<strong>Status:</strong> <span style="color: blue;"> Abaixo do peso ideal.`;
} else if (resultado >= 18.5 && resultado < 25) {
  document.getElementById('pesoStatus').innerHTML = `<strong>Status:</strong> <span style="color: green;"> Seu peso está ideal, parabéns!`;
} else if (resultado >= 25 && resultado < 30) {
  document.getElementById('pesoStatus').innerHTML = `<strong>Status:</strong> <span style="color: orange;"> Sobre o peso.`;
} else if (resultado >= 30 && resultado < 35) {
  document.getElementById('pesoStatus').innerHTML = `<strong>Status:</strong> <span style="color: red;"> Obesidade grau I.`;
} else if (resultado >= 35 && resultado < 40) {
  document.getElementById('pesoStatus').innerHTML = `<strong>Status:</strong> <span style="color: darkred;"> Obesidade grau II.`;
} else {
  document.getElementById('pesoStatus').innerHTML = `<strong>Status:</strong> <span style="color: purple;"> Superhumano...`;
}
}