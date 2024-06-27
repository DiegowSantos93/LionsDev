let resposta = [];

console.log('Digite 10 números entre 0 e 100 separados por vírgula');
process.stdin.on("data", function (data) {
let numerosResposta = (data.toString().trim());
let stringToArray = numerosResposta.split(",");
// resposta.push(stringToArray);

let intervalo1 = 0;
let intervalo2 = 0;
let intervalo3 = 0;
let intervalo4 = 0;

for (let x = 0; x <= 100; x++) {
    if (x >= 0 && x <=25 ) {
      intervalo1++;
      
    }
    //  if (resposta >= 26 && resposta <=50 ) {
    //     intervalo2.push++;
    // } if (resposta >= 51 && resposta <=75 ) {
    //     intervalo3.push++;
    // } else {
    //     intervalo4.push++;
    // }
  }

  console.log(intervalo1)
// let array1 = [];
// let array2 = [];
// let array3 = [];
// let array4 = [];

})

