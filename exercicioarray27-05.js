// let numeros = [];

// console.log('Digite um número');
// process.stdin.on("data", function (data){
// let resposta = Number(data.toString().trim());

// if (numeros.length > 14) {
//     console.log('Aqui estão os numeros digitados:');
//     for(let x = 0; numeros.length > x; x++){
//         console.log(numeros[x]);
//     }

// process.exit();

// } else {
//     numeros.push(resposta);
//     console.log('Insira mais um número');
// }
// })
/// com For


let numeros = [];

console.log('Digite um número');
process.stdin.on("data", function (data){
let resposta = Number(data.toString().trim());

if (numeros.length > 14) {
    console.log('Aqui estão os numeros digitados:');
    numeros.forEach(function(elemento) {
        console.log(elemento);
    });

process.exit();

} else {
    numeros.push(resposta);
    console.log('Insira mais um número');
}
})
/// com forEach