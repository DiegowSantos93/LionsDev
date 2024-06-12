let numeros = [];

console.log("Digite 2 valores númericos");
process.stdin.on("data", function (data) {
  let resposta = Number(data.toString().trim());
  numeros.push(resposta);

  if (numeros.length == 2) {
    if (numeros[0] == numeros[1]) {
      let soma = numeros[0] + numeros[1]
      console.log('Os dois números são iguais, então a soma dos dois números é: \n', numeros[0], '+', numeros[1], '=', + soma)
      if (soma % 2 == 0) {
        console.log('A soma dos dois números é par.')
      } else {
        console.log('A soma dos dois números é impar.')
      }
    } if (numeros[0] != numeros[1]) {
      let multiplicacao = numeros[0] * numeros[1]
      console.log('Os dois números são diferentes, então a multiplicação dos números é: \n', numeros[0], 'X', numeros[1], '=', + multiplicacao)
      if (multiplicacao % 2 == 0) {
        console.log('O resultado da multiplicação dos dois números é par.')
      } else {
        console.log('O resultado da multiplicação dos dois números é impar.')
      }
    }
    process.exit();
  }
})