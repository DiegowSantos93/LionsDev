const prompt = require("prompt-sync")({ sigint: true });

let texto = prompt('Digite seu texto: ');

let textoEditado = texto.split(/[. ,:!?]/).filter(Boolean)

let palavra = 0

let repeticao = 0

for (let x = 0; x < textoEditado.length; x++) {
    textoEditado = textoEditado[x].toLowerCase();

    if (textoEditado[x]){
        repeticao[x]++;
    } else {
        repeticao[x] = 1
    }
}

console.log(textoEditado.length)
console.log(repeticao)