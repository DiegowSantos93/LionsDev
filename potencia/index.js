const prompt = require("prompt-sync")({ sigint: true });

let numero = +prompt('Digite um número: ');
let expoente = +prompt('Digite o expoente: ');

let resultado = 0
let numeroMultiplicado = numero

for (let x = 0; x < expoente; x++) {
    for (let j = 0; j < numero; j++) {
        resultado += numeroMultiplicado
    }
    numeroMultiplicado = resultado
}
    console.log(`${resultado}`)
