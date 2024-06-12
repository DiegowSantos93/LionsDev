let hobbies = [];

console.log('Diga um hobbie ou digite "Sair".');
process.stdin.on("data", function (data) {
  let respostaHobbies = data.toString().trim().toLowerCase();
  if (respostaHobbies == "sair") {
    let qtdHobbies = 0;
    hobbies.forEach((respostaHobbies) => {
      qtdHobbies++;
      console.log(qtdHobbies + "." + respostaHobbies);
    });
    process.exit();
  } else {
    hobbies.push(respostaHobbies);
    console.log(
      'Hobbie adicionado. Adicione novo hobbie ou digite "Sair" para encerrar.'
    );
  }
});
