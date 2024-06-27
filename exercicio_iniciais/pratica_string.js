/// EXERCICIO DO DIA 09/05
let nome = "";
let idade = "";

console.log("Qual seu nome?");

process.stdin.once("data", function(data){
    nome = data.toString();

    console.log("Quantos anos você tem?");
    process.stdin.once("data", function(data){
        idade = data.toString();

    console.log('Ah, então', nome.trim(), 'você tem', idade.trim(), 'anos!')
    process.exit();
})})


/// EXERCICIO DO DIA 13/05
process.stdout.write('Digite sua idade:  \n');

process.stdin.once("data", function(data){
const anoAtual = 2024;

let idade = parseInt(data.toString().trim());
let ano = anoAtual - idade;

process.stdout.write('Você nasceu em: ' + ano);

process.exit();

});

// MESMO CÓDIGO MAS COM "console.log";
console.log('Digite sua idade:');
process.stdin.once("data", function(data){
const anoAtual = 2024;

let idade = parseInt(data.toString().trim());
let ano = anoAtual - idade;

console.log('Você nasceu em: ' + ano);

process.exit();

});

