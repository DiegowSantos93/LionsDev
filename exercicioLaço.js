// for(let impar = 100; impar < 200; impar++){
// if (impar % 2 != 0){
//     console.log(impar);    
// } 
// }




console.log('Digite uma tabuada');
process.stdin.once('data', function(data){
    let tabuada = Number(data.toString().trim());

for(let multiplicacao = 1; multiplicacao <= 10; multiplicacao++){
    let resultado = tabuada * multiplicacao
console.log(multiplicacao + ' X ' + tabuada + ' = ' + resultado);
}

process.exit();

})