let dados = [];

console.log("Vamos calcular seu IMC, para isso preciso dos seguintes dados (separados por vírgula): \n", "Peso: \n", "Altura:");
process.stdin.on("data", function (data) {
  let respostaDados = Number(data.toString().trim());
  dados.push(respostaDados);

  if (dados.length == 2) {
    let alturaAoQuadrado = dados[1] ** 2;
    let IMC = dados[0] / alturaAoQuadrado;
    if (IMC <= 18.5) {
      console.log("Seu IMC é: ", + IMC + ". Você está abaixo do peso");
    } else if (IMC <= 24.9) {
      console.log("Seu IMC é: ", + IMC + ". Você está no peso ideal. Parabéns!");
    } else if (IMC <= 29.9) {
      console.log("Seu IMC é: ", + IMC + ". Você está levemente acima do peso.");
    } else if (IMC <= 34.9) {
      console.log("Seu IMC é: ", + IMC + ". Você está com obsesidade grau I.");
    } else if (IMC <= 39.9) {
      console.log("Seu IMC é: ", + IMC + ". Você está com obesidade grau II (severa).");
    } else if (IMC >= 40) {
      console.log("Seu IMC é: ", + IMC + ". Você está com obesidade grau III (mórbida).");
    }

    process.exit();
  }
});
