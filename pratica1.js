// console.log('Olá, qual seu nome?')
// let nome = '';
// process.stdin.once('data', function (data) {
//     nome = data.toString().trim()
//     console.log('E qual sua idade',nome,"?");
// });


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

//Comentário novo