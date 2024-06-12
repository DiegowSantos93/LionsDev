let numeros = [];

console.log('Digite 3 valores númericos');
process.stdin.on('data', function (data){
let resposta = Number(data.toString().trim());
numeros.push(resposta)

if (numeros.length == 3){
    let soma = numeros[0] + numeros[1];
    console.log('A soma dos 2 primeiros números é ' + soma)
    if (soma > numeros[2]){
        console.log('A soma dos 2 primeiros números é maior que o terceiro número digitado')
    } else {
        console.log('A soma dos 2 primeiros números é menor que o terceiro número digitado.')
    }
    process.exit();
}

})