// Exercicio 1
// let nome = '';
// console.log("Digite um nome");
// process.stdin.once("data", function (data) {
//   nome = data.toString().trim();
//   console.log(nome);
// });

// Exercicio 2
// let par = true
// let numero = 11
// if (numero % 2 == 0){
//     console.log(par)
// } else {
// console.log('impar')
// }

// Exercicio 3
// let idade = 18;
// let mensagem
// if(idade >= 16){
//     mensagem = 'Você pode votar.'
// } else {
//     mensagem = 'Você não pode votar.'
// }
// console.log(mensagem)

// Exercicio 4
// 'é igual ao exercicio 3!'

// // Exercicio 5
// let numeros = [1,2,3,4,5]
// let soma = 0
// for (let i = 0; i < numeros.length; i++){
//     if (numeros[i] % 2 != 0){
//         soma+= numeros[i]
//     }
// }
// // console.log(soma)

// Exercicio 6
// A
let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]
// let soma = 0;
// let media = 0;
// for (let x = 0; x < notas.length; x++) {
//     soma += notas[x]
//     media = soma / notas.length
// }
// console.log(media)

// B
// let maiorNota = notas[0];
// let menorNota = notas[0];

// for (let i = 0; i < notas.length; i++){
//     if (notas[i] > maiorNota){
//         maiorNota = notas[i]
//     }
//     if (notas[i] < menorNota){
//         menorNota = notas[i]
//     }
// }

// // notas.forEach(function(nota) {
// //     if (nota > maiorNota){
// //         maiorNota = nota
// //     } if (nota < menorNota){
// //         menorNota = nota
// //     }
// // });

// console.log(maiorNota)
// console.log(menorNota)

// C
// let acimaMédia = 0
// for (let x = 0; x < notas.length; x++) {
//     if (notas[x] >= media) {
//         acimaMédia++
//     }
// }
// console.log(acimaMédia)

// D
// notas.push(8.1)
// console.log(notas)

//E
// let reprovados = 0;
// for (let z = 0; z < notas.length; z++) {
//     if (notas[z] < 6.0){
//         reprovados++
//         console.log('são', reprovados, 'reprovados')
//     }
// }