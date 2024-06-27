let numeros = [];
let numerosPar = [];
let numerosImpar = [];

console.log('Digite um número');
process.stdin.on("data", function (data) {
    let resposta = Number(data.toString().trim());

    if (numeros.length > 14) {
        console.log('Aqui estão os numeros digitados:');
        numeros.forEach(function (numero) {
            console.log(numero);
            if (numero % 2 == 0) {
                numerosPar.push(numero)
            } else {
                numerosImpar.push(numero)
            }
        });
        
        console.log('Números pares')
        numerosPar.forEach(function (numero, index, array) {
            console.log(numero)
        });

        console.log('Números ímpares')
        numerosImpar.forEach(function (numero, index, array) {
            console.log(numero)
        });

        process.exit();

    } else {
        numeros.push(resposta);
        console.log('Insira mais um número');
    }

})