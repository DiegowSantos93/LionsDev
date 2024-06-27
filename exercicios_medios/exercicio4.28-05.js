let numeros = [];

console.log("Digite 2 valores númericos");
process.stdin.on("data", function (data) {
  let resposta = Number(data.toString().trim());
  numeros.push(resposta);

  if (numeros.length == 2) {
    if (numeros[0] == numeros[1]) {
      let soma = numeros[0] + numeros[1];
      if (soma % 2 == 0) {
        console.log(numeros[0], "+", numeros[1], "=", soma);
        console.log("A soma dos dois números é par");
      }
    }
    if (numeros[0] != numeros[1]) {
      let multiplicacao = numeros[0] * numeros[1];
      console.log(numeros[0], "X", numeros[1], "=", multiplicacao);
      if (multiplicacao % 2 == 0) {
        console.log("A multiplicação dos números é par.");
      } else {
        console.log("A multiplicação dos números é ímpar.");
      }
    }
    process.exit();
  }
});
