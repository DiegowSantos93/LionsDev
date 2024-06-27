console.log('Digite um número')
process.stdin.once('data', function (data){
let resposta = Number(data.toString().trim());
let resposta1 = resposta + 1;
let resposta2 = resposta - 1;

console.log(resposta1 + ' é o número sucessor do que digitou.');
console.log(resposta2 + ' é o número antecessor do que digitou.');

process.exit();

})