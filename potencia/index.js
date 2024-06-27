const prompt = require("prompt-sync")({ sigint: true });

let numero = +prompt('Digite um número: ');
let expoente = +prompt('Digite o expoente: ');

let resultado = 1; // Inicializa com 1, pois qualquer número elevado a 0 é 1
let numeroMultiplicado = numero;

for (let x = 1; x <= expoente; x++) {
    let acumulador = 0;
    for (let j = 0; j < numero; j++) {
        acumulador += numeroMultiplicado;
    }
    numeroMultiplicado = acumulador;
}

console.log(`Resultado de ${numero} elevado a ${expoente} é: ${numeroMultiplicado}`);
