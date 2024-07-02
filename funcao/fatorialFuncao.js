const prompt = require("prompt-sync")({ sigint: true });

let numero = Number(prompt('Digite um número para fazermos o fatorial: '));

function fatorizacao(numero){

let fatorial = 1;

    for (let x = 1; x <= numero; x++) {
    fatorial *= x
    }
    return fatorial
}

console.log(fatorizacao(numero));