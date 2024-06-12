let dadosPessoais = {
  nome: "",
  idade: "",
  CNH: "",
};

process.stdout.write("Digite o seu nome: \n");
process.stdin.once("data", function (data) {
  dadosPessoais.nome = data.toString().trim();

  process.stdout.write("Digite a sua idade: \n");
  process.stdin.once("data", function (data) {
    dadosPessoais.idade = data.toString().trim();

    process.stdout.write("Você possui CNH?: \n");
    process.stdin.once("data", function (data) {
      dadosPessoais.CNH = data.toString().trim().toLowerCase();

      if (dadosPessoais.CNH == "sim") {
        process.stdout.write("Bacana " + dadosPessoais.nome + ", aproveite a CNH. \n");
      } else if (dadosPessoais.CNH == "não") {
        process.stdout.write("Com " + dadosPessoais.idade + " anos e não possui CNH, " + dadosPessoais.nome +"? \n");
      }

      process.exit();
    });
  });
});
