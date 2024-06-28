const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número para fazermos seu fatorial: ', (resposta) => {

let fatorial = 1

for (let x = 1; x <= resposta; x++) {
    fatorial *= x
}
rl.close();

console.log(fatorial)

});
