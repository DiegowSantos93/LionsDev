let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 99];

console.log("Digite um número");
process.stdin.on("data", function (data) {
  let respostaNumeros = Number(data.toString().trim());

  numeros.forEach(function (numeros, index, array) {
    if (respostaNumeros == numeros) {
      console.log("O número está na lista");
      process.exit();
    }
  });
  console.log("O número não está na lista.");

  process.exit();
});
