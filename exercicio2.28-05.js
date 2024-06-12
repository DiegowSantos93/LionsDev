let notas = [];

console.log("Digite o nome de um aluno");
process.stdin.once("data", function (data) {
  let nomeAluno = data.toString().trim();

  console.log("Digite as 4 notas do " + nomeAluno);
  process.stdin.on("data", function (data) {
    let notasAluno = Number(data.toString().trim());
    notas.push(notasAluno);

    let media = (notas[0] + notas[1] + notas[2] + notas[3]) / 4;

    if (notas.length == 4) {
      console.log(media);
      if (media >= 7) {
        console.log("O aluno " + nomeAluno + " foi aprovado.");
      } else {
        console.log("O aluno " + nomeAluno + " foi reprovado.");
      }
      process.exit();
    }
  });
});
