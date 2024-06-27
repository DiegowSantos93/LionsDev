let somaImpares = 0;
let quantidadePares = 0;
let quantidadeImpares = 0;
let quantidadeDivisiveisPor3 = 0;

for (let contagemImpares = 0; contagemImpares < 1000; contagemImpares++) {
    if (contagemImpares % 2 == 0) {
        quantidadePares++;
    } else {
        somaImpares += contagemImpares
        quantidadeImpares++;
    }
    if (contagemImpares % 3 == 0) {
        quantidadeDivisiveisPor3++;
    }
}

let mediaDivisiveisPor3 = somaImpares / quantidadeDivisiveisPor3;

console.log("A soma dos números ímpares é " + somaImpares);
console.log("A quantidade de números ímpares entre 0 a 999 é de " + quantidadeImpares + " números.");
console.log("A quantidade de números pares entre 0 a 999 é de " + quantidadePares + " números.");
console.log("A quantidade de números divisíveis por 3 é " + quantidadeDivisiveisPor3);
console.log("A média aritmética dos números divisíveis por 3 é " + mediaDivisiveisPor3);

process.exit();