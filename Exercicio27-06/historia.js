const prompt = require("prompt-sync")({ sigint: true });

let historia = prompt('Digite seu texto: ');

let palavras = historia.split(/[. ,:!?]/).filter(Boolean);

let numeroDePalavras = palavras.length;

let frequenciaPalavras = {};

for (let x = 0; x < palavras.length; x++) {
    let palavra = palavras[x].toLowerCase();

    if (frequenciaPalavras[palavra]){
        frequenciaPalavras[palavra]++;
    } else {
        frequenciaPalavras[palavra] = 1
    }
}

console.log(`Existem ${numeroDePalavras} palavras.`)
console.log('Essa é a frequência das palavras:\n',frequenciaPalavras)