let somaImpares = 0;
let somaPares = 0;
let qtdPares = 0;
let qtdImpares = 0;

for (let contagem = 0; contagem <= 999; contagem++) {
  if (contagem % 2 !== 0) {
    qtdImpares++;
    somaImpares = somaImpares + contagem;
  } else {
    qtdPares++;
    somaPares = somaPares + contagem;
  }
}

let mediaPares = somaPares / qtdPares;
let mediaImpares = somaImpares / qtdImpares;

console.log(qtdPares);
console.log(qtdImpares);
console.log(somaImpares);
console.log(somaPares);
console.log(mediaImpares);
console.log(mediaPares);

if (mediaImpares > mediaPares) {
  console.log("A média de Impares é maior que a média de Pares");
} else {
  console.log("A média dos Pares é maior que a média dos Impares");
}
