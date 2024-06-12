console.log('Digite 10 números entre 0 e 100 separados por vírgula');
process.stdin.on("data", function (data) {
  let numerosResposta = (data.toString().trim());
  let stringToArray = numerosResposta.split(",");

  let intervalo1 = 0;
  let intervalo2 = 0;
  let intervalo3 = 0;
  let intervalo4 = 0;

  // Funciona com forEach e com for;
  // Com forEach é mais fácil!

   // stringToArray.forEach(function (dado, index, array) {
  for (let result = 0; result < stringToArray.length; result++) {
    let dado = stringToArray[result];
    if (dado >= 0 && dado <= 25) {
      intervalo1++;
    } if (dado >= 26 && dado <= 50) {
      intervalo2++;
    } if (dado >= 51 && dado <= 75) {
      intervalo3++;
    } if (dado >= 76 && dado <= 100) {
      intervalo4++;
    }
  }
  // });

  if (intervalo1.length < 1) {
    console.log('Não existem números entre 0 e 25.')
  } else {
    console.log('Existe(m) ' + intervalo1 + ' número(s) entre 0 e 25.')
  }
  if (intervalo2.length < 1) {
    console.log('Não existem números entre 26 e 50.')
  } else {
    console.log('Existe(m) ' + intervalo2 + ' número(s) entre 26 e 50.')
  }
  if (intervalo3.length < 1) {
    console.log('Não existem números entre 51 e 75.')
  } else {
    console.log('Existe(m) ' + intervalo3 + ' número(s) entre 51 e 75.')
  }
  if (intervalo4.length < 1) {
    console.log('Não existem números entre 76 e 100.')
  } else {
    console.log('Existe(m) ' + intervalo4 + ' número(s) entre 76 e 100.')
  }

  process.exit();

})
