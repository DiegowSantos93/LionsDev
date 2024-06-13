// Exemplo 1:
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Digite seu nome: ', (nome) => {
//     console.log(`Olá, ${nome}!`);
//     rl.close();
// });


// Exemplo 2:
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let resultado;

// rl.question("Digite um número: ", (num1) => {
//   rl.question("Digite o segundo número: ", (num2) => {
//     rl.question("Digite o terceiro número: ", (num3) => {
//       num1 = parseFloat(num1);
//       num2 = parseFloat(num2);
//       num3 = parseFloat(num3);
//       resultado = num1 + num2 + num3;
//       console.log("Valor da operação:", resultado);
//       rl.close();
//     });
//   });
// });


// Exemplo 3:
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let resultado;

let num1;
let num2;
let num3;
let contador = 0;

console.log('Digite um número:');

rl.on('line', (resposta) => {
contador++;
if (contador === 1){
    num1 = parseFloat(resposta);
    console.log('Digite o segundo número:');
} else if (contador === 2){
    num2 = parseFloat(resposta);
    console.log('Digite o terceiro número:');
} else if (contador === 3){
    num3 = parseFloat(resposta);
    resultado = num1 + num2 + num3  
    console.log(`O resultado da operação é: ${resultado}`)
    process.exit();
}
});

//teste