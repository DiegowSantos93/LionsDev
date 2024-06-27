console.log('Digite sua idade:');
process.stdin.once("data", function(data){
const anoAtual = 2024;

let idade = parseInt(data.toString().trim());
let ano = anoAtual - idade;

console.log('Você nasceu em: ' + ano);

if (idade >= 18){
console.log("Você já possui CNH?");
}else{
    console.log('Que pena, ainda não podemos iniciar seu processo de habilitação!')
}

process.stdin.once('data', function(data){
    let processoCNH = (data.toString().trim());
if (processoCNH == "sim" || processoCNH == "Sim" ){
    console.log ('Bacana, só aproveitar sua CNH!');
} else {
    console.log('Quer iniciar o processo da sua habilitação?')
}
    process.exit();

})});




