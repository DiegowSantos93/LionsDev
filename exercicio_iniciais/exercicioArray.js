let notas = [];

console.log("Digite uma nota");
process.stdin.once("data", function (data) {
  let resposta1 = Number(data.toString().trim().toLowerCase());
  notas.push(resposta1);

  console.log("Digite uma outra nota");
  process.stdin.once("data", function (data) {
    let resposta2 = Number(data.toString().trim().toLowerCase());
    notas.push(resposta2);

    console.log("Digite mais uma nota");
    process.stdin.once("data", function (data) {
      let resposta3 = Number(data.toString().trim().toLowerCase());
      notas.push(resposta3);

      let media = (notas[0] + notas[1] + notas[2]) / 3;
      console.log("A média é " + media);

      if (notas[0] > notas[1] && notas[0] > notas[2]) {
        console.log("A maior nota é " + notas[0]);
      } else if (notas[1] > notas[0] && notas[1] > notas[2]) {
        console.log("A maior nota é " + notas[1]);
      } else if (notas[2] > notas[0] && notas[2] > notas[1]) {
        console.log("A maior nota é " + notas[2]);
      }

      if (notas[0] < notas[1] && notas[0] < notas[2]) {
        console.log("A menor nota é " + notas[0]);
      } else if (notas[1] < notas[0] && notas[1] < notas[2]) {
        console.log("A menor nota é " + notas[1]);
      } else if (notas[2] < notas[0] && notas[2] < notas[1]) {
        console.log("A menor nota é " + notas[2]);
      }

      process.exit();
    });
  });
});
