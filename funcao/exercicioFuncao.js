const prompt = require("prompt-sync")({ sigint: true });

let solicitacao = Number(prompt('Digite a quantidade de notas que vai adicionar: '));

let notas = [];

for (let x = 0; x < solicitacao; x++) {
    let resposta = Number(prompt('Digite a nota: '));
    notas.push(resposta)
}

function soma(notas){
let somaNumeros = 0;

        for (let i = 0; i < notas.length; i++) {
         somaNumeros += notas[i];
        }
        return somaNumeros
}

function media(notas){
let mediaNumeros = soma(notas) / notas.length
    return mediaNumeros
}

console.log(`A média das ${solicitacao} notas é ${media(notas).toFixed(2)}!`)